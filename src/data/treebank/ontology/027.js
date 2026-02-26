/**
 * Surah An-Naml (27) - Ontology of Quranic Concepts
 * The Ant
 * Theme: Prophets and their communities, divine signs, wisdom and knowledge, Sulayman's kingdom
 */

export const ONTOLOGY = {
  surahId: 27,
  surahName: "An-Naml",
  surahNameArabic: "النمل",
  revelationType: "Makki",
  totalAyahs: 93,

  categories: {
    quranIntroduction: {
      name: "Quran Introduction",
      nameUr: "قرآن کا تعارف",
      nameArabic: "مقدمة القرآن",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "طس", meaning: { en: "Ta Sin (disconnected letters)", ur: "طٰسٓ (حروفِ مقطعات)" }, explanation: { en: "Mysterious letters opening the surah", ur: "سورت کے آغاز میں پراسرار حروف" }, verseRef: "27:1" },
        { term: "تِلْكَ آيَاتُ الْقُرْآنِ وَكِتَابٍ مُّبِينٍ", meaning: { en: "These are verses of the Quran and a clear Book", ur: "یہ قرآن اور واضح کتاب کی آیات ہیں" }, explanation: { en: "Dual description emphasizing clarity", ur: "وضاحت پر زور دینے والی دوہری تعریف" }, verseRef: "27:1" },
        { term: "هُدًى وَبُشْرَىٰ لِلْمُؤْمِنِينَ", meaning: { en: "Guidance and glad tidings for believers", ur: "مومنوں کے لیے ہدایت اور خوشخبری" }, explanation: { en: "Quran's dual function for the faithful", ur: "ایمانداروں کے لیے قرآن کا دوہرا کردار" }, verseRef: "27:2" }
      ]
    },

    believersQualities: {
      name: "Qualities of Believers",
      nameUr: "مومنوں کی صفات",
      nameArabic: "صفات المؤمنين",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "يُقِيمُونَ الصَّلَاةَ", meaning: { en: "Establish prayer", ur: "نماز قائم کرنا" }, explanation: { en: "First pillar mentioned", ur: "سب سے پہلا ذکر شدہ رکن" }, verseRef: "27:3" },
        { term: "يُؤْتُونَ الزَّكَاةَ", meaning: { en: "Give zakah", ur: "زکوٰۃ دینا" }, explanation: { en: "Financial worship obligation", ur: "مالی عبادت کی ذمہ داری" }, verseRef: "27:3" },
        { term: "يُوقِنُونَ بِالْآخِرَةِ", meaning: { en: "Certain of the Hereafter", ur: "آخرت پر یقین رکھنا" }, explanation: { en: "Firm faith in afterlife", ur: "آخرت پر پختہ ایمان" }, verseRef: "27:3" }
      ]
    },

    disbelieversState: {
      name: "State of Disbelievers",
      nameUr: "کافروں کی حالت",
      nameArabic: "حال الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "زَيَّنَّا لَهُمْ أَعْمَالَهُمْ", meaning: { en: "We made their deeds pleasing to them", ur: "ہم نے ان کے اعمال ان کی نظر میں مزیّن کر دیے" }, explanation: { en: "Self-deception in misguidance", ur: "گمراہی میں خود فریبی" }, verseRef: "27:4" },
        { term: "فَهُمْ يَعْمَهُونَ", meaning: { en: "So they wander blindly", ur: "تو وہ اندھے ہو کر بھٹکتے ہیں" }, explanation: { en: "Spiritual blindness leads to confusion", ur: "روحانی اندھاپن حیرت کی طرف لے جاتا ہے" }, verseRef: "27:4" },
        { term: "أُولَٰئِكَ الَّذِينَ لَهُمْ سُوءُ الْعَذَابِ", meaning: { en: "Those who will have worst punishment", ur: "وہ جنہیں بدترین عذاب ہوگا" }, explanation: { en: "Consequence of denying afterlife", ur: "آخرت سے انکار کا نتیجہ" }, verseRef: "27:5" }
      ]
    },

    musaStory: {
      name: "Story of Musa",
      nameUr: "قصۂ موسیٰ",
      nameArabic: "قصة موسى",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "إِنِّي آنَسْتُ نَارًا", meaning: { en: "Indeed I perceive a fire", ur: "بے شک میں نے ایک آگ دیکھی ہے" }, explanation: { en: "Musa's first encounter with divine light", ur: "موسیٰ کا الٰہی نور سے پہلا سامنا" }, verseRef: "27:7" },
        { term: "نُودِيَ أَن بُورِكَ مَن فِي النَّارِ", meaning: { en: "Blessed is whoever is at the fire", ur: "مبارک ہے وہ جو آگ کے پاس ہے" }, explanation: { en: "Divine blessing at the burning bush", ur: "جلتی جھاڑی پر الٰہی برکت" }, verseRef: "27:8" },
        { term: "يَا مُوسَىٰ إِنَّهُ أَنَا اللَّهُ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "O Musa, indeed it is I - Allah, the Mighty, the Wise", ur: "اے موسیٰ، بے شک میں ہی اللہ ہوں، غالب، حکمت والا" }, explanation: { en: "Allah's self-introduction to Musa", ur: "اللہ کا موسیٰ سے اپنا تعارف" }, verseRef: "27:9" },
        { term: "أَلْقِ عَصَاكَ", meaning: { en: "Throw your staff", ur: "اپنا عصا پھینکو" }, explanation: { en: "First miracle commanded", ur: "پہلا معجزہ حکم دیا گیا" }, verseRef: "27:10" },
        { term: "وَأَدْخِلْ يَدَكَ فِي جَيْبِكَ", meaning: { en: "Put your hand in your pocket", ur: "اپنا ہاتھ اپنے گریبان میں ڈالو" }, explanation: { en: "Second miracle of the white hand", ur: "سفید ہاتھ کا دوسرا معجزہ" }, verseRef: "27:12" },
        { term: "فِي تِسْعِ آيَاتٍ إِلَىٰ فِرْعَوْنَ", meaning: { en: "Among nine signs to Pharaoh", ur: "فرعون کے لیے نو نشانیوں میں سے" }, explanation: { en: "Nine miracles for Pharaoh's people", ur: "فرعون کی قوم کے لیے نو معجزات" }, verseRef: "27:12" },
        { term: "هَٰذَا سِحْرٌ مُّبِينٌ", meaning: { en: "This is obvious magic", ur: "یہ صریح جادو ہے" }, explanation: { en: "Pharaoh's dismissive response", ur: "فرعون کا رد عمل" }, verseRef: "27:13" },
        { term: "جَحَدُوا بِهَا وَاسْتَيْقَنَتْهَا أَنفُسُهُمْ", meaning: { en: "They rejected while certain of them", ur: "انہوں نے انکار کیا حالانکہ ان کے دلوں نے مان لیا تھا" }, explanation: { en: "Denial despite inner conviction", ur: "باطنی یقین کے باوجود انکار" }, verseRef: "27:14" }
      ]
    },

    sulaymanKingdom: {
      name: "Kingdom of Sulayman",
      nameUr: "سلیمان کی سلطنت",
      nameArabic: "ملك سليمان",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "وَلَقَدْ آتَيْنَا دَاوُودَ وَسُلَيْمَانَ عِلْمًا", meaning: { en: "We gave Dawud and Sulayman knowledge", ur: "ہم نے داؤد اور سلیمان کو علم عطا کیا" }, explanation: { en: "Divine knowledge granted to both", ur: "دونوں کو الٰہی علم عطا ہوا" }, verseRef: "27:15" },
        { term: "الْحَمْدُ لِلَّهِ الَّذِي فَضَّلَنَا", meaning: { en: "Praise to Allah who favored us", ur: "اللہ کا شکر ہے جس نے ہمیں فضیلت دی" }, explanation: { en: "Gratitude for being preferred over many", ur: "بہت سے بندوں پر فضیلت پانے کا شکر" }, verseRef: "27:15" },
        { term: "وَوَرِثَ سُلَيْمَانُ دَاوُودَ", meaning: { en: "Sulayman inherited Dawud", ur: "سلیمان نے داؤد کی وراثت پائی" }, explanation: { en: "Inheritance of prophethood and kingdom", ur: "نبوت اور سلطنت کی وراثت" }, verseRef: "27:16" },
        { term: "عُلِّمْنَا مَنطِقَ الطَّيْرِ", meaning: { en: "We were taught the language of birds", ur: "ہمیں پرندوں کی زبان سکھائی گئی" }, explanation: { en: "Unique gift of understanding bird speech", ur: "پرندوں کی بات سمجھنے کا منفرد عطیہ" }, verseRef: "27:16" },
        { term: "أُوتِينَا مِن كُلِّ شَيْءٍ", meaning: { en: "We were given of all things", ur: "ہمیں ہر چیز دی گئی" }, explanation: { en: "Comprehensive divine provision", ur: "جامع الٰہی عطائے" }, verseRef: "27:16" }
      ]
    },

    sulaymanArmy: {
      name: "Sulayman's Army",
      nameUr: "سلیمان کا لشکر",
      nameArabic: "جنود سليمان",
      color: "#F59E0B",
      icon: "Shield",
      concepts: [
        { term: "حُشِرَ لِسُلَيْمَانَ جُنُودُهُ", meaning: { en: "Gathered for Sulayman were his soldiers", ur: "سلیمان کے لیے ان کے لشکر جمع کیے گئے" }, explanation: { en: "Marshalling of vast forces", ur: "عظیم افواج کی صف بندی" }, verseRef: "27:17" },
        { term: "مِنَ الْجِنِّ وَالْإِنسِ وَالطَّيْرِ", meaning: { en: "Of jinn, humans, and birds", ur: "جنوں، انسانوں اور پرندوں میں سے" }, explanation: { en: "Three types of soldiers", ur: "تین قسم کے سپاہی" }, verseRef: "27:17" },
        { term: "فَهُمْ يُوزَعُونَ", meaning: { en: "They were marshaled in rows", ur: "وہ قطاروں میں منظم کیے گئے" }, explanation: { en: "Military organization and discipline", ur: "فوجی تنظیم اور نظم" }, verseRef: "27:17" }
      ]
    },

    valleyOfAnts: {
      name: "Valley of the Ants",
      nameUr: "چیونٹیوں کی وادی",
      nameArabic: "وادي النمل",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "وَادِ النَّمْلِ", meaning: { en: "Valley of the Ants", ur: "چیونٹیوں کی وادی" }, explanation: { en: "Geographic location named after ants", ur: "چیونٹیوں کے نام سے موسوم جغرافیائی مقام" }, verseRef: "27:18" },
        { term: "يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ", meaning: { en: "O ants, enter your dwellings", ur: "اے چیونٹیو، اپنے بلوں میں داخل ہو جاؤ" }, explanation: { en: "Ant's warning to her colony", ur: "چیونٹی کا اپنی بستی کو خبردار کرنا" }, verseRef: "27:18" },
        { term: "لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ", meaning: { en: "Lest Sulayman and his soldiers crush you", ur: "کہیں سلیمان اور ان کے لشکر تمہیں کچل نہ دیں" }, explanation: { en: "Ant's concern for community survival", ur: "چیونٹی کی اپنی بستی کی بقاء کی فکر" }, verseRef: "27:18" },
        { term: "وَهُمْ لَا يَشْعُرُونَ", meaning: { en: "While they perceive not", ur: "اور انہیں خبر بھی نہ ہو" }, explanation: { en: "Acknowledging they would not intentionally harm", ur: "تسلیم کرنا کہ وہ جان بوجھ کر نقصان نہ پہنچائیں گے" }, verseRef: "27:18" },
        { term: "فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا", meaning: { en: "He smiled laughing at her words", ur: "اس نے اس کی بات پر مسکراتے ہوئے ہنسا" }, explanation: { en: "Sulayman's gentle amusement", ur: "سلیمان کی نرم دلی سے خوشی" }, verseRef: "27:19" }
      ]
    },

    sulaymanPrayer: {
      name: "Sulayman's Prayer",
      nameUr: "سلیمان کی دعا",
      nameArabic: "دعاء سليمان",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ", meaning: { en: "My Lord, enable me to be grateful for Your favor", ur: "اے میرے رب، مجھے توفیق دے کہ میں تیری نعمت کا شکر ادا کروں" }, explanation: { en: "Prayer for gratitude", ur: "شکرگزاری کی دعا" }, verseRef: "27:19" },
        { term: "الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ", meaning: { en: "Which You have bestowed upon me and my parents", ur: "جو تو نے مجھ پر اور میرے والدین پر انعام فرمائی" }, explanation: { en: "Including parents in gratitude", ur: "شکرگزاری میں والدین کو شامل کرنا" }, verseRef: "27:19" },
        { term: "وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ", meaning: { en: "And to do righteousness pleasing to You", ur: "اور یہ کہ میں ایسے نیک عمل کروں جو تجھے پسند ہوں" }, explanation: { en: "Prayer for pleasing deeds", ur: "پسندیدہ اعمال کی دعا" }, verseRef: "27:19" },
        { term: "وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ", meaning: { en: "Admit me by Your mercy among Your righteous servants", ur: "اپنی رحمت سے مجھے اپنے نیک بندوں میں داخل فرما" }, explanation: { en: "Prayer for righteous companionship", ur: "نیک صحبت کی دعا" }, verseRef: "27:19" }
      ]
    },

    hudhudStory: {
      name: "Story of the Hoopoe",
      nameUr: "ہدہد کا قصہ",
      nameArabic: "قصة الهدهد",
      color: "#22C55E",
      icon: "MessageCircle",
      concepts: [
        { term: "وَتَفَقَّدَ الطَّيْرَ", meaning: { en: "He inspected the birds", ur: "اس نے پرندوں کا معائنہ کیا" }, explanation: { en: "Sulayman's attention to detail", ur: "سلیمان کی تفصیل پر توجہ" }, verseRef: "27:20" },
        { term: "مَا لِيَ لَا أَرَى الْهُدْهُدَ", meaning: { en: "Why do I not see the hoopoe?", ur: "مجھے ہدہد کیوں نظر نہیں آتا؟" }, explanation: { en: "Noticing absence of one bird", ur: "ایک پرندے کی غیر حاضری کو نوٹ کرنا" }, verseRef: "27:20" },
        { term: "لَأُعَذِّبَنَّهُ عَذَابًا شَدِيدًا أَوْ لَأَذْبَحَنَّهُ", meaning: { en: "I will punish him severely or slaughter him", ur: "میں اسے سخت سزا دوں گا یا اسے ذبح کروں گا" }, explanation: { en: "Accountability for absence without excuse", ur: "بغیر عذر غیر حاضری پر جوابدہی" }, verseRef: "27:21" },
        { term: "أَوْ لَيَأْتِيَنِّي بِسُلْطَانٍ مُّبِينٍ", meaning: { en: "Unless he brings me clear evidence", ur: "مگر یہ کہ وہ واضح دلیل لائے" }, explanation: { en: "Opportunity for justification", ur: "جواز کا موقع" }, verseRef: "27:21" },
        { term: "أَحَطتُ بِمَا لَمْ تُحِطْ بِهِ", meaning: { en: "I learned what you have not learned", ur: "میں نے وہ جانا جو آپ نے نہیں جانا" }, explanation: { en: "Hoopoe's surprising knowledge", ur: "ہدہد کا حیرت انگیز علم" }, verseRef: "27:22" },
        { term: "جِئْتُكَ مِن سَبَإٍ بِنَبَإٍ يَقِينٍ", meaning: { en: "I have come to you from Sheba with certain news", ur: "میں آپ کے پاس سبا سے یقینی خبر لے کر آیا ہوں" }, explanation: { en: "Important intelligence from Yemen", ur: "یمن سے اہم اطلاعات" }, verseRef: "27:22" }
      ]
    },

    queenOfSheba: {
      name: "Queen of Sheba",
      nameUr: "ملکۂ سبا",
      nameArabic: "ملكة سبأ",
      color: "#EC4899",
      icon: "Crown",
      concepts: [
        { term: "إِنِّي وَجَدتُّ امْرَأَةً تَمْلِكُهُمْ", meaning: { en: "I found a woman ruling them", ur: "میں نے ایک عورت کو ان پر حکومت کرتے پایا" }, explanation: { en: "Female ruler discovered", ur: "خاتون حکمران دریافت ہوئی" }, verseRef: "27:23" },
        { term: "وَأُوتِيَتْ مِن كُلِّ شَيْءٍ", meaning: { en: "And she has been given of all things", ur: "اور اسے ہر چیز دی گئی ہے" }, explanation: { en: "Her wealth and power described", ur: "اس کی دولت اور طاقت کی تفصیل" }, verseRef: "27:23" },
        { term: "وَلَهَا عَرْشٌ عَظِيمٌ", meaning: { en: "And she has a magnificent throne", ur: "اور اس کا ایک عظیم تخت ہے" }, explanation: { en: "Symbol of her royal authority", ur: "اس کی شاہی اقتدار کی علامت" }, verseRef: "27:23" },
        { term: "وَجَدتُّهَا وَقَوْمَهَا يَسْجُدُونَ لِلشَّمْسِ", meaning: { en: "I found her and her people prostrating to the sun", ur: "میں نے اسے اور اس کی قوم کو سورج کو سجدہ کرتے پایا" }, explanation: { en: "Sun worship in Sheba", ur: "سبا میں سورج پرستی" }, verseRef: "27:24" },
        { term: "زَيَّنَ لَهُمُ الشَّيْطَانُ أَعْمَالَهُمْ", meaning: { en: "Satan made their deeds pleasing to them", ur: "شیطان نے ان کے اعمال ان کی نظر میں مزیّن کر دیے" }, explanation: { en: "Satanic beautification of idolatry", ur: "بت پرستی کی شیطانی آرائش" }, verseRef: "27:24" }
      ]
    },

    sulaymanLetter: {
      name: "Sulayman's Letter",
      nameUr: "سلیمان کا خط",
      nameArabic: "كتاب سليمان",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "اذْهَب بِّكِتَابِي هَٰذَا فَأَلْقِهْ إِلَيْهِمْ", meaning: { en: "Take this letter of mine and deliver it to them", ur: "میرا یہ خط لے جاؤ اور ان تک پہنچاؤ" }, explanation: { en: "Diplomatic mission assigned", ur: "سفارتی مشن تفویض کیا گیا" }, verseRef: "27:28" },
        { term: "إِنَّهُ مِن سُلَيْمَانَ", meaning: { en: "Indeed, it is from Sulayman", ur: "بے شک یہ سلیمان کی طرف سے ہے" }, explanation: { en: "Royal identification", ur: "شاہی شناخت" }, verseRef: "27:30" },
        { term: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", meaning: { en: "In the name of Allah, the Most Merciful", ur: "اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے" }, explanation: { en: "Bismillah in the letter", ur: "خط میں بسم اللہ" }, verseRef: "27:30" },
        { term: "أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ", meaning: { en: "Do not be arrogant and come to me in submission", ur: "میرے سامنے سرکشی نہ کرو اور فرمانبردار ہو کر آؤ" }, explanation: { en: "Call to Islam and humility", ur: "اسلام اور عاجزی کی دعوت" }, verseRef: "27:31" }
      ]
    },

    shebaConsultation: {
      name: "Sheba's Consultation",
      nameUr: "ملکۂ سبا کی مشاورت",
      nameArabic: "مشاورة ملكة سبأ",
      color: "#8B5CF6",
      icon: "Users",
      concepts: [
        { term: "قَالَتْ يَا أَيُّهَا الْمَلَأُ أَفْتُونِي فِي أَمْرِي", meaning: { en: "She said: O chiefs, advise me in my affair", ur: "اس نے کہا: اے سرداروں، میرے معاملے میں مشورہ دو" }, explanation: { en: "Queen seeks counsel", ur: "ملکہ مشورہ طلب کرتی ہے" }, verseRef: "27:32" },
        { term: "مَا كُنتُ قَاطِعَةً أَمْرًا حَتَّىٰ تَشْهَدُونِ", meaning: { en: "I would not decide until you witness", ur: "میں فیصلہ نہیں کروں گی جب تک تم میرے سامنے نہ ہو" }, explanation: { en: "Consultative leadership style", ur: "مشاورتی طرزِ قیادت" }, verseRef: "27:32" },
        { term: "نَحْنُ أُولُو قُوَّةٍ وَأُولُو بَأْسٍ شَدِيدٍ", meaning: { en: "We are of great strength and military might", ur: "ہم بڑی طاقت اور جنگی قوت والے ہیں" }, explanation: { en: "Chiefs boast of military power", ur: "سرداروں کا فوجی طاقت پر فخر" }, verseRef: "27:33" },
        { term: "وَالْأَمْرُ إِلَيْكِ فَانظُرِي مَاذَا تَأْمُرِينَ", meaning: { en: "The command is yours, so see what you will command", ur: "حکم آپ کا ہے، دیکھ لیں آپ کیا حکم دیتی ہیں" }, explanation: { en: "Deferring to queen's judgment", ur: "ملکہ کی رائے پر چھوڑنا" }, verseRef: "27:33" },
        { term: "إِنَّ الْمُلُوكَ إِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا", meaning: { en: "Indeed kings, when they enter a city, ruin it", ur: "بے شک بادشاہ جب کسی بستی میں داخل ہوتے ہیں تو اسے تباہ کر دیتے ہیں" }, explanation: { en: "Queen's wisdom about conquering kings", ur: "فاتح بادشاہوں کے بارے میں ملکہ کی حکمت" }, verseRef: "27:34" },
        { term: "وَإِنِّي مُرْسِلَةٌ إِلَيْهِم بِهَدِيَّةٍ", meaning: { en: "And I will send them a gift", ur: "اور میں ان کے پاس ایک تحفہ بھیجوں گی" }, explanation: { en: "Diplomatic approach chosen", ur: "سفارتی طریقہ اختیار کیا" }, verseRef: "27:35" }
      ]
    },

    sulaymanRejectsGift: {
      name: "Sulayman Rejects Gift",
      nameUr: "سلیمان کا تحفہ رد کرنا",
      nameArabic: "رفض سليمان للهدية",
      color: "#F59E0B",
      icon: "Scale",
      concepts: [
        { term: "أَتُمِدُّونَنِ بِمَالٍ", meaning: { en: "Would you provide me with wealth?", ur: "کیا تم مجھے مال سے مدد کرتے ہو؟" }, explanation: { en: "Rejection of material bribery", ur: "مادی رشوت کا رد" }, verseRef: "27:36" },
        { term: "فَمَا آتَانِيَ اللَّهُ خَيْرٌ مِّمَّا آتَاكُم", meaning: { en: "What Allah has given me is better than what He gave you", ur: "جو اللہ نے مجھے دیا ہے وہ اس سے بہتر ہے جو تمہیں دیا" }, explanation: { en: "Divine gifts exceed worldly wealth", ur: "الٰہی عطائے دنیاوی دولت سے بڑھ کر ہیں" }, verseRef: "27:36" },
        { term: "بَلْ أَنتُم بِهَدِيَّتِكُمْ تَفْرَحُونَ", meaning: { en: "Rather you rejoice in your gift", ur: "بلکہ تم اپنے تحفے سے خوش ہوتے ہو" }, explanation: { en: "Worldly people value material things", ur: "دنیادار مادی چیزوں کی قدر کرتے ہیں" }, verseRef: "27:36" },
        { term: "ارْجِعْ إِلَيْهِمْ فَلَنَأْتِيَنَّهُم بِجُنُودٍ", meaning: { en: "Return to them, for we will come with soldiers", ur: "ان کے پاس واپس جاؤ، ہم لشکر لے کر آئیں گے" }, explanation: { en: "Warning of military response", ur: "فوجی جواب کی تنبیہ" }, verseRef: "27:37" }
      ]
    },

    throneTransport: {
      name: "Transport of the Throne",
      nameUr: "تخت کی منتقلی",
      nameArabic: "نقل العرش",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "أَيُّكُمْ يَأْتِينِي بِعَرْشِهَا", meaning: { en: "Which of you will bring me her throne?", ur: "تم میں سے کون اس کا تخت میرے پاس لائے گا؟" }, explanation: { en: "Challenge issued to court", ur: "دربار میں چیلنج دیا" }, verseRef: "27:38" },
        { term: "قَالَ عِفْرِيتٌ مِّنَ الْجِنِّ", meaning: { en: "A powerful one of the jinn said", ur: "جنوں میں سے ایک طاقتور نے کہا" }, explanation: { en: "Jinn offers to bring throne", ur: "جن نے تخت لانے کی پیشکش کی" }, verseRef: "27:39" },
        { term: "أَنَا آتِيكَ بِهِ قَبْلَ أَن تَقُومَ مِن مَّقَامِكَ", meaning: { en: "I will bring it before you rise from your place", ur: "آپ کے اپنی جگہ سے اٹھنے سے پہلے لے آؤں گا" }, explanation: { en: "Jinn's offer of speed", ur: "جن کی تیزرفتاری کی پیشکش" }, verseRef: "27:39" },
        { term: "قَالَ الَّذِي عِندَهُ عِلْمٌ مِّنَ الْكِتَابِ", meaning: { en: "Said one who had knowledge from the Book", ur: "کتاب کا علم رکھنے والے نے کہا" }, explanation: { en: "One with special knowledge", ur: "خاص علم والا شخص" }, verseRef: "27:40" },
        { term: "أَنَا آتِيكَ بِهِ قَبْلَ أَن يَرْتَدَّ إِلَيْكَ طَرْفُكَ", meaning: { en: "I will bring it before your glance returns", ur: "آپ کی پلک جھپکنے سے پہلے لے آؤں گا" }, explanation: { en: "Instantaneous transport", ur: "فوری منتقلی" }, verseRef: "27:40" },
        { term: "هَٰذَا مِن فَضْلِ رَبِّي", meaning: { en: "This is from my Lord's favor", ur: "یہ میرے رب کے فضل سے ہے" }, explanation: { en: "Sulayman attributes miracle to Allah", ur: "سلیمان نے معجزے کو اللہ کی طرف منسوب کیا" }, verseRef: "27:40" },
        { term: "لِيَبْلُوَنِي أَأَشْكُرُ أَمْ أَكْفُرُ", meaning: { en: "To test me whether I will be grateful or ungrateful", ur: "میری آزمائش کے لیے کہ میں شکر کروں گا یا ناشکری" }, explanation: { en: "Recognizing blessings as tests", ur: "نعمتوں کو آزمائش سمجھنا" }, verseRef: "27:40" }
      ]
    },

    queenArrival: {
      name: "Queen's Arrival",
      nameUr: "ملکہ کی آمد",
      nameArabic: "وصول الملكة",
      color: "#EC4899",
      icon: "Eye",
      concepts: [
        { term: "نَكِّرُوا لَهَا عَرْشَهَا", meaning: { en: "Disguise her throne", ur: "اس کے تخت کی شکل بدل دو" }, explanation: { en: "Test of her intelligence", ur: "اس کی ذہانت کی آزمائش" }, verseRef: "27:41" },
        { term: "نَنظُرْ أَتَهْتَدِي أَمْ تَكُونُ مِنَ الَّذِينَ لَا يَهْتَدُونَ", meaning: { en: "We will see if she will be guided or of those who are not guided", ur: "ہم دیکھیں گے آیا وہ سمجھتی ہے یا ان میں سے ہے جو نہیں سمجھتے" }, explanation: { en: "Observing her discernment", ur: "اس کی فراست کا مشاہدہ" }, verseRef: "27:41" },
        { term: "أَهَٰكَذَا عَرْشُكِ", meaning: { en: "Is your throne like this?", ur: "کیا تمہارا تخت ایسا ہے؟" }, explanation: { en: "Question about her throne", ur: "اس کے تخت کے بارے میں سوال" }, verseRef: "27:42" },
        { term: "كَأَنَّهُ هُوَ", meaning: { en: "It is as if it were", ur: "جیسے یہ وہی ہے" }, explanation: { en: "Queen's perceptive response", ur: "ملکہ کا فراستمند جواب" }, verseRef: "27:42" },
        { term: "قِيلَ لَهَا ادْخُلِي الصَّرْحَ", meaning: { en: "She was told, Enter the palace", ur: "اسے کہا گیا، محل میں داخل ہو" }, explanation: { en: "Invitation to crystal palace", ur: "شیشے کے محل میں دعوت" }, verseRef: "27:44" },
        { term: "حَسِبَتْهُ لُجَّةً وَكَشَفَتْ عَن سَاقَيْهَا", meaning: { en: "She thought it was water and uncovered her shins", ur: "اس نے اسے پانی سمجھا اور اپنی پنڈلیاں کھول دیں" }, explanation: { en: "Glass floor illusion", ur: "شیشے کے فرش کا دھوکا" }, verseRef: "27:44" },
        { term: "إِنَّهُ صَرْحٌ مُّمَرَّدٌ مِّن قَوَارِيرَ", meaning: { en: "It is a palace smoothed of glass", ur: "یہ شیشے کا صاف محل ہے" }, explanation: { en: "Explanation of the floor", ur: "فرش کی وضاحت" }, verseRef: "27:44" }
      ]
    },

    queenSubmission: {
      name: "Queen's Submission",
      nameUr: "ملکہ کا اسلام",
      nameArabic: "إسلام الملكة",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي", meaning: { en: "My Lord, I have wronged myself", ur: "اے میرے رب، میں نے اپنے آپ پر ظلم کیا" }, explanation: { en: "Queen's confession", ur: "ملکہ کا اعتراف" }, verseRef: "27:44" },
        { term: "وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ", meaning: { en: "I submit with Sulayman to Allah, Lord of the worlds", ur: "میں سلیمان کے ساتھ اللہ رب العالمین کے حضور سر تسلیم خم کرتی ہوں" }, explanation: { en: "Queen accepts Islam", ur: "ملکہ نے اسلام قبول کیا" }, verseRef: "27:44" }
      ]
    },

    salihStory: {
      name: "Story of Salih",
      nameUr: "قصۂ صالح",
      nameArabic: "قصة صالح",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "أَرْسَلْنَا إِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا", meaning: { en: "We sent to Thamud their brother Salih", ur: "ہم نے ثمود کی طرف ان کے بھائی صالح کو بھیجا" }, explanation: { en: "Prophet sent to his own people", ur: "نبی کو اپنی ہی قوم کی طرف بھیجا گیا" }, verseRef: "27:45" },
        { term: "أَنِ اعْبُدُوا اللَّهَ", meaning: { en: "That worship Allah", ur: "اللہ کی عبادت کرو" }, explanation: { en: "Core prophetic message", ur: "بنیادی نبوی پیغام" }, verseRef: "27:45" },
        { term: "فَإِذَا هُمْ فَرِيقَانِ يَخْتَصِمُونَ", meaning: { en: "Suddenly they were two parties conflicting", ur: "اچانک وہ دو متنازع گروہ بن گئے" }, explanation: { en: "Division among people", ur: "لوگوں میں تفرقہ" }, verseRef: "27:45" },
        { term: "لِمَ تَسْتَعْجِلُونَ بِالسَّيِّئَةِ قَبْلَ الْحَسَنَةِ", meaning: { en: "Why do you hasten evil before good?", ur: "تم برائی کو بھلائی سے پہلے کیوں مانگتے ہو؟" }, explanation: { en: "People demanding punishment", ur: "لوگوں کا عذاب مانگنا" }, verseRef: "27:46" },
        { term: "قَالُوا اطَّيَّرْنَا بِكَ وَبِمَن مَّعَكَ", meaning: { en: "They said: We consider you and your followers bad omens", ur: "انہوں نے کہا: ہم تمہیں اور تمہارے ساتھیوں کو منحوس سمجھتے ہیں" }, explanation: { en: "Blaming prophets for misfortune", ur: "مصائب کا الزام انبیاء پر لگانا" }, verseRef: "27:47" },
        { term: "طَائِرُكُمْ عِندَ اللَّهِ", meaning: { en: "Your omen is with Allah", ur: "تمہاری قسمت اللہ کے پاس ہے" }, explanation: { en: "Fate is with Allah, not omens", ur: "تقدیر اللہ کے پاس ہے، نحوست نہیں" }, verseRef: "27:47" }
      ]
    },

    thamudDestruction: {
      name: "Destruction of Thamud",
      nameUr: "ثمود کی تباہی",
      nameArabic: "هلاك ثمود",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَكَانَ فِي الْمَدِينَةِ تِسْعَةُ رَهْطٍ", meaning: { en: "There were in the city nine family heads", ur: "اس شہر میں نو سرداروں کے گروہ تھے" }, explanation: { en: "Corrupt leaders plotting", ur: "بدعنوان سرداروں کی سازش" }, verseRef: "27:48" },
        { term: "يُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ", meaning: { en: "Who corrupted the land and did not reform", ur: "جو زمین میں فساد پھیلاتے اور اصلاح نہیں کرتے تھے" }, explanation: { en: "Spreading corruption", ur: "فساد پھیلانا" }, verseRef: "27:48" },
        { term: "تَقَاسَمُوا بِاللَّهِ لَنُبَيِّتَنَّهُ وَأَهْلَهُ", meaning: { en: "They swore by Allah to attack him and his family by night", ur: "انہوں نے اللہ کی قسم کھائی کہ رات کو اس پر اور اس کے گھر والوں پر حملہ کریں گے" }, explanation: { en: "Assassination plot", ur: "قتل کی سازش" }, verseRef: "27:49" },
        { term: "وَمَكَرُوا مَكْرًا وَمَكَرْنَا مَكْرًا", meaning: { en: "They planned a plan and We planned a plan", ur: "انہوں نے مکر کیا اور ہم نے بھی تدبیر فرمائی" }, explanation: { en: "Divine counter-plan", ur: "الٰہی جوابی تدبیر" }, verseRef: "27:50" },
        { term: "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ مَكْرِهِمْ", meaning: { en: "See how was the outcome of their plan", ur: "دیکھو ان کی سازش کا انجام کیا ہوا" }, explanation: { en: "Lesson from their fate", ur: "ان کے انجام سے سبق" }, verseRef: "27:51" },
        { term: "أَنَّا دَمَّرْنَاهُمْ وَقَوْمَهُمْ أَجْمَعِينَ", meaning: { en: "We destroyed them and their people all together", ur: "ہم نے انہیں اور ان کی ساری قوم کو تباہ کر دیا" }, explanation: { en: "Complete annihilation", ur: "مکمل تباہی" }, verseRef: "27:51" },
        { term: "فَتِلْكَ بُيُوتُهُمْ خَاوِيَةً بِمَا ظَلَمُوا", meaning: { en: "Those are their houses desolate because they wronged", ur: "یہ ہیں ان کے ویران مکانات کیونکہ انہوں نے ظلم کیا" }, explanation: { en: "Empty ruins as evidence", ur: "خالی کھنڈرات بطور ثبوت" }, verseRef: "27:52" }
      ]
    },

    lutStory: {
      name: "Story of Lut",
      nameUr: "قصۂ لوط",
      nameArabic: "قصة لوط",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ", meaning: { en: "And Lut when he said to his people", ur: "اور لوط جب انہوں نے اپنی قوم سے کہا" }, explanation: { en: "Lut's mission to his people", ur: "لوط کا اپنی قوم کے لیے مشن" }, verseRef: "27:54" },
        { term: "أَتَأْتُونَ الْفَاحِشَةَ وَأَنتُمْ تُبْصِرُونَ", meaning: { en: "Do you commit immorality while you see?", ur: "کیا تم دیکھتے بوجھتے بے حیائی کرتے ہو؟" }, explanation: { en: "Condemning open sin", ur: "کھلے گناہ کی مذمت" }, verseRef: "27:54" },
        { term: "أَئِنَّكُمْ لَتَأْتُونَ الرِّجَالَ شَهْوَةً مِّن دُونِ النِّسَاءِ", meaning: { en: "Do you approach men lustfully instead of women?", ur: "کیا تم عورتوں کو چھوڑ کر مردوں سے شہوت پوری کرتے ہو؟" }, explanation: { en: "Condemning the specific sin", ur: "مخصوص گناہ کی مذمت" }, verseRef: "27:55" },
        { term: "بَلْ أَنتُمْ قَوْمٌ تَجْهَلُونَ", meaning: { en: "Rather you are ignorant people", ur: "بلکہ تم جاہل لوگ ہو" }, explanation: { en: "Ignorance of divine law", ur: "الٰہی قانون سے جہالت" }, verseRef: "27:55" },
        { term: "أَخْرِجُوا آلَ لُوطٍ مِّن قَرْيَتِكُمْ", meaning: { en: "Expel the family of Lut from your city", ur: "لوط کے گھر والوں کو اپنی بستی سے نکال دو" }, explanation: { en: "Persecution for being pure", ur: "پاکدامنی کی وجہ سے ایذارسانی" }, verseRef: "27:56" },
        { term: "إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ", meaning: { en: "They are people who keep themselves pure", ur: "یہ وہ لوگ ہیں جو پاکدامن رہتے ہیں" }, explanation: { en: "Purity seen as offense", ur: "پاکدامنی کو جرم سمجھنا" }, verseRef: "27:56" },
        { term: "فَأَنجَيْنَاهُ وَأَهْلَهُ إِلَّا امْرَأَتَهُ", meaning: { en: "We saved him and his family except his wife", ur: "ہم نے انہیں اور ان کے گھر والوں کو بچایا سوائے ان کی بیوی کے" }, explanation: { en: "Exception of disbelieving wife", ur: "کافر بیوی کا استثناء" }, verseRef: "27:57" },
        { term: "قَدَّرْنَاهَا مِنَ الْغَابِرِينَ", meaning: { en: "We destined her among those who remained", ur: "ہم نے اسے پیچھے رہنے والوں میں مقدر کر دیا" }, explanation: { en: "Wife's fate with the sinners", ur: "بیوی کا گناہگاروں کے ساتھ انجام" }, verseRef: "27:57" },
        { term: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًا", meaning: { en: "And We rained upon them a rain", ur: "اور ہم نے ان پر ایک بارش برسائی" }, explanation: { en: "Rain of destruction", ur: "تباہی کی بارش" }, verseRef: "27:58" },
        { term: "فَسَاءَ مَطَرُ الْمُنذَرِينَ", meaning: { en: "Evil was the rain of those warned", ur: "بری تھی ان تنبیہ کیے گئے لوگوں کی بارش" }, explanation: { en: "Punishment after warning", ur: "تنبیہ کے بعد سزا" }, verseRef: "27:58" }
      ]
    },

    praiseAndGratitude: {
      name: "Praise and Gratitude",
      nameUr: "حمد و شکر",
      nameArabic: "الحمد والشكر",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "قُلِ الْحَمْدُ لِلَّهِ وَسَلَامٌ عَلَىٰ عِبَادِهِ", meaning: { en: "Say: Praise to Allah and peace upon His servants", ur: "کہو: اللہ کا شکر ہے اور اس کے چنے ہوئے بندوں پر سلامتی ہو" }, explanation: { en: "Opening formula of gratitude", ur: "شکرگزاری کا ابتدائی فارمولا" }, verseRef: "27:59" },
        { term: "الَّذِينَ اصْطَفَىٰ", meaning: { en: "Whom He has chosen", ur: "جنہیں اس نے چن لیا" }, explanation: { en: "Peace upon the chosen ones", ur: "چنے ہوئوں پر سلامتی" }, verseRef: "27:59" },
        { term: "آللَّهُ خَيْرٌ أَمَّا يُشْرِكُونَ", meaning: { en: "Is Allah better or what they associate?", ur: "کیا اللہ بہتر ہے یا جنہیں یہ شریک ٹھہراتے ہیں؟" }, explanation: { en: "Rhetorical comparison", ur: "بلاغی موازنہ" }, verseRef: "27:59" }
      ]
    },

    signsInCreation: {
      name: "Signs in Creation",
      nameUr: "تخلیق میں نشانیاں",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "أَمَّنْ خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "Who created the heavens and earth", ur: "جس نے آسمانوں اور زمین کو پیدا کیا" }, explanation: { en: "First creative sign", ur: "تخلیق کی پہلی نشانی" }, verseRef: "27:60" },
        { term: "وَأَنزَلَ لَكُم مِّنَ السَّمَاءِ مَاءً", meaning: { en: "And sent down for you water from the sky", ur: "اور تمہارے لیے آسمان سے پانی برسایا" }, explanation: { en: "Rain blessing", ur: "بارش کی نعمت" }, verseRef: "27:60" },
        { term: "فَأَنبَتْنَا بِهِ حَدَائِقَ ذَاتَ بَهْجَةٍ", meaning: { en: "By which We caused to grow gardens of delight", ur: "جس سے ہم نے خوشنما باغ اگائے" }, explanation: { en: "Gardens from rain", ur: "بارش سے باغات" }, verseRef: "27:60" },
        { term: "أَإِلَٰهٌ مَّعَ اللَّهِ", meaning: { en: "Is there a deity with Allah?", ur: "کیا اللہ کے ساتھ کوئی معبود ہے؟" }, explanation: { en: "Refutation of polytheism", ur: "شرک کی تردید" }, verseRef: "27:60" },
        { term: "أَمَّن جَعَلَ الْأَرْضَ قَرَارًا", meaning: { en: "Who made the earth stable", ur: "جس نے زمین کو قرارگاہ بنایا" }, explanation: { en: "Earth's stability", ur: "زمین کا استحکام" }, verseRef: "27:61" },
        { term: "وَجَعَلَ خِلَالَهَا أَنْهَارًا", meaning: { en: "And made through it rivers", ur: "اور اس میں نہریں بنائیں" }, explanation: { en: "Rivers blessing", ur: "نہروں کی نعمت" }, verseRef: "27:61" },
        { term: "وَجَعَلَ لَهَا رَوَاسِيَ", meaning: { en: "And placed for it mountains", ur: "اور اس میں پہاڑ رکھے" }, explanation: { en: "Mountains as anchors", ur: "پہاڑ بطور لنگر" }, verseRef: "27:61" },
        { term: "وَجَعَلَ بَيْنَ الْبَحْرَيْنِ حَاجِزًا", meaning: { en: "And placed between the two seas a barrier", ur: "اور دو سمندروں کے درمیان حائل رکھا" }, explanation: { en: "Separation of salt and fresh water", ur: "کھارے اور میٹھے پانی کی علیحدگی" }, verseRef: "27:61" }
      ]
    },

    divineResponseToSupplication: {
      name: "Divine Response",
      nameUr: "الٰہی جواب",
      nameArabic: "الاستجابة الإلهية",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "أَمَّن يُجِيبُ الْمُضْطَرَّ إِذَا دَعَاهُ", meaning: { en: "Who responds to the distressed when he calls", ur: "جو مضطر کی پکار سنتا ہے جب وہ پکارے" }, explanation: { en: "Allah answers the desperate", ur: "اللہ بے بس کی دعا قبول کرتا ہے" }, verseRef: "27:62" },
        { term: "وَيَكْشِفُ السُّوءَ", meaning: { en: "And removes the affliction", ur: "اور تکلیف دور کرتا ہے" }, explanation: { en: "Removal of hardship", ur: "مشکل کا ازالہ" }, verseRef: "27:62" },
        { term: "وَيَجْعَلُكُمْ خُلَفَاءَ الْأَرْضِ", meaning: { en: "And makes you successors on earth", ur: "اور تمہیں زمین میں خلیفہ بناتا ہے" }, explanation: { en: "Human stewardship", ur: "انسانی خلافت" }, verseRef: "27:62" },
        { term: "قَلِيلًا مَّا تَذَكَّرُونَ", meaning: { en: "Little do you remember", ur: "بہت کم یاد رکھتے ہو" }, explanation: { en: "Heedlessness despite blessings", ur: "نعمتوں کے باوجود غفلت" }, verseRef: "27:62" }
      ]
    },

    guidanceInDarkness: {
      name: "Guidance in Darkness",
      nameUr: "اندھیروں میں ہدایت",
      nameArabic: "الهداية في الظلمات",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "أَمَّن يَهْدِيكُمْ فِي ظُلُمَاتِ الْبَرِّ وَالْبَحْرِ", meaning: { en: "Who guides you in the darkness of land and sea", ur: "جو تمہیں خشکی اور سمندر کی تاریکیوں میں رہنمائی کرتا ہے" }, explanation: { en: "Divine guidance for travelers", ur: "مسافروں کے لیے الٰہی رہنمائی" }, verseRef: "27:63" },
        { term: "وَمَن يُرْسِلُ الرِّيَاحَ بُشْرًا بَيْنَ يَدَيْ رَحْمَتِهِ", meaning: { en: "Who sends winds as glad tidings before His mercy", ur: "جو اپنی رحمت سے پہلے ہواؤں کو خوشخبری بنا کر بھیجتا ہے" }, explanation: { en: "Winds heralding rain", ur: "بارش کی نوید دینے والی ہوائیں" }, verseRef: "27:63" }
      ]
    },

    creationAndResurrection: {
      name: "Creation and Resurrection",
      nameUr: "تخلیق اور قیامت",
      nameArabic: "الخلق والبعث",
      color: "#06B6D4",
      icon: "Sun",
      concepts: [
        { term: "أَمَّن يَبْدَأُ الْخَلْقَ ثُمَّ يُعِيدُهُ", meaning: { en: "Who originates creation and then repeats it", ur: "جو تخلیق کا آغاز کرتا ہے پھر اسے دہراتا ہے" }, explanation: { en: "Initial creation proves resurrection", ur: "پہلی تخلیق دوبارہ اٹھائے جانے کا ثبوت ہے" }, verseRef: "27:64" },
        { term: "وَمَن يَرْزُقُكُم مِّنَ السَّمَاءِ وَالْأَرْضِ", meaning: { en: "Who provides you from heaven and earth", ur: "جو تمہیں آسمان اور زمین سے رزق دیتا ہے" }, explanation: { en: "Provision from above and below", ur: "اوپر اور نیچے سے رزق" }, verseRef: "27:64" },
        { term: "قُلْ هَاتُوا بُرْهَانَكُمْ إِن كُنتُمْ صَادِقِينَ", meaning: { en: "Say: Bring your proof if you are truthful", ur: "کہو: اگر سچے ہو تو اپنی دلیل لاؤ" }, explanation: { en: "Challenge to polytheists", ur: "مشرکوں کو چیلنج" }, verseRef: "27:64" }
      ]
    },

    unseenKnowledge: {
      name: "Knowledge of the Unseen",
      nameUr: "علمِ غیب",
      nameArabic: "علم الغيب",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "قُل لَّا يَعْلَمُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ الْغَيْبَ إِلَّا اللَّهُ", meaning: { en: "Say: None in heavens and earth knows the unseen except Allah", ur: "کہو: آسمانوں اور زمین میں غیب کوئی نہیں جانتا سوائے اللہ کے" }, explanation: { en: "Exclusive divine knowledge", ur: "اللہ کا خصوصی علم" }, verseRef: "27:65" },
        { term: "وَمَا يَشْعُرُونَ أَيَّانَ يُبْعَثُونَ", meaning: { en: "They do not know when they will be resurrected", ur: "انہیں خبر نہیں کب اٹھائے جائیں گے" }, explanation: { en: "Time of resurrection unknown", ur: "قیامت کا وقت نامعلوم" }, verseRef: "27:65" },
        { term: "بَلِ ادَّارَكَ عِلْمُهُمْ فِي الْآخِرَةِ", meaning: { en: "Rather their knowledge fails regarding the Hereafter", ur: "بلکہ آخرت کے بارے میں ان کا علم ختم ہو گیا" }, explanation: { en: "Human knowledge limited", ur: "انسانی علم محدود" }, verseRef: "27:66" },
        { term: "بَلْ هُمْ فِي شَكٍّ مِّنْهَا", meaning: { en: "Rather they are in doubt about it", ur: "بلکہ وہ اس میں شک میں ہیں" }, explanation: { en: "Doubt about afterlife", ur: "آخرت کے بارے میں شک" }, verseRef: "27:66" },
        { term: "بَلْ هُم مِّنْهَا عَمُونَ", meaning: { en: "Rather they are blind to it", ur: "بلکہ وہ اس سے اندھے ہیں" }, explanation: { en: "Spiritual blindness", ur: "روحانی اندھاپن" }, verseRef: "27:66" }
      ]
    },

    disbelieversDoubts: {
      name: "Disbelievers' Doubts",
      nameUr: "کافروں کے شبہات",
      nameArabic: "شكوك الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَإِذَا كُنَّا تُرَابًا وَآبَاؤُنَا", meaning: { en: "When we become dust and our fathers too", ur: "جب ہم اور ہمارے باپ دادا مٹی ہو جائیں" }, explanation: { en: "Doubting bodily resurrection", ur: "جسمانی دوبارہ اٹھائے جانے میں شک" }, verseRef: "27:67" },
        { term: "أَإِنَّا لَمُخْرَجُونَ", meaning: { en: "Will we be brought out?", ur: "کیا ہم نکالے جائیں گے؟" }, explanation: { en: "Skepticism about being raised", ur: "اٹھائے جانے کے بارے میں شکوک" }, verseRef: "27:67" },
        { term: "لَقَدْ وُعِدْنَا هَٰذَا نَحْنُ وَآبَاؤُنَا", meaning: { en: "We and our fathers were promised this", ur: "ہم سے اور ہمارے باپ دادا سے یہ وعدہ کیا گیا تھا" }, explanation: { en: "Dismissing as old tales", ur: "پرانی کہانیاں کہہ کر رد کرنا" }, verseRef: "27:68" },
        { term: "إِنْ هَٰذَا إِلَّا أَسَاطِيرُ الْأَوَّلِينَ", meaning: { en: "This is nothing but legends of the ancients", ur: "یہ پہلے لوگوں کے افسانوں کے سوا کچھ نہیں" }, explanation: { en: "Calling revelation mythology", ur: "وحی کو افسانہ کہنا" }, verseRef: "27:68" }
      ]
    },

    travelAndReflect: {
      name: "Travel and Reflect",
      nameUr: "سفر کرو اور غور کرو",
      nameArabic: "السير والتأمل",
      color: "#06B6D4",
      icon: "Compass",
      concepts: [
        { term: "قُلْ سِيرُوا فِي الْأَرْضِ", meaning: { en: "Say: Travel through the earth", ur: "کہو: زمین میں چلو پھرو" }, explanation: { en: "Command to learn from history", ur: "تاریخ سے سبق سیکھنے کا حکم" }, verseRef: "27:69" },
        { term: "فَانظُرُوا كَيْفَ كَانَ عَاقِبَةُ الْمُجْرِمِينَ", meaning: { en: "See how was the end of the criminals", ur: "دیکھو مجرموں کا انجام کیسا ہوا" }, explanation: { en: "Learn from destroyed nations", ur: "تباہ شدہ اقوام سے سبق سیکھو" }, verseRef: "27:69" },
        { term: "وَلَا تَحْزَنْ عَلَيْهِمْ", meaning: { en: "Do not grieve over them", ur: "ان پر غم نہ کرو" }, explanation: { en: "Consolation to the Prophet", ur: "نبی ﷺ کو تسلی" }, verseRef: "27:70" },
        { term: "وَلَا تَكُن فِي ضَيْقٍ مِّمَّا يَمْكُرُونَ", meaning: { en: "Do not be distressed by what they plot", ur: "ان کی سازشوں سے تنگ دل نہ ہو" }, explanation: { en: "Reassurance against plotting", ur: "سازشوں کے خلاف اطمینان" }, verseRef: "27:70" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameUr: "یومِ قیامت",
      nameArabic: "يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "وَيَوْمَ يُنفَخُ فِي الصُّورِ", meaning: { en: "And the Day the Horn is blown", ur: "اور جس دن صور پھونکا جائے گا" }, explanation: { en: "Trumpet signaling resurrection", ur: "قیامت کا اعلان کرنے والا صور" }, verseRef: "27:87" },
        { term: "فَفَزِعَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ", meaning: { en: "All in heavens and earth will be terrified", ur: "آسمانوں اور زمین میں جو بھی ہے گھبرا جائے گا" }, explanation: { en: "Universal terror on that Day", ur: "اس دن عالمگیر دہشت" }, verseRef: "27:87" },
        { term: "إِلَّا مَن شَاءَ اللَّهُ", meaning: { en: "Except whom Allah wills", ur: "سوائے جسے اللہ چاہے" }, explanation: { en: "Some exempted from terror", ur: "کچھ دہشت سے مستثنیٰ" }, verseRef: "27:87" },
        { term: "وَكُلٌّ أَتَوْهُ دَاخِرِينَ", meaning: { en: "All will come to Him humbled", ur: "سب اس کے حضور عاجز ہو کر آئیں گے" }, explanation: { en: "Universal humility before Allah", ur: "اللہ کے سامنے عالمگیر عاجزی" }, verseRef: "27:87" },
        { term: "وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً", meaning: { en: "You see the mountains thinking them solid", ur: "تم پہاڑوں کو جمے ہوئے سمجھتے ہو" }, explanation: { en: "Mountains appear stationary", ur: "پہاڑ ساکت نظر آتے ہیں" }, verseRef: "27:88" },
        { term: "وَهِيَ تَمُرُّ مَرَّ السَّحَابِ", meaning: { en: "While they pass like clouds", ur: "حالانکہ وہ بادلوں کی طرح چل رہے ہیں" }, explanation: { en: "Mountains moving like clouds", ur: "پہاڑ بادلوں کی طرح چلتے ہیں" }, verseRef: "27:88" },
        { term: "صُنْعَ اللَّهِ الَّذِي أَتْقَنَ كُلَّ شَيْءٍ", meaning: { en: "Work of Allah who perfected all things", ur: "یہ اللہ کی صنعت ہے جس نے ہر چیز کو مضبوط بنایا" }, explanation: { en: "Divine perfection in all creation", ur: "تمام تخلیق میں الٰہی کمال" }, verseRef: "27:88" }
      ]
    },

    goodAndEvil: {
      name: "Recompense of Good and Evil",
      nameUr: "نیکی اور بدی کا بدلہ",
      nameArabic: "جزاء الخير والشر",
      color: "#8B5CF6",
      icon: "Scale",
      concepts: [
        { term: "مَن جَاءَ بِالْحَسَنَةِ فَلَهُ خَيْرٌ مِّنْهَا", meaning: { en: "Whoever comes with a good deed will have better", ur: "جو نیکی لائے اسے اس سے بہتر ملے گا" }, explanation: { en: "Good deeds multiplied", ur: "نیکیاں کئی گنا بڑھائی جاتی ہیں" }, verseRef: "27:89" },
        { term: "وَهُم مِّن فَزَعٍ يَوْمَئِذٍ آمِنُونَ", meaning: { en: "And they are safe from terror that Day", ur: "اور وہ اس دن خوف سے محفوظ ہیں" }, explanation: { en: "Security for the righteous", ur: "نیکوکاروں کے لیے تحفظ" }, verseRef: "27:89" },
        { term: "وَمَن جَاءَ بِالسَّيِّئَةِ فَكُبَّتْ وُجُوهُهُمْ فِي النَّارِ", meaning: { en: "Whoever comes with evil, their faces cast into Fire", ur: "جو برائی لائے ان کے منہ آگ میں ڈالے جائیں گے" }, explanation: { en: "Punishment for evildoers", ur: "بدکاروں کی سزا" }, verseRef: "27:90" },
        { term: "هَلْ تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ", meaning: { en: "Are you recompensed except for what you used to do?", ur: "کیا تمہیں اس کے سوا بدلہ ملے گا جو تم کرتے تھے؟" }, explanation: { en: "Fair recompense", ur: "منصفانہ بدلہ" }, verseRef: "27:90" }
      ]
    },

    prophetMission: {
      name: "Prophet's Mission",
      nameUr: "نبی ﷺ کا مشن",
      nameArabic: "مهمة النبي",
      color: "#10B981",
      icon: "Book",
      concepts: [
        { term: "إِنَّمَا أُمِرْتُ أَنْ أَعْبُدَ رَبَّ هَٰذِهِ الْبَلْدَةِ", meaning: { en: "I am commanded to worship the Lord of this city", ur: "مجھے حکم ہے کہ اس شہر کے رب کی عبادت کروں" }, explanation: { en: "Prophet's primary duty", ur: "نبی ﷺ کا بنیادی فریضہ" }, verseRef: "27:91" },
        { term: "الَّذِي حَرَّمَهَا", meaning: { en: "Who made it sacred", ur: "جس نے اسے حرمت والا بنایا" }, explanation: { en: "Makkah's sanctity", ur: "مکہ کی حرمت" }, verseRef: "27:91" },
        { term: "وَلَهُ كُلُّ شَيْءٍ", meaning: { en: "To Him belongs all things", ur: "اسی کا سب کچھ ہے" }, explanation: { en: "Allah's absolute ownership", ur: "اللہ کی مطلق ملکیت" }, verseRef: "27:91" },
        { term: "وَأُمِرْتُ أَنْ أَكُونَ مِنَ الْمُسْلِمِينَ", meaning: { en: "And I am commanded to be of those who submit", ur: "اور مجھے حکم ہے کہ مسلمانوں میں سے ہوں" }, explanation: { en: "Prophet among the Muslims", ur: "مسلمانوں میں نبی" }, verseRef: "27:91" },
        { term: "وَأَنْ أَتْلُوَ الْقُرْآنَ", meaning: { en: "And to recite the Quran", ur: "اور قرآن کی تلاوت کروں" }, explanation: { en: "Recitation as mission", ur: "تلاوت بطور مشن" }, verseRef: "27:92" },
        { term: "فَمَنِ اهْتَدَىٰ فَإِنَّمَا يَهْتَدِي لِنَفْسِهِ", meaning: { en: "Whoever is guided is guided for himself", ur: "جو ہدایت پائے وہ اپنے ہی لیے ہدایت پاتا ہے" }, explanation: { en: "Personal responsibility for guidance", ur: "ہدایت کے لیے ذاتی ذمہ داری" }, verseRef: "27:92" },
        { term: "وَمَن ضَلَّ فَقُلْ إِنَّمَا أَنَا مِنَ الْمُنذِرِينَ", meaning: { en: "Whoever strays, say: I am only a warner", ur: "جو بھٹکے، کہو: میں صرف ڈرانے والا ہوں" }, explanation: { en: "Prophet's role as warner only", ur: "نبی ﷺ کا صرف تنبیہ کرنے والے کا کردار" }, verseRef: "27:92" }
      ]
    },

    closingPraise: {
      name: "Closing Praise",
      nameUr: "اختتامی حمد",
      nameArabic: "الختام بالحمد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَقُلِ الْحَمْدُ لِلَّهِ", meaning: { en: "And say: Praise to Allah", ur: "اور کہو: اللہ کا شکر ہے" }, explanation: { en: "Closing with gratitude", ur: "شکرگزاری سے اختتام" }, verseRef: "27:93" },
        { term: "سَيُرِيكُمْ آيَاتِهِ فَتَعْرِفُونَهَا", meaning: { en: "He will show you His signs and you will recognize them", ur: "وہ تمہیں اپنی نشانیاں دکھائے گا اور تم انہیں پہچان لو گے" }, explanation: { en: "Promise of recognizable signs", ur: "پہچانی جانے والی نشانیوں کا وعدہ" }, verseRef: "27:93" },
        { term: "وَمَا رَبُّكَ بِغَافِلٍ عَمَّا تَعْمَلُونَ", meaning: { en: "Your Lord is not unaware of what you do", ur: "تمہارا رب تمہارے اعمال سے بے خبر نہیں" }, explanation: { en: "Divine awareness of all actions", ur: "تمام اعمال سے الٰہی آگاہی" }, verseRef: "27:93" }
      ]
    }
  },

  relationships: [
    { from: "علم داود وسليمان", to: "الحمد لله", type: "response", description: { en: "Knowledge leads to gratitude", ur: "علم شکرگزاری کی طرف لے جاتا ہے" } },
    { from: "منطق الطير", to: "النملة", type: "application", description: { en: "Understanding languages enabled hearing the ant", ur: "زبانوں کی سمجھ نے چیونٹی کی بات سننا ممکن بنایا" } },
    { from: "قول النملة", to: "دعاء سليمان", type: "response", description: { en: "Ant's words inspired prayer for gratitude", ur: "چیونٹی کی بات نے شکرگزاری کی دعا کی تحریک دی" } },
    { from: "عرش بلقيس", to: "نقل العرش", type: "test", description: { en: "Her throne brought to test her intelligence", ur: "اس کا تخت اس کی ذہانت جانچنے کے لیے لایا گیا" } },
    { from: "الصرح الممرد", to: "إسلام بلقيس", type: "result", description: { en: "Glass palace led to her submission", ur: "شیشے کے محل نے اسے ایمان لانے پر مائل کیا" } },
    { from: "مكر ثمود", to: "دمارهم", type: "consequence", description: { en: "Their plotting led to destruction", ur: "ان کی سازش نے تباہی کی طرف لے گیا" } },
    { from: "فاحشة قوم لوط", to: "المطر", type: "punishment", description: { en: "Their sin brought destructive rain", ur: "ان کے گناہ نے تباہ کن بارش لائی" } },
    { from: "آيات الخلق", to: "لا إله مع الله", type: "proof", description: { en: "Creation signs prove monotheism", ur: "تخلیق کی نشانیاں توحید ثابت کرتی ہیں" } },
    { from: "الحسنة", to: "آمنون", type: "reward", description: { en: "Good deeds bring security", ur: "نیک اعمال تحفظ لاتے ہیں" } },
    { from: "السيئة", to: "النار", type: "punishment", description: { en: "Evil deeds lead to Fire", ur: "بُرے اعمال آگ کی طرف لے جاتے ہیں" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Quran and Faith", verses: "27:1-6", description: { en: "Introduction to Quran, believers vs disbelievers", ur: "قرآن کا تعارف، مومنوں بمقابلہ کافروں" } },
      { stage: 2, theme: "Musa's Signs", verses: "27:7-14", description: { en: "Musa receives prophethood and miracles", ur: "موسیٰ کو نبوت اور معجزات ملتے ہیں" } },
      { stage: 3, theme: "Sulayman's Kingdom", verses: "27:15-19", description: { en: "Divine gifts, language of birds, the ant", ur: "الٰہی عطائے، پرندوں کی زبان، چیونٹی" } },
      { stage: 4, theme: "The Hoopoe Mission", verses: "27:20-28", description: { en: "Discovery of Sheba, letter sent", ur: "سبا کی دریافت، خط بھیجا گیا" } },
      { stage: 5, theme: "Queen of Sheba", verses: "27:29-44", description: { en: "Consultation, throne, palace, submission", ur: "مشاورت، تخت، محل، اسلام قبولیت" } },
      { stage: 6, theme: "Salih and Thamud", verses: "27:45-53", description: { en: "Warning, plotting, destruction", ur: "تنبیہ، سازش، تباہی" } },
      { stage: 7, theme: "Lut and His People", verses: "27:54-58", description: { en: "Sin, expulsion, punishment", ur: "گناہ، جلاوطنی، سزا" } },
      { stage: 8, theme: "Signs of Allah", verses: "27:59-66", description: { en: "Creation proofs, Allah alone answers", ur: "تخلیق کے ثبوت، صرف اللہ جواب دیتا ہے" } },
      { stage: 9, theme: "Resurrection Doubt", verses: "27:67-75", description: { en: "Disbelievers' skepticism answered", ur: "کافروں کے شکوک کا جواب" } },
      { stage: 10, theme: "Quran's Role", verses: "27:76-82", description: { en: "Guidance for Bani Isra'il, signs emerge", ur: "بنی اسرائیل کے لیے ہدایت، نشانیاں ظاہر ہوتی ہیں" } },
      { stage: 11, theme: "Day of Judgment", verses: "27:83-90", description: { en: "Gathering, Horn, recompense", ur: "حشر، صور، بدلہ" } },
      { stage: 12, theme: "Prophet's Mission", verses: "27:91-93", description: { en: "Worship, recite, warn, praise", ur: "عبادت، تلاوت، تنبیہ، حمد" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Be grateful for blessings", ur: "نعمتوں کا شکر ادا کرو" }, how: { en: "Like Sulayman, ask Allah to enable gratitude", ur: "سلیمان کی طرح اللہ سے شکرگزاری کی توفیق مانگو" }, verse: "27:19" },
      { principle: { en: "Consult before decisions", ur: "فیصلوں سے پہلے مشورہ کرو" }, how: { en: "Like Queen of Sheba, seek advice from trusted advisors", ur: "ملکہ سبا کی طرح قابل اعتماد مشیروں سے مشورہ لو" }, verse: "27:32" },
      { principle: { en: "Value wisdom over wealth", ur: "دولت پر حکمت کو ترجیح دو" }, how: { en: "Sulayman rejected gifts, valued faith over gold", ur: "سلیمان نے تحائف ٹھکرائے، ایمان کو سونے پر فوقیت دی" }, verse: "27:36" },
      { principle: { en: "Recognize tests in blessings", ur: "نعمتوں میں آزمائش کو پہچانو" }, how: { en: "Every gift is a test of gratitude or ingratitude", ur: "ہر عطیہ شکر یا ناشکری کی آزمائش ہے" }, verse: "27:40" },
      { principle: { en: "Be accountable", ur: "جوابدہ بنو" }, how: { en: "Even a bird must justify absence - maintain discipline", ur: "ایک پرندے کو بھی غیر حاضری کی وجہ بتانی ہوتی ہے - نظم برقرار رکھو" }, verse: "27:21" },
      { principle: { en: "Reflect on destroyed nations", ur: "تباہ شدہ اقوام پر غور کرو" }, how: { en: "Travel and learn from the ruins of past civilizations", ur: "سفر کرو اور پچھلی تہذیبوں کے کھنڈرات سے سبق سیکھو" }, verse: "27:69" },
      { principle: { en: "Trust Allah's knowledge", ur: "اللہ کے علم پر بھروسا رکھو" }, how: { en: "Only Allah knows the unseen - don't pretend certainty", ur: "صرف اللہ غیب جانتا ہے - یقین کا دکھاوا نہ کرو" }, verse: "27:65" },
      { principle: { en: "Do good for yourself", ur: "اپنے لیے نیکی کرو" }, how: { en: "Guidance and misguidance affect only the individual", ur: "ہدایت اور گمراہی صرف فرد کو متاثر کرتی ہے" }, verse: "27:92" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Communication Across Species", ur: "مختلف مخلوقات کے درمیان رابطے کی سورت" },
    insight: { en: "Surah An-Naml is unique in containing the speech of three non-human entities: the ant warning her colony (27:18), the hoopoe reporting intelligence (27:22-26), and the jinn offering service (27:39). This highlights that all of Allah's creation can communicate, worship, and serve divine purposes. The surah's central figure, Sulayman, was granted the gift of understanding this communication - showing that true wisdom includes humility to learn from all of Allah's creatures. The ant's awareness of Sulayman's righteousness ('while they perceive not' - acknowledging he wouldn't harm intentionally) and her concern for community welfare exemplifies leadership qualities. Meanwhile, the Queen of Sheba's journey from sun worship to Islam models the transformation possible when hearts open to truth. The surah teaches that knowledge ('ilm) and wisdom (hikmah) are the true measures of superiority, not power or wealth.", ur: "سورۃ النمل منفرد ہے کیونکہ اس میں تین غیر انسانی مخلوقات کی بات شامل ہے: چیونٹی اپنی بستی کو خبردار کرتی ہے (27:18)، ہدہد اطلاعات دیتا ہے (27:22-26)، اور جن خدمت کی پیشکش کرتا ہے (27:39)۔ یہ ظاہر کرتا ہے کہ اللہ کی تمام مخلوق رابطہ کر سکتی ہے، عبادت کر سکتی ہے اور الٰہی مقاصد کی خدمت کر سکتی ہے۔ سورت کی مرکزی شخصیت سلیمان کو یہ رابطہ سمجھنے کا عطیہ ملا - جو ظاہر کرتا ہے کہ حقیقی حکمت میں اللہ کی تمام مخلوقات سے سیکھنے کی عاجزی شامل ہے۔ چیونٹی کا سلیمان کی نیکی کا ادراک ('انہیں خبر بھی نہ ہو' - تسلیم کرنا کہ وہ جان بوجھ کر نقصان نہ پہنچائیں گے) اور اس کی بستی کی فلاح کی فکر قیادت کی خوبیوں کی مثال ہے۔ دوسری طرف ملکہ سبا کا سورج پرستی سے اسلام تک کا سفر دلوں کے حق کے لیے کھلنے پر ممکن تبدیلی کا نمونہ ہے۔ سورت سکھاتی ہے کہ علم اور حکمت فضیلت کا اصل پیمانہ ہے، نہ کہ طاقت یا دولت۔" }
  },

  historicalContext: {
    note: { en: "This Makki surah was revealed when the Quraysh were challenging the Prophet with demands for miracles. The surah responds by presenting the stories of prophets who received clear signs yet were still rejected. The story of Sulayman and Sheba was known to the Arabs through Jewish and Christian sources, but the Quran presents unique details like the ant's speech and the glass palace. The mention of 'nine family heads' corrupting Thamud (27:48) may reference tribal leadership structures familiar to the Arabs. The surah's emphasis on Allah's exclusive knowledge of the unseen (27:65) counters soothsayers and fortune-tellers prevalent in pre-Islamic Arabia.", ur: "یہ مکی سورت اس وقت نازل ہوئی جب قریش نبی ﷺ سے معجزات کا مطالبہ کر رہے تھے۔ سورت ایسے انبیاء کے قصے پیش کرکے جواب دیتی ہے جنہوں نے واضح نشانیاں حاصل کیں لیکن پھر بھی رد کیے گئے۔ سلیمان اور سبا کا قصہ عربوں کو یہودی اور عیسائی ذرائع سے معلوم تھا، لیکن قرآن منفرد تفصیلات پیش کرتا ہے جیسے چیونٹی کی بات اور شیشے کا محل۔ ثمود میں 'نو سرداروں کے گروہ' (27:48) کا ذکر قبائلی قیادت کے ڈھانچے کی طرف اشارہ کر سکتا ہے جو عربوں سے مانوس تھے۔ سورت کا اللہ کے خصوصی علمِ غیب (27:65) پر زور قبل از اسلام عرب میں رائج نجومیوں اور فال نکالنے والوں کا رد ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "طس", example: "Disconnected letters", effect: { en: "Creates attention and mystery at opening", ur: "آغاز میں توجہ اور اسرار پیدا کرتے ہیں" } },
      { feature: "النَّمْل", example: "The Ant", effect: { en: "Surah named after a humble creature - emphasizing all creation matters", ur: "سورت کا نام ایک حقیر مخلوق سے - تمام مخلوقات کی اہمیت پر زور" } },
      { feature: "تَبَسَّمَ ضَاحِكًا", example: "Smiled laughing", effect: { en: "Two words for joy - ta-bassama (smile) and dahik (laugh) - complete joy", ur: "خوشی کے دو الفاظ - تبسّم (مسکراہٹ) اور ضاحک (ہنسی) - مکمل خوشی" } },
      { feature: "عِفْرِيت", example: "Powerful jinn", effect: { en: "Specific Arabic term for a strong, cunning jinn", ur: "طاقتور، چالاک جن کے لیے مخصوص عربی اصطلاح" } },
      { feature: "صَرْح مُّمَرَّد مِّن قَوَارِيرَ", example: "Palace smoothed of glass", effect: { en: "Alliteration in 'm' sounds creates flowing description", ur: "'م' کی آوازوں کی تکرار روانی سے بھرپور بیان بناتی ہے" } },
      { feature: "أَإِلَٰهٌ مَّعَ اللَّهِ", example: "Is there a deity with Allah?", effect: { en: "Repeated rhetorical question (5 times) building logical argument", ur: "بار بار بلاغی سوال (5 مرتبہ) منطقی دلیل تعمیر کرتا ہے" } },
      { feature: "تَمُرُّ مَرَّ السَّحَابِ", example: "Pass like the passing of clouds", effect: { en: "Cognate accusative for emphasis on movement", ur: "حرکت پر زور دینے کے لیے مفعول مطلق کا استعمال" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "27:18", topic: "Ant communication", note: { en: "Modern science confirms ants communicate through pheromones and sounds", ur: "جدید سائنس تصدیق کرتی ہے کہ چیونٹیاں فیرومونز اور آوازوں سے رابطہ کرتی ہیں" } },
      { verse: "27:61", topic: "Barrier between seas", note: { en: "Fresh and salt water meet but don't mix completely - halocline phenomenon", ur: "میٹھا اور کھارا پانی ملتا ہے لیکن مکمل طور پر نہیں ملتا - ہیلوکلائن مظہر" } },
      { verse: "27:88", topic: "Mountains moving", note: { en: "Earth's tectonic plates cause slow mountain movement - apparent stability, actual motion", ur: "زمین کی ٹیکٹونک پلیٹیں پہاڑوں کی سست حرکت کا سبب - ظاہری استحکام، حقیقی حرکت" } },
      { verse: "27:60", topic: "Gardens from rain", note: { en: "Water cycle described - rain produces vegetation", ur: "پانی کا چکر بیان کیا گیا - بارش سے نباتات پیدا ہوتی ہیں" } },
      { verse: "27:63", topic: "Guidance by stars", note: { en: "Ancient navigation relied on celestial bodies - still used today", ur: "قدیم بحری سفر آسمانی اجرام پر منحصر تھا - آج بھی استعمال ہوتا ہے" } }
    ]
  },

  prophetStories: {
    musa: {
      name: "Musa (Moses)",
      nameArabic: "موسى",
      verseRange: "27:7-14",
      keyPoints: [
        "Sees fire during journey with family",
        "Receives call from Allah at the burning bush",
        "Given two miracles: staff becomes snake, hand becomes white",
        "Sent to Pharaoh with nine signs",
        "Pharaoh dismisses signs as magic",
        "They denied despite inner certainty"
      ]
    },
    sulayman: {
      name: "Sulayman (Solomon)",
      nameArabic: "سليمان",
      verseRange: "27:15-44",
      keyPoints: [
        "Inherited prophethood from Dawud",
        "Given knowledge, language of birds, control over jinn",
        "Commanded vast army of jinn, humans, and birds",
        "Understood the ant's warning",
        "Prayed for ability to be grateful",
        "Tested the Queen of Sheba's intelligence",
        "Demonstrated power through throne transport and glass palace"
      ]
    },
    salih: {
      name: "Salih",
      nameArabic: "صالح",
      verseRange: "27:45-53",
      keyPoints: [
        "Sent to Thamud",
        "People split into two factions",
        "Called them to avoid hastening punishment",
        "Nine corrupt leaders plotted against him",
        "Allah destroyed them and their people",
        "Houses left desolate as warning"
      ]
    },
    lut: {
      name: "Lut (Lot)",
      nameArabic: "لوط",
      verseRange: "27:54-58",
      keyPoints: [
        "Confronted his people's open immorality",
        "People sought to expel him for purity",
        "Saved with family except wife",
        "City destroyed by rain of stones"
      ]
    }
  },

  keyFigures: {
    queenOfSheba: {
      name: "Queen of Sheba (Bilqis)",
      nameArabic: "ملكة سبأ (بلقيس)",
      verseRange: "27:23-44",
      characteristics: [
        "Ruled a mighty kingdom",
        "Had a magnificent throne",
        "Practiced consultative leadership",
        "Showed diplomatic wisdom",
        "Recognized truth when presented",
        "Submitted to Allah with Sulayman"
      ]
    },
    hoopoe: {
      name: "The Hoopoe",
      nameArabic: "الهدهد",
      verseRange: "27:20-28",
      role: "Scout and messenger who discovered Sheba and delivered Sulayman's letter"
    },
    ant: {
      name: "The Ant",
      nameArabic: "النملة",
      verseRange: "27:18",
      role: "Leader who warned her colony of approaching army, showing community awareness"
    }
  }
};

export default ONTOLOGY;
