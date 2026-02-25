/**
 * Surah Ar-Rum (30) - Ontology of Quranic Concepts
 * The Romans / The Byzantines
 * Theme: Prophecy of Roman victory, signs in creation, resurrection, divine wisdom
 */

export const ONTOLOGY = {
  surahId: 30,
  surahName: "Ar-Rum",
  surahNameArabic: "الروم",
  revelationType: "Makki",
  totalAyahs: 60,

  categories: {
    prophecyOfRomans: {
      name: "Prophecy of Roman Victory",
      nameArabic: "نبوءة انتصار الروم",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "غُلِبَتِ الرُّومُ", meaning: { en: "The Romans have been defeated", ur: "رومی مغلوب ہو گئے" }, explanation: { en: "Byzantines defeated by Persians at the time of revelation", ur: "نزولِ وحی کے وقت فارسیوں نے رومیوں کو شکست دی" }, verseRef: "30:2" },
        { term: "فِي أَدْنَى الْأَرْضِ", meaning: { en: "In the nearest land", ur: "سب سے قریبی (نشیبی) سرزمین میں" }, explanation: { en: "Area around Dead Sea - lowest point on earth", ur: "بحیرہ مردار کا علاقہ - زمین کا سب سے نشیبی مقام" }, verseRef: "30:3" },
        { term: "سَيَغْلِبُونَ", meaning: { en: "They will overcome", ur: "وہ عنقریب غالب آ جائیں گے" }, explanation: { en: "Prophecy that Romans will win within a few years", ur: "پیشگوئی کہ رومی چند سالوں میں غالب ہوں گے" }, verseRef: "30:3" },
        { term: "فِي بِضْعِ سِنِينَ", meaning: { en: "Within three to nine years", ur: "تین سے نو سال کے اندر" }, explanation: { en: "Specific timeframe of prophecy fulfillment", ur: "پیشگوئی کی تکمیل کا مخصوص وقت" }, verseRef: "30:4" },
        { term: "يَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ", meaning: { en: "On that day believers will rejoice", ur: "اس دن مومن خوش ہوں گے" }, explanation: { en: "Muslims happy as Romans (People of Book) defeat fire-worshipping Persians", ur: "مسلمان خوش ہوں گے کیونکہ اہلِ کتاب رومی آتش پرست فارسیوں کو شکست دیں گے" }, verseRef: "30:4" },
        { term: "بِنَصْرِ اللَّهِ", meaning: { en: "With the victory of Allah", ur: "اللہ کی نصرت سے" }, explanation: { en: "All victory comes from Allah", ur: "ہر فتح اللہ کی طرف سے ہوتی ہے" }, verseRef: "30:5" }
      ]
    },

    divinePromise: {
      name: "Divine Promise",
      nameArabic: "وعد الله",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "وَعْدَ اللَّهِ", meaning: { en: "Promise of Allah", ur: "اللہ کا وعدہ" }, explanation: { en: "Allah's promises never fail", ur: "اللہ کے وعدے کبھی نہیں ٹوٹتے" }, verseRef: "30:6" },
        { term: "لَا يُخْلِفُ اللَّهُ وَعْدَهُ", meaning: { en: "Allah does not fail in His promise", ur: "اللہ اپنے وعدے کے خلاف نہیں کرتا" }, explanation: { en: "Certainty of divine decree", ur: "الٰہی فیصلے کی قطعیت" }, verseRef: "30:6" },
        { term: "وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يَعْلَمُونَ", meaning: { en: "But most people do not know", ur: "لیکن اکثر لوگ نہیں جانتے" }, explanation: { en: "Majority lack true understanding", ur: "اکثریت حقیقی سمجھ سے محروم ہے" }, verseRef: "30:6" }
      ]
    },

    heedlessness: {
      name: "Heedlessness of Creation",
      nameArabic: "الغفلة عن الخلق",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "يَعْلَمُونَ ظَاهِرًا مِّنَ الْحَيَاةِ الدُّنْيَا", meaning: { en: "They know the apparent of worldly life", ur: "وہ دنیاوی زندگی کا صرف ظاہر جانتے ہیں" }, explanation: { en: "Know surface but miss deeper meaning", ur: "سطح جانتے ہیں مگر گہرے معنی سے غافل ہیں" }, verseRef: "30:7" },
        { term: "وَهُمْ عَنِ الْآخِرَةِ هُمْ غَافِلُونَ", meaning: { en: "About the Hereafter they are unaware", ur: "اور وہ آخرت سے غافل ہیں" }, explanation: { en: "Negligent of eternal reality", ur: "ابدی حقیقت سے بے خبر" }, verseRef: "30:7" },
        { term: "أَوَلَمْ يَتَفَكَّرُوا فِي أَنفُسِهِمْ", meaning: { en: "Have they not reflected within themselves", ur: "کیا انہوں نے اپنے اندر غور نہیں کیا" }, explanation: { en: "Call to introspection", ur: "خود احتسابی کی دعوت" }, verseRef: "30:8" }
      ]
    },

    creationPurpose: {
      name: "Purpose of Creation",
      nameArabic: "الحكمة من الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "مَا خَلَقَ اللَّهُ... إِلَّا بِالْحَقِّ", meaning: { en: "Allah created... only with truth", ur: "اللہ نے... صرف حق کے ساتھ پیدا کیا" }, explanation: { en: "Creation has purpose, not random", ur: "تخلیق بامقصد ہے، بے مقصد نہیں" }, verseRef: "30:8" },
        { term: "وَأَجَلٍ مُّسَمًّى", meaning: { en: "And an appointed term", ur: "اور ایک مقررہ مدت" }, explanation: { en: "Everything has its time", ur: "ہر چیز کا ایک وقت مقرر ہے" }, verseRef: "30:8" },
        { term: "لِقَاءِ رَبِّهِمْ لَكَافِرُونَ", meaning: { en: "Meeting with their Lord they disbelieve", ur: "اپنے رب سے ملاقات کا انکار کرتے ہیں" }, explanation: { en: "Deniers of resurrection", ur: "قیامت کے منکرین" }, verseRef: "30:8" }
      ]
    },

    historicalLessons: {
      name: "Lessons from History",
      nameArabic: "العبر من التاريخ",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "أَوَلَمْ يَسِيرُوا فِي الْأَرْضِ", meaning: { en: "Have they not traveled through the earth", ur: "کیا وہ زمین میں چلے پھرے نہیں" }, explanation: { en: "Travel to see fate of past nations", ur: "گزشتہ قوموں کا انجام دیکھنے کے لیے سفر" }, verseRef: "30:9" },
        { term: "كَانُوا أَشَدَّ مِنْهُمْ قُوَّةً", meaning: { en: "They were greater than them in strength", ur: "وہ ان سے زیادہ طاقتور تھے" }, explanation: { en: "Past nations were mightier yet perished", ur: "پچھلی قومیں زیادہ طاقتور تھیں پھر بھی ہلاک ہوئیں" }, verseRef: "30:9" },
        { term: "وَأَثَارُوا الْأَرْضَ وَعَمَرُوهَا", meaning: { en: "They plowed the earth and built it up", ur: "انہوں نے زمین کو جوتا اور آباد کیا" }, explanation: { en: "Advanced civilizations destroyed", ur: "ترقی یافتہ تہذیبیں تباہ ہو گئیں" }, verseRef: "30:9" },
        { term: "فَمَا كَانَ اللَّهُ لِيَظْلِمَهُمْ", meaning: { en: "Allah did not wrong them", ur: "اللہ نے ان پر ظلم نہیں کیا" }, explanation: { en: "They wronged themselves", ur: "انہوں نے خود اپنے آپ پر ظلم کیا" }, verseRef: "30:9" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "تَقُومُ السَّاعَةُ", meaning: { en: "The Hour will be established", ur: "قیامت قائم ہو گی" }, explanation: { en: "Certainty of Judgment Day", ur: "یومِ حساب کی قطعیت" }, verseRef: "30:12" },
        { term: "يُبْلِسُ الْمُجْرِمُونَ", meaning: { en: "The criminals will despair", ur: "مجرم مایوس ہو جائیں گے" }, explanation: { en: "Hopelessness of disbelievers", ur: "کافروں کی مایوسی" }, verseRef: "30:12" },
        { term: "وَلَمْ يَكُن لَّهُم مِّن شُرَكَائِهِمْ شُفَعَاءُ", meaning: { en: "No intercessors from their partners", ur: "ان کے شریکوں میں سے کوئی سفارشی نہ ہو گا" }, explanation: { en: "False gods cannot help", ur: "جھوٹے معبود مدد نہیں کر سکتے" }, verseRef: "30:13" },
        { term: "يَوْمَ تَقُومُ السَّاعَةُ يَوْمَئِذٍ يَتَفَرَّقُونَ", meaning: { en: "Day the Hour arrives - that Day they will separate", ur: "جس دن قیامت آئے گی اس دن وہ الگ الگ ہو جائیں گے" }, explanation: { en: "Believers separated from disbelievers", ur: "مومن کافروں سے جدا کر دیے جائیں گے" }, verseRef: "30:14" },
        { term: "فِي رَوْضَةٍ يُحْبَرُونَ", meaning: { en: "In a garden they will be delighted", ur: "باغ میں خوشیاں منائیں گے" }, explanation: { en: "Paradise for believers", ur: "مومنوں کے لیے جنت" }, verseRef: "30:15" },
        { term: "فِي الْعَذَابِ مُحْضَرُونَ", meaning: { en: "In punishment they will be brought", ur: "عذاب میں حاضر کیے جائیں گے" }, explanation: { en: "Hell for disbelievers", ur: "کافروں کے لیے دوزخ" }, verseRef: "30:16" }
      ]
    },

    glorificationTimes: {
      name: "Times of Glorification",
      nameArabic: "أوقات التسبيح",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "سُبْحَانَ اللَّهِ حِينَ تُمْسُونَ", meaning: { en: "Glory to Allah in evening", ur: "شام کے وقت اللہ کی تسبیح کرو" }, explanation: { en: "Maghrib and Isha prayers", ur: "مغرب اور عشاء کی نمازیں" }, verseRef: "30:17" },
        { term: "وَحِينَ تُصْبِحُونَ", meaning: { en: "And in the morning", ur: "اور صبح کے وقت" }, explanation: { en: "Fajr prayer", ur: "فجر کی نماز" }, verseRef: "30:17" },
        { term: "وَعَشِيًّا وَحِينَ تُظْهِرُونَ", meaning: { en: "Afternoon and noon", ur: "سہ پہر اور دوپہر" }, explanation: { en: "Asr and Dhuhr prayers", ur: "عصر اور ظہر کی نمازیں" }, verseRef: "30:18" },
        { term: "الْحَمْدُ فِي السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Praise in heavens and earth", ur: "آسمانوں اور زمین میں حمد" }, explanation: { en: "Universal praise belongs to Allah", ur: "آفاقی حمد اللہ کے لیے ہے" }, verseRef: "30:18" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ", meaning: { en: "He brings living from dead", ur: "وہ مردہ سے زندہ نکالتا ہے" }, explanation: { en: "Life from lifeless matter", ur: "بے جان مادے سے زندگی" }, verseRef: "30:19" },
        { term: "وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ", meaning: { en: "And brings dead from living", ur: "اور زندہ سے مردہ نکالتا ہے" }, explanation: { en: "Cycle of life and death", ur: "زندگی اور موت کا چکر" }, verseRef: "30:19" },
        { term: "وَيُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: { en: "Revives earth after its death", ur: "زمین کو اس کی موت کے بعد زندہ کرتا ہے" }, explanation: { en: "Earth comes alive after rain", ur: "بارش کے بعد زمین زندہ ہو جاتی ہے" }, verseRef: "30:19" },
        { term: "وَكَذَٰلِكَ تُخْرَجُونَ", meaning: { en: "And thus you will be brought out", ur: "اور اسی طرح تم نکالے جاؤ گے" }, explanation: { en: "Resurrection like earth's revival", ur: "قیامت زمین کی بحالی کی طرح ہو گی" }, verseRef: "30:19" }
      ]
    },

    humanCreation: {
      name: "Human Creation",
      nameArabic: "خلق الإنسان",
      color: "#06B6D4",
      icon: "Users",
      concepts: [
        { term: "خَلَقَكُم مِّن تُرَابٍ", meaning: { en: "Created you from dust", ur: "تمہیں مٹی سے پیدا کیا" }, explanation: { en: "Adam's origin from earth", ur: "آدم علیہ السلام کی اصل مٹی سے ہے" }, verseRef: "30:20" },
        { term: "ثُمَّ إِذَا أَنتُم بَشَرٌ تَنتَشِرُونَ", meaning: { en: "Then you are human beings dispersing", ur: "پھر تم انسان ہو کر پھیل گئے" }, explanation: { en: "From dust to spread across earth", ur: "مٹی سے پوری زمین پر پھیل گئے" }, verseRef: "30:20" }
      ]
    },

    signOfMarriage: {
      name: "Sign of Marriage",
      nameArabic: "آية الزواج",
      color: "#EC4899",
      icon: "Heart",
      concepts: [
        { term: "خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا", meaning: { en: "Created for you from yourselves mates", ur: "تمہارے لیے تمہاری ہی جنس سے جوڑے بنائے" }, explanation: { en: "Spouses from same human species", ur: "ہم نوع انسانی نسل سے جیون ساتھی" }, verseRef: "30:21" },
        { term: "لِّتَسْكُنُوا إِلَيْهَا", meaning: { en: "That you may find tranquility in them", ur: "تاکہ تم ان سے سکون پاؤ" }, explanation: { en: "Marriage brings peace and rest", ur: "نکاح سکون اور آرام لاتا ہے" }, verseRef: "30:21" },
        { term: "مَّوَدَّةً وَرَحْمَةً", meaning: { en: "Love and mercy", ur: "محبت اور رحمت" }, explanation: { en: "Two pillars of marriage", ur: "نکاح کے دو ستون" }, verseRef: "30:21" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ", meaning: { en: "Indeed in that are signs", ur: "بے شک اس میں نشانیاں ہیں" }, explanation: { en: "Marriage is sign of divine wisdom", ur: "نکاح الٰہی حکمت کی نشانی ہے" }, verseRef: "30:21" }
      ]
    },

    signsOfDiversity: {
      name: "Signs of Diversity",
      nameArabic: "آيات التنوع",
      color: "#8B5CF6",
      icon: "Users",
      concepts: [
        { term: "خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Creation of heavens and earth", ur: "آسمانوں اور زمین کی تخلیق" }, explanation: { en: "Vastness of cosmic creation", ur: "کائناتی تخلیق کی وسعت" }, verseRef: "30:22" },
        { term: "اخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ", meaning: { en: "Diversity of your languages and colors", ur: "تمہاری زبانوں اور رنگوں کا اختلاف" }, explanation: { en: "Human diversity is divine sign", ur: "انسانی تنوع الٰہی نشانی ہے" }, verseRef: "30:22" },
        { term: "إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّلْعَالِمِينَ", meaning: { en: "Signs for those of knowledge", ur: "علم والوں کے لیے نشانیاں" }, explanation: { en: "Scholars recognize these signs", ur: "علماء ان نشانیوں کو پہچانتے ہیں" }, verseRef: "30:22" }
      ]
    },

    signsOfSleep: {
      name: "Signs of Sleep",
      nameArabic: "آية النوم",
      color: "#22C55E",
      icon: "Moon",
      concepts: [
        { term: "مَنَامُكُم بِاللَّيْلِ وَالنَّهَارِ", meaning: { en: "Your sleep by night and day", ur: "تمہارا رات اور دن کو سونا" }, explanation: { en: "Rest is divine gift", ur: "آرام اللہ کی نعمت ہے" }, verseRef: "30:23" },
        { term: "وَابْتِغَاؤُكُم مِّن فَضْلِهِ", meaning: { en: "And your seeking from His bounty", ur: "اور اس کے فضل سے روزی تلاش کرنا" }, explanation: { en: "Work to earn livelihood", ur: "روزی کمانے کے لیے محنت" }, verseRef: "30:23" }
      ]
    },

    signsOfLightning: {
      name: "Signs of Lightning and Rain",
      nameArabic: "آيات البرق والمطر",
      color: "#06B6D4",
      icon: "Zap",
      concepts: [
        { term: "يُرِيكُمُ الْبَرْقَ خَوْفًا وَطَمَعًا", meaning: { en: "Shows you lightning as fear and hope", ur: "تمہیں بجلی دکھاتا ہے خوف اور امید کے ساتھ" }, explanation: { en: "Fear of storm, hope for rain", ur: "طوفان کا خوف، بارش کی امید" }, verseRef: "30:24" },
        { term: "وَيُنَزِّلُ مِنَ السَّمَاءِ مَاءً", meaning: { en: "And sends down rain from sky", ur: "اور آسمان سے پانی اتارتا ہے" }, explanation: { en: "Water cycle controlled by Allah", ur: "پانی کا دور اللہ کے قابو میں ہے" }, verseRef: "30:24" },
        { term: "فَيُحْيِي بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: { en: "Gives life to earth after its death", ur: "اس سے زمین کو اس کی موت کے بعد زندہ کرتا ہے" }, explanation: { en: "Rain revives barren land", ur: "بارش بنجر زمین کو زندہ کرتی ہے" }, verseRef: "30:24" }
      ]
    },

    cosmicStability: {
      name: "Cosmic Stability",
      nameArabic: "استقرار الكون",
      color: "#3B82F6",
      icon: "Globe",
      concepts: [
        { term: "أَن تَقُومَ السَّمَاءُ وَالْأَرْضُ بِأَمْرِهِ", meaning: { en: "Heaven and earth stand by His command", ur: "آسمان اور زمین اس کے حکم سے قائم ہیں" }, explanation: { en: "Universe held by divine order", ur: "کائنات الٰہی حکم سے قائم ہے" }, verseRef: "30:25" },
        { term: "ثُمَّ إِذَا دَعَاكُمْ دَعْوَةً مِّنَ الْأَرْضِ", meaning: { en: "Then when He calls you from earth", ur: "پھر جب وہ تمہیں زمین سے ایک بار پکارے گا" }, explanation: { en: "Single call for resurrection", ur: "قیامت کے لیے ایک پکار" }, verseRef: "30:25" },
        { term: "إِذَا أَنتُمْ تَخْرُجُونَ", meaning: { en: "You will come out", ur: "تم فوراً نکل آؤ گے" }, explanation: { en: "Emerging from graves", ur: "قبروں سے نکلنا" }, verseRef: "30:25" }
      ]
    },

    divineOwnership: {
      name: "Divine Ownership",
      nameArabic: "الملكية الإلهية",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "وَلَهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To Him belongs whoever is in heavens and earth", ur: "آسمانوں اور زمین میں جو بھی ہے اسی کا ہے" }, explanation: { en: "All creation belongs to Allah", ur: "تمام مخلوقات اللہ کی ملکیت ہیں" }, verseRef: "30:26" },
        { term: "كُلٌّ لَّهُ قَانِتُونَ", meaning: { en: "All are devoutly obedient to Him", ur: "سب اس کے فرمانبردار ہیں" }, explanation: { en: "Universal submission to Allah", ur: "اللہ کے سامنے آفاقی سرافگندگی" }, verseRef: "30:26" },
        { term: "يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ", meaning: { en: "He originates creation then repeats it", ur: "وہ مخلوق کو پہلی بار پیدا کرتا ہے پھر دوبارہ بنائے گا" }, explanation: { en: "Creation and recreation easy for Allah", ur: "تخلیق اور دوبارہ تخلیق اللہ کے لیے آسان ہے" }, verseRef: "30:27" },
        { term: "وَهُوَ أَهْوَنُ عَلَيْهِ", meaning: { en: "And that is easy for Him", ur: "اور یہ اس کے لیے آسان ہے" }, explanation: { en: "Recreation easier than first creation", ur: "دوبارہ بنانا پہلی بار بنانے سے بھی آسان ہے" }, verseRef: "30:27" },
        { term: "الْمَثَلُ الْأَعْلَىٰ", meaning: { en: "The highest description", ur: "سب سے اعلیٰ صفت" }, explanation: { en: "Most exalted attributes for Allah", ur: "اللہ کے لیے سب سے بلند صفات" }, verseRef: "30:27" }
      ]
    },

    monotheism: {
      name: "Pure Monotheism",
      nameArabic: "التوحيد الخالص",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "ضَرَبَ لَكُم مَّثَلًا مِّنْ أَنفُسِكُمْ", meaning: { en: "He presents an example from yourselves", ur: "اس نے تمہارے لیے تمہاری ذات سے مثال بیان کی" }, explanation: { en: "Analogy about equal partners", ur: "برابر کے شریکوں کے بارے میں تمثیل" }, verseRef: "30:28" },
        { term: "هَل لَّكُم مِّن مَّا مَلَكَتْ أَيْمَانُكُم مِّن شُرَكَاءَ", meaning: { en: "Do you have among your slaves any partners", ur: "کیا تمہارے غلاموں میں سے کوئی تمہارا شریک ہے" }, explanation: { en: "You don't share with slaves, why give Allah partners?", ur: "تم غلاموں کو شریک نہیں بناتے، تو اللہ کو شریک کیوں دیتے ہو؟" }, verseRef: "30:28" },
        { term: "فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا", meaning: { en: "Direct your face toward religion inclining to truth", ur: "اپنا رخ دین کی طرف یکسو ہو کر رکھو" }, explanation: { en: "Focus on pure monotheism", ur: "خالص توحید پر توجہ مرکوز رکھو" }, verseRef: "30:30" },
        { term: "فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا", meaning: { en: "The fitrah of Allah upon which He created mankind", ur: "اللہ کی فطرت جس پر اس نے لوگوں کو پیدا کیا" }, explanation: { en: "Natural disposition toward monotheism", ur: "توحید کی طرف فطری رجحان" }, verseRef: "30:30" },
        { term: "لَا تَبْدِيلَ لِخَلْقِ اللَّهِ", meaning: { en: "No change in the creation of Allah", ur: "اللہ کی تخلیق (فطرت) میں کوئی تبدیلی نہیں" }, explanation: { en: "Fitrah cannot be permanently altered", ur: "فطرت مستقل طور پر بدلی نہیں جا سکتی" }, verseRef: "30:30" },
        { term: "ذَٰلِكَ الدِّينُ الْقَيِّمُ", meaning: { en: "That is the correct religion", ur: "یہی سیدھا دین ہے" }, explanation: { en: "Islam is the straight religion", ur: "اسلام سیدھا دین ہے" }, verseRef: "30:30" }
      ]
    },

    turningToAllah: {
      name: "Turning to Allah",
      nameArabic: "الإنابة إلى الله",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "مُنِيبِينَ إِلَيْهِ", meaning: { en: "Turning in repentance to Him", ur: "اس کی طرف رجوع کرتے ہوئے" }, explanation: { en: "Constant return to Allah", ur: "ہمیشہ اللہ کی طرف لوٹتے رہنا" }, verseRef: "30:31" },
        { term: "وَاتَّقُوهُ", meaning: { en: "And fear Him", ur: "اور اس سے ڈرو" }, explanation: { en: "God-consciousness in actions", ur: "اعمال میں خدا ترسی" }, verseRef: "30:31" },
        { term: "وَأَقِيمُوا الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "اور نماز قائم کرو" }, explanation: { en: "Prayer as pillar of faith", ur: "نماز ایمان کا ستون" }, verseRef: "30:31" },
        { term: "وَلَا تَكُونُوا مِنَ الْمُشْرِكِينَ", meaning: { en: "And do not be of the polytheists", ur: "اور مشرکوں میں سے نہ ہو" }, explanation: { en: "Warning against shirk", ur: "شرک سے تنبیہ" }, verseRef: "30:31" }
      ]
    },

    divisionInReligion: {
      name: "Division in Religion",
      nameArabic: "التفرق في الدين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "مِنَ الَّذِينَ فَرَّقُوا دِينَهُمْ", meaning: { en: "Of those who divided their religion", ur: "ان لوگوں میں سے جنہوں نے اپنا دین تقسیم کر دیا" }, explanation: { en: "Sectarianism condemned", ur: "فرقہ واریت کی مذمت" }, verseRef: "30:32" },
        { term: "وَكَانُوا شِيَعًا", meaning: { en: "And became sects", ur: "اور فرقوں میں بٹ گئے" }, explanation: { en: "Breaking into factions", ur: "گروہوں میں تقسیم" }, verseRef: "30:32" },
        { term: "كُلُّ حِزْبٍ بِمَا لَدَيْهِمْ فَرِحُونَ", meaning: { en: "Every party rejoicing in what they have", ur: "ہر گروہ جو ان کے پاس ہے اس پر خوش ہے" }, explanation: { en: "Each group thinks they're right", ur: "ہر گروہ سمجھتا ہے کہ وہ صحیح ہے" }, verseRef: "30:32" }
      ]
    },

    humanNature: {
      name: "Human Nature",
      nameArabic: "طبيعة الإنسان",
      color: "#EC4899",
      icon: "Users",
      concepts: [
        { term: "وَإِذَا مَسَّ النَّاسَ ضُرٌّ دَعَوْا رَبَّهُم", meaning: { en: "When affliction touches people they call their Lord", ur: "جب لوگوں کو تکلیف پہنچتی ہے تو اپنے رب کو پکارتے ہیں" }, explanation: { en: "Humans turn to Allah in hardship", ur: "انسان مصیبت میں اللہ کی طرف رجوع کرتے ہیں" }, verseRef: "30:33" },
        { term: "مُّنِيبِينَ إِلَيْهِ", meaning: { en: "Turning to Him in repentance", ur: "اس کی طرف رجوع کرتے ہوئے" }, explanation: { en: "Sincere during difficulty", ur: "مشکل میں مخلص ہوتے ہیں" }, verseRef: "30:33" },
        { term: "ثُمَّ إِذَا أَذَاقَهُم مِّنْهُ رَحْمَةً", meaning: { en: "Then when He lets them taste mercy", ur: "پھر جب وہ ان کو اپنی رحمت کا مزہ چکھاتا ہے" }, explanation: { en: "When relief comes", ur: "جب آسانی آتی ہے" }, verseRef: "30:33" },
        { term: "إِذَا فَرِيقٌ مِّنْهُم بِرَبِّهِمْ يُشْرِكُونَ", meaning: { en: "A party of them associate partners with their Lord", ur: "ان میں سے ایک گروہ اپنے رب کے ساتھ شریک ٹھہراتا ہے" }, explanation: { en: "Ingratitude after blessing", ur: "نعمت ملنے کے بعد ناشکری" }, verseRef: "30:33" },
        { term: "الْإِنسَانُ كَفُورٌ", meaning: { en: "Man is ungrateful", ur: "انسان ناشکرا ہے" }, explanation: { en: "Tendency toward ingratitude", ur: "ناشکری کی طرف رجحان" }, verseRef: "30:34" }
      ]
    },

    rightsAndGiving: {
      name: "Rights and Giving",
      nameArabic: "الحقوق والإنفاق",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "فَآتِ ذَا الْقُرْبَىٰ حَقَّهُ", meaning: { en: "So give the relative his right", ur: "تو رشتے دار کو اس کا حق دو" }, explanation: { en: "Rights of kinship", ur: "رشتے داری کے حقوق" }, verseRef: "30:38" },
        { term: "وَالْمِسْكِينَ", meaning: { en: "And the needy", ur: "اور مسکین کو" }, explanation: { en: "Rights of the poor", ur: "غریبوں کے حقوق" }, verseRef: "30:38" },
        { term: "وَابْنَ السَّبِيلِ", meaning: { en: "And the traveler", ur: "اور مسافر کو" }, explanation: { en: "Rights of wayfarers", ur: "مسافروں کے حقوق" }, verseRef: "30:38" },
        { term: "ذَٰلِكَ خَيْرٌ لِّلَّذِينَ يُرِيدُونَ وَجْهَ اللَّهِ", meaning: { en: "That is better for those who desire Allah's face", ur: "یہ ان کے لیے بہتر ہے جو اللہ کی رضا چاہتے ہیں" }, explanation: { en: "Give for Allah's sake alone", ur: "صرف اللہ کی رضا کے لیے دو" }, verseRef: "30:38" }
      ]
    },

    ribaVsZakat: {
      name: "Riba vs Zakat",
      nameArabic: "الربا مقابل الزكاة",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        { term: "وَمَا آتَيْتُم مِّن رِّبًا", meaning: { en: "And what you give for interest", ur: "اور جو تم سود پر دیتے ہو" }, explanation: { en: "Money lent for increase", ur: "بڑھوتری کے لیے دیا ہوا مال" }, verseRef: "30:39" },
        { term: "لِّيَرْبُوَ فِي أَمْوَالِ النَّاسِ", meaning: { en: "To increase within the wealth of people", ur: "تاکہ لوگوں کے مال میں بڑھے" }, explanation: { en: "Riba exploits others", ur: "سود دوسروں کا استحصال ہے" }, verseRef: "30:39" },
        { term: "فَلَا يَرْبُو عِندَ اللَّهِ", meaning: { en: "Does not increase with Allah", ur: "اللہ کے ہاں نہیں بڑھتا" }, explanation: { en: "No blessing in interest", ur: "سود میں کوئی برکت نہیں" }, verseRef: "30:39" },
        { term: "وَمَا آتَيْتُم مِّن زَكَاةٍ", meaning: { en: "But what you give in zakah", ur: "اور جو تم زکوٰة دیتے ہو" }, explanation: { en: "Purifying charity", ur: "تزکیہ کرنے والا صدقہ" }, verseRef: "30:39" },
        { term: "تُرِيدُونَ وَجْهَ اللَّهِ", meaning: { en: "Desiring the face of Allah", ur: "اللہ کی رضا چاہتے ہوئے" }, explanation: { en: "Sincere intention in giving", ur: "دینے میں خلوصِ نیت" }, verseRef: "30:39" },
        { term: "فَأُولَٰئِكَ هُمُ الْمُضْعِفُونَ", meaning: { en: "Those are the multipliers", ur: "یہی لوگ دگنا پانے والے ہیں" }, explanation: { en: "Zakat brings multiplied reward", ur: "زکوٰة سے ثواب کئی گنا بڑھتا ہے" }, verseRef: "30:39" }
      ]
    },

    divineProvision: {
      name: "Divine Provision",
      nameArabic: "الرزق الإلهي",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "اللَّهُ الَّذِي خَلَقَكُمْ ثُمَّ رَزَقَكُمْ", meaning: { en: "Allah created you then provided for you", ur: "اللہ نے تمہیں پیدا کیا پھر رزق دیا" }, explanation: { en: "Creator is Provider", ur: "خالق ہی رازق ہے" }, verseRef: "30:40" },
        { term: "ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ", meaning: { en: "Then causes death then gives life", ur: "پھر تمہیں موت دے گا پھر زندہ کرے گا" }, explanation: { en: "Complete cycle of existence", ur: "وجود کا مکمل چکر" }, verseRef: "30:40" },
        { term: "هَلْ مِن شُرَكَائِكُم مَّن يَفْعَلُ مِن ذَٰلِكُم مِّن شَيْءٍ", meaning: { en: "Can any of your partners do any of that?", ur: "کیا تمہارے شریکوں میں سے کوئی ایسا کر سکتا ہے؟" }, explanation: { en: "Idols cannot create or provide", ur: "بت نہ پیدا کر سکتے ہیں نہ رزق دے سکتے ہیں" }, verseRef: "30:40" }
      ]
    },

    corruptionOnEarth: {
      name: "Corruption on Earth",
      nameArabic: "الفساد في الأرض",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ", meaning: { en: "Corruption appeared in land and sea", ur: "خشکی اور سمندر میں فساد ظاہر ہو گیا" }, explanation: { en: "Environmental and moral corruption", ur: "ماحولیاتی اور اخلاقی فساد" }, verseRef: "30:41" },
        { term: "بِمَا كَسَبَتْ أَيْدِي النَّاسِ", meaning: { en: "Because of what people's hands have earned", ur: "لوگوں کے ہاتھوں کی کمائی کی وجہ سے" }, explanation: { en: "Humans cause corruption", ur: "انسان فساد کا سبب ہیں" }, verseRef: "30:41" },
        { term: "لِيُذِيقَهُم بَعْضَ الَّذِي عَمِلُوا", meaning: { en: "To let them taste part of what they did", ur: "تاکہ ان کو ان کے بعض اعمال کا مزہ چکھائے" }, explanation: { en: "Consequences of actions", ur: "اعمال کے نتائج" }, verseRef: "30:41" },
        { term: "لَعَلَّهُمْ يَرْجِعُونَ", meaning: { en: "Perhaps they will return", ur: "شاید وہ باز آ جائیں" }, explanation: { en: "Hardship as means to repentance", ur: "مشکل توبہ کا ذریعہ" }, verseRef: "30:41" }
      ]
    },

    windSigns: {
      name: "Signs in Wind and Rain",
      nameArabic: "آيات الرياح والمطر",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "اللَّهُ الَّذِي يُرْسِلُ الرِّيَاحَ", meaning: { en: "Allah sends the winds", ur: "اللہ وہ ہے جو ہوائیں بھیجتا ہے" }, explanation: { en: "Wind controlled by Allah", ur: "ہوائیں اللہ کے قابو میں ہیں" }, verseRef: "30:46" },
        { term: "فَتُثِيرُ سَحَابًا", meaning: { en: "And they stir up clouds", ur: "پھر وہ بادل اٹھاتی ہیں" }, explanation: { en: "Winds gather clouds", ur: "ہوائیں بادل جمع کرتی ہیں" }, verseRef: "30:46" },
        { term: "فَيَبْسُطُهُ فِي السَّمَاءِ كَيْفَ يَشَاءُ", meaning: { en: "He spreads it in sky as He wills", ur: "وہ اسے آسمان میں جیسے چاہتا ہے پھیلاتا ہے" }, explanation: { en: "Allah shapes the clouds", ur: "اللہ بادلوں کو شکل دیتا ہے" }, verseRef: "30:48" },
        { term: "وَيَجْعَلُهُ كِسَفًا", meaning: { en: "And makes it fragments", ur: "اور اسے ٹکڑے ٹکڑے کرتا ہے" }, explanation: { en: "Breaking clouds into pieces", ur: "بادلوں کو ٹکڑوں میں توڑنا" }, verseRef: "30:48" },
        { term: "فَتَرَى الْوَدْقَ يَخْرُجُ مِنْ خِلَالِهِ", meaning: { en: "You see rain emerge from within it", ur: "تو تم دیکھتے ہو کہ بارش ان کے درمیان سے نکلتی ہے" }, explanation: { en: "Rain from within clouds", ur: "بادلوں کے اندر سے بارش" }, verseRef: "30:48" },
        { term: "وَمِنْ آيَاتِهِ أَن يُرْسِلَ الرِّيَاحَ مُبَشِّرَاتٍ", meaning: { en: "And of His signs is that He sends winds as good tidings", ur: "اور اس کی نشانیوں میں سے ہے کہ وہ خوشخبری دینے والی ہوائیں بھیجتا ہے" }, explanation: { en: "Winds bring news of rain", ur: "ہوائیں بارش کی خبر لاتی ہیں" }, verseRef: "30:46" }
      ]
    },

    resurrectionProof: {
      name: "Proof of Resurrection",
      nameArabic: "دليل البعث",
      color: "#8B5CF6",
      icon: "Sun",
      concepts: [
        { term: "فَانظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ", meaning: { en: "Look at the effects of Allah's mercy", ur: "اللہ کی رحمت کے آثار دیکھو" }, explanation: { en: "Rain's effect on earth", ur: "بارش کا زمین پر اثر" }, verseRef: "30:50" },
        { term: "كَيْفَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: { en: "How He gives life to earth after its death", ur: "وہ زمین کو اس کی موت کے بعد کیسے زندہ کرتا ہے" }, explanation: { en: "Dead earth revived by rain", ur: "مردہ زمین بارش سے زندہ ہوتی ہے" }, verseRef: "30:50" },
        { term: "إِنَّ ذَٰلِكَ لَمُحْيِي الْمَوْتَىٰ", meaning: { en: "Indeed that One gives life to the dead", ur: "بے شک وہی مردوں کو زندہ کرنے والا ہے" }, explanation: { en: "Same power will resurrect humans", ur: "وہی طاقت انسانوں کو دوبارہ زندہ کرے گی" }, verseRef: "30:50" },
        { term: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ", meaning: { en: "And He is over all things competent", ur: "اور وہ ہر چیز پر قادر ہے" }, explanation: { en: "Unlimited divine power", ur: "لامحدود الٰہی طاقت" }, verseRef: "30:50" }
      ]
    },

    hardnessOfHeart: {
      name: "Hardness of Heart",
      nameArabic: "قسوة القلوب",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلَئِنْ أَرْسَلْنَا رِيحًا فَرَأَوْهُ مُصْفَرًّا", meaning: { en: "If We send wind and they see crops yellow", ur: "اور اگر ہم ہوا بھیجیں اور وہ فصلیں زرد دیکھیں" }, explanation: { en: "Wind can destroy crops", ur: "ہوا فصلیں تباہ کر سکتی ہے" }, verseRef: "30:51" },
        { term: "لَّظَلُّوا مِن بَعْدِهِ يَكْفُرُونَ", meaning: { en: "They would continue disbelieving", ur: "تو وہ اس کے بعد بھی کفر ہی کرتے رہیں" }, explanation: { en: "Nothing changes stubborn hearts", ur: "ضدی دلوں کو کچھ نہیں بدلتا" }, verseRef: "30:51" },
        { term: "فَإِنَّكَ لَا تُسْمِعُ الْمَوْتَىٰ", meaning: { en: "You cannot make the dead hear", ur: "بے شک تم مردوں کو نہیں سنا سکتے" }, explanation: { en: "Spiritually dead cannot hear truth", ur: "روحانی طور پر مردہ سچائی نہیں سن سکتے" }, verseRef: "30:52" },
        { term: "وَلَا تُسْمِعُ الصُّمَّ الدُّعَاءَ", meaning: { en: "Nor make the deaf hear the call", ur: "اور نہ بہروں کو پکار سنا سکتے ہو" }, explanation: { en: "Those who refuse to listen", ur: "وہ جو سننے سے انکار کرتے ہیں" }, verseRef: "30:52" },
        { term: "وَمَا أَنتَ بِهَادِ الْعُمْيِ عَن ضَلَالَتِهِمْ", meaning: { en: "Nor can you guide the blind from their misguidance", ur: "اور نہ تم اندھوں کو ان کی گمراہی سے ہدایت دے سکتے ہو" }, explanation: { en: "Cannot force guidance", ur: "ہدایت زبردستی نہیں دی جا سکتی" }, verseRef: "30:53" }
      ]
    },

    stagesOfLife: {
      name: "Stages of Human Life",
      nameArabic: "مراحل حياة الإنسان",
      color: "#06B6D4",
      icon: "Users",
      concepts: [
        { term: "اللَّهُ الَّذِي خَلَقَكُم مِّن ضَعْفٍ", meaning: { en: "Allah created you from weakness", ur: "اللہ نے تمہیں کمزوری سے پیدا کیا" }, explanation: { en: "Beginning as helpless infant", ur: "بے بس بچے کے طور پر آغاز" }, verseRef: "30:54" },
        { term: "ثُمَّ جَعَلَ مِن بَعْدِ ضَعْفٍ قُوَّةً", meaning: { en: "Then made after weakness strength", ur: "پھر کمزوری کے بعد طاقت دی" }, explanation: { en: "Growing to youth and strength", ur: "جوانی اور قوت تک پہنچنا" }, verseRef: "30:54" },
        { term: "ثُمَّ جَعَلَ مِن بَعْدِ قُوَّةٍ ضَعْفًا وَشَيْبَةً", meaning: { en: "Then after strength weakness and white hair", ur: "پھر طاقت کے بعد کمزوری اور بڑھاپا" }, explanation: { en: "Decline into old age", ur: "بڑھاپے میں زوال" }, verseRef: "30:54" },
        { term: "يَخْلُقُ مَا يَشَاءُ", meaning: { en: "He creates what He wills", ur: "وہ جو چاہتا ہے پیدا کرتا ہے" }, explanation: { en: "Allah determines each person's span", ur: "اللہ ہر شخص کی عمر مقرر کرتا ہے" }, verseRef: "30:54" }
      ]
    },

    oathsOfDisbelievers: {
      name: "Oaths of Disbelievers",
      nameArabic: "أيمان الكافرين",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ", meaning: { en: "Day Hour arrives, criminals will swear", ur: "جس دن قیامت آئے گی مجرم قسم کھائیں گے" }, explanation: { en: "Disbelievers swear falsely on Judgment Day", ur: "کافر قیامت کے دن جھوٹی قسم کھائیں گے" }, verseRef: "30:55" },
        { term: "مَا لَبِثُوا غَيْرَ سَاعَةٍ", meaning: { en: "They remained not but an hour", ur: "ہم ایک گھڑی سے زیادہ نہیں ٹھہرے" }, explanation: { en: "Life seemed so brief", ur: "زندگی بہت مختصر لگی" }, verseRef: "30:55" },
        { term: "كَذَٰلِكَ كَانُوا يُؤْفَكُونَ", meaning: { en: "Thus were they deluded", ur: "اسی طرح وہ پھرائے جاتے تھے" }, explanation: { en: "Always turning from truth", ur: "ہمیشہ سچائی سے پھرتے رہے" }, verseRef: "30:55" },
        { term: "وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ وَالْإِيمَانَ", meaning: { en: "But those given knowledge and faith will say", ur: "اور علم اور ایمان والے کہیں گے" }, explanation: { en: "Believers correct them", ur: "مومن ان کی تردید کریں گے" }, verseRef: "30:56" },
        { term: "لَقَدْ لَبِثْتُمْ فِي كِتَابِ اللَّهِ إِلَىٰ يَوْمِ الْبَعْثِ", meaning: { en: "You remained in Allah's decree until Day of Resurrection", ur: "تم اللہ کے فیصلے کے مطابق قیامت کے دن تک رہے" }, explanation: { en: "Full duration was recorded", ur: "پوری مدت لکھی ہوئی تھی" }, verseRef: "30:56" }
      ]
    },

    finalExhortation: {
      name: "Final Exhortation",
      nameArabic: "الموعظة الأخيرة",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "فَيَوْمَئِذٍ لَّا يَنفَعُ الَّذِينَ ظَلَمُوا مَعْذِرَتُهُمْ", meaning: { en: "That Day, the excuse of wrongdoers will not benefit them", ur: "اس دن ظالموں کو ان کی معذرت فائدہ نہیں دے گی" }, explanation: { en: "No excuses accepted then", ur: "اس دن کوئی عذر قبول نہیں ہو گا" }, verseRef: "30:57" },
        { term: "وَلَا هُمْ يُسْتَعْتَبُونَ", meaning: { en: "Nor will they be asked to appease", ur: "اور نہ ان سے راضی ہونے کا مطالبہ کیا جائے گا" }, explanation: { en: "No chance to make amends", ur: "تلافی کا کوئی موقع نہیں" }, verseRef: "30:57" },
        { term: "وَلَقَدْ ضَرَبْنَا لِلنَّاسِ فِي هَٰذَا الْقُرْآنِ مِن كُلِّ مَثَلٍ", meaning: { en: "We presented for people in this Quran every example", ur: "ہم نے اس قرآن میں لوگوں کے لیے ہر طرح کی مثالیں بیان کیں" }, explanation: { en: "Complete guidance given", ur: "مکمل ہدایت دی گئی" }, verseRef: "30:58" },
        { term: "فَاصْبِرْ إِنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: { en: "So be patient - Allah's promise is truth", ur: "پس صبر کرو بے شک اللہ کا وعدہ سچا ہے" }, explanation: { en: "Command for patience", ur: "صبر کا حکم" }, verseRef: "30:60" },
        { term: "وَلَا يَسْتَخِفَّنَّكَ الَّذِينَ لَا يُوقِنُونَ", meaning: { en: "And let not those who have no certainty unsettle you", ur: "اور بے یقین لوگ تمہیں ہلکا نہ کریں" }, explanation: { en: "Don't be swayed by doubters", ur: "شک کرنے والوں سے متاثر نہ ہو" }, verseRef: "30:60" }
      ]
    }
  },

  relationships: [
    { from: "غُلِبَتِ الرُّومُ", to: "سَيَغْلِبُونَ", type: "prophecy", description: { en: "Defeat followed by promised victory", ur: "شکست کے بعد وعدہ شدہ فتح" } },
    { from: "فِطْرَتَ اللَّهِ", to: "الدِّينُ الْقَيِّمُ", type: "equivalence", description: { en: "Natural disposition equals true religion", ur: "فطرت سچے دین کے برابر ہے" } },
    { from: "يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا", to: "لَمُحْيِي الْمَوْتَىٰ", type: "analogy", description: { en: "Earth revival proves human resurrection", ur: "زمین کی بحالی انسانی قیامت کا ثبوت ہے" } },
    { from: "الرِّبا", to: "الزَّكَاة", type: "contrast", description: { en: "Interest vs purifying charity", ur: "سود بمقابلہ تزکیہ کرنے والا صدقہ" } },
    { from: "مَّوَدَّةً", to: "رَحْمَةً", type: "complement", description: { en: "Love and mercy together in marriage", ur: "نکاح میں محبت اور رحمت ایک ساتھ" } },
    { from: "ضُرٌّ", to: "رَحْمَةً", type: "transition", description: { en: "Hardship makes them remember, ease makes them forget", ur: "مشکل یاد دلاتی ہے، آسانی بھلا دیتی ہے" } },
    { from: "ظَهَرَ الْفَسَادُ", to: "بِمَا كَسَبَتْ أَيْدِي النَّاسِ", type: "causation", description: { en: "Human actions cause corruption", ur: "انسانی اعمال فساد کا سبب ہیں" } },
    { from: "ضَعْفٍ", to: "قُوَّةً", to2: "ضَعْفًا وَشَيْبَةً", type: "progression", description: { en: "Cycle of human life stages", ur: "انسانی زندگی کے مراحل کا چکر" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Roman Prophecy", verses: "30:1-7", description: { en: "Prophecy of Roman victory and divine promise", ur: "رومیوں کی فتح کی پیشگوئی اور الٰہی وعدہ" } },
      { stage: 2, theme: "Historical Reflection", verses: "30:8-10", description: { en: "Lessons from destroyed nations", ur: "ہلاک شدہ قوموں سے عبرت" } },
      { stage: 3, theme: "Judgment Day", verses: "30:11-16", description: { en: "Description of resurrection and separation", ur: "قیامت اور جدائی کا بیان" } },
      { stage: 4, theme: "Glorification Times", verses: "30:17-19", description: { en: "Times of prayer and praise", ur: "نماز اور تسبیح کے اوقات" } },
      { stage: 5, theme: "Signs in Creation", verses: "30:20-27", description: { en: "Human creation, marriage, diversity, cosmic signs", ur: "انسانی تخلیق، نکاح، تنوع، کائناتی نشانیاں" } },
      { stage: 6, theme: "Pure Monotheism", verses: "30:28-32", description: { en: "Fitrah and warning against polytheism", ur: "فطرت اور شرک سے تنبیہ" } },
      { stage: 7, theme: "Human Weakness", verses: "30:33-40", description: { en: "Ingratitude, rights, riba vs zakat", ur: "ناشکری، حقوق، سود بمقابلہ زکوٰة" } },
      { stage: 8, theme: "Corruption", verses: "30:41-45", description: { en: "Corruption from human hands, call to return", ur: "انسانی ہاتھوں سے فساد، واپسی کی دعوت" } },
      { stage: 9, theme: "Wind and Rain", verses: "30:46-50", description: { en: "Signs of mercy in rain", ur: "بارش میں رحمت کی نشانیاں" } },
      { stage: 10, theme: "Hard Hearts", verses: "30:51-54", description: { en: "Stubborn disbelievers and life stages", ur: "ہٹ دھرم کافر اور زندگی کے مراحل" } },
      { stage: 11, theme: "Final Accounting", verses: "30:55-60", description: { en: "Day of Judgment and call for patience", ur: "یومِ حساب اور صبر کی دعوت" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Trust divine promises", ur: "الٰہی وعدوں پر بھروسہ رکھو" }, how: { en: "Allah's word never fails - have confidence in His decree", ur: "اللہ کا کلام کبھی نہیں ٹوٹتا - اس کے فیصلے پر اعتماد رکھو" }, verse: "30:6" },
      { principle: { en: "Maintain natural state", ur: "فطری حالت قائم رکھو" }, how: { en: "Don't let society corrupt your fitrah toward monotheism", ur: "معاشرے کو اپنی فطرتِ توحید خراب نہ کرنے دو" }, verse: "30:30" },
      { principle: { en: "Build loving marriages", ur: "محبت بھرے رشتے بناؤ" }, how: { en: "Cultivate mawaddah (love) and rahmah (mercy) with spouse", ur: "شریکِ حیات کے ساتھ مودت (محبت) اور رحمت پیدا کرو" }, verse: "30:21" },
      { principle: { en: "Appreciate diversity", ur: "تنوع کی قدر کرو" }, how: { en: "See different languages and colors as divine signs, not divisions", ur: "مختلف زبانوں اور رنگوں کو الٰہی نشانی سمجھو، تقسیم نہیں" }, verse: "30:22" },
      { principle: { en: "Give to relatives", ur: "رشتے داروں کو دو" }, how: { en: "Fulfill rights of kinship, poor, and travelers", ur: "رشتے داری، غریبوں اور مسافروں کے حقوق ادا کرو" }, verse: "30:38" },
      { principle: { en: "Avoid riba", ur: "سود سے بچو" }, how: { en: "Interest brings no blessing; zakat multiplies reward", ur: "سود میں برکت نہیں؛ زکوٰة ثواب بڑھاتی ہے" }, verse: "30:39" },
      { principle: { en: "Reflect on nature", ur: "فطرت میں غور کرو" }, how: { en: "See rain reviving earth as proof of resurrection", ur: "بارش سے زمین کی زندگی کو قیامت کا ثبوت سمجھو" }, verse: "30:50" },
      { principle: { en: "Be grateful in ease", ur: "آسانی میں شکرگزار رہو" }, how: { en: "Don't forget Allah when comfortable - remember Him always", ur: "آرام میں اللہ کو نہ بھولو - ہمیشہ یاد رکھو" }, verse: "30:33-34" },
      { principle: { en: "Stay patient", ur: "صبر رکھو" }, how: { en: "Don't be swayed by those who lack certainty", ur: "بے یقین لوگوں سے متاثر نہ ہو" }, verse: "30:60" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Verified Prophecy", ur: "تصدیق شدہ پیشگوئی کی سورة" },
    insight: { en: "Surah Ar-Rum opens with one of the Quran's most specific and verifiable prophecies. When revealed around 615 CE, the Byzantines (Romans) had just suffered a devastating defeat to the Sassanid Persians near the Dead Sea - which the Quran notes is 'the lowest land' (أَدْنَى الْأَرْضِ), geographically accurate as the Dead Sea region is the lowest point on earth. The prophecy stated Romans would be victorious 'within a few years' (بِضْعِ سِنِينَ - 3-9 years in Arabic). In 622 CE, Emperor Heraclius launched his counter-offensive, and by 627 CE the Byzantines achieved complete victory at the Battle of Nineveh. The surah then pivots to the greater theme: just as Allah's promise about the Romans was fulfilled, so too will His promise of resurrection be fulfilled. The signs in creation - marriage, diversity, rain reviving dead earth - all point to the same truth: Allah's power over creation and His promise of resurrection are equally certain.", ur: "سورة الروم قرآن کی سب سے مخصوص اور قابلِ تصدیق پیشگوئیوں میں سے ایک سے شروع ہوتی ہے۔ جب یہ 615 عیسوی کے قریب نازل ہوئی، رومیوں (بازنطینیوں) کو بحیرہ مردار کے قریب ساسانی فارسیوں سے تباہ کن شکست ہوئی تھی - قرآن اسے 'سب سے نشیبی زمین' (أَدْنَى الْأَرْضِ) کہتا ہے، جو جغرافیائی طور پر درست ہے کیونکہ بحیرہ مردار زمین کا سب سے نشیبی مقام ہے۔ پیشگوئی میں کہا گیا کہ رومی 'چند سالوں میں' (بِضْعِ سِنِينَ - عربی میں 3 سے 9 سال) غالب آئیں گے۔ 622 عیسوی میں شہنشاہ ہرقل نے جوابی حملہ شروع کیا اور 627 عیسوی میں جنگِ نینوا میں مکمل فتح حاصل کی۔ پھر سورة بڑے موضوع کی طرف مڑتی ہے: جس طرح رومیوں کے بارے میں اللہ کا وعدہ پورا ہوا، اسی طرح قیامت کا وعدہ بھی پورا ہو گا۔" }
  },

  historicalContext: {
    note: { en: "This Makki surah was revealed around 615 CE during a period of regional upheaval. The Sassanid Persian Empire had defeated the Byzantine Romans, capturing Jerusalem in 614 CE. Arab pagans mocked Muslims, as they favored the fire-worshipping Persians over the Christian Romans (People of the Book). This surah not only prophesied Roman victory but connected it to the certainty of resurrection - if you doubt the latter, remember how precisely the former was fulfilled. The surah's name 'Ar-Rum' (The Romans) emphasizes this unique historical prophecy.", ur: "یہ مکی سورة تقریباً 615 عیسوی میں علاقائی بحران کے دوران نازل ہوئی۔ ساسانی فارسی سلطنت نے رومیوں کو شکست دے کر 614 عیسوی میں بیت المقدس پر قبضہ کر لیا تھا۔ عرب مشرکوں نے مسلمانوں کا مذاق اڑایا کیونکہ وہ آتش پرست فارسیوں کو عیسائی رومیوں (اہلِ کتاب) پر ترجیح دیتے تھے۔ اس سورة نے نہ صرف رومی فتح کی پیشگوئی کی بلکہ اسے قیامت کی قطعیت سے جوڑا۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "بِضْعِ", example: { en: "Three to nine", ur: "تین سے نو" }, effect: { en: "Specific Arabic term for number between 3-9", ur: "3 سے 9 کے درمیان عدد کی مخصوص عربی اصطلاح" } },
      { feature: "أَدْنَى", example: { en: "Nearest/lowest", ur: "قریب ترین/نشیبی ترین" }, effect: { en: "Double meaning - geographically lowest and militarily nearest", ur: "دوہرا معنی - جغرافیائی طور پر نشیبی ترین اور فوجی طور پر قریب ترین" } },
      { feature: "فِطْرَتَ اللَّهِ", example: { en: "Allah's fitrah", ur: "اللہ کی فطرت" }, effect: { en: "Natural disposition - origin of theological term", ur: "فطری رجحان - کلامی اصطلاح کی ابتدا" } },
      { feature: "مَّوَدَّةً وَرَحْمَةً", example: { en: "Love and mercy", ur: "محبت اور رحمت" }, effect: { en: "Two distinct Arabic concepts for marital bond", ur: "ازدواجی رشتے کے لیے دو مختلف عربی تصورات" } },
      { feature: "الْفَسَادُ", example: { en: "Corruption", ur: "فساد" }, effect: { en: "Encompasses moral, social, and environmental corruption", ur: "اخلاقی، سماجی اور ماحولیاتی فساد سب شامل ہے" } },
      { feature: "مُضْعِفُونَ", example: { en: "Multipliers", ur: "دگنا کرنے والے" }, effect: { en: "Active participle - those who multiply their rewards", ur: "اسمِ فاعل - وہ جو اپنے اجر کو کئی گنا بڑھاتے ہیں" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "30:3", topic: { en: "Lowest land", ur: "سب سے نشیبی زمین" }, note: { en: "Dead Sea area is indeed lowest point on earth's surface", ur: "بحیرہ مردار کا علاقہ واقعی زمین کی سطح کا سب سے نشیبی مقام ہے" } },
      { verse: "30:22", topic: { en: "Diversity", ur: "تنوع" }, note: { en: "Human genetic diversity in colors and languages reflects common origin", ur: "رنگوں اور زبانوں میں انسانی جینیاتی تنوع مشترک اصل کی عکاسی کرتا ہے" } },
      { verse: "30:24", topic: { en: "Lightning", ur: "بجلی" }, note: { en: "Water cycle and electrical discharge in clouds described", ur: "بادلوں میں پانی کے دور اور برقی اخراج کا بیان" } },
      { verse: "30:41", topic: { en: "Corruption", ur: "فساد" }, note: { en: "Environmental degradation from human activity - ecological principle", ur: "انسانی سرگرمی سے ماحولیاتی تباہی - ماحولیاتی اصول" } },
      { verse: "30:48", topic: { en: "Cloud formation", ur: "بادل کی تشکیل" }, note: { en: "Process of cloud formation and rain production accurately depicted", ur: "بادل بننے اور بارش پیدا ہونے کا عمل درست طور پر بیان کیا گیا" } },
      { verse: "30:54", topic: { en: "Life stages", ur: "زندگی کے مراحل" }, note: { en: "Biological progression from infancy through youth to old age", ur: "بچپن سے جوانی اور پھر بڑھاپے تک حیاتیاتی ارتقا" } }
    ]
  }
};

export default ONTOLOGY;
