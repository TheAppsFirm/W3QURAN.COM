/**
 * Surah Fatir (35) - Ontology of Quranic Concepts
 * The Originator - 45 Ayahs, Makkan
 * Theme: Allah as the Originator of creation, angels as messengers, signs in creation,
 * three categories of inheritors of the Book, contrast between believers and disbelievers
 */

export const ONTOLOGY = {
  surahId: 35,
  surahName: "Fatir",
  surahNameArabic: "فاطر",
  revelationType: "Makki",
  totalAyahs: 45,

  categories: {
    divineOrigination: {
      name: "Allah - The Originator",
      nameUr: "اللہ - پیدا کرنے والا",
      nameArabic: "الله الفاطر",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "فَاطِرِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Originator of heavens and earth", ur: "آسمانوں اور زمین کا پیدا کرنے والا" }, explanation: { en: "Fatir - One who brings into existence from nothing, splitting open non-existence", ur: "فاطر - وہ جو عدم سے وجود میں لاتا ہے، نیستی کو چیر کر تخلیق کرتا ہے" }, verseRef: "35:1" },
        { term: "الْحَمْدُ لِلَّهِ", meaning: { en: "All praise is for Allah", ur: "تمام تعریفیں اللہ کے لیے ہیں" }, explanation: { en: "Opening with praise - establishing Allah's exclusive right to gratitude", ur: "حمد سے آغاز - شکرگزاری پر اللہ کے خصوصی حق کا اثبات" }, verseRef: "35:1" },
        { term: "جَاعِلِ الْمَلَائِكَةِ رُسُلًا", meaning: { en: "Who made angels messengers", ur: "جس نے فرشتوں کو پیغامبر بنایا" }, explanation: { en: "Angels serve as intermediaries for divine revelation", ur: "فرشتے الٰہی وحی کے درمیانی واسطے ہیں" }, verseRef: "35:1" },
        { term: "أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ", meaning: { en: "Having wings, two, three, or four", ur: "دو دو، تین تین اور چار چار پروں والے" }, explanation: { en: "Angels have varying numbers of wings - showing diversity in creation", ur: "فرشتوں کے مختلف تعداد میں پر ہیں - تخلیق میں تنوع کا اظہار" }, verseRef: "35:1" },
        { term: "يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ", meaning: { en: "He increases in creation what He wills", ur: "وہ تخلیق میں جو چاہے بڑھاتا ہے" }, explanation: { en: "Allah's creative power is unlimited - no constraints", ur: "اللہ کی تخلیقی قدرت لامحدود ہے - کوئی پابندی نہیں" }, verseRef: "35:1" },
        { term: "إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: { en: "Allah is over all things powerful", ur: "بے شک اللہ ہر چیز پر قادر ہے" }, explanation: { en: "Absolute divine omnipotence", ur: "مطلق الٰہی قدرتِ کاملہ" }, verseRef: "35:1" }
      ]
    },

    divineMercy: {
      name: "Divine Mercy & Providence",
      nameUr: "الٰہی رحمت اور رزق",
      nameArabic: "الرحمة والرزق الإلهي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "مَّا يَفْتَحِ اللَّهُ لِلنَّاسِ مِن رَّحْمَةٍ", meaning: { en: "Whatever mercy Allah opens for people", ur: "اللہ جو رحمت لوگوں کے لیے کھول دے" }, explanation: { en: "Allah is source of all mercy - none can withhold it", ur: "اللہ تمام رحمت کا سرچشمہ ہے - کوئی اسے روک نہیں سکتا" }, verseRef: "35:2" },
        { term: "فَلَا مُمْسِكَ لَهَا", meaning: { en: "None can withhold it", ur: "اسے کوئی روکنے والا نہیں" }, explanation: { en: "When Allah grants mercy, no power can stop it", ur: "جب اللہ رحمت عطا کرے تو کوئی طاقت اسے روک نہیں سکتی" }, verseRef: "35:2" },
        { term: "وَمَا يُمْسِكْ فَلَا مُرْسِلَ لَهُ", meaning: { en: "What He withholds, none can release", ur: "اور جو وہ روک لے اسے کوئی بھیجنے والا نہیں" }, explanation: { en: "When Allah withholds, no power can provide it", ur: "جب اللہ روک لے تو کوئی طاقت فراہم نہیں کر سکتی" }, verseRef: "35:2" },
        { term: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "He is the Almighty, the Wise", ur: "وہ غالب، حکمت والا ہے" }, explanation: { en: "Power combined with wisdom in divine decisions", ur: "الٰہی فیصلوں میں طاقت اور حکمت کا امتزاج" }, verseRef: "35:2" }
      ]
    },

    gratitudeReminder: {
      name: "Call to Remember Blessings",
      nameUr: "نعمتیں یاد کرنے کی دعوت",
      nameArabic: "تذكير النعم",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ", meaning: { en: "Remember Allah's blessing upon you", ur: "اللہ کی نعمتوں کو یاد کرو" }, explanation: { en: "Gratitude begins with remembrance of blessings", ur: "شکرگزاری نعمتوں کی یاد سے شروع ہوتی ہے" }, verseRef: "35:3" },
        { term: "هَلْ مِنْ خَالِقٍ غَيْرُ اللَّهِ", meaning: { en: "Is there any creator other than Allah?", ur: "کیا اللہ کے سوا کوئی اور خالق ہے؟" }, explanation: { en: "Rhetorical question - no other creator exists", ur: "بلاغتی سوال - کوئی اور خالق موجود نہیں" }, verseRef: "35:3" },
        { term: "يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: { en: "Provides for you from sky and earth", ur: "آسمان اور زمین سے تمہیں رزق دیتا ہے" }, explanation: { en: "Rain from above, produce from below - all from Allah", ur: "اوپر سے بارش، نیچے سے پیداوار - سب اللہ کی طرف سے" }, verseRef: "35:3" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: { en: "There is no deity except Him", ur: "اس کے سوا کوئی معبود نہیں" }, explanation: { en: "Tawheed - core message of the surah", ur: "توحید - سورت کا مرکزی پیغام" }, verseRef: "35:3" },
        { term: "فَأَنَّىٰ تُؤْفَكُونَ", meaning: { en: "So how are you deluded?", ur: "تو تم کہاں بہکائے جا رہے ہو؟" }, explanation: { en: "Wonder at how people turn away despite clear evidence", ur: "واضح دلائل کے باوجود لوگوں کے منہ موڑنے پر حیرت" }, verseRef: "35:3" }
      ]
    },

    prophetDenial: {
      name: "Denial of Prophets",
      nameUr: "انبیاء کا انکار",
      nameArabic: "تكذيب الرسل",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَإِن يُكَذِّبُوكَ", meaning: { en: "And if they deny you", ur: "اور اگر وہ آپ کو جھٹلائیں" }, explanation: { en: "Comfort to Prophet - denial is not new", ur: "نبی ﷺ کو تسلی - انکار کوئی نئی بات نہیں" }, verseRef: "35:4" },
        { term: "فَقَدْ كُذِّبَتْ رُسُلٌ مِّن قَبْلِكَ", meaning: { en: "Messengers before you were denied", ur: "آپ سے پہلے بھی رسولوں کو جھٹلایا گیا" }, explanation: { en: "Pattern of history - prophets always faced rejection", ur: "تاریخ کا نمونہ - انبیاء کو ہمیشہ انکار کا سامنا رہا" }, verseRef: "35:4" },
        { term: "وَإِلَى اللَّهِ تُرْجَعُ الْأُمُورُ", meaning: { en: "To Allah all matters are returned", ur: "اللہ ہی کی طرف تمام معاملات لوٹائے جاتے ہیں" }, explanation: { en: "Ultimate judgment belongs to Allah alone", ur: "حتمی فیصلہ صرف اللہ کا ہے" }, verseRef: "35:4" }
      ]
    },

    worldlyDeception: {
      name: "Worldly Life & Deception",
      nameUr: "دنیاوی زندگی اور دھوکا",
      nameArabic: "الدنيا والغرور",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: { en: "Indeed Allah's promise is true", ur: "بے شک اللہ کا وعدہ سچا ہے" }, explanation: { en: "Certainty of divine promises - Hereafter is real", ur: "الٰہی وعدوں کی یقینیت - آخرت حقیقی ہے" }, verseRef: "35:5" },
        { term: "فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا", meaning: { en: "So let not worldly life deceive you", ur: "پس تمہیں دنیاوی زندگی دھوکے میں نہ ڈالے" }, explanation: { en: "Warning against being fooled by temporary pleasures", ur: "عارضی لذتوں سے دھوکا کھانے سے خبردار" }, verseRef: "35:5" },
        { term: "وَلَا يَغُرَّنَّكُم بِاللَّهِ الْغَرُورُ", meaning: { en: "Let not the Deceiver deceive you about Allah", ur: "اور تمہیں اللہ کے بارے میں دھوکا دینے والا دھوکے میں نہ ڈالے" }, explanation: { en: "Satan deceives by making people feel safe from Allah's punishment", ur: "شیطان لوگوں کو اللہ کے عذاب سے بے خوف کر کے دھوکا دیتا ہے" }, verseRef: "35:5" }
      ]
    },

    satanWarning: {
      name: "Satan - The Open Enemy",
      nameUr: "شیطان - کھلا دشمن",
      nameArabic: "الشيطان العدو",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "إِنَّ الشَّيْطَانَ لَكُمْ عَدُوٌّ", meaning: { en: "Satan is your enemy", ur: "بے شک شیطان تمہارا دشمن ہے" }, explanation: { en: "Clear declaration - Satan is not friend or neutral", ur: "واضح اعلان - شیطان نہ دوست ہے نہ غیرجانبدار" }, verseRef: "35:6" },
        { term: "فَاتَّخِذُوهُ عَدُوًّا", meaning: { en: "So treat him as an enemy", ur: "پس اسے دشمن ہی سمجھو" }, explanation: { en: "Practical command - act accordingly", ur: "عملی حکم - اس کے مطابق عمل کرو" }, verseRef: "35:6" },
        { term: "إِنَّمَا يَدْعُو حِزْبَهُ", meaning: { en: "He only invites his party", ur: "وہ صرف اپنے گروہ کو بلاتا ہے" }, explanation: { en: "Satan calls people to join his faction", ur: "شیطان لوگوں کو اپنے گروہ میں شامل ہونے کی دعوت دیتا ہے" }, verseRef: "35:6" },
        { term: "لِيَكُونُوا مِنْ أَصْحَابِ السَّعِيرِ", meaning: { en: "To be among companions of the Blaze", ur: "تاکہ وہ دوزخ کے ساتھیوں میں سے ہو جائیں" }, explanation: { en: "Ultimate goal of Satan - dragging people to Hell", ur: "شیطان کا حتمی مقصد - لوگوں کو جہنم میں گھسیٹنا" }, verseRef: "35:6" }
      ]
    },

    twoDestinations: {
      name: "Two Eternal Destinations",
      nameUr: "دو ابدی ٹھکانے",
      nameArabic: "المصيران",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "الَّذِينَ كَفَرُوا لَهُمْ عَذَابٌ شَدِيدٌ", meaning: { en: "Those who disbelieve will have severe punishment", ur: "جنہوں نے کفر کیا ان کے لیے سخت عذاب ہے" }, explanation: { en: "Disbelievers face intense torment", ur: "کافروں کو شدید عذاب کا سامنا ہوگا" }, verseRef: "35:7" },
        { term: "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ", meaning: { en: "Those who believe and do good", ur: "اور جو ایمان لائے اور نیک عمل کیے" }, explanation: { en: "Faith plus action = salvation", ur: "ایمان اور عمل دونوں مل کر نجات ہے" }, verseRef: "35:7" },
        { term: "لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ", meaning: { en: "For them is forgiveness and great reward", ur: "ان کے لیے مغفرت اور بڑا اجر ہے" }, explanation: { en: "Believers receive both pardon and reward", ur: "مومنوں کو معافی اور اجر دونوں ملتے ہیں" }, verseRef: "35:7" }
      ]
    },

    blindnessVsInsight: {
      name: "Spiritual Blindness vs Insight",
      nameUr: "روحانی اندھاپن بمقابلہ بصیرت",
      nameArabic: "العمى والبصيرة",
      color: "#3B82F6",
      icon: "Eye",
      concepts: [
        { term: "أَفَمَن زُيِّنَ لَهُ سُوءُ عَمَلِهِ", meaning: { en: "Is one whose evil deeds are beautified for him", ur: "کیا وہ جس کے لیے اس کے برے عمل خوشنما بنا دیے گئے" }, explanation: { en: "Evil seems good to the misguided", ur: "گمراہ لوگوں کو برائی اچھی لگتی ہے" }, verseRef: "35:8" },
        { term: "فَرَآهُ حَسَنًا", meaning: { en: "So he sees it as good", ur: "پس وہ اسے اچھا سمجھتا ہے" }, explanation: { en: "Perception corrupted - wrong appears right", ur: "ادراک بگڑ گیا - غلط صحیح نظر آتا ہے" }, verseRef: "35:8" },
        { term: "فَإِنَّ اللَّهَ يُضِلُّ مَن يَشَاءُ", meaning: { en: "Allah leaves astray whom He wills", ur: "بے شک اللہ جسے چاہے گمراہ کرتا ہے" }, explanation: { en: "Misguidance as consequence of choices", ur: "گمراہی انتخاب کے نتیجے میں ہے" }, verseRef: "35:8" },
        { term: "وَيَهْدِي مَن يَشَاءُ", meaning: { en: "And guides whom He wills", ur: "اور جسے چاہے ہدایت دیتا ہے" }, explanation: { en: "Guidance as divine gift to seekers", ur: "ہدایت طالبین کے لیے الٰہی تحفہ ہے" }, verseRef: "35:8" },
        { term: "فَلَا تَذْهَبْ نَفْسُكَ عَلَيْهِمْ حَسَرَاتٍ", meaning: { en: "So let not your soul perish in sorrow for them", ur: "پس آپ کا جی ان پر حسرتوں سے نہ جائے" }, explanation: { en: "Prophet told not to grieve excessively over deniers", ur: "نبی ﷺ کو منکرین پر ضرورت سے زیادہ غمگین نہ ہونے کا حکم" }, verseRef: "35:8" }
      ]
    },

    resurrectionProofs: {
      name: "Proofs of Resurrection",
      nameUr: "قیامت کے دلائل",
      nameArabic: "براهين البعث",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "وَاللَّهُ الَّذِي أَرْسَلَ الرِّيَاحَ", meaning: { en: "Allah is the One who sends winds", ur: "اللہ وہ ہے جس نے ہوائیں بھیجیں" }, explanation: { en: "Wind as divine instrument", ur: "ہوا بطور الٰہی آلہ" }, verseRef: "35:9" },
        { term: "فَتُثِيرُ سَحَابًا", meaning: { en: "Which stir up clouds", ur: "پھر وہ بادلوں کو اٹھاتی ہیں" }, explanation: { en: "Natural process reflecting divine control", ur: "قدرتی عمل جو الٰہی کنٹرول کی عکاسی کرتا ہے" }, verseRef: "35:9" },
        { term: "فَسُقْنَاهُ إِلَىٰ بَلَدٍ مَّيِّتٍ", meaning: { en: "We drive it to a dead land", ur: "پھر ہم نے اسے مردہ زمین کی طرف ہانکا" }, explanation: { en: "Rain directed to barren areas", ur: "بارش بنجر علاقوں کی طرف بھیجی جاتی ہے" }, verseRef: "35:9" },
        { term: "فَأَحْيَيْنَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: { en: "We give life to earth after its death", ur: "پھر ہم نے اس سے زمین کو اس کی موت کے بعد زندہ کیا" }, explanation: { en: "Dead land revived - parallel to resurrection", ur: "مردہ زمین کا زندہ ہونا - قیامت کے مشابہ" }, verseRef: "35:9" },
        { term: "كَذَٰلِكَ النُّشُورُ", meaning: { en: "Thus is the resurrection", ur: "اسی طرح قیامت کا اٹھنا ہوگا" }, explanation: { en: "Same power that revives land will resurrect humans", ur: "جو طاقت زمین زندہ کرتی ہے وہی انسانوں کو اٹھائے گی" }, verseRef: "35:9" }
      ]
    },

    honorThroughAllah: {
      name: "Honor Belongs to Allah",
      nameUr: "عزت اللہ کے لیے ہے",
      nameArabic: "العزة لله",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "مَن كَانَ يُرِيدُ الْعِزَّةَ", meaning: { en: "Whoever desires honor", ur: "جو بھی عزت چاہتا ہو" }, explanation: { en: "All who seek honor should know its source", ur: "عزت کے طالب کو اس کا سرچشمہ معلوم ہونا چاہیے" }, verseRef: "35:10" },
        { term: "فَلِلَّهِ الْعِزَّةُ جَمِيعًا", meaning: { en: "To Allah belongs all honor", ur: "ساری عزت اللہ ہی کے لیے ہے" }, explanation: { en: "Honor is exclusively Allah's to bestow", ur: "عزت صرف اللہ کی عطا ہے" }, verseRef: "35:10" },
        { term: "إِلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ", meaning: { en: "To Him ascends good speech", ur: "اسی کی طرف پاکیزہ کلام چڑھتا ہے" }, explanation: { en: "Good words rise to Allah - includes dhikr, dua, praise", ur: "اچھے الفاظ اللہ کی طرف اٹھتے ہیں - ذکر، دعا، حمد شامل ہے" }, verseRef: "35:10" },
        { term: "وَالْعَمَلُ الصَّالِحُ يَرْفَعُهُ", meaning: { en: "And righteous deeds lift it up", ur: "اور نیک عمل اسے بلند کرتا ہے" }, explanation: { en: "Good deeds elevate good speech - or speech elevates deeds", ur: "نیک اعمال پاکیزہ کلام کو بلند کرتے ہیں - یا کلام اعمال کو بلند کرتا ہے" }, verseRef: "35:10" },
        { term: "وَالَّذِينَ يَمْكُرُونَ السَّيِّئَاتِ لَهُمْ عَذَابٌ شَدِيدٌ", meaning: { en: "Those who plot evil will have severe punishment", ur: "جو بری چالیں چلتے ہیں ان کے لیے سخت عذاب ہے" }, explanation: { en: "Evil schemers face harsh consequence", ur: "بری سازشیں کرنے والوں کو سخت نتائج کا سامنا ہوگا" }, verseRef: "35:10" }
      ]
    },

    humanCreation: {
      name: "Human Creation from Earth",
      nameUr: "مٹی سے انسان کی تخلیق",
      nameArabic: "خلق الإنسان من تراب",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَاللَّهُ خَلَقَكُم مِّن تُرَابٍ", meaning: { en: "Allah created you from dust", ur: "اللہ نے تمہیں مٹی سے پیدا کیا" }, explanation: { en: "Adam's origin - mineral foundation of body", ur: "آدم کی اصل - جسم کی معدنی بنیاد" }, verseRef: "35:11" },
        { term: "ثُمَّ مِن نُّطْفَةٍ", meaning: { en: "Then from a drop", ur: "پھر ایک قطرے سے" }, explanation: { en: "Subsequent generations from reproductive fluid", ur: "بعد کی نسلیں تولیدی مائع سے" }, verseRef: "35:11" },
        { term: "ثُمَّ جَعَلَكُمْ أَزْوَاجًا", meaning: { en: "Then He made you pairs", ur: "پھر اس نے تمہیں جوڑے بنایا" }, explanation: { en: "Male and female - complementary creation", ur: "مرد اور عورت - ایک دوسرے کی تکمیل کرتی تخلیق" }, verseRef: "35:11" },
        { term: "وَمَا تَحْمِلُ مِنْ أُنثَىٰ وَلَا تَضَعُ إِلَّا بِعِلْمِهِ", meaning: { en: "No female conceives or gives birth except by His knowledge", ur: "کوئی عورت حاملہ نہیں ہوتی اور نہ جنم دیتی ہے مگر اس کے علم سے" }, explanation: { en: "Every pregnancy and birth known to Allah", ur: "ہر حمل اور پیدائش اللہ کو معلوم ہے" }, verseRef: "35:11" },
        { term: "وَمَا يُعَمَّرُ مِن مُّعَمَّرٍ وَلَا يُنقَصُ مِنْ عُمُرِهِ إِلَّا فِي كِتَابٍ", meaning: { en: "No one lives long or has life cut short except in a record", ur: "کسی کی عمر بڑھتی ہے نہ گھٹتی ہے مگر ایک کتاب میں لکھا ہے" }, explanation: { en: "Every lifespan decreed and recorded", ur: "ہر عمر مقدر اور درج ہے" }, verseRef: "35:11" }
      ]
    },

    twoSeasParable: {
      name: "Parable of Two Seas",
      nameUr: "دو سمندروں کی مثال",
      nameArabic: "مثل البحرين",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَمَا يَسْتَوِي الْبَحْرَانِ", meaning: { en: "Not equal are the two seas", ur: "دونوں سمندر برابر نہیں ہیں" }, explanation: { en: "Two types of water as metaphor for people", ur: "دو قسم کا پانی لوگوں کی تمثیل کے طور پر" }, verseRef: "35:12" },
        { term: "هَٰذَا عَذْبٌ فُرَاتٌ سَائِغٌ شَرَابُهُ", meaning: { en: "This one fresh, sweet, pleasant to drink", ur: "یہ میٹھا شیریں ہے پینے میں خوشگوار" }, explanation: { en: "Fresh water - like the believer", ur: "میٹھا پانی - مومن کی مانند" }, verseRef: "35:12" },
        { term: "وَهَٰذَا مِلْحٌ أُجَاجٌ", meaning: { en: "And this one salty, bitter", ur: "اور یہ نمکین کڑوا ہے" }, explanation: { en: "Salt water - like the disbeliever", ur: "کھاری پانی - کافر کی مانند" }, verseRef: "35:12" },
        { term: "وَمِن كُلٍّ تَأْكُلُونَ لَحْمًا طَرِيًّا", meaning: { en: "From each you eat fresh meat", ur: "ہر ایک سے تم تازہ گوشت کھاتے ہو" }, explanation: { en: "Both seas provide food - Allah provides through both", ur: "دونوں سمندر خوراک فراہم کرتے ہیں - اللہ دونوں سے رزق دیتا ہے" }, verseRef: "35:12" },
        { term: "وَتَسْتَخْرِجُونَ حِلْيَةً تَلْبَسُونَهَا", meaning: { en: "Extract ornaments you wear", ur: "اور زیور نکالتے ہو جو تم پہنتے ہو" }, explanation: { en: "Pearls from both - beauty from different sources", ur: "دونوں سے موتی - مختلف ذرائع سے خوبصورتی" }, verseRef: "35:12" },
        { term: "وَتَرَى الْفُلْكَ فِيهِ مَوَاخِرَ", meaning: { en: "You see ships sailing through them", ur: "اور تم ان میں کشتیاں چلتی دیکھتے ہو" }, explanation: { en: "Navigation - Allah's blessing in transportation", ur: "بحری سفر - نقل و حمل میں اللہ کی نعمت" }, verseRef: "35:12" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs of Power",
      nameUr: "قدرت کی کائناتی نشانیاں",
      nameArabic: "الآيات الكونية",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "يُولِجُ اللَّيْلَ فِي النَّهَارِ", meaning: { en: "He merges night into day", ur: "وہ رات کو دن میں داخل کرتا ہے" }, explanation: { en: "Gradual transition - sunrise and sunset", ur: "بتدریج تبدیلی - طلوع اور غروب آفتاب" }, verseRef: "35:13" },
        { term: "وَيُولِجُ النَّهَارَ فِي اللَّيْلِ", meaning: { en: "And merges day into night", ur: "اور دن کو رات میں داخل کرتا ہے" }, explanation: { en: "Continuous cycle under divine control", ur: "الٰہی کنٹرول میں مسلسل چکر" }, verseRef: "35:13" },
        { term: "وَسَخَّرَ الشَّمْسَ وَالْقَمَرَ", meaning: { en: "And subjected sun and moon", ur: "اور سورج اور چاند کو مسخر کیا" }, explanation: { en: "Celestial bodies in divine service", ur: "فلکی اجسام الٰہی خدمت میں ہیں" }, verseRef: "35:13" },
        { term: "كُلٌّ يَجْرِي لِأَجَلٍ مُّسَمًّى", meaning: { en: "Each running for a specified term", ur: "ہر ایک مقررہ مدت تک چل رہا ہے" }, explanation: { en: "Orbits continue until appointed end", ur: "مدار مقررہ اختتام تک جاری ہیں" }, verseRef: "35:13" },
        { term: "ذَٰلِكُمُ اللَّهُ رَبُّكُمْ لَهُ الْمُلْكُ", meaning: { en: "That is Allah, your Lord - to Him belongs sovereignty", ur: "یہ اللہ ہے تمہارا رب - بادشاہی اسی کی ہے" }, explanation: { en: "All power and dominion belong to Allah", ur: "ساری طاقت اور حکمرانی اللہ کی ہے" }, verseRef: "35:13" }
      ]
    },

    idolsPowerlessness: {
      name: "Powerlessness of Idols",
      nameUr: "بتوں کی بے بسی",
      nameArabic: "عجز الأصنام",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ تَدْعُونَ مِن دُونِهِ", meaning: { en: "Those you invoke besides Him", ur: "اور جنہیں تم اس کے سوا پکارتے ہو" }, explanation: { en: "False gods that people call upon", ur: "جھوٹے معبود جنہیں لوگ پکارتے ہیں" }, verseRef: "35:13" },
        { term: "مَا يَمْلِكُونَ مِن قِطْمِيرٍ", meaning: { en: "Do not possess even a qitmir", ur: "کھجور کی گٹھلی کے چھلکے کے برابر بھی مالک نہیں" }, explanation: { en: "Qitmir - thin membrane on date seed, smallest thing", ur: "قطمیر - کھجور کی گٹھلی کی باریک جھلی، سب سے چھوٹی چیز" }, verseRef: "35:13" },
        { term: "إِن تَدْعُوهُمْ لَا يَسْمَعُوا دُعَاءَكُمْ", meaning: { en: "If you call them, they do not hear your call", ur: "اگر تم انہیں پکارو تو وہ تمہاری پکار نہیں سنتے" }, explanation: { en: "Idols are deaf - cannot respond", ur: "بت بہرے ہیں - جواب نہیں دے سکتے" }, verseRef: "35:14" },
        { term: "وَلَوْ سَمِعُوا مَا اسْتَجَابُوا لَكُمْ", meaning: { en: "Even if they heard, they could not respond", ur: "اور اگر سن بھی لیں تو تمہاری بات قبول نہ کر سکیں" }, explanation: { en: "Powerless even if hearing existed", ur: "سننے کے باوجود بھی بے بس ہیں" }, verseRef: "35:14" },
        { term: "وَيَوْمَ الْقِيَامَةِ يَكْفُرُونَ بِشِرْكِكُمْ", meaning: { en: "On Resurrection Day they will deny your association", ur: "اور قیامت کے دن وہ تمہارے شرک کا انکار کریں گے" }, explanation: { en: "False gods will disown worshippers", ur: "جھوٹے معبود اپنے پوجنے والوں سے بیزاری ظاہر کریں گے" }, verseRef: "35:14" }
      ]
    },

    humanDependence: {
      name: "Human Dependence on Allah",
      nameUr: "انسان کا اللہ پر انحصار",
      nameArabic: "افتقار الإنسان لله",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "يَا أَيُّهَا النَّاسُ أَنتُمُ الْفُقَرَاءُ إِلَى اللَّهِ", meaning: { en: "O people, you are the poor in need of Allah", ur: "اے لوگو! تم سب اللہ کے محتاج ہو" }, explanation: { en: "Fundamental human reality - total dependence", ur: "بنیادی انسانی حقیقت - مکمل انحصار" }, verseRef: "35:15" },
        { term: "وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ", meaning: { en: "And Allah is the Free of need, the Praiseworthy", ur: "اور اللہ بے نیاز، لائقِ حمد ہے" }, explanation: { en: "Allah needs nothing while deserving all praise", ur: "اللہ کو کسی کی ضرورت نہیں جبکہ تمام تعریف کا مستحق ہے" }, verseRef: "35:15" },
        { term: "إِن يَشَأْ يُذْهِبْكُمْ", meaning: { en: "If He wills, He can remove you", ur: "اگر وہ چاہے تو تمہیں لے جائے" }, explanation: { en: "Allah can eliminate entire humanity", ur: "اللہ پوری انسانیت کو ختم کر سکتا ہے" }, verseRef: "35:16" },
        { term: "وَيَأْتِ بِخَلْقٍ جَدِيدٍ", meaning: { en: "And bring a new creation", ur: "اور نئی مخلوق لے آئے" }, explanation: { en: "Allah can create anew - not dependent on us", ur: "اللہ نئی تخلیق کر سکتا ہے - ہم پر منحصر نہیں" }, verseRef: "35:16" },
        { term: "وَمَا ذَٰلِكَ عَلَى اللَّهِ بِعَزِيزٍ", meaning: { en: "And that is not difficult for Allah", ur: "اور یہ اللہ پر کچھ مشکل نہیں" }, explanation: { en: "Nothing is hard for Allah", ur: "اللہ کے لیے کوئی بات مشکل نہیں" }, verseRef: "35:17" }
      ]
    },

    individualAccountability: {
      name: "Individual Accountability",
      nameUr: "انفرادی جوابدہی",
      nameArabic: "المسؤولية الفردية",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "وَلَا تَزِرُ وَازِرَةٌ وِزْرَ أُخْرَىٰ", meaning: { en: "No bearer of burdens will bear burden of another", ur: "کوئی بوجھ اٹھانے والا دوسرے کا بوجھ نہیں اٹھائے گا" }, explanation: { en: "Each person carries own sins only", ur: "ہر شخص صرف اپنے گناہ اٹھاتا ہے" }, verseRef: "35:18" },
        { term: "وَإِن تَدْعُ مُثْقَلَةٌ إِلَىٰ حِمْلِهَا", meaning: { en: "If a heavily burdened soul calls for help", ur: "اگر بوجھ سے لدی ہوئی جان مدد کے لیے پکارے" }, explanation: { en: "Cannot transfer sin to another", ur: "گناہ دوسرے کو منتقل نہیں ہو سکتا" }, verseRef: "35:18" },
        { term: "لَا يُحْمَلْ مِنْهُ شَيْءٌ وَلَوْ كَانَ ذَا قُرْبَىٰ", meaning: { en: "Nothing will be carried, even if relative", ur: "اس میں سے کچھ نہیں اٹھایا جائے گا چاہے قریبی رشتہ دار ہو" }, explanation: { en: "Family ties cannot transfer burdens", ur: "خاندانی تعلقات بوجھ منتقل نہیں کر سکتے" }, verseRef: "35:18" },
        { term: "إِنَّمَا تُنذِرُ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ", meaning: { en: "You only warn those who fear their Lord unseen", ur: "آپ صرف انہیں ڈرا سکتے ہیں جو بن دیکھے اپنے رب سے ڈرتے ہیں" }, explanation: { en: "Warning benefits those with inner fear", ur: "تنبیہ ان کو فائدہ دیتی ہے جن کے دل میں خوف ہو" }, verseRef: "35:18" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "اور نماز قائم کرتے ہیں" }, explanation: { en: "Prayer as sign of responsiveness to warning", ur: "نماز تنبیہ قبول کرنے کی نشانی ہے" }, verseRef: "35:18" },
        { term: "وَمَن تَزَكَّىٰ فَإِنَّمَا يَتَزَكَّىٰ لِنَفْسِهِ", meaning: { en: "Whoever purifies himself does so for his own benefit", ur: "جو پاکیزگی اختیار کرے وہ اپنے ہی فائدے کے لیے ہے" }, explanation: { en: "Self-purification benefits only the self", ur: "خود کی تزکیہ صرف خود کو فائدہ دیتا ہے" }, verseRef: "35:18" }
      ]
    },

    lightVsDarkness: {
      name: "Light vs Darkness",
      nameUr: "روشنی بمقابلہ اندھیرا",
      nameArabic: "النور والظلمات",
      color: "#F59E0B",
      icon: "Sun",
      concepts: [
        { term: "وَمَا يَسْتَوِي الْأَعْمَىٰ وَالْبَصِيرُ", meaning: { en: "Not equal are the blind and the seeing", ur: "اندھا اور آنکھوں والا برابر نہیں" }, explanation: { en: "Disbeliever vs believer - fundamentally different", ur: "کافر بمقابلہ مومن - بنیادی طور پر مختلف" }, verseRef: "35:19" },
        { term: "وَلَا الظُّلُمَاتُ وَلَا النُّورُ", meaning: { en: "Nor are darkness and light", ur: "نہ اندھیرے اور روشنی برابر ہیں" }, explanation: { en: "Misguidance and guidance - opposites", ur: "گمراہی اور ہدایت - ایک دوسرے کی ضد" }, verseRef: "35:20" },
        { term: "وَلَا الظِّلُّ وَلَا الْحَرُورُ", meaning: { en: "Nor shade and heat", ur: "نہ سایہ اور دھوپ برابر ہیں" }, explanation: { en: "Comfort of faith vs burning of disbelief", ur: "ایمان کا سکون بمقابلہ کفر کی تپش" }, verseRef: "35:21" },
        { term: "وَمَا يَسْتَوِي الْأَحْيَاءُ وَلَا الْأَمْوَاتُ", meaning: { en: "Not equal are the living and the dead", ur: "زندے اور مردے برابر نہیں ہیں" }, explanation: { en: "Spiritual life vs spiritual death", ur: "روحانی زندگی بمقابلہ روحانی موت" }, verseRef: "35:22" },
        { term: "إِنَّ اللَّهَ يُسْمِعُ مَن يَشَاءُ", meaning: { en: "Allah causes to hear whom He wills", ur: "بے شک اللہ جسے چاہے سنا دیتا ہے" }, explanation: { en: "Hearing truth is divine gift", ur: "حق سننا الٰہی تحفہ ہے" }, verseRef: "35:22" },
        { term: "وَمَا أَنتَ بِمُسْمِعٍ مَّن فِي الْقُبُورِ", meaning: { en: "You cannot make hear those in graves", ur: "اور آپ قبروں والوں کو نہیں سنا سکتے" }, explanation: { en: "Spiritually dead cannot hear Prophet", ur: "روحانی طور پر مردہ لوگ نبی ﷺ کی بات نہیں سن سکتے" }, verseRef: "35:22" }
      ]
    },

    propheticMission: {
      name: "The Prophetic Mission",
      nameUr: "نبوی مشن",
      nameArabic: "رسالة النبي",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "إِنْ أَنتَ إِلَّا نَذِيرٌ", meaning: { en: "You are only a warner", ur: "آپ صرف ڈرانے والے ہیں" }, explanation: { en: "Prophet's role is warning, not compelling", ur: "نبی ﷺ کا کردار ڈرانا ہے، زبردستی نہیں" }, verseRef: "35:23" },
        { term: "إِنَّا أَرْسَلْنَاكَ بِالْحَقِّ", meaning: { en: "We have sent you with truth", ur: "ہم نے آپ کو حق کے ساتھ بھیجا" }, explanation: { en: "Divine commission with truth", ur: "حق کے ساتھ الٰہی فرمان" }, verseRef: "35:24" },
        { term: "بَشِيرًا وَنَذِيرًا", meaning: { en: "As a bringer of good news and warner", ur: "خوشخبری دینے والا اور ڈرانے والا بنا کر" }, explanation: { en: "Dual role - glad tidings and warnings", ur: "دوہرا کردار - بشارت اور تنبیہ" }, verseRef: "35:24" },
        { term: "وَإِن مِّنْ أُمَّةٍ إِلَّا خَلَا فِيهَا نَذِيرٌ", meaning: { en: "There is no nation but a warner passed among them", ur: "کوئی امت ایسی نہیں جس میں ڈرانے والا نہ آیا ہو" }, explanation: { en: "Every nation received a messenger", ur: "ہر قوم کو پیغمبر ملا" }, verseRef: "35:24" }
      ]
    },

    patternsOfDenial: {
      name: "Patterns of Denial",
      nameUr: "انکار کے نمونے",
      nameArabic: "سنن التكذيب",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَإِن يُكَذِّبُوكَ فَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِم", meaning: { en: "If they deny you, those before them denied", ur: "اگر یہ آپ کو جھٹلائیں تو ان سے پہلے والوں نے بھی جھٹلایا" }, explanation: { en: "Denial is historical pattern", ur: "انکار تاریخی نمونہ ہے" }, verseRef: "35:25" },
        { term: "جَاءَتْهُمْ رُسُلُهُم بِالْبَيِّنَاتِ", meaning: { en: "Their messengers came with clear proofs", ur: "ان کے رسول واضح دلائل لے کر آئے" }, explanation: { en: "Evidence was always provided", ur: "ثبوت ہمیشہ فراہم کیے گئے" }, verseRef: "35:25" },
        { term: "وَبِالزُّبُرِ", meaning: { en: "And with scriptures", ur: "اور صحیفوں کے ساتھ" }, explanation: { en: "Written revelation given", ur: "تحریری وحی دی گئی" }, verseRef: "35:25" },
        { term: "وَبِالْكِتَابِ الْمُنِيرِ", meaning: { en: "And with enlightening Book", ur: "اور روشن کتاب کے ساتھ" }, explanation: { en: "Illuminating scripture sent", ur: "روشنی دینے والی کتاب بھیجی گئی" }, verseRef: "35:25" },
        { term: "ثُمَّ أَخَذْتُ الَّذِينَ كَفَرُوا", meaning: { en: "Then I seized those who disbelieved", ur: "پھر میں نے کافروں کو پکڑ لیا" }, explanation: { en: "Divine punishment followed denial", ur: "الٰہی سزا انکار کے بعد آئی" }, verseRef: "35:26" },
        { term: "فَكَيْفَ كَانَ نَكِيرِ", meaning: { en: "How was My punishment?", ur: "تو میرا عذاب کیسا تھا؟" }, explanation: { en: "Rhetorical - punishment was severe", ur: "بلاغتی سوال - عذاب سخت تھا" }, verseRef: "35:26" }
      ]
    },

    creationDiversity: {
      name: "Diversity in Creation",
      nameUr: "تخلیق میں تنوع",
      nameArabic: "تنوع الخلق",
      color: "#06B6D4",
      icon: "Sparkles",
      concepts: [
        { term: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنزَلَ مِنَ السَّمَاءِ مَاءً", meaning: { en: "Do you not see Allah sends water from sky?", ur: "کیا تم نے نہیں دیکھا کہ اللہ نے آسمان سے پانی برسایا؟" }, explanation: { en: "Rain as source of diversity", ur: "بارش تنوع کا ذریعہ ہے" }, verseRef: "35:27" },
        { term: "فَأَخْرَجْنَا بِهِ ثَمَرَاتٍ مُّخْتَلِفًا أَلْوَانُهَا", meaning: { en: "With it We produce fruits of varying colors", ur: "پھر ہم نے اس سے مختلف رنگوں کے پھل نکالے" }, explanation: { en: "Fruit diversity from same water", ur: "ایک ہی پانی سے پھلوں کا تنوع" }, verseRef: "35:27" },
        { term: "وَمِنَ الْجِبَالِ جُدَدٌ بِيضٌ وَحُمْرٌ", meaning: { en: "And in mountains are streaks white and red", ur: "اور پہاڑوں میں سفید اور سرخ دھاریاں ہیں" }, explanation: { en: "Mountain colors - geological diversity", ur: "پہاڑوں کے رنگ - ارضیاتی تنوع" }, verseRef: "35:27" },
        { term: "مُّخْتَلِفٌ أَلْوَانُهَا وَغَرَابِيبُ سُودٌ", meaning: { en: "Varying in color, and some intensely black", ur: "مختلف رنگوں کی اور کچھ گہری سیاہ" }, explanation: { en: "Range of colors in nature", ur: "فطرت میں رنگوں کی وسعت" }, verseRef: "35:27" },
        { term: "وَمِنَ النَّاسِ وَالدَّوَابِّ وَالْأَنْعَامِ مُخْتَلِفٌ أَلْوَانُهُ", meaning: { en: "And among people, creatures, livestock - varying colors", ur: "اور لوگوں، جانوروں اور مویشیوں میں مختلف رنگ ہیں" }, explanation: { en: "Diversity in living beings", ur: "جاندار مخلوقات میں تنوع" }, verseRef: "35:28" }
      ]
    },

    scholarsFearAllah: {
      name: "Scholars Who Fear Allah",
      nameUr: "اللہ سے ڈرنے والے علماء",
      nameArabic: "العلماء يخشون الله",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ", meaning: { en: "Only those who have knowledge fear Allah among His servants", ur: "اللہ سے اس کے بندوں میں سے صرف علم والے ہی ڈرتے ہیں" }, explanation: { en: "True knowledge leads to khashya (awe-filled fear)", ur: "حقیقی علم خشیت (ہیبت بھرے خوف) کی طرف لے جاتا ہے" }, verseRef: "35:28" },
        { term: "إِنَّ اللَّهَ عَزِيزٌ غَفُورٌ", meaning: { en: "Allah is Almighty, Forgiving", ur: "بے شک اللہ غالب، بخشنے والا ہے" }, explanation: { en: "Power and mercy combined", ur: "طاقت اور رحمت کا امتزاج" }, verseRef: "35:28" }
      ]
    },

    believersReward: {
      name: "Reward for Believers",
      nameUr: "مومنوں کا اجر",
      nameArabic: "جزاء المؤمنين",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ", meaning: { en: "Those who recite the Book of Allah", ur: "جو لوگ اللہ کی کتاب کی تلاوت کرتے ہیں" }, explanation: { en: "Regular Quran recitation", ur: "باقاعدہ قرآن کی تلاوت" }, verseRef: "35:29" },
        { term: "وَأَقَامُوا الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "اور نماز قائم کرتے ہیں" }, explanation: { en: "Consistent prayer practice", ur: "مستقل نماز کی پابندی" }, verseRef: "35:29" },
        { term: "وَأَنفَقُوا مِمَّا رَزَقْنَاهُمْ سِرًّا وَعَلَانِيَةً", meaning: { en: "And spend from what We provided secretly and publicly", ur: "اور ہم نے جو رزق دیا اس میں سے چھپ کر اور ظاہر خرچ کرتے ہیں" }, explanation: { en: "Charity both hidden and open", ur: "صدقہ پوشیدہ بھی اور ظاہری بھی" }, verseRef: "35:29" },
        { term: "يَرْجُونَ تِجَارَةً لَّن تَبُورَ", meaning: { en: "Hoping for a trade that will never fail", ur: "ایسی تجارت کی امید رکھتے ہیں جو کبھی خسارے میں نہیں جائے گی" }, explanation: { en: "Investment with Allah never loses", ur: "اللہ کے ساتھ سرمایہ کاری کبھی نقصان نہیں دیتی" }, verseRef: "35:29" },
        { term: "لِيُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُم مِّن فَضْلِهِ", meaning: { en: "That He may pay them full wages and increase from His bounty", ur: "تاکہ وہ ان کے اجر پورے دے اور اپنے فضل سے مزید بڑھائے" }, explanation: { en: "Full reward plus extra from Allah's generosity", ur: "پورا اجر اور اللہ کی سخاوت سے اضافی انعام" }, verseRef: "35:30" }
      ]
    },

    quranTruth: {
      name: "Truth of the Quran",
      nameUr: "قرآن کی سچائی",
      nameArabic: "صدق القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَالَّذِي أَوْحَيْنَا إِلَيْكَ مِنَ الْكِتَابِ هُوَ الْحَقُّ", meaning: { en: "What We revealed to you of the Book is the truth", ur: "اور جو ہم نے آپ کی طرف کتاب سے وحی کی وہ حق ہے" }, explanation: { en: "Quran is absolute truth", ur: "قرآن مطلق سچائی ہے" }, verseRef: "35:31" },
        { term: "مُصَدِّقًا لِّمَا بَيْنَ يَدَيْهِ", meaning: { en: "Confirming what was before it", ur: "اپنے سے پہلے کی تصدیق کرنے والا" }, explanation: { en: "Quran confirms previous scriptures", ur: "قرآن پچھلی کتابوں کی تصدیق کرتا ہے" }, verseRef: "35:31" },
        { term: "إِنَّ اللَّهَ بِعِبَادِهِ لَخَبِيرٌ بَصِيرٌ", meaning: { en: "Allah is All-Aware, All-Seeing of His servants", ur: "بے شک اللہ اپنے بندوں سے باخبر، دیکھنے والا ہے" }, explanation: { en: "Allah fully knows and sees servants", ur: "اللہ بندوں کو پوری طرح جانتا اور دیکھتا ہے" }, verseRef: "35:31" }
      ]
    },

    inheritorsOfBook: {
      name: "Three Categories of Inheritors",
      nameUr: "وارثوں کی تین اقسام",
      nameArabic: "أصناف ورثة الكتاب",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "ثُمَّ أَوْرَثْنَا الْكِتَابَ الَّذِينَ اصْطَفَيْنَا مِنْ عِبَادِنَا", meaning: { en: "Then We gave the Book as inheritance to those We chose from Our servants", ur: "پھر ہم نے کتاب ان کی میراث بنائی جنہیں ہم نے اپنے بندوں میں سے چنا" }, explanation: { en: "This ummah inherited the Book", ur: "اس امت کو کتاب ورثے میں ملی" }, verseRef: "35:32" },
        { term: "فَمِنْهُمْ ظَالِمٌ لِّنَفْسِهِ", meaning: { en: "Among them is he who wrongs himself", ur: "ان میں سے کوئی اپنے نفس پر ظلم کرنے والا ہے" }, explanation: { en: "First category: sinners who acknowledge truth", ur: "پہلی قسم: گناہگار جو حق کو مانتے ہیں" }, verseRef: "35:32" },
        { term: "وَمِنْهُم مُّقْتَصِدٌ", meaning: { en: "And among them is moderate", ur: "اور ان میں سے کوئی میانہ رو ہے" }, explanation: { en: "Second category: those who do minimum obligations", ur: "دوسری قسم: جو کم از کم فرائض ادا کرتے ہیں" }, verseRef: "35:32" },
        { term: "وَمِنْهُمْ سَابِقٌ بِالْخَيْرَاتِ", meaning: { en: "And among them is foremost in good deeds", ur: "اور ان میں سے کوئی نیکیوں میں سبقت کرنے والا ہے" }, explanation: { en: "Third category: excelling in righteousness", ur: "تیسری قسم: نیکی میں سبقت لے جانے والے" }, verseRef: "35:32" },
        { term: "بِإِذْنِ اللَّهِ", meaning: { en: "By Allah's permission", ur: "اللہ کے اذن سے" }, explanation: { en: "Excellence achieved only through divine help", ur: "فضیلت صرف الٰہی مدد سے حاصل ہوتی ہے" }, verseRef: "35:32" },
        { term: "ذَٰلِكَ هُوَ الْفَضْلُ الْكَبِيرُ", meaning: { en: "That is the great bounty", ur: "یہی بڑا فضل ہے" }, explanation: { en: "Being chosen to inherit Book is greatest favor", ur: "کتاب کے وارث چنے جانا سب سے بڑا احسان ہے" }, verseRef: "35:32" }
      ]
    },

    paradiseDescription: {
      name: "Gardens of Eternity",
      nameUr: "ابدی باغات",
      nameArabic: "جنات عدن",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "جَنَّاتُ عَدْنٍ يَدْخُلُونَهَا", meaning: { en: "Gardens of perpetual residence they will enter", ur: "ہمیشہ رہنے والی جنتیں جن میں وہ داخل ہوں گے" }, explanation: { en: "All three categories enter Paradise", ur: "تینوں اقسام جنت میں داخل ہوں گے" }, verseRef: "35:33" },
        { term: "يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍ", meaning: { en: "Adorned with bracelets of gold", ur: "وہاں سونے کے کنگنوں سے آراستہ کیے جائیں گے" }, explanation: { en: "Golden jewelry in Paradise", ur: "جنت میں سونے کے زیورات" }, verseRef: "35:33" },
        { term: "وَلُؤْلُؤًا", meaning: { en: "And pearl", ur: "اور موتیوں سے" }, explanation: { en: "Pearl adornments", ur: "موتیوں کی آرائش" }, verseRef: "35:33" },
        { term: "وَلِبَاسُهُمْ فِيهَا حَرِيرٌ", meaning: { en: "And their garments therein will be silk", ur: "اور ان کا لباس وہاں ریشم ہوگا" }, explanation: { en: "Silk clothing - forbidden in dunya for men", ur: "ریشمی لباس - دنیا میں مردوں کے لیے حرام" }, verseRef: "35:33" },
        { term: "الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ", meaning: { en: "Praise to Allah who removed from us sorrow", ur: "الحمد للہ جس نے ہم سے غم دور کر دیا" }, explanation: { en: "No grief in Paradise", ur: "جنت میں کوئی غم نہیں" }, verseRef: "35:34" },
        { term: "إِنَّ رَبَّنَا لَغَفُورٌ شَكُورٌ", meaning: { en: "Indeed, our Lord is Forgiving, Appreciative", ur: "بے شک ہمارا رب بخشنے والا، قدر کرنے والا ہے" }, explanation: { en: "Shakur - Allah appreciates small deeds greatly", ur: "شکور - اللہ چھوٹے اعمال کی بھی بڑی قدر کرتا ہے" }, verseRef: "35:34" },
        { term: "الَّذِي أَحَلَّنَا دَارَ الْمُقَامَةِ مِن فَضْلِهِ", meaning: { en: "Who settled us in the Home of Permanence by His bounty", ur: "جس نے اپنے فضل سے ہمیں ہمیشہ رہنے کے گھر میں اتارا" }, explanation: { en: "Eternal residence through divine grace", ur: "الٰہی فضل سے ابدی رہائش" }, verseRef: "35:35" },
        { term: "لَا يَمَسُّنَا فِيهَا نَصَبٌ", meaning: { en: "No fatigue touches us therein", ur: "ہمیں وہاں کوئی تھکاوٹ نہیں لگتی" }, explanation: { en: "No tiredness in Paradise", ur: "جنت میں کوئی تھکان نہیں" }, verseRef: "35:35" },
        { term: "وَلَا يَمَسُّنَا فِيهَا لُغُوبٌ", meaning: { en: "Nor does weariness touch us", ur: "اور نہ ہمیں وہاں ماندگی چھوتی ہے" }, explanation: { en: "No exhaustion ever", ur: "کبھی کوئی تھکاوٹ نہیں" }, verseRef: "35:35" }
      ]
    },

    disbelieversRegret: {
      name: "Regret of Disbelievers",
      nameUr: "کافروں کا پچھتاوا",
      nameArabic: "ندم الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَالَّذِينَ كَفَرُوا لَهُمْ نَارُ جَهَنَّمَ", meaning: { en: "Those who disbelieve will have fire of Hell", ur: "اور کافروں کے لیے جہنم کی آگ ہے" }, explanation: { en: "Hellfire for disbelievers", ur: "کافروں کے لیے آتشِ جہنم" }, verseRef: "35:36" },
        { term: "لَا يُقْضَىٰ عَلَيْهِمْ فَيَمُوتُوا", meaning: { en: "It is not decreed that they die", ur: "نہ ان پر موت کا فیصلہ ہوگا کہ مر جائیں" }, explanation: { en: "Cannot escape through death", ur: "موت کے ذریعے بچ نہیں سکتے" }, verseRef: "35:36" },
        { term: "وَلَا يُخَفَّفُ عَنْهُم مِّنْ عَذَابِهَا", meaning: { en: "Nor is its punishment lightened for them", ur: "اور نہ ان سے اس کا عذاب ہلکا کیا جائے گا" }, explanation: { en: "No reduction in torment", ur: "عذاب میں کوئی کمی نہیں" }, verseRef: "35:36" },
        { term: "وَهُمْ يَصْطَرِخُونَ فِيهَا", meaning: { en: "They will cry out therein", ur: "وہ اس میں چیخیں مار رہے ہوں گے" }, explanation: { en: "Screaming in Hell", ur: "جہنم میں چیخ و پکار" }, verseRef: "35:37" },
        { term: "رَبَّنَا أَخْرِجْنَا نَعْمَلْ صَالِحًا", meaning: { en: "Our Lord, take us out - we will do good", ur: "اے ہمارے رب! ہمیں نکال، ہم نیک عمل کریں گے" }, explanation: { en: "Futile plea for second chance", ur: "دوسرے موقع کی بے سود التجا" }, verseRef: "35:37" },
        { term: "أَوَلَمْ نُعَمِّرْكُم مَّا يَتَذَكَّرُ فِيهِ مَن تَذَكَّرَ", meaning: { en: "Did We not give you life long enough for one who reflects to reflect?", ur: "کیا ہم نے تمہیں اتنی عمر نہیں دی تھی کہ جو سوچنا چاہتا وہ سوچ لیتا؟" }, explanation: { en: "Enough time was given to understand", ur: "سمجھنے کے لیے کافی وقت دیا گیا تھا" }, verseRef: "35:37" },
        { term: "وَجَاءَكُمُ النَّذِيرُ", meaning: { en: "And the warner came to you", ur: "اور تمہارے پاس ڈرانے والا آیا" }, explanation: { en: "Prophet warned them clearly", ur: "نبی ﷺ نے واضح طور پر خبردار کیا" }, verseRef: "35:37" },
        { term: "فَذُوقُوا فَمَا لِلظَّالِمِينَ مِن نَّصِيرٍ", meaning: { en: "So taste, for wrongdoers have no helper", ur: "پس چکھو، ظالموں کا کوئی مددگار نہیں" }, explanation: { en: "No one to aid disbelievers", ur: "کافروں کی مدد کرنے والا کوئی نہیں" }, verseRef: "35:37" }
      ]
    },

    allahsKnowledge: {
      name: "Allah's Comprehensive Knowledge",
      nameUr: "اللہ کا ہمہ گیر علم",
      nameArabic: "علم الله الشامل",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "إِنَّ اللَّهَ عَالِمُ غَيْبِ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Allah is Knower of unseen of heavens and earth", ur: "بے شک اللہ آسمانوں اور زمین کے غیب کا جاننے والا ہے" }, explanation: { en: "Nothing hidden in universe", ur: "کائنات میں کچھ بھی پوشیدہ نہیں" }, verseRef: "35:38" },
        { term: "إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ", meaning: { en: "He is Knowing of what is in the breasts", ur: "بے شک وہ سینوں کی باتوں کو جاننے والا ہے" }, explanation: { en: "Knows inner thoughts and feelings", ur: "باطنی خیالات اور احساسات سے آگاہ ہے" }, verseRef: "35:38" }
      ]
    },

    stewardshipOnEarth: {
      name: "Human Stewardship",
      nameUr: "انسان کی خلافت",
      nameArabic: "الاستخلاف في الأرض",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "هُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ فِي الْأَرْضِ", meaning: { en: "He is the One who made you successors on earth", ur: "وہی ہے جس نے تمہیں زمین میں خلیفہ بنایا" }, explanation: { en: "Humans as stewards - test of responsibility", ur: "انسان بطور امانتدار - ذمہ داری کی آزمائش" }, verseRef: "35:39" },
        { term: "فَمَن كَفَرَ فَعَلَيْهِ كُفْرُهُ", meaning: { en: "Whoever disbelieves - upon him is his disbelief", ur: "جس نے کفر کیا اس کا کفر اسی پر ہے" }, explanation: { en: "Consequences fall on individual", ur: "نتائج فرد پر ہی پڑتے ہیں" }, verseRef: "35:39" },
        { term: "وَلَا يَزِيدُ الْكَافِرِينَ كُفْرُهُمْ عِندَ رَبِّهِمْ إِلَّا مَقْتًا", meaning: { en: "Disbelief increases disbelievers only in hatred from their Lord", ur: "کافروں کا کفر ان کے رب کے نزدیک صرف ناراضگی بڑھاتا ہے" }, explanation: { en: "Disbelief brings divine displeasure", ur: "کفر الٰہی ناراضگی لاتا ہے" }, verseRef: "35:39" },
        { term: "وَلَا يَزِيدُ الْكَافِرِينَ كُفْرُهُمْ إِلَّا خَسَارًا", meaning: { en: "Disbelief increases disbelievers only in loss", ur: "کافروں کا کفر صرف نقصان بڑھاتا ہے" }, explanation: { en: "Disbelief is pure loss", ur: "کفر خالص نقصان ہے" }, verseRef: "35:39" }
      ]
    },

    challengeToIdolaters: {
      name: "Challenge to Idolaters",
      nameUr: "مشرکوں کو چیلنج",
      nameArabic: "تحدي المشركين",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "قُلْ أَرَأَيْتُمْ شُرَكَاءَكُمُ الَّذِينَ تَدْعُونَ مِن دُونِ اللَّهِ", meaning: { en: "Say: Have you considered your partners you invoke besides Allah?", ur: "کہو: ذرا اپنے ان شریکوں کو دیکھو جنہیں تم اللہ کے سوا پکارتے ہو" }, explanation: { en: "Challenge to think about idols", ur: "بتوں کے بارے میں سوچنے کا چیلنج" }, verseRef: "35:40" },
        { term: "أَرُونِي مَاذَا خَلَقُوا مِنَ الْأَرْضِ", meaning: { en: "Show me what they created of earth", ur: "مجھے دکھاؤ انہوں نے زمین میں سے کیا بنایا" }, explanation: { en: "Demand for proof of creation", ur: "تخلیق کے ثبوت کا مطالبہ" }, verseRef: "35:40" },
        { term: "أَمْ لَهُمْ شِرْكٌ فِي السَّمَاوَاتِ", meaning: { en: "Or have they partnership in heavens?", ur: "یا ان کا آسمانوں میں کوئی حصہ ہے؟" }, explanation: { en: "No share in cosmic creation", ur: "کائناتی تخلیق میں کوئی حصہ نہیں" }, verseRef: "35:40" },
        { term: "أَمْ آتَيْنَاهُمْ كِتَابًا", meaning: { en: "Or have We given them a book?", ur: "یا ہم نے انہیں کوئی کتاب دی ہے؟" }, explanation: { en: "No scripture supports their worship", ur: "کوئی کتاب ان کی عبادت کی تائید نہیں کرتی" }, verseRef: "35:40" },
        { term: "بَلْ إِن يَعِدُ الظَّالِمُونَ بَعْضُهُم بَعْضًا إِلَّا غُرُورًا", meaning: { en: "Rather, wrongdoers promise each other only delusion", ur: "بلکہ ظالم ایک دوسرے کو صرف دھوکے کا وعدہ کرتے ہیں" }, explanation: { en: "Mutual deception among misguided", ur: "گمراہوں میں باہمی دھوکا" }, verseRef: "35:40" }
      ]
    },

    cosmicStability: {
      name: "Allah Upholds the Universe",
      nameUr: "اللہ کائنات کو قائم رکھتا ہے",
      nameArabic: "الله يمسك السماوات والأرض",
      color: "#F59E0B",
      icon: "Globe",
      concepts: [
        { term: "إِنَّ اللَّهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَن تَزُولَا", meaning: { en: "Allah holds heavens and earth lest they cease", ur: "بے شک اللہ آسمانوں اور زمین کو تھامے ہوئے ہے کہ ٹل نہ جائیں" }, explanation: { en: "Divine power maintains cosmic order", ur: "الٰہی طاقت کائناتی نظم برقرار رکھتی ہے" }, verseRef: "35:41" },
        { term: "وَلَئِن زَالَتَا إِنْ أَمْسَكَهُمَا مِنْ أَحَدٍ مِّن بَعْدِهِ", meaning: { en: "If they were to cease, none could hold them after Him", ur: "اگر وہ ٹل جائیں تو اس کے بعد کوئی انہیں تھام نہیں سکتا" }, explanation: { en: "Only Allah prevents cosmic collapse", ur: "صرف اللہ کائناتی تباہی کو روکتا ہے" }, verseRef: "35:41" },
        { term: "إِنَّهُ كَانَ حَلِيمًا غَفُورًا", meaning: { en: "He is Forbearing, Forgiving", ur: "بے شک وہ بردبار، بخشنے والا ہے" }, explanation: { en: "Despite power, Allah is gentle and pardoning", ur: "طاقت کے باوجود اللہ نرم خو اور معاف کرنے والا ہے" }, verseRef: "35:41" }
      ]
    },

    brokenOaths: {
      name: "Broken Oaths of Pagans",
      nameUr: "مشرکوں کی ٹوٹی ہوئی قسمیں",
      nameArabic: "نقض الأيمان",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَأَقْسَمُوا بِاللَّهِ جَهْدَ أَيْمَانِهِمْ", meaning: { en: "They swore by Allah their strongest oaths", ur: "انہوں نے اللہ کی سخت قسمیں کھائیں" }, explanation: { en: "Pagans made solemn promises", ur: "مشرکوں نے پختہ وعدے کیے" }, verseRef: "35:42" },
        { term: "لَئِن جَاءَهُمْ نَذِيرٌ لَيَكُونُنَّ أَهْدَىٰ مِنْ إِحْدَى الْأُمَمِ", meaning: { en: "If a warner came they would be more guided than any nation", ur: "اگر ان کے پاس ڈرانے والا آیا تو وہ کسی بھی امت سے زیادہ ہدایت یافتہ ہوں گے" }, explanation: { en: "Claimed they would believe if warned", ur: "دعویٰ کیا کہ اگر خبردار کیا جائے تو ایمان لائیں گے" }, verseRef: "35:42" },
        { term: "فَلَمَّا جَاءَهُمْ نَذِيرٌ مَّا زَادَهُمْ إِلَّا نُفُورًا", meaning: { en: "But when warner came, it only increased their aversion", ur: "لیکن جب ڈرانے والا آیا تو ان کی نفرت اور بڑھ گئی" }, explanation: { en: "Reality opposite of claim", ur: "حقیقت دعوے کے برعکس نکلی" }, verseRef: "35:42" }
      ]
    },

    arroganceAndSchemes: {
      name: "Arrogance & Evil Schemes",
      nameUr: "تکبر اور بری چالیں",
      nameArabic: "الاستكبار والمكر",
      color: "#EF4444",
      icon: "Crown",
      concepts: [
        { term: "اسْتِكْبَارًا فِي الْأَرْضِ", meaning: { en: "Arrogance in the land", ur: "زمین میں تکبر" }, explanation: { en: "Pride was root of rejection", ur: "غرور انکار کی جڑ تھا" }, verseRef: "35:43" },
        { term: "وَمَكْرَ السَّيِّئِ", meaning: { en: "And plotting of evil", ur: "اور بری چالیں" }, explanation: { en: "Scheming against truth", ur: "حق کے خلاف سازش" }, verseRef: "35:43" },
        { term: "وَلَا يَحِيقُ الْمَكْرُ السَّيِّئُ إِلَّا بِأَهْلِهِ", meaning: { en: "Evil plotting encompasses only its people", ur: "بری سازش صرف اپنے والوں کو ہی گھیرتی ہے" }, explanation: { en: "Evil schemes backfire on schemers", ur: "بری چالیں چلنے والوں پر الٹ پڑتی ہیں" }, verseRef: "35:43" },
        { term: "فَهَلْ يَنظُرُونَ إِلَّا سُنَّتَ الْأَوَّلِينَ", meaning: { en: "Do they await except way of former peoples?", ur: "کیا یہ پہلے لوگوں کے طریقے کے سوا کسی اور چیز کا انتظار کر رہے ہیں؟" }, explanation: { en: "Same fate as destroyed nations", ur: "تباہ شدہ قوموں جیسا انجام" }, verseRef: "35:43" },
        { term: "فَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَبْدِيلًا", meaning: { en: "You will never find change in Allah's way", ur: "تم اللہ کے طریقے میں کوئی تبدیلی نہیں پاؤ گے" }, explanation: { en: "Divine patterns never change", ur: "الٰہی قوانین کبھی نہیں بدلتے" }, verseRef: "35:43" },
        { term: "وَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَحْوِيلًا", meaning: { en: "Nor will you find alteration in Allah's way", ur: "اور نہ تم اللہ کے طریقے میں کوئی ادل بدل پاؤ گے" }, explanation: { en: "No deviation from divine law", ur: "الٰہی قانون سے کوئی انحراف نہیں" }, verseRef: "35:43" }
      ]
    },

    lessonsFromHistory: {
      name: "Lessons from Destroyed Nations",
      nameUr: "تباہ شدہ قوموں سے اسباق",
      nameArabic: "عبر من الأمم الهالكة",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ", meaning: { en: "Have they not traveled through earth?", ur: "کیا انہوں نے زمین میں سفر نہیں کیا؟" }, explanation: { en: "Call to observe historical ruins", ur: "تاریخی کھنڈرات کا مشاہدہ کرنے کی دعوت" }, verseRef: "35:44" },
        { term: "فَيَنظُرُوا كَيْفَ كَانَ عَاقِبَةُ الَّذِينَ مِن قَبْلِهِمْ", meaning: { en: "And see how was end of those before them?", ur: "اور دیکھیں کہ ان سے پہلے والوں کا انجام کیسا ہوا؟" }, explanation: { en: "Fate of previous deniers visible", ur: "پہلے منکرین کا انجام نظر آتا ہے" }, verseRef: "35:44" },
        { term: "وَكَانُوا أَشَدَّ مِنْهُمْ قُوَّةً", meaning: { en: "They were greater than them in power", ur: "وہ ان سے زیادہ طاقتور تھے" }, explanation: { en: "Stronger nations were destroyed", ur: "زیادہ طاقتور قومیں تباہ ہوئیں" }, verseRef: "35:44" },
        { term: "وَمَا كَانَ اللَّهُ لِيُعْجِزَهُ مِن شَيْءٍ فِي السَّمَاوَاتِ وَلَا فِي الْأَرْضِ", meaning: { en: "Nothing in heavens or earth can escape Allah", ur: "آسمانوں اور زمین میں کوئی چیز اللہ کو عاجز نہیں کر سکتی" }, explanation: { en: "No one can outrun divine decree", ur: "کوئی الٰہی فیصلے سے بچ نہیں سکتا" }, verseRef: "35:44" },
        { term: "إِنَّهُ كَانَ عَلِيمًا قَدِيرًا", meaning: { en: "He is All-Knowing, All-Powerful", ur: "بے شک وہ سب جاننے والا، قدرت والا ہے" }, explanation: { en: "Knowledge and power combined", ur: "علم اور قدرت کا امتزاج" }, verseRef: "35:44" }
      ]
    },

    divinePatience: {
      name: "Divine Patience with Sinners",
      nameUr: "گناہگاروں کے ساتھ الٰہی صبر",
      nameArabic: "حلم الله بالعصاة",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "وَلَوْ يُؤَاخِذُ اللَّهُ النَّاسَ بِمَا كَسَبُوا", meaning: { en: "If Allah were to punish people for what they earned", ur: "اگر اللہ لوگوں کو ان کے اعمال پر فوری پکڑ لے" }, explanation: { en: "Hypothetical immediate punishment", ur: "فرضی فوری سزا" }, verseRef: "35:45" },
        { term: "مَا تَرَكَ عَلَىٰ ظَهْرِهَا مِن دَابَّةٍ", meaning: { en: "He would not leave on its back any creature", ur: "تو زمین کی پشت پر کوئی جاندار نہ چھوڑے" }, explanation: { en: "All would be destroyed if judged immediately", ur: "فوری فیصلے سے سب تباہ ہو جائیں" }, verseRef: "35:45" },
        { term: "وَلَٰكِن يُؤَخِّرُهُمْ إِلَىٰ أَجَلٍ مُّسَمًّى", meaning: { en: "But He defers them to an appointed term", ur: "لیکن وہ انہیں مقررہ مدت تک مہلت دیتا ہے" }, explanation: { en: "Delay is mercy - time to repent", ur: "مہلت رحمت ہے - توبہ کا وقت" }, verseRef: "35:45" },
        { term: "فَإِذَا جَاءَ أَجَلُهُمْ", meaning: { en: "When their term comes", ur: "پھر جب ان کی مدت آ جائے" }, explanation: { en: "Appointed time will arrive", ur: "مقررہ وقت ضرور آئے گا" }, verseRef: "35:45" },
        { term: "فَإِنَّ اللَّهَ كَانَ بِعِبَادِهِ بَصِيرًا", meaning: { en: "Allah is Ever-Seeing of His servants", ur: "بے شک اللہ اپنے بندوں کو خوب دیکھنے والا ہے" }, explanation: { en: "Allah sees all and judges fairly", ur: "اللہ سب دیکھتا ہے اور انصاف سے فیصلہ کرتا ہے" }, verseRef: "35:45" }
      ]
    }
  },

  relationships: [
    { from: "فاطر السماوات والأرض", to: "جاعل الملائكة رسلا", type: "action", description: { en: "The Originator also appointed angels as messengers", ur: "پیدا کرنے والے نے فرشتوں کو پیغامبر بھی مقرر کیا" } },
    { from: "ما يفتح الله من رحمة", to: "لا ممسك لها", type: "consequence", description: { en: "When Allah grants mercy, none can prevent it", ur: "جب اللہ رحمت عطا کرے تو کوئی روک نہیں سکتا" } },
    { from: "الشيطان عدو", to: "فاتخذوه عدوا", type: "command", description: { en: "Recognizing enemy requires treating as enemy", ur: "دشمن کو پہچاننے کا تقاضا ہے کہ اس سے دشمن جیسا سلوک کرو" } },
    { from: "فأحيينا به الأرض", to: "كذلك النشور", type: "analogy", description: { en: "Dead earth revived parallels resurrection", ur: "مردہ زمین کا زندہ ہونا قیامت سے مشابہ ہے" } },
    { from: "الكلم الطيب", to: "العمل الصالح يرفعه", type: "synergy", description: { en: "Good speech and deeds work together", ur: "پاکیزہ کلام اور نیک عمل مل کر کام کرتے ہیں" } },
    { from: "العلماء", to: "يخشى الله", type: "cause", description: { en: "True knowledge leads to fearing Allah", ur: "حقیقی علم اللہ کے خوف کی طرف لے جاتا ہے" } },
    { from: "ظالم لنفسه", to: "مقتصد", type: "progression", description: { en: "Levels of faith among inheritors", ur: "وارثوں میں ایمان کے درجات" } },
    { from: "مقتصد", to: "سابق بالخيرات", type: "progression", description: { en: "From moderate to excelling", ur: "میانہ روی سے سبقت تک" } },
    { from: "المكر السيئ", to: "إلا بأهله", type: "consequence", description: { en: "Evil schemes harm the schemers", ur: "بری چالیں سازش کرنے والوں کو ہی نقصان پہنچاتی ہیں" } },
    { from: "سنة الأولين", to: "لن تجد تبديلا", type: "permanence", description: { en: "Divine patterns never change", ur: "الٰہی قوانین کبھی نہیں بدلتے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Originator", verses: "35:1-3", description: { en: "Allah as Creator, angels as messengers, call to remember blessings", ur: "اللہ بطور خالق، فرشتے بطور پیغامبر، نعمتیں یاد کرنے کی دعوت" } },
      { stage: 2, theme: "Prophetic Comfort", verses: "35:4-8", description: { en: "Denial is historical, worldly deception warned, Satan as enemy", ur: "انکار تاریخی عمل ہے، دنیاوی دھوکے سے خبردار، شیطان دشمن ہے" } },
      { stage: 3, theme: "Signs of Resurrection", verses: "35:9-11", description: { en: "Winds, rain, dead land revived, human creation from dust", ur: "ہوائیں، بارش، مردہ زمین کا زندہ ہونا، مٹی سے انسان کی تخلیق" } },
      { stage: 4, theme: "Two Seas Parable", verses: "35:12-14", description: { en: "Fresh vs salty water, cosmic signs, idols powerless", ur: "میٹھا بمقابلہ کھارا پانی، کائناتی نشانیاں، بے بس بت" } },
      { stage: 5, theme: "Human Dependence", verses: "35:15-18", description: { en: "All need Allah, individual accountability, purification", ur: "سب اللہ کے محتاج ہیں، انفرادی جوابدہی، تزکیہ" } },
      { stage: 6, theme: "Light vs Darkness", verses: "35:19-26", description: { en: "Blind vs seeing, prophetic mission, patterns of denial", ur: "اندھا بمقابلہ بینا، نبوی مشن، انکار کے نمونے" } },
      { stage: 7, theme: "Creation Diversity", verses: "35:27-28", description: { en: "Colors in nature, scholars who fear Allah", ur: "فطرت میں رنگ، اللہ سے ڈرنے والے علماء" } },
      { stage: 8, theme: "Believers' Trade", verses: "35:29-31", description: { en: "Recitation, prayer, charity as profitable investment", ur: "تلاوت، نماز، صدقہ بطور نفع بخش سرمایہ کاری" } },
      { stage: 9, theme: "Three Inheritors", verses: "35:32-35", description: { en: "Wronging self, moderate, and foremost - all enter Paradise", ur: "خود پر ظلم کرنے والے، میانہ رو، اور آگے بڑھنے والے - سب جنت میں جائیں گے" } },
      { stage: 10, theme: "Hellfire Regret", verses: "35:36-38", description: { en: "Disbelievers' torment, futile pleas, missed opportunities", ur: "کافروں کا عذاب، بے سود التجائیں، گنوائے ہوئے مواقع" } },
      { stage: 11, theme: "Stewardship Test", verses: "35:39-41", description: { en: "Successors on earth, challenge to idolaters, cosmic stability", ur: "زمین میں خلافت، مشرکوں کو چیلنج، کائناتی استحکام" } },
      { stage: 12, theme: "Divine Patterns", verses: "35:42-45", description: { en: "Broken oaths, arrogance, unchanging divine ways, divine patience", ur: "ٹوٹی قسمیں، تکبر، ناقابل تبدیل الٰہی طریقے، الٰہی صبر" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Remember blessings daily", how: "Ask yourself: 'Is there any creator besides Allah providing for me?'", verse: "35:3" },
      { principle: "Treat Satan as enemy", how: "Recognize his tricks, seek refuge, don't follow his whispers", verse: "35:6" },
      { principle: "Don't be deceived by dunya", how: "Remember that Allah's promise is true - this life is temporary", verse: "35:5" },
      { principle: "Good speech with good deeds", how: "Back up your words with actions - both rise together to Allah", verse: "35:10" },
      { principle: "Seek knowledge that increases fear of Allah", how: "True 'ilm leads to khashya - study to grow in awe of Allah", verse: "35:28" },
      { principle: "Profitable trade with Allah", how: "Recite Quran, pray, give charity secretly and openly", verse: "35:29" },
      { principle: "Strive to be foremost", how: "Don't settle for minimum - race to be among sabiqeen", verse: "35:32" },
      { principle: "Learn from history", how: "Travel, read, reflect on destroyed nations - stronger than you were ruined", verse: "35:44" },
      { principle: "Use time wisely", how: "You were given enough life to reflect - don't waste it", verse: "35:37" },
      { principle: "Evil schemes backfire", how: "Never plot evil - it only harms the plotter", verse: "35:43" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Three Inheritors and Universal Salvation", ur: "تین وارث اور آفاقی نجات" },
    insight: { en: "Surah Fatir contains one of the most hope-giving verses in the Quran (35:32-33). After stating that the Book was given as inheritance to chosen servants, it divides them into three categories: (1) Those who wrong themselves (zalim li-nafsihi), (2) The moderate (muqtasid), and (3) Those foremost in good (sabiq bil-khayrat). Remarkably, ALL THREE categories enter Paradise (35:33)! This shows that even those who sin but remain within the fold of faith have hope. The 'wronging oneself' refers to sins while still believing - not kufr. Scholars note this verse provides immense comfort: even those struggling with sins are among the 'chosen servants' if they hold onto faith. The surah also uniquely connects creation diversity (colors in fruits, mountains, animals, humans - 35:27-28) with scholars fearing Allah. True scholarship leads to wonder at Allah's creative power. The opening (Fatir - Originator) and this connection suggest that studying creation deeply should increase, not decrease, faith.", ur: "سورہ فاطر میں قرآن کی سب سے زیادہ امید دلانے والی آیات میں سے ایک ہے (35:32-33)۔ یہ بیان کرنے کے بعد کہ کتاب چنے ہوئے بندوں کو وراثت میں دی گئی، اسے تین اقسام میں تقسیم کیا: (1) اپنے نفس پر ظلم کرنے والے (ظالم لنفسہ)، (2) میانہ رو (مقتصد)، اور (3) نیکیوں میں سبقت کرنے والے (سابق بالخیرات)۔ حیرت انگیز طور پر تینوں اقسام جنت میں داخل ہوتے ہیں (35:33)! اس سے ظاہر ہوتا ہے کہ گناہ کرنے والے بھی اگر ایمان کے دائرے میں رہیں تو امید رکھ سکتے ہیں۔ 'اپنے نفس پر ظلم' سے مراد ایمان رکھتے ہوئے گناہ ہے - کفر نہیں۔ علماء کا کہنا ہے کہ یہ آیت بے پناہ تسلی دیتی ہے: گناہوں سے جدوجہد کرنے والے بھی 'چنے ہوئے بندوں' میں شامل ہیں اگر وہ ایمان پر قائم رہیں۔ سورہ تخلیقی تنوع (پھلوں، پہاڑوں، جانوروں، انسانوں کے رنگ - 35:27-28) کو علماء کے اللہ سے ڈرنے سے منفرد طریقے سے جوڑتی ہے۔ حقیقی علم اللہ کی تخلیقی قدرت پر حیرت کی طرف لے جاتا ہے۔ آغاز (فاطر - پیدا کرنے والا) اور اس ربط سے پتا چلتا ہے کہ تخلیق کا گہرا مطالعہ ایمان بڑھانا چاہیے، گھٹانا نہیں۔" }
  },

  historicalContext: {
    note: { en: "Revealed in the middle Makkan period when the Prophet faced persistent rejection. The surah opens by establishing Allah as Fatir - the One who originates everything from nothing. This countered the Makkan claim that resurrection was impossible. The reference to angels having varying numbers of wings (35:1) corrected pagan beliefs about angels. The parable of two seas (35:12) would resonate with the trading Quraysh familiar with both the Red Sea (salty) and fresh water sources. The verse about scholars fearing Allah (35:28) emphasized that true knowledge leads to humility before God, contrasting with the arrogant 'knowledge' of Makkan leaders. The three categories of inheritors (35:32) gave hope to new Muslims struggling between faith and their environment.", ur: "درمیانی مکی دور میں نازل ہوئی جب نبی ﷺ کو مسلسل انکار کا سامنا تھا۔ سورہ کا آغاز اللہ کو فاطر - عدم سے ہر چیز پیدا کرنے والا - کے طور پر ثابت کرتا ہے۔ اس سے مکہ والوں کے دعوے کی تردید ہوتی تھی کہ دوبارہ اٹھنا ناممکن ہے۔ فرشتوں کے مختلف پروں کا ذکر (35:1) فرشتوں کے بارے میں مشرکانہ عقائد کی اصلاح کرتا تھا۔ دو سمندروں کی مثال (35:12) تجارت پیشہ قریش کو متاثر کرتی جو بحیرہ احمر (کھارا) اور میٹھے پانی کے ذرائع دونوں سے واقف تھے۔ علماء کے اللہ سے ڈرنے کی آیت (35:28) نے زور دیا کہ حقیقی علم خدا کے سامنے عاجزی لاتا ہے، مکہ کے سرداروں کے مغرور 'علم' کے برعکس۔ تین قسم کے وارثوں (35:32) نے نئے مسلمانوں کو امید دی جو ایمان اور ماحول کے درمیان کشمکش میں تھے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "فَاطِر", example: { en: "Originator (Fatir)", ur: "پیدا کرنے والا (فاطر)" }, effect: { en: "Unique divine name - One who splits open non-existence to create", ur: "منفرد الٰہی نام - جو عدم کو چیر کر تخلیق کرتا ہے" } },
      { feature: "مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ", example: { en: "Two, three, four (wings)", ur: "دو دو، تین تین، چار چار (پر)" }, effect: { en: "Distributive numerals showing variety", ur: "تقسیمی اعداد تنوع ظاہر کرتے ہیں" } },
      { feature: "قِطْمِير", example: { en: "Thin membrane on date seed", ur: "کھجور کی گٹھلی کی باریک جھلی" }, effect: { en: "Smallest conceivable thing - idols don't own even this", ur: "سب سے چھوٹی قابل تصور چیز - بت اتنے کے بھی مالک نہیں" } },
      { feature: "الْفُقَرَاءُ إِلَى اللَّهِ", example: { en: "The poor in need of Allah", ur: "اللہ کے محتاج" }, effect: { en: "All humanity defined by poverty before Allah", ur: "تمام انسانیت اللہ کے سامنے محتاجی سے متعارف" } },
      { feature: "غَرَابِيبُ سُودٌ", example: { en: "Intensely black", ur: "گہرا سیاہ" }, effect: { en: "Doubled adjective for emphasis - jet black", ur: "تاکید کے لیے دوہرا صفت - کالک سیاہ" } },
      { feature: "تِجَارَةً لَّن تَبُورَ", example: { en: "Trade that will never fail", ur: "ایسی تجارت جو کبھی خسارے میں نہ جائے" }, effect: { en: "Commerce metaphor - believers as smart investors", ur: "تجارتی استعارہ - مومنین بطور دانشمند سرمایہ کار" } },
      { feature: "سُنَّتَ الْأَوَّلِينَ", example: { en: "Way of former peoples", ur: "پہلے لوگوں کا طریقہ" }, effect: { en: "Divine pattern - consistent across history", ur: "الٰہی قانون - پوری تاریخ میں یکساں" } }
    ]
  },

  keyTerms: [
    { term: "فَاطِر", transliteration: "Fatir", meaning: { en: "Originator - One who creates from nothing", ur: "پیدا کرنے والا - عدم سے تخلیق کرنے والا" } },
    { term: "الْغَرُور", transliteration: "Al-Gharur", meaning: { en: "The Deceiver (Satan)", ur: "دھوکا دینے والا (شیطان)" } },
    { term: "النُّشُور", transliteration: "An-Nushur", meaning: { en: "The Resurrection - rising from graves", ur: "دوبارہ اٹھنا - قبروں سے جی اٹھنا" } },
    { term: "الْعِزَّة", transliteration: "Al-'Izzah", meaning: { en: "Honor, might, dignity", ur: "عزت، طاقت، وقار" } },
    { term: "الْكَلِمُ الطَّيِّبُ", transliteration: "Al-Kalim at-Tayyib", meaning: { en: "Good/pure speech", ur: "پاکیزہ کلام" } },
    { term: "خَلَائِف", transliteration: "Khala'if", meaning: { en: "Successors, stewards", ur: "جانشین، خلیفے" } },
    { term: "ظَالِمٌ لِّنَفْسِهِ", transliteration: "Zalimun li-nafsihi", meaning: { en: "One who wrongs himself", ur: "اپنے نفس پر ظلم کرنے والا" } },
    { term: "مُّقْتَصِد", transliteration: "Muqtasid", meaning: { en: "Moderate, balanced one", ur: "میانہ رو، متوازن شخص" } },
    { term: "سَابِق بِالْخَيْرَاتِ", transliteration: "Sabiq bil-khayrat", meaning: { en: "Foremost in good deeds", ur: "نیکیوں میں سبقت کرنے والا" } },
    { term: "يَخْشَى", transliteration: "Yakhsha", meaning: { en: "To fear with awe and knowledge", ur: "ہیبت اور علم کے ساتھ ڈرنا" } }
  ],

  angelDescription: {
    verse: 1,
    text: "جَاعِلِ الْمَلَائِكَةِ رُسُلًا أُولِي أَجْنِحَةٍ مَّثْنَىٰ وَثُلَاثَ وَرُبَاعَ",
    translation: { en: "Who made angels messengers with wings - two, three, or four", ur: "Who made angels messengers with wings - two, three, or four" },
    note: { en: "This is one of the rare descriptions of angelic physical attributes. Jibreel is reported to have 600 wings. The varying numbers show diversity even among angels - Allah's creativity extends to all creation.", ur: "This is one of the rare descriptions of angelic physical attributes. Jibreel is reported to have 600 wings. The varying numbers show diversity even among angels - Allah's creativity extends to all creation." }
  },

  threeCategoriesDetail: {
    verse: 32,
    categories: [
      {
        arabic: "ظَالِمٌ لِّنَفْسِهِ",
        name: "Wronging oneself",
        description: { en: "Those who commit sins while maintaining faith. They harm themselves but remain believers.", ur: "Those who commit sins while maintaining faith. They harm themselves but remain believers." },
        hope: "They still inherit the Book and enter Paradise"
      },
      {
        arabic: "مُّقْتَصِد",
        name: "The moderate",
        description: { en: "Those who fulfill obligations and avoid prohibitions - doing the minimum required.", ur: "Those who fulfill obligations and avoid prohibitions - doing the minimum required." },
        status: "Steady believers who do what is required"
      },
      {
        arabic: "سَابِق بِالْخَيْرَاتِ",
        name: "Foremost in good",
        description: { en: "Those who excel in worship, charity, character - going beyond obligations.", ur: "Those who excel in worship, charity, character - going beyond obligations." },
        excellence: "The highest rank - achieved only by Allah's permission"
      }
    ],
    unifyingFactor: "All three categories are from those Allah 'chose' (istafa) - all enter Paradise"
  },

  scientificReferences: {
    notes: [
      { verse: "35:9", topic: "Water cycle", note: { en: "Wind stirs clouds, drives rain to barren land - scientific accuracy", ur: "Wind stirs clouds, drives rain to barren land - scientific accuracy" } },
      { verse: "35:11", topic: "Fetal development", note: { en: "Conception and birth known to Allah - no pregnancy unknown to Him", ur: "Conception and birth known to Allah - no pregnancy unknown to Him" } },
      { verse: "35:12", topic: "Two types of water", note: { en: "Fresh and salt water - different densities, both useful", ur: "Fresh and salt water - different densities, both useful" } },
      { verse: "35:27", topic: "Geological diversity", note: { en: "Mountain colors from mineral composition - white, red, black streaks", ur: "Mountain colors from mineral composition - white, red, black streaks" } },
      { verse: "35:41", topic: "Cosmic stability", note: { en: "Allah holds heavens and earth from collapsing - gravitational stability", ur: "Allah holds heavens and earth from collapsing - gravitational stability" } }
    ]
  }
};

export default ONTOLOGY;
