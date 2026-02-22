/**
 * Adhkar Data — Morning/Evening/After Salah remembrances
 * Trilingual: Arabic, Urdu, English
 */

export const ADHKAR_CATEGORIES = [
  { key: 'morning_evening', label: 'Morning & Evening', labelAr: 'صبح و شام', emoji: '🌅', color: '#f59e0b', when: 'After Fajr / After Asr' },
  { key: 'morning', label: 'Morning Only', labelAr: 'صبح', emoji: '☀️', color: '#f97316', when: 'After Fajr' },
  { key: 'after_salah', label: 'After Salah', labelAr: 'بعد نماز', emoji: '🕌', color: '#10b981', when: 'After every farz prayer' },
  { key: 'before_sleep', label: 'Before Sleep', labelAr: 'سونے سے پہلے', emoji: '🌙', color: '#8b5cf6', when: 'Before bed' },
  { key: 'fajr_maghrib', label: 'Fajr & Maghrib', labelAr: 'فجر و مغرب', emoji: '🔥', color: '#ef4444', when: 'After Fajr & Maghrib specifically' },
];

export const ADHKAR_LIST = [
  {
    id: 1,
    title: 'Ayat-ul-Kursi',
    titleAr: 'آیۃ الکرسی',
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    urdu: 'اللہ جس کے سوا کوئی عبادت کے لائق نہیں، ہمیشہ زندہ رہنے والا، سب کو تھامنے والا۔ نہ اسے اونگھ آتی ہے نہ نیند۔ اسی کا ہے جو کچھ آسمانوں میں ہے اور جو کچھ زمین میں ہے۔ کون ہے جو اس کے سامنے اس کی اجازت کے بغیر سفارش کرے۔ وہ جانتا ہے جو ان کے آگے ہے اور جو ان کے پیچھے ہے اور وہ اس کے علم میں سے کسی چیز کا احاطہ نہیں کرسکتے مگر جتنا وہ چاہے۔ اس کی کرسی آسمانوں اور زمین پر وسیع ہے اور ان دونوں کی حفاظت اسے نہیں تھکاتی اور وہ بلند و بالا عظمت والا ہے۔',
    english: 'Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
    count: 1,
    categories: ['morning_evening', 'before_sleep'],
    reference: 'Quran 2:255',
  },
  {
    id: 2,
    title: 'Surah Al-Ikhlas',
    titleAr: 'سورۃ الاخلاص',
    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
    urdu: 'کہو وہ اللہ ایک ہے۔ اللہ بے نیاز ہے۔ نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔ اور نہ کوئی اس کا ہمسر ہے۔',
    english: 'Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.',
    count: 3,
    categories: ['morning_evening', 'before_sleep'],
    reference: 'Quran 112:1-4',
  },
  {
    id: 3,
    title: 'Surah Al-Falaq',
    titleAr: 'سورۃ الفلق',
    arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
    urdu: 'کہو کہ میں صبح کے رب کی پناہ مانگتا ہوں۔ ہر اس چیز کے شر سے جو اس نے پیدا کی۔ اور اندھیری رات کے شر سے جب وہ چھا جائے۔ اور گرہوں میں پھونکنے والیوں کے شر سے۔ اور حسد کرنے والے کے شر سے جب وہ حسد کرے۔',
    english: 'Say: I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies.',
    count: 3,
    categories: ['morning_evening', 'before_sleep'],
    reference: 'Quran 113:1-5',
  },
  {
    id: 4,
    title: 'Surah An-Nas',
    titleAr: 'سورۃ الناس',
    arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ',
    urdu: 'کہو کہ میں لوگوں کے رب کی پناہ مانگتا ہوں۔ لوگوں کے بادشاہ کی۔ لوگوں کے معبود کی۔ وسوسہ ڈالنے والے پیچھے ہٹ جانے والے کے شر سے۔ جو لوگوں کے دلوں میں وسوسہ ڈالتا ہے۔ خواہ وہ جنوں میں سے ہو یا انسانوں میں سے۔',
    english: 'Say: I seek refuge in the Lord of mankind. The Sovereign of mankind. The God of mankind. From the evil of the retreating whisperer. Who whispers in the breasts of mankind. From among the jinn and mankind.',
    count: 3,
    categories: ['morning_evening', 'before_sleep'],
    reference: 'Quran 114:1-6',
  },
  {
    id: 5,
    title: 'Kalimah Tawheed',
    titleAr: 'کلمہ توحید',
    arabic: 'لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    urdu: 'اللہ کے سوا کوئی معبود نہیں، وہ اکیلا ہے، اس کا کوئی شریک نہیں، بادشاہی اسی کی ہے اور تمام تعریفیں اسی کے لیے ہیں اور وہ ہر چیز پر قادر ہے۔',
    english: 'There is no god but Allah alone, He has no partner. To Him belongs the dominion and to Him belongs all praise, and He is able to do all things.',
    count: 100,
    categories: ['morning_evening'],
    reference: 'Bukhari 6403, Muslim 2693',
  },
  {
    id: 6,
    title: 'Protection Dua',
    titleAr: 'بسم اللہ کی دعا',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    urdu: 'اللہ کے نام سے جس کے نام کے ساتھ زمین و آسمان میں کوئی چیز نقصان نہیں دے سکتی اور وہ خوب سننے والا جاننے والا ہے۔',
    english: 'In the name of Allah, with whose name nothing in the earth or the heavens can cause harm, and He is the All-Hearing, the All-Knowing.',
    count: 3,
    categories: ['morning_evening'],
    reference: 'Abu Dawud 5088, Tirmidhi 3388',
  },
  {
    id: 7,
    title: 'Refuge Dua',
    titleAr: 'پناہ کی دعا',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    urdu: 'میں اللہ کے مکمل کلمات کی پناہ لیتا ہوں ہر اس چیز کے شر سے جو اس نے پیدا کی ہے۔',
    english: 'I seek refuge in the perfect words of Allah from the evil of that which He has created.',
    count: 3,
    categories: ['morning_evening'],
    reference: 'Muslim 2708',
  },
  {
    id: 8,
    title: 'Morning Declaration',
    titleAr: 'صبح کی دعا',
    arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
    urdu: 'اے اللہ! تیرے ہی نام سے ہم نے صبح کی اور تیرے ہی نام سے ہم نے شام کی، تیرے ہی نام سے ہم جیتے ہیں اور تیرے ہی نام سے ہم مرتے ہیں اور تیری ہی طرف لوٹ کر جانا ہے۔',
    english: 'O Allah, by Your grace we have reached the morning and by Your grace we reach the evening. By Your grace we live and by Your grace we die, and to You is the resurrection.',
    count: 1,
    categories: ['morning'],
    reference: 'Tirmidhi 3391',
  },
  {
    id: 9,
    title: 'Sayyidul Istighfar',
    titleAr: 'سید الاستغفار',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    urdu: 'اے اللہ! تو ہی میرا رب ہے، تیرے سوا کوئی معبود نہیں۔ تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں۔ اور میں اپنی طاقت کے مطابق تیرے عہد اور وعدے پر قائم ہوں۔ میں اپنے کیے ہوئے اعمال کے شر سے تیری پناہ مانگتا ہوں۔ میں تیری نعمت کا اقرار کرتا ہوں اور اپنے گناہ کا اعتراف کرتا ہوں۔ مجھے معاف فرما دے کیونکہ تیرے سوا کوئی گناہ نہیں بخش سکتا۔',
    english: 'O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant. I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me and I acknowledge my sin, so forgive me, for verily none can forgive sins except You.',
    count: 1,
    categories: ['morning_evening'],
    reference: 'Bukhari 6306',
  },
  {
    id: 10,
    title: 'Tasbeeh Special',
    titleAr: 'خاص تسبیح',
    arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ',
    urdu: 'اللہ پاک ہے اپنی حمد کے ساتھ اپنی مخلوقات کی تعداد کے برابر اور اپنی رضا کے برابر اور اپنے عرش کے وزن کے برابر اور اپنے کلمات کی روشنائی کے برابر۔',
    english: 'Glory be to Allah and His is the praise, as many times as the number of His creatures, in accordance with His pleasure, and equal to the weight of His Throne, and equal to the ink of His words.',
    count: 3,
    categories: ['morning_evening'],
    reference: 'Muslim 2726',
  },
  {
    id: 11,
    title: 'After Salah Tasbeeh',
    titleAr: 'نماز کے بعد تسبیح',
    arabic: 'سُبْحَانَ اللّٰهِ (٣٣) ، اَلْحَمْدُ لِلّٰهِ (٣٣) ، اَللّٰهُ أَكْبَرُ (٣٤)',
    urdu: 'سبحان اللہ ۳۳ مرتبہ، الحمد للہ ۳۳ مرتبہ، اللہ اکبر ۳۴ مرتبہ — کل ۱۰۰ بار۔ جو ہر نماز کے بعد یہ پڑھے اس کے گناہ معاف کر دیے جاتے ہیں اگرچہ سمندر کی جھاگ جتنے ہوں۔',
    english: 'SubhanAllah 33 times, Alhamdulillah 33 times, Allahu Akbar 34 times — totaling 100. Whoever says these after every prayer, his sins will be forgiven even if they are like the foam of the sea.',
    count: 1,
    categories: ['after_salah'],
    reference: 'Muslim 597',
  },
  {
    id: 12,
    title: 'Fire Protection',
    titleAr: 'آگ سے حفاظت',
    arabic: 'اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
    urdu: 'اے اللہ! مجھے آگ (جہنم) سے بچا لے۔',
    english: 'O Allah, protect me from the Fire.',
    count: 7,
    categories: ['fajr_maghrib'],
    reference: 'Abu Dawud 5079',
  },
];
