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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};

export const TREEBANK_DATA = SURAH_9_TREEBANK;
export default SURAH_9_TREEBANK;
