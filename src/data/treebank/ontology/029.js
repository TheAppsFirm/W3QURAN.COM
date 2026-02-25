/**
 * Surah Al-Ankabut (29) - Ontology of Quranic Concepts
 * The Spider
 * Theme: Trials test faith, spider's web parable, prophets' tests, patience in adversity
 */

export const ONTOLOGY = {
  surahId: 29,
  surahName: "Al-Ankabut",
  surahNameArabic: "العنكبوت",
  revelationType: "Makki",
  totalAyahs: 69,

  categories: {
    trialsAndTests: {
      name: "Trials and Tests of Faith",
      nameArabic: "الفتن والابتلاءات",
      color: "#EF4444",
      icon: "Shield",
      concepts: [
        { term: "أَحَسِبَ النَّاسُ أَن يُتْرَكُوا", meaning: { en: "Do people think they will be left", ur: "کیا لوگ یہ سمجھتے ہیں کہ انہیں چھوڑ دیا جائے گا" }, explanation: { en: "Opening rhetorical question - trials are inevitable", ur: "ابتدائی بیانیہ سوال - آزمائشیں ناگزیر ہیں" }, verseRef: "29:2" },
        { term: "أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ", meaning: { en: "To say 'We believe' without being tested", ur: "یہ کہنے سے کہ ہم ایمان لائے بغیر آزمائے جائیں" }, explanation: { en: "Faith requires proof through trials", ur: "ایمان کو آزمائشوں سے ثابت ہونا ضروری ہے" }, verseRef: "29:2" },
        { term: "فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا", meaning: { en: "Allah will surely know those who are truthful", ur: "اللہ ضرور جان لے گا سچوں کو" }, explanation: { en: "Tests distinguish sincere from false", ur: "آزمائشیں سچے کو جھوٹے سے ممتاز کرتی ہیں" }, verseRef: "29:3" },
        { term: "وَلَيَعْلَمَنَّ الْكَاذِبِينَ", meaning: { en: "And know the liars", ur: "اور جھوٹوں کو بھی جان لے گا" }, explanation: { en: "Trials expose hypocrisy", ur: "آزمائشیں منافقت کو بے نقاب کرتی ہیں" }, verseRef: "29:3" },
        { term: "وَلَنَبْلُوَنَّكُمْ", meaning: { en: "And We will surely test you", ur: "اور ہم تمہیں ضرور آزمائیں گے" }, explanation: { en: "Divine promise of testing believers", ur: "مومنوں کی آزمائش کا الٰہی وعدہ" }, verseRef: "29:2" }
      ]
    },

    spiderParable: {
      name: "The Spider's Web Parable",
      nameArabic: "مثل العنكبوت",
      color: "#8B5CF6",
      icon: "MessageCircle",
      concepts: [
        { term: "مَثَلُ الَّذِينَ اتَّخَذُوا مِن دُونِ اللَّهِ أَوْلِيَاءَ", meaning: { en: "Example of those who take protectors besides Allah", ur: "اللہ کے سوا سرپرست بنانے والوں کی مثال" }, explanation: { en: "False deities provide no real protection", ur: "جھوٹے معبود حقیقی تحفظ فراہم نہیں کرتے" }, verseRef: "29:41" },
        { term: "كَمَثَلِ الْعَنكَبُوتِ", meaning: { en: "Like the example of a spider", ur: "مکڑی کی مثال جیسی" }, explanation: { en: "Iconic parable giving surah its name", ur: "مشہور تمثیل جس سے سورہ کا نام ہے" }, verseRef: "29:41" },
        { term: "اتَّخَذَتْ بَيْتًا", meaning: { en: "That takes a home", ur: "جس نے گھر بنایا" }, explanation: { en: "Spider constructs dwelling for protection", ur: "مکڑی تحفظ کے لیے گھر بناتی ہے" }, verseRef: "29:41" },
        { term: "وَإِنَّ أَوْهَنَ الْبُيُوتِ لَبَيْتُ الْعَنكَبُوتِ", meaning: { en: "And the weakest of homes is the spider's house", ur: "اور سب سے کمزور گھر مکڑی کا گھر ہے" }, explanation: { en: "Flimsy structure - metaphor for false worship", ur: "کمزور ڈھانچہ - جھوٹی عبادت کی تمثیل" }, verseRef: "29:41" },
        { term: "لَوْ كَانُوا يَعْلَمُونَ", meaning: { en: "If only they knew", ur: "اگر وہ جانتے ہوتے" }, explanation: { en: "Ignorance of idolaters about their weakness", ur: "بت پرستوں کی اپنی کمزوری سے لاعلمی" }, verseRef: "29:41" }
      ]
    },

    storyOfNuh: {
      name: "Story of Prophet Nuh",
      nameArabic: "قصة نوح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَلَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ", meaning: { en: "And We sent Nuh to his people", ur: "اور ہم نے نوح کو ان کی قوم کی طرف بھیجا" }, explanation: { en: "950 years of calling to Allah", ur: "950 سال اللہ کی طرف بلانا" }, verseRef: "29:14" },
        { term: "فَلَبِثَ فِيهِمْ أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا", meaning: { en: "He remained among them 1000 years minus 50", ur: "وہ ان میں ایک ہزار سال میں سے پچاس کم رہے" }, explanation: { en: "Longest prophetic mission in history", ur: "تاریخ کا سب سے طویل نبوی مشن" }, verseRef: "29:14" },
        { term: "فَأَخَذَهُمُ الطُّوفَانُ", meaning: { en: "Then the flood seized them", ur: "پھر طوفان نے انہیں پکڑ لیا" }, explanation: { en: "Divine punishment for persistent rejection", ur: "مسلسل انکار پر الٰہی سزا" }, verseRef: "29:14" },
        { term: "وَهُمْ ظَالِمُونَ", meaning: { en: "While they were wrongdoers", ur: "اور وہ ظالم تھے" }, explanation: { en: "Punishment came due to injustice", ur: "سزا ظلم کی وجہ سے آئی" }, verseRef: "29:14" },
        { term: "فَأَنجَيْنَاهُ وَأَصْحَابَ السَّفِينَةِ", meaning: { en: "We saved him and companions of the ship", ur: "ہم نے اسے اور کشتی والوں کو بچا لیا" }, explanation: { en: "Believers rescued from destruction", ur: "مومنوں کو تباہی سے بچایا گیا" }, verseRef: "29:15" }
      ]
    },

    storyOfIbrahim: {
      name: "Story of Prophet Ibrahim",
      nameArabic: "قصة إبراهيم",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَإِبْرَاهِيمَ إِذْ قَالَ لِقَوْمِهِ", meaning: { en: "And Ibrahim when he said to his people", ur: "اور ابراہیم جب انہوں نے اپنی قوم سے کہا" }, explanation: { en: "Ibrahim's confrontation with idolatry", ur: "ابراہیم کا بت پرستی سے مقابلہ" }, verseRef: "29:16" },
        { term: "اعْبُدُوا اللَّهَ وَاتَّقُوهُ", meaning: { en: "Worship Allah and fear Him", ur: "اللہ کی عبادت کرو اور اس سے ڈرو" }, explanation: { en: "Core message of all prophets", ur: "تمام انبیاء کا بنیادی پیغام" }, verseRef: "29:16" },
        { term: "إِنَّمَا تَعْبُدُونَ مِن دُونِ اللَّهِ أَوْثَانًا", meaning: { en: "You only worship idols besides Allah", ur: "تم اللہ کے سوا بتوں کی پوجا کرتے ہو" }, explanation: { en: "Exposing the falsehood of idol worship", ur: "بت پرستی کے جھوٹ کی نقاب کشائی" }, verseRef: "29:17" },
        { term: "وَتَخْلُقُونَ إِفْكًا", meaning: { en: "And you create falsehood", ur: "اور تم جھوٹ گھڑتے ہو" }, explanation: { en: "Idols are human inventions", ur: "بت انسانی ایجاد ہیں" }, verseRef: "29:17" },
        { term: "فَمَا كَانَ جَوَابَ قَوْمِهِ إِلَّا أَن قَالُوا اقْتُلُوهُ أَوْ حَرِّقُوهُ", meaning: { en: "Response was only 'Kill him or burn him'", ur: "ان کی قوم کا جواب صرف یہ تھا 'اسے قتل کرو یا جلا دو'" }, explanation: { en: "Violence as answer to truth", ur: "سچائی کے جواب میں تشدد" }, verseRef: "29:24" },
        { term: "فَأَنجَاهُ اللَّهُ مِنَ النَّارِ", meaning: { en: "But Allah saved him from the fire", ur: "لیکن اللہ نے اسے آگ سے بچا لیا" }, explanation: { en: "Miraculous deliverance from fire", ur: "آگ سے معجزانہ نجات" }, verseRef: "29:24" }
      ]
    },

    storyOfLut: {
      name: "Story of Prophet Lut",
      nameArabic: "قصة لوط",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ", meaning: { en: "And Lut when he said to his people", ur: "اور لوط جب انہوں نے اپنی قوم سے کہا" }, explanation: { en: "Lut confronts his people's immorality", ur: "لوط نے اپنی قوم کی بداخلاقی کا مقابلہ کیا" }, verseRef: "29:28" },
        { term: "إِنَّكُمْ لَتَأْتُونَ الْفَاحِشَةَ", meaning: { en: "You commit immorality", ur: "تم بے حیائی کا ارتکاب کرتے ہو" }, explanation: { en: "Direct condemnation of sin", ur: "گناہ کی براہ راست مذمت" }, verseRef: "29:28" },
        { term: "مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ مِّنَ الْعَالَمِينَ", meaning: { en: "No one preceded you in it from the worlds", ur: "دنیا میں تم سے پہلے کسی نے یہ نہیں کیا" }, explanation: { en: "Unprecedented nature of their sin", ur: "ان کے گناہ کی بے مثال نوعیت" }, verseRef: "29:28" },
        { term: "فَأَنجَيْنَاهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ", meaning: { en: "We saved him and his family except his wife", ur: "ہم نے اسے اور اس کے خاندان کو بچایا سوائے اس کی بیوی کے" }, explanation: { en: "His wife remained with disbelievers", ur: "اس کی بیوی کافروں کے ساتھ رہی" }, verseRef: "29:32-33" }
      ]
    },

    storyOfShuayb: {
      name: "Story of Prophet Shuayb",
      nameArabic: "قصة شعيب",
      color: "#10B981",
      icon: "Scale",
      concepts: [
        { term: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا", meaning: { en: "And to Madyan their brother Shuayb", ur: "اور مدین کی طرف ان کے بھائی شعیب کو" }, explanation: { en: "Shuayb sent to Madyan people", ur: "شعیب مدین والوں کی طرف بھیجے گئے" }, verseRef: "29:36" },
        { term: "اعْبُدُوا اللَّهَ وَارْجُوا الْيَوْمَ الْآخِرَ", meaning: { en: "Worship Allah and expect the Last Day", ur: "اللہ کی عبادت کرو اور آخری دن کی امید رکھو" }, explanation: { en: "Call to monotheism and accountability", ur: "توحید اور جوابدہی کی دعوت" }, verseRef: "29:36" },
        { term: "وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ", meaning: { en: "Do not commit abuse on earth corrupting", ur: "زمین میں فساد نہ پھیلاؤ" }, explanation: { en: "Prohibition of spreading corruption", ur: "فساد پھیلانے کی ممانعت" }, verseRef: "29:36" },
        { term: "فَأَخَذَتْهُمُ الرَّجْفَةُ", meaning: { en: "So the earthquake seized them", ur: "پھر زلزلے نے انہیں پکڑ لیا" }, explanation: { en: "Punishment by earthquake", ur: "زلزلے سے سزا" }, verseRef: "29:37" }
      ]
    },

    destructionOfNations: {
      name: "Destruction of Past Nations",
      nameArabic: "هلاك الأمم السابقة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَعَادًا وَثَمُودَ", meaning: { en: "And Aad and Thamud", ur: "اور عاد اور ثمود" }, explanation: { en: "Ancient Arabian nations destroyed", ur: "قدیم عرب قومیں تباہ ہوئیں" }, verseRef: "29:38" },
        { term: "وَقَد تَّبَيَّنَ لَكُم مِّن مَّسَاكِنِهِمْ", meaning: { en: "Clear to you from their dwellings", ur: "ان کی بستیوں سے تمہیں واضح ہے" }, explanation: { en: "Ruins remain as lessons", ur: "کھنڈرات سبق کے طور پر باقی ہیں" }, verseRef: "29:38" },
        { term: "وَقَارُونَ وَفِرْعَوْنَ وَهَامَانَ", meaning: { en: "And Qarun, Pharaoh and Haman", ur: "اور قارون، فرعون اور ہامان" }, explanation: { en: "Arrogant tyrants of history", ur: "تاریخ کے مغرور ظالم" }, verseRef: "29:39" },
        { term: "فَكُلًّا أَخَذْنَا بِذَنبِهِ", meaning: { en: "Each We seized for his sin", ur: "ہر ایک کو اس کے گناہ کی وجہ سے پکڑا" }, explanation: { en: "Individual accountability for rejection", ur: "انکار پر انفرادی جوابدہی" }, verseRef: "29:40" },
        { term: "فَمِنْهُم مَّنْ أَرْسَلْنَا عَلَيْهِ حَاصِبًا", meaning: { en: "Some We sent upon them a storm of stones", ur: "بعض پر ہم نے پتھروں کا طوفان بھیجا" }, explanation: { en: "Varied punishments for different nations", ur: "مختلف قوموں کے لیے مختلف سزائیں" }, verseRef: "29:40" },
        { term: "وَمِنْهُم مَّنْ أَخَذَتْهُ الصَّيْحَةُ", meaning: { en: "And some were seized by the shriek", ur: "بعض کو چنگھاڑ نے پکڑ لیا" }, explanation: { en: "Destructive sound wave", ur: "تباہ کن آواز کی لہر" }, verseRef: "29:40" },
        { term: "وَمِنْهُم مَّنْ خَسَفْنَا بِهِ الْأَرْضَ", meaning: { en: "And some We made earth swallow", ur: "بعض کو زمین میں دھنسا دیا" }, explanation: { en: "Earth opening up - Qarun", ur: "زمین کا دھنسنا - قارون" }, verseRef: "29:40" },
        { term: "وَمِنْهُم مَّنْ أَغْرَقْنَا", meaning: { en: "And some We drowned", ur: "بعض کو ہم نے غرق کر دیا" }, explanation: { en: "Pharaoh's drowning", ur: "فرعون کا ڈوبنا" }, verseRef: "29:40" }
      ]
    },

    parentalRelations: {
      name: "Duty to Parents",
      nameArabic: "حق الوالدين",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حُسْنًا", meaning: { en: "We enjoined man to treat parents with excellence", ur: "ہم نے انسان کو والدین کے ساتھ حسنِ سلوک کی نصیحت کی" }, explanation: { en: "Divine command for good treatment", ur: "اچھے سلوک کا الٰہی حکم" }, verseRef: "29:8" },
        { term: "وَإِن جَاهَدَاكَ لِتُشْرِكَ بِي", meaning: { en: "If they strive to make you associate with Me", ur: "اگر وہ تم سے زور لگائیں کہ تم میرے ساتھ شرک کرو" }, explanation: { en: "Limits of parental obedience", ur: "والدین کی اطاعت کی حدود" }, verseRef: "29:8" },
        { term: "مَا لَيْسَ لَكَ بِهِ عِلْمٌ", meaning: { en: "That of which you have no knowledge", ur: "جس کا تمہیں علم نہیں" }, explanation: { en: "No obedience in disobedience to Allah", ur: "اللہ کی نافرمانی میں کسی کی اطاعت نہیں" }, verseRef: "29:8" },
        { term: "فَلَا تُطِعْهُمَا", meaning: { en: "Then do not obey them", ur: "تو ان کی اطاعت نہ کرو" }, explanation: { en: "Clear boundary - no shirk even for parents", ur: "واضح حد - والدین کی خاطر بھی شرک نہیں" }, verseRef: "29:8" },
        { term: "إِلَيَّ مَرْجِعُكُمْ", meaning: { en: "To Me is your return", ur: "میری ہی طرف تمہارا لوٹنا ہے" }, explanation: { en: "All will be accountable to Allah", ur: "سب اللہ کو جوابدہ ہوں گے" }, verseRef: "29:8" }
      ]
    },

    hypocrisyExposed: {
      name: "Hypocrisy Exposed",
      nameArabic: "كشف النفاق",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَمِنَ النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ", meaning: { en: "Among people who say 'We believe in Allah'", ur: "لوگوں میں سے جو کہتے ہیں 'ہم اللہ پر ایمان لائے'" }, explanation: { en: "Verbal profession of faith", ur: "زبانی اقرارِ ایمان" }, verseRef: "29:10" },
        { term: "فَإِذَا أُوذِيَ فِي اللَّهِ", meaning: { en: "But if harmed for Allah's cause", ur: "لیکن اگر اللہ کی راہ میں تکلیف ملے" }, explanation: { en: "Test reveals true faith", ur: "آزمائش سچا ایمان ظاہر کرتی ہے" }, verseRef: "29:10" },
        { term: "جَعَلَ فِتْنَةَ النَّاسِ كَعَذَابِ اللَّهِ", meaning: { en: "Makes trial of people like punishment of Allah", ur: "لوگوں کی آزمائش کو اللہ کے عذاب جیسا سمجھ لیا" }, explanation: { en: "Fears people more than Allah", ur: "اللہ سے زیادہ لوگوں سے ڈرتا ہے" }, verseRef: "29:10" },
        { term: "وَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ آمَنُوا", meaning: { en: "Allah will surely know those who believe", ur: "اللہ ضرور جان لے گا ایمان والوں کو" }, explanation: { en: "Divine knowledge of true believers", ur: "سچے مومنوں کا الٰہی علم" }, verseRef: "29:11" },
        { term: "وَلَيَعْلَمَنَّ الْمُنَافِقِينَ", meaning: { en: "And will know the hypocrites", ur: "اور منافقوں کو بھی جان لے گا" }, explanation: { en: "Hypocrites cannot hide from Allah", ur: "منافق اللہ سے نہیں چھپ سکتے" }, verseRef: "29:11" }
      ]
    },

    quranAndRevelation: {
      name: "Quran and Revelation",
      nameArabic: "القرآن والوحي",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَكَذَٰلِكَ أَنزَلْنَا إِلَيْكَ الْكِتَابَ", meaning: { en: "Thus We revealed to you the Book", ur: "اسی طرح ہم نے تم پر کتاب نازل کی" }, explanation: { en: "Quran as divine revelation", ur: "قرآن بطور الٰہی وحی" }, verseRef: "29:47" },
        { term: "فَالَّذِينَ آتَيْنَاهُمُ الْكِتَابَ يُؤْمِنُونَ بِهِ", meaning: { en: "Those We gave the Scripture believe in it", ur: "جنہیں ہم نے کتاب دی وہ اس پر ایمان لاتے ہیں" }, explanation: { en: "True scholars recognize truth", ur: "سچے عالم سچائی پہچانتے ہیں" }, verseRef: "29:47" },
        { term: "وَمَا كُنتَ تَتْلُو مِن قَبْلِهِ مِن كِتَابٍ", meaning: { en: "You did not recite before it any scripture", ur: "اس سے پہلے تم کوئی کتاب نہیں پڑھتے تھے" }, explanation: { en: "Prophet was unlettered - proof of revelation", ur: "نبی اُمّی تھے - وحی کا ثبوت" }, verseRef: "29:48" },
        { term: "وَلَا تَخُطُّهُ بِيَمِينِكَ", meaning: { en: "Nor write it with your right hand", ur: "نہ اپنے دائیں ہاتھ سے لکھتے تھے" }, explanation: { en: "Could not read or write", ur: "پڑھنا لکھنا نہیں جانتے تھے" }, verseRef: "29:48" },
        { term: "إِذًا لَّارْتَابَ الْمُبْطِلُونَ", meaning: { en: "Then falsifiers would have doubted", ur: "تب باطل پرست شک کرتے" }, explanation: { en: "Illiteracy removes doubt of human authorship", ur: "اُمّیت انسانی تصنیف کے شک کو دور کرتی ہے" }, verseRef: "29:48" }
      ]
    },

    divineKnowledge: {
      name: "Allah's Knowledge",
      nameArabic: "علم الله",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "إِنَّ اللَّهَ يَعْلَمُ مَا يَدْعُونَ مِن دُونِهِ", meaning: { en: "Allah knows what they invoke besides Him", ur: "اللہ جانتا ہے وہ اس کے سوا کسے پکارتے ہیں" }, explanation: { en: "Allah knows all false worship", ur: "اللہ تمام جھوٹی عبادت جانتا ہے" }, verseRef: "29:42" },
        { term: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "And He is the Mighty, the Wise", ur: "اور وہ غالب اور حکمت والا ہے" }, explanation: { en: "Power combined with wisdom", ur: "قدرت حکمت کے ساتھ" }, verseRef: "29:42" },
        { term: "بَلْ هُوَ آيَاتٌ بَيِّنَاتٌ فِي صُدُورِ الَّذِينَ أُوتُوا الْعِلْمَ", meaning: { en: "Rather clear signs in breasts of those given knowledge", ur: "بلکہ یہ واضح نشانیاں ہیں ان کے سینوں میں جنہیں علم دیا گیا" }, explanation: { en: "Quran preserved in hearts", ur: "قرآن دلوں میں محفوظ" }, verseRef: "29:49" },
        { term: "وَمَا يَجْحَدُ بِآيَاتِنَا إِلَّا الظَّالِمُونَ", meaning: { en: "None reject Our signs except wrongdoers", ur: "ہماری نشانیوں کا انکار صرف ظالم کرتے ہیں" }, explanation: { en: "Rejection stems from injustice", ur: "انکار ظلم سے پیدا ہوتا ہے" }, verseRef: "29:49" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "أَوَلَمْ يَرَوْا كَيْفَ يُبْدِئُ اللَّهُ الْخَلْقَ", meaning: { en: "Have they not seen how Allah begins creation", ur: "کیا انہوں نے نہیں دیکھا اللہ تخلیق کیسے شروع کرتا ہے" }, explanation: { en: "Creation as proof of Allah", ur: "تخلیق اللہ کا ثبوت" }, verseRef: "29:19" },
        { term: "ثُمَّ يُعِيدُهُ", meaning: { en: "Then He will repeat it", ur: "پھر وہ اسے دوبارہ کرے گا" }, explanation: { en: "Resurrection is like creation - easy for Allah", ur: "قیامت تخلیق جیسی ہے - اللہ پر آسان" }, verseRef: "29:19" },
        { term: "إِنَّ ذَٰلِكَ عَلَى اللَّهِ يَسِيرٌ", meaning: { en: "Indeed that is easy for Allah", ur: "بے شک یہ اللہ پر آسان ہے" }, explanation: { en: "Nothing difficult for Allah", ur: "اللہ پر کچھ مشکل نہیں" }, verseRef: "29:19" },
        { term: "سِيرُوا فِي الْأَرْضِ", meaning: { en: "Travel through the earth", ur: "زمین میں چلو پھرو" }, explanation: { en: "Command to observe and learn", ur: "مشاہدہ اور سیکھنے کا حکم" }, verseRef: "29:20" },
        { term: "فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ", meaning: { en: "And observe how He began creation", ur: "اور دیکھو اس نے تخلیق کیسے شروع کی" }, explanation: { en: "Nature as evidence of Creator", ur: "فطرت خالق کا ثبوت" }, verseRef: "29:20" }
      ]
    },

    prayerAndRemembrance: {
      name: "Prayer and Remembrance",
      nameArabic: "الصلاة والذكر",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "اتْلُ مَا أُوحِيَ إِلَيْكَ مِنَ الْكِتَابِ", meaning: { en: "Recite what has been revealed to you of the Book", ur: "جو کتاب تم پر وحی کی گئی اسے پڑھو" }, explanation: { en: "Command to recite Quran", ur: "قرآن پڑھنے کا حکم" }, verseRef: "29:45" },
        { term: "وَأَقِمِ الصَّلَاةَ", meaning: { en: "And establish prayer", ur: "اور نماز قائم کرو" }, explanation: { en: "Fundamental act of worship", ur: "عبادت کا بنیادی عمل" }, verseRef: "29:45" },
        { term: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ", meaning: { en: "Indeed prayer prohibits immorality and wrongdoing", ur: "بے شک نماز بے حیائی اور برائی سے روکتی ہے" }, explanation: { en: "Prayer's protective effect on behavior", ur: "نماز کا رویے پر حفاظتی اثر" }, verseRef: "29:45" },
        { term: "وَلَذِكْرُ اللَّهِ أَكْبَرُ", meaning: { en: "And remembrance of Allah is greater", ur: "اور اللہ کا ذکر سب سے بڑا ہے" }, explanation: { en: "Dhikr is greatest act of worship", ur: "ذکر عبادت کا سب سے بڑا عمل ہے" }, verseRef: "29:45" },
        { term: "وَاللَّهُ يَعْلَمُ مَا تَصْنَعُونَ", meaning: { en: "And Allah knows what you do", ur: "اور اللہ جانتا ہے جو تم کرتے ہو" }, explanation: { en: "All deeds are known to Allah", ur: "تمام اعمال اللہ کو معلوم ہیں" }, verseRef: "29:45" }
      ]
    },

    debateWithPeopleOfBook: {
      name: "Dialogue with People of the Book",
      nameArabic: "الحوار مع أهل الكتاب",
      color: "#10B981",
      icon: "MessageCircle",
      concepts: [
        { term: "وَلَا تُجَادِلُوا أَهْلَ الْكِتَابِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ", meaning: { en: "Do not argue with People of Book except in best manner", ur: "اہل کتاب سے بحث نہ کرو مگر اچھے طریقے سے" }, explanation: { en: "Beautiful conduct in religious dialogue", ur: "مذہبی مکالمے میں حسنِ سلوک" }, verseRef: "29:46" },
        { term: "إِلَّا الَّذِينَ ظَلَمُوا مِنْهُمْ", meaning: { en: "Except those who do wrong among them", ur: "سوائے ان میں سے جو ظلم کریں" }, explanation: { en: "Exception for oppressors", ur: "ظالموں کے لیے استثنا" }, verseRef: "29:46" },
        { term: "آمَنَّا بِالَّذِي أُنزِلَ إِلَيْنَا وَأُنزِلَ إِلَيْكُمْ", meaning: { en: "We believe in what was revealed to us and to you", ur: "ہم ایمان لاتے ہیں اس پر جو ہم پر نازل ہوا اور جو تم پر نازل ہوا" }, explanation: { en: "Common ground in revelation", ur: "وحی میں مشترکہ بنیاد" }, verseRef: "29:46" },
        { term: "وَإِلَٰهُنَا وَإِلَٰهُكُمْ وَاحِدٌ", meaning: { en: "And our God and your God is one", ur: "اور ہمارا معبود اور تمہارا معبود ایک ہے" }, explanation: { en: "Unity of God across revelations", ur: "وحیوں میں خدا کی وحدانیت" }, verseRef: "29:46" },
        { term: "وَنَحْنُ لَهُ مُسْلِمُونَ", meaning: { en: "And we submit to Him", ur: "اور ہم اس کے فرمانبردار ہیں" }, explanation: { en: "Islam as universal submission", ur: "اسلام بطور عالمگیر سپردگی" }, verseRef: "29:46" }
      ]
    },

    strivingForAllah: {
      name: "Striving for Allah",
      nameArabic: "الجهاد في سبيل الله",
      color: "#F59E0B",
      icon: "Zap",
      concepts: [
        { term: "وَالَّذِينَ جَاهَدُوا فِينَا", meaning: { en: "And those who strive for Us", ur: "اور جنہوں نے ہماری راہ میں جدوجہد کی" }, explanation: { en: "Effort in Allah's cause", ur: "اللہ کی راہ میں کوشش" }, verseRef: "29:69" },
        { term: "لَنَهْدِيَنَّهُمْ سُبُلَنَا", meaning: { en: "We will surely guide them to Our ways", ur: "ہم انہیں ضرور اپنے راستے دکھائیں گے" }, explanation: { en: "Divine guidance for sincere strivers", ur: "مخلص کوشش کرنے والوں کے لیے الٰہی رہنمائی" }, verseRef: "29:69" },
        { term: "وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ", meaning: { en: "And indeed Allah is with the doers of good", ur: "اور بے شک اللہ نیکوکاروں کے ساتھ ہے" }, explanation: { en: "Allah's support for righteous", ur: "نیکوکاروں کے لیے اللہ کی معیت" }, verseRef: "29:69" }
      ]
    },

    worldlyLife: {
      name: "Nature of Worldly Life",
      nameArabic: "حقيقة الحياة الدنيا",
      color: "#EC4899",
      icon: "Globe",
      concepts: [
        { term: "وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ", meaning: { en: "This worldly life is only amusement and diversion", ur: "یہ دنیاوی زندگی صرف کھیل تماشا ہے" }, explanation: { en: "Transient nature of dunya", ur: "دنیا کی عارضی فطرت" }, verseRef: "29:64" },
        { term: "وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ", meaning: { en: "And the home of Hereafter - that is the true life", ur: "اور آخرت کا گھر - وہی اصل زندگی ہے" }, explanation: { en: "Real life is eternal life", ur: "اصل زندگی ابدی زندگی ہے" }, verseRef: "29:64" },
        { term: "لَوْ كَانُوا يَعْلَمُونَ", meaning: { en: "If only they knew", ur: "کاش وہ جانتے" }, explanation: { en: "Ignorance of true priorities", ur: "حقیقی ترجیحات سے لاعلمی" }, verseRef: "29:64" }
      ]
    },

    divineProvision: {
      name: "Divine Provision",
      nameArabic: "الرزق الإلهي",
      color: "#22C55E",
      icon: "Sparkles",
      concepts: [
        { term: "وَكَأَيِّن مِّن دَابَّةٍ لَّا تَحْمِلُ رِزْقَهَا", meaning: { en: "How many creatures carry not their provision", ur: "کتنے جانور ہیں جو اپنا رزق نہیں اٹھاتے" }, explanation: { en: "Creatures trust in Allah's provision", ur: "مخلوق اللہ کے رزق پر بھروسہ کرتی ہے" }, verseRef: "29:60" },
        { term: "اللَّهُ يَرْزُقُهَا وَإِيَّاكُمْ", meaning: { en: "Allah provides for them and for you", ur: "اللہ انہیں بھی رزق دیتا ہے اور تمہیں بھی" }, explanation: { en: "Allah sustains all creation", ur: "اللہ تمام مخلوق کو رزق دیتا ہے" }, verseRef: "29:60" },
        { term: "وَهُوَ السَّمِيعُ الْعَلِيمُ", meaning: { en: "And He is the Hearing, the Knowing", ur: "اور وہ سننے والا جاننے والا ہے" }, explanation: { en: "Allah hears needs and knows all", ur: "اللہ ضرورتیں سنتا ہے اور سب جانتا ہے" }, verseRef: "29:60" }
      ]
    },

    migrationForFaith: {
      name: "Migration for Faith",
      nameArabic: "الهجرة في سبيل الدين",
      color: "#06B6D4",
      icon: "Compass",
      concepts: [
        { term: "يَا عِبَادِيَ الَّذِينَ آمَنُوا", meaning: { en: "O My servants who have believed", ur: "اے میرے ایمان والے بندو" }, explanation: { en: "Direct address to believers", ur: "مومنوں کو براہ راست خطاب" }, verseRef: "29:56" },
        { term: "إِنَّ أَرْضِي وَاسِعَةٌ", meaning: { en: "Indeed My earth is spacious", ur: "بے شک میری زمین وسیع ہے" }, explanation: { en: "Migration permitted when persecuted", ur: "ظلم و ستم کے وقت ہجرت کی اجازت" }, verseRef: "29:56" },
        { term: "فَإِيَّايَ فَاعْبُدُونِ", meaning: { en: "So worship only Me", ur: "پس صرف میری عبادت کرو" }, explanation: { en: "Worship Allah wherever you are", ur: "جہاں بھی ہو اللہ کی عبادت کرو" }, verseRef: "29:56" },
        { term: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ", meaning: { en: "Every soul will taste death", ur: "ہر جان نے موت کا مزہ چکھنا ہے" }, explanation: { en: "Death is universal - migrate if needed", ur: "موت عالمگیر ہے - ضرورت ہو تو ہجرت کرو" }, verseRef: "29:57" },
        { term: "ثُمَّ إِلَيْنَا تُرْجَعُونَ", meaning: { en: "Then to Us you will be returned", ur: "پھر ہماری طرف لوٹائے جاؤ گے" }, explanation: { en: "Final return is to Allah alone", ur: "آخری واپسی صرف اللہ کی طرف ہے" }, verseRef: "29:57" }
      ]
    }
  },

  relationships: [
    { from: "آمَنَّا", to: "يُفْتَنُونَ", type: "requirement", description: { en: "Faith requires testing", ur: "ایمان کو آزمائش ضروری ہے" } },
    { from: "العنكبوت", to: "أوهن البيوت", type: "metaphor", description: { en: "Spider's web symbolizes false protection", ur: "مکڑی کا جالا جھوٹے تحفظ کی علامت" } },
    { from: "نوح", to: "ألف سنة", type: "exemplar", description: { en: "Patience through 950 years of calling", ur: "950 سال دعوت میں صبر" } },
    { from: "إبراهيم/النار", to: "أنجاه الله", type: "rescue", description: { en: "Faith leads to divine rescue", ur: "ایمان الٰہی نجات تک لے جاتا ہے" } },
    { from: "الصلاة", to: "تنهى عن الفحشاء", type: "effect", description: { en: "Prayer prevents evil", ur: "نماز برائی سے روکتی ہے" } },
    { from: "جاهدوا فينا", to: "لنهدينهم", type: "reward", description: { en: "Striving leads to guidance", ur: "جدوجہد ہدایت تک لے جاتی ہے" } },
    { from: "الحياة الدنيا/لهو", to: "الآخرة/الحيوان", type: "contrast", description: { en: "Worldly play vs true eternal life", ur: "دنیاوی کھیل بمقابلہ حقیقی ابدی زندگی" } },
    { from: "لا تحمل رزقها", to: "الله يرزقها", type: "trust", description: { en: "Creatures rely on Allah's provision", ur: "مخلوق اللہ کے رزق پر بھروسہ کرتی ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction to Trials", verses: "29:1-7", description: { en: "Alif Lam Mim; trials distinguish true believers", ur: "الم؛ آزمائشیں سچے مومنوں کو ممتاز کرتی ہیں" } },
      { stage: 2, theme: "Parental Rights and Limits", verses: "29:8-9", description: { en: "Good treatment but no obedience in shirk", ur: "اچھا سلوک لیکن شرک میں اطاعت نہیں" } },
      { stage: 3, theme: "Exposing Hypocrisy", verses: "29:10-13", description: { en: "Those who fear people's trials more than Allah", ur: "جو لوگوں کی آزمائش سے اللہ سے زیادہ ڈرتے ہیں" } },
      { stage: 4, theme: "Story of Nuh", verses: "29:14-15", description: { en: "950 years of patience, flood, ark", ur: "950 سال صبر، طوفان، کشتی" } },
      { stage: 5, theme: "Story of Ibrahim", verses: "29:16-27", description: { en: "Confronting idolatry, saved from fire", ur: "بت پرستی سے مقابلہ، آگ سے نجات" } },
      { stage: 6, theme: "Story of Lut", verses: "29:28-35", description: { en: "Immorality condemned, city destroyed", ur: "بے حیائی کی مذمت، شہر تباہ" } },
      { stage: 7, theme: "Story of Shuayb", verses: "29:36-37", description: { en: "Madyan's corruption, earthquake", ur: "مدین کا فساد، زلزلہ" } },
      { stage: 8, theme: "Destruction of Nations", verses: "29:38-40", description: { en: "Aad, Thamud, Qarun, Pharaoh", ur: "عاد، ثمود، قارون، فرعون" } },
      { stage: 9, theme: "Spider Parable", verses: "29:41-44", description: { en: "Central parable of the surah", ur: "سورہ کی مرکزی تمثیل" } },
      { stage: 10, theme: "Prayer and Scripture", verses: "29:45-49", description: { en: "Prayer's effects, Quran's nature", ur: "نماز کے اثرات، قرآن کی فطرت" } },
      { stage: 11, theme: "Demanding Signs", verses: "29:50-55", description: { en: "Quran is sufficient sign", ur: "قرآن کافی نشانی ہے" } },
      { stage: 12, theme: "Migration and Provision", verses: "29:56-63", description: { en: "Earth is spacious, Allah provides", ur: "زمین وسیع ہے، اللہ رزق دیتا ہے" } },
      { stage: 13, theme: "True Life", verses: "29:64-69", description: { en: "Akhirah is real life, strive for guidance", ur: "آخرت اصل زندگی ہے، ہدایت کے لیے جدوجہد کرو" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Expect trials", how: "Faith will be tested - prepare mentally and spiritually", verse: "29:2-3" },
      { principle: "Set limits with parents", how: "Honor parents but never obey in matters of shirk", verse: "29:8" },
      { principle: "Learn from history", how: "Study destroyed nations - their ruins are lessons", verse: "29:38" },
      { principle: "Avoid false securities", how: "Don't rely on anything weaker than Allah - spider's web analogy", verse: "29:41" },
      { principle: "Establish prayer", how: "Prayer protects from evil - make it consistent", verse: "29:45" },
      { principle: "Debate beautifully", how: "Argue with wisdom and best manners", verse: "29:46" },
      { principle: "Trust Allah's provision", how: "Like creatures without storage, trust in Razzaq", verse: "29:60" },
      { principle: "Migrate if needed", how: "Allah's earth is vast - worship freely", verse: "29:56" },
      { principle: "Strive for guidance", how: "Those who struggle sincerely receive guidance", verse: "29:69" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Spider's Web - A Scientific and Spiritual Masterpiece", ur: "مکڑی کا جالا - سائنسی اور روحانی شاہکار" },
    insight: { en: "This surah uniquely combines prophetic narratives with a powerful scientific metaphor. The spider's web, while structurally impressive for its weight, is functionally one of the weakest shelters - it cannot protect against wind, rain, or predators. Allah uses this precise analogy to describe those who seek protection in false gods: structurally they may seem organized (temples, rituals, traditions), but functionally they provide zero protection against Allah's decree. Modern science confirms: spider silk is strong per weight, but the web structure itself is fragile. The surah's placement of this parable (v.41) at the center, surrounded by stories of prophets who faced trials (Nuh, Ibrahim, Lut, Shuayb), creates a powerful contrast: those who trust Allah survive (Nuh's ark, Ibrahim's fire), while those who trust false gods perish. The closing verses (29:69) promise that sincere striving leads to divine guidance - the antithesis of the spider's web, which catches nothing of value.", ur: "یہ سورہ منفرد طور پر انبیاء کے قصوں کو ایک طاقتور سائنسی تمثیل کے ساتھ جوڑتی ہے۔ مکڑی کا جالا اپنے وزن کے لحاظ سے ساختی طور پر متاثر کن ہونے کے باوجود عملی طور پر سب سے کمزور پناہ گاہوں میں سے ہے - یہ ہوا، بارش یا شکاریوں سے نہیں بچا سکتا۔ اللہ یہ دقیق تشبیہ ان لوگوں کی بیان کرنے کے لیے استعمال کرتا ہے جو جھوٹے معبودوں سے تحفظ ڈھونڈتے ہیں: ساختی طور پر وہ منظم نظر آ سکتے ہیں (مندر، رسومات، روایات)، لیکن عملی طور پر اللہ کے فیصلے کے خلاف صفر تحفظ فراہم کرتے ہیں۔ جدید سائنس تصدیق کرتی ہے: مکڑی کا ریشم وزن کے لحاظ سے مضبوط ہے، لیکن جالے کا ڈھانچہ نازک ہے۔ اس تمثیل کو سورہ کے مرکز (آیت 41) میں رکھنا، انبیاء کے قصوں سے گھرا ہوا (نوح، ابراہیم، لوط، شعیب)، ایک طاقتور تقابل بناتا ہے: جو اللہ پر بھروسہ کرتے ہیں بچ جاتے ہیں (نوح کی کشتی، ابراہیم کی آگ)، جبکہ جو جھوٹے معبودوں پر بھروسہ کرتے ہیں ہلاک ہو جاتے ہیں۔ آخری آیات (29:69) وعدہ کرتی ہیں کہ مخلصانہ جدوجہد الٰہی ہدایت تک لے جاتی ہے - مکڑی کے جالے کا مکمل الٹ، جو کسی قیمتی چیز کو نہیں پکڑتا۔" }
  },

  historicalContext: {
    note: { en: "Surah Al-Ankabut was revealed in the late Makkan period when persecution of Muslims was intense. The opening verses directly address believers facing pressure to renounce Islam. The stories of prophets facing persecution (Ibrahim thrown into fire, Lut's people threatening him) would have resonated deeply with the early Muslims. The permission to migrate (v.56) hints at the coming Hijrah. Some scholars note verses 1-11 may have been revealed in Madinah, addressing hypocrites, while the rest is Makkan. The spider parable was particularly apt for Arabs who observed these fragile webs in their environment. The name 'Al-Ankabut' (The Spider) is unique - no other surah is named after an insect or arachnid.", ur: "سورہ العنکبوت مکی دور کے آخر میں نازل ہوئی جب مسلمانوں پر ظلم شدید تھا۔ ابتدائی آیات براہ راست ان مومنوں سے مخاطب ہیں جو اسلام چھوڑنے کے دباؤ کا سامنا کر رہے تھے۔ ظلم و ستم کا سامنا کرنے والے انبیاء کے قصے (ابراہیم کو آگ میں ڈالنا، لوط کی قوم کی دھمکیاں) ابتدائی مسلمانوں کے دلوں میں گہری گونج پیدا کرتے۔ ہجرت کی اجازت (آیت 56) آنے والی ہجرت کی طرف اشارہ کرتی ہے۔ بعض علماء کے مطابق آیات 1-11 مدینہ میں نازل ہوئی ہوں گی، جو منافقین سے مخاطب ہیں، جبکہ باقی مکی ہے۔ مکڑی کی تمثیل خاص طور پر عربوں کے لیے موزوں تھی جو اپنے ماحول میں یہ نازک جالے دیکھتے تھے۔ 'العنکبوت' (مکڑی) کا نام منفرد ہے - کوئی اور سورہ کسی کیڑے یا مکڑی کے نام پر نہیں ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "أَحَسِبَ", example: { en: "Interrogative hamza + verb", ur: "استفہامیہ ہمزہ + فعل" }, effect: "Rhetorical question implying negative - 'Do they think...? No!'" },
      { feature: "فِتْنَة", example: { en: "Trial/tribulation", ur: "آزمائش/مصیبت" }, effect: "Root ف-ت-ن: gold tested by fire; believers tested by hardship" },
      { feature: "عَنْكَبُوت", example: { en: "Spider", ur: "مکڑی" }, effect: "Unusual word in Quran - appears only here" },
      { feature: "أَوْهَن", example: { en: "Weakest (elative)", ur: "سب سے کمزور (اسمِ تفضیل)" }, effect: "Superlative form - absolutely weakest" },
      { feature: "الْحَيَوَان", example: { en: "The true life", ur: "حقیقی زندگی" }, effect: "Intensive form of حياة - complete, eternal life" },
      { feature: "أَلْفَ سَنَةٍ إِلَّا خَمْسِينَ عَامًا", example: { en: "1000 minus 50", ur: "ہزار سال میں سے پچاس کم" }, effect: "Uses سنة (year) and عام (year) - subtle variation avoiding repetition" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "29:41", topic: "Spider's web", note: "Spider silk is strong per weight but web structure is fragile - accurate description" },
      { verse: "29:19-20", topic: "Creation cycle", note: "Beginning and repeating creation - echoes biological cycles" },
      { verse: "29:60", topic: "Animal provision", note: "Most animals don't store food long-term - rely on ecosystem" },
      { verse: "29:14", topic: "Longevity", note: "950 years - before Flood, different conditions may have allowed longer lifespans" }
    ]
  },

  crossReferences: {
    references: [
      { verse: "29:2-3", relatedTo: "2:214", topic: "Testing of believers" },
      { verse: "29:14-15", relatedTo: "11:25-48, 71:1-28", topic: "Story of Nuh" },
      { verse: "29:16-27", relatedTo: "21:51-70, 37:83-98", topic: "Story of Ibrahim" },
      { verse: "29:28-35", relatedTo: "7:80-84, 11:77-83", topic: "Story of Lut" },
      { verse: "29:41", relatedTo: "16:92", topic: "Weak structures/protection" },
      { verse: "29:45", relatedTo: "20:14", topic: "Establishing prayer" },
      { verse: "29:46", relatedTo: "16:125", topic: "Inviting with wisdom" }
    ]
  }
};

export default ONTOLOGY;
