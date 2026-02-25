/**
 * Surah 'Abasa (80) - Ontology of Quranic Concepts
 * He Frowned
 * Theme: Prophet's correction, Quran's honor, human creation, Day of Judgment
 */

export const ONTOLOGY = {
  surahId: 80,
  surahName: "'Abasa",
  surahNameArabic: "عبس",
  revelationType: "Makki",
  totalAyahs: 42,

  categories: {
    divineCorrection: {
      name: "Divine Correction of Prophet",
      nameArabic: "التعديل الإلهي",
      color: '#8B5CF6',
      icon: 'MessageCircle',
      concepts: [
        { term: "عَبَسَ وَتَوَلَّىٰ", meaning: { en: "He frowned and turned away", ur: "ترش رو ہوا اور منہ پھیر لیا" }, explanation: { en: "Third person (gentle) - Prophet turned from blind man", ur: "غائب کا صیغہ (نرم انداز) - نبی نے نابینا سے منہ پھیرا" }, verseRef: "80:1" },
        { term: "أَن جَاءَهُ الْأَعْمَىٰ", meaning: { en: "Because the blind man came", ur: "اس لیے کہ اس کے پاس ایک نابینا آیا" }, explanation: { en: "Abdullah ibn Umm Maktum seeking guidance", ur: "عبداللہ ابن ام مکتوم ہدایت کے متلاشی" }, verseRef: "80:2" },
        { term: "لَعَلَّهُ يَزَّكَّىٰ", meaning: { en: "Perhaps he would purify", ur: "شاید وہ پاکیزگی حاصل کر لیتا" }, explanation: { en: "Blind man might achieve more than chiefs", ur: "نابینا سرداروں سے زیادہ حاصل کر سکتا تھا" }, verseRef: "80:3" }
      ]
    },

    sincerityVsStatus: {
      name: "Sincerity vs Social Status",
      nameArabic: "الإخلاص مقابل المكانة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "مَنِ اسْتَغْنَىٰ", meaning: { en: "He who considers himself self-sufficient", ur: "جو خود کو بے نیاز سمجھتا ہے" }, explanation: { en: "Arrogant chiefs who feel no need for guidance", ur: "مغرور سردار جو ہدایت کی ضرورت محسوس نہیں کرتے" }, verseRef: "80:5" },
        { term: "تَصَدَّىٰ", meaning: { en: "You give attention", ur: "آپ اس کی طرف متوجہ ہوتے ہیں" }, explanation: { en: "Prophet's attention to wealthy leaders", ur: "نبی کی مالدار سرداروں پر توجہ" }, verseRef: "80:6" },
        { term: "مَن جَاءَكَ يَسْعَىٰ وَهُوَ يَخْشَىٰ", meaning: { en: "Who comes striving, fearing Allah", ur: "جو دوڑتا ہوا آیا اور وہ (Allah سے) ڈرتا ہے" }, explanation: { en: "Blind man's effort despite disability", ur: "نابینا کی معذوری کے باوجود کوشش" }, verseRef: "80:8-9" },
        { term: "عَنْهُ تَلَهَّىٰ", meaning: { en: "From him you were distracted", ur: "اس سے آپ غافل ہو گئے" }, explanation: { en: "Prophet's distraction from sincere seeker", ur: "سچے طالب سے نبی کی غفلت" }, verseRef: "80:10" }
      ]
    },

    quranHonor: {
      name: "Quran's Honor",
      nameArabic: "مكانة القرآن",
      color: '#F59E0B',
      icon: 'Book',
      concepts: [
        { term: "إِنَّهَا تَذْكِرَةٌ", meaning: { en: "It is a reminder", ur: "یہ ایک نصیحت ہے" }, explanation: { en: "Quran is reminder for all", ur: "Quran سب کے لیے نصیحت ہے" }, verseRef: "80:11" },
        { term: "صُحُفٍ مُّكَرَّمَةٍ مَّرْفُوعَةٍ مُّطَهَّرَةٍ", meaning: { en: "Honored, exalted, purified scriptures", ur: "عزت والے، بلند مرتبہ، پاکیزہ صحیفے" }, explanation: { en: "Three descriptions of Quran's status", ur: "Quran کی شان کے تین وصف" }, verseRef: "80:13-14" },
        { term: "بِأَيْدِي سَفَرَةٍ كِرَامٍ بَرَرَةٍ", meaning: { en: "In hands of noble, dutiful scribes", ur: "عزت دار فرمانبردار کاتبوں (فرشتوں) کے ہاتھوں میں" }, explanation: { en: "Angels who carry and copy revelation", ur: "فرشتے جو وحی لے کر آتے اور اسے محفوظ کرتے ہیں" }, verseRef: "80:15-16" }
      ]
    },

    humanIngratitude: {
      name: "Human Ingratitude",
      nameArabic: "كفران الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ", meaning: { en: "Destroyed is man, how ungrateful!", ur: "مارا گیا انسان، کتنا ناشکرا ہے!" }, explanation: { en: "Curse formula - dismay at ingratitude", ur: "لعنت کا اسلوب - ناشکری پر حیرت" }, verseRef: "80:17" },
        { term: "لَمَّا يَقْضِ مَا أَمَرَهُ", meaning: { en: "Never fulfilled what commanded", ur: "جو حکم دیا گیا وہ ابھی تک پورا نہیں کیا" }, explanation: { en: "Despite all favors, obligations unfulfilled", ur: "تمام نعمتوں کے باوجود فرائض ادا نہیں کیے" }, verseRef: "80:23" }
      ]
    },

    creationStages: {
      name: "Human Creation Stages",
      nameArabic: "مراحل خلق الإنسان",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "مِن نُّطْفَةٍ خَلَقَهُ", meaning: { en: "From a drop created him", ur: "ایک قطرے سے اسے پیدا کیا" }, explanation: { en: "Humble origin - sperm drop", ur: "حقیر شروعات - نطفے کا قطرہ" }, verseRef: "80:19" },
        { term: "فَقَدَّرَهُ", meaning: { en: "Then determined him", ur: "پھر اس کا اندازہ مقرر کیا" }, explanation: { en: "Measured and proportioned", ur: "ناپ تول اور تناسب مقرر کیا" }, verseRef: "80:19" },
        { term: "السَّبِيلَ يَسَّرَهُ", meaning: { en: "Made the way easy", ur: "اس کے لیے راستہ آسان کیا" }, explanation: { en: "Birth canal or guidance path", ur: "پیدائش کا راستہ یا ہدایت کا راستہ" }, verseRef: "80:20" },
        { term: "أَمَاتَهُ فَأَقْبَرَهُ", meaning: { en: "Caused death, then burial", ur: "پھر مارا اور قبر میں پہنچایا" }, explanation: { en: "Death and dignified burial", ur: "موت اور باعزت تدفین" }, verseRef: "80:21" },
        { term: "أَنشَرَهُ", meaning: { en: "Will resurrect him", ur: "دوبارہ زندہ کرے گا" }, explanation: { en: "Resurrection when Allah wills", ur: "جب Allah چاہے گا دوبارہ جی اٹھائے گا" }, verseRef: "80:22" }
      ]
    },

    provisionSigns: {
      name: "Signs in Provision",
      nameArabic: "آيات في الرزق",
      color: '#22C55E',
      icon: 'Sun',
      concepts: [
        { term: "صَبَبْنَا الْمَاءَ صَبًّا", meaning: { en: "Poured water pouring", ur: "ہم نے پانی خوب برسایا" }, explanation: { en: "Rain - cognate accusative emphasis", ur: "بارش - تاکید کے لیے مفعول مطلق" }, verseRef: "80:25" },
        { term: "شَقَقْنَا الْأَرْضَ شَقًّا", meaning: { en: "Split earth splitting", ur: "پھر زمین کو خوب پھاڑا" }, explanation: { en: "Earth opened for growth", ur: "زمین اگانے کے لیے پھٹی" }, verseRef: "80:26" },
        { term: "حَبًّا وَعِنَبًا وَقَضْبًا وَزَيْتُونًا وَنَخْلًا", meaning: { en: "Grain, grapes, herbs, olives, palms", ur: "اناج، انگور، سبزیاں، زیتون، کھجور" }, explanation: { en: "Variety of crops from one earth", ur: "ایک ہی زمین سے مختلف فصلیں" }, verseRef: "80:27-29" },
        { term: "مَّتَاعًا لَّكُمْ وَلِأَنْعَامِكُمْ", meaning: { en: "Provision for you and cattle", ur: "تمہارے اور تمہارے مویشیوں کے فائدے کے لیے" }, explanation: { en: "Both humans and animals provided for", ur: "انسانوں اور جانوروں دونوں کے لیے رزق" }, verseRef: "80:32" }
      ]
    },

    judgmentDay: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "الصَّاخَّةُ", meaning: { en: "The Deafening Blast", ur: "کان پھاڑ دینے والی چیخ" }, explanation: { en: "Trumpet so loud it deafens", ur: "صور اتنی زور سے کہ کان بہرے ہو جائیں" }, verseRef: "80:33" },
        { term: "يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ وَأُمِّهِ وَأَبِيهِ", meaning: { en: "Man flees from family", ur: "انسان اپنے بھائی، ماں اور باپ سے بھاگے گا" }, explanation: { en: "Terror makes closest bonds meaningless", ur: "دہشت قریب ترین رشتوں کو بے معنی کر دے گی" }, verseRef: "80:34-35" },
        { term: "شَأْنٌ يُغْنِيهِ", meaning: { en: "Concern sufficient for him", ur: "ہر ایک کو اپنی فکر ہوگی" }, explanation: { en: "Each person consumed by own worry", ur: "ہر شخص اپنی پریشانی میں ڈوبا ہوگا" }, verseRef: "80:37" }
      ]
    },

    twoFaces: {
      name: "Two Types of Faces",
      nameArabic: "نوعان من الوجوه",
      color: '#3B82F6',
      icon: 'Scale',
      concepts: [
        { term: "وُجُوهٌ... مُّسْفِرَةٌ ضَاحِكَةٌ مُّسْتَبْشِرَةٌ", meaning: { en: "Bright, laughing, rejoicing faces", ur: "چمکتے، ہنستے، خوش ہوتے چہرے" }, explanation: { en: "Believers receive good news", ur: "مومنوں کو خوشخبری ملے گی" }, verseRef: "80:38-39" },
        { term: "وُجُوهٌ... غَبَرَةٌ تَرْهَقُهَا قَتَرَةٌ", meaning: { en: "Dust-covered, blackened faces", ur: "گرد آلود، سیاہی چھائی ہوئی چہرے" }, explanation: { en: "Despair covers disbelievers", ur: "مایوسی کافروں کو ڈھانپ لے گی" }, verseRef: "80:40-41" },
        { term: "الْكَفَرَةُ الْفَجَرَةُ", meaning: { en: "Disbelievers, wicked", ur: "کافر، بدکار" }, explanation: { en: "Double description: kufr in belief + fujur in action", ur: "دوہری صفت: عقیدے میں کفر + عمل میں فسق" }, verseRef: "80:42" }
      ]
    }
  },

  relationships: [
    { from: "الأعمى يسعى يخشى", to: "من استغنى", type: "contrast", description: { en: "Sincere seeker vs arrogant rejecter", ur: "سچا طالب بمقابلہ مغرور منکر" } },
    { from: "تذكرة", to: "صحف مكرمة", type: "identity", description: { en: "Quran is honored reminder", ur: "Quran عزت والی نصیحت ہے" } },
    { from: "من نطفة", to: "أنشره", type: "sequence", description: { en: "Life cycle: creation → death → resurrection", ur: "زندگی کا چکر: تخلیق → موت → دوبارہ زندگی" } },
    { from: "صببنا الماء", to: "متاعا لكم", type: "purpose", description: { en: "All provision for human/animal benefit", ur: "تمام رزق انسانوں اور جانوروں کے فائدے کے لیے" } },
    { from: "الصاخة", to: "يفر من أخيه", type: "consequence", description: { en: "Blast causes family flight", ur: "دھماکے سے لوگ گھر والوں سے بھاگیں گے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Correction", verses: "80:1-10", description: { en: "Prophet corrected for prioritizing chiefs over sincere seeker", ur: "نبی کو اصلاح دی گئی کہ سرداروں کو سچے طالب پر ترجیح دی" } },
      { stage: 2, theme: "Quran's Status", verses: "80:11-16", description: { en: "Reminder in honored, pure scriptures with noble angels", ur: "عزت دار پاکیزہ صحیفوں میں نصیحت، معزز فرشتوں کے ہاتھوں" } },
      { stage: 3, theme: "Human Ingratitude", verses: "80:17-23", description: { en: "Man ungrateful despite creation and favor", ur: "تخلیق اور نعمتوں کے باوجود انسان ناشکرا" } },
      { stage: 4, theme: "Provision Signs", verses: "80:24-32", description: { en: "Food from rain to earth to crops for all", ur: "بارش سے زمین سے فصلوں تک سب کے لیے غذا" } },
      { stage: 5, theme: "Judgment Day", verses: "80:33-42", description: { en: "Blast, flight from family, two types of faces", ur: "دھماکہ، گھر والوں سے فرار، دو قسم کے چہرے" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Value sincerity over status", how: "Prioritize those seeking truth over those with worldly rank", verse: "80:1-10" },
      { principle: "Accept correction gracefully", how: "Even the Prophet was corrected - we should be more accepting", verse: "80:1-10" },
      { principle: "Remember your origins", how: "From a drop - stay humble despite achievements", verse: "80:19" },
      { principle: "Recognize provision", how: "Every bite of food is Allah's provision - be grateful", verse: "80:24-32" },
      { principle: "Prepare for that Day", how: "When family won't help, only deeds matter", verse: "80:34-37" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Blind Man Who Saw Better", ur: "نابینا جو بہتر دیکھ رہا تھا" },
    insight: { en: "This surah permanently records a divine correction of Prophet Muhammad ﷺ. While speaking to Quraysh chiefs, a blind man (Abdullah ibn Umm Maktum) interrupted seeking guidance. The Prophet frowned - not out of contempt but from wanting to complete da'wah to influential leaders. Yet Allah corrected this: 'Perhaps HE would purify himself' (v3). The blind man, who couldn't see the Prophet's expression, saw the truth more clearly than sighted leaders who turned away. Islam's value system is established: sincerity trumps social status. The Prophet ﷺ later honored Ibn Umm Maktum, leaving him in charge of Madinah during campaigns.", ur: "یہ سورت نبی محمد ﷺ کی الہٰی اصلاح کو ہمیشہ کے لیے محفوظ کرتی ہے۔ قریش کے سرداروں سے بات کرتے ہوئے ایک نابینا (عبداللہ ابن ام مکتوم) ہدایت مانگنے آیا۔ نبی نے ترش روئی دکھائی - حقارت سے نہیں بلکہ بااثر لوگوں کو دعوت مکمل کرنے کی خواہش سے۔ لیکن Allah نے اصلاح فرمائی: 'شاید وہ پاکیزگی حاصل کر لیتا' (آیت 3)۔ نابینا جو نبی کے تاثرات نہیں دیکھ سکتا تھا، حقیقت کو آنکھوں والے سرداروں سے بہتر دیکھ رہا تھا۔ اسلام کا معیار قائم ہوا: اخلاص سماجی حیثیت سے بالاتر ہے۔ نبی ﷺ نے بعد میں ابن ام مکتوم کو عزت دی اور غزوات میں مدینہ کا نگران بنایا۔" }
  },

  historicalContext: {
    note: { en: "Revealed about Abdullah ibn Umm Maktum, a blind companion who interrupted the Prophet's discussion with Quraysh leaders. The Prophet wanted to finish his da'wah to influential Meccans, but Allah corrected this prioritization, establishing Islam's egalitarian principle.", ur: "عبداللہ ابن ام مکتوم کے بارے میں نازل ہوئی، ایک نابینا صحابی جنہوں نے نبی کی قریش سرداروں سے بات کے دوران مداخلت کی۔ نبی بااثر مکّیوں کو دعوت مکمل کرنا چاہتے تھے، لیکن Allah نے اس ترجیح کی اصلاح فرمائی اور اسلام کا مساوات کا اصول قائم کیا۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "Third person عَبَسَ", example: { en: "He frowned (not 'you frowned')", ur: "وہ ترش رو ہوا (نہ کہ 'آپ ترش رو ہوئے')" }, effect: { en: "Gentle correction, not harsh rebuke", ur: "نرم اصلاح، سخت ڈانٹ نہیں" } },
      { feature: "Cognate accusative", example: { en: "صَبَبْنَا... صَبًّا, شَقَقْنَا... شَقًّا", ur: "صَبَبْنَا... صَبًّا، شَقَقْنَا... شَقًّا (مفعول مطلق)" }, effect: { en: "Emphasis on abundance", ur: "کثرت پر زور" } },
      { feature: "Rhyming adjectives", example: { en: "مُكَرَّمَةٍ، مَّرْفُوعَةٍ، مُّطَهَّرَةٍ", ur: "مکرمۃ، مرفوعۃ، مطہرۃ" }, effect: { en: "Building honor of scriptures", ur: "صحیفوں کی عزت بڑھانا" } }
    ]
  }
};

export default ONTOLOGY;
