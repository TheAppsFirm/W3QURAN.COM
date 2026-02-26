/**
 * Surah Al-Qasas (28) - Ontology of Quranic Concepts
 * The Stories
 *
 * Theme: The story of Musa (Moses), Qarun's arrogance, and reassurance to the Prophet Muhammad
 * Revelation: Makki (except verses 52-55, 85 which are Madani)
 * Total Ayahs: 88
 */

export const ONTOLOGY = {
  surahId: 28,
  surahName: "Al-Qasas",
  surahNameArabic: "القصص",
  revelationType: "Makki",
  totalAyahs: 88,

  categories: {
    musaEarlyLife: {
      name: "Musa's Early Life",
      nameUr: "موسیٰ کی ابتدائی زندگی",
      nameArabic: "طفولة موسى",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "طسم", meaning: { en: "Ta Sin Mim", ur: "طٰسٓمٓ (حروفِ مقطعات)" }, explanation: { en: "Disconnected letters (Muqatta'at) - mysteries known to Allah", ur: "حروفِ مقطعات - اللہ کے علم میں ان کے اسرار ہیں" }, verseRef: "28:1" },
        { term: "تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ", meaning: { en: "These are verses of the clear Book", ur: "یہ واضح کتاب کی آیات ہیں" }, explanation: { en: "Affirmation of Quran's clarity", ur: "قرآن کی وضاحت کی تصدیق" }, verseRef: "28:2" },
        { term: "فِرْعَوْنَ عَلَا فِي الْأَرْضِ", meaning: { en: "Pharaoh exalted himself in the land", ur: "فرعون نے زمین میں سرکشی کی" }, explanation: { en: "Pharaoh's tyranny and arrogance", ur: "فرعون کی ظلم و تکبر" }, verseRef: "28:4" },
        { term: "يَسْتَضْعِفُ طَائِفَةً", meaning: { en: "Oppressing a group", ur: "ایک گروہ کو کمزور بنا رہا تھا" }, explanation: { en: "Systematic persecution of Bani Israel", ur: "بنی اسرائیل پر منظم ظلم و ستم" }, verseRef: "28:4" },
        { term: "يُذَبِّحُ أَبْنَاءَهُمْ", meaning: { en: "Slaughtering their sons", ur: "ان کے بیٹوں کو ذبح کر رہا تھا" }, explanation: { en: "Male infanticide to weaken Israelites", ur: "بنی اسرائیل کو کمزور کرنے کے لیے نر بچوں کا قتل" }, verseRef: "28:4" },
        { term: "وَنُرِيدُ أَن نَّمُنَّ", meaning: { en: "And We wanted to bestow favor", ur: "اور ہم چاہتے تھے کہ احسان کریں" }, explanation: { en: "Allah's plan to empower the oppressed", ur: "مظلوموں کو طاقت دینے کا اللہ کا منصوبہ" }, verseRef: "28:5" },
        { term: "نَجْعَلَهُمْ أَئِمَّةً", meaning: { en: "Make them leaders", ur: "انہیں پیشوا بنا دیں" }, explanation: { en: "Oppressed become leaders - divine reversal", ur: "مظلوم پیشوا بن جائیں - الٰہی تبدیلی" }, verseRef: "28:5" },
        { term: "وَنَجْعَلَهُمُ الْوَارِثِينَ", meaning: { en: "Make them inheritors", ur: "اور انہیں وارث بنا دیں" }, explanation: { en: "Bani Israel inherit the land", ur: "بنی اسرائیل زمین کے وارث بنے" }, verseRef: "28:5" }
      ]
    },

    musaPreservation: {
      name: "Divine Protection of Baby Musa",
      nameUr: "بچے موسیٰ کی الٰہی حفاظت",
      nameArabic: "حفظ موسى الرضيع",
      color: "#8B5CF6",
      icon: "Shield",
      concepts: [
        { term: "أَوْحَيْنَا إِلَىٰ أُمِّ مُوسَىٰ", meaning: { en: "We inspired Musa's mother", ur: "ہم نے موسیٰ کی ماں کو الہام کیا" }, explanation: { en: "Divine guidance through inspiration", ur: "الہام کے ذریعے الٰہی رہنمائی" }, verseRef: "28:7" },
        { term: "أَرْضِعِيهِ", meaning: { en: "Nurse him", ur: "اسے دودھ پلاؤ" }, explanation: { en: "First command - natural care", ur: "پہلا حکم - فطری دیکھ بھال" }, verseRef: "28:7" },
        { term: "فَأَلْقِيهِ فِي الْيَمِّ", meaning: { en: "Cast him in the river", ur: "اسے دریا میں ڈال دو" }, explanation: { en: "Counter-intuitive command requiring faith", ur: "عقل کے خلاف حکم جو ایمان کا تقاضا کرتا ہے" }, verseRef: "28:7" },
        { term: "إِنَّا رَادُّوهُ إِلَيْكِ", meaning: { en: "We will return him to you", ur: "ہم اسے تمہاری طرف لوٹائیں گے" }, explanation: { en: "Allah's promise of reunion", ur: "اللہ کا ملاپ کا وعدہ" }, verseRef: "28:7" },
        { term: "وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ", meaning: { en: "And make him of the messengers", ur: "اور اسے رسولوں میں سے بنائیں گے" }, explanation: { en: "Prophecy of prophethood", ur: "نبوت کی پیشگوئی" }, verseRef: "28:7" },
        { term: "فَالْتَقَطَهُ آلُ فِرْعَوْنَ", meaning: { en: "Family of Pharaoh picked him up", ur: "فرعون کے گھر والوں نے اسے اٹھا لیا" }, explanation: { en: "Irony: enemy raises liberator", ur: "ستم ظریفی: دشمن آزاد کرانے والے کی پرورش کرتا ہے" }, verseRef: "28:8" },
        { term: "لِيَكُونَ لَهُمْ عَدُوًّا وَحَزَنًا", meaning: { en: "To be an enemy and grief to them", ur: "تاکہ ان کا دشمن اور غم کا باعث بنے" }, explanation: { en: "Divine irony in Pharaoh's house", ur: "فرعون کے گھر میں الٰہی تدبیر" }, verseRef: "28:8" },
        { term: "وَحَرَّمْنَا عَلَيْهِ الْمَرَاضِعَ", meaning: { en: "We forbade wet nurses for him", ur: "ہم نے دایوں کا دودھ اس پر حرام کر دیا" }, explanation: { en: "Baby refused all except his mother", ur: "بچے نے ماں کے سوا سب کا دودھ مسترد کیا" }, verseRef: "28:12" },
        { term: "فَرَدَدْنَاهُ إِلَىٰ أُمِّهِ", meaning: { en: "So We returned him to his mother", ur: "تو ہم نے اسے اس کی ماں کو لوٹا دیا" }, explanation: { en: "Promise fulfilled - reunion", ur: "وعدہ پورا ہوا - ملاپ" }, verseRef: "28:13" }
      ]
    },

    musaStrength: {
      name: "Musa Reaches Maturity",
      nameUr: "موسیٰ کی بلوغت",
      nameArabic: "بلوغ موسى رشده",
      color: "#10B981",
      icon: "Zap",
      concepts: [
        { term: "وَلَمَّا بَلَغَ أَشُدَّهُ", meaning: { en: "When he reached full strength", ur: "جب وہ جوانی کو پہنچا" }, explanation: { en: "Physical and mental maturity", ur: "جسمانی اور ذہنی بلوغت" }, verseRef: "28:14" },
        { term: "آتَيْنَاهُ حُكْمًا وَعِلْمًا", meaning: { en: "We gave him wisdom and knowledge", ur: "ہم نے اسے حکمت اور علم عطا کیا" }, explanation: { en: "Divine preparation for prophethood", ur: "نبوت کے لیے الٰہی تیاری" }, verseRef: "28:14" },
        { term: "وَكَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ", meaning: { en: "Thus We reward the doers of good", ur: "اس طرح ہم نیکی کرنے والوں کو جزا دیتے ہیں" }, explanation: { en: "Musa's reward for righteousness", ur: "نیکی پر موسیٰ کی جزا" }, verseRef: "28:14" },
        { term: "هَٰذَا مِن شِيعَتِهِ وَهَٰذَا مِنْ عَدُوِّهِ", meaning: { en: "This from his faction, that from his enemy", ur: "یہ اس کے گروہ سے تھا اور یہ اس کے دشمن سے" }, explanation: { en: "Conflict between Israelite and Egyptian", ur: "اسرائیلی اور مصری کے درمیان جھگڑا" }, verseRef: "28:15" },
        { term: "فَوَكَزَهُ مُوسَىٰ فَقَضَىٰ عَلَيْهِ", meaning: { en: "Musa struck him and killed him", ur: "موسیٰ نے اسے مکا مارا تو وہ مر گیا" }, explanation: { en: "Unintentional killing - one punch", ur: "غیر ارادی قتل - ایک مکے سے" }, verseRef: "28:15" },
        { term: "هَٰذَا مِنْ عَمَلِ الشَّيْطَانِ", meaning: { en: "This is from Satan's work", ur: "یہ شیطان کا کام ہے" }, explanation: { en: "Musa's immediate repentance", ur: "موسیٰ کی فوری توبہ" }, verseRef: "28:15" },
        { term: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي", meaning: { en: "My Lord, I wronged myself, forgive me", ur: "اے میرے رب، میں نے اپنی جان پر ظلم کیا، مجھے معاف کر دے" }, explanation: { en: "Musa's sincere repentance", ur: "موسیٰ کی مخلصانہ توبہ" }, verseRef: "28:16" },
        { term: "فَغَفَرَ لَهُ", meaning: { en: "So He forgave him", ur: "تو اللہ نے اسے معاف کر دیا" }, explanation: { en: "Allah's immediate forgiveness", ur: "اللہ کی فوری مغفرت" }, verseRef: "28:16" }
      ]
    },

    musaFlightMadyan: {
      name: "Flight to Madyan",
      nameUr: "مدین کی طرف فرار",
      nameArabic: "فرار موسى إلى مدين",
      color: "#06B6D4",
      icon: "Compass",
      concepts: [
        { term: "فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ", meaning: { en: "He left, fearful, watchful", ur: "وہ خوفزدہ اور چوکنا نکلا" }, explanation: { en: "Musa flees Egypt in fear", ur: "موسیٰ خوف سے مصر سے بھاگے" }, verseRef: "28:21" },
        { term: "رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ", meaning: { en: "Lord, save me from the wrongdoing people", ur: "اے رب، مجھے ظالم لوگوں سے بچا لے" }, explanation: { en: "Prayer for deliverance", ur: "نجات کی دعا" }, verseRef: "28:21" },
        { term: "وَلَمَّا تَوَجَّهَ تِلْقَاءَ مَدْيَنَ", meaning: { en: "When he directed toward Madyan", ur: "جب اس نے مدین کی طرف رخ کیا" }, explanation: { en: "Journey to Midian without a guide", ur: "بغیر رہنما کے مدین کا سفر" }, verseRef: "28:22" },
        { term: "عَسَىٰ رَبِّي أَن يَهْدِيَنِي سَوَاءَ السَّبِيلِ", meaning: { en: "Perhaps my Lord will guide me to right way", ur: "شاید میرا رب مجھے سیدھا راستہ دکھا دے" }, explanation: { en: "Trust in Allah's guidance", ur: "اللہ کی رہنمائی پر بھروسا" }, verseRef: "28:22" },
        { term: "أُمَّةً مِّنَ النَّاسِ يَسْقُونَ", meaning: { en: "A group of people watering", ur: "لوگوں کا ایک گروہ پانی پلا رہا تھا" }, explanation: { en: "Scene at the well of Madyan", ur: "مدین کے کنویں کا منظر" }, verseRef: "28:23" },
        { term: "امْرَأَتَيْنِ تَذُودَانِ", meaning: { en: "Two women holding back", ur: "دو عورتیں اپنے جانوروں کو روک رہی تھیں" }, explanation: { en: "Shu'ayb's daughters waiting", ur: "شعیب کی بیٹیاں انتظار میں" }, verseRef: "28:23" },
        { term: "لَا نَسْقِي حَتَّىٰ يُصْدِرَ الرِّعَاءُ", meaning: { en: "We cannot water until shepherds leave", ur: "ہم پانی نہیں پلا سکتیں جب تک چرواہے نہ ہٹ جائیں" }, explanation: { en: "Women's modest behavior", ur: "عورتوں کا با حیا رویہ" }, verseRef: "28:24" },
        { term: "وَأَبُونَا شَيْخٌ كَبِيرٌ", meaning: { en: "And our father is an old man", ur: "اور ہمارے والد بہت بوڑھے ہیں" }, explanation: { en: "Reason they tend sheep themselves", ur: "خود بکریاں چرانے کی وجہ" }, verseRef: "28:24" }
      ]
    },

    musaService: {
      name: "Musa's Service and Marriage",
      nameUr: "موسیٰ کی خدمت اور شادی",
      nameArabic: "خدمة موسى وزواجه",
      color: "#10B981",
      icon: "Heart",
      concepts: [
        { term: "فَسَقَىٰ لَهُمَا", meaning: { en: "So he watered for them", ur: "تو اس نے ان کے لیے پانی پلایا" }, explanation: { en: "Musa's immediate help", ur: "موسیٰ کی فوری مدد" }, verseRef: "28:24" },
        { term: "تَوَلَّىٰ إِلَى الظِّلِّ", meaning: { en: "Withdrew to the shade", ur: "سائے میں ہٹ گیا" }, explanation: { en: "Retreat without expecting reward", ur: "بغیر اجر کی توقع کے الگ ہو گیا" }, verseRef: "28:24" },
        { term: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", meaning: { en: "My Lord, I am in need of whatever good You send", ur: "اے میرے رب، تو جو بھی بھلائی میری طرف اتارے میں اس کا محتاج ہوں" }, explanation: { en: "Beautiful prayer of need", ur: "حاجت کی خوبصورت دعا" }, verseRef: "28:24" },
        { term: "فَجَاءَتْهُ إِحْدَاهُمَا تَمْشِي عَلَى اسْتِحْيَاءٍ", meaning: { en: "One of them came walking shyly", ur: "ان میں سے ایک شرماتے ہوئے چل کر آئی" }, explanation: { en: "Modest approach with job offer", ur: "حیا کے ساتھ کام کی پیشکش" }, verseRef: "28:25" },
        { term: "إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ", meaning: { en: "Best to hire is strong and trustworthy", ur: "بہترین ملازم طاقتور اور امانتدار ہوتا ہے" }, explanation: { en: "Qualities for employment", ur: "ملازمت کی اہم صفات" }, verseRef: "28:26" },
        { term: "أُنكِحَكَ إِحْدَى ابْنَتَيَّ", meaning: { en: "I wish to marry you to one of my daughters", ur: "میں اپنی ایک بیٹی تمہاری شادی میں دینا چاہتا ہوں" }, explanation: { en: "Shu'ayb's marriage proposal", ur: "شعیب کی شادی کی پیشکش" }, verseRef: "28:27" },
        { term: "أَن تَأْجُرَنِي ثَمَانِيَ حِجَجٍ", meaning: { en: "That you serve me eight years", ur: "کہ تم آٹھ سال میری خدمت کرو" }, explanation: { en: "Mahr as years of service", ur: "خدمت کے سالوں کی شکل میں مہر" }, verseRef: "28:27" },
        { term: "ذَٰلِكَ بَيْنِي وَبَيْنَكَ", meaning: { en: "That is between me and you", ur: "یہ میرے اور تمہارے درمیان ہے" }, explanation: { en: "Mutual agreement on terms", ur: "شرائط پر باہمی معاہدہ" }, verseRef: "28:28" }
      ]
    },

    musaProphethood: {
      name: "Call to Prophethood",
      nameUr: "نبوت کی دعوت",
      nameArabic: "نداء النبوة",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "فَلَمَّا قَضَىٰ مُوسَى الْأَجَلَ", meaning: { en: "When Musa completed the term", ur: "جب موسیٰ نے مدت پوری کر لی" }, explanation: { en: "Fulfilled his employment contract", ur: "ملازمت کا معاہدہ پورا کیا" }, verseRef: "28:29" },
        { term: "آنَسَ مِن جَانِبِ الطُّورِ نَارًا", meaning: { en: "He perceived a fire from Mount Tur", ur: "اس نے طور کی جانب سے آگ دیکھی" }, explanation: { en: "First sign - fire on the mountain", ur: "پہلی نشانی - پہاڑ پر آگ" }, verseRef: "28:29" },
        { term: "نُودِيَ مِن شَاطِئِ الْوَادِ الْأَيْمَنِ", meaning: { en: "He was called from right side of valley", ur: "وادی کے دائیں کنارے سے آواز آئی" }, explanation: { en: "Allah's call to Musa", ur: "اللہ کا موسیٰ کو بلانا" }, verseRef: "28:30" },
        { term: "فِي الْبُقْعَةِ الْمُبَارَكَةِ", meaning: { en: "In the blessed spot", ur: "مبارک مقام میں" }, explanation: { en: "Sacred ground of revelation", ur: "وحی کی مقدس زمین" }, verseRef: "28:30" },
        { term: "مِنَ الشَّجَرَةِ", meaning: { en: "From the tree", ur: "درخت سے" }, explanation: { en: "Allah spoke from the tree", ur: "اللہ نے درخت سے بات کی" }, verseRef: "28:30" },
        { term: "إِنِّي أَنَا اللَّهُ رَبُّ الْعَالَمِينَ", meaning: { en: "Indeed I am Allah, Lord of the worlds", ur: "بے شک میں اللہ ہوں، تمام جہانوں کا رب" }, explanation: { en: "Divine self-identification", ur: "اللہ کا اپنا تعارف" }, verseRef: "28:30" },
        { term: "أَلْقِ عَصَاكَ", meaning: { en: "Throw down your staff", ur: "اپنا عصا ڈال دو" }, explanation: { en: "First miracle - staff becomes serpent", ur: "پہلا معجزہ - عصا سانپ بن گیا" }, verseRef: "28:31" },
        { term: "وَاضْمُمْ يَدَكَ إِلَىٰ جَنَاحِكَ", meaning: { en: "Draw your hand to your side", ur: "اپنا ہاتھ اپنے بازو سے ملاؤ" }, explanation: { en: "Second miracle - glowing hand", ur: "دوسرا معجزہ - چمکتا ہاتھ" }, verseRef: "28:32" }
      ]
    },

    musaHarun: {
      name: "Musa and Harun's Mission",
      nameUr: "موسیٰ اور ہارون کا مشن",
      nameArabic: "رسالة موسى وهارون",
      color: "#3B82F6",
      icon: "Users",
      concepts: [
        { term: "قَتَلْتُ مِنْهُمْ نَفْسًا", meaning: { en: "I killed a person among them", ur: "میں نے ان میں سے ایک شخص کو قتل کر دیا ہے" }, explanation: { en: "Musa's fear of retribution", ur: "موسیٰ کا انتقام کا خوف" }, verseRef: "28:33" },
        { term: "أَخِي هَارُونُ هُوَ أَفْصَحُ مِنِّي لِسَانًا", meaning: { en: "My brother Harun is more eloquent", ur: "میرا بھائی ہارون مجھ سے زیادہ فصیح ہے" }, explanation: { en: "Request for Harun as support", ur: "ہارون کو مددگار بنانے کی درخواست" }, verseRef: "28:34" },
        { term: "سَنَشُدُّ عَضُدَكَ بِأَخِيكَ", meaning: { en: "We will strengthen you through your brother", ur: "ہم تمہارے بھائی کے ذریعے تمہارا بازو مضبوط کریں گے" }, explanation: { en: "Allah grants request", ur: "اللہ نے درخواست قبول فرمائی" }, verseRef: "28:35" },
        { term: "وَنَجْعَلُ لَكُمَا سُلْطَانًا", meaning: { en: "And give you both authority", ur: "اور تم دونوں کو غلبہ دیں گے" }, explanation: { en: "Divine authority against Pharaoh", ur: "فرعون کے مقابلے میں الٰہی اختیار" }, verseRef: "28:35" },
        { term: "فَلَا يَصِلُونَ إِلَيْكُمَا", meaning: { en: "They cannot reach you", ur: "وہ تم دونوں تک نہیں پہنچ سکتے" }, explanation: { en: "Promise of protection", ur: "حفاظت کا وعدہ" }, verseRef: "28:35" },
        { term: "أَنتُمَا وَمَنِ اتَّبَعَكُمَا الْغَالِبُونَ", meaning: { en: "You and followers will be victorious", ur: "تم دونوں اور تمہارے پیروکار غالب رہیں گے" }, explanation: { en: "Promise of ultimate victory", ur: "حتمی فتح کا وعدہ" }, verseRef: "28:35" }
      ]
    },

    pharaohArrogance: {
      name: "Pharaoh's Arrogance and Defiance",
      nameUr: "فرعون کا تکبر اور سرکشی",
      nameArabic: "تكبر فرعون وعناده",
      color: "#EF4444",
      icon: "Crown",
      concepts: [
        { term: "فَلَمَّا جَاءَهُم مُّوسَىٰ بِآيَاتِنَا", meaning: { en: "When Musa came with Our signs", ur: "جب موسیٰ ہماری نشانیاں لے کر آئے" }, explanation: { en: "Miraculous proofs presented", ur: "معجزانہ دلائل پیش کیے" }, verseRef: "28:36" },
        { term: "مَا هَٰذَا إِلَّا سِحْرٌ مُّفْتَرًى", meaning: { en: "This is only invented magic", ur: "یہ تو من گھڑت جادو ہے" }, explanation: { en: "Pharaoh's dismissal as magic", ur: "فرعون نے جادو کہہ کر ٹال دیا" }, verseRef: "28:36" },
        { term: "وَقَالَ فِرْعَوْنُ... أَنَا رَبُّكُمُ الْأَعْلَىٰ", meaning: { en: "Pharaoh said... I am your highest lord", ur: "فرعون نے کہا... میں تمہارا سب سے بڑا رب ہوں" }, explanation: { en: "Ultimate arrogance - claiming divinity", ur: "انتہائی تکبر - الوہیت کا دعویٰ" }, verseRef: "28:38" },
        { term: "يَا هَامَانُ ابْنِ لِي صَرْحًا", meaning: { en: "O Haman, build me a tower", ur: "اے ہامان، میرے لیے ایک بلند عمارت بنا" }, explanation: { en: "Attempt to reach heavens", ur: "آسمانوں تک پہنچنے کی کوشش" }, verseRef: "28:38" },
        { term: "لَّعَلِّي أَطَّلِعُ إِلَىٰ إِلَٰهِ مُوسَىٰ", meaning: { en: "That I may look at Musa's God", ur: "شاید میں موسیٰ کے معبود تک پہنچ جاؤں" }, explanation: { en: "Mockery of Allah", ur: "اللہ کا مذاق اڑانا" }, verseRef: "28:38" },
        { term: "وَاسْتَكْبَرَ هُوَ وَجُنُودُهُ فِي الْأَرْضِ", meaning: { en: "He and his soldiers were arrogant", ur: "اس نے اور اس کے لشکروں نے زمین میں تکبر کیا" }, explanation: { en: "Collective arrogance", ur: "اجتماعی تکبر" }, verseRef: "28:39" },
        { term: "بِغَيْرِ الْحَقِّ", meaning: { en: "Without right", ur: "ناحق" }, explanation: { en: "Unjustified pride", ur: "بے جا غرور" }, verseRef: "28:39" },
        { term: "وَظَنُّوا أَنَّهُمْ إِلَيْنَا لَا يُرْجَعُونَ", meaning: { en: "They thought they would not return to Us", ur: "انہوں نے سمجھا کہ وہ ہماری طرف نہیں لوٹائے جائیں گے" }, explanation: { en: "Denial of accountability", ur: "جوابدہی کا انکار" }, verseRef: "28:39" }
      ]
    },

    pharaohDestruction: {
      name: "Destruction of Pharaoh",
      nameUr: "فرعون کی تباہی",
      nameArabic: "هلاك فرعون",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "فَأَخَذْنَاهُ وَجُنُودَهُ", meaning: { en: "So We seized him and his soldiers", ur: "تو ہم نے اسے اور اس کے لشکروں کو پکڑ لیا" }, explanation: { en: "Divine retribution", ur: "الٰہی سزا" }, verseRef: "28:40" },
        { term: "فَنَبَذْنَاهُمْ فِي الْيَمِّ", meaning: { en: "And threw them into the sea", ur: "اور انہیں سمندر میں پھینک دیا" }, explanation: { en: "Drowning in the Red Sea", ur: "بحیرہ احمر میں غرق ہونا" }, verseRef: "28:40" },
        { term: "فَانظُرْ كَيْفَ كَانَ عَاقِبَةُ الظَّالِمِينَ", meaning: { en: "See how was the end of wrongdoers", ur: "دیکھو ظالموں کا انجام کیسا ہوا" }, explanation: { en: "Moral lesson from their fate", ur: "ان کے انجام سے عبرت" }, verseRef: "28:40" },
        { term: "وَجَعَلْنَاهُمْ أَئِمَّةً يَدْعُونَ إِلَى النَّارِ", meaning: { en: "We made them leaders inviting to Fire", ur: "ہم نے انہیں آگ کی طرف بلانے والے پیشوا بنا دیا" }, explanation: { en: "They lead others to Hell", ur: "وہ دوسروں کو جہنم کی طرف لے جاتے ہیں" }, verseRef: "28:41" },
        { term: "وَيَوْمَ الْقِيَامَةِ لَا يُنصَرُونَ", meaning: { en: "On Resurrection Day they won't be helped", ur: "قیامت کے دن ان کی مدد نہیں کی جائے گی" }, explanation: { en: "No help in afterlife", ur: "آخرت میں کوئی مدد نہیں" }, verseRef: "28:41" },
        { term: "وَأَتْبَعْنَاهُمْ فِي هَٰذِهِ الدُّنْيَا لَعْنَةً", meaning: { en: "We made curse follow them in this world", ur: "ہم نے اس دنیا میں ان کے پیچھے لعنت لگا دی" }, explanation: { en: "Cursed in both worlds", ur: "دونوں جہانوں میں لعنت" }, verseRef: "28:42" },
        { term: "وَيَوْمَ الْقِيَامَةِ هُم مِّنَ الْمَقْبُوحِينَ", meaning: { en: "On Resurrection they'll be of the despised", ur: "قیامت کے دن وہ بدشکل لوگوں میں سے ہوں گے" }, explanation: { en: "Eternal disgrace", ur: "ہمیشہ کی رسوائی" }, verseRef: "28:42" }
      ]
    },

    bookOfMusa: {
      name: "Book Given to Musa",
      nameUr: "موسیٰ کو کتاب دینا",
      nameArabic: "كتاب موسى",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "وَلَقَدْ آتَيْنَا مُوسَى الْكِتَابَ", meaning: { en: "We gave Musa the Book", ur: "ہم نے موسیٰ کو کتاب دی" }, explanation: { en: "Torah given to Musa", ur: "موسیٰ کو تورات عطا کی گئی" }, verseRef: "28:43" },
        { term: "مِن بَعْدِ مَا أَهْلَكْنَا الْقُرُونَ الْأُولَىٰ", meaning: { en: "After We destroyed former generations", ur: "پہلی نسلوں کو ہلاک کرنے کے بعد" }, explanation: { en: "Torah came after punishments", ur: "تورات عذابوں کے بعد آئی" }, verseRef: "28:43" },
        { term: "بَصَائِرَ لِلنَّاسِ", meaning: { en: "As insights for people", ur: "لوگوں کے لیے بصیرت" }, explanation: { en: "Book provides clear vision", ur: "کتاب واضح بصیرت فراہم کرتی ہے" }, verseRef: "28:43" },
        { term: "وَهُدًى وَرَحْمَةً", meaning: { en: "And guidance and mercy", ur: "اور ہدایت اور رحمت" }, explanation: { en: "Purpose of divine scripture", ur: "الٰہی کتاب کا مقصد" }, verseRef: "28:43" },
        { term: "لَعَلَّهُمْ يَتَذَكَّرُونَ", meaning: { en: "That they might remember", ur: "تاکہ وہ نصیحت حاصل کریں" }, explanation: { en: "Goal is reflection", ur: "مقصد غور و فکر ہے" }, verseRef: "28:43" }
      ]
    },

    prophetConfirmation: {
      name: "Confirmation of Prophet Muhammad",
      nameUr: "نبی محمد ﷺ کی تصدیق",
      nameArabic: "تأكيد نبوة محمد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَمَا كُنتَ بِجَانِبِ الْغَرْبِيِّ", meaning: { en: "You were not at the western side", ur: "آپ مغربی جانب نہیں تھے" }, explanation: { en: "Prophet not present at Musa's events", ur: "نبی ﷺ موسیٰ کے واقعات میں موجود نہیں تھے" }, verseRef: "28:44" },
        { term: "إِذْ قَضَيْنَا إِلَىٰ مُوسَى الْأَمْرَ", meaning: { en: "When We decreed to Musa the command", ur: "جب ہم نے موسیٰ کو حکم دیا" }, explanation: { en: "Prophet learned only through revelation", ur: "نبی ﷺ نے صرف وحی سے جانا" }, verseRef: "28:44" },
        { term: "وَمَا كُنتَ مِنَ الشَّاهِدِينَ", meaning: { en: "You were not among the witnesses", ur: "آپ گواہوں میں سے نہیں تھے" }, explanation: { en: "Proof of Quran's divine origin", ur: "قرآن کے الٰہی ماخذ کا ثبوت" }, verseRef: "28:44" },
        { term: "وَلَٰكِنَّا أَنشَأْنَا قُرُونًا", meaning: { en: "But We produced generations", ur: "لیکن ہم نے کئی نسلیں پیدا کیں" }, explanation: { en: "Long time passed since Musa", ur: "موسیٰ کے بعد طویل وقت گزرا" }, verseRef: "28:45" },
        { term: "وَمَا كُنتَ ثَاوِيًا فِي أَهْلِ مَدْيَنَ", meaning: { en: "You were not dwelling among people of Madyan", ur: "آپ مدین والوں میں مقیم نہیں تھے" }, explanation: { en: "Prophet never visited Midian", ur: "نبی ﷺ نے کبھی مدین کا دورہ نہیں کیا" }, verseRef: "28:45" },
        { term: "وَمَا كُنتَ بِجَانِبِ الطُّورِ", meaning: { en: "You were not at side of Mount", ur: "آپ طور کی جانب نہیں تھے" }, explanation: { en: "Prophet not at Mount Sinai", ur: "نبی ﷺ کوہ سینا پر نہیں تھے" }, verseRef: "28:46" },
        { term: "وَلَٰكِن رَّحْمَةً مِّن رَّبِّكَ", meaning: { en: "But as mercy from your Lord", ur: "لیکن یہ تمہارے رب کی رحمت ہے" }, explanation: { en: "Revelation is divine mercy", ur: "وحی الٰہی رحمت ہے" }, verseRef: "28:46" }
      ]
    },

    disbelieversExcuses: {
      name: "Excuses of Disbelievers",
      nameUr: "کافروں کے بہانے",
      nameArabic: "معاذير الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "لَوْلَا أُرْسِلَ إِلَيْنَا رَسُولٌ", meaning: { en: "Why wasn't a messenger sent to us?", ur: "ہماری طرف رسول کیوں نہیں بھیجا گیا؟" }, explanation: { en: "Quraysh's previous excuse", ur: "قریش کا پرانا بہانہ" }, verseRef: "28:47" },
        { term: "فَلَمَّا جَاءَهُمُ الْحَقُّ مِنْ عِندِنَا", meaning: { en: "But when truth came from Us", ur: "لیکن جب ہماری طرف سے حق آیا" }, explanation: { en: "They rejected anyway", ur: "پھر بھی انہوں نے رد کر دیا" }, verseRef: "28:48" },
        { term: "لَوْلَا أُوتِيَ مِثْلَ مَا أُوتِيَ مُوسَىٰ", meaning: { en: "Why wasn't he given like Musa was given?", ur: "اسے وہ کیوں نہیں دیا گیا جو موسیٰ کو دیا گیا تھا؟" }, explanation: { en: "Demanding more miracles", ur: "مزید معجزات کا مطالبہ" }, verseRef: "28:48" },
        { term: "سِحْرَانِ تَظَاهَرَا", meaning: { en: "Two magics supporting each other", ur: "دو جادو جو ایک دوسرے کی مدد کرتے ہیں" }, explanation: { en: "Dismissing both Torah and Quran", ur: "تورات اور قرآن دونوں کو رد کرنا" }, verseRef: "28:48" },
        { term: "إِنَّا بِكُلٍّ كَافِرُونَ", meaning: { en: "Indeed, we disbelieve in all", ur: "بے شک ہم سب کا انکار کرتے ہیں" }, explanation: { en: "Rejection of all scripture", ur: "تمام کتابوں کا انکار" }, verseRef: "28:48" },
        { term: "قُلْ فَأْتُوا بِكِتَابٍ مِّنْ عِندِ اللَّهِ", meaning: { en: "Say: Bring a book from Allah", ur: "کہو: اللہ کی طرف سے کوئی کتاب لے آؤ" }, explanation: { en: "Challenge to produce better guidance", ur: "بہتر ہدایت لانے کا چیلنج" }, verseRef: "28:49" },
        { term: "فَإِن لَّمْ يَسْتَجِيبُوا لَكَ", meaning: { en: "If they don't respond to you", ur: "اگر وہ تمہاری بات نہ مانیں" }, explanation: { en: "Their silence proves them wrong", ur: "ان کی خاموشی ان کی غلطی ثابت کرتی ہے" }, verseRef: "28:50" },
        { term: "فَاعْلَمْ أَنَّمَا يَتَّبِعُونَ أَهْوَاءَهُمْ", meaning: { en: "Know they only follow desires", ur: "جان لو کہ وہ صرف اپنی خواہشات کی پیروی کرتے ہیں" }, explanation: { en: "Rejection stems from desires, not reason", ur: "انکار عقل سے نہیں خواہشات سے ہے" }, verseRef: "28:50" }
      ]
    },

    peopleOfBook: {
      name: "People of Earlier Scripture",
      nameUr: "پچھلی کتاب والے لوگ",
      nameArabic: "أهل الكتاب",
      color: "#10B981",
      icon: "Book",
      concepts: [
        { term: "الَّذِينَ آتَيْنَاهُمُ الْكِتَابَ مِن قَبْلِهِ", meaning: { en: "Those We gave scripture before it", ur: "جن کو ہم نے اس سے پہلے کتاب دی" }, explanation: { en: "Sincere People of the Book", ur: "سچے اہلِ کتاب" }, verseRef: "28:52" },
        { term: "هُم بِهِ يُؤْمِنُونَ", meaning: { en: "They believe in it", ur: "وہ اس پر ایمان لاتے ہیں" }, explanation: { en: "They recognize truth in Quran", ur: "وہ قرآن میں سچائی کو پہچانتے ہیں" }, verseRef: "28:52" },
        { term: "إِنَّا كُنَّا مِن قَبْلِهِ مُسْلِمِينَ", meaning: { en: "Indeed, we were Muslims before it", ur: "بے شک ہم اس سے پہلے بھی مسلمان تھے" }, explanation: { en: "Submission to Allah predates Quran", ur: "اللہ کی اطاعت قرآن سے پہلے بھی تھی" }, verseRef: "28:53" },
        { term: "أُولَٰئِكَ يُؤْتَوْنَ أَجْرَهُم مَّرَّتَيْنِ", meaning: { en: "Those will be given reward twice", ur: "انہیں دوگنا اجر دیا جائے گا" }, explanation: { en: "Double reward for believing both", ur: "دونوں پر ایمان لانے کا دوگنا اجر" }, verseRef: "28:54" },
        { term: "بِمَا صَبَرُوا", meaning: { en: "Because they were patient", ur: "اس لیے کہ انہوں نے صبر کیا" }, explanation: { en: "Reward for patience", ur: "صبر کی جزا" }, verseRef: "28:54" },
        { term: "وَيَدْرَءُونَ بِالْحَسَنَةِ السَّيِّئَةَ", meaning: { en: "They repel evil with good", ur: "وہ برائی کو بھلائی سے دفع کرتے ہیں" }, explanation: { en: "Noble character trait", ur: "اعلیٰ اخلاقی صفت" }, verseRef: "28:54" },
        { term: "وَإِذَا سَمِعُوا اللَّغْوَ أَعْرَضُوا عَنْهُ", meaning: { en: "When they hear vain talk, they turn away", ur: "جب وہ فضول بات سنتے ہیں تو منہ موڑ لیتے ہیں" }, explanation: { en: "Avoiding futile arguments", ur: "بے فائدہ بحث سے اجتناب" }, verseRef: "28:55" },
        { term: "لَنَا أَعْمَالُنَا وَلَكُمْ أَعْمَالُكُمْ", meaning: { en: "For us our deeds, for you yours", ur: "ہمارے اعمال ہمارے لیے اور تمہارے اعمال تمہارے لیے" }, explanation: { en: "Each accountable for themselves", ur: "ہر ایک اپنے اعمال کا ذمہ دار" }, verseRef: "28:55" }
      ]
    },

    guidanceFromAllah: {
      name: "Guidance is from Allah Alone",
      nameUr: "ہدایت صرف اللہ کی طرف سے ہے",
      nameArabic: "الهداية من الله",
      color: "#3B82F6",
      icon: "Compass",
      concepts: [
        { term: "إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ", meaning: { en: "You cannot guide whom you love", ur: "آپ جسے چاہیں ہدایت نہیں دے سکتے" }, explanation: { en: "Prophet cannot give guidance", ur: "نبی ﷺ ہدایت نہیں دے سکتے" }, verseRef: "28:56" },
        { term: "وَلَٰكِنَّ اللَّهَ يَهْدِي مَن يَشَاءُ", meaning: { en: "But Allah guides whom He wills", ur: "لیکن اللہ جسے چاہے ہدایت دیتا ہے" }, explanation: { en: "Guidance is Allah's prerogative", ur: "ہدایت اللہ کا اختیار ہے" }, verseRef: "28:56" },
        { term: "وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ", meaning: { en: "He knows best the guided", ur: "وہ ہدایت پانے والوں کو سب سے زیادہ جانتا ہے" }, explanation: { en: "Allah knows sincere hearts", ur: "اللہ مخلص دلوں کو جانتا ہے" }, verseRef: "28:56" },
        { term: "إِن نَّتَّبِعِ الْهُدَىٰ مَعَكَ نُتَخَطَّفْ مِنْ أَرْضِنَا", meaning: { en: "If we follow guidance, we'll be snatched from land", ur: "اگر ہم تمہارے ساتھ ہدایت کی پیروی کریں تو ہمیں اپنی زمین سے اچک لیا جائے گا" }, explanation: { en: "Fear-based excuse for rejecting Islam", ur: "اسلام رد کرنے کا خوف پر مبنی بہانہ" }, verseRef: "28:57" },
        { term: "أَوَلَمْ نُمَكِّن لَّهُمْ حَرَمًا آمِنًا", meaning: { en: "Have We not established for them a sacred sanctuary?", ur: "کیا ہم نے ان کے لیے ایک محفوظ حرم قائم نہیں کیا؟" }, explanation: { en: "Allah already gave them security in Makkah", ur: "اللہ نے پہلے ہی انہیں مکہ میں امن دیا ہے" }, verseRef: "28:57" },
        { term: "يُجْبَىٰ إِلَيْهِ ثَمَرَاتُ كُلِّ شَيْءٍ", meaning: { en: "To which fruits of everything are brought", ur: "جہاں ہر چیز کے پھل لائے جاتے ہیں" }, explanation: { en: "Makkah's prosperity from Allah", ur: "اللہ کی طرف سے مکہ کی خوشحالی" }, verseRef: "28:57" }
      ]
    },

    destroyedCities: {
      name: "Destroyed Civilizations",
      nameUr: "تباہ شدہ تہذیبیں",
      nameArabic: "القرى المهلكة",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَكَمْ أَهْلَكْنَا مِن قَرْيَةٍ", meaning: { en: "How many cities We destroyed", ur: "کتنی ہی بستیاں ہم نے تباہ کیں" }, explanation: { en: "Historical warning", ur: "تاریخی انتباہ" }, verseRef: "28:58" },
        { term: "بَطِرَتْ مَعِيشَتَهَا", meaning: { en: "Insolent in their livelihood", ur: "جو اپنی معیشت پر اترا رہے تھے" }, explanation: { en: "Arrogance from prosperity", ur: "خوشحالی سے پیدا شدہ تکبر" }, verseRef: "28:58" },
        { term: "فَتِلْكَ مَسَاكِنُهُمْ لَمْ تُسْكَن مِّن بَعْدِهِمْ", meaning: { en: "Those are their dwellings, uninhabited after them", ur: "یہ ان کے مکانات ہیں جو ان کے بعد آباد نہیں ہوئے" }, explanation: { en: "Ruins as evidence", ur: "کھنڈرات بطور ثبوت" }, verseRef: "28:58" },
        { term: "إِلَّا قَلِيلًا", meaning: { en: "Except a little", ur: "مگر بہت کم" }, explanation: { en: "Few survivors or ruins remain", ur: "بہت کم بچے یا کھنڈر باقی ہیں" }, verseRef: "28:58" },
        { term: "وَكُنَّا نَحْنُ الْوَارِثِينَ", meaning: { en: "And We were the inheritors", ur: "اور ہم ہی وارث رہے" }, explanation: { en: "Allah inherits all", ur: "اللہ ہر چیز کا وارث ہے" }, verseRef: "28:58" },
        { term: "وَمَا كَانَ رَبُّكَ مُهْلِكَ الْقُرَىٰ", meaning: { en: "Your Lord would not destroy cities", ur: "تمہارا رب بستیوں کو ہلاک نہیں کرتا" }, explanation: { en: "Allah is just", ur: "اللہ عادل ہے" }, verseRef: "28:59" },
        { term: "حَتَّىٰ يَبْعَثَ فِي أُمِّهَا رَسُولًا", meaning: { en: "Until He sends in their midst a messenger", ur: "جب تک ان کے مرکز میں رسول نہ بھیج دے" }, explanation: { en: "Warning always precedes punishment", ur: "عذاب سے پہلے ہمیشہ انتباہ ہوتا ہے" }, verseRef: "28:59" }
      ]
    },

    worldlyVsEternal: {
      name: "Worldly vs. Eternal Life",
      nameUr: "دنیاوی بمقابلہ ابدی زندگی",
      nameArabic: "الدنيا والآخرة",
      color: "#8B5CF6",
      icon: "Scale",
      concepts: [
        { term: "وَمَا أُوتِيتُم مِّن شَيْءٍ", meaning: { en: "Whatever you have been given", ur: "تمہیں جو کچھ بھی دیا گیا ہے" }, explanation: { en: "Worldly possessions are temporary", ur: "دنیاوی مال و متاع عارضی ہیں" }, verseRef: "28:60" },
        { term: "فَمَتَاعُ الْحَيَاةِ الدُّنْيَا وَزِينَتُهَا", meaning: { en: "Is enjoyment of worldly life and its adornment", ur: "وہ دنیاوی زندگی کا فائدہ اور زینت ہے" }, explanation: { en: "This world is temporary pleasure", ur: "یہ دنیا عارضی لذت ہے" }, verseRef: "28:60" },
        { term: "وَمَا عِندَ اللَّهِ خَيْرٌ وَأَبْقَىٰ", meaning: { en: "What is with Allah is better and more lasting", ur: "اور جو اللہ کے پاس ہے وہ بہتر اور پائیدار ہے" }, explanation: { en: "Eternal rewards superior", ur: "ابدی انعامات برتر ہیں" }, verseRef: "28:60" },
        { term: "أَفَلَا تَعْقِلُونَ", meaning: { en: "Will you not reason?", ur: "کیا تم عقل نہیں رکھتے؟" }, explanation: { en: "Call to rational thinking", ur: "عقل سے سوچنے کی دعوت" }, verseRef: "28:60" },
        { term: "أَفَمَن وَعَدْنَاهُ وَعْدًا حَسَنًا", meaning: { en: "Is one whom We promised good promise", ur: "کیا وہ شخص جس سے ہم نے اچھا وعدہ کیا" }, explanation: { en: "Believer vs. disbeliever comparison", ur: "مومن اور کافر کا موازنہ" }, verseRef: "28:61" },
        { term: "فَهُوَ لَاقِيهِ", meaning: { en: "He will meet it", ur: "اور وہ اسے پانے والا ہے" }, explanation: { en: "Promise will be fulfilled", ur: "وعدہ پورا ہوگا" }, verseRef: "28:61" },
        { term: "كَمَن مَّتَّعْنَاهُ مَتَاعَ الْحَيَاةِ الدُّنْيَا", meaning: { en: "Like one given worldly enjoyment", ur: "اس شخص کی طرح جسے ہم نے دنیاوی فائدہ دیا" }, explanation: { en: "Worldly person's comparison", ur: "دنیا پرست شخص کا موازنہ" }, verseRef: "28:61" },
        { term: "ثُمَّ هُوَ يَوْمَ الْقِيَامَةِ مِنَ الْمُحْضَرِينَ", meaning: { en: "Then on Resurrection is among those presented", ur: "پھر وہ قیامت کے دن حاضر کیے جانے والوں میں سے ہوگا" }, explanation: { en: "Brought for judgment", ur: "حساب کے لیے لایا جائے گا" }, verseRef: "28:61" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment Scenes",
      nameUr: "قیامت کے مناظر",
      nameArabic: "مشاهد يوم القيامة",
      color: "#EF4444",
      icon: "Scale",
      concepts: [
        { term: "وَيَوْمَ يُنَادِيهِمْ", meaning: { en: "The Day He will call them", ur: "جس دن وہ انہیں پکارے گا" }, explanation: { en: "Allah's questioning on Judgment Day", ur: "قیامت کے دن اللہ کی پوچھ گچھ" }, verseRef: "28:62" },
        { term: "أَيْنَ شُرَكَائِيَ", meaning: { en: "Where are My partners?", ur: "میرے شریک کہاں ہیں؟" }, explanation: { en: "Challenge to polytheists", ur: "مشرکین کو چیلنج" }, verseRef: "28:62" },
        { term: "الَّذِينَ كُنتُمْ تَزْعُمُونَ", meaning: { en: "Those you used to claim", ur: "جن کا تم دعویٰ کرتے تھے" }, explanation: { en: "False gods they worshipped", ur: "جھوٹے معبود جن کی عبادت کرتے تھے" }, verseRef: "28:62" },
        { term: "قَالَ الَّذِينَ حَقَّ عَلَيْهِمُ الْقَوْلُ", meaning: { en: "Those against whom word has come true say", ur: "جن پر بات ثابت ہو چکی ہے وہ کہیں گے" }, explanation: { en: "Leaders of misguidance speak", ur: "گمراہی کے سرغنوں کی بات" }, verseRef: "28:63" },
        { term: "هَٰؤُلَاءِ الَّذِينَ أَغْوَيْنَا", meaning: { en: "These are those we led astray", ur: "یہ وہ لوگ ہیں جنہیں ہم نے گمراہ کیا" }, explanation: { en: "Admitting they misled others", ur: "دوسروں کو گمراہ کرنے کا اعتراف" }, verseRef: "28:63" },
        { term: "أَغْوَيْنَاهُمْ كَمَا غَوَيْنَا", meaning: { en: "We led them astray as we went astray", ur: "ہم نے انہیں گمراہ کیا جیسے ہم خود گمراہ ہوئے" }, explanation: { en: "Shared misguidance", ur: "مشترکہ گمراہی" }, verseRef: "28:63" },
        { term: "تَبَرَّأْنَا إِلَيْكَ", meaning: { en: "We disassociate ourselves before You", ur: "ہم تیرے سامنے ان سے بری ہیں" }, explanation: { en: "Disclaiming followers", ur: "پیروکاروں سے لاتعلقی" }, verseRef: "28:63" },
        { term: "مَا كَانُوا إِيَّانَا يَعْبُدُونَ", meaning: { en: "It was not us they worshipped", ur: "یہ ہماری عبادت نہیں کرتے تھے" }, explanation: { en: "False gods reject worshippers", ur: "جھوٹے معبود اپنے عبادت گزاروں کو ٹھکرا دیتے ہیں" }, verseRef: "28:63" }
      ]
    },

    qarunStory: {
      name: "Story of Qarun (Korah)",
      nameUr: "قارون کا قصہ",
      nameArabic: "قصة قارون",
      color: "#F59E0B",
      icon: "Crown",
      concepts: [
        { term: "إِنَّ قَارُونَ كَانَ مِن قَوْمِ مُوسَىٰ", meaning: { en: "Qarun was from people of Musa", ur: "قارون موسیٰ کی قوم سے تھا" }, explanation: { en: "Israelite who became corrupt", ur: "بنی اسرائیل کا شخص جو بگڑ گیا" }, verseRef: "28:76" },
        { term: "فَبَغَىٰ عَلَيْهِمْ", meaning: { en: "But he oppressed them", ur: "لیکن اس نے ان پر ظلم کیا" }, explanation: { en: "Tyranny against his own people", ur: "اپنی قوم پر ظلم" }, verseRef: "28:76" },
        { term: "وَآتَيْنَاهُ مِنَ الْكُنُوزِ", meaning: { en: "We gave him treasures", ur: "ہم نے اسے خزانے دیے" }, explanation: { en: "Immense wealth from Allah", ur: "اللہ کی طرف سے بے پناہ دولت" }, verseRef: "28:76" },
        { term: "مَا إِنَّ مَفَاتِحَهُ لَتَنُوءُ بِالْعُصْبَةِ", meaning: { en: "Keys would burden a strong group", ur: "اس کی چابیاں طاقتور جماعت پر بھاری تھیں" }, explanation: { en: "So much wealth, keys alone were heavy", ur: "اتنی دولت کہ صرف چابیاں ہی بھاری تھیں" }, verseRef: "28:76" },
        { term: "أُولِي الْقُوَّةِ", meaning: { en: "Those of strength", ur: "طاقتور لوگ" }, explanation: { en: "Strong men struggled with keys", ur: "مضبوط آدمی بھی چابیاں اٹھانے میں مشکل میں تھے" }, verseRef: "28:76" },
        { term: "لَا تَفْرَحْ", meaning: { en: "Do not exult", ur: "اترانا مت" }, explanation: { en: "Warning against arrogant joy", ur: "متکبرانہ خوشی سے خبردار" }, verseRef: "28:76" },
        { term: "إِنَّ اللَّهَ لَا يُحِبُّ الْفَرِحِينَ", meaning: { en: "Allah does not love the exultant", ur: "اللہ اترانے والوں کو پسند نہیں کرتا" }, explanation: { en: "Arrogant celebration is disliked", ur: "غرور بھری خوشی ناپسندیدہ ہے" }, verseRef: "28:76" }
      ]
    },

    qarunArrogance: {
      name: "Qarun's Arrogance and Downfall",
      nameUr: "قارون کا غرور اور زوال",
      nameArabic: "تكبر قارون وسقوطه",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ", meaning: { en: "Seek through what Allah gave you the Hereafter", ur: "اللہ نے جو دیا ہے اس سے آخرت کا گھر تلاش کرو" }, explanation: { en: "Use wealth for eternal benefit", ur: "دولت کو ابدی فائدے کے لیے استعمال کرو" }, verseRef: "28:77" },
        { term: "وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا", meaning: { en: "And do not forget your share of the world", ur: "اور دنیا سے اپنا حصہ مت بھولو" }, explanation: { en: "Balance worldly and spiritual", ur: "دنیاوی اور روحانی زندگی میں توازن" }, verseRef: "28:77" },
        { term: "وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ", meaning: { en: "Do good as Allah has done good to you", ur: "احسان کرو جیسا اللہ نے تم پر احسان کیا" }, explanation: { en: "Gratitude through charity", ur: "خیرات کے ذریعے شکرگزاری" }, verseRef: "28:77" },
        { term: "وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ", meaning: { en: "And do not seek corruption in the land", ur: "اور زمین میں فساد نہ پھیلاؤ" }, explanation: { en: "Prohibition of spreading evil", ur: "برائی پھیلانے کی ممانعت" }, verseRef: "28:77" },
        { term: "قَالَ إِنَّمَا أُوتِيتُهُ عَلَىٰ عِلْمٍ عِندِي", meaning: { en: "He said: I was given it for knowledge I have", ur: "اس نے کہا: مجھے یہ میرے علم کی وجہ سے ملا ہے" }, explanation: { en: "Qarun's arrogant response", ur: "قارون کا متکبرانہ جواب" }, verseRef: "28:78" },
        { term: "أَوَلَمْ يَعْلَمْ أَنَّ اللَّهَ قَدْ أَهْلَكَ مِن قَبْلِهِ", meaning: { en: "Did he not know Allah destroyed before him", ur: "کیا اسے معلوم نہیں کہ اللہ نے اس سے پہلے ہلاک کیا" }, explanation: { en: "Reminder of past destructions", ur: "ماضی کی تباہیوں کی یاد دہانی" }, verseRef: "28:78" },
        { term: "مِنَ الْقُرُونِ مَنْ هُوَ أَشَدُّ مِنْهُ قُوَّةً", meaning: { en: "Generations stronger than him", ur: "اس سے زیادہ طاقتور نسلوں کو" }, explanation: { en: "Others more powerful were destroyed", ur: "اس سے زیادہ طاقتور لوگ تباہ ہوئے" }, verseRef: "28:78" },
        { term: "وَأَكْثَرُ جَمْعًا", meaning: { en: "And greater in accumulation", ur: "اور زیادہ مال جمع کرنے والوں کو" }, explanation: { en: "Others had more wealth", ur: "دوسروں کے پاس زیادہ دولت تھی" }, verseRef: "28:78" }
      ]
    },

    qarunDisplay: {
      name: "Qarun's Display and Destruction",
      nameUr: "قارون کی نمائش اور تباہی",
      nameArabic: "عرض قارون وهلاكه",
      color: "#EC4899",
      icon: "Eye",
      concepts: [
        { term: "فَخَرَجَ عَلَىٰ قَوْمِهِ فِي زِينَتِهِ", meaning: { en: "He came out to his people in his finery", ur: "وہ اپنی قوم کے سامنے اپنی آرائش میں نکلا" }, explanation: { en: "Ostentatious display of wealth", ur: "دولت کی نمائشی نمود" }, verseRef: "28:79" },
        { term: "قَالَ الَّذِينَ يُرِيدُونَ الْحَيَاةَ الدُّنْيَا", meaning: { en: "Those who desired worldly life said", ur: "دنیاوی زندگی کے چاہنے والوں نے کہا" }, explanation: { en: "Worldly people envied him", ur: "دنیا دار لوگوں نے اس سے حسد کیا" }, verseRef: "28:79" },
        { term: "يَا لَيْتَ لَنَا مِثْلَ مَا أُوتِيَ قَارُونُ", meaning: { en: "If only we had like what Qarun was given", ur: "کاش ہمیں بھی ویسا ملتا جو قارون کو ملا ہے" }, explanation: { en: "Envy of material wealth", ur: "مادی دولت سے حسد" }, verseRef: "28:79" },
        { term: "إِنَّهُ لَذُو حَظٍّ عَظِيمٍ", meaning: { en: "Indeed, he is owner of great fortune", ur: "بے شک وہ بڑی قسمت والا ہے" }, explanation: { en: "Worldly measure of success", ur: "دنیاوی پیمانے پر کامیابی" }, verseRef: "28:79" },
        { term: "وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ", meaning: { en: "Those given knowledge said", ur: "علم والوں نے کہا" }, explanation: { en: "Wise people's response", ur: "دانشمندوں کا جواب" }, verseRef: "28:80" },
        { term: "وَيْلَكُمْ ثَوَابُ اللَّهِ خَيْرٌ", meaning: { en: "Woe to you! Allah's reward is better", ur: "تمہارا برا ہو! اللہ کا ثواب بہتر ہے" }, explanation: { en: "Eternal rewards superior to worldly", ur: "ابدی انعامات دنیاوی سے برتر ہیں" }, verseRef: "28:80" },
        { term: "لِّمَنْ آمَنَ وَعَمِلَ صَالِحًا", meaning: { en: "For those who believe and do good", ur: "ایمان لانے اور نیک عمل کرنے والوں کے لیے" }, explanation: { en: "Condition for divine reward", ur: "الٰہی انعام کی شرط" }, verseRef: "28:80" },
        { term: "وَلَا يُلَقَّاهَا إِلَّا الصَّابِرُونَ", meaning: { en: "Only the patient attain it", ur: "اور یہ بات صبر کرنے والوں کو ہی نصیب ہوتی ہے" }, explanation: { en: "Patience needed for true understanding", ur: "حقیقی فہم کے لیے صبر ضروری ہے" }, verseRef: "28:80" }
      ]
    },

    qarunDestruction: {
      name: "Qarun Swallowed by Earth",
      nameUr: "زمین نے قارون کو نگل لیا",
      nameArabic: "ابتلاع الأرض لقارون",
      color: "#EF4444",
      icon: "Globe",
      concepts: [
        { term: "فَخَسَفْنَا بِهِ وَبِدَارِهِ الْأَرْضَ", meaning: { en: "We caused earth to swallow him and his home", ur: "ہم نے اسے اور اس کے گھر کو زمین میں دھنسا دیا" }, explanation: { en: "Divine punishment - earth opened", ur: "الٰہی سزا - زمین کھل گئی" }, verseRef: "28:81" },
        { term: "فَمَا كَانَ لَهُ مِن فِئَةٍ يَنصُرُونَهُ", meaning: { en: "No group could help him", ur: "کوئی جماعت اس کی مدد نہ کر سکی" }, explanation: { en: "Wealth bought no protection", ur: "دولت نے کوئی تحفظ نہ دیا" }, verseRef: "28:81" },
        { term: "مِن دُونِ اللَّهِ", meaning: { en: "Against Allah", ur: "اللہ کے مقابلے میں" }, explanation: { en: "None can oppose Allah", ur: "کوئی اللہ کا مقابلہ نہیں کر سکتا" }, verseRef: "28:81" },
        { term: "وَمَا كَانَ مِنَ الْمُنتَصِرِينَ", meaning: { en: "He was not of those who help themselves", ur: "اور وہ اپنی مدد کرنے والوں میں سے نہ تھا" }, explanation: { en: "Helpless despite wealth", ur: "دولت کے باوجود بے بس" }, verseRef: "28:81" },
        { term: "وَأَصْبَحَ الَّذِينَ تَمَنَّوْا مَكَانَهُ", meaning: { en: "Those who wished for his position yesterday", ur: "جو لوگ کل اس کی جگہ چاہتے تھے" }, explanation: { en: "Enviers' change of heart", ur: "حاسدوں کا دل بدلنا" }, verseRef: "28:82" },
        { term: "بِالْأَمْسِ يَقُولُونَ وَيْكَأَنَّ اللَّهَ", meaning: { en: "Saying: Alas! It is Allah who", ur: "کہنے لگے: افسوس! اللہ ہی ہے جو" }, explanation: { en: "Realization of divine control", ur: "الٰہی کنٹرول کا ادراک" }, verseRef: "28:82" },
        { term: "يَبْسُطُ الرِّزْقَ لِمَن يَشَاءُ", meaning: { en: "Extends provision to whom He wills", ur: "جسے چاہے رزق کشادہ کرتا ہے" }, explanation: { en: "Allah controls sustenance", ur: "اللہ رزق پر قابو رکھتا ہے" }, verseRef: "28:82" },
        { term: "وَيَقْدِرُ", meaning: { en: "And restricts", ur: "اور تنگ کرتا ہے" }, explanation: { en: "Allah also restricts provision", ur: "اللہ رزق تنگ بھی کرتا ہے" }, verseRef: "28:82" },
        { term: "لَوْلَا أَن مَّنَّ اللَّهُ عَلَيْنَا لَخَسَفَ بِنَا", meaning: { en: "Had Allah not favored us, He would have swallowed us", ur: "اگر اللہ ہم پر مہربان نہ ہوتا تو ہمیں بھی دھنسا دیتا" }, explanation: { en: "Grateful for being spared", ur: "بچ جانے پر شکرگزاری" }, verseRef: "28:82" }
      ]
    },

    hereafterReward: {
      name: "The Hereafter's True Success",
      nameUr: "آخرت کی حقیقی کامیابی",
      nameArabic: "الفوز الحقيقي في الآخرة",
      color: "#10B981",
      icon: "Sparkles",
      concepts: [
        { term: "تِلْكَ الدَّارُ الْآخِرَةُ", meaning: { en: "That home of the Hereafter", ur: "وہ آخرت کا گھر" }, explanation: { en: "Focus on eternal life", ur: "ابدی زندگی پر توجہ" }, verseRef: "28:83" },
        { term: "نَجْعَلُهَا لِلَّذِينَ لَا يُرِيدُونَ عُلُوًّا فِي الْأَرْضِ", meaning: { en: "We assign to those who desire no superiority on earth", ur: "ہم اسے ان لوگوں کے لیے بناتے ہیں جو زمین میں بڑائی نہیں چاہتے" }, explanation: { en: "Humility leads to Paradise", ur: "عاجزی جنت کا راستہ ہے" }, verseRef: "28:83" },
        { term: "وَلَا فَسَادًا", meaning: { en: "Nor corruption", ur: "اور نہ فساد" }, explanation: { en: "Avoiding evil on earth", ur: "زمین پر برائی سے اجتناب" }, verseRef: "28:83" },
        { term: "وَالْعَاقِبَةُ لِلْمُتَّقِينَ", meaning: { en: "And the outcome is for the righteous", ur: "اور انجام متقیوں کے لیے ہے" }, explanation: { en: "Final victory for God-conscious", ur: "خدا ترس لوگوں کے لیے حتمی فتح" }, verseRef: "28:83" },
        { term: "مَن جَاءَ بِالْحَسَنَةِ فَلَهُ خَيْرٌ مِّنْهَا", meaning: { en: "Whoever brings a good deed will have better", ur: "جو نیکی لائے اس کے لیے اس سے بہتر ہے" }, explanation: { en: "Good deeds multiplied", ur: "نیکیاں کئی گنا بڑھائی جاتی ہیں" }, verseRef: "28:84" },
        { term: "وَمَن جَاءَ بِالسَّيِّئَةِ", meaning: { en: "Whoever brings an evil deed", ur: "اور جو برائی لائے" }, explanation: { en: "Evil deeds punished fairly", ur: "برائیوں کی منصفانہ سزا" }, verseRef: "28:84" },
        { term: "فَلَا يُجْزَى الَّذِينَ عَمِلُوا السَّيِّئَاتِ إِلَّا مَا كَانُوا يَعْمَلُونَ", meaning: { en: "They will only be recompensed for what they did", ur: "برائی کرنے والوں کو صرف ان کے اعمال کی جزا ملے گی" }, explanation: { en: "Fair, proportional punishment", ur: "منصفانہ، متناسب سزا" }, verseRef: "28:84" }
      ]
    },

    promiseToMuhammad: {
      name: "Allah's Promise to the Prophet",
      nameUr: "نبی ﷺ سے اللہ کا وعدہ",
      nameArabic: "وعد الله للنبي",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "إِنَّ الَّذِي فَرَضَ عَلَيْكَ الْقُرْآنَ", meaning: { en: "He who obligated upon you the Quran", ur: "جس نے تم پر قرآن فرض کیا" }, explanation: { en: "Allah who gave the Quran", ur: "اللہ جس نے قرآن عطا فرمایا" }, verseRef: "28:85" },
        { term: "لَرَادُّكَ إِلَىٰ مَعَادٍ", meaning: { en: "Will surely return you to a place of return", ur: "ضرور تمہیں لوٹنے کی جگہ واپس لائے گا" }, explanation: { en: "Promise of return to Makkah / or meeting Allah", ur: "مکہ واپسی یا اللہ سے ملاقات کا وعدہ" }, verseRef: "28:85" },
        { term: "قُل رَّبِّي أَعْلَمُ", meaning: { en: "Say: My Lord knows best", ur: "کہو: میرا رب بہتر جانتا ہے" }, explanation: { en: "Allah knows who is guided", ur: "اللہ جانتا ہے کون ہدایت پر ہے" }, verseRef: "28:85" },
        { term: "مَن جَاءَ بِالْهُدَىٰ", meaning: { en: "Who has come with guidance", ur: "کون ہدایت لایا ہے" }, explanation: { en: "Prophet brought true guidance", ur: "نبی ﷺ سچی ہدایت لائے" }, verseRef: "28:85" },
        { term: "وَمَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ", meaning: { en: "And who is in clear error", ur: "اور کون کھلی گمراہی میں ہے" }, explanation: { en: "Disbelievers in obvious misguidance", ur: "کافر واضح گمراہی میں ہیں" }, verseRef: "28:85" },
        { term: "وَمَا كُنتَ تَرْجُو أَن يُلْقَىٰ إِلَيْكَ الْكِتَابُ", meaning: { en: "You did not expect the Book would be sent to you", ur: "تم امید نہیں رکھتے تھے کہ تمہاری طرف کتاب نازل ہوگی" }, explanation: { en: "Prophethood unexpected by Muhammad", ur: "محمد ﷺ کو نبوت کی توقع نہ تھی" }, verseRef: "28:86" },
        { term: "إِلَّا رَحْمَةً مِّن رَّبِّكَ", meaning: { en: "Except as mercy from your Lord", ur: "مگر یہ تمہارے رب کی رحمت ہے" }, explanation: { en: "Quran is divine mercy", ur: "قرآن الٰہی رحمت ہے" }, verseRef: "28:86" },
        { term: "فَلَا تَكُونَنَّ ظَهِيرًا لِّلْكَافِرِينَ", meaning: { en: "So never be a supporter of the disbelievers", ur: "تو کافروں کا مددگار ہرگز نہ بنو" }, explanation: { en: "Command to oppose disbelief", ur: "کفر کی مخالفت کا حکم" }, verseRef: "28:86" }
      ]
    },

    finalMessage: {
      name: "Final Message and Tawheed",
      nameUr: "آخری پیغام اور توحید",
      nameArabic: "الرسالة الختامية والتوحيد",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "وَلَا يَصُدُّنَّكَ عَنْ آيَاتِ اللَّهِ", meaning: { en: "Let them not turn you from Allah's verses", ur: "وہ تمہیں اللہ کی آیات سے نہ ہٹائیں" }, explanation: { en: "Stay firm on truth", ur: "حق پر ثابت قدم رہو" }, verseRef: "28:87" },
        { term: "بَعْدَ إِذْ أُنزِلَتْ إِلَيْكَ", meaning: { en: "After they were revealed to you", ur: "جب کہ وہ تمہاری طرف نازل ہو چکی ہیں" }, explanation: { en: "Quran already received", ur: "قرآن پہلے ہی موصول ہو چکا" }, verseRef: "28:87" },
        { term: "وَادْعُ إِلَىٰ رَبِّكَ", meaning: { en: "And invite to your Lord", ur: "اور اپنے رب کی طرف دعوت دو" }, explanation: { en: "Continue calling to Allah", ur: "اللہ کی طرف بلاتے رہو" }, verseRef: "28:87" },
        { term: "وَلَا تَكُونَنَّ مِنَ الْمُشْرِكِينَ", meaning: { en: "And never be of those who associate partners", ur: "اور ہرگز مشرکوں میں سے نہ ہونا" }, explanation: { en: "Absolute prohibition of shirk", ur: "شرک کی مطلق ممانعت" }, verseRef: "28:87" },
        { term: "وَلَا تَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ", meaning: { en: "Do not invoke with Allah another deity", ur: "اللہ کے ساتھ کسی اور معبود کو نہ پکارو" }, explanation: { en: "Pure monotheism commanded", ur: "خالص توحید کا حکم" }, verseRef: "28:88" },
        { term: "لَا إِلَٰهَ إِلَّا هُوَ", meaning: { en: "There is no deity except Him", ur: "اس کے سوا کوئی معبود نہیں" }, explanation: { en: "Declaration of Tawheed", ur: "توحید کا اعلان" }, verseRef: "28:88" },
        { term: "كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ", meaning: { en: "Everything will perish except His Face", ur: "ہر چیز فنا ہونے والی ہے سوائے اس کی ذات کے" }, explanation: { en: "Only Allah is eternal", ur: "صرف اللہ ابدی ہے" }, verseRef: "28:88" },
        { term: "لَهُ الْحُكْمُ", meaning: { en: "To Him belongs judgment", ur: "فیصلہ اسی کا ہے" }, explanation: { en: "Allah is the ultimate Judge", ur: "اللہ سب سے بڑا فیصلہ کرنے والا ہے" }, verseRef: "28:88" },
        { term: "وَإِلَيْهِ تُرْجَعُونَ", meaning: { en: "And to Him you will be returned", ur: "اور اسی کی طرف تم لوٹائے جاؤ گے" }, explanation: { en: "All return to Allah for judgment", ur: "سب حساب کے لیے اللہ کی طرف لوٹیں گے" }, verseRef: "28:88" }
      ]
    }
  },

  relationships: [
    { from: "فرعون علا في الأرض", to: "قارون... فبغى عليهم", type: "parallel", description: { en: "Pharaoh and Qarun - both arrogant tyrants, similar fates", ur: "فرعون اور قارون - دونوں متکبر ظالم، ایک جیسا انجام" } },
    { from: "يذبح أبناءهم", to: "نجعلهم أئمة", type: "reversal", description: { en: "From infanticide to leadership - Allah's plan overturns oppression", ur: "بچوں کے قتل سے قیادت تک - اللہ کا منصوبہ ظلم کو الٹ دیتا ہے" } },
    { from: "فألقيه في اليم", to: "فنبذناهم في اليم", type: "irony", description: { en: "Baby Musa cast in river, Pharaoh drowned in sea", ur: "بچے موسیٰ کو دریا میں ڈالا، فرعون سمندر میں ڈوبا" } },
    { from: "إنما أوتيته على علم", to: "فخسفنا به وبداره الأرض", type: "consequence", description: { en: "Qarun's arrogance led to his swallowing by earth", ur: "قارون کے تکبر نے اسے زمین میں دھنسا دیا" } },
    { from: "رب إني لما أنزلت إلي من خير فقير", to: "فخرج على قومه في زينته", type: "contrast", description: { en: "Musa's humble prayer vs. Qarun's arrogant display", ur: "موسیٰ کی عاجزانہ دعا بمقابلہ قارون کی متکبرانہ نمائش" } },
    { from: "كل شيء هالك إلا وجهه", to: "فمتاع الحياة الدنيا", type: "hierarchy", description: { en: "Only Allah's face remains - world is temporary", ur: "صرف اللہ کی ذات باقی رہتی ہے - دنیا عارضی ہے" } },
    { from: "إنك لا تهدي من أحببت", to: "ولكن الله يهدي من يشاء", type: "clarification", description: { en: "Prophet cannot give guidance; only Allah guides", ur: "نبی ﷺ ہدایت نہیں دے سکتے؛ صرف اللہ ہدایت دیتا ہے" } },
    { from: "نريد أن نمن على الذين استضعفوا", to: "والعاقبة للمتقين", type: "theme", description: { en: "Allah favors the oppressed righteous in the end", ur: "اللہ بالآخر مظلوم نیک لوگوں کو نوازتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Pharaoh's Tyranny", verses: "28:1-6", description: { en: "Opening: Pharaoh's arrogance, oppression of Bani Israel, Allah's plan to elevate them", ur: "آغاز: فرعون کا تکبر، بنی اسرائیل پر ظلم، اللہ کا ان کو بلند کرنے کا منصوبہ" } },
      { stage: 2, theme: "Baby Musa's Preservation", verses: "28:7-13", description: { en: "Divine protection: mother's inspiration, river, Pharaoh's house, return to mother", ur: "الٰہی حفاظت: ماں کا الہام، دریا، فرعون کا گھر، ماں کو واپسی" } },
      { stage: 3, theme: "Musa's Youth and Flight", verses: "28:14-21", description: { en: "Maturity, unintentional killing, fear, and escape from Egypt", ur: "جوانی، غیر ارادی قتل، خوف، اور مصر سے فرار" } },
      { stage: 4, theme: "Journey to Madyan", verses: "28:22-28", description: { en: "Travel, helping at well, marriage to Shu'ayb's daughter, years of service", ur: "سفر، کنویں پر مدد، شعیب کی بیٹی سے شادی، خدمت کے سال" } },
      { stage: 5, theme: "Prophethood at Mount Tur", verses: "28:29-35", description: { en: "Fire, divine call, miracles (staff, hand), mission with Harun", ur: "آگ، الٰہی پکار، معجزات (عصا، ہاتھ)، ہارون کے ساتھ مشن" } },
      { stage: 6, theme: "Confrontation with Pharaoh", verses: "28:36-42", description: { en: "Pharaoh's arrogance, tower of Haman, drowning in the sea", ur: "فرعون کا تکبر، ہامان کا مینار، سمندر میں ڈوبنا" } },
      { stage: 7, theme: "Torah and Prophet's Confirmation", verses: "28:43-50", description: { en: "Book given to Musa, proof of Muhammad's prophethood, disbelievers' excuses", ur: "موسیٰ کو کتاب دی گئی، محمد ﷺ کی نبوت کا ثبوت، کافروں کے بہانے" } },
      { stage: 8, theme: "Sincere People of Book", verses: "28:51-55", description: { en: "Those who believed in both scriptures receive double reward", ur: "دونوں کتابوں پر ایمان لانے والوں کو دوگنا اجر" } },
      { stage: 9, theme: "Guidance from Allah", verses: "28:56-61", description: { en: "Only Allah guides, worldly vs. eternal comparison", ur: "صرف اللہ ہدایت دیتا ہے، دنیاوی بمقابلہ ابدی موازنہ" } },
      { stage: 10, theme: "Judgment Day Scenes", verses: "28:62-75", description: { en: "Questioning about partners, idol's denial, regret of disbelievers", ur: "شریکوں کے بارے میں سوال، بتوں کا انکار، کافروں کا پچھتاوا" } },
      { stage: 11, theme: "Story of Qarun", verses: "28:76-82", description: { en: "Qarun's wealth, arrogance, display, and destruction by earth", ur: "قارون کی دولت، تکبر، نمائش، اور زمین میں دھنسنا" } },
      { stage: 12, theme: "True Success and Conclusion", verses: "28:83-88", description: { en: "Hereafter for humble, promise to Prophet, Tawheed declaration", ur: "عاجزوں کے لیے آخرت، نبی ﷺ سے وعدہ، توحید کا اعلان" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Trust Allah's plan", ur: "اللہ کے منصوبے پر بھروسا رکھو" }, how: { en: "Musa's mother cast him in river - impossible command led to his return", ur: "موسیٰ کی ماں نے اسے دریا میں ڈالا - ناممکن حکم نے اسے واپس لایا" }, verse: "28:7-13" },
      { principle: { en: "Repent immediately", ur: "فوراً توبہ کرو" }, how: { en: "Musa repented instantly after sin - don't delay seeking forgiveness", ur: "موسیٰ نے گناہ کے بعد فوری توبہ کی - مغفرت مانگنے میں تاخیر نہ کرو" }, verse: "28:15-16" },
      { principle: { en: "Help others selflessly", ur: "بے لوث دوسروں کی مدد کرو" }, how: { en: "Musa helped women at well expecting nothing - then prayed to Allah for provision", ur: "موسیٰ نے بغیر توقع کے عورتوں کی مدد کی - پھر اللہ سے رزق مانگا" }, verse: "28:24" },
      { principle: { en: "Be strong and trustworthy", ur: "طاقتور اور امانتدار بنو" }, how: { en: "Best employee qualities: strength and trust - develop both", ur: "بہترین ملازم کی صفات: طاقت اور امانت - دونوں پیدا کرو" }, verse: "28:26" },
      { principle: { en: "Balance world and hereafter", ur: "دنیا اور آخرت میں توازن رکھو" }, how: { en: "Seek hereafter with Allah's blessings, but don't forget worldly share", ur: "اللہ کی نعمتوں سے آخرت تلاش کرو، لیکن دنیا کا حصہ نہ بھولو" }, verse: "28:77" },
      { principle: { en: "Never attribute blessings to yourself", ur: "نعمتوں کو کبھی اپنی طرف منسوب نہ کرو" }, how: { en: "Qarun said 'I earned this by my knowledge' - he was swallowed by earth", ur: "قارون نے کہا 'میرے علم سے ملا' - زمین نے اسے نگل لیا" }, verse: "28:78-81" },
      { principle: { en: "Don't envy the wealthy", ur: "دولت مندوں سے حسد نہ کرو" }, how: { en: "Those who envied Qarun praised Allah when he was destroyed", ur: "جن لوگوں نے قارون سے حسد کیا انہوں نے اس کی تباہی پر اللہ کی حمد کی" }, verse: "28:79-82" },
      { principle: { en: "Seek humility, not superiority", ur: "عاجزی اختیار کرو، برتری نہیں" }, how: { en: "Hereafter is for those who don't want superiority or corruption", ur: "آخرت ان کے لیے ہے جو زمین میں بڑائی اور فساد نہیں چاہتے" }, verse: "28:83" },
      { principle: { en: "Everything perishes except Allah", ur: "اللہ کے سوا ہر چیز فانی ہے" }, how: { en: "Worldly attachments are futile - only Allah's face remains", ur: "دنیاوی لگاؤ بے فائدہ ہیں - صرف اللہ کی ذات باقی ہے" }, verse: "28:88" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Parallel Downfall of Pharaoh and Qarun", ur: "فرعون اور قارون کی متوازی تباہی" },
    insight: { en: "Surah Al-Qasas presents two powerful parallel narratives: Pharaoh (external oppressor) and Qarun (internal oppressor from Bani Israel). Both were given immense power - Pharaoh political, Qarun financial. Both 'exalted themselves' (علا/بغى). Both dismissed divine signs. Both were destroyed spectacularly - Pharaoh by water (drowned in sea), Qarun by earth (swallowed by ground). The message: Arrogance leads to destruction regardless of who you are or what type of power you possess. Most remarkably, the surah shows people ENVYING Qarun before his destruction, then praising Allah after it. This warns us that what we envy in others may be their path to ruin. The surah concludes with 'كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ' (Everything perishes except His Face) - after showing us two of history's wealthiest and most powerful figures utterly destroyed, the reminder that EVERYTHING passes except Allah becomes devastatingly clear.", ur: "سورۃ القصص دو طاقتور متوازی قصے پیش کرتی ہے: فرعون (بیرونی ظالم) اور قارون (بنی اسرائیل کا اندرونی ظالم)۔ دونوں کو بے پناہ طاقت دی گئی - فرعون کو سیاسی، قارون کو مالی۔ دونوں نے 'سرکشی' کی (علا/بغى)۔ دونوں نے الٰہی نشانیاں رد کیں۔ دونوں شاندار طریقے سے تباہ ہوئے - فرعون پانی سے (سمندر میں ڈوبا)، قارون زمین سے (زمین نے نگل لیا)۔ پیغام: تکبر تباہی کا باعث ہے چاہے آپ کوئی بھی ہوں۔ سب سے اہم بات، سورت لوگوں کو قارون سے حسد کرتے دکھاتی ہے اس کی تباہی سے پہلے، پھر اللہ کی حمد کرتے ہیں اس کے بعد۔ سورت 'كُلُّ شَيْءٍ هَالِكٌ إِلَّا وَجْهَهُ' (ہر چیز فنا ہونے والی ہے سوائے اس کی ذات کے) پر ختم ہوتی ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "طسم opening", example: "Verse 1", effect: { en: "Mysterious letters drawing attention to the divine source", ur: "پراسرار حروف جو الٰہی ماخذ کی طرف توجہ دلاتے ہیں" } },
      { feature: "Ring composition", example: "يم (sea) appears for both baby Musa (rescue) and Pharaoh (death)", effect: { en: "Same element, opposite outcomes", ur: "ایک ہی عنصر، مخالف نتائج" } },
      { feature: "فرعون repetition", example: "14 times in surah", effect: { en: "Emphasis on his tyranny as central warning", ur: "مرکزی انتباہ کے طور پر اس کے ظلم پر زور" } },
      { feature: "Dua patterns", example: "رب إني ظلمت نفسي (28:16), رب إني لما أنزلت (28:24)", effect: { en: "Musa's prayers as model supplications", ur: "موسیٰ کی دعائیں بطور نمونہ" } },
      { feature: "كل شيء هالك إلا وجهه", example: "28:88", effect: { en: "Powerful concluding statement of divine permanence vs. worldly transience", ur: "الٰہی بقا بمقابلہ دنیاوی فنا کا طاقتور اختتامی بیان" } },
      { feature: "Contrast pairs", example: "استضعف/نمكن, خائف/آمن", effect: { en: "Divine reversal of conditions", ur: "حالات کی الٰہی تبدیلی" } }
    ]
  },

  prophetMentions: {
    prophets: [
      { name: "Musa (Moses)", role: { en: "Central figure - his complete life story from birth to prophethood", ur: "مرکزی کردار - پیدائش سے نبوت تک مکمل زندگی کا قصہ" }, verses: "28:3-43" },
      { name: "Harun (Aaron)", role: { en: "Musa's brother and assistant in mission to Pharaoh", ur: "موسیٰ کا بھائی اور فرعون کے پاس مشن میں مددگار" }, verses: "28:34-35" },
      { name: "Shu'ayb", role: { en: "Implied - the old man of Madyan whose daughter Musa married", ur: "اشارتاً - مدین کے بوڑھے شخص جن کی بیٹی سے موسیٰ نے شادی کی" }, verses: "28:23-28" },
      { name: "Muhammad", role: { en: "Addressed directly - confirmation of prophethood, promise of return", ur: "براہ راست مخاطب - نبوت کی تصدیق، واپسی کا وعدہ" }, verses: "28:44-46, 85-88" }
    ]
  },

  historicalFigures: {
    figures: [
      { name: "Pharaoh (Fir'awn)", description: { en: "Tyrant king of Egypt who persecuted Bani Israel", ur: "مصر کا ظالم بادشاہ جس نے بنی اسرائیل پر ظلم کیا" }, fate: { en: "Drowned in the sea with his army", ur: "اپنے لشکر سمیت سمندر میں ڈوب گیا" } },
      { name: "Haman", description: { en: "Pharaoh's minister who built the tower", ur: "فرعون کا وزیر جس نے مینار تعمیر کیا" }, fate: { en: "Drowned with Pharaoh", ur: "فرعون کے ساتھ ڈوب گیا" } },
      { name: "Qarun (Korah)", description: { en: "Wealthy Israelite who became arrogant", ur: "دولت مند بنی اسرائیلی جو متکبر ہو گیا" }, fate: { en: "Swallowed by the earth with his house", ur: "اپنے گھر سمیت زمین میں دھنس گیا" } },
      { name: "Musa's mother", description: { en: "Inspired by Allah to save her son", ur: "اللہ نے بیٹے کو بچانے کا الہام دیا" }, outcome: { en: "Reunited with her son, peace of heart", ur: "بیٹے سے دوبارہ ملاپ، دل کا سکون" } },
      { name: "Musa's sister", description: { en: "Followed the basket, suggested a nurse", ur: "ٹوکری کا پیچھا کیا، دایہ تجویز کی" }, outcome: { en: "Helped reunite family", ur: "خاندان کے ملاپ میں مدد کی" } },
      { name: "Pharaoh's wife (Asiya)", description: { en: "Found baby Musa, loved him, asked to spare him", ur: "بچے موسیٰ کو پایا، محبت کی، بچانے کی درخواست کی" }, verse: "28:9" }
    ]
  },

  keyDuas: {
    prayers: [
      { arabic: "رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي", transliteration: "Rabbi inni dhalamtu nafsi faghfir li", meaning: { en: "My Lord, I have wronged myself, so forgive me", ur: "اے میرے رب، میں نے اپنی جان پر ظلم کیا، مجھے معاف کر دے" }, context: { en: "Musa's repentance after killing", ur: "قتل کے بعد موسیٰ کی توبہ" }, verse: "28:16" },
      { arabic: "رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ", transliteration: "Rabbi najjini min al-qawm adh-dhalimin", meaning: { en: "My Lord, save me from the wrongdoing people", ur: "اے میرے رب، مجھے ظالم لوگوں سے بچا لے" }, context: { en: "Musa's prayer when fleeing", ur: "فرار کے وقت موسیٰ کی دعا" }, verse: "28:21" },
      { arabic: "عَسَىٰ رَبِّي أَن يَهْدِيَنِي سَوَاءَ السَّبِيلِ", transliteration: "Asa rabbi an yahdiyanis sawaas-sabil", meaning: { en: "Perhaps my Lord will guide me to the right way", ur: "شاید میرا رب مجھے سیدھا راستہ دکھا دے" }, context: { en: "Musa's hope while journeying to Madyan", ur: "مدین کے سفر میں موسیٰ کی امید" }, verse: "28:22" },
      { arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ", transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqir", meaning: { en: "My Lord, I am in need of whatever good You send me", ur: "اے میرے رب، تو جو بھی بھلائی میری طرف اتارے میں اس کا محتاج ہوں" }, context: { en: "Musa's beautiful prayer of need", ur: "موسیٰ کی حاجت کی خوبصورت دعا" }, verse: "28:24" }
    ]
  }
};

export default ONTOLOGY;
