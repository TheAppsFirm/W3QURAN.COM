/**
 * Surah At-Tawbah (9) - Treebank Data (Ayahs 1-10)
 * The Repentance - 129 Ayahs total
 *
 * Theme: Repentance, treaties with polytheists, hypocrites, Jihad
 * Revelation: Madani
 * Note: Only surah without Bismillah
 */

const SURAH_9_TREEBANK = {
  1: {
    text: 'بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ',
    translation: {
      en: '[This is a declaration of] disassociation from Allah and His Messenger to those with whom you had made a treaty among the polytheists.',
      ur: 'اللہ اور اس کے رسول کی طرف سے ان مشرکوں سے براءت ہے جن سے تم نے معاہدہ کیا تھا۔'
    },
    words: [
      { id: '9:1:1', arabic: 'بَرَاءَةٌ', transliteration: 'bara\'atun', pos: ['N'], posLabel: 'N', root: 'ب ر أ', meaning: { en: 'A declaration of disassociation', ur: 'براءت کا اعلان' } },
      { id: '9:1:2', arabic: 'مِّنَ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:1:3', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:1:4', arabic: 'وَرَسُولِهِ', transliteration: 'wa-rasulihi', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ر س ل', meaning: { en: 'and His Messenger', ur: 'اور اس کے رسول' } },
      { id: '9:1:5', arabic: 'إِلَى', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کی طرف' } },
      { id: '9:1:6', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those', ur: 'جن' } },
      { id: '9:1:7', arabic: 'عَاهَدتُّم', transliteration: '\'ahadtum', pos: ['V'], posLabel: 'V', root: 'ع ه د', meaning: { en: 'you had made a treaty', ur: 'تم نے معاہدہ کیا' } },
      { id: '9:1:8', arabic: 'مِّنَ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'among', ur: 'میں سے' } },
      { id: '9:1:9', arabic: 'الْمُشْرِكِينَ', transliteration: 'al-mushrikin', pos: ['N'], posLabel: 'N', root: 'ش ر ك', meaning: { en: 'the polytheists', ur: 'مشرکوں' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'جار + مجرور' },
      { from: 6, to: 7, label: 'موصول + صلة' },
      { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  2: {
    text: 'فَسِيحُوا فِي الْأَرْضِ أَرْبَعَةَ أَشْهُرٍ وَاعْلَمُوا أَنَّكُمْ غَيْرُ مُعْجِزِي اللَّهِ وَأَنَّ اللَّهَ مُخْزِي الْكَافِرِينَ',
    translation: {
      en: 'So travel freely [O disbelievers] throughout the land [during] four months but know that you cannot escape Allah and that Allah will disgrace the disbelievers.',
      ur: 'پس زمین میں چار مہینے چل پھر لو اور جان لو کہ تم اللہ کو عاجز نہیں کر سکتے اور بےشک اللہ کافروں کو رسوا کرنے والا ہے۔'
    },
    words: [
      { id: '9:2:1', arabic: 'فَسِيحُوا', transliteration: 'fa-sihu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'س ي ح', meaning: { en: 'So travel freely', ur: 'پس چل پھر لو' } },
      { id: '9:2:2', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:2:3', arabic: 'الْأَرْضِ', transliteration: 'al-ardi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the land', ur: 'زمین' } },
      { id: '9:2:4', arabic: 'أَرْبَعَةَ', transliteration: 'arba\'ata', pos: ['N'], posLabel: 'N', root: 'ر ب ع', meaning: { en: 'four', ur: 'چار' } },
      { id: '9:2:5', arabic: 'أَشْهُرٍ', transliteration: 'ashhur', pos: ['N'], posLabel: 'N', root: 'ش ه ر', meaning: { en: 'months', ur: 'مہینے' } },
      { id: '9:2:6', arabic: 'وَاعْلَمُوا', transliteration: 'wa-\'lamu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ع ل م', meaning: { en: 'and know', ur: 'اور جان لو' } },
      { id: '9:2:7', arabic: 'أَنَّكُمْ', transliteration: 'annakum', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that you', ur: 'کہ تم' } },
      { id: '9:2:8', arabic: 'غَيْرُ', transliteration: 'ghayru', pos: ['N'], posLabel: 'N', root: 'غ ي ر', meaning: { en: 'cannot', ur: 'نہیں' } },
      { id: '9:2:9', arabic: 'مُعْجِزِي', transliteration: 'mu\'jizi', pos: ['N'], posLabel: 'N', root: 'ع ج ز', meaning: { en: 'escape', ur: 'عاجز کرنے والے' } },
      { id: '9:2:10', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کو' } },
      { id: '9:2:11', arabic: 'وَأَنَّ', transliteration: 'wa-anna', pos: ['CONJ', 'ACC'], posLabel: 'CONJ+ACC', root: null, meaning: { en: 'and that', ur: 'اور بےشک' } },
      { id: '9:2:12', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:2:13', arabic: 'مُخْزِي', transliteration: 'mukhzi', pos: ['N'], posLabel: 'N', root: 'خ ز ي', meaning: { en: 'will disgrace', ur: 'رسوا کرنے والا' } },
      { id: '9:2:14', arabic: 'الْكَافِرِينَ', transliteration: 'al-kafirin', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'the disbelievers', ur: 'کافروں کو' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 1, to: 6, label: 'عطف' }
      ],
    },
  },
  3: {
    text: 'وَأَذَانٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى النَّاسِ يَوْمَ الْحَجِّ الْأَكْبَرِ أَنَّ اللَّهَ بَرِيءٌ مِّنَ الْمُشْرِكِينَ وَرَسُولُهُ فَإِن تُبْتُمْ فَهُوَ خَيْرٌ لَّكُمْ وَإِن تَوَلَّيْتُمْ فَاعْلَمُوا أَنَّكُمْ غَيْرُ مُعْجِزِي اللَّهِ وَبَشِّرِ الَّذِينَ كَفَرُوا بِعَذَابٍ أَلِيمٍ',
    translation: {
      en: 'And an announcement from Allah and His Messenger to the people on the day of the greater pilgrimage that Allah is disassociated from the disbelievers, and so is His Messenger. So if you repent, that is best for you; but if you turn away - then know that you will not escape Allah. And give tidings to those who disbelieve of a painful punishment.',
      ur: 'اور اللہ اور اس کے رسول کی طرف سے حج اکبر کے دن لوگوں کو اعلان ہے کہ اللہ مشرکوں سے بری ہے اور اس کا رسول بھی۔ پس اگر تم توبہ کرو تو یہ تمہارے لیے بہتر ہے اور اگر منہ پھیرو تو جان لو کہ تم اللہ کو عاجز نہیں کر سکتے۔ اور کافروں کو دردناک عذاب کی خبر دے دو۔'
    },
    words: [
      { id: '9:3:1', arabic: 'وَأَذَانٌ', transliteration: 'wa-adhanun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'أ ذ ن', meaning: { en: 'And an announcement', ur: 'اور اعلان' } },
      { id: '9:3:2', arabic: 'مِّنَ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'کی طرف سے' } },
      { id: '9:3:3', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:3:4', arabic: 'وَرَسُولِهِ', transliteration: 'wa-rasulihi', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ر س ل', meaning: { en: 'and His Messenger', ur: 'اور اس کے رسول' } },
      { id: '9:3:5', arabic: 'إِلَى', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو' } },
      { id: '9:3:6', arabic: 'النَّاسِ', transliteration: 'an-nasi', pos: ['N'], posLabel: 'N', root: 'ن و س', meaning: { en: 'the people', ur: 'لوگوں' } },
      { id: '9:3:7', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'on the day of', ur: 'دن' } },
      { id: '9:3:8', arabic: 'الْحَجِّ', transliteration: 'al-hajji', pos: ['N'], posLabel: 'N', root: 'ح ج ج', meaning: { en: 'the pilgrimage', ur: 'حج' } },
      { id: '9:3:9', arabic: 'الْأَكْبَرِ', transliteration: 'al-akbari', pos: ['ADJ'], posLabel: 'ADJ', root: 'ك ب ر', meaning: { en: 'the greater', ur: 'اکبر' } },
      { id: '9:3:10', arabic: 'أَنَّ', transliteration: 'anna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:3:11', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:3:12', arabic: 'بَرِيءٌ', transliteration: 'bari\'un', pos: ['ADJ'], posLabel: 'ADJ', root: 'ب ر أ', meaning: { en: 'is disassociated', ur: 'بری ہے' } },
      { id: '9:3:13', arabic: 'مِّنَ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:3:14', arabic: 'الْمُشْرِكِينَ', transliteration: 'al-mushrikin', pos: ['N'], posLabel: 'N', root: 'ش ر ك', meaning: { en: 'the polytheists', ur: 'مشرکوں' } },
      { id: '9:3:15', arabic: 'وَرَسُولُهُ', transliteration: 'wa-rasuluhu', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ر س ل', meaning: { en: 'and so is His Messenger', ur: 'اور اس کا رسول بھی' } },
      { id: '9:3:16', arabic: 'فَإِن', transliteration: 'fa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'So if', ur: 'پس اگر' } },
      { id: '9:3:17', arabic: 'تُبْتُمْ', transliteration: 'tubtum', pos: ['V'], posLabel: 'V', root: 'ت و ب', meaning: { en: 'you repent', ur: 'تم توبہ کرو' } },
      { id: '9:3:18', arabic: 'فَهُوَ', transliteration: 'fa-huwa', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'then it', ur: 'تو یہ' } },
      { id: '9:3:19', arabic: 'خَيْرٌ', transliteration: 'khayrun', pos: ['N'], posLabel: 'N', root: 'خ ي ر', meaning: { en: 'is best', ur: 'بہتر ہے' } },
      { id: '9:3:20', arabic: 'لَّكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for you', ur: 'تمہارے لیے' } },
      { id: '9:3:21', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'but if', ur: 'اور اگر' } },
      { id: '9:3:22', arabic: 'تَوَلَّيْتُمْ', transliteration: 'tawallaytum', pos: ['V'], posLabel: 'V', root: 'و ل ي', meaning: { en: 'you turn away', ur: 'تم منہ پھیرو' } },
      { id: '9:3:23', arabic: 'فَاعْلَمُوا', transliteration: 'fa-\'lamu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ع ل م', meaning: { en: 'then know', ur: 'تو جان لو' } },
      { id: '9:3:24', arabic: 'أَنَّكُمْ', transliteration: 'annakum', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that you', ur: 'کہ تم' } },
      { id: '9:3:25', arabic: 'غَيْرُ', transliteration: 'ghayru', pos: ['N'], posLabel: 'N', root: 'غ ي ر', meaning: { en: 'will not', ur: 'نہیں' } },
      { id: '9:3:26', arabic: 'مُعْجِزِي', transliteration: 'mu\'jizi', pos: ['N'], posLabel: 'N', root: 'ع ج ز', meaning: { en: 'escape', ur: 'عاجز کرنے والے' } },
      { id: '9:3:27', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کو' } },
      { id: '9:3:28', arabic: 'وَبَشِّرِ', transliteration: 'wa-bashshir', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ب ش ر', meaning: { en: 'And give tidings', ur: 'اور خبر دو' } },
      { id: '9:3:29', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'to those who', ur: 'جنہوں نے' } },
      { id: '9:3:30', arabic: 'كَفَرُوا', transliteration: 'kafaru', pos: ['V'], posLabel: 'V', root: 'ك ف ر', meaning: { en: 'disbelieve', ur: 'کفر کیا' } },
      { id: '9:3:31', arabic: 'بِعَذَابٍ', transliteration: 'bi-\'adhabin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ع ذ ب', meaning: { en: 'of a punishment', ur: 'عذاب کی' } },
      { id: '9:3:32', arabic: 'أَلِيمٍ', transliteration: 'alimin', pos: ['ADJ'], posLabel: 'ADJ', root: 'أ ل م', meaning: { en: 'painful', ur: 'دردناک' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'جار + مجرور' },
      { from: 8, to: 9, label: 'موصوف + صفت' },
      { from: 11, to: 12, label: 'موصوف + صفت' },
      { from: 13, to: 14, label: 'جار + مجرور' },
      { from: 16, to: 17, label: 'شرط + فعل' },
      { from: 21, to: 22, label: 'شرط + فعل' },
      { from: 22, to: 23, label: 'عطف' },
      { from: 23, to: 28, label: 'عطف' },
      { from: 29, to: 30, label: 'موصول + صلة' },
      { from: 31, to: 32, label: 'موصوف + صفت' }
      ],
    },
  },
  4: {
    text: 'إِلَّا الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ ثُمَّ لَمْ يَنقُصُوكُمْ شَيْئًا وَلَمْ يُظَاهِرُوا عَلَيْكُمْ أَحَدًا فَأَتِمُّوا إِلَيْهِمْ عَهْدَهُمْ إِلَىٰ مُدَّتِهِمْ إِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ',
    translation: {
      en: 'Except for those among the polytheists with whom you made a treaty and who have not broken any of its terms nor supported anyone against you - so complete for them their treaty until their term [has ended]. Indeed, Allah loves the righteous.',
      ur: 'مگر وہ مشرک جن سے تم نے معاہدہ کیا پھر انہوں نے تم سے کچھ کمی نہیں کی اور نہ تمہارے خلاف کسی کی مدد کی۔ پس ان سے ان کا معاہدہ ان کی مدت تک پورا کرو۔ بےشک اللہ متقیوں کو پسند کرتا ہے۔'
    },
    words: [
      { id: '9:4:1', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'Except for', ur: 'مگر' } },
      { id: '9:4:2', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those', ur: 'وہ جنہوں نے' } },
      { id: '9:4:3', arabic: 'عَاهَدتُّم', transliteration: '\'ahadtum', pos: ['V'], posLabel: 'V', root: 'ع ه د', meaning: { en: 'you made a treaty', ur: 'تم نے معاہدہ کیا' } },
      { id: '9:4:4', arabic: 'مِّنَ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'among', ur: 'میں سے' } },
      { id: '9:4:5', arabic: 'الْمُشْرِكِينَ', transliteration: 'al-mushrikin', pos: ['N'], posLabel: 'N', root: 'ش ر ك', meaning: { en: 'the polytheists', ur: 'مشرکوں' } },
      { id: '9:4:6', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '9:4:7', arabic: 'لَمْ', transliteration: 'lam', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:4:8', arabic: 'يَنقُصُوكُمْ', transliteration: 'yanqusukum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ن ق ص', meaning: { en: 'broken against you', ur: 'تم سے کمی کی' } },
      { id: '9:4:9', arabic: 'شَيْئًا', transliteration: 'shay\'an', pos: ['N'], posLabel: 'N', root: 'ش ي أ', meaning: { en: 'anything', ur: 'کچھ' } },
      { id: '9:4:10', arabic: 'وَلَمْ', transliteration: 'wa-lam', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'nor', ur: 'اور نہ' } },
      { id: '9:4:11', arabic: 'يُظَاهِرُوا', transliteration: 'yuzahiru', pos: ['V'], posLabel: 'V', root: 'ظ ه ر', meaning: { en: 'supported', ur: 'مدد کی' } },
      { id: '9:4:12', arabic: 'عَلَيْكُمْ', transliteration: '\'alaykum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'against you', ur: 'تمہارے خلاف' } },
      { id: '9:4:13', arabic: 'أَحَدًا', transliteration: 'ahadan', pos: ['N'], posLabel: 'N', root: 'و ح د', meaning: { en: 'anyone', ur: 'کسی کی' } },
      { id: '9:4:14', arabic: 'فَأَتِمُّوا', transliteration: 'fa-atimmu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ت م م', meaning: { en: 'so complete', ur: 'پس پورا کرو' } },
      { id: '9:4:15', arabic: 'إِلَيْهِمْ', transliteration: 'ilayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for them', ur: 'ان سے' } },
      { id: '9:4:16', arabic: 'عَهْدَهُمْ', transliteration: '\'ahdahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ع ه د', meaning: { en: 'their treaty', ur: 'ان کا معاہدہ' } },
      { id: '9:4:17', arabic: 'إِلَىٰ', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'until', ur: 'تک' } },
      { id: '9:4:18', arabic: 'مُدَّتِهِمْ', transliteration: 'muddatihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'م د د', meaning: { en: 'their term', ur: 'ان کی مدت' } },
      { id: '9:4:19', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:4:20', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:4:21', arabic: 'يُحِبُّ', transliteration: 'yuhibbu', pos: ['V'], posLabel: 'V', root: 'ح ب ب', meaning: { en: 'loves', ur: 'پسند کرتا ہے' } },
      { id: '9:4:22', arabic: 'الْمُتَّقِينَ', transliteration: 'al-muttaqin', pos: ['N'], posLabel: 'N', root: 'و ق ي', meaning: { en: 'the righteous', ur: 'متقیوں کو' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'موصول + صلة' },
      { from: 4, to: 5, label: 'جار + مجرور' },
      { from: 7, to: 8, label: 'نفی + فعل' },
      { from: 10, to: 11, label: 'نفی + فعل' },
      { from: 11, to: 14, label: 'عطف' },
      { from: 17, to: 18, label: 'جار + مجرور' }
      ],
    },
  },
  5: {
    text: 'فَإِذَا انسَلَخَ الْأَشْهُرُ الْحُرُمُ فَاقْتُلُوا الْمُشْرِكِينَ حَيْثُ وَجَدتُّمُوهُمْ وَخُذُوهُمْ وَاحْصُرُوهُمْ وَاقْعُدُوا لَهُمْ كُلَّ مَرْصَدٍ فَإِن تَابُوا وَأَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ فَخَلُّوا سَبِيلَهُمْ إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ',
    translation: {
      en: 'And when the sacred months have passed, then kill the polytheists wherever you find them and capture them and besiege them and sit in wait for them at every place of ambush. But if they should repent, establish prayer, and give zakah, let them [go] on their way. Indeed, Allah is Forgiving and Merciful.',
      ur: 'پھر جب حرمت والے مہینے گزر جائیں تو مشرکوں کو جہاں پاؤ قتل کرو اور انہیں پکڑو اور گھیرو اور ہر گھات کی جگہ ان کی تاک میں بیٹھو۔ پھر اگر وہ توبہ کریں، نماز قائم کریں اور زکوٰۃ دیں تو ان کا راستہ چھوڑ دو۔ بےشک اللہ بخشنے والا مہربان ہے۔'
    },
    words: [
      { id: '9:5:1', arabic: 'فَإِذَا', transliteration: 'fa-idha', pos: ['CONJ', 'T'], posLabel: 'CONJ+T', root: null, meaning: { en: 'And when', ur: 'پھر جب' } },
      { id: '9:5:2', arabic: 'انسَلَخَ', transliteration: 'insalakha', pos: ['V'], posLabel: 'V', root: 'س ل خ', meaning: { en: 'have passed', ur: 'گزر جائیں' } },
      { id: '9:5:3', arabic: 'الْأَشْهُرُ', transliteration: 'al-ashhur', pos: ['N'], posLabel: 'N', root: 'ش ه ر', meaning: { en: 'the months', ur: 'مہینے' } },
      { id: '9:5:4', arabic: 'الْحُرُمُ', transliteration: 'al-hurum', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ر م', meaning: { en: 'the sacred', ur: 'حرمت والے' } },
      { id: '9:5:5', arabic: 'فَاقْتُلُوا', transliteration: 'faq-tulu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق ت ل', meaning: { en: 'then kill', ur: 'تو قتل کرو' } },
      { id: '9:5:6', arabic: 'الْمُشْرِكِينَ', transliteration: 'al-mushrikin', pos: ['N'], posLabel: 'N', root: 'ش ر ك', meaning: { en: 'the polytheists', ur: 'مشرکوں کو' } },
      { id: '9:5:7', arabic: 'حَيْثُ', transliteration: 'haythu', pos: ['LOC'], posLabel: 'LOC', root: null, meaning: { en: 'wherever', ur: 'جہاں' } },
      { id: '9:5:8', arabic: 'وَجَدتُّمُوهُمْ', transliteration: 'wajadtumuhum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'و ج د', meaning: { en: 'you find them', ur: 'تم انہیں پاؤ' } },
      { id: '9:5:9', arabic: 'وَخُذُوهُمْ', transliteration: 'wa-khudhuhum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'أ خ ذ', meaning: { en: 'and capture them', ur: 'اور انہیں پکڑو' } },
      { id: '9:5:10', arabic: 'وَاحْصُرُوهُمْ', transliteration: 'wah-suruhum', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ح ص ر', meaning: { en: 'and besiege them', ur: 'اور انہیں گھیرو' } },
      { id: '9:5:11', arabic: 'وَاقْعُدُوا', transliteration: 'waq-\'udu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق ع د', meaning: { en: 'and sit', ur: 'اور بیٹھو' } },
      { id: '9:5:12', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'for them', ur: 'ان کی' } },
      { id: '9:5:13', arabic: 'كُلَّ', transliteration: 'kulla', pos: ['N'], posLabel: 'N', root: 'ك ل ل', meaning: { en: 'at every', ur: 'ہر' } },
      { id: '9:5:14', arabic: 'مَرْصَدٍ', transliteration: 'marsadin', pos: ['N'], posLabel: 'N', root: 'ر ص د', meaning: { en: 'place of ambush', ur: 'گھات کی جگہ' } },
      { id: '9:5:15', arabic: 'فَإِن', transliteration: 'fa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'But if', ur: 'پھر اگر' } },
      { id: '9:5:16', arabic: 'تَابُوا', transliteration: 'tabu', pos: ['V'], posLabel: 'V', root: 'ت و ب', meaning: { en: 'they repent', ur: 'وہ توبہ کریں' } },
      { id: '9:5:17', arabic: 'وَأَقَامُوا', transliteration: 'wa-aqamu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و م', meaning: { en: 'and establish', ur: 'اور قائم کریں' } },
      { id: '9:5:18', arabic: 'الصَّلَاةَ', transliteration: 'as-salata', pos: ['N'], posLabel: 'N', root: 'ص ل و', meaning: { en: 'the prayer', ur: 'نماز' } },
      { id: '9:5:19', arabic: 'وَآتَوُا', transliteration: 'wa-ataw', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'أ ت ي', meaning: { en: 'and give', ur: 'اور دیں' } },
      { id: '9:5:20', arabic: 'الزَّكَاةَ', transliteration: 'az-zakata', pos: ['N'], posLabel: 'N', root: 'ز ك و', meaning: { en: 'the zakah', ur: 'زکوٰۃ' } },
      { id: '9:5:21', arabic: 'فَخَلُّوا', transliteration: 'fa-khallu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'خ ل و', meaning: { en: 'then let go', ur: 'تو چھوڑ دو' } },
      { id: '9:5:22', arabic: 'سَبِيلَهُمْ', transliteration: 'sabilahum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'س ب ل', meaning: { en: 'their way', ur: 'ان کا راستہ' } },
      { id: '9:5:23', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:5:24', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:5:25', arabic: 'غَفُورٌ', transliteration: 'ghafurun', pos: ['ADJ'], posLabel: 'ADJ', root: 'غ ف ر', meaning: { en: 'is Forgiving', ur: 'بخشنے والا' } },
      { id: '9:5:26', arabic: 'رَّحِيمٌ', transliteration: 'rahimun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ر ح م', meaning: { en: 'Merciful', ur: 'مہربان' } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'موصوف + صفت' },
      { from: 2, to: 5, label: 'عطف' },
      { from: 8, to: 9, label: 'عطف' },
      { from: 9, to: 10, label: 'عطف' },
      { from: 10, to: 11, label: 'عطف' },
      { from: 15, to: 16, label: 'شرط + فعل' },
      { from: 16, to: 17, label: 'عطف' },
      { from: 17, to: 19, label: 'عطف' },
      { from: 19, to: 21, label: 'عطف' },
      { from: 24, to: 25, label: 'موصوف + صفت' }
      ],
    },
  },
  6: {
    text: 'وَإِنْ أَحَدٌ مِّنَ الْمُشْرِكِينَ اسْتَجَارَكَ فَأَجِرْهُ حَتَّىٰ يَسْمَعَ كَلَامَ اللَّهِ ثُمَّ أَبْلِغْهُ مَأْمَنَهُ ذَٰلِكَ بِأَنَّهُمْ قَوْمٌ لَّا يَعْلَمُونَ',
    translation: {
      en: 'And if any one of the polytheists seeks your protection, then grant him protection so that he may hear the words of Allah. Then deliver him to his place of safety. That is because they are a people who do not know.',
      ur: 'اور اگر مشرکوں میں سے کوئی تم سے پناہ مانگے تو اسے پناہ دو تاکہ وہ اللہ کا کلام سنے۔ پھر اسے اس کی امن کی جگہ پہنچا دو۔ یہ اس لیے کہ وہ لوگ نہیں جانتے۔'
    },
    words: [
      { id: '9:6:1', arabic: 'وَإِنْ', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '9:6:2', arabic: 'أَحَدٌ', transliteration: 'ahadun', pos: ['N'], posLabel: 'N', root: 'و ح د', meaning: { en: 'any one', ur: 'کوئی' } },
      { id: '9:6:3', arabic: 'مِّنَ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'میں سے' } },
      { id: '9:6:4', arabic: 'الْمُشْرِكِينَ', transliteration: 'al-mushrikin', pos: ['N'], posLabel: 'N', root: 'ش ر ك', meaning: { en: 'the polytheists', ur: 'مشرکوں' } },
      { id: '9:6:5', arabic: 'اسْتَجَارَكَ', transliteration: 'istajarak', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج و ر', meaning: { en: 'seeks your protection', ur: 'تم سے پناہ مانگے' } },
      { id: '9:6:6', arabic: 'فَأَجِرْهُ', transliteration: 'fa-ajirhu', pos: ['CONJ', 'V', 'PRON'], posLabel: 'CONJ+V+PRON', root: 'ج و ر', meaning: { en: 'then grant him protection', ur: 'تو اسے پناہ دو' } },
      { id: '9:6:7', arabic: 'حَتَّىٰ', transliteration: 'hatta', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'until', ur: 'تاکہ' } },
      { id: '9:6:8', arabic: 'يَسْمَعَ', transliteration: 'yasma\'a', pos: ['V'], posLabel: 'V', root: 'س م ع', meaning: { en: 'he may hear', ur: 'وہ سنے' } },
      { id: '9:6:9', arabic: 'كَلَامَ', transliteration: 'kalama', pos: ['N'], posLabel: 'N', root: 'ك ل م', meaning: { en: 'the words of', ur: 'کلام' } },
      { id: '9:6:10', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کا' } },
      { id: '9:6:11', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '9:6:12', arabic: 'أَبْلِغْهُ', transliteration: 'ablighhu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ب ل غ', meaning: { en: 'deliver him', ur: 'اسے پہنچا دو' } },
      { id: '9:6:13', arabic: 'مَأْمَنَهُ', transliteration: 'ma\'manahu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ م ن', meaning: { en: 'to his place of safety', ur: 'اس کی امن کی جگہ' } },
      { id: '9:6:14', arabic: 'ذَٰلِكَ', transliteration: 'dhalika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'یہ' } },
      { id: '9:6:15', arabic: 'بِأَنَّهُمْ', transliteration: 'bi-annahum', pos: ['P', 'ACC', 'PRON'], posLabel: 'P+ACC+PRON', root: null, meaning: { en: 'is because they', ur: 'اس لیے کہ وہ' } },
      { id: '9:6:16', arabic: 'قَوْمٌ', transliteration: 'qawmun', pos: ['N'], posLabel: 'N', root: 'ق و م', meaning: { en: 'are a people', ur: 'لوگ ہیں' } },
      { id: '9:6:17', arabic: 'لَّا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:6:18', arabic: 'يَعْلَمُونَ', transliteration: 'ya\'lamun', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'they know', ur: 'جانتے' } }
    ],
    structure: {
      relationships: [
      { from: 3, to: 4, label: 'جار + مجرور' },
      { from: 5, to: 6, label: 'عطف' },
      { from: 7, to: 8, label: 'جار + مجرور' },
      { from: 17, to: 18, label: 'نفی + فعل' }
      ],
    },
  },
  7: {
    text: 'كَيْفَ يَكُونُ لِلْمُشْرِكِينَ عَهْدٌ عِندَ اللَّهِ وَعِندَ رَسُولِهِ إِلَّا الَّذِينَ عَاهَدتُّمْ عِندَ الْمَسْجِدِ الْحَرَامِ فَمَا اسْتَقَامُوا لَكُمْ فَاسْتَقِيمُوا لَهُمْ إِنَّ اللَّهَ يُحِبُّ الْمُتَّقِينَ',
    translation: {
      en: 'How can there be for the polytheists a treaty in the sight of Allah and His Messenger, except for those with whom you made a treaty at al-Masjid al-Haram? So as long as they are upright toward you, be upright toward them. Indeed, Allah loves the righteous.',
      ur: 'مشرکوں کا اللہ اور اس کے رسول کے ہاں عہد کیسے ہو سکتا ہے، سوائے ان کے جن سے تم نے مسجد حرام کے پاس عہد کیا؟ پس جب تک وہ تمہارے ساتھ قائم رہیں، تم بھی ان کے ساتھ قائم رہو۔ بےشک اللہ متقیوں کو پسند کرتا ہے۔'
    },
    words: [
      { id: '9:7:1', arabic: 'كَيْفَ', transliteration: 'kayfa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'How', ur: 'کیسے' } },
      { id: '9:7:2', arabic: 'يَكُونُ', transliteration: 'yakun', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'can there be', ur: 'ہو سکتا ہے' } },
      { id: '9:7:3', arabic: 'لِلْمُشْرِكِينَ', transliteration: 'lil-mushrikin', pos: ['P', 'N'], posLabel: 'P+N', root: 'ش ر ك', meaning: { en: 'for the polytheists', ur: 'مشرکوں کا' } },
      { id: '9:7:4', arabic: 'عَهْدٌ', transliteration: '\'ahdun', pos: ['N'], posLabel: 'N', root: 'ع ه د', meaning: { en: 'a treaty', ur: 'عہد' } },
      { id: '9:7:5', arabic: 'عِندَ', transliteration: '\'inda', pos: ['N'], posLabel: 'N', root: 'ع ن د', meaning: { en: 'in the sight of', ur: 'کے ہاں' } },
      { id: '9:7:6', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:7:7', arabic: 'وَعِندَ', transliteration: 'wa-\'inda', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ع ن د', meaning: { en: 'and with', ur: 'اور کے ہاں' } },
      { id: '9:7:8', arabic: 'رَسُولِهِ', transliteration: 'rasulihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر س ل', meaning: { en: 'His Messenger', ur: 'اس کے رسول' } },
      { id: '9:7:9', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except for', ur: 'سوائے' } },
      { id: '9:7:10', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those', ur: 'ان کے جن' } },
      { id: '9:7:11', arabic: 'عَاهَدتُّمْ', transliteration: '\'ahadtum', pos: ['V'], posLabel: 'V', root: 'ع ه د', meaning: { en: 'you made a treaty', ur: 'تم نے عہد کیا' } },
      { id: '9:7:12', arabic: 'عِندَ', transliteration: '\'inda', pos: ['N'], posLabel: 'N', root: 'ع ن د', meaning: { en: 'at', ur: 'کے پاس' } },
      { id: '9:7:13', arabic: 'الْمَسْجِدِ', transliteration: 'al-masjid', pos: ['N'], posLabel: 'N', root: 'س ج د', meaning: { en: 'the Masjid', ur: 'مسجد' } },
      { id: '9:7:14', arabic: 'الْحَرَامِ', transliteration: 'al-harami', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ر م', meaning: { en: 'al-Haram', ur: 'حرام' } },
      { id: '9:7:15', arabic: 'فَمَا', transliteration: 'fa-ma', pos: ['CONJ', 'REL'], posLabel: 'CONJ+REL', root: null, meaning: { en: 'So as long as', ur: 'پس جب تک' } },
      { id: '9:7:16', arabic: 'اسْتَقَامُوا', transliteration: 'istaqamu', pos: ['V'], posLabel: 'V', root: 'ق و م', meaning: { en: 'they are upright', ur: 'وہ قائم رہیں' } },
      { id: '9:7:17', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'toward you', ur: 'تمہارے ساتھ' } },
      { id: '9:7:18', arabic: 'فَاسْتَقِيمُوا', transliteration: 'fas-taqimu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق و م', meaning: { en: 'be upright', ur: 'قائم رہو' } },
      { id: '9:7:19', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'toward them', ur: 'ان کے ساتھ' } },
      { id: '9:7:20', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:7:21', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:7:22', arabic: 'يُحِبُّ', transliteration: 'yuhibbu', pos: ['V'], posLabel: 'V', root: 'ح ب ب', meaning: { en: 'loves', ur: 'پسند کرتا ہے' } },
      { id: '9:7:23', arabic: 'الْمُتَّقِينَ', transliteration: 'al-muttaqin', pos: ['N'], posLabel: 'N', root: 'و ق ي', meaning: { en: 'the righteous', ur: 'متقیوں کو' } }
    ],
    structure: {
      relationships: [
      { from: 10, to: 11, label: 'موصول + صلة' },
      { from: 13, to: 14, label: 'موصوف + صفت' },
      { from: 16, to: 18, label: 'عطف' }
      ],
    },
  },
  8: {
    text: 'كَيْفَ وَإِن يَظْهَرُوا عَلَيْكُمْ لَا يَرْقُبُوا فِيكُمْ إِلًّا وَلَا ذِمَّةً يُرْضُونَكُم بِأَفْوَاهِهِمْ وَتَأْبَىٰ قُلُوبُهُمْ وَأَكْثَرُهُمْ فَاسِقُونَ',
    translation: {
      en: 'How [can there be a treaty] while, if they gain dominance over you, they do not observe concerning you any pact of kinship or covenant of protection? They satisfy you with their mouths, but their hearts refuse, and most of them are defiantly disobedient.',
      ur: 'کیسے (عہد ہو) جبکہ اگر وہ تم پر غالب آ جائیں تو نہ رشتے کا لحاظ کریں نہ عہد کا؟ وہ تمہیں اپنی زبانوں سے راضی کرتے ہیں لیکن ان کے دل انکار کرتے ہیں اور ان میں سے اکثر فاسق ہیں۔'
    },
    words: [
      { id: '9:8:1', arabic: 'كَيْفَ', transliteration: 'kayfa', pos: ['INTG'], posLabel: 'INTG', root: null, meaning: { en: 'How', ur: 'کیسے' } },
      { id: '9:8:2', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'while if', ur: 'جبکہ اگر' } },
      { id: '9:8:3', arabic: 'يَظْهَرُوا', transliteration: 'yazharu', pos: ['V'], posLabel: 'V', root: 'ظ ه ر', meaning: { en: 'they gain dominance', ur: 'وہ غالب آ جائیں' } },
      { id: '9:8:4', arabic: 'عَلَيْكُمْ', transliteration: '\'alaykum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'over you', ur: 'تم پر' } },
      { id: '9:8:5', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:8:6', arabic: 'يَرْقُبُوا', transliteration: 'yarqubu', pos: ['V'], posLabel: 'V', root: 'ر ق ب', meaning: { en: 'they observe', ur: 'لحاظ کریں' } },
      { id: '9:8:7', arabic: 'فِيكُمْ', transliteration: 'fikum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'concerning you', ur: 'تمہارے بارے میں' } },
      { id: '9:8:8', arabic: 'إِلًّا', transliteration: 'illan', pos: ['N'], posLabel: 'N', root: 'أ ل ل', meaning: { en: 'any pact of kinship', ur: 'رشتہ' } },
      { id: '9:8:9', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'nor', ur: 'نہ' } },
      { id: '9:8:10', arabic: 'ذِمَّةً', transliteration: 'dhimmatan', pos: ['N'], posLabel: 'N', root: 'ذ م م', meaning: { en: 'covenant of protection', ur: 'عہد' } },
      { id: '9:8:11', arabic: 'يُرْضُونَكُم', transliteration: 'yurdunakum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ر ض و', meaning: { en: 'They satisfy you', ur: 'وہ تمہیں راضی کرتے ہیں' } },
      { id: '9:8:12', arabic: 'بِأَفْوَاهِهِمْ', transliteration: 'bi-afwahihim', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'ف و ه', meaning: { en: 'with their mouths', ur: 'اپنی زبانوں سے' } },
      { id: '9:8:13', arabic: 'وَتَأْبَىٰ', transliteration: 'wa-ta\'ba', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'أ ب ي', meaning: { en: 'but refuse', ur: 'لیکن انکار کرتے ہیں' } },
      { id: '9:8:14', arabic: 'قُلُوبُهُمْ', transliteration: 'qulubuhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:8:15', arabic: 'وَأَكْثَرُهُمْ', transliteration: 'wa-aktharuhum', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ك ث ر', meaning: { en: 'and most of them', ur: 'اور ان میں سے اکثر' } },
      { id: '9:8:16', arabic: 'فَاسِقُونَ', transliteration: 'fasiqun', pos: ['N'], posLabel: 'N', root: 'ف س ق', meaning: { en: 'are defiantly disobedient', ur: 'فاسق ہیں' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'شرط + فعل' },
      { from: 5, to: 6, label: 'نفی + فعل' },
      { from: 11, to: 13, label: 'عطف' }
      ],
    },
  },
  9: {
    text: 'اشْتَرَوْا بِآيَاتِ اللَّهِ ثَمَنًا قَلِيلًا فَصَدُّوا عَن سَبِيلِهِ إِنَّهُمْ سَاءَ مَا كَانُوا يَعْمَلُونَ',
    translation: {
      en: 'They have exchanged the signs of Allah for a small price and averted [people] from His way. Indeed, it was evil that they were doing.',
      ur: 'انہوں نے اللہ کی آیات کو تھوڑی قیمت پر بیچ دیا اور اس کے راستے سے روکا۔ بےشک جو وہ کر رہے تھے وہ برا تھا۔'
    },
    words: [
      { id: '9:9:1', arabic: 'اشْتَرَوْا', transliteration: 'ishtaraw', pos: ['V'], posLabel: 'V', root: 'ش ر ي', meaning: { en: 'They have exchanged', ur: 'انہوں نے بیچا' } },
      { id: '9:9:2', arabic: 'بِآيَاتِ', transliteration: 'bi-ayati', pos: ['P', 'N'], posLabel: 'P+N', root: 'أ ي ي', meaning: { en: 'the signs of', ur: 'آیات کو' } },
      { id: '9:9:3', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کی' } },
      { id: '9:9:4', arabic: 'ثَمَنًا', transliteration: 'thamanan', pos: ['N'], posLabel: 'N', root: 'ث م ن', meaning: { en: 'for a price', ur: 'قیمت پر' } },
      { id: '9:9:5', arabic: 'قَلِيلًا', transliteration: 'qalilan', pos: ['ADJ'], posLabel: 'ADJ', root: 'ق ل ل', meaning: { en: 'small', ur: 'تھوڑی' } },
      { id: '9:9:6', arabic: 'فَصَدُّوا', transliteration: 'fa-saddu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ص د د', meaning: { en: 'and averted', ur: 'اور روکا' } },
      { id: '9:9:7', arabic: 'عَن', transliteration: '\'an', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:9:8', arabic: 'سَبِيلِهِ', transliteration: 'sabilihi', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'س ب ل', meaning: { en: 'His way', ur: 'اس کے راستے' } },
      { id: '9:9:9', arabic: 'إِنَّهُمْ', transliteration: 'innahum', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed they', ur: 'بےشک وہ' } },
      { id: '9:9:10', arabic: 'سَاءَ', transliteration: 'sa\'a', pos: ['V'], posLabel: 'V', root: 'س و أ', meaning: { en: 'was evil', ur: 'برا تھا' } },
      { id: '9:9:11', arabic: 'مَا', transliteration: 'ma', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'جو' } },
      { id: '9:9:12', arabic: 'كَانُوا', transliteration: 'kanu', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'they were', ur: 'وہ تھے' } },
      { id: '9:9:13', arabic: 'يَعْمَلُونَ', transliteration: 'ya\'malun', pos: ['V'], posLabel: 'V', root: 'ع م ل', meaning: { en: 'doing', ur: 'کرتے' } }
    ],
    structure: {
      relationships: [
      { from: 4, to: 5, label: 'موصوف + صفت' },
      { from: 1, to: 6, label: 'عطف' },
      { from: 7, to: 8, label: 'جار + مجرور' },
      { from: 11, to: 12, label: 'موصول + صلة' }
      ],
    },
  },
  10: {
    text: 'لَا يَرْقُبُونَ فِي مُؤْمِنٍ إِلًّا وَلَا ذِمَّةً وَأُولَٰئِكَ هُمُ الْمُعْتَدُونَ',
    translation: {
      en: 'They do not observe toward a believer any pact of kinship or covenant of protection. And it is they who are the transgressors.',
      ur: 'وہ کسی مومن کے معاملے میں نہ رشتے کا لحاظ کرتے ہیں نہ عہد کا۔ اور یہی لوگ حد سے گزرنے والے ہیں۔'
    },
    words: [
      { id: '9:10:1', arabic: 'لَا', transliteration: 'la', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '9:10:2', arabic: 'يَرْقُبُونَ', transliteration: 'yarqubun', pos: ['V'], posLabel: 'V', root: 'ر ق ب', meaning: { en: 'they observe', ur: 'لحاظ کرتے' } },
      { id: '9:10:3', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'toward', ur: 'میں' } },
      { id: '9:10:4', arabic: 'مُؤْمِنٍ', transliteration: 'mu\'minin', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'a believer', ur: 'مومن کے معاملے' } },
      { id: '9:10:5', arabic: 'إِلًّا', transliteration: 'illan', pos: ['N'], posLabel: 'N', root: 'أ ل ل', meaning: { en: 'any pact of kinship', ur: 'رشتہ' } },
      { id: '9:10:6', arabic: 'وَلَا', transliteration: 'wa-la', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'nor', ur: 'نہ' } },
      { id: '9:10:7', arabic: 'ذِمَّةً', transliteration: 'dhimmatan', pos: ['N'], posLabel: 'N', root: 'ذ م م', meaning: { en: 'covenant of protection', ur: 'عہد' } },
      { id: '9:10:8', arabic: 'وَأُولَٰئِكَ', transliteration: 'wa-ula\'ika', pos: ['CONJ', 'DEM'], posLabel: 'CONJ+DEM', root: null, meaning: { en: 'And those', ur: 'اور یہی' } },
      { id: '9:10:9', arabic: 'هُمُ', transliteration: 'humu', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'are they', ur: 'وہ' } },
      { id: '9:10:10', arabic: 'الْمُعْتَدُونَ', transliteration: 'al-mu\'tadun', pos: ['N'], posLabel: 'N', root: 'ع د و', meaning: { en: 'the transgressors', ur: 'حد سے گزرنے والے' } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  }
,
  11: {
    text: 'فَإِن تَابُوا۟ وَأَقَامُوا۟ ٱلصَّلَوٰةَ وَءَاتَوُا۟ ٱلزَّكَوٰةَ فَإِخْوَٰنُكُمْ فِى ٱلدِّينِ ۗ وَنُفَصِّلُ ٱلْءَايَٰتِ لِقَوْمٍۢ يَعْلَمُونَ',
    translation: {
      en: 'But if they repent, establish prayer, and give zakah, then they are your brothers in religion; and We detail the verses for a people who know.',
      ur: 'اگر یہ توبہ کرلیں اور نماز پڑھنے اور زکوٰة دینے لگیں تو دین میں تمہارے بھائی ہیں۔ اور سمجھنے والے لوگوں کے لیے ہم اپنی آیتیں کھول کھول کر بیان کرتے ہیں'
    },
    words: [
      { id: '9:11:1', arabic: 'ف��إِن', transliteration: 'fa-in', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'But if', ur: 'لیکن اگر' } },
      { id: '9:11:2', arabic: 'تَابُوا۟', transliteration: 'tābū', pos: ['N'], posLabel: 'N', root: 'ت و ب', meaning: { en: 'they repent', ur: 'وہ توبہ کرنا' } },
      { id: '9:11:3', arabic: 'وَأَقَامُوا۟', transliteration: 'wa-aqāmū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and establish', ur: 'اور قائم کرنا' } },
      { id: '9:11:4', arabic: 'ٱلصَّلَوٰةَ', transliteration: 'l-ṣalata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the prayer', ur: 'نماز' } },
      { id: '9:11:5', arabic: 'وَء��اتَوُا۟', transliteration: 'waātawū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and give', ur: 'اور دینا' } },
      { id: '9:11:6', arabic: 'ٱلزَّكَوٰةَ', transliteration: 'l-zakata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the zakah', ur: 'زکوٰۃ' } },
      { id: '9:11:7', arabic: 'فَإِخْوَٰنُكُمْ', transliteration: 'fa-ikh\'wānukum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then (they are) your brothers', ur: 'پھر (وہ ہیں) تمہارا brothers' } },
      { id: '9:11:8', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:11:9', arabic: 'ٱلدِّينِ ۗ', transliteration: 'l-dīni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[the] religion', ur: '[] دین' } },
      { id: '9:11:10', arabic: 'وَنُفَصِّلُ', transliteration: 'wanufaṣṣilu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And We explain in detail', ur: 'اور ہم explain میں detail' } },
      { id: '9:11:11', arabic: 'ٱلْـَٔايَـٰتِ', transliteration: 'l-āyāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Verses', ur: ' آیات' } },
      { id: '9:11:12', arabic: 'لِقَوْمٍۢ', transliteration: 'liqawmin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for a people', ur: 'کے لیے ایک لوگ' } },
      { id: '9:11:13', arabic: 'يَعْلَمُونَ', transliteration: 'yaʿlamūna', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: '(who) know', ur: '(جو) جاننا' } }
    ],
    structure: { relationships: [{ from: 3, to: 10, label: 'عطف' }] }
  },
  12: {
    text: 'وَإِن نَّكَثُوٓا۟ أَيْمَٰنَهُم مِّنۢ بَعْدِ عَهْدِهِمْ وَطَعَنُوا۟ فِى دِينِكُمْ فَقَٰتِلُوٓا۟ أَئِمَّةَ ٱلْكُفْرِ ۙ إِنَّهُمْ لَآ أَيْمَٰنَ لَهُمْ لَعَلَّهُمْ يَنتَهُونَ',
    translation: {
      en: 'And if they break their oaths after their treaty and defame your religion, then fight the leaders of disbelief, for indeed, there are no oaths [sacred] to them; [fight them that] they might cease.',
      ur: 'اور اگر عہد کرنے کے بعد اپنی قسموں کو توڑ ڈالیں اور تمہارے دین میں طعنے کرنے لگیں تو ان کفر کے پیشواؤں سے جنگ کرو (یہ یہ بےایمان لوگ ہیں اور) ان کی قسموں کا کچھ اعتبار نہیں ہے۔ عجب نہیں کہ (اپنی حرکات سے) باز آجائیں'
    },
    words: [
      { id: '9:12:1', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '9:12:2', arabic: 'نَّكَثُوٓا۟', transliteration: 'nakathū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they break', ur: 'وہ break' } },
      { id: '9:12:3', arabic: 'أَيْمَـٰنَهُم', transliteration: 'aymānahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their oaths', ur: 'ان کا oaths' } },
      { id: '9:12:4', arabic: 'مِّنۢ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:12:5', arabic: 'بَعْدِ', transliteration: 'baʿdi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:12:6', arabic: 'عَهْدِهِمْ', transliteration: 'ʿahdihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their treaty', ur: 'ان کا treaty' } },
      { id: '9:12:7', arabic: 'وَطَعَنُوا۟', transliteration: 'waṭaʿanū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and defame', ur: 'اور defame' } },
      { id: '9:12:8', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[in]', ur: '[میں]' } },
      { id: '9:12:9', arabic: 'دِينِكُمْ', transliteration: 'dīnikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your religion', ur: 'تمہارا دین' } },
      { id: '9:12:10', arabic: 'فَقَـٰتِلُوٓا۟', transliteration: 'faqātilū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then fight', ur: 'پھر لڑنا' } },
      { id: '9:12:11', arabic: 'أَئِمَّةَ', transliteration: 'a-immata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the leaders', ur: ' leaders' } },
      { id: '9:12:12', arabic: 'ٱلْكُفْرِ ۙ', transliteration: 'l-kuf\'ri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) [the] disbelief', ur: '(کا) [] disbelief' } },
      { id: '9:12:13', arabic: 'إِنَّهُمْ', transliteration: 'innahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'indeed, they ', ur: 'بےشک, وہ ' } },
      { id: '9:12:14', arabic: 'لَآ', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'no', ur: 'نہیں' } },
      { id: '9:12:15', arabic: 'أَيْمَـٰنَ', transliteration: 'aymāna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'oaths', ur: 'oaths' } },
      { id: '9:12:16', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:12:17', arabic: 'لَعَلَّهُمْ', transliteration: 'laʿallahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'so that they may', ur: 'تاکہ وہ may' } },
      { id: '9:12:18', arabic: 'يَنتَهُونَ', transliteration: 'yantahūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'cease', ur: 'cease' } }
    ],
    structure: { relationships: [] }
  },
  13: {
    text: 'أَلَا تُقَٰتِلُونَ قَوْمًۭا نَّكَثُوٓا۟ أَيْمَٰنَهُمْ وَهَمُّوا۟ بِإِخْرَاجِ ٱلرَّسُولِ وَهُم بَدَءُوكُمْ أَوَّلَ مَرَّةٍ ۚ أَتَخْشَوْنَهُمْ ۚ فَٱللَّهُ أَحَقُّ أَن تَخْشَوْهُ إِن كُنتُم مُّؤْمِنِينَ',
    translation: {
      en: 'Would you not fight a people who broke their oaths and determined to expel the Messenger, and they had begun [the attack upon] you the first time? Do you fear them? But Allah has more right that you should fear Him, if you are [truly] believers.',
      ur: 'بھلا تم ایسے لوگوں سے کیوں نہ لڑو جنہوں نے اپنی قسموں کو توڑ ڈالا اور پیغمبر (خدا) کے جلا وطن کرنے کا عزم مصمم کر لیا اور انہوں نے تم سے (عہد شکنی کی) ابتدا کی۔ کیا تم ایسے لوگوں سے ڈرتے ہو حالانکہ ڈرنے کے لائق خدا ہے بشرطیکہ ایمان رکھتے ہو'
    },
    words: [
      { id: '9:13:1', arabic: 'أَلَا', transliteration: 'alā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Will not', ur: ' نہیں' } },
      { id: '9:13:2', arabic: 'تُقَـٰتِلُونَ', transliteration: 'tuqātilūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you fight', ur: 'تم لڑنا' } },
      { id: '9:13:3', arabic: 'قَوْمًۭا', transliteration: 'qawman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a people', ur: 'ایک لوگ' } },
      { id: '9:13:4', arabic: 'نَّكَثُوٓا۟', transliteration: 'nakathū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'who broke', ur: 'جو broke' } },
      { id: '9:13:5', arabic: 'أَيْمَـٰنَهُمْ', transliteration: 'aymānahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their oaths', ur: 'ان کا oaths' } },
      { id: '9:13:6', arabic: 'وَهَمُّوا۟', transliteration: 'wahammū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and determined', ur: 'اور determined' } },
      { id: '9:13:7', arabic: 'بِإِخْرَاجِ', transliteration: 'bi-ikh\'rāji', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to drive out', ur: 'کو/تک drive out' } },
      { id: '9:13:8', arabic: 'ٱلرَّسُولِ', transliteration: 'l-rasūli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Messenger', ur: 'رسول' } },
      { id: '9:13:9', arabic: 'وَهُم', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they', ur: 'اور وہ' } },
      { id: '9:13:10', arabic: 'بَدَءُوكُمْ', transliteration: 'badaūkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'began (to attack) you', ur: 'began (کو/تک attack) تم' } },
      { id: '9:13:11', arabic: 'أَوَّلَ', transliteration: 'awwala', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'first', ur: 'first' } },
      { id: '9:13:12', arabic: 'مَرَّةٍ ۚ', transliteration: 'marratin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'time', ur: 'time' } },
      { id: '9:13:13', arabic: 'أَتَخْشَوْنَهُمْ ۚ', transliteration: 'atakhshawnahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Do you fear them', ur: 'کرنا تم ڈرنا ان کو' } },
      { id: '9:13:14', arabic: 'فَٱللَّهُ', transliteration: 'fal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But Allah', ur: 'لیکن اللہ' } },
      { id: '9:13:15', arabic: 'أَحَقُّ', transliteration: 'aḥaqqu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(has) more right', ur: '(رکھتا ہے) more حق' } },
      { id: '9:13:16', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:13:17', arabic: 'تَخْشَوْهُ', transliteration: 'takhshawhu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you should fear Him', ur: 'تم should ڈرنا Him' } },
      { id: '9:13:18', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '9:13:19', arabic: 'كُنتُم', transliteration: 'kuntum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you are', ur: 'تم ہیں' } },
      { id: '9:13:20', arabic: 'مُّؤْمِنِينَ', transliteration: 'mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'believers', ur: 'مومنین' } }
    ],
    structure: { relationships: [] }
  },
  14: {
    text: 'قَٰتِلُوهُمْ يُعَذِّبْهُمُ ٱللَّهُ بِأَيْدِيكُمْ وَيُخْزِهِمْ وَيَنصُرْكُمْ عَلَيْهِمْ وَيَشْفِ صُدُورَ قَوْمٍۢ مُّؤْمِنِينَ',
    translation: {
      en: 'Fight them; Allah will punish them by your hands and will disgrace them and give you victory over them and satisfy the breasts of a believing people',
      ur: 'ان سے (خوب) لڑو۔ خدا ان کو تمہارے ہاتھوں سے عذاب میں ڈالے گا اور رسوا کرے گا اور تم کو ان پر غلبہ دے گا اور مومن لوگوں کے سینوں کو شفا بخشے گا'
    },
    words: [
      { id: '9:14:1', arabic: 'قَـٰتِلُوهُمْ', transliteration: 'qātilūhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Fight them ', ur: 'لڑنا ان کو ' } },
      { id: '9:14:2', arabic: 'يُعَذِّبْهُمُ', transliteration: 'yuʿadhib\'humu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah will punish them', ur: 'اللہ  سزا دینا ان کو' } },
      { id: '9:14:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will punish them', ur: 'اللہ  سزا دینا ان کو' } },
      { id: '9:14:4', arabic: 'بِأَيْدِيكُمْ', transliteration: 'bi-aydīkum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by your hands', ur: 'کے ذریعے تمہارے ہاتھ' } },
      { id: '9:14:5', arabic: 'وَيُخْزِهِمْ', transliteration: 'wayukh\'zihim', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and disgrace them', ur: 'اور disgrace ان کو' } },
      { id: '9:14:6', arabic: 'وَيَنصُرْكُمْ', transliteration: 'wayanṣur\'kum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and give you victory', ur: 'اور دینا تم victory' } },
      { id: '9:14:7', arabic: 'عَلَيْهِمْ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'over them', ur: 'اوپر ان کو' } },
      { id: '9:14:8', arabic: 'وَيَشْفِ', transliteration: 'wayashfi', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and will heal', ur: 'اور  heal' } },
      { id: '9:14:9', arabic: 'صُدُورَ', transliteration: 'ṣudūra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) breasts', ur: '() breasts' } },
      { id: '9:14:10', arabic: 'قَوْمٍۢ', transliteration: 'qawmin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) a people', ur: '(کا) ایک لوگ' } },
      { id: '9:14:11', arabic: 'مُّؤْمِنِينَ', transliteration: 'mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(who are) believers', ur: '(جو ہیں) مومنین' } }
    ],
    structure: { relationships: [{ from: 2, to: 5, label: 'عطف' }, { from: 5, to: 6, label: 'عطف' }, { from: 6, to: 8, label: 'عطف' }] }
  },
  15: {
    text: 'وَيُذْهِبْ غَيْظَ قُلُوبِهِمْ ۗ وَيَتُوبُ ٱللَّهُ عَلَىٰ مَن يَشَآءُ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌ',
    translation: {
      en: 'And remove the fury in the believers\' hearts. And Allah turns in forgiveness to whom He wills; and Allah is Knowing and Wise.',
      ur: 'اور ان کے دلوں سے غصہ دور کرے گا اور جس پر چاہے گا رحمت کرے گا۔ اور خدا سب کچھ جانتا (اور) حکمت والا ہے'
    },
    words: [
      { id: '9:15:1', arabic: 'و��يُذْهِبْ', transliteration: 'wayudh\'hib', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And remove', ur: 'اور remove' } },
      { id: '9:15:2', arabic: 'غَيْظَ', transliteration: 'ghayẓa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) anger', ur: '() anger' } },
      { id: '9:15:3', arabic: 'قُلُوبِهِمْ ۗ', transliteration: 'qulūbihim', pos: ['N'], posLabel: 'N', root: 'ق ل ب', meaning: { en: '(of) their hearts', ur: '(کا) ان کے دل' } },
      { id: '9:15:4', arabic: 'وَيَتُوبُ', transliteration: 'wayatūbu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And Allah accepts repentance', ur: 'اور اللہ accepts repentance' } },
      { id: '9:15:5', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And Allah accepts repentance', ur: 'اور اللہ accepts repentance' } },
      { id: '9:15:6', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:15:7', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whom', ur: 'whom' } },
      { id: '9:15:8', arabic: 'يَشَآءُ ۗ', transliteration: 'yashāu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He wills', ur: 'وہ wills' } },
      { id: '9:15:9', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:15:10', arabic: 'عَلِيمٌ', transliteration: 'ʿalīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } },
      { id: '9:15:11', arabic: 'حَكِيمٌ', transliteration: 'ḥakīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ك م', meaning: { en: 'All-Wise', ur: 'حکمت والا' } }
    ],
    structure: { relationships: [] }
  },
  16: {
    text: 'أَمْ حَسِبْتُمْ أَن تُتْرَكُوا۟ وَلَمَّا يَعْلَمِ ٱللَّهُ ٱلَّذِينَ جَٰهَدُوا۟ مِنكُمْ وَلَمْ يَتَّخِذُوا۟ مِن دُونِ ٱللَّهِ وَلَا رَسُولِهِۦ وَلَا ٱلْمُؤْمِنِينَ وَلِيجَةًۭ ۚ وَٱللَّهُ خَبِيرٌۢ بِمَا تَعْمَلُونَ',
    translation: {
      en: 'Do you think that you will be left [as you are] while Allah has not yet made evident those among you who strive [for His cause] and do not take other than Allah, His Messenger and the believers as intimates? And Allah is Acquainted with what you do.',
      ur: 'کیا تم لوگ یہ خیال کرتے ہو کہ (بےآزمائش) چھوڑ دیئے جاؤ گے اور ابھی خدا نے ایسے لوگوں کو متمیز کیا ہی نہیں جنہوں نے تم میں سے جہاد کئے اور خدا اور اس کے رسول اور مومنوں کے سوا کسی کو دلی دوست نہیں بنایا۔ اور خدا تمہارے سب کاموں سے واقف ہے'
    },
    words: [
      { id: '9:16:1', arabic: '��َمْ', transliteration: 'am', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Or', ur: 'یا' } },
      { id: '9:16:2', arabic: 'حَسِبْتُمْ', transliteration: 'ḥasib\'tum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(do) you think', ur: '(کرنا) تم think' } },
      { id: '9:16:3', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:16:4', arabic: 'تُتْرَكُوا۟', transliteration: 'tut\'rakū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you would be left', ur: 'تم  be left' } },
      { id: '9:16:5', arabic: 'وَلَمَّا', transliteration: 'walammā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while not', ur: 'جبکہ نہیں' } },
      { id: '9:16:6', arabic: 'يَعْلَمِ', transliteration: 'yaʿlami', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah made evident', ur: 'اللہ بنایا evident' } },
      { id: '9:16:7', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah made evident', ur: 'اللہ بنایا evident' } },
      { id: '9:16:8', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:16:9', arabic: 'جَـٰهَدُوا۟', transliteration: 'jāhadū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'strive', ur: 'جدوجہد کرنا' } },
      { id: '9:16:10', arabic: 'مِنكُمْ', transliteration: 'minkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among you', ur: 'میں سے تم' } },
      { id: '9:16:11', arabic: 'وَلَمْ', transliteration: 'walam', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:16:12', arabic: 'يَتَّخِذُوا۟', transliteration: 'yattakhidhū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'take', ur: 'لینا' } },
      { id: '9:16:13', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'besides Allah', ur: 'besides اللہ' } },
      { id: '9:16:14', arabic: 'دُونِ', transliteration: 'dūni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'besides Allah', ur: 'besides اللہ' } },
      { id: '9:16:15', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'besides Allah', ur: 'besides اللہ' } },
      { id: '9:16:16', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:16:17', arabic: 'رَسُولِهِۦ', transliteration: 'rasūlihi', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'His Messenger', ur: 'اس کا رسول' } },
      { id: '9:16:18', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:16:19', arabic: 'ٱلْمُؤْمِنِينَ', transliteration: 'l-mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the believers', ur: ' مومنین' } },
      { id: '9:16:20', arabic: 'وَلِيجَةًۭ ۚ', transliteration: 'walījatan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '(as) intimates', ur: '(as) intimates' } },
      { id: '9:16:21', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:16:22', arabic: 'خَبِيرٌۢ', transliteration: 'khabīrun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) All-Aware', ur: '(ہے) سب-Aware' } },
      { id: '9:16:23', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of what', ur: 'کا کیا/جو' } },
      { id: '9:16:24', arabic: 'تَعْمَلُونَ', transliteration: 'taʿmalūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you do', ur: 'تم کرنا' } }
    ],
    structure: { relationships: [{ from: 13, to: 14, label: 'جار + مجرور' }] }
  },
  17: {
    text: 'مَا كَانَ لِلْمُشْرِكِينَ أَن يَعْمُرُوا۟ مَسَٰجِدَ ٱللَّهِ شَٰهِدِينَ عَلَىٰٓ أَنفُسِهِم بِٱلْكُفْرِ ۚ أُو۟لَٰٓئِكَ حَبِطَتْ أَعْمَٰلُهُمْ وَفِى ٱلنَّارِ هُمْ خَٰلِدُونَ',
    translation: {
      en: 'It is not for the polytheists to maintain the mosques of Allah [while] witnessing against themselves with disbelief. [For] those, their deeds have become worthless, and in the Fire they will abide eternally.',
      ur: 'مشرکوں کی زیبا نہیں کہ خدا کی مسجدوں کو آباد کریں جب کہ وہ اپنے آپ پر کفر کی گواہی دے رہے ہیں۔ ان لوگوں کے سب اعمال بےکار ہیں اور یہ ہمیشہ دوزخ میں رہیں گے'
    },
    words: [
      { id: '9:17:1', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(It) is not', ur: '(It) ہے نہیں' } },
      { id: '9:17:2', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: '(It) is not', ur: '(It) ہے نہیں' } },
      { id: '9:17:3', arabic: 'لِلْمُشْرِكِينَ', transliteration: 'lil\'mush\'rikīna', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for the polytheists', ur: 'کے لیے  polytheists' } },
      { id: '9:17:4', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:17:5', arabic: 'يَعْمُرُوا۟', transliteration: 'yaʿmurū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they maintain', ur: 'وہ maintain' } },
      { id: '9:17:6', arabic: 'مَسَـٰجِدَ', transliteration: 'masājida', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) masajid of Allah', ur: '() masajid کا اللہ' } },
      { id: '9:17:7', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) masajid of Allah', ur: '() masajid کا اللہ' } },
      { id: '9:17:8', arabic: 'شَـٰهِدِينَ', transliteration: 'shāhidīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(while) witnessing', ur: '(جبکہ) witnessing' } },
      { id: '9:17:9', arabic: 'عَلَىٰٓ', transliteration: 'ʿalā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'against', ur: 'خلاف' } },
      { id: '9:17:10', arabic: 'أَنفُسِهِم', transliteration: 'anfusihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'themselves', ur: 'themselves' } },
      { id: '9:17:11', arabic: 'بِٱلْكُفْرِ ۚ', transliteration: 'bil-kuf\'ri', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '[with] disbelief', ur: '[ساتھ] disbelief' } },
      { id: '9:17:12', arabic: 'أُو۟لَـٰٓئِكَ', transliteration: 'ulāika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(For) those', ur: '(کے لیے) وہ لوگ' } },
      { id: '9:17:13', arabic: 'حَبِطَتْ', transliteration: 'ḥabiṭat', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'worthless', ur: 'worthless' } },
      { id: '9:17:14', arabic: 'أَعْمَـٰلُهُمْ', transliteration: 'aʿmāluhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(are) their deeds', ur: '(ہیں) ان کے اعمال' } },
      { id: '9:17:15', arabic: 'وَفِى', transliteration: 'wafī', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and in', ur: 'اور میں' } },
      { id: '9:17:16', arabic: 'ٱلنَّارِ', transliteration: 'l-nāri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Fire', ur: 'دوزخ' } },
      { id: '9:17:17', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '9:17:18', arabic: 'خَـٰلِدُونَ', transliteration: 'khālidūna', pos: ['N'], posLabel: 'N', root: 'خ ل د', meaning: { en: '(will) abide forever', ur: '() abide forever' } }
    ],
    structure: { relationships: [] }
  },
  18: {
    text: 'إِنَّمَا يَعْمُرُ مَسَٰجِدَ ٱللَّهِ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَأَقَامَ ٱلصَّلَوٰةَ وَءَاتَى ٱلزَّكَوٰةَ وَلَمْ يَخْشَ إِلَّا ٱللَّهَ ۖ فَعَسَىٰٓ أُو۟لَٰٓئِكَ أَن يَكُونُوا۟ مِنَ ٱلْمُهْتَدِينَ',
    translation: {
      en: 'The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day and establish prayer and give zakah and do not fear except Allah, for it is expected that those will be of the [rightly] guided.',
      ur: 'خدا کی مسجدوں کو تو وہ لوگ آباد کرتے ہیں جو خدا پر اور روز قیامت پر ایمان لاتے ہیں اور نماز پڑھتے اور زکواة دیتے ہیں اور خدا کے سوا کسی سے نہیں ڈرتے۔ یہی لوگ امید ہے کہ ہدایت یافتہ لوگوں میں (داخل) ہوں'
    },
    words: [
      { id: '9:18:1', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '9:18:2', arabic: 'يَعْمُرُ', transliteration: 'yaʿmuru', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'will maintain', ur: ' maintain' } },
      { id: '9:18:3', arabic: 'مَسَـٰجِدَ', transliteration: 'masājida', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) masajid of Allah', ur: '() masajid کا اللہ' } },
      { id: '9:18:4', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) masajid of Allah', ur: '() masajid کا اللہ' } },
      { id: '9:18:5', arabic: 'مَنْ', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(the one) who', ur: '( one) جو' } },
      { id: '9:18:6', arabic: 'ءَامَنَ', transliteration: 'āmana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'believes', ur: 'believes' } },
      { id: '9:18:7', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:18:8', arabic: 'وَٱلْيَوْمِ', transliteration: 'wal-yawmi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the Day', ur: 'اور قیامت کا دن' } },
      { id: '9:18:9', arabic: 'ٱلْـَٔاخِرِ', transliteration: 'l-ākhiri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Last', ur: ' Last' } },
      { id: '9:18:10', arabic: 'وَأَقَامَ', transliteration: 'wa-aqāma', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and establishes', ur: 'اور establishes' } },
      { id: '9:18:11', arabic: 'ٱلصَّلَوٰةَ', transliteration: 'l-ṣalata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the prayer', ur: 'نماز' } },
      { id: '9:18:12', arabic: 'وَءَاتَى', transliteration: 'waātā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and gives', ur: 'اور gives' } },
      { id: '9:18:13', arabic: 'ٱلزَّكَوٰةَ', transliteration: 'l-zakata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the zakah', ur: 'زکوٰۃ' } },
      { id: '9:18:14', arabic: 'وَلَمْ', transliteration: 'walam', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:18:15', arabic: 'يَخْشَ', transliteration: 'yakhsha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'fear', ur: 'ڈرنا' } },
      { id: '9:18:16', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:18:17', arabic: 'ٱللَّهَ ۖ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:18:18', arabic: 'فَعَسَىٰٓ', transliteration: 'faʿasā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Then perhaps', ur: 'پھر perhaps' } },
      { id: '9:18:19', arabic: 'أُو۟لَـٰٓئِكَ', transliteration: 'ulāika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those', ur: 'وہ لوگ' } },
      { id: '9:18:20', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[that]', ur: '[کہ]' } },
      { id: '9:18:21', arabic: 'يَكُونُوا۟', transliteration: 'yakūnū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they are', ur: 'وہ ہیں' } },
      { id: '9:18:22', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:18:23', arabic: 'ٱلْمُهْتَدِينَ', transliteration: 'l-muh\'tadīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the guided ones', ur: ' ہدایت دی ones' } }
    ],
    structure: { relationships: [{ from: 2, to: 10, label: 'عطف' }] }
  },
  19: {
    text: '۞ أَجَعَلْتُمْ سِقَايَةَ ٱلْحَآجِّ وَعِمَارَةَ ٱلْمَسْجِدِ ٱلْحَرَامِ كَمَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَجَٰهَدَ فِى سَبِيلِ ٱللَّهِ ۚ لَا يَسْتَوُۥنَ عِندَ ٱللَّهِ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلظَّٰلِمِينَ',
    translation: {
      en: 'Have you made the providing of water for the pilgrim and the maintenance of al-Masjid al-Haram equal to [the deeds of] one who believes in Allah and the Last Day and strives in the cause of Allah? They are not equal in the sight of Allah. And Allah does not guide the wrongdoing people.',
      ur: 'کیا تم نے حاجیوں کو پانی پلانا اور مسجد محترم یعنی (خانہٴ کعبہ) کو آباد کرنا اس شخص کے اعمال جیسا خیال کیا ہے جو خدا اور روز آخرت پر ایمان رکھتا ہے اور خدا کی راہ میں جہاد کرتا ہے۔ یہ لوگ خدا کے نزدیک برابر نہیں ہیں۔ اور خدا ظالم لوگوں کو ہدایت نہیں دیا کرتا'
    },
    words: [
      { id: '9:19:1', arabic: '۞ أَجَعَلْتُمْ', transliteration: 'ajaʿaltum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Do you make', ur: 'کرنا تم بنانا' } },
      { id: '9:19:2', arabic: 'سِقَايَةَ', transliteration: 'siqāyata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the providing of water', ur: ' providing کا پانی' } },
      { id: '9:19:3', arabic: 'ٱلْحَآجِّ', transliteration: 'l-ḥāji', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) the pilgrims', ur: '(کو/تک)  pilgrims' } },
      { id: '9:19:4', arabic: 'وَعِمَارَةَ', transliteration: 'waʿimārata', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (the) maintenance', ur: 'اور () maintenance' } },
      { id: '9:19:5', arabic: 'ٱلْمَسْجِدِ', transliteration: 'l-masjidi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Al-Masjid Al-Haraam', ur: '(کا) Al-Masjid Al-Haraam' } },
      { id: '9:19:6', arabic: 'ٱلْحَرَامِ', transliteration: 'l-ḥarāmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Al-Masjid Al-Haraam', ur: '(کا) Al-Masjid Al-Haraam' } },
      { id: '9:19:7', arabic: 'كَمَنْ', transliteration: 'kaman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'like (the one) who', ur: 'like ( one) جو' } },
      { id: '9:19:8', arabic: 'ءَامَنَ', transliteration: 'āmana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'believes', ur: 'believes' } },
      { id: '9:19:9', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:19:10', arabic: 'وَٱلْيَوْمِ', transliteration: 'wal-yawmi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the Day', ur: 'اور قیامت کا دن' } },
      { id: '9:19:11', arabic: 'ٱلْـَٔاخِرِ', transliteration: 'l-ākhiri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Last', ur: ' Last' } },
      { id: '9:19:12', arabic: 'وَجَـٰهَدَ', transliteration: 'wajāhada', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and strives', ur: 'اور strives' } },
      { id: '9:19:13', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:19:14', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:19:15', arabic: 'ٱللَّهِ ۚ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:19:16', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'They are not equal', ur: 'وہ ہیں نہیں equal' } },
      { id: '9:19:17', arabic: 'يَسْتَوُۥنَ', transliteration: 'yastawūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They are not equal', ur: 'وہ ہیں نہیں equal' } },
      { id: '9:19:18', arabic: 'عِندَ', transliteration: 'ʿinda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'near', ur: 'قریب' } },
      { id: '9:19:19', arabic: 'ٱللَّهِ ۗ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:19:20', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:19:21', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(does) not', ur: '(does) نہیں' } },
      { id: '9:19:22', arabic: 'يَهْدِى', transliteration: 'yahdī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'guide', ur: 'ہدایت دینا' } },
      { id: '9:19:23', arabic: 'ٱلْقَوْمَ', transliteration: 'l-qawma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the people ', ur: 'لوگ ' } },
      { id: '9:19:24', arabic: 'ٱلظَّـٰلِمِينَ', transliteration: 'l-ẓālimīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the wrongdoers', ur: 'ظالم' } }
    ],
    structure: { relationships: [] }
  },
  20: {
    text: 'ٱلَّذِينَ ءَامَنُوا۟ وَهَاجَرُوا۟ وَجَٰهَدُوا۟ فِى سَبِيلِ ٱللَّهِ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ أَعْظَمُ دَرَجَةً عِندَ ٱللَّهِ ۚ وَأُو۟لَٰٓئِكَ هُمُ ٱلْفَآئِزُونَ',
    translation: {
      en: 'The ones who have believed, emigrated and striven in the cause of Allah with their wealth and their lives are greater in rank in the sight of Allah. And it is those who are the attainers [of success].',
      ur: 'جو لوگ ایمان لائے اور وطن چھوڑ گئے اور خدا کی راہ میں مال اور جان سے جہاد کرتے رہے۔ خدا کے ہاں ان کے درجے بہت بڑے ہیں۔ اور وہی مراد کو پہنچنے والے ہیں'
    },
    words: [
      { id: '9:20:1', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Those who', ur: 'جو لوگ' } },
      { id: '9:20:2', arabic: 'ءَامَنُوا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'believed', ur: 'ایمان لائے' } },
      { id: '9:20:3', arabic: 'وَهَاجَرُوا۟', transliteration: 'wahājarū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and emigrated', ur: 'اور emigrated' } },
      { id: '9:20:4', arabic: 'وَجَـٰهَدُوا۟', transliteration: 'wajāhadū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and strove', ur: 'اور جدوجہد کی' } },
      { id: '9:20:5', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:20:6', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:20:7', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:20:8', arabic: 'بِأَمْوَٰلِهِمْ', transliteration: 'bi-amwālihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with their wealth', ur: 'ساتھ ان کا مال' } },
      { id: '9:20:9', arabic: 'وَأَنفُسِهِمْ', transliteration: 'wa-anfusihim', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and their lives', ur: 'اور ان کا lives' } },
      { id: '9:20:10', arabic: 'أَعْظَمُ', transliteration: 'aʿẓamu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(are) greater', ur: '(ہیں) greater' } },
      { id: '9:20:11', arabic: 'دَرَجَةً', transliteration: 'darajatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) rank', ur: '(میں) rank' } },
      { id: '9:20:12', arabic: 'عِندَ', transliteration: 'ʿinda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'near', ur: 'قریب' } },
      { id: '9:20:13', arabic: 'ٱللَّهِ ۚ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:20:14', arabic: 'وَأُو۟لَـٰٓئِكَ', transliteration: 'wa-ulāika', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And those ', ur: 'اور وہ لوگ ' } },
      { id: '9:20:15', arabic: 'هُمُ', transliteration: 'humu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '9:20:16', arabic: 'ٱلْفَآئِزُونَ', transliteration: 'l-fāizūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) the successful', ur: '(ہیں)  successful' } }
    ],
    structure: { relationships: [{ from: 10, to: 14, label: 'عطف' }] }
  },
  21: {
    text: 'يُبَشِّرُهُمْ رَبُّهُم بِرَحْمَةٍۢ مِّنْهُ وَرِضْوَٰنٍۢ وَجَنَّٰتٍۢ لَّهُمْ فِيهَا نَعِيمٌۭ مُّقِيمٌ',
    translation: {
      en: 'Their Lord gives them good tidings of mercy from Him and approval and of gardens for them wherein is enduring pleasure.',
      ur: 'ان کا پروردگار ان کو اپنی رحمت کی اور خوشنودی کی اور بہشتوں کی خوشخبری دیتا ہے جن میں ان کے لیے نعمت ہائے جاودانی ہے'
    },
    words: [
      { id: '9:21:1', arabic: 'يُبَشِّرُهُمْ', transliteration: 'yubashiruhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Their Lord gives them glad tidings', ur: 'ان کا رب gives ان کو glad tidings' } },
      { id: '9:21:2', arabic: 'رَبُّهُم', transliteration: 'rabbuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Their Lord gives them glad tidings', ur: 'ان کا رب gives ان کو glad tidings' } },
      { id: '9:21:3', arabic: 'بِرَحْمَةٍۢ', transliteration: 'biraḥmatin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of Mercy', ur: 'کا رحمت' } },
      { id: '9:21:4', arabic: 'مِّنْهُ', transliteration: 'min\'hu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from Him', ur: 'سے Him' } },
      { id: '9:21:5', arabic: 'وَرِضْوَٰنٍۢ', transliteration: 'wariḍ\'wānin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Pleasure', ur: 'اور Pleasure' } },
      { id: '9:21:6', arabic: 'وَجَنَّـٰتٍۢ', transliteration: 'wajannātin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Gardens', ur: 'اور باغات' } },
      { id: '9:21:7', arabic: 'لَّهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them ', ur: 'کے لیے ان کو ' } },
      { id: '9:21:8', arabic: 'فِيهَا', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:21:9', arabic: 'نَعِيمٌۭ', transliteration: 'naʿīmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) bliss', ur: '(ہے) bliss' } },
      { id: '9:21:10', arabic: 'مُّقِيمٌ', transliteration: 'muqīmun', pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: 'enduring', ur: 'enduring' } }
    ],
    structure: { relationships: [] }
  },
  22: {
    text: 'خَٰلِدِينَ فِيهَآ أَبَدًا ۚ إِنَّ ٱللَّهَ عِندَهُۥٓ أَجْرٌ عَظِيمٌۭ',
    translation: {
      en: '[They will be] abiding therein forever. Indeed, Allah has with Him a great reward.',
      ur: '(اور وہ) ان میں ابدالاآباد رہیں گے۔ کچھ شک نہیں کہ خدا کے ہاں بڑا صلہ (تیار) ہے'
    },
    words: [
      { id: '9:22:1', arabic: 'خَـٰلِدِينَ', transliteration: 'khālidīna', pos: ['N'], posLabel: 'N', root: 'خ ل د', meaning: { en: '(They will) abide', ur: '(وہ ) abide' } },
      { id: '9:22:2', arabic: 'فِيهَآ', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:22:3', arabic: 'أَبَدًا ۚ', transliteration: 'abadan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'forever', ur: 'forever' } },
      { id: '9:22:4', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:22:5', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah ', ur: 'اللہ ' } },
      { id: '9:22:6', arabic: 'عِندَهُۥٓ', transliteration: 'ʿindahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with Him', ur: 'ساتھ Him' } },
      { id: '9:22:7', arabic: 'أَجْرٌ', transliteration: 'ajrun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) a reward', ur: '(ہے) ایک اجر/ثواب' } },
      { id: '9:22:8', arabic: 'عَظِيمٌۭ', transliteration: 'ʿaẓīmun', pos: ['N'], posLabel: 'N', root: 'ع ظ م', meaning: { en: 'great', ur: 'بڑا/عظیم' } }
    ],
    structure: { relationships: [] }
  },
  23: {
    text: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَتَّخِذُوٓا۟ ءَابَآءَكُمْ وَإِخْوَٰنَكُمْ أَوْلِيَآءَ إِنِ ٱسْتَحَبُّوا۟ ٱلْكُفْرَ عَلَى ٱلْإِيمَٰنِ ۚ وَمَن يَتَوَلَّهُم مِّنكُمْ فَأُو۟لَٰٓئِكَ هُمُ ٱلظَّٰلِمُونَ',
    translation: {
      en: 'O you who have believed, do not take your fathers or your brothers as allies if they have preferred disbelief over belief. And whoever does so among you - then it is those who are the wrongdoers.',
      ur: 'اے اہل ایمان! اگر تمہارے (ماں) باپ اور (بہن) بھائی ایمان کے مقابل کفر کو پسند کریں تو ان سے دوستی نہ رکھو۔ اور جو ان سے دوستی رکھیں گے وہ ظالم ہیں'
    },
    words: [
      { id: '9:23:1', arabic: 'يَـٰٓأَيُّهَا', transliteration: 'yāayyuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you', ur: 'اے تم' } },
      { id: '9:23:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'who', ur: 'جو' } },
      { id: '9:23:3', arabic: 'ءَامَنُوا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '9:23:4', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '9:23:5', arabic: 'تَتَّخِذُوٓا۟', transliteration: 'tattakhidhū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'take', ur: 'لینا' } },
      { id: '9:23:6', arabic: 'ءَابَآءَكُمْ', transliteration: 'ābāakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your fathers', ur: 'تمہارا fathers' } },
      { id: '9:23:7', arabic: 'وَإِخْوَٰنَكُمْ', transliteration: 'wa-ikh\'wānakum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and your brothers', ur: 'اور تمہارا brothers' } },
      { id: '9:23:8', arabic: 'أَوْلِيَآءَ', transliteration: 'awliyāa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) allies', ur: '(as) allies' } },
      { id: '9:23:9', arabic: 'إِنِ', transliteration: 'ini', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '9:23:10', arabic: 'ٱسْتَحَبُّوا۟', transliteration: 'is\'taḥabbū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they prefer', ur: 'وہ prefer' } },
      { id: '9:23:11', arabic: 'ٱلْكُفْرَ', transliteration: 'l-kuf\'ra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[the] disbelief', ur: '[] disbelief' } },
      { id: '9:23:12', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'over', ur: 'اوپر' } },
      { id: '9:23:13', arabic: 'ٱلْإِيمَـٰنِ ۚ', transliteration: 'l-īmāni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[the] belief', ur: '[] belief' } },
      { id: '9:23:14', arabic: 'وَمَن', transliteration: 'waman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And whoever', ur: 'اور whoever' } },
      { id: '9:23:15', arabic: 'يَتَوَلَّهُم', transliteration: 'yatawallahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'takes them as allies', ur: 'takes ان کو as allies' } },
      { id: '9:23:16', arabic: 'مِّنكُمْ', transliteration: 'minkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among you', ur: 'میں سے تم' } },
      { id: '9:23:17', arabic: 'فَأُو۟لَـٰٓئِكَ', transliteration: 'fa-ulāika', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'then those', ur: 'پھر وہ لوگ' } },
      { id: '9:23:18', arabic: 'هُمُ', transliteration: 'humu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[they]', ur: '[وہ]' } },
      { id: '9:23:19', arabic: 'ٱلظَّـٰلِمُونَ', transliteration: 'l-ẓālimūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) the wrongdoers', ur: '(ہیں) ظالم' } }
    ],
    structure: { relationships: [{ from: 12, to: 13, label: 'جار + مجرور' }] }
  },
  24: {
    text: 'قُلْ إِن كَانَ ءَابَآؤُكُمْ وَأَبْنَآؤُكُمْ وَإِخْوَٰنُكُمْ وَأَزْوَٰجُكُمْ وَعَشِيرَتُكُمْ وَأَمْوَٰلٌ ٱقْتَرَفْتُمُوهَا وَتِجَٰرَةٌۭ تَخْشَوْنَ كَسَادَهَا وَمَسَٰكِنُ تَرْضَوْنَهَآ أَحَبَّ إِلَيْكُم مِّنَ ٱللَّهِ وَرَسُولِهِۦ وَجِهَادٍۢ فِى سَبِيلِهِۦ فَتَرَبَّصُوا۟ حَتَّىٰ يَأْتِىَ ٱللَّهُ بِأَمْرِهِۦ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلْفَٰسِقِينَ',
    translation: {
      en: 'Say, [O Muhammad], "If your fathers, your sons, your brothers, your wives, your relatives, wealth which you have obtained, commerce wherein you fear decline, and dwellings with which you are pleased are more beloved to you than Allah and His Messenger and jihad in His cause, then wait until Allah executes His command. And Allah does not guide the defiantly disobedient people."',
      ur: 'کہہ دو کہ اگر تمہارے باپ اور بیٹے اور بھائی اور عورتیں اور خاندان کے آدمی اور مال جو تم کماتے ہو اور تجارت جس کے بند ہونے سے ڈرتے ہو اور مکانات جن کو پسند کرتے ہو خدا اور اس کے رسول سے اور خدا کی راہ میں جہاد کرنے سے تمہیں زیادہ عزیز ہوں تو ٹھہرے رہو یہاں تک کہ خدا اپنا حکم (یعنی عذاب) بھیجے۔ اور خدا نافرمان لوگوں کو ہدایت نہیں دیا کرتا'
    },
    words: [
      { id: '9:24:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:24:2', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:24:3', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'are', ur: 'ہیں' } },
      { id: '9:24:4', arabic: 'ءَابَآؤُكُمْ', transliteration: 'ābāukum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your fathers', ur: 'تمہارا fathers' } },
      { id: '9:24:5', arabic: 'وَأَبْنَآؤُكُمْ', transliteration: 'wa-abnāukum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and your sons', ur: 'اور تمہارا sons' } },
      { id: '9:24:6', arabic: 'وَإِخْوَٰنُكُمْ', transliteration: 'wa-ikh\'wānukum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and your brothers', ur: 'اور تمہارا brothers' } },
      { id: '9:24:7', arabic: 'وَأَزْوَٰجُكُمْ', transliteration: 'wa-azwājukum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and your spouses', ur: 'اور تمہارا spouses' } },
      { id: '9:24:8', arabic: 'وَعَشِيرَتُكُمْ', transliteration: 'waʿashīratukum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and your relatives', ur: 'اور تمہارا relatives' } },
      { id: '9:24:9', arabic: 'وَأَمْو��ٰلٌ', transliteration: 'wa-amwālun', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and wealth', ur: 'اور مال' } },
      { id: '9:24:10', arabic: 'ٱقْتَرَفْتُمُوهَا', transliteration: 'iq\'taraftumūhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that you have acquired', ur: 'کہ تم رکھتے ہو acquired' } },
      { id: '9:24:11', arabic: 'وَتِجَـٰرَةٌۭ', transliteration: 'watijāratun', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and the commerce', ur: 'اور  commerce' } },
      { id: '9:24:12', arabic: 'تَخْشَوْنَ', transliteration: 'takhshawna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you fear', ur: 'تم ڈرنا' } },
      { id: '9:24:13', arabic: 'كَسَادَهَا', transliteration: 'kasādahā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a decline (in) it', ur: 'ایک decline (میں) it' } },
      { id: '9:24:14', arabic: 'وَمَسَـٰكِنُ', transliteration: 'wamasākinu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the dwellings', ur: 'اور  dwellings' } },
      { id: '9:24:15', arabic: 'تَرْضَوْنَهَآ', transliteration: 'tarḍawnahā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you delight (in) it', ur: 'تم delight (میں) it' } },
      { id: '9:24:16', arabic: 'أَحَبَّ', transliteration: 'aḥabba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) more beloved', ur: '(ہیں) more beloved' } },
      { id: '9:24:17', arabic: 'إِلَيْكُم', transliteration: 'ilaykum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '9:24:18', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'than', ur: 'than' } },
      { id: '9:24:19', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:24:20', arabic: 'وَرَسُولِهِۦ', transliteration: 'warasūlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:24:21', arabic: 'وَجِهَادٍۢ', transliteration: 'wajihādin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and striving', ur: 'اور striving' } },
      { id: '9:24:22', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:24:23', arabic: 'سَبِيلِهِۦ', transliteration: 'sabīlihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'His way', ur: 'اس کا راستہ' } },
      { id: '9:24:24', arabic: 'فَتَرَبَّصُوا۟', transliteration: 'fatarabbaṣū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'then wait', ur: 'پھر wait' } },
      { id: '9:24:25', arabic: 'حَتَّىٰ', transliteration: 'ḥattā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'until', ur: 'until' } },
      { id: '9:24:26', arabic: 'يَأْتِىَ', transliteration: 'yatiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah brings', ur: 'اللہ brings' } },
      { id: '9:24:27', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah brings', ur: 'اللہ brings' } },
      { id: '9:24:28', arabic: 'بِأَمْرِهِۦ ۗ', transliteration: 'bi-amrihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'His Command', ur: 'اس کا Command' } },
      { id: '9:24:29', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:24:30', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(does) not', ur: '(does) نہیں' } },
      { id: '9:24:31', arabic: 'يَهْدِى', transliteration: 'yahdī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'guide', ur: 'ہدایت دینا' } },
      { id: '9:24:32', arabic: 'ٱلْقَوْمَ', transliteration: 'l-qawma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the people ', ur: 'لوگ ' } },
      { id: '9:24:33', arabic: 'ٱلْفَـٰسِقِينَ', transliteration: 'l-fāsiqīna', pos: ['N'], posLabel: 'N', root: 'ف س ق', meaning: { en: 'the defiantly disobedient', ur: ' defiantly disobedient' } }
    ],
    structure: { relationships: [{ from: 5, to: 7, label: 'عطف' }, { from: 7, to: 9, label: 'عطف' }, { from: 9, to: 11, label: 'عطف' }] }
  },
  25: {
    text: 'لَقَدْ نَصَرَكُمُ ٱللَّهُ فِى مَوَاطِنَ كَثِيرَةٍۢ ۙ وَيَوْمَ حُنَيْنٍ ۙ إِذْ أَعْجَبَتْكُمْ كَثْرَتُكُمْ فَلَمْ تُغْنِ عَنكُمْ شَيْـًۭٔا وَضَاقَتْ عَلَيْكُمُ ٱلْأَرْضُ بِمَا رَحُبَتْ ثُمَّ وَلَّيْتُم مُّدْبِرِينَ',
    translation: {
      en: 'Allah has already given you victory in many regions and [even] on the day of Hunayn, when your great number pleased you, but it did not avail you at all, and the earth was confining for you with its vastness; then you turned back, fleeing.',
      ur: 'خدا نے بہت سے موقعوں پر تم کو مدد دی ہے اور (جنگ) حنین کے دن۔ جب تم کو اپنی (جماعت کی) کثرت پر غرّہ تھا تو وہ تمہارے کچھ بھی کام نہ آئی۔ اور زمین باوجود (اتنی بڑی) فراخی کے تم پر تنگ ہوگئی پھر تم پیٹھ پھیر کر پھر گئے'
    },
    words: [
      { id: '9:25:1', arabic: 'لَقَدْ', transliteration: 'laqad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Verily', ur: 'Verily' } },
      { id: '9:25:2', arabic: 'نَصَرَكُمُ', transliteration: 'naṣarakumu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah helped you', ur: 'اللہ مدد کی تم' } },
      { id: '9:25:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah helped you', ur: 'اللہ مدد کی تم' } },
      { id: '9:25:4', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:25:5', arabic: 'مَوَاطِنَ', transliteration: 'mawāṭina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'regions', ur: 'regions' } },
      { id: '9:25:6', arabic: 'كَثِيرَةٍۢ ۙ', transliteration: 'kathīratin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'many', ur: 'بہت سے' } },
      { id: '9:25:7', arabic: 'وَيَوْمَ', transliteration: 'wayawma', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and (on the) day', ur: 'اور (پر ) دن' } },
      { id: '9:25:8', arabic: 'حُنَيْنٍ ۙ', transliteration: 'ḥunaynin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Hunain', ur: '(کا) Hunain' } },
      { id: '9:25:9', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:25:10', arabic: 'أَعْجَبَتْكُمْ', transliteration: 'aʿjabatkum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'pleased you', ur: 'pleased تم' } },
      { id: '9:25:11', arabic: 'كَثْرَتُكُمْ', transliteration: 'kathratukum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your multitude', ur: 'تمہارا multitude' } },
      { id: '9:25:12', arabic: 'فَلَمْ', transliteration: 'falam', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'but not', ur: 'لیکن نہیں' } },
      { id: '9:25:13', arabic: 'تُغْنِ', transliteration: 'tugh\'ni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'availed', ur: 'availed' } },
      { id: '9:25:14', arabic: 'عَنكُمْ', transliteration: 'ʿankum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '9:25:15', arabic: 'شَيْـًۭٔا', transliteration: 'shayan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'anything', ur: 'anything' } },
      { id: '9:25:16', arabic: 'وَضَاقَتْ', transliteration: 'waḍāqat', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (was) straitened', ur: 'اور (تھا) straitened' } },
      { id: '9:25:17', arabic: 'عَلَيْكُمُ', transliteration: 'ʿalaykumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '9:25:18', arabic: 'ٱلْأَرْضُ', transliteration: 'l-arḍu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '9:25:19', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '(in spite) of its vastness', ur: '(میں spite) کا its vastness' } },
      { id: '9:25:20', arabic: 'رَحُبَتْ', transliteration: 'raḥubat', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in spite) of its vastness', ur: '(میں spite) کا its vastness' } },
      { id: '9:25:21', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '9:25:22', arabic: 'وَلَّيْتُم', transliteration: 'wallaytum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'you turned back', ur: 'تم پھیرا back' } },
      { id: '9:25:23', arabic: 'مُّدْبِرِينَ', transliteration: 'mud\'birīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'fleeing', ur: 'fleeing' } }
    ],
    structure: { relationships: [{ from: 2, to: 7, label: 'عطف' }] }
  },
  26: {
    text: 'ثُمَّ أَنزَلَ ٱللَّهُ سَكِينَتَهُۥ عَلَىٰ رَسُولِهِۦ وَعَلَى ٱلْمُؤْمِنِينَ وَأَنزَلَ جُنُودًۭا لَّمْ تَرَوْهَا وَعَذَّبَ ٱلَّذِينَ كَفَرُوا۟ ۚ وَذَٰلِكَ جَزَآءُ ٱلْكَٰفِرِينَ',
    translation: {
      en: 'Then Allah sent down His tranquillity upon His Messenger and upon the believers and sent down soldiers angels whom you did not see and punished those who disbelieved. And that is the recompense of the disbelievers.',
      ur: 'پھر خدا نے اپنے پیغمبر پر اور مومنوں پر اپنی طرف سے تسکین نازل فرمائی (اور تمہاری مدد کو فرشتوں کے) لشکر جو تمہیں نظر نہیں آتے تھے (آسمان سے) اُتارے اور کافروں کو عذاب دیا۔ اور کفر کرنے والوں کی یہی سزا ہے'
    },
    words: [
      { id: '9:26:1', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '9:26:2', arabic: 'أَنزَلَ', transliteration: 'anzala', pos: ['N'], posLabel: 'N', root: 'ن ز ل', meaning: { en: 'Allah sent down', ur: 'اللہ بھیجا down' } },
      { id: '9:26:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah sent down', ur: 'اللہ بھیجا down' } },
      { id: '9:26:4', arabic: 'سَكِينَتَهُۥ', transliteration: 'sakīnatahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'His tranquility', ur: 'اس کا tranquility' } },
      { id: '9:26:5', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:26:6', arabic: 'رَسُولِهِۦ', transliteration: 'rasūlihi', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'His Messenger', ur: 'اس کا رسول' } },
      { id: '9:26:7', arabic: 'وَعَلَى', transliteration: 'waʿalā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and on', ur: 'اور پر' } },
      { id: '9:26:8', arabic: 'ٱلْمُؤْمِنِينَ', transliteration: 'l-mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the believers', ur: ' مومنین' } },
      { id: '9:26:9', arabic: 'وَأَنزَلَ', transliteration: 'wa-anzala', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and sent down', ur: 'اور بھیجا down' } },
      { id: '9:26:10', arabic: 'جُنُودًۭا', transliteration: 'junūdan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'forces', ur: 'forces' } },
      { id: '9:26:11', arabic: 'لَّمْ', transliteration: 'lam', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'which you did not see', ur: 'جو تم کیا نہیں دیکھنا' } },
      { id: '9:26:12', arabic: 'تَرَوْهَا', transliteration: 'tarawhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'which you did not see', ur: 'جو تم کیا نہیں دیکھنا' } },
      { id: '9:26:13', arabic: 'وَعَذَّبَ', transliteration: 'waʿadhaba', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and He punished', ur: 'اور وہ punished' } },
      { id: '9:26:14', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:26:15', arabic: 'كَفَرُوا۟ ۚ', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' } },
      { id: '9:26:16', arabic: 'وَذَٰلِكَ', transliteration: 'wadhālika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And that', ur: 'اور کہ' } },
      { id: '9:26:17', arabic: 'جَزَآءُ', transliteration: 'jazāu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the recompense', ur: '(ہے)  recompense' } },
      { id: '9:26:18', arabic: 'ٱلْكَـٰفِرِينَ', transliteration: 'l-kāfirīna', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: '(of) the disbelievers', ur: '(کا)  کافر' } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }] }
  },
  27: {
    text: 'ثُمَّ يَتُوبُ ٱللَّهُ مِنۢ بَعْدِ ذَٰلِكَ عَلَىٰ مَن يَشَآءُ ۗ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ',
    translation: {
      en: 'Then Allah will accept repentance after that for whom He wills; and Allah is Forgiving and Merciful.',
      ur: 'پھر خدا اس کے بعد جس پر چاہے مہربانی سے توجہ فرمائے اور خدا بخشنے والا مہربان ہے'
    },
    words: [
      { id: '9:27:1', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '9:27:2', arabic: 'يَتُوبُ', transliteration: 'yatūbu', pos: ['V'], posLabel: 'V', root: 'ت و ب', meaning: { en: 'Allah accepts repentance', ur: 'اللہ accepts repentance' } },
      { id: '9:27:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah accepts repentance', ur: 'اللہ accepts repentance' } },
      { id: '9:27:4', arabic: 'مِنۢ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:27:5', arabic: 'بَعْدِ', transliteration: 'baʿdi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:27:6', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:27:7', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'for', ur: 'کے لیے' } },
      { id: '9:27:8', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'whom', ur: 'whom' } },
      { id: '9:27:9', arabic: 'يَشَآءُ ۗ', transliteration: 'yashāu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He wills', ur: 'وہ wills' } },
      { id: '9:27:10', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:27:11', arabic: 'غَفُورٌۭ', transliteration: 'ghafūrun', pos: ['N'], posLabel: 'N', root: 'غ ف ر', meaning: { en: '(is) Oft-Forgiving', ur: '(ہے) Oft-بخشنے والا' } },
      { id: '9:27:12', arabic: 'رَّحِيمٌۭ', transliteration: 'raḥīmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Most Merciful', ur: 'نہایت مہربان' } }
    ],
    structure: { relationships: [] }
  },
  28: {
    text: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِنَّمَا ٱلْمُشْرِكُونَ نَجَسٌۭ فَلَا يَقْرَبُوا۟ ٱلْمَسْجِدَ ٱلْحَرَامَ بَعْدَ عَامِهِمْ هَٰذَا ۚ وَإِنْ خِفْتُمْ عَيْلَةًۭ فَسَوْفَ يُغْنِيكُمُ ٱللَّهُ مِن فَضْلِهِۦٓ إِن شَآءَ ۚ إِنَّ ٱللَّهَ عَلِيمٌ حَكِيمٌۭ',
    translation: {
      en: 'O you who have believed, indeed the polytheists are unclean, so let them not approach al-Masjid al-Haram after this, their [final] year. And if you fear privation, Allah will enrich you from His bounty if He wills. Indeed, Allah is Knowing and Wise.',
      ur: 'مومنو! مشرک تو پلید ہیں تو اس برس کے بعد وہ خانہٴ کعبہ کا پاس نہ جانے پائیں اور اگر تم کو مفلسی کا خوف ہو تو خدا چاہے گا تو تم کو اپنے فضل سے غنی کر دے گا۔ بےشک خدا سب کچھ جانتا (اور) حکمت والا ہے'
    },
    words: [
      { id: '9:28:1', arabic: 'يَـٰٓأَيُّهَا', transliteration: 'yāayyuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:28:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:28:3', arabic: 'ءَامَنُوٓا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:28:4', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:28:5', arabic: 'ٱلْمُشْرِكُونَ', transliteration: 'l-mush\'rikūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the polytheists', ur: ' polytheists' } },
      { id: '9:28:6', arabic: 'نَجَسٌۭ', transliteration: 'najasun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) unclean', ur: '(ہیں) unclean' } },
      { id: '9:28:7', arabic: 'فَلَا', transliteration: 'falā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so let them not come near', ur: 'پس let ان کو نہیں آنا قریب' } },
      { id: '9:28:8', arabic: 'يَقْرَبُوا۟', transliteration: 'yaqrabū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'so let them not come near', ur: 'پس let ان کو نہیں آنا قریب' } },
      { id: '9:28:9', arabic: 'ٱلْمَسْجِدَ', transliteration: 'l-masjida', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Al-Masjid Al-Haraam', ur: 'Al-Masjid Al-Haraam' } },
      { id: '9:28:10', arabic: 'ٱلْحَرَامَ', transliteration: 'l-ḥarāma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Al-Masjid Al-Haraam', ur: 'Al-Masjid Al-Haraam' } },
      { id: '9:28:11', arabic: 'بَعْدَ', transliteration: 'baʿda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:28:12', arabic: 'عَامِهِمْ', transliteration: 'ʿāmihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'this, their (final) year', ur: 'یہ, ان کا (final) year' } },
      { id: '9:28:13', arabic: 'هَـٰذَا ۚ', transliteration: 'hādhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'this, their (final) year', ur: 'یہ, ان کا (final) year' } },
      { id: '9:28:14', arabic: 'وَإِنْ', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '9:28:15', arabic: 'خِفْتُمْ', transliteration: 'khif\'tum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you fear', ur: 'تم ڈرنا' } },
      { id: '9:28:16', arabic: 'عَيْلَةًۭ', transliteration: 'ʿaylatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'poverty', ur: 'poverty' } },
      { id: '9:28:17', arabic: 'فَسَوْفَ', transliteration: 'fasawfa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then soon', ur: 'پھر soon' } },
      { id: '9:28:18', arabic: 'يُغْنِيكُمُ', transliteration: 'yugh\'nīkumu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah will enrich you', ur: 'اللہ  enrich تم' } },
      { id: '9:28:19', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will enrich you', ur: 'اللہ  enrich تم' } },
      { id: '9:28:20', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:28:21', arabic: 'فَضْلِهِۦٓ', transliteration: 'faḍlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'His Bounty', ur: 'اس کا Bounty' } },
      { id: '9:28:22', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '9:28:23', arabic: 'شَآءَ ۚ', transliteration: 'shāa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He wills', ur: 'وہ wills' } },
      { id: '9:28:24', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:28:25', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:28:26', arabic: 'عَلِيمٌ', transliteration: 'ʿalīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } },
      { id: '9:28:27', arabic: 'حَكِيمٌۭ', transliteration: 'ḥakīmun', pos: ['N'], posLabel: 'N', root: 'ح ك م', meaning: { en: 'All-Wise', ur: 'حکمت والا' } }
    ],
    structure: { relationships: [{ from: 14, to: 15, label: 'شرط + فعل' }] }
  },
  29: {
    text: 'قَٰتِلُوا۟ ٱلَّذِينَ لَا يُؤْمِنُونَ بِٱللَّهِ وَلَا بِٱلْيَوْمِ ٱلْءَاخِرِ وَلَا يُحَرِّمُونَ مَا حَرَّمَ ٱللَّهُ وَرَسُولُهُۥ وَلَا يَدِينُونَ دِينَ ٱلْحَقِّ مِنَ ٱلَّذِينَ أُوتُوا۟ ٱلْكِتَٰبَ حَتَّىٰ يُعْطُوا۟ ٱلْجِزْيَةَ عَن يَدٍۢ وَهُمْ صَٰغِرُونَ',
    translation: {
      en: 'Fight those who do not believe in Allah or in the Last Day and who do not consider unlawful what Allah and His Messenger have made unlawful and who do not adopt the religion of truth from those who were given the Scripture - [fight] until they give the jizyah willingly while they are humbled.',
      ur: 'جو اہل کتاب میں سے خدا پر ایمان نہیں لاتے اور نہ روز آخرت پر (یقین رکھتے ہیں) اور نہ ان چیزوں کو حرام سمجھتے ہیں جو خدا اور اس کے رسول نے حرام کی ہیں اور نہ دین حق کو قبول کرتے ہیں ان سے جنگ کرو یہاں تک کہ ذلیل ہوکر اپنے ہاتھ سے جزیہ دیں'
    },
    words: [
      { id: '9:29:1', arabic: 'قَـٰتِلُوا۟', transliteration: 'qātilū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Fight', ur: 'لڑنا' } },
      { id: '9:29:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:29:3', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(do) not', ur: '(کرنا) نہیں' } },
      { id: '9:29:4', arabic: 'يُؤْمِنُونَ', transliteration: 'yu\'minūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '9:29:5', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:29:6', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:29:7', arabic: 'بِٱلْيَوْمِ', transliteration: 'bil-yawmi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in the Day', ur: 'میں قیامت کا دن' } },
      { id: '9:29:8', arabic: 'ٱلْـَٔاخِرِ', transliteration: 'l-ākhiri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Last', ur: ' Last' } },
      { id: '9:29:9', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:29:10', arabic: 'يُحَرِّمُونَ', transliteration: 'yuḥarrimūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they make unlawful', ur: 'وہ بنانا unlawful' } },
      { id: '9:29:11', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:29:12', arabic: 'حَرَّمَ', transliteration: 'ḥarrama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has made unlawful', ur: 'اللہ رکھتا ہے بنایا unlawful' } },
      { id: '9:29:13', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has made unlawful', ur: 'اللہ رکھتا ہے بنایا unlawful' } },
      { id: '9:29:14', arabic: 'وَرَسُولُهُۥ', transliteration: 'warasūluhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:29:15', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:29:16', arabic: 'يَدِينُونَ', transliteration: 'yadīnūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they acknowledge', ur: 'وہ acknowledge' } },
      { id: '9:29:17', arabic: 'دِينَ', transliteration: 'dīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) religion', ur: '() دین' } },
      { id: '9:29:18', arabic: 'ٱلْحَقِّ', transliteration: 'l-ḥaqi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the truth', ur: '(کا) حق' } },
      { id: '9:29:19', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:29:20', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:29:21', arabic: 'أُوتُوا۟', transliteration: 'ūtū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'were given', ur: 'تھے given' } },
      { id: '9:29:22', arabic: 'ٱلْكِتَـٰبَ', transliteration: 'l-kitāba', pos: ['N'], posLabel: 'N', root: 'ك ت ب', meaning: { en: 'the Scripture', ur: ' Scripture' } },
      { id: '9:29:23', arabic: 'حَتَّىٰ', transliteration: 'ḥattā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'until', ur: 'until' } },
      { id: '9:29:24', arabic: 'يُعْطُوا۟', transliteration: 'yuʿ\'ṭū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they pay', ur: 'وہ pay' } },
      { id: '9:29:25', arabic: 'ٱلْجِزْيَةَ', transliteration: 'l-jiz\'yata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the jizyah', ur: ' jizyah' } },
      { id: '9:29:26', arabic: 'عَن', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'willingly', ur: 'willingly' } },
      { id: '9:29:27', arabic: 'يَدٍۢ', transliteration: 'yadin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'willingly', ur: 'willingly' } },
      { id: '9:29:28', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:29:29', arabic: 'صَـٰغِرُونَ', transliteration: 'ṣāghirūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) subdued', ur: '(ہیں) subdued' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'نفی + فعل' }, { from: 26, to: 27, label: 'جار + مجرور' }] }
  },
  30: {
    text: 'وَقَالَتِ ٱلْيَهُودُ عُزَيْرٌ ٱبْنُ ٱللَّهِ وَقَالَتِ ٱلنَّصَٰرَى ٱلْمَسِيحُ ٱبْنُ ٱللَّهِ ۖ ذَٰلِكَ قَوْلُهُم بِأَفْوَٰهِهِمْ ۖ يُضَٰهِـُٔونَ قَوْلَ ٱلَّذِينَ كَفَرُوا۟ مِن قَبْلُ ۚ قَٰتَلَهُمُ ٱللَّهُ ۚ أَنَّىٰ يُؤْفَكُونَ',
    translation: {
      en: 'The Jews say, "Ezra is the son of Allah "; and the Christians say, "The Messiah is the son of Allah." That is their statement from their mouths; they imitate the saying of those who disbelieved [before them]. May Allah destroy them; how are they deluded?',
      ur: 'اور یہود کہتے ہیں کہ عُزیر خدا کے بیٹے ہیں اور عیسائی کہتے ہیں کہ مسیح خدا کے بیٹے ہیں۔ یہ ان کے منہ کی باتیں ہیں پہلے کافر بھی اسی طرح کی باتیں کہا کرتے تھے یہ بھی انہیں کی ریس کرنے میں لگے ہیں۔ خدا ان کو ہلاک کرے۔ یہ کہاں بہکے پھرتے ہیں'
    },
    words: [
      { id: '9:30:1', arabic: 'وَقَالَتِ', transliteration: 'waqālati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And said', ur: 'اور کہا' } },
      { id: '9:30:2', arabic: 'ٱلْيَهُودُ', transliteration: 'l-yahūdu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Jews', ur: ' Jews' } },
      { id: '9:30:3', arabic: 'عُزَيْرٌ', transliteration: 'ʿuzayrun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Uzair', ur: 'Uzair' } },
      { id: '9:30:4', arabic: 'ٱبْنُ', transliteration: 'ub\'nu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) son', ur: '(ہے) son' } },
      { id: '9:30:5', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:30:6', arabic: 'وَقَالَتِ', transliteration: 'waqālati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And said', ur: 'اور کہا' } },
      { id: '9:30:7', arabic: 'ٱلنَّصَـٰرَى', transliteration: 'l-naṣārā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Christians', ur: ' Christians' } },
      { id: '9:30:8', arabic: 'ٱلْمَسِيحُ', transliteration: 'l-masīḥu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Messiah', ur: 'Messiah' } },
      { id: '9:30:9', arabic: 'ٱبْنُ', transliteration: 'ub\'nu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) son', ur: '(ہے) son' } },
      { id: '9:30:10', arabic: 'ٱللَّهِ ۖ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:30:11', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '9:30:12', arabic: 'قَوْلُهُم', transliteration: 'qawluhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) their saying', ur: '(ہے) ان کا saying' } },
      { id: '9:30:13', arabic: 'بِأَفْوَٰهِهِمْ ۖ', transliteration: 'bi-afwāhihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with their mouths', ur: 'ساتھ ان کا mouths' } },
      { id: '9:30:14', arabic: 'يُضَـٰهِـُٔونَ', transliteration: 'yuḍāhiūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they imitate', ur: 'وہ imitate' } },
      { id: '9:30:15', arabic: 'قَوْلَ', transliteration: 'qawla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the saying', ur: ' saying' } },
      { id: '9:30:16', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) those who', ur: '(کا) جو لوگ' } },
      { id: '9:30:17', arabic: 'كَفَرُوا۟', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' } },
      { id: '9:30:18', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '9:30:19', arabic: 'قَبْلُ ۚ', transliteration: 'qablu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '9:30:20', arabic: 'قَـٰتَلَهُمُ', transliteration: 'qātalahumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(May) Allah destroy them', ur: '(May) اللہ destroy ان کو' } },
      { id: '9:30:21', arabic: 'ٱللَّهُ ۚ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(May) Allah destroy them', ur: '(May) اللہ destroy ان کو' } },
      { id: '9:30:22', arabic: 'أَنَّىٰ', transliteration: 'annā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'How', ur: 'کیسے' } },
      { id: '9:30:23', arabic: 'يُؤْفَكُونَ', transliteration: 'yu\'fakūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'deluded are they', ur: 'deluded ہیں وہ' } }
    ],
    structure: { relationships: [{ from: 18, to: 19, label: 'جار + مجرور' }] }
  },
  31: {
    text: 'ٱتَّخَذُوٓا۟ أَحْبَارَهُمْ وَرُهْبَٰنَهُمْ أَرْبَابًۭا مِّن دُونِ ٱللَّهِ وَٱلْمَسِيحَ ٱبْنَ مَرْيَمَ وَمَآ أُمِرُوٓا۟ إِلَّا لِيَعْبُدُوٓا۟ إِلَٰهًۭا وَٰحِدًۭا ۖ لَّآ إِلَٰهَ إِلَّا هُوَ ۚ سُبْحَٰنَهُۥ عَمَّا يُشْرِكُونَ',
    translation: {
      en: 'They have taken their scholars and monks as lords besides Allah, and [also] the Messiah, the son of Mary. And they were not commanded except to worship one God; there is no deity except Him. Exalted is He above whatever they associate with Him.',
      ur: 'انہوں نے اپنے علماء اور مشائخ اور مسیح ابن مریم کو الله کے سوا خدا بنا لیا حالانکہ اُن کو یہ حکم دیا گیا تھا کہ خدائے واحد کے سوا کسی کی عبادت نہ کریں۔ اس کے سوا کوئی معبود نہیں۔ اور وہ ان لوگوں کے شریک مقرر کرنے سے پاک ہے'
    },
    words: [
      { id: '9:31:1', arabic: 'ٱتَّخَذُوٓا۟', transliteration: 'ittakhadhū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They have taken', ur: 'وہ رکھتے ہو taken' } },
      { id: '9:31:2', arabic: 'أَحْبَارَهُمْ', transliteration: 'aḥbārahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their rabbis', ur: 'ان کا rabbis' } },
      { id: '9:31:3', arabic: 'وَرُهْبَـٰنَهُمْ', transliteration: 'waruh\'bānahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and their monks', ur: 'اور ان کا monks' } },
      { id: '9:31:4', arabic: 'أَرْبَابًۭا', transliteration: 'arbāban', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) Lords', ur: '(as) Lords' } },
      { id: '9:31:5', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'besides', ur: 'besides' } },
      { id: '9:31:6', arabic: 'دُونِ', transliteration: 'dūni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'besides', ur: 'besides' } },
      { id: '9:31:7', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:31:8', arabic: 'وَٱلْمَسِيحَ', transliteration: 'wal-masīḥa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the Messiah', ur: 'اور  Messiah' } },
      { id: '9:31:9', arabic: 'ٱبْنَ', transliteration: 'ib\'na', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'son', ur: 'son' } },
      { id: '9:31:10', arabic: 'مَرْيَمَ', transliteration: 'maryama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Maryam', ur: '(کا) Maryam' } },
      { id: '9:31:11', arabic: 'وَمَآ', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:31:12', arabic: 'أُمِرُوٓا۟', transliteration: 'umirū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they were commanded', ur: 'وہ تھے commanded' } },
      { id: '9:31:13', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:31:14', arabic: 'لِيَعْبُدُوٓا۟', transliteration: 'liyaʿbudū', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that they worship', ur: 'کہ وہ عبادت کرنا' } },
      { id: '9:31:15', arabic: 'إِلَـٰهًۭا', transliteration: 'ilāhan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'One God', ur: 'One اللہ' } },
      { id: '9:31:16', arabic: 'وَٰحِدًۭا ۖ', transliteration: 'wāḥidan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'One God', ur: 'One اللہ' } },
      { id: '9:31:17', arabic: 'لَّآ', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(There) is no', ur: '(وہاں) ہے نہیں' } },
      { id: '9:31:18', arabic: 'إِلَـٰهَ', transliteration: 'ilāha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'god', ur: 'اللہ' } },
      { id: '9:31:19', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:31:20', arabic: 'هُوَ ۚ', transliteration: 'huwa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Him', ur: 'Him' } },
      { id: '9:31:21', arabic: 'سُبْحَـٰنَهُۥ', transliteration: 'sub\'ḥānahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Glory be to Him', ur: 'Glory be کو/تک Him' } },
      { id: '9:31:22', arabic: 'عَمَّا', transliteration: 'ʿammā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from what', ur: 'سے کیا/جو' } },
      { id: '9:31:23', arabic: 'يُشْرِكُونَ', transliteration: 'yush\'rikūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they associate (with Him)', ur: 'وہ associate (ساتھ Him)' } }
    ],
    structure: { relationships: [] }
  },
  32: {
    text: 'يُرِيدُونَ أَن يُطْفِـُٔوا۟ نُورَ ٱللَّهِ بِأَفْوَٰهِهِمْ وَيَأْبَى ٱللَّهُ إِلَّآ أَن يُتِمَّ نُورَهُۥ وَلَوْ كَرِهَ ٱلْكَٰفِرُونَ',
    translation: {
      en: 'They want to extinguish the light of Allah with their mouths, but Allah refuses except to perfect His light, although the disbelievers dislike it.',
      ur: 'یہ چاہتے ہیں کہ خدا کے نور کو اپنے منہ سے (پھونک مار کر) بجھا دیں اور خدا اپنے نور کو پورا کئے بغیر رہنے کا نہیں۔ اگرچہ کافروں کو برا ہی لگے'
    },
    words: [
      { id: '9:32:1', arabic: 'يُرِيدُونَ', transliteration: 'yurīdūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They want', ur: 'وہ want' } },
      { id: '9:32:2', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:32:3', arabic: 'يُطْفِـُٔوا۟', transliteration: 'yuṭ\'fiū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'extinguish', ur: 'extinguish' } },
      { id: '9:32:4', arabic: 'نُورَ', transliteration: 'nūra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah\'s light', ur: 'Allah\'s light' } },
      { id: '9:32:5', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah\'s light', ur: 'Allah\'s light' } },
      { id: '9:32:6', arabic: 'بِأَفْوَٰهِهِمْ', transliteration: 'bi-afwāhihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with their mouths', ur: 'ساتھ ان کا mouths' } },
      { id: '9:32:7', arabic: 'وَيَأْبَى', transliteration: 'wayabā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'but Allah refuses', ur: 'لیکن اللہ refuses' } },
      { id: '9:32:8', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'but Allah refuses', ur: 'لیکن اللہ refuses' } },
      { id: '9:32:9', arabic: 'إِلَّآ', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:32:10', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:32:11', arabic: 'يُتِمَّ', transliteration: 'yutimma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'perfect', ur: 'perfect' } },
      { id: '9:32:12', arabic: 'نُورَهُۥ', transliteration: 'nūrahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'His Light', ur: 'اس کا نور' } },
      { id: '9:32:13', arabic: 'وَلَوْ', transliteration: 'walaw', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'even if', ur: 'even اگر' } },
      { id: '9:32:14', arabic: 'كَرِهَ', transliteration: 'kariha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the disbelievers dislike (it)', ur: ' کافر dislike (it)' } },
      { id: '9:32:15', arabic: 'ٱلْكَـٰفِرُونَ', transliteration: 'l-kāfirūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the disbelievers dislike (it)', ur: ' کافر dislike (it)' } }
    ],
    structure: { relationships: [{ from: 1, to: 7, label: 'عطف' }] }
  },
  33: {
    text: 'هُوَ ٱلَّذِىٓ أَرْسَلَ رَسُولَهُۥ بِٱلْهُدَىٰ وَدِينِ ٱلْحَقِّ لِيُظْهِرَهُۥ عَلَى ٱلدِّينِ كُلِّهِۦ وَلَوْ كَرِهَ ٱلْمُشْرِكُونَ',
    translation: {
      en: 'It is He who has sent His Messenger with guidance and the religion of truth to manifest it over all religion, although they who associate others with Allah dislike it.',
      ur: 'وہی تو ہے جس نے اپنے پیغمبر کو ہدایت اور دین حق دے کر بھیجا تاکہ اس (دین) کو (دنیا کے) تمام دینوں پر غالب کرے۔ اگرچہ کافر ناخوش ہی ہوں'
    },
    words: [
      { id: '9:33:1', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He', ur: 'وہ' } },
      { id: '9:33:2', arabic: 'ٱلَّذِىٓ', transliteration: 'alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the One Who', ur: '(ہے)  One جو' } },
      { id: '9:33:3', arabic: 'أَرْسَلَ', transliteration: 'arsala', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'has sent', ur: 'رکھتا ہے بھیجا' } },
      { id: '9:33:4', arabic: 'رَسُولَهُۥ', transliteration: 'rasūlahu', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'His Messenger', ur: 'اس کا رسول' } },
      { id: '9:33:5', arabic: 'بِٱلْهُدَىٰ', transliteration: 'bil-hudā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with the guidance', ur: 'ساتھ  guidance' } },
      { id: '9:33:6', arabic: 'وَدِينِ', transliteration: 'wadīni', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the religion', ur: 'اور  دین' } },
      { id: '9:33:7', arabic: 'ٱلْحَقِّ', transliteration: 'l-ḥaqi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) [the] truth', ur: '(کا) [] حق/سچ' } },
      { id: '9:33:8', arabic: 'لِيُظْهِرَهُۥ', transliteration: 'liyuẓ\'hirahu', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to manifest it', ur: 'کو/تک manifest it' } },
      { id: '9:33:9', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'over', ur: 'اوپر' } },
      { id: '9:33:10', arabic: 'ٱلدِّينِ', transliteration: 'l-dīni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'all religions', ur: 'سب religions' } },
      { id: '9:33:11', arabic: 'كُلِّهِۦ', transliteration: 'kullihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'all religions', ur: 'سب religions' } },
      { id: '9:33:12', arabic: 'وَلَوْ', transliteration: 'walaw', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Even if', ur: 'Even اگر' } },
      { id: '9:33:13', arabic: 'كَرِهَ', transliteration: 'kariha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'dislike (it)', ur: 'dislike (it)' } },
      { id: '9:33:14', arabic: 'ٱلْمُشْرِكُونَ', transliteration: 'l-mush\'rikūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the polytheists', ur: ' polytheists' } }
    ],
    structure: { relationships: [{ from: 9, to: 10, label: 'جار + مجرور' }] }
  },
  34: {
    text: '۞ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِنَّ كَثِيرًۭا مِّنَ ٱلْأَحْبَارِ وَٱلرُّهْبَانِ لَيَأْكُلُونَ أَمْوَٰلَ ٱلنَّاسِ بِٱلْبَٰطِلِ وَيَصُدُّونَ عَن سَبِيلِ ٱللَّهِ ۗ وَٱلَّذِينَ يَكْنِزُونَ ٱلذَّهَبَ وَٱلْفِضَّةَ وَلَا يُنفِقُونَهَا فِى سَبِيلِ ٱللَّهِ فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍۢ',
    translation: {
      en: 'O you who have believed, indeed many of the scholars and the monks devour the wealth of people unjustly and avert [them] from the way of Allah. And those who hoard gold and silver and spend it not in the way of Allah - give them tidings of a painful punishment.',
      ur: 'مومنو! (اہل کتاب کے) بہت سے عالم اور مشائخ لوگوں کا مال ناحق کھاتے اور (ان کو) راہ خدا سے روکتے ہیں۔ اور جو لوگ سونا اور چاندی جمع کرتے ہیں اور اس کو خدا کے رستے میں خرچ نہیں کرتے۔ ان کو اس دن عذاب الیم کی خبر سنادو'
    },
    words: [
      { id: '9:34:1', arabic: '۞ يَـٰٓأَيُّهَا', transliteration: 'yāayyuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:34:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:34:3', arabic: 'ءَامَنُوٓا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:34:4', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:34:5', arabic: 'كَثِيرًۭا', transliteration: 'kathīran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'many', ur: 'بہت سے' } },
      { id: '9:34:6', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:34:7', arabic: 'ٱلْأَحْبَارِ', transliteration: 'l-aḥbāri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the rabbis', ur: ' rabbis' } },
      { id: '9:34:8', arabic: 'وَٱلرُّهْبَانِ', transliteration: 'wal-ruh\'bāni', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the monks', ur: 'اور  monks' } },
      { id: '9:34:9', arabic: 'لَيَأْكُلُونَ', transliteration: 'layakulūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely eat', ur: 'بےشک کھانا' } },
      { id: '9:34:10', arabic: 'أَمْوَٰلَ', transliteration: 'amwāla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) wealth', ur: '() مال' } },
      { id: '9:34:11', arabic: 'ٱلنَّاسِ', transliteration: 'l-nāsi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the people', ur: '(کا) لوگ' } },
      { id: '9:34:12', arabic: 'بِٱلْبَـٰطِلِ', transliteration: 'bil-bāṭili', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in falsehood', ur: 'میں falsehood' } },
      { id: '9:34:13', arabic: 'وَيَصُدُّونَ', transliteration: 'wayaṣuddūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and hinder', ur: 'اور hinder' } },
      { id: '9:34:14', arabic: 'عَن', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:34:15', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:34:16', arabic: 'ٱللَّهِ ۗ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:34:17', arabic: 'وَٱلَّذِينَ', transliteration: 'wa-alladhīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And those who', ur: 'اور جو لوگ' } },
      { id: '9:34:18', arabic: 'يَكْنِزُونَ', transliteration: 'yaknizūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'hoard', ur: 'hoard' } },
      { id: '9:34:19', arabic: 'ٱلذَّهَبَ', transliteration: 'l-dhahaba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the gold', ur: ' gold' } },
      { id: '9:34:20', arabic: 'وَٱلْفِضَّةَ', transliteration: 'wal-fiḍata', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the silver', ur: 'اور  silver' } },
      { id: '9:34:21', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and (do) not', ur: 'اور (کرنا) نہیں' } },
      { id: '9:34:22', arabic: 'يُنفِقُونَهَا', transliteration: 'yunfiqūnahā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'spend it', ur: 'خرچ کرنا it' } },
      { id: '9:34:23', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:34:24', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:34:25', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:34:26', arabic: 'فَبَشِّرْهُم', transliteration: 'fabashir\'hum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '[so] give them tidings', ur: '[پس] دینا ان کو tidings' } },
      { id: '9:34:27', arabic: 'بِعَذَابٍ', transliteration: 'biʿadhābin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of a punishment', ur: 'کا ایک عذاب' } },
      { id: '9:34:28', arabic: 'أَلِيمٍۢ', transliteration: 'alīmin', pos: ['N'], posLabel: 'N', root: 'أ ل م', meaning: { en: 'painful', ur: 'دردناک' } }
    ],
    structure: { relationships: [{ from: 14, to: 15, label: 'جار + مجرور' }] }
  },
  35: {
    text: 'يَوْمَ يُحْمَىٰ عَلَيْهَا فِى نَارِ جَهَنَّمَ فَتُكْوَىٰ بِهَا جِبَاهُهُمْ وَجُنُوبُهُمْ وَظُهُورُهُمْ ۖ هَٰذَا مَا كَنَزْتُمْ لِأَنفُسِكُمْ فَذُوقُوا۟ مَا كُنتُمْ تَكْنِزُونَ',
    translation: {
      en: 'The Day when it will be heated in the fire of Hell and seared therewith will be their foreheads, their flanks, and their backs, [it will be said], "This is what you hoarded for yourselves, so taste what you used to hoard."',
      ur: 'جس دن وہ مال دوزخ کی آگ میں (خوب) گرم کیا جائے گا۔ پھر اس سے ان (بخیلوں) کی پیشانیاں اور پہلو اور پیٹھیں داغی جائیں گی (اور کہا جائے گا) کہ یہ وہی ہے جو تم نے اپنے لیے جمع کیا تھا سو جو تم جمع کرتے تھے (اب) اس کا مزہ چکھو'
    },
    words: [
      { id: '9:35:1', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: '(The) Day', ur: '() دن' } },
      { id: '9:35:2', arabic: 'يُحْمَىٰ', transliteration: 'yuḥ\'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it will be heated [on it]', ur: 'it ہوگا heated [پر it]' } },
      { id: '9:35:3', arabic: 'عَلَيْهَا', transliteration: 'ʿalayhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it will be heated [on it]', ur: 'it ہوگا heated [پر it]' } },
      { id: '9:35:4', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:35:5', arabic: 'نَارِ', transliteration: 'nāri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Fire', ur: 'دوزخ' } },
      { id: '9:35:6', arabic: 'جَهَنَّمَ', transliteration: 'jahannama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Hell', ur: '(کا) Hell' } },
      { id: '9:35:7', arabic: 'فَتُكْوَىٰ', transliteration: 'fatuk\'wā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and will be branded', ur: 'اور ہوگا branded' } },
      { id: '9:35:8', arabic: 'بِهَا', transliteration: 'bihā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with it', ur: 'ساتھ it' } },
      { id: '9:35:9', arabic: 'جِبَاهُهُمْ', transliteration: 'jibāhuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their foreheads', ur: 'ان کا foreheads' } },
      { id: '9:35:10', arabic: 'وَجُنُوبُهُمْ', transliteration: 'wajunūbuhum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and their flanks', ur: 'اور ان کا flanks' } },
      { id: '9:35:11', arabic: 'وَظُهُورُهُمْ ۖ', transliteration: 'waẓuhūruhum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and their backs', ur: 'اور ان کا backs' } },
      { id: '9:35:12', arabic: 'هَـٰذَا', transliteration: 'hādhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'This', ur: 'یہ' } },
      { id: '9:35:13', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(is) what', ur: '(ہے) کیا/جو' } },
      { id: '9:35:14', arabic: 'كَنَزْتُمْ', transliteration: 'kanaztum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you hoarded', ur: 'تم hoarded' } },
      { id: '9:35:15', arabic: 'لِأَنفُسِكُمْ', transliteration: 'li-anfusikum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for yourselves', ur: 'کے لیے yourselves' } },
      { id: '9:35:16', arabic: 'فَذُوقُوا۟', transliteration: 'fadhūqū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so taste', ur: 'پس taste' } },
      { id: '9:35:17', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:35:18', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'you used to', ur: 'تم used کو/تک' } },
      { id: '9:35:19', arabic: 'تَكْنِزُونَ', transliteration: 'taknizūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'hoard', ur: 'hoard' } }
    ],
    structure: { relationships: [{ from: 13, to: 14, label: 'موصول + صلة' }] }
  },
  36: {
    text: 'إِنَّ عِدَّةَ ٱلشُّهُورِ عِندَ ٱللَّهِ ٱثْنَا عَشَرَ شَهْرًۭا فِى كِتَٰبِ ٱللَّهِ يَوْمَ خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ مِنْهَآ أَرْبَعَةٌ حُرُمٌۭ ۚ ذَٰلِكَ ٱلدِّينُ ٱلْقَيِّمُ ۚ فَلَا تَظْلِمُوا۟ فِيهِنَّ أَنفُسَكُمْ ۚ وَقَٰتِلُوا۟ ٱلْمُشْرِكِينَ كَآفَّةًۭ كَمَا يُقَٰتِلُونَكُمْ كَآفَّةًۭ ۚ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ مَعَ ٱلْمُتَّقِينَ',
    translation: {
      en: 'Indeed, the number of months with Allah is twelve [lunar] months in the register of Allah [from] the day He created the heavens and the earth; of these, four are sacred. That is the correct religion, so do not wrong yourselves during them. And fight against the disbelievers collectively as they fight against you collectively. And know that Allah is with the righteous [who fear Him].',
      ur: 'خدا کے نزدیک مہینے گنتی میں (بارہ ہیں یعنی) اس روز (سے) کہ اس نے آسمانوں اور زمین کو پیدا کیا۔ کتاب خدا میں (برس کے) بارہ مہینے (لکھے ہوئے) ہیں۔ ان میں سے چار مہینے ادب کے ہیں۔ یہی دین (کا) سیدھا راستہ ہے۔ تو ان (مہینوں) میں (قتال ناحق سے) اپنے آپ پر ظلم نہ کرنا۔ اور تم سب کے سب مشرکوں سے لڑو جیسے وہ سب کے سب تم سے لڑتے ہیں۔ اور جان رکھو کہ خدا پرہیز گاروں کے ساتھ ہے'
    },
    words: [
      { id: '9:36:1', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:36:2', arabic: 'عِدَّةَ', transliteration: 'ʿiddata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) number', ur: '() number' } },
      { id: '9:36:3', arabic: 'ٱلشُّهُورِ', transliteration: 'l-shuhūri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the months', ur: '(کا)  months' } },
      { id: '9:36:4', arabic: 'عِندَ', transliteration: 'ʿinda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:36:5', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:36:6', arabic: 'ٱثْنَا', transliteration: 'ith\'nā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(is) twelve', ur: '(ہے) twelve' } },
      { id: '9:36:7', arabic: 'عَشَرَ', transliteration: 'ʿashara', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) twelve', ur: '(ہے) twelve' } },
      { id: '9:36:8', arabic: 'شَهْرًۭا', transliteration: 'shahran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'months', ur: 'months' } },
      { id: '9:36:9', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:36:10', arabic: 'كِتَـٰبِ', transliteration: 'kitābi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) ordinance', ur: '() ordinance' } },
      { id: '9:36:11', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:36:12', arabic: 'يَوْمَ', transliteration: 'yawma', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: '(from the) Day', ur: '(سے ) دن' } },
      { id: '9:36:13', arabic: 'خَلَقَ', transliteration: 'khalaqa', pos: ['N'], posLabel: 'N', root: 'خ ل ق', meaning: { en: 'He created', ur: 'وہ پیدا کیا' } },
      { id: '9:36:14', arabic: 'ٱلسَّمَـٰوَٰتِ', transliteration: 'l-samāwāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the heavens', ur: 'آسمانوں' } },
      { id: '9:36:15', arabic: 'وَٱلْأَرْضَ', transliteration: 'wal-arḍa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the earth', ur: 'اور زمین' } },
      { id: '9:36:16', arabic: 'مِنْهَآ', transliteration: 'min\'hā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of them', ur: 'کا ان کو' } },
      { id: '9:36:17', arabic: 'أَرْبَعَةٌ', transliteration: 'arbaʿatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'four', ur: 'four' } },
      { id: '9:36:18', arabic: 'حُرُمٌۭ ۚ', transliteration: 'ḥurumun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) sacred', ur: '(ہیں) sacred' } },
      { id: '9:36:19', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '9:36:20', arabic: 'ٱلدِّينُ', transliteration: 'l-dīnu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the religion', ur: '(ہے)  دین' } },
      { id: '9:36:21', arabic: 'ٱلْقَيِّمُ ۚ', transliteration: 'l-qayimu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the upright', ur: ' upright' } },
      { id: '9:36:22', arabic: 'فَلَا', transliteration: 'falā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so (do) not', ur: 'پس (کرنا) نہیں' } },
      { id: '9:36:23', arabic: 'تَظْلِمُوا۟', transliteration: 'taẓlimū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'wrong', ur: 'غلط' } },
      { id: '9:36:24', arabic: 'فِيهِنَّ', transliteration: 'fīhinna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'therein', ur: 'therein' } },
      { id: '9:36:25', arabic: 'أَنفُسَكُمْ ۚ', transliteration: 'anfusakum', pos: ['N'], posLabel: 'N', root: 'ن ف س', meaning: { en: 'yourselves', ur: 'yourselves' } },
      { id: '9:36:26', arabic: 'وَقَـٰتِلُوا۟', transliteration: 'waqātilū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And fight', ur: 'اور لڑنا' } },
      { id: '9:36:27', arabic: 'ٱلْمُشْرِكِينَ', transliteration: 'l-mush\'rikīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the polytheists', ur: ' polytheists' } },
      { id: '9:36:28', arabic: 'كَآفَّةًۭ', transliteration: 'kāffatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'all together', ur: 'سب together' } },
      { id: '9:36:29', arabic: 'كَمَا', transliteration: 'kamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'as', ur: 'as' } },
      { id: '9:36:30', arabic: 'يُقَـٰتِلُونَكُمْ', transliteration: 'yuqātilūnakum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they fight you', ur: 'وہ لڑنا تم' } },
      { id: '9:36:31', arabic: 'كَآفَّةًۭ ۚ', transliteration: 'kāffatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'all together', ur: 'سب together' } },
      { id: '9:36:32', arabic: 'وَٱعْلَمُوٓا۟', transliteration: 'wa-iʿ\'lamū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And know', ur: 'اور جاننا' } },
      { id: '9:36:33', arabic: 'أَنَّ', transliteration: 'anna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:36:34', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:36:35', arabic: 'مَعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) with', ur: '(ہے) ساتھ' } },
      { id: '9:36:36', arabic: 'ٱلْمُتَّقِينَ', transliteration: 'l-mutaqīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the righteous', ur: ' نیک' } }
    ],
    structure: { relationships: [] }
  },
  37: {
    text: 'إِنَّمَا ٱلنَّسِىٓءُ زِيَادَةٌۭ فِى ٱلْكُفْرِ ۖ يُضَلُّ بِهِ ٱلَّذِينَ كَفَرُوا۟ يُحِلُّونَهُۥ عَامًۭا وَيُحَرِّمُونَهُۥ عَامًۭا لِّيُوَاطِـُٔوا۟ عِدَّةَ مَا حَرَّمَ ٱللَّهُ فَيُحِلُّوا۟ مَا حَرَّمَ ٱللَّهُ ۚ زُيِّنَ لَهُمْ سُوٓءُ أَعْمَٰلِهِمْ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلْكَٰفِرِينَ',
    translation: {
      en: 'Indeed, the postponing [of restriction within sacred months] is an increase in disbelief by which those who have disbelieved are led [further] astray. They make it lawful one year and unlawful another year to correspond to the number made unlawful by Allah and [thus] make lawful what Allah has made unlawful. Made pleasing to them is the evil of their deeds; and Allah does not guide the disbelieving people.',
      ur: 'امن کے کس مہینے کو ہٹا کر آگے پیچھے کر دینا کفر میں اضافہ کرتا ہے اس سے کافر گمراہی میں پڑے رہتے ہیں۔ ایک سال تو اس کو حلال سمجھ لیتے ہیں اور دوسرے سال حرام۔ تاکہ ادب کے مہینوں کو جو خدا نے مقرر کئے ہیں گنتی پوری کر لیں۔ اور جو خدا نے منع کیا ہے اس کو جائز کر لیں۔ ان کے برے اعمال ان کے بھلے دکھائی دیتے ہیں۔ اور خدا کافر لوگوں کو ہدایت نہیں دیا کرتا'
    },
    words: [
      { id: '9:37:1', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:37:2', arabic: 'ٱلنَّسِىٓءُ', transliteration: 'l-nasīu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the postponing', ur: ' postponing' } },
      { id: '9:37:3', arabic: 'زِيَادَةٌۭ', transliteration: 'ziyādatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) an increase', ur: '(ہے) ایک increase' } },
      { id: '9:37:4', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:37:5', arabic: 'ٱلْكُفْرِ ۖ', transliteration: 'l-kuf\'ri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the disbelief', ur: ' disbelief' } },
      { id: '9:37:6', arabic: 'يُضَلُّ', transliteration: 'yuḍallu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'are led astray', ur: 'ہیں led astray' } },
      { id: '9:37:7', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by it', ur: 'کے ذریعے it' } },
      { id: '9:37:8', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:37:9', arabic: 'كَفَرُوا۟', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieve', ur: 'کفر کرنا' } },
      { id: '9:37:10', arabic: 'يُحِلُّونَهُۥ', transliteration: 'yuḥillūnahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They make it lawful', ur: 'وہ بنانا it lawful' } },
      { id: '9:37:11', arabic: 'عَامًۭا', transliteration: 'ʿāman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'one year', ur: 'one year' } },
      { id: '9:37:12', arabic: 'وَيُحَرِّمُونَهُۥ', transliteration: 'wayuḥarrimūnahu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and make it unlawful', ur: 'اور بنانا it unlawful' } },
      { id: '9:37:13', arabic: 'عَامًۭا', transliteration: 'ʿāman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(another) year', ur: '(another) year' } },
      { id: '9:37:14', arabic: 'لِّيُوَاطِـُٔوا۟', transliteration: 'liyuwāṭiū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to adjust', ur: 'کو/تک adjust' } },
      { id: '9:37:15', arabic: 'عِدَّةَ', transliteration: 'ʿiddata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the number', ur: ' number' } },
      { id: '9:37:16', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'which', ur: 'جو' } },
      { id: '9:37:17', arabic: 'حَرَّمَ', transliteration: 'ḥarrama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has made unlawful', ur: 'اللہ رکھتا ہے بنایا unlawful' } },
      { id: '9:37:18', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has made unlawful', ur: 'اللہ رکھتا ہے بنایا unlawful' } },
      { id: '9:37:19', arabic: 'فَيُحِلُّوا۟', transliteration: 'fayuḥillū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and making lawful', ur: 'اور making lawful' } },
      { id: '9:37:20', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:37:21', arabic: 'حَرَّمَ', transliteration: 'ḥarrama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has made unlawful', ur: 'اللہ رکھتا ہے بنایا unlawful' } },
      { id: '9:37:22', arabic: 'ٱللَّهُ ۚ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has made unlawful', ur: 'اللہ رکھتا ہے بنایا unlawful' } },
      { id: '9:37:23', arabic: 'زُيِّنَ', transliteration: 'zuyyina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Is made fair-seeming', ur: 'ہے بنایا fair-seeming' } },
      { id: '9:37:24', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:37:25', arabic: 'سُوٓءُ', transliteration: 'sūu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) evil', ur: '() برائی' } },
      { id: '9:37:26', arabic: 'أَعْمَـٰلِهِمْ ۗ', transliteration: 'aʿmālihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) their deeds', ur: '(کا) ان کے اعمال' } },
      { id: '9:37:27', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:37:28', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(does) not', ur: '(does) نہیں' } },
      { id: '9:37:29', arabic: 'يَهْدِى', transliteration: 'yahdī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'guide', ur: 'ہدایت دینا' } },
      { id: '9:37:30', arabic: 'ٱلْقَوْمَ', transliteration: 'l-qawma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the people ', ur: 'لوگ ' } },
      { id: '9:37:31', arabic: 'ٱلْكَـٰفِرِينَ', transliteration: 'l-kāfirīna', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'the disbelievers', ur: ' کافر' } }
    ],
    structure: { relationships: [{ from: 6, to: 12, label: 'عطف' }, { from: 12, to: 19, label: 'عطف' }] }
  },
  38: {
    text: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ مَا لَكُمْ إِذَا قِيلَ لَكُمُ ٱنفِرُوا۟ فِى سَبِيلِ ٱللَّهِ ٱثَّاقَلْتُمْ إِلَى ٱلْأَرْضِ ۚ أَرَضِيتُم بِٱلْحَيَوٰةِ ٱلدُّنْيَا مِنَ ٱلْءَاخِرَةِ ۚ فَمَا مَتَٰعُ ٱلْحَيَوٰةِ ٱلدُّنْيَا فِى ٱلْءَاخِرَةِ إِلَّا قَلِيلٌ',
    translation: {
      en: 'O you who have believed, what is [the matter] with you that, when you are told to go forth in the cause of Allah, you adhere heavily to the earth? Are you satisfied with the life of this world rather than the Hereafter? But what is the enjoyment of worldly life compared to the Hereafter except a [very] little.',
      ur: 'مومنو! تمہیں کیا ہوا ہے کہ جب تم سے کہا جاتا ہے کہ خدا کی راہ میں (جہاد کے لیے) نکلو تو تم (کاہلی کے سبب سے) زمین پر گرے جاتے ہو (یعنی گھروں سے نکلنا نہیں چاہتے) کیا تم آخرت (کی نعمتوں) کو چھوڑ کر دینا کی زندگی پر خوش ہو بیٹھے ہو۔ دنیا کی زندگی کے فائدے تو آخرت کے مقابل بہت ہی کم ہیں'
    },
    words: [
      { id: '9:38:1', arabic: 'يَـٰٓأَيُّهَا', transliteration: 'yāayyuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:38:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:38:3', arabic: 'ءَامَنُوا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:38:4', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'What', ur: 'کیا/جو' } },
      { id: '9:38:5', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is the matter) with you', ur: '(ہے  matter) ساتھ تم' } },
      { id: '9:38:6', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:38:7', arabic: 'قِيلَ', transliteration: 'qīla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it is said', ur: 'it ہے کہا' } },
      { id: '9:38:8', arabic: 'لَكُمُ', transliteration: 'lakumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '9:38:9', arabic: 'ٱنفِرُوا۟', transliteration: 'infirū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'go forth', ur: 'جانا forth' } },
      { id: '9:38:10', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:38:11', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:38:12', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:38:13', arabic: 'ٱثَّاقَلْتُمْ', transliteration: 'ithāqaltum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you cling heavily', ur: 'تم cling heavily' } },
      { id: '9:38:14', arabic: 'إِلَى', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:38:15', arabic: 'ٱلْأَرْضِ ۚ', transliteration: 'l-arḍi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '9:38:16', arabic: 'أَرَضِيتُم', transliteration: 'araḍītum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Are you pleased', ur: 'ہیں تم pleased' } },
      { id: '9:38:17', arabic: 'بِٱلْحَيَوٰةِ', transliteration: 'bil-ḥayati', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with the life', ur: 'ساتھ  زندگی' } },
      { id: '9:38:18', arabic: 'ٱلدُّنْيَا', transliteration: 'l-dun\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the world', ur: '(کا)  world' } },
      { id: '9:38:19', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(rather) than', ur: '(rather) than' } },
      { id: '9:38:20', arabic: 'ٱلْـَٔاخِرَةِ ۚ', transliteration: 'l-ākhirati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Hereafter', ur: ' Hereafter' } },
      { id: '9:38:21', arabic: 'فَمَا', transliteration: 'famā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But what', ur: 'لیکن کیا/جو' } },
      { id: '9:38:22', arabic: 'مَتَـٰعُ', transliteration: 'matāʿu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is the) enjoyment', ur: '(ہے ) enjoyment' } },
      { id: '9:38:23', arabic: 'ٱلْحَيَوٰةِ', transliteration: 'l-ḥayati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the life', ur: '(کا)  زندگی' } },
      { id: '9:38:24', arabic: 'ٱلدُّنْيَا', transliteration: 'l-dun\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the world', ur: '(کا)  world' } },
      { id: '9:38:25', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in (comparison to)', ur: 'میں (comparison کو/تک)' } },
      { id: '9:38:26', arabic: 'ٱلْـَٔاخِرَةِ', transliteration: 'l-ākhirati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the hereafter', ur: ' hereafter' } },
      { id: '9:38:27', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:38:28', arabic: 'قَلِيلٌ', transliteration: 'qalīlun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a little', ur: 'ایک little' } }
    ],
    structure: { relationships: [{ from: 14, to: 15, label: 'جار + مجرور' }] }
  },
  39: {
    text: 'إِلَّا تَنفِرُوا۟ يُعَذِّبْكُمْ عَذَابًا أَلِيمًۭا وَيَسْتَبْدِلْ قَوْمًا غَيْرَكُمْ وَلَا تَضُرُّوهُ شَيْـًۭٔا ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ',
    translation: {
      en: 'If you do not go forth, He will punish you with a painful punishment and will replace you with another people, and you will not harm Him at all. And Allah is over all things competent.',
      ur: 'اور اگر تم نہ نکلو گے تو خدا تم کو بڑی تکلیف کا عذاب دے گا۔ اور تمہاری جگہ اور لوگ پیدا کر دے گا (جو خدا کے پورے فرمانبردار ہوں گے) اور تم اس کو کچھ نقصان نہ پہنچا سکو گے اور خدا ہر چیز پر قدرت رکھتا ہے'
    },
    words: [
      { id: '9:39:1', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'If not', ur: 'اگر نہیں' } },
      { id: '9:39:2', arabic: 'تَنفِرُوا۟', transliteration: 'tanfirū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you go forth', ur: 'تم جانا forth' } },
      { id: '9:39:3', arabic: 'يُعَذِّبْكُمْ', transliteration: 'yuʿadhib\'kum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'He will punish you', ur: 'وہ  سزا دینا تم' } },
      { id: '9:39:4', arabic: 'عَذَابًا', transliteration: 'ʿadhāban', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: '(with) a painful punishment', ur: '(ساتھ) ایک دردناک عذاب' } },
      { id: '9:39:5', arabic: 'أَلِيمًۭا', transliteration: 'alīman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(with) a painful punishment', ur: '(ساتھ) ایک دردناک عذاب' } },
      { id: '9:39:6', arabic: 'وَيَسْتَبْدِلْ', transliteration: 'wayastabdil', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and will replace you', ur: 'اور  replace تم' } },
      { id: '9:39:7', arabic: 'قَوْمًا', transliteration: 'qawman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(with) a people', ur: '(ساتھ) ایک لوگ' } },
      { id: '9:39:8', arabic: 'غَيْرَكُمْ', transliteration: 'ghayrakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'other than you', ur: 'other than تم' } },
      { id: '9:39:9', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:39:10', arabic: 'تَضُرُّوهُ', transliteration: 'taḍurrūhu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you can harm Him', ur: 'تم can harm Him' } },
      { id: '9:39:11', arabic: 'شَيْـًۭٔا ۗ', transliteration: 'shayan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) anything', ur: '(میں) anything' } },
      { id: '9:39:12', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:39:13', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '(is) on', ur: '(ہے) پر' } },
      { id: '9:39:14', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'every', ur: 'ہر' } },
      { id: '9:39:15', arabic: 'شَىْءٍۢ', transliteration: 'shayin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'thing', ur: 'thing' } },
      { id: '9:39:16', arabic: 'قَدِيرٌ', transliteration: 'qadīrun', pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: 'All-Powerful', ur: 'سب-Powerful' } }
    ],
    structure: { relationships: [{ from: 3, to: 6, label: 'عطف' }, { from: 13, to: 14, label: 'جار + مجرور' }] }
  },
  40: {
    text: 'إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ ٱللَّهُ إِذْ أَخْرَجَهُ ٱلَّذِينَ كَفَرُوا۟ ثَانِىَ ٱثْنَيْنِ إِذْ هُمَا فِى ٱلْغَارِ إِذْ يَقُولُ لِصَٰحِبِهِۦ لَا تَحْزَنْ إِنَّ ٱللَّهَ مَعَنَا ۖ فَأَنزَلَ ٱللَّهُ سَكِينَتَهُۥ عَلَيْهِ وَأَيَّدَهُۥ بِجُنُودٍۢ لَّمْ تَرَوْهَا وَجَعَلَ كَلِمَةَ ٱلَّذِينَ كَفَرُوا۟ ٱلسُّفْلَىٰ ۗ وَكَلِمَةُ ٱللَّهِ هِىَ ٱلْعُلْيَا ۗ وَٱللَّهُ عَزِيزٌ حَكِيمٌ',
    translation: {
      en: 'If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, "Do not grieve; indeed Allah is with us." And Allah sent down his tranquillity upon him and supported him with angels you did not see and made the word of those who disbelieved the lowest, while the word of Allah - that is the highest. And Allah is Exalted in Might and Wise.',
      ur: 'اگر تم پیغمبر کی مدد نہ کرو گے تو خدا اُن کا مددگار ہے (وہ وقت تم کو یاد ہوگا) جب ان کو کافروں نے گھر سے نکال دیا۔ (اس وقت) دو (ہی ایسے شخص تھے جن) میں (ایک ابوبکرؓ تھے) اور دوسرے (خود رسول الله) جب وہ دونوں غار (ثور) میں تھے اس وقت پیغمبر اپنے رفیق کو تسلی دیتے تھے کہ غم نہ کرو خدا ہمارے ساتھ ہے۔ تو خدا نے ان پر تسکین نازل فرمائی اور ان کو ایسے لشکروں سے مدد دی جو تم کو نظر نہیں آتے تھے اور کافروں کی بات کو پست کر دیا۔ اور بات تو خدا ہی کی بلند ہے۔ اور خدا زبردست (اور) حکمت والا ہے'
    },
    words: [
      { id: '9:40:1', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'If not', ur: 'اگر نہیں' } },
      { id: '9:40:2', arabic: 'تَنصُرُوهُ', transliteration: 'tanṣurūhu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you help him', ur: 'تم مدد کرنا him' } },
      { id: '9:40:3', arabic: 'فَقَدْ', transliteration: 'faqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'certainly', ur: 'یقیناً' } },
      { id: '9:40:4', arabic: 'نَصَرَهُ', transliteration: 'naṣarahu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah helped him', ur: 'اللہ مدد کی him' } },
      { id: '9:40:5', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah helped him', ur: 'اللہ مدد کی him' } },
      { id: '9:40:6', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:40:7', arabic: 'أَخْرَجَهُ', transliteration: 'akhrajahu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'drove him out', ur: 'drove him out' } },
      { id: '9:40:8', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:40:9', arabic: 'كَفَرُوا۟', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' } },
      { id: '9:40:10', arabic: 'ثَانِىَ', transliteration: 'thāniya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the second', ur: ' second' } },
      { id: '9:40:11', arabic: 'ٱثْنَيْنِ', transliteration: 'ith\'nayni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the two', ur: '(کا)  two' } },
      { id: '9:40:12', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:40:13', arabic: 'هُمَا', transliteration: 'humā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they both', ur: 'وہ both' } },
      { id: '9:40:14', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(were) in', ur: '(تھے) میں' } },
      { id: '9:40:15', arabic: 'ٱلْغَارِ', transliteration: 'l-ghāri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the cave', ur: ' cave' } },
      { id: '9:40:16', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:40:17', arabic: 'يَقُولُ', transliteration: 'yaqūlu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'he said', ur: 'وہ کہا' } },
      { id: '9:40:18', arabic: 'لِصَـٰحِبِهِۦ', transliteration: 'liṣāḥibihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to his companion', ur: 'کو/تک اس کا companion' } },
      { id: '9:40:19', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '9:40:20', arabic: 'تَحْزَنْ', transliteration: 'taḥzan', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'grieve', ur: 'grieve' } },
      { id: '9:40:21', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'indeed', ur: 'بےشک' } },
      { id: '9:40:22', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:40:23', arabic: 'مَعَنَا ۖ', transliteration: 'maʿanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) with us', ur: '(ہے) ساتھ us' } },
      { id: '9:40:24', arabic: 'فَأَنزَلَ', transliteration: 'fa-anzala', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'Then Allah sent down', ur: 'پھر اللہ بھیجا down' } },
      { id: '9:40:25', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then Allah sent down', ur: 'پھر اللہ بھیجا down' } },
      { id: '9:40:26', arabic: 'سَكِينَتَهُۥ', transliteration: 'sakīnatahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'His tranquility', ur: 'اس کا tranquility' } },
      { id: '9:40:27', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'upon him', ur: 'پر him' } },
      { id: '9:40:28', arabic: 'وَأَيَّدَهُۥ', transliteration: 'wa-ayyadahu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and supported him', ur: 'اور supported him' } },
      { id: '9:40:29', arabic: 'بِجُنُودٍۢ', transliteration: 'bijunūdin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with forces', ur: 'ساتھ forces' } },
      { id: '9:40:30', arabic: 'لَّمْ', transliteration: 'lam', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'which you did not see', ur: 'جو تم کیا نہیں دیکھنا' } },
      { id: '9:40:31', arabic: 'تَرَوْهَا', transliteration: 'tarawhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'which you did not see', ur: 'جو تم کیا نہیں دیکھنا' } },
      { id: '9:40:32', arabic: 'وَجَعَلَ', transliteration: 'wajaʿala', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and made', ur: 'اور بنایا' } },
      { id: '9:40:33', arabic: 'كَلِمَةَ', transliteration: 'kalimata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) word', ur: '() word' } },
      { id: '9:40:34', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) those who', ur: '(کا) جو لوگ' } },
      { id: '9:40:35', arabic: 'كَفَرُوا۟', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' } },
      { id: '9:40:36', arabic: 'ٱلسُّفْلَىٰ ۗ', transliteration: 'l-suf\'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the lowest', ur: ' lowest' } },
      { id: '9:40:37', arabic: 'وَكَلِمَةُ', transliteration: 'wakalimatu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while (the) Word', ur: 'جبکہ () Word' } },
      { id: '9:40:38', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:40:39', arabic: 'هِىَ', transliteration: 'hiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it (is)', ur: 'it (ہے)' } },
      { id: '9:40:40', arabic: 'ٱلْعُلْيَا ۗ', transliteration: 'l-ʿul\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the highest', ur: ' highest' } },
      { id: '9:40:41', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:40:42', arabic: 'عَزِيزٌ', transliteration: 'ʿazīzun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) All-Mighty', ur: '(ہے) سب-طاقتور' } },
      { id: '9:40:43', arabic: 'حَكِيمٌ', transliteration: 'ḥakīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ك م', meaning: { en: 'All-Wise', ur: 'حکمت والا' } }
    ],
    structure: { relationships: [{ from: 19, to: 20, label: 'نفی + فعل' }, { from: 20, to: 24, label: 'عطف' }, { from: 24, to: 28, label: 'عطف' }] }
  },
  41: {
    text: 'ٱنفِرُوا۟ خِفَافًۭا وَثِقَالًۭا وَجَٰهِدُوا۟ بِأَمْوَٰلِكُمْ وَأَنفُسِكُمْ فِى سَبِيلِ ٱللَّهِ ۚ ذَٰلِكُمْ خَيْرٌۭ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ',
    translation: {
      en: 'Go forth, whether light or heavy, and strive with your wealth and your lives in the cause of Allah. That is better for you, if you only knew.',
      ur: 'تم سبکبار ہو یا گراں بار (یعنی مال و اسباب تھوڑا رکھتے ہو یا بہت، گھروں سے) نکل آؤ۔ اور خدا کے رستے میں مال اور جان سے لڑو۔ یہی تمہارے حق میں اچھا ہے بشرطیکہ سمجھو'
    },
    words: [
      { id: '9:41:1', arabic: 'ٱنفِرُوا۟', transliteration: 'infirū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Go forth', ur: 'جانا forth' } },
      { id: '9:41:2', arabic: 'خِفَافًۭا', transliteration: 'khifāfan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'light', ur: 'نور' } },
      { id: '9:41:3', arabic: 'وَثِقَالًۭا', transliteration: 'wathiqālan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'or heavy', ur: 'یا heavy' } },
      { id: '9:41:4', arabic: 'وَجَـٰهِدُوا۟', transliteration: 'wajāhidū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and strive', ur: 'اور جدوجہد کرنا' } },
      { id: '9:41:5', arabic: 'بِأَمْوَٰلِكُمْ', transliteration: 'bi-amwālikum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with your wealth', ur: 'ساتھ تمہارا مال' } },
      { id: '9:41:6', arabic: 'وَأَنفُسِكُمْ', transliteration: 'wa-anfusikum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and your lives', ur: 'اور تمہارا lives' } },
      { id: '9:41:7', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:41:8', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:41:9', arabic: 'ٱللَّهِ ۚ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:41:10', arabic: 'ذَٰلِكُمْ', transliteration: 'dhālikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '9:41:11', arabic: 'خَيْرٌۭ', transliteration: 'khayrun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) better', ur: '(ہے) better' } },
      { id: '9:41:12', arabic: 'لَّكُمْ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '9:41:13', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '9:41:14', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'you', ur: 'تم' } },
      { id: '9:41:15', arabic: 'تَعْلَمُونَ', transliteration: 'taʿlamūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'know', ur: 'جاننا' } }
    ],
    structure: { relationships: [] }
  },
  42: {
    text: 'لَوْ كَانَ عَرَضًۭا قَرِيبًۭا وَسَفَرًۭا قَاصِدًۭا لَّٱتَّبَعُوكَ وَلَٰكِنۢ بَعُدَتْ عَلَيْهِمُ ٱلشُّقَّةُ ۚ وَسَيَحْلِفُونَ بِٱللَّهِ لَوِ ٱسْتَطَعْنَا لَخَرَجْنَا مَعَكُمْ يُهْلِكُونَ أَنفُسَهُمْ وَٱللَّهُ يَعْلَمُ إِنَّهُمْ لَكَٰذِبُونَ',
    translation: {
      en: 'Had it been an easy gain and a moderate trip, the hypocrites would have followed you, but distant to them was the journey. And they will swear by Allah, "If we were able, we would have gone forth with you," destroying themselves [through false oaths], and Allah knows that indeed they are liars.',
      ur: 'اگر مالِ غنیمت سہل الحصول اور سفر بھی ہلکا سا ہوتا تو تمہارے ساتھ (شوق سے) چل دیتے۔ لیکن مسافت ان کو دور (دراز) نظر آئی (تو عذر کریں گے) ۔ اور خدا کی قسمیں کھائیں گے کہ اگر ہم طاقت رکھتے تو آپ کے ساتھ ضرور نکل کھڑے ہوتے یہ (ایسے عذروں سے) اپنے تئیں ہلاک کر رہے ہیں۔ اور خدا جانتا ہے کہ جھوٹے ہیں'
    },
    words: [
      { id: '9:42:1', arabic: 'لَوْ', transliteration: 'law', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:42:2', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'it had been', ur: 'it رکھتا تھا been' } },
      { id: '9:42:3', arabic: 'عَرَضًۭا', transliteration: 'ʿaraḍan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a gain', ur: 'ایک gain' } },
      { id: '9:42:4', arabic: 'قَرِيبًۭا', transliteration: 'qarīban', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'near', ur: 'قریب' } },
      { id: '9:42:5', arabic: 'وَسَفَرًۭا', transliteration: 'wasafaran', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and a journey', ur: 'اور ایک journey' } },
      { id: '9:42:6', arabic: 'قَاصِدًۭا', transliteration: 'qāṣidan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'easy', ur: 'easy' } },
      { id: '9:42:7', arabic: 'لَّٱتَّبَعُوكَ', transliteration: 'la-ittabaʿūka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely they (would) have followed you', ur: 'بےشک وہ () رکھتے ہو پیروی کی تم' } },
      { id: '9:42:8', arabic: 'وَلَـٰكِنۢ', transliteration: 'walākin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'but', ur: 'لیکن' } },
      { id: '9:42:9', arabic: 'بَعُدَتْ', transliteration: 'baʿudat', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'was long', ur: 'تھا long' } },
      { id: '9:42:10', arabic: 'عَلَيْهِمُ', transliteration: 'ʿalayhimu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:42:11', arabic: 'ٱلشُّقَّةُ ۚ', transliteration: 'l-shuqatu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the distance', ur: ' distance' } },
      { id: '9:42:12', arabic: 'وَسَيَحْلِفُونَ', transliteration: 'wasayaḥlifūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And they will swear', ur: 'اور وہ  swear' } },
      { id: '9:42:13', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by Allah', ur: 'کے ذریعے اللہ' } },
      { id: '9:42:14', arabic: 'لَوِ', transliteration: 'lawi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:42:15', arabic: 'ٱسْتَطَعْنَا', transliteration: 'is\'taṭaʿnā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'we were able', ur: 'ہم تھے able' } },
      { id: '9:42:16', arabic: 'لَخَرَجْنَا', transliteration: 'lakharajnā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'certainly we (would) have come forth', ur: 'یقیناً ہم () رکھتے ہو آنا forth' } },
      { id: '9:42:17', arabic: 'مَعَكُمْ', transliteration: 'maʿakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with you', ur: 'ساتھ تم' } },
      { id: '9:42:18', arabic: 'يُهْلِكُونَ', transliteration: 'yuh\'likūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They destroy', ur: 'وہ destroy' } },
      { id: '9:42:19', arabic: 'أَنفُسَهُمْ', transliteration: 'anfusahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their own selves', ur: 'ان کا own selves' } },
      { id: '9:42:20', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Allah', ur: 'اور اللہ' } },
      { id: '9:42:21', arabic: 'يَعْلَمُ', transliteration: 'yaʿlamu', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'knows', ur: 'knows' } },
      { id: '9:42:22', arabic: 'إِنَّهُمْ', transliteration: 'innahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(that) indeed, they', ur: '(کہ) بےشک, وہ' } },
      { id: '9:42:23', arabic: 'لَكَـٰذِبُونَ', transliteration: 'lakādhibūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) surely liars', ur: '(ہیں) بےشک liars' } }
    ],
    structure: { relationships: [] }
  },
  43: {
    text: 'عَفَا ٱللَّهُ عَنكَ لِمَ أَذِنتَ لَهُمْ حَتَّىٰ يَتَبَيَّنَ لَكَ ٱلَّذِينَ صَدَقُوا۟ وَتَعْلَمَ ٱلْكَٰذِبِينَ',
    translation: {
      en: 'May Allah pardon you, [O Muhammad]; why did you give them permission [to remain behind]? [You should not have] until it was evident to you who were truthful and you knew [who were] the liars.',
      ur: 'خدا تمہیں معاف کرے۔ تم نے پیشتر اس کے کہ تم پر وہ لوگ بھی ظاہر ہو جاتے ہیں جو سچے ہیں اور وہ بھی تمہیں معلوم ہو جاتے جو جھوٹے ہیں اُن کو اجازت کیوں دی'
    },
    words: [
      { id: '9:43:1', arabic: 'عَفَا', transliteration: 'ʿafā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(May) Allah forgive', ur: '(May) اللہ معاف کرنا' } },
      { id: '9:43:2', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(May) Allah forgive', ur: '(May) اللہ معاف کرنا' } },
      { id: '9:43:3', arabic: 'عَنكَ', transliteration: 'ʿanka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '9:43:4', arabic: 'لِمَ', transliteration: 'lima', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'Why (did)', ur: 'کیوں (کیا)' } },
      { id: '9:43:5', arabic: 'أَذِنتَ', transliteration: 'adhinta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you grant leave', ur: 'تم grant leave' } },
      { id: '9:43:6', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:43:7', arabic: 'حَتَّىٰ', transliteration: 'ḥattā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'until', ur: 'until' } },
      { id: '9:43:8', arabic: 'يَتَبَيَّنَ', transliteration: 'yatabayyana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(became) evident', ur: '(became) evident' } },
      { id: '9:43:9', arabic: 'لَكَ', transliteration: 'laka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '9:43:10', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:43:11', arabic: 'صَدَقُوا۟', transliteration: 'ṣadaqū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'were truthful', ur: 'تھے truthful' } },
      { id: '9:43:12', arabic: 'وَتَعْلَمَ', transliteration: 'wataʿlama', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and you knew', ur: 'اور تم جانا' } },
      { id: '9:43:13', arabic: 'ٱلْكَـٰذِبِينَ', transliteration: 'l-kādhibīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the liars', ur: ' liars' } }
    ],
    structure: { relationships: [] }
  },
  44: {
    text: 'لَا يَسْتَـْٔذِنُكَ ٱلَّذِينَ يُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ أَن يُجَٰهِدُوا۟ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ ۗ وَٱللَّهُ عَلِيمٌۢ بِٱلْمُتَّقِينَ',
    translation: {
      en: 'Those who believe in Allah and the Last Day would not ask permission of you to be excused from striving with their wealth and their lives. And Allah is Knowing of those who fear Him.',
      ur: 'جو لوگ خدا پر اور روز آخرت پر ایمان رکھتے ہیں وہ تو تم سے اجازت نہیں مانگتے (کہ پیچھے رہ جائیں بلکہ چاہتے ہیں کہ) اپنے مال اور جان سے جہاد کریں۔ اور خدا ڈرنے والوں سے واقف ہے'
    },
    words: [
      { id: '9:44:1', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Would) not ask your permission', ur: '() نہیں پوچھنا/مانگنا تمہارا permission' } },
      { id: '9:44:2', arabic: 'يَسْتَـْٔذِنُكَ', transliteration: 'yastadhinuka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(Would) not ask your permission', ur: '() نہیں پوچھنا/مانگنا تمہارا permission' } },
      { id: '9:44:3', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:44:4', arabic: 'يُؤْمِنُونَ', transliteration: 'yu\'minūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '9:44:5', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:44:6', arabic: 'وَٱلْيَوْمِ', transliteration: 'wal-yawmi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the Day', ur: 'اور قیامت کا دن' } },
      { id: '9:44:7', arabic: 'ٱلْـَٔاخِرِ', transliteration: 'l-ākhiri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Last', ur: ' Last' } },
      { id: '9:44:8', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:44:9', arabic: 'يُجَـٰهِدُوا۟', transliteration: 'yujāhidū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they strive', ur: 'وہ جدوجہد کرنا' } },
      { id: '9:44:10', arabic: 'بِأَمْوَٰلِهِمْ', transliteration: 'bi-amwālihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with their wealth', ur: 'ساتھ ان کا مال' } },
      { id: '9:44:11', arabic: 'وَأَنفُسِهِمْ ۗ', transliteration: 'wa-anfusihim', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and their lives', ur: 'اور ان کا lives' } },
      { id: '9:44:12', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:44:13', arabic: 'عَلِيمٌۢ', transliteration: 'ʿalīmun', pos: ['N'], posLabel: 'N', root: 'ع ل م', meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } },
      { id: '9:44:14', arabic: 'بِٱلْمُتَّقِينَ', transliteration: 'bil-mutaqīna', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of the righteous', ur: 'کا  نیک' } }
    ],
    structure: { relationships: [{ from: 4, to: 11, label: 'عطف' }] }
  },
  45: {
    text: 'إِنَّمَا يَسْتَـْٔذِنُكَ ٱلَّذِينَ لَا يُؤْمِنُونَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَٱرْتَابَتْ قُلُوبُهُمْ فَهُمْ فِى رَيْبِهِمْ يَتَرَدَّدُونَ',
    translation: {
      en: 'Only those would ask permission of you who do not believe in Allah and the Last Day and whose hearts have doubted, and they, in their doubt, are hesitating.',
      ur: 'اجازت وہی لوگ مانگتے ہیں جو خدا پر اور پچھلے دن پر ایمان نہیں رکھتے اور ان کے دل شک میں پڑے ہوئے ہیں۔ سو وہ اپنے شک میں ڈانواں ڈول ہو رہے ہیں'
    },
    words: [
      { id: '9:45:1', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '9:45:2', arabic: 'يَسْتَـْٔذِنُكَ', transliteration: 'yastadhinuka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ask your leave', ur: 'پوچھنا/مانگنا تمہارا leave' } },
      { id: '9:45:3', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:45:4', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(do) not', ur: '(کرنا) نہیں' } },
      { id: '9:45:5', arabic: 'يُؤْمِنُونَ', transliteration: 'yu\'minūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '9:45:6', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:45:7', arabic: 'وَٱلْيَوْمِ', transliteration: 'wal-yawmi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the Day', ur: 'اور قیامت کا دن' } },
      { id: '9:45:8', arabic: 'ٱلْـَٔاخِرِ', transliteration: 'l-ākhiri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Last', ur: ' Last' } },
      { id: '9:45:9', arabic: 'وَٱرْتَابَتْ', transliteration: 'wa-ir\'tābat', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (are in) doubts', ur: 'اور (ہیں میں) doubts' } },
      { id: '9:45:10', arabic: 'قُلُوبُهُمْ', transliteration: 'qulūbuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:45:11', arabic: 'فَهُمْ', transliteration: 'fahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so they', ur: 'پس وہ' } },
      { id: '9:45:12', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:45:13', arabic: 'رَيْبِهِمْ', transliteration: 'raybihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their doubts', ur: 'ان کا doubts' } },
      { id: '9:45:14', arabic: 'يَتَرَدَّدُونَ', transliteration: 'yataraddadūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they waver', ur: 'وہ waver' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'نفی + فعل' }] }
  },
  46: {
    text: '۞ وَلَوْ أَرَادُوا۟ ٱلْخُرُوجَ لَأَعَدُّوا۟ لَهُۥ عُدَّةًۭ وَلَٰكِن كَرِهَ ٱللَّهُ ٱنۢبِعَاثَهُمْ فَثَبَّطَهُمْ وَقِيلَ ٱقْعُدُوا۟ مَعَ ٱلْقَٰعِدِينَ',
    translation: {
      en: 'And if they had intended to go forth, they would have prepared for it [some] preparation. But Allah disliked their being sent, so He kept them back, and they were told, "Remain [behind] with those who remain."',
      ur: 'اور اگر وہ نکلنے کا ارادہ کرتے ہیں تو اس کے لیے سامان تیار کرتے لیکن خدا نے ان کا اُٹھنا (اور نکلنا) پسند نہ کیا تو ان کو ہلنے جلنے ہی نہ دیا اور (ان سے) کہہ دیا گیا کہ جہاں (معذور) بیٹھے ہیں تم بھی ان کے ساتھ بیٹھے رہو'
    },
    words: [
      { id: '9:46:1', arabic: '۞ وَلَوْ', transliteration: 'walaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '9:46:2', arabic: 'أَرَادُوا۟', transliteration: 'arādū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they had wished', ur: 'وہ رکھتا تھا wished' } },
      { id: '9:46:3', arabic: 'ٱلْخُرُوجَ', transliteration: 'l-khurūja', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) go forth', ur: '(کو/تک) جانا forth' } },
      { id: '9:46:4', arabic: 'لَأَعَدُّوا۟', transliteration: 'la-aʿaddū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely they (would) have prepared', ur: 'بےشک وہ () رکھتے ہو prepared' } },
      { id: '9:46:5', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for it', ur: 'کے لیے it' } },
      { id: '9:46:6', arabic: 'عُدَّةًۭ', transliteration: 'ʿuddatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(some) preparation', ur: '(کچھ) preparation' } },
      { id: '9:46:7', arabic: 'وَلَـٰكِن', transliteration: 'walākin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But', ur: 'لیکن' } },
      { id: '9:46:8', arabic: 'كَرِهَ', transliteration: 'kariha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah disliked', ur: 'اللہ disliked' } },
      { id: '9:46:9', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah disliked', ur: 'اللہ disliked' } },
      { id: '9:46:10', arabic: 'ٱنۢبِعَاثَهُمْ', transliteration: 'inbiʿāthahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their being sent', ur: 'ان کا being بھیجا' } },
      { id: '9:46:11', arabic: 'فَثَبَّطَهُمْ', transliteration: 'fathabbaṭahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so He made them lag behind', ur: 'پس وہ بنایا ان کو lag پیچھے' } },
      { id: '9:46:12', arabic: 'وَقِيلَ', transliteration: 'waqīla', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and it was said', ur: 'اور it تھا کہا' } },
      { id: '9:46:13', arabic: 'ٱقْعُدُوا۟', transliteration: 'uq\'ʿudū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Sit', ur: 'Sit' } },
      { id: '9:46:14', arabic: 'مَعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:46:15', arabic: 'ٱلْقَـٰعِدِينَ', transliteration: 'l-qāʿidīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who sit', ur: 'جو لوگ sit' } }
    ],
    structure: { relationships: [] }
  },
  47: {
    text: 'لَوْ خَرَجُوا۟ فِيكُم مَّا زَادُوكُمْ إِلَّا خَبَالًۭا وَلَأَوْضَعُوا۟ خِلَٰلَكُمْ يَبْغُونَكُمُ ٱلْفِتْنَةَ وَفِيكُمْ سَمَّٰعُونَ لَهُمْ ۗ وَٱللَّهُ عَلِيمٌۢ بِٱلظَّٰلِمِينَ',
    translation: {
      en: 'Had they gone forth with you, they would not have increased you except in confusion, and they would have been active among you, seeking [to cause] you fitnah. And among you are avid listeners to them. And Allah is Knowing of the wrongdoers.',
      ur: 'اگر وہ تم میں (شامل ہوکر) نکل بھی کھڑے ہوتے تو تمہارے حق میں شرارت کرتے اور تم میں فساد ڈلوانے کی غرض سے دوڑے دوڑے پھرتے اور تم میں ان کے جاسوس بھی ہیں اور خدا ظالموں کو خوب جانتا ہے'
    },
    words: [
      { id: '9:47:1', arabic: 'لَوْ', transliteration: 'law', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:47:2', arabic: 'خَرَجُوا۟', transliteration: 'kharajū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they (had) gone forth', ur: 'وہ (رکھتا تھا) gone forth' } },
      { id: '9:47:3', arabic: 'فِيكُم', transliteration: 'fīkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with you', ur: 'ساتھ تم' } },
      { id: '9:47:4', arabic: 'مَّا', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:47:5', arabic: 'زَادُوكُمْ', transliteration: 'zādūkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they (would) have increased you', ur: 'وہ () رکھتے ہو increased تم' } },
      { id: '9:47:6', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:47:7', arabic: 'خَبَالًۭا', transliteration: 'khabālan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) confusion', ur: '(میں) confusion' } },
      { id: '9:47:8', arabic: 'وَلَأَوْضَعُوا۟', transliteration: 'wala-awḍaʿū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and would have been active', ur: 'اور  رکھتے ہو been active' } },
      { id: '9:47:9', arabic: 'خِلَـٰلَكُمْ', transliteration: 'khilālakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in your midst', ur: 'میں تمہارا midst' } },
      { id: '9:47:10', arabic: 'يَبْغُونَكُمُ', transliteration: 'yabghūnakumu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'seeking (for) you', ur: 'seeking (کے لیے) تم' } },
      { id: '9:47:11', arabic: 'ٱلْفِتْنَةَ', transliteration: 'l-fit\'nata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'dissension', ur: 'dissension' } },
      { id: '9:47:12', arabic: 'وَفِيكُمْ', transliteration: 'wafīkum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And among you (are some)', ur: 'اور میں سے تم (ہیں کچھ)' } },
      { id: '9:47:13', arabic: 'سَمَّـٰعُونَ', transliteration: 'sammāʿūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'who would have listened', ur: 'جو  رکھتے ہو listened' } },
      { id: '9:47:14', arabic: 'لَهُمْ ۗ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:47:15', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:47:16', arabic: 'عَلِيمٌۢ', transliteration: 'ʿalīmun', pos: ['N'], posLabel: 'N', root: 'ع ل م', meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } },
      { id: '9:47:17', arabic: 'بِٱلظَّـٰلِمِينَ', transliteration: 'bil-ẓālimīna', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of the wrongdoers', ur: 'کا ظالم' } }
    ],
    structure: { relationships: [] }
  },
  48: {
    text: 'لَقَدِ ٱبْتَغَوُا۟ ٱلْفِتْنَةَ مِن قَبْلُ وَقَلَّبُوا۟ لَكَ ٱلْأُمُورَ حَتَّىٰ جَآءَ ٱلْحَقُّ وَظَهَرَ أَمْرُ ٱللَّهِ وَهُمْ كَٰرِهُونَ',
    translation: {
      en: 'They had already desired dissension before and had upset matters for you until the truth came and the ordinance of Allah appeared, while they were averse.',
      ur: 'یہ پہلے بھی طالب فساد رہے ہیں اور بہت سی باتوں میں تمہارے لیے الٹ پھیر کرتے رہے ہیں۔ یہاں تک کہ حق آپہنچا اور خدا کا حکم غالب ہوا اور وہ برا مانتے ہی رہ گئے'
    },
    words: [
      { id: '9:48:1', arabic: 'لَقَدِ', transliteration: 'laqadi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Verily', ur: 'Verily' } },
      { id: '9:48:2', arabic: 'ٱبْتَغَوُا۟', transliteration: 'ib\'taghawū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they had sought', ur: 'وہ رکھتا تھا sought' } },
      { id: '9:48:3', arabic: 'ٱلْفِتْنَةَ', transliteration: 'l-fit\'nata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'dissension', ur: 'dissension' } },
      { id: '9:48:4', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '9:48:5', arabic: 'قَبْلُ', transliteration: 'qablu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '9:48:6', arabic: 'وَقَلَّبُوا۟', transliteration: 'waqallabū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and had upset', ur: 'اور رکھتا تھا upset' } },
      { id: '9:48:7', arabic: 'لَكَ', transliteration: 'laka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '9:48:8', arabic: 'ٱلْأُمُورَ', transliteration: 'l-umūra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the matters', ur: ' matters' } },
      { id: '9:48:9', arabic: 'حَتَّىٰ', transliteration: 'ḥattā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'until', ur: 'until' } },
      { id: '9:48:10', arabic: 'جَآءَ', transliteration: 'jāa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'came', ur: 'آیا' } },
      { id: '9:48:11', arabic: 'ٱلْحَقُّ', transliteration: 'l-ḥaqu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the truth', ur: 'حق' } },
      { id: '9:48:12', arabic: 'وَظَهَرَ', transliteration: 'waẓahara', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and became manifest', ur: 'اور became manifest' } },
      { id: '9:48:13', arabic: 'أَمْرُ', transliteration: 'amru', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(the) Order of Allah', ur: '() Order کا اللہ' } },
      { id: '9:48:14', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Order of Allah', ur: '() Order کا اللہ' } },
      { id: '9:48:15', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:48:16', arabic: 'كَـٰرِهُونَ', transliteration: 'kārihūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'disliked (it)', ur: 'disliked (it)' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }] }
  },
  49: {
    text: 'وَمِنْهُم مَّن يَقُولُ ٱئْذَن لِّى وَلَا تَفْتِنِّىٓ ۚ أَلَا فِى ٱلْفِتْنَةِ سَقَطُوا۟ ۗ وَإِنَّ جَهَنَّمَ لَمُحِيطَةٌۢ بِٱلْكَٰفِرِينَ',
    translation: {
      en: 'And among them is he who says, "Permit me [to remain at home] and do not put me to trial." Unquestionably, into trial they have fallen. And indeed, Hell will encompass the disbelievers.',
      ur: 'اور ان میں کوئی ایسا بھی ہے جو کہتا ہے کہ مجھے تو اجازت ہی دیجئے اور آفت میں نہ ڈالئے۔ دیکھو یہ آفت میں پڑگئے ہیں اور دوزخ سب کافروں کو گھیرے ہوئے ہے'
    },
    words: [
      { id: '9:49:1', arabic: 'وَمِنْهُم', transliteration: 'wamin\'hum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And among them', ur: 'اور میں سے ان کو' } },
      { id: '9:49:2', arabic: 'مَّن', transliteration: 'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is he) who', ur: '(ہے وہ) جو' } },
      { id: '9:49:3', arabic: 'يَقُولُ', transliteration: 'yaqūlu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'says', ur: 'says' } },
      { id: '9:49:4', arabic: 'ٱئْذَن', transliteration: 'i\'dhan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Grant me leave', ur: 'Grant me leave' } },
      { id: '9:49:5', arabic: 'لِّى', transliteration: 'lī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Grant me leave', ur: 'Grant me leave' } },
      { id: '9:49:6', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and (do) not', ur: 'اور (کرنا) نہیں' } },
      { id: '9:49:7', arabic: 'تَفْتِنِّىٓ ۚ', transliteration: 'taftinnī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'put me to trial', ur: 'put me کو/تک trial' } },
      { id: '9:49:8', arabic: 'أَلَا', transliteration: 'alā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Surely', ur: 'بےشک' } },
      { id: '9:49:9', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:49:10', arabic: 'ٱلْفِتْنَةِ', transliteration: 'l-fit\'nati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the trial', ur: ' trial' } },
      { id: '9:49:11', arabic: 'سَقَطُوا۟ ۗ', transliteration: 'saqaṭū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they have fallen', ur: 'وہ رکھتے ہو fallen' } },
      { id: '9:49:12', arabic: 'وَإِنَّ', transliteration: 'wa-inna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And indeed', ur: 'اور بےشک' } },
      { id: '9:49:13', arabic: 'جَهَنَّمَ', transliteration: 'jahannama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Hell', ur: 'Hell' } },
      { id: '9:49:14', arabic: 'لَمُحِيطَةٌۢ', transliteration: 'lamuḥīṭatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(will) surely surround', ur: '() بےشک surround' } },
      { id: '9:49:15', arabic: 'بِٱلْكَـٰفِرِينَ', transliteration: 'bil-kāfirīna', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'the disbelievers', ur: ' کافر' } }
    ],
    structure: { relationships: [] }
  },
  50: {
    text: 'إِن تُصِبْكَ حَسَنَةٌۭ تَسُؤْهُمْ ۖ وَإِن تُصِبْكَ مُصِيبَةٌۭ يَقُولُوا۟ قَدْ أَخَذْنَآ أَمْرَنَا مِن قَبْلُ وَيَتَوَلَّوا۟ وَّهُمْ فَرِحُونَ',
    translation: {
      en: 'If good befalls you, it distresses them; but if disaster strikes you, they say, "We took our matter [in hand] before," and turn away while they are rejoicing.',
      ur: '(اے پیغمبر) اگر تم کو آسائش حاصل ہوتی ہے تو ان کو بری لگتی ہے۔ اور کوئی مشکل پڑتی ہے تو کہتے کہ ہم نے اپنا کام پہلے ہیں (درست) کر لیا تھا اور خوشیاں مناتے لوٹ جاتے ہیں'
    },
    words: [
      { id: '9:50:1', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:50:2', arabic: 'تُصِبْكَ', transliteration: 'tuṣib\'ka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'befalls you', ur: 'befalls تم' } },
      { id: '9:50:3', arabic: 'حَسَنَةٌۭ', transliteration: 'ḥasanatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'good', ur: 'نیکی' } },
      { id: '9:50:4', arabic: 'تَسُؤْهُمْ ۖ', transliteration: 'tasu\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it distresses them', ur: 'it distresses ان کو' } },
      { id: '9:50:5', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'but if', ur: 'لیکن اگر' } },
      { id: '9:50:6', arabic: 'تُصِبْكَ', transliteration: 'tuṣib\'ka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'befalls you', ur: 'befalls تم' } },
      { id: '9:50:7', arabic: 'مُصِيبَةٌۭ', transliteration: 'muṣībatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a calamity', ur: 'ایک calamity' } },
      { id: '9:50:8', arabic: 'يَقُولُوا۟', transliteration: 'yaqūlū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they say', ur: 'وہ کہو' } },
      { id: '9:50:9', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Verily', ur: 'Verily' } },
      { id: '9:50:10', arabic: 'أَخَذْنَآ', transliteration: 'akhadhnā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we took', ur: 'ہم لیا' } },
      { id: '9:50:11', arabic: 'أَمْرَنَا', transliteration: 'amranā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'our matter', ur: 'ہمارا matter' } },
      { id: '9:50:12', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '9:50:13', arabic: 'قَبْلُ', transliteration: 'qablu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '9:50:14', arabic: 'وَيَتَوَلَّوا۟', transliteration: 'wayatawallaw', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And they turn away', ur: 'اور وہ پھیرنا away' } },
      { id: '9:50:15', arabic: 'وَّهُمْ', transliteration: 'wahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:50:16', arabic: 'فَرِحُونَ', transliteration: 'fariḥūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '(are) rejoicing', ur: '(ہیں) rejoicing' } }
    ],
    structure: { relationships: [{ from: 12, to: 13, label: 'جار + مجرور' }] }
  },
  51: {
    text: 'قُل لَّن يُصِيبَنَآ إِلَّا مَا كَتَبَ ٱللَّهُ لَنَا هُوَ مَوْلَىٰنَا ۚ وَعَلَى ٱللَّهِ فَلْيَتَوَكَّلِ ٱلْمُؤْمِنُونَ',
    translation: {
      en: 'Say, "Never will we be struck except by what Allah has decreed for us; He is our protector." And upon Allah let the believers rely.',
      ur: 'کہہ دو کہ ہم کو کوئی مصیبت نہیں پہنچ سکتی بجز اس کے جو خدا نے ہمارے لیے لکھ دی ہو وہی ہمارا کارساز ہے۔ اور مومنوں کو خدا ہی کا بھروسہ رکھنا چاہیئے'
    },
    words: [
      { id: '9:51:1', arabic: 'قُل', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:51:2', arabic: 'لَّن', transliteration: 'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Never', ur: 'Never' } },
      { id: '9:51:3', arabic: 'يُصِيبَنَآ', transliteration: 'yuṣībanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will befall us', ur: ' befall us' } },
      { id: '9:51:4', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:51:5', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:51:6', arabic: 'كَتَبَ', transliteration: 'kataba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has decreed', ur: 'اللہ رکھتا ہے decreed' } },
      { id: '9:51:7', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has decreed', ur: 'اللہ رکھتا ہے decreed' } },
      { id: '9:51:8', arabic: 'لَنَا', transliteration: 'lanā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for us', ur: 'کے لیے us' } },
      { id: '9:51:9', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He', ur: 'وہ' } },
      { id: '9:51:10', arabic: 'مَوْلَىٰنَا ۚ', transliteration: 'mawlānā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) our Protector', ur: '(ہے) ہمارا Protector' } },
      { id: '9:51:11', arabic: 'وَعَلَى', transliteration: 'waʿalā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And on', ur: 'اور پر' } },
      { id: '9:51:12', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:51:13', arabic: 'فَلْيَتَوَكَّلِ', transliteration: 'falyatawakkali', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '[so] let the believers put (their) trust', ur: '[پس] let  مومنین put (ان کا) trust' } },
      { id: '9:51:14', arabic: 'ٱلْمُؤْمِنُونَ', transliteration: 'l-mu\'minūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[so] let the believers put (their) trust', ur: '[پس] let  مومنین put (ان کا) trust' } }
    ],
    structure: { relationships: [] }
  },
  52: {
    text: 'قُلْ هَلْ تَرَبَّصُونَ بِنَآ إِلَّآ إِحْدَى ٱلْحُسْنَيَيْنِ ۖ وَنَحْنُ نَتَرَبَّصُ بِكُمْ أَن يُصِيبَكُمُ ٱللَّهُ بِعَذَابٍۢ مِّنْ عِندِهِۦٓ أَوْ بِأَيْدِينَا ۖ فَتَرَبَّصُوٓا۟ إِنَّا مَعَكُم مُّتَرَبِّصُونَ',
    translation: {
      en: 'Say, "Do you await for us except one of the two best things while we await for you that Allah will afflict you with punishment from Himself or at our hands? So wait; indeed we, along with you, are waiting."',
      ur: 'کہہ دو کہ تم ہمارے حق میں دو بھلائیوں میں سے ایک کے منتظر ہو اور ہم تمہارے حق میں اس بات کے منتظر ہیں کہ خدا (یا تو) اپنے پاس سے تم پر کوئی عذاب نازل کرے یا ہمارے ہاتھوں سے (عذاب دلوائے) تو تم بھی انتظار کرو ہم بھی تمہارے ساتھ انتظار کرتے ہیں'
    },
    words: [
      { id: '9:52:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:52:2', arabic: 'هَلْ', transliteration: 'hal', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Do', ur: 'کرنا' } },
      { id: '9:52:3', arabic: 'تَرَبَّصُونَ', transliteration: 'tarabbaṣūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you await', ur: 'تم await' } },
      { id: '9:52:4', arabic: 'بِنَآ', transliteration: 'binā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for us', ur: 'کے لیے us' } },
      { id: '9:52:5', arabic: 'إِلَّآ', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:52:6', arabic: 'إِحْدَى', transliteration: 'iḥ\'dā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'one', ur: 'one' } },
      { id: '9:52:7', arabic: 'ٱلْحُسْنَيَيْنِ ۖ', transliteration: 'l-ḥus\'nayayni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the two best (things)', ur: '(کا)  two best (things)' } },
      { id: '9:52:8', arabic: 'وَنَحْنُ', transliteration: 'wanaḥnu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'while we', ur: 'جبکہ ہم' } },
      { id: '9:52:9', arabic: 'نَتَرَبَّصُ', transliteration: 'natarabbaṣu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '[we] await', ur: '[ہم] await' } },
      { id: '9:52:10', arabic: 'بِكُمْ', transliteration: 'bikum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '9:52:11', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:52:12', arabic: 'يُصِيبَكُمُ', transliteration: 'yuṣībakumu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah will afflict you', ur: 'اللہ  afflict تم' } },
      { id: '9:52:13', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will afflict you', ur: 'اللہ  afflict تم' } },
      { id: '9:52:14', arabic: 'بِعَذَابٍۢ', transliteration: 'biʿadhābin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with a punishment', ur: 'ساتھ ایک عذاب' } },
      { id: '9:52:15', arabic: 'مِّنْ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:52:16', arabic: 'عِندِهِۦٓ', transliteration: 'ʿindihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[near] Him', ur: '[قریب] Him' } },
      { id: '9:52:17', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '9:52:18', arabic: 'بِأَيْدِينَا ۖ', transliteration: 'bi-aydīnā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by our hands', ur: 'کے ذریعے ہمارا ہاتھ' } },
      { id: '9:52:19', arabic: 'فَتَرَبَّصُوٓا۟', transliteration: 'fatarabbaṣū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So wait', ur: 'پس wait' } },
      { id: '9:52:20', arabic: 'إِنَّا', transliteration: 'innā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'indeed, we', ur: 'بےشک, ہم' } },
      { id: '9:52:21', arabic: 'مَعَكُم', transliteration: 'maʿakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with you', ur: 'ساتھ تم' } },
      { id: '9:52:22', arabic: 'مُّتَرَبِّصُونَ', transliteration: 'mutarabbiṣūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) waiting', ur: '(ہیں) waiting' } }
    ],
    structure: { relationships: [{ from: 3, to: 8, label: 'عطف' }, { from: 12, to: 19, label: 'عطف' }] }
  },
  53: {
    text: 'قُلْ أَنفِقُوا۟ طَوْعًا أَوْ كَرْهًۭا لَّن يُتَقَبَّلَ مِنكُمْ ۖ إِنَّكُمْ كُنتُمْ قَوْمًۭا فَٰسِقِينَ',
    translation: {
      en: 'Say, "Spend willingly or unwillingly; never will it be accepted from you. Indeed, you have been a defiantly disobedient people."',
      ur: 'کہہ دو کہ تم (مال) خوشی سے خرچ کرو یا ناخوشی سے تم سے ہرگز قبول نہیں کیا جائے گا تم نافرمان لوگ ہو'
    },
    words: [
      { id: '9:53:1', arabic: 'قُلْ', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:53:2', arabic: 'أَنفِقُوا۟', transliteration: 'anfiqū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Spend', ur: 'خرچ کرنا' } },
      { id: '9:53:3', arabic: 'طَوْعًا', transliteration: 'ṭawʿan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'willingly', ur: 'willingly' } },
      { id: '9:53:4', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '9:53:5', arabic: 'كَرْهًۭا', transliteration: 'karhan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'unwillingly', ur: 'unwillingly' } },
      { id: '9:53:6', arabic: 'لَّن', transliteration: 'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'never', ur: 'never' } },
      { id: '9:53:7', arabic: 'يُتَقَبَّلَ', transliteration: 'yutaqabbala', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will be accepted', ur: 'ہوگا accepted' } },
      { id: '9:53:8', arabic: 'مِنكُمْ ۖ', transliteration: 'minkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from you', ur: 'سے تم' } },
      { id: '9:53:9', arabic: 'إِنَّكُمْ', transliteration: 'innakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, you', ur: 'بےشک, تم' } },
      { id: '9:53:10', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: '[you] are', ur: '[تم] ہیں' } },
      { id: '9:53:11', arabic: 'قَوْمًۭا', transliteration: 'qawman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a people', ur: 'ایک لوگ' } },
      { id: '9:53:12', arabic: 'فَـٰسِقِينَ', transliteration: 'fāsiqīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'defiantly disobedient', ur: 'defiantly disobedient' } }
    ],
    structure: { relationships: [] }
  },
  54: {
    text: 'وَمَا مَنَعَهُمْ أَن تُقْبَلَ مِنْهُمْ نَفَقَٰتُهُمْ إِلَّآ أَنَّهُمْ كَفَرُوا۟ بِٱللَّهِ وَبِرَسُولِهِۦ وَلَا يَأْتُونَ ٱلصَّلَوٰةَ إِلَّا وَهُمْ كُسَالَىٰ وَلَا يُنفِقُونَ إِلَّا وَهُمْ كَٰرِهُونَ',
    translation: {
      en: 'And what prevents their expenditures from being accepted from them but that they have disbelieved in Allah and in His Messenger and that they come not to prayer except while they are lazy and that they do not spend except while they are unwilling.',
      ur: 'اور ان کے خرچ (موال) کے قبول ہونے سے کوئی چیز مانع نہیں ہوئی سوا اس کے انہوں نے خدا سے اور اس کے رسول سے کفر کیا اور نماز کو آتے ہیں تو سست کاہل ہوکر اور خرچ کرتے ہیں تو ناخوشی سے'
    },
    words: [
      { id: '9:54:1', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:54:2', arabic: 'مَنَعَهُمْ', transliteration: 'manaʿahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'prevents them', ur: 'prevents ان کو' } },
      { id: '9:54:3', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:54:4', arabic: 'تُقْبَلَ', transliteration: 'tuq\'bala', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'is accepted', ur: 'ہے accepted' } },
      { id: '9:54:5', arabic: 'مِنْهُمْ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from them', ur: 'سے ان کو' } },
      { id: '9:54:6', arabic: 'نَفَقَـٰتُهُمْ', transliteration: 'nafaqātuhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their contributions', ur: 'ان کا contributions' } },
      { id: '9:54:7', arabic: 'إِلَّآ', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:54:8', arabic: 'أَنَّهُمْ', transliteration: 'annahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'that they', ur: 'کہ وہ' } },
      { id: '9:54:9', arabic: 'كَفَرُوا۟', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieve', ur: 'کفر کرنا' } },
      { id: '9:54:10', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:54:11', arabic: 'وَبِرَسُولِهِۦ', transliteration: 'wabirasūlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and in His Messenger', ur: 'اور میں اس کا رسول' } },
      { id: '9:54:12', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:54:13', arabic: 'يَأْتُونَ', transliteration: 'yatūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they come', ur: 'وہ آنا' } },
      { id: '9:54:14', arabic: 'ٱلصَّلَوٰةَ', transliteration: 'l-ṣalata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) the prayer', ur: '(کو/تک) نماز' } },
      { id: '9:54:15', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:54:16', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:54:17', arabic: 'كُسَالَىٰ', transliteration: 'kusālā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) lazy', ur: '(ہیں) lazy' } },
      { id: '9:54:18', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:54:19', arabic: 'يُنفِقُونَ', transliteration: 'yunfiqūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they spend', ur: 'وہ خرچ کرنا' } },
      { id: '9:54:20', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:54:21', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:54:22', arabic: 'كَـٰرِهُونَ', transliteration: 'kārihūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) unwilling', ur: '(ہیں) unwilling' } }
    ],
    structure: { relationships: [] }
  },
  55: {
    text: 'فَلَا تُعْجِبْكَ أَمْوَٰلُهُمْ وَلَآ أَوْلَٰدُهُمْ ۚ إِنَّمَا يُرِيدُ ٱللَّهُ لِيُعَذِّبَهُم بِهَا فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا وَتَزْهَقَ أَنفُسُهُمْ وَهُمْ كَٰفِرُونَ',
    translation: {
      en: 'So let not their wealth or their children impress you. Allah only intends to punish them through them in worldly life and that their souls should depart [at death] while they are disbelievers.',
      ur: 'تم ان کے مال اور اولاد سے تعجب نہ کرنا۔ خدا چاہتا ہے کہ ان چیزوں سے دنیا کی زندگی میں ان کو عذاب دے اور (جب) ان کی جان نکلے تو (اس وقت بھی) وہ کافر ہی ہوں'
    },
    words: [
      { id: '9:55:1', arabic: 'فَلَا', transliteration: 'falā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So (let) not', ur: 'پس (let) نہیں' } },
      { id: '9:55:2', arabic: 'تُعْجِبْكَ', transliteration: 'tuʿ\'jib\'ka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'impress you', ur: 'impress تم' } },
      { id: '9:55:3', arabic: 'أَمْوَٰلُهُمْ', transliteration: 'amwāluhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their wealth', ur: 'ان کا مال' } },
      { id: '9:55:4', arabic: 'وَلَآ', transliteration: 'walā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:55:5', arabic: 'أَوْلَـٰدُهُمْ ۚ', transliteration: 'awlāduhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their children', ur: 'ان کا اولاد' } },
      { id: '9:55:6', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '9:55:7', arabic: 'يُرِيدُ', transliteration: 'yurīdu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah intends', ur: 'اللہ intends' } },
      { id: '9:55:8', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah intends', ur: 'اللہ intends' } },
      { id: '9:55:9', arabic: 'لِيُعَذِّبَهُم', transliteration: 'liyuʿadhibahum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to punish them', ur: 'کو/تک سزا دینا ان کو' } },
      { id: '9:55:10', arabic: 'بِهَا', transliteration: 'bihā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with it', ur: 'ساتھ it' } },
      { id: '9:55:11', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:55:12', arabic: 'ٱلْحَيَوٰةِ', transliteration: 'l-ḥayati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the life', ur: ' زندگی' } },
      { id: '9:55:13', arabic: 'ٱلدُّنْيَا', transliteration: 'l-dun\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the world', ur: '(کا)  world' } },
      { id: '9:55:14', arabic: 'وَتَزْهَقَ', transliteration: 'watazhaqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and should depart', ur: 'اور should depart' } },
      { id: '9:55:15', arabic: 'أَنفُسُهُمْ', transliteration: 'anfusuhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their souls', ur: 'ان کا souls' } },
      { id: '9:55:16', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:55:17', arabic: 'كَـٰفِرُونَ', transliteration: 'kāfirūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) disbelievers', ur: '(ہیں) کافر' } }
    ],
    structure: { relationships: [{ from: 7, to: 14, label: 'عطف' }] }
  },
  56: {
    text: 'وَيَحْلِفُونَ بِٱللَّهِ إِنَّهُمْ لَمِنكُمْ وَمَا هُم مِّنكُمْ وَلَٰكِنَّهُمْ قَوْمٌۭ يَفْرَقُونَ',
    translation: {
      en: 'And they swear by Allah that they are from among you while they are not from among you; but they are a people who are afraid.',
      ur: 'اور خدا کی قسمیں کھاتے ہیں کہ وہ تم ہی میں سے ہیں حالانکہ ہو تم میں سے نہیں ہیں۔ اصل یہ ہے کہ یہ ڈرپوک لوگ ہیں'
    },
    words: [
      { id: '9:56:1', arabic: 'وَيَحْلِفُونَ', transliteration: 'wayaḥlifūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And they swear', ur: 'اور وہ swear' } },
      { id: '9:56:2', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by Allah', ur: 'کے ذریعے اللہ' } },
      { id: '9:56:3', arabic: 'إِنَّهُمْ', transliteration: 'innahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'indeed, they', ur: 'بےشک, وہ' } },
      { id: '9:56:4', arabic: 'لَمِنكُمْ', transliteration: 'laminkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely (are) of you', ur: 'بےشک (ہیں) کا تم' } },
      { id: '9:56:5', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while not', ur: 'جبکہ نہیں' } },
      { id: '9:56:6', arabic: 'هُم', transliteration: 'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '9:56:7', arabic: 'مِّنكُمْ', transliteration: 'minkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) of you', ur: '(ہیں) کا تم' } },
      { id: '9:56:8', arabic: 'وَلَـٰكِنَّهُمْ', transliteration: 'walākinnahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'but they', ur: 'لیکن وہ' } },
      { id: '9:56:9', arabic: 'قَوْمٌۭ', transliteration: 'qawmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) a people', ur: '(ہیں) ایک لوگ' } },
      { id: '9:56:10', arabic: 'يَفْرَقُونَ', transliteration: 'yafraqūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(who) are afraid', ur: '(جو) ہیں afraid' } }
    ],
    structure: { relationships: [] }
  },
  57: {
    text: 'لَوْ يَجِدُونَ مَلْجَـًٔا أَوْ مَغَٰرَٰتٍ أَوْ مُدَّخَلًۭا لَّوَلَّوْا۟ إِلَيْهِ وَهُمْ يَجْمَحُونَ',
    translation: {
      en: 'If they could find a refuge or some caves or any place to enter [and hide], they would turn to it while they run heedlessly.',
      ur: 'اگر ان کی کوئی بچاؤ کی جگہ (جیسے قلعہ) یا غار ومغاک یا (زمین کے اندر) گھسنے کی جگہ مل جائے تو اسی طرف رسیاں تڑاتے ہوئے بھاگ جائیں'
    },
    words: [
      { id: '9:57:1', arabic: 'لَوْ', transliteration: 'law', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:57:2', arabic: 'يَجِدُونَ', transliteration: 'yajidūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they could find', ur: 'وہ could find' } },
      { id: '9:57:3', arabic: 'مَلْجَـًٔا', transliteration: 'malja-an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a refuge', ur: 'ایک refuge' } },
      { id: '9:57:4', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '9:57:5', arabic: 'مَغَـٰرَٰتٍ', transliteration: 'maghārātin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'caves', ur: 'caves' } },
      { id: '9:57:6', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '9:57:7', arabic: 'مُدَّخَلًۭا', transliteration: 'muddakhalan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a place to enter', ur: 'ایک place کو/تک داخل ہونا' } },
      { id: '9:57:8', arabic: 'لَّوَلَّوْا۟', transliteration: 'lawallaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely, they would turn', ur: 'بےشک, وہ  پھیرنا' } },
      { id: '9:57:9', arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to it', ur: 'کو/تک it' } },
      { id: '9:57:10', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they', ur: 'اور وہ' } },
      { id: '9:57:11', arabic: 'يَجْمَحُونَ', transliteration: 'yajmaḥūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'run wild', ur: 'run wild' } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'شرط + فعل' }] }
  },
  58: {
    text: 'وَمِنْهُم مَّن يَلْمِزُكَ فِى ٱلصَّدَقَٰتِ فَإِنْ أُعْطُوا۟ مِنْهَا رَضُوا۟ وَإِن لَّمْ يُعْطَوْا۟ مِنْهَآ إِذَا هُمْ يَسْخَطُونَ',
    translation: {
      en: 'And among them are some who criticize you concerning the [distribution of] charities. If they are given from them, they approve; but if they are not given from them, at once they become angry.',
      ur: 'اور ان میں سے بعض اسے بھی ہیں کہ (تقسیم) صدقات میں تم پر طعنہ زنی کرتے ہیں۔ اگر ان کو اس میں سے (خاطر خواہ) مل جائے تو خوش رہیں اور اگر (اس قدر) نہ ملے تو جھٹ خفا ہو جائیں'
    },
    words: [
      { id: '9:58:1', arabic: 'وَمِنْهُم', transliteration: 'wamin\'hum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And among them', ur: 'اور میں سے ان کو' } },
      { id: '9:58:2', arabic: 'مَّن', transliteration: 'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is he) who', ur: '(ہے وہ) جو' } },
      { id: '9:58:3', arabic: 'يَلْمِزُكَ', transliteration: 'yalmizuka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'criticizes you', ur: 'criticizes تم' } },
      { id: '9:58:4', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'concerning', ur: 'concerning' } },
      { id: '9:58:5', arabic: 'ٱلصَّدَقَـٰتِ', transliteration: 'l-ṣadaqāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the charities', ur: ' charities' } },
      { id: '9:58:6', arabic: 'فَإِنْ', transliteration: 'fa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'Then if', ur: 'پھر اگر' } },
      { id: '9:58:7', arabic: 'أُعْطُوا۟', transliteration: 'uʿ\'ṭū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they are given', ur: 'وہ ہیں given' } },
      { id: '9:58:8', arabic: 'مِنْهَا', transliteration: 'min\'hā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from it', ur: 'سے it' } },
      { id: '9:58:9', arabic: 'رَضُوا۟', transliteration: 'raḍū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they are pleased', ur: 'وہ ہیں pleased' } },
      { id: '9:58:10', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'but if', ur: 'لیکن اگر' } },
      { id: '9:58:11', arabic: 'لَّمْ', transliteration: 'lam', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:58:12', arabic: 'يُعْطَوْا۟', transliteration: 'yuʿ\'ṭaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they are given', ur: 'وہ ہیں given' } },
      { id: '9:58:13', arabic: 'مِنْهَآ', transliteration: 'min\'hā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from it', ur: 'سے it' } },
      { id: '9:58:14', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '9:58:15', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '9:58:16', arabic: 'يَسْخَطُونَ', transliteration: 'yaskhaṭūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(are) enraged', ur: '(ہیں) enraged' } }
    ],
    structure: { relationships: [] }
  },
  59: {
    text: 'وَلَوْ أَنَّهُمْ رَضُوا۟ مَآ ءَاتَىٰهُمُ ٱللَّهُ وَرَسُولُهُۥ وَقَالُوا۟ حَسْبُنَا ٱللَّهُ سَيُؤْتِينَا ٱللَّهُ مِن فَضْلِهِۦ وَرَسُولُهُۥٓ إِنَّآ إِلَى ٱللَّهِ رَٰغِبُونَ',
    translation: {
      en: 'If only they had been satisfied with what Allah and His Messenger gave them and said, "Sufficient for us is Allah; Allah will give us of His bounty, and [so will] His Messenger; indeed, we are desirous toward Allah," [it would have been better for them].',
      ur: 'اور اگر وہ اس پر خوش رہتے جو خدا اور اس کے رسول نے ان کو دیا تھا۔ اور کہتے کہ ہمیں خدا کافی ہے اور خدا اپنے فضل سے اور اس کے پیغمبر (اپنی مہربانی سے) ہمیں (پھر) دیں گے۔ اور ہمیں تو خدا ہی کی خواہش ہے (تو ان کے حق میں بہتر ہوتا)'
    },
    words: [
      { id: '9:59:1', arabic: 'وَلَوْ', transliteration: 'walaw', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '9:59:2', arabic: 'أَنَّهُمْ', transliteration: 'annahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '[that] they', ur: '[کہ] وہ' } },
      { id: '9:59:3', arabic: 'رَضُوا۟', transliteration: 'raḍū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(were) satisfied', ur: '(تھے) satisfied' } },
      { id: '9:59:4', arabic: 'مَآ', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(with) what', ur: '(ساتھ) کیا/جو' } },
      { id: '9:59:5', arabic: 'ءَاتَىٰهُمُ', transliteration: 'ātāhumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah gave them', ur: 'اللہ دیا ان کو' } },
      { id: '9:59:6', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah gave them', ur: 'اللہ دیا ان کو' } },
      { id: '9:59:7', arabic: 'وَرَسُولُهُۥ', transliteration: 'warasūluhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:59:8', arabic: 'وَقَالُوا۟', transliteration: 'waqālū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and said', ur: 'اور کہا' } },
      { id: '9:59:9', arabic: 'حَسْبُنَا', transliteration: 'ḥasbunā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Sufficient for us', ur: 'Sufficient کے لیے us' } },
      { id: '9:59:10', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Allah', ur: '(ہے) اللہ' } },
      { id: '9:59:11', arabic: 'سَيُؤْتِينَا', transliteration: 'sayu\'tīnā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will give us', ur: 'اللہ  دینا us' } },
      { id: '9:59:12', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will give us', ur: 'اللہ  دینا us' } },
      { id: '9:59:13', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:59:14', arabic: 'فَضْلِهِۦ', transliteration: 'faḍlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'His Bounty', ur: 'اس کا Bounty' } },
      { id: '9:59:15', arabic: 'وَرَسُولُهُۥٓ', transliteration: 'warasūluhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:59:16', arabic: 'إِنَّآ', transliteration: 'innā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, we', ur: 'بےشک, ہم' } },
      { id: '9:59:17', arabic: 'إِلَى', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:59:18', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:59:19', arabic: 'رَٰغِبُونَ', transliteration: 'rāghibūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'turn our hopes', ur: 'پھیرنا ہمارا hopes' } }
    ],
    structure: { relationships: [{ from: 17, to: 18, label: 'جار + مجرور' }] }
  },
  60: {
    text: '۞ إِنَّمَا ٱلصَّدَقَٰتُ لِلْفُقَرَآءِ وَٱلْمَسَٰكِينِ وَٱلْعَٰمِلِينَ عَلَيْهَا وَٱلْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِى ٱلرِّقَابِ وَٱلْغَٰرِمِينَ وَفِى سَبِيلِ ٱللَّهِ وَٱبْنِ ٱلسَّبِيلِ ۖ فَرِيضَةًۭ مِّنَ ٱللَّهِ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌۭ',
    translation: {
      en: 'Zakah expenditures are only for the poor and for the needy and for those employed to collect [zakah] and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveler - an obligation [imposed] by Allah. And Allah is Knowing and Wise.',
      ur: 'صدقات (یعنی زکوٰة وخیرات) تو مفلسوں اور محتاجوں اور کارکنان صدقات کا حق ہے اور ان لوگوں کا جن کی تالیف قلوب منظور ہے اور غلاموں کے آزاد کرانے میں اور قرضداروں (کے قرض ادا کرنے میں) اور خدا کی راہ میں اور مسافروں (کی مدد) میں (بھی یہ مال خرچ کرنا چاہیئے یہ حقوق) خدا کی طرف سے مقرر کر دیئے گئے ہیں اور خدا جاننے والا (اور) حکمت والا ہے'
    },
    words: [
      { id: '9:60:1', arabic: '۞ إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '9:60:2', arabic: 'ٱلصَّدَقَـٰتُ', transliteration: 'l-ṣadaqātu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the charities', ur: ' charities' } },
      { id: '9:60:3', arabic: 'لِلْفُقَرَآءِ', transliteration: 'lil\'fuqarāi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '(are) for the poor', ur: '(ہیں) کے لیے  poor' } },
      { id: '9:60:4', arabic: 'وَٱلْمَسَـٰكِينِ', transliteration: 'wal-masākīni', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the needy', ur: 'اور  needy' } },
      { id: '9:60:5', arabic: 'وَٱلْعَـٰمِلِينَ', transliteration: 'wal-ʿāmilīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and those who collect', ur: 'اور جو لوگ collect' } },
      { id: '9:60:6', arabic: 'عَلَيْهَا', transliteration: 'ʿalayhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'them', ur: 'ان کو' } },
      { id: '9:60:7', arabic: 'وَٱلْمُؤَلَّفَةِ', transliteration: 'wal-mu-alafati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the ones inclined', ur: 'اور  ones inclined' } },
      { id: '9:60:8', arabic: 'قُلُوبُهُمْ', transliteration: 'qulūbuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:60:9', arabic: 'وَفِى', transliteration: 'wafī', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and in', ur: 'اور میں' } },
      { id: '9:60:10', arabic: 'ٱلرِّقَابِ', transliteration: 'l-riqābi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the (freeing of) the necks', ur: ' (freeing کا)  necks' } },
      { id: '9:60:11', arabic: 'وَٱلْغَـٰرِمِينَ', transliteration: 'wal-ghārimīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and for those in debt', ur: 'اور کے لیے وہ لوگ میں debt' } },
      { id: '9:60:12', arabic: 'وَفِى', transliteration: 'wafī', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and in', ur: 'اور میں' } },
      { id: '9:60:13', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:60:14', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:60:15', arabic: 'وَٱبْنِ', transliteration: 'wa-ib\'ni', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the wayfarer ', ur: 'اور  wayfarer ' } },
      { id: '9:60:16', arabic: 'ٱلسَّبِيلِ ۖ', transliteration: 'l-sabīli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'and the wayfarer ', ur: 'اور  wayfarer ' } },
      { id: '9:60:17', arabic: 'فَرِيضَةًۭ', transliteration: 'farīḍatan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'an obligation', ur: 'ایک obligation' } },
      { id: '9:60:18', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:60:19', arabic: 'ٱللَّهِ ۗ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:60:20', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:60:21', arabic: 'عَلِيمٌ', transliteration: 'ʿalīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: '(is) All-Knowing', ur: '(ہے) سب جاننے والا' } },
      { id: '9:60:22', arabic: 'حَكِيمٌۭ', transliteration: 'ḥakīmun', pos: ['N'], posLabel: 'N', root: 'ح ك م', meaning: { en: 'All-Wise', ur: 'حکمت والا' } }
    ],
    structure: { relationships: [] }
  },
  61: {
    text: 'وَمِنْهُمُ ٱلَّذِينَ يُؤْذُونَ ٱلنَّبِىَّ وَيَقُولُونَ هُوَ أُذُنٌۭ ۚ قُلْ أُذُنُ خَيْرٍۢ لَّكُمْ يُؤْمِنُ بِٱللَّهِ وَيُؤْمِنُ لِلْمُؤْمِنِينَ وَرَحْمَةٌۭ لِّلَّذِينَ ءَامَنُوا۟ مِنكُمْ ۚ وَٱلَّذِينَ يُؤْذُونَ رَسُولَ ٱللَّهِ لَهُمْ عَذَابٌ أَلِيمٌۭ',
    translation: {
      en: 'And among them are those who abuse the Prophet and say, "He is an ear." Say, "[It is] an ear of goodness for you that believes in Allah and believes the believers and [is] a mercy to those who believe among you." And those who abuse the Messenger of Allah - for them is a painful punishment.',
      ur: 'اور ان میں بعض ایسے ہیں جو پیغمبر کو ایذا دیتے ہیں اور کہتے ہیں کہ یہ شخص نرا کان ہے۔ (ان سے) کہہ دو کہ (وہ) کان (ہے تو) تمہاری بھلائی کے لیے۔ وہ خدا کا اور مومنوں (کی بات) کا یقین رکھتا ہے اور جو لوگ تم میں سے ایمان لائے ہیں ان کے لیے رحمت ہے۔ اور جو لوگ رسول خدا کو رنج پہنچاتے ہیں ان کے لیے عذاب الیم (تیار) ہے'
    },
    words: [
      { id: '9:61:1', arabic: 'وَمِنْهُمُ', transliteration: 'wamin\'humu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And among them', ur: 'اور میں سے ان کو' } },
      { id: '9:61:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) those who', ur: '(ہیں) جو لوگ' } },
      { id: '9:61:3', arabic: 'يُؤْذُونَ', transliteration: 'yu\'dhūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'hurt', ur: 'hurt' } },
      { id: '9:61:4', arabic: 'ٱلنَّبِىَّ', transliteration: 'l-nabiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Prophet', ur: ' نبی' } },
      { id: '9:61:5', arabic: 'وَيَقُولُونَ', transliteration: 'wayaqūlūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and they say', ur: 'اور وہ کہو' } },
      { id: '9:61:6', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He is', ur: 'وہ ہے' } },
      { id: '9:61:7', arabic: 'أُذُنٌۭ ۚ', transliteration: 'udhunun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(all) ear', ur: '(سب) ear' } },
      { id: '9:61:8', arabic: 'قُلْ', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:61:9', arabic: 'أُذُنُ', transliteration: 'udhunu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'An ear', ur: 'ایک ear' } },
      { id: '9:61:10', arabic: 'خَيْرٍۢ', transliteration: 'khayrin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) goodness', ur: '(کا) goodness' } },
      { id: '9:61:11', arabic: 'لَّكُمْ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '9:61:12', arabic: 'يُؤْمِنُ', transliteration: 'yu\'minu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'he believes', ur: 'وہ believes' } },
      { id: '9:61:13', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:61:14', arabic: 'وَيُؤْمِنُ', transliteration: 'wayu\'minu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and believes', ur: 'اور believes' } },
      { id: '9:61:15', arabic: 'لِلْمُؤْمِنِينَ', transliteration: 'lil\'mu\'minīna', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'the believers', ur: ' مومنین' } },
      { id: '9:61:16', arabic: 'وَرَحْمَةٌۭ', transliteration: 'waraḥmatun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (is) a mercy', ur: 'اور (ہے) ایک رحمت' } },
      { id: '9:61:17', arabic: 'لِّلَّذِينَ', transliteration: 'lilladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to those who', ur: 'کو/تک جو لوگ' } },
      { id: '9:61:18', arabic: 'ءَامَنُوا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '9:61:19', arabic: 'مِنكُمْ ۚ', transliteration: 'minkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among you', ur: 'میں سے تم' } },
      { id: '9:61:20', arabic: 'وَٱلَّذِينَ', transliteration: 'wa-alladhīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And those who', ur: 'اور جو لوگ' } },
      { id: '9:61:21', arabic: 'يُؤْذُونَ', transliteration: 'yu\'dhūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'hurt', ur: 'hurt' } },
      { id: '9:61:22', arabic: 'رَسُولَ', transliteration: 'rasūla', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Messenger', ur: '() رسول' } },
      { id: '9:61:23', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:61:24', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:61:25', arabic: 'عَذَابٌ', transliteration: 'ʿadhābun', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: '(is) a punishment', ur: '(ہے) ایک عذاب' } },
      { id: '9:61:26', arabic: 'أَلِيمٌۭ', transliteration: 'alīmun', pos: ['N'], posLabel: 'N', root: 'أ ل م', meaning: { en: 'painful', ur: 'دردناک' } }
    ],
    structure: { relationships: [{ from: 3, to: 5, label: 'عطف' }, { from: 12, to: 14, label: 'عطف' }] }
  },
  62: {
    text: 'يَحْلِفُونَ بِٱللَّهِ لَكُمْ لِيُرْضُوكُمْ وَٱللَّهُ وَرَسُولُهُۥٓ أَحَقُّ أَن يُرْضُوهُ إِن كَانُوا۟ مُؤْمِنِينَ',
    translation: {
      en: 'They swear by Allah to you [Muslims] to satisfy you. But Allah and His Messenger are more worthy for them to satisfy, if they should be believers.',
      ur: 'مومنو! یہ لوگ تمہارے سامنے خدا کی قسمیں کھاتے ہیں تاکہ تم کو خوش کر دیں۔ حالانکہ اگر یہ (دل سے) مومن ہوتے تو خدا اور اس کے پیغمبر خوش کرنے کے زیادہ مستحق ہیں'
    },
    words: [
      { id: '9:62:1', arabic: 'يَحْلِفُونَ', transliteration: 'yaḥlifūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They swear', ur: 'وہ swear' } },
      { id: '9:62:2', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by Allah', ur: 'کے ذریعے اللہ' } },
      { id: '9:62:3', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '9:62:4', arabic: 'لِيُرْضُوكُمْ', transliteration: 'liyur\'ḍūkum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to please you', ur: 'کو/تک please تم' } },
      { id: '9:62:5', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:62:6', arabic: 'وَرَسُولُهُۥٓ', transliteration: 'warasūluhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:62:7', arabic: 'أَحَقُّ', transliteration: 'aḥaqqu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(have) more right', ur: '(رکھتے ہو) more حق' } },
      { id: '9:62:8', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:62:9', arabic: 'يُرْضُوهُ', transliteration: 'yur\'ḍūhu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they should please Him', ur: 'وہ should please Him' } },
      { id: '9:62:10', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '9:62:11', arabic: 'كَانُوا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'they are', ur: 'وہ ہیں' } },
      { id: '9:62:12', arabic: 'مُؤْمِنِينَ', transliteration: 'mu\'minīna', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'believers', ur: 'مومنین' } }
    ],
    structure: { relationships: [] }
  },
  63: {
    text: 'أَلَمْ يَعْلَمُوٓا۟ أَنَّهُۥ مَن يُحَادِدِ ٱللَّهَ وَرَسُولَهُۥ فَأَنَّ لَهُۥ نَارَ جَهَنَّمَ خَٰلِدًۭا فِيهَا ۚ ذَٰلِكَ ٱلْخِزْىُ ٱلْعَظِيمُ',
    translation: {
      en: 'Do they not know that whoever opposes Allah and His Messenger - that for him is the fire of Hell, wherein he will abide eternally? That is the great disgrace.',
      ur: 'کیا ان لوگوں کو معلوم نہیں کہ جو شخص خدا اور اس کے رسول سے مقابلہ کرتا ہے تو اس کے لیے جہنم کی آگ (تیار) ہے جس میں وہ ہمیشہ (جلتا) رہے گا۔ یہ بڑی رسوائی ہے'
    },
    words: [
      { id: '9:63:1', arabic: 'أَلَمْ', transliteration: 'alam', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Do not', ur: 'کرنا نہیں' } },
      { id: '9:63:2', arabic: 'يَعْلَمُوٓا۟', transliteration: 'yaʿlamū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they know', ur: 'وہ جاننا' } },
      { id: '9:63:3', arabic: 'أَنَّهُۥ', transliteration: 'annahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that he', ur: 'کہ وہ' } },
      { id: '9:63:4', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'who', ur: 'جو' } },
      { id: '9:63:5', arabic: 'يُحَادِدِ', transliteration: 'yuḥādidi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'opposes', ur: 'opposes' } },
      { id: '9:63:6', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:63:7', arabic: 'وَرَسُولَهُۥ', transliteration: 'warasūlahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:63:8', arabic: 'فَأَنَّ', transliteration: 'fa-anna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: '[then] that', ur: '[پھر] کہ' } },
      { id: '9:63:9', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for him', ur: 'کے لیے him' } },
      { id: '9:63:10', arabic: 'نَارَ', transliteration: 'nāra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is the) Fire', ur: '(ہے ) آگ' } },
      { id: '9:63:11', arabic: 'جَهَنَّمَ', transliteration: 'jahannama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Hell', ur: '(کا) Hell' } },
      { id: '9:63:12', arabic: 'خَـٰلِدًۭا', transliteration: 'khālidan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(will) abide forever', ur: '() abide forever' } },
      { id: '9:63:13', arabic: 'فِيهَا ۚ', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:63:14', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '9:63:15', arabic: 'ٱلْخِزْىُ', transliteration: 'l-khiz\'yu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the disgrace', ur: '(ہے)  disgrace' } },
      { id: '9:63:16', arabic: 'ٱلْعَظِيمُ', transliteration: 'l-ʿaẓīmu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the great', ur: ' عظیم' } }
    ],
    structure: { relationships: [{ from: 1, to: 8, label: 'عطف' }] }
  },
  64: {
    text: 'يَحْذَرُ ٱلْمُنَٰفِقُونَ أَن تُنَزَّلَ عَلَيْهِمْ سُورَةٌۭ تُنَبِّئُهُم بِمَا فِى قُلُوبِهِمْ ۚ قُلِ ٱسْتَهْزِءُوٓا۟ إِنَّ ٱللَّهَ مُخْرِجٌۭ مَّا تَحْذَرُونَ',
    translation: {
      en: 'They hypocrites are apprehensive lest a surah be revealed about them, informing them of what is in their hearts. Say, "Mock [as you wish]; indeed, Allah will expose that which you fear."',
      ur: 'منافق ڈرتے رہتے ہیں کہ ان (کے پیغمبر) پر کہیں کوئی ایسی سورت (نہ) اُتر آئے کہ ان کے دل کی باتوں کو ان (مسلمانوں) پر ظاہر کر دے۔ کہہ دو کہ ہنسی کئے جاؤ۔ جس بات سے تم ڈرتے ہو خدا اس کو ضرور ظاہر کردے گا'
    },
    words: [
      { id: '9:64:1', arabic: 'يَحْذَرُ', transliteration: 'yaḥdharu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Fear', ur: 'ڈرنا' } },
      { id: '9:64:2', arabic: 'ٱلْمُنَـٰفِقُونَ', transliteration: 'l-munāfiqūna', pos: ['N'], posLabel: 'N', root: 'ن ف ق', meaning: { en: 'the hypocrites', ur: ' hypocrites' } },
      { id: '9:64:3', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'lest', ur: 'lest' } },
      { id: '9:64:4', arabic: 'تُنَزَّلَ', transliteration: 'tunazzala', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'be revealed', ur: 'be نازل کیا' } },
      { id: '9:64:5', arabic: 'عَلَيْهِمْ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'about them', ur: 'بارے میں ان کو' } },
      { id: '9:64:6', arabic: 'سُورَةٌۭ', transliteration: 'sūratun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a Surah', ur: 'ایک Surah' } },
      { id: '9:64:7', arabic: 'تُنَبِّئُهُم', transliteration: 'tunabbi-uhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'informing them', ur: 'informing ان کو' } },
      { id: '9:64:8', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of what', ur: 'کا کیا/جو' } },
      { id: '9:64:9', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) in', ur: '(ہے) میں' } },
      { id: '9:64:10', arabic: 'قُلُوبِهِمْ ۚ', transliteration: 'qulūbihim', pos: ['N'], posLabel: 'N', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:64:11', arabic: 'قُلِ', transliteration: 'quli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:64:12', arabic: 'ٱسْتَهْزِءُوٓا۟', transliteration: 'is\'tahziū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Mock', ur: 'Mock' } },
      { id: '9:64:13', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'indeed', ur: 'بےشک' } },
      { id: '9:64:14', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:64:15', arabic: 'مُخْرِجٌۭ', transliteration: 'mukh\'rijun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(will) bring forth', ur: '() bring forth' } },
      { id: '9:64:16', arabic: 'مَّا', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:64:17', arabic: 'تَحْذَرُونَ', transliteration: 'taḥdharūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you fear', ur: 'تم ڈرنا' } }
    ],
    structure: { relationships: [] }
  },
  65: {
    text: 'وَلَئِن سَأَلْتَهُمْ لَيَقُولُنَّ إِنَّمَا كُنَّا نَخُوضُ وَنَلْعَبُ ۚ قُلْ أَبِٱللَّهِ وَءَايَٰتِهِۦ وَرَسُولِهِۦ كُنتُمْ تَسْتَهْزِءُونَ',
    translation: {
      en: 'And if you ask them, they will surely say, "We were only conversing and playing." Say, "Is it Allah and His verses and His Messenger that you were mocking?"',
      ur: 'اور اگر تم ان سے (اس بارے میں) دریافت کرو تو کہیں گے ہم تو یوں ہی بات چیت اور دل لگی کرتے تھے۔ کہو کیا تم خدا اور اس کی آیتوں اور اس کے رسول سے ہنسی کرتے تھے'
    },
    words: [
      { id: '9:65:1', arabic: 'وَلَئِن', transliteration: 'wala-in', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And if', ur: 'اور اگر' } },
      { id: '9:65:2', arabic: 'سَأَلْتَهُمْ', transliteration: 'sa-altahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you ask them', ur: 'تم پوچھنا/مانگنا ان کو' } },
      { id: '9:65:3', arabic: 'لَيَقُولُنَّ', transliteration: 'layaqūlunna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely they will say', ur: 'بےشک وہ  کہو' } },
      { id: '9:65:4', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '9:65:5', arabic: 'كُنَّا', transliteration: 'kunnā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we were', ur: 'ہم تھے' } },
      { id: '9:65:6', arabic: 'نَخُوضُ', transliteration: 'nakhūḍu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'conversing', ur: 'conversing' } },
      { id: '9:65:7', arabic: 'وَنَلْعَبُ ۚ', transliteration: 'wanalʿabu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and playing', ur: 'اور playing' } },
      { id: '9:65:8', arabic: 'قُلْ', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:65:9', arabic: 'أَبِٱللَّهِ', transliteration: 'abil-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Is it Allah', ur: 'ہے it اللہ' } },
      { id: '9:65:10', arabic: 'وَءَايَـٰتِهِۦ', transliteration: 'waāyātihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Verses', ur: 'اور اس کا آیات' } },
      { id: '9:65:11', arabic: 'وَرَسُولِهِۦ', transliteration: 'warasūlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:65:12', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: '(that) you were', ur: '(کہ) تم تھے' } },
      { id: '9:65:13', arabic: 'تَسْتَهْزِءُونَ', transliteration: 'tastahziūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'mocking', ur: 'mocking' } }
    ],
    structure: { relationships: [{ from: 6, to: 7, label: 'عطف' }] }
  },
  66: {
    text: 'لَا تَعْتَذِرُوا۟ قَدْ كَفَرْتُم بَعْدَ إِيمَٰنِكُمْ ۚ إِن نَّعْفُ عَن طَآئِفَةٍۢ مِّنكُمْ نُعَذِّبْ طَآئِفَةًۢ بِأَنَّهُمْ كَانُوا۟ مُجْرِمِينَ',
    translation: {
      en: 'Make no excuse; you have disbelieved after your belief. If We pardon one faction of you - We will punish another faction because they were criminals.',
      ur: 'بہانے مت بناؤ تم ایمان لانے کے بعد کافر ہو چکے ہو۔ اگر ہم تم میں سے ایک جماعت کو معاف کردیں تو دوسری جماعت کو سزا بھی دیں گے کیونکہ وہ گناہ کرتے رہے ہیں'
    },
    words: [
      { id: '9:66:1', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '9:66:2', arabic: 'تَعْتَذِرُوا۟', transliteration: 'taʿtadhirū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'make excuse', ur: 'بنانا excuse' } },
      { id: '9:66:3', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'verily', ur: 'verily' } },
      { id: '9:66:4', arabic: 'كَفَرْتُم', transliteration: 'kafartum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you have disbelieved', ur: 'تم رکھتے ہو کفر کیا' } },
      { id: '9:66:5', arabic: 'بَعْدَ', transliteration: 'baʿda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:66:6', arabic: 'إِيمَـٰنِكُمْ ۚ', transliteration: 'īmānikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your belief', ur: 'تمہارا belief' } },
      { id: '9:66:7', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:66:8', arabic: 'نَّعْفُ', transliteration: 'naʿfu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We pardon', ur: 'ہم pardon' } },
      { id: '9:66:9', arabic: 'عَن', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '[on]', ur: '[پر]' } },
      { id: '9:66:10', arabic: 'طَآئِفَةٍۢ', transliteration: 'ṭāifatin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a party', ur: 'ایک party' } },
      { id: '9:66:11', arabic: 'مِّنكُمْ', transliteration: 'minkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of you', ur: 'کا تم' } },
      { id: '9:66:12', arabic: 'نُعَذِّبْ', transliteration: 'nuʿadhib', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'We will punish', ur: 'ہم  سزا دینا' } },
      { id: '9:66:13', arabic: 'طَآئِفَةًۢ', transliteration: 'ṭāifatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a party', ur: 'ایک party' } },
      { id: '9:66:14', arabic: 'بِأَنَّهُمْ', transliteration: 'bi-annahum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'because they', ur: 'because وہ' } },
      { id: '9:66:15', arabic: 'كَانُوا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'were', ur: 'تھے' } },
      { id: '9:66:16', arabic: 'مُجْرِمِينَ', transliteration: 'muj\'rimīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'criminals', ur: 'criminals' } }
    ],
    structure: { relationships: [{ from: 7, to: 8, label: 'شرط + فعل' }, { from: 9, to: 10, label: 'جار + مجرور' }] }
  },
  67: {
    text: 'ٱلْمُنَٰفِقُونَ وَٱلْمُنَٰفِقَٰتُ بَعْضُهُم مِّنۢ بَعْضٍۢ ۚ يَأْمُرُونَ بِٱلْمُنكَرِ وَيَنْهَوْنَ عَنِ ٱلْمَعْرُوفِ وَيَقْبِضُونَ أَيْدِيَهُمْ ۚ نَسُوا۟ ٱللَّهَ فَنَسِيَهُمْ ۗ إِنَّ ٱلْمُنَٰفِقِينَ هُمُ ٱلْفَٰسِقُونَ',
    translation: {
      en: 'The hypocrite men and hypocrite women are of one another. They enjoin what is wrong and forbid what is right and close their hands. They have forgotten Allah, so He has forgotten them [accordingly]. Indeed, the hypocrites - it is they who are the defiantly disobedient.',
      ur: 'منافق مرد اور منافق عورتیں ایک دوسرے کے ہم جنس (یعنی ایک طرح کے) ہیں کہ برے کام کرنے کو کہتے اور نیک کاموں سے منع کرتے اور (خرچ کرنے سے) ہاتھ بند کئے رہتے ہیں۔ انہوں نے خدا کو بھلا دیا تو خدا نے ان کو بھلا دیا۔ بےشک منافق نافرمان ہیں'
    },
    words: [
      { id: '9:67:1', arabic: 'ٱلْمُنَـٰفِقُونَ', transliteration: 'al-munāfiqūna', pos: ['N'], posLabel: 'N', root: 'ن ف ق', meaning: { en: 'The hypocrite men', ur: ' hypocrite men' } },
      { id: '9:67:2', arabic: 'وَٱلْمُنَـٰفِقَـٰتُ', transliteration: 'wal-munāfiqātu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the hypocrite women', ur: 'اور  hypocrite women' } },
      { id: '9:67:3', arabic: 'بَعْضُهُم', transliteration: 'baʿḍuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'some of them', ur: 'کچھ کا ان کو' } },
      { id: '9:67:4', arabic: 'مِّنۢ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) of', ur: '(ہیں) کا' } },
      { id: '9:67:5', arabic: 'بَعْضٍۢ ۚ', transliteration: 'baʿḍin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'others', ur: 'others' } },
      { id: '9:67:6', arabic: 'يَأْمُرُونَ', transliteration: 'yamurūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They enjoin', ur: 'وہ enjoin' } },
      { id: '9:67:7', arabic: 'بِٱلْمُنكَرِ', transliteration: 'bil-munkari', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'the wrong', ur: ' غلط' } },
      { id: '9:67:8', arabic: 'وَيَنْهَوْنَ', transliteration: 'wayanhawna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and forbid', ur: 'اور forbid' } },
      { id: '9:67:9', arabic: 'عَنِ', transliteration: 'ʿani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:67:10', arabic: 'ٱلْمَعْرُوفِ', transliteration: 'l-maʿrūfi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the right', ur: '(ہے)  حق' } },
      { id: '9:67:11', arabic: 'وَيَقْبِضُونَ', transliteration: 'wayaqbiḍūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and they close', ur: 'اور وہ close' } },
      { id: '9:67:12', arabic: 'أَيْدِيَهُمْ ۚ', transliteration: 'aydiyahum', pos: ['N'], posLabel: 'N', root: 'ي د ي', meaning: { en: 'their hands', ur: 'ان کا ہاتھ' } },
      { id: '9:67:13', arabic: 'نَسُوا۟', transliteration: 'nasū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They forget', ur: 'وہ forget' } },
      { id: '9:67:14', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:67:15', arabic: 'فَنَسِيَهُمْ ۗ', transliteration: 'fanasiyahum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'so He has forgotten them', ur: 'پس وہ رکھتا ہے forgotten ان کو' } },
      { id: '9:67:16', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:67:17', arabic: 'ٱلْمُنَـٰفِقِينَ', transliteration: 'l-munāfiqīna', pos: ['N'], posLabel: 'N', root: 'ن ف ق', meaning: { en: 'the hypocrites', ur: ' hypocrites' } },
      { id: '9:67:18', arabic: 'هُمُ', transliteration: 'humu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they (are)', ur: 'وہ (ہیں)' } },
      { id: '9:67:19', arabic: 'ٱلْفَـٰسِقُونَ', transliteration: 'l-fāsiqūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the defiantly disobedient', ur: ' defiantly disobedient' } }
    ],
    structure: { relationships: [{ from: 6, to: 8, label: 'عطف' }, { from: 8, to: 11, label: 'عطف' }, { from: 11, to: 15, label: 'عطف' }] }
  },
  68: {
    text: 'وَعَدَ ٱللَّهُ ٱلْمُنَٰفِقِينَ وَٱلْمُنَٰفِقَٰتِ وَٱلْكُفَّارَ نَارَ جَهَنَّمَ خَٰلِدِينَ فِيهَا ۚ هِىَ حَسْبُهُمْ ۚ وَلَعَنَهُمُ ٱللَّهُ ۖ وَلَهُمْ عَذَابٌۭ مُّقِيمٌۭ',
    translation: {
      en: 'Allah has promised the hypocrite men and hypocrite women and the disbelievers the fire of Hell, wherein they will abide eternally. It is sufficient for them. And Allah has cursed them, and for them is an enduring punishment.',
      ur: 'الله نے منافق مردوں اور منافق عورتوں اور کافروں سے آتش جہنم کا وعدہ کیا ہے جس میں ہمیشہ (جلتے) رہیں گے۔ وہی ان کے لائق ہے۔ اور خدا نے ان پر لعنت کر دی ہے۔ اور ان کے لیے ہمیشہ کا عذاب (تیار) ہے'
    },
    words: [
      { id: '9:68:1', arabic: 'وَعَدَ', transliteration: 'waʿada', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Allah has promised', ur: 'اللہ رکھتا ہے promised' } },
      { id: '9:68:2', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has promised', ur: 'اللہ رکھتا ہے promised' } },
      { id: '9:68:3', arabic: 'ٱلْمُنَـٰفِقِينَ', transliteration: 'l-munāfiqīna', pos: ['N'], posLabel: 'N', root: 'ن ف ق', meaning: { en: 'the hypocrite men', ur: ' hypocrite men' } },
      { id: '9:68:4', arabic: 'وَٱلْمُنَـٰفِقَـٰتِ', transliteration: 'wal-munāfiqāti', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the hypocrite women', ur: 'اور  hypocrite women' } },
      { id: '9:68:5', arabic: 'وَٱلْكُفَّارَ', transliteration: 'wal-kufāra', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the disbelievers', ur: 'اور  کافر' } },
      { id: '9:68:6', arabic: 'نَارَ', transliteration: 'nāra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Fire', ur: 'دوزخ' } },
      { id: '9:68:7', arabic: 'جَهَنَّمَ', transliteration: 'jahannama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Hell', ur: '(کا) Hell' } },
      { id: '9:68:8', arabic: 'خَـٰلِدِينَ', transliteration: 'khālidīna', pos: ['N'], posLabel: 'N', root: 'خ ل د', meaning: { en: 'they (will) abide forever', ur: 'وہ () abide forever' } },
      { id: '9:68:9', arabic: 'فِيهَا ۚ', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:68:10', arabic: 'هِىَ', transliteration: 'hiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'It (is)', ur: 'It (ہے)' } },
      { id: '9:68:11', arabic: 'حَسْبُهُمْ ۚ', transliteration: 'ḥasbuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'sufficient for them', ur: 'sufficient کے لیے ان کو' } },
      { id: '9:68:12', arabic: 'وَلَعَنَهُمُ', transliteration: 'walaʿanahumu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah has cursed them', ur: 'اور اللہ رکھتا ہے cursed ان کو' } },
      { id: '9:68:13', arabic: 'ٱللَّهُ ۖ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And Allah has cursed them', ur: 'اور اللہ رکھتا ہے cursed ان کو' } },
      { id: '9:68:14', arabic: 'وَلَهُمْ', transliteration: 'walahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and for them', ur: 'اور کے لیے ان کو' } },
      { id: '9:68:15', arabic: 'عَذَابٌۭ', transliteration: 'ʿadhābun', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: '(is) a punishment', ur: '(ہے) ایک عذاب' } },
      { id: '9:68:16', arabic: 'مُّقِيمٌۭ', transliteration: 'muqīmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'enduring', ur: 'enduring' } }
    ],
    structure: { relationships: [] }
  },
  69: {
    text: 'كَٱلَّذِينَ مِن قَبْلِكُمْ كَانُوٓا۟ أَشَدَّ مِنكُمْ قُوَّةًۭ وَأَكْثَرَ أَمْوَٰلًۭا وَأَوْلَٰدًۭا فَٱسْتَمْتَعُوا۟ بِخَلَٰقِهِمْ فَٱسْتَمْتَعْتُم بِخَلَٰقِكُمْ كَمَا ٱسْتَمْتَعَ ٱلَّذِينَ مِن قَبْلِكُم بِخَلَٰقِهِمْ وَخُضْتُمْ كَٱلَّذِى خَاضُوٓا۟ ۚ أُو۟لَٰٓئِكَ حَبِطَتْ أَعْمَٰلُهُمْ فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْخَٰسِرُونَ',
    translation: {
      en: '[You disbelievers are] like those before you; they were stronger than you in power and more abundant in wealth and children. They enjoyed their portion [of worldly enjoyment], and you have enjoyed your portion as those before you enjoyed their portion, and you have engaged [in vanities] like that in which they engaged. [It is] those whose deeds have become worthless in this world and in the Hereafter, and it is they who are the losers.',
      ur: '(تم منافق لوگ) ان لوگوں کی طرح ہو، جو تم سے پہلے ہوچکے ہیں۔ وہ تم سے بہت زیادہ طاقتور اور مال و اولاد میں کہیں زیادہ تھے تو وہ اپنے حصے سے بہرہ یاب ہوچکے۔ سو جس طرح تم سے پہلے لوگ اپنے حصے سے فائدہ اٹھا چکے ہیں۔ اسی طرح تم نے اپنے حصے سے فائدہ اٹھا لیا۔ اور جس طرح وہ باطل میں ڈوبے رہے اسی طرح تم باطل میں ڈوبے رہے یہ وہ لوگ ہیں جن کے اعمال دنیا اور آخرت میں ضائع ہوگئے۔ اور یہی نقصان اٹھانے والے ہیں'
    },
    words: [
      { id: '9:69:1', arabic: 'كَٱلَّذِينَ', transliteration: 'ka-alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Like those', ur: 'Like وہ لوگ' } },
      { id: '9:69:2', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before you', ur: 'پہلے تم' } },
      { id: '9:69:3', arabic: 'قَبْلِكُمْ', transliteration: 'qablikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before you', ur: 'پہلے تم' } },
      { id: '9:69:4', arabic: 'كَانُوٓا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they were', ur: 'وہ تھے' } },
      { id: '9:69:5', arabic: 'أَشَدَّ', transliteration: 'ashadda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'mightier', ur: 'mightier' } },
      { id: '9:69:6', arabic: 'مِنكُمْ', transliteration: 'minkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'than you', ur: 'than تم' } },
      { id: '9:69:7', arabic: 'قُوَّةًۭ', transliteration: 'quwwatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) strength', ur: '(میں) strength' } },
      { id: '9:69:8', arabic: 'وَأَكْثَرَ', transliteration: 'wa-akthara', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and more abundant', ur: 'اور more abundant' } },
      { id: '9:69:9', arabic: 'أَمْوَٰلًۭا', transliteration: 'amwālan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) wealth', ur: '(میں) مال' } },
      { id: '9:69:10', arabic: 'وَأَوْلَـٰدًۭا', transliteration: 'wa-awlādan', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and children', ur: 'اور اولاد' } },
      { id: '9:69:11', arabic: 'فَٱسْتَمْتَعُوا۟', transliteration: 'fa-is\'tamtaʿū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So they enjoyed', ur: 'پس وہ enjoyed' } },
      { id: '9:69:12', arabic: 'بِخَلَـٰقِهِمْ', transliteration: 'bikhalāqihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'their portion', ur: 'ان کا portion' } },
      { id: '9:69:13', arabic: 'فَٱسْتَمْتَعْتُم', transliteration: 'fa-is\'tamtaʿtum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and you have enjoyed', ur: 'اور تم رکھتے ہو enjoyed' } },
      { id: '9:69:14', arabic: 'بِخَلَـٰقِكُمْ', transliteration: 'bikhalāqikum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'your portion', ur: 'تمہارا portion' } },
      { id: '9:69:15', arabic: 'كَمَا', transliteration: 'kamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'like', ur: 'like' } },
      { id: '9:69:16', arabic: 'ٱسْتَمْتَعَ', transliteration: 'is\'tamtaʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'enjoyed', ur: 'enjoyed' } },
      { id: '9:69:17', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those', ur: 'وہ لوگ' } },
      { id: '9:69:18', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before you', ur: 'پہلے تم' } },
      { id: '9:69:19', arabic: 'قَبْلِكُم', transliteration: 'qablikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before you', ur: 'پہلے تم' } },
      { id: '9:69:20', arabic: 'بِخَلَـٰقِهِمْ', transliteration: 'bikhalāqihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'their portion', ur: 'ان کا portion' } },
      { id: '9:69:21', arabic: 'وَخُضْتُمْ', transliteration: 'wakhuḍ\'tum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and you indulge', ur: 'اور تم indulge' } },
      { id: '9:69:22', arabic: 'كَٱلَّذِى', transliteration: 'ka-alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'like the one who', ur: 'like  one جو' } },
      { id: '9:69:23', arabic: 'خَاضُوٓا۟ ۚ', transliteration: 'khāḍū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'indulges (in idle talk)', ur: 'indulges (میں idle talk)' } },
      { id: '9:69:24', arabic: 'أُو۟لَـٰٓئِكَ', transliteration: 'ulāika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Those', ur: 'وہ لوگ' } },
      { id: '9:69:25', arabic: 'حَبِطَتْ', transliteration: 'ḥabiṭat', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'worthless', ur: 'worthless' } },
      { id: '9:69:26', arabic: 'أَعْمَـٰلُهُمْ', transliteration: 'aʿmāluhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(are) their deeds', ur: '(ہیں) ان کے اعمال' } },
      { id: '9:69:27', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:69:28', arabic: 'ٱلدُّنْيَا', transliteration: 'l-dun\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the world', ur: ' world' } },
      { id: '9:69:29', arabic: 'وَٱلْـَٔاخِرَةِ ۖ', transliteration: 'wal-ākhirati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (in) the Hereafter', ur: 'اور (میں)  Hereafter' } },
      { id: '9:69:30', arabic: 'وَأُو۟لَـٰٓئِكَ', transliteration: 'wa-ulāika', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And those', ur: 'اور وہ لوگ' } },
      { id: '9:69:31', arabic: 'هُمُ', transliteration: 'humu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '9:69:32', arabic: 'ٱلْخَـٰسِرُونَ', transliteration: 'l-khāsirūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) the losers', ur: '(ہیں)  losers' } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 8, to: 10, label: 'عطف' }, { from: 18, to: 19, label: 'جار + مجرور' }] }
  },
  70: {
    text: 'أَلَمْ يَأْتِهِمْ نَبَأُ ٱلَّذِينَ مِن قَبْلِهِمْ قَوْمِ نُوحٍۢ وَعَادٍۢ وَثَمُودَ وَقَوْمِ إِبْرَٰهِيمَ وَأَصْحَٰبِ مَدْيَنَ وَٱلْمُؤْتَفِكَٰتِ ۚ أَتَتْهُمْ رُسُلُهُم بِٱلْبَيِّنَٰتِ ۖ فَمَا كَانَ ٱللَّهُ لِيَظْلِمَهُمْ وَلَٰكِن كَانُوٓا۟ أَنفُسَهُمْ يَظْلِمُونَ',
    translation: {
      en: 'Has there not reached them the news of those before them - the people of Noah and [the tribes of] \'Aad and Thamud and the people of Abraham and the companions of Madyan and the towns overturned? Their messengers came to them with clear proofs. And Allah would never have wronged them, but they were wronging themselves.',
      ur: 'کیا ان کو ان لوگوں (کے حالات) کی خبر نہیں پہنچی جو ان سے پہلے تھے (یعنی) نوح اور عاد اور ثمود کی قوم۔ اور ابراہیم کی قوم اور مدین والے اور الٹی ہوئی بستیوں والے۔ ان کے پاس پیغمبر نشانیاں لے لے کر آئے۔ اور خدا تو ایسا نہ تھا کہ ان پر ظلم کرتا لیکن وہی اپنے آپ پر ظلم کرتے تھے'
    },
    words: [
      { id: '9:70:1', arabic: 'أَلَمْ', transliteration: 'alam', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Has not', ur: 'رکھتا ہے نہیں' } },
      { id: '9:70:2', arabic: 'يَأْتِهِمْ', transliteration: 'yatihim', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'come to them', ur: 'آنا کو/تک ان کو' } },
      { id: '9:70:3', arabic: 'نَبَأُ', transliteration: 'naba-u', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(the) news', ur: '() news' } },
      { id: '9:70:4', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) those who', ur: '(کا) جو لوگ' } },
      { id: '9:70:5', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '(were) before them', ur: '(تھے) پہلے ان کو' } },
      { id: '9:70:6', arabic: 'قَبْلِهِمْ', transliteration: 'qablihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(were) before them', ur: '(تھے) پہلے ان کو' } },
      { id: '9:70:7', arabic: 'قَوْمِ', transliteration: 'qawmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) people', ur: '() لوگ' } },
      { id: '9:70:8', arabic: 'نُوحٍۢ', transliteration: 'nūḥin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Nuh', ur: '(کا) Nuh' } },
      { id: '9:70:9', arabic: 'وَعَادٍۢ', transliteration: 'waʿādin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Aad', ur: 'اور Aad' } },
      { id: '9:70:10', arabic: 'وَثَمُودَ', transliteration: 'wathamūda', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Thamud', ur: 'اور Thamud' } },
      { id: '9:70:11', arabic: 'وَقَوْمِ', transliteration: 'waqawmi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (the) people', ur: 'اور () لوگ' } },
      { id: '9:70:12', arabic: 'إِبْرَٰهِيمَ', transliteration: 'ib\'rāhīma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Ibrahim', ur: '(کا) Ibrahim' } },
      { id: '9:70:13', arabic: 'وَأَصْحَـٰبِ', transliteration: 'wa-aṣḥābi', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and (the) companions', ur: 'اور () companions' } },
      { id: '9:70:14', arabic: 'مَدْيَنَ', transliteration: 'madyana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Madyan', ur: '(کا) Madyan' } },
      { id: '9:70:15', arabic: 'وَٱلْمُؤْتَفِكَـٰتِ ۚ', transliteration: 'wal-mu\'tafikāti', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the towns overturned', ur: 'اور  towns overturned' } },
      { id: '9:70:16', arabic: 'أَتَتْهُمْ', transliteration: 'atathum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Came to them', ur: 'آیا کو/تک ان کو' } },
      { id: '9:70:17', arabic: 'رُسُلُهُم', transliteration: 'rusuluhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their Messengers', ur: 'ان کا Messengers' } },
      { id: '9:70:18', arabic: 'بِٱلْبَيِّنَـٰتِ ۖ', transliteration: 'bil-bayināti', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with clear proofs', ur: 'ساتھ واضح proofs' } },
      { id: '9:70:19', arabic: 'فَمَا', transliteration: 'famā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:70:20', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'was', ur: 'تھا' } },
      { id: '9:70:21', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:70:22', arabic: 'لِيَظْلِمَهُمْ', transliteration: 'liyaẓlimahum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to wrong them', ur: 'کو/تک غلط ان کو' } },
      { id: '9:70:23', arabic: 'وَلَـٰكِن', transliteration: 'walākin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'but', ur: 'لیکن' } },
      { id: '9:70:24', arabic: 'كَانُوٓا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they were (to)', ur: 'وہ تھے (کو/تک)' } },
      { id: '9:70:25', arabic: 'أَنفُسَهُمْ', transliteration: 'anfusahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'themselves', ur: 'themselves' } },
      { id: '9:70:26', arabic: 'يَظْلِمُونَ', transliteration: 'yaẓlimūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'doing wrong', ur: 'doing غلط' } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }, { from: 3, to: 13, label: 'عطف' }] }
  },
  71: {
    text: 'وَٱلْمُؤْمِنُونَ وَٱلْمُؤْمِنَٰتُ بَعْضُهُمْ أَوْلِيَآءُ بَعْضٍۢ ۚ يَأْمُرُونَ بِٱلْمَعْرُوفِ وَيَنْهَوْنَ عَنِ ٱلْمُنكَرِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَيُؤْتُونَ ٱلزَّكَوٰةَ وَيُطِيعُونَ ٱللَّهَ وَرَسُولَهُۥٓ ۚ أُو۟لَٰٓئِكَ سَيَرْحَمُهُمُ ٱللَّهُ ۗ إِنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌۭ',
    translation: {
      en: 'The believing men and believing women are allies of one another. They enjoin what is right and forbid what is wrong and establish prayer and give zakah and obey Allah and His Messenger. Those - Allah will have mercy upon them. Indeed, Allah is Exalted in Might and Wise.',
      ur: 'اور مومن مرد اور مومن عورتیں ایک دوسرے کے دوست ہیں کہ اچھے کام کرنے کو کہتے ہیں اور بری باتوں سے منع کرتے اور نماز پڑھتے اور زکوٰة دیتے اور خدا اور اس کے رسول کی اطاعت کرتے ہیں۔ یہی لوگ ہیں جن پر خدا رحم کرے گا۔ بےشک خدا غالب حکمت والا ہے'
    },
    words: [
      { id: '9:71:1', arabic: 'وَٱلْمُؤْمِنُونَ', transliteration: 'wal-mu\'minūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And the believing men', ur: 'اور  believing men' } },
      { id: '9:71:2', arabic: 'وَٱلْمُؤْمِنَـٰتُ', transliteration: 'wal-mu\'minātu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the believing women', ur: 'اور  believing women' } },
      { id: '9:71:3', arabic: 'بَعْضُهُمْ', transliteration: 'baʿḍuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'some of them', ur: 'کچھ کا ان کو' } },
      { id: '9:71:4', arabic: 'أَوْلِيَآءُ', transliteration: 'awliyāu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(are) allies', ur: '(ہیں) allies' } },
      { id: '9:71:5', arabic: 'بَعْضٍۢ ۚ', transliteration: 'baʿḍin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) others', ur: '(کا) others' } },
      { id: '9:71:6', arabic: 'يَأْمُرُونَ', transliteration: 'yamurūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They enjoin', ur: 'وہ enjoin' } },
      { id: '9:71:7', arabic: 'بِٱلْمَعْرُوفِ', transliteration: 'bil-maʿrūfi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'the right', ur: ' حق' } },
      { id: '9:71:8', arabic: 'وَيَنْهَوْنَ', transliteration: 'wayanhawna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and forbid', ur: 'اور forbid' } },
      { id: '9:71:9', arabic: 'عَنِ', transliteration: 'ʿani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:71:10', arabic: 'ٱلْمُنكَرِ', transliteration: 'l-munkari', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the wrong', ur: ' غلط' } },
      { id: '9:71:11', arabic: 'وَيُقِيمُونَ', transliteration: 'wayuqīmūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and they establish', ur: 'اور وہ قائم کرنا' } },
      { id: '9:71:12', arabic: 'ٱلصَّلَوٰةَ', transliteration: 'l-ṣalata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the prayer', ur: 'نماز' } },
      { id: '9:71:13', arabic: 'وَيُؤْتُونَ', transliteration: 'wayu\'tūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and give', ur: 'اور دینا' } },
      { id: '9:71:14', arabic: 'ٱلزَّكَوٰةَ', transliteration: 'l-zakata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the zakah', ur: 'زکوٰۃ' } },
      { id: '9:71:15', arabic: 'وَيُطِيعُونَ', transliteration: 'wayuṭīʿūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and they obey', ur: 'اور وہ اطاعت کرنا' } },
      { id: '9:71:16', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:71:17', arabic: 'وَرَسُولَهُۥٓ ۚ', transliteration: 'warasūlahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:71:18', arabic: 'أُو۟لَـٰٓئِكَ', transliteration: 'ulāika', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Those', ur: 'وہ لوگ' } },
      { id: '9:71:19', arabic: 'سَيَرْحَمُهُمُ', transliteration: 'sayarḥamuhumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will have mercy on them', ur: 'اللہ  رکھتے ہو رحمت پر ان کو' } },
      { id: '9:71:20', arabic: 'ٱللَّهُ ۗ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will have mercy on them', ur: 'اللہ  رکھتے ہو رحمت پر ان کو' } },
      { id: '9:71:21', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:71:22', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:71:23', arabic: 'عَزِيزٌ', transliteration: 'ʿazīzun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) All-Mighty', ur: '(ہے) سب-طاقتور' } },
      { id: '9:71:24', arabic: 'حَكِيمٌۭ', transliteration: 'ḥakīmun', pos: ['N'], posLabel: 'N', root: 'ح ك م', meaning: { en: 'All-Wise', ur: 'حکمت والا' } }
    ],
    structure: { relationships: [{ from: 6, to: 8, label: 'عطف' }, { from: 8, to: 11, label: 'عطف' }, { from: 11, to: 13, label: 'عطف' }] }
  },
  72: {
    text: 'وَعَدَ ٱللَّهُ ٱلْمُؤْمِنِينَ وَٱلْمُؤْمِنَٰتِ جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا وَمَسَٰكِنَ طَيِّبَةًۭ فِى جَنَّٰتِ عَدْنٍۢ ۚ وَرِضْوَٰنٌۭ مِّنَ ٱللَّهِ أَكْبَرُ ۚ ذَٰلِكَ هُوَ ٱلْفَوْزُ ٱلْعَظِيمُ',
    translation: {
      en: 'Allah has promised the believing men and believing women gardens beneath which rivers flow, wherein they abide eternally, and pleasant dwellings in gardens of perpetual residence; but approval from Allah is greater. It is that which is the great attainment.',
      ur: 'خدا نے مومن مردوں اور مومن عورتوں سے بہشتوں کا وعدہ کیا ہے جن کے نیچے نہریں بہہ رہی ہیں (وہ) ان میں ہمیشہ رہیں گے اور بہشت ہائے جاودانی میں نفیس مکانات کا (وعدہ کیا ہے) اور خدا کی رضا مندی تو سب سے بڑھ کر نعمت ہے یہی بڑی کامیابی ہے'
    },
    words: [
      { id: '9:72:1', arabic: 'وَعَدَ', transliteration: 'waʿada', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '(Has been) promised', ur: '(رکھتا ہے been) promised' } },
      { id: '9:72:2', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(by) Allah', ur: '(کے ذریعے) اللہ' } },
      { id: '9:72:3', arabic: 'ٱلْمُؤْمِنِينَ', transliteration: 'l-mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) the believing men', ur: '(کو/تک)  believing men' } },
      { id: '9:72:4', arabic: 'وَٱلْمُؤْمِنَـٰتِ', transliteration: 'wal-mu\'mināti', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the believing women', ur: 'اور  believing women' } },
      { id: '9:72:5', arabic: 'جَنَّـٰتٍۢ', transliteration: 'jannātin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Gardens', ur: 'باغات' } },
      { id: '9:72:6', arabic: 'تَجْرِى', transliteration: 'tajrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'flow', ur: 'flow' } },
      { id: '9:72:7', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:72:8', arabic: 'تَحْتِهَا', transliteration: 'taḥtihā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'underneath it', ur: 'underneath it' } },
      { id: '9:72:9', arabic: 'ٱلْأَنْهَـٰرُ', transliteration: 'l-anhāru', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the rivers', ur: ' rivers' } },
      { id: '9:72:10', arabic: 'خَـٰلِدِينَ', transliteration: 'khālidīna', pos: ['N'], posLabel: 'N', root: 'خ ل د', meaning: { en: '(will) abide forever', ur: '() abide forever' } },
      { id: '9:72:11', arabic: 'فِيهَا', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:72:12', arabic: 'وَمَسَـٰكِنَ', transliteration: 'wamasākina', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and dwellings', ur: 'اور dwellings' } },
      { id: '9:72:13', arabic: 'طَيِّبَةًۭ', transliteration: 'ṭayyibatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'blessed', ur: 'blessed' } },
      { id: '9:72:14', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:72:15', arabic: 'جَنَّـٰتِ', transliteration: 'jannāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Gardens', ur: 'باغات' } },
      { id: '9:72:16', arabic: 'عَدْنٍۢ ۚ', transliteration: 'ʿadnin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) everlasting bliss', ur: '(کا) everlasting bliss' } },
      { id: '9:72:17', arabic: 'وَرِضْوَٰنٌۭ', transliteration: 'wariḍ\'wānun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But the pleasure', ur: 'لیکن  pleasure' } },
      { id: '9:72:18', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:72:19', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:72:20', arabic: 'أَكْبَرُ ۚ', transliteration: 'akbaru', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) greater', ur: '(ہے) greater' } },
      { id: '9:72:21', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '9:72:22', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'it', ur: 'it' } },
      { id: '9:72:23', arabic: 'ٱلْفَوْزُ', transliteration: 'l-fawzu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the success', ur: '(ہے)  success' } },
      { id: '9:72:24', arabic: 'ٱلْعَظِيمُ', transliteration: 'l-ʿaẓīmu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'great', ur: 'بڑا/عظیم' } }
    ],
    structure: { relationships: [{ from: 7, to: 8, label: 'جار + مجرور' }] }
  },
  73: {
    text: 'يَٰٓأَيُّهَا ٱلنَّبِىُّ جَٰهِدِ ٱلْكُفَّارَ وَٱلْمُنَٰفِقِينَ وَٱغْلُظْ عَلَيْهِمْ ۚ وَمَأْوَىٰهُمْ جَهَنَّمُ ۖ وَبِئْسَ ٱلْمَصِيرُ',
    translation: {
      en: 'O Prophet, fight against the disbelievers and the hypocrites and be harsh upon them. And their refuge is Hell, and wretched is the destination.',
      ur: 'اے پیغمبر! کافروں اور منافقوں سے لڑو۔ اور ان پر سختی کرو۔ اور ان کا ٹھکانہ دورخ ہے اور وہ بری جگہ ہے'
    },
    words: [
      { id: '9:73:1', arabic: 'يَـٰٓأَيُّهَا', transliteration: 'yāayyuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Prophet', ur: 'اے نبی' } },
      { id: '9:73:2', arabic: 'ٱلنَّبِىُّ', transliteration: 'l-nabiyu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O Prophet', ur: 'اے نبی' } },
      { id: '9:73:3', arabic: 'جَـٰهِدِ', transliteration: 'jāhidi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Strive (against)', ur: 'جدوجہد کرنا (خلاف)' } },
      { id: '9:73:4', arabic: 'ٱلْكُفَّارَ', transliteration: 'l-kufāra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the disbelievers', ur: ' کافر' } },
      { id: '9:73:5', arabic: 'وَٱلْمُنَـٰفِقِينَ', transliteration: 'wal-munāfiqīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the hypocrites', ur: 'اور  hypocrites' } },
      { id: '9:73:6', arabic: 'وَٱغْلُظْ', transliteration: 'wa-ugh\'luẓ', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and be stern', ur: 'اور be stern' } },
      { id: '9:73:7', arabic: 'عَلَيْهِمْ ۚ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with them', ur: 'ساتھ ان کو' } },
      { id: '9:73:8', arabic: 'وَمَأْوَىٰهُمْ', transliteration: 'wamawāhum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And their abode', ur: 'اور ان کا abode' } },
      { id: '9:73:9', arabic: 'جَهَنَّمُ ۖ', transliteration: 'jahannamu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Hell', ur: '(ہے) Hell' } },
      { id: '9:73:10', arabic: 'وَبِئْسَ', transliteration: 'wabi\'sa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and wretched', ur: 'اور wretched' } },
      { id: '9:73:11', arabic: 'ٱلْمَصِيرُ', transliteration: 'l-maṣīru', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the destination', ur: '(ہے)  destination' } }
    ],
    structure: { relationships: [] }
  },
  74: {
    text: 'يَحْلِفُونَ بِٱللَّهِ مَا قَالُوا۟ وَلَقَدْ قَالُوا۟ كَلِمَةَ ٱلْكُفْرِ وَكَفَرُوا۟ بَعْدَ إِسْلَٰمِهِمْ وَهَمُّوا۟ بِمَا لَمْ يَنَالُوا۟ ۚ وَمَا نَقَمُوٓا۟ إِلَّآ أَنْ أَغْنَىٰهُمُ ٱللَّهُ وَرَسُولُهُۥ مِن فَضْلِهِۦ ۚ فَإِن يَتُوبُوا۟ يَكُ خَيْرًۭا لَّهُمْ ۖ وَإِن يَتَوَلَّوْا۟ يُعَذِّبْهُمُ ٱللَّهُ عَذَابًا أَلِيمًۭا فِى ٱلدُّنْيَا وَٱلْءَاخِرَةِ ۚ وَمَا لَهُمْ فِى ٱلْأَرْضِ مِن وَلِىٍّۢ وَلَا نَصِيرٍۢ',
    translation: {
      en: 'They swear by Allah that they did not say [anything against the Prophet] while they had said the word of disbelief and disbelieved after their [pretense of] Islam and planned that which they were not to attain. And they were not resentful except [for the fact] that Allah and His Messenger had enriched them of His bounty. So if they repent, it is better for them; but if they turn away, Allah will punish them with a painful punishment in this world and the Hereafter. And there will not be for them on earth any protector or helper.',
      ur: 'یہ خدا کی قسمیں کھاتے ہیں کہ انہوں نے (تو کچھ) نہیں کہا حالانکہ انہوں نے کفر کا کلمہ کہا ہے اور یہ اسلام لانے کے بعد کافر ہوگئے ہیں اور ایسی بات کا قصد کرچکے ہیں جس پر قدرت نہیں پاسکے۔ اور انہوں نے (مسلمانوں میں) عیب ہی کون سا دیکھا ہے سوا اس کے کہ خدا نے اپنے فضل سے اور اس کے پیغمبر نے (اپنی مہربانی سے) ان کو دولت مند کر دیا ہے۔ تو اگر یہ لوگ توبہ کرلیں تو ان کے حق میں بہتر ہوگا۔ اور اگر منہ پھیر لیں تو ان کو دنیا اور آخرت میں دکھ دینے والا عذاب دے گا اور زمین میں ان کا کوئی دوست اور مددگار نہ ہوگا'
    },
    words: [
      { id: '9:74:1', arabic: 'يَحْلِفُونَ', transliteration: 'yaḥlifūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They swear', ur: 'وہ swear' } },
      { id: '9:74:2', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by Allah', ur: 'کے ذریعے اللہ' } },
      { id: '9:74:3', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(that) they said nothing', ur: '(کہ) وہ کہا nothing' } },
      { id: '9:74:4', arabic: 'قَالُوا۟', transliteration: 'qālū', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: '(that) they said nothing', ur: '(کہ) وہ کہا nothing' } },
      { id: '9:74:5', arabic: 'وَلَقَدْ', transliteration: 'walaqad', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while certainly', ur: 'جبکہ یقیناً' } },
      { id: '9:74:6', arabic: 'قَالُوا۟', transliteration: 'qālū', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'they said', ur: 'وہ کہا' } },
      { id: '9:74:7', arabic: 'كَلِمَةَ', transliteration: 'kalimata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) word', ur: '() word' } },
      { id: '9:74:8', arabic: 'ٱلْكُفْرِ', transliteration: 'l-kuf\'ri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the disbelief', ur: '(کا)  disbelief' } },
      { id: '9:74:9', arabic: 'وَكَفَرُوا۟', transliteration: 'wakafarū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and disbelieved', ur: 'اور کفر کیا' } },
      { id: '9:74:10', arabic: 'بَعْدَ', transliteration: 'baʿda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:74:11', arabic: 'إِسْلَـٰمِهِمْ', transliteration: 'is\'lāmihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their (pretense of) Islam', ur: 'ان کا (pretense کا) Islam' } },
      { id: '9:74:12', arabic: 'وَهَمُّوا۟', transliteration: 'wahammū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and planned', ur: 'اور planned' } },
      { id: '9:74:13', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '[of] what', ur: '[کا] کیا/جو' } },
      { id: '9:74:14', arabic: 'لَمْ', transliteration: 'lam', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:74:15', arabic: 'يَنَالُوا۟ ۚ', transliteration: 'yanālū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they could attain', ur: 'وہ could attain' } },
      { id: '9:74:16', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:74:17', arabic: 'نَقَمُوٓا۟', transliteration: 'naqamū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they were resentful', ur: 'وہ تھے resentful' } },
      { id: '9:74:18', arabic: 'إِلَّآ', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:74:19', arabic: 'أَنْ', transliteration: 'an', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:74:20', arabic: 'أَغْنَىٰهُمُ', transliteration: 'aghnāhumu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah had enriched them', ur: 'اللہ رکھتا تھا enriched ان کو' } },
      { id: '9:74:21', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah had enriched them', ur: 'اللہ رکھتا تھا enriched ان کو' } },
      { id: '9:74:22', arabic: 'وَرَسُولُهُۥ', transliteration: 'warasūluhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:74:23', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:74:24', arabic: 'فَضْلِهِۦ ۚ', transliteration: 'faḍlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'His Bounty', ur: 'اس کا Bounty' } },
      { id: '9:74:25', arabic: 'فَإِن', transliteration: 'fa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'So if', ur: 'پس اگر' } },
      { id: '9:74:26', arabic: 'يَتُوبُوا۟', transliteration: 'yatūbū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they repent', ur: 'وہ توبہ کرنا' } },
      { id: '9:74:27', arabic: 'يَكُ', transliteration: 'yaku', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'it is', ur: 'it ہے' } },
      { id: '9:74:28', arabic: 'خَيْرًۭا', transliteration: 'khayran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'better', ur: 'better' } },
      { id: '9:74:29', arabic: 'لَّهُمْ ۖ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:74:30', arabic: 'وَإِن', transliteration: 'wa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'and if', ur: 'اور اگر' } },
      { id: '9:74:31', arabic: 'يَتَوَلَّوْا۟', transliteration: 'yatawallaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they turn away', ur: 'وہ پھیرنا away' } },
      { id: '9:74:32', arabic: 'يُعَذِّبْهُمُ', transliteration: 'yuʿadhib\'humu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah will punish them', ur: 'اللہ  سزا دینا ان کو' } },
      { id: '9:74:33', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will punish them', ur: 'اللہ  سزا دینا ان کو' } },
      { id: '9:74:34', arabic: 'عَذَابًا', transliteration: 'ʿadhāban', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: '(with) a punishment', ur: '(ساتھ) ایک عذاب' } },
      { id: '9:74:35', arabic: 'أَلِيمًۭا', transliteration: 'alīman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'painful', ur: 'دردناک' } },
      { id: '9:74:36', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:74:37', arabic: 'ٱلدُّنْيَا', transliteration: 'l-dun\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the world', ur: ' world' } },
      { id: '9:74:38', arabic: 'وَٱلْـَٔاخِرَةِ ۚ', transliteration: 'wal-ākhirati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (in) the Hereafter', ur: 'اور (میں)  Hereafter' } },
      { id: '9:74:39', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:74:40', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:74:41', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:74:42', arabic: 'ٱلْأَرْضِ', transliteration: 'l-arḍi', pos: ['N'], posLabel: 'N', root: 'أ ر ض', meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '9:74:43', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'any', ur: 'any' } },
      { id: '9:74:44', arabic: 'وَلِىٍّۢ', transliteration: 'waliyyin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'protector', ur: 'protector' } },
      { id: '9:74:45', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:74:46', arabic: 'نَصِيرٍۢ', transliteration: 'naṣīrin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a helper', ur: 'ایک helper' } }
    ],
    structure: { relationships: [] }
  },
  75: {
    text: '۞ وَمِنْهُم مَّنْ عَٰهَدَ ٱللَّهَ لَئِنْ ءَاتَىٰنَا مِن فَضْلِهِۦ لَنَصَّدَّقَنَّ وَلَنَكُونَنَّ مِنَ ٱلصَّٰلِحِينَ',
    translation: {
      en: 'And among them are those who made a covenant with Allah, [saying], "If He should give us from His bounty, we will surely spend in charity, and we will surely be among the righteous."',
      ur: 'اور ان میں سے بعض ایسے ہیں جنہوں نے خدا سے عہد کیا تھا کہ اگر وہ ہم کو اپنی مہربانی سے (مال) عطا فرمائے گا تو ہم ضرور خیرات کیا کریں گے اور نیک کاروں میں ہو جائیں گے'
    },
    words: [
      { id: '9:75:1', arabic: '۞ وَمِنْهُم', transliteration: 'wamin\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And among them', ur: 'اور میں سے ان کو' } },
      { id: '9:75:2', arabic: 'مَّنْ', transliteration: 'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is he) who', ur: '(ہے وہ) جو' } },
      { id: '9:75:3', arabic: 'عَـٰهَدَ', transliteration: 'ʿāhada', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'made a covenant', ur: 'بنایا ایک عہد' } },
      { id: '9:75:4', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(with) Allah', ur: '(ساتھ) اللہ' } },
      { id: '9:75:5', arabic: 'لَئِنْ', transliteration: 'la-in', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:75:6', arabic: 'ءَاتَىٰنَا', transliteration: 'ātānā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He gives us', ur: 'وہ gives us' } },
      { id: '9:75:7', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:75:8', arabic: 'فَضْلِهِۦ', transliteration: 'faḍlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'His bounty', ur: 'اس کا bounty' } },
      { id: '9:75:9', arabic: 'لَنَصَّدَّقَنَّ', transliteration: 'lanaṣṣaddaqanna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'surely we will give charity', ur: 'بےشک ہم  دینا charity' } },
      { id: '9:75:10', arabic: 'وَلَنَكُونَنَّ', transliteration: 'walanakūnanna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and surely we will be', ur: 'اور بےشک ہم ہوگا' } },
      { id: '9:75:11', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among', ur: 'میں سے' } },
      { id: '9:75:12', arabic: 'ٱلصَّـٰلِحِينَ', transliteration: 'l-ṣāliḥīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the righteous', ur: ' نیک' } }
    ],
    structure: { relationships: [] }
  },
  76: {
    text: 'فَلَمَّآ ءَاتَىٰهُم مِّن فَضْلِهِۦ بَخِلُوا۟ بِهِۦ وَتَوَلَّوا۟ وَّهُم مُّعْرِضُونَ',
    translation: {
      en: 'But when he gave them from His bounty, they were stingy with it and turned away while they refused.',
      ur: 'لیکن جب خدا نے ان کو اپنے فضل سے (مال) دیا تو اس میں بخل کرنے لگے اور (اپنے عہد سے) روگردانی کرکے پھر بیٹھے'
    },
    words: [
      { id: '9:76:1', arabic: 'فَلَمَّآ', transliteration: 'falammā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But when', ur: 'لیکن جب' } },
      { id: '9:76:2', arabic: 'ءَاتَىٰهُم', transliteration: 'ātāhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He gave them', ur: 'وہ دیا ان کو' } },
      { id: '9:76:3', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:76:4', arabic: 'فَضْلِهِۦ', transliteration: 'faḍlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'His Bounty', ur: 'اس کا Bounty' } },
      { id: '9:76:5', arabic: 'بَخِلُوا۟', transliteration: 'bakhilū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they became stingy', ur: 'وہ became stingy' } },
      { id: '9:76:6', arabic: 'بِهِۦ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with it', ur: 'ساتھ it' } },
      { id: '9:76:7', arabic: 'وَتَوَلَّوا۟', transliteration: 'watawallaw', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and turned away', ur: 'اور پھیرا away' } },
      { id: '9:76:8', arabic: 'وَّهُم', transliteration: 'wahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:76:9', arabic: 'مُّعْرِضُونَ', transliteration: 'muʿ\'riḍūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(were) averse', ur: '(تھے) averse' } }
    ],
    structure: { relationships: [] }
  },
  77: {
    text: 'فَأَعْقَبَهُمْ نِفَاقًۭا فِى قُلُوبِهِمْ إِلَىٰ يَوْمِ يَلْقَوْنَهُۥ بِمَآ أَخْلَفُوا۟ ٱللَّهَ مَا وَعَدُوهُ وَبِمَا كَانُوا۟ يَكْذِبُونَ',
    translation: {
      en: 'So He penalized them with hypocrisy in their hearts until the Day they will meet Him - because they failed Allah in what they promised Him and because they [habitually] used to lie.',
      ur: 'تو خدا نے اس کا انجام یہ کیا کہ اس روز تک کے لیے جس میں وہ خدا کے روبرو حاضر ہوں گے ان کے دلوں میں نفاق ڈال دیا اس لیے کہ انہوں نے خدا سے جو وعدہ کیا تھا اس کے خلاف کیا اور اس لیے کہ وہ جھوٹ بولتے تھے'
    },
    words: [
      { id: '9:77:1', arabic: 'فَأَعْقَبَهُمْ', transliteration: 'fa-aʿqabahum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So He penalized them', ur: 'پس وہ penalized ان کو' } },
      { id: '9:77:2', arabic: 'نِفَاقًۭا', transliteration: 'nifāqan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(with) hypocrisy', ur: '(ساتھ) hypocrisy' } },
      { id: '9:77:3', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:77:4', arabic: 'قُلُوبِهِمْ', transliteration: 'qulūbihim', pos: ['N'], posLabel: 'N', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:77:5', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'until', ur: 'until' } },
      { id: '9:77:6', arabic: 'يَوْمِ', transliteration: 'yawmi', pos: ['N'], posLabel: 'N', root: 'ي و م', meaning: { en: 'the day', ur: 'قیامت کا دن' } },
      { id: '9:77:7', arabic: 'يَلْقَوْنَهُۥ', transliteration: 'yalqawnahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'when they will meet Him', ur: 'جب وہ  meet Him' } },
      { id: '9:77:8', arabic: 'بِمَآ', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'because', ur: 'because' } },
      { id: '9:77:9', arabic: 'أَخْلَفُوا۟', transliteration: 'akhlafū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they broke', ur: 'وہ broke' } },
      { id: '9:77:10', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the covenant with) Allah', ur: '( عہد ساتھ) اللہ' } },
      { id: '9:77:11', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:77:12', arabic: 'وَعَدُوهُ', transliteration: 'waʿadūhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'they had promised Him', ur: 'وہ رکھتا تھا promised Him' } },
      { id: '9:77:13', arabic: 'وَبِمَا', transliteration: 'wabimā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and because', ur: 'اور because' } },
      { id: '9:77:14', arabic: 'كَانُوا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ used کو/تک' } },
      { id: '9:77:15', arabic: 'يَكْذِبُونَ', transliteration: 'yakdhibūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'lie', ur: 'lie' } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'جار + مجرور' }] }
  },
  78: {
    text: 'أَلَمْ يَعْلَمُوٓا۟ أَنَّ ٱللَّهَ يَعْلَمُ سِرَّهُمْ وَنَجْوَىٰهُمْ وَأَنَّ ٱللَّهَ عَلَّٰمُ ٱلْغُيُوبِ',
    translation: {
      en: 'Did they not know that Allah knows their secrets and their private conversations and that Allah is the Knower of the unseen?',
      ur: 'کیا ان کو معلوم نہیں کہ خدا ان کے بھیدوں اور مشوروں تک سے واقف ہے اور یہ کہ وہ غیب کی باتیں جاننے والا ہے'
    },
    words: [
      { id: '9:78:1', arabic: 'أَلَمْ', transliteration: 'alam', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Do not', ur: 'کرنا نہیں' } },
      { id: '9:78:2', arabic: 'يَعْلَمُوٓا۟', transliteration: 'yaʿlamū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they know', ur: 'وہ جاننا' } },
      { id: '9:78:3', arabic: 'أَنَّ', transliteration: 'anna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:78:4', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:78:5', arabic: 'يَعْلَمُ', transliteration: 'yaʿlamu', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'knows', ur: 'knows' } },
      { id: '9:78:6', arabic: 'سِرَّهُمْ', transliteration: 'sirrahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their secret', ur: 'ان کا secret' } },
      { id: '9:78:7', arabic: 'وَنَجْوَىٰهُمْ', transliteration: 'wanajwāhum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and their secret conversation', ur: 'اور ان کا secret conversation' } },
      { id: '9:78:8', arabic: 'وَأَنَّ', transliteration: 'wa-anna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and that', ur: 'اور کہ' } },
      { id: '9:78:9', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:78:10', arabic: 'عَلَّـٰمُ', transliteration: 'ʿallāmu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } },
      { id: '9:78:11', arabic: 'ٱلْغُيُوبِ', transliteration: 'l-ghuyūbi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the unseen', ur: '(کا)  unseen' } }
    ],
    structure: { relationships: [{ from: 5, to: 7, label: 'عطف' }, { from: 7, to: 8, label: 'عطف' }] }
  },
  79: {
    text: 'ٱلَّذِينَ يَلْمِزُونَ ٱلْمُطَّوِّعِينَ مِنَ ٱلْمُؤْمِنِينَ فِى ٱلصَّدَقَٰتِ وَٱلَّذِينَ لَا يَجِدُونَ إِلَّا جُهْدَهُمْ فَيَسْخَرُونَ مِنْهُمْ ۙ سَخِرَ ٱللَّهُ مِنْهُمْ وَلَهُمْ عَذَابٌ أَلِيمٌ',
    translation: {
      en: 'Those who criticize the contributors among the believers concerning [their] charities and [criticize] the ones who find nothing [to spend] except their effort, so they ridicule them - Allah will ridicule them, and they will have a painful punishment.',
      ur: 'جو (ذی استطاعت) مسلمان دل کھول کر خیرات کرتے ہیں اور جو (بےچارے غریب صرف اتنا ہی کما سکتے ہیں جتنی مزدوری کرتے (اور تھوڑی سی کمائی میں سے خرچ بھی کرتے) ہیں ان پر جو (منافق) طعن کرتے ہیں اور ہنستے ہیں۔ خدا ان پر ہنستا ہے اور ان کے لیے تکلیف دینے والا عذاب (تیار) ہے'
    },
    words: [
      { id: '9:79:1', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Those who', ur: 'جو لوگ' } },
      { id: '9:79:2', arabic: 'يَلْمِزُونَ', transliteration: 'yalmizūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'criticize', ur: 'criticize' } },
      { id: '9:79:3', arabic: 'ٱلْمُطَّوِّعِينَ', transliteration: 'l-muṭawiʿīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the ones who give willingly', ur: ' ones جو دینا willingly' } },
      { id: '9:79:4', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:79:5', arabic: 'ٱلْمُؤْمِنِينَ', transliteration: 'l-mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the believers', ur: ' مومنین' } },
      { id: '9:79:6', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'concerning', ur: 'concerning' } },
      { id: '9:79:7', arabic: 'ٱلصَّدَقَـٰتِ', transliteration: 'l-ṣadaqāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the charities', ur: ' charities' } },
      { id: '9:79:8', arabic: 'وَٱلَّذِينَ', transliteration: 'wa-alladhīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and those who', ur: 'اور جو لوگ' } },
      { id: '9:79:9', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:79:10', arabic: 'يَجِدُونَ', transliteration: 'yajidūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'find', ur: 'find' } },
      { id: '9:79:11', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:79:12', arabic: 'جُهْدَهُمْ', transliteration: 'juh\'dahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their effort', ur: 'ان کا effort' } },
      { id: '9:79:13', arabic: 'فَيَسْخَرُونَ', transliteration: 'fayaskharūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'so they ridicule', ur: 'پس وہ ridicule' } },
      { id: '9:79:14', arabic: 'مِنْهُمْ ۙ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'them', ur: 'ان کو' } },
      { id: '9:79:15', arabic: 'سَخِرَ', transliteration: 'sakhira', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will ridicule', ur: 'اللہ  ridicule' } },
      { id: '9:79:16', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will ridicule', ur: 'اللہ  ridicule' } },
      { id: '9:79:17', arabic: 'مِنْهُمْ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'them', ur: 'ان کو' } },
      { id: '9:79:18', arabic: 'وَلَهُمْ', transliteration: 'walahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and for them', ur: 'اور کے لیے ان کو' } },
      { id: '9:79:19', arabic: 'عَذَابٌ', transliteration: 'ʿadhābun', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: '(is) a punishment', ur: '(ہے) ایک عذاب' } },
      { id: '9:79:20', arabic: 'أَلِيمٌ', transliteration: 'alīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'أ ل م', meaning: { en: 'painful', ur: 'دردناک' } }
    ],
    structure: { relationships: [{ from: 9, to: 10, label: 'نفی + فعل' }, { from: 10, to: 13, label: 'عطف' }] }
  },
  80: {
    text: 'ٱسْتَغْفِرْ لَهُمْ أَوْ لَا تَسْتَغْفِرْ لَهُمْ إِن تَسْتَغْفِرْ لَهُمْ سَبْعِينَ مَرَّةًۭ فَلَن يَغْفِرَ ٱللَّهُ لَهُمْ ۚ ذَٰلِكَ بِأَنَّهُمْ كَفَرُوا۟ بِٱللَّهِ وَرَسُولِهِۦ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلْفَٰسِقِينَ',
    translation: {
      en: 'Ask forgiveness for them, [O Muhammad], or do not ask forgiveness for them. If you should ask forgiveness for them seventy times - never will Allah forgive them. That is because they disbelieved in Allah and His Messenger, and Allah does not guide the defiantly disobedient people.',
      ur: 'تم ان کے لیے بخشش مانگو یا نہ مانگو۔ (بات ایک ہے) ۔ اگر ان کے لیے ستّر دفعہ بھی بخشش مانگو گے تو بھی خدا ان کو نہیں بخشے گا۔ یہ اس لیے کہ انہوں نے خدا اور اس کے رسول سے کفر کیا۔ اور خدا نافرمان لوگوں کو ہدایت نہیں دیتا'
    },
    words: [
      { id: '9:80:1', arabic: 'ٱسْتَغْفِرْ', transliteration: 'is\'taghfir', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Ask forgiveness', ur: 'پوچھنا/مانگنا forgiveness' } },
      { id: '9:80:2', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:80:3', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '9:80:4', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(do) not', ur: '(کرنا) نہیں' } },
      { id: '9:80:5', arabic: 'تَسْتَغْفِرْ', transliteration: 'tastaghfir', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'ask forgiveness', ur: 'پوچھنا/مانگنا forgiveness' } },
      { id: '9:80:6', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:80:7', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'If', ur: 'اگر' } },
      { id: '9:80:8', arabic: 'تَسْتَغْفِرْ', transliteration: 'tastaghfir', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you ask forgiveness', ur: 'تم پوچھنا/مانگنا forgiveness' } },
      { id: '9:80:9', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:80:10', arabic: 'سَبْعِينَ', transliteration: 'sabʿīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'seventy', ur: 'seventy' } },
      { id: '9:80:11', arabic: 'مَرَّةًۭ', transliteration: 'marratan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'times', ur: 'times' } },
      { id: '9:80:12', arabic: 'فَلَن', transliteration: 'falan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'never', ur: 'never' } },
      { id: '9:80:13', arabic: 'يَغْفِرَ', transliteration: 'yaghfira', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will Allah forgive', ur: ' اللہ معاف کرنا' } },
      { id: '9:80:14', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will Allah forgive', ur: ' اللہ معاف کرنا' } },
      { id: '9:80:15', arabic: 'لَهُمْ ۚ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[for] them', ur: '[کے لیے] ان کو' } },
      { id: '9:80:16', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '9:80:17', arabic: 'بِأَنَّهُمْ', transliteration: 'bi-annahum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '(is) because they', ur: '(ہے) because وہ' } },
      { id: '9:80:18', arabic: 'كَفَرُوا۟', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' } },
      { id: '9:80:19', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:80:20', arabic: 'وَرَسُولِهِۦ ۗ', transliteration: 'warasūlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:80:21', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Allah', ur: 'اور اللہ' } },
      { id: '9:80:22', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(does) not', ur: '(does) نہیں' } },
      { id: '9:80:23', arabic: 'يَهْدِى', transliteration: 'yahdī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'guide', ur: 'ہدایت دینا' } },
      { id: '9:80:24', arabic: 'ٱلْقَوْمَ', transliteration: 'l-qawma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the people', ur: 'لوگ' } },
      { id: '9:80:25', arabic: 'ٱلْفَـٰسِقِينَ', transliteration: 'l-fāsiqīna', pos: ['N'], posLabel: 'N', root: 'ف س ق', meaning: { en: 'the defiantly disobedient', ur: ' defiantly disobedient' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'نفی + فعل' }, { from: 7, to: 8, label: 'شرط + فعل' }] }
  },
  81: {
    text: 'فَرِحَ ٱلْمُخَلَّفُونَ بِمَقْعَدِهِمْ خِلَٰفَ رَسُولِ ٱللَّهِ وَكَرِهُوٓا۟ أَن يُجَٰهِدُوا۟ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ فِى سَبِيلِ ٱللَّهِ وَقَالُوا۟ لَا تَنفِرُوا۟ فِى ٱلْحَرِّ ۗ قُلْ نَارُ جَهَنَّمَ أَشَدُّ حَرًّۭا ۚ لَّوْ كَانُوا۟ يَفْقَهُونَ',
    translation: {
      en: 'Those who remained behind rejoiced in their staying [at home] after [the departure of] the Messenger of Allah and disliked to strive with their wealth and their lives in the cause of Allah and said, "Do not go forth in the heat." Say, "The fire of Hell is more intensive in heat" - if they would but understand.',
      ur: 'جو لوگ (غزوہٴ تبوک میں) پیچھے رہ گئے وہ پیغمبر خدا (کی مرضی) کے خلاف بیٹھے رہنے سے خوش ہوئے اور اس بات کو ناپسند کیا کہ خدا کی راہ میں اپنے مال اور جان سے جہاد کریں۔ اور (اوروں سے بھی) کہنے لگے کہ گرمی میں مت نکلنا۔ (ان سے) کہہ دو کہ دوزخ کی آگ اس سے کہیں زیادہ گرم ہے۔ کاش یہ (اس بات) کو سمجھتے'
    },
    words: [
      { id: '9:81:1', arabic: 'فَرِحَ', transliteration: 'fariḥa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'Rejoice', ur: 'Rejoice' } },
      { id: '9:81:2', arabic: 'ٱلْمُخَلَّفُونَ', transliteration: 'l-mukhalafūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who remained behind', ur: 'جو لوگ remained پیچھے' } },
      { id: '9:81:3', arabic: 'بِمَقْعَدِهِمْ', transliteration: 'bimaqʿadihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in their staying', ur: 'میں ان کا staying' } },
      { id: '9:81:4', arabic: 'خِلَـٰفَ', transliteration: 'khilāfa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'behind', ur: 'پیچھے' } },
      { id: '9:81:5', arabic: 'رَسُولِ', transliteration: 'rasūli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Messenger', ur: '() رسول' } },
      { id: '9:81:6', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:81:7', arabic: 'وَكَرِهُوٓا۟', transliteration: 'wakarihū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they disliked', ur: 'اور وہ disliked' } },
      { id: '9:81:8', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:81:9', arabic: 'يُجَـٰهِدُوا۟', transliteration: 'yujāhidū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'strive', ur: 'جدوجہد کرنا' } },
      { id: '9:81:10', arabic: 'بِأَمْوَٰلِهِمْ', transliteration: 'bi-amwālihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with their wealth', ur: 'ساتھ ان کا مال' } },
      { id: '9:81:11', arabic: 'وَأَنفُسِهِمْ', transliteration: 'wa-anfusihim', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and their lives', ur: 'اور ان کا lives' } },
      { id: '9:81:12', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:81:13', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:81:14', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:81:15', arabic: 'وَقَالُوا۟', transliteration: 'waqālū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they said', ur: 'اور وہ کہا' } },
      { id: '9:81:16', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '9:81:17', arabic: 'تَنفِرُوا۟', transliteration: 'tanfirū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'go forth', ur: 'جانا forth' } },
      { id: '9:81:18', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:81:19', arabic: 'ٱلْحَرِّ ۗ', transliteration: 'l-ḥari', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the heat', ur: ' heat' } },
      { id: '9:81:20', arabic: 'قُلْ', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:81:21', arabic: 'نَارُ', transliteration: 'nāru', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(The) Fire', ur: '() آگ' } },
      { id: '9:81:22', arabic: 'جَهَنَّمَ', transliteration: 'jahannama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Hell', ur: '(کا) Hell' } },
      { id: '9:81:23', arabic: 'أَشَدُّ', transliteration: 'ashaddu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(is) more intense', ur: '(ہے) more intense' } },
      { id: '9:81:24', arabic: 'حَرًّۭا ۚ', transliteration: 'ḥarran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) heat', ur: '(میں) heat' } },
      { id: '9:81:25', arabic: 'لَّوْ', transliteration: 'law', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'If (only)', ur: 'اگر (صرف)' } },
      { id: '9:81:26', arabic: 'كَانُوا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'they could', ur: 'وہ could' } },
      { id: '9:81:27', arabic: 'يَفْقَهُونَ', transliteration: 'yafqahūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'understand', ur: 'understand' } }
    ],
    structure: { relationships: [] }
  },
  82: {
    text: 'فَلْيَضْحَكُوا۟ قَلِيلًۭا وَلْيَبْكُوا۟ كَثِيرًۭا جَزَآءًۢ بِمَا كَانُوا۟ يَكْسِبُونَ',
    translation: {
      en: 'So let them laugh a little and [then] weep much as recompense for what they used to earn.',
      ur: 'یہ (دنیا میں) تھوڑا سا ہنس لیں اور (آخرت میں) ان کو ان اعمال کے بدلے جو کرتے رہے ہیں بہت سا رونا ہوگا'
    },
    words: [
      { id: '9:82:1', arabic: 'فَلْيَضْحَكُوا۟', transliteration: 'falyaḍḥakū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So let them laugh', ur: 'پس let ان کو laugh' } },
      { id: '9:82:2', arabic: 'قَلِيلًۭا', transliteration: 'qalīlan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a little', ur: 'ایک little' } },
      { id: '9:82:3', arabic: 'وَلْيَبْكُوا۟', transliteration: 'walyabkū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and let them weep', ur: 'اور let ان کو weep' } },
      { id: '9:82:4', arabic: 'كَثِيرًۭا', transliteration: 'kathīran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'much', ur: 'much' } },
      { id: '9:82:5', arabic: 'جَزَآءًۢ', transliteration: 'jazāan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) a recompense', ur: '(as) ایک recompense' } },
      { id: '9:82:6', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for what', ur: 'کے لیے کیا/جو' } },
      { id: '9:82:7', arabic: 'كَانُوا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'they used to', ur: 'وہ used کو/تک' } },
      { id: '9:82:8', arabic: 'يَكْسِبُونَ', transliteration: 'yaksibūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'earn', ur: 'earn' } }
    ],
    structure: { relationships: [] }
  },
  83: {
    text: 'فَإِن رَّجَعَكَ ٱللَّهُ إِلَىٰ طَآئِفَةٍۢ مِّنْهُمْ فَٱسْتَـْٔذَنُوكَ لِلْخُرُوجِ فَقُل لَّن تَخْرُجُوا۟ مَعِىَ أَبَدًۭا وَلَن تُقَٰتِلُوا۟ مَعِىَ عَدُوًّا ۖ إِنَّكُمْ رَضِيتُم بِٱلْقُعُودِ أَوَّلَ مَرَّةٍۢ فَٱقْعُدُوا۟ مَعَ ٱلْخَٰلِفِينَ',
    translation: {
      en: 'If Allah should return you to a faction of them [after the expedition] and then they ask your permission to go out [to battle], say, "You will not go out with me, ever, and you will never fight with me an enemy. Indeed, you were satisfied with sitting [at home] the first time, so sit [now] with those who stay behind."',
      ur: 'پھر اگر خدا تم کو ان میں سے کسی گروہ کی طرف لے جائے اور وہ تم سے نکلنے کی اجازت طلب کریں تو کہہ دینا کہ تم میرے ساتھ ہرگز نہیں نکلو گے اور نہ میرے ساتھ (مددگار ہوکر) دشمن سے لڑائی کرو گے۔ تم پہلی دفعہ بیٹھ رہنے سے خوش ہوئے تو اب بھی پیچھے رہنے والوں کے ساتھ بیٹھے رہو'
    },
    words: [
      { id: '9:83:1', arabic: 'فَإِن', transliteration: 'fa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'Then if', ur: 'پھر اگر' } },
      { id: '9:83:2', arabic: 'رَّجَعَكَ', transliteration: 'rajaʿaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah returns you', ur: 'اللہ returns تم' } },
      { id: '9:83:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah returns you', ur: 'اللہ returns تم' } },
      { id: '9:83:4', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:83:5', arabic: 'طَآئِفَةٍۢ', transliteration: 'ṭāifatin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a group', ur: 'ایک group' } },
      { id: '9:83:6', arabic: 'مِّنْهُمْ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of them', ur: 'کا ان کو' } },
      { id: '9:83:7', arabic: 'فَٱسْتَـْٔذَنُوكَ', transliteration: 'fa-is\'tadhanūka', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they ask you permission', ur: 'اور وہ پوچھنا/مانگنا تم permission' } },
      { id: '9:83:8', arabic: 'لِلْخُرُوجِ', transliteration: 'lil\'khurūji', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to go out', ur: 'کو/تک جانا out' } },
      { id: '9:83:9', arabic: 'فَقُل', transliteration: 'faqul', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then say', ur: 'پھر کہو' } },
      { id: '9:83:10', arabic: 'لَّن', transliteration: 'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Never', ur: 'Never' } },
      { id: '9:83:11', arabic: 'تَخْرُجُوا۟', transliteration: 'takhrujū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will you come out', ur: ' تم آنا out' } },
      { id: '9:83:12', arabic: 'مَعِىَ', transliteration: 'maʿiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with me', ur: 'ساتھ me' } },
      { id: '9:83:13', arabic: 'أَبَدًۭا', transliteration: 'abadan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ever', ur: 'ever' } },
      { id: '9:83:14', arabic: 'وَلَن', transliteration: 'walan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and never', ur: 'اور never' } },
      { id: '9:83:15', arabic: 'تُقَـٰتِلُوا۟', transliteration: 'tuqātilū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will you fight', ur: ' تم لڑنا' } },
      { id: '9:83:16', arabic: 'مَعِىَ', transliteration: 'maʿiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with me', ur: 'ساتھ me' } },
      { id: '9:83:17', arabic: 'عَدُوًّا ۖ', transliteration: 'ʿaduwwan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any enemy', ur: 'any دشمن' } },
      { id: '9:83:18', arabic: 'إِنَّكُمْ', transliteration: 'innakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, you', ur: 'بےشک, تم' } },
      { id: '9:83:19', arabic: 'رَضِيتُم', transliteration: 'raḍītum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'were satisfied', ur: 'تھے satisfied' } },
      { id: '9:83:20', arabic: 'بِٱلْقُعُودِ', transliteration: 'bil-quʿūdi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with sitting', ur: 'ساتھ sitting' } },
      { id: '9:83:21', arabic: 'أَوَّلَ', transliteration: 'awwala', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) first', ur: '() first' } },
      { id: '9:83:22', arabic: 'مَرَّةٍۢ', transliteration: 'marratin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'time', ur: 'time' } },
      { id: '9:83:23', arabic: 'فَٱقْعُدُوا۟', transliteration: 'fa-uq\'ʿudū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so sit', ur: 'پس sit' } },
      { id: '9:83:24', arabic: 'مَعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:83:25', arabic: 'ٱلْخَـٰلِفِينَ', transliteration: 'l-khālifīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who stay behind', ur: 'جو لوگ stay پیچھے' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }] }
  },
  84: {
    text: 'وَلَا تُصَلِّ عَلَىٰٓ أَحَدٍۢ مِّنْهُم مَّاتَ أَبَدًۭا وَلَا تَقُمْ عَلَىٰ قَبْرِهِۦٓ ۖ إِنَّهُمْ كَفَرُوا۟ بِٱللَّهِ وَرَسُولِهِۦ وَمَاتُوا۟ وَهُمْ فَٰسِقُونَ',
    translation: {
      en: 'And do not pray [the funeral prayer, O Muhammad], over any of them who has died - ever - or stand at his grave. Indeed, they disbelieved in Allah and His Messenger and died while they were defiantly disobedient.',
      ur: 'اور (اے پیغمبر) ان میں سے کوئی مر جائے تو کبھی اس (کے جنازے) پر نماز نہ پڑھنا اور نہ اس کی قبر پر (جا کر) کھڑے ہونا۔ یہ خدا اور اس کے رسول کے ساتھ کفر کرتے رہے اور مرے بھی نافرمان (ہی مرے)'
    },
    words: [
      { id: '9:84:1', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:84:2', arabic: 'تُصَلِّ', transliteration: 'tuṣalli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you pray', ur: 'تم نماز پڑھنا' } },
      { id: '9:84:3', arabic: 'عَلَىٰٓ', transliteration: 'ʿalā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for', ur: 'کے لیے' } },
      { id: '9:84:4', arabic: 'أَحَدٍۢ', transliteration: 'aḥadin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any', ur: 'any' } },
      { id: '9:84:5', arabic: 'مِّنْهُم', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of them', ur: 'کا ان کو' } },
      { id: '9:84:6', arabic: 'مَّاتَ', transliteration: 'māta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'who dies', ur: 'جو dies' } },
      { id: '9:84:7', arabic: 'أَبَدًۭا', transliteration: 'abadan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ever', ur: 'ever' } },
      { id: '9:84:8', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:84:9', arabic: 'تَقُمْ', transliteration: 'taqum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you stand', ur: 'تم stand' } },
      { id: '9:84:10', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'by', ur: 'کے ذریعے' } },
      { id: '9:84:11', arabic: 'قَبْرِهِۦٓ ۖ', transliteration: 'qabrihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his grave', ur: 'اس کا grave' } },
      { id: '9:84:12', arabic: 'إِنَّهُمْ', transliteration: 'innahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, they', ur: 'بےشک, وہ' } },
      { id: '9:84:13', arabic: 'كَفَرُوا۟', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' } },
      { id: '9:84:14', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:84:15', arabic: 'وَرَسُولِهِۦ', transliteration: 'warasūlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:84:16', arabic: 'وَمَاتُوا۟', transliteration: 'wamātū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and died', ur: 'اور مرا' } },
      { id: '9:84:17', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they were', ur: 'جبکہ وہ تھے' } },
      { id: '9:84:18', arabic: 'فَـٰسِقُونَ', transliteration: 'fāsiqūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ف س ق', meaning: { en: 'defiantly disobedient', ur: 'defiantly disobedient' } }
    ],
    structure: { relationships: [{ from: 10, to: 11, label: 'جار + مجرور' }] }
  },
  85: {
    text: 'وَلَا تُعْجِبْكَ أَمْوَٰلُهُمْ وَأَوْلَٰدُهُمْ ۚ إِنَّمَا يُرِيدُ ٱللَّهُ أَن يُعَذِّبَهُم بِهَا فِى ٱلدُّنْيَا وَتَزْهَقَ أَنفُسُهُمْ وَهُمْ كَٰفِرُونَ',
    translation: {
      en: 'And let not their wealth and their children impress you. Allah only intends to punish them through them in this world and that their souls should depart [at death] while they are disbelievers.',
      ur: 'ان کے اولاد اور مال سے تعجب نہ کرنا۔ ان چیزوں سے خدا یہ چاہتا ہے کہ ان کو دنیا میں عذاب کرے اور (جب) ان کی جان نکلے تو (اس وقت بھی) یہ کافر ہی ہوں'
    },
    words: [
      { id: '9:85:1', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And (let) not', ur: 'اور (let) نہیں' } },
      { id: '9:85:2', arabic: 'تُعْجِبْكَ', transliteration: 'tuʿ\'jib\'ka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'impress you', ur: 'impress تم' } },
      { id: '9:85:3', arabic: 'أَمْوَٰلُهُمْ', transliteration: 'amwāluhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their wealth', ur: 'ان کا مال' } },
      { id: '9:85:4', arabic: 'وَأَوْلَـٰدُهُمْ ۚ', transliteration: 'wa-awlāduhum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and their children', ur: 'اور ان کا اولاد' } },
      { id: '9:85:5', arabic: 'إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '9:85:6', arabic: 'يُرِيدُ', transliteration: 'yurīdu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Allah intends', ur: 'اللہ intends' } },
      { id: '9:85:7', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah intends', ur: 'اللہ intends' } },
      { id: '9:85:8', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:85:9', arabic: 'يُعَذِّبَهُم', transliteration: 'yuʿadhibahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'punish them', ur: 'سزا دینا ان کو' } },
      { id: '9:85:10', arabic: 'بِهَا', transliteration: 'bihā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with it', ur: 'ساتھ it' } },
      { id: '9:85:11', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:85:12', arabic: 'ٱلدُّنْيَا', transliteration: 'l-dun\'yā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the world', ur: ' world' } },
      { id: '9:85:13', arabic: 'وَتَزْهَقَ', transliteration: 'watazhaqa', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and will depart', ur: 'اور  depart' } },
      { id: '9:85:14', arabic: 'أَنفُسُهُمْ', transliteration: 'anfusuhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their souls', ur: 'ان کا souls' } },
      { id: '9:85:15', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:85:16', arabic: 'كَـٰفِرُونَ', transliteration: 'kāfirūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) disbelievers', ur: '(ہیں) کافر' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'عطف' }, { from: 6, to: 13, label: 'عطف' }] }
  },
  86: {
    text: 'وَإِذَآ أُنزِلَتْ سُورَةٌ أَنْ ءَامِنُوا۟ بِٱللَّهِ وَجَٰهِدُوا۟ مَعَ رَسُولِهِ ٱسْتَـْٔذَنَكَ أُو۟لُوا۟ ٱلطَّوْلِ مِنْهُمْ وَقَالُوا۟ ذَرْنَا نَكُن مَّعَ ٱلْقَٰعِدِينَ',
    translation: {
      en: 'And when a surah was revealed [enjoining them] to believe in Allah and to fight with His Messenger, those of wealth among them asked your permission [to stay back] and said, "Leave us to be with them who sit [at home]."',
      ur: 'اور جب کوئی سورت نازل ہوتی ہے کہ خدا پر ایمان لاؤ اور اس کے رسول کے ساتھ ہو کر لڑائی کرو تو جو ان میں دولت مند ہیں وہ تم سے اجازت طلب کرتے ہیں اور کہتے ہیں کہ ہمیں تو رہنے ہی دیجیئے کہ جو لوگ گھروں میں رہیں گے ہم بھی ان کے ساتھ رہیں'
    },
    words: [
      { id: '9:86:1', arabic: 'وَإِذَآ', transliteration: 'wa-idhā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And when', ur: 'اور جب' } },
      { id: '9:86:2', arabic: 'أُنزِلَتْ', transliteration: 'unzilat', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'was revealed', ur: 'تھا نازل کیا' } },
      { id: '9:86:3', arabic: 'سُورَةٌ', transliteration: 'sūratun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a Surah', ur: 'ایک Surah' } },
      { id: '9:86:4', arabic: 'أَنْ', transliteration: 'an', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:86:5', arabic: 'ءَامِنُوا۟', transliteration: 'āminū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '9:86:6', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:86:7', arabic: 'وَجَـٰهِدُوا۟', transliteration: 'wajāhidū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and strive', ur: 'اور جدوجہد کرنا' } },
      { id: '9:86:8', arabic: 'مَعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:86:9', arabic: 'رَسُولِهِ', transliteration: 'rasūlihi', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'His Messenger', ur: 'اس کا رسول' } },
      { id: '9:86:10', arabic: 'ٱسْتَـْٔذَنَكَ', transliteration: 'is\'tadhanaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ask your permission', ur: 'پوچھنا/مانگنا تمہارا permission' } },
      { id: '9:86:11', arabic: 'أُو۟لُوا۟', transliteration: 'ulū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) men', ur: '() men' } },
      { id: '9:86:12', arabic: 'ٱلطَّوْلِ', transliteration: 'l-ṭawli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) wealth', ur: '(کا) مال' } },
      { id: '9:86:13', arabic: 'مِنْهُمْ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among them', ur: 'میں سے ان کو' } },
      { id: '9:86:14', arabic: 'وَقَالُوا۟', transliteration: 'waqālū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and said', ur: 'اور کہا' } },
      { id: '9:86:15', arabic: 'ذَرْنَا', transliteration: 'dharnā', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Leave us', ur: 'Leave us' } },
      { id: '9:86:16', arabic: 'نَكُن', transliteration: 'nakun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) be', ur: '(کو/تک) be' } },
      { id: '9:86:17', arabic: 'مَّعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:86:18', arabic: 'ٱلْقَـٰعِدِينَ', transliteration: 'l-qāʿidīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who sit', ur: 'جو لوگ sit' } }
    ],
    structure: { relationships: [] }
  },
  87: {
    text: 'رَضُوا۟ بِأَن يَكُونُوا۟ مَعَ ٱلْخَوَالِفِ وَطُبِعَ عَلَىٰ قُلُوبِهِمْ فَهُمْ لَا يَفْقَهُونَ',
    translation: {
      en: 'They were satisfied to be with those who stay behind, and their hearts were sealed over, so they do not understand.',
      ur: 'یہ اس بات سے خوش ہیں کہ عورتوں کے ساتھ جو پیچھے رہ جاتی ہیں۔ (گھروں میں بیٹھ) رہیں ان کے دلوں پر مہر لگا دی گئی ہے تو یہ سمجھتے ہی نہیں'
    },
    words: [
      { id: '9:87:1', arabic: 'رَضُوا۟', transliteration: 'raḍū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They (were) satisfied', ur: 'وہ (تھے) satisfied' } },
      { id: '9:87:2', arabic: 'بِأَن', transliteration: 'bi-an', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:87:3', arabic: 'يَكُونُوا۟', transliteration: 'yakūnū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'be', ur: 'be' } },
      { id: '9:87:4', arabic: 'مَعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:87:5', arabic: 'ٱلْخَوَالِفِ', transliteration: 'l-khawālifi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who stay behind', ur: 'جو لوگ stay پیچھے' } },
      { id: '9:87:6', arabic: 'وَطُبِعَ', transliteration: 'waṭubiʿa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and were sealed', ur: 'اور تھے sealed' } },
      { id: '9:87:7', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '[on]', ur: '[پر]' } },
      { id: '9:87:8', arabic: 'قُلُوبِهِمْ', transliteration: 'qulūbihim', pos: ['N'], posLabel: 'N', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:87:9', arabic: 'فَهُمْ', transliteration: 'fahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so they', ur: 'پس وہ' } },
      { id: '9:87:10', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(do) not', ur: '(کرنا) نہیں' } },
      { id: '9:87:11', arabic: 'يَفْقَهُونَ', transliteration: 'yafqahūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'understand', ur: 'understand' } }
    ],
    structure: { relationships: [{ from: 7, to: 8, label: 'جار + مجرور' }, { from: 10, to: 11, label: 'نفی + فعل' }] }
  },
  88: {
    text: 'لَٰكِنِ ٱلرَّسُولُ وَٱلَّذِينَ ءَامَنُوا۟ مَعَهُۥ جَٰهَدُوا۟ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ ۚ وَأُو۟لَٰٓئِكَ لَهُمُ ٱلْخَيْرَٰتُ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ',
    translation: {
      en: 'But the Messenger and those who believed with him fought with their wealth and their lives. Those will have [all that is] good, and it is those who are the successful.',
      ur: 'لیکن پیغمبر اور جو لوگ ان کے ساتھ ایمان لائے سب اپنے مال اور جان سے لڑے۔ انہیں لوگوں کے لیے بھلائیاں ہیں۔ اور یہی مراد پانے والے ہیں'
    },
    words: [
      { id: '9:88:1', arabic: 'لَـٰكِنِ', transliteration: 'lākini', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'But', ur: 'لیکن' } },
      { id: '9:88:2', arabic: 'ٱلرَّسُولُ', transliteration: 'l-rasūlu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Messenger', ur: 'رسول' } },
      { id: '9:88:3', arabic: 'وَٱلَّذِينَ', transliteration: 'wa-alladhīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and those who', ur: 'اور جو لوگ' } },
      { id: '9:88:4', arabic: 'ءَامَنُوا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'believed', ur: 'ایمان لائے' } },
      { id: '9:88:5', arabic: 'مَعَهُۥ', transliteration: 'maʿahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with him', ur: 'ساتھ him' } },
      { id: '9:88:6', arabic: 'جَـٰهَدُوا۟', transliteration: 'jāhadū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'strove', ur: 'جدوجہد کی' } },
      { id: '9:88:7', arabic: 'بِأَمْوَٰلِهِمْ', transliteration: 'bi-amwālihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with their wealth', ur: 'ساتھ ان کا مال' } },
      { id: '9:88:8', arabic: 'وَأَنفُسِهِمْ ۚ', transliteration: 'wa-anfusihim', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and their lives', ur: 'اور ان کا lives' } },
      { id: '9:88:9', arabic: 'وَأُو۟لَـٰٓئِكَ', transliteration: 'wa-ulāika', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And those', ur: 'اور وہ لوگ' } },
      { id: '9:88:10', arabic: 'لَهُمُ', transliteration: 'lahumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:88:11', arabic: 'ٱلْخَيْرَٰتُ ۖ', transliteration: 'l-khayrātu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) the good things', ur: '(ہیں)  نیکی things' } },
      { id: '9:88:12', arabic: 'وَأُو۟لَـٰٓئِكَ', transliteration: 'wa-ulāika', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and those ', ur: 'اور وہ لوگ ' } },
      { id: '9:88:13', arabic: 'هُمُ', transliteration: 'humu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '9:88:14', arabic: 'ٱلْمُفْلِحُونَ', transliteration: 'l-muf\'liḥūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) the successful ones', ur: '(ہیں)  successful ones' } }
    ],
    structure: { relationships: [{ from: 8, to: 9, label: 'عطف' }, { from: 9, to: 12, label: 'عطف' }] }
  },
  89: {
    text: 'أَعَدَّ ٱللَّهُ لَهُمْ جَنَّٰتٍۢ تَجْرِى مِن تَحْتِهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَا ۚ ذَٰلِكَ ٱلْفَوْزُ ٱلْعَظِيمُ',
    translation: {
      en: 'Allah has prepared for them gardens beneath which rivers flow, wherein they will abide eternally. That is the great attainment.',
      ur: 'خدا نے ان کے لیے باغات تیار کر رکھے ہیں جن کے نیچے نہریں بہہ رہی ہیں ہمیشہ ان میں رہی گے۔ یہ بڑی کامیابی ہے'
    },
    words: [
      { id: '9:89:1', arabic: 'أَعَدَّ', transliteration: 'aʿadda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has prepared', ur: 'اللہ رکھتا ہے prepared' } },
      { id: '9:89:2', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has prepared', ur: 'اللہ رکھتا ہے prepared' } },
      { id: '9:89:3', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:89:4', arabic: 'جَنَّـٰتٍۢ', transliteration: 'jannātin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Gardens', ur: 'باغات' } },
      { id: '9:89:5', arabic: 'تَجْرِى', transliteration: 'tajrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'flows', ur: 'flows' } },
      { id: '9:89:6', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:89:7', arabic: 'تَحْتِهَا', transliteration: 'taḥtihā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'underneath it', ur: 'underneath it' } },
      { id: '9:89:8', arabic: 'ٱلْأَنْهَـٰرُ', transliteration: 'l-anhāru', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the rivers', ur: ' rivers' } },
      { id: '9:89:9', arabic: 'خَـٰلِدِينَ', transliteration: 'khālidīna', pos: ['N'], posLabel: 'N', root: 'خ ل د', meaning: { en: '(will) abide forever', ur: '() abide forever' } },
      { id: '9:89:10', arabic: 'فِيهَا ۚ', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:89:11', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '9:89:12', arabic: 'ٱلْفَوْزُ', transliteration: 'l-fawzu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the success', ur: '(ہے)  success' } },
      { id: '9:89:13', arabic: 'ٱلْعَظِيمُ', transliteration: 'l-ʿaẓīmu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the great', ur: ' عظیم' } }
    ],
    structure: { relationships: [{ from: 6, to: 7, label: 'جار + مجرور' }] }
  },
  90: {
    text: 'وَجَآءَ ٱلْمُعَذِّرُونَ مِنَ ٱلْأَعْرَابِ لِيُؤْذَنَ لَهُمْ وَقَعَدَ ٱلَّذِينَ كَذَبُوا۟ ٱللَّهَ وَرَسُولَهُۥ ۚ سَيُصِيبُ ٱلَّذِينَ كَفَرُوا۟ مِنْهُمْ عَذَابٌ أَلِيمٌۭ',
    translation: {
      en: 'And those with excuses among the bedouins came to be permitted [to remain], and they who had lied to Allah and His Messenger sat [at home]. There will strike those who disbelieved among them a painful punishment.',
      ur: 'اور صحرا نشینوں میں سے بھی کچھ لوگ عذر کرتے ہوئے (تمہارے پاس) آئے کہ ان کو بھی اجازت دی جائے اور جنہوں نے خدا اور اس کے رسول سے جھوٹ بولا وہ (گھر میں) بیٹھ رہے سو جو لوگ ان میں سے کافر ہوئے ہیں ان کو دکھ دینے والا عذاب پہنچے گا'
    },
    words: [
      { id: '9:90:1', arabic: 'وَجَآءَ', transliteration: 'wajāa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And came', ur: 'اور آیا' } },
      { id: '9:90:2', arabic: 'ٱلْمُعَذِّرُونَ', transliteration: 'l-muʿadhirūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the ones who make excuses', ur: ' ones جو بنانا excuses' } },
      { id: '9:90:3', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:90:4', arabic: 'ٱلْأَعْرَابِ', transliteration: 'l-aʿrābi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the bedouins', ur: ' bedouins' } },
      { id: '9:90:5', arabic: 'لِيُؤْذَنَ', transliteration: 'liyu\'dhana', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that permission be granted', ur: 'کہ permission be granted' } },
      { id: '9:90:6', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:90:7', arabic: 'وَقَعَدَ', transliteration: 'waqaʿada', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and sat', ur: 'اور sat' } },
      { id: '9:90:8', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:90:9', arabic: 'كَذَبُوا۟', transliteration: 'kadhabū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'lied', ur: 'lied' } },
      { id: '9:90:10', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) Allah', ur: '(کو/تک) اللہ' } },
      { id: '9:90:11', arabic: 'وَرَسُولَهُۥ ۚ', transliteration: 'warasūlahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:90:12', arabic: 'سَيُصِيبُ', transliteration: 'sayuṣību', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Will strike', ur: ' strike' } },
      { id: '9:90:13', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:90:14', arabic: 'كَفَرُوا۟', transliteration: 'kafarū', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'disbelieved', ur: 'کفر کیا' } },
      { id: '9:90:15', arabic: 'مِنْهُمْ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among them', ur: 'میں سے ان کو' } },
      { id: '9:90:16', arabic: 'عَذَابٌ', transliteration: 'ʿadhābun', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'a punishment', ur: 'ایک عذاب' } },
      { id: '9:90:17', arabic: 'أَلِيمٌۭ', transliteration: 'alīmun', pos: ['N'], posLabel: 'N', root: 'أ ل م', meaning: { en: 'painful', ur: 'دردناک' } }
    ],
    structure: { relationships: [] }
  },
  91: {
    text: 'لَّيْسَ عَلَى ٱلضُّعَفَآءِ وَلَا عَلَى ٱلْمَرْضَىٰ وَلَا عَلَى ٱلَّذِينَ لَا يَجِدُونَ مَا يُنفِقُونَ حَرَجٌ إِذَا نَصَحُوا۟ لِلَّهِ وَرَسُولِهِۦ ۚ مَا عَلَى ٱلْمُحْسِنِينَ مِن سَبِيلٍۢ ۚ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ',
    translation: {
      en: 'There is not upon the weak or upon the ill or upon those who do not find anything to spend any discomfort when they are sincere to Allah and His Messenger. There is not upon the doers of good any cause [for blame]. And Allah is Forgiving and Merciful.',
      ur: 'نہ تو ضعیفوں پر کچھ گناہ ہے اور نہ بیماروں پر نہ ان پر جن کے پاس خرچ موجود نہیں (کہ شریک جہاد نہ ہوں یعنی) جب کہ خدا اور اس کے رسول کے خیراندیش (اور دل سے ان کے ساتھ) ہوں۔ نیکو کاروں پر کسی طرح کا الزام نہیں ہے۔ اور خدا بخشنے والا مہربان ہے'
    },
    words: [
      { id: '9:91:1', arabic: 'لَّيْسَ', transliteration: 'laysa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '9:91:2', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:91:3', arabic: 'ٱلضُّعَفَآءِ', transliteration: 'l-ḍuʿafāi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the weak', ur: ' weak' } },
      { id: '9:91:4', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:91:5', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:91:6', arabic: 'ٱلْمَرْضَىٰ', transliteration: 'l-marḍā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the sick', ur: ' sick' } },
      { id: '9:91:7', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:91:8', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:91:9', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:91:10', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:91:11', arabic: 'يَجِدُونَ', transliteration: 'yajidūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they find', ur: 'وہ find' } },
      { id: '9:91:12', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:91:13', arabic: 'يُنفِقُونَ', transliteration: 'yunfiqūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they (can) spend', ur: 'وہ (can) خرچ کرنا' } },
      { id: '9:91:14', arabic: 'حَرَجٌ', transliteration: 'ḥarajun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any blame', ur: 'any blame' } },
      { id: '9:91:15', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '9:91:16', arabic: 'نَصَحُوا۟', transliteration: 'naṣaḥū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they (are) sincere', ur: 'وہ (ہیں) sincere' } },
      { id: '9:91:17', arabic: 'لِلَّهِ', transliteration: 'lillahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to Allah', ur: 'کو/تک اللہ' } },
      { id: '9:91:18', arabic: 'وَرَسُولِهِۦ ۚ', transliteration: 'warasūlihi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:91:19', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '9:91:20', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '(is) on', ur: '(ہے) پر' } },
      { id: '9:91:21', arabic: 'ٱلْمُحْسِنِينَ', transliteration: 'l-muḥ\'sinīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the good-doers', ur: ' نیکی-doers' } },
      { id: '9:91:22', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'any', ur: 'any' } },
      { id: '9:91:23', arabic: 'سَبِيلٍۢ ۚ', transliteration: 'sabīlin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'way (for blame)', ur: 'راستہ (کے لیے blame)' } },
      { id: '9:91:24', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:91:25', arabic: 'غَفُورٌۭ', transliteration: 'ghafūrun', pos: ['N'], posLabel: 'N', root: 'غ ف ر', meaning: { en: '(is) Oft-Forgiving', ur: '(ہے) Oft-بخشنے والا' } },
      { id: '9:91:26', arabic: 'رَّحِيمٌۭ', transliteration: 'raḥīmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Most Merciful', ur: 'نہایت مہربان' } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 5, to: 6, label: 'جار + مجرور' }, { from: 8, to: 9, label: 'جار + مجرور' }] }
  },
  92: {
    text: 'وَلَا عَلَى ٱلَّذِينَ إِذَا مَآ أَتَوْكَ لِتَحْمِلَهُمْ قُلْتَ لَآ أَجِدُ مَآ أَحْمِلُكُمْ عَلَيْهِ تَوَلَّوا۟ وَّأَعْيُنُهُمْ تَفِيضُ مِنَ ٱلدَّمْعِ حَزَنًا أَلَّا يَجِدُوا۟ مَا يُنفِقُونَ',
    translation: {
      en: 'Nor [is there blame] upon those who, when they came to you that you might give them mounts, you said, "I can find nothing for you to ride upon." They turned back while their eyes overflowed with tears out of grief that they could not find something to spend [for the cause of Allah].',
      ur: 'اور نہ ان (بےسروسامان) لوگوں پر (الزام) ہے کہ تمہارے پاس آئے کہ ان کو سواری دو اور تم نے کہا کہ میرے پاس کوئی ایسی چیز نہیں جس پر تم کو سوار کروں تو وہ لوٹ گئے اور اس غم سے کہ ان کے پاس خرچ موجود نہ تھا، ان کی آنکھوں سے آنسو بہہ رہے تھے'
    },
    words: [
      { id: '9:92:1', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:92:2', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:92:3', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:92:4', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:92:5', arabic: 'مَآ', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:92:6', arabic: 'أَتَوْكَ', transliteration: 'atawka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they came to you', ur: 'وہ آیا کو/تک تم' } },
      { id: '9:92:7', arabic: 'لِتَحْمِلَهُمْ', transliteration: 'litaḥmilahum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that you provide them with mounts', ur: 'کہ تم provide ان کو ساتھ mounts' } },
      { id: '9:92:8', arabic: 'قُلْتَ', transliteration: 'qul\'ta', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you said', ur: 'تم کہا' } },
      { id: '9:92:9', arabic: 'لَآ', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '9:92:10', arabic: 'أَجِدُ', transliteration: 'ajidu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'I find', ur: 'میں find' } },
      { id: '9:92:11', arabic: 'مَآ', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:92:12', arabic: 'أَحْمِلُكُمْ', transliteration: 'aḥmilukum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'to mount you', ur: 'کو/تک mount تم' } },
      { id: '9:92:13', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'on [it]', ur: 'پر [it]' } },
      { id: '9:92:14', arabic: 'تَوَلَّوا۟', transliteration: 'tawallaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They turned back', ur: 'وہ پھیرا back' } },
      { id: '9:92:15', arabic: 'وَّأَعْيُنُهُمْ', transliteration: 'wa-aʿyunuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with their eyes', ur: 'ساتھ ان کا آنکھیں' } },
      { id: '9:92:16', arabic: 'تَفِيضُ', transliteration: 'tafīḍu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'flowing', ur: 'flowing' } },
      { id: '9:92:17', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[of]', ur: '[کا]' } },
      { id: '9:92:18', arabic: 'ٱلدَّمْعِ', transliteration: 'l-damʿi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(with) the tears', ur: '(ساتھ)  tears' } },
      { id: '9:92:19', arabic: 'حَزَنًا', transliteration: 'ḥazanan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) sorrow', ur: '(کا) sorrow' } },
      { id: '9:92:20', arabic: 'أَلَّا', transliteration: 'allā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that not', ur: 'کہ نہیں' } },
      { id: '9:92:21', arabic: 'يَجِدُوا۟', transliteration: 'yajidū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they find', ur: 'وہ find' } },
      { id: '9:92:22', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:92:23', arabic: 'يُنفِقُونَ', transliteration: 'yunfiqūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they (could) spend', ur: 'وہ (could) خرچ کرنا' } }
    ],
    structure: { relationships: [{ from: 2, to: 3, label: 'جار + مجرور' }, { from: 22, to: 23, label: 'موصول + صلة' }] }
  },
  93: {
    text: '۞ إِنَّمَا ٱلسَّبِيلُ عَلَى ٱلَّذِينَ يَسْتَـْٔذِنُونَكَ وَهُمْ أَغْنِيَآءُ ۚ رَضُوا۟ بِأَن يَكُونُوا۟ مَعَ ٱلْخَوَالِفِ وَطَبَعَ ٱللَّهُ عَلَىٰ قُلُوبِهِمْ فَهُمْ لَا يَعْلَمُونَ',
    translation: {
      en: 'The cause [for blame] is only upon those who ask permission of you while they are rich. They are satisfied to be with those who stay behind, and Allah has sealed over their hearts, so they do not know.',
      ur: 'الزام تو ان لوگوں پر ہے۔ جو دولت مند ہیں اور (پھر) تم سے اجازت طلب کرتے ہیں (یعنی) اس بات سے خوش ہیں کہ عورتوں کے ساتھ جو پیچھے رہ جاتی ہیں (گھروں میں بیٹھ) رہیں۔ خدا نے ان کے دلوں پر مہر کردی ہے پس وہ سمجھتے ہی نہیں'
    },
    words: [
      { id: '9:93:1', arabic: '۞ إِنَّمَا', transliteration: 'innamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Only', ur: 'صرف' } },
      { id: '9:93:2', arabic: 'ٱلسَّبِيلُ', transliteration: 'l-sabīlu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the way (blame)', ur: ' راستہ (blame)' } },
      { id: '9:93:3', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '(is) on', ur: '(ہے) پر' } },
      { id: '9:93:4', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:93:5', arabic: 'يَسْتَـْٔذِنُونَكَ', transliteration: 'yastadhinūnaka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ask your permission', ur: 'پوچھنا/مانگنا تمہارا permission' } },
      { id: '9:93:6', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:93:7', arabic: 'أَغْنِيَآءُ ۚ', transliteration: 'aghniyāu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) rich', ur: '(ہیں) rich' } },
      { id: '9:93:8', arabic: 'رَضُوا۟', transliteration: 'raḍū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They (are) satisfied', ur: 'وہ (ہیں) satisfied' } },
      { id: '9:93:9', arabic: 'بِأَن', transliteration: 'bi-an', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:93:10', arabic: 'يَكُونُوا۟', transliteration: 'yakūnū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'be', ur: 'be' } },
      { id: '9:93:11', arabic: 'مَعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:93:12', arabic: 'ٱلْخَوَالِفِ', transliteration: 'l-khawālifi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who stay behind', ur: 'جو لوگ stay پیچھے' } },
      { id: '9:93:13', arabic: 'وَطَبَعَ', transliteration: 'waṭabaʿa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Allah sealed', ur: 'اور اللہ sealed' } },
      { id: '9:93:14', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'and Allah sealed', ur: 'اور اللہ sealed' } },
      { id: '9:93:15', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: '[on]', ur: '[پر]' } },
      { id: '9:93:16', arabic: 'قُلُوبِهِمْ', transliteration: 'qulūbihim', pos: ['N'], posLabel: 'N', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:93:17', arabic: 'فَهُمْ', transliteration: 'fahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so they', ur: 'پس وہ' } },
      { id: '9:93:18', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(do) not', ur: '(کرنا) نہیں' } },
      { id: '9:93:19', arabic: 'يَعْلَمُونَ', transliteration: 'yaʿlamūna', pos: ['V'], posLabel: 'V', root: 'ع ل م', meaning: { en: 'know', ur: 'جاننا' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'جار + مجرور' }, { from: 15, to: 16, label: 'جار + مجرور' }, { from: 18, to: 19, label: 'نفی + فعل' }] }
  },
  94: {
    text: 'يَعْتَذِرُونَ إِلَيْكُمْ إِذَا رَجَعْتُمْ إِلَيْهِمْ ۚ قُل لَّا تَعْتَذِرُوا۟ لَن نُّؤْمِنَ لَكُمْ قَدْ نَبَّأَنَا ٱللَّهُ مِنْ أَخْبَارِكُمْ ۚ وَسَيَرَى ٱللَّهُ عَمَلَكُمْ وَرَسُولُهُۥ ثُمَّ تُرَدُّونَ إِلَىٰ عَٰلِمِ ٱلْغَيْبِ وَٱلشَّهَٰدَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ',
    translation: {
      en: 'They will make excuses to you when you have returned to them. Say, "Make no excuse - never will we believe you. Allah has already informed us of your news. And Allah will observe your deeds, and [so will] His Messenger; then you will be taken back to the Knower of the unseen and the witnessed, and He will inform you of what you used to do."',
      ur: 'جب تم ان کے پاس واپس جاؤ گے تو تم سے عذر کریں گے تم کہنا کہ مت عذر کرو ہم ہرگز تمہاری بات نہیں مانیں گے خدا نے ہم کو تمہارے سب حالات بتا دیئے ہیں۔ اور ابھی خدا اور اس کا رسول تمہارے عملوں کو (اور) دیکھیں گے پھر تم غائب وحاضر کے جاننے والے (خدائے واحد) کی طرف لوٹائے جاؤ گے اور جو عمل تم کرتے رہے ہو وہ سب تمہیں بتائے گا'
    },
    words: [
      { id: '9:94:1', arabic: 'يَعْتَذِرُونَ', transliteration: 'yaʿtadhirūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They will make excuses', ur: 'وہ  بنانا excuses' } },
      { id: '9:94:2', arabic: 'إِلَيْكُمْ', transliteration: 'ilaykum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '9:94:3', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:94:4', arabic: 'رَجَعْتُمْ', transliteration: 'rajaʿtum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you (have) returned', ur: 'تم (رکھتے ہو) واپس آیا' } },
      { id: '9:94:5', arabic: 'إِلَيْهِمْ ۚ', transliteration: 'ilayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:94:6', arabic: 'قُل', transliteration: 'qul', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Say', ur: 'کہو' } },
      { id: '9:94:7', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '9:94:8', arabic: 'تَعْتَذِرُوا۟', transliteration: 'taʿtadhirū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'make excuse', ur: 'بنانا excuse' } },
      { id: '9:94:9', arabic: 'لَن', transliteration: 'lan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'never', ur: 'never' } },
      { id: '9:94:10', arabic: 'نُّؤْمِنَ', transliteration: 'nu\'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we will believe', ur: 'ہم  ایمان لانا' } },
      { id: '9:94:11', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you', ur: 'تم' } },
      { id: '9:94:12', arabic: 'قَدْ', transliteration: 'qad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Verily', ur: 'Verily' } },
      { id: '9:94:13', arabic: 'نَبَّأَنَا', transliteration: 'nabba-anā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah (has) informed us', ur: 'اللہ (رکھتا ہے) informed us' } },
      { id: '9:94:14', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah (has) informed us', ur: 'اللہ (رکھتا ہے) informed us' } },
      { id: '9:94:15', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:94:16', arabic: 'أَخْبَارِكُمْ ۚ', transliteration: 'akhbārikum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your news', ur: 'تمہارا news' } },
      { id: '9:94:17', arabic: 'وَسَيَرَى', transliteration: 'wasayarā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Allah will see', ur: 'اور اللہ  دیکھنا' } },
      { id: '9:94:18', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'and Allah will see', ur: 'اور اللہ  دیکھنا' } },
      { id: '9:94:19', arabic: 'عَمَلَكُمْ', transliteration: 'ʿamalakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your deeds', ur: 'تمہارا اعمال' } },
      { id: '9:94:20', arabic: 'وَرَسُولُهُۥ', transliteration: 'warasūluhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:94:21', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '9:94:22', arabic: 'تُرَدُّونَ', transliteration: 'turaddūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you will be brought back', ur: 'تم ہوگا brought back' } },
      { id: '9:94:23', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:94:24', arabic: 'عَـٰلِمِ', transliteration: 'ʿālimi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Knower', ur: '() Knower' } },
      { id: '9:94:25', arabic: 'ٱلْغَيْبِ', transliteration: 'l-ghaybi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the unseen', ur: '(کا)  unseen' } },
      { id: '9:94:26', arabic: 'وَٱلشَّهَـٰدَةِ', transliteration: 'wal-shahādati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the seen', ur: 'اور  seen' } },
      { id: '9:94:27', arabic: 'فَيُنَبِّئُكُم', transliteration: 'fayunabbi-ukum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'then He will inform you', ur: 'پھر وہ  inform تم' } },
      { id: '9:94:28', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of what', ur: 'کا کیا/جو' } },
      { id: '9:94:29', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'you used (to)', ur: 'تم used (کو/تک)' } },
      { id: '9:94:30', arabic: 'تَعْمَلُونَ', transliteration: 'taʿmalūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'do', ur: 'کرنا' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'شرط + فعل' }, { from: 15, to: 16, label: 'جار + مجرور' }, { from: 23, to: 24, label: 'جار + مجرور' }] }
  },
  95: {
    text: 'سَيَحْلِفُونَ بِٱللَّهِ لَكُمْ إِذَا ٱنقَلَبْتُمْ إِلَيْهِمْ لِتُعْرِضُوا۟ عَنْهُمْ ۖ فَأَعْرِضُوا۟ عَنْهُمْ ۖ إِنَّهُمْ رِجْسٌۭ ۖ وَمَأْوَىٰهُمْ جَهَنَّمُ جَزَآءًۢ بِمَا كَانُوا۟ يَكْسِبُونَ',
    translation: {
      en: 'They will swear by Allah to you when you return to them that you would leave them alone. So leave them alone; indeed they are evil; and their refuge is Hell as recompense for what they had been earning.',
      ur: 'جب تم ان کے پاس لوٹ کر جاؤ گے تو تمہارے روبرو خدا کی قسمیں کھائیں گے تاکہ تم ان سے درگزر کرو سو اُن کی طرف التفات نہ کرنا۔ یہ ناپاک ہیں اور جو یہ کام کرتے رہے ہیں اس کے بدلہ ان کا ٹھکانہ دوزخ ہے'
    },
    words: [
      { id: '9:95:1', arabic: 'سَيَحْلِفُونَ', transliteration: 'sayaḥlifūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They will swear', ur: 'وہ  swear' } },
      { id: '9:95:2', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by Allah', ur: 'کے ذریعے اللہ' } },
      { id: '9:95:3', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '9:95:4', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:95:5', arabic: 'ٱنقَلَبْتُمْ', transliteration: 'inqalabtum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'you returned', ur: 'تم واپس آیا' } },
      { id: '9:95:6', arabic: 'إِلَيْهِمْ', transliteration: 'ilayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:95:7', arabic: 'لِتُعْرِضُوا۟', transliteration: 'lituʿ\'riḍū', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that you may turn away', ur: 'کہ تم may پھیرنا away' } },
      { id: '9:95:8', arabic: 'عَنْهُمْ ۖ', transliteration: 'ʿanhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from them', ur: 'سے ان کو' } },
      { id: '9:95:9', arabic: 'فَأَعْرِضُوا۟', transliteration: 'fa-aʿriḍū', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'So turn away', ur: 'پس پھیرنا away' } },
      { id: '9:95:10', arabic: 'عَنْهُمْ ۖ', transliteration: 'ʿanhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from them', ur: 'سے ان کو' } },
      { id: '9:95:11', arabic: 'إِنَّهُمْ', transliteration: 'innahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'indeed, they', ur: 'بےشک, وہ' } },
      { id: '9:95:12', arabic: 'رِجْسٌۭ ۖ', transliteration: 'rij\'sun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) impure', ur: '(ہیں) impure' } },
      { id: '9:95:13', arabic: 'وَمَأْوَىٰهُمْ', transliteration: 'wamawāhum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and their abode', ur: 'اور ان کا abode' } },
      { id: '9:95:14', arabic: 'جَهَنَّمُ', transliteration: 'jahannamu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Hell', ur: '(ہے) Hell' } },
      { id: '9:95:15', arabic: 'جَزَآءًۢ', transliteration: 'jazāan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a recompense', ur: 'ایک recompense' } },
      { id: '9:95:16', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for what', ur: 'کے لیے کیا/جو' } },
      { id: '9:95:17', arabic: 'كَانُوا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'they used (to)', ur: 'وہ used (کو/تک)' } },
      { id: '9:95:18', arabic: 'يَكْسِبُونَ', transliteration: 'yaksibūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'earn', ur: 'earn' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'شرط + فعل' }, { from: 5, to: 9, label: 'عطف' }] }
  },
  96: {
    text: 'يَحْلِفُونَ لَكُمْ لِتَرْضَوْا۟ عَنْهُمْ ۖ فَإِن تَرْضَوْا۟ عَنْهُمْ فَإِنَّ ٱللَّهَ لَا يَرْضَىٰ عَنِ ٱلْقَوْمِ ٱلْفَٰسِقِينَ',
    translation: {
      en: 'They swear to you so that you might be satisfied with them. But if you should be satisfied with them - indeed, Allah is not satisfied with a defiantly disobedient people.',
      ur: 'یہ تمہارے آگے قسمیں کھائیں گے تاکہ تم ان سے خوش ہو جاؤ لیکن اگر تم اُن سے خوش ہو جاؤ گے تو خدا تو نافرمان لوگوں سے خوش نہیں ہوتا'
    },
    words: [
      { id: '9:96:1', arabic: 'يَحْلِفُونَ', transliteration: 'yaḥlifūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They swear', ur: 'وہ swear' } },
      { id: '9:96:2', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to you', ur: 'کو/تک تم' } },
      { id: '9:96:3', arabic: 'لِتَرْضَوْا۟', transliteration: 'litarḍaw', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that you may be pleased', ur: 'کہ تم may be pleased' } },
      { id: '9:96:4', arabic: 'عَنْهُمْ ۖ', transliteration: 'ʿanhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with them', ur: 'ساتھ ان کو' } },
      { id: '9:96:5', arabic: 'فَإِن', transliteration: 'fa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'But if', ur: 'لیکن اگر' } },
      { id: '9:96:6', arabic: 'تَرْضَوْا۟', transliteration: 'tarḍaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you are pleased', ur: 'تم ہیں pleased' } },
      { id: '9:96:7', arabic: 'عَنْهُمْ', transliteration: 'ʿanhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with them', ur: 'ساتھ ان کو' } },
      { id: '9:96:8', arabic: 'فَإِنَّ', transliteration: 'fa-inna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then indeed', ur: 'پھر بےشک' } },
      { id: '9:96:9', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:96:10', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(is) not pleased', ur: '(ہے) نہیں pleased' } },
      { id: '9:96:11', arabic: 'يَرْضَىٰ', transliteration: 'yarḍā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) not pleased', ur: '(ہے) نہیں pleased' } },
      { id: '9:96:12', arabic: 'عَنِ', transliteration: 'ʿani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:96:13', arabic: 'ٱلْقَوْمِ', transliteration: 'l-qawmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the people', ur: 'لوگ' } },
      { id: '9:96:14', arabic: 'ٱلْفَـٰسِقِينَ', transliteration: 'l-fāsiqīna', pos: ['N'], posLabel: 'N', root: 'ف س ق', meaning: { en: '(who are) defiantly disobedient', ur: '(جو ہیں) defiantly disobedient' } }
    ],
    structure: { relationships: [] }
  },
  97: {
    text: 'ٱلْأَعْرَابُ أَشَدُّ كُفْرًۭا وَنِفَاقًۭا وَأَجْدَرُ أَلَّا يَعْلَمُوا۟ حُدُودَ مَآ أَنزَلَ ٱللَّهُ عَلَىٰ رَسُولِهِۦ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌۭ',
    translation: {
      en: 'The bedouins are stronger in disbelief and hypocrisy and more likely not to know the limits of what [laws] Allah has revealed to His Messenger. And Allah is Knowing and Wise.',
      ur: 'دیہاتی لوگ سخت کافر اور سخت منافق ہیں اور اس قابل ہیں کہ جو احکام (شریعت) خدا نے اپنے رسول پر نازل فرمائے ہیں ان سے واقف (ہی) نہ ہوں۔ اور خدا جاننے والا (اور) حکمت والا ہے'
    },
    words: [
      { id: '9:97:1', arabic: 'ٱلْأَعْرَابُ', transliteration: 'al-aʿrābu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'The bedouins', ur: ' bedouins' } },
      { id: '9:97:2', arabic: 'أَشَدُّ', transliteration: 'ashaddu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(are) stronger', ur: '(ہیں) stronger' } },
      { id: '9:97:3', arabic: 'كُفْرًۭا', transliteration: 'kuf\'ran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) disbelief', ur: '(میں) disbelief' } },
      { id: '9:97:4', arabic: 'وَنِفَاقًۭا', transliteration: 'wanifāqan', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and hypocrisy', ur: 'اور hypocrisy' } },
      { id: '9:97:5', arabic: 'وَأَجْدَرُ', transliteration: 'wa-ajdaru', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and more likely', ur: 'اور more likely' } },
      { id: '9:97:6', arabic: 'أَلَّا', transliteration: 'allā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that not', ur: 'کہ نہیں' } },
      { id: '9:97:7', arabic: 'يَعْلَمُوا۟', transliteration: 'yaʿlamū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they know', ur: 'وہ جاننا' } },
      { id: '9:97:8', arabic: 'حُدُودَ', transliteration: 'ḥudūda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) limits', ur: '() limits' } },
      { id: '9:97:9', arabic: 'مَآ', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) what', ur: '(کا) کیا/جو' } },
      { id: '9:97:10', arabic: 'أَنزَلَ', transliteration: 'anzala', pos: ['N'], posLabel: 'N', root: 'ن ز ل', meaning: { en: 'Allah (has) revealed', ur: 'اللہ (رکھتا ہے) نازل کیا' } },
      { id: '9:97:11', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah (has) revealed', ur: 'اللہ (رکھتا ہے) نازل کیا' } },
      { id: '9:97:12', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:97:13', arabic: 'رَسُولِهِۦ ۗ', transliteration: 'rasūlihi', pos: ['N'], posLabel: 'N', root: 'ر س ل', meaning: { en: 'His Messenger', ur: 'اس کا رسول' } },
      { id: '9:97:14', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:97:15', arabic: 'عَلِيمٌ', transliteration: 'ʿalīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } },
      { id: '9:97:16', arabic: 'حَكِيمٌۭ', transliteration: 'ḥakīmun', pos: ['N'], posLabel: 'N', root: 'ح ك م', meaning: { en: 'All-Wise', ur: 'حکمت والا' } }
    ],
    structure: { relationships: [{ from: 2, to: 4, label: 'عطف' }, { from: 4, to: 5, label: 'عطف' }, { from: 12, to: 13, label: 'جار + مجرور' }] }
  },
  98: {
    text: 'وَمِنَ ٱلْأَعْرَابِ مَن يَتَّخِذُ مَا يُنفِقُ مَغْرَمًۭا وَيَتَرَبَّصُ بِكُمُ ٱلدَّوَآئِرَ ۚ عَلَيْهِمْ دَآئِرَةُ ٱلسَّوْءِ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌۭ',
    translation: {
      en: 'And among the bedouins are some who consider what they spend as a loss and await for you turns of misfortune. Upon them will be a misfortune of evil. And Allah is Hearing and Knowing.',
      ur: 'اور بعض دیہاتی ایسے ہیں کہ جو خرچ کرتے ہیں اسے تاوان سمجھتے ہیں اور تمہارے حق میں مصیبتوں کے منتظر ہیں۔ ان ہی پر بری مصیبت (واقع) ہو۔ اور خدا سننے والا (اور) جاننے والا ہے'
    },
    words: [
      { id: '9:98:1', arabic: 'وَمِنَ', transliteration: 'wamina', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And among', ur: 'اور میں سے' } },
      { id: '9:98:2', arabic: 'ٱلْأَعْرَابِ', transliteration: 'l-aʿrābi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the bedouins', ur: ' bedouins' } },
      { id: '9:98:3', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(is he) who', ur: '(ہے وہ) جو' } },
      { id: '9:98:4', arabic: 'يَتَّخِذُ', transliteration: 'yattakhidhu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'takes', ur: 'takes' } },
      { id: '9:98:5', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:98:6', arabic: 'يُنفِقُ', transliteration: 'yunfiqu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'he spends', ur: 'وہ spends' } },
      { id: '9:98:7', arabic: 'مَغْرَمًۭا', transliteration: 'maghraman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) a loss', ur: '(as) ایک loss' } },
      { id: '9:98:8', arabic: 'وَيَتَرَبَّصُ', transliteration: 'wayatarabbaṣu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and he awaits', ur: 'اور وہ awaits' } },
      { id: '9:98:9', arabic: 'بِكُمُ', transliteration: 'bikumu', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '9:98:10', arabic: 'ٱلدَّوَآئِرَ ۚ', transliteration: 'l-dawāira', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the turns (of misfortune)', ur: ' turns (کا misfortune)' } },
      { id: '9:98:11', arabic: 'عَلَيْهِمْ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Upon them', ur: 'پر ان کو' } },
      { id: '9:98:12', arabic: 'دَآئِرَةُ', transliteration: 'dāiratu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(will be) the turn', ur: '(ہوگا)  پھیرنا' } },
      { id: '9:98:13', arabic: 'ٱلسَّوْءِ ۗ', transliteration: 'l-sawi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the evil', ur: '(کا)  برائی' } },
      { id: '9:98:14', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:98:15', arabic: 'سَمِيعٌ', transliteration: 'samīʿun', pos: ['N'], posLabel: 'N', root: 'س م ع', meaning: { en: '(is) All-Hearer', ur: '(ہے) سب-Hearer' } },
      { id: '9:98:16', arabic: 'عَلِيمٌۭ', transliteration: 'ʿalīmun', pos: ['N'], posLabel: 'N', root: 'ع ل م', meaning: { en: 'All-Knower', ur: 'سب-Knower' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'موصول + صلة' }, { from: 5, to: 6, label: 'موصول + صلة' }, { from: 6, to: 8, label: 'عطف' }] }
  },
  99: {
    text: 'وَمِنَ ٱلْأَعْرَابِ مَن يُؤْمِنُ بِٱللَّهِ وَٱلْيَوْمِ ٱلْءَاخِرِ وَيَتَّخِذُ مَا يُنفِقُ قُرُبَٰتٍ عِندَ ٱللَّهِ وَصَلَوَٰتِ ٱلرَّسُولِ ۚ أَلَآ إِنَّهَا قُرْبَةٌۭ لَّهُمْ ۚ سَيُدْخِلُهُمُ ٱللَّهُ فِى رَحْمَتِهِۦٓ ۗ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ',
    translation: {
      en: 'But among the bedouins are some who believe in Allah and the Last Day and consider what they spend as means of nearness to Allah and of [obtaining] invocations of the Messenger. Unquestionably, it is a means of nearness for them. Allah will admit them to His mercy. Indeed, Allah is Forgiving and Merciful.',
      ur: 'اور بعض دیہاتی ایسے ہیں کہ خدا پر اور روز آخرت پر ایمان رکھتے ہیں اور جو کچھ خرچ کرتے ہیں اس کو خدا کی قُربت اور پیغمبر کی دعاؤں کا ذریعہ سمجھتے ہیں۔ دیکھو وہ بےشبہ ان کے لیے (موجب) قربت ہے خدا ان کو عنقریب اپنی رحمت میں داخل کرے گا۔ بےشک خدا بخشنے والا مہربان ہے'
    },
    words: [
      { id: '9:99:1', arabic: 'وَمِنَ', transliteration: 'wamina', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But among', ur: 'لیکن میں سے' } },
      { id: '9:99:2', arabic: 'ٱلْأَعْرَابِ', transliteration: 'l-aʿrābi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the bedouins', ur: ' bedouins' } },
      { id: '9:99:3', arabic: 'مَن', transliteration: 'man', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(is he) who', ur: '(ہے وہ) جو' } },
      { id: '9:99:4', arabic: 'يُؤْمِنُ', transliteration: 'yu\'minu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'believes', ur: 'believes' } },
      { id: '9:99:5', arabic: 'بِٱللَّهِ', transliteration: 'bil-lahi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in Allah', ur: 'میں اللہ' } },
      { id: '9:99:6', arabic: 'وَٱلْيَوْمِ', transliteration: 'wal-yawmi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the Day', ur: 'اور قیامت کا دن' } },
      { id: '9:99:7', arabic: 'ٱلْـَٔاخِرِ', transliteration: 'l-ākhiri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Last', ur: ' Last' } },
      { id: '9:99:8', arabic: 'وَيَتَّخِذُ', transliteration: 'wayattakhidhu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and takes', ur: 'اور takes' } },
      { id: '9:99:9', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:99:10', arabic: 'يُنفِقُ', transliteration: 'yunfiqu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'he spends', ur: 'وہ spends' } },
      { id: '9:99:11', arabic: 'قُرُبَـٰتٍ', transliteration: 'qurubātin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) means of nearness', ur: '(as) means کا nearness' } },
      { id: '9:99:12', arabic: 'عِندَ', transliteration: 'ʿinda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:99:13', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:99:14', arabic: 'وَصَلَوَٰتِ', transliteration: 'waṣalawāti', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and blessings', ur: 'اور blessings' } },
      { id: '9:99:15', arabic: 'ٱلرَّسُولِ ۚ', transliteration: 'l-rasūli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Messenger', ur: '(کا) رسول' } },
      { id: '9:99:16', arabic: 'أَلَآ', transliteration: 'alā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Behold', ur: 'Behold' } },
      { id: '9:99:17', arabic: 'إِنَّهَا', transliteration: 'innahā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, it', ur: 'بےشک, it' } },
      { id: '9:99:18', arabic: 'قُرْبَةٌۭ', transliteration: 'qur\'batun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) a means of nearness', ur: '(ہے) ایک means کا nearness' } },
      { id: '9:99:19', arabic: 'لَّهُمْ ۚ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:99:20', arabic: 'سَيُدْخِلُهُمُ', transliteration: 'sayud\'khiluhumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will admit them', ur: 'اللہ  admit ان کو' } },
      { id: '9:99:21', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah will admit them', ur: 'اللہ  admit ان کو' } },
      { id: '9:99:22', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:99:23', arabic: 'رَحْمَتِهِۦٓ ۗ', transliteration: 'raḥmatihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'His Mercy', ur: 'اس کا رحمت' } },
      { id: '9:99:24', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:99:25', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:99:26', arabic: 'غَفُورٌۭ', transliteration: 'ghafūrun', pos: ['N'], posLabel: 'N', root: 'غ ف ر', meaning: { en: '(is) Oft-Forgiving', ur: '(ہے) Oft-بخشنے والا' } },
      { id: '9:99:27', arabic: 'رَّحِيمٌۭ', transliteration: 'raḥīmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Most Merciful', ur: 'نہایت مہربان' } }
    ],
    structure: { relationships: [{ from: 3, to: 4, label: 'موصول + صلة' }, { from: 4, to: 8, label: 'عطف' }, { from: 9, to: 10, label: 'موصول + صلة' }] }
  },
  100: {
    text: 'وَٱلسَّٰبِقُونَ ٱلْأَوَّلُونَ مِنَ ٱلْمُهَٰجِرِينَ وَٱلْأَنصَارِ وَٱلَّذِينَ ٱتَّبَعُوهُم بِإِحْسَٰنٍۢ رَّضِىَ ٱللَّهُ عَنْهُمْ وَرَضُوا۟ عَنْهُ وَأَعَدَّ لَهُمْ جَنَّٰتٍۢ تَجْرِى تَحْتَهَا ٱلْأَنْهَٰرُ خَٰلِدِينَ فِيهَآ أَبَدًۭا ۚ ذَٰلِكَ ٱلْفَوْزُ ٱلْعَظِيمُ',
    translation: {
      en: 'And the first forerunners [in the faith] among the Muhajireen and the Ansar and those who followed them with good conduct - Allah is pleased with them and they are pleased with Him, and He has prepared for them gardens beneath which rivers flow, wherein they will abide forever. That is the great attainment.',
      ur: 'جن لوگوں نے سبقت کی (یعنی سب سے) پہلے (ایمان لائے) مہاجرین میں سے بھی اور انصار میں سے بھی۔ اور جنہوں نے نیکو کاری کے ساتھ ان کی پیروی کی خدا ان سے خوش ہے اور وہ خدا سے خوش ہیں اور اس نے ان کے لیے باغات تیار کئے ہیں جن کے نیچے نہریں بہہ رہی ہیں اور ہمیشہ ان میں رہیں گے۔ یہ بڑی کامیابی ہے'
    },
    words: [
      { id: '9:100:1', arabic: 'وَٱلسَّـٰبِقُونَ', transliteration: 'wal-sābiqūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And the forerunners', ur: 'اور  forerunners' } },
      { id: '9:100:2', arabic: 'ٱلْأَوَّلُونَ', transliteration: 'l-awalūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the first', ur: ' first' } },
      { id: '9:100:3', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among', ur: 'میں سے' } },
      { id: '9:100:4', arabic: 'ٱلْمُهَـٰجِرِينَ', transliteration: 'l-muhājirīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the emigrants', ur: ' emigrants' } },
      { id: '9:100:5', arabic: 'وَٱلْأَنصَارِ', transliteration: 'wal-anṣāri', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the helpers', ur: 'اور  helpers' } },
      { id: '9:100:6', arabic: 'وَٱلَّذِينَ', transliteration: 'wa-alladhīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and those who', ur: 'اور جو لوگ' } },
      { id: '9:100:7', arabic: 'ٱتَّبَعُوهُم', transliteration: 'ittabaʿūhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'followed them', ur: 'پیروی کی ان کو' } },
      { id: '9:100:8', arabic: 'بِإِحْسَـٰنٍۢ', transliteration: 'bi-iḥ\'sānin', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in righteousness', ur: 'میں righteousness' } },
      { id: '9:100:9', arabic: 'رَّضِىَ', transliteration: 'raḍiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah is pleased', ur: 'اللہ ہے pleased' } },
      { id: '9:100:10', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah is pleased', ur: 'اللہ ہے pleased' } },
      { id: '9:100:11', arabic: 'عَنْهُمْ', transliteration: 'ʿanhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with them', ur: 'ساتھ ان کو' } },
      { id: '9:100:12', arabic: 'وَرَضُوا۟', transliteration: 'waraḍū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they are pleased', ur: 'اور وہ ہیں pleased' } },
      { id: '9:100:13', arabic: 'عَنْهُ', transliteration: 'ʿanhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with Him', ur: 'ساتھ Him' } },
      { id: '9:100:14', arabic: 'وَأَعَدَّ', transliteration: 'wa-aʿadda', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'And He has prepared', ur: 'اور وہ رکھتا ہے prepared' } },
      { id: '9:100:15', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:100:16', arabic: 'جَنَّـٰتٍۢ', transliteration: 'jannātin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Gardens', ur: 'باغات' } },
      { id: '9:100:17', arabic: 'تَجْرِى', transliteration: 'tajrī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'flows', ur: 'flows' } },
      { id: '9:100:18', arabic: 'تَحْتَهَا', transliteration: 'taḥtahā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'underneath it', ur: 'underneath it' } },
      { id: '9:100:19', arabic: 'ٱلْأَنْهَـٰرُ', transliteration: 'l-anhāru', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the rivers', ur: ' rivers' } },
      { id: '9:100:20', arabic: 'خَـٰلِدِينَ', transliteration: 'khālidīna', pos: ['N'], posLabel: 'N', root: 'خ ل د', meaning: { en: 'will abide', ur: ' abide' } },
      { id: '9:100:21', arabic: 'فِيهَآ', transliteration: 'fīhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:100:22', arabic: 'أَبَدًۭا ۚ', transliteration: 'abadan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'forever', ur: 'forever' } },
      { id: '9:100:23', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That', ur: 'کہ' } },
      { id: '9:100:24', arabic: 'ٱلْفَوْزُ', transliteration: 'l-fawzu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the success', ur: '(ہے)  success' } },
      { id: '9:100:25', arabic: 'ٱلْعَظِيمُ', transliteration: 'l-ʿaẓīmu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the great', ur: ' عظیم' } }
    ],
    structure: { relationships: [] }
  },
  101: {
    text: 'وَمِمَّنْ حَوْلَكُم مِّنَ ٱلْأَعْرَابِ مُنَٰفِقُونَ ۖ وَمِنْ أَهْلِ ٱلْمَدِينَةِ ۖ مَرَدُوا۟ عَلَى ٱلنِّفَاقِ لَا تَعْلَمُهُمْ ۖ نَحْنُ نَعْلَمُهُمْ ۚ سَنُعَذِّبُهُم مَّرَّتَيْنِ ثُمَّ يُرَدُّونَ إِلَىٰ عَذَابٍ عَظِيمٍۢ',
    translation: {
      en: 'And among those around you of the bedouins are hypocrites, and [also] from the people of Madinah. They have become accustomed to hypocrisy. You, [O Muhammad], do not know them, [but] We know them. We will punish them twice [in this world]; then they will be returned to a great punishment.',
      ur: 'اور تمہارے گرد و نواح کے بعض دیہاتی منافق ہیں اور بعض مدینے والے بھی نفاق پر اڑے ہوئے ہیں تم انہیں نہیں جانتے۔ ہم جانتے ہیں۔ ہم ان کو دوہرا عذاب دیں گے پھر وہ بڑے عذاب کی طرف لوٹائے جائیں گے'
    },
    words: [
      { id: '9:101:1', arabic: 'وَمِمَّنْ', transliteration: 'wamimman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And among those', ur: 'اور میں سے وہ لوگ' } },
      { id: '9:101:2', arabic: 'حَوْلَكُم', transliteration: 'ḥawlakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'around you', ur: 'around تم' } },
      { id: '9:101:3', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:101:4', arabic: 'ٱلْأَعْرَابِ', transliteration: 'l-aʿrābi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the bedouins', ur: ' bedouins' } },
      { id: '9:101:5', arabic: 'مُنَـٰفِقُونَ ۖ', transliteration: 'munāfiqūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) hypocrites', ur: '(ہیں) hypocrites' } },
      { id: '9:101:6', arabic: 'وَمِنْ', transliteration: 'wamin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (also) from', ur: 'اور (also) سے' } },
      { id: '9:101:7', arabic: 'أَهْلِ', transliteration: 'ahli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'people', ur: 'لوگ' } },
      { id: '9:101:8', arabic: 'ٱلْمَدِينَةِ ۖ', transliteration: 'l-madīnati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Madinah', ur: '(کا)  Madinah' } },
      { id: '9:101:9', arabic: 'مَرَدُوا۟', transliteration: 'maradū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They persist', ur: 'وہ persist' } },
      { id: '9:101:10', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:101:11', arabic: 'ٱلنِّفَاقِ', transliteration: 'l-nifāqi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the hypocrisy', ur: ' hypocrisy' } },
      { id: '9:101:12', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:101:13', arabic: 'تَعْلَمُهُمْ ۖ', transliteration: 'taʿlamuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you know them', ur: 'تم جاننا ان کو' } },
      { id: '9:101:14', arabic: 'نَحْنُ', transliteration: 'naḥnu', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'We', ur: 'ہم' } },
      { id: '9:101:15', arabic: 'نَعْلَمُهُمْ ۚ', transliteration: 'naʿlamuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[We] know them', ur: '[ہم] جاننا ان کو' } },
      { id: '9:101:16', arabic: 'سَنُعَذِّبُهُم', transliteration: 'sanuʿadhibuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'We will punish them', ur: 'ہم  سزا دینا ان کو' } },
      { id: '9:101:17', arabic: 'مَّرَّتَيْنِ', transliteration: 'marratayni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'twice', ur: 'twice' } },
      { id: '9:101:18', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '9:101:19', arabic: 'يُرَدُّونَ', transliteration: 'yuraddūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they will be returned', ur: 'وہ ہوگا واپس آیا' } },
      { id: '9:101:20', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:101:21', arabic: 'عَذَابٍ', transliteration: 'ʿadhābin', pos: ['N'], posLabel: 'N', root: 'ع ذ ب', meaning: { en: 'a punishment', ur: 'ایک عذاب' } },
      { id: '9:101:22', arabic: 'عَظِيمٍۢ', transliteration: 'ʿaẓīmin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'great', ur: 'بڑا/عظیم' } }
    ],
    structure: { relationships: [{ from: 10, to: 11, label: 'جار + مجرور' }, { from: 20, to: 21, label: 'جار + مجرور' }] }
  },
  102: {
    text: 'وَءَاخَرُونَ ٱعْتَرَفُوا۟ بِذُنُوبِهِمْ خَلَطُوا۟ عَمَلًۭا صَٰلِحًۭا وَءَاخَرَ سَيِّئًا عَسَى ٱللَّهُ أَن يَتُوبَ عَلَيْهِمْ ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌ',
    translation: {
      en: 'And [there are] others who have acknowledged their sins. They had mixed a righteous deed with another that was bad. Perhaps Allah will turn to them in forgiveness. Indeed, Allah is Forgiving and Merciful.',
      ur: 'اور کچھ اور لوگ ہیں کہ اپنے گناہوں کا (صاف) اقرار کرتے ہیں انہوں نے اچھے برے عملوں کو ملا جلا دیا تھا۔ قریب ہے کہ خدا ان پر مہربانی سے توجہ فرمائے۔ بےشک خدا بخشنے والا مہربان ہے'
    },
    words: [
      { id: '9:102:1', arabic: 'وَءَاخَرُونَ', transliteration: 'waākharūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And others', ur: 'اور others' } },
      { id: '9:102:2', arabic: 'ٱعْتَرَفُوا۟', transliteration: 'iʿ\'tarafū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(who have) acknowledged', ur: '(جو رکھتے ہو) acknowledged' } },
      { id: '9:102:3', arabic: 'بِذُنُوبِهِمْ', transliteration: 'bidhunūbihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'their sins', ur: 'ان کا sins' } },
      { id: '9:102:4', arabic: 'خَلَطُوا۟', transliteration: 'khalaṭū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'They had mixed', ur: 'وہ رکھتا تھا mixed' } },
      { id: '9:102:5', arabic: 'عَمَلًۭا', transliteration: 'ʿamalan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a deed', ur: 'ایک عمل' } },
      { id: '9:102:6', arabic: 'صَـٰلِحًۭا', transliteration: 'ṣāliḥan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'righteous', ur: 'نیک' } },
      { id: '9:102:7', arabic: 'وَءَاخَرَ', transliteration: 'waākhara', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '(with) other', ur: '(ساتھ) other' } },
      { id: '9:102:8', arabic: 'سَيِّئًا', transliteration: 'sayyi-an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(that was) evil', ur: '(کہ تھا) برائی' } },
      { id: '9:102:9', arabic: 'عَسَى', transliteration: 'ʿasā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Perhaps', ur: 'Perhaps' } },
      { id: '9:102:10', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:102:11', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[that]', ur: '[کہ]' } },
      { id: '9:102:12', arabic: 'يَتُوبَ', transliteration: 'yatūba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'will turn (in mercy)', ur: ' پھیرنا (میں رحمت)' } },
      { id: '9:102:13', arabic: 'عَلَيْهِمْ ۚ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:102:14', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:102:15', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:102:16', arabic: 'غَفُورٌۭ', transliteration: 'ghafūrun', pos: ['N'], posLabel: 'N', root: 'غ ف ر', meaning: { en: '(is) Oft-Forgiving', ur: '(ہے) Oft-بخشنے والا' } },
      { id: '9:102:17', arabic: 'رَّحِيمٌ', transliteration: 'raḥīmun', pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: 'Most Merciful', ur: 'نہایت مہربان' } }
    ],
    structure: { relationships: [] }
  },
  103: {
    text: 'خُذْ مِنْ أَمْوَٰلِهِمْ صَدَقَةًۭ تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ ۖ إِنَّ صَلَوٰتَكَ سَكَنٌۭ لَّهُمْ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ',
    translation: {
      en: 'Take, [O, Muhammad], from their wealth a charity by which you purify them and cause them increase, and invoke [Allah \'s blessings] upon them. Indeed, your invocations are reassurance for them. And Allah is Hearing and Knowing.',
      ur: 'ان کے مال میں سے زکوٰة قبول کر لو کہ اس سے تم ان کو (ظاہر میں بھی) پاک اور (باطن میں بھی) پاکیزہ کرتے ہو اور ان کے حق میں دعائے خیر کرو کہ تمہاری دعا ان کے لیے موجب تسکین ہے اور خدا سننے والا اور جاننے والا ہے'
    },
    words: [
      { id: '9:103:1', arabic: 'خُذْ', transliteration: 'khudh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Take', ur: 'لینا' } },
      { id: '9:103:2', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:103:3', arabic: 'أَمْوَٰلِهِمْ', transliteration: 'amwālihim', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their wealth', ur: 'ان کا مال' } },
      { id: '9:103:4', arabic: 'صَدَقَةًۭ', transliteration: 'ṣadaqatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a charity', ur: 'ایک charity' } },
      { id: '9:103:5', arabic: 'تُطَهِّرُهُمْ', transliteration: 'tuṭahhiruhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'purifying them', ur: 'purifying ان کو' } },
      { id: '9:103:6', arabic: 'وَتُزَكِّيهِم', transliteration: 'watuzakkīhim', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and cause them increase', ur: 'اور راہ ان کو increase' } },
      { id: '9:103:7', arabic: 'بِهَا', transliteration: 'bihā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'by it', ur: 'کے ذریعے it' } },
      { id: '9:103:8', arabic: 'وَصَلِّ', transliteration: 'waṣalli', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and bless', ur: 'اور bless' } },
      { id: '9:103:9', arabic: 'عَلَيْهِمْ ۖ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[upon] them', ur: '[پر] ان کو' } },
      { id: '9:103:10', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:103:11', arabic: 'صَلَوٰتَكَ', transliteration: 'ṣalataka', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your blessings', ur: 'تمہارا blessings' } },
      { id: '9:103:12', arabic: 'سَكَنٌۭ', transliteration: 'sakanun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are a) reassurance', ur: '(ہیں ایک) reassurance' } },
      { id: '9:103:13', arabic: 'لَّهُمْ ۗ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:103:14', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:103:15', arabic: 'سَمِيعٌ', transliteration: 'samīʿun', pos: ['N'], posLabel: 'N', root: 'س م ع', meaning: { en: '(is) All-Hearer', ur: '(ہے) سب-Hearer' } },
      { id: '9:103:16', arabic: 'عَلِيمٌ', transliteration: 'ʿalīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: 'All-Knower', ur: 'سب-Knower' } }
    ],
    structure: { relationships: [{ from: 5, to: 6, label: 'عطف' }] }
  },
  104: {
    text: 'أَلَمْ يَعْلَمُوٓا۟ أَنَّ ٱللَّهَ هُوَ يَقْبَلُ ٱلتَّوْبَةَ عَنْ عِبَادِهِۦ وَيَأْخُذُ ٱلصَّدَقَٰتِ وَأَنَّ ٱللَّهَ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
    translation: {
      en: 'Do they not know that it is Allah who accepts repentance from His servants and receives charities and that it is Allah who is the Accepting of repentance, the Merciful?',
      ur: 'کیا یہ لوگ نہیں جانتے کہ خدا ہی اپنے بندوں سے توبہ قبول فرماتا ہے اور صدقات (وخیرات) لیتا ہے اور بےشک خدا ہی توبہ قبول کرنے والا مہربان ہے'
    },
    words: [
      { id: '9:104:1', arabic: 'أَلَمْ', transliteration: 'alam', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Do not', ur: 'کرنا نہیں' } },
      { id: '9:104:2', arabic: 'يَعْلَمُوٓا۟', transliteration: 'yaʿlamū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they know', ur: 'وہ جاننا' } },
      { id: '9:104:3', arabic: 'أَنَّ', transliteration: 'anna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:104:4', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:104:5', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: '(is) He', ur: '(ہے) وہ' } },
      { id: '9:104:6', arabic: 'يَقْبَلُ', transliteration: 'yaqbalu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(Who) accepts', ur: '(جو) accepts' } },
      { id: '9:104:7', arabic: 'ٱلتَّوْبَةَ', transliteration: 'l-tawbata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the repentance', ur: ' repentance' } },
      { id: '9:104:8', arabic: 'عَنْ', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:104:9', arabic: 'عِبَادِهِۦ', transliteration: 'ʿibādihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'His slaves', ur: 'اس کا slaves' } },
      { id: '9:104:10', arabic: 'وَيَأْخُذُ', transliteration: 'wayakhudhu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and takes', ur: 'اور takes' } },
      { id: '9:104:11', arabic: 'ٱلصَّدَقَـٰتِ', transliteration: 'l-ṣadaqāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the charities', ur: ' charities' } },
      { id: '9:104:12', arabic: 'وَأَنَّ', transliteration: 'wa-anna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and that', ur: 'اور کہ' } },
      { id: '9:104:13', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:104:14', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He', ur: 'وہ' } },
      { id: '9:104:15', arabic: 'ٱلتَّوَّابُ', transliteration: 'l-tawābu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the Acceptor of repentance', ur: '(ہے)  Acceptor کا repentance' } },
      { id: '9:104:16', arabic: 'ٱلرَّحِيمُ', transliteration: 'l-raḥīmu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Most Merciful', ur: ' نہایت مہربان' } }
    ],
    structure: { relationships: [{ from: 8, to: 9, label: 'جار + مجرور' }, { from: 6, to: 10, label: 'عطف' }, { from: 10, to: 12, label: 'عطف' }] }
  },
  105: {
    text: 'وَقُلِ ٱعْمَلُوا۟ فَسَيَرَى ٱللَّهُ عَمَلَكُمْ وَرَسُولُهُۥ وَٱلْمُؤْمِنُونَ ۖ وَسَتُرَدُّونَ إِلَىٰ عَٰلِمِ ٱلْغَيْبِ وَٱلشَّهَٰدَةِ فَيُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ',
    translation: {
      en: 'And say, "Do [as you will], for Allah will see your deeds, and [so, will] His Messenger and the believers. And you will be returned to the Knower of the unseen and the witnessed, and He will inform you of what you used to do."',
      ur: 'اور ان سے کہہ دو کہ عمل کئے جاؤ۔ خدا اور اس کا رسول اور مومن (سب) تمہارے عملوں کو دیکھ لیں گے۔ اور تم غائب وحاضر کے جاننے والے (خدائے واحد) کی طرف لوٹائے جاؤ گے پھر جو کچھ تم کرتے رہے ہو وہ سب تم کو بتا دے گا'
    },
    words: [
      { id: '9:105:1', arabic: 'وَقُلِ', transliteration: 'waquli', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And say', ur: 'اور کہو' } },
      { id: '9:105:2', arabic: 'ٱعْمَلُوا۟', transliteration: 'iʿ\'malū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Do', ur: 'کرنا' } },
      { id: '9:105:3', arabic: 'فَسَيَرَى', transliteration: 'fasayarā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then Allah will see', ur: 'پھر اللہ  دیکھنا' } },
      { id: '9:105:4', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then Allah will see', ur: 'پھر اللہ  دیکھنا' } },
      { id: '9:105:5', arabic: 'عَمَلَكُمْ', transliteration: 'ʿamalakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'your deed', ur: 'تمہارا عمل' } },
      { id: '9:105:6', arabic: 'وَرَسُولُهُۥ', transliteration: 'warasūluhu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:105:7', arabic: 'وَٱلْمُؤْمِنُونَ ۖ', transliteration: 'wal-mu\'minūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the believers', ur: 'اور  مومنین' } },
      { id: '9:105:8', arabic: 'وَسَتُرَدُّونَ', transliteration: 'wasaturaddūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And you will be brought back', ur: 'اور تم ہوگا brought back' } },
      { id: '9:105:9', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:105:10', arabic: 'عَـٰلِمِ', transliteration: 'ʿālimi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Knower', ur: '() Knower' } },
      { id: '9:105:11', arabic: 'ٱلْغَيْبِ', transliteration: 'l-ghaybi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the unseen', ur: '(کا)  unseen' } },
      { id: '9:105:12', arabic: 'وَٱلشَّهَـٰدَةِ', transliteration: 'wal-shahādati', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the seen', ur: 'اور  seen' } },
      { id: '9:105:13', arabic: 'فَيُنَبِّئُكُم', transliteration: 'fayunabbi-ukum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'then He will inform you', ur: 'پھر وہ  inform تم' } },
      { id: '9:105:14', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'of what', ur: 'کا کیا/جو' } },
      { id: '9:105:15', arabic: 'كُنتُمْ', transliteration: 'kuntum', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'you used (to)', ur: 'تم used (کو/تک)' } },
      { id: '9:105:16', arabic: 'تَعْمَلُونَ', transliteration: 'taʿmalūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'do', ur: 'کرنا' } }
    ],
    structure: { relationships: [{ from: 9, to: 10, label: 'جار + مجرور' }] }
  },
  106: {
    text: 'وَءَاخَرُونَ مُرْجَوْنَ لِأَمْرِ ٱللَّهِ إِمَّا يُعَذِّبُهُمْ وَإِمَّا يَتُوبُ عَلَيْهِمْ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌۭ',
    translation: {
      en: 'And [there are] others deferred until the command of Allah - whether He will punish them or whether He will forgive them. And Allah is Knowing and Wise.',
      ur: 'اور کچھ اور لوگ ہیں جن کا کام خدا کے حکم پر موقوف ہے۔ چاہے ان کو عذاب دے اور چاہے ان کو معاف کر دے۔ اور خدا جاننے والا اور حکمت والا ہے'
    },
    words: [
      { id: '9:106:1', arabic: 'وَءَاخَرُونَ', transliteration: 'waākharūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And others', ur: 'اور others' } },
      { id: '9:106:2', arabic: 'مُرْجَوْنَ', transliteration: 'mur\'jawna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'deferred', ur: 'deferred' } },
      { id: '9:106:3', arabic: 'لِأَمْرِ', transliteration: 'li-amri', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for the Command of Allah ', ur: 'کے لیے  Command کا اللہ ' } },
      { id: '9:106:4', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for the Command of Allah ', ur: 'کے لیے  Command کا اللہ ' } },
      { id: '9:106:5', arabic: 'إِمَّا', transliteration: 'immā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'whether', ur: 'whether' } },
      { id: '9:106:6', arabic: 'يُعَذِّبُهُمْ', transliteration: 'yuʿadhibuhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'He will punish them', ur: 'وہ  سزا دینا ان کو' } },
      { id: '9:106:7', arabic: 'وَإِمَّا', transliteration: 'wa-immā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '9:106:8', arabic: 'يَتُوبُ', transliteration: 'yatūbu', pos: ['V'], posLabel: 'V', root: 'ت و ب', meaning: { en: 'He will turn (in mercy)', ur: 'وہ  پھیرنا (میں رحمت)' } },
      { id: '9:106:9', arabic: 'عَلَيْهِمْ ۗ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:106:10', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:106:11', arabic: 'عَلِيمٌ', transliteration: 'ʿalīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } },
      { id: '9:106:12', arabic: 'حَكِيمٌۭ', transliteration: 'ḥakīmun', pos: ['N'], posLabel: 'N', root: 'ح ك م', meaning: { en: 'All-Wise', ur: 'حکمت والا' } }
    ],
    structure: { relationships: [] }
  },
  107: {
    text: 'وَٱلَّذِينَ ٱتَّخَذُوا۟ مَسْجِدًۭا ضِرَارًۭا وَكُفْرًۭا وَتَفْرِيقًۢا بَيْنَ ٱلْمُؤْمِنِينَ وَإِرْصَادًۭا لِّمَنْ حَارَبَ ٱللَّهَ وَرَسُولَهُۥ مِن قَبْلُ ۚ وَلَيَحْلِفُنَّ إِنْ أَرَدْنَآ إِلَّا ٱلْحُسْنَىٰ ۖ وَٱللَّهُ يَشْهَدُ إِنَّهُمْ لَكَٰذِبُونَ',
    translation: {
      en: 'And [there are] those [hypocrites] who took for themselves a mosque for causing harm and disbelief and division among the believers and as a station for whoever had warred against Allah and His Messenger before. And they will surely swear, "We intended only the best." And Allah testifies that indeed they are liars.',
      ur: 'اور (ان میں سے ایسے بھی ہیں) جنہوں نے اس غرض سے مسجد بنوائی کہ ضرر پہنچائیں اور کفر کریں اور مومنوں میں تفرقہ ڈالیں اور جو لوگ خدا اور اس کے رسول سے پہلے جنگ کرچکے ہیں ان کے لیے گھات کی جگہ بنائیں۔ اور قسمیں کھائیں گے کہ ہمارا مقصود تو صرف بھلائی تھی۔ مگر خدا گواہی دیتا ہے کہ یہ جھوٹے ہیں'
    },
    words: [
      { id: '9:107:1', arabic: 'وَٱلَّذِينَ', transliteration: 'wa-alladhīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And those who', ur: 'اور جو لوگ' } },
      { id: '9:107:2', arabic: 'ٱتَّخَذُوا۟', transliteration: 'ittakhadhū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'take', ur: 'لینا' } },
      { id: '9:107:3', arabic: 'مَسْجِدًۭا', transliteration: 'masjidan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a masjid', ur: 'ایک masjid' } },
      { id: '9:107:4', arabic: 'ضِرَارًۭا', transliteration: 'ḍirāran', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(for causing) harm', ur: '(کے لیے causing) harm' } },
      { id: '9:107:5', arabic: 'وَكُفْرًۭا', transliteration: 'wakuf\'ran', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (for) disbelief', ur: 'اور (کے لیے) disbelief' } },
      { id: '9:107:6', arabic: 'وَتَفْرِيقًۢا', transliteration: 'watafrīqan', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and (for) division', ur: 'اور (کے لیے) division' } },
      { id: '9:107:7', arabic: 'بَيْنَ', transliteration: 'bayna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among', ur: 'میں سے' } },
      { id: '9:107:8', arabic: 'ٱلْمُؤْمِنِينَ', transliteration: 'l-mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the believers', ur: ' مومنین' } },
      { id: '9:107:9', arabic: 'وَإِرْصَادًۭا', transliteration: 'wa-ir\'ṣādan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (as) a station', ur: 'اور (as) ایک station' } },
      { id: '9:107:10', arabic: 'لِّمَنْ', transliteration: 'liman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for whoever', ur: 'کے لیے whoever' } },
      { id: '9:107:11', arabic: 'حَارَبَ', transliteration: 'ḥāraba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'warred', ur: 'warred' } },
      { id: '9:107:12', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(against) Allah', ur: '(خلاف) اللہ' } },
      { id: '9:107:13', arabic: 'وَرَسُولَهُۥ', transliteration: 'warasūlahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and His Messenger', ur: 'اور اس کا رسول' } },
      { id: '9:107:14', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '9:107:15', arabic: 'قَبْلُ ۚ', transliteration: 'qablu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'before', ur: 'پہلے' } },
      { id: '9:107:16', arabic: 'وَلَيَحْلِفُنَّ', transliteration: 'walayaḥlifunna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And surely they will swear', ur: 'اور بےشک وہ  swear' } },
      { id: '9:107:17', arabic: 'إِنْ', transliteration: 'in', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '9:107:18', arabic: 'أَرَدْنَآ', transliteration: 'aradnā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'we wish', ur: 'ہم wish' } },
      { id: '9:107:19', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:107:20', arabic: 'ٱلْحُسْنَىٰ ۖ', transliteration: 'l-ḥus\'nā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the good', ur: ' نیکی' } },
      { id: '9:107:21', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But Allah', ur: 'لیکن اللہ' } },
      { id: '9:107:22', arabic: 'يَشْهَدُ', transliteration: 'yashhadu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'bears witness', ur: 'bears witness' } },
      { id: '9:107:23', arabic: 'إِنَّهُمْ', transliteration: 'innahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'indeed, they', ur: 'بےشک, وہ' } },
      { id: '9:107:24', arabic: 'لَكَـٰذِبُونَ', transliteration: 'lakādhibūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) surely liars', ur: '(ہیں) بےشک liars' } }
    ],
    structure: { relationships: [{ from: 14, to: 15, label: 'جار + مجرور' }] }
  },
  108: {
    text: 'لَا تَقُمْ فِيهِ أَبَدًۭا ۚ لَّمَسْجِدٌ أُسِّسَ عَلَى ٱلتَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ أَحَقُّ أَن تَقُومَ فِيهِ ۚ فِيهِ رِجَالٌۭ يُحِبُّونَ أَن يَتَطَهَّرُوا۟ ۚ وَٱللَّهُ يُحِبُّ ٱلْمُطَّهِّرِينَ',
    translation: {
      en: 'Do not stand [for prayer] within it - ever. A mosque founded on righteousness from the first day is more worthy for you to stand in. Within it are men who love to purify themselves; and Allah loves those who purify themselves.',
      ur: 'تم اس (مسجد) میں کبھی (جاکر) کھڑے بھی نہ ہونا۔ البتہ وہ مسجد جس کی بنیاد پہلے دن سے تقویٰ پر رکھی گئی ہے اس قابل ہے کہ اس میں جایا (اور نماز پڑھایا) کرو۔ اس میں ایسے لوگ ہیں جو کہ پاک رہنے کو پسند کرتے ہیں۔ اور خدا پاک رہنے والوں کو ہی پسند کرتا ہے'
    },
    words: [
      { id: '9:108:1', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(Do) not', ur: '(کرنا) نہیں' } },
      { id: '9:108:2', arabic: 'تَقُمْ', transliteration: 'taqum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'stand', ur: 'stand' } },
      { id: '9:108:3', arabic: 'فِيهِ', transliteration: 'fīhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:108:4', arabic: 'أَبَدًۭا ۚ', transliteration: 'abadan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'ever', ur: 'ever' } },
      { id: '9:108:5', arabic: 'لَّمَسْجِدٌ', transliteration: 'lamasjidun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'A masjid', ur: 'ایک masjid' } },
      { id: '9:108:6', arabic: 'أُسِّسَ', transliteration: 'ussisa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'founded', ur: 'founded' } },
      { id: '9:108:7', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:108:8', arabic: 'ٱلتَّقْوَىٰ', transliteration: 'l-taqwā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the righteousness', ur: ' righteousness' } },
      { id: '9:108:9', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:108:10', arabic: 'أَوَّلِ', transliteration: 'awwali', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) first', ur: '() first' } },
      { id: '9:108:11', arabic: 'يَوْمٍ', transliteration: 'yawmin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'day', ur: 'دن' } },
      { id: '9:108:12', arabic: 'أَحَقُّ', transliteration: 'aḥaqqu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(is) more worthy', ur: '(ہے) more worthy' } },
      { id: '9:108:13', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:108:14', arabic: 'تَقُومَ', transliteration: 'taqūma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you stand', ur: 'تم stand' } },
      { id: '9:108:15', arabic: 'فِيهِ ۚ', transliteration: 'fīhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:108:16', arabic: 'فِيهِ', transliteration: 'fīhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Within it', ur: 'Within it' } },
      { id: '9:108:17', arabic: 'رِجَالٌۭ', transliteration: 'rijālun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) men', ur: '(ہیں) men' } },
      { id: '9:108:18', arabic: 'يُحِبُّونَ', transliteration: 'yuḥibbūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'who love', ur: 'جو محبت' } },
      { id: '9:108:19', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:108:20', arabic: 'يَتَطَهَّرُوا۟ ۚ', transliteration: 'yataṭahharū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'purify themselves', ur: 'purify themselves' } },
      { id: '9:108:21', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and Allah', ur: 'اور اللہ' } },
      { id: '9:108:22', arabic: 'يُحِبُّ', transliteration: 'yuḥibbu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'loves', ur: 'پسند کرتا ہے' } },
      { id: '9:108:23', arabic: 'ٱلْمُطَّهِّرِينَ', transliteration: 'l-muṭahirīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the ones who purify themselves', ur: ' ones جو purify themselves' } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'نفی + فعل' }, { from: 7, to: 8, label: 'جار + مجرور' }, { from: 9, to: 10, label: 'جار + مجرور' }] }
  },
  109: {
    text: 'أَفَمَنْ أَسَّسَ بُنْيَٰنَهُۥ عَلَىٰ تَقْوَىٰ مِنَ ٱللَّهِ وَرِضْوَٰنٍ خَيْرٌ أَم مَّنْ أَسَّسَ بُنْيَٰنَهُۥ عَلَىٰ شَفَا جُرُفٍ هَارٍۢ فَٱنْهَارَ بِهِۦ فِى نَارِ جَهَنَّمَ ۗ وَٱللَّهُ لَا يَهْدِى ٱلْقَوْمَ ٱلظَّٰلِمِينَ',
    translation: {
      en: 'Then is one who laid the foundation of his building on righteousness [with fear] from Allah and [seeking] His approval better or one who laid the foundation of his building on the edge of a bank about to collapse, so it collapsed with him into the fire of Hell? And Allah does not guide the wrongdoing people.',
      ur: 'بھلا جس شخص نے اپنی عمارت کی بنیاد خدا کے خوف اور اس کی رضامندی پر رکھی وہ اچھا ہے یا وہ جس نے اپنی عمارت کی بنیاد گر جانے والی کھائی کے کنارے پر رکھی کہ وہ اس کو دوزخ کی آگ میں لے گری اور خدا ظالموں کو ہدایت نہیں دیتا'
    },
    words: [
      { id: '9:109:1', arabic: 'أَفَمَنْ', transliteration: 'afaman', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Then is (one) who', ur: 'پھر ہے (one) جو' } },
      { id: '9:109:2', arabic: 'أَسَّسَ', transliteration: 'assasa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'founded', ur: 'founded' } },
      { id: '9:109:3', arabic: 'بُنْيَـٰنَهُۥ', transliteration: 'bun\'yānahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his building', ur: 'اس کا building' } },
      { id: '9:109:4', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:109:5', arabic: 'تَقْوَىٰ', transliteration: 'taqwā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'righteousness', ur: 'righteousness' } },
      { id: '9:109:6', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:109:7', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:109:8', arabic: 'وَرِضْوَٰنٍ', transliteration: 'wariḍ\'wānin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and (His) pleasure', ur: 'اور (اس کا) pleasure' } },
      { id: '9:109:9', arabic: 'خَيْرٌ', transliteration: 'khayrun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'better', ur: 'better' } },
      { id: '9:109:10', arabic: 'أَم', transliteration: 'am', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '9:109:11', arabic: 'مَّنْ', transliteration: 'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(one) who', ur: '(one) جو' } },
      { id: '9:109:12', arabic: 'أَسَّسَ', transliteration: 'assasa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'founded', ur: 'founded' } },
      { id: '9:109:13', arabic: 'بُنْيَـٰنَهُۥ', transliteration: 'bun\'yānahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his building', ur: 'اس کا building' } },
      { id: '9:109:14', arabic: 'عَلَىٰ', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:109:15', arabic: 'شَفَا', transliteration: 'shafā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'edge', ur: 'edge' } },
      { id: '9:109:16', arabic: 'جُرُفٍ', transliteration: 'jurufin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) a cliff', ur: '(کا) ایک cliff' } },
      { id: '9:109:17', arabic: 'هَارٍۢ', transliteration: 'hārin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(about to) collapse', ur: '(بارے میں کو/تک) collapse' } },
      { id: '9:109:18', arabic: 'فَٱنْهَارَ', transliteration: 'fa-in\'hāra', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'so it collapsed', ur: 'پس it collapsed' } },
      { id: '9:109:19', arabic: 'بِهِۦ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'with him', ur: 'ساتھ him' } },
      { id: '9:109:20', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:109:21', arabic: 'نَارِ', transliteration: 'nāri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) Fire', ur: '() آگ' } },
      { id: '9:109:22', arabic: 'جَهَنَّمَ ۗ', transliteration: 'jahannama', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Hell', ur: '(کا) Hell' } },
      { id: '9:109:23', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:109:24', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(does) not', ur: '(does) نہیں' } },
      { id: '9:109:25', arabic: 'يَهْدِى', transliteration: 'yahdī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'guide', ur: 'ہدایت دینا' } },
      { id: '9:109:26', arabic: 'ٱلْقَوْمَ', transliteration: 'l-qawma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the wrongdoing people', ur: 'ظالم لوگ' } },
      { id: '9:109:27', arabic: 'ٱلظَّـٰلِمِينَ', transliteration: 'l-ẓālimīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the wrongdoing people', ur: 'ظالم لوگ' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }, { from: 14, to: 15, label: 'جار + مجرور' }] }
  },
  110: {
    text: 'لَا يَزَالُ بُنْيَٰنُهُمُ ٱلَّذِى بَنَوْا۟ رِيبَةًۭ فِى قُلُوبِهِمْ إِلَّآ أَن تَقَطَّعَ قُلُوبُهُمْ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌ',
    translation: {
      en: 'Their building which they built will not cease to be a [cause of] skepticism in their hearts until their hearts are stopped. And Allah is Knowing and Wise.',
      ur: 'یہ عمارت جو انہوں نے بنائی ہے ہمیشہ ان کے دلوں میں (موجب) خلجان رہے گی (اور ان کو متردد رکھے گی) مگر یہ کہ ان کے دل پاش پاش ہو جائیں اور خدا جاننے والا اور حکمت والا ہے'
    },
    words: [
      { id: '9:110:1', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '9:110:2', arabic: 'يَزَالُ', transliteration: 'yazālu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(will) cease', ur: '() cease' } },
      { id: '9:110:3', arabic: 'بُنْيَـٰنُهُمُ', transliteration: 'bun\'yānuhumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their building', ur: 'ان کا building' } },
      { id: '9:110:4', arabic: 'ٱلَّذِى', transliteration: 'alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'which', ur: 'جو' } },
      { id: '9:110:5', arabic: 'بَنَوْا۟', transliteration: 'banaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they built', ur: 'وہ built' } },
      { id: '9:110:6', arabic: 'رِيبَةًۭ', transliteration: 'rībatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a (cause of) doubt', ur: 'ایک (راہ کا) doubt' } },
      { id: '9:110:7', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:110:8', arabic: 'قُلُوبِهِمْ', transliteration: 'qulūbihim', pos: ['N'], posLabel: 'N', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:110:9', arabic: 'إِلَّآ', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:110:10', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:110:11', arabic: 'تَقَطَّعَ', transliteration: 'taqaṭṭaʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) cut into pieces', ur: '(ہیں) cut into pieces' } },
      { id: '9:110:12', arabic: 'قُلُوبُهُمْ ۗ', transliteration: 'qulūbuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:110:13', arabic: 'وَٱللَّهُ', transliteration: 'wal-lahu', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And Allah', ur: 'اور اللہ' } },
      { id: '9:110:14', arabic: 'عَلِيمٌ', transliteration: 'ʿalīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } },
      { id: '9:110:15', arabic: 'حَكِيمٌ', transliteration: 'ḥakīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ك م', meaning: { en: 'All-Wise', ur: 'حکمت والا' } }
    ],
    structure: { relationships: [{ from: 1, to: 2, label: 'نفی + فعل' }] }
  },
  111: {
    text: '۞ إِنَّ ٱللَّهَ ٱشْتَرَىٰ مِنَ ٱلْمُؤْمِنِينَ أَنفُسَهُمْ وَأَمْوَٰلَهُم بِأَنَّ لَهُمُ ٱلْجَنَّةَ ۚ يُقَٰتِلُونَ فِى سَبِيلِ ٱللَّهِ فَيَقْتُلُونَ وَيُقْتَلُونَ ۖ وَعْدًا عَلَيْهِ حَقًّۭا فِى ٱلتَّوْرَىٰةِ وَٱلْإِنجِيلِ وَٱلْقُرْءَانِ ۚ وَمَنْ أَوْفَىٰ بِعَهْدِهِۦ مِنَ ٱللَّهِ ۚ فَٱسْتَبْشِرُوا۟ بِبَيْعِكُمُ ٱلَّذِى بَايَعْتُم بِهِۦ ۚ وَذَٰلِكَ هُوَ ٱلْفَوْزُ ٱلْعَظِيمُ',
    translation: {
      en: 'Indeed, Allah has purchased from the believers their lives and their properties [in exchange] for that they will have Paradise. They fight in the cause of Allah, so they kill and are killed. [It is] a true promise [binding] upon Him in the Torah and the Gospel and the Qur\'an. And who is truer to his covenant than Allah? So rejoice in your transaction which you have contracted. And it is that which is the great attainment.',
      ur: 'خدا نے مومنوں سے ان کی جانیں اور ان کے مال خرید لیے ہیں (اور اس کے) عوض ان کے لیے بہشت (تیار کی) ہے۔ یہ لوگ خدا کی راہ میں لڑتے ہیں تو مارتے بھی ہیں اور مارے بھی جاتے ہیں بھی ہیں۔ یہ تورات اور انجیل اور قرآن میں سچا وعدہ ہے۔ جس کا پورا کرنا اسے ضرور ہے اور خدا سے زیادہ وعدہ پورا کرنے والا کون ہے تو جو سودا تم نے اس سے کیا ہے اس سے خوش رہو۔ اور یہی بڑی کامیابی ہے'
    },
    words: [
      { id: '9:111:1', arabic: '۞ إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:111:2', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:111:3', arabic: 'ٱشْتَرَىٰ', transliteration: 'ish\'tarā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(has) purchased', ur: '(رکھتا ہے) purchased' } },
      { id: '9:111:4', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:111:5', arabic: 'ٱلْمُؤْمِنِينَ', transliteration: 'l-mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the believers', ur: ' مومنین' } },
      { id: '9:111:6', arabic: 'أَنفُسَهُمْ', transliteration: 'anfusahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their lives', ur: 'ان کا lives' } },
      { id: '9:111:7', arabic: 'وَأَمْوَٰلَهُم', transliteration: 'wa-amwālahum', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and their wealth', ur: 'اور ان کا مال' } },
      { id: '9:111:8', arabic: 'بِأَنَّ', transliteration: 'bi-anna', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'because', ur: 'because' } },
      { id: '9:111:9', arabic: 'لَهُمُ', transliteration: 'lahumu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:111:10', arabic: 'ٱلْجَنَّةَ ۚ', transliteration: 'l-janata', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Paradise', ur: '(ہے) جنت' } },
      { id: '9:111:11', arabic: 'يُقَـٰتِلُونَ', transliteration: 'yuqātilūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'They fight', ur: 'وہ لڑنا' } },
      { id: '9:111:12', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:111:13', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:111:14', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:111:15', arabic: 'فَيَقْتُلُونَ', transliteration: 'fayaqtulūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'they slay', ur: 'وہ slay' } },
      { id: '9:111:16', arabic: 'وَيُقْتَلُونَ ۖ', transliteration: 'wayuq\'talūna', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and they are slain', ur: 'اور وہ ہیں slain' } },
      { id: '9:111:17', arabic: 'وَعْدًا', transliteration: 'waʿdan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'A promise', ur: 'ایک وعدہ' } },
      { id: '9:111:18', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'upon Him', ur: 'پر Him' } },
      { id: '9:111:19', arabic: 'حَقًّۭا', transliteration: 'ḥaqqan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'true', ur: 'true' } },
      { id: '9:111:20', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:111:21', arabic: 'ٱلتَّوْرَىٰةِ', transliteration: 'l-tawrāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Taurat', ur: ' Taurat' } },
      { id: '9:111:22', arabic: 'وَٱلْإِنجِيلِ', transliteration: 'wal-injīli', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the Injeel', ur: 'اور  Injeel' } },
      { id: '9:111:23', arabic: 'وَٱلْقُرْءَانِ ۚ', transliteration: 'wal-qur\'āni', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the Quran', ur: 'اور  Quran' } },
      { id: '9:111:24', arabic: 'وَمَنْ', transliteration: 'waman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And who', ur: 'اور جو' } },
      { id: '9:111:25', arabic: 'أَوْفَىٰ', transliteration: 'awfā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) more faithful', ur: '(ہے) more faithful' } },
      { id: '9:111:26', arabic: 'بِعَهْدِهِۦ', transliteration: 'biʿahdihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to his promise', ur: 'کو/تک اس کا وعدہ' } },
      { id: '9:111:27', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'than', ur: 'than' } },
      { id: '9:111:28', arabic: 'ٱللَّهِ ۚ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:111:29', arabic: 'فَٱسْتَبْشِرُوا۟', transliteration: 'fa-is\'tabshirū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So rejoice', ur: 'پس rejoice' } },
      { id: '9:111:30', arabic: 'بِبَيْعِكُمُ', transliteration: 'bibayʿikumu', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in your transaction', ur: 'میں تمہارا transaction' } },
      { id: '9:111:31', arabic: 'ٱلَّذِى', transliteration: 'alladhī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'which', ur: 'جو' } },
      { id: '9:111:32', arabic: 'بَايَعْتُم', transliteration: 'bāyaʿtum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you have contracted', ur: 'تم رکھتے ہو contracted' } },
      { id: '9:111:33', arabic: 'بِهِۦ ۚ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '[with it]', ur: '[ساتھ it]' } },
      { id: '9:111:34', arabic: 'وَذَٰلِكَ', transliteration: 'wadhālika', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And that', ur: 'اور کہ' } },
      { id: '9:111:35', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'it', ur: 'it' } },
      { id: '9:111:36', arabic: 'ٱلْفَوْزُ', transliteration: 'l-fawzu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the success', ur: '(ہے)  success' } },
      { id: '9:111:37', arabic: 'ٱلْعَظِيمُ', transliteration: 'l-ʿaẓīmu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the great', ur: ' عظیم' } }
    ],
    structure: { relationships: [{ from: 6, to: 7, label: 'عطف' }, { from: 11, to: 15, label: 'عطف' }, { from: 15, to: 16, label: 'عطف' }] }
  },
  112: {
    text: 'ٱلتَّٰٓئِبُونَ ٱلْعَٰبِدُونَ ٱلْحَٰمِدُونَ ٱلسَّٰٓئِحُونَ ٱلرَّٰكِعُونَ ٱلسَّٰجِدُونَ ٱلْءَامِرُونَ بِٱلْمَعْرُوفِ وَٱلنَّاهُونَ عَنِ ٱلْمُنكَرِ وَٱلْحَٰفِظُونَ لِحُدُودِ ٱللَّهِ ۗ وَبَشِّرِ ٱلْمُؤْمِنِينَ',
    translation: {
      en: '[Such believers are] the repentant, the worshippers, the praisers [of Allah], the travelers [for His cause], those who bow and prostrate [in prayer], those who enjoin what is right and forbid what is wrong, and those who observe the limits [set by] Allah. And give good tidings to the believers.',
      ur: 'توبہ کرنے والے، عبادت کرنے والے، حمد کرنے والے، روزہ رکھنے والے، رکوع کرنے والے، سجدہ کرنے والے، نیک کاموں کا امر کرنے والے، بری باتوں سے منع کرنے والے، خدا کی حدوں کی حفاظت کرنے والے، (یہی مومن لوگ ہیں) اور اے پیغمبر مومنوں کو (بہشت کی) خوش خبری سنادو'
    },
    words: [
      { id: '9:112:1', arabic: 'ٱلتَّـٰٓئِبُونَ', transliteration: 'al-tāibūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Those who turn in repentance', ur: 'جو لوگ پھیرنا میں repentance' } },
      { id: '9:112:2', arabic: 'ٱلْعَـٰبِدُونَ', transliteration: 'l-ʿābidūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who worship', ur: 'جو لوگ عبادت کرنا' } },
      { id: '9:112:3', arabic: 'ٱلْحَـٰمِدُونَ', transliteration: 'l-ḥāmidūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who praise', ur: 'جو لوگ praise' } },
      { id: '9:112:4', arabic: 'ٱلسَّـٰٓئِحُونَ', transliteration: 'l-sāiḥūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who go out', ur: 'جو لوگ جانا out' } },
      { id: '9:112:5', arabic: 'ٱلرَّٰكِعُونَ', transliteration: 'l-rākiʿūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who bow down', ur: 'جو لوگ bow down' } },
      { id: '9:112:6', arabic: 'ٱلسَّـٰجِدُونَ', transliteration: 'l-sājidūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who prostrate', ur: 'جو لوگ prostrate' } },
      { id: '9:112:7', arabic: 'ٱلْـَٔامِرُونَ', transliteration: 'l-āmirūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who enjoin', ur: 'جو لوگ enjoin' } },
      { id: '9:112:8', arabic: 'بِٱلْمَعْرُوفِ', transliteration: 'bil-maʿrūfi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'the right', ur: ' حق' } },
      { id: '9:112:9', arabic: 'وَٱلنَّاهُونَ', transliteration: 'wal-nāhūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and those who forbid', ur: 'اور جو لوگ forbid' } },
      { id: '9:112:10', arabic: 'عَنِ', transliteration: 'ʿani', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[on]', ur: '[پر]' } },
      { id: '9:112:11', arabic: 'ٱلْمُنكَرِ', transliteration: 'l-munkari', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the wrong', ur: ' غلط' } },
      { id: '9:112:12', arabic: 'وَٱلْحَـٰفِظُونَ', transliteration: 'wal-ḥāfiẓūna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and those who observe', ur: 'اور جو لوگ observe' } },
      { id: '9:112:13', arabic: 'لِحُدُودِ', transliteration: 'liḥudūdi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '(the) limits', ur: '() limits' } },
      { id: '9:112:14', arabic: 'ٱللَّهِ ۗ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:112:15', arabic: 'وَبَشِّرِ', transliteration: 'wabashiri', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And give glad tidings', ur: 'اور دینا glad tidings' } },
      { id: '9:112:16', arabic: 'ٱلْمُؤْمِنِينَ', transliteration: 'l-mu\'minīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) the believers', ur: '(کو/تک)  مومنین' } }
    ],
    structure: { relationships: [] }
  },
  113: {
    text: 'مَا كَانَ لِلنَّبِىِّ وَٱلَّذِينَ ءَامَنُوٓا۟ أَن يَسْتَغْفِرُوا۟ لِلْمُشْرِكِينَ وَلَوْ كَانُوٓا۟ أُو۟لِى قُرْبَىٰ مِنۢ بَعْدِ مَا تَبَيَّنَ لَهُمْ أَنَّهُمْ أَصْحَٰبُ ٱلْجَحِيمِ',
    translation: {
      en: 'It is not for the Prophet and those who have believed to ask forgiveness for the polytheists, even if they were relatives, after it has become clear to them that they are companions of Hellfire.',
      ur: 'پیغمبر اور مسلمانوں کو شایاں نہیں کہ جب ان پر ظاہر ہوگیا کہ مشرک اہل دوزخ ہیں۔ تو ان کے لیے بخشش مانگیں گو وہ ان کے قرابت دار ہی ہوں'
    },
    words: [
      { id: '9:113:1', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '9:113:2', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: '(it) is', ur: '(it) ہے' } },
      { id: '9:113:3', arabic: 'لِلنَّبِىِّ', transliteration: 'lilnnabiyyi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for the Prophet', ur: 'کے لیے  نبی' } },
      { id: '9:113:4', arabic: 'وَٱلَّذِينَ', transliteration: 'wa-alladhīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and those who', ur: 'اور جو لوگ' } },
      { id: '9:113:5', arabic: 'ءَامَنُوٓا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '9:113:6', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:113:7', arabic: 'يَسْتَغْفِرُوا۟', transliteration: 'yastaghfirū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they ask forgiveness', ur: 'وہ پوچھنا/مانگنا forgiveness' } },
      { id: '9:113:8', arabic: 'لِلْمُشْرِكِينَ', transliteration: 'lil\'mush\'rikīna', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for the polytheists', ur: 'کے لیے  polytheists' } },
      { id: '9:113:9', arabic: 'وَلَوْ', transliteration: 'walaw', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'even though', ur: 'even though' } },
      { id: '9:113:10', arabic: 'كَانُوٓا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they be', ur: 'وہ be' } },
      { id: '9:113:11', arabic: 'أُو۟لِى', transliteration: 'ulī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'near of kin', ur: 'قریب کا kin' } },
      { id: '9:113:12', arabic: 'قُرْبَىٰ', transliteration: 'qur\'bā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'near of kin', ur: 'قریب کا kin' } },
      { id: '9:113:13', arabic: 'مِنۢ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:113:14', arabic: 'بَعْدِ', transliteration: 'baʿdi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:113:15', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '[what]', ur: '[کیا/جو]' } },
      { id: '9:113:16', arabic: 'تَبَيَّنَ', transliteration: 'tabayyana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'has become clear', ur: 'رکھتا ہے become واضح' } },
      { id: '9:113:17', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:113:18', arabic: 'أَنَّهُمْ', transliteration: 'annahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'that they', ur: 'کہ وہ' } },
      { id: '9:113:19', arabic: 'أَصْحَـٰبُ', transliteration: 'aṣḥābu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: '(are the) companions', ur: '(ہیں ) companions' } },
      { id: '9:113:20', arabic: 'ٱلْجَحِيمِ', transliteration: 'l-jaḥīmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Hellfire', ur: '(کا)  Hellfire' } }
    ],
    structure: { relationships: [] }
  },
  114: {
    text: 'وَمَا كَانَ ٱسْتِغْفَارُ إِبْرَٰهِيمَ لِأَبِيهِ إِلَّا عَن مَّوْعِدَةٍۢ وَعَدَهَآ إِيَّاهُ فَلَمَّا تَبَيَّنَ لَهُۥٓ أَنَّهُۥ عَدُوٌّۭ لِّلَّهِ تَبَرَّأَ مِنْهُ ۚ إِنَّ إِبْرَٰهِيمَ لَأَوَّٰهٌ حَلِيمٌۭ',
    translation: {
      en: 'And the request of forgiveness of Abraham for his father was only because of a promise he had made to him. But when it became apparent to Abraham that his father was an enemy to Allah, he disassociated himself from him. Indeed was Abraham compassionate and patient.',
      ur: 'اور ابراہیم کا اپنے باپ کے لیے بخشش مانگنا تو ایک وعدے کا سبب تھا جو وہ اس سے کر چکے تھے۔ لیکن جب ان کو معلوم ہوگیا کہ وہ خدا کا دشمن ہے تو اس سے بیزار ہوگئے۔ کچھ شک نہیں کہ ابراہیم بڑے نرم دل اور متحمل تھے'
    },
    words: [
      { id: '9:114:1', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:114:2', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'was', ur: 'تھا' } },
      { id: '9:114:3', arabic: 'ٱسْتِغْفَارُ', transliteration: 'is\'tigh\'fāru', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) asking of forgiveness', ur: '() asking کا forgiveness' } },
      { id: '9:114:4', arabic: 'إِبْرَٰهِيمَ', transliteration: 'ib\'rāhīma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(by) Ibrahim', ur: '(کے ذریعے) Ibrahim' } },
      { id: '9:114:5', arabic: 'لِأَبِيهِ', transliteration: 'li-abīhi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'for his father', ur: 'کے لیے اس کا father' } },
      { id: '9:114:6', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:114:7', arabic: 'عَن', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'because', ur: 'because' } },
      { id: '9:114:8', arabic: 'مَّوْعِدَةٍۢ', transliteration: 'mawʿidatin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) a promise', ur: '(کا) ایک وعدہ' } },
      { id: '9:114:9', arabic: 'وَعَدَهَآ', transliteration: 'waʿadahā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'he had promised it', ur: 'وہ رکھتا تھا promised it' } },
      { id: '9:114:10', arabic: 'إِيَّاهُ', transliteration: 'iyyāhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(to) him', ur: '(کو/تک) him' } },
      { id: '9:114:11', arabic: 'فَلَمَّا', transliteration: 'falammā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'But when', ur: 'لیکن جب' } },
      { id: '9:114:12', arabic: 'تَبَيَّنَ', transliteration: 'tabayyana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it became clear', ur: 'it became واضح' } },
      { id: '9:114:13', arabic: 'لَهُۥٓ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to him', ur: 'کو/تک him' } },
      { id: '9:114:14', arabic: 'أَنَّهُۥ', transliteration: 'annahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that he', ur: 'کہ وہ' } },
      { id: '9:114:15', arabic: 'عَدُوٌّۭ', transliteration: 'ʿaduwwun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(was) an enemy', ur: '(تھا) ایک دشمن' } },
      { id: '9:114:16', arabic: 'لِّلَّهِ', transliteration: 'lillahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to Allah', ur: 'کو/تک اللہ' } },
      { id: '9:114:17', arabic: 'تَبَرَّأَ', transliteration: 'tabarra-a', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'he disassociated', ur: 'وہ disassociated' } },
      { id: '9:114:18', arabic: 'مِنْهُ ۚ', transliteration: 'min\'hu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from him', ur: 'سے him' } },
      { id: '9:114:19', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:114:20', arabic: 'إِبْرَٰهِيمَ', transliteration: 'ib\'rāhīma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Ibrahim', ur: 'Ibrahim' } },
      { id: '9:114:21', arabic: 'لَأَوَّٰهٌ', transliteration: 'la-awwāhun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(was) compassionate', ur: '(تھا) compassionate' } },
      { id: '9:114:22', arabic: 'حَلِيمٌۭ', transliteration: 'ḥalīmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'forbearing', ur: 'forbearing' } }
    ],
    structure: { relationships: [{ from: 7, to: 8, label: 'جار + مجرور' }] }
  },
  115: {
    text: 'وَمَا كَانَ ٱللَّهُ لِيُضِلَّ قَوْمًۢا بَعْدَ إِذْ هَدَىٰهُمْ حَتَّىٰ يُبَيِّنَ لَهُم مَّا يَتَّقُونَ ۚ إِنَّ ٱللَّهَ بِكُلِّ شَىْءٍ عَلِيمٌ',
    translation: {
      en: 'And Allah would not let a people stray after He has guided them until He makes clear to them what they should avoid. Indeed, Allah is Knowing of all things.',
      ur: 'اور خدا ایسا نہیں کہ کسی قوم کو ہدایت دینے کے بعد گمراہ کر دے جب تک کہ ان کو وہ چیز نہ بتا دے جس سے وہ پرہیز کریں۔ بےشک خدا ہر چیز سے واقف ہے'
    },
    words: [
      { id: '9:115:1', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:115:2', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'is', ur: 'ہے' } },
      { id: '9:115:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(for) Allah', ur: '(کے لیے) اللہ' } },
      { id: '9:115:4', arabic: 'لِيُضِلَّ', transliteration: 'liyuḍilla', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that He lets go astray', ur: 'کہ وہ lets جانا astray' } },
      { id: '9:115:5', arabic: 'قَوْمًۢا', transliteration: 'qawman', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a people', ur: 'ایک لوگ' } },
      { id: '9:115:6', arabic: 'بَعْدَ', transliteration: 'baʿda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:115:7', arabic: 'إِذْ', transliteration: 'idh', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[when]', ur: '[جب]' } },
      { id: '9:115:8', arabic: 'هَدَىٰهُمْ', transliteration: 'hadāhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He has guided them', ur: 'وہ رکھتا ہے ہدایت دی ان کو' } },
      { id: '9:115:9', arabic: 'حَتَّىٰ', transliteration: 'ḥattā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'until', ur: 'until' } },
      { id: '9:115:10', arabic: 'يُبَيِّنَ', transliteration: 'yubayyina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He makes clear', ur: 'وہ makes واضح' } },
      { id: '9:115:11', arabic: 'لَهُم', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:115:12', arabic: 'مَّا', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'what', ur: 'کیا/جو' } },
      { id: '9:115:13', arabic: 'يَتَّقُونَ ۚ', transliteration: 'yattaqūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they should fear', ur: 'وہ should ڈرنا' } },
      { id: '9:115:14', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:115:15', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:115:16', arabic: 'بِكُلِّ', transliteration: 'bikulli', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '(of) every', ur: '(کا) ہر' } },
      { id: '9:115:17', arabic: 'شَىْءٍ', transliteration: 'shayin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'thing', ur: 'thing' } },
      { id: '9:115:18', arabic: 'عَلِيمٌ', transliteration: 'ʿalīmun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ل م', meaning: { en: '(is) All-Knower', ur: '(ہے) سب-Knower' } }
    ],
    structure: { relationships: [] }
  },
  116: {
    text: 'إِنَّ ٱللَّهَ لَهُۥ مُلْكُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ ۖ يُحْىِۦ وَيُمِيتُ ۚ وَمَا لَكُم مِّن دُونِ ٱللَّهِ مِن وَلِىٍّۢ وَلَا نَصِيرٍۢ',
    translation: {
      en: 'Indeed, to Allah belongs the dominion of the heavens and the earth; He gives life and causes death. And you have not besides Allah any protector or any helper.',
      ur: 'خدا ہی ہے جس کے لیے آسمانوں اور زمینوں کی بادشاہت ہے۔ وہی زندگانی بخشتا ہے (وہی) موت دیتا ہے اور خدا کے سوا تمہارا کوئی دوست اور مددگار نہیں ہے'
    },
    words: [
      { id: '9:116:1', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:116:2', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:116:3', arabic: 'لَهُۥ', transliteration: 'lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to Him (belongs)', ur: 'کو/تک Him (belongs)' } },
      { id: '9:116:4', arabic: 'مُلْكُ', transliteration: 'mul\'ku', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the dominion', ur: ' dominion' } },
      { id: '9:116:5', arabic: 'ٱلسَّمَـٰوَٰتِ', transliteration: 'l-samāwāti', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the heavens', ur: '(کا) آسمانوں' } },
      { id: '9:116:6', arabic: 'وَٱلْأَرْضِ ۖ', transliteration: 'wal-arḍi', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the earth', ur: 'اور زمین' } },
      { id: '9:116:7', arabic: 'يُحْىِۦ', transliteration: 'yuḥ\'yī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'He gives life', ur: 'وہ gives زندگی' } },
      { id: '9:116:8', arabic: 'وَيُمِيتُ ۚ', transliteration: 'wayumītu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'and He causes death', ur: 'اور وہ causes موت' } },
      { id: '9:116:9', arabic: 'وَمَا', transliteration: 'wamā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:116:10', arabic: 'لَكُم', transliteration: 'lakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for you', ur: 'کے لیے تم' } },
      { id: '9:116:11', arabic: 'مِّن', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'besides Allah', ur: 'besides اللہ' } },
      { id: '9:116:12', arabic: 'دُونِ', transliteration: 'dūni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'besides Allah', ur: 'besides اللہ' } },
      { id: '9:116:13', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'besides Allah', ur: 'besides اللہ' } },
      { id: '9:116:14', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'any', ur: 'any' } },
      { id: '9:116:15', arabic: 'وَلِىٍّۢ', transliteration: 'waliyyin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'protector', ur: 'protector' } },
      { id: '9:116:16', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:116:17', arabic: 'نَصِيرٍۢ', transliteration: 'naṣīrin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any helper', ur: 'any helper' } }
    ],
    structure: { relationships: [] }
  },
  117: {
    text: 'لَّقَد تَّابَ ٱللَّهُ عَلَى ٱلنَّبِىِّ وَٱلْمُهَٰجِرِينَ وَٱلْأَنصَارِ ٱلَّذِينَ ٱتَّبَعُوهُ فِى سَاعَةِ ٱلْعُسْرَةِ مِنۢ بَعْدِ مَا كَادَ يَزِيغُ قُلُوبُ فَرِيقٍۢ مِّنْهُمْ ثُمَّ تَابَ عَلَيْهِمْ ۚ إِنَّهُۥ بِهِمْ رَءُوفٌۭ رَّحِيمٌۭ',
    translation: {
      en: 'Allah has already forgiven the Prophet and the Muhajireen and the Ansar who followed him in the hour of difficulty after the hearts of a party of them had almost inclined [to doubt], and then He forgave them. Indeed, He was to them Kind and Merciful.',
      ur: 'بےشک خدا نے پیغمبر پر مہربانی کی اور مہاجرین اور انصار پر جو باوجود اس کے کہ ان میں سے بعضوں کے دل جلد پھر جانے کو تھے۔ مشکل کی گھڑی میں پیغمبر کے ساتھ رہے۔ پھر خدا نے ان پر مہربانی فرمائی۔ بےشک وہ ان پر نہایت شفقت کرنے والا (اور) مہربان ہے'
    },
    words: [
      { id: '9:117:1', arabic: 'لَّقَد', transliteration: 'laqad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Verily', ur: 'Verily' } },
      { id: '9:117:2', arabic: 'تَّابَ', transliteration: 'tāba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah turned (in mercy)', ur: 'اللہ پھیرا (میں رحمت)' } },
      { id: '9:117:3', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah turned (in mercy)', ur: 'اللہ پھیرا (میں رحمت)' } },
      { id: '9:117:4', arabic: 'عَلَى', transliteration: 'ʿalā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:117:5', arabic: 'ٱلنَّبِىِّ', transliteration: 'l-nabiyi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Prophet', ur: ' نبی' } },
      { id: '9:117:6', arabic: 'وَٱلْمُهَـٰجِرِينَ', transliteration: 'wal-muhājirīna', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the emigrants', ur: 'اور  emigrants' } },
      { id: '9:117:7', arabic: 'وَٱلْأَنصَارِ', transliteration: 'wal-anṣāri', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and the helpers', ur: 'اور  helpers' } },
      { id: '9:117:8', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[those] who', ur: '[وہ لوگ] جو' } },
      { id: '9:117:9', arabic: 'ٱتَّبَعُوهُ', transliteration: 'ittabaʿūhu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'followed him', ur: 'پیروی کی him' } },
      { id: '9:117:10', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:117:11', arabic: 'سَاعَةِ', transliteration: 'sāʿati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) hour', ur: '() hour' } },
      { id: '9:117:12', arabic: 'ٱلْعُسْرَةِ', transliteration: 'l-ʿus\'rati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) difficulty', ur: '(کا) difficulty' } },
      { id: '9:117:13', arabic: 'مِنۢ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:117:14', arabic: 'بَعْدِ', transliteration: 'baʿdi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:117:15', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '[what]', ur: '[کیا/جو]' } },
      { id: '9:117:16', arabic: 'كَادَ', transliteration: 'kāda', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'had nearly', ur: 'رکھتا تھا nearly' } },
      { id: '9:117:17', arabic: 'يَزِيغُ', transliteration: 'yazīghu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'deviated', ur: 'deviated' } },
      { id: '9:117:18', arabic: 'قُلُوبُ', transliteration: 'qulūbu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(the) hearts', ur: '() دل' } },
      { id: '9:117:19', arabic: 'فَرِيقٍۢ', transliteration: 'farīqin', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '(of) a party', ur: '(کا) ایک party' } },
      { id: '9:117:20', arabic: 'مِّنْهُمْ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of them', ur: 'کا ان کو' } },
      { id: '9:117:21', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'then', ur: 'پھر' } },
      { id: '9:117:22', arabic: 'تَابَ', transliteration: 'tāba', pos: ['N'], posLabel: 'N', root: 'ت و ب', meaning: { en: 'He turned (in mercy)', ur: 'وہ پھیرا (میں رحمت)' } },
      { id: '9:117:23', arabic: 'عَلَيْهِمْ ۚ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:117:24', arabic: 'إِنَّهُۥ', transliteration: 'innahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed, He', ur: 'بےشک, وہ' } },
      { id: '9:117:25', arabic: 'بِهِمْ', transliteration: 'bihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:117:26', arabic: 'رَءُوفٌۭ', transliteration: 'raūfun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Most Kind', ur: '(ہے) Most Kind' } },
      { id: '9:117:27', arabic: 'رَّحِيمٌۭ', transliteration: 'raḥīmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Most Merciful', ur: 'نہایت مہربان' } }
    ],
    structure: { relationships: [{ from: 4, to: 5, label: 'جار + مجرور' }] }
  },
  118: {
    text: 'وَعَلَى ٱلثَّلَٰثَةِ ٱلَّذِينَ خُلِّفُوا۟ حَتَّىٰٓ إِذَا ضَاقَتْ عَلَيْهِمُ ٱلْأَرْضُ بِمَا رَحُبَتْ وَضَاقَتْ عَلَيْهِمْ أَنفُسُهُمْ وَظَنُّوٓا۟ أَن لَّا مَلْجَأَ مِنَ ٱللَّهِ إِلَّآ إِلَيْهِ ثُمَّ تَابَ عَلَيْهِمْ لِيَتُوبُوٓا۟ ۚ إِنَّ ٱللَّهَ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ',
    translation: {
      en: 'And [He also forgave] the three who were left behind [and regretted their error] to the point that the earth closed in on them in spite of its vastness and their souls confined them and they were certain that there is no refuge from Allah except in Him. Then He turned to them so they could repent. Indeed, Allah is the Accepting of repentance, the Merciful.',
      ur: 'اور ان تینوں پر بھی جن کا معاملہ ملتوی کیا گیا تھا۔ یہاں تک کہ جب اُنہیں زمین باوجود فراخی کے ان پر تنگ ہوگئی اور ان کے جانیں بھی ان پر دوبھر ہوگئیں۔ اور انہوں نے جان لیا کہ خدا (کے ہاتھ) سے خود اس کے سوا کوئی پناہ نہیں۔ پھر خدا نے ان پر مہربانی کی تاکہ توبہ کریں۔ بےشک خدا توبہ قبول کرنے والا مہربان ہے'
    },
    words: [
      { id: '9:118:1', arabic: 'وَعَلَى', transliteration: 'waʿalā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And on', ur: 'اور پر' } },
      { id: '9:118:2', arabic: 'ٱلثَّلَـٰثَةِ', transliteration: 'l-thalāthati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the three', ur: ' three' } },
      { id: '9:118:3', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) those who', ur: '(کا) جو لوگ' } },
      { id: '9:118:4', arabic: 'خُلِّفُوا۟', transliteration: 'khullifū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'were left behind', ur: 'تھے left پیچھے' } },
      { id: '9:118:5', arabic: 'حَتَّىٰٓ', transliteration: 'ḥattā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'until', ur: 'until' } },
      { id: '9:118:6', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:118:7', arabic: 'ضَاقَتْ', transliteration: 'ḍāqat', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(was) straitened', ur: '(تھا) straitened' } },
      { id: '9:118:8', arabic: 'عَلَيْهِمُ', transliteration: 'ʿalayhimu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:118:9', arabic: 'ٱلْأَرْضُ', transliteration: 'l-arḍu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the earth', ur: 'زمین' } },
      { id: '9:118:10', arabic: 'بِمَا', transliteration: 'bimā', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'though', ur: 'though' } },
      { id: '9:118:11', arabic: 'رَحُبَتْ', transliteration: 'raḥubat', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'it was vast', ur: 'it تھا vast' } },
      { id: '9:118:12', arabic: 'وَضَاقَتْ', transliteration: 'waḍāqat', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And (was) straitened', ur: 'اور (تھا) straitened' } },
      { id: '9:118:13', arabic: 'عَلَيْهِمْ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:118:14', arabic: 'أَنفُسُهُمْ', transliteration: 'anfusuhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'their own souls', ur: 'ان کا own souls' } },
      { id: '9:118:15', arabic: 'وَظَنُّوٓا۟', transliteration: 'waẓannū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they were certain', ur: 'اور وہ تھے certain' } },
      { id: '9:118:16', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:118:17', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(there is) no', ur: '(وہاں ہے) نہیں' } },
      { id: '9:118:18', arabic: 'مَلْجَأَ', transliteration: 'malja-a', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'refuge', ur: 'refuge' } },
      { id: '9:118:19', arabic: 'مِنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:118:20', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:118:21', arabic: 'إِلَّآ', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:118:22', arabic: 'إِلَيْهِ', transliteration: 'ilayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to Him', ur: 'کو/تک Him' } },
      { id: '9:118:23', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '9:118:24', arabic: 'تَابَ', transliteration: 'tāba', pos: ['N'], posLabel: 'N', root: 'ت و ب', meaning: { en: 'He turned (in mercy)', ur: 'وہ پھیرا (میں رحمت)' } },
      { id: '9:118:25', arabic: 'عَلَيْهِمْ', transliteration: 'ʿalayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:118:26', arabic: 'لِيَتُوبُوٓا۟ ۚ', transliteration: 'liyatūbū', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that they may repent', ur: 'کہ وہ may توبہ کرنا' } },
      { id: '9:118:27', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:118:28', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:118:29', arabic: 'هُوَ', transliteration: 'huwa', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'He', ur: 'وہ' } },
      { id: '9:118:30', arabic: 'ٱلتَّوَّابُ', transliteration: 'l-tawābu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) the Acceptor of repentance', ur: '(ہے)  Acceptor کا repentance' } },
      { id: '9:118:31', arabic: 'ٱلرَّحِيمُ', transliteration: 'l-raḥīmu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Most Merciful', ur: ' نہایت مہربان' } }
    ],
    structure: { relationships: [] }
  },
  119: {
    text: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَكُونُوا۟ مَعَ ٱلصَّٰدِقِينَ',
    translation: {
      en: 'O you who have believed, fear Allah and be with those who are true.',
      ur: 'اے اہل ایمان! خدا سے ڈرتے رہو اور راست بازوں کے ساتھ رہو'
    },
    words: [
      { id: '9:119:1', arabic: 'يَـٰٓأَيُّهَا', transliteration: 'yāayyuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:119:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:119:3', arabic: 'ءَامَنُوا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:119:4', arabic: 'ٱتَّقُوا۟', transliteration: 'ittaqū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Fear', ur: 'ڈرنا' } },
      { id: '9:119:5', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:119:6', arabic: 'وَكُونُوا۟', transliteration: 'wakūnū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and be', ur: 'اور be' } },
      { id: '9:119:7', arabic: 'مَعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'with', ur: 'ساتھ' } },
      { id: '9:119:8', arabic: 'ٱلصَّـٰدِقِينَ', transliteration: 'l-ṣādiqīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who are truthful', ur: 'جو لوگ ہیں truthful' } }
    ],
    structure: { relationships: [] }
  },
  120: {
    text: 'مَا كَانَ لِأَهْلِ ٱلْمَدِينَةِ وَمَنْ حَوْلَهُم مِّنَ ٱلْأَعْرَابِ أَن يَتَخَلَّفُوا۟ عَن رَّسُولِ ٱللَّهِ وَلَا يَرْغَبُوا۟ بِأَنفُسِهِمْ عَن نَّفْسِهِۦ ۚ ذَٰلِكَ بِأَنَّهُمْ لَا يُصِيبُهُمْ ظَمَأٌۭ وَلَا نَصَبٌۭ وَلَا مَخْمَصَةٌۭ فِى سَبِيلِ ٱللَّهِ وَلَا يَطَـُٔونَ مَوْطِئًۭا يَغِيظُ ٱلْكُفَّارَ وَلَا يَنَالُونَ مِنْ عَدُوٍّۢ نَّيْلًا إِلَّا كُتِبَ لَهُم بِهِۦ عَمَلٌۭ صَٰلِحٌ ۚ إِنَّ ٱللَّهَ لَا يُضِيعُ أَجْرَ ٱلْمُحْسِنِينَ',
    translation: {
      en: 'It was not [proper] for the people of Madinah and those surrounding them of the bedouins that they remain behind after [the departure of] the Messenger of Allah or that they prefer themselves over his self. That is because they are not afflicted by thirst or fatigue or hunger in the cause of Allah, nor do they tread on any ground that enrages the disbelievers, nor do they inflict upon an enemy any infliction but that is registered for them as a righteous deed. Indeed, Allah does not allow to be lost the reward of the doers of good.',
      ur: 'اہل مدینہ کو اور جو ان کے آس پاس دیہاتی رہتے ہیں ان کو شایاں نہ تھا کہ پیغمبر خدا سے پیچھے رہ جائیں اور نہ یہ کہ اپنی جانوں کو ان کی جان سے زیادہ عزیز رکھیں۔ یہ اس لیے کہ انہیں خدا کی راہ میں تکلیف پہنچتی ہے پیاس کی، محنت کی یا بھوک کی یا وہ ایسی جگہ چلتے ہیں کہ کافروں کو غصہ آئے یا دشمنوں سے کوئی چیز لیتے ہیں تو ہر بات پر ان کے لیے عمل نیک لکھا جاتا ہے۔ کچھ شک نہیں کہ خدا نیکو کاروں کا اجر ضائع نہیں کرتا'
    },
    words: [
      { id: '9:120:1', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Not', ur: 'نہیں' } },
      { id: '9:120:2', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'it was', ur: 'it تھا' } },
      { id: '9:120:3', arabic: 'لِأَهْلِ', transliteration: 'li-ahli', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: '(for) the people', ur: '(کے لیے) لوگ' } },
      { id: '9:120:4', arabic: 'ٱلْمَدِينَةِ', transliteration: 'l-madīnati', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of the Madinah', ur: 'کا  Madinah' } },
      { id: '9:120:5', arabic: 'وَمَنْ', transliteration: 'waman', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and who', ur: 'اور جو' } },
      { id: '9:120:6', arabic: 'حَوْلَهُم', transliteration: 'ḥawlahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'were around them', ur: 'تھے around ان کو' } },
      { id: '9:120:7', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:120:8', arabic: 'ٱلْأَعْرَابِ', transliteration: 'l-aʿrābi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the bedouins', ur: ' bedouins' } },
      { id: '9:120:9', arabic: 'أَن', transliteration: 'an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:120:10', arabic: 'يَتَخَلَّفُوا۟', transliteration: 'yatakhallafū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they remain behind', ur: 'وہ remain پیچھے' } },
      { id: '9:120:11', arabic: 'عَن', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'after', ur: 'بعد' } },
      { id: '9:120:12', arabic: 'رَّسُولِ', transliteration: 'rasūli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Messenger', ur: 'رسول' } },
      { id: '9:120:13', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of Allah', ur: 'کا اللہ' } },
      { id: '9:120:14', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:120:15', arabic: 'يَرْغَبُوا۟', transliteration: 'yarghabū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they prefer', ur: 'وہ prefer' } },
      { id: '9:120:16', arabic: 'بِأَنفُسِهِمْ', transliteration: 'bi-anfusihim', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'their lives', ur: 'ان کا lives' } },
      { id: '9:120:17', arabic: 'عَن', transliteration: 'ʿan', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:120:18', arabic: 'نَّفْسِهِۦ ۚ', transliteration: 'nafsihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'his life', ur: 'اس کا زندگی' } },
      { id: '9:120:19', arabic: 'ذَٰلِكَ', transliteration: 'dhālika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'That is', ur: 'کہ ہے' } },
      { id: '9:120:20', arabic: 'بِأَنَّهُمْ', transliteration: 'bi-annahum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'because [they]', ur: 'because [وہ]' } },
      { id: '9:120:21', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(does) not', ur: '(does) نہیں' } },
      { id: '9:120:22', arabic: 'يُصِيبُهُمْ', transliteration: 'yuṣībuhum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'afflict them', ur: 'afflict ان کو' } },
      { id: '9:120:23', arabic: 'ظَمَأٌۭ', transliteration: 'ẓama-on', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'thirst', ur: 'thirst' } },
      { id: '9:120:24', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:120:25', arabic: 'نَصَبٌۭ', transliteration: 'naṣabun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'fatigue', ur: 'fatigue' } },
      { id: '9:120:26', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:120:27', arabic: 'مَخْمَصَةٌۭ', transliteration: 'makhmaṣatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'hunger', ur: 'hunger' } },
      { id: '9:120:28', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:120:29', arabic: 'سَبِيلِ', transliteration: 'sabīli', pos: ['N'], posLabel: 'N', root: 'س ب ل', meaning: { en: '(the) way', ur: '() راستہ' } },
      { id: '9:120:30', arabic: 'ٱللَّهِ', transliteration: 'l-lahi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) Allah', ur: '(کا) اللہ' } },
      { id: '9:120:31', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:120:32', arabic: 'يَطَـُٔونَ', transliteration: 'yaṭaūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they step', ur: 'وہ step' } },
      { id: '9:120:33', arabic: 'مَوْطِئًۭا', transliteration: 'mawṭi-an', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any step', ur: 'any step' } },
      { id: '9:120:34', arabic: 'يَغِيظُ', transliteration: 'yaghīẓu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'that angers', ur: 'کہ angers' } },
      { id: '9:120:35', arabic: 'ٱلْكُفَّارَ', transliteration: 'l-kufāra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the disbelievers', ur: ' کافر' } },
      { id: '9:120:36', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:120:37', arabic: 'يَنَالُونَ', transliteration: 'yanālūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they inflict', ur: 'وہ inflict' } },
      { id: '9:120:38', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'on', ur: 'پر' } },
      { id: '9:120:39', arabic: 'عَدُوٍّۢ', transliteration: 'ʿaduwwin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'an enemy', ur: 'ایک دشمن' } },
      { id: '9:120:40', arabic: 'نَّيْلًا', transliteration: 'naylan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'an infliction', ur: 'ایک infliction' } },
      { id: '9:120:41', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:120:42', arabic: 'كُتِبَ', transliteration: 'kutiba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'is recorded', ur: 'ہے recorded' } },
      { id: '9:120:43', arabic: 'لَهُم', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:120:44', arabic: 'بِهِۦ', transliteration: 'bihi', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'in it', ur: 'میں it' } },
      { id: '9:120:45', arabic: 'عَمَلٌۭ', transliteration: 'ʿamalun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(as) a deed', ur: '(as) ایک عمل' } },
      { id: '9:120:46', arabic: 'صَـٰلِحٌ ۚ', transliteration: 'ṣāliḥun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'righteous', ur: 'نیک' } },
      { id: '9:120:47', arabic: 'إِنَّ', transliteration: 'inna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '9:120:48', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:120:49', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: '(does) not', ur: '(does) نہیں' } },
      { id: '9:120:50', arabic: 'يُضِيعُ', transliteration: 'yuḍīʿu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'allow to be lost', ur: 'allow کو/تک be lost' } },
      { id: '9:120:51', arabic: 'أَجْرَ', transliteration: 'ajra', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the reward', ur: ' اجر/ثواب' } },
      { id: '9:120:52', arabic: 'ٱلْمُحْسِنِينَ', transliteration: 'l-muḥ\'sinīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the good-doers', ur: '(کا)  نیکی-doers' } }
    ],
    structure: { relationships: [{ from: 11, to: 12, label: 'جار + مجرور' }, { from: 17, to: 18, label: 'جار + مجرور' }, { from: 21, to: 22, label: 'نفی + فعل' }] }
  },
  121: {
    text: 'وَلَا يُنفِقُونَ نَفَقَةًۭ صَغِيرَةًۭ وَلَا كَبِيرَةًۭ وَلَا يَقْطَعُونَ وَادِيًا إِلَّا كُتِبَ لَهُمْ لِيَجْزِيَهُمُ ٱللَّهُ أَحْسَنَ مَا كَانُوا۟ يَعْمَلُونَ',
    translation: {
      en: 'Nor do they spend an expenditure, small or large, or cross a valley but that it is registered for them that Allah may reward them for the best of what they were doing.',
      ur: 'اور (اسی طرح) جو وہ خرچ کرتے ہیں تھوڑا یا بہت یا کوئی میدان طے کرتے ہیں تو یہ سب کچھ ان کے لیے (اعمال صالحہ) میں لکھ لیا جاتا ہے تاکہ خدا ان کو ان کے اعمال کا بہت اچھا بدلہ دے'
    },
    words: [
      { id: '9:121:1', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:121:2', arabic: 'يُنفِقُونَ', transliteration: 'yunfiqūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they spend', ur: 'وہ خرچ کرنا' } },
      { id: '9:121:3', arabic: 'نَفَقَةًۭ', transliteration: 'nafaqatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any spending', ur: 'any spending' } },
      { id: '9:121:4', arabic: 'صَغِيرَةًۭ', transliteration: 'ṣaghīratan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'small', ur: 'small' } },
      { id: '9:121:5', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:121:6', arabic: 'كَبِيرَةًۭ', transliteration: 'kabīratan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'big', ur: 'big' } },
      { id: '9:121:7', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:121:8', arabic: 'يَقْطَعُونَ', transliteration: 'yaqṭaʿūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they cross', ur: 'وہ cross' } },
      { id: '9:121:9', arabic: 'وَادِيًا', transliteration: 'wādiyan', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'a valley', ur: 'ایک valley' } },
      { id: '9:121:10', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'but', ur: 'لیکن' } },
      { id: '9:121:11', arabic: 'كُتِبَ', transliteration: 'kutiba', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'is recorded', ur: 'ہے recorded' } },
      { id: '9:121:12', arabic: 'لَهُمْ', transliteration: 'lahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'for them', ur: 'کے لیے ان کو' } },
      { id: '9:121:13', arabic: 'لِيَجْزِيَهُمُ', transliteration: 'liyajziyahumu', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that Allah may reward them', ur: 'کہ اللہ may اجر/ثواب ان کو' } },
      { id: '9:121:14', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that Allah may reward them', ur: 'کہ اللہ may اجر/ثواب ان کو' } },
      { id: '9:121:15', arabic: 'أَحْسَنَ', transliteration: 'aḥsana', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the best', ur: ' best' } },
      { id: '9:121:16', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(of) what', ur: '(کا) کیا/جو' } },
      { id: '9:121:17', arabic: 'كَانُوا۟', transliteration: 'kānū', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'they used (to)', ur: 'وہ used (کو/تک)' } },
      { id: '9:121:18', arabic: 'يَعْمَلُونَ', transliteration: 'yaʿmalūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'do', ur: 'کرنا' } }
    ],
    structure: { relationships: [] }
  },
  122: {
    text: '۞ وَمَا كَانَ ٱلْمُؤْمِنُونَ لِيَنفِرُوا۟ كَآفَّةًۭ ۚ فَلَوْلَا نَفَرَ مِن كُلِّ فِرْقَةٍۢ مِّنْهُمْ طَآئِفَةٌۭ لِّيَتَفَقَّهُوا۟ فِى ٱلدِّينِ وَلِيُنذِرُوا۟ قَوْمَهُمْ إِذَا رَجَعُوٓا۟ إِلَيْهِمْ لَعَلَّهُمْ يَحْذَرُونَ',
    translation: {
      en: 'And it is not for the believers to go forth [to battle] all at once. For there should separate from every division of them a group [remaining] to obtain understanding in the religion and warn their people when they return to them that they might be cautious.',
      ur: 'اور یہ تو ہو نہیں سکتا کہ مومن سب کے سب نکل آئیں۔ تو یوں کیوں نہ کیا کہ ہر ایک جماعت میں سے چند اشخاص نکل جاتے تاکہ دین کا (علم سیکھتے اور اس) میں سمجھ پیدا کرتے اور جب اپنی قوم کی طرف واپس آتے تو ان کو ڈر سناتے تاکہ وہ حذر کرتے'
    },
    words: [
      { id: '9:122:1', arabic: '۞ وَمَا', transliteration: 'wamā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '9:122:2', arabic: 'كَانَ', transliteration: 'kāna', pos: ['N'], posLabel: 'N', root: 'ك و ن', meaning: { en: 'is', ur: 'ہے' } },
      { id: '9:122:3', arabic: 'ٱلْمُؤْمِنُونَ', transliteration: 'l-mu\'minūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(for) the believers', ur: '(کے لیے)  مومنین' } },
      { id: '9:122:4', arabic: 'لِيَنفِرُوا۟', transliteration: 'liyanfirū', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'that they go forth', ur: 'کہ وہ جانا forth' } },
      { id: '9:122:5', arabic: 'كَآفَّةًۭ ۚ', transliteration: 'kāffatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'all together', ur: 'سب together' } },
      { id: '9:122:6', arabic: 'فَلَوْلَا', transliteration: 'falawlā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'So if not', ur: 'پس اگر نہیں' } },
      { id: '9:122:7', arabic: 'نَفَرَ', transliteration: 'nafara', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'go forth', ur: 'جانا forth' } },
      { id: '9:122:8', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:122:9', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'every', ur: 'ہر' } },
      { id: '9:122:10', arabic: 'فِرْقَةٍۢ', transliteration: 'fir\'qatin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'group', ur: 'group' } },
      { id: '9:122:11', arabic: 'مِّنْهُمْ', transliteration: 'min\'hum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'among them', ur: 'میں سے ان کو' } },
      { id: '9:122:12', arabic: 'طَآئِفَةٌۭ', transliteration: 'ṭāifatun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a party', ur: 'ایک party' } },
      { id: '9:122:13', arabic: 'لِّيَتَفَقَّهُوا۟', transliteration: 'liyatafaqqahū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that they may obtain understanding', ur: 'کہ وہ may obtain understanding' } },
      { id: '9:122:14', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:122:15', arabic: 'ٱلدِّينِ', transliteration: 'l-dīni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the religion', ur: ' دین' } },
      { id: '9:122:16', arabic: 'وَلِيُنذِرُوا۟', transliteration: 'waliyundhirū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and that they may warn', ur: 'اور کہ وہ may warn' } },
      { id: '9:122:17', arabic: 'قَوْمَهُمْ', transliteration: 'qawmahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their people', ur: 'ان کا لوگ' } },
      { id: '9:122:18', arabic: 'إِذَا', transliteration: 'idhā', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '9:122:19', arabic: 'رَجَعُوٓا۟', transliteration: 'rajaʿū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they return', ur: 'وہ واپس آنا' } },
      { id: '9:122:20', arabic: 'إِلَيْهِمْ', transliteration: 'ilayhim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to them', ur: 'کو/تک ان کو' } },
      { id: '9:122:21', arabic: 'لَعَلَّهُمْ', transliteration: 'laʿallahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'so that they may', ur: 'تاکہ وہ may' } },
      { id: '9:122:22', arabic: 'يَحْذَرُونَ', transliteration: 'yaḥdharūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'beware', ur: 'beware' } }
    ],
    structure: { relationships: [{ from: 8, to: 9, label: 'جار + مجرور' }] }
  },
  123: {
    text: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ قَٰتِلُوا۟ ٱلَّذِينَ يَلُونَكُم مِّنَ ٱلْكُفَّارِ وَلْيَجِدُوا۟ فِيكُمْ غِلْظَةًۭ ۚ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ مَعَ ٱلْمُتَّقِينَ',
    translation: {
      en: 'O you who have believed, fight those adjacent to you of the disbelievers and let them find in you harshness. And know that Allah is with the righteous.',
      ur: 'اے اہلِ ایمان! اپنے نزدیک کے (رہنے والے) کافروں سے جنگ کرو اور چاہیئے کہ وہ تم میں سختی (یعنی محنت وقوت جنگ) معلوم کریں۔ اور جان رکھو کہ خدا پرہیز گاروں کے ساتھ ہے'
    },
    words: [
      { id: '9:123:1', arabic: 'يَـٰٓأَيُّهَا', transliteration: 'yāayyuhā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:123:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:123:3', arabic: 'ءَامَنُوا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'O you who believe', ur: 'اے تم جو ایمان لانا' } },
      { id: '9:123:4', arabic: 'قَـٰتِلُوا۟', transliteration: 'qātilū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Fight', ur: 'لڑنا' } },
      { id: '9:123:5', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:123:6', arabic: 'يَلُونَكُم', transliteration: 'yalūnakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) close to you', ur: '(ہیں) close کو/تک تم' } },
      { id: '9:123:7', arabic: 'مِّنَ', transliteration: 'mina', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'of', ur: 'کا' } },
      { id: '9:123:8', arabic: 'ٱلْكُفَّارِ', transliteration: 'l-kufāri', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the disbelievers', ur: ' کافر' } },
      { id: '9:123:9', arabic: 'وَلْيَجِدُوا۟', transliteration: 'walyajidū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and let them find', ur: 'اور let ان کو find' } },
      { id: '9:123:10', arabic: 'فِيكُمْ', transliteration: 'fīkum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in you', ur: 'میں تم' } },
      { id: '9:123:11', arabic: 'غِلْظَةًۭ ۚ', transliteration: 'ghil\'ẓatan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'harshness', ur: 'harshness' } },
      { id: '9:123:12', arabic: 'وَٱعْلَمُوٓا۟', transliteration: 'wa-iʿ\'lamū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And know', ur: 'اور جاننا' } },
      { id: '9:123:13', arabic: 'أَنَّ', transliteration: 'anna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '9:123:14', arabic: 'ٱللَّهَ', transliteration: 'l-laha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '9:123:15', arabic: 'مَعَ', transliteration: 'maʿa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) with', ur: '(ہے) ساتھ' } },
      { id: '9:123:16', arabic: 'ٱلْمُتَّقِينَ', transliteration: 'l-mutaqīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who fear (Him)', ur: 'جو لوگ ڈرنا (Him)' } }
    ],
    structure: { relationships: [] }
  },
  124: {
    text: 'وَإِذَا مَآ أُنزِلَتْ سُورَةٌۭ فَمِنْهُم مَّن يَقُولُ أَيُّكُمْ زَادَتْهُ هَٰذِهِۦٓ إِيمَٰنًۭا ۚ فَأَمَّا ٱلَّذِينَ ءَامَنُوا۟ فَزَادَتْهُمْ إِيمَٰنًۭا وَهُمْ يَسْتَبْشِرُونَ',
    translation: {
      en: 'And whenever a surah is revealed, there are among the hypocrites those who say, "Which of you has this increased faith?" As for those who believed, it has increased them in faith, while they are rejoicing.',
      ur: 'اور جب کوئی سورت نازل ہوتی ہے تو بعض منافق (استہزاء کرتے اور) پوچھتے کہ اس سورت نے تم میں سے کس کا ایمان زیادہ کیا ہے۔ سو جو ایمان والے ہیں ان کا ایمان تو زیادہ کیا اور وہ خوش ہوتے ہیں'
    },
    words: [
      { id: '9:124:1', arabic: 'وَإِذَا', transliteration: 'wa-idhā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And whenever', ur: 'اور whenever' } },
      { id: '9:124:2', arabic: 'مَآ', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And whenever', ur: 'اور whenever' } },
      { id: '9:124:3', arabic: 'أُنزِلَتْ', transliteration: 'unzilat', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'is revealed', ur: 'ہے نازل کیا' } },
      { id: '9:124:4', arabic: 'سُورَةٌۭ', transliteration: 'sūratun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a Surah', ur: 'ایک Surah' } },
      { id: '9:124:5', arabic: 'فَمِنْهُم', transliteration: 'famin\'hum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'among them', ur: 'میں سے ان کو' } },
      { id: '9:124:6', arabic: 'مَّن', transliteration: 'man', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are some) who', ur: '(ہیں کچھ) جو' } },
      { id: '9:124:7', arabic: 'يَقُولُ', transliteration: 'yaqūlu', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'say', ur: 'کہو' } },
      { id: '9:124:8', arabic: 'أَيُّكُمْ', transliteration: 'ayyukum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'Which of you', ur: 'جو کا تم' } },
      { id: '9:124:9', arabic: 'زَادَتْهُ', transliteration: 'zādathu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(has) increased [it]', ur: '(رکھتا ہے) increased [it]' } },
      { id: '9:124:10', arabic: 'هَـٰذِهِۦٓ', transliteration: 'hādhihi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(by) this', ur: '(کے ذریعے) یہ' } },
      { id: '9:124:11', arabic: 'إِيمَـٰنًۭا ۚ', transliteration: 'īmānan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) faith', ur: '(میں) faith' } },
      { id: '9:124:12', arabic: 'فَأَمَّا', transliteration: 'fa-ammā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'As for', ur: 'As کے لیے' } },
      { id: '9:124:13', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '9:124:14', arabic: 'ءَامَنُوا۟', transliteration: 'āmanū', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'believe', ur: 'ایمان لانا' } },
      { id: '9:124:15', arabic: 'فَزَادَتْهُمْ', transliteration: 'fazādathum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then it has increased them', ur: 'پھر it رکھتا ہے increased ان کو' } },
      { id: '9:124:16', arabic: 'إِيمَـٰنًۭا', transliteration: 'īmānan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) faith', ur: '(میں) faith' } },
      { id: '9:124:17', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'and they', ur: 'اور وہ' } },
      { id: '9:124:18', arabic: 'يَسْتَبْشِرُونَ', transliteration: 'yastabshirūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'rejoice', ur: 'rejoice' } }
    ],
    structure: { relationships: [{ from: 8, to: 12, label: 'عطف' }] }
  },
  125: {
    text: 'وَأَمَّا ٱلَّذِينَ فِى قُلُوبِهِم مَّرَضٌۭ فَزَادَتْهُمْ رِجْسًا إِلَىٰ رِجْسِهِمْ وَمَاتُوا۟ وَهُمْ كَٰفِرُونَ',
    translation: {
      en: 'But as for those in whose hearts is disease, it has [only] increased them in evil [in addition] to their evil. And they will have died while they are disbelievers.',
      ur: 'اور جن کے دلوں میں مرض ہے، ان کے حق میں خبث پر خبث زیادہ کیا اور وہ مرے بھی تو کافر کے کافر'
    },
    words: [
      { id: '9:125:1', arabic: 'وَأَمَّا', transliteration: 'wa-ammā', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: null, meaning: { en: 'But as for', ur: 'لیکن as کے لیے' } },
      { id: '9:125:2', arabic: 'ٱلَّذِينَ', transliteration: 'alladhīna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'those', ur: 'وہ لوگ' } },
      { id: '9:125:3', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'in', ur: 'میں' } },
      { id: '9:125:4', arabic: 'قُلُوبِهِم', transliteration: 'qulūbihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:125:5', arabic: 'مَّرَضٌۭ', transliteration: 'maraḍun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) a disease', ur: '(ہے) ایک disease' } },
      { id: '9:125:6', arabic: 'فَزَادَتْهُمْ', transliteration: 'fazādathum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: '(it) increases them', ur: '(it) increases ان کو' } },
      { id: '9:125:7', arabic: 'رِجْسًا', transliteration: 'rij\'san', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(in) evil', ur: '(میں) برائی' } },
      { id: '9:125:8', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:125:9', arabic: 'رِجْسِهِمْ', transliteration: 'rij\'sihim', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their evil', ur: 'ان کا برائی' } },
      { id: '9:125:10', arabic: 'وَمَاتُوا۟', transliteration: 'wamātū', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And they die', ur: 'اور وہ مرنا' } },
      { id: '9:125:11', arabic: 'وَهُمْ', transliteration: 'wahum', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'while they', ur: 'جبکہ وہ' } },
      { id: '9:125:12', arabic: 'كَـٰفِرُونَ', transliteration: 'kāfirūna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) disbelievers', ur: '(ہیں) کافر' } }
    ],
    structure: { relationships: [{ from: 8, to: 9, label: 'جار + مجرور' }] }
  },
  126: {
    text: 'أَوَلَا يَرَوْنَ أَنَّهُمْ يُفْتَنُونَ فِى كُلِّ عَامٍۢ مَّرَّةً أَوْ مَرَّتَيْنِ ثُمَّ لَا يَتُوبُونَ وَلَا هُمْ يَذَّكَّرُونَ',
    translation: {
      en: 'Do they not see that they are tried every year once or twice but then they do not repent nor do they remember?',
      ur: 'کیا یہ دیکھتے نہیں کہ یہ ہر سال ایک یا دو بار بلا میں پھنسا دیئے جاتے ہیں پھر بھی توبہ نہیں کرتے اور نہ نصیحت پکڑتے ہیں'
    },
    words: [
      { id: '9:126:1', arabic: 'أَوَلَا', transliteration: 'awalā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Do not', ur: 'کرنا نہیں' } },
      { id: '9:126:2', arabic: 'يَرَوْنَ', transliteration: 'yarawna', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they see', ur: 'وہ دیکھنا' } },
      { id: '9:126:3', arabic: 'أَنَّهُمْ', transliteration: 'annahum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'that they', ur: 'کہ وہ' } },
      { id: '9:126:4', arabic: 'يُفْتَنُونَ', transliteration: 'yuf\'tanūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'are tried', ur: 'ہیں tried' } },
      { id: '9:126:5', arabic: 'فِى', transliteration: 'fī', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '[in]', ur: '[میں]' } },
      { id: '9:126:6', arabic: 'كُلِّ', transliteration: 'kulli', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'every', ur: 'ہر' } },
      { id: '9:126:7', arabic: 'عَامٍۢ', transliteration: 'ʿāmin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'year', ur: 'year' } },
      { id: '9:126:8', arabic: 'مَّرَّةً', transliteration: 'marratan', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'once', ur: 'once' } },
      { id: '9:126:9', arabic: 'أَوْ', transliteration: 'aw', pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: 'or', ur: 'یا' } },
      { id: '9:126:10', arabic: 'مَرَّتَيْنِ', transliteration: 'marratayni', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'twice', ur: 'twice' } },
      { id: '9:126:11', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Yet', ur: 'Yet' } },
      { id: '9:126:12', arabic: 'لَا', transliteration: 'lā', pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:126:13', arabic: 'يَتُوبُونَ', transliteration: 'yatūbūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they turn (in repentance)', ur: 'وہ پھیرنا (میں repentance)' } },
      { id: '9:126:14', arabic: 'وَلَا', transliteration: 'walā', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'and not', ur: 'اور نہیں' } },
      { id: '9:126:15', arabic: 'هُمْ', transliteration: 'hum', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'they', ur: 'وہ' } },
      { id: '9:126:16', arabic: 'يَذَّكَّرُونَ', transliteration: 'yadhakkarūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'pay heed', ur: 'pay heed' } }
    ],
    structure: { relationships: [{ from: 12, to: 13, label: 'نفی + فعل' }] }
  },
  127: {
    text: 'وَإِذَا مَآ أُنزِلَتْ سُورَةٌۭ نَّظَرَ بَعْضُهُمْ إِلَىٰ بَعْضٍ هَلْ يَرَىٰكُم مِّنْ أَحَدٍۢ ثُمَّ ٱنصَرَفُوا۟ ۚ صَرَفَ ٱللَّهُ قُلُوبَهُم بِأَنَّهُمْ قَوْمٌۭ لَّا يَفْقَهُونَ',
    translation: {
      en: 'And whenever a surah is revealed, they look at each other, [saying], "Does anyone see you?" and then they dismiss themselves. Allah has dismissed their hearts because they are a people who do not understand.',
      ur: 'اور جب کوئی سورت نازل ہوتی ہے ایک دوسرے کی جانب دیکھنے لگتے ہیں (اور پوچھتے ہیں کہ) بھلا تمہیں کوئی دیکھتا ہے پھر پھر جاتے ہیں۔ خدا نے ان کے دلوں کو پھیر رکھا ہے کیونکہ یہ ایسے لوگ ہیں کہ سمجھ سے کام نہیں لیتے'
    },
    words: [
      { id: '9:127:1', arabic: 'وَإِذَا', transliteration: 'wa-idhā', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And whenever', ur: 'اور whenever' } },
      { id: '9:127:2', arabic: 'مَآ', transliteration: 'mā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'And whenever', ur: 'اور whenever' } },
      { id: '9:127:3', arabic: 'أُنزِلَتْ', transliteration: 'unzilat', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'is revealed', ur: 'ہے نازل کیا' } },
      { id: '9:127:4', arabic: 'سُورَةٌۭ', transliteration: 'sūratun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a Surah', ur: 'ایک Surah' } },
      { id: '9:127:5', arabic: 'نَّظَرَ', transliteration: 'naẓara', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'look', ur: 'look' } },
      { id: '9:127:6', arabic: 'بَعْضُهُمْ', transliteration: 'baʿḍuhum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'some of them', ur: 'کچھ کا ان کو' } },
      { id: '9:127:7', arabic: 'إِلَىٰ', transliteration: 'ilā', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'to', ur: 'کو/تک' } },
      { id: '9:127:8', arabic: 'بَعْضٍ', transliteration: 'baʿḍin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'others', ur: 'others' } },
      { id: '9:127:9', arabic: 'هَلْ', transliteration: 'hal', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Does', ur: 'Does' } },
      { id: '9:127:10', arabic: 'يَرَىٰكُم', transliteration: 'yarākum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'see you', ur: 'دیکھنا تم' } },
      { id: '9:127:11', arabic: 'مِّنْ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'any', ur: 'any' } },
      { id: '9:127:12', arabic: 'أَحَدٍۢ', transliteration: 'aḥadin', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'one', ur: 'one' } },
      { id: '9:127:13', arabic: 'ثُمَّ', transliteration: 'thumma', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Then', ur: 'پھر' } },
      { id: '9:127:14', arabic: 'ٱنصَرَفُوا۟ ۚ', transliteration: 'inṣarafū', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they turn away', ur: 'وہ پھیرنا away' } },
      { id: '9:127:15', arabic: 'صَرَفَ', transliteration: 'ṣarafa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has turned away', ur: 'اللہ رکھتا ہے پھیرا away' } },
      { id: '9:127:16', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Allah has turned away', ur: 'اللہ رکھتا ہے پھیرا away' } },
      { id: '9:127:17', arabic: 'قُلُوبَهُم', transliteration: 'qulūbahum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '9:127:18', arabic: 'بِأَنَّهُمْ', transliteration: 'bi-annahum', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'because they', ur: 'because وہ' } },
      { id: '9:127:19', arabic: 'قَوْمٌۭ', transliteration: 'qawmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(are) a people', ur: '(ہیں) ایک لوگ' } },
      { id: '9:127:20', arabic: 'لَّا', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'not', ur: 'نہیں' } },
      { id: '9:127:21', arabic: 'يَفْقَهُونَ', transliteration: 'yafqahūna', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'they understand', ur: 'وہ understand' } }
    ],
    structure: { relationships: [{ from: 7, to: 8, label: 'جار + مجرور' }] }
  },
  128: {
    text: 'لَقَدْ جَآءَكُمْ رَسُولٌۭ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ حَرِيصٌ عَلَيْكُم بِٱلْمُؤْمِنِينَ رَءُوفٌۭ رَّحِيمٌۭ',
    translation: {
      en: 'There has certainly come to you a Messenger from among yourselves. Grievous to him is what you suffer; [he is] concerned over you and to the believers is kind and merciful.',
      ur: '(لوگو) تمہارے پاس تم ہی میں سے ایک پیغمبر آئے ہیں۔ تمہاری تکلیف ان کو گراں معلوم ہوتی ہے اور تمہاری بھلائی کے خواہش مند ہیں اور مومنوں پر نہایت شفقت کرنے والے (اور) مہربان ہیں'
    },
    words: [
      { id: '9:128:1', arabic: 'لَقَدْ', transliteration: 'laqad', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Certainly', ur: 'یقیناً' } },
      { id: '9:128:2', arabic: 'جَآءَكُمْ', transliteration: 'jāakum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(has) come to you', ur: '(رکھتا ہے) آنا کو/تک تم' } },
      { id: '9:128:3', arabic: 'رَسُولٌۭ', transliteration: 'rasūlun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'a Messenger', ur: 'ایک رسول' } },
      { id: '9:128:4', arabic: 'مِّنْ', transliteration: 'min', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '9:128:5', arabic: 'أَنفُسِكُمْ', transliteration: 'anfusikum', pos: ['V'], posLabel: 'V', root: null, meaning: { en: 'yourselves', ur: 'yourselves' } },
      { id: '9:128:6', arabic: 'عَزِيزٌ', transliteration: 'ʿazīzun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Grievous', ur: 'Grievous' } },
      { id: '9:128:7', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'to him', ur: 'کو/تک him' } },
      { id: '9:128:8', arabic: 'مَا', transliteration: 'mā', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: '(is) what', ur: '(ہے) کیا/جو' } },
      { id: '9:128:9', arabic: 'عَنِتُّمْ', transliteration: 'ʿanittum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'you suffer', ur: 'تم suffer' } },
      { id: '9:128:10', arabic: 'حَرِيصٌ', transliteration: 'ḥarīṣun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(he is) concerned', ur: '(وہ ہے) concerned' } },
      { id: '9:128:11', arabic: 'عَلَيْكُم', transliteration: 'ʿalaykum', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'over you', ur: 'اوپر تم' } },
      { id: '9:128:12', arabic: 'بِٱلْمُؤْمِنِينَ', transliteration: 'bil-mu\'minīna', pos: ['P', 'N'], posLabel: 'P+N', root: null, meaning: { en: 'to the believers', ur: 'کو/تک  مومنین' } },
      { id: '9:128:13', arabic: 'رَءُوفٌۭ', transliteration: 'raūfun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(he is) kind', ur: '(وہ ہے) kind' } },
      { id: '9:128:14', arabic: 'رَّحِيمٌۭ', transliteration: 'raḥīmun', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(and) merciful', ur: '(اور) رحم والا' } }
    ],
    structure: { relationships: [] }
  },
  129: {
    text: 'فَإِن تَوَلَّوْا۟ فَقُلْ حَسْبِىَ ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ',
    translation: {
      en: 'But if they turn away, [O Muhammad], say, "Sufficient for me is Allah; there is no deity except Him. On Him I have relied, and He is the Lord of the Great Throne."',
      ur: 'پھر اگر یہ لوگ پھر جائیں (اور نہ مانیں) تو کہہ دو کہ خدا مجھے کفایت کرتا ہے اس کے سوا کوئی معبود نہیں اسی پر میرا بھروسہ ہے اور وہی عرش عظیم کا مالک ہے'
    },
    words: [
      { id: '9:129:1', arabic: 'فَإِن', transliteration: 'fa-in', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'But if', ur: 'لیکن اگر' } },
      { id: '9:129:2', arabic: 'تَوَلَّوْا۟', transliteration: 'tawallaw', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'they turn away', ur: 'وہ پھیرنا away' } },
      { id: '9:129:3', arabic: 'فَقُلْ', transliteration: 'faqul', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'then say', ur: 'پھر کہو' } },
      { id: '9:129:4', arabic: 'حَسْبِىَ', transliteration: 'ḥasbiya', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Sufficient for me', ur: 'Sufficient کے لیے me' } },
      { id: '9:129:5', arabic: 'ٱللَّهُ', transliteration: 'l-lahu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is) Allah', ur: '(ہے) اللہ' } },
      { id: '9:129:6', arabic: 'لَآ', transliteration: 'lā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(There is) no', ur: '(وہاں ہے) نہیں' } },
      { id: '9:129:7', arabic: 'إِلَـٰهَ', transliteration: 'ilāha', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'god', ur: 'اللہ' } },
      { id: '9:129:8', arabic: 'إِلَّا', transliteration: 'illā', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '9:129:9', arabic: 'هُوَ ۖ', transliteration: 'huwa', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'Him', ur: 'Him' } },
      { id: '9:129:10', arabic: 'عَلَيْهِ', transliteration: 'ʿalayhi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'On Him', ur: 'پر Him' } },
      { id: '9:129:11', arabic: 'تَوَكَّلْتُ ۖ', transliteration: 'tawakkaltu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'I put my trust', ur: 'میں put my trust' } },
      { id: '9:129:12', arabic: 'وَهُوَ', transliteration: 'wahuwa', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: null, meaning: { en: 'And He', ur: 'اور وہ' } },
      { id: '9:129:13', arabic: 'رَبُّ', transliteration: 'rabbu', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(is the) Lord', ur: '(ہے ) رب' } },
      { id: '9:129:14', arabic: 'ٱلْعَرْشِ', transliteration: 'l-ʿarshi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: '(of) the Throne', ur: '(کا)  Throne' } },
      { id: '9:129:15', arabic: 'ٱلْعَظِيمِ', transliteration: 'l-ʿaẓīmi', pos: ['N'], posLabel: 'N', root: null, meaning: { en: 'the Great', ur: ' عظیم' } }
    ],
    structure: { relationships: [] }
  }
};

export const TREEBANK_DATA = SURAH_9_TREEBANK;
export default SURAH_9_TREEBANK;
