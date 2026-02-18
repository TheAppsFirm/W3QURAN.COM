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
    ]
  },
  2: {
    text: 'إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ',
    translation: {
      en: 'The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith; and upon their Lord they rely.',
      ur: 'مومن تو وہی ہیں کہ جب اللہ کا ذکر کیا جائے تو ان کے دل ڈر جائیں اور جب ان پر اس کی آیات پڑھی جائیں تو ان کا ایمان بڑھ جائے اور وہ اپنے رب پر بھروسا کرتے ہیں۔'
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};

export const TREEBANK_DATA = SURAH_8_TREEBANK;
export default SURAH_8_TREEBANK;
