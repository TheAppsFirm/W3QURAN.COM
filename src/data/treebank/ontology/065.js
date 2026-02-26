/**
 * Surah At-Talaq (65) - Ontology of Quranic Concepts
 * The Divorce
 * Theme: Divorce regulations, waiting periods, reliance on Allah
 */

export const ONTOLOGY = {
  surahId: 65,
  surahName: "At-Talaq",
  surahNameArabic: "الطلاق",
  revelationType: "Madani",
  totalAyahs: 12,

  categories: {
    divorceRules: {
      name: "Divorce Regulations",
      nameUr: "طلاق کے احکام",
      nameArabic: "أحكام الطلاق",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "فَطَلِّقُوهُنَّ لِعِدَّتِهِنَّ", meaning: { en: "Divorce them for their waiting period", ur: "انہیں ان کی عدت کے مطابق طلاق دو" }, explanation: { en: "Divorce at start of iddah (clean period)", ur: "عدت (پاکی) کے آغاز میں طلاق دو" }, verseRef: "65:1" },
        { term: "وَأَحْصُوا الْعِدَّةَ", meaning: { en: "And count the period", ur: "اور عدت شمار کرو" }, explanation: { en: "Track the waiting period carefully", ur: "عدت کا بغور حساب رکھو" }, verseRef: "65:1" },
        { term: "لَا تُخْرِجُوهُنَّ مِن بُيُوتِهِنَّ", meaning: { en: "Do not expel them from their houses", ur: "انہیں ان کے گھروں سے نہ نکالو" }, explanation: { en: "Divorced women stay in home during iddah", ur: "مطلقہ خواتین عدت میں گھر میں رہیں" }, verseRef: "65:1" },
        { term: "إِلَّا أَن يَأْتِينَ بِفَاحِشَةٍ مُّبَيِّنَةٍ", meaning: { en: "Unless they commit clear immorality", ur: "مگر یہ کہ وہ کھلی بے حیائی کریں" }, explanation: { en: "Exception - open misconduct", ur: "استثناء - کھلی بدکاری" }, verseRef: "65:1" }
      ]
    },

    divineWisdom: {
      name: "Divine Wisdom in Waiting",
      nameUr: "عدت میں الٰہی حکمت",
      nameArabic: "حكمة العدة",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًا", meaning: { en: "You know not - perhaps Allah will bring about a matter", ur: "تمہیں نہیں معلوم شاید Allah اس کے بعد کوئی نئی بات پیدا کر دے" }, explanation: { en: "Reconciliation possible during iddah", ur: "عدت کے دوران صلح ممکن ہے" }, verseRef: "65:1" },
        { term: "وَتِلْكَ حُدُودُ اللَّهِ", meaning: { en: "These are limits of Allah", ur: "یہ Allah کی حدود ہیں" }, explanation: { en: "Divine boundaries not to transgress", ur: "الٰہی حدیں جن سے تجاوز نہ کرو" }, verseRef: "65:1" },
        { term: "وَمَن يَتَعَدَّ حُدُودَ اللَّهِ فَقَدْ ظَلَمَ نَفْسَهُ", meaning: { en: "Whoever transgresses has wronged himself", ur: "جو حد سے بڑھے اس نے اپنے آپ پر ظلم کیا" }, explanation: { en: "Violating limits is self-harm", ur: "حدود کی خلاف ورزی خود کو نقصان پہنچانا ہے" }, verseRef: "65:1" }
      ]
    },

    endOfIddah: {
      name: "End of Waiting Period",
      nameUr: "عدت کا اختتام",
      nameArabic: "انتهاء العدة",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "فَإِذَا بَلَغْنَ أَجَلَهُنَّ", meaning: { en: "When they reach their term", ur: "جب وہ اپنی مدت کو پہنچ جائیں" }, explanation: { en: "End of waiting period", ur: "عدت کا اختتام" }, verseRef: "65:2" },
        { term: "فَأَمْسِكُوهُنَّ بِمَعْرُوفٍ", meaning: { en: "Retain them with kindness", ur: "انہیں اچھائی سے روک لو" }, explanation: { en: "Reconcile properly", ur: "اچھے طریقے سے رجوع کرو" }, verseRef: "65:2" },
        { term: "أَوْ فَارِقُوهُنَّ بِمَعْرُوفٍ", meaning: { en: "Or part with them kindly", ur: "یا اچھائی سے جدا کر دو" }, explanation: { en: "Separate amicably", ur: "خوش اسلوبی سے علیحدگی" }, verseRef: "65:2" },
        { term: "وَأَشْهِدُوا ذَوَيْ عَدْلٍ مِّنكُمْ", meaning: { en: "Bring two just witnesses", ur: "اپنے میں سے دو عادل گواہ بناؤ" }, explanation: { en: "Witnesses for divorce/reconciliation", ur: "طلاق/رجوع کے لیے گواہ" }, verseRef: "65:2" }
      ]
    },

    taqwaRewards: {
      name: "Rewards of Taqwa",
      nameUr: "تقویٰ کے ثمرات",
      nameArabic: "ثمرات التقوى",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", meaning: { en: "Whoever fears Allah - He will make for him a way out", ur: "جو Allah سے ڈرے، اس کے لیے نکلنے کا راستہ بنائے گا" }, explanation: { en: "Taqwa provides solutions", ur: "تقویٰ مشکلات کا حل فراہم کرتا ہے" }, verseRef: "65:2" },
        { term: "وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ", meaning: { en: "And provide from where he does not expect", ur: "اور وہاں سے رزق دے گا جہاں سے گمان بھی نہ ہو" }, explanation: { en: "Unexpected provision for God-fearing", ur: "خدا ترسوں کے لیے غیر متوقع رزق" }, verseRef: "65:3" },
        { term: "يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا", meaning: { en: "Make his matter easy for him", ur: "اس کے معاملے میں آسانی پیدا کر دے گا" }, explanation: { en: "Ease in affairs for believers", ur: "مومنوں کے معاملات میں آسانی" }, verseRef: "65:4" },
        { term: "يُكَفِّرْ عَنْهُ سَيِّئَاتِهِ", meaning: { en: "Remove from him his misdeeds", ur: "اس کی برائیاں دور کر دے گا" }, explanation: { en: "Sins forgiven", ur: "گناہ معاف" }, verseRef: "65:5" },
        { term: "وَيُعْظِمْ لَهُ أَجْرًا", meaning: { en: "Make great for him reward", ur: "اس کا اجر بڑا کر دے گا" }, explanation: { en: "Increased reward", ur: "بڑھا ہوا اجر" }, verseRef: "65:5" }
      ]
    },

    tawakkul: {
      name: "Trust in Allah",
      nameUr: "اللہ پر توکل",
      nameArabic: "التوكل على الله",
      color: '#F59E0B',
      icon: 'Heart',
      concepts: [
        { term: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ", meaning: { en: "Whoever relies on Allah - He is sufficient for him", ur: "جو Allah پر بھروسہ کرے، اسے Allah کافی ہے" }, explanation: { en: "Allah suffices those who trust Him", ur: "Allah توکل کرنے والوں کے لیے کافی ہے" }, verseRef: "65:3" },
        { term: "إِنَّ اللَّهَ بَالِغُ أَمْرِهِ", meaning: { en: "Indeed Allah will accomplish His purpose", ur: "بے شک Allah اپنا حکم پورا کرنے والا ہے" }, explanation: { en: "Divine decree always fulfilled", ur: "الٰہی فیصلہ ہمیشہ پورا ہوتا ہے" }, verseRef: "65:3" },
        { term: "قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا", meaning: { en: "Allah has set for everything a measure", ur: "Allah نے ہر چیز کا اندازہ مقرر کیا ہے" }, explanation: { en: "Everything has divine timing", ur: "ہر چیز کا الٰہی وقت مقرر ہے" }, verseRef: "65:3" }
      ]
    },

    waitingPeriods: {
      name: "Specific Waiting Periods",
      nameUr: "مخصوص عدت کی مدتیں",
      nameArabic: "مدد العدة المختلفة",
      color: '#06B6D4',
      icon: 'Book',
      concepts: [
        { term: "وَاللَّائِي يَئِسْنَ مِنَ الْمَحِيضِ", meaning: { en: "Those who have despaired of menstruation", ur: "جن کو حیض سے ناامیدی ہو گئی ہے" }, explanation: { en: "Postmenopausal women", ur: "حیض سے فارغ خواتین" }, verseRef: "65:4" },
        { term: "فَعِدَّتُهُنَّ ثَلَاثَةُ أَشْهُرٍ", meaning: { en: "Their waiting period is three months", ur: "ان کی عدت تین ماہ ہے" }, explanation: { en: "Three months for those without menses", ur: "بغیر حیض والیوں کے لیے تین ماہ" }, verseRef: "65:4" },
        { term: "وَاللَّائِي لَمْ يَحِضْنَ", meaning: { en: "And those who have not menstruated", ur: "اور جنہیں حیض نہیں آیا" }, explanation: { en: "Pre-pubescent or irregular - three months", ur: "نابالغ یا بے ترتیب حیض - تین ماہ" }, verseRef: "65:4" },
        { term: "وَأُولَاتُ الْأَحْمَالِ أَجَلُهُنَّ أَن يَضَعْنَ حَمْلَهُنَّ", meaning: { en: "Pregnant women - until they give birth", ur: "حاملہ عورتوں کی مدت وضعِ حمل تک ہے" }, explanation: { en: "Pregnancy ends at delivery", ur: "حمل کی عدت بچے کی پیدائش تک" }, verseRef: "65:4" }
      ]
    },

    divorcedWomenRights: {
      name: "Rights of Divorced Women",
      nameUr: "مطلقہ خواتین کے حقوق",
      nameArabic: "حقوق المطلقات",
      color: '#EC4899',
      icon: 'Shield',
      concepts: [
        { term: "أَسْكِنُوهُنَّ مِنْ حَيْثُ سَكَنتُم", meaning: { en: "House them where you dwell", ur: "انہیں وہاں رکھو جہاں تم رہتے ہو" }, explanation: { en: "Provide accommodation", ur: "رہائش فراہم کرو" }, verseRef: "65:6" },
        { term: "مِّن وُجْدِكُمْ", meaning: { en: "According to your means", ur: "اپنی وسعت کے مطابق" }, explanation: { en: "Within one's ability", ur: "اپنی استطاعت کے اندر" }, verseRef: "65:6" },
        { term: "وَلَا تُضَارُّوهُنَّ", meaning: { en: "Do not harm them", ur: "انہیں نقصان نہ پہنچاؤ" }, explanation: { en: "Prohibition of harassment", ur: "ایذا رسانی کی ممانعت" }, verseRef: "65:6" },
        { term: "لِتُضَيِّقُوا عَلَيْهِنَّ", meaning: { en: "To make difficulty for them", ur: "تاکہ ان پر تنگی کرو" }, explanation: { en: "Don't pressure them to leave", ur: "انہیں جانے پر مجبور نہ کرو" }, verseRef: "65:6" }
      ]
    },

    pregnancyBreastfeeding: {
      name: "Pregnancy and Breastfeeding",
      nameUr: "حمل اور رضاعت",
      nameArabic: "الحمل والرضاعة",
      color: '#22C55E',
      icon: 'Heart',
      concepts: [
        { term: "وَإِن كُنَّ أُولَاتِ حَمْلٍ فَأَنفِقُوا عَلَيْهِنَّ", meaning: { en: "If pregnant, spend on them", ur: "اگر حاملہ ہوں تو ان پر خرچ کرو" }, explanation: { en: "Financial support during pregnancy", ur: "حمل کے دوران مالی کفالت" }, verseRef: "65:6" },
        { term: "فَإِنْ أَرْضَعْنَ لَكُمْ فَآتُوهُنَّ أُجُورَهُنَّ", meaning: { en: "If they breastfeed, give them their dues", ur: "اگر وہ دودھ پلائیں تو ان کی اجرت دو" }, explanation: { en: "Payment for nursing", ur: "دودھ پلانے کا معاوضہ" }, verseRef: "65:6" },
        { term: "وَأْتَمِرُوا بَيْنَكُم بِمَعْرُوفٍ", meaning: { en: "Consult together in kindness", ur: "آپس میں اچھائی سے مشورہ کرو" }, explanation: { en: "Cooperative decision-making", ur: "باہمی تعاون سے فیصلے" }, verseRef: "65:6" },
        { term: "وَإِن تَعَاسَرْتُمْ فَسَتُرْضِعُ لَهُ أُخْرَىٰ", meaning: { en: "If you disagree, another will nurse", ur: "اگر اختلاف ہو تو کوئی اور عورت دودھ پلائے گی" }, explanation: { en: "Alternative nursing arrangement", ur: "متبادل دودھ پلانے کا بندوبست" }, verseRef: "65:6" }
      ]
    },

    financialResponsibility: {
      name: "Financial Responsibility",
      nameUr: "مالی ذمہ داری",
      nameArabic: "المسؤولية المالية",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "لِيُنفِقْ ذُو سَعَةٍ مِّن سَعَتِهِ", meaning: { en: "Let affluent spend from abundance", ur: "وسعت والا اپنی وسعت سے خرچ کرے" }, explanation: { en: "Wealthy give according to means", ur: "مالدار اپنی حیثیت کے مطابق دے" }, verseRef: "65:7" },
        { term: "وَمَن قُدِرَ عَلَيْهِ رِزْقُهُ فَلْيُنفِقْ مِمَّا آتَاهُ اللَّهُ", meaning: { en: "Whoever's provision is restricted - spend from what Allah gave", ur: "جس کا رزق تنگ ہو وہ اتنا خرچ کرے جتنا Allah نے دیا" }, explanation: { en: "Poor give what they can", ur: "غریب بس اتنا دے جتنا ہو سکے" }, verseRef: "65:7" },
        { term: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا مَا آتَاهَا", meaning: { en: "Allah does not burden a soul beyond what He gave it", ur: "Allah کسی جان کو اس سے زیادہ تکلیف نہیں دیتا جو اسے دیا" }, explanation: { en: "Divine mercy in obligations", ur: "فرائض میں الٰہی رحمت" }, verseRef: "65:7" },
        { term: "سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا", meaning: { en: "Allah will make after hardship ease", ur: "Allah تنگی کے بعد آسانی پیدا کرے گا" }, explanation: { en: "Promise of relief", ur: "آسانی کا وعدہ" }, verseRef: "65:7" }
      ]
    },

    destructionOfNations: {
      name: "Destruction of Disobedient Nations",
      nameUr: "نافرمان قوموں کی تباہی",
      nameArabic: "هلاك الأمم العاصية",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وَكَأَيِّن مِّن قَرْيَةٍ عَتَتْ عَنْ أَمْرِ رَبِّهَا", meaning: { en: "How many a city rebelled against its Lord's command", ur: "کتنی ہی بستیاں اپنے رب کے حکم سے سرکش ہوئیں" }, explanation: { en: "Historical disobedience", ur: "تاریخی نافرمانی" }, verseRef: "65:8" },
        { term: "فَحَاسَبْنَاهَا حِسَابًا شَدِيدًا", meaning: { en: "We took it to severe account", ur: "ہم نے ان کا سخت حساب لیا" }, explanation: { en: "Divine reckoning", ur: "الٰہی محاسبہ" }, verseRef: "65:8" },
        { term: "وَعَذَّبْنَاهَا عَذَابًا نُّكْرًا", meaning: { en: "And punished it with terrible punishment", ur: "اور ان کو ایسا عذاب دیا جو پہلے نہ ہوا تھا" }, explanation: { en: "Unprecedented punishment", ur: "بے مثال عذاب" }, verseRef: "65:8" },
        { term: "فَذَاقَتْ وَبَالَ أَمْرِهَا", meaning: { en: "So it tasted evil result of its affair", ur: "پس انہوں نے اپنے کام کا وبال چکھا" }, explanation: { en: "Consequences of rebellion", ur: "سرکشی کے نتائج" }, verseRef: "65:9" }
      ]
    },

    divineReminder: {
      name: "Divine Reminder",
      nameUr: "الٰہی یاد دہانی",
      nameArabic: "التذكير الإلهي",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "فَاتَّقُوا اللَّهَ يَا أُولِي الْأَلْبَابِ", meaning: { en: "Fear Allah, O people of understanding", ur: "اے عقل والو! Allah سے ڈرو" }, explanation: { en: "Call to those with intellect", ur: "عقل والوں سے خطاب" }, verseRef: "65:10" },
        { term: "قَدْ أَنزَلَ اللَّهُ إِلَيْكُمْ ذِكْرًا", meaning: { en: "Allah has sent down to you a reminder", ur: "Allah نے تمہاری طرف نصیحت نازل کی ہے" }, explanation: { en: "Quran as reminder", ur: "قرآن بطور نصیحت" }, verseRef: "65:10" },
        { term: "رَّسُولًا يَتْلُو عَلَيْكُمْ آيَاتِ اللَّهِ", meaning: { en: "A Messenger reciting to you verses of Allah", ur: "ایک رسول جو تم پر Allah کی آیات تلاوت کرتا ہے" }, explanation: { en: "Prophet as guide", ur: "نبی ﷺ بطور رہنما" }, verseRef: "65:11" },
        { term: "لِّيُخْرِجَ الَّذِينَ آمَنُوا... مِنَ الظُّلُمَاتِ إِلَى النُّورِ", meaning: { en: "To bring believers from darkness into light", ur: "ایمان والوں کو اندھیروں سے نور کی طرف نکالنے کے لیے" }, explanation: { en: "Guidance from ignorance to truth", ur: "جہالت سے حق کی طرف رہنمائی" }, verseRef: "65:11" }
      ]
    },

    cosmicCreation: {
      name: "Cosmic Creation",
      nameUr: "کائناتی تخلیق",
      nameArabic: "الخلق الكوني",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "اللَّهُ الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ", meaning: { en: "Allah created seven heavens", ur: "Allah نے سات آسمان بنائے" }, explanation: { en: "Multi-layered heavens", ur: "کئی طبقات والے آسمان" }, verseRef: "65:12" },
        { term: "وَمِنَ الْأَرْضِ مِثْلَهُنَّ", meaning: { en: "And of earth the like of them", ur: "اور زمین بھی اتنی ہی" }, explanation: { en: "Seven earths parallel to heavens", ur: "آسمانوں کی مانند سات زمینیں" }, verseRef: "65:12" },
        { term: "يَتَنَزَّلُ الْأَمْرُ بَيْنَهُنَّ", meaning: { en: "Command descends between them", ur: "ان کے درمیان حکمِ الٰہی نازل ہوتا ہے" }, explanation: { en: "Divine decree flows through creation", ur: "الٰہی فرمان مخلوقات میں جاری رہتا ہے" }, verseRef: "65:12" },
        { term: "لِتَعْلَمُوا أَنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: { en: "So you may know Allah is over all things competent", ur: "تاکہ تم جان لو کہ Allah ہر چیز پر قادر ہے" }, explanation: { en: "Purpose - realize divine power", ur: "مقصد - الٰہی قدرت کا ادراک" }, verseRef: "65:12" },
        { term: "وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا", meaning: { en: "And Allah has encompassed all things in knowledge", ur: "اور بے شک Allah نے ہر چیز کو علم سے گھیرا ہوا ہے" }, explanation: { en: "Divine omniscience", ur: "الٰہی علمِ کامل" }, verseRef: "65:12" }
      ]
    }
  },

  relationships: [
    { from: "طلقوهن لعدتهن", to: "لعل الله يحدث بعد ذلك أمراً", type: "wisdom", description: { en: "Proper divorce timing allows reconciliation", ur: "صحیح وقت پر طلاق صلح کی گنجائش رکھتی ہے" } },
    { from: "ومن يتق الله", to: "مخرجاً/رزقاً/يسراً", type: "reward", description: { en: "Taqwa leads to way out, provision, ease", ur: "تقویٰ راستہ، رزق اور آسانی کا ذریعہ ہے" } },
    { from: "حدود الله", to: "ظلم نفسه", type: "warning", description: { en: "Transgressing limits is self-harm", ur: "حدود سے تجاوز خود کو نقصان پہنچانا ہے" } },
    { from: "عتت عن أمر ربها", to: "حساباً شديداً", type: "cause-effect", description: { en: "Rebellion leads to severe reckoning", ur: "سرکشی سخت حساب کا سبب بنتی ہے" } },
    { from: "بعد عسر", to: "يسراً", type: "promise", description: { en: "Hardship is always followed by ease", ur: "تنگی کے بعد ہمیشہ آسانی آتی ہے" } },
    { from: "سبع سماوات", to: "قدير/أحاط علماً", type: "evidence", description: { en: "Creation proves power and knowledge", ur: "تخلیق قدرت اور علم کی دلیل ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divorce Initiation", verses: "65:1", description: { en: "How to properly divorce - timing and rules", ur: "صحیح طریقے سے طلاق کیسے دیں - وقت اور قواعد" } },
      { stage: 2, theme: "End of Iddah", verses: "65:2-3", description: { en: "Options at end of waiting period - tawakkul", ur: "عدت کے اختتام پر اختیارات - توکل" } },
      { stage: 3, theme: "Specific Cases", verses: "65:4-5", description: { en: "Different waiting periods for different situations", ur: "مختلف حالات کے لیے مختلف عدتیں" } },
      { stage: 4, theme: "Rights and Duties", verses: "65:6-7", description: { en: "Housing, maintenance, nursing rights", ur: "رہائش، نان نفقہ، دودھ پلانے کے حقوق" } },
      { stage: 5, theme: "Historical Warning", verses: "65:8-9", description: { en: "Fate of disobedient nations", ur: "نافرمان قوموں کا انجام" } },
      { stage: 6, theme: "Divine Guidance", verses: "65:10-12", description: { en: "Reminder, Messenger, cosmic perspective", ur: "نصیحت، رسول، کائناتی نظریہ" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Divorce at clean period", how: "Time divorce so iddah can be counted properly", verse: "65:1" },
      { principle: "Hope for reconciliation", how: "Don't rush - Allah may bring about change", verse: "65:1" },
      { principle: "Trust Allah for provision", how: "Fear Him and He provides unexpectedly", verse: "65:2-3" },
      { principle: "House divorced wife during iddah", how: "Let her stay in matrimonial home", verse: "65:6" },
      { principle: "Support pregnant ex-wife", how: "Maintain her until delivery", verse: "65:6" },
      { principle: "Pay for nursing", how: "Compensate for breastfeeding", verse: "65:6" },
      { principle: "Give according to ability", how: "Rich give more, poor give what they can", verse: "65:7" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Triple Promise of Taqwa", ur: "تقویٰ کا تین گنا وعدہ" },
    insight: { en: "This surah contains one of the most comprehensive promises for those who have taqwa (God-consciousness). In verses 2-5, three times the phrase 'whoever fears Allah' (وَمَن يَتَّقِ اللَّهَ) appears, each followed by a different reward: (1) 'He will make for him a way out' (مَخْرَجًا) - v.2, (2) 'provide for him from where he does not expect' - v.3, (3) 'make his matter easy for him' (يُسْرًا) - v.4, plus removal of sins and increased reward - v.5. This triplet structure emphasizes that taqwa is the solution to divorce-related difficulties: a way out of marital problems, unexpected provision during hardship, and ease in complex arrangements. The context of divorce - one of the most difficult human experiences - makes these promises especially poignant. The surah teaches that even in the breakdown of marriage, maintaining God-consciousness leads to divine assistance.", ur: "اس سورت میں تقویٰ (خدا خوفی) رکھنے والوں کے لیے سب سے جامع وعدوں میں سے ایک ہے۔ آیت 2-5 میں تین بار 'جو Allah سے ڈرے' (وَمَن يَتَّقِ اللَّهَ) کا جملہ آتا ہے، ہر بار مختلف انعام: (1) 'اس کے لیے نکلنے کا راستہ بنائے گا' (مَخْرَجًا) - آیت 2، (2) 'جہاں سے گمان نہ ہو وہاں سے رزق دے گا' - آیت 3، (3) 'اس کے معاملے میں آسانی کرے گا' (يُسْرًا) - آیت 4، نیز گناہوں کی معافی اور اجر میں اضافہ - آیت 5۔ یہ تکرار ثابت کرتی ہے کہ تقویٰ طلاق سے متعلق مشکلات کا حل ہے: ازدواجی مسائل سے نجات، مشکل میں غیر متوقع رزق، اور پیچیدہ معاملات میں آسانی۔ طلاق کا سیاق - جو انسان کے مشکل ترین تجربات میں سے ایک ہے - ان وعدوں کو خاص طور پر اثرانگیز بناتا ہے۔" }
  },

  historicalContext: {
    note: { en: "This Madani surah provides detailed regulations about divorce that complement Surah Al-Baqarah's verses. It addresses a case where the Prophet ﷺ divorced Hafsa, then took her back. The verse 'perhaps Allah will bring about a matter after that' (65:1) refers to possible reconciliation during the waiting period. The emphasis on witnesses, fair treatment, and financial responsibility reflects Islam's balanced approach to a difficult situation, protecting both parties' rights while encouraging resolution.", ur: "یہ مدنی سورت طلاق کے تفصیلی قوانین فراہم کرتی ہے جو سورۃ البقرہ کی آیات کی تکمیل کرتے ہیں۔ یہ اس واقعے سے متعلق ہے جب نبی ﷺ نے حفصہ کو طلاق دی پھر رجوع فرمایا۔ 'شاید Allah اس کے بعد کوئی نئی بات پیدا کر دے' (65:1) عدت کے دوران صلح کے امکان کی طرف اشارہ ہے۔ گواہوں، منصفانہ سلوک اور مالی ذمہ داری پر زور اسلام کے متوازن رویے کی عکاسی کرتا ہے جو دونوں فریقوں کے حقوق کی حفاظت کرتے ہوئے حل تلاش کرنے کی حوصلہ افزائی کرتا ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "وُجْدِكُمْ", example: { en: "Your means/capacity", ur: "تمہاری وسعت/استطاعت" }, effect: "From وَجَد - finding/ability - means financial capacity" },
      { feature: "تَعَاسَرْتُمْ", example: { en: "You disagree/find difficulty", ur: "تم باہم اختلاف/مشکل پاؤ" }, effect: "Form VI - mutual difficulty/disagreement" },
      { feature: "عَتَتْ", example: { en: "Insolently disobeyed", ur: "سرکشی سے نافرمانی کی" }, effect: "عُتُوّ - excessive rebellion" },
      { feature: "يَتَنَزَّلُ", example: { en: "Descends gradually", ur: "بتدریج نازل ہوتا ہے" }, effect: "Form V - continuous/gradual descent" },
      { feature: "أَحَاطَ... عِلْمًا", example: { en: "Encompassed in knowledge", ur: "علم سے گھیرا ہوا ہے" }, effect: "Tamyiz construction - specification of manner" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "65:4", topic: "Menstrual cycles", note: "Iddah tied to menstruation - natural biological marker for pregnancy determination" },
      { verse: "65:12", topic: "Seven heavens and earths", note: "Multiple cosmic layers - paralleled in modern understanding of atmospheric and geological layers" },
      { verse: "65:7", topic: "Proportional obligation", note: "Islamic economics principle - obligation according to means, psychologically beneficial" }
    ]
  }
};

export default ONTOLOGY;
