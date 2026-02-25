/**
 * Surah Al-Ghashiyah (88) - Ontology of Quranic Concepts
 * The Overwhelming Event
 * Theme: Day of Judgment contrasts, signs in creation, Prophet as reminder
 */

export const ONTOLOGY = {
  surahId: 88,
  surahName: "Al-Ghashiyah",
  surahNameArabic: "الغاشية",
  revelationType: "Makki",
  totalAyahs: 26,

  categories: {
    overwhelmingEvent: {
      name: "The Overwhelming Event",
      nameArabic: "الغاشية",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "الْغَاشِيَةِ", meaning: { en: "The Overwhelming", ur: "چھا جانے والی (قیامت)" }, explanation: { en: "Day that 'covers' everything in its terror. From ghashiya (to cover/overwhelm). Nothing escapes it.", ur: "وہ دن جو اپنی دہشت میں سب کو ڈھانپ لے گا۔ غشیہ (ڈھانپنا/چھا جانا) سے ہے۔ کوئی اس سے بچ نہیں سکتا۔" }, verseRef: "88:1" }
      ]
    },

    facesOfDoom: {
      name: "Faces of the Doomed",
      nameArabic: "وجوه العذاب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "وُجُوهٌ خَاشِعَةٌ", meaning: { en: "Humbled faces", ur: "ذلیل چہرے" }, explanation: { en: "Khushu' forced on them - humility they refused in life", ur: "خشوع ان پر جبراً مسلط - عاجزی جو زندگی میں انہوں نے قبول نہ کی" }, verseRef: "88:2" },
        { term: "عَامِلَةٌ نَّاصِبَةٌ", meaning: { en: "Working, exhausted", ur: "محنت کرتے تھکے ہارے" }, explanation: { en: "Worked hard in dunya on wrong path, now exhausted in punishment", ur: "دنیا میں غلط راستے پر محنت کی، اب عذاب میں تھکے ہارے ہیں" }, verseRef: "88:3" },
        { term: "تَصْلَىٰ نَارًا حَامِيَةً", meaning: { en: "Burn in hot Fire", ur: "تپتی آگ میں جلیں گے" }, explanation: { en: "Haamiyah = reached extreme heat. Maximum burning", ur: "حامیہ = انتہائی گرمی کو پہنچی۔ شدید ترین جلنا" }, verseRef: "88:4" },
        { term: "عَيْنٍ آنِيَةٍ", meaning: { en: "Boiling spring", ur: "کھولتا ہوا چشمہ" }, explanation: { en: "Drink from spring at maximum boiling - contrast to Paradise springs", ur: "انتہائی کھولتے چشمے سے پینا - جنت کے چشموں کے برعکس" }, verseRef: "88:5" },
        { term: "ضَرِيعٍ", meaning: { en: "Thorny plant food", ur: "کانٹے دار خشک گھاس" }, explanation: { en: "Bitter, poisonous plant - no nourishment, no satisfaction", ur: "کڑوا، زہریلا پودا - نہ غذائیت نہ تسکین" }, verseRef: "88:6-7" }
      ]
    },

    facesOfBliss: {
      name: "Faces of the Blessed",
      nameArabic: "وجوه النعيم",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "وُجُوهٌ نَّاعِمَةٌ", meaning: { en: "Radiant faces", ur: "تروتازہ چہرے" }, explanation: { en: "Na'imah from na'eem (bliss) - faces showing inner joy", ur: "ناعمہ نعیم (آرام) سے ہے - چہروں پر اندرونی خوشی کا اظہار" }, verseRef: "88:8" },
        { term: "لِّسَعْيِهَا رَاضِيَةٌ", meaning: { en: "Pleased with their effort", ur: "اپنی محنت سے خوش" }, explanation: { en: "Sa'y (striving) paid off - satisfaction with life's work", ur: "سعی (کوشش) رنگ لائی - زندگی کے کام سے اطمینان" }, verseRef: "88:9" },
        { term: "جَنَّةٍ عَالِيَةٍ", meaning: { en: "Elevated Garden", ur: "بلند مقام جنت" }, explanation: { en: "High in rank and physical location", ur: "مرتبے اور مقام دونوں میں بلند" }, verseRef: "88:10" },
        { term: "لَا تَسْمَعُ لَاغِيَةً", meaning: { en: "No idle talk", ur: "کوئی بیہودہ بات نہیں" }, explanation: { en: "Paradise free from laghw - all speech meaningful", ur: "جنت لغو سے پاک - ہر بات بامعنی" }, verseRef: "88:11" },
        { term: "عَيْنٌ جَارِيَةٌ", meaning: { en: "Flowing spring", ur: "بہتا ہوا چشمہ" }, explanation: { en: "Contrast with boiling spring of Hell - cool, refreshing", ur: "جہنم کے کھولتے چشمے کے برعکس - ٹھنڈا، تروتازہ" }, verseRef: "88:12" },
        { term: "سُرُرٌ مَّرْفُوعَةٌ", meaning: { en: "Elevated couches", ur: "اونچے تخت" }, explanation: { en: "Thrones raised high - honor and comfort", ur: "بلند تخت - عزت اور آرام" }, verseRef: "88:13" },
        { term: "أَكْوَابٌ مَّوْضُوعَةٌ", meaning: { en: "Cups ready", ur: "رکھے ہوئے جام" }, explanation: { en: "Service prepared - no waiting, no effort needed", ur: "خدمت تیار - نہ انتظار نہ محنت کی ضرورت" }, verseRef: "88:14" },
        { term: "نَمَارِقُ مَصْفُوفَةٌ", meaning: { en: "Cushions lined up", ur: "قطار میں لگے ہوئے گاؤ تکیے" }, explanation: { en: "Luxury seating arranged beautifully", ur: "خوبصورتی سے سجی ہوئی پُرتعیش نشستیں" }, verseRef: "88:15" },
        { term: "زَرَابِيُّ مَبْثُوثَةٌ", meaning: { en: "Carpets spread", ur: "بچھے ہوئے قالین" }, explanation: { en: "Rich carpets covering the ground - complete comfort", ur: "زمین پر بچھے ہوئے نفیس قالین - مکمل آرام" }, verseRef: "88:16" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "الْإِبِلِ كَيْفَ خُلِقَتْ", meaning: { en: "Camels - how created", ur: "اونٹ - کیسے بنائے گئے" }, explanation: { en: "Desert marvel: water storage, wide feet, eyelashes, kneeling ability. Arabs knew them well", ur: "صحرائی عجوبہ: پانی ذخیرہ کرنا، چوڑے پاؤں، پلکیں، بیٹھنے کی صلاحیت۔ عرب انہیں خوب جانتے تھے" }, verseRef: "88:17" },
        { term: "السَّمَاءِ كَيْفَ رُفِعَتْ", meaning: { en: "Sky - how raised", ur: "آسمان - کیسے اونچا کیا گیا" }, explanation: { en: "Suspended without pillars, vast expanse above", ur: "بغیر ستونوں کے معلق، اوپر وسیع پھیلاؤ" }, verseRef: "88:18" },
        { term: "الْجِبَالِ كَيْفَ نُصِبَتْ", meaning: { en: "Mountains - how fixed", ur: "پہاڑ - کیسے کھڑے کیے گئے" }, explanation: { en: "Stabilizing pegs in the earth, majestic and immovable", ur: "زمین میں کیلوں کی طرح مضبوط، شاندار اور اٹل" }, verseRef: "88:19" },
        { term: "الْأَرْضِ كَيْفَ سُطِحَتْ", meaning: { en: "Earth - how spread", ur: "زمین - کیسے بچھائی گئی" }, explanation: { en: "Leveled for habitation, made suitable for life", ur: "رہائش کے لیے ہموار کی گئی، زندگی کے لیے موزوں بنائی گئی" }, verseRef: "88:20" }
      ]
    },

    prophetsRole: {
      name: "The Prophet's Role",
      nameArabic: "دور النبي",
      color: '#8B5CF6',
      icon: 'MessageCircle',
      concepts: [
        { term: "فَذَكِّرْ", meaning: { en: "So remind", ur: "تو نصیحت کرو" }, explanation: { en: "Command to remind - primary prophetic function", ur: "نصیحت کا حکم - نبی کا بنیادی فریضہ" }, verseRef: "88:21" },
        { term: "إِنَّمَا أَنتَ مُذَكِّرٌ", meaning: { en: "You are only a reminder", ur: "تم صرف نصیحت کرنے والے ہو" }, explanation: { en: "Not a controller or tyrant - just one who reminds", ur: "مسلط یا جابر نہیں - صرف نصیحت کرنے والے" }, verseRef: "88:21" },
        { term: "لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ", meaning: { en: "Not a controller over them", ur: "تم ان پر داروغہ نہیں ہو" }, explanation: { en: "Musaytir = tyrant/dictator. Prophet doesn't force belief", ur: "مصیطر = جابر/آمر۔ نبی ایمان پر مجبور نہیں کرتے" }, verseRef: "88:22" }
      ]
    },

    divineJustice: {
      name: "Divine Justice",
      nameArabic: "العدل الإلهي",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "الْعَذَابَ الْأَكْبَرَ", meaning: { en: "The greatest punishment", ur: "سب سے بڑا عذاب" }, explanation: { en: "For those who turn away AND disbelieve - maximum consequence", ur: "ان کے لیے جو منہ موڑیں اور کفر کریں - انتہائی سزا" }, verseRef: "88:24" },
        { term: "إِلَيْنَا إِيَابَهُمْ", meaning: { en: "To Us is their return", ur: "ہماری طرف ان کی واپسی ہے" }, explanation: { en: "All return to Allah - inevitable destination", ur: "سب اللہ کی طرف لوٹیں گے - ناگزیر منزل" }, verseRef: "88:25" },
        { term: "عَلَيْنَا حِسَابَهُمْ", meaning: { en: "Upon Us is their account", ur: "ہمارے ذمے ان کا حساب ہے" }, explanation: { en: "Allah takes responsibility for judgment - no escape", ur: "اللہ نے حساب کی ذمہ داری لی ہے - کوئی فرار نہیں" }, verseRef: "88:26" }
      ]
    }
  },

  relationships: [
    { from: "وجوه خاشعة", to: "وجوه ناعمة", type: "antithesis", description: { en: "Humbled vs Radiant - opposite fates", ur: "ذلیل بمقابلہ تروتازہ - متضاد انجام" } },
    { from: "عين آنية", to: "عين جارية", type: "antithesis", description: { en: "Boiling vs Flowing springs", ur: "کھولتا بمقابلہ بہتا چشمہ" } },
    { from: "عاملة ناصبة", to: "لسعيها راضية", type: "antithesis", description: { en: "Exhausted toil vs Satisfied effort", ur: "تھکا دینے والی مشقت بمقابلہ مطمئن محنت" } },
    { from: "آيات الخلق", to: "فذكر", type: "causation", description: { en: "Signs should lead to reminder", ur: "نشانیاں نصیحت کی طرف لے جانی چاہئیں" } },
    { from: "مذكر", to: "ليس بمصيطر", type: "clarification", description: { en: "Defines prophetic role's limits", ur: "نبوی کردار کی حدود کی وضاحت" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: { en: "The Overwhelming Day", ur: "چھا جانے والا دن" }, verses: "88:1", description: { en: "Opening question - have you heard of it?", ur: "ابتدائی سوال - کیا تمہیں اس کی خبر پہنچی ہے؟" } },
      { stage: 2, theme: { en: "Faces of Doom", ur: "عذاب کے چہرے" }, verses: "88:2-7", description: { en: "Humbled, exhausted, burning, poisonous food", ur: "ذلیل، تھکے ہوئے، جلتے ہوئے، زہریلا کھانا" } },
      { stage: 3, theme: { en: "Faces of Bliss", ur: "نعمت کے چہرے" }, verses: "88:8-16", description: { en: "Radiant, satisfied, Paradise luxuries", ur: "تروتازہ، مطمئن، جنت کی آسائشیں" } },
      { stage: 4, theme: { en: "Signs in Creation", ur: "تخلیق میں نشانیاں" }, verses: "88:17-20", description: { en: "Camels, sky, mountains, earth", ur: "اونٹ، آسمان، پہاڑ، زمین" } },
      { stage: 5, theme: { en: "Prophet's Role", ur: "نبی ﷺ کا کردار" }, verses: "88:21-22", description: { en: "Reminder, not controller", ur: "نصیحت کرنے والے، مسلط نہیں" } },
      { stage: 6, theme: { en: "Divine Judgment", ur: "الٰہی فیصلہ" }, verses: "88:23-26", description: { en: "Punishment, return, accounting", ur: "سزا، واپسی، حساب" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Work for the right cause", ur: "صحیح مقصد کے لیے محنت کرو" }, how: { en: "Don't be 'aamilah naasibah' - exhausted on wrong path. Align effort with akhirah", ur: "'عاملہ ناصبہ' نہ بنو - غلط راستے پر تھکے ہوئے۔ محنت کو آخرت سے ہم آہنگ کرو" }, verse: "88:3" },
      { principle: { en: "Reflect on creation", ur: "تخلیق پر غور کرو" }, how: { en: "Look at camels, sky, mountains, earth - see Allah's design and power", ur: "اونٹوں، آسمان، پہاڑوں، زمین کو دیکھو - اللہ کی صنعت اور طاقت دیکھو" }, verse: "88:17-20" },
      { principle: { en: "Remind gently", ur: "نرمی سے نصیحت کرو" }, how: { en: "Be mudhakkir like the Prophet - remind without forcing or controlling", ur: "نبی ﷺ کی طرح مذکّر بنو - بغیر جبر اور مسلط ہوئے نصیحت کرو" }, verse: "88:21-22" },
      { principle: { en: "Seek Paradise's peace", ur: "جنت کا سکون تلاش کرو" }, how: { en: "Work for jannah where there's no laghw - meaningful, beautiful speech only", ur: "اس جنت کے لیے محنت کرو جہاں لغو نہیں - صرف بامعنی، خوبصورت گفتگو" }, verse: "88:11" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Contrast of Springs", ur: "چشموں کا تضاد" },
    insight: { en: "The surah brilliantly contrasts two springs: 'ayn aaniyah (boiling spring - 88:5) for the doomed vs 'ayn jaariyah (flowing spring - 88:12) for the blessed. Same word ('ayn), opposite states. What you worked for in dunya determines which spring you drink from. The one who was 'aamilah naasibah' (working exhausted) on the wrong path drinks boiling water. The one who was 'li-sa'yihaa raadiyah' (pleased with her effort) drinks cool flowing water. The surah asks: which spring are you working toward?", ur: "سورت خوبصورتی سے دو چشموں کا تضاد پیش کرتی ہے: بدبختوں کے لیے 'عین آنیہ' (کھولتا چشمہ - 88:5) بمقابلہ نیک بختوں کے لیے 'عین جاریہ' (بہتا چشمہ - 88:12)۔ ایک ہی لفظ (عین)، متضاد حالتیں۔ دنیا میں تم نے کس کے لیے محنت کی اس سے طے ہوتا ہے کون سا چشمہ پیو گے۔ جو 'عاملہ ناصبہ' (غلط راستے پر تھکی ہوئی) تھی وہ کھولتا پانی پیتی ہے۔ جو 'لسعیہا راضیہ' (اپنی محنت سے خوش) تھی وہ ٹھنڈا بہتا پانی پیتی ہے۔ سورت پوچھتی ہے: تم کس چشمے کے لیے محنت کر رہے ہو؟" }
  },

  comparisonTable: {
    title: { en: "Two Fates Compared", ur: "دو انجاموں کا موازنہ" },
    headers: [
      { en: "Aspect", ur: "پہلو" },
      { en: "Faces of Doom", ur: "عذاب کے چہرے" },
      { en: "Faces of Bliss", ur: "نعمت کے چہرے" }
    ],
    rows: [
      { aspect: { en: "Expression", ur: "تاثرات" }, doom: "خَاشِعَةٌ (humbled)", bliss: "نَّاعِمَةٌ (radiant)" },
      { aspect: { en: "Work Result", ur: "محنت کا نتیجہ" }, doom: "عَامِلَةٌ نَّاصِبَةٌ (exhausted)", bliss: "لِّسَعْيِهَا رَاضِيَةٌ (satisfied)" },
      { aspect: { en: "Fire/Location", ur: "آگ/مقام" }, doom: "نَارًا حَامِيَةً (hot Fire)", bliss: "جَنَّةٍ عَالِيَةٍ (elevated Garden)" },
      { aspect: { en: "Drink", ur: "مشروب" }, doom: "عَيْنٍ آنِيَةٍ (boiling)", bliss: "عَيْنٌ جَارِيَةٌ (flowing)" },
      { aspect: { en: "Food", ur: "کھانا" }, doom: "ضَرِيعٍ (thorns)", bliss: { en: "Implied: pure food", ur: "مضمر: پاکیزہ کھانا" } },
      { aspect: { en: "Speech", ur: "گفتگو" }, doom: "N/A", bliss: "لَا لَاغِيَةً (no idle talk)" }
    ]
  }
};

export default ONTOLOGY;
