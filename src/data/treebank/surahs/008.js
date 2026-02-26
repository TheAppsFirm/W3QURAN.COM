/**
 * Surah Al-Anfal (8) - Treebank Data (Ayahs 1-10)
 * The Spoils of War - 75 Ayahs total
 *
 * Theme: Battle of Badr, war ethics, distribution of spoils, trust in Allah
 * Revelation: Madani
 */

const SURAH_8_TREEBANK = {
  1: {
    text: 'يَسْأَلُونَكَ عَنِ الْأَنفَالِ قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ وَأَطِيعُوا اللَّهَ وَرَسُولَهُ إِن كُنتُم مُّؤْمِنِينَ',
    translation: {
      en: 'They ask you about the spoils of war. Say, "The spoils are for Allah and the Messenger." So fear Allah and amend that which is between you, and obey Allah and His Messenger, if you should be believers.',
      ur: 'وہ تم سے مالِ غنیمت کے بارے میں پوچھتے ہیں۔ کہو کہ مالِ غنیمت اللہ اور رسول کا ہے۔ پس اللہ سے ڈرو اور آپس میں اصلاح کرو اور اللہ اور اس کے رسول کی اطاعت کرو اگر تم مومن ہو۔'
    },
    words: [
      { id: '8:1:1', arabic: 'يَسْأَلُونَكَ', transliteration: 'yas\'alunaka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'س أ ل', meaning: { en: 'They ask you', ur: 'وہ تم سے پوچھتے ہیں' } },
      { id: '8:1:2', arabic: 'عَنِ', transliteration: '\'an', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'about', ur: 'کے بارے میں' } },
      { id: '8:1:3', arabic: 'الْأَنفَالِ', transliteration: 'al-anfali', pos: ['N'], posLabel: 'N', root: 'ن ف ل', meaning: { en: 'the spoils of war', ur: 'مالِ غنیمت' } },
      { id: '8:1:4', arabic: 'قُلِ', transliteration: 'qul', pos: ['V'], posLabel: 'V', root: 'ق و ل', meaning: { en: 'Say', ur: 'کہو' } },
      { id: '8:1:5', arabic: 'الْأَنفَالُ', transliteration: 'al-anfalu', pos: ['N'], posLabel: 'N', root: 'ن ف ل', meaning: { en: 'The spoils', ur: 'مالِ غنیمت' } },
      { id: '8:1:6', arabic: 'لِلَّهِ', transliteration: 'lillahi', pos: ['P', 'PN'], posLabel: 'P+PN', root: 'أ ل ه', meaning: { en: 'are for Allah', ur: 'اللہ کے لیے' } },
      { id: '8:1:7', arabic: 'وَالرَّسُولِ', transliteration: 'war-rasuli', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ر س ل', meaning: { en: 'and the Messenger', ur: 'اور رسول کے' } },
      { id: '8:1:8', arabic: 'فَاتَّقُوا', transliteration: 'fat-taqu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'و ق ي', meaning: { en: 'So fear', ur: 'پس ڈرو' } },
      { id: '8:1:9', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ سے' } },
      { id: '8:1:10', arabic: 'وَأَصْلِحُوا', transliteration: 'wa-aslihu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ص ل ح', meaning: { en: 'and amend', ur: 'اور اصلاح کرو' } },
      { id: '8:1:11', arabic: 'ذَاتَ', transliteration: 'dhata', pos: ['N'], posLabel: 'N', root: 'ذ و ت', meaning: { en: 'that which is', ur: 'جو ہے' } },
      { id: '8:1:12', arabic: 'بَيْنِكُمْ', transliteration: 'baynikum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ي ن', meaning: { en: 'between you', ur: 'تمہارے درمیان' } },
      { id: '8:1:13', arabic: 'وَأَطِيعُوا', transliteration: 'wa-ati\'u', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ط و ع', meaning: { en: 'and obey', ur: 'اور اطاعت کرو' } },
      { id: '8:1:14', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کی' } },
      { id: '8:1:15', arabic: 'وَرَسُولَهُ', transliteration: 'wa-rasulahu', pos: ['CONJ', 'N', 'PRON'], posLabel: 'CONJ+N+PRON', root: 'ر س ل', meaning: { en: 'and His Messenger', ur: 'اور اس کے رسول کی' } },
      { id: '8:1:16', arabic: 'إِن', transliteration: 'in', pos: ['COND'], posLabel: 'COND', root: null, meaning: { en: 'if', ur: 'اگر' } },
      { id: '8:1:17', arabic: 'كُنتُم', transliteration: 'kuntum', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'you are', ur: 'تم ہو' } },
      { id: '8:1:18', arabic: 'مُّؤْمِنِينَ', transliteration: 'mu\'minin', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'believers', ur: 'مومن' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'جار + مجرور' },
      { from: 4, to: 8, label: 'عطف' },
      { from: 8, to: 10, label: 'عطف' },
      { from: 10, to: 13, label: 'عطف' },
      { from: 16, to: 17, label: 'شرط + فعل' }
      ],
    },
  },
  2: {
    text: 'إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ',
    translation: {
      en: 'The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith; and upon their Lord they rely.',
      ur: 'مومن تو وہی ہیں کہ جب اللہ کا ذکر کیا جائے تو ان کے دل ڈر جائیں اور جب ان پر اس کی آیات پڑھی جائیں تو ان کا ایمان بڑھ جائے اور وہ اپنے رب پر بھروسا کرتے ہیں۔',
    structure: {
      relationships: [{ from: 7, to: 8, label: 'فعل + فاعل' }, { from: 13, to: 14, label: 'فعل + فاعل' }],
    },
    },
    words: [
      { id: '8:2:1', arabic: 'إِنَّمَا', transliteration: 'innama', pos: ['RES'], posLabel: 'RES', root: null, meaning: { en: 'Only', ur: 'بس' } },
      { id: '8:2:2', arabic: 'الْمُؤْمِنُونَ', transliteration: 'al-mu\'minun', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'the believers', ur: 'مومن' } },
      { id: '8:2:3', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'those who', ur: 'جو لوگ' } },
      { id: '8:2:4', arabic: 'إِذَا', transliteration: 'idha', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'when', ur: 'جب' } },
      { id: '8:2:5', arabic: 'ذُكِرَ', transliteration: 'dhukira', pos: ['V'], posLabel: 'V', root: 'ذ ك ر', meaning: { en: 'is mentioned', ur: 'ذکر کیا جائے' } },
      { id: '8:2:6', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کا' } },
      { id: '8:2:7', arabic: 'وَجِلَتْ', transliteration: 'wajilat', pos: ['V'], posLabel: 'V', root: 'و ج ل', meaning: { en: 'become fearful', ur: 'ڈر جائیں' } },
      { id: '8:2:8', arabic: 'قُلُوبُهُمْ', transliteration: 'qulubuhum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ل ب', meaning: { en: 'their hearts', ur: 'ان کے دل' } },
      { id: '8:2:9', arabic: 'وَإِذَا', transliteration: 'wa-idha', pos: ['CONJ', 'T'], posLabel: 'CONJ+T', root: null, meaning: { en: 'and when', ur: 'اور جب' } },
      { id: '8:2:10', arabic: 'تُلِيَتْ', transliteration: 'tuliyat', pos: ['V'], posLabel: 'V', root: 'ت ل و', meaning: { en: 'are recited', ur: 'پڑھی جائیں' } },
      { id: '8:2:11', arabic: 'عَلَيْهِمْ', transliteration: '\'alayhim', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'to them', ur: 'ان پر' } },
      { id: '8:2:12', arabic: 'آيَاتُهُ', transliteration: 'ayatuhu', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'أ ي ي', meaning: { en: 'His verses', ur: 'اس کی آیات' } },
      { id: '8:2:13', arabic: 'زَادَتْهُمْ', transliteration: 'zadathum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ز ي د', meaning: { en: 'it increases them', ur: 'بڑھا دیتی ہیں انہیں' } },
      { id: '8:2:14', arabic: 'إِيمَانًا', transliteration: 'imanan', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'in faith', ur: 'ایمان میں' } },
      { id: '8:2:15', arabic: 'وَعَلَىٰ', transliteration: 'wa-\'ala', pos: ['CONJ', 'P'], posLabel: 'CONJ+P', root: null, meaning: { en: 'and upon', ur: 'اور پر' } },
      { id: '8:2:16', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'اپنے رب' } },
      { id: '8:2:17', arabic: 'يَتَوَكَّلُونَ', transliteration: 'yatawakkalun', pos: ['V'], posLabel: 'V', root: 'و ك ل', meaning: { en: 'they rely', ur: 'بھروسا کرتے ہیں' } }
    ]
  },
  3: {
    text: 'الَّذِينَ يُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
    translation: {
      en: 'Those who establish prayer and spend out of what We have provided for them.',
      ur: 'جو نماز قائم کرتے ہیں اور جو کچھ ہم نے انہیں دیا ہے اس میں سے خرچ کرتے ہیں۔'
    },
    words: [
      { id: '8:3:1', arabic: 'الَّذِينَ', transliteration: 'alladhina', pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: 'Those who', ur: 'جو لوگ' } },
      { id: '8:3:2', arabic: 'يُقِيمُونَ', transliteration: 'yuqimun', pos: ['V'], posLabel: 'V', root: 'ق و م', meaning: { en: 'establish', ur: 'قائم کرتے ہیں' } },
      { id: '8:3:3', arabic: 'الصَّلَاةَ', transliteration: 'as-salata', pos: ['N'], posLabel: 'N', root: 'ص ل و', meaning: { en: 'the prayer', ur: 'نماز' } },
      { id: '8:3:4', arabic: 'وَمِمَّا', transliteration: 'wa-mimma', pos: ['CONJ', 'P', 'REL'], posLabel: 'CONJ+P+REL', root: null, meaning: { en: 'and from what', ur: 'اور جو کچھ' } },
      { id: '8:3:5', arabic: 'رَزَقْنَاهُمْ', transliteration: 'razaqnahum', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ر ز ق', meaning: { en: 'We have provided them', ur: 'ہم نے انہیں دیا' } },
      { id: '8:3:6', arabic: 'يُنفِقُونَ', transliteration: 'yunfiqun', pos: ['V'], posLabel: 'V', root: 'ن ف ق', meaning: { en: 'they spend', ur: 'خرچ کرتے ہیں' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'موصول + صلة' },
      ],
    },
  },
  4: {
    text: 'أُولَٰئِكَ هُمُ الْمُؤْمِنُونَ حَقًّا لَّهُمْ دَرَجَاتٌ عِندَ رَبِّهِمْ وَمَغْفِرَةٌ وَرِزْقٌ كَرِيمٌ',
    translation: {
      en: 'Those are the true believers. For them are degrees [of high position] with their Lord and forgiveness and noble provision.',
      ur: 'یہی سچے مومن ہیں۔ ان کے لیے ان کے رب کے پاس درجات ہیں اور مغفرت اور عزت والا رزق۔'
    },
    words: [
      { id: '8:4:1', arabic: 'أُولَٰئِكَ', transliteration: 'ula\'ika', pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: 'Those', ur: 'یہی' } },
      { id: '8:4:2', arabic: 'هُمُ', transliteration: 'humu', pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: 'are they', ur: 'ہیں' } },
      { id: '8:4:3', arabic: 'الْمُؤْمِنُونَ', transliteration: 'al-mu\'minun', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'the believers', ur: 'مومن' } },
      { id: '8:4:4', arabic: 'حَقًّا', transliteration: 'haqqan', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'in truth', ur: 'سچے' } },
      { id: '8:4:5', arabic: 'لَّهُمْ', transliteration: 'lahum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'For them', ur: 'ان کے لیے' } },
      { id: '8:4:6', arabic: 'دَرَجَاتٌ', transliteration: 'darajatun', pos: ['N'], posLabel: 'N', root: 'د ر ج', meaning: { en: 'are degrees', ur: 'درجات ہیں' } },
      { id: '8:4:7', arabic: 'عِندَ', transliteration: '\'inda', pos: ['N'], posLabel: 'N', root: 'ع ن د', meaning: { en: 'with', ur: 'پاس' } },
      { id: '8:4:8', arabic: 'رَبِّهِمْ', transliteration: 'rabbihim', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'their Lord', ur: 'ان کے رب کے' } },
      { id: '8:4:9', arabic: 'وَمَغْفِرَةٌ', transliteration: 'wa-maghfiratun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'غ ف ر', meaning: { en: 'and forgiveness', ur: 'اور مغفرت' } },
      { id: '8:4:10', arabic: 'وَرِزْقٌ', transliteration: 'wa-rizqun', pos: ['CONJ', 'N'], posLabel: 'CONJ+N', root: 'ر ز ق', meaning: { en: 'and provision', ur: 'اور رزق' } },
      { id: '8:4:11', arabic: 'كَرِيمٌ', transliteration: 'karimun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ك ر م', meaning: { en: 'noble', ur: 'عزت والا' } }
    ],
    structure: {
      relationships: [
      { from: 10, to: 11, label: 'موصوف + صفت' }
      ],
    },
  },
  5: {
    text: 'كَمَا أَخْرَجَكَ رَبُّكَ مِن بَيْتِكَ بِالْحَقِّ وَإِنَّ فَرِيقًا مِّنَ الْمُؤْمِنِينَ لَكَارِهُونَ',
    translation: {
      en: '[It is] just as when your Lord brought you out of your home [for the battle of Badr] in truth, while indeed, a party among the believers were unwilling.',
      ur: 'جیسا کہ تمہارے رب نے تمہیں تمہارے گھر سے حق کے ساتھ نکالا حالانکہ مومنوں کا ایک گروہ ناپسند کر رہا تھا۔'
    },
    words: [
      { id: '8:5:1', arabic: 'كَمَا', transliteration: 'kama', pos: ['P', 'REL'], posLabel: 'P+REL', root: null, meaning: { en: 'Just as', ur: 'جیسا کہ' } },
      { id: '8:5:2', arabic: 'أَخْرَجَكَ', transliteration: 'akhrajaka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'خ ر ج', meaning: { en: 'brought you out', ur: 'تمہیں نکالا' } },
      { id: '8:5:3', arabic: 'رَبُّكَ', transliteration: 'rabbuka', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'تمہارے رب نے' } },
      { id: '8:5:4', arabic: 'مِن', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '8:5:5', arabic: 'بَيْتِكَ', transliteration: 'baytika', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ب ي ت', meaning: { en: 'your home', ur: 'تمہارے گھر' } },
      { id: '8:5:6', arabic: 'بِالْحَقِّ', transliteration: 'bil-haqqi', pos: ['P', 'N'], posLabel: 'P+N', root: 'ح ق ق', meaning: { en: 'in truth', ur: 'حق کے ساتھ' } },
      { id: '8:5:7', arabic: 'وَإِنَّ', transliteration: 'wa-inna', pos: ['CONJ', 'ACC'], posLabel: 'CONJ+ACC', root: null, meaning: { en: 'while indeed', ur: 'حالانکہ بےشک' } },
      { id: '8:5:8', arabic: 'فَرِيقًا', transliteration: 'fariqan', pos: ['N'], posLabel: 'N', root: 'ف ر ق', meaning: { en: 'a party', ur: 'ایک گروہ' } },
      { id: '8:5:9', arabic: 'مِّنَ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'میں سے' } },
      { id: '8:5:10', arabic: 'الْمُؤْمِنِينَ', transliteration: 'al-mu\'minin', pos: ['N'], posLabel: 'N', root: 'أ م ن', meaning: { en: 'the believers', ur: 'مومنوں کا' } },
      { id: '8:5:11', arabic: 'لَكَارِهُونَ', transliteration: 'la-karihun', pos: ['EMPH', 'N'], posLabel: 'EMPH+N', root: 'ك ر ه', meaning: { en: 'were unwilling', ur: 'ناپسند کرنے والے تھے' } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصول + صلة' },
      ],
    },
  },
  6: {
    text: 'يُجَادِلُونَكَ فِي الْحَقِّ بَعْدَمَا تَبَيَّنَ كَأَنَّمَا يُسَاقُونَ إِلَى الْمَوْتِ وَهُمْ يَنظُرُونَ',
    translation: {
      en: 'Arguing with you concerning the truth after it had become clear, as if they were being driven toward death while they were looking on.',
      ur: 'وہ تم سے حق کے بارے میں جھگڑ رہے تھے اس کے واضح ہو جانے کے بعد، گویا وہ موت کی طرف ہانکے جا رہے تھے اور وہ دیکھ رہے تھے۔'
    },
    words: [
      { id: '8:6:1', arabic: 'يُجَادِلُونَكَ', transliteration: 'yujadilunaka', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج د ل', meaning: { en: 'They argue with you', ur: 'وہ تم سے جھگڑتے ہیں' } },
      { id: '8:6:2', arabic: 'فِي', transliteration: 'fi', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'concerning', ur: 'میں' } },
      { id: '8:6:3', arabic: 'الْحَقِّ', transliteration: 'al-haqqi', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'the truth', ur: 'حق' } },
      { id: '8:6:4', arabic: 'بَعْدَمَا', transliteration: 'ba\'dama', pos: ['N', 'REL'], posLabel: 'N+REL', root: 'ب ع د', meaning: { en: 'after', ur: 'کے بعد' } },
      { id: '8:6:5', arabic: 'تَبَيَّنَ', transliteration: 'tabayyana', pos: ['V'], posLabel: 'V', root: 'ب ي ن', meaning: { en: 'it had become clear', ur: 'واضح ہو گیا' } },
      { id: '8:6:6', arabic: 'كَأَنَّمَا', transliteration: 'ka\'annama', pos: ['P', 'RES'], posLabel: 'P+RES', root: null, meaning: { en: 'as if', ur: 'گویا' } },
      { id: '8:6:7', arabic: 'يُسَاقُونَ', transliteration: 'yusaqun', pos: ['V'], posLabel: 'V', root: 'س و ق', meaning: { en: 'they were being driven', ur: 'وہ ہانکے جا رہے تھے' } },
      { id: '8:6:8', arabic: 'إِلَى', transliteration: 'ila', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'toward', ur: 'کی طرف' } },
      { id: '8:6:9', arabic: 'الْمَوْتِ', transliteration: 'al-mawti', pos: ['N'], posLabel: 'N', root: 'م و ت', meaning: { en: 'death', ur: 'موت' } },
      { id: '8:6:10', arabic: 'وَهُمْ', transliteration: 'wa-hum', pos: ['CONJ', 'PRON'], posLabel: 'CONJ+PRON', root: null, meaning: { en: 'while they', ur: 'اور وہ' } },
      { id: '8:6:11', arabic: 'يَنظُرُونَ', transliteration: 'yanzurun', pos: ['V'], posLabel: 'V', root: 'ن ظ ر', meaning: { en: 'were looking on', ur: 'دیکھ رہے تھے' } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصول + صلة' },
      ],
    },
  },
  7: {
    text: 'وَإِذْ يَعِدُكُمُ اللَّهُ إِحْدَى الطَّائِفَتَيْنِ أَنَّهَا لَكُمْ وَتَوَدُّونَ أَنَّ غَيْرَ ذَاتِ الشَّوْكَةِ تَكُونُ لَكُمْ وَيُرِيدُ اللَّهُ أَن يُحِقَّ الْحَقَّ بِكَلِمَاتِهِ وَيَقْطَعَ دَابِرَ الْكَافِرِينَ',
    translation: {
      en: 'And when Allah promised you one of the two groups - that it would be yours - and you wished that the unarmed one would be yours. But Allah intended to establish the truth by His words and to eliminate the disbelievers.',
      ur: 'اور جب اللہ نے تم سے وعدہ کیا کہ دو گروہوں میں سے ایک تمہارا ہوگا اور تم چاہتے تھے کہ وہ جو بے ہتھیار ہے وہ تمہارا ہو۔ لیکن اللہ چاہتا تھا کہ اپنے کلمات سے حق کو ثابت کرے اور کافروں کی جڑ کاٹ دے۔'
    },
    words: [
      { id: '8:7:1', arabic: 'وَإِذْ', transliteration: 'wa-idh', pos: ['CONJ', 'T'], posLabel: 'CONJ+T', root: null, meaning: { en: 'And when', ur: 'اور جب' } },
      { id: '8:7:2', arabic: 'يَعِدُكُمُ', transliteration: 'ya\'idukumu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'و ع د', meaning: { en: 'promised you', ur: 'تم سے وعدہ کیا' } },
      { id: '8:7:3', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ نے' } },
      { id: '8:7:4', arabic: 'إِحْدَى', transliteration: 'ihda', pos: ['N'], posLabel: 'N', root: 'و ح د', meaning: { en: 'one of', ur: 'ایک' } },
      { id: '8:7:5', arabic: 'الطَّائِفَتَيْنِ', transliteration: 'at-ta\'ifatayni', pos: ['N'], posLabel: 'N', root: 'ط و ف', meaning: { en: 'the two groups', ur: 'دو گروہوں میں سے' } },
      { id: '8:7:6', arabic: 'أَنَّهَا', transliteration: 'annaha', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'that it', ur: 'کہ وہ' } },
      { id: '8:7:7', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'would be yours', ur: 'تمہارا ہوگا' } },
      { id: '8:7:8', arabic: 'وَتَوَدُّونَ', transliteration: 'wa-tawaddun', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'و د د', meaning: { en: 'and you wished', ur: 'اور تم چاہتے تھے' } },
      { id: '8:7:9', arabic: 'أَنَّ', transliteration: 'anna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'that', ur: 'کہ' } },
      { id: '8:7:10', arabic: 'غَيْرَ', transliteration: 'ghayra', pos: ['N'], posLabel: 'N', root: 'غ ي ر', meaning: { en: 'other than', ur: 'غیر' } },
      { id: '8:7:11', arabic: 'ذَاتِ', transliteration: 'dhati', pos: ['N'], posLabel: 'N', root: 'ذ و ت', meaning: { en: 'that of', ur: 'والے' } },
      { id: '8:7:12', arabic: 'الشَّوْكَةِ', transliteration: 'ash-shawkati', pos: ['N'], posLabel: 'N', root: 'ش و ك', meaning: { en: 'the thorns (weapons)', ur: 'ہتھیاروں' } },
      { id: '8:7:13', arabic: 'تَكُونُ', transliteration: 'takun', pos: ['V'], posLabel: 'V', root: 'ك و ن', meaning: { en: 'would be', ur: 'ہو' } },
      { id: '8:7:14', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'yours', ur: 'تمہارا' } },
      { id: '8:7:15', arabic: 'وَيُرِيدُ', transliteration: 'wa-yuridu', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ر و د', meaning: { en: 'But intended', ur: 'لیکن چاہتا تھا' } },
      { id: '8:7:16', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '8:7:17', arabic: 'أَن', transliteration: 'an', pos: ['PART'], posLabel: 'PART', root: null, meaning: { en: 'to', ur: 'کہ' } },
      { id: '8:7:18', arabic: 'يُحِقَّ', transliteration: 'yuhiqqa', pos: ['V'], posLabel: 'V', root: 'ح ق ق', meaning: { en: 'establish', ur: 'ثابت کرے' } },
      { id: '8:7:19', arabic: 'الْحَقَّ', transliteration: 'al-haqqa', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'the truth', ur: 'حق کو' } },
      { id: '8:7:20', arabic: 'بِكَلِمَاتِهِ', transliteration: 'bi-kalimatihi', pos: ['P', 'N', 'PRON'], posLabel: 'P+N+PRON', root: 'ك ل م', meaning: { en: 'by His words', ur: 'اپنے کلمات سے' } },
      { id: '8:7:21', arabic: 'وَيَقْطَعَ', transliteration: 'wa-yaqta\'a', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ق ط ع', meaning: { en: 'and to cut off', ur: 'اور کاٹ دے' } },
      { id: '8:7:22', arabic: 'دَابِرَ', transliteration: 'dabira', pos: ['N'], posLabel: 'N', root: 'د ب ر', meaning: { en: 'the roots of', ur: 'جڑ' } },
      { id: '8:7:23', arabic: 'الْكَافِرِينَ', transliteration: 'al-kafirin', pos: ['N'], posLabel: 'N', root: 'ك ف ر', meaning: { en: 'the disbelievers', ur: 'کافروں کی' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 8, label: 'عطف' },
      { from: 13, to: 15, label: 'عطف' },
      { from: 18, to: 21, label: 'عطف' }
      ],
    },
  },
  8: {
    text: 'لِيُحِقَّ الْحَقَّ وَيُبْطِلَ الْبَاطِلَ وَلَوْ كَرِهَ الْمُجْرِمُونَ',
    translation: {
      en: 'That He should establish the truth and abolish falsehood, even if the criminals disliked it.',
      ur: 'تاکہ حق کو ثابت کرے اور باطل کو مٹا دے، چاہے مجرموں کو ناگوار ہو۔'
    },
    words: [
      { id: '8:8:1', arabic: 'لِيُحِقَّ', transliteration: 'li-yuhiqqa', pos: ['P', 'V'], posLabel: 'P+V', root: 'ح ق ق', meaning: { en: 'That He should establish', ur: 'تاکہ ثابت کرے' } },
      { id: '8:8:2', arabic: 'الْحَقَّ', transliteration: 'al-haqqa', pos: ['N'], posLabel: 'N', root: 'ح ق ق', meaning: { en: 'the truth', ur: 'حق کو' } },
      { id: '8:8:3', arabic: 'وَيُبْطِلَ', transliteration: 'wa-yubtila', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ب ط ل', meaning: { en: 'and abolish', ur: 'اور مٹا دے' } },
      { id: '8:8:4', arabic: 'الْبَاطِلَ', transliteration: 'al-batila', pos: ['N'], posLabel: 'N', root: 'ب ط ل', meaning: { en: 'the falsehood', ur: 'باطل کو' } },
      { id: '8:8:5', arabic: 'وَلَوْ', transliteration: 'wa-law', pos: ['CONJ', 'COND'], posLabel: 'CONJ+COND', root: null, meaning: { en: 'even if', ur: 'چاہے' } },
      { id: '8:8:6', arabic: 'كَرِهَ', transliteration: 'kariha', pos: ['V'], posLabel: 'V', root: 'ك ر ه', meaning: { en: 'disliked', ur: 'ناگوار ہو' } },
      { id: '8:8:7', arabic: 'الْمُجْرِمُونَ', transliteration: 'al-mujrimun', pos: ['N'], posLabel: 'N', root: 'ج ر م', meaning: { en: 'the criminals', ur: 'مجرموں کو' } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 3, label: 'عطف' },
      { from: 5, to: 6, label: 'شرط + فعل' }
      ],
    },
  },
  9: {
    text: 'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
    translation: {
      en: 'When you asked help of your Lord, and He answered you, "Indeed, I will reinforce you with a thousand of the angels following one another."',
      ur: 'جب تم اپنے رب سے فریاد کر رہے تھے تو اس نے تمہاری سن لی کہ میں تمہیں ایک ہزار فرشتوں سے مدد دوں گا جو ایک کے بعد ایک آئیں گے۔'
    },
    words: [
      { id: '8:9:1', arabic: 'إِذْ', transliteration: 'idh', pos: ['T'], posLabel: 'T', root: null, meaning: { en: 'When', ur: 'جب' } },
      { id: '8:9:2', arabic: 'تَسْتَغِيثُونَ', transliteration: 'tastaghithun', pos: ['V'], posLabel: 'V', root: 'غ و ث', meaning: { en: 'you asked help of', ur: 'تم فریاد کر رہے تھے' } },
      { id: '8:9:3', arabic: 'رَبَّكُمْ', transliteration: 'rabbakum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ر ب ب', meaning: { en: 'your Lord', ur: 'اپنے رب سے' } },
      { id: '8:9:4', arabic: 'فَاسْتَجَابَ', transliteration: 'fas-tajaba', pos: ['CONJ', 'V'], posLabel: 'CONJ+V', root: 'ج و ب', meaning: { en: 'and He answered', ur: 'تو اس نے جواب دیا' } },
      { id: '8:9:5', arabic: 'لَكُمْ', transliteration: 'lakum', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'you', ur: 'تمہیں' } },
      { id: '8:9:6', arabic: 'أَنِّي', transliteration: 'anni', pos: ['ACC', 'PRON'], posLabel: 'ACC+PRON', root: null, meaning: { en: 'Indeed I', ur: 'بےشک میں' } },
      { id: '8:9:7', arabic: 'مُمِدُّكُم', transliteration: 'mumiddukum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'م د د', meaning: { en: 'will reinforce you', ur: 'تمہیں مدد دوں گا' } },
      { id: '8:9:8', arabic: 'بِأَلْفٍ', transliteration: 'bi-alfin', pos: ['P', 'N'], posLabel: 'P+N', root: 'أ ل ف', meaning: { en: 'with a thousand', ur: 'ایک ہزار' } },
      { id: '8:9:9', arabic: 'مِّنَ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'of', ur: 'میں سے' } },
      { id: '8:9:10', arabic: 'الْمَلَائِكَةِ', transliteration: 'al-mala\'ikati', pos: ['N'], posLabel: 'N', root: 'م ل ك', meaning: { en: 'the angels', ur: 'فرشتوں' } },
      { id: '8:9:11', arabic: 'مُرْدِفِينَ', transliteration: 'murdifin', pos: ['N'], posLabel: 'N', root: 'ر د ف', meaning: { en: 'following one another', ur: 'یکے بعد دیگرے آنے والے' } }
    ],
    structure: {
      relationships: [
      { from: 2, to: 4, label: 'عطف' },
      { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  10: {
    text: 'وَمَا جَعَلَهُ اللَّهُ إِلَّا بُشْرَىٰ وَلِتَطْمَئِنَّ بِهِ قُلُوبُكُمْ وَمَا النَّصْرُ إِلَّا مِنْ عِندِ اللَّهِ إِنَّ اللَّهَ عَزِيزٌ حَكِيمٌ',
    translation: {
      en: 'And Allah made it not except as good tidings and so that your hearts would be assured thereby. And victory is not except from Allah. Indeed, Allah is Exalted in Might and Wise.',
      ur: 'اور اللہ نے اسے بشارت کے سوا کچھ نہیں بنایا اور تاکہ تمہارے دل اس سے مطمئن ہو جائیں۔ اور مدد صرف اللہ کی طرف سے ہے۔ بےشک اللہ غالب اور حکمت والا ہے۔'
    },
    words: [
      { id: '8:10:1', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '8:10:2', arabic: 'جَعَلَهُ', transliteration: 'ja\'alahu', pos: ['V', 'PRON'], posLabel: 'V+PRON', root: 'ج ع ل', meaning: { en: 'made it', ur: 'بنایا اسے' } },
      { id: '8:10:3', arabic: 'اللَّهُ', transliteration: 'Allahu', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ نے' } },
      { id: '8:10:4', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '8:10:5', arabic: 'بُشْرَىٰ', transliteration: 'bushra', pos: ['N'], posLabel: 'N', root: 'ب ش ر', meaning: { en: 'as good tidings', ur: 'بشارت' } },
      { id: '8:10:6', arabic: 'وَلِتَطْمَئِنَّ', transliteration: 'wa-li-tatma\'inna', pos: ['CONJ', 'P', 'V'], posLabel: 'CONJ+P+V', root: 'ط م أ ن', meaning: { en: 'and so that would be assured', ur: 'اور تاکہ مطمئن ہوں' } },
      { id: '8:10:7', arabic: 'بِهِ', transliteration: 'bihi', pos: ['P', 'PRON'], posLabel: 'P+PRON', root: null, meaning: { en: 'thereby', ur: 'اس سے' } },
      { id: '8:10:8', arabic: 'قُلُوبُكُمْ', transliteration: 'qulubukum', pos: ['N', 'PRON'], posLabel: 'N+PRON', root: 'ق ل ب', meaning: { en: 'your hearts', ur: 'تمہارے دل' } },
      { id: '8:10:9', arabic: 'وَمَا', transliteration: 'wa-ma', pos: ['CONJ', 'NEG'], posLabel: 'CONJ+NEG', root: null, meaning: { en: 'And not', ur: 'اور نہیں' } },
      { id: '8:10:10', arabic: 'النَّصْرُ', transliteration: 'an-nasru', pos: ['N'], posLabel: 'N', root: 'ن ص ر', meaning: { en: 'the victory', ur: 'مدد' } },
      { id: '8:10:11', arabic: 'إِلَّا', transliteration: 'illa', pos: ['EXC'], posLabel: 'EXC', root: null, meaning: { en: 'except', ur: 'سوائے' } },
      { id: '8:10:12', arabic: 'مِنْ', transliteration: 'min', pos: ['P'], posLabel: 'P', root: null, meaning: { en: 'from', ur: 'سے' } },
      { id: '8:10:13', arabic: 'عِندِ', transliteration: '\'indi', pos: ['N'], posLabel: 'N', root: 'ع ن د', meaning: { en: 'with', ur: 'پاس' } },
      { id: '8:10:14', arabic: 'اللَّهِ', transliteration: 'Allahi', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ کے' } },
      { id: '8:10:15', arabic: 'إِنَّ', transliteration: 'inna', pos: ['ACC'], posLabel: 'ACC', root: null, meaning: { en: 'Indeed', ur: 'بےشک' } },
      { id: '8:10:16', arabic: 'اللَّهَ', transliteration: 'Allaha', pos: ['PN'], posLabel: 'PN', root: 'أ ل ه', meaning: { en: 'Allah', ur: 'اللہ' } },
      { id: '8:10:17', arabic: 'عَزِيزٌ', transliteration: '\'azizun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ع ز ز', meaning: { en: 'is Exalted in Might', ur: 'غالب' } },
      { id: '8:10:18', arabic: 'حَكِيمٌ', transliteration: 'hakimun', pos: ['ADJ'], posLabel: 'ADJ', root: 'ح ك م', meaning: { en: 'Wise', ur: 'حکمت والا' } }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'نفی + فعل' },
      { from: 2, to: 6, label: 'عطف' },
      { from: 12, to: 13, label: 'جار + مجرور' },
      { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },

  11: {
    text: "إِذْ يُغَشِّيكُمُ ٱلنُّعَاسَ أَمَنَةًۭ مِّنْهُ وَيُنَزِّلُ عَلَيْكُم مِّنَ ٱلسَّمَآءِ مَآءًۭ لِّيُطَهِّرَكُم بِهِۦ وَيُذْهِبَ عَنكُمْ رِجْزَ ٱلشَّيْطَـٰنِ وَلِيَرْبِطَ عَلَىٰ قُلُوبِكُمْ وَيُثَبِّتَ بِهِ ٱلْأَقْدَامَ",
    translation: {
      en: "",
      ur: "جب اس نے (تمہاری) تسکین کے لیے اپنی طرف سے تمہیں نیند (کی چادر) اُڑھا دی اور تم پر آسمان سے پانی برسادیا تاکہ تم کو اس سے (نہلا کر) پاک کر دے اور شیطانی نجاست کو تم سے دور کردے۔ اور اس لیے بھی کہ تمہارے دلوں کو مضبوط کردے اور اس سے تمہارے پاؤں جمائے رکھے",
    },
    words: [
      { id: '8:11:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '8:11:2', arabic: "يُغَشِّيكُمُ", transliteration: "yughashīkumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He covered you", ur: "وہ covered تم" } },
      { id: '8:11:3', arabic: "ٱلنُّعَاسَ", transliteration: "l-nuʿāsa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with [the] slumber", ur: "ساتھ [the] slumber" } },
      { id: '8:11:4', arabic: "أَمَنَةًۭ", transliteration: "amanatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a security", ur: "a security" } },
      { id: '8:11:5', arabic: "مِّنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Him", ur: "سے Him" } },
      { id: '8:11:6', arabic: "وَيُنَزِّلُ", transliteration: "wayunazzilu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and sent down", ur: "اور sent down" } },
      { id: '8:11:7', arabic: "عَلَيْكُم", transliteration: "ʿalaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon you", ur: "پر تم" } },
      { id: '8:11:8', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:11:9', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '8:11:10', arabic: "مَآءًۭ", transliteration: "māan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "water", ur: "پانی" } },
      { id: '8:11:11', arabic: "لِّيُطَهِّرَكُم", transliteration: "liyuṭahhirakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that He may purify you", ur: "so وہ وہ may purify تم" } },
      { id: '8:11:12', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '8:11:13', arabic: "وَيُذْهِبَ", transliteration: "wayudh'hiba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and take away", ur: "اور take away" } },
      { id: '8:11:14', arabic: "عَنكُمْ", transliteration: "ʿankum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '8:11:15', arabic: "رِجْزَ", transliteration: "rij'za", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "evil (suggestions)", ur: "برا (suggestions)" } },
      { id: '8:11:16', arabic: "ٱلشَّيْطَـٰنِ", transliteration: "l-shayṭāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Shaitaan", ur: "(of) the Shaitaan" } },
      { id: '8:11:17', arabic: "وَلِيَرْبِطَ", transliteration: "waliyarbiṭa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to strengthen", ur: "اور کو strengthen" } },
      { id: '8:11:18', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[on]", ur: "[پر]" } },
      { id: '8:11:19', arabic: "قُلُوبِكُمْ", transliteration: "qulūbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your hearts", ur: "your hearts" } },
      { id: '8:11:20', arabic: "وَيُثَبِّتَ", transliteration: "wayuthabbita", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and make firm", ur: "اور make firm" } },
      { id: '8:11:21', arabic: "بِهِ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with it", ur: "ساتھ it" } },
      { id: '8:11:22', arabic: "ٱلْأَقْدَامَ", transliteration: "l-aqdāma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your feet", ur: "your feet" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' },
        { from: 18, to: 19, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'جار + مجرور' }
      ],
    },
  },
  12: {
    text: "إِذْ يُوحِى رَبُّكَ إِلَى ٱلْمَلَـٰٓئِكَةِ أَنِّى مَعَكُمْ فَثَبِّتُوا۟ ٱلَّذِينَ ءَامَنُوا۟ ۚ سَأُلْقِى فِى قُلُوبِ ٱلَّذِينَ كَفَرُوا۟ ٱلرُّعْبَ فَٱضْرِبُوا۟ فَوْقَ ٱلْأَعْنَاقِ وَٱضْرِبُوا۟ مِنْهُمْ كُلَّ بَنَانٍۢ",
    translation: {
      en: "",
      ur: "جب تمہارا پروردگار فرشتوں کو ارشاد فرماتا تھا کہ میں تمہارے ساتھ ہوں تم مومنوں کو تسلی دو کہ ثابت قدم رہیں۔ میں ابھی ابھی کافروں کے دلوں میں رعب وہیبت ڈالے دیتا ہوں تو ان کے سر مار (کر) اڑا دو اور ان کا پور پور مار (کر توڑ) دو",
    },
    words: [
      { id: '8:12:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '8:12:2', arabic: "يُوحِى", transliteration: "yūḥī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "inspired", ur: "inspired" } },
      { id: '8:12:3', arabic: "رَبُّكَ", transliteration: "rabbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your Lord", ur: "your رب" } },
      { id: '8:12:4', arabic: "إِلَى", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '8:12:5', arabic: "ٱلْمَلَـٰٓئِكَةِ", transliteration: "l-malāikati", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '8:12:6', arabic: "أَنِّى", transliteration: "annī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "I am", ur: "میں am" } },
      { id: '8:12:7', arabic: "مَعَكُمْ", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '8:12:8', arabic: "فَثَبِّتُوا۟", transliteration: "fathabbitū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so strengthen", ur: "so strengthen" } },
      { id: '8:12:9', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:12:10', arabic: "ءَامَنُوا۟ ۚ", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '8:12:11', arabic: "سَأُلْقِى", transliteration: "sa-ul'qī", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "I will cast", ur: "میں will cast" } },
      { id: '8:12:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:12:13', arabic: "قُلُوبِ", transliteration: "qulūbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) hearts", ur: "(the) hearts" } },
      { id: '8:12:14', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '8:12:15', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieved ", ur: "disbelieved " } },
      { id: '8:12:16', arabic: "ٱلرُّعْبَ", transliteration: "l-ruʿ'ba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the terror", ur: "the terror" } },
      { id: '8:12:17', arabic: "فَٱضْرِبُوا۟", transliteration: "fa-iḍ'ribū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so strike", ur: "so strike" } },
      { id: '8:12:18', arabic: "فَوْقَ", transliteration: "fawqa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "above", ur: "above" } },
      { id: '8:12:19', arabic: "ٱلْأَعْنَاقِ", transliteration: "l-aʿnāqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the necks", ur: "the necks" } },
      { id: '8:12:20', arabic: "وَٱضْرِبُوا۟", transliteration: "wa-iḍ'ribū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and strike", ur: "اور strike" } },
      { id: '8:12:21', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from them", ur: "سے them" } },
      { id: '8:12:22', arabic: "كُلَّ", transliteration: "kulla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '8:12:23', arabic: "بَنَانٍۢ", transliteration: "banānin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "fingertip[s]", ur: "fingertip[s]" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  13: {
    text: "ذَٰلِكَ بِأَنَّهُمْ شَآقُّوا۟ ٱللَّهَ وَرَسُولَهُۥ ۚ وَمَن يُشَاقِقِ ٱللَّهَ وَرَسُولَهُۥ فَإِنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ",
    translation: {
      en: "",
      ur: "یہ (سزا) اس لیے دی گئی کہ انہوں نے خدا اور اس کے رسول کی مخالفت کی۔ اور جو شخص خدا اور اس کے رسول کی مخالفت کرتا ہے تو خدا بھی سخت عذاب دینے والا ہے",
    },
    words: [
      { id: '8:13:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '8:13:2', arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) because they", ur: "(is) because وہ لوگ" } },
      { id: '8:13:3', arabic: "شَآقُّوا۟", transliteration: "shāqqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "opposed", ur: "opposed" } },
      { id: '8:13:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:13:5', arabic: "وَرَسُولَهُۥ ۚ", transliteration: "warasūlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر س ل", meaning: { en: "and His Messenger", ur: "اور His رسول" } },
      { id: '8:13:6', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '8:13:7', arabic: "يُشَاقِقِ", transliteration: "yushāqiqi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "opposes", ur: "opposes" } },
      { id: '8:13:8', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:13:9', arabic: "وَرَسُولَهُۥ", transliteration: "warasūlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر س ل", meaning: { en: "and His Messenger", ur: "اور His رسول" } },
      { id: '8:13:10', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '8:13:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:13:12', arabic: "شَدِيدُ", transliteration: "shadīdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) severe", ur: "(is) severe" } },
      { id: '8:13:13', arabic: "ٱلْعِقَابِ", transliteration: "l-ʿiqābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in [the] penalty", ur: "میں [the] penalty" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  14: {
    text: "ذَٰلِكُمْ فَذُوقُوهُ وَأَنَّ لِلْكَـٰفِرِينَ عَذَابَ ٱلنَّارِ",
    translation: {
      en: "",
      ur: "یہ (مزہ تو یہاں) چکھو اور یہ (جانے رہو) کہ کافروں کے لیے (آخرت میں) دوزخ کا عذاب (بھی تیار) ہے",
    },
    words: [
      { id: '8:14:1', arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That ", ur: "وہ " } },
      { id: '8:14:2', arabic: "فَذُوقُوهُ", transliteration: "fadhūqūhu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So taste it", ur: "So taste it" } },
      { id: '8:14:3', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that", ur: "اور وہ" } },
      { id: '8:14:4', arabic: "لِلْكَـٰفِرِينَ", transliteration: "lil'kāfirīna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for the disbelievers", ur: "for the کافر" } },
      { id: '8:14:5', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is the) punishment", ur: "(is the) عذاب" } },
      { id: '8:14:6', arabic: "ٱلنَّارِ", transliteration: "l-nāri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Fire", ur: "(of) the آگ" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  15: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا لَقِيتُمُ ٱلَّذِينَ كَفَرُوا۟ زَحْفًۭا فَلَا تُوَلُّوهُمُ ٱلْأَدْبَارَ",
    translation: {
      en: "",
      ur: "اے اہل ایمان جب میدان جنگ میں کفار سے تمہار مقابلہ ہو تو ان سے پیٹھ نہ پھیرنا",
    },
    words: [
      { id: '8:15:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '8:15:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '8:15:3', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '8:15:4', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '8:15:5', arabic: "لَقِيتُمُ", transliteration: "laqītumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you meet", ur: "تم meet" } },
      { id: '8:15:6', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:15:7', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:15:8', arabic: "زَحْفًۭا", transliteration: "zaḥfan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "advancing", ur: "advancing" } },
      { id: '8:15:9', arabic: "فَلَا", transliteration: "falā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (do) not", ur: "پھر (do) نہیں" } },
      { id: '8:15:10', arabic: "تُوَلُّوهُمُ", transliteration: "tuwallūhumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turn to them", ur: "turn کو them" } },
      { id: '8:15:11', arabic: "ٱلْأَدْبَارَ", transliteration: "l-adbāra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the backs", ur: "the backs" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' }
      ],
    },
  },
  16: {
    text: "وَمَن يُوَلِّهِمْ يَوْمَئِذٍۢ دُبُرَهُۥٓ إِلَّا مُتَحَرِّفًۭا لِّقِتَالٍ أَوْ مُتَحَيِّزًا إِلَىٰ فِئَةٍۢ فَقَدْ بَآءَ بِغَضَبٍۢ مِّنَ ٱللَّهِ وَمَأْوَىٰهُ جَهَنَّمُ ۖ وَبِئْسَ ٱلْمَصِيرُ",
    translation: {
      en: "",
      ur: "اور جو شخص جنگ کے روز اس صورت کے سوا کہ لڑائی کے لیے کنارے کنارے چلے (یعنی حکمت عملی سے دشمن کو مارے) یا اپنی فوج میں جا ملنا چاہے۔ ان سے پیٹھ پھیرے گا تو (سمجھو کہ) وہ خدا کے غضب میں گرفتار ہوگیا اور اس کا ٹھکانا دوزخ ہے۔ اور وہ بہت ہی بری جگہ ہے",
    },
    words: [
      { id: '8:16:1', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whoever", ur: "اور whoever" } },
      { id: '8:16:2', arabic: "يُوَلِّهِمْ", transliteration: "yuwallihim", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turns to them", ur: "turns کو them" } },
      { id: '8:16:3', arabic: "يَوْمَئِذٍۢ", transliteration: "yawma-idhin", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "that day", ur: "وہ دن" } },
      { id: '8:16:4', arabic: "دُبُرَهُۥٓ", transliteration: "duburahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his back", ur: "his back" } },
      { id: '8:16:5', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '8:16:6', arabic: "مُتَحَرِّفًۭا", transliteration: "mutaḥarrifan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) a strategy", ur: "(as) a strategy" } },
      { id: '8:16:7', arabic: "لِّقِتَالٍ", transliteration: "liqitālin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of war", ur: "of war" } },
      { id: '8:16:8', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '8:16:9', arabic: "مُتَحَيِّزًا", transliteration: "mutaḥayyizan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) join", ur: "(کو) join" } },
      { id: '8:16:10', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '8:16:11', arabic: "فِئَةٍۢ", transliteration: "fi-atin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a group", ur: "a group" } },
      { id: '8:16:12', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "certainly", ur: "certainly" } },
      { id: '8:16:13', arabic: "بَآءَ", transliteration: "bāa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(he has) incurred", ur: "(وہ has) incurred" } },
      { id: '8:16:14', arabic: "بِغَضَبٍۢ", transliteration: "bighaḍabin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "wrath", ur: "wrath" } },
      { id: '8:16:15', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '8:16:16', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:16:17', arabic: "وَمَأْوَىٰهُ", transliteration: "wamawāhu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his abode", ur: "اور his abode" } },
      { id: '8:16:18', arabic: "جَهَنَّمُ ۖ", transliteration: "jahannamu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Hell", ur: "(is) جہنم" } },
      { id: '8:16:19', arabic: "وَبِئْسَ", transliteration: "wabi'sa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "a wretched", ur: "a wretched" } },
      { id: '8:16:20', arabic: "ٱلْمَصِيرُ", transliteration: "l-maṣīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "destination", ur: "destination" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ],
    },
  },
  17: {
    text: "فَلَمْ تَقْتُلُوهُمْ وَلَـٰكِنَّ ٱللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَـٰكِنَّ ٱللَّهَ رَمَىٰ ۚ وَلِيُبْلِىَ ٱلْمُؤْمِنِينَ مِنْهُ بَلَآءً حَسَنًا ۚ إِنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "تم لوگوں نے ان (کفار) کو قتل نہیں کیا بلکہ خدا نے انہیں قتل کیا۔ اور (اے محمدﷺ) جس وقت تم نے کنکریاں پھینکی تھیں تو وہ تم نے نہیں پھینکی تھیں بلکہ الله نے پھینکی تھیں۔ اس سے یہ غرض تھی کہ مومنوں کو اپنے (احسانوں) سے اچھی طرح آزمالے۔ بےشک خدا سنتا جانتا ہے",
    },
    words: [
      { id: '8:17:1', arabic: "فَلَمْ", transliteration: "falam", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '8:17:2', arabic: "تَقْتُلُوهُمْ", transliteration: "taqtulūhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you kill them", ur: "تم kill them" } },
      { id: '8:17:3', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '8:17:4', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:17:5', arabic: "قَتَلَهُمْ ۚ", transliteration: "qatalahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "killed them", ur: "killed them" } },
      { id: '8:17:6', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '8:17:7', arabic: "رَمَيْتَ", transliteration: "ramayta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you threw", ur: "تم threw" } },
      { id: '8:17:8', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '8:17:9', arabic: "رَمَيْتَ", transliteration: "ramayta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you threw", ur: "تم threw" } },
      { id: '8:17:10', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '8:17:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:17:12', arabic: "رَمَىٰ ۚ", transliteration: "ramā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "threw", ur: "threw" } },
      { id: '8:17:13', arabic: "وَلِيُبْلِىَ", transliteration: "waliyub'liya", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that He may test", ur: "اور وہ وہ may test" } },
      { id: '8:17:14', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '8:17:15', arabic: "مِنْهُ", transliteration: "min'hu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from Him", ur: "سے Him" } },
      { id: '8:17:16', arabic: "بَلَآءً", transliteration: "balāan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(with) a trial", ur: "(ساتھ) a trial" } },
      { id: '8:17:17', arabic: "حَسَنًا ۚ", transliteration: "ḥasanan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '8:17:18', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:17:19', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:17:20', arabic: "سَمِيعٌ", transliteration: "samīʿun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) All-Hearing", ur: "(is) سب سننے والا" } },
      { id: '8:17:21', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  18: {
    text: "ذَٰلِكُمْ وَأَنَّ ٱللَّهَ مُوهِنُ كَيْدِ ٱلْكَـٰفِرِينَ",
    translation: {
      en: "",
      ur: "(بات) یہ (ہے) کچھ شک نہیں کہ خدا کافروں کی تدبیر کو کمزور کر دینے والا ہے",
    },
    words: [
      { id: '8:18:1', arabic: "ذَٰلِكُمْ", transliteration: "dhālikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "That (is the case)", ur: "وہ (is the case)" } },
      { id: '8:18:2', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '8:18:3', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah (is)", ur: "اللہ (is)" } },
      { id: '8:18:4', arabic: "مُوهِنُ", transliteration: "mūhinu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "one who makes weak", ur: "one جو makes weak" } },
      { id: '8:18:5', arabic: "كَيْدِ", transliteration: "kaydi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) plan", ur: "(the) plan" } },
      { id: '8:18:6', arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the disbelievers", ur: "(of) the کافر" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  19: {
    text: "إِن تَسْتَفْتِحُوا۟ فَقَدْ جَآءَكُمُ ٱلْفَتْحُ ۖ وَإِن تَنتَهُوا۟ فَهُوَ خَيْرٌۭ لَّكُمْ ۖ وَإِن تَعُودُوا۟ نَعُدْ وَلَن تُغْنِىَ عَنكُمْ فِئَتُكُمْ شَيْـًۭٔا وَلَوْ كَثُرَتْ وَأَنَّ ٱللَّهَ مَعَ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "(کافرو) اگر تم (محمد صلی الله علیہ وآلہ وسلم پر) فتح چاہتے ہو تو تمہارے پاس فتح آچکی۔ (دیکھو) اگر تم (اپنے افعال سے) باز آجاؤ تو تمہارے حق میں بہتر ہے۔ اور اگر پھر (نافرمانی) کرو گے تو ہم بھی پھر تمہیں عذاب کریں گے اور تمہاری جماعت خواہ کتنی ہی کثیر ہو تمہارے کچھ بھی کام نہ آئے گی۔ اور خدا تو مومنوں کے ساتھ ہے",
    },
    words: [
      { id: '8:19:1', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '8:19:2', arabic: "تَسْتَفْتِحُوا۟", transliteration: "tastaftiḥū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you ask for victory", ur: "تم ask for victory" } },
      { id: '8:19:3', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then certainly", ur: "پھر certainly" } },
      { id: '8:19:4', arabic: "جَآءَكُمُ", transliteration: "jāakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "has come to you", ur: "has come کو تم" } },
      { id: '8:19:5', arabic: "ٱلْفَتْحُ ۖ", transliteration: "l-fatḥu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the victory", ur: "the victory" } },
      { id: '8:19:6', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:19:7', arabic: "تَنتَهُوا۟", transliteration: "tantahū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you desist", ur: "تم desist" } },
      { id: '8:19:8', arabic: "فَهُوَ", transliteration: "fahuwa", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then it (is)", ur: "پھر it (is)" } },
      { id: '8:19:9', arabic: "خَيْرٌۭ", transliteration: "khayrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "good", ur: "اچھا" } },
      { id: '8:19:10', arabic: "لَّكُمْ ۖ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '8:19:11', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but if", ur: "لیکن if" } },
      { id: '8:19:12', arabic: "تَعُودُوا۟", transliteration: "taʿūdū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you return", ur: "تم return" } },
      { id: '8:19:13', arabic: "نَعُدْ", transliteration: "naʿud", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We will return (too)", ur: "ہم will return (too)" } },
      { id: '8:19:14', arabic: "وَلَن", transliteration: "walan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And never", ur: "اور never" } },
      { id: '8:19:15', arabic: "تُغْنِىَ", transliteration: "tugh'niya", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will avail", ur: "will avail" } },
      { id: '8:19:16', arabic: "عَنكُمْ", transliteration: "ʿankum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '8:19:17', arabic: "فِئَتُكُمْ", transliteration: "fi-atukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your forces", ur: "your forces" } },
      { id: '8:19:18', arabic: "شَيْـًۭٔا", transliteration: "shayan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '8:19:19', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "even if", ur: "even if" } },
      { id: '8:19:20', arabic: "كَثُرَتْ", transliteration: "kathurat", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(they are) numerous", ur: "(وہ لوگ are) numerous" } },
      { id: '8:19:21', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that", ur: "اور وہ" } },
      { id: '8:19:22', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:19:23', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) with", ur: "(is) ساتھ" } },
      { id: '8:19:24', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  20: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ أَطِيعُوا۟ ٱللَّهَ وَرَسُولَهُۥ وَلَا تَوَلَّوْا۟ عَنْهُ وَأَنتُمْ تَسْمَعُونَ",
    translation: {
      en: "",
      ur: "اے ایمان والو! خدا اور اس کے رسول کے حکم پر چلو اور اس سے روگردانی نہ کرو اور تم سنتے ہو",
    },
    words: [
      { id: '8:20:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '8:20:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '8:20:3', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '8:20:4', arabic: "أَطِيعُوا۟", transliteration: "aṭīʿū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Obey", ur: "Obey" } },
      { id: '8:20:5', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:20:6', arabic: "وَرَسُولَهُۥ", transliteration: "warasūlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر س ل", meaning: { en: "and His Messenger", ur: "اور His رسول" } },
      { id: '8:20:7', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '8:20:8', arabic: "تَوَلَّوْا۟", transliteration: "tawallaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "turn away", ur: "turn away" } },
      { id: '8:20:9', arabic: "عَنْهُ", transliteration: "ʿanhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from him", ur: "سے him" } },
      { id: '8:20:10', arabic: "وَأَنتُمْ", transliteration: "wa-antum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while you", ur: "while تم" } },
      { id: '8:20:11', arabic: "تَسْمَعُونَ", transliteration: "tasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hear", ur: "سننا" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  21: {
    text: "وَلَا تَكُونُوا۟ كَٱلَّذِينَ قَالُوا۟ سَمِعْنَا وَهُمْ لَا يَسْمَعُونَ",
    translation: {
      en: "",
      ur: "اور ان لوگوں جیسے نہ ہونا جو کہتے ہیں کہ ہم نے حکم (خدا) سن لیا مگر (حقیقت میں) نہیں سنتے",
    },
    words: [
      { id: '8:21:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '8:21:2', arabic: "تَكُونُوا۟", transliteration: "takūnū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "be", ur: "be" } },
      { id: '8:21:3', arabic: "كَٱلَّذِينَ", transliteration: "ka-alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like those who", ur: "like جو لوگ" } },
      { id: '8:21:4', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "say", ur: "کہو" } },
      { id: '8:21:5', arabic: "سَمِعْنَا", transliteration: "samiʿ'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "We heard", ur: "ہم heard" } },
      { id: '8:21:6', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '8:21:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '8:21:8', arabic: "يَسْمَعُونَ", transliteration: "yasmaʿūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hear", ur: "سننا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ],
    },
  },
  22: {
    text: "۞ إِنَّ شَرَّ ٱلدَّوَآبِّ عِندَ ٱللَّهِ ٱلصُّمُّ ٱلْبُكْمُ ٱلَّذِينَ لَا يَعْقِلُونَ",
    translation: {
      en: "",
      ur: "کچھ شک نہیں کہ خدا کے نزدیک تمام جانداروں سے بدتر بہرے گونگے ہیں جو کچھ نہیں سمجھتے",
    },
    words: [
      { id: '8:22:1', arabic: "۞ إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:22:2', arabic: "شَرَّ", transliteration: "sharra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "worst", ur: "worst" } },
      { id: '8:22:3', arabic: "ٱلدَّوَآبِّ", transliteration: "l-dawābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the living creatures", ur: "(of) the living creatures" } },
      { id: '8:22:4', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near", ur: "near" } },
      { id: '8:22:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:22:6', arabic: "ٱلصُّمُّ", transliteration: "l-ṣumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the deaf", ur: "(are) the deaf" } },
      { id: '8:22:7', arabic: "ٱلْبُكْمُ", transliteration: "l-buk'mu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the dumb ", ur: "the dumb " } },
      { id: '8:22:8', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:22:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '8:22:10', arabic: "يَعْقِلُونَ", transliteration: "yaʿqilūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "use (their) intellect", ur: "use (their) intellect" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'نفی + فعل' }
      ],
    },
  },
  23: {
    text: "وَلَوْ عَلِمَ ٱللَّهُ فِيهِمْ خَيْرًۭا لَّأَسْمَعَهُمْ ۖ وَلَوْ أَسْمَعَهُمْ لَتَوَلَّوا۟ وَّهُم مُّعْرِضُونَ",
    translation: {
      en: "",
      ur: "اور اگر خدا ان میں نیکی (کا مادہ) دیکھتا تو ان کو سننے کی توفیق بخشتا۔ اور اگر (بغیر صلاحیت ہدایت کے) سماعت دیتا تو وہ منہ پھیر کر بھاگ جاتے",
    },
    words: [
      { id: '8:23:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:23:2', arabic: "عَلِمَ", transliteration: "ʿalima", pos: ['N'], posLabel: 'N', root: "ع ل م", meaning: { en: "(had) known", ur: "(had) known" } },
      { id: '8:23:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:23:4', arabic: "فِيهِمْ", transliteration: "fīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in them", ur: "میں them" } },
      { id: '8:23:5', arabic: "خَيْرًۭا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any good", ur: "any اچھا" } },
      { id: '8:23:6', arabic: "لَّأَسْمَعَهُمْ ۖ", transliteration: "la-asmaʿahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely, He (would) have made them hear", ur: "یقیناً, وہ (would) have made them سننا" } },
      { id: '8:23:7', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:23:8', arabic: "أَسْمَعَهُمْ", transliteration: "asmaʿahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He had made them hear", ur: "وہ had made them سننا" } },
      { id: '8:23:9', arabic: "لَتَوَلَّوا۟", transliteration: "latawallaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely they would have turned away", ur: "یقیناً وہ لوگ would have turned away" } },
      { id: '8:23:10', arabic: "وَّهُم", transliteration: "wahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '8:23:11', arabic: "مُّعْرِضُونَ", transliteration: "muʿ'riḍūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) averse", ur: "(were) averse" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'فعل + فاعل' }
      ],
    },
  },
  24: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱسْتَجِيبُوا۟ لِلَّهِ وَلِلرَّسُولِ إِذَا دَعَاكُمْ لِمَا يُحْيِيكُمْ ۖ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ يَحُولُ بَيْنَ ٱلْمَرْءِ وَقَلْبِهِۦ وَأَنَّهُۥٓ إِلَيْهِ تُحْشَرُونَ",
    translation: {
      en: "",
      ur: "مومنو! خدا اور اس کے رسول کا حکم قبول کرو جب کہ رسول خدا تمہیں ایسے کام کے لیے بلاتے ہیں جو تم کو زندگی (جاوداں) بخشتا ہے۔ اور جان رکھو کہ خدا آدمی اور اس کے دل کے درمیان حامل ہوجاتا ہے اور یہ بھی کہ تم سب اس کے روبرو جمع کیے جاؤ گے",
    },
    words: [
      { id: '8:24:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '8:24:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '8:24:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '8:24:4', arabic: "ٱسْتَجِيبُوا۟", transliteration: "is'tajībū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Respond", ur: "Respond" } },
      { id: '8:24:5', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to Allah", ur: "کو اللہ" } },
      { id: '8:24:6', arabic: "وَلِلرَّسُولِ", transliteration: "walilrrasūli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and His Messenger", ur: "اور His رسول" } },
      { id: '8:24:7', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '8:24:8', arabic: "دَعَاكُمْ", transliteration: "daʿākum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he calls you", ur: "وہ calls تم" } },
      { id: '8:24:9', arabic: "لِمَا", transliteration: "limā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to what", ur: "کو کیا" } },
      { id: '8:24:10', arabic: "يُحْيِيكُمْ ۖ", transliteration: "yuḥ'yīkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "gives you life", ur: "gives تم زندگی" } },
      { id: '8:24:11', arabic: "وَٱعْلَمُوٓا۟", transliteration: "wa-iʿ'lamū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And know", ur: "اور جاننا" } },
      { id: '8:24:12', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '8:24:13', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:24:14', arabic: "يَحُولُ", transliteration: "yaḥūlu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "comes", ur: "comes" } },
      { id: '8:24:15', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) between", ur: "(میں) درمیان" } },
      { id: '8:24:16', arabic: "ٱلْمَرْءِ", transliteration: "l-mari", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a man", ur: "a man" } },
      { id: '8:24:17', arabic: "وَقَلْبِهِۦ", transliteration: "waqalbihi", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and his heart", ur: "اور his دل" } },
      { id: '8:24:18', arabic: "وَأَنَّهُۥٓ", transliteration: "wa-annahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and that", ur: "اور وہ" } },
      { id: '8:24:19', arabic: "إِلَيْهِ", transliteration: "ilayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to Him", ur: "کو Him" } },
      { id: '8:24:20', arabic: "تُحْشَرُونَ", transliteration: "tuḥ'sharūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you will be gathered", ur: "تم will be gathered" } }
    ],
    structure: {
      relationships: [
        { from: 14, to: 15, label: 'فعل + فاعل' }
      ],
    },
  },
  25: {
    text: "وَٱتَّقُوا۟ فِتْنَةًۭ لَّا تُصِيبَنَّ ٱلَّذِينَ ظَلَمُوا۟ مِنكُمْ خَآصَّةًۭ ۖ وَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ شَدِيدُ ٱلْعِقَابِ",
    translation: {
      en: "",
      ur: "اور اس فتنے سے ڈرو جو خصوصیت کے ساتھ انہیں لوگوں پر واقع نہ ہوگا جو تم میں گنہگار ہیں۔ اور جان رکھو کہ خدا سخت عذاب دینے والا ہے",
    },
    words: [
      { id: '8:25:1', arabic: "وَٱتَّقُوا۟", transliteration: "wa-ittaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And fear", ur: "اور ڈرنا" } },
      { id: '8:25:2', arabic: "فِتْنَةًۭ", transliteration: "fit'natan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a trial", ur: "a trial" } },
      { id: '8:25:3', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '8:25:4', arabic: "تُصِيبَنَّ", transliteration: "tuṣībanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "which will afflict", ur: "جو will afflict" } },
      { id: '8:25:5', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:25:6', arabic: "ظَلَمُوا۟", transliteration: "ẓalamū", pos: ['V'], posLabel: 'V', root: "ظ ل م", meaning: { en: "do wrong", ur: "do wrong" } },
      { id: '8:25:7', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '8:25:8', arabic: "خَآصَّةًۭ ۖ", transliteration: "khāṣṣatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "exclusively", ur: "exclusively" } },
      { id: '8:25:9', arabic: "وَٱعْلَمُوٓا۟", transliteration: "wa-iʿ'lamū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And know", ur: "اور جاننا" } },
      { id: '8:25:10', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '8:25:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:25:12', arabic: "شَدِيدُ", transliteration: "shadīdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) severe", ur: "(is) severe" } },
      { id: '8:25:13', arabic: "ٱلْعِقَابِ", transliteration: "l-ʿiqābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the penalty", ur: "(میں) the penalty" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  26: {
    text: "وَٱذْكُرُوٓا۟ إِذْ أَنتُمْ قَلِيلٌۭ مُّسْتَضْعَفُونَ فِى ٱلْأَرْضِ تَخَافُونَ أَن يَتَخَطَّفَكُمُ ٱلنَّاسُ فَـَٔاوَىٰكُمْ وَأَيَّدَكُم بِنَصْرِهِۦ وَرَزَقَكُم مِّنَ ٱلطَّيِّبَـٰتِ لَعَلَّكُمْ تَشْكُرُونَ",
    translation: {
      en: "",
      ur: "اور اس وقت کو یاد کرو جب تم زمین (مکہ) میں قلیل اور ضعیف سمجھے جاتے تھے اور ڈرتے رہتے تھے کہ لوگ تمہیں اُڑا (نہ) لے جائیں (یعنی بےخان وماں نہ کردیں) تو اس نے تم کو جگہ دی اور اپنی مدد سے تم کو تقویت بخشی اور پاکیزہ چیزیں کھانے کو دیں تاکہ (اس کا) شکر کرو",
    },
    words: [
      { id: '8:26:1', arabic: "وَٱذْكُرُوٓا۟", transliteration: "wa-udh'kurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And remember", ur: "اور remember" } },
      { id: '8:26:2', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '8:26:3', arabic: "أَنتُمْ", transliteration: "antum", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '8:26:4', arabic: "قَلِيلٌۭ", transliteration: "qalīlun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(were) few", ur: "(were) few" } },
      { id: '8:26:5', arabic: "مُّسْتَضْعَفُونَ", transliteration: "mus'taḍʿafūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(and) deemed weak", ur: "(اور) deemed weak" } },
      { id: '8:26:6', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:26:7', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '8:26:8', arabic: "تَخَافُونَ", transliteration: "takhāfūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fearing", ur: "fearing" } },
      { id: '8:26:9', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '8:26:10', arabic: "يَتَخَطَّفَكُمُ", transliteration: "yatakhaṭṭafakumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "might do away with you", ur: "might do away ساتھ تم" } },
      { id: '8:26:11', arabic: "ٱلنَّاسُ", transliteration: "l-nāsu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the men", ur: "the men" } },
      { id: '8:26:12', arabic: "فَـَٔاوَىٰكُمْ", transliteration: "faāwākum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then He sheltered you", ur: "پھر وہ sheltered تم" } },
      { id: '8:26:13', arabic: "وَأَيَّدَكُم", transliteration: "wa-ayyadakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and strengthened you", ur: "اور strengthened تم" } },
      { id: '8:26:14', arabic: "بِنَصْرِهِۦ", transliteration: "binaṣrihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with His help", ur: "ساتھ His help" } },
      { id: '8:26:15', arabic: "وَرَزَقَكُم", transliteration: "warazaqakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and provided you", ur: "اور provided تم" } },
      { id: '8:26:16', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '8:26:17', arabic: "ٱلطَّيِّبَـٰتِ", transliteration: "l-ṭayibāti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good things", ur: "the اچھا things" } },
      { id: '8:26:18', arabic: "لَعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '8:26:19', arabic: "تَشْكُرُونَ", transliteration: "tashkurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(be) thankful", ur: "(be) thankful" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  27: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ لَا تَخُونُوا۟ ٱللَّهَ وَٱلرَّسُولَ وَتَخُونُوٓا۟ أَمَـٰنَـٰتِكُمْ وَأَنتُمْ تَعْلَمُونَ",
    translation: {
      en: "",
      ur: "اے ایمان والو! نہ تو خدا اور رسول کی امانت میں خیانت کرو اور نہ اپنی امانتوں میں خیانت کرو اور تم (ان باتوں کو) جانتے ہو",
    },
    words: [
      { id: '8:27:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '8:27:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '8:27:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '8:27:4', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(Do) not", ur: "(Do) نہیں" } },
      { id: '8:27:5', arabic: "تَخُونُوا۟", transliteration: "takhūnū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "betray", ur: "betray" } },
      { id: '8:27:6', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:27:7', arabic: "وَٱلرَّسُولَ", transliteration: "wal-rasūla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the Messenger", ur: "اور the رسول" } },
      { id: '8:27:8', arabic: "وَتَخُونُوٓا۟", transliteration: "watakhūnū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "or betray", ur: "یا betray" } },
      { id: '8:27:9', arabic: "أَمَـٰنَـٰتِكُمْ", transliteration: "amānātikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your trusts", ur: "your trusts" } },
      { id: '8:27:10', arabic: "وَأَنتُمْ", transliteration: "wa-antum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while you", ur: "while تم" } },
      { id: '8:27:11', arabic: "تَعْلَمُونَ", transliteration: "taʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  28: {
    text: "وَٱعْلَمُوٓا۟ أَنَّمَآ أَمْوَٰلُكُمْ وَأَوْلَـٰدُكُمْ فِتْنَةٌۭ وَأَنَّ ٱللَّهَ عِندَهُۥٓ أَجْرٌ عَظِيمٌۭ",
    translation: {
      en: "",
      ur: "اور جان رکھو کہ تمہارا مال اور اولاد بڑی آزمائش ہے اور یہ کہ خدا کے پاس (نیکیوں کا) بڑا ثواب ہے",
    },
    words: [
      { id: '8:28:1', arabic: "وَٱعْلَمُوٓا۟", transliteration: "wa-iʿ'lamū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And know", ur: "اور جاننا" } },
      { id: '8:28:2', arabic: "أَنَّمَآ", transliteration: "annamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '8:28:3', arabic: "أَمْوَٰلُكُمْ", transliteration: "amwālukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your wealth", ur: "your wealth" } },
      { id: '8:28:4', arabic: "وَأَوْلَـٰدُكُمْ", transliteration: "wa-awlādukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your children", ur: "اور your اولاد" } },
      { id: '8:28:5', arabic: "فِتْنَةٌۭ", transliteration: "fit'natun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a trial", ur: "(are) a trial" } },
      { id: '8:28:6', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And that", ur: "اور وہ" } },
      { id: '8:28:7', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah ", ur: "اللہ " } },
      { id: '8:28:8', arabic: "عِندَهُۥٓ", transliteration: "ʿindahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with Him", ur: "ساتھ Him" } },
      { id: '8:28:9', arabic: "أَجْرٌ", transliteration: "ajrun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a reward", ur: "(is) a ثواب" } },
      { id: '8:28:10', arabic: "عَظِيمٌۭ", transliteration: "ʿaẓīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  29: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِن تَتَّقُوا۟ ٱللَّهَ يَجْعَل لَّكُمْ فُرْقَانًۭا وَيُكَفِّرْ عَنكُمْ سَيِّـَٔاتِكُمْ وَيَغْفِرْ لَكُمْ ۗ وَٱللَّهُ ذُو ٱلْفَضْلِ ٱلْعَظِيمِ",
    translation: {
      en: "",
      ur: "مومنو! اگر تم خدا سے ڈرو گے تو وہ تمہارے لیے امر فارق پیدا کردے گا (یعنی تم کو ممتاز کردے گا) تو وہ تمہارے گناہ مٹادے گا اور تمہیں بخش دے گا۔ اور خدا بڑا فضل والا ہے",
    },
    words: [
      { id: '8:29:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '8:29:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '8:29:3', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '8:29:4', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '8:29:5', arabic: "تَتَّقُوا۟", transliteration: "tattaqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear", ur: "تم ڈرنا" } },
      { id: '8:29:6', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:29:7', arabic: "يَجْعَل", transliteration: "yajʿal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will grant", ur: "وہ will grant" } },
      { id: '8:29:8', arabic: "لَّكُمْ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '8:29:9', arabic: "فُرْقَانًۭا", transliteration: "fur'qānan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a criterion", ur: "a criterion" } },
      { id: '8:29:10', arabic: "وَيُكَفِّرْ", transliteration: "wayukaffir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and will remove", ur: "اور will remove" } },
      { id: '8:29:11', arabic: "عَنكُمْ", transliteration: "ʿankum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '8:29:12', arabic: "سَيِّـَٔاتِكُمْ", transliteration: "sayyiātikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your evil deeds", ur: "your برا deeds" } },
      { id: '8:29:13', arabic: "وَيَغْفِرْ", transliteration: "wayaghfir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and forgive", ur: "اور forgive" } },
      { id: '8:29:14', arabic: "لَكُمْ ۗ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '8:29:15', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:29:16', arabic: "ذُو", transliteration: "dhū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Possessor", ur: "(is) the Possessor" } },
      { id: '8:29:17', arabic: "ٱلْفَضْلِ", transliteration: "l-faḍli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Bounty", ur: "(of) Bounty" } },
      { id: '8:29:18', arabic: "ٱلْعَظِيمِ", transliteration: "l-ʿaẓīmi", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "the Great", ur: "the Great" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'موصوف + صفت' }
      ],
    },
  },
  30: {
    text: "وَإِذْ يَمْكُرُ بِكَ ٱلَّذِينَ كَفَرُوا۟ لِيُثْبِتُوكَ أَوْ يَقْتُلُوكَ أَوْ يُخْرِجُوكَ ۚ وَيَمْكُرُونَ وَيَمْكُرُ ٱللَّهُ ۖ وَٱللَّهُ خَيْرُ ٱلْمَـٰكِرِينَ",
    translation: {
      en: "",
      ur: "اور (اے محمدﷺ اس وقت کو یاد کرو) جب کافر لوگ تمہارے بارے میں چال چل رہے تھے کہ تم کو قید کر دیں یا جان سے مار ڈالیں یا (وطن سے) نکال دیں تو (ادھر تو) وہ چال چل رہے تھے اور (اُدھر) خدا چال چل رہا تھا۔ اور خدا سب سے بہتر چال چلنے والا ہے",
    },
    words: [
      { id: '8:30:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '8:30:2', arabic: "يَمْكُرُ", transliteration: "yamkuru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "plotted", ur: "plotted" } },
      { id: '8:30:3', arabic: "بِكَ", transliteration: "bika", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "against you", ur: "against تم" } },
      { id: '8:30:4', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:30:5', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "disbelieved", ur: "disbelieved" } },
      { id: '8:30:6', arabic: "لِيُثْبِتُوكَ", transliteration: "liyuth'bitūka", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that they restrain you", ur: "وہ وہ لوگ restrain تم" } },
      { id: '8:30:7', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '8:30:8', arabic: "يَقْتُلُوكَ", transliteration: "yaqtulūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "kill you", ur: "kill تم" } },
      { id: '8:30:9', arabic: "أَوْ", transliteration: "aw", pos: ['CONJ'], posLabel: 'CONJ', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '8:30:10', arabic: "يُخْرِجُوكَ ۚ", transliteration: "yukh'rijūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "drive you out", ur: "drive تم out" } },
      { id: '8:30:11', arabic: "وَيَمْكُرُونَ", transliteration: "wayamkurūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And they were planning", ur: "اور وہ لوگ were planning" } },
      { id: '8:30:12', arabic: "وَيَمْكُرُ", transliteration: "wayamkuru", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (also) was planning", ur: "اور (also) was planning" } },
      { id: '8:30:13', arabic: "ٱللَّهُ ۖ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:30:14', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:30:15', arabic: "خَيْرُ", transliteration: "khayru", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is (the) Best", ur: "is (the) Best" } },
      { id: '8:30:16', arabic: "ٱلْمَـٰكِرِينَ", transliteration: "l-mākirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Planners", ur: "(of) the Planners" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' }
      ],
    },
  },
  31: {
    text: "وَإِذَا تُتْلَىٰ عَلَيْهِمْ ءَايَـٰتُنَا قَالُوا۟ قَدْ سَمِعْنَا لَوْ نَشَآءُ لَقُلْنَا مِثْلَ هَـٰذَآ ۙ إِنْ هَـٰذَآ إِلَّآ أَسَـٰطِيرُ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "اور جب ان کو ہماری آیتیں پڑھ کر سنائی جاتی ہیں تو کہتے ہیں (یہ کلام) ہم نے سن لیا ہے اگر ہم چاہیں تو اسی طرح کا (کلام) ہم بھی کہہ دیں اور یہ ہے ہی کیا صرف اگلے لوگوں کی حکایتیں ہیں",
    },
    words: [
      { id: '8:31:1', arabic: "وَإِذَا", transliteration: "wa-idhā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '8:31:2', arabic: "تُتْلَىٰ", transliteration: "tut'lā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "are recited", ur: "are recited" } },
      { id: '8:31:3', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '8:31:4', arabic: "ءَايَـٰتُنَا", transliteration: "āyātunā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our Verses", ur: "Our Verses" } },
      { id: '8:31:5', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they say", ur: "وہ لوگ کہو" } },
      { id: '8:31:6', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Verily", ur: "بیشک" } },
      { id: '8:31:7', arabic: "سَمِعْنَا", transliteration: "samiʿ'nā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we have heard", ur: "ہم have heard" } },
      { id: '8:31:8', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '8:31:9', arabic: "نَشَآءُ", transliteration: "nashāu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "we wish", ur: "ہم wish" } },
      { id: '8:31:10', arabic: "لَقُلْنَا", transliteration: "laqul'nā", pos: ['N'], posLabel: 'N', root: "ق و ل", meaning: { en: "surely, we could say", ur: "یقیناً, ہم could کہو" } },
      { id: '8:31:11', arabic: "مِثْلَ", transliteration: "mith'la", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like", ur: "like" } },
      { id: '8:31:12', arabic: "هَـٰذَآ ۙ", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '8:31:13', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '8:31:14', arabic: "هَـٰذَآ", transliteration: "hādhā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is this", ur: "is this" } },
      { id: '8:31:15', arabic: "إِلَّآ", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '8:31:16', arabic: "أَسَـٰطِيرُ", transliteration: "asāṭīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "tales", ur: "tales" } },
      { id: '8:31:17', arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the former (people)", ur: "(of) the former (لوگ)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  32: {
    text: "وَإِذْ قَالُوا۟ ٱللَّهُمَّ إِن كَانَ هَـٰذَا هُوَ ٱلْحَقَّ مِنْ عِندِكَ فَأَمْطِرْ عَلَيْنَا حِجَارَةًۭ مِّنَ ٱلسَّمَآءِ أَوِ ٱئْتِنَا بِعَذَابٍ أَلِيمٍۢ",
    translation: {
      en: "",
      ur: "اور جب انہوں نے کہا کہ اے خدا اگر یہ (قرآن) تیری طرف سے برحق ہے تو ہم پر آسمان سے پتھر برسا یا کوئی اور تکلیف دینے والا عذاب بھیج",
    },
    words: [
      { id: '8:32:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '8:32:2', arabic: "قَالُوا۟", transliteration: "qālū", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "they said", ur: "وہ لوگ کہا" } },
      { id: '8:32:3', arabic: "ٱللَّهُمَّ", transliteration: "l-lahuma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O Allah", ur: "اے اللہ" } },
      { id: '8:32:4', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '8:32:5', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '8:32:6', arabic: "هَـٰذَا", transliteration: "hādhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "this", ur: "this" } },
      { id: '8:32:7', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "[it]", ur: "[it]" } },
      { id: '8:32:8', arabic: "ٱلْحَقَّ", transliteration: "l-ḥaqa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the truth", ur: "the سچ" } },
      { id: '8:32:9', arabic: "مِنْ", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[of]", ur: "[of]" } },
      { id: '8:32:10', arabic: "عِندِكَ", transliteration: "ʿindika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from You", ur: "سے تم" } },
      { id: '8:32:11', arabic: "فَأَمْطِرْ", transliteration: "fa-amṭir", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then (send) rain", ur: "پھر (send) rain" } },
      { id: '8:32:12', arabic: "عَلَيْنَا", transliteration: "ʿalaynā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "upon us", ur: "پر us" } },
      { id: '8:32:13', arabic: "حِجَارَةًۭ", transliteration: "ḥijāratan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) stones", ur: "(of) stones" } },
      { id: '8:32:14', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:32:15', arabic: "ٱلسَّمَآءِ", transliteration: "l-samāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the sky", ur: "the sky" } },
      { id: '8:32:16', arabic: "أَوِ", transliteration: "awi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "or", ur: "یا" } },
      { id: '8:32:17', arabic: "ٱئْتِنَا", transliteration: "i'tinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "bring (upon) us", ur: "bring (پر) us" } },
      { id: '8:32:18', arabic: "بِعَذَابٍ", transliteration: "biʿadhābin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '8:32:19', arabic: "أَلِيمٍۢ", transliteration: "alīmin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "painful", ur: "painful" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  33: {
    text: "وَمَا كَانَ ٱللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ ۚ وَمَا كَانَ ٱللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ",
    translation: {
      en: "",
      ur: "اور خدا ایسا نہ تھا کہ جب تک تم ان میں سے تھے انہیں عذاب دیتا۔ اور ایسا نہ تھا کہ وہ بخششیں مانگیں اور انہیں عذاب دے",
    },
    words: [
      { id: '8:33:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But not", ur: "لیکن نہیں" } },
      { id: '8:33:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '8:33:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for) Allah", ur: "(for) اللہ" } },
      { id: '8:33:4', arabic: "لِيُعَذِّبَهُمْ", transliteration: "liyuʿadhibahum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that He punishes them", ur: "وہ وہ punishes them" } },
      { id: '8:33:5', arabic: "وَأَنتَ", transliteration: "wa-anta", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while you", ur: "while تم" } },
      { id: '8:33:6', arabic: "فِيهِمْ ۚ", transliteration: "fīhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) among them", ur: "(are) among them" } },
      { id: '8:33:7', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and not", ur: "اور نہیں" } },
      { id: '8:33:8', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '8:33:9', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:33:10', arabic: "مُعَذِّبَهُمْ", transliteration: "muʿadhibahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the One Who punishes them", ur: "the One جو punishes them" } },
      { id: '8:33:11', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '8:33:12', arabic: "يَسْتَغْفِرُونَ", transliteration: "yastaghfirūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "seek forgiveness", ur: "seek مغفرت" } }
    ],
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  34: {
    text: "وَمَا لَهُمْ أَلَّا يُعَذِّبَهُمُ ٱللَّهُ وَهُمْ يَصُدُّونَ عَنِ ٱلْمَسْجِدِ ٱلْحَرَامِ وَمَا كَانُوٓا۟ أَوْلِيَآءَهُۥٓ ۚ إِنْ أَوْلِيَآؤُهُۥٓ إِلَّا ٱلْمُتَّقُونَ وَلَـٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ",
    translation: {
      en: "",
      ur: "اور (اب) ان کے لیے کون سی وجہ ہے کہ وہ انہیں عذاب نہ دے جب کہ وہ مسجد محترم (میں نماز پڑھنے) سے روکتے ہیں اور وہ اس مسجد کے متولی بھی نہیں۔ اس کے متولی تو صرف پرہیزگار ہیں۔ لیکن ان میں اکثر نہیں جانتے",
    },
    words: [
      { id: '8:34:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But what", ur: "لیکن کیا" } },
      { id: '8:34:2', arabic: "لَهُمْ", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) for them", ur: "(is) for them" } },
      { id: '8:34:3', arabic: "أَلَّا", transliteration: "allā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that not", ur: "وہ نہیں" } },
      { id: '8:34:4', arabic: "يُعَذِّبَهُمُ", transliteration: "yuʿadhibahumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(should) punish them", ur: "(should) punish them" } },
      { id: '8:34:5', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:34:6', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while they", ur: "while وہ لوگ" } },
      { id: '8:34:7', arabic: "يَصُدُّونَ", transliteration: "yaṣuddūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "hinder (people)", ur: "hinder (لوگ)" } },
      { id: '8:34:8', arabic: "عَنِ", transliteration: "ʿani", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:34:9', arabic: "ٱلْمَسْجِدِ", transliteration: "l-masjidi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Al-Masjid", ur: "Al-Masjid" } },
      { id: '8:34:10', arabic: "ٱلْحَرَامِ", transliteration: "l-ḥarāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Al-Haraam", ur: "Al-Haraam" } },
      { id: '8:34:11', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "while not", ur: "while نہیں" } },
      { id: '8:34:12', arabic: "كَانُوٓا۟", transliteration: "kānū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they are", ur: "وہ لوگ are" } },
      { id: '8:34:13', arabic: "أَوْلِيَآءَهُۥٓ ۚ", transliteration: "awliyāahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its guardians", ur: "its guardians" } },
      { id: '8:34:14', arabic: "إِنْ", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Not (can be)", ur: "نہیں (can be)" } },
      { id: '8:34:15', arabic: "أَوْلِيَآؤُهُۥٓ", transliteration: "awliyāuhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "its guardians", ur: "its guardians" } },
      { id: '8:34:16', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '8:34:17', arabic: "ٱلْمُتَّقُونَ", transliteration: "l-mutaqūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the ones who fear Allah", ur: "the ones جو ڈرنا اللہ" } },
      { id: '8:34:18', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '8:34:19', arabic: "أَكْثَرَهُمْ", transliteration: "aktharahum", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "most of them", ur: "most of them" } },
      { id: '8:34:20', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '8:34:21', arabic: "يَعْلَمُونَ", transliteration: "yaʿlamūna", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "know", ur: "جاننا" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' },
        { from: 20, to: 21, label: 'نفی + فعل' }
      ],
    },
  },
  35: {
    text: "وَمَا كَانَ صَلَاتُهُمْ عِندَ ٱلْبَيْتِ إِلَّا مُكَآءًۭ وَتَصْدِيَةًۭ ۚ فَذُوقُوا۟ ٱلْعَذَابَ بِمَا كُنتُمْ تَكْفُرُونَ",
    translation: {
      en: "",
      ur: "اور ان لوگوں کی نماز خانہٴ کعبہ کے پاس سیٹیاں اور تالیاں بجانے کے سوا کچھ نہ تھی۔ تو تم جو کفر کرتے تھے اب اس کے بدلے عذاب (کا مزہ) چکھو",
    },
    words: [
      { id: '8:35:1', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And not", ur: "اور نہیں" } },
      { id: '8:35:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "was", ur: "was" } },
      { id: '8:35:3', arabic: "صَلَاتُهُمْ", transliteration: "ṣalātuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their prayer", ur: "their نماز" } },
      { id: '8:35:4', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "at", ur: "at" } },
      { id: '8:35:5', arabic: "ٱلْبَيْتِ", transliteration: "l-bayti", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the House", ur: "the House" } },
      { id: '8:35:6', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '8:35:7', arabic: "مُكَآءًۭ", transliteration: "mukāan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "whistling", ur: "whistling" } },
      { id: '8:35:8', arabic: "وَتَصْدِيَةًۭ ۚ", transliteration: "wataṣdiyatan", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and clapping", ur: "اور clapping" } },
      { id: '8:35:9', arabic: "فَذُوقُوا۟", transliteration: "fadhūqū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So taste", ur: "So taste" } },
      { id: '8:35:10', arabic: "ٱلْعَذَابَ", transliteration: "l-ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the punishment", ur: "the عذاب" } },
      { id: '8:35:11', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because", ur: "because" } },
      { id: '8:35:12', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you used to", ur: "تم used کو" } },
      { id: '8:35:13', arabic: "تَكْفُرُونَ", transliteration: "takfurūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "disbelieve", ur: "disbelieve" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  36: {
    text: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ يُنفِقُونَ أَمْوَٰلَهُمْ لِيَصُدُّوا۟ عَن سَبِيلِ ٱللَّهِ ۚ فَسَيُنفِقُونَهَا ثُمَّ تَكُونُ عَلَيْهِمْ حَسْرَةًۭ ثُمَّ يُغْلَبُونَ ۗ وَٱلَّذِينَ كَفَرُوٓا۟ إِلَىٰ جَهَنَّمَ يُحْشَرُونَ",
    translation: {
      en: "",
      ur: "جو لوگ کافر ہیں اپنا مال خرچ کرتے ہیں کہ (لوگوں کو) خدا کے رستے سے روکیں۔ سو ابھی اور خرچ کریں گے مگر آخر وہ (خرچ کرنا) ان کے لیے (موجب) افسوس ہوگا اور وہ مغلوب ہوجائیں گے۔ اور کافر لوگ دوزخ کی طرف ہانکے جائیں گے",
    },
    words: [
      { id: '8:36:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:36:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:36:3', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:36:4', arabic: "يُنفِقُونَ", transliteration: "yunfiqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they spend", ur: "وہ لوگ spend" } },
      { id: '8:36:5', arabic: "أَمْوَٰلَهُمْ", transliteration: "amwālahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their wealth", ur: "their wealth" } },
      { id: '8:36:6', arabic: "لِيَصُدُّوا۟", transliteration: "liyaṣuddū", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to hinder (people)", ur: "کو hinder (لوگ)" } },
      { id: '8:36:7', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:36:8', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '8:36:9', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:36:10', arabic: "فَسَيُنفِقُونَهَا", transliteration: "fasayunfiqūnahā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So they will spend it", ur: "So وہ لوگ will spend it" } },
      { id: '8:36:11', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '8:36:12', arabic: "تَكُونُ", transliteration: "takūnu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it will be", ur: "it will be" } },
      { id: '8:36:13', arabic: "عَلَيْهِمْ", transliteration: "ʿalayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '8:36:14', arabic: "حَسْرَةًۭ", transliteration: "ḥasratan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a regret", ur: "a regret" } },
      { id: '8:36:15', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '8:36:16', arabic: "يُغْلَبُونَ ۗ", transliteration: "yugh'labūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be overcome", ur: "وہ لوگ will be overcome" } },
      { id: '8:36:17', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '8:36:18', arabic: "كَفَرُوٓا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:36:19', arabic: "إِلَىٰ", transliteration: "ilā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '8:36:20', arabic: "جَهَنَّمَ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hell", ur: "جہنم" } },
      { id: '8:36:21', arabic: "يُحْشَرُونَ", transliteration: "yuḥ'sharūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will be gathered", ur: "وہ لوگ will be gathered" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  37: {
    text: "لِيَمِيزَ ٱللَّهُ ٱلْخَبِيثَ مِنَ ٱلطَّيِّبِ وَيَجْعَلَ ٱلْخَبِيثَ بَعْضَهُۥ عَلَىٰ بَعْضٍۢ فَيَرْكُمَهُۥ جَمِيعًۭا فَيَجْعَلَهُۥ فِى جَهَنَّمَ ۚ أُو۟لَـٰٓئِكَ هُمُ ٱلْخَـٰسِرُونَ",
    translation: {
      en: "",
      ur: "تاکہ خدا ناپاک کو پاک سے الگ کر دے اور ناپاک کو ایک دوسرے پر رکھ کر ایک ڈھیر بنا دے۔ پھر اس کو دوزخ میں ڈال دے۔ یہی لوگ خسارہ پانے والے ہیں",
    },
    words: [
      { id: '8:37:1', arabic: "لِيَمِيزَ", transliteration: "liyamīza", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "That may distinguish", ur: "وہ may distinguish" } },
      { id: '8:37:2', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:37:3', arabic: "ٱلْخَبِيثَ", transliteration: "l-khabītha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the wicked", ur: "the wicked" } },
      { id: '8:37:4', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:37:5', arabic: "ٱلطَّيِّبِ", transliteration: "l-ṭayibi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the good", ur: "the اچھا" } },
      { id: '8:37:6', arabic: "وَيَجْعَلَ", transliteration: "wayajʿala", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ج ع ل", meaning: { en: "and place", ur: "اور place" } },
      { id: '8:37:7', arabic: "ٱلْخَبِيثَ", transliteration: "l-khabītha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "the wicked", ur: "the wicked" } },
      { id: '8:37:8', arabic: "بَعْضَهُۥ", transliteration: "baʿḍahu", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of them", ur: "some of them" } },
      { id: '8:37:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '8:37:10', arabic: "بَعْضٍۢ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "others", ur: "others" } },
      { id: '8:37:11', arabic: "فَيَرْكُمَهُۥ", transliteration: "fayarkumahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and heap them", ur: "اور heap them" } },
      { id: '8:37:12', arabic: "جَمِيعًۭا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all together", ur: "سب together" } },
      { id: '8:37:13', arabic: "فَيَجْعَلَهُۥ", transliteration: "fayajʿalahu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "ج ع ل", meaning: { en: "and put them", ur: "اور put them" } },
      { id: '8:37:14', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:37:15', arabic: "جَهَنَّمَ ۚ", transliteration: "jahannama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Hell", ur: "جہنم" } },
      { id: '8:37:16', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those ", ur: "Those " } },
      { id: '8:37:17', arabic: "هُمُ", transliteration: "humu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "they", ur: "وہ لوگ" } },
      { id: '8:37:18', arabic: "ٱلْخَـٰسِرُونَ", transliteration: "l-khāsirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) the losers", ur: "(are) the losers" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 7, to: 8, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  38: {
    text: "قُل لِّلَّذِينَ كَفَرُوٓا۟ إِن يَنتَهُوا۟ يُغْفَرْ لَهُم مَّا قَدْ سَلَفَ وَإِن يَعُودُوا۟ فَقَدْ مَضَتْ سُنَّتُ ٱلْأَوَّلِينَ",
    translation: {
      en: "",
      ur: "(اے پیغمبر) کفار سے کہہ دو کہ اگر وہ اپنے افعال سے باز آجائیں تو جو ہوچکا وہ انہیں معاف کردیا جائے گا۔ اور اگر پھر (وہی حرکات) کرنے لگیں گے تو اگلے لوگوں کا (جو) طریق جاری ہوچکا ہے (وہی ان کے حق میں برتا جائے گا)",
    },
    words: [
      { id: '8:38:1', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '8:38:2', arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to those who", ur: "کو جو لوگ" } },
      { id: '8:38:3', arabic: "كَفَرُوٓا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:38:4', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '8:38:5', arabic: "يَنتَهُوا۟", transliteration: "yantahū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they cease", ur: "وہ لوگ cease" } },
      { id: '8:38:6', arabic: "يُغْفَرْ", transliteration: "yugh'far", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "will be forgiven", ur: "will be forgiven" } },
      { id: '8:38:7', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '8:38:8', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '8:38:9', arabic: "قَدْ", transliteration: "qad", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[verily]", ur: "[بیشک]" } },
      { id: '8:38:10', arabic: "سَلَفَ", transliteration: "salafa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) past", ur: "(is) past" } },
      { id: '8:38:11', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '8:38:12', arabic: "يَعُودُوا۟", transliteration: "yaʿūdū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they return", ur: "وہ لوگ return" } },
      { id: '8:38:13', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then verily", ur: "پھر بیشک" } },
      { id: '8:38:14', arabic: "مَضَتْ", transliteration: "maḍat", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "preceded", ur: "preceded" } },
      { id: '8:38:15', arabic: "سُنَّتُ", transliteration: "sunnatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) practice", ur: "(the) practice" } },
      { id: '8:38:16', arabic: "ٱلْأَوَّلِينَ", transliteration: "l-awalīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the former (people)", ur: "(of) the former (لوگ)" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  39: {
    text: "وَقَـٰتِلُوهُمْ حَتَّىٰ لَا تَكُونَ فِتْنَةٌۭ وَيَكُونَ ٱلدِّينُ كُلُّهُۥ لِلَّهِ ۚ فَإِنِ ٱنتَهَوْا۟ فَإِنَّ ٱللَّهَ بِمَا يَعْمَلُونَ بَصِيرٌۭ",
    translation: {
      en: "",
      ur: "اور ان لوگوں سے لڑتے رہو یہاں تک کہ فتنہ (یعنی کفر کا فساد) باقی نہ رہے اور دین سب خدا ہی کا ہوجائے اور اگر باز آجائیں تو خدا ان کے کاموں کو دیکھ رہا ہے",
    },
    words: [
      { id: '8:39:1', arabic: "وَقَـٰتِلُوهُمْ", transliteration: "waqātilūhum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And fight them", ur: "اور fight them" } },
      { id: '8:39:2', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '8:39:3', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '8:39:4', arabic: "تَكُونَ", transliteration: "takūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "there is", ur: "there is" } },
      { id: '8:39:5', arabic: "فِتْنَةٌۭ", transliteration: "fit'natun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "oppression", ur: "oppression" } },
      { id: '8:39:6', arabic: "وَيَكُونَ", transliteration: "wayakūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and is", ur: "اور is" } },
      { id: '8:39:7', arabic: "ٱلدِّينُ", transliteration: "l-dīnu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the religion", ur: "the religion" } },
      { id: '8:39:8', arabic: "كُلُّهُۥ", transliteration: "kulluhu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all of it", ur: "سب of it" } },
      { id: '8:39:9', arabic: "لِلَّهِ ۚ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Allah", ur: "for اللہ" } },
      { id: '8:39:10', arabic: "فَإِنِ", transliteration: "fa-ini", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '8:39:11', arabic: "ٱنتَهَوْا۟", transliteration: "intahaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they cease", ur: "وہ لوگ cease" } },
      { id: '8:39:12', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '8:39:13', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:39:14', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '8:39:15', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "they do", ur: "وہ لوگ do" } },
      { id: '8:39:16', arabic: "بَصِيرٌۭ", transliteration: "baṣīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Seer", ur: "(is) سب-Seer" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  40: {
    text: "وَإِن تَوَلَّوْا۟ فَٱعْلَمُوٓا۟ أَنَّ ٱللَّهَ مَوْلَىٰكُمْ ۚ نِعْمَ ٱلْمَوْلَىٰ وَنِعْمَ ٱلنَّصِيرُ",
    translation: {
      en: "",
      ur: "اور اگر روگردانی کریں تو جان رکھو کہ خدا تمہارا حمایتی ہے۔ (اور) وہ خوب حمایتی اور خوب مددگار ہے",
    },
    words: [
      { id: '8:40:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:40:2', arabic: "تَوَلَّوْا۟", transliteration: "tawallaw", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they turn away", ur: "وہ لوگ turn away" } },
      { id: '8:40:3', arabic: "فَٱعْلَمُوٓا۟", transliteration: "fa-iʿ'lamū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then know", ur: "پھر جاننا" } },
      { id: '8:40:4', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '8:40:5', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:40:6', arabic: "مَوْلَىٰكُمْ ۚ", transliteration: "mawlākum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) your Protector", ur: "(is) your Protector" } },
      { id: '8:40:7', arabic: "نِعْمَ", transliteration: "niʿ'ma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Excellent", ur: "Excellent" } },
      { id: '8:40:8', arabic: "ٱلْمَوْلَىٰ", transliteration: "l-mawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Protector", ur: "(is) the Protector" } },
      { id: '8:40:9', arabic: "وَنِعْمَ", transliteration: "waniʿ'ma", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and Excellent", ur: "اور Excellent" } },
      { id: '8:40:10', arabic: "ٱلنَّصِيرُ", transliteration: "l-naṣīru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the Helper", ur: "(is) the Helper" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  41: {
    text: "۞ وَٱعْلَمُوٓا۟ أَنَّمَا غَنِمْتُم مِّن شَىْءٍۢ فَأَنَّ لِلَّهِ خُمُسَهُۥ وَلِلرَّسُولِ وَلِذِى ٱلْقُرْبَىٰ وَٱلْيَتَـٰمَىٰ وَٱلْمَسَـٰكِينِ وَٱبْنِ ٱلسَّبِيلِ إِن كُنتُمْ ءَامَنتُم بِٱللَّهِ وَمَآ أَنزَلْنَا عَلَىٰ عَبْدِنَا يَوْمَ ٱلْفُرْقَانِ يَوْمَ ٱلْتَقَى ٱلْجَمْعَانِ ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌ",
    translation: {
      en: "",
      ur: "اور جان رکھو کہ جو چیز تم (کفار سے) لوٹ کر لاؤ اس میں سے پانچواں حصہ خدا کا اور اس کے رسول کا اور اہل قرابت کا اور یتیموں کا اور محتاجوں کا اور مسافروں کا ہے۔ اگر تم خدا پر اور اس (نصرت) پر ایمان رکھتے ہو جو (حق وباطل میں) فرق کرنے کے دن (یعنی جنگ بدر میں) جس دن دونوں فوجوں میں مڈھ بھیڑ ہوگئی۔ اپنے بندے (محمدﷺ) پر نازل فرمائی۔ اور خدا ہر چیز پر قادر ہے",
    },
    words: [
      { id: '8:41:1', arabic: "۞ وَٱعْلَمُوٓا۟", transliteration: "wa-iʿ'lamū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And know", ur: "اور جاننا" } },
      { id: '8:41:2', arabic: "أَنَّمَا", transliteration: "annamā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that what", ur: "وہ کیا" } },
      { id: '8:41:3', arabic: "غَنِمْتُم", transliteration: "ghanim'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you obtain (as) spoils of war", ur: "تم obtain (as) spoils of war" } },
      { id: '8:41:4', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '8:41:5', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "anything", ur: "anything" } },
      { id: '8:41:6', arabic: "فَأَنَّ", transliteration: "fa-anna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then that", ur: "پھر وہ" } },
      { id: '8:41:7', arabic: "لِلَّهِ", transliteration: "lillahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for Allah", ur: "for اللہ" } },
      { id: '8:41:8', arabic: "خُمُسَهُۥ", transliteration: "khumusahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) one fifth of it", ur: "(is) one fifth of it" } },
      { id: '8:41:9', arabic: "وَلِلرَّسُولِ", transliteration: "walilrrasūli", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for the Messenger", ur: "اور for the رسول" } },
      { id: '8:41:10', arabic: "وَلِذِى", transliteration: "walidhī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and for the", ur: "اور for the" } },
      { id: '8:41:11', arabic: "ٱلْقُرْبَىٰ", transliteration: "l-qur'bā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near relatives", ur: "near relatives" } },
      { id: '8:41:12', arabic: "وَٱلْيَتَـٰمَىٰ", transliteration: "wal-yatāmā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the orphans", ur: "اور the orphans" } },
      { id: '8:41:13', arabic: "وَٱلْمَسَـٰكِينِ", transliteration: "wal-masākīni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the needy", ur: "اور the needy" } },
      { id: '8:41:14', arabic: "وَٱبْنِ", transliteration: "wa-ib'ni", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the", ur: "اور the" } },
      { id: '8:41:15', arabic: "ٱلسَّبِيلِ", transliteration: "l-sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wayfarer", ur: "wayfarer" } },
      { id: '8:41:16', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "if", ur: "if" } },
      { id: '8:41:17', arabic: "كُنتُمْ", transliteration: "kuntum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '8:41:18', arabic: "ءَامَنتُم", transliteration: "āmantum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '8:41:19', arabic: "بِٱللَّهِ", transliteration: "bil-lahi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in Allah", ur: "میں اللہ" } },
      { id: '8:41:20', arabic: "وَمَآ", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (in) what", ur: "اور (میں) کیا" } },
      { id: '8:41:21', arabic: "أَنزَلْنَا", transliteration: "anzalnā", pos: ['V'], posLabel: 'V', root: "ن ز ل", meaning: { en: "We sent down", ur: "ہم sent down" } },
      { id: '8:41:22', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '8:41:23', arabic: "عَبْدِنَا", transliteration: "ʿabdinā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Our slave", ur: "Our slave" } },
      { id: '8:41:24', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(on the) day", ur: "(پر the) دن" } },
      { id: '8:41:25', arabic: "ٱلْفُرْقَانِ", transliteration: "l-fur'qāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the criterion", ur: "(of) the criterion" } },
      { id: '8:41:26', arabic: "يَوْمَ", transliteration: "yawma", pos: ['V'], posLabel: 'V', root: "ي و م", meaning: { en: "(the) day", ur: "(the) دن" } },
      { id: '8:41:27', arabic: "ٱلْتَقَى", transliteration: "l-taqā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(when) met", ur: "(when) met" } },
      { id: '8:41:28', arabic: "ٱلْجَمْعَانِ ۗ", transliteration: "l-jamʿāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the two forces", ur: "the two forces" } },
      { id: '8:41:29', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:41:30', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) on", ur: "(is) پر" } },
      { id: '8:41:31', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '8:41:32', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '8:41:33', arabic: "قَدِيرٌ", transliteration: "qadīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Powerful", ur: "سب-Powerful" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'فعل + فاعل' },
        { from: 27, to: 28, label: 'مضاف + مضاف إليه' },
        { from: 30, to: 31, label: 'جار + مجرور' }
      ],
    },
  },
  42: {
    text: "إِذْ أَنتُم بِٱلْعُدْوَةِ ٱلدُّنْيَا وَهُم بِٱلْعُدْوَةِ ٱلْقُصْوَىٰ وَٱلرَّكْبُ أَسْفَلَ مِنكُمْ ۚ وَلَوْ تَوَاعَدتُّمْ لَٱخْتَلَفْتُمْ فِى ٱلْمِيعَـٰدِ ۙ وَلَـٰكِن لِّيَقْضِىَ ٱللَّهُ أَمْرًۭا كَانَ مَفْعُولًۭا لِّيَهْلِكَ مَنْ هَلَكَ عَنۢ بَيِّنَةٍۢ وَيَحْيَىٰ مَنْ حَىَّ عَنۢ بَيِّنَةٍۢ ۗ وَإِنَّ ٱللَّهَ لَسَمِيعٌ عَلِيمٌ",
    translation: {
      en: "",
      ur: "جس وقت تم (مدینے سے) قریب کے ناکے پر تھے اور کافر بعید کے ناکے پر اور قافلہ تم سے نیچے (اتر گیا) تھا۔ اور اگر تم (جنگ کے لیے) آپس میں قرارداد کرلیتے تو وقت معین (پر جمع ہونے) میں تقدیم وتاخیر ہو جاتی۔ لیکن خدا کو منظور تھا کہ جو کام ہو کر رہنے والا تھا اسے کر ہی ڈالے تاکہ جو مرے بصیرت پر (یعنی یقین جان کر) مرے اور جو جیتا رہے وہ بھی بصیرت پر (یعنی حق پہچان کر) جیتا رہے۔ اور کچھ شک نہیں کہ خدا سنتا جانتا ہے",
    },
    words: [
      { id: '8:42:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '8:42:2', arabic: "أَنتُم", transliteration: "antum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (were)", ur: "تم (were)" } },
      { id: '8:42:3', arabic: "بِٱلْعُدْوَةِ", transliteration: "bil-ʿud'wati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "on side of the valley", ur: "پر side of the valley" } },
      { id: '8:42:4', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the nearer", ur: "the nearer" } },
      { id: '8:42:5', arabic: "وَهُم", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '8:42:6', arabic: "بِٱلْعُدْوَةِ", transliteration: "bil-ʿud'wati", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(were) on the side", ur: "(were) پر the side" } },
      { id: '8:42:7', arabic: "ٱلْقُصْوَىٰ", transliteration: "l-quṣ'wā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the farther", ur: "the farther" } },
      { id: '8:42:8', arabic: "وَٱلرَّكْبُ", transliteration: "wal-rakbu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and the caravan", ur: "اور the caravan" } },
      { id: '8:42:9', arabic: "أَسْفَلَ", transliteration: "asfala", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) lower", ur: "(was) lower" } },
      { id: '8:42:10', arabic: "مِنكُمْ ۚ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than you", ur: "than تم" } },
      { id: '8:42:11', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:42:12', arabic: "تَوَاعَدتُّمْ", transliteration: "tawāʿadttum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (had) made an appointment", ur: "تم (had) made an appointment" } },
      { id: '8:42:13', arabic: "لَٱخْتَلَفْتُمْ", transliteration: "la-ikh'talaftum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "certainly you would have failed", ur: "certainly تم would have failed" } },
      { id: '8:42:14', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:42:15', arabic: "ٱلْمِيعَـٰدِ ۙ", transliteration: "l-mīʿādi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the appointment", ur: "the appointment" } },
      { id: '8:42:16', arabic: "وَلَـٰكِن", transliteration: "walākin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But", ur: "لیکن" } },
      { id: '8:42:17', arabic: "لِّيَقْضِىَ", transliteration: "liyaqḍiya", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that might accomplish", ur: "وہ might accomplish" } },
      { id: '8:42:18', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:42:19', arabic: "أَمْرًۭا", transliteration: "amran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a matter", ur: "a matter" } },
      { id: '8:42:20', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(that) was", ur: "(وہ) was" } },
      { id: '8:42:21', arabic: "مَفْعُولًۭا", transliteration: "mafʿūlan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "destined", ur: "destined" } },
      { id: '8:42:22', arabic: "لِّيَهْلِكَ", transliteration: "liyahlika", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "that (might be) destroyed", ur: "وہ (might be) destroyed" } },
      { id: '8:42:23', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(those) who", ur: "(those) جو" } },
      { id: '8:42:24', arabic: "هَلَكَ", transliteration: "halaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(were to be) destroyed", ur: "(were کو be) destroyed" } },
      { id: '8:42:25', arabic: "عَنۢ", transliteration: "ʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '8:42:26', arabic: "بَيِّنَةٍۢ", transliteration: "bayyinatin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "a clear evidence", ur: "a clear evidence" } },
      { id: '8:42:27', arabic: "وَيَحْيَىٰ", transliteration: "wayaḥyā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (might) live", ur: "اور (might) live" } },
      { id: '8:42:28', arabic: "مَنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(those) who", ur: "(those) جو" } },
      { id: '8:42:29', arabic: "حَىَّ", transliteration: "ḥayya", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(were to) live", ur: "(were کو) live" } },
      { id: '8:42:30', arabic: "عَنۢ", transliteration: "ʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '8:42:31', arabic: "بَيِّنَةٍۢ ۗ", transliteration: "bayyinatin", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "a clear evidence", ur: "a clear evidence" } },
      { id: '8:42:32', arabic: "وَإِنَّ", transliteration: "wa-inna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '8:42:33', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:42:34', arabic: "لَسَمِيعٌ", transliteration: "lasamīʿun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) All-Hearing", ur: "(is) سب سننے والا" } },
      { id: '8:42:35', arabic: "عَلِيمٌ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 14, to: 15, label: 'جار + مجرور' },
        { from: 22, to: 23, label: 'فعل + فاعل' },
        { from: 24, to: 25, label: 'فعل + فاعل' },
        { from: 25, to: 26, label: 'موصوف + صفت' },
        { from: 28, to: 29, label: 'موصوف + صفت' },
        { from: 30, to: 31, label: 'موصوف + صفت' }
      ],
    },
  },
  43: {
    text: "إِذْ يُرِيكَهُمُ ٱللَّهُ فِى مَنَامِكَ قَلِيلًۭا ۖ وَلَوْ أَرَىٰكَهُمْ كَثِيرًۭا لَّفَشِلْتُمْ وَلَتَنَـٰزَعْتُمْ فِى ٱلْأَمْرِ وَلَـٰكِنَّ ٱللَّهَ سَلَّمَ ۗ إِنَّهُۥ عَلِيمٌۢ بِذَاتِ ٱلصُّدُورِ",
    translation: {
      en: "",
      ur: "اس وقت خدا نے تمہیں خواب میں کافروں کو تھوڑی تعداد میں دکھایا۔ اور اگر بہت کر کے دکھاتا تو تم لوگ جی چھوڑ دیتے اور (جو) کام (درپیش تھا اس) میں جھگڑنے لگتے لیکن خدا نے (تمہیں اس سے) بچا لیا۔ بےشک وہ سینوں کی باتوں تک سے واقف ہے",
    },
    words: [
      { id: '8:43:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '8:43:2', arabic: "يُرِيكَهُمُ", transliteration: "yurīkahumu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (where) shown them", ur: "تم (where) shown them" } },
      { id: '8:43:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '8:43:4', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:43:5', arabic: "مَنَامِكَ", transliteration: "manāmika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your dream", ur: "your dream" } },
      { id: '8:43:6', arabic: "قَلِيلًۭا ۖ", transliteration: "qalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) few", ur: "(as) few" } },
      { id: '8:43:7', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and if", ur: "اور if" } },
      { id: '8:43:8', arabic: "أَرَىٰكَهُمْ", transliteration: "arākahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He had shown them to you", ur: "وہ had shown them کو تم" } },
      { id: '8:43:9', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) many", ur: "(as) many" } },
      { id: '8:43:10', arabic: "لَّفَشِلْتُمْ", transliteration: "lafashil'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "surely you would have lost courage", ur: "یقیناً تم would have lost courage" } },
      { id: '8:43:11', arabic: "وَلَتَنَـٰزَعْتُمْ", transliteration: "walatanāzaʿtum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and surely you would have disputed", ur: "اور یقیناً تم would have disputed" } },
      { id: '8:43:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:43:13', arabic: "ٱلْأَمْرِ", transliteration: "l-amri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the matter", ur: "the matter" } },
      { id: '8:43:14', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '8:43:15', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:43:16', arabic: "سَلَّمَ ۗ", transliteration: "sallama", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "saved (you)", ur: "saved (تم)" } },
      { id: '8:43:17', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '8:43:18', arabic: "عَلِيمٌۢ", transliteration: "ʿalīmun", pos: ['ADJ'], posLabel: 'ADJ', root: "ع ل م", meaning: { en: "(is) All-Knower", ur: "(is) سب-Knower" } },
      { id: '8:43:19', arabic: "بِذَاتِ", transliteration: "bidhāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what is in", ur: "of کیا is میں" } },
      { id: '8:43:20', arabic: "ٱلصُّدُورِ", transliteration: "l-ṣudūri", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the breasts", ur: "the breasts" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 17, to: 18, label: 'موصوف + صفت' },
        { from: 19, to: 20, label: 'جار + مجرور' }
      ],
    },
  },
  44: {
    text: "وَإِذْ يُرِيكُمُوهُمْ إِذِ ٱلْتَقَيْتُمْ فِىٓ أَعْيُنِكُمْ قَلِيلًۭا وَيُقَلِّلُكُمْ فِىٓ أَعْيُنِهِمْ لِيَقْضِىَ ٱللَّهُ أَمْرًۭا كَانَ مَفْعُولًۭا ۗ وَإِلَى ٱللَّهِ تُرْجَعُ ٱلْأُمُورُ",
    translation: {
      en: "",
      ur: "اور اس وقت جب تم ایک دوسرے کے مقابل ہوئے تو کافروں کو تمہاری نظروں میں تھوڑا کر کے دکھاتا تھا اور تم کو ان کی نگاہوں میں تھوڑا کر کے دکھاتا تھا تاکہ خدا کو جو کام منظور کرنا تھا اسے کر ڈالے۔ اور سب کاموں کا رجوع خدا کی طرف ہے",
    },
    words: [
      { id: '8:44:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '8:44:2', arabic: "يُرِيكُمُوهُمْ", transliteration: "yurīkumūhum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He showed them to you", ur: "وہ showed them کو تم" } },
      { id: '8:44:3', arabic: "إِذِ", transliteration: "idhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '8:44:4', arabic: "ٱلْتَقَيْتُمْ", transliteration: "l-taqaytum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you met ", ur: "تم met " } },
      { id: '8:44:5', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:44:6', arabic: "أَعْيُنِكُمْ", transliteration: "aʿyunikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your eyes", ur: "your eyes" } },
      { id: '8:44:7', arabic: "قَلِيلًۭا", transliteration: "qalīlan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(as) few", ur: "(as) few" } },
      { id: '8:44:8', arabic: "وَيُقَلِّلُكُمْ", transliteration: "wayuqallilukum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He made you (appear) as few", ur: "اور وہ made تم (appear) as few" } },
      { id: '8:44:9', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:44:10', arabic: "أَعْيُنِهِمْ", transliteration: "aʿyunihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their eyes", ur: "their eyes" } },
      { id: '8:44:11', arabic: "لِيَقْضِىَ", transliteration: "liyaqḍiya", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "that might accomplish", ur: "وہ might accomplish" } },
      { id: '8:44:12', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah might accomplish", ur: "اللہ might accomplish" } },
      { id: '8:44:13', arabic: "أَمْرًۭا", transliteration: "amran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a matter", ur: "a matter" } },
      { id: '8:44:14', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "(that) was", ur: "(وہ) was" } },
      { id: '8:44:15', arabic: "مَفْعُولًۭا ۗ", transliteration: "mafʿūlan", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(already) destined", ur: "(already) destined" } },
      { id: '8:44:16', arabic: "وَإِلَى", transliteration: "wa-ilā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And to", ur: "اور کو" } },
      { id: '8:44:17', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:44:18', arabic: "تُرْجَعُ", transliteration: "tur'jaʿu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "return", ur: "return" } },
      { id: '8:44:19', arabic: "ٱلْأُمُورُ", transliteration: "l-umūru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(all) the matters", ur: "(سب) the matters" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  45: {
    text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِذَا لَقِيتُمْ فِئَةًۭ فَٱثْبُتُوا۟ وَٱذْكُرُوا۟ ٱللَّهَ كَثِيرًۭا لَّعَلَّكُمْ تُفْلِحُونَ",
    translation: {
      en: "",
      ur: "مومنو! جب (کفار کی) کسی جماعت سے تمہارا مقابلہ ہو تو ثابت قدم رہو اور خدا کو بہت یاد کرو تاکہ مراد حاصل کرو",
    },
    words: [
      { id: '8:45:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O you", ur: "اے تم" } },
      { id: '8:45:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "who", ur: "جو" } },
      { id: '8:45:3', arabic: "ءَامَنُوٓا۟", transliteration: "āmanū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "believe", ur: "ایمان لانا" } },
      { id: '8:45:4', arabic: "إِذَا", transliteration: "idhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '8:45:5', arabic: "لَقِيتُمْ", transliteration: "laqītum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you meet", ur: "تم meet" } },
      { id: '8:45:6', arabic: "فِئَةًۭ", transliteration: "fi-atan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a force", ur: "a force" } },
      { id: '8:45:7', arabic: "فَٱثْبُتُوا۟", transliteration: "fa-uth'butū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then be firm", ur: "پھر be firm" } },
      { id: '8:45:8', arabic: "وَٱذْكُرُوا۟", transliteration: "wa-udh'kurū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and remember", ur: "اور remember" } },
      { id: '8:45:9', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:45:10', arabic: "كَثِيرًۭا", transliteration: "kathīran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "much", ur: "much" } },
      { id: '8:45:11', arabic: "لَّعَلَّكُمْ", transliteration: "laʿallakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that you may", ur: "so وہ تم may" } },
      { id: '8:45:12', arabic: "تُفْلِحُونَ", transliteration: "tuf'liḥūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(be) successful", ur: "(be) successful" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  46: {
    text: "وَأَطِيعُوا۟ ٱللَّهَ وَرَسُولَهُۥ وَلَا تَنَـٰزَعُوا۟ فَتَفْشَلُوا۟ وَتَذْهَبَ رِيحُكُمْ ۖ وَٱصْبِرُوٓا۟ ۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    translation: {
      en: "",
      ur: "اور خدا اور اس کے رسول کے حکم پر چلو اور آپس میں جھگڑا نہ کرنا کہ (ایسا کرو گے تو) تم بزدل ہو جاؤ گے اور تمہارا اقبال جاتا رہے گا اور صبر سے کام لو۔ کہ خدا صبر کرنے والوں کا مددگار ہے",
    },
    words: [
      { id: '8:46:1', arabic: "وَأَطِيعُوا۟", transliteration: "wa-aṭīʿū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And obey", ur: "اور obey" } },
      { id: '8:46:2', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:46:3', arabic: "وَرَسُولَهُۥ", transliteration: "warasūlahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ر س ل", meaning: { en: "and His Messenger", ur: "اور His رسول" } },
      { id: '8:46:4', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (do) not", ur: "اور (do) نہیں" } },
      { id: '8:46:5', arabic: "تَنَـٰزَعُوا۟", transliteration: "tanāzaʿū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "dispute", ur: "dispute" } },
      { id: '8:46:6', arabic: "فَتَفْشَلُوا۟", transliteration: "fatafshalū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "lest you lose courage", ur: "lest تم lose courage" } },
      { id: '8:46:7', arabic: "وَتَذْهَبَ", transliteration: "watadhhaba", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (would) depart", ur: "اور (would) depart" } },
      { id: '8:46:8', arabic: "رِيحُكُمْ ۖ", transliteration: "rīḥukum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your strength", ur: "your strength" } },
      { id: '8:46:9', arabic: "وَٱصْبِرُوٓا۟ ۚ", transliteration: "wa-iṣ'birū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and be patient", ur: "اور be patient" } },
      { id: '8:46:10', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:46:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:46:12', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) with", ur: "(is) ساتھ" } },
      { id: '8:46:13', arabic: "ٱلصَّـٰبِرِينَ", transliteration: "l-ṣābirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the patient ones", ur: "the patient ones" } }
    ],
    structure: {
      relationships: [
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  47: {
    text: "وَلَا تَكُونُوا۟ كَٱلَّذِينَ خَرَجُوا۟ مِن دِيَـٰرِهِم بَطَرًۭا وَرِئَآءَ ٱلنَّاسِ وَيَصُدُّونَ عَن سَبِيلِ ٱللَّهِ ۚ وَٱللَّهُ بِمَا يَعْمَلُونَ مُحِيطٌۭ",
    translation: {
      en: "",
      ur: "اور ان لوگوں جیسے نہ ہونا جو اِتراتے ہوئے (یعنی حق کا مقابلہ کرنے کے لیے) اور لوگوں کو دکھانے کے لیے گھروں سے نکل آئے اور لوگوں کو خدا کی راہ سے روکتے ہیں۔ اور جو اعمال یہ کرتے ہیں خدا ان پر احاطہ کئے ہوئے ہے",
    },
    words: [
      { id: '8:47:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (do) not", ur: "اور (do) نہیں" } },
      { id: '8:47:2', arabic: "تَكُونُوا۟", transliteration: "takūnū", pos: ['V'], posLabel: 'V', root: "ك و ن", meaning: { en: "be", ur: "be" } },
      { id: '8:47:3', arabic: "كَٱلَّذِينَ", transliteration: "ka-alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "like those who", ur: "like جو لوگ" } },
      { id: '8:47:4', arabic: "خَرَجُوا۟", transliteration: "kharajū", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "came forth", ur: "came forth" } },
      { id: '8:47:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:47:6', arabic: "دِيَـٰرِهِم", transliteration: "diyārihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their homes", ur: "their homes" } },
      { id: '8:47:7', arabic: "بَطَرًۭا", transliteration: "baṭaran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "boastfully", ur: "boastfully" } },
      { id: '8:47:8', arabic: "وَرِئَآءَ", transliteration: "wariāa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and showing off", ur: "اور showing off" } },
      { id: '8:47:9', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) the people", ur: "(کو) the لوگ" } },
      { id: '8:47:10', arabic: "وَيَصُدُّونَ", transliteration: "wayaṣuddūna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and hinder (them)", ur: "اور hinder (them)" } },
      { id: '8:47:11', arabic: "عَن", transliteration: "ʿan", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:47:12', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '8:47:13', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:47:14', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:47:15', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '8:47:16', arabic: "يَعْمَلُونَ", transliteration: "yaʿmalūna", pos: ['V'], posLabel: 'V', root: "ع م ل", meaning: { en: "they do", ur: "وہ لوگ do" } },
      { id: '8:47:17', arabic: "مُحِيطٌۭ", transliteration: "muḥīṭun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) All-Encompassing", ur: "(is) سب-Encompassing" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'جار + مجرور' }
      ],
    },
  },
  48: {
    text: "وَإِذْ زَيَّنَ لَهُمُ ٱلشَّيْطَـٰنُ أَعْمَـٰلَهُمْ وَقَالَ لَا غَالِبَ لَكُمُ ٱلْيَوْمَ مِنَ ٱلنَّاسِ وَإِنِّى جَارٌۭ لَّكُمْ ۖ فَلَمَّا تَرَآءَتِ ٱلْفِئَتَانِ نَكَصَ عَلَىٰ عَقِبَيْهِ وَقَالَ إِنِّى بَرِىٓءٌۭ مِّنكُمْ إِنِّىٓ أَرَىٰ مَا لَا تَرَوْنَ إِنِّىٓ أَخَافُ ٱللَّهَ ۚ وَٱللَّهُ شَدِيدُ ٱلْعِقَابِ",
    translation: {
      en: "",
      ur: "اور جب شیطانوں نے ان کے اعمال ان کو آراستہ کر کے دکھائے اور کہا کہ آج کے دن لوگوں میں کوئی تم پر غالب نہ ہوگا اور میں تمہارا رفیق ہوں (لیکن) جب دونوں فوجیں ایک دوسرے کے مقابل صف آراء ہوئیں تو پسپا ہو کر چل دیا اور کہنے لگا کہ مجھے تم سے کوئی واسطہ نہیں۔ میں تو ایسی چیزیں دیکھ رہا ہوں جو تم نہیں دیکھ سکتے۔ مجھے تو خدا سے ڈر لگتا ہے۔ اور خدا سخت عذاب کرنے والا ہے",
    },
    words: [
      { id: '8:48:1', arabic: "وَإِذْ", transliteration: "wa-idh", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And when", ur: "اور when" } },
      { id: '8:48:2', arabic: "زَيَّنَ", transliteration: "zayyana", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "made fair-seeming", ur: "made fair-seeming" } },
      { id: '8:48:3', arabic: "لَهُمُ", transliteration: "lahumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '8:48:4', arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Shaitaan", ur: "the Shaitaan" } },
      { id: '8:48:5', arabic: "أَعْمَـٰلَهُمْ", transliteration: "aʿmālahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their deeds", ur: "their deeds" } },
      { id: '8:48:6', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and he said", ur: "اور وہ کہا" } },
      { id: '8:48:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "No (one)", ur: "نہیں (one)" } },
      { id: '8:48:8', arabic: "غَالِبَ", transliteration: "ghāliba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(can) overcome", ur: "(can) overcome" } },
      { id: '8:48:9', arabic: "لَكُمُ", transliteration: "lakumu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[to] you", ur: "[کو] تم" } },
      { id: '8:48:10', arabic: "ٱلْيَوْمَ", transliteration: "l-yawma", pos: ['N'], posLabel: 'N', root: "ي و م", meaning: { en: "today", ur: "today" } },
      { id: '8:48:11', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:48:12', arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the people", ur: "the لوگ" } },
      { id: '8:48:13', arabic: "وَإِنِّى", transliteration: "wa-innī", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and indeed, I am", ur: "اور بیشک, میں am" } },
      { id: '8:48:14', arabic: "جَارٌۭ", transliteration: "jārun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a neighbor", ur: "a neighbor" } },
      { id: '8:48:15', arabic: "لَّكُمْ ۖ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '8:48:16', arabic: "فَلَمَّا", transliteration: "falammā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "But when", ur: "لیکن when" } },
      { id: '8:48:17', arabic: "تَرَآءَتِ", transliteration: "tarāati", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "came in sight", ur: "came میں sight" } },
      { id: '8:48:18', arabic: "ٱلْفِئَتَانِ", transliteration: "l-fi-atāni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the two forces", ur: "the two forces" } },
      { id: '8:48:19', arabic: "نَكَصَ", transliteration: "nakaṣa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he turned away", ur: "وہ turned away" } },
      { id: '8:48:20', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '8:48:21', arabic: "عَقِبَيْهِ", transliteration: "ʿaqibayhi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "his heels", ur: "his heels" } },
      { id: '8:48:22', arabic: "وَقَالَ", transliteration: "waqāla", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ق و ل", meaning: { en: "and said", ur: "اور کہا" } },
      { id: '8:48:23', arabic: "إِنِّى", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I am", ur: "بیشک, میں am" } },
      { id: '8:48:24', arabic: "بَرِىٓءٌۭ", transliteration: "barīon", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "free", ur: "free" } },
      { id: '8:48:25', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of you", ur: "of تم" } },
      { id: '8:48:26', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, I", ur: "بیشک, میں" } },
      { id: '8:48:27', arabic: "أَرَىٰ", transliteration: "arā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "see", ur: "دیکھنا" } },
      { id: '8:48:28', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '8:48:29', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '8:48:30', arabic: "تَرَوْنَ", transliteration: "tarawna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you see", ur: "تم دیکھنا" } },
      { id: '8:48:31', arabic: "إِنِّىٓ", transliteration: "innī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "indeed, I", ur: "بیشک, میں" } },
      { id: '8:48:32', arabic: "أَخَافُ", transliteration: "akhāfu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[I] fear", ur: "[میں] ڈرنا" } },
      { id: '8:48:33', arabic: "ٱللَّهَ ۚ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:48:34', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:48:35', arabic: "شَدِيدُ", transliteration: "shadīdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) severe", ur: "(is) severe" } },
      { id: '8:48:36', arabic: "ٱلْعِقَابِ", transliteration: "l-ʿiqābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the penalty", ur: "(میں) the penalty" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'جار + مجرور' },
        { from: 24, to: 25, label: 'مضاف + مضاف إليه' },
        { from: 29, to: 30, label: 'نفی + فعل' },
        { from: 30, to: 31, label: 'فعل + فاعل' },
        { from: 35, to: 36, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  49: {
    text: "إِذْ يَقُولُ ٱلْمُنَـٰفِقُونَ وَٱلَّذِينَ فِى قُلُوبِهِم مَّرَضٌ غَرَّ هَـٰٓؤُلَآءِ دِينُهُمْ ۗ وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَإِنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌۭ",
    translation: {
      en: "",
      ur: "اس وقت منافق اور (کافر) جن کے دلوں میں مرض تھا کہتے تھے کہ ان لوگوں کو ان کے دین نے مغرور کر رکھا ہے اور جو شخص خدا پر بھروسہ رکھتا ہے تو خدا غالب حکمت والا ہے",
    },
    words: [
      { id: '8:49:1', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "When", ur: "When" } },
      { id: '8:49:2', arabic: "يَقُولُ", transliteration: "yaqūlu", pos: ['V'], posLabel: 'V', root: "ق و ل", meaning: { en: "said", ur: "کہا" } },
      { id: '8:49:3', arabic: "ٱلْمُنَـٰفِقُونَ", transliteration: "l-munāfiqūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the hypocrites", ur: "the hypocrites" } },
      { id: '8:49:4', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who ", ur: "اور جو لوگ " } },
      { id: '8:49:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:49:6', arabic: "قُلُوبِهِم", transliteration: "qulūbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '8:49:7', arabic: "مَّرَضٌ", transliteration: "maraḍun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(was) a disease", ur: "(was) a disease" } },
      { id: '8:49:8', arabic: "غَرَّ", transliteration: "gharra", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(Had) deluded", ur: "(Had) deluded" } },
      { id: '8:49:9', arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "these (people)", ur: "these (لوگ)" } },
      { id: '8:49:10', arabic: "دِينُهُمْ ۗ", transliteration: "dīnuhum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their religion", ur: "their religion" } },
      { id: '8:49:11', arabic: "وَمَن", transliteration: "waman", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But whoever", ur: "لیکن whoever" } },
      { id: '8:49:12', arabic: "يَتَوَكَّلْ", transliteration: "yatawakkal", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "puts (his) trust", ur: "puts (his) trust" } },
      { id: '8:49:13', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:49:14', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:49:15', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '8:49:16', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:49:17', arabic: "عَزِيزٌ", transliteration: "ʿazīzun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Mighty", ur: "(is) سب-Mighty" } },
      { id: '8:49:18', arabic: "حَكِيمٌۭ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'موصوف + صفت' }
      ],
    },
  },
  50: {
    text: "وَلَوْ تَرَىٰٓ إِذْ يَتَوَفَّى ٱلَّذِينَ كَفَرُوا۟ ۙ ٱلْمَلَـٰٓئِكَةُ يَضْرِبُونَ وُجُوهَهُمْ وَأَدْبَـٰرَهُمْ وَذُوقُوا۟ عَذَابَ ٱلْحَرِيقِ",
    translation: {
      en: "",
      ur: "اور کاش تم اس وقت (کی کیفیت) دیکھو۔ جب فرشتے کافروں کی جانیں نکالتے ہیں ان کے مونہوں اور پیٹھوں پر (کوڑے اور ہتھوڑے وغیرہ) مارتے (ہیں اور کہتے ہیں) کہ (اب) عذاب آتش (کا مزہ) چکھو",
    },
    words: [
      { id: '8:50:1', arabic: "وَلَوْ", transliteration: "walaw", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:50:2', arabic: "تَرَىٰٓ", transliteration: "tarā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (could) see", ur: "تم (could) دیکھنا" } },
      { id: '8:50:3', arabic: "إِذْ", transliteration: "idh", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "when", ur: "when" } },
      { id: '8:50:4', arabic: "يَتَوَفَّى", transliteration: "yatawaffā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take away souls", ur: "take away souls" } },
      { id: '8:50:5', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) those who", ur: "(of) جو لوگ" } },
      { id: '8:50:6', arabic: "كَفَرُوا۟ ۙ", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:50:7', arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the Angels", ur: "the Angels" } },
      { id: '8:50:8', arabic: "يَضْرِبُونَ", transliteration: "yaḍribūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "striking", ur: "striking" } },
      { id: '8:50:9', arabic: "وُجُوهَهُمْ", transliteration: "wujūhahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their faces", ur: "their faces" } },
      { id: '8:50:10', arabic: "وَأَدْبَـٰرَهُمْ", transliteration: "wa-adbārahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and their backs", ur: "اور their backs" } },
      { id: '8:50:11', arabic: "وَذُوقُوا۟", transliteration: "wadhūqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "Taste", ur: "Taste" } },
      { id: '8:50:12', arabic: "عَذَابَ", transliteration: "ʿadhāba", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) punishment", ur: "(the) عذاب" } },
      { id: '8:50:13', arabic: "ٱلْحَرِيقِ", transliteration: "l-ḥarīqi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the Blazing Fire", ur: "(of) the Blazing آگ" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  51: {
    text: "ذَٰلِكَ بِمَا قَدَّمَتْ أَيْدِيكُمْ وَأَنَّ ٱللَّهَ لَيْسَ بِظَلَّـٰمٍۢ لِّلْعَبِيدِ",
    translation: {
      en: "",
      ur: "یہ ان (اعمال) کی سزا ہے جو تمہارے ہاتھوں نے آگے بھیجے ہیں۔ اور یہ (جان رکھو) کہ خدا بندوں پر ظلم نہیں کرتا",
    },
    words: [
      { id: '8:51:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '8:51:2', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) for what", ur: "(is) for کیا" } },
      { id: '8:51:3', arabic: "قَدَّمَتْ", transliteration: "qaddamat", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "sent forth", ur: "sent forth" } },
      { id: '8:51:4', arabic: "أَيْدِيكُمْ", transliteration: "aydīkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your hands", ur: "your hands" } },
      { id: '8:51:5', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '8:51:6', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:51:7', arabic: "لَيْسَ", transliteration: "laysa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) not", ur: "(is) نہیں" } },
      { id: '8:51:8', arabic: "بِظَلَّـٰمٍۢ", transliteration: "biẓallāmin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "unjust", ur: "unjust" } },
      { id: '8:51:9', arabic: "لِّلْعَبِيدِ", transliteration: "lil'ʿabīdi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to His slaves", ur: "کو His slaves" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    text: "كَدَأْبِ ءَالِ فِرْعَوْنَ ۙ وَٱلَّذِينَ مِن قَبْلِهِمْ ۚ كَفَرُوا۟ بِـَٔايَـٰتِ ٱللَّهِ فَأَخَذَهُمُ ٱللَّهُ بِذُنُوبِهِمْ ۗ إِنَّ ٱللَّهَ قَوِىٌّۭ شَدِيدُ ٱلْعِقَابِ",
    translation: {
      en: "",
      ur: "جیسا حال فرعوینوں اور ان سے پہلے لوگوں کا (ہوا تھا ویسا ہی ان کا ہوا کہ) انہوں نے خدا کی آیتوں سے کفر کیا تو خدا نےان کے گناہوں کی سزا میں ان کو پکڑ لیا۔ بےشک خدا زبردست اور سخت عذاب دینے والا ہے",
    },
    words: [
      { id: '8:52:1', arabic: "كَدَأْبِ", transliteration: "kadabi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Like (the) way", ur: "Like (the) راستہ" } },
      { id: '8:52:2', arabic: "ءَالِ", transliteration: "āli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) people", ur: "(of) لوگ" } },
      { id: '8:52:3', arabic: "فِرْعَوْنَ ۙ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '8:52:4', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '8:52:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(were) from", ur: "(were) سے" } },
      { id: '8:52:6', arabic: "قَبْلِهِمْ ۚ", transliteration: "qablihim", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before them", ur: "پہلے them" } },
      { id: '8:52:7', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['V'], posLabel: 'V', root: "ك ف ر", meaning: { en: "They disbelieved", ur: "وہ لوگ disbelieved" } },
      { id: '8:52:8', arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "in (the) Signs", ur: "میں (the) نشانیاں" } },
      { id: '8:52:9', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:52:10', arabic: "فَأَخَذَهُمُ", transliteration: "fa-akhadhahumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "so seized them", ur: "so seized them" } },
      { id: '8:52:11', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:52:12', arabic: "بِذُنُوبِهِمْ ۗ", transliteration: "bidhunūbihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their sins", ur: "for their sins" } },
      { id: '8:52:13', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:52:14', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:52:15', arabic: "قَوِىٌّۭ", transliteration: "qawiyyun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Strong", ur: "(is) سب-Strong" } },
      { id: '8:52:16', arabic: "شَدِيدُ", transliteration: "shadīdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(and) severe", ur: "(اور) severe" } },
      { id: '8:52:17', arabic: "ٱلْعِقَابِ", transliteration: "l-ʿiqābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) the penalty", ur: "(میں) the penalty" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'موصوف + صفت' },
        { from: 16, to: 17, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  53: {
    text: "ذَٰلِكَ بِأَنَّ ٱللَّهَ لَمْ يَكُ مُغَيِّرًۭا نِّعْمَةً أَنْعَمَهَا عَلَىٰ قَوْمٍ حَتَّىٰ يُغَيِّرُوا۟ مَا بِأَنفُسِهِمْ ۙ وَأَنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌۭ",
    translation: {
      en: "",
      ur: "یہ اس لیے کہ جو نعمت خدا کسی قوم کو دیا کرتا ہے جب تک وہ خود اپنے دلوں کی حالت نہ بدل ڈالیں خدا اسے نہیں بدلا کرتا۔ اور اس لیے کہ خدا سنتا جانتا ہے",
    },
    words: [
      { id: '8:53:1', arabic: "ذَٰلِكَ", transliteration: "dhālika", pos: ['DEM'], posLabel: 'DEM', root: null, meaning: { en: "That", ur: "وہ" } },
      { id: '8:53:2', arabic: "بِأَنَّ", transliteration: "bi-anna", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(is) because", ur: "(is) because" } },
      { id: '8:53:3', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:53:4', arabic: "لَمْ", transliteration: "lam", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '8:53:5', arabic: "يَكُ", transliteration: "yaku", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is", ur: "is" } },
      { id: '8:53:6', arabic: "مُغَيِّرًۭا", transliteration: "mughayyiran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "One Who changes", ur: "One جو changes" } },
      { id: '8:53:7', arabic: "نِّعْمَةً", transliteration: "niʿ'matan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a favor", ur: "a favor" } },
      { id: '8:53:8', arabic: "أَنْعَمَهَا", transliteration: "anʿamahā", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "which He had bestowed", ur: "جو وہ had bestowed" } },
      { id: '8:53:9', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '8:53:10', arabic: "قَوْمٍ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '8:53:11', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '8:53:12', arabic: "يُغَيِّرُوا۟", transliteration: "yughayyirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they change", ur: "وہ لوگ change" } },
      { id: '8:53:13', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "what", ur: "کیا" } },
      { id: '8:53:14', arabic: "بِأَنفُسِهِمْ ۙ", transliteration: "bi-anfusihim", pos: ['P+N'], posLabel: 'P+N', root: "ن ف س", meaning: { en: "(is) in themselves", ur: "(is) میں themselves" } },
      { id: '8:53:15', arabic: "وَأَنَّ", transliteration: "wa-anna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And indeed", ur: "اور بیشک" } },
      { id: '8:53:16', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:53:17', arabic: "سَمِيعٌ", transliteration: "samīʿun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) All-Hearing", ur: "(is) سب سننے والا" } },
      { id: '8:53:18', arabic: "عَلِيمٌۭ", transliteration: "ʿalīmun", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "All-Knowing", ur: "سب جاننے والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    text: "كَدَأْبِ ءَالِ فِرْعَوْنَ ۙ وَٱلَّذِينَ مِن قَبْلِهِمْ ۚ كَذَّبُوا۟ بِـَٔايَـٰتِ رَبِّهِمْ فَأَهْلَكْنَـٰهُم بِذُنُوبِهِمْ وَأَغْرَقْنَآ ءَالَ فِرْعَوْنَ ۚ وَكُلٌّۭ كَانُوا۟ ظَـٰلِمِينَ",
    translation: {
      en: "",
      ur: "جیسا حال فرعونیوں اور ان سے پہلے لوگوں کا (ہوا تھا ویسا ہی ان کا ہوا) انہوں نے اپنے پروردگار کی آیتوں کو جھٹلایا تو ہم نے ان کو ان کے گناہوں کے سبب ہلاک کر ڈالا اور فرعونیوں کو ڈبو دیا۔ اور وہ سب ظالم تھے",
    },
    words: [
      { id: '8:54:1', arabic: "كَدَأْبِ", transliteration: "kadabi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Like (the) way", ur: "Like (the) راستہ" } },
      { id: '8:54:2', arabic: "ءَالِ", transliteration: "āli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) people", ur: "(of) لوگ" } },
      { id: '8:54:3', arabic: "فِرْعَوْنَ ۙ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '8:54:4', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '8:54:5', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(were) from", ur: "(were) سے" } },
      { id: '8:54:6', arabic: "قَبْلِهِمْ ۚ", transliteration: "qablihim", pos: ['N'], posLabel: 'N', root: "ق ب ل", meaning: { en: "before them", ur: "پہلے them" } },
      { id: '8:54:7', arabic: "كَذَّبُوا۟", transliteration: "kadhabū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "They denied", ur: "وہ لوگ denied" } },
      { id: '8:54:8', arabic: "بِـَٔايَـٰتِ", transliteration: "biāyāti", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "(the) Signs", ur: "(the) نشانیاں" } },
      { id: '8:54:9', arabic: "رَبِّهِمْ", transliteration: "rabbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) their Lord", ur: "(of) their رب" } },
      { id: '8:54:10', arabic: "فَأَهْلَكْنَـٰهُم", transliteration: "fa-ahlaknāhum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: "أ ه ل", meaning: { en: "so We destroyed them", ur: "so ہم destroyed them" } },
      { id: '8:54:11', arabic: "بِذُنُوبِهِمْ", transliteration: "bidhunūbihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for their sins", ur: "for their sins" } },
      { id: '8:54:12', arabic: "وَأَغْرَقْنَآ", transliteration: "wa-aghraqnā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and We drowned", ur: "اور ہم drowned" } },
      { id: '8:54:13', arabic: "ءَالَ", transliteration: "āla", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) people", ur: "(the) لوگ" } },
      { id: '8:54:14', arabic: "فِرْعَوْنَ ۚ", transliteration: "fir'ʿawna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Firaun", ur: "(of) Firaun" } },
      { id: '8:54:15', arabic: "وَكُلٌّۭ", transliteration: "wakullun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (they) all", ur: "اور (وہ لوگ) سب" } },
      { id: '8:54:16', arabic: "كَانُوا۟", transliteration: "kānū", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "were", ur: "were" } },
      { id: '8:54:17', arabic: "ظَـٰلِمِينَ", transliteration: "ẓālimīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "wrongdoers", ur: "wrongdoers" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  55: {
    text: "إِنَّ شَرَّ ٱلدَّوَآبِّ عِندَ ٱللَّهِ ٱلَّذِينَ كَفَرُوا۟ فَهُمْ لَا يُؤْمِنُونَ",
    translation: {
      en: "",
      ur: "جانداروں میں سب سے بدتر خدا کے نزدیک وہ لوگ ہیں جو کافر ہیں سو وہ ایمان نہیں لاتے",
    },
    words: [
      { id: '8:55:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:55:2', arabic: "شَرَّ", transliteration: "sharra", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) worst", ur: "(the) worst" } },
      { id: '8:55:3', arabic: "ٱلدَّوَآبِّ", transliteration: "l-dawābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the living creatures", ur: "(of) the living creatures" } },
      { id: '8:55:4', arabic: "عِندَ", transliteration: "ʿinda", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "near", ur: "near" } },
      { id: '8:55:5', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:55:6', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) those who", ur: "(are) جو لوگ" } },
      { id: '8:55:7', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:55:8', arabic: "فَهُمْ", transliteration: "fahum", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '8:55:9', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '8:55:10', arabic: "يُؤْمِنُونَ", transliteration: "yu'minūna", pos: ['V'], posLabel: 'V', root: "أ م ن", meaning: { en: "believe", ur: "ایمان لانا" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 9, to: 10, label: 'نفی + فعل' }
      ],
    },
  },
  56: {
    text: "ٱلَّذِينَ عَـٰهَدتَّ مِنْهُمْ ثُمَّ يَنقُضُونَ عَهْدَهُمْ فِى كُلِّ مَرَّةٍۢ وَهُمْ لَا يَتَّقُونَ",
    translation: {
      en: "",
      ur: "جن لوگوں سے تم نے (صلح کا) عہد کیا ہے پھر وہ ہر بار اپنے عہد کو توڑ ڈالتے ہیں اور (خدا سے) نہیں ڈرتے",
    },
    words: [
      { id: '8:56:1', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Those who ", ur: "جو لوگ " } },
      { id: '8:56:2', arabic: "عَـٰهَدتَّ", transliteration: "ʿāhadtta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you made a covenant", ur: "تم made a covenant" } },
      { id: '8:56:3', arabic: "مِنْهُمْ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with them", ur: "ساتھ them" } },
      { id: '8:56:4', arabic: "ثُمَّ", transliteration: "thumma", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "then", ur: "پھر" } },
      { id: '8:56:5', arabic: "يَنقُضُونَ", transliteration: "yanquḍūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they break", ur: "وہ لوگ break" } },
      { id: '8:56:6', arabic: "عَهْدَهُمْ", transliteration: "ʿahdahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their covenant", ur: "their covenant" } },
      { id: '8:56:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "[in]", ur: "[میں]" } },
      { id: '8:56:8', arabic: "كُلِّ", transliteration: "kulli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "every", ur: "ہر" } },
      { id: '8:56:9', arabic: "مَرَّةٍۢ", transliteration: "marratin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "time", ur: "وقت" } },
      { id: '8:56:10', arabic: "وَهُمْ", transliteration: "wahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and they", ur: "اور وہ لوگ" } },
      { id: '8:56:11', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(do) not", ur: "(do) نہیں" } },
      { id: '8:56:12', arabic: "يَتَّقُونَ", transliteration: "yattaqūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "fear (Allah)", ur: "ڈرنا (اللہ)" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 11, to: 12, label: 'نفی + فعل' }
      ],
    },
  },
  57: {
    text: "فَإِمَّا تَثْقَفَنَّهُمْ فِى ٱلْحَرْبِ فَشَرِّدْ بِهِم مَّنْ خَلْفَهُمْ لَعَلَّهُمْ يَذَّكَّرُونَ",
    translation: {
      en: "",
      ur: "اگر تم ان کو لڑائی میں پاؤ تو انہیں ایسی سزا دو کہ جو لوگ ان کے پس پشت ہیں وہ ان کو دیکھ کر بھاگ جائیں عجب نہیں کہ ان کو (اس سے) عبرت ہو",
    },
    words: [
      { id: '8:57:1', arabic: "فَإِمَّا", transliteration: "fa-immā", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So if", ur: "So if" } },
      { id: '8:57:2', arabic: "تَثْقَفَنَّهُمْ", transliteration: "tathqafannahum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you gain dominance over them", ur: "تم gain dominance اوپر them" } },
      { id: '8:57:3', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:57:4', arabic: "ٱلْحَرْبِ", transliteration: "l-ḥarbi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the war", ur: "the war" } },
      { id: '8:57:5', arabic: "فَشَرِّدْ", transliteration: "fasharrid", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "disperse", ur: "disperse" } },
      { id: '8:57:6', arabic: "بِهِم", transliteration: "bihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "by them", ur: "by them" } },
      { id: '8:57:7', arabic: "مَّنْ", transliteration: "man", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(those) who", ur: "(those) جو" } },
      { id: '8:57:8', arabic: "خَلْفَهُمْ", transliteration: "khalfahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) behind them", ur: "(are) behind them" } },
      { id: '8:57:9', arabic: "لَعَلَّهُمْ", transliteration: "laʿallahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "so that they may", ur: "so وہ وہ لوگ may" } },
      { id: '8:57:10', arabic: "يَذَّكَّرُونَ", transliteration: "yadhakkarūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "take heed", ur: "take heed" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  58: {
    text: "وَإِمَّا تَخَافَنَّ مِن قَوْمٍ خِيَانَةًۭ فَٱنۢبِذْ إِلَيْهِمْ عَلَىٰ سَوَآءٍ ۚ إِنَّ ٱللَّهَ لَا يُحِبُّ ٱلْخَآئِنِينَ",
    translation: {
      en: "",
      ur: "اور اگر تم کو کسی قوم سے دغا بازی کا خوف ہو تو (ان کا عہد) انہیں کی طرف پھینک دو (اور) برابر (کا جواب دو) کچھ شک نہیں کہ خدا دغابازوں کو دوست نہیں رکھتا",
    },
    words: [
      { id: '8:58:1', arabic: "وَإِمَّا", transliteration: "wa-immā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:58:2', arabic: "تَخَافَنَّ", transliteration: "takhāfanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you fear", ur: "تم ڈرنا" } },
      { id: '8:58:3', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:58:4', arabic: "قَوْمٍ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '8:58:5', arabic: "خِيَانَةًۭ", transliteration: "khiyānatan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "betrayal", ur: "betrayal" } },
      { id: '8:58:6', arabic: "فَٱنۢبِذْ", transliteration: "fa-inbidh", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "throw back", ur: "throw back" } },
      { id: '8:58:7', arabic: "إِلَيْهِمْ", transliteration: "ilayhim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to them", ur: "کو them" } },
      { id: '8:58:8', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "on", ur: "پر" } },
      { id: '8:58:9', arabic: "سَوَآءٍ ۚ", transliteration: "sawāin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "equal (terms)", ur: "equal (terms)" } },
      { id: '8:58:10', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:58:11', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:58:12', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(does) not", ur: "(does) نہیں" } },
      { id: '8:58:13', arabic: "يُحِبُّ", transliteration: "yuḥibbu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "love", ur: "love" } },
      { id: '8:58:14', arabic: "ٱلْخَآئِنِينَ", transliteration: "l-khāinīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the traitors", ur: "the traitors" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'نفی + فعل' },
        { from: 13, to: 14, label: 'فعل + فاعل' }
      ],
    },
  },
  59: {
    text: "وَلَا يَحْسَبَنَّ ٱلَّذِينَ كَفَرُوا۟ سَبَقُوٓا۟ ۚ إِنَّهُمْ لَا يُعْجِزُونَ",
    translation: {
      en: "",
      ur: "اور کافر یہ نہ خیال کریں کہ وہ بھاگ نکلے ہیں۔ وہ (اپنی چالوں سے ہم کو) ہرگز عاجز نہیں کرسکتے",
    },
    words: [
      { id: '8:59:1', arabic: "وَلَا", transliteration: "walā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And (let) not", ur: "اور (let) نہیں" } },
      { id: '8:59:2', arabic: "يَحْسَبَنَّ", transliteration: "yaḥsabanna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "think", ur: "think" } },
      { id: '8:59:3', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:59:4', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:59:5', arabic: "سَبَقُوٓا۟ ۚ", transliteration: "sabaqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they can outstrip", ur: "وہ لوگ can outstrip" } },
      { id: '8:59:6', arabic: "إِنَّهُمْ", transliteration: "innahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" } },
      { id: '8:59:7', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(can) not", ur: "(can) نہیں" } },
      { id: '8:59:8', arabic: "يُعْجِزُونَ", transliteration: "yuʿ'jizūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "escape", ur: "escape" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'نفی + فعل' }
      ],
    },
  },
  60: {
    text: "وَأَعِدُّوا۟ لَهُم مَّا ٱسْتَطَعْتُم مِّن قُوَّةٍۢ وَمِن رِّبَاطِ ٱلْخَيْلِ تُرْهِبُونَ بِهِۦ عَدُوَّ ٱللَّهِ وَعَدُوَّكُمْ وَءَاخَرِينَ مِن دُونِهِمْ لَا تَعْلَمُونَهُمُ ٱللَّهُ يَعْلَمُهُمْ ۚ وَمَا تُنفِقُوا۟ مِن شَىْءٍۢ فِى سَبِيلِ ٱللَّهِ يُوَفَّ إِلَيْكُمْ وَأَنتُمْ لَا تُظْلَمُونَ",
    translation: {
      en: "",
      ur: "اور جہاں تک ہوسکے (فوج کی جمعیت کے) زور سے اور گھوڑوں کے تیار رکھنے سے ان کے (مقابلے کے) لیے مستعد رہو کہ اس سے خدا کے دشمنوں اور تمہارے دشمنوں اور ان کے سوا اور لوگوں پر جن کو تم نہیں جانتے اور خدا جانتا ہے ہیبت بیٹھی رہے گی۔ اور تم جو کچھ راہ خدا میں خرچ کرو گے اس کا ثواب تم کو پورا پورا دیا جائے گا اور تمہارا ذرا نقصان نہیں کیا جائے گا",
    },
    words: [
      { id: '8:60:1', arabic: "وَأَعِدُّوا۟", transliteration: "wa-aʿiddū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And prepare", ur: "اور prepare" } },
      { id: '8:60:2', arabic: "لَهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for them", ur: "for them" } },
      { id: '8:60:3', arabic: "مَّا", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '8:60:4', arabic: "ٱسْتَطَعْتُم", transliteration: "is'taṭaʿtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you able (to)", ur: "تم able (کو)" } },
      { id: '8:60:5', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '8:60:6', arabic: "قُوَّةٍۢ", transliteration: "quwwatin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "force", ur: "force" } },
      { id: '8:60:7', arabic: "وَمِن", transliteration: "wamin", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and of", ur: "اور of" } },
      { id: '8:60:8', arabic: "رِّبَاطِ", transliteration: "ribāṭi", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "tethered", ur: "tethered" } },
      { id: '8:60:9', arabic: "ٱلْخَيْلِ", transliteration: "l-khayli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "horses", ur: "horses" } },
      { id: '8:60:10', arabic: "تُرْهِبُونَ", transliteration: "tur'hibūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(to) terrify", ur: "(کو) terrify" } },
      { id: '8:60:11', arabic: "بِهِۦ", transliteration: "bihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "therewith", ur: "therewith" } },
      { id: '8:60:12', arabic: "عَدُوَّ", transliteration: "ʿaduwwa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) enemy", ur: "(the) enemy" } },
      { id: '8:60:13', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:60:14', arabic: "وَعَدُوَّكُمْ", transliteration: "waʿaduwwakum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and your enemy", ur: "اور your enemy" } },
      { id: '8:60:15', arabic: "وَءَاخَرِينَ", transliteration: "waākharīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and others", ur: "اور others" } },
      { id: '8:60:16', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:60:17', arabic: "دُونِهِمْ", transliteration: "dūnihim", pos: ['N'], posLabel: 'N', root: "د و ن", meaning: { en: "besides them", ur: "besides them" } },
      { id: '8:60:18', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '8:60:19', arabic: "تَعْلَمُونَهُمُ", transliteration: "taʿlamūnahumu", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "(do) you know them", ur: "(do) تم جاننا them" } },
      { id: '8:60:20', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(but) Allah", ur: "(لیکن) اللہ" } },
      { id: '8:60:21', arabic: "يَعْلَمُهُمْ ۚ", transliteration: "yaʿlamuhum", pos: ['V'], posLabel: 'V', root: "ع ل م", meaning: { en: "knows them", ur: "knows them" } },
      { id: '8:60:22', arabic: "وَمَا", transliteration: "wamā", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And whatever", ur: "اور whatever" } },
      { id: '8:60:23', arabic: "تُنفِقُوا۟", transliteration: "tunfiqū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you spend", ur: "تم spend" } },
      { id: '8:60:24', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:60:25', arabic: "شَىْءٍۢ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(any) thing", ur: "(any) thing" } },
      { id: '8:60:26', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:60:27', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '8:60:28', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:60:29', arabic: "يُوَفَّ", transliteration: "yuwaffa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "it will be fully repaid", ur: "it will be fully repaid" } },
      { id: '8:60:30', arabic: "إِلَيْكُمْ", transliteration: "ilaykum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to you", ur: "کو تم" } },
      { id: '8:60:31', arabic: "وَأَنتُمْ", transliteration: "wa-antum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and you", ur: "اور تم" } },
      { id: '8:60:32', arabic: "لَا", transliteration: "lā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(will) not", ur: "(will) نہیں" } },
      { id: '8:60:33', arabic: "تُظْلَمُونَ", transliteration: "tuẓ'lamūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "be wronged", ur: "be wronged" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'جار + مجرور' },
        { from: 16, to: 17, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'نفی + فعل' },
        { from: 19, to: 20, label: 'فعل + فاعل' },
        { from: 26, to: 27, label: 'جار + مجرور' },
        { from: 29, to: 30, label: 'فعل + فاعل' },
        { from: 32, to: 33, label: 'نفی + فعل' }
      ],
    },
  },
  61: {
    text: "۞ وَإِن جَنَحُوا۟ لِلسَّلْمِ فَٱجْنَحْ لَهَا وَتَوَكَّلْ عَلَى ٱللَّهِ ۚ إِنَّهُۥ هُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ",
    translation: {
      en: "",
      ur: "اور اگر یہ لوگ صلح کی طرف مائل ہوں تو تم بھی اس کی طرف مائل ہو جاؤ اور خدا پر بھروسہ رکھو۔ کچھ شک نہیں کہ وہ سب کچھ سنتا (اور) جانتا ہے",
    },
    words: [
      { id: '8:61:1', arabic: "۞ وَإِن", transliteration: "wa-in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:61:2', arabic: "جَنَحُوا۟", transliteration: "janaḥū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they incline", ur: "وہ لوگ incline" } },
      { id: '8:61:3', arabic: "لِلسَّلْمِ", transliteration: "lilssalmi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "to peace", ur: "کو peace" } },
      { id: '8:61:4', arabic: "فَٱجْنَحْ", transliteration: "fa-ij'naḥ", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then you (also) incline", ur: "پھر تم (also) incline" } },
      { id: '8:61:5', arabic: "لَهَا", transliteration: "lahā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to it", ur: "کو it" } },
      { id: '8:61:6', arabic: "وَتَوَكَّلْ", transliteration: "watawakkal", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and put (your) trust", ur: "اور put (your) trust" } },
      { id: '8:61:7', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:61:8', arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:61:9', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:61:10', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '8:61:11', arabic: "ٱلسَّمِيعُ", transliteration: "l-samīʿu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Hearer", ur: "(is) سب-Hearer" } },
      { id: '8:61:12', arabic: "ٱلْعَلِيمُ", transliteration: "l-ʿalīmu", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Knower", ur: "سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  62: {
    text: "وَإِن يُرِيدُوٓا۟ أَن يَخْدَعُوكَ فَإِنَّ حَسْبَكَ ٱللَّهُ ۚ هُوَ ٱلَّذِىٓ أَيَّدَكَ بِنَصْرِهِۦ وَبِٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اور اگر یہ چاہیں کہ تم کو فریب دیں تو خدا تمہیں کفایت کرے گا۔ وہی تو ہے جس نے تم کو اپنی مدد سے اور مسلمانوں (کی جمعیت) سے تقویت بخشی",
    },
    words: [
      { id: '8:62:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '8:62:2', arabic: "يُرِيدُوٓا۟", transliteration: "yurīdū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they intend", ur: "وہ لوگ intend" } },
      { id: '8:62:3', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '8:62:4', arabic: "يَخْدَعُوكَ", transliteration: "yakhdaʿūka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "deceive you", ur: "deceive تم" } },
      { id: '8:62:5', arabic: "فَإِنَّ", transliteration: "fa-inna", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then indeed", ur: "پھر بیشک" } },
      { id: '8:62:6', arabic: "حَسْبَكَ", transliteration: "ḥasbaka", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "is sufficient for you", ur: "is sufficient for تم" } },
      { id: '8:62:7', arabic: "ٱللَّهُ ۚ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:62:8', arabic: "هُوَ", transliteration: "huwa", pos: ['PRON'], posLabel: 'PRON', root: null, meaning: { en: "He", ur: "وہ" } },
      { id: '8:62:9', arabic: "ٱلَّذِىٓ", transliteration: "alladhī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) the One Who", ur: "(is) the One جو" } },
      { id: '8:62:10', arabic: "أَيَّدَكَ", transliteration: "ayyadaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "supported you", ur: "supported تم" } },
      { id: '8:62:11', arabic: "بِنَصْرِهِۦ", transliteration: "binaṣrihi", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with His help", ur: "ساتھ His help" } },
      { id: '8:62:12', arabic: "وَبِٱلْمُؤْمِنِينَ", transliteration: "wabil-mu'minīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and with the believers", ur: "اور ساتھ the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  63: {
    text: "وَأَلَّفَ بَيْنَ قُلُوبِهِمْ ۚ لَوْ أَنفَقْتَ مَا فِى ٱلْأَرْضِ جَمِيعًۭا مَّآ أَلَّفْتَ بَيْنَ قُلُوبِهِمْ وَلَـٰكِنَّ ٱللَّهَ أَلَّفَ بَيْنَهُمْ ۚ إِنَّهُۥ عَزِيزٌ حَكِيمٌۭ",
    translation: {
      en: "",
      ur: "اور ان کے دلوں میں الفت پیدا کردی۔ اور اگر تم دنیا بھر کی دولت خرچ کرتے تب بھی ان کے دلوں میں الفت نہ پیدا کرسکتے۔ مگر خدا ہی نے ان میں الفت ڈال دی۔ بےشک وہ زبردست (اور) حکمت والا ہے",
    },
    words: [
      { id: '8:63:1', arabic: "وَأَلَّفَ", transliteration: "wa-allafa", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And He (has) put affection", ur: "اور وہ (has) put affection" } },
      { id: '8:63:2', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '8:63:3', arabic: "قُلُوبِهِمْ ۚ", transliteration: "qulūbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '8:63:4', arabic: "لَوْ", transliteration: "law", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '8:63:5', arabic: "أَنفَقْتَ", transliteration: "anfaqta", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you (had) spent", ur: "تم (had) spent" } },
      { id: '8:63:6', arabic: "مَا", transliteration: "mā", pos: ['REL'], posLabel: 'REL', root: null, meaning: { en: "whatever", ur: "whatever" } },
      { id: '8:63:7', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '8:63:8', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '8:63:9', arabic: "جَمِيعًۭا", transliteration: "jamīʿan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "all", ur: "سب" } },
      { id: '8:63:10', arabic: "مَّآ", transliteration: "mā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "not", ur: "نہیں" } },
      { id: '8:63:11', arabic: "أَلَّفْتَ", transliteration: "allafta", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(could) you (have) put affection", ur: "(could) تم (have) put affection" } },
      { id: '8:63:12', arabic: "بَيْنَ", transliteration: "bayna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between", ur: "درمیان" } },
      { id: '8:63:13', arabic: "قُلُوبِهِمْ", transliteration: "qulūbihim", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "their hearts", ur: "their hearts" } },
      { id: '8:63:14', arabic: "وَلَـٰكِنَّ", transliteration: "walākinna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but", ur: "لیکن" } },
      { id: '8:63:15', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:63:16', arabic: "أَلَّفَ", transliteration: "allafa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(has) put affection", ur: "(has) put affection" } },
      { id: '8:63:17', arabic: "بَيْنَهُمْ ۚ", transliteration: "baynahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between them", ur: "درمیان them" } },
      { id: '8:63:18', arabic: "إِنَّهُۥ", transliteration: "innahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Indeed, He", ur: "بیشک, وہ" } },
      { id: '8:63:19', arabic: "عَزِيزٌ", transliteration: "ʿazīzun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Mighty", ur: "(is) سب-Mighty" } },
      { id: '8:63:20', arabic: "حَكِيمٌۭ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'موصوف + صفت' }
      ],
    },
  },
  64: {
    text: "يَـٰٓأَيُّهَا ٱلنَّبِىُّ حَسْبُكَ ٱللَّهُ وَمَنِ ٱتَّبَعَكَ مِنَ ٱلْمُؤْمِنِينَ",
    translation: {
      en: "",
      ur: "اے نبی! خدا تم کو اور مومنوں کو جو تمہارے پیرو ہیں کافی ہے",
    },
    words: [
      { id: '8:64:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '8:64:2', arabic: "ٱلنَّبِىُّ", transliteration: "l-nabiyu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Prophet", ur: "نبی" } },
      { id: '8:64:3', arabic: "حَسْبُكَ", transliteration: "ḥasbuka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Sufficient for you", ur: "Sufficient for تم" } },
      { id: '8:64:4', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) Allah", ur: "(is) اللہ" } },
      { id: '8:64:5', arabic: "وَمَنِ", transliteration: "wamani", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and whoever", ur: "اور whoever" } },
      { id: '8:64:6', arabic: "ٱتَّبَعَكَ", transliteration: "ittabaʿaka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "follows you", ur: "follows تم" } },
      { id: '8:64:7', arabic: "مِنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '8:64:8', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  65: {
    text: "يَـٰٓأَيُّهَا ٱلنَّبِىُّ حَرِّضِ ٱلْمُؤْمِنِينَ عَلَى ٱلْقِتَالِ ۚ إِن يَكُن مِّنكُمْ عِشْرُونَ صَـٰبِرُونَ يَغْلِبُوا۟ مِا۟ئَتَيْنِ ۚ وَإِن يَكُن مِّنكُم مِّا۟ئَةٌۭ يَغْلِبُوٓا۟ أَلْفًۭا مِّنَ ٱلَّذِينَ كَفَرُوا۟ بِأَنَّهُمْ قَوْمٌۭ لَّا يَفْقَهُونَ",
    translation: {
      en: "",
      ur: "اے نبی! مسلمانوں کو جہاد کی ترغیب دو۔ اور اگر تم بیس آدمی ثابت قدم رہنے والے ہوں گے تو دو سو کافروں پر غالب رہیں گے۔ اور اگر سو (ایسے) ہوں گے تو ہزار پر غالب رہیں گے۔ اس لیے کہ کافر ایسے لوگ ہیں کہ کچھ بھی سمجھ نہیں رکھتے",
    },
    words: [
      { id: '8:65:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '8:65:2', arabic: "ٱلنَّبِىُّ", transliteration: "l-nabiyu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Prophet", ur: "نبی" } },
      { id: '8:65:3', arabic: "حَرِّضِ", transliteration: "ḥarriḍi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Urge", ur: "Urge" } },
      { id: '8:65:4', arabic: "ٱلْمُؤْمِنِينَ", transliteration: "l-mu'minīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '8:65:5', arabic: "عَلَى", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "to", ur: "کو" } },
      { id: '8:65:6', arabic: "ٱلْقِتَالِ ۚ", transliteration: "l-qitāli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "[the] fight", ur: "[the] fight" } },
      { id: '8:65:7', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '8:65:8', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there) are", ur: "(there) are" } },
      { id: '8:65:9', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '8:65:10', arabic: "عِشْرُونَ", transliteration: "ʿish'rūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "twenty", ur: "twenty" } },
      { id: '8:65:11', arabic: "صَـٰبِرُونَ", transliteration: "ṣābirūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "steadfast", ur: "steadfast" } },
      { id: '8:65:12', arabic: "يَغْلِبُوا۟", transliteration: "yaghlibū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will overcome", ur: "وہ لوگ will overcome" } },
      { id: '8:65:13', arabic: "مِا۟ئَتَيْنِ ۚ", transliteration: "mi-atayni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "two hundred", ur: "two hundred" } },
      { id: '8:65:14', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:65:15', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there) are", ur: "(there) are" } },
      { id: '8:65:16', arabic: "مِّنكُم", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '8:65:17', arabic: "مِّا۟ئَةٌۭ", transliteration: "mi-atun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a hundred", ur: "a hundred" } },
      { id: '8:65:18', arabic: "يَغْلِبُوٓا۟", transliteration: "yaghlibū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will overcome", ur: "وہ لوگ will overcome" } },
      { id: '8:65:19', arabic: "أَلْفًۭا", transliteration: "alfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a thousand", ur: "a thousand" } },
      { id: '8:65:20', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '8:65:21', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:65:22', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:65:23', arabic: "بِأَنَّهُمْ", transliteration: "bi-annahum", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "because they", ur: "because وہ لوگ" } },
      { id: '8:65:24', arabic: "قَوْمٌۭ", transliteration: "qawmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) a people", ur: "(are) a لوگ" } },
      { id: '8:65:25', arabic: "لَّا", transliteration: "lā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(who do) not", ur: "(جو do) نہیں" } },
      { id: '8:65:26', arabic: "يَفْقَهُونَ", transliteration: "yafqahūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "understand", ur: "understand" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 23, to: 24, label: 'جار + مجرور' }
      ],
    },
  },
  66: {
    text: "ٱلْـَٔـٰنَ خَفَّفَ ٱللَّهُ عَنكُمْ وَعَلِمَ أَنَّ فِيكُمْ ضَعْفًۭا ۚ فَإِن يَكُن مِّنكُم مِّا۟ئَةٌۭ صَابِرَةٌۭ يَغْلِبُوا۟ مِا۟ئَتَيْنِ ۚ وَإِن يَكُن مِّنكُمْ أَلْفٌۭ يَغْلِبُوٓا۟ أَلْفَيْنِ بِإِذْنِ ٱللَّهِ ۗ وَٱللَّهُ مَعَ ٱلصَّـٰبِرِينَ",
    translation: {
      en: "",
      ur: "اب خدا نے تم پر سے بوجھ ہلکا کر دیا اور معلوم کرلیا کہ (ابھی) تم میں کسی قدر کمزوری ہے۔ پس اگر تم میں ایک سو ثابت قدم رہنے والے ہوں گے تو دو سو پر غالب رہیں گے۔ اور اگر ایک ہزار ہوں گے تو خدا کے حکم سے دو ہزار پر غالب رہیں گے۔ اور خدا ثابت قدم رہنے والوں کا مدد گار ہے",
    },
    words: [
      { id: '8:66:1', arabic: "ٱلْـَٔـٰنَ", transliteration: "al-āna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Now", ur: "Now" } },
      { id: '8:66:2', arabic: "خَفَّفَ", transliteration: "khaffafa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "has (been) lightened", ur: "has (been) lightened" } },
      { id: '8:66:3', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(by) Allah", ur: "(by) اللہ" } },
      { id: '8:66:4', arabic: "عَنكُمْ", transliteration: "ʿankum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '8:66:5', arabic: "وَعَلِمَ", transliteration: "waʿalima", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ع ل م", meaning: { en: "and He knows", ur: "اور وہ knows" } },
      { id: '8:66:6', arabic: "أَنَّ", transliteration: "anna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '8:66:7', arabic: "فِيكُمْ", transliteration: "fīkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "in you", ur: "میں تم" } },
      { id: '8:66:8', arabic: "ضَعْفًۭا ۚ", transliteration: "ḍaʿfan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(there) is weakness", ur: "(there) is weakness" } },
      { id: '8:66:9', arabic: "فَإِن", transliteration: "fa-in", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So if", ur: "So if" } },
      { id: '8:66:10', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there) are", ur: "(there) are" } },
      { id: '8:66:11', arabic: "مِّنكُم", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '8:66:12', arabic: "مِّا۟ئَةٌۭ", transliteration: "mi-atun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "a hundred", ur: "a hundred" } },
      { id: '8:66:13', arabic: "صَابِرَةٌۭ", transliteration: "ṣābiratun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "steadfast", ur: "steadfast" } },
      { id: '8:66:14', arabic: "يَغْلِبُوا۟", transliteration: "yaghlibū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will overcome", ur: "وہ لوگ will overcome" } },
      { id: '8:66:15', arabic: "مِا۟ئَتَيْنِ ۚ", transliteration: "mi-atayni", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "two hundred", ur: "two hundred" } },
      { id: '8:66:16', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:66:17', arabic: "يَكُن", transliteration: "yakun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there) are", ur: "(there) are" } },
      { id: '8:66:18', arabic: "مِّنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "among you", ur: "among تم" } },
      { id: '8:66:19', arabic: "أَلْفٌۭ", transliteration: "alfun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a thousand", ur: "a thousand" } },
      { id: '8:66:20', arabic: "يَغْلِبُوٓا۟", transliteration: "yaghlibū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they will overcome", ur: "وہ لوگ will overcome" } },
      { id: '8:66:21', arabic: "أَلْفَيْنِ", transliteration: "alfayni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "two thousand", ur: "two thousand" } },
      { id: '8:66:22', arabic: "بِإِذْنِ", transliteration: "bi-idh'ni", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with (the) permission", ur: "ساتھ (the) permission" } },
      { id: '8:66:23', arabic: "ٱللَّهِ ۗ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:66:24', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:66:25', arabic: "مَعَ", transliteration: "maʿa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) with", ur: "(is) ساتھ" } },
      { id: '8:66:26', arabic: "ٱلصَّـٰبِرِينَ", transliteration: "l-ṣābirīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the steadfast", ur: "the steadfast" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 17, to: 18, label: 'فعل + فاعل' },
        { from: 20, to: 21, label: 'فعل + فاعل' },
        { from: 22, to: 23, label: 'جار + مجرور' },
        { from: 25, to: 26, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  67: {
    text: "مَا كَانَ لِنَبِىٍّ أَن يَكُونَ لَهُۥٓ أَسْرَىٰ حَتَّىٰ يُثْخِنَ فِى ٱلْأَرْضِ ۚ تُرِيدُونَ عَرَضَ ٱلدُّنْيَا وَٱللَّهُ يُرِيدُ ٱلْـَٔاخِرَةَ ۗ وَٱللَّهُ عَزِيزٌ حَكِيمٌۭ",
    translation: {
      en: "",
      ur: "پیغمبر کو شایان نہیں کہ اس کے قبضے میں قیدی رہیں جب تک (کافروں کو قتل کر کے) زمین میں کثرت سے خون (نہ) بہا دے۔ تم لوگ دنیا کے مال کے طالب ہو۔ اور خدا آخرت (کی بھلائی) چاہتا ہے۔ اور خدا غالب حکمت والا ہے",
    },
    words: [
      { id: '8:67:1', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "Not", ur: "نہیں" } },
      { id: '8:67:2', arabic: "كَانَ", transliteration: "kāna", pos: ['N'], posLabel: 'N', root: "ك و ن", meaning: { en: "is", ur: "is" } },
      { id: '8:67:3', arabic: "لِنَبِىٍّ", transliteration: "linabiyyin", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "for a Prophet", ur: "for a نبی" } },
      { id: '8:67:4', arabic: "أَن", transliteration: "an", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "that", ur: "وہ" } },
      { id: '8:67:5', arabic: "يَكُونَ", transliteration: "yakūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there) should be", ur: "(there) should be" } },
      { id: '8:67:6', arabic: "لَهُۥٓ", transliteration: "lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for him", ur: "for him" } },
      { id: '8:67:7', arabic: "أَسْرَىٰ", transliteration: "asrā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "prisoners of war", ur: "prisoners of war" } },
      { id: '8:67:8', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '8:67:9', arabic: "يُثْخِنَ", transliteration: "yuth'khina", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "he has battled strenuously", ur: "وہ has battled strenuously" } },
      { id: '8:67:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:67:11', arabic: "ٱلْأَرْضِ ۚ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the land", ur: "the land" } },
      { id: '8:67:12', arabic: "تُرِيدُونَ", transliteration: "turīdūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "You desire", ur: "تم desire" } },
      { id: '8:67:13', arabic: "عَرَضَ", transliteration: "ʿaraḍa", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) commodities", ur: "(the) commodities" } },
      { id: '8:67:14', arabic: "ٱلدُّنْيَا", transliteration: "l-dun'yā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) the world", ur: "(of) the دنیا" } },
      { id: '8:67:15', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "but Allah", ur: "لیکن اللہ" } },
      { id: '8:67:16', arabic: "يُرِيدُ", transliteration: "yurīdu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "desires", ur: "desires" } },
      { id: '8:67:17', arabic: "ٱلْـَٔاخِرَةَ ۗ", transliteration: "l-ākhirata", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(for you) the Hereafter", ur: "(for تم) the آخرت" } },
      { id: '8:67:18', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:67:19', arabic: "عَزِيزٌ", transliteration: "ʿazīzun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Mighty", ur: "(is) سب-Mighty" } },
      { id: '8:67:20', arabic: "حَكِيمٌۭ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' },
        { from: 16, to: 17, label: 'فعل + فاعل' }
      ],
    },
  },
  68: {
    text: "لَّوْلَا كِتَـٰبٌۭ مِّنَ ٱللَّهِ سَبَقَ لَمَسَّكُمْ فِيمَآ أَخَذْتُمْ عَذَابٌ عَظِيمٌۭ",
    translation: {
      en: "",
      ur: "اگر خدا کا حکم پہلے نہ ہوچکا ہوتا تو جو (فدیہ) تم نے لیا ہے اس کے بدلے تم پر بڑا عذاب نازل ہوتا",
    },
    words: [
      { id: '8:68:1', arabic: "لَّوْلَا", transliteration: "lawlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Had not", ur: "Had نہیں" } },
      { id: '8:68:2', arabic: "كِتَـٰبٌۭ", transliteration: "kitābun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "an ordainment", ur: "an ordainment" } },
      { id: '8:68:3', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:68:4', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:68:5', arabic: "سَبَقَ", transliteration: "sabaqa", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "preceded", ur: "preceded" } },
      { id: '8:68:6', arabic: "لَمَسَّكُمْ", transliteration: "lamassakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "surely (would) have touched you", ur: "یقیناً (would) have touched تم" } },
      { id: '8:68:7', arabic: "فِيمَآ", transliteration: "fīmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for what", ur: "for کیا" } },
      { id: '8:68:8', arabic: "أَخَذْتُمْ", transliteration: "akhadhtum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you took ", ur: "تم took " } },
      { id: '8:68:9', arabic: "عَذَابٌ", transliteration: "ʿadhābun", pos: ['N'], posLabel: 'N', root: "ع ذ ب", meaning: { en: "a punishment", ur: "a عذاب" } },
      { id: '8:68:10', arabic: "عَظِيمٌۭ", transliteration: "ʿaẓīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
  },
  69: {
    text: "فَكُلُوا۟ مِمَّا غَنِمْتُمْ حَلَـٰلًۭا طَيِّبًۭا ۚ وَٱتَّقُوا۟ ٱللَّهَ ۚ إِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
    translation: {
      en: "",
      ur: "تو جو مالِ غنیمت تمہیں ملا ہے اسے کھاؤ (کہ وہ تمہارے لیے) حلال طیب رہے اور خدا سے ڈرتے رہو۔ بےشک خدا بخشنے والا مہربان ہے",
    },
    words: [
      { id: '8:69:1', arabic: "فَكُلُوا۟", transliteration: "fakulū", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So eat", ur: "So eat" } },
      { id: '8:69:2', arabic: "مِمَّا", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from what", ur: "سے کیا" } },
      { id: '8:69:3', arabic: "غَنِمْتُمْ", transliteration: "ghanim'tum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you got as war booty ", ur: "تم got as war booty " } },
      { id: '8:69:4', arabic: "حَلَـٰلًۭا", transliteration: "ḥalālan", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "lawful", ur: "lawful" } },
      { id: '8:69:5', arabic: "طَيِّبًۭا ۚ", transliteration: "ṭayyiban", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(and) good", ur: "(اور) اچھا" } },
      { id: '8:69:6', arabic: "وَٱتَّقُوا۟", transliteration: "wa-ittaqū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and fear", ur: "اور ڈرنا" } },
      { id: '8:69:7', arabic: "ٱللَّهَ ۚ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:69:8', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:69:9', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:69:10', arabic: "غَفُورٌۭ", transliteration: "ghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) Oft-Forgiving", ur: "(is) Oft-Forgiving" } },
      { id: '8:69:11', arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    text: "يَـٰٓأَيُّهَا ٱلنَّبِىُّ قُل لِّمَن فِىٓ أَيْدِيكُم مِّنَ ٱلْأَسْرَىٰٓ إِن يَعْلَمِ ٱللَّهُ فِى قُلُوبِكُمْ خَيْرًۭا يُؤْتِكُمْ خَيْرًۭا مِّمَّآ أُخِذَ مِنكُمْ وَيَغْفِرْ لَكُمْ ۗ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ",
    translation: {
      en: "",
      ur: "اے پیغمبر جو قیدی تمہارے ہاتھ میں (گرفتار) ہیں ان سے کہہ دو کہ اگر خدا تمہارے دلوں میں نیکی معلوم کرے گا تو جو (مال) تم سے چھن گیا ہے اس سے بہتر تمہیں عنایت فرمائے گا اور تمہارے گناہ بھی معاف کر دے گا اور خدا بخشنے والا مہربان ہے",
    },
    words: [
      { id: '8:70:1', arabic: "يَـٰٓأَيُّهَا", transliteration: "yāayyuhā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "O", ur: "اے" } },
      { id: '8:70:2', arabic: "ٱلنَّبِىُّ", transliteration: "l-nabiyu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Prophet", ur: "نبی" } },
      { id: '8:70:3', arabic: "قُل", transliteration: "qul", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Say", ur: "کہو" } },
      { id: '8:70:4', arabic: "لِّمَن", transliteration: "liman", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "to whoever", ur: "کو whoever" } },
      { id: '8:70:5', arabic: "فِىٓ", transliteration: "fī", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) in", ur: "(is) میں" } },
      { id: '8:70:6', arabic: "أَيْدِيكُم", transliteration: "aydīkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your hands", ur: "your hands" } },
      { id: '8:70:7', arabic: "مِّنَ", transliteration: "mina", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "of", ur: "of" } },
      { id: '8:70:8', arabic: "ٱلْأَسْرَىٰٓ", transliteration: "l-asrā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the captives", ur: "the captives" } },
      { id: '8:70:9', arabic: "إِن", transliteration: "in", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If", ur: "If" } },
      { id: '8:70:10', arabic: "يَعْلَمِ", transliteration: "yaʿlami", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "knows", ur: "knows" } },
      { id: '8:70:11', arabic: "ٱللَّهُ", transliteration: "l-lahu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:70:12', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:70:13', arabic: "قُلُوبِكُمْ", transliteration: "qulūbikum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "your hearts", ur: "your hearts" } },
      { id: '8:70:14', arabic: "خَيْرًۭا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "any good", ur: "any اچھا" } },
      { id: '8:70:15', arabic: "يُؤْتِكُمْ", transliteration: "yu'tikum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "He will give you", ur: "وہ will give تم" } },
      { id: '8:70:16', arabic: "خَيْرًۭا", transliteration: "khayran", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "better", ur: "better" } },
      { id: '8:70:17', arabic: "مِّمَّآ", transliteration: "mimmā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "than what", ur: "than کیا" } },
      { id: '8:70:18', arabic: "أُخِذَ", transliteration: "ukhidha", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "was taken", ur: "was taken" } },
      { id: '8:70:19', arabic: "مِنكُمْ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from you", ur: "سے تم" } },
      { id: '8:70:20', arabic: "وَيَغْفِرْ", transliteration: "wayaghfir", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and He will forgive", ur: "اور وہ will forgive" } },
      { id: '8:70:21', arabic: "لَكُمْ ۗ", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "you", ur: "تم" } },
      { id: '8:70:22', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:70:23', arabic: "غَفُورٌۭ", transliteration: "ghafūrun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(is) Oft-Forgiving", ur: "(is) Oft-Forgiving" } },
      { id: '8:70:24', arabic: "رَّحِيمٌۭ", transliteration: "raḥīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "Most Merciful", ur: "بہت مہربان" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + فاعل' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
  71: {
    text: "وَإِن يُرِيدُوا۟ خِيَانَتَكَ فَقَدْ خَانُوا۟ ٱللَّهَ مِن قَبْلُ فَأَمْكَنَ مِنْهُمْ ۗ وَٱللَّهُ عَلِيمٌ حَكِيمٌ",
    translation: {
      en: "",
      ur: "اور اگر یہ لوگ تم سے دغا کرنا چاہیں گے تو یہ پہلے ہی خدا سے دغا کرچکے ہیں تو اس نے ان کو (تمہارے) قبضے میں کر دیا۔ اور خدا دانا حکمت والا ہے",
    },
    words: [
      { id: '8:71:1', arabic: "وَإِن", transliteration: "wa-in", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But if", ur: "لیکن if" } },
      { id: '8:71:2', arabic: "يُرِيدُوا۟", transliteration: "yurīdū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they intend", ur: "وہ لوگ intend" } },
      { id: '8:71:3', arabic: "خِيَانَتَكَ", transliteration: "khiyānataka", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(to) betray you", ur: "(کو) betray تم" } },
      { id: '8:71:4', arabic: "فَقَدْ", transliteration: "faqad", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "certainly", ur: "certainly" } },
      { id: '8:71:5', arabic: "خَانُوا۟", transliteration: "khānū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they have betrayed", ur: "وہ لوگ have betrayed" } },
      { id: '8:71:6', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:71:7', arabic: "مِن", transliteration: "min", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:71:8', arabic: "قَبْلُ", transliteration: "qablu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "before", ur: "پہلے" } },
      { id: '8:71:9', arabic: "فَأَمْكَنَ", transliteration: "fa-amkana", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "So He gave (you) power", ur: "So وہ gave (تم) power" } },
      { id: '8:71:10', arabic: "مِنْهُمْ ۗ", transliteration: "min'hum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "over them", ur: "اوپر them" } },
      { id: '8:71:11', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:71:12', arabic: "عَلِيمٌ", transliteration: "ʿalīmun", pos: ['ADJ'], posLabel: 'ADJ', root: "ع ل م", meaning: { en: "(is) All-Knower", ur: "(is) سب-Knower" } },
      { id: '8:71:13', arabic: "حَكِيمٌ", transliteration: "ḥakīmun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "All-Wise", ur: "حکمت والا" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' }
      ],
    },
  },
  72: {
    text: "إِنَّ ٱلَّذِينَ ءَامَنُوا۟ وَهَاجَرُوا۟ وَجَـٰهَدُوا۟ بِأَمْوَٰلِهِمْ وَأَنفُسِهِمْ فِى سَبِيلِ ٱللَّهِ وَٱلَّذِينَ ءَاوَوا۟ وَّنَصَرُوٓا۟ أُو۟لَـٰٓئِكَ بَعْضُهُمْ أَوْلِيَآءُ بَعْضٍۢ ۚ وَٱلَّذِينَ ءَامَنُوا۟ وَلَمْ يُهَاجِرُوا۟ مَا لَكُم مِّن وَلَـٰيَتِهِم مِّن شَىْءٍ حَتَّىٰ يُهَاجِرُوا۟ ۚ وَإِنِ ٱسْتَنصَرُوكُمْ فِى ٱلدِّينِ فَعَلَيْكُمُ ٱلنَّصْرُ إِلَّا عَلَىٰ قَوْمٍۭ بَيْنَكُمْ وَبَيْنَهُم مِّيثَـٰقٌۭ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌۭ",
    translation: {
      en: "",
      ur: "جو لوگ ایمان لائے اور وطن سے ہجرت کر گئے اور خدا کی راہ میں اپنے مال اور جان سے لڑے وہ اور جنہوں نے (ہجرت کرنے والوں کو) جگہ دی اور ان کی مدد کی وہ آپس میں ایک دوسرے کے رفیق ہیں۔ اور جو لوگ ایمان تو لے آئے لیکن ہجرت نہیں کی تو جب تک وہ ہجرت نہ کریں تم کو ان کی رفاقت سے کچھ سروکار نہیں۔ اور اگر وہ تم سے دین (کے معاملات) میں مدد طلب کریں تو تم کو مدد کرنی لازم ہوگی۔ مگر ان لوگوں کے مقابلے میں کہ تم میں اور ان میں (صلح کا) عہد ہو (مدد نہیں کرنی چاہیئے) اور خدا تمہارے سب کاموں کو دیکھ رہا ہے",
    },
    words: [
      { id: '8:72:1', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:72:2', arabic: "ٱلَّذِينَ", transliteration: "alladhīna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those who", ur: "جو لوگ" } },
      { id: '8:72:3', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '8:72:4', arabic: "وَهَاجَرُوا۟", transliteration: "wahājarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and emigrated", ur: "اور emigrated" } },
      { id: '8:72:5', arabic: "وَجَـٰهَدُوا۟", transliteration: "wajāhadū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and strove hard", ur: "اور strove hard" } },
      { id: '8:72:6', arabic: "بِأَمْوَٰلِهِمْ", transliteration: "bi-amwālihim", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "with their wealth", ur: "ساتھ their wealth" } },
      { id: '8:72:7', arabic: "وَأَنفُسِهِمْ", transliteration: "wa-anfusihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: "ن ف س", meaning: { en: "and their lives", ur: "اور their lives" } },
      { id: '8:72:8', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:72:9', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '8:72:10', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:72:11', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '8:72:12', arabic: "ءَاوَوا۟", transliteration: "āwaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gave shelter", ur: "gave shelter" } },
      { id: '8:72:13', arabic: "وَّنَصَرُوٓا۟", transliteration: "wanaṣarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "and helped", ur: "اور helped" } },
      { id: '8:72:14', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those ", ur: "those " } },
      { id: '8:72:15', arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of them", ur: "some of them" } },
      { id: '8:72:16', arabic: "أَوْلِيَآءُ", transliteration: "awliyāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) allies", ur: "(are) allies" } },
      { id: '8:72:17', arabic: "بَعْضٍۢ ۚ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "(of) another", ur: "(of) another" } },
      { id: '8:72:18', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But those who", ur: "لیکن جو لوگ" } },
      { id: '8:72:19', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '8:72:20', arabic: "وَلَمْ", transliteration: "walam", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and (did) not", ur: "اور (did) نہیں" } },
      { id: '8:72:21', arabic: "يُهَاجِرُوا۟", transliteration: "yuhājirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "emigrate", ur: "emigrate" } },
      { id: '8:72:22', arabic: "مَا", transliteration: "mā", pos: ['NEG'], posLabel: 'NEG', root: null, meaning: { en: "(it is) not", ur: "(it is) نہیں" } },
      { id: '8:72:23', arabic: "لَكُم", transliteration: "lakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "for you", ur: "for تم" } },
      { id: '8:72:24', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of)", ur: "(of)" } },
      { id: '8:72:25', arabic: "وَلَـٰيَتِهِم", transliteration: "walāyatihim", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "their protection", ur: "their protection" } },
      { id: '8:72:26', arabic: "مِّن", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in)", ur: "(میں)" } },
      { id: '8:72:27', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(in) anything", ur: "(میں) anything" } },
      { id: '8:72:28', arabic: "حَتَّىٰ", transliteration: "ḥattā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "until", ur: "until" } },
      { id: '8:72:29', arabic: "يُهَاجِرُوا۟ ۚ", transliteration: "yuhājirū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they emigrate", ur: "وہ لوگ emigrate" } },
      { id: '8:72:30', arabic: "وَإِنِ", transliteration: "wa-ini", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And if", ur: "اور if" } },
      { id: '8:72:31', arabic: "ٱسْتَنصَرُوكُمْ", transliteration: "is'tanṣarūkum", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they seek your help", ur: "وہ لوگ seek your help" } },
      { id: '8:72:32', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:72:33', arabic: "ٱلدِّينِ", transliteration: "l-dīni", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the religion", ur: "the religion" } },
      { id: '8:72:34', arabic: "فَعَلَيْكُمُ", transliteration: "faʿalaykumu", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then upon you", ur: "پھر پر تم" } },
      { id: '8:72:35', arabic: "ٱلنَّصْرُ", transliteration: "l-naṣru", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is to) help them", ur: "(is کو) help them" } },
      { id: '8:72:36', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "except", ur: "سوائے" } },
      { id: '8:72:37', arabic: "عَلَىٰ", transliteration: "ʿalā", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "against", ur: "against" } },
      { id: '8:72:38', arabic: "قَوْمٍۭ", transliteration: "qawmin", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "a people", ur: "a لوگ" } },
      { id: '8:72:39', arabic: "بَيْنَكُمْ", transliteration: "baynakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "between you", ur: "درمیان تم" } },
      { id: '8:72:40', arabic: "وَبَيْنَهُم", transliteration: "wabaynahum", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and between them", ur: "اور درمیان them" } },
      { id: '8:72:41', arabic: "مِّيثَـٰقٌۭ ۗ", transliteration: "mīthāqun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) a treaty", ur: "(is) a treaty" } },
      { id: '8:72:42', arabic: "وَٱللَّهُ", transliteration: "wal-lahu", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And Allah", ur: "اور اللہ" } },
      { id: '8:72:43', arabic: "بِمَا", transliteration: "bimā", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of what", ur: "of کیا" } },
      { id: '8:72:44', arabic: "تَعْمَلُونَ", transliteration: "taʿmalūna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do", ur: "تم do" } },
      { id: '8:72:45', arabic: "بَصِيرٌۭ", transliteration: "baṣīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "(is) All-Seer", ur: "(is) سب-Seer" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'مضاف + مضاف إليه' },
        { from: 27, to: 28, label: 'فعل + فاعل' },
        { from: 32, to: 33, label: 'جار + مجرور' },
        { from: 37, to: 38, label: 'جار + مجرور' }
      ],
    },
  },
  73: {
    text: "وَٱلَّذِينَ كَفَرُوا۟ بَعْضُهُمْ أَوْلِيَآءُ بَعْضٍ ۚ إِلَّا تَفْعَلُوهُ تَكُن فِتْنَةٌۭ فِى ٱلْأَرْضِ وَفَسَادٌۭ كَبِيرٌۭ",
    translation: {
      en: "",
      ur: "اور جو لوگ کافر ہیں (وہ بھی) ایک دوسرے کے رفیق ہیں۔ تو (مومنو) اگر تم یہ (کام) نہ کرو گے تو ملک میں فتنہ برپا ہو جائے گا اور بڑا فساد مچے گا",
    },
    words: [
      { id: '8:73:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '8:73:2', arabic: "كَفَرُوا۟", transliteration: "kafarū", pos: ['N'], posLabel: 'N', root: "ك ف ر", meaning: { en: "disbelieve", ur: "disbelieve" } },
      { id: '8:73:3', arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of them", ur: "some of them" } },
      { id: '8:73:4', arabic: "أَوْلِيَآءُ", transliteration: "awliyāu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) allies", ur: "(are) allies" } },
      { id: '8:73:5', arabic: "بَعْضٍ ۚ", transliteration: "baʿḍin", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "(to) another", ur: "(کو) another" } },
      { id: '8:73:6', arabic: "إِلَّا", transliteration: "illā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "If not", ur: "If نہیں" } },
      { id: '8:73:7', arabic: "تَفْعَلُوهُ", transliteration: "tafʿalūhu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "you do it", ur: "تم do it" } },
      { id: '8:73:8', arabic: "تَكُن", transliteration: "takun", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "(there) will be", ur: "(there) will be" } },
      { id: '8:73:9', arabic: "فِتْنَةٌۭ", transliteration: "fit'natun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "oppression", ur: "oppression" } },
      { id: '8:73:10', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:73:11', arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", pos: ['N'], posLabel: 'N', root: "أ ر ض", meaning: { en: "the earth", ur: "زمین" } },
      { id: '8:73:12', arabic: "وَفَسَادٌۭ", transliteration: "wafasādun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and corruption", ur: "اور corruption" } },
      { id: '8:73:13', arabic: "كَبِيرٌۭ", transliteration: "kabīrun", pos: ['ADJ'], posLabel: 'ADJ', root: null, meaning: { en: "great", ur: "great" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  74: {
    text: "وَٱلَّذِينَ ءَامَنُوا۟ وَهَاجَرُوا۟ وَجَـٰهَدُوا۟ فِى سَبِيلِ ٱللَّهِ وَٱلَّذِينَ ءَاوَوا۟ وَّنَصَرُوٓا۟ أُو۟لَـٰٓئِكَ هُمُ ٱلْمُؤْمِنُونَ حَقًّۭا ۚ لَّهُم مَّغْفِرَةٌۭ وَرِزْقٌۭ كَرِيمٌۭ",
    translation: {
      en: "",
      ur: "اور جو لوگ ایمان لائے اور وطن سے ہجرت کر گئے اور خدا کی راہ میں لڑائیاں کرتے رہے اور جنہوں نے (ہجرت کرنے والوں کو) جگہ دی اور ان کی مدد کی۔ یہی لوگ سچے مسلمان ہیں۔ ان کے لیے (خدا کے ہاں) بخشش اور عزت کی روزی ہے",
    },
    words: [
      { id: '8:74:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '8:74:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '8:74:3', arabic: "وَهَاجَرُوا۟", transliteration: "wahājarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and emigrated", ur: "اور emigrated" } },
      { id: '8:74:4', arabic: "وَجَـٰهَدُوا۟", transliteration: "wajāhadū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and strove hard", ur: "اور strove hard" } },
      { id: '8:74:5', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:74:6', arabic: "سَبِيلِ", transliteration: "sabīli", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) way", ur: "(the) راستہ" } },
      { id: '8:74:7', arabic: "ٱللَّهِ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:74:8', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and those who", ur: "اور جو لوگ" } },
      { id: '8:74:9', arabic: "ءَاوَوا۟", transliteration: "āwaw", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "gave shelter", ur: "gave shelter" } },
      { id: '8:74:10', arabic: "وَّنَصَرُوٓا۟", transliteration: "wanaṣarū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "and helped", ur: "اور helped" } },
      { id: '8:74:11', arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "those ", ur: "those " } },
      { id: '8:74:12', arabic: "هُمُ", transliteration: "humu", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "they (are)", ur: "وہ لوگ (are)" } },
      { id: '8:74:13', arabic: "ٱلْمُؤْمِنُونَ", transliteration: "l-mu'minūna", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "the believers", ur: "the مومنین" } },
      { id: '8:74:14', arabic: "حَقًّۭا ۚ", transliteration: "ḥaqqan", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(in) truth", ur: "(میں) سچ" } },
      { id: '8:74:15', arabic: "لَّهُم", transliteration: "lahum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "For them", ur: "For them" } },
      { id: '8:74:16', arabic: "مَّغْفِرَةٌۭ", transliteration: "maghfiratun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(is) forgiveness", ur: "(is) مغفرت" } },
      { id: '8:74:17', arabic: "وَرِزْقٌۭ", transliteration: "wariz'qun", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and a provision", ur: "اور a provision" } },
      { id: '8:74:18', arabic: "كَرِيمٌۭ", transliteration: "karīmun", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "noble", ur: "noble" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' }
      ],
    },
  },
  75: {
    text: "وَٱلَّذِينَ ءَامَنُوا۟ مِنۢ بَعْدُ وَهَاجَرُوا۟ وَجَـٰهَدُوا۟ مَعَكُمْ فَأُو۟لَـٰٓئِكَ مِنكُمْ ۚ وَأُو۟لُوا۟ ٱلْأَرْحَامِ بَعْضُهُمْ أَوْلَىٰ بِبَعْضٍۢ فِى كِتَـٰبِ ٱللَّهِ ۗ إِنَّ ٱللَّهَ بِكُلِّ شَىْءٍ عَلِيمٌۢ",
    translation: {
      en: "",
      ur: "اور جو لوگ بعد میں ایمان لائے اور وطن سے ہجرت کرگئے اور تمہارے ساتھ ہو کر جہاد کرتے رہے وہ بھی تم ہی میں سے ہیں۔ اور رشتہ دار خدا کے حکم کی رو سے ایک دوسرے کے زیادہ حقدار ہیں۔ کچھ شک نہیں کہ خدا ہر چیز سے واقف ہے",
    },
    words: [
      { id: '8:75:1', arabic: "وَٱلَّذِينَ", transliteration: "wa-alladhīna", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "And those who", ur: "اور جو لوگ" } },
      { id: '8:75:2', arabic: "ءَامَنُوا۟", transliteration: "āmanū", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "believed", ur: "ایمان لائے" } },
      { id: '8:75:3', arabic: "مِنۢ", transliteration: "min", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "from", ur: "سے" } },
      { id: '8:75:4', arabic: "بَعْدُ", transliteration: "baʿdu", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "afterwards", ur: "afterwards" } },
      { id: '8:75:5', arabic: "وَهَاجَرُوا۟", transliteration: "wahājarū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and emigrated", ur: "اور emigrated" } },
      { id: '8:75:6', arabic: "وَجَـٰهَدُوا۟", transliteration: "wajāhadū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "and strove hard", ur: "اور strove hard" } },
      { id: '8:75:7', arabic: "مَعَكُمْ", transliteration: "maʿakum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "with you", ur: "ساتھ تم" } },
      { id: '8:75:8', arabic: "فَأُو۟لَـٰٓئِكَ", transliteration: "fa-ulāika", pos: ['CONJ+V'], posLabel: 'CONJ+V', root: null, meaning: { en: "then those", ur: "پھر those" } },
      { id: '8:75:9', arabic: "مِنكُمْ ۚ", transliteration: "minkum", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) of you", ur: "(are) of تم" } },
      { id: '8:75:10', arabic: "وَأُو۟لُوا۟", transliteration: "wa-ulū", pos: ['CONJ+N'], posLabel: 'CONJ+N', root: null, meaning: { en: "But those", ur: "لیکن those" } },
      { id: '8:75:11', arabic: "ٱلْأَرْحَامِ", transliteration: "l-arḥāmi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) blood relationship", ur: "(of) blood relationship" } },
      { id: '8:75:12', arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", pos: ['N'], posLabel: 'N', root: "ب ع ض", meaning: { en: "some of them", ur: "some of them" } },
      { id: '8:75:13', arabic: "أَوْلَىٰ", transliteration: "awlā", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(are) nearer", ur: "(are) nearer" } },
      { id: '8:75:14', arabic: "بِبَعْضٍۢ", transliteration: "bibaʿḍin", pos: ['P+N'], posLabel: 'P+N', root: "ب ع ض", meaning: { en: "to another", ur: "کو another" } },
      { id: '8:75:15', arabic: "فِى", transliteration: "fī", pos: ['PREP'], posLabel: 'PREP', root: null, meaning: { en: "in", ur: "میں" } },
      { id: '8:75:16', arabic: "كِتَـٰبِ", transliteration: "kitābi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(the) Book", ur: "(the) کتاب" } },
      { id: '8:75:17', arabic: "ٱللَّهِ ۗ", transliteration: "l-lahi", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "(of) Allah", ur: "(of) اللہ" } },
      { id: '8:75:18', arabic: "إِنَّ", transliteration: "inna", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "Indeed", ur: "بیشک" } },
      { id: '8:75:19', arabic: "ٱللَّهَ", transliteration: "l-laha", pos: ['N'], posLabel: 'N', root: null, meaning: { en: "Allah", ur: "اللہ" } },
      { id: '8:75:20', arabic: "بِكُلِّ", transliteration: "bikulli", pos: ['P+N'], posLabel: 'P+N', root: null, meaning: { en: "of every", ur: "of ہر" } },
      { id: '8:75:21', arabic: "شَىْءٍ", transliteration: "shayin", pos: ['V'], posLabel: 'V', root: null, meaning: { en: "thing", ur: "thing" } },
      { id: '8:75:22', arabic: "عَلِيمٌۢ", transliteration: "ʿalīmun", pos: ['ADJ'], posLabel: 'ADJ', root: "ع ل م", meaning: { en: "(is) All-Knower", ur: "(is) سب-Knower" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'مضاف + مضاف إليه' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' }
      ],
    },
  },
};

export const TREEBANK_DATA = SURAH_8_TREEBANK;
export default SURAH_8_TREEBANK;
