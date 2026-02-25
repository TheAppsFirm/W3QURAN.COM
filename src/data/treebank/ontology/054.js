/**
 * Surah Al-Qamar (54) - Ontology of Quranic Concepts
 * The Moon - 55 Ayahs, Makki
 * Theme: Moon splitting miracle, destroyed nations, Quran made easy
 */

export const ONTOLOGY = {
  surahId: 54,
  surahName: "Al-Qamar",
  surahNameArabic: "القمر",
  revelationType: "Makki",
  totalAyahs: 55,

  categories: {
    moonSplitting: {
      name: "The Moon Splitting",
      nameUr: "چاند کا شق ہونا",
      nameArabic: "انشقاق القمر",
      color: "#8B5CF6",
      concepts: [
        { term: "اقْتَرَبَتِ السَّاعَةُ", meaning: { en: "The Hour has drawn near", ur: "قیامت قریب آ گئی" }, explanation: { en: "Opening declaration - Day of Judgment approaches", ur: "افتتاحی اعلان - قیامت کا دن قریب آ رہا ہے" }, verseRef: "54:1" },
        { term: "وَانشَقَّ الْقَمَرُ", meaning: { en: "And the moon has split", ur: "اور چاند پھٹ گیا" }, explanation: { en: "Miraculous sign shown to Quraysh at Prophet's time", ur: "نبی صلی اللہ علیہ وسلم کے دور میں قریش کو دکھایا گیا معجزاتی نشان" }, verseRef: "54:1" },
        { term: "سِحْرٌ مُّسْتَمِرٌّ", meaning: { en: "Passing magic", ur: "مسلسل جادو" }, explanation: { en: "Disbelievers dismissed the miracle as sorcery", ur: "کافروں نے معجزے کو جادو قرار دے کر مسترد کر دیا" }, verseRef: "54:2" },
        { term: "وَكَذَّبُوا وَاتَّبَعُوا أَهْوَاءَهُمْ", meaning: { en: "They denied and followed their desires", ur: "انہوں نے جھٹلایا اور اپنی خواہشات کی پیروی کی" }, explanation: { en: "Pattern of rejection despite clear signs", ur: "واضح نشانیوں کے باوجود تکذیب کا طریقہ" }, verseRef: "54:3" }
      ]
    },

    refrain1: {
      name: "Warning Refrain",
      nameUr: "بار بار تنبیہ",
      nameArabic: "التحذير المتكرر",
      color: "#EF4444",
      concepts: [
        {
          term: "فَكَيْفَ كَانَ عَذَابِي وَنُذُرِ",
          meaning: { en: "So how was My punishment and warning?", ur: "تو میرا عذاب اور میری تنبیہ کیسی رہی؟" },
          explanation: { en: "Repeated 4 times (v.16, 18, 21, 30) - rhetorical question after each nation's destruction", ur: "4 بار دہرایا گیا (آیت 16، 18، 21، 30) - ہر قوم کی تباہی کے بعد استفہامی سوال" },
          verseRefs: ["54:16", "54:18", "54:21", "54:30"],
          rhetoricalPurpose: { en: "Invites reflection on consequences of denial", ur: "تکذیب کے نتائج پر غور کی دعوت" }
        }
      ]
    },

    refrain2: {
      name: "Quran Made Easy",
      nameUr: "قرآن کی آسانی",
      nameArabic: "تيسير القرآن",
      color: "#10B981",
      concepts: [
        {
          term: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
          meaning: { en: "And We have made the Quran easy for remembrance, so is there anyone who will remember?", ur: "اور ہم نے قرآن کو نصیحت کے لیے آسان کر دیا، تو کیا کوئی ہے نصیحت حاصل کرنے والا؟" },
          explanation: { en: "Repeated 4 times (v.17, 22, 32, 40) - Divine facilitation of guidance", ur: "4 بار دہرایا گیا (آیت 17، 22، 32، 40) - ہدایت کی الٰہی آسانی" },
          verseRefs: ["54:17", "54:22", "54:32", "54:40"],
          rhetoricalPurpose: { en: "Encouragement and challenge - Quran is accessible to all who seek", ur: "ترغیب اور چیلنج - قرآن ہر طالب کے لیے قابلِ رسائی ہے" }
        }
      ]
    },

    peopleOfNuh: {
      name: "People of Nuh (Noah)",
      nameUr: "قومِ نوح",
      nameArabic: "قوم نوح",
      color: "#3B82F6",
      concepts: [
        { term: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ", meaning: { en: "Before them the people of Noah denied", ur: "ان سے پہلے نوح کی قوم نے جھٹلایا" }, explanation: { en: "First example of destroyed nations", ur: "ہلاک شدہ قوموں کی پہلی مثال" }, verseRef: "54:9" },
        { term: "فَكَذَّبُوا عَبْدَنَا", meaning: { en: "They denied Our servant", ur: "انہوں نے ہمارے بندے کو جھٹلایا" }, explanation: { en: "Rejected Prophet Nuh despite centuries of preaching", ur: "صدیوں کی تبلیغ کے باوجود نوح علیہ السلام کو رد کیا" }, verseRef: "54:9" },
        { term: "وَقَالُوا مَجْنُونٌ وَازْدُجِرَ", meaning: { en: "And said: A madman, and he was repelled", ur: "اور کہا: پاگل ہے، اور اسے دھمکایا گیا" }, explanation: { en: "Insults and rejection", ur: "توہین اور ردّ" }, verseRef: "54:9" },
        { term: "فَفَتَحْنَا أَبْوَابَ السَّمَاءِ بِمَاءٍ مُّنْهَمِرٍ", meaning: { en: "So We opened the gates of heaven with pouring water", ur: "تو ہم نے آسمان کے دروازے موسلا دھار پانی سے کھول دیے" }, explanation: { en: "The Great Flood", ur: "عظیم طوفان" }, verseRef: "54:11" },
        { term: "وَفَجَّرْنَا الْأَرْضَ عُيُونًا", meaning: { en: "And caused the earth to burst with springs", ur: "اور زمین سے چشمے پھوٹ نکالے" }, explanation: { en: "Water from above and below", ur: "اوپر اور نیچے سے پانی" }, verseRef: "54:12" },
        { term: "وَحَمَلْنَاهُ عَلَىٰ ذَاتِ أَلْوَاحٍ وَدُسُرٍ", meaning: { en: "And We carried him on [a ship] of planks and nails", ur: "اور ہم نے اسے تختوں اور کیلوں والی (کشتی) پر سوار کیا" }, explanation: { en: "The Ark - simple but effective", ur: "کشتیِ نوح - سادہ مگر موثر" }, verseRef: "54:13" },
        { term: "تَجْرِي بِأَعْيُنِنَا", meaning: { en: "Sailing under Our observation", ur: "ہماری نگرانی میں چلتی رہی" }, explanation: { en: "Divine protection of the believers", ur: "مومنوں کی الٰہی حفاظت" }, verseRef: "54:14" }
      ]
    },

    peopleOfAad: {
      name: "People of 'Aad",
      nameUr: "قومِ عاد",
      nameArabic: "قوم عاد",
      color: "#F59E0B",
      concepts: [
        { term: "كَذَّبَتْ عَادٌ", meaning: { en: "'Aad denied", ur: "عاد نے جھٹلایا" }, explanation: { en: "Second destroyed nation - powerful civilization", ur: "دوسری ہلاک شدہ قوم - طاقتور تہذیب" }, verseRef: "54:18" },
        { term: "رِيحًا صَرْصَرًا", meaning: { en: "A screaming wind", ur: "نہایت تیز سرد ہوا" }, explanation: { en: "Instrument of their destruction", ur: "ان کی تباہی کا ذریعہ" }, verseRef: "54:19" },
        { term: "فِي يَوْمِ نَحْسٍ مُّسْتَمِرٍّ", meaning: { en: "On a day of misfortune, continuous", ur: "ایک مسلسل منحوس دن میں" }, explanation: { en: "Unrelenting calamity", ur: "نہ رکنے والی آفت" }, verseRef: "54:19" },
        { term: "تَنزِعُ النَّاسَ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ مُّنقَعِرٍ", meaning: { en: "Extracting people as if they were trunks of uprooted palm trees", ur: "لوگوں کو اکھاڑتی تھی جیسے وہ اکھڑے ہوئے کھجور کے تنے ہوں" }, explanation: { en: "Vivid imagery of destruction", ur: "تباہی کی واضح تصویر کشی" }, verseRef: "54:20" }
      ]
    },

    peopleOfThamud: {
      name: "People of Thamud",
      nameUr: "قومِ ثمود",
      nameArabic: "قوم ثمود",
      color: "#EC4899",
      concepts: [
        { term: "كَذَّبَتْ ثَمُودُ بِالنُّذُرِ", meaning: { en: "Thamud denied the warnings", ur: "ثمود نے تنبیہات کو جھٹلایا" }, explanation: { en: "Third destroyed nation", ur: "تیسری ہلاک شدہ قوم" }, verseRef: "54:23" },
        { term: "أَبَشَرًا مِّنَّا وَاحِدًا نَّتَّبِعُهُ", meaning: { en: "Is it one human from among us that we should follow?", ur: "کیا ہم اپنے میں سے ایک بشر کی پیروی کریں؟" }, explanation: { en: "Arrogance - rejecting human messenger", ur: "تکبر - انسانی رسول کو رد کرنا" }, verseRef: "54:24" },
        { term: "إِنَّا مُرْسِلُو النَّاقَةِ فِتْنَةً لَّهُمْ", meaning: { en: "Indeed, We are sending the she-camel as trial for them", ur: "بے شک ہم اونٹنی بھیج رہے ہیں ان کی آزمائش کے لیے" }, explanation: { en: "The miraculous she-camel test", ur: "معجزاتی اونٹنی کی آزمائش" }, verseRef: "54:27" },
        { term: "فَنَادَوْا صَاحِبَهُمْ فَتَعَاطَىٰ فَعَقَرَ", meaning: { en: "But they called their companion, and he dared and hamstrung [her]", ur: "تو انہوں نے اپنے ساتھی کو بلایا اور اس نے جرات کی اور (اونٹنی کو) مار ڈالا" }, explanation: { en: "Their fatal crime", ur: "ان کا مہلک جرم" }, verseRef: "54:29" },
        { term: "صَيْحَةً وَاحِدَةً", meaning: { en: "A single blast", ur: "ایک ہی چیخ" }, explanation: { en: "Swift and complete destruction", ur: "فوری اور مکمل تباہی" }, verseRef: "54:31" },
        { term: "فَكَانُوا كَهَشِيمِ الْمُحْتَظِرِ", meaning: { en: "And they became like dry twig fragments of an [animal] pen", ur: "تو وہ باڑے کی خشک ٹوٹی ٹہنیوں کی طرح ہو گئے" }, explanation: { en: "Reduced to nothing", ur: "بالکل فنا ہو گئے" }, verseRef: "54:31" }
      ]
    },

    peopleOfLut: {
      name: "People of Lut (Lot)",
      nameUr: "قومِ لوط",
      nameArabic: "قوم لوط",
      color: "#6366F1",
      concepts: [
        { term: "كَذَّبَتْ قَوْمُ لُوطٍ بِالنُّذُرِ", meaning: { en: "The people of Lot denied the warnings", ur: "لوط کی قوم نے تنبیہات کو جھٹلایا" }, explanation: { en: "Fourth destroyed nation", ur: "چوتھی ہلاک شدہ قوم" }, verseRef: "54:33" },
        { term: "إِنَّا أَرْسَلْنَا عَلَيْهِمْ حَاصِبًا", meaning: { en: "Indeed, We sent upon them a storm of stones", ur: "بے شک ہم نے ان پر پتھروں کی بارش بھیجی" }, explanation: { en: "Pelted with stones from sky", ur: "آسمان سے پتھروں کی بارش" }, verseRef: "54:34" },
        { term: "إِلَّا آلَ لُوطٍ ۖ نَّجَّيْنَاهُم بِسَحَرٍ", meaning: { en: "Except the family of Lot - We saved them before dawn", ur: "سوائے لوط کے گھرانے کے - ہم نے انہیں صبح سے پہلے بچا لیا" }, explanation: { en: "Believers rescued", ur: "مومنوں کو بچا لیا گیا" }, verseRef: "54:34" },
        { term: "وَلَقَدْ رَاوَدُوهُ عَن ضَيْفِهِ", meaning: { en: "And they had demanded from him his guests", ur: "اور انہوں نے ان سے ان کے مہمانوں کا مطالبہ کیا" }, explanation: { en: "Their shameless crime", ur: "ان کا بے شرمانہ جرم" }, verseRef: "54:37" },
        { term: "فَطَمَسْنَا أَعْيُنَهُمْ", meaning: { en: "So We blinded their eyes", ur: "تو ہم نے ان کی آنکھیں بند کر دیں" }, explanation: { en: "Immediate punishment", ur: "فوری سزا" }, verseRef: "54:37" }
      ]
    },

    peopleOfPharaoh: {
      name: "People of Pharaoh",
      nameUr: "آلِ فرعون",
      nameArabic: "آل فرعون",
      color: "#14B8A6",
      concepts: [
        { term: "وَلَقَدْ جَاءَ آلَ فِرْعَوْنَ النُّذُرُ", meaning: { en: "And there certainly came to the people of Pharaoh warning", ur: "اور آلِ فرعون کے پاس بھی تنبیہات آئیں" }, explanation: { en: "Fifth example - most powerful empire", ur: "پانچویں مثال - سب سے طاقتور سلطنت" }, verseRef: "54:41" },
        { term: "كَذَّبُوا بِآيَاتِنَا كُلِّهَا", meaning: { en: "They denied Our signs, all of them", ur: "انہوں نے ہماری تمام نشانیاں جھٹلا دیں" }, explanation: { en: "Complete rejection despite multiple miracles", ur: "متعدد معجزات کے باوجود مکمل تکذیب" }, verseRef: "54:42" },
        { term: "فَأَخَذْنَاهُمْ أَخْذَ عَزِيزٍ مُّقْتَدِرٍ", meaning: { en: "So We seized them with a seizure of One Exalted in Might and Perfect in Ability", ur: "تو ہم نے انہیں غالب اور قادرِ مطلق کی پکڑ سے پکڑا" }, explanation: { en: "Divine power demonstrated", ur: "الٰہی طاقت کا مظاہرہ" }, verseRef: "54:42" }
      ]
    },

    warningToQuraysh: {
      name: "Warning to Quraysh",
      nameUr: "قریش کو تنبیہ",
      nameArabic: "تحذير قريش",
      color: "#F43F5E",
      concepts: [
        { term: "أَكُفَّارُكُمْ خَيْرٌ مِّنْ أُولَٰئِكُمْ", meaning: { en: "Are your disbelievers better than those?", ur: "کیا تمہارے کافر ان سے بہتر ہیں؟" }, explanation: { en: "Rhetorical - Quraysh are no better than destroyed nations", ur: "استفہامی - قریش ہلاک شدہ قوموں سے بہتر نہیں ہیں" }, verseRef: "54:43" },
        { term: "أَمْ لَكُم بَرَاءَةٌ فِي الزُّبُرِ", meaning: { en: "Or do you have immunity in previous scriptures?", ur: "کیا تمہارے لیے پہلی کتابوں میں کوئی بری الذمہ ہے؟" }, explanation: { en: "No special exemption", ur: "کوئی خاص استثنا نہیں" }, verseRef: "54:43" },
        { term: "أَمْ يَقُولُونَ نَحْنُ جَمِيعٌ مُّنتَصِرٌ", meaning: { en: "Or do they say: We are an assembly supporting [each other]?", ur: "کیا وہ کہتے ہیں: ہم سب ایک مضبوط جمعیت ہیں؟" }, explanation: { en: "False confidence in numbers", ur: "تعداد میں جھوٹا اعتماد" }, verseRef: "54:44" },
        { term: "سَيُهْزَمُ الْجَمْعُ وَيُوَلُّونَ الدُّبُرَ", meaning: { en: "Their assembly will be defeated, and they will turn their backs", ur: "عنقریب یہ جمعیت شکست کھائے گی اور پیٹھ دکھائیں گے" }, explanation: { en: "Prophecy fulfilled at Badr", ur: "پیشگوئی جو بدر میں پوری ہوئی" }, verseRef: "54:45" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameUr: "قیامت کا دن",
      nameArabic: "يوم القيامة",
      color: "#8B5CF6",
      concepts: [
        { term: "بَلِ السَّاعَةُ مَوْعِدُهُمْ", meaning: { en: "But the Hour is their appointment", ur: "بلکہ قیامت ان کا وعدہ ہے" }, explanation: { en: "Ultimate accountability awaits", ur: "حتمی جوابدہی منتظر ہے" }, verseRef: "54:46" },
        { term: "وَالسَّاعَةُ أَدْهَىٰ وَأَمَرُّ", meaning: { en: "And the Hour is more disastrous and more bitter", ur: "اور قیامت زیادہ سخت اور زیادہ تلخ ہے" }, explanation: { en: "Worse than worldly punishment", ur: "دنیاوی عذاب سے بدتر" }, verseRef: "54:46" },
        { term: "إِنَّ الْمُجْرِمِينَ فِي ضَلَالٍ وَسُعُرٍ", meaning: { en: "Indeed, the criminals are in error and madness", ur: "بے شک مجرم گمراہی اور آگ میں ہیں" }, explanation: { en: "State of disbelievers", ur: "کافروں کی حالت" }, verseRef: "54:47" },
        { term: "يُسْحَبُونَ فِي النَّارِ عَلَىٰ وُجُوهِهِمْ", meaning: { en: "The Day they are dragged into the Fire on their faces", ur: "جس دن وہ اپنے چہروں کے بل آگ میں گھسیٹے جائیں گے" }, explanation: { en: "Humiliating punishment", ur: "ذلت آمیز عذاب" }, verseRef: "54:48" }
      ]
    },

    divineDecree: {
      name: "Divine Decree",
      nameUr: "الٰہی تقدیر",
      nameArabic: "القضاء الإلهي",
      color: "#22C55E",
      concepts: [
        { term: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ", meaning: { en: "Indeed, all things We created with predestination", ur: "بے شک ہم نے ہر چیز تقدیر سے پیدا کی ہے" }, explanation: { en: "Everything by divine measure", ur: "ہر چیز الٰہی تقدیر سے ہے" }, verseRef: "54:49" },
        { term: "وَمَا أَمْرُنَا إِلَّا وَاحِدَةٌ كَلَمْحٍ بِالْبَصَرِ", meaning: { en: "And Our command is but one, like a glance of the eye", ur: "اور ہمارا حکم بس ایک ہے، آنکھ جھپکنے کی طرح" }, explanation: { en: "Instantaneous divine will", ur: "فوری الٰہی ارادہ" }, verseRef: "54:50" }
      ]
    },

    rewardForRighteous: {
      name: "Reward for the Righteous",
      nameUr: "متقیوں کا اجر",
      nameArabic: "جزاء المتقين",
      color: "#10B981",
      concepts: [
        { term: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ", meaning: { en: "Indeed, the righteous will be among gardens and rivers", ur: "بے شک متقی باغات اور نہروں میں ہوں گے" }, explanation: { en: "Paradise promised", ur: "جنت کا وعدہ" }, verseRef: "54:54" },
        { term: "فِي مَقْعَدِ صِدْقٍ", meaning: { en: "In a seat of honor", ur: "سچائی کی مجلس میں" }, explanation: { en: "Place of truth and dignity", ur: "سچائی اور عزت کی جگہ" }, verseRef: "54:55" },
        { term: "عِندَ مَلِيكٍ مُّقْتَدِرٍ", meaning: { en: "Near a Sovereign, Perfect in Ability", ur: "قادرِ مطلق بادشاہ کے پاس" }, explanation: { en: "Closeness to Allah - ultimate reward", ur: "اللہ کا قرب - سب سے بڑا اجر" }, verseRef: "54:55" }
      ]
    }
  },

  relationships: [
    { from: "انشقاق القمر", to: "تكذيب", type: "response", description: { en: "Miracle shown, but denied", ur: "معجزہ دکھایا گیا، مگر جھٹلایا گیا" } },
    { from: "قوم نوح", to: "الطوفان", type: "punishment", description: { en: "Denial led to flood", ur: "تکذیب طوفان کا سبب بنی" } },
    { from: "عاد", to: "الريح الصرصر", type: "punishment", description: { en: "Denial led to devastating wind", ur: "تکذیب تباہ کن ہوا کا سبب بنی" } },
    { from: "ثمود", to: "الصيحة", type: "punishment", description: { en: "Killing she-camel led to blast", ur: "اونٹنی کو مارنے سے چیخ آئی" } },
    { from: "قوم لوط", to: "حاصب", type: "punishment", description: { en: "Sin led to stone rain", ur: "گناہ پتھروں کی بارش کا سبب بنا" } },
    { from: "آل فرعون", to: "الأخذ", type: "punishment", description: { en: "Denial led to seizure", ur: "تکذیب پکڑ کا سبب بنی" } },
    { from: "تيسير القرآن", to: "التذكر", type: "purpose", description: { en: "Made easy for remembrance", ur: "یاد کرنے کے لیے آسان بنایا" } },
    { from: "المتقين", to: "جنات ونهر", type: "reward", description: { en: "Righteousness leads to Paradise", ur: "تقویٰ جنت کی طرف لے جاتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Opening Sign", verses: "54:1-8", description: { en: "Moon splitting, denial, approaching Hour", ur: "چاند کا پھٹنا، تکذیب، قیامت کا قرب" } },
      { stage: 2, theme: "Story of Nuh", verses: "54:9-17", description: { en: "First nation destroyed by flood + first refrain", ur: "طوفان سے ہلاک ہونے والی پہلی قوم + پہلا ترجیع" } },
      { stage: 3, theme: "Story of 'Aad", verses: "54:18-22", description: { en: "Destroyed by wind + second refrain", ur: "ہوا سے تباہ + دوسرا ترجیع" } },
      { stage: 4, theme: "Story of Thamud", verses: "54:23-32", description: { en: "She-camel, blast + third refrain", ur: "اونٹنی، چیخ + تیسرا ترجیع" } },
      { stage: 5, theme: "Story of Lut", verses: "54:33-40", description: { en: "Stone rain + fourth refrain", ur: "پتھروں کی بارش + چوتھا ترجیع" } },
      { stage: 6, theme: "Story of Pharaoh", verses: "54:41-42", description: { en: "All signs rejected, seized", ur: "تمام نشانیاں رد کیں، پکڑے گئے" } },
      { stage: 7, theme: "Warning to Quraysh", verses: "54:43-46", description: { en: "No immunity, Hour awaits", ur: "کوئی استثنا نہیں، قیامت منتظر ہے" } },
      { stage: 8, theme: "Day of Judgment", verses: "54:47-53", description: { en: "Criminals punished, divine decree", ur: "مجرموں کو سزا، الٰہی تقدیر" } },
      { stage: 9, theme: "Paradise", verses: "54:54-55", description: { en: "Righteous rewarded near Allah", ur: "متقین کو اللہ کے قرب میں اجر" } }
    ]
  },

  refrainAnalysis: {
    warningRefrain: {
      arabic: "فَكَيْفَ كَانَ عَذَابِي وَنُذُرِ",
      transliteration: "fa-kayfa kāna ʿadhābī wa-nudhur",
      meaning: { en: "So how was My punishment and warning?", ur: "تو میرا عذاب اور میری تنبیہ کیسی رہی؟" },
      occurrences: [16, 18, 21, 30],
      pattern: { en: "Follows description of each nation's destruction", ur: "ہر قوم کی تباہی کے بیان کے بعد آتا ہے" },
      rhetoricalFunction: { en: "Rhetorical question demanding reflection", ur: "غور و فکر کا مطالبہ کرنے والا استفہامی سوال" }
    },
    easeRefrain: {
      arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
      transliteration: "wa-laqad yassarnā al-qurʾāna lil-dhikri fa-hal min muddakir",
      meaning: { en: "And We have made the Quran easy for remembrance, so is there anyone who will remember?", ur: "اور ہم نے قرآن کو نصیحت کے لیے آسان کر دیا، تو کیا کوئی ہے نصیحت حاصل کرنے والا؟" },
      occurrences: [17, 22, 32, 40],
      pattern: { en: "Follows each warning, offering hope", ur: "ہر تنبیہ کے بعد آتا ہے، امید دیتا ہے" },
      rhetoricalFunction: { en: "Invitation to guidance after warning", ur: "تنبیہ کے بعد ہدایت کی دعوت" }
    }
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Heed warnings", ur: "تنبیہات پر دھیان دو" }, how: { en: "Don't dismiss clear signs like previous nations", ur: "واضح نشانیوں کو پچھلی قوموں کی طرح مسترد نہ کرو" }, verse: "54:2-3" },
      { principle: { en: "Quran is accessible", ur: "قرآن قابلِ رسائی ہے" }, how: { en: "Study and memorize - Allah made it easy", ur: "پڑھو اور حفظ کرو - اللہ نے اسے آسان بنایا ہے" }, verse: "54:17" },
      { principle: { en: "Numbers don't protect", ur: "تعداد تحفظ نہیں دیتی" }, how: { en: "Group consensus doesn't guarantee truth", ur: "اجتماعی اتفاق حق کی ضمانت نہیں" }, verse: "54:44-45" },
      { principle: { en: "Everything is decreed", ur: "سب کچھ مقدر ہے" }, how: { en: "Trust Allah's plan, accept qadr", ur: "اللہ کے منصوبے پر بھروسہ رکھو، تقدیر قبول کرو" }, verse: "54:49" },
      { principle: { en: "Seek Allah's nearness", ur: "اللہ کا قرب حاصل کرو" }, how: { en: "Goal is 'near the Sovereign' - work for it", ur: "مقصد 'بادشاہ کے قریب' ہے - اس کے لیے محنت کرو" }, verse: "54:55" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "انشَقَّ", pattern: "Form VII (انفعل)", effect: { en: "Reflexive - moon split by itself (by Allah's command)", ur: "انعکاسی - چاند خود پھٹ گیا (اللہ کے حکم سے)" } },
      { feature: "مُّسْتَمِرٌّ", pattern: "Form X participle", effect: { en: "Continuous, ongoing", ur: "مسلسل، جاری" } },
      { feature: "صَرْصَرًا", pattern: "Intensive form", effect: { en: "Intensely cold/screaming wind", ur: "انتہائی سرد/چیختی ہوا" } },
      { feature: "مُّدَّكِرٍ", pattern: "Form VIII participle", effect: { en: "One who takes heed/remembers", ur: "نصیحت حاصل کرنے والا/یاد رکھنے والا" } },
      { feature: "مُّقْتَدِرٍ", pattern: "Form VIII participle", effect: { en: "Fully capable, omnipotent", ur: "مکمل طور پر قادر، قادرِ مطلق" } }
    ]
  },

  historicalContext: {
    note: { en: "This Makki surah was revealed after the miraculous splitting of the moon, which the Prophet showed to the Quraysh as a sign. Despite witnessing this cosmic miracle, they dismissed it as magic. The surah then recounts five previous nations who similarly rejected clear signs and were destroyed: Nuh's people (flood), 'Aad (wind), Thamud (blast), Lut's people (stones), and Pharaoh's people (drowning). The prophecy in verse 45 about the 'assembly being defeated' was fulfilled at the Battle of Badr years later.", ur: "یہ مکی سورة چاند کے معجزاتی پھٹنے کے بعد نازل ہوئی، جو نبی صلی اللہ علیہ وسلم نے قریش کو بطور نشانی دکھایا۔ اس کائناتی معجزے کا مشاہدہ کرنے کے باوجود انہوں نے اسے جادو قرار دیا۔ پھر سورة پانچ قوموں کا ذکر کرتی ہے جنہوں نے اسی طرح واضح نشانیاں رد کیں اور ہلاک ہوئیں: نوح کی قوم (طوفان)، عاد (ہوا)، ثمود (چیخ)، لوط کی قوم (پتھر)، اور فرعون کی قوم (غرق)۔ آیت 45 کی پیشگوئی 'جمعیت شکست کھائے گی' غزوہ بدر میں سالوں بعد پوری ہوئی۔" }
  },

  uniqueInsight: {
    title: { en: "The Dual Refrain Structure", ur: "دوہرے ترجیع کا ڈھانچہ" },
    insight: { en: "Al-Qamar uniquely employs two alternating refrains that create a powerful rhythm: 'How was My punishment?' follows destruction, while 'We made Quran easy' offers hope. This pattern (warning -> ease, warning -> ease) shows Allah's justice balanced with mercy. The surah moves from cosmic sign (moon) to historical signs (nations) to future sign (Day of Judgment), all unified by the question: will you take heed? The closing verses (54-55) reveal the ultimate goal - not just avoiding punishment, but achieving nearness to the Sovereign King.", ur: "القمر منفرد طور پر دو باری باری ترجیعات استعمال کرتی ہے جو ایک طاقتور تال بناتی ہیں: 'میرا عذاب کیسا رہا؟' تباہی کے بعد آتا ہے، جبکہ 'ہم نے قرآن آسان بنایا' امید دیتا ہے۔ یہ نمونہ (تنبیہ ← آسانی) اللہ کے عدل اور رحمت کا توازن دکھاتا ہے۔ سورة کائناتی نشان (چاند) سے تاریخی نشانوں (قوموں) سے مستقبل کی نشانی (قیامت) تک جاتی ہے، سب ایک سوال سے متحد: کیا تم نصیحت حاصل کرو گے؟ آخری آیات (54-55) حتمی مقصد بتاتی ہیں - صرف عذاب سے بچنا نہیں بلکہ بادشاہِ حقیقی کا قرب حاصل کرنا۔" }
  }
};

export default ONTOLOGY;
