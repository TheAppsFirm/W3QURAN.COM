/**
 * Surah At-Tur (52) - Ontology of Quranic Concepts
 * The Mount - 49 Ayahs, Makki
 * Theme: Divine oaths, punishment of deniers, Paradise bliss, Prophet's vindication
 */

export const ONTOLOGY = {
  surahId: 52,
  surahName: "At-Tur",
  surahNameArabic: "الطور",
  revelationType: "Makki",
  totalAyahs: 49,
  mainTheme: { en: "Divine Oaths Affirming Judgment and Vindication of the Prophet", ur: "الٰہی قسمیں جو قیامت کی تصدیق اور نبی کی صداقت ثابت کرتی ہیں" },

  categories: {
    divineOaths: {
      name: "The Opening Oaths",
      nameUr: "ابتدائی قسمیں",
      nameArabic: "القسم الإلهي",
      color: "#8B5CF6",
      concepts: [
        { term: "وَالطُّورِ", meaning: { en: "By the Mount", ur: "طور پہاڑ کی قسم" }, explanation: { en: "Mount Sinai where Musa received revelation", ur: "کوہِ سینا جہاں موسیٰ نے وحی پائی" }, verseRef: "52:1" },
        { term: "وَكِتَابٍ مَّسْطُورٍ", meaning: { en: "And a Book inscribed", ur: "اور لکھی ہوئی کتاب کی" }, explanation: { en: "The written scripture (Quran/Preserved Tablet)", ur: "لکھی ہوئی کتاب (قرآن/لوحِ محفوظ)" }, verseRef: "52:2" },
        { term: "فِي رَقٍّ مَّنشُورٍ", meaning: { en: "In parchment spread open", ur: "کھلے ہوئے چرمے میں" }, explanation: { en: "The record unfolded and accessible", ur: "ریکارڈ کھلا اور قابلِ رسائی" }, verseRef: "52:3" },
        { term: "وَالْبَيْتِ الْمَعْمُورِ", meaning: { en: "And the House frequented", ur: "اور آباد گھر کی" }, explanation: { en: "The celestial Ka'bah visited by angels", ur: "آسمانی کعبہ جہاں فرشتے آتے ہیں" }, verseRef: "52:4" },
        { term: "وَالسَّقْفِ الْمَرْفُوعِ", meaning: { en: "And the roof raised high", ur: "اور بلند چھت کی" }, explanation: { en: "The sky/heavens as a canopy", ur: "آسمان بطورِ چھتری" }, verseRef: "52:5" },
        { term: "وَالْبَحْرِ الْمَسْجُورِ", meaning: { en: "And the sea filled with fire", ur: "اور بھڑکائے ہوئے سمندر کی" }, explanation: { en: "The sea set ablaze on Day of Judgment", ur: "سمندر جو قیامت کے دن بھڑکایا جائے گا" }, verseRef: "52:6" }
      ]
    },

    certaintyOfPunishment: {
      name: "Certainty of Punishment",
      nameUr: "عذاب کا یقین",
      nameArabic: "حتمية العذاب",
      color: "#EF4444",
      concepts: [
        { term: "إِنَّ عَذَابَ رَبِّكَ لَوَاقِعٌ", meaning: { en: "Indeed, the punishment of your Lord will occur", ur: "بلاشبہ تمہارے رب کا عذاب ضرور واقع ہوگا" }, explanation: { en: "Subject of the oaths - punishment is certain", ur: "قسموں کا مقصود - عذاب یقینی ہے" }, verseRef: "52:7" },
        { term: "مَّا لَهُ مِن دَافِعٍ", meaning: { en: "Of it there is no preventer", ur: "اسے کوئی ٹالنے والا نہیں" }, explanation: { en: "No one can ward off divine punishment", ur: "کوئی الٰہی عذاب کو نہیں روک سکتا" }, verseRef: "52:8" },
        { term: "يَوْمَ تَمُورُ السَّمَاءُ مَوْرًا", meaning: { en: "On the Day the heaven will sway with motion", ur: "جس دن آسمان زور سے ہلے گا" }, explanation: { en: "Cosmic upheaval at Judgment", ur: "قیامت کے وقت کائناتی ہلچل" }, verseRef: "52:9" },
        { term: "وَتَسِيرُ الْجِبَالُ سَيْرًا", meaning: { en: "And the mountains will pass on departing", ur: "اور پہاڑ چل پڑیں گے" }, explanation: { en: "Mountains will move and crumble", ur: "پہاڑ حرکت کریں گے اور ریزہ ریزہ ہو جائیں گے" }, verseRef: "52:10" }
      ]
    },

    punishmentOfDeniers: {
      name: "Punishment of Deniers",
      nameUr: "جھٹلانے والوں کا عذاب",
      nameArabic: "عذاب المكذبين",
      color: "#F43F5E",
      concepts: [
        { term: "فَوَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ", meaning: { en: "Then woe, that Day, to the deniers", ur: "اس دن جھٹلانے والوں کے لیے ہلاکت ہے" }, explanation: { en: "Declaration of doom for rejecters", ur: "انکار کرنے والوں کے لیے تباہی کا اعلان" }, verseRef: "52:11" },
        { term: "الَّذِينَ هُمْ فِي خَوْضٍ يَلْعَبُونَ", meaning: { en: "Who are in [empty] discourse amusing themselves", ur: "جو بے فائدہ باتوں میں کھیل رہے ہیں" }, explanation: { en: "Those who mock and play with truth", ur: "وہ جو سچائی کا مذاق اڑاتے اور کھیلتے ہیں" }, verseRef: "52:12" },
        { term: "يَوْمَ يُدَعُّونَ إِلَىٰ نَارِ جَهَنَّمَ دَعًّا", meaning: { en: "The Day they are thrust toward the fire of Hell with a [violent] thrust", ur: "جس دن انہیں دھکے دے کر جہنم کی آگ کی طرف لے جایا جائے گا" }, explanation: { en: "Forcefully pushed into Hell", ur: "زبردستی جہنم میں دھکیلے جائیں گے" }, verseRef: "52:13" },
        { term: "هَٰذِهِ النَّارُ الَّتِي كُنتُم بِهَا تُكَذِّبُونَ", meaning: { en: "This is the Fire which you used to deny", ur: "یہ وہ آگ ہے جسے تم جھٹلایا کرتے تھے" }, explanation: { en: "Confronted with what they denied", ur: "جس چیز کا انکار کرتے تھے اس کا سامنا" }, verseRef: "52:14" },
        { term: "أَفَسِحْرٌ هَٰذَا أَمْ أَنتُمْ لَا تُبْصِرُونَ", meaning: { en: "Is this magic, or do you not see?", ur: "کیا یہ جادو ہے یا تمہیں نظر نہیں آتا؟" }, explanation: { en: "Rhetorical rebuke of their denial", ur: "ان کے انکار پر بلاغتی سرزنش" }, verseRef: "52:15" },
        { term: "اصْلَوْهَا فَاصْبِرُوا أَوْ لَا تَصْبِرُوا", meaning: { en: "Burn in it; be patient or impatient", ur: "اس میں جلو؛ صبر کرو یا نہ کرو" }, explanation: { en: "No escape - patience or impatience equal", ur: "کوئی فرار نہیں - صبر یا بے صبری برابر ہے" }, verseRef: "52:16" }
      ]
    },

    paradiseBliss: {
      name: "Paradise and Its Bliss",
      nameUr: "جنت اور اس کی نعمتیں",
      nameArabic: "نعيم الجنة",
      color: "#10B981",
      concepts: [
        { term: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَعِيمٍ", meaning: { en: "Indeed, the righteous will be in gardens and pleasure", ur: "بلاشبہ متقی باغات اور نعمتوں میں ہوں گے" }, explanation: { en: "Transition to rewards for the righteous", ur: "نیک لوگوں کے انعامات کی طرف منتقلی" }, verseRef: "52:17" },
        { term: "فَاكِهِينَ بِمَا آتَاهُمْ رَبُّهُمْ", meaning: { en: "Enjoying what their Lord has given them", ur: "اپنے رب کی دی ہوئی چیزوں سے خوش ہوتے ہوئے" }, explanation: { en: "Delighting in divine gifts", ur: "الٰہی تحائف سے لطف اندوز" }, verseRef: "52:18" },
        { term: "وَوَقَاهُمْ رَبُّهُمْ عَذَابَ الْجَحِيمِ", meaning: { en: "And their Lord protected them from the punishment of Hellfire", ur: "اور ان کے رب نے انہیں جہنم کے عذاب سے بچایا" }, explanation: { en: "Saved from torment", ur: "عذاب سے بچائے گئے" }, verseRef: "52:18" },
        { term: "كُلُوا وَاشْرَبُوا هَنِيئًا", meaning: { en: "Eat and drink in satisfaction", ur: "خوشی سے کھاؤ پیو" }, explanation: { en: "Invitation to partake without worry", ur: "بے فکری سے لطف اندوز ہونے کی دعوت" }, verseRef: "52:19" },
        { term: "مُتَّكِئِينَ عَلَىٰ سُرُرٍ مَّصْفُوفَةٍ", meaning: { en: "Reclining on thrones lined up", ur: "قطار میں لگے تختوں پر ٹیک لگائے" }, explanation: { en: "Luxurious seating in Paradise", ur: "جنت میں پُرتعیش بیٹھک" }, verseRef: "52:20" },
        { term: "وَزَوَّجْنَاهُم بِحُورٍ عِينٍ", meaning: { en: "And We will marry them to fair women with large eyes", ur: "اور ہم ان کا جوڑا بڑی آنکھوں والی حوروں سے ملائیں گے" }, explanation: { en: "Companions in Paradise", ur: "جنت میں ساتھی" }, verseRef: "52:20" }
      ]
    },

    familyReunion: {
      name: "Family Reunion in Paradise",
      nameUr: "جنت میں خاندان کا ملاپ",
      nameArabic: "لحاق الذرية",
      color: "#3B82F6",
      concepts: [
        { term: "وَالَّذِينَ آمَنُوا وَاتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَانٍ", meaning: { en: "And those who believed and whose descendants followed them in faith", ur: "اور جو ایمان لائے اور ان کی اولاد نے ایمان میں ان کی پیروی کی" }, explanation: { en: "Believers and their faithful offspring", ur: "مؤمنین اور ان کی ایماندار اولاد" }, verseRef: "52:21" },
        { term: "أَلْحَقْنَا بِهِمْ ذُرِّيَّتَهُمْ", meaning: { en: "We will join with them their descendants", ur: "ہم ان کی اولاد کو ان سے ملا دیں گے" }, explanation: { en: "Families reunited in Paradise", ur: "جنت میں خاندانوں کا ملاپ" }, verseRef: "52:21" },
        { term: "وَمَا أَلَتْنَاهُم مِّنْ عَمَلِهِم مِّن شَيْءٍ", meaning: { en: "And We will not deprive them of anything of their deeds", ur: "اور ہم ان کے اعمال میں سے کچھ بھی کم نہیں کریں گے" }, explanation: { en: "No reduction in rewards", ur: "انعامات میں کوئی کمی نہیں" }, verseRef: "52:21" },
        { term: "كُلُّ امْرِئٍ بِمَا كَسَبَ رَهِينٌ", meaning: { en: "Every person is pledged for what he has earned", ur: "ہر شخص اپنے اعمال کا گروی ہے" }, explanation: { en: "Individual accountability", ur: "انفرادی جوابدہی" }, verseRef: "52:21" }
      ]
    },

    paradiseContinued: {
      name: "More Delights of Paradise",
      nameUr: "جنت کی مزید نعمتیں",
      nameArabic: "المزيد من النعيم",
      color: "#22C55E",
      concepts: [
        { term: "وَأَمْدَدْنَاهُم بِفَاكِهَةٍ وَلَحْمٍ", meaning: { en: "And We will provide them with fruit and meat", ur: "اور ہم انہیں پھل اور گوشت دیتے رہیں گے" }, explanation: { en: "Abundant food in Paradise", ur: "جنت میں وافر کھانا" }, verseRef: "52:22" },
        { term: "مِّمَّا يَشْتَهُونَ", meaning: { en: "From whatever they desire", ur: "جو بھی ان کا دل چاہے" }, explanation: { en: "Whatever their hearts wish", ur: "جو بھی ان کے دل کی خواہش ہو" }, verseRef: "52:22" },
        { term: "يَتَنَازَعُونَ فِيهَا كَأْسًا", meaning: { en: "They will exchange a cup [of wine]", ur: "وہ اس میں آپس میں جام لیں گے دیں گے" }, explanation: { en: "Sharing drinks in fellowship", ur: "دوستی میں مشروبات بانٹنا" }, verseRef: "52:23" },
        { term: "لَّا لَغْوٌ فِيهَا وَلَا تَأْثِيمٌ", meaning: { en: "No ill speech therein nor any sin", ur: "نہ اس میں بیہودہ بات ہوگی نہ گناہ" }, explanation: { en: "Pure from idle talk and wrongdoing", ur: "فضول باتوں اور گناہ سے پاک" }, verseRef: "52:23" },
        { term: "وَيَطُوفُ عَلَيْهِمْ غِلْمَانٌ لَّهُمْ", meaning: { en: "And there will circulate among them young servants", ur: "اور ان کے خاص غلام ان کے پاس پھریں گے" }, explanation: { en: "Attendants serving the believers", ur: "مؤمنین کی خدمت کرنے والے" }, verseRef: "52:24" },
        { term: "كَأَنَّهُمْ لُؤْلُؤٌ مَّكْنُونٌ", meaning: { en: "As if they were pearls well-protected", ur: "گویا وہ چھپے ہوئے موتی ہیں" }, explanation: { en: "Beautiful like hidden pearls", ur: "چھپے ہوئے موتیوں کی طرح خوبصورت" }, verseRef: "52:24" }
      ]
    },

    dialogueInParadise: {
      name: "Dialogue of Paradise Dwellers",
      nameUr: "اہلِ جنت کا مکالمہ",
      nameArabic: "حوار أهل الجنة",
      color: "#6366F1",
      concepts: [
        { term: "وَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍ يَتَسَاءَلُونَ", meaning: { en: "And they will approach one another, inquiring of each other", ur: "اور وہ ایک دوسرے کی طرف متوجہ ہو کر پوچھیں گے" }, explanation: { en: "Believers conversing together", ur: "مؤمنین آپس میں گفتگو کرتے ہوئے" }, verseRef: "52:25" },
        { term: "إِنَّا كُنَّا قَبْلُ فِي أَهْلِنَا مُشْفِقِينَ", meaning: { en: "Indeed, we were previously among our families fearful", ur: "بلاشبہ ہم پہلے اپنے گھروالوں میں خوفزدہ رہتے تھے" }, explanation: { en: "They feared Allah in worldly life", ur: "وہ دنیاوی زندگی میں اللہ سے ڈرتے تھے" }, verseRef: "52:26" },
        { term: "فَمَنَّ اللَّهُ عَلَيْنَا", meaning: { en: "So Allah conferred favor upon us", ur: "تو اللہ نے ہم پر احسان فرمایا" }, explanation: { en: "Gratitude for divine grace", ur: "الٰہی فضل پر شکرگزاری" }, verseRef: "52:27" },
        { term: "وَوَقَانَا عَذَابَ السَّمُومِ", meaning: { en: "And protected us from the punishment of the Scorching Fire", ur: "اور ہمیں لُو کے عذاب سے بچایا" }, explanation: { en: "Saved from burning wind of Hell", ur: "جہنم کی جلانے والی ہوا سے بچائے گئے" }, verseRef: "52:27" },
        { term: "إِنَّا كُنَّا مِن قَبْلُ نَدْعُوهُ", meaning: { en: "Indeed, we used to call upon Him before", ur: "بلاشبہ ہم پہلے اسے پکارا کرتے تھے" }, explanation: { en: "They supplicated to Allah in life", ur: "وہ زندگی میں اللہ سے دعا کرتے تھے" }, verseRef: "52:28" },
        { term: "إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ", meaning: { en: "Indeed, He is the Beneficent, the Merciful", ur: "بلاشبہ وہی نیکی کرنے والا، رحم فرمانے والا ہے" }, explanation: { en: "Divine attributes of kindness and mercy", ur: "مہربانی اور رحمت کی الٰہی صفات" }, verseRef: "52:28" }
      ]
    },

    prophetVindication: {
      name: "Vindication of the Prophet",
      nameUr: "نبی کی صداقت",
      nameArabic: "تبرئة النبي",
      color: "#F59E0B",
      concepts: [
        { term: "فَذَكِّرْ فَمَا أَنتَ بِنِعْمَتِ رَبِّكَ بِكَاهِنٍ وَلَا مَجْنُونٍ", meaning: { en: "So remind, for you are not, by favor of your Lord, a soothsayer or a madman", ur: "پس نصیحت کرو، تم اپنے رب کے فضل سے نہ کاہن ہو نہ پاگل" }, explanation: { en: "Prophet is neither fortune-teller nor insane", ur: "نبی نہ فال گیر ہے نہ پاگل" }, verseRef: "52:29" },
        { term: "أَمْ يَقُولُونَ شَاعِرٌ", meaning: { en: "Or do they say: A poet", ur: "یا وہ کہتے ہیں: شاعر ہے" }, explanation: { en: "Rejecting accusation of being a poet", ur: "شاعر ہونے کے الزام کی تردید" }, verseRef: "52:30" },
        { term: "نَّتَرَبَّصُ بِهِ رَيْبَ الْمَنُونِ", meaning: { en: "For whom we await a turn of misfortune", ur: "ہم اس کے لیے زمانے کے نشیب و فراز کا انتظار کرتے ہیں" }, explanation: { en: "They wait hoping he will die", ur: "وہ امید رکھتے ہیں کہ وہ مر جائے" }, verseRef: "52:30" },
        { term: "قُلْ تَرَبَّصُوا فَإِنِّي مَعَكُم مِّنَ الْمُتَرَبِّصِينَ", meaning: { en: "Say: Wait, for indeed I am, with you, among those who wait", ur: "کہو: انتظار کرو، میں بھی تمہارے ساتھ انتظار کرنے والوں میں ہوں" }, explanation: { en: "Counter-challenge to wait and see", ur: "انتظار کرو اور دیکھو کا جوابی چیلنج" }, verseRef: "52:31" }
      ]
    },

    refutingAccusations: {
      name: "Refuting Accusations",
      nameUr: "الزامات کی تردید",
      nameArabic: "دحض الاتهامات",
      color: "#EC4899",
      concepts: [
        { term: "أَمْ تَأْمُرُهُمْ أَحْلَامُهُم بِهَٰذَا", meaning: { en: "Or do their minds command them to this?", ur: "کیا ان کی عقلیں انہیں اس کا حکم دیتی ہیں؟" }, explanation: { en: "Is their reasoning so flawed?", ur: "کیا ان کی سوچ اتنی خراب ہے؟" }, verseRef: "52:32" },
        { term: "أَمْ هُمْ قَوْمٌ طَاغُونَ", meaning: { en: "Or are they a transgressing people?", ur: "یا وہ سرکش قوم ہیں؟" }, explanation: { en: "Their rebellion causes denial", ur: "ان کی سرکشی انکار کا سبب ہے" }, verseRef: "52:32" },
        { term: "أَمْ يَقُولُونَ تَقَوَّلَهُ", meaning: { en: "Or do they say: He invented it?", ur: "یا وہ کہتے ہیں: اس نے خود گھڑا؟" }, explanation: { en: "Accusation that he fabricated Quran", ur: "الزام کہ اس نے قرآن خود بنایا" }, verseRef: "52:33" },
        { term: "بَل لَّا يُؤْمِنُونَ", meaning: { en: "Rather, they do not believe", ur: "بلکہ وہ ایمان نہیں لاتے" }, explanation: { en: "Root cause is their disbelief", ur: "اصل وجہ ان کا کفر ہے" }, verseRef: "52:33" },
        { term: "فَلْيَأْتُوا بِحَدِيثٍ مِّثْلِهِ", meaning: { en: "Then let them produce a statement like it", ur: "تو وہ اس جیسی بات لے آئیں" }, explanation: { en: "Challenge to produce similar", ur: "اس جیسا بنانے کا چیلنج" }, verseRef: "52:34" }
      ]
    },

    rhetoricalQuestions: {
      name: "Rhetorical Questions",
      nameUr: "استفہامی سوالات",
      nameArabic: "الأسئلة الإنكارية",
      color: "#8B5CF6",
      concepts: [
        { term: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ", meaning: { en: "Or were they created by nothing?", ur: "کیا وہ بغیر کسی چیز سے پیدا ہو گئے؟" }, explanation: { en: "Did they come from nothing?", ur: "کیا وہ کچھ نہیں سے آ گئے؟" }, verseRef: "52:35" },
        { term: "أَمْ هُمُ الْخَالِقُونَ", meaning: { en: "Or were they the creators [of themselves]?", ur: "یا وہ خود اپنے خالق ہیں؟" }, explanation: { en: "Did they create themselves?", ur: "کیا انہوں نے خود کو پیدا کیا؟" }, verseRef: "52:35" },
        { term: "أَمْ خَلَقُوا السَّمَاوَاتِ وَالْأَرْضَ", meaning: { en: "Or did they create the heavens and the earth?", ur: "یا انہوں نے آسمانوں اور زمین کو پیدا کیا؟" }, explanation: { en: "Did they create the universe?", ur: "کیا انہوں نے کائنات بنائی؟" }, verseRef: "52:36" },
        { term: "بَل لَّا يُوقِنُونَ", meaning: { en: "Rather, they are not certain", ur: "بلکہ انہیں یقین نہیں" }, explanation: { en: "They lack conviction", ur: "ان میں یقین کی کمی ہے" }, verseRef: "52:36" },
        { term: "أَمْ عِندَهُمْ خَزَائِنُ رَبِّكَ", meaning: { en: "Or have they the treasuries of your Lord?", ur: "یا ان کے پاس تمہارے رب کے خزانے ہیں؟" }, explanation: { en: "Do they control divine treasures?", ur: "کیا وہ الٰہی خزانوں پر قابو رکھتے ہیں؟" }, verseRef: "52:37" },
        { term: "أَمْ هُمُ الْمُصَيْطِرُونَ", meaning: { en: "Or are they the controllers?", ur: "یا وہ حاکم ہیں؟" }, explanation: { en: "Do they have authority over affairs?", ur: "کیا انہیں معاملات پر اختیار ہے؟" }, verseRef: "52:37" }
      ]
    },

    moreQuestions: {
      name: "Further Challenges",
      nameUr: "مزید چیلنج",
      nameArabic: "المزيد من التحديات",
      color: "#14B8A6",
      concepts: [
        { term: "أَمْ لَهُمْ سُلَّمٌ يَسْتَمِعُونَ فِيهِ", meaning: { en: "Or have they a stairway [into heaven] upon which they listen?", ur: "یا ان کے پاس کوئی سیڑھی ہے جس پر چڑھ کر سنتے ہیں؟" }, explanation: { en: "Do they have access to divine knowledge?", ur: "کیا انہیں الٰہی علم تک رسائی ہے؟" }, verseRef: "52:38" },
        { term: "فَلْيَأْتِ مُسْتَمِعُهُم بِسُلْطَانٍ مُّبِينٍ", meaning: { en: "Then let their listener produce a clear authority", ur: "تو ان کا سننے والا واضح دلیل لے آئے" }, explanation: { en: "Challenge to bring proof", ur: "ثبوت لانے کا چیلنج" }, verseRef: "52:38" },
        { term: "أَمْ لَهُ الْبَنَاتُ وَلَكُمُ الْبَنُونَ", meaning: { en: "Or has He daughters while you have sons?", ur: "کیا اس کی بیٹیاں ہیں اور تمہارے بیٹے؟" }, explanation: { en: "Refuting their attribution of daughters to Allah", ur: "اللہ کو بیٹیاں منسوب کرنے کی تردید" }, verseRef: "52:39" },
        { term: "أَمْ تَسْأَلُهُمْ أَجْرًا فَهُم مِّن مَّغْرَمٍ مُّثْقَلُونَ", meaning: { en: "Or do you ask them a payment so they are burdened with debt?", ur: "کیا تم ان سے اجرت مانگتے ہو کہ وہ قرض تلے دبے ہیں؟" }, explanation: { en: "Prophet asks no payment", ur: "نبی کوئی اجرت نہیں مانگتے" }, verseRef: "52:40" },
        { term: "أَمْ عِندَهُمُ الْغَيْبُ فَهُمْ يَكْتُبُونَ", meaning: { en: "Or have they [knowledge of] the unseen, so they write?", ur: "یا ان کے پاس غیب کا علم ہے تو وہ لکھتے ہیں؟" }, explanation: { en: "Do they know the hidden?", ur: "کیا وہ پوشیدہ جانتے ہیں؟" }, verseRef: "52:41" }
      ]
    },

    plottersExposed: {
      name: "Plotters Exposed",
      nameUr: "سازشیوں کا پردہ فاش",
      nameArabic: "فضح المتآمرين",
      color: "#EF4444",
      concepts: [
        { term: "أَمْ يُرِيدُونَ كَيْدًا", meaning: { en: "Or do they intend a plan?", ur: "یا وہ کوئی چال چلنا چاہتے ہیں؟" }, explanation: { en: "They scheme against the Prophet", ur: "وہ نبی کے خلاف سازش کرتے ہیں" }, verseRef: "52:42" },
        { term: "فَالَّذِينَ كَفَرُوا هُمُ الْمَكِيدُونَ", meaning: { en: "But those who disbelieve - they are the object of a plan", ur: "لیکن کافر ہی ہیں جن کے خلاف چال چلی جائے گی" }, explanation: { en: "Their plot turns against them", ur: "ان کی سازش ان کے خلاف الٹ جاتی ہے" }, verseRef: "52:42" },
        { term: "أَمْ لَهُمْ إِلَٰهٌ غَيْرُ اللَّهِ", meaning: { en: "Or have they a deity other than Allah?", ur: "یا ان کا اللہ کے سوا کوئی معبود ہے؟" }, explanation: { en: "Rhetorical - there is no other god", ur: "استفہامیہ - کوئی دوسرا معبود نہیں" }, verseRef: "52:43" },
        { term: "سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ", meaning: { en: "Exalted is Allah above whatever they associate", ur: "اللہ پاک ہے اس سے جو وہ شرک کرتے ہیں" }, explanation: { en: "Allah is far above their shirk", ur: "اللہ ان کے شرک سے بالا تر ہے" }, verseRef: "52:43" }
      ]
    },

    stubborness: {
      name: "Stubbornness of Deniers",
      nameUr: "منکروں کی ہٹ دھرمی",
      nameArabic: "عناد المكذبين",
      color: "#F97316",
      concepts: [
        { term: "وَإِن يَرَوْا كِسْفًا مِّنَ السَّمَاءِ سَاقِطًا", meaning: { en: "And if they saw a fragment from the sky falling", ur: "اور اگر آسمان کا ٹکڑا گرتا دیکھیں" }, explanation: { en: "Even if they saw sky falling", ur: "اگر آسمان گرتا بھی دیکھیں" }, verseRef: "52:44" },
        { term: "يَقُولُوا سَحَابٌ مَّرْكُومٌ", meaning: { en: "They would say: Piled-up clouds", ur: "تو کہیں: تہ بہ تہ بادل ہیں" }, explanation: { en: "They would deny even that", ur: "وہ اس کا بھی انکار کریں" }, verseRef: "52:44" },
        { term: "فَذَرْهُمْ حَتَّىٰ يُلَاقُوا يَوْمَهُمُ الَّذِي فِيهِ يُصْعَقُونَ", meaning: { en: "So leave them until they meet their Day in which they will be struck insensible", ur: "پس انہیں چھوڑ دو یہاں تک کہ اپنے اس دن سے ملیں جس میں بے ہوش ہو جائیں گے" }, explanation: { en: "Leave them to face Judgment", ur: "انہیں قیامت کا سامنا کرنے دو" }, verseRef: "52:45" },
        { term: "يَوْمَ لَا يُغْنِي عَنْهُمْ كَيْدُهُمْ شَيْئًا", meaning: { en: "The Day their plan will not avail them at all", ur: "جس دن ان کی چال ان کے کچھ کام نہ آئے گی" }, explanation: { en: "Their schemes will be useless", ur: "ان کی سازشیں بے کار ہوں گی" }, verseRef: "52:46" },
        { term: "وَلَا هُمْ يُنصَرُونَ", meaning: { en: "Nor will they be helped", ur: "اور نہ ان کی مدد کی جائے گی" }, explanation: { en: "No help will come to them", ur: "ان کی کوئی مدد نہیں آئے گی" }, verseRef: "52:46" }
      ]
    },

    punishmentBeforeJudgment: {
      name: "Punishment Before Judgment",
      nameUr: "قیامت سے پہلے عذاب",
      nameArabic: "العذاب قبل القيامة",
      color: "#DC2626",
      concepts: [
        { term: "وَإِنَّ لِلَّذِينَ ظَلَمُوا عَذَابًا دُونَ ذَٰلِكَ", meaning: { en: "And indeed, for those who do wrong is a punishment before that", ur: "اور بلاشبہ ظلم کرنے والوں کے لیے اس سے پہلے بھی عذاب ہے" }, explanation: { en: "Worldly punishment before Hereafter", ur: "آخرت سے پہلے دنیاوی عذاب" }, verseRef: "52:47" },
        { term: "وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ", meaning: { en: "But most of them do not know", ur: "لیکن ان میں سے اکثر نہیں جانتے" }, explanation: { en: "Most are unaware of consequences", ur: "اکثر نتائج سے بے خبر ہیں" }, verseRef: "52:47" }
      ]
    },

    finalCommand: {
      name: "Final Command to the Prophet",
      nameUr: "نبی کو آخری حکم",
      nameArabic: "الأمر الأخير للنبي",
      color: "#10B981",
      concepts: [
        { term: "وَاصْبِرْ لِحُكْمِ رَبِّكَ", meaning: { en: "And be patient for the decision of your Lord", ur: "اور اپنے رب کے فیصلے پر صبر کرو" }, explanation: { en: "Command to be patient", ur: "صبر کا حکم" }, verseRef: "52:48" },
        { term: "فَإِنَّكَ بِأَعْيُنِنَا", meaning: { en: "For indeed, you are in Our eyes", ur: "بلاشبہ تم ہماری نظروں میں ہو" }, explanation: { en: "Under divine protection and care", ur: "الٰہی حفاظت اور نگرانی میں" }, verseRef: "52:48" },
        { term: "وَسَبِّحْ بِحَمْدِ رَبِّكَ حِينَ تَقُومُ", meaning: { en: "And glorify your Lord with praise when you arise", ur: "اور جب اٹھو تو اپنے رب کی حمد کے ساتھ تسبیح کرو" }, explanation: { en: "Praise Allah when standing for prayer", ur: "نماز کے لیے کھڑے ہوتے وقت اللہ کی تسبیح" }, verseRef: "52:48" },
        { term: "وَمِنَ اللَّيْلِ فَسَبِّحْهُ", meaning: { en: "And in [a part of] the night also glorify Him", ur: "اور رات کو بھی اس کی تسبیح کرو" }, explanation: { en: "Night worship and dhikr", ur: "رات کی عبادت اور ذکر" }, verseRef: "52:49" },
        { term: "وَإِدْبَارَ النُّجُومِ", meaning: { en: "And at the retreat of the stars", ur: "اور ستاروں کے ڈھلنے کے وقت" }, explanation: { en: "At dawn when stars fade", ur: "صبح کے وقت جب ستارے مدھم ہوں" }, verseRef: "52:49" }
      ]
    }
  },

  relationships: [
    { from: "Divine Oaths", to: "Certainty of Punishment", type: "affirmation", description: { en: "Five oaths confirm punishment is coming", ur: "پانچ قسمیں تصدیق کرتی ہیں کہ عذاب آنے والا ہے" } },
    { from: "Mount Sinai", to: "Revelation", type: "symbolism", description: { en: "Mount connects to divine communication", ur: "پہاڑ الٰہی کلام سے جڑتا ہے" } },
    { from: "Deniers", to: "Hellfire", type: "consequence", description: { en: "Mockery leads to thrust into Fire", ur: "مذاق اڑانا آگ میں دھکیلے جانے کی طرف لے جاتا ہے" } },
    { from: "Righteous", to: "Paradise", type: "reward", description: { en: "Taqwa leads to gardens and pleasure", ur: "تقویٰ باغات اور نعمتوں کی طرف لے جاتا ہے" } },
    { from: "Family Faith", to: "Reunion", type: "blessing", description: { en: "Believing families joined in Paradise", ur: "ایماندار خاندان جنت میں ملائے جائیں گے" } },
    { from: "Fear in Dunya", to: "Safety in Akhirah", type: "transformation", description: { en: "Worldly fear leads to eternal security", ur: "دنیاوی خوف ابدی تحفظ کی طرف لے جاتا ہے" } },
    { from: "Accusation", to: "Vindication", type: "refutation", description: { en: "Prophet cleared of all false claims", ur: "نبی تمام جھوٹے الزامات سے بری" } },
    { from: "Rhetorical Questions", to: "Divine Authority", type: "proof", description: { en: "Questions expose disbelievers' irrationality", ur: "سوالات کافروں کی بے عقلی کو بے نقاب کرتے ہیں" } },
    { from: "Plotting", to: "Backfiring", type: "irony", description: { en: "Schemers become the schemed against", ur: "سازشی خود سازش کا شکار ہو جاتے ہیں" } },
    { from: "Patience", to: "Divine Care", type: "command", description: { en: "Be patient - you are under Allah's watch", ur: "صبر کرو - تم اللہ کی نظر میں ہو" } }
  ],

  thematicFlow: {
    title: { en: "From Divine Oaths to Divine Protection", ur: "الٰہی قسموں سے الٰہی حفاظت تک" },
    stages: [
      { stage: 1, theme: "Divine Oaths", verses: "52:1-6", description: { en: "Five solemn oaths by sacred objects", ur: "مقدس چیزوں کی پانچ مؤکد قسمیں" } },
      { stage: 2, theme: "Punishment Certain", verses: "52:7-10", description: { en: "Subject of oaths - punishment will occur", ur: "قسموں کا مقصود - عذاب ضرور آئے گا" } },
      { stage: 3, theme: "Doom of Deniers", verses: "52:11-16", description: { en: "Woe to those who mocked - thrust into Fire", ur: "مذاق اڑانے والوں کے لیے ہلاکت - آگ میں دھکیلے جائیں گے" } },
      { stage: 4, theme: "Paradise Bliss", verses: "52:17-24", description: { en: "Gardens, food, drink, companions for righteous", ur: "نیکوکاروں کے لیے باغات، کھانا، مشروبات، ساتھی" } },
      { stage: 5, theme: "Paradise Dialogue", verses: "52:25-28", description: { en: "Believers reflect on Allah's mercy", ur: "مؤمنین اللہ کی رحمت پر غور کرتے ہیں" } },
      { stage: 6, theme: "Prophet Vindicated", verses: "52:29-34", description: { en: "Not a soothsayer, madman, or poet", ur: "نہ کاہن، نہ پاگل، نہ شاعر" } },
      { stage: 7, theme: "Rhetorical Questions", verses: "52:35-43", description: { en: "Series of questions exposing deniers", ur: "منکروں کو بے نقاب کرنے والے سوالات کا سلسلہ" } },
      { stage: 8, theme: "Stubborn Denial", verses: "52:44-46", description: { en: "They would deny even falling sky", ur: "وہ آسمان گرتا دیکھ کر بھی انکار کریں" } },
      { stage: 9, theme: "Final Commands", verses: "52:47-49", description: { en: "Be patient, glorify Allah day and night", ur: "صبر کرو، دن رات اللہ کی تسبیح کرو" } }
    ]
  },

  oathAnalysis: {
    title: { en: "The Five Oaths of At-Tur", ur: "سورۃ الطور کی پانچ قسمیں" },
    oaths: [
      { arabic: "وَالطُّورِ", object: "Mount Tur (Sinai)", significance: { en: "Sacred mountain of Musa's revelation", ur: "موسیٰ کی وحی کا مقدس پہاڑ" }, verseRef: "52:1" },
      { arabic: "وَكِتَابٍ مَّسْطُورٍ فِي رَقٍّ مَّنشُورٍ", object: "Inscribed Book", significance: { en: "Divine scripture/Preserved Tablet", ur: "الٰہی کتاب/لوحِ محفوظ" }, verseRef: "52:2-3" },
      { arabic: "وَالْبَيْتِ الْمَعْمُورِ", object: "Frequented House", significance: { en: "Celestial Ka'bah visited by angels", ur: "آسمانی کعبہ جہاں فرشتے آتے ہیں" }, verseRef: "52:4" },
      { arabic: "وَالسَّقْفِ الْمَرْفُوعِ", object: "Raised Canopy", significance: { en: "The sky held without pillars", ur: "آسمان جو بغیر ستونوں کے قائم ہے" }, verseRef: "52:5" },
      { arabic: "وَالْبَحْرِ الْمَسْجُورِ", object: "Sea Filled", significance: { en: "Sea that will burn on Judgment Day", ur: "سمندر جو قیامت کے دن جلے گا" }, verseRef: "52:6" }
    ],
    subject: { en: "إِنَّ عَذَابَ رَبِّكَ لَوَاقِعٌ - The punishment of your Lord will certainly occur", ur: "إِنَّ عَذَابَ رَبِّكَ لَوَاقِعٌ - تمہارے رب کا عذاب ضرور واقع ہوگا" },
    rhetoricalFunction: { en: "Multiple oaths intensify certainty of the message", ur: "متعدد قسمیں پیغام کے یقین کو شدید تر بناتی ہیں" }
  },

  rhetoricalQuestionAnalysis: {
    title: { en: "Series of Am Questions (أَمْ)", ur: "أَمْ کے سوالات کا سلسلہ" },
    questions: [
      { arabic: "أَمْ تَأْمُرُهُمْ أَحْلَامُهُم", question: { en: "Do their minds command this?", ur: "کیا ان کی عقلیں انہیں یہ حکم دیتی ہیں؟" }, implication: { en: "Their reasoning is faulty", ur: "ان کی سوچ خراب ہے" }, verseRef: "52:32" },
      { arabic: "أَمْ يَقُولُونَ تَقَوَّلَهُ", question: { en: "Did he invent it?", ur: "کیا اس نے خود گھڑا؟" }, implication: { en: "Challenge to produce similar", ur: "اس جیسا بنانے کا چیلنج" }, verseRef: "52:33-34" },
      { arabic: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ", question: { en: "Created from nothing?", ur: "کچھ نہیں سے پیدا ہوئے؟" }, implication: { en: "Must have a Creator", ur: "خالق ہونا ضروری ہے" }, verseRef: "52:35" },
      { arabic: "أَمْ هُمُ الْخَالِقُونَ", question: { en: "Did they create themselves?", ur: "کیا انہوں نے خود کو پیدا کیا؟" }, implication: { en: "Impossible - requires external Creator", ur: "ناممکن - خارجی خالق ضروری ہے" }, verseRef: "52:35" },
      { arabic: "أَمْ خَلَقُوا السَّمَاوَاتِ وَالْأَرْضَ", question: { en: "Did they create heavens and earth?", ur: "کیا انہوں نے آسمان اور زمین بنائے؟" }, implication: { en: "Obviously not", ur: "ظاہر ہے نہیں" }, verseRef: "52:36" },
      { arabic: "أَمْ عِندَهُمْ خَزَائِنُ رَبِّكَ", question: { en: "Do they have Allah's treasuries?", ur: "کیا ان کے پاس اللہ کے خزانے ہیں؟" }, implication: { en: "They control nothing", ur: "ان کا کسی چیز پر قابو نہیں" }, verseRef: "52:37" },
      { arabic: "أَمْ هُمُ الْمُصَيْطِرُونَ", question: { en: "Are they in control?", ur: "کیا وہ حکمران ہیں؟" }, implication: { en: "Allah alone controls all affairs", ur: "صرف اللہ ہی تمام معاملات کا مالک ہے" }, verseRef: "52:37" },
      { arabic: "أَمْ لَهُمْ سُلَّمٌ", question: { en: "Do they have a stairway?", ur: "کیا ان کے پاس سیڑھی ہے؟" }, implication: { en: "No access to divine realm", ur: "الٰہی عالم تک رسائی نہیں" }, verseRef: "52:38" },
      { arabic: "أَمْ لَهُ الْبَنَاتُ وَلَكُمُ الْبَنُونَ", question: { en: "He has daughters, you sons?", ur: "اس کی بیٹیاں اور تمہارے بیٹے؟" }, implication: { en: "Absurd attribution refuted", ur: "مضحکہ خیز نسبت کی تردید" }, verseRef: "52:39" },
      { arabic: "أَمْ عِندَهُمُ الْغَيْبُ", question: { en: "Do they have the unseen?", ur: "کیا ان کے پاس غیب ہے؟" }, implication: { en: "Only Allah knows ghayb", ur: "صرف اللہ غیب جانتا ہے" }, verseRef: "52:41" },
      { arabic: "أَمْ يُرِيدُونَ كَيْدًا", question: { en: "Do they plot?", ur: "کیا وہ چال چلتے ہیں؟" }, implication: { en: "Their plot will fail", ur: "ان کی چال ناکام ہوگی" }, verseRef: "52:42" },
      { arabic: "أَمْ لَهُمْ إِلَٰهٌ غَيْرُ اللَّهِ", question: { en: "Is there another god?", ur: "کیا کوئی اور معبود ہے؟" }, implication: { en: "None - glorify Allah", ur: "کوئی نہیں - اللہ کی تسبیح کرو" }, verseRef: "52:43" }
    ],
    rhetoricalFunction: { en: "Each question is answered implicitly with 'No' - exposing irrationality of denial", ur: "ہر سوال کا ضمنی جواب 'نہیں' ہے - انکار کی بے عقلی کو بے نقاب کرتا ہے" }
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Fear Allah while in safety", ur: "آسودگی میں اللہ سے ڈرو" }, how: { en: "Be mindful before calamity strikes - like believers who feared while with families", ur: "مصیبت آنے سے پہلے ہوشیار رہو - جیسے مؤمنین جو اہل و عیال میں ڈرتے تھے" }, verse: "52:26" },
      { principle: { en: "Call upon Allah constantly", ur: "مسلسل اللہ کو پکارو" }, how: { en: "Maintain supplication - it leads to Paradise", ur: "دعا جاری رکھو - یہ جنت کی طرف لے جاتی ہے" }, verse: "52:28" },
      { principle: { en: "Glorify at specific times", ur: "مخصوص اوقات میں تسبیح کرو" }, how: { en: "Praise Allah when arising, at night, and dawn", ur: "اٹھتے وقت، رات کو اور صبح اللہ کی تسبیح کرو" }, verse: "52:48-49" },
      { principle: { en: "Be patient with criticism", ur: "تنقید پر صبر کرو" }, how: { en: "Face accusations as Prophet did - you are under Allah's protection", ur: "الزامات کا سامنا کرو جیسے نبی نے کیا - تم اللہ کی حفاظت میں ہو" }, verse: "52:48" },
      { principle: { en: "Trust Allah's plan", ur: "اللہ کے منصوبے پر بھروسا رکھو" }, how: { en: "Schemers will be schemed against", ur: "سازشیوں کے خلاف سازش ہوگی" }, verse: "52:42" },
      { principle: { en: "Reflect on creation", ur: "تخلیق پر غور کرو" }, how: { en: "Ask: Who created you? This leads to faith", ur: "پوچھو: تمہیں کس نے بنایا؟ یہ ایمان کی طرف لے جاتا ہے" }, verse: "52:35-36" }
    ]
  },

  linguisticFeatures: {
    features: [
      { feature: "وَالطُّورِ", pattern: "Oath particle و + definite noun", effect: { en: "Solemn oath formula", ur: "مؤکد قسم کا انداز" } },
      { feature: "لَوَاقِعٌ", pattern: "Emphatic lam + active participle", effect: { en: "Certainty - will definitely occur", ur: "یقین - ضرور واقع ہوگا" } },
      { feature: "تَمُورُ", pattern: "Form I verb", meaning: { en: "To sway, shake violently", ur: "زور سے ہلنا، لرزنا" }, effect: { en: "Vivid cosmic imagery", ur: "واضح کائناتی تصویر" } },
      { feature: "يُدَعُّونَ", pattern: "Passive form IV", meaning: { en: "To be pushed violently", ur: "زبردستی دھکیلا جانا" }, effect: { en: "Forceful thrust into Hell", ur: "جہنم میں زبردستی دھکا" } },
      { feature: "أَمْ", pattern: "Interrogative particle", effect: { en: "Disjunctive questions creating logical chain", ur: "منطقی سلسلہ بنانے والے انفصالی سوالات" } },
      { feature: "الْمَكِيدُونَ", pattern: "Passive participle", meaning: { en: "Those who are plotted against", ur: "جن کے خلاف سازش کی جائے" }, effect: { en: "Reversal - plotters become victims", ur: "الٹ - سازشی خود شکار بن جاتے ہیں" } },
      { feature: "بِأَعْيُنِنَا", pattern: "Prepositional phrase", meaning: { en: "Under Our eyes/care", ur: "ہماری نظروں/نگرانی میں" }, effect: { en: "Divine protection and watchfulness", ur: "الٰہی حفاظت اور نگرانی" } }
    ]
  },

  historicalContext: {
    revelationPeriod: { en: "Makkan period, middle phase", ur: "مکی دور، درمیانی مرحلہ" },
    occasion: { en: "Revealed when the Prophet faced intense accusations of being a soothsayer, madman, and poet. The surah vindicates him through divine testimony and challenges deniers with logical questions they cannot answer.", ur: "جب نبی کو کاہن، پاگل اور شاعر ہونے کے شدید الزامات کا سامنا تھا تب نازل ہوئی۔ یہ سورت الٰہی گواہی سے ان کی صداقت ثابت کرتی ہے اور منکروں کو منطقی سوالات سے چیلنج کرتی ہے جن کا وہ جواب نہیں دے سکتے۔" },
    note: { en: "The term 'Al-Bayt al-Ma'mur' (Frequented House) is mentioned only here. The Prophet saw it during Isra and Mi'raj - a celestial structure above Ka'bah where 70,000 angels enter daily for worship and never return (different angels each day). This connects earthly and heavenly worship.", ur: "'البیت المعمور' (آباد گھر) صرف یہیں مذکور ہے۔ نبی نے اسے اسراء و معراج کے دوران دیکھا - کعبہ کے اوپر ایک آسمانی ساخت جہاں روزانہ 70,000 فرشتے عبادت کے لیے داخل ہوتے ہیں اور کبھی واپس نہیں آتے (ہر روز مختلف فرشتے)۔ یہ زمینی اور آسمانی عبادت کو جوڑتا ہے۔" }
  },

  uniqueInsight: {
    title: { en: "The Logical Chain of Questions (أَمْ...أَمْ...أَمْ)", ur: "سوالات کا منطقی سلسلہ (أَمْ...أَمْ...أَمْ)" },
    insight: { en: "Verses 35-43 contain a remarkable logical sequence of 12+ rhetorical questions using 'Am' (أَمْ), each building on the previous. This is one of the most intensive questioning passages in the Quran. Starting from basic ontological questions (Were you created from nothing? Did you create yourselves?) to theological ones (Do you have God's treasures? Is there another god?), each question implicitly demands 'No' as the answer. The cumulative effect demolishes every possible excuse for disbelief. This technique, called 'Al-Istifham al-Inkari' (rhetorical negation), proves Tawhid through pure reason. The final verse (52:43) declares glorification of Allah above all they associate - the logical conclusion of this devastating argument.", ur: "آیات 35-43 میں 'أَمْ' استعمال کرتے ہوئے 12 سے زیادہ بلاغتی سوالات کا ایک قابلِ ذکر منطقی سلسلہ ہے، ہر سوال پچھلے پر بنتا ہے۔ یہ قرآن کے سب سے شدید استفہامی حصوں میں سے ہے۔ بنیادی وجودی سوالات سے شروع (کیا تم بغیر کسی چیز سے پیدا ہوئے؟ کیا تم نے خود کو بنایا؟) الٰہیاتی سوالات تک (کیا تمہارے پاس اللہ کے خزانے ہیں؟ کیا کوئی اور معبود ہے؟)، ہر سوال ضمنی طور پر 'نہیں' کا جواب مانگتا ہے۔ مجموعی اثر کفر کے ہر ممکن بہانے کو مسمار کر دیتا ہے۔ یہ تکنیک 'الاستفہام الانکاری' کہلاتی ہے، جو خالص عقل سے توحید ثابت کرتی ہے۔ آخری آیت (52:43) ان کے شرک سے اللہ کی پاکیزگی کا اعلان کرتی ہے - اس زبردست دلیل کا منطقی نتیجہ۔" },
    arabicTerm: "أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ",
    rootMeaning: { en: "خ-ل-ق (to create) - central to the argument", ur: "خ-ل-ق (پیدا کرنا) - دلیل کا مرکزی نکتہ" },
    keyAyah: 35
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 51, name: "Adh-Dhariyat", relationship: "Previous surah, also begins with oaths and discusses Judgment", type: "sequential_thematic" },
      { surah: 53, name: "An-Najm", relationship: "Following surah, continues defending Prophet's revelation", type: "sequential_thematic" },
      { surah: 56, name: "Al-Waqi'ah", relationship: "Both describe Paradise bliss in detail", type: "thematic_parallel" },
      { surah: 77, name: "Al-Mursalat", relationship: "Similar refrain structure warning deniers", type: "thematic_parallel" },
      { surah: 55, name: "Ar-Rahman", relationship: "Both detail rewards of Paradise", type: "thematic_parallel" },
      { surah: 78, name: "An-Naba", relationship: "Also uses rhetorical questions to prove resurrection", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
