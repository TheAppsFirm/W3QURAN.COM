/**
 * Surah As-Saffat (37) - Ontology of Quranic Concepts
 * Those Ranged in Rows
 *
 * Theme: Angels ranged in rows glorifying Allah, refutation of polytheism,
 * stories of prophets (Nuh, Ibrahim, Musa, Harun, Ilyas, Lut, Yunus),
 * Ibrahim's sacrifice, Day of Judgment, rewards and punishments
 *
 * Revelation: Makki
 * Total Ayahs: 182
 */

export const ONTOLOGY = {
  surahId: 37,
  surahName: "As-Saffat",
  surahNameArabic: "الصافات",
  revelationType: "Makki",
  totalAyahs: 182,

  categories: {
    angelsInRows: {
      name: "Angels Ranged in Rows",
      nameUr: "صف بستہ فرشتے",
      nameArabic: "الصافات صفاً",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "وَالصَّافَّاتِ صَفًّا", meaning: { en: "By those ranged in rows", ur: "صف بستہ فرشتوں کی قسم" }, explanation: { en: "Angels standing in perfect rows before Allah", ur: "فرشتے اللہ کے سامنے کامل صفوں میں کھڑے" }, verseRef: "37:1" },
        { term: "فَالزَّاجِرَاتِ زَجْرًا", meaning: { en: "And those who drive [the clouds]", ur: "اور زجر کرنے والیوں کی" }, explanation: { en: "Angels driving clouds or repelling evil", ur: "فرشتے بادلوں کو ہنکاتے یا شر کو دور کرتے ہیں" }, verseRef: "37:2" },
        { term: "فَالتَّالِيَاتِ ذِكْرًا", meaning: { en: "And those who recite the message", ur: "اور ذکر پڑھنے والیوں کی" }, explanation: { en: "Angels reciting and conveying revelation", ur: "فرشتے ذکر پڑھتے اور وحی پہنچاتے ہیں" }, verseRef: "37:3" },
        { term: "إِنَّ إِلَٰهَكُمْ لَوَاحِدٌ", meaning: { en: "Indeed, your God is One", ur: "بیشک تمہارا معبود ایک ہے" }, explanation: { en: "Core conclusion from angelic testimony", ur: "فرشتوں کی گواہی سے مرکزی نتیجہ" }, verseRef: "37:4" },
        { term: "رَبُّ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Lord of the heavens and the earth", ur: "آسمانوں اور زمین کا رب" }, explanation: { en: "Allah's dominion over all creation", ur: "تمام مخلوقات پر اللہ کی حکمرانی" }, verseRef: "37:5" },
        { term: "وَرَبُّ الْمَشَارِقِ", meaning: { en: "And Lord of the easts", ur: "اور مشرقوں کا رب" }, explanation: { en: "Lord of every sunrise point throughout the year", ur: "سال بھر ہر طلوعِ آفتاب کے مقام کا رب" }, verseRef: "37:5" }
      ]
    },

    protectionOfHeavens: {
      name: "Protection of the Heavens",
      nameUr: "آسمانوں کی حفاظت",
      nameArabic: "حراسة السماء",
      color: "#06B6D4",
      icon: "Shield",
      concepts: [
        { term: "إِنَّا زَيَّنَّا السَّمَاءَ الدُّنْيَا بِزِينَةٍ الْكَوَاكِبِ", meaning: { en: "We have adorned the nearest heaven with stars", ur: "ہم نے قریب ترین آسمان کو ستاروں سے سجایا" }, explanation: { en: "Stars as beautification of the sky", ur: "ستارے آسمان کی زینت" }, verseRef: "37:6" },
        { term: "وَحِفْظًا مِّن كُلِّ شَيْطَانٍ مَّارِدٍ", meaning: { en: "And as protection against every rebellious devil", ur: "اور ہر سرکش شیطان سے حفاظت کے لیے" }, explanation: { en: "Stars protect against eavesdropping devils", ur: "ستارے کان لگانے والے شیطانوں سے حفاظت کرتے ہیں" }, verseRef: "37:7" },
        { term: "لَّا يَسَّمَّعُونَ إِلَى الْمَلَإِ الْأَعْلَىٰ", meaning: { en: "They cannot listen to the exalted assembly", ur: "وہ ملاءِ اعلیٰ کی بات نہیں سن سکتے" }, explanation: { en: "Devils barred from hearing angelic conversations", ur: "شیطانوں کو فرشتوں کی بات سننے سے روکا گیا" }, verseRef: "37:8" },
        { term: "وَيُقْذَفُونَ مِن كُلِّ جَانِبٍ", meaning: { en: "They are pelted from every side", ur: "اور ہر طرف سے مارے جاتے ہیں" }, explanation: { en: "Devils attacked from all directions", ur: "شیطانوں پر ہر سمت سے حملہ" }, verseRef: "37:8" },
        { term: "دُحُورًا", meaning: { en: "Repelled", ur: "دھتکارے ہوئے" }, explanation: { en: "Driven away forcefully", ur: "زبردستی دور بھگائے گئے" }, verseRef: "37:9" },
        { term: "وَلَهُمْ عَذَابٌ وَاصِبٌ", meaning: { en: "And for them is a constant punishment", ur: "اور ان کے لیے مسلسل عذاب ہے" }, explanation: { en: "Perpetual punishment awaits", ur: "دائمی عذاب منتظر ہے" }, verseRef: "37:9" },
        { term: "إِلَّا مَنْ خَطِفَ الْخَطْفَةَ", meaning: { en: "Except one who snatches [some words]", ur: "مگر جو اچک لے جائے" }, explanation: { en: "Devil who steals a fragment of revelation", ur: "شیطان جو وحی کا ایک ٹکڑا چرا لے" }, verseRef: "37:10" },
        { term: "فَأَتْبَعَهُ شِهَابٌ ثَاقِبٌ", meaning: { en: "Then a piercing flame pursues him", ur: "تو اس کا پیچھا ایک چمکتا شعلہ کرتا ہے" }, explanation: { en: "Shooting star chases the eavesdropping devil", ur: "شہاب ثاقب کان لگانے والے شیطان کا پیچھا کرتا ہے" }, verseRef: "37:10" }
      ]
    },

    creationArgument: {
      name: "Argument from Creation",
      nameUr: "تخلیق سے دلیل",
      nameArabic: "دليل الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "فَاسْتَفْتِهِمْ أَهُمْ أَشَدُّ خَلْقًا", meaning: { en: "Ask them: Are they more difficult to create", ur: "ان سے پوچھو: کیا وہ زیادہ مشکل تخلیق ہیں" }, explanation: { en: "Challenge to reflect on human creation", ur: "انسانی تخلیق پر غور کرنے کا چیلنج" }, verseRef: "37:11" },
        { term: "أَم مَّنْ خَلَقْنَا", meaning: { en: "Or those We created?", ur: "یا وہ جو ہم نے پیدا کیے؟" }, explanation: { en: "Comparison to heavens, earth, angels", ur: "آسمانوں، زمین، فرشتوں سے موازنہ" }, verseRef: "37:11" },
        { term: "إِنَّا خَلَقْنَاهُم مِّن طِينٍ لَّازِبٍ", meaning: { en: "We created them from sticky clay", ur: "ہم نے انہیں چپچپی مٹی سے بنایا" }, explanation: { en: "Human origin from clay", ur: "مٹی سے انسان کی ابتدا" }, verseRef: "37:11" },
        { term: "بَلْ عَجِبْتَ وَيَسْخَرُونَ", meaning: { en: "You wonder while they mock", ur: "تم حیران ہوتے ہو اور وہ مذاق اڑاتے ہیں" }, explanation: { en: "Prophet amazed at their denial, they mock in return", ur: "نبی ﷺ ان کے انکار پر حیران، وہ جواب میں مذاق اڑاتے" }, verseRef: "37:12" },
        { term: "وَإِذَا ذُكِّرُوا لَا يَذْكُرُونَ", meaning: { en: "When reminded, they do not remember", ur: "جب یاد دلایا جائے تو یاد نہیں رکھتے" }, explanation: { en: "Heedless despite reminders", ur: "یاد دہانیوں کے باوجود غافل" }, verseRef: "37:13" },
        { term: "وَإِذَا رَأَوْا آيَةً يَسْتَسْخِرُونَ", meaning: { en: "When they see a sign, they ridicule", ur: "جب کوئی نشانی دیکھیں تو مذاق اڑاتے ہیں" }, explanation: { en: "Mock even clear signs", ur: "واضح نشانیوں کا بھی مذاق" }, verseRef: "37:14" }
      ]
    },

    disbelieversOnJudgmentDay: {
      name: "Disbelievers on Judgment Day",
      nameUr: "قیامت کے دن کافر",
      nameArabic: "الكافرون يوم القيامة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ", meaning: { en: "Woe that Day to the deniers", ur: "اس دن جھٹلانے والوں پر تباہی" }, explanation: { en: "Destruction for those who denied truth", ur: "سچائی کا انکار کرنے والوں کی تباہی" }, verseRef: "37:21" },
        { term: "هَٰذَا يَوْمُ الْفَصْلِ", meaning: { en: "This is the Day of Separation", ur: "یہ فیصلے کا دن ہے" }, explanation: { en: "Day when truth is separated from falsehood", ur: "جب سچ کو جھوٹ سے الگ کیا جائے گا" }, verseRef: "37:21" },
        { term: "الَّذِي كُنتُم بِهِ تُكَذِّبُونَ", meaning: { en: "Which you used to deny", ur: "جسے تم جھٹلایا کرتے تھے" }, explanation: { en: "Confronted with what they rejected", ur: "جس چیز کا انکار کیا اسی سے سامنا" }, verseRef: "37:21" },
        { term: "احْشُرُوا الَّذِينَ ظَلَمُوا وَأَزْوَاجَهُمْ", meaning: { en: "Gather those who wronged and their kinds", ur: "ظالموں کو اور ان جیسوں کو جمع کرو" }, explanation: { en: "Wrongdoers gathered with their like", ur: "ظالم اپنے جیسوں کے ساتھ جمع" }, verseRef: "37:22" },
        { term: "وَمَا كَانُوا يَعْبُدُونَ", meaning: { en: "And what they used to worship", ur: "اور جن کی وہ عبادت کرتے تھے" }, explanation: { en: "Idols gathered with idol worshippers", ur: "بت پوجنے والوں کے ساتھ بت جمع" }, verseRef: "37:22" },
        { term: "مِن دُونِ اللَّهِ", meaning: { en: "Besides Allah", ur: "اللہ کے سوا" }, explanation: { en: "All false gods assembled", ur: "تمام جھوٹے معبود جمع" }, verseRef: "37:22" },
        { term: "فَاهْدُوهُمْ إِلَىٰ صِرَاطِ الْجَحِيمِ", meaning: { en: "And guide them to the path of Hellfire", ur: "اور انہیں جہنم کے راستے کی طرف لے جاؤ" }, explanation: { en: "Sarcastically 'guided' to Hell", ur: "طنزاً جہنم کی طرف رہنمائی" }, verseRef: "37:23" }
      ]
    },

    questioningInHell: {
      name: "Questioning in Hell",
      nameUr: "جہنم میں سوال و جواب",
      nameArabic: "السؤال في النار",
      color: "#EF4444",
      icon: "MessageCircle",
      concepts: [
        { term: "وَقِفُوهُمْ إِنَّهُم مَّسْئُولُونَ", meaning: { en: "Stop them; indeed, they are to be questioned", ur: "انہیں روکو؛ بیشک ان سے سوال ہونا ہے" }, explanation: { en: "Held accountable for their deeds", ur: "اپنے اعمال کا حساب دیں گے" }, verseRef: "37:24" },
        { term: "مَا لَكُمْ لَا تَنَاصَرُونَ", meaning: { en: "What is wrong with you that you do not help each other?", ur: "تمہیں کیا ہوا کہ ایک دوسرے کی مدد نہیں کرتے؟" }, explanation: { en: "Mocking their helplessness", ur: "ان کی بے بسی کا مذاق" }, verseRef: "37:25" },
        { term: "بَلْ هُمُ الْيَوْمَ مُسْتَسْلِمُونَ", meaning: { en: "But they, that Day, are surrendering", ur: "لیکن وہ اس دن بالکل مسلم ہو جائیں گے" }, explanation: { en: "Completely subdued on Judgment Day", ur: "قیامت کے دن بالکل مسلم" }, verseRef: "37:26" },
        { term: "وَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍ يَتَسَاءَلُونَ", meaning: { en: "They will turn to one another, questioning each other", ur: "وہ ایک دوسرے کی طرف رخ کریں گے، ایک دوسرے سے پوچھتے ہوئے" }, explanation: { en: "Mutual blame begins", ur: "باہمی الزام تراشی شروع" }, verseRef: "37:27" },
        { term: "إِنَّكُمْ كُنتُمْ تَأْتُونَنَا عَنِ الْيَمِينِ", meaning: { en: "You used to come to us from the right", ur: "تم ہمارے پاس دائیں طرف سے آتے تھے" }, explanation: { en: "Followers blame leaders for misleading from position of trust", ur: "پیروکار قائدین پر اعتماد کی پوزیشن سے گمراہ کرنے کا الزام" }, verseRef: "37:28" },
        { term: "بَلْ لَّمْ تَكُونُوا مُؤْمِنِينَ", meaning: { en: "Rather, you were not believers", ur: "بلکہ تم مومن نہیں تھے" }, explanation: { en: "Leaders blame followers for their own disbelief", ur: "قائدین پیروکاروں کو ان کے اپنے کفر کا ذمہ دار ٹھہراتے ہیں" }, verseRef: "37:29" }
      ]
    },

    followersAndLeaders: {
      name: "Followers Blame Leaders",
      nameUr: "پیروکار رہنماؤں کو الزام دیتے ہیں",
      nameArabic: "المتبوعون والتابعون",
      color: "#EF4444",
      icon: "Users",
      concepts: [
        { term: "وَمَا كَانَ لَنَا عَلَيْكُم مِّن سُلْطَانٍ", meaning: { en: "We had no authority over you", ur: "ہمارا تم پر کوئی اختیار نہیں تھا" }, explanation: { en: "Leaders deny coercing followers", ur: "قائدین پیروکاروں پر زبردستی سے انکار" }, verseRef: "37:30" },
        { term: "بَلْ كُنتُمْ قَوْمًا طَاغِينَ", meaning: { en: "Rather, you were a transgressing people", ur: "بلکہ تم سرکش لوگ تھے" }, explanation: { en: "Both sides were transgressors", ur: "دونوں طرف سرکش تھے" }, verseRef: "37:30" },
        { term: "فَحَقَّ عَلَيْنَا قَوْلُ رَبِّنَا", meaning: { en: "So the word of our Lord has come into effect upon us", ur: "پس ہمارے رب کا فرمان ہم پر پورا ہو گیا" }, explanation: { en: "Divine decree fulfilled", ur: "الٰہی فیصلہ پورا ہو گیا" }, verseRef: "37:31" },
        { term: "إِنَّا لَذَائِقُونَ", meaning: { en: "Indeed, we are to taste [punishment]", ur: "بیشک ہم عذاب چکھنے والے ہیں" }, explanation: { en: "Both will suffer together", ur: "دونوں ساتھ عذاب بھگتیں گے" }, verseRef: "37:31" },
        { term: "فَأَغْوَيْنَاكُمْ إِنَّا كُنَّا غَاوِينَ", meaning: { en: "So we led you astray; indeed, we were astray", ur: "پس ہم نے تمہیں گمراہ کیا؛ بیشک ہم خود گمراہ تھے" }, explanation: { en: "Misguided leading the misguided", ur: "گمراہ لوگ گمراہوں کی قیادت کرتے رہے" }, verseRef: "37:32" },
        { term: "فَإِنَّهُمْ يَوْمَئِذٍ فِي الْعَذَابِ مُشْتَرِكُونَ", meaning: { en: "So indeed they, that Day, will be sharing in the punishment", ur: "پس بیشک وہ اس دن عذاب میں شریک ہوں گے" }, explanation: { en: "Shared guilt, shared punishment", ur: "مشترکہ جرم، مشترکہ سزا" }, verseRef: "37:33" }
      ]
    },

    punishmentForArrogance: {
      name: "Punishment for Arrogance",
      nameUr: "تکبر کی سزا",
      nameArabic: "عقاب المستكبرين",
      color: "#EF4444",
      icon: "Crown",
      concepts: [
        { term: "إِنَّهُمْ كَانُوا إِذَا قِيلَ لَهُمْ لَا إِلَٰهَ إِلَّا اللَّهُ يَسْتَكْبِرُونَ", meaning: { en: "When it was said to them: La ilaha illallah, they were arrogant", ur: "جب ان سے کہا جاتا: لا الہ الا اللہ، تو وہ تکبر کرتے" }, explanation: { en: "Rejected Tawheed out of pride", ur: "تکبر کی وجہ سے توحید رد کی" }, verseRef: "37:35" },
        { term: "وَيَقُولُونَ أَئِنَّا لَتَارِكُو آلِهَتِنَا لِشَاعِرٍ مَّجْنُونٍ", meaning: { en: "And saying: Should we leave our gods for a mad poet?", ur: "اور کہتے: کیا ہم ایک دیوانے شاعر کے لیے اپنے معبود چھوڑ دیں؟" }, explanation: { en: "Called Prophet a mad poet", ur: "نبی ﷺ کو دیوانا شاعر کہا" }, verseRef: "37:36" },
        { term: "بَلْ جَاءَ بِالْحَقِّ وَصَدَّقَ الْمُرْسَلِينَ", meaning: { en: "Rather, he brought the truth and confirmed the messengers", ur: "بلکہ وہ سچ لے کر آئے اور رسولوں کی تصدیق کی" }, explanation: { en: "Prophet brought truth, confirmed previous prophets", ur: "نبی ﷺ سچائی لائے، پچھلے انبیاء کی تصدیق کی" }, verseRef: "37:37" },
        { term: "إِنَّكُمْ لَذَائِقُو الْعَذَابِ الْأَلِيمِ", meaning: { en: "Indeed, you will taste the painful punishment", ur: "بیشک تم دردناک عذاب چکھو گے" }, explanation: { en: "Painful punishment guaranteed", ur: "دردناک عذاب یقینی" }, verseRef: "37:38" }
      ]
    },

    rewardsForBelievers: {
      name: "Rewards for Believers",
      nameUr: "مومنوں کے انعامات",
      nameArabic: "جزاء المؤمنين",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "إِلَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ", meaning: { en: "Except the chosen servants of Allah", ur: "مگر اللہ کے چنے ہوئے بندے" }, explanation: { en: "Sincere servants exempted from punishment", ur: "مخلص بندے عذاب سے مستثنیٰ" }, verseRef: "37:40" },
        { term: "أُولَٰئِكَ لَهُمْ رِزْقٌ مَّعْلُومٌ", meaning: { en: "Those will have a provision determined", ur: "ان کے لیے ایک معلوم رزق ہے" }, explanation: { en: "Known sustenance in Paradise", ur: "جنت میں معلوم رزق" }, verseRef: "37:41" },
        { term: "فَوَاكِهُ وَهُم مُّكْرَمُونَ", meaning: { en: "Fruits, and they will be honored", ur: "پھل، اور وہ عزت پائیں گے" }, explanation: { en: "Fruits and honor await believers", ur: "مومنوں کے لیے پھل اور عزت منتظر" }, verseRef: "37:42" },
        { term: "فِي جَنَّاتِ النَّعِيمِ", meaning: { en: "In gardens of pleasure", ur: "نعمتوں کے باغات میں" }, explanation: { en: "Gardens of bliss", ur: "نعمتوں کے باغات" }, verseRef: "37:43" },
        { term: "عَلَىٰ سُرُرٍ مُّتَقَابِلِينَ", meaning: { en: "On thrones facing one another", ur: "تختوں پر آمنے سامنے" }, explanation: { en: "Seated facing each other in fellowship", ur: "آپس میں آمنے سامنے بیٹھے ہوئے" }, verseRef: "37:44" },
        { term: "يُطَافُ عَلَيْهِم بِكَأْسٍ مِّن مَّعِينٍ", meaning: { en: "There is circulated among them a cup from a flowing spring", ur: "ان میں بہتے چشمے سے جام گردش کر رہا ہے" }, explanation: { en: "Served pure drink from springs", ur: "چشموں سے پاکیزہ مشروب پیش" }, verseRef: "37:45" },
        { term: "بَيْضَاءَ لَذَّةٍ لِّلشَّارِبِينَ", meaning: { en: "White, delicious to the drinkers", ur: "سفید، پینے والوں کے لیے لذیذ" }, explanation: { en: "Pure white drink, delightful", ur: "خالص سفید مشروب، لذیذ" }, verseRef: "37:46" },
        { term: "لَا فِيهَا غَوْلٌ وَلَا هُمْ عَنْهَا يُنزَفُونَ", meaning: { en: "No bad effect is there in it, nor will they be intoxicated", ur: "نہ اس میں کوئی نقصان ہے نہ وہ بدمست ہوں گے" }, explanation: { en: "No headache or loss of senses", ur: "نہ سر درد نہ ہوش کھونا" }, verseRef: "37:47" },
        { term: "وَعِندَهُمْ قَاصِرَاتُ الطَّرْفِ عِينٌ", meaning: { en: "With them will be those limiting their glances with large eyes", ur: "ان کے ساتھ نظریں جھکائے بڑی آنکھوں والیاں ہوں گی" }, explanation: { en: "Modest companions with beautiful eyes", ur: "حیادار بڑی آنکھوں والی ساتھی" }, verseRef: "37:48" },
        { term: "كَأَنَّهُنَّ بَيْضٌ مَّكْنُونٌ", meaning: { en: "As if they were eggs, well-protected", ur: "گویا محفوظ انڈے ہیں" }, explanation: { en: "Pure like protected pearls", ur: "محفوظ موتیوں کی طرح پاکیزہ" }, verseRef: "37:49" }
      ]
    },

    conversationInParadise: {
      name: "Conversation in Paradise",
      nameUr: "جنت میں گفتگو",
      nameArabic: "حديث أهل الجنة",
      color: "#10B981",
      icon: "MessageCircle",
      concepts: [
        { term: "فَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍ يَتَسَاءَلُونَ", meaning: { en: "They will approach one another, inquiring", ur: "وہ ایک دوسرے کی طرف رخ کریں گے، پوچھتے ہوئے" }, explanation: { en: "Believers conversing in Paradise", ur: "مومنین جنت میں گفتگو کرتے ہوئے" }, verseRef: "37:50" },
        { term: "قَالَ قَائِلٌ مِّنْهُمْ إِنِّي كَانَ لِي قَرِينٌ", meaning: { en: "A speaker among them will say: I had a companion", ur: "ان میں سے ایک کہنے والا کہے گا: میرا ایک ساتھی تھا" }, explanation: { en: "Remembering a skeptical friend", ur: "ایک شکی دوست کو یاد کرتے ہوئے" }, verseRef: "37:51" },
        { term: "يَقُولُ أَإِنَّكَ لَمِنَ الْمُصَدِّقِينَ", meaning: { en: "Who would say: Are you among those who believe?", ur: "جو کہتا تھا: کیا تم تصدیق کرنے والوں میں سے ہو؟" }, explanation: { en: "The companion mocked belief in resurrection", ur: "ساتھی قیامت پر ایمان کا مذاق اڑاتا تھا" }, verseRef: "37:52" },
        { term: "أَإِذَا مِتْنَا وَكُنَّا تُرَابًا وَعِظَامًا أَإِنَّا لَمَدِينُونَ", meaning: { en: "When we have died and become dust and bones, will we be judged?", ur: "جب ہم مر جائیں اور مٹی اور ہڈیاں ہو جائیں، کیا ہمارا حساب ہوگا؟" }, explanation: { en: "Skeptic denied resurrection", ur: "شکی نے قیامت کا انکار کیا" }, verseRef: "37:53" },
        { term: "قَالَ هَلْ أَنتُم مُّطَّلِعُونَ", meaning: { en: "He will say: Would you look?", ur: "وہ کہے گا: کیا تم جھانک کر دیکھو گے؟" }, explanation: { en: "Believer asks to see former companion", ur: "مومن پرانے ساتھی کو دیکھنا چاہتا ہے" }, verseRef: "37:54" },
        { term: "فَاطَّلَعَ فَرَآهُ فِي سَوَاءِ الْجَحِيمِ", meaning: { en: "He will look and see him in the midst of Hellfire", ur: "وہ جھانکے گا تو اسے جہنم کے بیچ دیکھے گا" }, explanation: { en: "Sees skeptic in center of Hell", ur: "شکی کو جہنم کے بیچ میں دیکھتا ہے" }, verseRef: "37:55" },
        { term: "قَالَ تَاللَّهِ إِن كِدتَّ لَتُرْدِينِ", meaning: { en: "He will say: By Allah, you almost ruined me", ur: "وہ کہے گا: اللہ کی قسم، تم نے تو مجھے تقریباً ہلاک کر دیا تھا" }, explanation: { en: "Almost led astray by skeptic friend", ur: "شکی دوست نے تقریباً گمراہ کر دیا تھا" }, verseRef: "37:56" },
        { term: "وَلَوْلَا نِعْمَةُ رَبِّي لَكُنتُ مِنَ الْمُحْضَرِينَ", meaning: { en: "If not for the favor of my Lord, I would have been brought [to Hell]", ur: "اگر میرے رب کا فضل نہ ہوتا تو میں بھی حاضر کیے جانے والوں میں ہوتا" }, explanation: { en: "Gratitude for Allah's guidance", ur: "اللہ کی ہدایت پر شکر" }, verseRef: "37:57" }
      ]
    },

    eternalParadise: {
      name: "Eternity in Paradise",
      nameUr: "جنت میں ہمیشگی",
      nameArabic: "الخلود في الجنة",
      color: "#10B981",
      icon: "Star",
      concepts: [
        { term: "أَفَمَا نَحْنُ بِمَيِّتِينَ", meaning: { en: "Are we not to die?", ur: "کیا ہم مرنے والے نہیں؟" }, explanation: { en: "Believers realize eternal life", ur: "مومنین ابدی زندگی کا ادراک کرتے ہیں" }, verseRef: "37:58" },
        { term: "إِلَّا مَوْتَتَنَا الْأُولَىٰ وَمَا نَحْنُ بِمُعَذَّبِينَ", meaning: { en: "Except for our first death, and we will not be punished", ur: "سوائے ہماری پہلی موت کے، اور ہمیں عذاب نہ ہوگا" }, explanation: { en: "Only one death, no punishment ever", ur: "صرف ایک موت، کبھی عذاب نہیں" }, verseRef: "37:59" },
        { term: "إِنَّ هَٰذَا لَهُوَ الْفَوْزُ الْعَظِيمُ", meaning: { en: "Indeed, this is the great attainment", ur: "بیشک یہی بڑی کامیابی ہے" }, explanation: { en: "Ultimate success and victory", ur: "آخری کامیابی اور فتح" }, verseRef: "37:60" },
        { term: "لِمِثْلِ هَٰذَا فَلْيَعْمَلِ الْعَامِلُونَ", meaning: { en: "For the like of this let the workers work", ur: "ایسی ہی چیز کے لیے عمل کرنے والوں کو عمل کرنا چاہیے" }, explanation: { en: "This reward is worth striving for", ur: "یہ اجر جدوجہد کے قابل ہے" }, verseRef: "37:61" }
      ]
    },

    treeOfZaqqum: {
      name: "Tree of Zaqqum",
      nameUr: "زقوم کا درخت",
      nameArabic: "شجرة الزقوم",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "أَذَٰلِكَ خَيْرٌ نُّزُلًا أَمْ شَجَرَةُ الزَّقُّومِ", meaning: { en: "Is that [Paradise] a better accommodation or the tree of Zaqqum?", ur: "کیا وہ (جنت) بہتر مہمانداری ہے یا زقوم کا درخت؟" }, explanation: { en: "Contrast Paradise with Hell", ur: "جنت کا جہنم سے موازنہ" }, verseRef: "37:62" },
        { term: "إِنَّا جَعَلْنَاهَا فِتْنَةً لِّلظَّالِمِينَ", meaning: { en: "We have made it a trial for the wrongdoers", ur: "ہم نے اسے ظالموں کے لیے آزمائش بنایا" }, explanation: { en: "Disbelievers mocked this concept", ur: "کافروں نے اس تصور کا مذاق اڑایا" }, verseRef: "37:63" },
        { term: "إِنَّهَا شَجَرَةٌ تَخْرُجُ فِي أَصْلِ الْجَحِيمِ", meaning: { en: "It is a tree emerging from the bottom of Hellfire", ur: "یہ درخت جہنم کی تہ سے نکلتا ہے" }, explanation: { en: "Grows from depths of Hell", ur: "جہنم کی گہرائیوں سے اگتا ہے" }, verseRef: "37:64" },
        { term: "طَلْعُهَا كَأَنَّهُ رُءُوسُ الشَّيَاطِينِ", meaning: { en: "Its emerging fruit as if it was heads of devils", ur: "اس کے پھل ایسے ہیں جیسے شیطانوں کے سر" }, explanation: { en: "Fruit resembles devil heads - hideous", ur: "پھل شیطانوں کے سروں جیسے - بھیانک" }, verseRef: "37:65" },
        { term: "فَإِنَّهُمْ لَآكِلُونَ مِنْهَا فَمَالِئُونَ مِنْهَا الْبُطُونَ", meaning: { en: "They will eat from it and fill their bellies", ur: "وہ اس میں سے کھائیں گے اور پیٹ بھریں گے" }, explanation: { en: "Forced to eat until stuffed", ur: "زبردستی کھلایا جائے گا یہاں تک کہ پیٹ بھر جائے" }, verseRef: "37:66" },
        { term: "ثُمَّ إِنَّ لَهُمْ عَلَيْهَا لَشَوْبًا مِّنْ حَمِيمٍ", meaning: { en: "Then they will have a scalding drink", ur: "پھر ان کے لیے کھولتا ہوا پانی ہوگا" }, explanation: { en: "Boiling water to wash down Zaqqum", ur: "زقوم اتارنے کے لیے کھولتا پانی" }, verseRef: "37:67" },
        { term: "ثُمَّ إِنَّ مَرْجِعَهُمْ لَإِلَى الْجَحِيمِ", meaning: { en: "Then their return is to Hellfire", ur: "پھر ان کی واپسی جہنم کی طرف ہے" }, explanation: { en: "Cycle of punishment continues", ur: "عذاب کا سلسلہ جاری" }, verseRef: "37:68" }
      ]
    },

    blindFollowing: {
      name: "Blind Following of Ancestors",
      nameUr: "آباء و اجداد کی اندھی تقلید",
      nameArabic: "تقليد الآباء",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "إِنَّهُمْ أَلْفَوْا آبَاءَهُمْ ضَالِّينَ", meaning: { en: "Indeed, they found their fathers astray", ur: "بیشک انہوں نے اپنے باپ دادا کو گمراہ پایا" }, explanation: { en: "Inherited misguidance from ancestors", ur: "باپ دادا سے موروثی گمراہی" }, verseRef: "37:69" },
        { term: "فَهُمْ عَلَىٰ آثَارِهِمْ يُهْرَعُونَ", meaning: { en: "So they hastened in their footsteps", ur: "تو وہ ان کے نقشِ قدم پر دوڑ پڑے" }, explanation: { en: "Rushed to follow in their error", ur: "ان کی غلطی میں پیچھا کرنے کو دوڑ پڑے" }, verseRef: "37:70" },
        { term: "وَلَقَدْ ضَلَّ قَبْلَهُمْ أَكْثَرُ الْأَوَّلِينَ", meaning: { en: "Before them, most of the ancients went astray", ur: "ان سے پہلے اکثر پہلے لوگ گمراہ ہو چکے تھے" }, explanation: { en: "History of mass misguidance", ur: "اجتماعی گمراہی کی تاریخ" }, verseRef: "37:71" },
        { term: "وَلَقَدْ أَرْسَلْنَا فِيهِم مُّنذِرِينَ", meaning: { en: "We had sent among them warners", ur: "ہم نے ان میں ڈرانے والے بھیجے تھے" }, explanation: { en: "Despite prophets, they strayed", ur: "انبیاء کے باوجود گمراہ رہے" }, verseRef: "37:72" },
        { term: "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ الْمُنذَرِينَ", meaning: { en: "See how was the end of those who were warned", ur: "دیکھو ڈرائے جانے والوں کا انجام کیسا ہوا" }, explanation: { en: "Warned but rejected - destruction", ur: "خبردار کیا گیا لیکن رد کیا - تباہی" }, verseRef: "37:73" }
      ]
    },

    prophetNuh: {
      name: "Prophet Nuh",
      nameUr: "حضرت نوح",
      nameArabic: "النبي نوح",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَلَقَدْ نَادَانَا نُوحٌ", meaning: { en: "And Nuh called upon Us", ur: "اور نوح نے ہمیں پکارا" }, explanation: { en: "Nuh's supplication to Allah", ur: "نوح کی اللہ سے دعا" }, verseRef: "37:75" },
        { term: "فَلَنِعْمَ الْمُجِيبُونَ", meaning: { en: "How excellent are We in responding", ur: "ہم کیا ہی اچھے جواب دینے والے ہیں" }, explanation: { en: "Allah is the best responder to prayers", ur: "اللہ دعاؤں کا بہترین قبول کرنے والا ہے" }, verseRef: "37:75" },
        { term: "وَنَجَّيْنَاهُ وَأَهْلَهُ مِنَ الْكَرْبِ الْعَظِيمِ", meaning: { en: "We saved him and his family from the great distress", ur: "ہم نے انہیں اور ان کے گھر والوں کو بڑی مصیبت سے بچایا" }, explanation: { en: "Rescued from the flood", ur: "سیلاب سے بچایا گیا" }, verseRef: "37:76" },
        { term: "وَجَعَلْنَا ذُرِّيَّتَهُ هُمُ الْبَاقِينَ", meaning: { en: "We made his descendants the survivors", ur: "ہم نے ان کی اولاد کو باقی رہنے والا بنایا" }, explanation: { en: "All humanity descends from Nuh", ur: "تمام انسانیت نوح کی نسل سے ہے" }, verseRef: "37:77" },
        { term: "وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ", meaning: { en: "And We left for him [favorable mention] among later generations", ur: "اور ہم نے آنے والوں میں ان کا (اچھا) ذکر باقی رکھا" }, explanation: { en: "Honored legacy preserved", ur: "معزز ورثہ محفوظ" }, verseRef: "37:78" },
        { term: "سَلَامٌ عَلَىٰ نُوحٍ فِي الْعَالَمِينَ", meaning: { en: "Peace upon Nuh among the worlds", ur: "جہانوں میں نوح پر سلام" }, explanation: { en: "Divine peace upon Nuh", ur: "نوح پر الٰہی سلامتی" }, verseRef: "37:79" },
        { term: "إِنَّهُ مِنْ عِبَادِنَا الْمُؤْمِنِينَ", meaning: { en: "Indeed, he was of Our believing servants", ur: "بیشک وہ ہمارے مومن بندوں میں سے تھے" }, explanation: { en: "Praised as sincere believer", ur: "مخلص مومن کے طور پر تعریف" }, verseRef: "37:81" },
        { term: "ثُمَّ أَغْرَقْنَا الْآخَرِينَ", meaning: { en: "Then We drowned the others", ur: "پھر ہم نے باقی سب کو ڈبو دیا" }, explanation: { en: "Disbelievers destroyed by flood", ur: "کافر سیلاب سے تباہ ہوئے" }, verseRef: "37:82" }
      ]
    },

    prophetIbrahimSeeking: {
      name: "Ibrahim Seeks Truth",
      nameUr: "ابراہیم حق کی تلاش میں",
      nameArabic: "إبراهيم يبحث عن الحق",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "وَإِنَّ مِن شِيعَتِهِ لَإِبْرَاهِيمَ", meaning: { en: "And indeed, among his followers was Ibrahim", ur: "اور بیشک ان کے پیروکاروں میں ابراہیم تھے" }, explanation: { en: "Ibrahim followed Nuh's path", ur: "ابراہیم نے نوح کے راستے کی پیروی کی" }, verseRef: "37:83" },
        { term: "إِذْ جَاءَ رَبَّهُ بِقَلْبٍ سَلِيمٍ", meaning: { en: "When he came to his Lord with a sound heart", ur: "جب وہ اپنے رب کے پاس صاف دل لے کر آئے" }, explanation: { en: "Ibrahim's pure, sincere heart", ur: "ابراہیم کا پاکیزہ، مخلص دل" }, verseRef: "37:84" },
        { term: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِ مَاذَا تَعْبُدُونَ", meaning: { en: "When he said to his father and people: What do you worship?", ur: "جب انہوں نے اپنے باپ اور قوم سے کہا: تم کس کی عبادت کرتے ہو؟" }, explanation: { en: "Questioning idol worship", ur: "بت پرستی پر سوال" }, verseRef: "37:85" },
        { term: "أَئِفْكًا آلِهَةً دُونَ اللَّهِ تُرِيدُونَ", meaning: { en: "Is it falsehood, gods other than Allah, you desire?", ur: "کیا تم اللہ کے سوا جھوٹے معبود چاہتے ہو؟" }, explanation: { en: "Exposing false gods as lies", ur: "جھوٹے معبودوں کو جھوٹ ثابت کرنا" }, verseRef: "37:86" },
        { term: "فَمَا ظَنُّكُم بِرَبِّ الْعَالَمِينَ", meaning: { en: "What then is your thought about the Lord of the worlds?", ur: "پھر رب العالمین کے بارے میں تمہارا کیا خیال ہے؟" }, explanation: { en: "Challenging them to consider true Lord", ur: "سچے رب پر غور کرنے کا چیلنج" }, verseRef: "37:87" }
      ]
    },

    ibrahimAndStars: {
      name: "Ibrahim's Stratagem",
      nameUr: "ابراہیم کی تدبیر",
      nameArabic: "حيلة إبراهيم",
      color: "#3B82F6",
      icon: "Zap",
      concepts: [
        { term: "فَنَظَرَ نَظْرَةً فِي النُّجُومِ", meaning: { en: "He cast a look at the stars", ur: "انہوں نے ستاروں پر ایک نظر ڈالی" }, explanation: { en: "Looked up at stars deliberately", ur: "جان بوجھ کر ستاروں کی طرف دیکھا" }, verseRef: "37:88" },
        { term: "فَقَالَ إِنِّي سَقِيمٌ", meaning: { en: "And said: Indeed, I am ill", ur: "اور کہا: بیشک میں بیمار ہوں" }, explanation: { en: "Excuse to avoid idol festival", ur: "بت پرستوں کے تہوار سے بچنے کا بہانہ" }, verseRef: "37:89" },
        { term: "فَتَوَلَّوْا عَنْهُ مُدْبِرِينَ", meaning: { en: "So they turned away from him, departing", ur: "تو وہ ان سے منہ موڑ کر چلے گئے" }, explanation: { en: "People left for their festival", ur: "لوگ اپنے تہوار کے لیے چلے گئے" }, verseRef: "37:90" },
        { term: "فَرَاغَ إِلَىٰ آلِهَتِهِمْ", meaning: { en: "He turned to their gods", ur: "وہ ان کے معبودوں کی طرف گئے" }, explanation: { en: "Approached the idols alone", ur: "اکیلے بتوں کے پاس گئے" }, verseRef: "37:91" },
        { term: "فَقَالَ أَلَا تَأْكُلُونَ", meaning: { en: "And said: Do you not eat?", ur: "اور کہا: تم کھاتے کیوں نہیں؟" }, explanation: { en: "Mocking the idols - offered food before them", ur: "بتوں کا مذاق - ان کے سامنے کھانا رکھا" }, verseRef: "37:91" },
        { term: "مَا لَكُمْ لَا تَنطِقُونَ", meaning: { en: "What is wrong with you that you do not speak?", ur: "تمہیں کیا ہوا کہ بولتے نہیں؟" }, explanation: { en: "Challenging their silence", ur: "ان کی خاموشی کو چیلنج" }, verseRef: "37:92" },
        { term: "فَرَاغَ عَلَيْهِمْ ضَرْبًا بِالْيَمِينِ", meaning: { en: "He turned on them, striking with his right hand", ur: "پھر وہ ان پر ٹوٹ پڑے، دائیں ہاتھ سے مارتے ہوئے" }, explanation: { en: "Smashed idols with powerful right hand", ur: "طاقتور دائیں ہاتھ سے بت توڑ دیے" }, verseRef: "37:93" },
        { term: "فَأَقْبَلُوا إِلَيْهِ يَزِفُّونَ", meaning: { en: "They came toward him, hastening", ur: "وہ ان کی طرف دوڑتے ہوئے آئے" }, explanation: { en: "People rushed back angrily", ur: "لوگ غصے میں واپس دوڑے" }, verseRef: "37:94" },
        { term: "قَالَ أَتَعْبُدُونَ مَا تَنْحِتُونَ", meaning: { en: "He said: Do you worship what you carve?", ur: "انہوں نے کہا: کیا تم وہ عبادت کرتے ہو جو خود تراشتے ہو؟" }, explanation: { en: "Exposing absurdity - worshipping own carvings", ur: "بے تکی بات - اپنی تراشی ہوئی چیزوں کی عبادت" }, verseRef: "37:95" },
        { term: "وَاللَّهُ خَلَقَكُمْ وَمَا تَعْمَلُونَ", meaning: { en: "While Allah created you and what you make", ur: "حالانکہ اللہ نے تمہیں اور تمہاری بنائی ہوئی چیزوں کو پیدا کیا" }, explanation: { en: "Allah created you AND your handiwork", ur: "اللہ نے تمہیں بھی بنایا اور تمہارے ہاتھوں کا کام بھی" }, verseRef: "37:96" }
      ]
    },

    ibrahimInFire: {
      name: "Ibrahim in the Fire",
      nameUr: "ابراہیم آگ میں",
      nameArabic: "إبراهيم في النار",
      color: "#F59E0B",
      icon: "Shield",
      concepts: [
        { term: "قَالُوا ابْنُوا لَهُ بُنْيَانًا فَأَلْقُوهُ فِي الْجَحِيمِ", meaning: { en: "They said: Build for him a structure and throw him into the fire", ur: "انہوں نے کہا: اس کے لیے ایک عمارت بناؤ اور اسے آگ میں ڈال دو" }, explanation: { en: "Plotted to burn Ibrahim alive", ur: "ابراہیم کو زندہ جلانے کی سازش" }, verseRef: "37:97" },
        { term: "فَأَرَادُوا بِهِ كَيْدًا فَجَعَلْنَاهُمُ الْأَسْفَلِينَ", meaning: { en: "They intended a plan against him, but We made them the lowest", ur: "انہوں نے اس کے خلاف چال چلی لیکن ہم نے انہیں نیچا دکھایا" }, explanation: { en: "Their plot backfired - they were humiliated", ur: "ان کی سازش الٹی پڑی - وہ ذلیل ہوئے" }, verseRef: "37:98" }
      ]
    },

    ibrahimsSacrifice: {
      name: "Ibrahim's Great Sacrifice",
      nameUr: "ابراہیم کی عظیم قربانی",
      nameArabic: "ذبح إبراهيم العظيم",
      color: "#F59E0B",
      icon: "Heart",
      concepts: [
        { term: "وَقَالَ إِنِّي ذَاهِبٌ إِلَىٰ رَبِّي سَيَهْدِينِ", meaning: { en: "He said: I am going to my Lord; He will guide me", ur: "انہوں نے کہا: میں اپنے رب کی طرف جا رہا ہوں؛ وہ مجھے ہدایت دے گا" }, explanation: { en: "Ibrahim emigrates for Allah's sake", ur: "ابراہیم اللہ کی خاطر ہجرت کرتے ہیں" }, verseRef: "37:99" },
        { term: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ", meaning: { en: "My Lord, grant me [a child] from among the righteous", ur: "میرے رب! مجھے نیک لوگوں میں سے (اولاد) عطا فرما" }, explanation: { en: "Dua for righteous offspring", ur: "نیک اولاد کے لیے دعا" }, verseRef: "37:100" },
        { term: "فَبَشَّرْنَاهُ بِغُلَامٍ حَلِيمٍ", meaning: { en: "So We gave him good tidings of a forbearing boy", ur: "تو ہم نے اسے ایک بردبار لڑکے کی خوشخبری دی" }, explanation: { en: "Glad tidings of patient son (Ismail)", ur: "بردبار بیٹے (اسماعیل) کی خوشخبری" }, verseRef: "37:101" },
        { term: "فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ", meaning: { en: "When he reached with him [the age of] exertion", ur: "جب وہ اس کے ساتھ دوڑ دھوپ کی عمر کو پہنچا" }, explanation: { en: "Son grew old enough to work alongside him", ur: "بیٹا اتنا بڑا ہو گیا کہ ساتھ کام کر سکے" }, verseRef: "37:102" },
        { term: "قَالَ يَا بُنَيَّ إِنِّي أَرَىٰ فِي الْمَنَامِ أَنِّي أَذْبَحُكَ", meaning: { en: "He said: O my son, I have seen in a dream that I sacrifice you", ur: "انہوں نے کہا: اے میرے بیٹے، میں نے خواب میں دیکھا کہ میں تجھے ذبح کر رہا ہوں" }, explanation: { en: "Ibrahim shares divine vision of sacrifice", ur: "ابراہیم قربانی کا الٰہی خواب بتاتے ہیں" }, verseRef: "37:102" },
        { term: "فَانظُرْ مَاذَا تَرَىٰ", meaning: { en: "So see what you think", ur: "تو دیکھو تمہاری کیا رائے ہے" }, explanation: { en: "Consulting son, not forcing", ur: "بیٹے سے مشورہ، زبردستی نہیں" }, verseRef: "37:102" },
        { term: "قَالَ يَا أَبَتِ افْعَلْ مَا تُؤْمَرُ", meaning: { en: "He said: O my father, do as you are commanded", ur: "اس نے کہا: اے ابا جان، جو حکم دیا جا رہا ہے وہ کیجیے" }, explanation: { en: "Son's willing submission to Allah's will", ur: "بیٹے کا اللہ کی مرضی پر رضامندانہ سرِ تسلیم خم" }, verseRef: "37:102" },
        { term: "سَتَجِدُنِي إِن شَاءَ اللَّهُ مِنَ الصَّابِرِينَ", meaning: { en: "You will find me, if Allah wills, of the patient", ur: "ان شاء اللہ آپ مجھے صبر کرنے والوں میں پائیں گے" }, explanation: { en: "Son pledges patience with Allah's help", ur: "بیٹے نے اللہ کی مدد سے صبر کا عہد کیا" }, verseRef: "37:102" },
        { term: "فَلَمَّا أَسْلَمَا", meaning: { en: "When they both submitted", ur: "جب دونوں نے سرِ تسلیم خم کر دیا" }, explanation: { en: "Both father and son submitted to Allah", ur: "باپ اور بیٹے دونوں نے اللہ کے آگے سر جھکا دیا" }, verseRef: "37:103" },
        { term: "وَتَلَّهُ لِلْجَبِينِ", meaning: { en: "And he put him down upon his forehead", ur: "اور اسے ماتھے کے بل لٹایا" }, explanation: { en: "Laid son face-down for sacrifice", ur: "بیٹے کو قربانی کے لیے منہ کے بل لٹایا" }, verseRef: "37:103" },
        { term: "وَنَادَيْنَاهُ أَن يَا إِبْرَاهِيمُ", meaning: { en: "We called to him: O Ibrahim!", ur: "ہم نے اسے پکارا: اے ابراہیم!" }, explanation: { en: "Divine intervention at critical moment", ur: "نازک لمحے میں الٰہی مداخلت" }, verseRef: "37:104" },
        { term: "قَدْ صَدَّقْتَ الرُّؤْيَا", meaning: { en: "You have fulfilled the vision", ur: "تم نے خواب سچ کر دکھایا" }, explanation: { en: "Test passed - intention accepted", ur: "آزمائش میں کامیاب - نیت قبول" }, verseRef: "37:105" },
        { term: "إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ", meaning: { en: "Indeed, We thus reward the doers of good", ur: "بیشک ہم نیکی کرنے والوں کو اسی طرح بدلہ دیتے ہیں" }, explanation: { en: "Reward for those who do excellent", ur: "نیکی کرنے والوں کا بدلہ" }, verseRef: "37:105" },
        { term: "إِنَّ هَٰذَا لَهُوَ الْبَلَاءُ الْمُبِينُ", meaning: { en: "Indeed, this was the clear trial", ur: "بیشک یہ کھلی آزمائش تھی" }, explanation: { en: "Ultimate test of faith", ur: "ایمان کی سب سے بڑی آزمائش" }, verseRef: "37:106" },
        { term: "وَفَدَيْنَاهُ بِذِبْحٍ عَظِيمٍ", meaning: { en: "And We ransomed him with a great sacrifice", ur: "اور ہم نے ایک بڑی قربانی کے ذریعے اس کا فدیہ دیا" }, explanation: { en: "Ram provided as substitute - origin of Eid sacrifice", ur: "مینڈھا بطور متبادل - عید قربانی کی ابتدا" }, verseRef: "37:107" },
        { term: "وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ", meaning: { en: "And We left for him [favorable mention] among later generations", ur: "اور ہم نے آنے والوں میں ان کا (اچھا) ذکر باقی رکھا" }, explanation: { en: "Ibrahim's legacy honored forever", ur: "ابراہیم کی وراثت ہمیشہ کے لیے معزز" }, verseRef: "37:108" },
        { term: "سَلَامٌ عَلَىٰ إِبْرَاهِيمَ", meaning: { en: "Peace upon Ibrahim", ur: "ابراہیم پر سلام" }, explanation: { en: "Divine peace upon Ibrahim", ur: "ابراہیم پر الٰہی سلامتی" }, verseRef: "37:109" },
        { term: "وَبَشَّرْنَاهُ بِإِسْحَاقَ نَبِيًّا مِّنَ الصَّالِحِينَ", meaning: { en: "We gave him good tidings of Ishaq, a prophet from the righteous", ur: "ہم نے اسے اسحاق کی خوشخبری دی، نیک لوگوں میں سے ایک نبی" }, explanation: { en: "Additional blessing - another prophet son", ur: "اضافی نعمت - ایک اور نبی بیٹا" }, verseRef: "37:112" },
        { term: "وَبَارَكْنَا عَلَيْهِ وَعَلَىٰ إِسْحَاقَ", meaning: { en: "We blessed him and Ishaq", ur: "ہم نے ان پر اور اسحاق پر برکت نازل فرمائی" }, explanation: { en: "Blessings on father and son", ur: "باپ اور بیٹے پر برکات" }, verseRef: "37:113" }
      ]
    },

    prophetMusaHarun: {
      name: "Prophets Musa and Harun",
      nameUr: "حضرت موسیٰ اور ہارون",
      nameArabic: "النبيان موسى وهارون",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَلَقَدْ مَنَنَّا عَلَىٰ مُوسَىٰ وَهَارُونَ", meaning: { en: "And We bestowed favor upon Musa and Harun", ur: "اور ہم نے موسیٰ اور ہارون پر احسان فرمایا" }, explanation: { en: "Special grace upon both brothers", ur: "دونوں بھائیوں پر خاص فضل" }, verseRef: "37:114" },
        { term: "وَنَجَّيْنَاهُمَا وَقَوْمَهُمَا مِنَ الْكَرْبِ الْعَظِيمِ", meaning: { en: "We saved them and their people from the great distress", ur: "ہم نے انہیں اور ان کی قوم کو بڑی مصیبت سے بچایا" }, explanation: { en: "Saved from Pharaoh's oppression", ur: "فرعون کے ظلم سے بچائے" }, verseRef: "37:115" },
        { term: "وَنَصَرْنَاهُمْ فَكَانُوا هُمُ الْغَالِبِينَ", meaning: { en: "We supported them so they were the predominant", ur: "ہم نے ان کی مدد کی تو وہ غالب رہے" }, explanation: { en: "Divine support led to victory", ur: "الٰہی مدد سے فتح ملی" }, verseRef: "37:116" },
        { term: "وَآتَيْنَاهُمَا الْكِتَابَ الْمُسْتَبِينَ", meaning: { en: "We gave them the clear Scripture", ur: "ہم نے انہیں واضح کتاب دی" }, explanation: { en: "Given the Torah", ur: "توراۃ عطا کی گئی" }, verseRef: "37:117" },
        { term: "وَهَدَيْنَاهُمَا الصِّرَاطَ الْمُسْتَقِيمَ", meaning: { en: "We guided them to the straight path", ur: "ہم نے انہیں سیدھے راستے کی ہدایت دی" }, explanation: { en: "Guided to right way", ur: "سیدھے راستے کی ہدایت" }, verseRef: "37:118" },
        { term: "وَتَرَكْنَا عَلَيْهِمَا فِي الْآخِرِينَ", meaning: { en: "We left for them [favorable mention] among later generations", ur: "ہم نے آنے والوں میں ان کا (اچھا) ذکر باقی رکھا" }, explanation: { en: "Legacy honored", ur: "وراثت معزز" }, verseRef: "37:119" },
        { term: "سَلَامٌ عَلَىٰ مُوسَىٰ وَهَارُونَ", meaning: { en: "Peace upon Musa and Harun", ur: "موسیٰ اور ہارون پر سلام" }, explanation: { en: "Divine peace upon both", ur: "دونوں پر الٰہی سلامتی" }, verseRef: "37:120" },
        { term: "إِنَّهُمَا مِنْ عِبَادِنَا الْمُؤْمِنِينَ", meaning: { en: "Indeed, they were of Our believing servants", ur: "بیشک وہ ہمارے مومن بندوں میں سے تھے" }, explanation: { en: "Praised as sincere believers", ur: "مخلص مومنوں کے طور پر تعریف" }, verseRef: "37:122" }
      ]
    },

    prophetIlyas: {
      name: "Prophet Ilyas (Elijah)",
      nameUr: "حضرت الیاس",
      nameArabic: "النبي إلياس",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَإِنَّ إِلْيَاسَ لَمِنَ الْمُرْسَلِينَ", meaning: { en: "And indeed, Ilyas was among the messengers", ur: "اور بیشک الیاس رسولوں میں سے تھے" }, explanation: { en: "Ilyas confirmed as prophet", ur: "الیاس نبی کے طور پر تصدیق" }, verseRef: "37:123" },
        { term: "إِذْ قَالَ لِقَوْمِهِ أَلَا تَتَّقُونَ", meaning: { en: "When he said to his people: Will you not fear Allah?", ur: "جب انہوں نے اپنی قوم سے کہا: کیا تم اللہ سے نہیں ڈرتے؟" }, explanation: { en: "Calling people to taqwa", ur: "لوگوں کو تقویٰ کی دعوت" }, verseRef: "37:124" },
        { term: "أَتَدْعُونَ بَعْلًا وَتَذَرُونَ أَحْسَنَ الْخَالِقِينَ", meaning: { en: "Do you call upon Ba'l and leave the best of creators?", ur: "کیا تم بعل کو پکارتے ہو اور سب سے بہتر خالق کو چھوڑتے ہو؟" }, explanation: { en: "Rebuking worship of Ba'l idol", ur: "بعل بت کی عبادت کی سرزنش" }, verseRef: "37:125" },
        { term: "اللَّهَ رَبَّكُمْ وَرَبَّ آبَائِكُمُ الْأَوَّلِينَ", meaning: { en: "Allah, your Lord and the Lord of your forefathers", ur: "اللہ، تمہارا رب اور تمہارے پہلے باپ دادا کا رب" }, explanation: { en: "Reminding them of one true Lord", ur: "ان کو ایک سچے رب کی یاد دہانی" }, verseRef: "37:126" },
        { term: "فَكَذَّبُوهُ فَإِنَّهُمْ لَمُحْضَرُونَ", meaning: { en: "But they denied him, so they will be brought [for punishment]", ur: "لیکن انہوں نے جھٹلایا، پس وہ حاضر کیے جائیں گے" }, explanation: { en: "Rejection leads to punishment", ur: "رد کرنا سزا کی طرف لے جاتا ہے" }, verseRef: "37:127" },
        { term: "إِلَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ", meaning: { en: "Except the chosen servants of Allah", ur: "مگر اللہ کے چنے ہوئے بندے" }, explanation: { en: "Sincere believers exempted", ur: "مخلص مومنین مستثنیٰ" }, verseRef: "37:128" },
        { term: "وَتَرَكْنَا عَلَيْهِ فِي الْآخِرِينَ", meaning: { en: "We left for him [favorable mention] among later generations", ur: "اور ہم نے آنے والوں میں ان کا (اچھا) ذکر باقی رکھا" }, explanation: { en: "Ilyas's legacy honored", ur: "الیاس کی وراثت معزز" }, verseRef: "37:129" },
        { term: "سَلَامٌ عَلَىٰ إِلْ يَاسِينَ", meaning: { en: "Peace upon Ilyas", ur: "الیاس پر سلام" }, explanation: { en: "Divine peace upon Ilyas", ur: "الیاس پر الٰہی سلامتی" }, verseRef: "37:130" }
      ]
    },

    prophetLut: {
      name: "Prophet Lut",
      nameUr: "حضرت لوط",
      nameArabic: "النبي لوط",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَإِنَّ لُوطًا لَّمِنَ الْمُرْسَلِينَ", meaning: { en: "And indeed, Lut was among the messengers", ur: "اور بیشک لوط رسولوں میں سے تھے" }, explanation: { en: "Lut confirmed as prophet", ur: "لوط نبی کے طور پر تصدیق" }, verseRef: "37:133" },
        { term: "إِذْ نَجَّيْنَاهُ وَأَهْلَهُ أَجْمَعِينَ", meaning: { en: "When We saved him and his family, all", ur: "جب ہم نے انہیں اور ان کے سب گھر والوں کو بچایا" }, explanation: { en: "Family rescued from destruction", ur: "خاندان تباہی سے بچایا گیا" }, verseRef: "37:134" },
        { term: "إِلَّا عَجُوزًا فِي الْغَابِرِينَ", meaning: { en: "Except an old woman among those who remained behind", ur: "مگر ایک بوڑھی عورت جو پیچھے رہ جانے والوں میں تھی" }, explanation: { en: "His wife was among the destroyed", ur: "ان کی بیوی ہلاک ہونے والوں میں تھی" }, verseRef: "37:135" },
        { term: "ثُمَّ دَمَّرْنَا الْآخَرِينَ", meaning: { en: "Then We destroyed the others", ur: "پھر ہم نے باقی سب کو تباہ کر دیا" }, explanation: { en: "Complete destruction of his people", ur: "ان کی قوم کی مکمل تباہی" }, verseRef: "37:136" },
        { term: "وَإِنَّكُمْ لَتَمُرُّونَ عَلَيْهِم مُّصْبِحِينَ", meaning: { en: "And indeed, you pass by them in the morning", ur: "اور بیشک تم صبح کو ان کے پاس سے گزرتے ہو" }, explanation: { en: "Ruins visible in morning travel", ur: "کھنڈرات صبح کے سفر میں نظر آتے ہیں" }, verseRef: "37:137" },
        { term: "وَبِاللَّيْلِ أَفَلَا تَعْقِلُونَ", meaning: { en: "And at night. Will you not use reason?", ur: "اور رات کو۔ کیا تم عقل نہیں رکھتے؟" }, explanation: { en: "Signs visible day and night - reflect!", ur: "نشانیاں دن رات نظر آتی ہیں - غور کرو!" }, verseRef: "37:138" }
      ]
    },

    prophetYunus: {
      name: "Prophet Yunus",
      nameUr: "حضرت یونس",
      nameArabic: "النبي يونس",
      color: "#3B82F6",
      icon: "Star",
      concepts: [
        { term: "وَإِنَّ يُونُسَ لَمِنَ الْمُرْسَلِينَ", meaning: { en: "And indeed, Yunus was among the messengers", ur: "اور بیشک یونس رسولوں میں سے تھے" }, explanation: { en: "Yunus confirmed as prophet", ur: "یونس نبی کے طور پر تصدیق" }, verseRef: "37:139" },
        { term: "إِذْ أَبَقَ إِلَى الْفُلْكِ الْمَشْحُونِ", meaning: { en: "When he ran away to the laden ship", ur: "جب وہ بھری ہوئی کشتی کی طرف بھاگے" }, explanation: { en: "Fled on a fully-loaded ship", ur: "بھری ہوئی کشتی پر بھاگے" }, verseRef: "37:140" },
        { term: "فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ", meaning: { en: "He drew lots and was among the losers", ur: "انہوں نے قرعہ ڈالا تو ہارنے والوں میں ہو گئے" }, explanation: { en: "Lost the lot and was thrown overboard", ur: "قرعہ ہارے اور سمندر میں پھینکے گئے" }, verseRef: "37:141" },
        { term: "فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ", meaning: { en: "Then the fish swallowed him, while he was blameworthy", ur: "پھر مچھلی نے انہیں نگل لیا جبکہ وہ قابلِ ملامت تھے" }, explanation: { en: "Swallowed by whale while at fault", ur: "غلطی پر ہوتے ہوئے مچھلی نے نگل لیا" }, verseRef: "37:142" },
        { term: "فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ", meaning: { en: "Had he not been of those who glorify Allah", ur: "اگر وہ تسبیح کرنے والوں میں سے نہ ہوتے" }, explanation: { en: "His habit of glorifying Allah saved him", ur: "اللہ کی تسبیح کی عادت نے بچایا" }, verseRef: "37:143" },
        { term: "لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ", meaning: { en: "He would have remained in its belly until Day of Resurrection", ur: "تو قیامت تک اس کے پیٹ میں رہتے" }, explanation: { en: "Would have stayed until Judgment Day", ur: "قیامت تک رہ جاتے" }, verseRef: "37:144" },
        { term: "فَنَبَذْنَاهُ بِالْعَرَاءِ وَهُوَ سَقِيمٌ", meaning: { en: "We cast him onto the open shore while he was ill", ur: "ہم نے اسے کھلے میدان میں پھینکا جبکہ وہ بیمار تھے" }, explanation: { en: "Ejected onto barren shore, weakened", ur: "بنجر ساحل پر پھینکے گئے، کمزور حالت میں" }, verseRef: "37:145" },
        { term: "وَأَنبَتْنَا عَلَيْهِ شَجَرَةً مِّن يَقْطِينٍ", meaning: { en: "And We grew over him a gourd plant", ur: "اور ہم نے ان پر ایک کدو کی بیل اگائی" }, explanation: { en: "Gourd vine for shade and nourishment", ur: "سایہ اور غذا کے لیے کدو کی بیل" }, verseRef: "37:146" },
        { term: "وَأَرْسَلْنَاهُ إِلَىٰ مِائَةِ أَلْفٍ أَوْ يَزِيدُونَ", meaning: { en: "We sent him to a hundred thousand or more", ur: "ہم نے انہیں ایک لاکھ یا اس سے زیادہ لوگوں کی طرف بھیجا" }, explanation: { en: "Sent to over 100,000 people", ur: "ایک لاکھ سے زیادہ لوگوں کی طرف بھیجے گئے" }, verseRef: "37:147" },
        { term: "فَآمَنُوا فَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ", meaning: { en: "They believed, so We gave them enjoyment for a time", ur: "وہ ایمان لائے تو ہم نے انہیں ایک مدت تک فائدہ اٹھانے دیا" }, explanation: { en: "His people believed - rare success! Punishment averted", ur: "ان کی قوم ایمان لائی - نادر کامیابی! عذاب ٹل گیا" }, verseRef: "37:148" }
      ]
    },

    refutingAngelsAsDaughters: {
      name: "Refuting Angels as Daughters",
      nameUr: "فرشتوں کو بیٹیاں کہنے کی تردید",
      nameArabic: "رد دعوى الملائكة بنات",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَاسْتَفْتِهِمْ أَلِرَبِّكَ الْبَنَاتُ وَلَهُمُ الْبَنُونَ", meaning: { en: "Ask them: Does your Lord have daughters while they have sons?", ur: "ان سے پوچھو: کیا تمہارے رب کے لیے بیٹیاں ہیں اور ان کے لیے بیٹے؟" }, explanation: { en: "Exposing hypocrisy - they dislike daughters but ascribe them to Allah", ur: "منافقت کا پردہ فاش - خود بیٹیاں ناپسند کرتے ہیں لیکن اللہ کو منسوب کرتے ہیں" }, verseRef: "37:149" },
        { term: "أَمْ خَلَقْنَا الْمَلَائِكَةَ إِنَاثًا وَهُمْ شَاهِدُونَ", meaning: { en: "Or did We create the angels as females while they were witnesses?", ur: "کیا ہم نے فرشتوں کو مادہ بنایا جبکہ وہ دیکھ رہے تھے؟" }, explanation: { en: "Were they present at angels' creation?", ur: "کیا وہ فرشتوں کی تخلیق کے وقت موجود تھے؟" }, verseRef: "37:150" },
        { term: "أَلَا إِنَّهُم مِّنْ إِفْكِهِمْ لَيَقُولُونَ", meaning: { en: "Unquestionably, it is out of their falsehood that they say", ur: "بلاشبہ وہ اپنے جھوٹ سے کہتے ہیں" }, explanation: { en: "Their claim is pure fabrication", ur: "ان کا دعویٰ خالص جھوٹ ہے" }, verseRef: "37:151" },
        { term: "وَلَدَ اللَّهُ وَإِنَّهُمْ لَكَاذِبُونَ", meaning: { en: "Allah has begotten, and indeed, they are liars", ur: "اللہ نے جنا ہے، اور بیشک وہ جھوٹے ہیں" }, explanation: { en: "Claiming Allah has offspring is a lie", ur: "اللہ کی اولاد ہونے کا دعویٰ جھوٹ ہے" }, verseRef: "37:152" },
        { term: "أَصْطَفَى الْبَنَاتِ عَلَى الْبَنِينَ", meaning: { en: "Has He chosen daughters over sons?", ur: "کیا اس نے بیٹوں پر بیٹیوں کو ترجیح دی؟" }, explanation: { en: "Absurd - they prefer sons but say Allah prefers daughters?", ur: "بے تکی بات - وہ بیٹے پسند کرتے ہیں لیکن کہتے ہیں اللہ بیٹیاں پسند کرتا ہے؟" }, verseRef: "37:153" },
        { term: "مَا لَكُمْ كَيْفَ تَحْكُمُونَ", meaning: { en: "What is wrong with you? How do you judge?", ur: "تمہیں کیا ہوا؟ تم کیسا فیصلہ کرتے ہو؟" }, explanation: { en: "Rebuking their illogical judgment", ur: "ان کے غیر منطقی فیصلے پر سرزنش" }, verseRef: "37:154" },
        { term: "أَفَلَا تَذَكَّرُونَ", meaning: { en: "Will you not be reminded?", ur: "کیا تم نصیحت نہیں پکڑتے؟" }, explanation: { en: "Call to reflect and remember", ur: "غور و فکر اور یاد کرنے کی دعوت" }, verseRef: "37:155" }
      ]
    },

    falseRelationshipWithJinn: {
      name: "False Relationship with Jinn",
      nameUr: "جنوں سے جھوٹا رشتہ",
      nameArabic: "الكذب في علاقة الجن",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَجَعَلُوا بَيْنَهُ وَبَيْنَ الْجِنَّةِ نَسَبًا", meaning: { en: "And they have claimed between Him and the jinn a lineage", ur: "اور انہوں نے اس کے اور جنوں کے درمیان رشتہ داری جوڑی" }, explanation: { en: "Falsely claimed kinship between Allah and jinn", ur: "اللہ اور جنوں کے درمیان جھوٹا رشتہ جوڑا" }, verseRef: "37:158" },
        { term: "وَلَقَدْ عَلِمَتِ الْجِنَّةُ إِنَّهُمْ لَمُحْضَرُونَ", meaning: { en: "The jinn have already known that they will be brought [for judgment]", ur: "جنوں نے خود جان لیا کہ وہ حاضر کیے جائیں گے" }, explanation: { en: "Even jinn know they will be judged", ur: "جن بھی جانتے ہیں کہ ان کا حساب ہوگا" }, verseRef: "37:158" },
        { term: "سُبْحَانَ اللَّهِ عَمَّا يَصِفُونَ", meaning: { en: "Exalted is Allah above what they describe", ur: "اللہ پاک ہے ان باتوں سے جو وہ بیان کرتے ہیں" }, explanation: { en: "Allah is far above their false claims", ur: "اللہ ان کے جھوٹے دعوؤں سے بہت بلند ہے" }, verseRef: "37:159" },
        { term: "إِلَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ", meaning: { en: "Except the chosen servants of Allah", ur: "مگر اللہ کے چنے ہوئے بندے" }, explanation: { en: "Sincere servants know the truth", ur: "مخلص بندے سچائی جانتے ہیں" }, verseRef: "37:160" }
      ]
    },

    disbelieversAndIdols: {
      name: "Disbelievers Cannot Mislead",
      nameUr: "کافر گمراہ نہیں کر سکتے",
      nameArabic: "الكافرون لا يضلون",
      color: "#10B981",
      icon: "Shield",
      concepts: [
        { term: "فَإِنَّكُمْ وَمَا تَعْبُدُونَ", meaning: { en: "So indeed, you and whatever you worship", ur: "پس بیشک تم اور جن کی تم عبادت کرتے ہو" }, explanation: { en: "Addressing idolaters and their gods", ur: "بت پرستوں اور ان کے معبودوں سے مخاطب" }, verseRef: "37:161" },
        { term: "مَا أَنتُمْ عَلَيْهِ بِفَاتِنِينَ", meaning: { en: "You cannot tempt [anyone] away from Him", ur: "تم اس سے کسی کو بہکا نہیں سکتے" }, explanation: { en: "Cannot mislead anyone destined for truth", ur: "سچائی کے لیے مقدر کسی کو گمراہ نہیں کر سکتے" }, verseRef: "37:162" },
        { term: "إِلَّا مَنْ هُوَ صَالِ الْجَحِيمِ", meaning: { en: "Except he who is to burn in Hellfire", ur: "مگر جو جہنم میں جلنے والا ہو" }, explanation: { en: "Only those destined for Hell are misled", ur: "صرف جہنم کے مقدر والے گمراہ ہوتے ہیں" }, verseRef: "37:163" }
      ]
    },

    angelsGlorifyingAllah: {
      name: "Angels Glorifying Allah",
      nameUr: "فرشتوں کی تسبیح",
      nameArabic: "تسبيح الملائكة",
      color: "#8B5CF6",
      icon: "Sparkles",
      concepts: [
        { term: "وَمَا مِنَّا إِلَّا لَهُ مَقَامٌ مَّعْلُومٌ", meaning: { en: "There is not among us except that for him is a known position", ur: "ہم میں سے ہر ایک کا ایک مقررہ مقام ہے" }, explanation: { en: "Angels have designated ranks and positions", ur: "فرشتوں کے مقررہ مرتبے اور مقامات ہیں" }, verseRef: "37:164" },
        { term: "وَإِنَّا لَنَحْنُ الصَّافُّونَ", meaning: { en: "And indeed, we are those who line up", ur: "اور بیشک ہم صف بنانے والے ہیں" }, explanation: { en: "Angels arranged in rows for worship", ur: "فرشتے عبادت کے لیے صفوں میں کھڑے" }, verseRef: "37:165" },
        { term: "وَإِنَّا لَنَحْنُ الْمُسَبِّحُونَ", meaning: { en: "And indeed, we are those who glorify", ur: "اور بیشک ہم تسبیح کرنے والے ہیں" }, explanation: { en: "Angels constantly glorify Allah", ur: "فرشتے مسلسل اللہ کی تسبیح کرتے ہیں" }, verseRef: "37:166" }
      ]
    },

    disbelieversDenial: {
      name: "Disbelievers' Denial and Regret",
      nameUr: "کافروں کا انکار اور پچھتاوا",
      nameArabic: "إنكار الكافرين وندمهم",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَإِن كَانُوا لَيَقُولُونَ", meaning: { en: "And indeed, they used to say", ur: "اور بیشک وہ کہا کرتے تھے" }, explanation: { en: "Disbelievers claimed...", ur: "کافروں نے دعویٰ کیا..." }, verseRef: "37:167" },
        { term: "لَوْ أَنَّ عِندَنَا ذِكْرًا مِّنَ الْأَوَّلِينَ", meaning: { en: "If we had a message from the former peoples", ur: "اگر ہمارے پاس پہلے لوگوں کا کوئی پیغام ہوتا" }, explanation: { en: "Claimed they would believe if given a scripture", ur: "دعویٰ کیا کہ اگر کتاب ملے تو ایمان لے آئیں" }, verseRef: "37:168" },
        { term: "لَكُنَّا عِبَادَ اللَّهِ الْمُخْلَصِينَ", meaning: { en: "We would have been the chosen servants of Allah", ur: "تو ہم اللہ کے چنے ہوئے بندے ہوتے" }, explanation: { en: "Falsely claimed they would be sincere", ur: "جھوٹا دعویٰ کیا کہ وہ مخلص ہوتے" }, verseRef: "37:169" },
        { term: "فَكَفَرُوا بِهِ", meaning: { en: "But they disbelieved in it", ur: "لیکن انہوں نے اس کا انکار کیا" }, explanation: { en: "When Quran came, they rejected it", ur: "جب قرآن آیا تو انہوں نے رد کر دیا" }, verseRef: "37:170" },
        { term: "فَسَوْفَ يَعْلَمُونَ", meaning: { en: "They will come to know", ur: "عنقریب انہیں معلوم ہو جائے گا" }, explanation: { en: "Warning of coming consequences", ur: "آنے والے نتائج کی تنبیہ" }, verseRef: "37:170" }
      ]
    },

    divinePromise: {
      name: "Divine Promise of Victory",
      nameUr: "فتح کا الٰہی وعدہ",
      nameArabic: "الوعد الإلهي بالنصر",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَلَقَدْ سَبَقَتْ كَلِمَتُنَا لِعِبَادِنَا الْمُرْسَلِينَ", meaning: { en: "Our word has preceded for Our servants, the messengers", ur: "ہمارا فرمان ہمارے بندوں رسولوں کے حق میں پہلے سے طے ہے" }, explanation: { en: "Promise already decreed for prophets", ur: "انبیاء کے حق میں وعدہ پہلے سے مقرر" }, verseRef: "37:171" },
        { term: "إِنَّهُمْ لَهُمُ الْمَنصُورُونَ", meaning: { en: "Indeed, they will be those given victory", ur: "بیشک وہی غالب آنے والے ہیں" }, explanation: { en: "Prophets will ultimately be victorious", ur: "انبیاء آخرکار فتح پائیں گے" }, verseRef: "37:172" },
        { term: "وَإِنَّ جُندَنَا لَهُمُ الْغَالِبُونَ", meaning: { en: "And indeed, Our soldiers will be those who overcome", ur: "اور بیشک ہمارا لشکر ہی غالب ہوگا" }, explanation: { en: "Allah's army will prevail", ur: "اللہ کا لشکر غالب آئے گا" }, verseRef: "37:173" },
        { term: "فَتَوَلَّ عَنْهُمْ حَتَّىٰ حِينٍ", meaning: { en: "So turn away from them for a time", ur: "تو ان سے ایک وقت تک منہ موڑ لو" }, explanation: { en: "Prophet told to be patient temporarily", ur: "نبی ﷺ کو عارضی صبر کی تلقین" }, verseRef: "37:174" },
        { term: "وَأَبْصِرْهُمْ فَسَوْفَ يُبْصِرُونَ", meaning: { en: "And watch them, for they are going to see", ur: "اور انہیں دیکھو، عنقریب وہ بھی دیکھیں گے" }, explanation: { en: "Prophet will witness their fate", ur: "نبی ﷺ ان کا انجام دیکھیں گے" }, verseRef: "37:175" }
      ]
    },

    closingGlorification: {
      name: "Closing Glorification",
      nameUr: "اختتامی تسبیح",
      nameArabic: "التسبيح الختامي",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "أَفَبِعَذَابِنَا يَسْتَعْجِلُونَ", meaning: { en: "Do they wish to hasten Our punishment?", ur: "کیا وہ ہمارے عذاب میں جلدی چاہتے ہیں؟" }, explanation: { en: "Fools who mock and rush toward punishment", ur: "احمق جو مذاق اڑاتے اور عذاب کی طرف دوڑتے ہیں" }, verseRef: "37:176" },
        { term: "فَإِذَا نَزَلَ بِسَاحَتِهِمْ فَسَاءَ صَبَاحُ الْمُنذَرِينَ", meaning: { en: "When it descends in their territory, evil is the morning of those warned", ur: "جب وہ ان کے صحن میں اتر پڑے تو ڈرائے جانے والوں کی صبح بری ہوگی" }, explanation: { en: "Terrible morning awaits those who were warned", ur: "ڈرائے جانے والوں کے لیے بھیانک صبح منتظر ہے" }, verseRef: "37:177" },
        { term: "وَتَوَلَّ عَنْهُمْ حَتَّىٰ حِينٍ", meaning: { en: "Turn away from them for a time", ur: "ان سے ایک وقت تک منہ موڑ لو" }, explanation: { en: "Repeated counsel for patience", ur: "صبر کی بار بار نصیحت" }, verseRef: "37:178" },
        { term: "وَأَبْصِرْ فَسَوْفَ يُبْصِرُونَ", meaning: { en: "And watch, for they are going to see", ur: "اور دیکھو، عنقریب وہ بھی دیکھیں گے" }, explanation: { en: "Prophet will witness their end", ur: "نبی ﷺ ان کا انجام دیکھیں گے" }, verseRef: "37:179" },
        { term: "سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ", meaning: { en: "Exalted is your Lord, the Lord of might, above what they describe", ur: "پاک ہے تیرا رب، عزت کا رب، ان باتوں سے جو وہ بیان کرتے ہیں" }, explanation: { en: "Allah transcends all false descriptions", ur: "اللہ تمام جھوٹی تعریفات سے بالا ہے" }, verseRef: "37:180" },
        { term: "وَسَلَامٌ عَلَى الْمُرْسَلِينَ", meaning: { en: "And peace upon the messengers", ur: "اور رسولوں پر سلام" }, explanation: { en: "Peace upon all prophets", ur: "تمام انبیاء پر سلامتی" }, verseRef: "37:181" },
        { term: "وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", meaning: { en: "And praise to Allah, Lord of the worlds", ur: "اور تمام تعریف اللہ رب العالمین کے لیے ہے" }, explanation: { en: "Surah closes with praise of Allah", ur: "سورت اللہ کی حمد سے ختم ہوتی ہے" }, verseRef: "37:182" }
      ]
    }
  },

  relationships: [
    { from: "الصافات صفاً", to: "إن إلهكم لواحد", type: "testimony", description: { en: "Angels ranged in rows testify to Allah's Oneness", ur: "صف بستہ فرشتے اللہ کی وحدانیت کی گواہی دیتے ہیں" } },
    { from: "شهاب ثاقب", to: "يسمعون الملأ الأعلى", type: "protection", description: { en: "Shooting stars prevent devils from eavesdropping", ur: "شہاب ثاقب شیطانوں کو کان لگانے سے روکتے ہیں" } },
    { from: "طين لازب", to: "أهم أشد خلقاً", type: "humility", description: { en: "Humans from clay - not harder to create than heavens", ur: "مٹی سے بنے انسان - آسمانوں سے زیادہ مشکل تخلیق نہیں" } },
    { from: "ألفوا آباءهم ضالين", to: "يهرعون", type: "blind-following", description: { en: "Hastening to follow misguided ancestors", ur: "گمراہ باپ دادا کی پیروی میں دوڑنا" } },
    { from: "أرى في المنام أني أذبحك", to: "افعل ما تؤمر", type: "submission", description: { en: "Father's vision met with son's willing submission", ur: "باپ کے خواب پر بیٹے کی رضامندانہ فرمانبرداری" } },
    { from: "فديناه بذبح عظيم", to: "صدقت الرؤيا", type: "divine-intervention", description: { en: "Test passed, ram substituted - origin of Qurbani", ur: "آزمائش میں کامیاب، مینڈھا متبادل - قربانی کی ابتدا" } },
    { from: "كان من المسبحين", to: "نبذناه بالعراء", type: "salvation", description: { en: "Yunus's habit of glorification led to rescue", ur: "یونس کی تسبیح کی عادت نے نجات دلائی" } },
    { from: "فآمنوا", to: "فمتعناهم", type: "acceptance", description: { en: "Yunus's people believed - rare prophetic success", ur: "یونس کی قوم ایمان لائی - نبوی دعوت کی نادر کامیابی" } },
    { from: "لربك البنات ولهم البنون", to: "كيف تحكمون", type: "logical-refutation", description: { en: "Exposing hypocrisy of ascribing daughters to Allah", ur: "اللہ کو بیٹیاں منسوب کرنے کی منافقت بے نقاب" } },
    { from: "إنهم لهم المنصورون", to: "جندنا لهم الغالبون", type: "divine-promise", description: { en: "Prophets and their followers will ultimately prevail", ur: "انبیاء اور ان کے پیروکار آخرکار غالب آئیں گے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Angels in Rows", verses: "37:1-10", description: { en: "Opening oaths - angels testifying to Tawheed, protection of heavens", ur: "آغاز کی قسمیں - فرشتوں کی توحید کی گواہی، آسمانوں کی حفاظت" } },
      { stage: 2, theme: "Creation Argument", verses: "37:11-21", description: { en: "Humans from clay, disbelievers mock despite signs", ur: "مٹی سے انسان، نشانیوں کے باوجود کافروں کا مذاق" } },
      { stage: 3, theme: "Judgment Day Scenes", verses: "37:22-39", description: { en: "Gathering wrongdoers, questioning, mutual blame, punishment for arrogance", ur: "ظالموں کو جمع کرنا، سوال، باہمی الزام، تکبر کی سزا" } },
      { stage: 4, theme: "Paradise Description", verses: "37:40-61", description: { en: "Rewards for believers: gardens, drinks, companions, eternal bliss", ur: "مومنوں کا اجر: باغات، مشروبات، ساتھی، ابدی نعمت" } },
      { stage: 5, theme: "Hell Description", verses: "37:62-68", description: { en: "Tree of Zaqqum, boiling drink, cycle of punishment", ur: "زقوم کا درخت، کھولتا مشروب، عذاب کا سلسلہ" } },
      { stage: 6, theme: "Blind Following", verses: "37:69-74", description: { en: "Following misguided ancestors, warners sent but rejected", ur: "گمراہ باپ دادا کی پیروی، ڈرانے والے بھیجے گئے لیکن رد کیے گئے" } },
      { stage: 7, theme: "Prophet Nuh", verses: "37:75-82", description: { en: "Nuh's prayer answered, saved from flood, disbelievers drowned", ur: "نوح کی دعا قبول، سیلاب سے نجات، کافر ڈوب گئے" } },
      { stage: 8, theme: "Prophet Ibrahim - Part 1", verses: "37:83-98", description: { en: "Sound heart, questioning idols, smashing them, thrown in fire", ur: "صاف دل، بتوں پر سوال، توڑنا، آگ میں ڈالنا" } },
      { stage: 9, theme: "Ibrahim's Sacrifice", verses: "37:99-113", description: { en: "Dua for son, vision of sacrifice, test passed, ram substituted, Ishaq promised", ur: "بیٹے کی دعا، قربانی کا خواب، آزمائش میں کامیاب، مینڈھا متبادل، اسحاق کی بشارت" } },
      { stage: 10, theme: "Prophets Musa and Harun", verses: "37:114-122", description: { en: "Saved from distress, given Torah, guided, honored", ur: "مصیبت سے بچائے، توراۃ دی، ہدایت دی، عزت بخشی" } },
      { stage: 11, theme: "Prophet Ilyas", verses: "37:123-132", description: { en: "Called to taqwa, condemned Ba'l worship, rejected but honored", ur: "تقویٰ کی دعوت، بعل کی عبادت کی مذمت، رد کیے گئے لیکن عزت پائی" } },
      { stage: 12, theme: "Prophet Lut", verses: "37:133-138", description: { en: "Family saved, wife remained, people destroyed, ruins as signs", ur: "خاندان بچایا، بیوی رہ گئی، قوم تباہ، کھنڈرات بطور نشانیاں" } },
      { stage: 13, theme: "Prophet Yunus", verses: "37:139-148", description: { en: "Fled, swallowed by whale, glorified Allah, saved, people believed", ur: "بھاگے، مچھلی نے نگلا، اللہ کی تسبیح، نجات، قوم ایمان لائی" } },
      { stage: 14, theme: "Refuting False Claims", verses: "37:149-166", description: { en: "Angels not daughters, no kinship with jinn, angels' worship", ur: "فرشتے بیٹیاں نہیں، جنوں سے رشتہ نہیں، فرشتوں کی عبادت" } },
      { stage: 15, theme: "Promise of Victory", verses: "37:167-179", description: { en: "Disbelievers' false claims, divine promise to prophets", ur: "کافروں کے جھوٹے دعوے، انبیاء سے الٰہی وعدہ" } },
      { stage: 16, theme: "Closing Glorification", verses: "37:180-182", description: { en: "Exalting Allah, peace on messengers, praise to Lord of worlds", ur: "اللہ کی تسبیح، رسولوں پر سلام، رب العالمین کی حمد" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Submit to divine will", how: "Like Ibrahim and Ismail - trust and obey Allah's commands even when difficult", verse: "37:102-103" },
      { principle: "Question blind traditions", how: "Like Ibrahim questioned idol worship - verify inherited beliefs", verse: "37:85-87" },
      { principle: "Maintain dhikr habitually", how: "Yunus was saved because he was من المسبحين - always glorifying", verse: "37:143-144" },
      { principle: "Be patient in trials", how: "All prophets faced rejection but Allah honored them", verse: "37:171-173" },
      { principle: "Choose companions wisely", how: "The believer in Paradise almost led astray by skeptic friend", verse: "37:51-57" },
      { principle: "Avoid blind following", how: "Don't rush after misguided ancestors - verify with reason", verse: "37:69-70" },
      { principle: "Remember end results", how: "Ruins of Lut's people visible - signs for reflection", verse: "37:137-138" },
      { principle: "Trust Allah's promises", how: "Victory decreed for believers - persevere through hardship", verse: "37:172-173" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Surah of Divine Order and Prophetic Sacrifice", ur: "الٰہی نظام اور نبوی قربانی کی سورت" },
    insight: { en: "As-Saffat opens with angels ranged in perfect rows (صَافَّاتٍ), establishing cosmic order and divine hierarchy. This imagery of orderly submission frames the entire surah's message: true success comes through submitting to Allah's order. The most powerful illustration is Ibrahim's sacrifice - when both father and son فَلَمَّا أَسْلَمَا (both submitted), the trial was passed. The surah mentions six prophets with the distinctive phrase 'سَلَامٌ عَلَىٰ' (peace upon): Nuh, Ibrahim, Musa, Harun, Ilyas - honoring those who submitted despite trials. Uniquely, Yunus's people are the only nation mentioned in the Quran that believed collectively and were spared punishment (37:148). The surah also refutes polytheistic beliefs about angels being Allah's daughters and jinn having kinship with Allah, emphasizing pure Tawheed. It closes with the most comprehensive ending formula in the Quran: glorifying Allah (37:180), sending peace upon all messengers (37:181), and praising the Lord of the worlds (37:182).", ur: "الصافات فرشتوں کی کامل صفوں (صَافَّاتٍ) سے شروع ہوتی ہے، کائناتی نظام اور الٰہی درجہ بندی قائم کرتی ہے۔ منظم فرمانبرداری کی یہ تصویر پوری سورت کے پیغام کا خاکہ بناتی ہے: سچی کامیابی اللہ کے حکم کے تابع ہونے سے ملتی ہے۔ سب سے طاقتور مثال ابراہیم کی قربانی ہے - جب باپ اور بیٹے دونوں نے فَلَمَّا أَسْلَمَا (سرِ تسلیم خم کیا)، آزمائش میں کامیاب ہوئے۔ سورت چھ انبیاء کا 'سَلَامٌ عَلَىٰ' (سلام ہو) کے منفرد انداز سے ذکر کرتی ہے: نوح، ابراہیم، موسیٰ، ہارون، الیاس - آزمائشوں کے باوجود فرمانبرداری کرنے والوں کی تکریم۔ منفرد بات یہ ہے کہ یونس کی قوم قرآن میں واحد قوم ہے جو اجتماعی طور پر ایمان لائی اور عذاب سے بچائی گئی (37:148)۔ سورت فرشتوں کو اللہ کی بیٹیاں اور جنوں کا اللہ سے رشتہ ماننے کے مشرکانہ عقائد کی تردید کرتی ہے، خالص توحید پر زور دیتی ہے۔ یہ قرآن کے سب سے جامع اختتامی فارمولے سے ختم ہوتی ہے: اللہ کی تسبیح (37:180)، تمام رسولوں پر سلام (37:181)، اور رب العالمین کی حمد (37:182)۔" }
  },

  historicalContext: {
    note: { en: "This Makkan surah addresses the polytheistic beliefs of Quraysh who considered angels to be Allah's daughters (a claim they found acceptable while despising daughters for themselves), and who claimed kinship between Allah and jinn. The surah was revealed during a period of intense persecution, offering comfort through prophet stories - all faced rejection but were ultimately honored. Ibrahim's sacrifice narrative here is the most detailed in the Quran and forms the basis of Eid al-Adha traditions. The debate over whether the sacrificed son was Ismail or Ishaq is noted by scholars, with the majority view being Ismail based on the context (Ishaq is announced separately in verse 112).", ur: "یہ مکی سورت قریش کے مشرکانہ عقائد کو مخاطب کرتی ہے جو فرشتوں کو اللہ کی بیٹیاں سمجھتے تھے (ایک دعویٰ جو انہیں قابلِ قبول تھا جبکہ خود بیٹیوں سے نفرت کرتے تھے)، اور جنہوں نے اللہ اور جنوں میں رشتہ داری کا دعویٰ کیا۔ سورت شدید ظلم و ستم کے دور میں نازل ہوئی، انبیاء کے قصوں سے تسلی فراہم کرتی ہے - سب نے رد کا سامنا کیا لیکن آخرکار عزت پائی۔ ابراہیم کی قربانی کا بیان یہاں قرآن میں سب سے تفصیلی ہے اور عید الاضحی کی روایات کی بنیاد ہے۔ قربانی کا بیٹا اسماعیل تھا یا اسحاق، اس پر علماء کا اختلاف ہے، اکثریت کی رائے سیاق و سباق کی بنیاد پر اسماعیل کے حق میں ہے (اسحاق کا ذکر الگ سے آیت 112 میں آتا ہے)۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "وَالصَّافَّاتِ صَفًّا", example: { en: "Cognate accusative", ur: "مفعول مطلق" }, effect: { en: "Intensifies meaning - those who truly stand in rows", ur: "معنی کو شدید بناتا ہے - جو واقعی صفوں میں کھڑے ہیں" } },
      { feature: "فَالزَّاجِرَاتِ / فَالتَّالِيَاتِ", example: { en: "Triple oath structure", ur: "تین قسموں کی ساخت" }, effect: { en: "Builds to conclusion of Tawheed", ur: "توحید کے نتیجے تک پہنچاتا ہے" } },
      { feature: "سَلَامٌ عَلَىٰ", example: { en: "Repeated 6 times", ur: "6 بار دہرایا گیا" }, effect: { en: "Unique honoring formula for prophets", ur: "انبیاء کی تکریم کا منفرد فارمولا" } },
      { feature: "حَلِيم", example: { en: "Describing Ismail", ur: "اسماعیل کی تعریف" }, effect: { en: "Foreshadows patience during sacrifice", ur: "قربانی کے وقت صبر کی پیشگوئی" } },
      { feature: "قَلْبٍ سَلِيم", example: { en: "Sound/pure heart", ur: "صاف/پاکیزہ دل" }, effect: { en: "Key to Ibrahim's success - spiritual purity", ur: "ابراہیم کی کامیابی کی کنجی - روحانی پاکیزگی" } },
      { feature: "الْبَلَاءُ الْمُبِينُ", example: { en: "Clear trial", ur: "واضح آزمائش" }, effect: { en: "Emphasizes test was obvious and great", ur: "زور دیتا ہے کہ آزمائش واضح اور عظیم تھی" } },
      { feature: "مِنَ الْمُسَبِّحِينَ", example: { en: "Habitual pattern", ur: "عادت کا نمونہ" }, effect: { en: "Those who constantly glorify - saved Yunus", ur: "مسلسل تسبیح کرنے والے - یونس کو بچایا" } },
      { feature: "يَقْطِين", example: { en: "Gourd/squash plant", ur: "کدو کا پودا" }, effect: { en: "Only plant specifically named in Quran for healing", ur: "قرآن میں شفا کے لیے نام سے ذکر ہونے والا واحد پودا" } }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "37:6-7", topic: "Astronomy", note: { en: "Stars as adornment and protection - dual function in creation", ur: "ستارے بطور زینت اور حفاظت - تخلیق میں دوہرا کردار" } },
      { verse: "37:10", topic: "Meteors", note: { en: "شِهَابٌ ثَاقِب (piercing flame) - describes shooting stars", ur: "شِهَابٌ ثَاقِب (piercing flame) - describes shooting stars" } },
      { verse: "37:11", topic: "Human origin", note: { en: "طِينٍ لَّازِب (sticky clay) - human creation from clay minerals", ur: "طِينٍ لَّازِب (sticky clay) - human creation from clay minerals" } },
      { verse: "37:146", topic: "Medicinal plants", note: { en: "Gourd plant (يَقْطِين) for recovery - known for healing properties", ur: "Gourd plant (يَقْطِين) for recovery - known for healing properties" } }
    ]
  },

  prophetsMentioned: {
    list: [
      { name: "Nuh", verses: "37:75-82", role: "Prayed, saved from flood, honored with 'Salam'" },
      { name: "Ibrahim", verses: "37:83-113", role: "Sound heart, broke idols, survived fire, sacrifice test" },
      { name: "Ismail", verses: "37:101-107", role: "Forbearing son, willing to be sacrificed, patient" },
      { name: "Ishaq", verses: "37:112-113", role: "Prophet promised as additional blessing to Ibrahim" },
      { name: "Musa", verses: "37:114-122", role: "Given Torah, saved people from Pharaoh" },
      { name: "Harun", verses: "37:114-122", role: "Prophet alongside Musa, shared mission" },
      { name: "Ilyas (Elijah)", verses: "37:123-132", role: "Called to taqwa, condemned Ba'l worship" },
      { name: "Lut", verses: "37:133-138", role: "Saved with family, people destroyed as warning" },
      { name: "Yunus", verses: "37:139-148", role: "Fled, swallowed by whale, saved by dhikr, people believed" }
    ]
  },

  keyVerses: {
    verses: [
      { verse: "37:4", theme: "Tawheed", text: "Indeed, your God is One" },
      { verse: "37:84", theme: "Pure Heart", text: "When he came to his Lord with a sound heart" },
      { verse: "37:102", theme: "Submission", text: "Do as you are commanded; you will find me patient" },
      { verse: "37:107", theme: "Ransom", text: "We ransomed him with a great sacrifice" },
      { verse: "37:143-144", theme: "Salvation through Dhikr", text: "Had he not been of those who glorify Allah..." },
      { verse: "37:148", theme: "Prophetic Success", text: "They believed, so We gave them enjoyment" },
      { verse: "37:172-173", theme: "Divine Promise", text: "Indeed, they will be victorious; Our soldiers will overcome" },
      { verse: "37:180-182", theme: "Closing Formula", text: "Exalted is your Lord... Peace upon messengers... Praise to Lord of worlds" }
    ]
  },

  famousDuas: {
    duas: [
      {
        arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
        transliteration: "Rabbi hab li minas-salihin",
        meaning: { en: "My Lord, grant me [a child] from among the righteous", ur: "میرے رب! مجھے نیک لوگوں میں سے (اولاد) عطا فرما" },
        context: { en: "Ibrahim's dua for righteous offspring", ur: "ابراہیم کی نیک اولاد کے لیے دعا" },
        verse: "37:100",
        benefit: "Supplication for righteous children"
      },
      {
        arabic: "إِنِّي ذَاهِبٌ إِلَىٰ رَبِّي سَيَهْدِينِ",
        transliteration: "Inni dhahibun ila Rabbi sayahdin",
        meaning: { en: "Indeed, I am going to my Lord; He will guide me", ur: "بیشک میں اپنے رب کی طرف جا رہا ہوں؛ وہ مجھے ہدایت دے گا" },
        context: { en: "Ibrahim's trust in Allah during migration", ur: "ہجرت کے دوران ابراہیم کا اللہ پر بھروسا" },
        verse: "37:99",
        benefit: "Expression of trust during life changes"
      }
    ]
  }
};

export default ONTOLOGY;
