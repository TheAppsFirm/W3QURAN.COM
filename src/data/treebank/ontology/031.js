/**
 * Surah Luqman (31) - Ontology of Quranic Concepts
 * The Wise
 * Theme: Wisdom of Luqman, parental advice, gratitude to Allah, signs of creation
 * Revelation: Makki (except verses 27-29 which are Madani)
 */

export const ONTOLOGY = {
  surahId: 31,
  surahName: "Luqman",
  surahNameArabic: "لقمان",
  revelationType: "Makki",
  totalAyahs: 34,

  categories: {
    quranAndGuidance: {
      name: "The Quran as Guidance",
      nameUr: "قرآن بطور ہدایت",
      nameArabic: "القرآن هدى",
      color: "#3B82F6",
      icon: "Book",
      concepts: [
        { term: "الْكِتَابِ الْحَكِيمِ", meaning: { en: "The Wise Book", ur: "حکمت والی کتاب" }, explanation: { en: "Quran described as 'Hakeem' - full of wisdom, every verse purposeful", ur: "قرآن کو 'حکیم' کہا گیا - حکمت سے بھرپور، ہر آیت بامقصد" }, verseRef: "31:2" },
        { term: "هُدًى وَرَحْمَةً", meaning: { en: "Guidance and mercy", ur: "ہدایت اور رحمت" }, explanation: { en: "Two purposes of Quran: to guide and to be a mercy for believers", ur: "قرآن کے دو مقاصد: ہدایت دینا اور مومنین کے لیے رحمت ہونا" }, verseRef: "31:3" },
        { term: "الْمُحْسِنِينَ", meaning: { en: "The doers of good", ur: "نیکی کرنے والے" }, explanation: { en: "Muhsineen - those who worship as if seeing Allah", ur: "محسنین - وہ لوگ جو اللہ کو دیکھتے ہوئے عبادت کرتے ہیں" }, verseRef: "31:3" },
        { term: "يُقِيمُونَ الصَّلَاةَ", meaning: { en: "Establish prayer", ur: "نماز قائم کرنا" }, explanation: { en: "First pillar of practice after faith", ur: "ایمان کے بعد عمل کا پہلا ستون" }, verseRef: "31:4" },
        { term: "يُؤْتُونَ الزَّكَاةَ", meaning: { en: "Give zakat", ur: "زکوٰة ادا کرنا" }, explanation: { en: "Purification of wealth, social responsibility", ur: "مال کی تطہیر، سماجی ذمہ داری" }, verseRef: "31:4" },
        { term: "بِالْآخِرَةِ هُمْ يُوقِنُونَ", meaning: { en: "Certain of the Hereafter", ur: "آخرت پر یقین رکھنے والے" }, explanation: { en: "Yaqeen (certainty) - highest level of faith", ur: "یقین - ایمان کا اعلیٰ ترین درجہ" }, verseRef: "31:4" }
      ]
    },

    misguidence: {
      name: "Those Who Mislead",
      nameUr: "گمراہ کرنے والے",
      nameArabic: "المضلون",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "لَهْوَ الْحَدِيثِ", meaning: { en: "Idle talk/amusement", ur: "لغو باتیں/تفریح" }, explanation: { en: "Distracting entertainment that leads away from Allah's path. Can include music, stories, or speech that diverts from truth", ur: "وہ تفریح جو اللہ کے راستے سے ہٹا دے۔ اس میں موسیقی، کہانیاں یا ایسی باتیں شامل ہیں جو سچائی سے ہٹائیں" }, verseRef: "31:6" },
        { term: "لِيُضِلَّ عَن سَبِيلِ اللَّهِ", meaning: { en: "To mislead from Allah's way", ur: "اللہ کے راستے سے گمراہ کرنا" }, explanation: { en: "Purpose of lahw - distraction from guidance", ur: "لہو کا مقصد - ہدایت سے دھیان ہٹانا" }, verseRef: "31:6" },
        { term: "يَتَّخِذَهَا هُزُوًا", meaning: { en: "Takes it in mockery", ur: "اسے مذاق بنا لینا" }, explanation: { en: "Ridiculing divine guidance - a grave sin", ur: "الٰہی ہدایت کا مذاق اڑانا - بہت بڑا گناہ" }, verseRef: "31:6" },
        { term: "عَذَابٌ مُّهِينٌ", meaning: { en: "Humiliating punishment", ur: "ذلت آمیز عذاب" }, explanation: { en: "Those who mock will face humiliation - matching their crime", ur: "مذاق اڑانے والوں کو ذلت کا سامنا ہوگا - ان کے جرم کے مطابق" }, verseRef: "31:6" },
        { term: "وَقْرًا", meaning: { en: "Deafness/heaviness", ur: "بہرا پن/بوجھ" }, explanation: { en: "Spiritual deafness - unable to hear truth even when presented", ur: "روحانی بہرا پن - سچائی سنائی جانے پر بھی سننے سے قاصر" }, verseRef: "31:7" },
        { term: "مُسْتَكْبِرًا", meaning: { en: "Arrogantly", ur: "تکبر سے" }, explanation: { en: "Istikbaar - the barrier that prevents accepting truth", ur: "استکبار - وہ رکاوٹ جو سچائی قبول کرنے سے روکتی ہے" }, verseRef: "31:7" }
      ]
    },

    luqmanWisdom: {
      name: "The Wisdom of Luqman",
      nameUr: "لقمان کی حکمت",
      nameArabic: "حكمة لقمان",
      color: "#F59E0B",
      icon: "Star",
      concepts: [
        { term: "الْحِكْمَةَ", meaning: { en: "Wisdom (Hikmah)", ur: "حکمت" }, explanation: { en: "Allah granted Luqman wisdom - understanding truth and acting upon it correctly", ur: "اللہ نے لقمان کو حکمت عطا فرمائی - سچائی کو سمجھنا اور اس پر صحیح عمل کرنا" }, verseRef: "31:12" },
        { term: "أَنِ اشْكُرْ لِلَّهِ", meaning: { en: "Be grateful to Allah", ur: "اللہ کا شکر ادا کرو" }, explanation: { en: "First lesson of wisdom: gratitude. Shukr is the essence of all worship", ur: "حکمت کا پہلا سبق: شکر۔ شکر تمام عبادات کی روح ہے" }, verseRef: "31:12" },
        { term: "مَن يَشْكُرْ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِ", meaning: { en: "Whoever is grateful is grateful for himself", ur: "جو شکر کرتا ہے وہ اپنے ہی فائدے کے لیے کرتا ہے" }, explanation: { en: "Gratitude benefits the grateful one, not Allah", ur: "شکر شکر کرنے والے کو فائدہ دیتا ہے، اللہ کو نہیں" }, verseRef: "31:12" },
        { term: "وَمَن كَفَرَ فَإِنَّ اللَّهَ غَنِيٌّ حَمِيدٌ", meaning: { en: "Whoever disbelieves - Allah is Free of need, Praiseworthy", ur: "جو ناشکری کرے - اللہ بے نیاز، قابلِ حمد ہے" }, explanation: { en: "Ingratitude harms only the ingrate; Allah needs nothing", ur: "ناشکری صرف ناشکر کو نقصان دیتی ہے؛ اللہ کو کسی چیز کی ضرورت نہیں" }, verseRef: "31:12" }
      ]
    },

    luqmanAdvice: {
      name: "Luqman's Advice to His Son",
      nameUr: "لقمان کی اپنے بیٹے کو نصیحت",
      nameArabic: "وصايا لقمان لابنه",
      color: "#8B5CF6",
      icon: "Heart",
      concepts: [
        { term: "يَا بُنَيَّ", meaning: { en: "O my dear son", ur: "اے میرے پیارے بیٹے" }, explanation: { en: "Diminutive form showing love and tenderness. Advice given with affection, not harshness", ur: "تصغیر کا صیغہ محبت اور شفقت ظاہر کرتا ہے۔ نصیحت پیار سے دی گئی، سختی سے نہیں" }, verseRef: "31:13" },
        { term: "لَا تُشْرِكْ بِاللَّهِ", meaning: { en: "Do not associate partners with Allah", ur: "اللہ کے ساتھ شریک نہ ٹھہراؤ" }, explanation: { en: "FIRST advice: Tawheed. Foundation of all wisdom", ur: "پہلی نصیحت: توحید۔ تمام حکمت کی بنیاد" }, verseRef: "31:13" },
        { term: "إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ", meaning: { en: "Shirk is great wrongdoing", ur: "شرک بہت بڑا ظلم ہے" }, explanation: { en: "Zulm azeem - greatest injustice to oneself and to Allah's right", ur: "ظلم عظیم - اپنے آپ پر اور اللہ کے حق پر سب سے بڑا ظلم" }, verseRef: "31:13" },
        { term: "أَقِمِ الصَّلَاةَ", meaning: { en: "Establish prayer", ur: "نماز قائم کرو" }, explanation: { en: "Connection with Allah - the pillar of faith", ur: "اللہ سے تعلق - ایمان کا ستون" }, verseRef: "31:17" },
        { term: "وَأْمُرْ بِالْمَعْرُوفِ", meaning: { en: "Command good", ur: "نیکی کا حکم دو" }, explanation: { en: "Social responsibility - not passive Islam", ur: "سماجی ذمہ داری - اسلام غیر فعال نہیں" }, verseRef: "31:17" },
        { term: "وَانْهَ عَنِ الْمُنكَرِ", meaning: { en: "Forbid evil", ur: "برائی سے روکو" }, explanation: { en: "Active resistance against wrong", ur: "برائی کے خلاف سرگرم مزاحمت" }, verseRef: "31:17" },
        { term: "وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ", meaning: { en: "Be patient with what befalls you", ur: "جو مصیبت آئے اس پر صبر کرو" }, explanation: { en: "Patience (sabr) when facing difficulties from doing good", ur: "نیکی کرنے سے آنے والی مشکلات میں صبر" }, verseRef: "31:17" },
        { term: "إِنَّ ذَٰلِكَ مِنْ عَزْمِ الْأُمُورِ", meaning: { en: "That is of the matters requiring determination", ur: "یہ عزم کے کاموں میں سے ہے" }, explanation: { en: "These require 'azm - firm resolve, not for the weak-willed", ur: "ان کے لیے عزم چاہیے - مضبوط ارادہ، کمزور اراده والوں کا کام نہیں" }, verseRef: "31:17" }
      ]
    },

    characterGuidance: {
      name: "Character and Conduct",
      nameUr: "کردار اور اخلاق",
      nameArabic: "الأخلاق والسلوك",
      color: "#10B981",
      icon: "Users",
      concepts: [
        { term: "لَا تُصَعِّرْ خَدَّكَ لِلنَّاسِ", meaning: { en: "Do not turn your cheek away from people", ur: "لوگوں سے اپنا رخسار نہ پھیرو" }, explanation: { en: "Saa'ir - turning face away in contempt. Sign of arrogance", ur: "صَعِر - حقارت سے منہ پھیرنا۔ تکبر کی نشانی" }, verseRef: "31:18" },
        { term: "لَا تَمْشِ فِي الْأَرْضِ مَرَحًا", meaning: { en: "Do not walk on earth arrogantly", ur: "زمین پر اکڑ کر نہ چلو" }, explanation: { en: "Marah - strutting with pride, showing off", ur: "مرح - تکبر سے اِتراتے ہوئے چلنا، دکھاوا" }, verseRef: "31:18" },
        { term: "إِنَّ اللَّهَ لَا يُحِبُّ كُلَّ مُخْتَالٍ فَخُورٍ", meaning: { en: "Allah does not love the self-conceited boaster", ur: "اللہ کسی بھی خودپسند شیخی خور کو پسند نہیں کرتا" }, explanation: { en: "Mukhtal = conceited in self; Fakhoor = boastful to others", ur: "مختال = خود پسند؛ فخور = دوسروں کے سامنے شیخی بگھارنے والا" }, verseRef: "31:18" },
        { term: "وَاقْصِدْ فِي مَشْيِكَ", meaning: { en: "Be moderate in your walking", ur: "اپنی چال میں اعتدال رکھو" }, explanation: { en: "Moderation in pace - neither rushing nor dragging", ur: "رفتار میں اعتدال - نہ جلدی نہ سستی" }, verseRef: "31:19" },
        { term: "وَاغْضُضْ مِن صَوْتِكَ", meaning: { en: "Lower your voice", ur: "اپنی آواز دھیمی رکھو" }, explanation: { en: "Ghadh - reduce. Not shouting unnecessarily", ur: "غض - کم کرنا۔ بلاضرورت چلانا نہیں" }, verseRef: "31:19" },
        { term: "إِنَّ أَنكَرَ الْأَصْوَاتِ لَصَوْتُ الْحَمِيرِ", meaning: { en: "The most unpleasant of sounds is the braying of donkeys", ur: "سب سے بری آواز گدھوں کی آواز ہے" }, explanation: { en: "Harsh comparison to deter loud, unnecessary speech", ur: "بلند اور بےمقصد بات سے روکنے کے لیے سخت تشبیہ" }, verseRef: "31:19" }
      ]
    },

    parentalRights: {
      name: "Rights of Parents",
      nameUr: "والدین کے حقوق",
      nameArabic: "حقوق الوالدين",
      color: "#EC4899",
      icon: "Heart",
      concepts: [
        { term: "وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ", meaning: { en: "We have enjoined upon man regarding his parents", ur: "ہم نے انسان کو اس کے والدین کے بارے میں نصیحت کی" }, explanation: { en: "Divine commandment - parental rights come from Allah", ur: "الٰہی حکم - والدین کے حقوق اللہ کی طرف سے ہیں" }, verseRef: "31:14" },
        { term: "حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَىٰ وَهْنٍ", meaning: { en: "His mother carried him in weakness upon weakness", ur: "اس کی ماں نے اسے کمزوری پر کمزوری اٹھا کر پالا" }, explanation: { en: "Describing pregnancy hardships - wahn = weakness, frailty", ur: "حمل کی مشکلات کا بیان - وہن = کمزوری، نقاہت" }, verseRef: "31:14" },
        { term: "وَفِصَالُهُ فِي عَامَيْنِ", meaning: { en: "And his weaning in two years", ur: "اور اس کا دودھ چھڑانا دو سال میں" }, explanation: { en: "Two years of breastfeeding - further sacrifice of mother", ur: "دو سال دودھ پلانا - ماں کی مزید قربانی" }, verseRef: "31:14" },
        { term: "اشْكُرْ لِي وَلِوَالِدَيْكَ", meaning: { en: "Be grateful to Me and to your parents", ur: "میرا شکر ادا کرو اور اپنے والدین کا" }, explanation: { en: "Gratitude to parents linked directly with gratitude to Allah", ur: "والدین کا شکر اللہ کے شکر سے براہ راست جڑا ہے" }, verseRef: "31:14" },
        { term: "إِلَيَّ الْمَصِيرُ", meaning: { en: "To Me is the destination", ur: "میری ہی طرف لوٹنا ہے" }, explanation: { en: "Ultimately all return to Allah for accounting", ur: "بالآخر سب اللہ کی طرف حساب کے لیے لوٹیں گے" }, verseRef: "31:14" }
      ]
    },

    limitsOfObedience: {
      name: "Limits of Parental Obedience",
      nameUr: "والدین کی اطاعت کی حدود",
      nameArabic: "حدود طاعة الوالدين",
      color: "#3B82F6",
      icon: "Scale",
      concepts: [
        { term: "جَاهَدَاكَ", meaning: { en: "They strive against you", ur: "وہ تم سے زور لگائیں" }, explanation: { en: "Jihad here = pressure, persistent effort to make you do wrong", ur: "یہاں جہاد = دباؤ، غلط کام کرانے کی مسلسل کوشش" }, verseRef: "31:15" },
        { term: "لِتُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِ عِلْمٌ", meaning: { en: "To associate with Me that of which you have no knowledge", ur: "تاکہ تم میرے ساتھ وہ شریک ٹھہراؤ جس کا تمہیں علم نہیں" }, explanation: { en: "Shirk - the one thing that breaks obedience to parents", ur: "شرک - وہ واحد چیز جو والدین کی اطاعت کی حد ختم کرتی ہے" }, verseRef: "31:15" },
        { term: "فَلَا تُطِعْهُمَا", meaning: { en: "Do not obey them", ur: "ان کی اطاعت نہ کرو" }, explanation: { en: "Clear limit: no obedience in disobedience to Allah", ur: "واضح حد: اللہ کی نافرمانی میں کسی کی اطاعت نہیں" }, verseRef: "31:15" },
        { term: "وَصَاحِبْهُمَا فِي الدُّنْيَا مَعْرُوفًا", meaning: { en: "Accompany them in this world with kindness", ur: "دنیا میں ان کے ساتھ اچھا سلوک کرو" }, explanation: { en: "Even if they're non-believers, treat them with ihsan (excellence)", ur: "اگر وہ غیر مسلم بھی ہوں، ان کے ساتھ احسان سے پیش آؤ" }, verseRef: "31:15" },
        { term: "وَاتَّبِعْ سَبِيلَ مَنْ أَنَابَ إِلَيَّ", meaning: { en: "Follow the path of those who turn to Me", ur: "ان کے راستے پر چلو جو میری طرف رجوع کرتے ہیں" }, explanation: { en: "In religion, follow the guided ones, not misguided parents", ur: "دین میں ہدایت یافتہ لوگوں کی پیروی کرو، گمراہ والدین کی نہیں" }, verseRef: "31:15" }
      ]
    },

    allahsKnowledge: {
      name: "Allah's Infinite Knowledge",
      nameUr: "اللہ کا لامحدود علم",
      nameArabic: "علم الله المطلق",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        { term: "مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ", meaning: { en: "Weight of a mustard seed", ur: "رائی کے دانے کے برابر" }, explanation: { en: "Smallest imaginable thing - nothing escapes Allah's knowledge", ur: "سب سے چھوٹی قابلِ تصور چیز - کوئی چیز اللہ کے علم سے نہیں بچتی" }, verseRef: "31:16" },
        { term: "فِي صَخْرَةٍ", meaning: { en: "Within a rock", ur: "کسی چٹان کے اندر" }, explanation: { en: "Hidden in solid stone - still known to Allah", ur: "ٹھوس پتھر میں چھپی ہوئی - پھر بھی اللہ کو معلوم" }, verseRef: "31:16" },
        { term: "أَوْ فِي السَّمَاوَاتِ أَوْ فِي الْأَرْضِ", meaning: { en: "Or in the heavens or in the earth", ur: "یا آسمانوں میں یا زمین میں" }, explanation: { en: "Anywhere in creation - nothing is hidden", ur: "مخلوق میں کہیں بھی - کچھ بھی پوشیدہ نہیں" }, verseRef: "31:16" },
        { term: "يَأْتِ بِهَا اللَّهُ", meaning: { en: "Allah will bring it forth", ur: "اللہ اسے لے آئے گا" }, explanation: { en: "Nothing lost, all will be accounted for", ur: "کچھ بھی گم نہیں، سب کا حساب ہوگا" }, verseRef: "31:16" },
        { term: "إِنَّ اللَّهَ لَطِيفٌ خَبِيرٌ", meaning: { en: "Allah is Subtle, All-Aware", ur: "بے شک اللہ لطیف اور خبردار ہے" }, explanation: { en: "Lateef = subtle, reaches finest details; Khabeer = fully informed", ur: "لطیف = باریک بین، چھوٹی سے چھوٹی تفصیل تک پہنچنے والا؛ خبیر = مکمل باخبر" }, verseRef: "31:16" }
      ]
    },

    signsOfCreation: {
      name: "Signs in Creation",
      nameUr: "تخلیق میں نشانیاں",
      nameArabic: "آيات في الخلق",
      color: "#06B6D4",
      icon: "Globe",
      concepts: [
        { term: "خَلَقَ السَّمَاوَاتِ بِغَيْرِ عَمَدٍ تَرَوْنَهَا", meaning: { en: "Created heavens without pillars you can see", ur: "آسمانوں کو بغیر ستونوں کے بنایا جو تم دیکھ سکو" }, explanation: { en: "Sky held up without visible support - divine power", ur: "آسمان بغیر ظاہری سہارے کے قائم ہے - الٰہی قدرت" }, verseRef: "31:10" },
        { term: "وَأَلْقَىٰ فِي الْأَرْضِ رَوَاسِيَ", meaning: { en: "Cast into earth firmly set mountains", ur: "زمین میں مضبوط پہاڑ رکھ دیے" }, explanation: { en: "Mountains as pegs stabilizing the earth", ur: "پہاڑ میخوں کی طرح زمین کو مستحکم کرتے ہیں" }, verseRef: "31:10" },
        { term: "وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ", meaning: { en: "Dispersed therein every creature", ur: "اس میں ہر قسم کے جانور پھیلا دیے" }, explanation: { en: "Biodiversity - animals spread across earth", ur: "حیاتیاتی تنوع - جانور پوری زمین پر پھیلے ہوئے" }, verseRef: "31:10" },
        { term: "وَأَنزَلْنَا مِنَ السَّمَاءِ مَاءً", meaning: { en: "We sent down water from sky", ur: "ہم نے آسمان سے پانی اتارا" }, explanation: { en: "Rain - source of all life on earth", ur: "بارش - زمین پر تمام زندگی کا ذریعہ" }, verseRef: "31:10" },
        { term: "فَأَنبَتْنَا فِيهَا مِن كُلِّ زَوْجٍ كَرِيمٍ", meaning: { en: "Caused to grow every noble pair", ur: "ہر عمدہ قسم کے جوڑے اگائے" }, explanation: { en: "Plant diversity - zawj kareem = honorable pair/species", ur: "نباتاتی تنوع - زوج کریم = عمدہ جوڑے/انواع" }, verseRef: "31:10" },
        { term: "سَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ", meaning: { en: "Subjected to you what is in heavens and earth", ur: "آسمانوں اور زمین کی چیزیں تمہارے لیے مسخر کر دیں" }, explanation: { en: "All creation serves humanity - great blessing requiring gratitude", ur: "ساری مخلوق انسانیت کی خدمت میں ہے - عظیم نعمت جو شکر کی متقاضی ہے" }, verseRef: "31:20" }
      ]
    },

    falseWorshipRefuted: {
      name: "Refutation of False Worship",
      nameUr: "جھوٹی عبادت کی تردید",
      nameArabic: "إبطال عبادة غير الله",
      color: "#EF4444",
      icon: "AlertTriangle",
      concepts: [
        { term: "هَٰذَا خَلْقُ اللَّهِ", meaning: { en: "This is the creation of Allah", ur: "یہ اللہ کی تخلیق ہے" }, explanation: { en: "Challenge: show what others have created", ur: "چیلنج: دکھاؤ اوروں نے کیا بنایا ہے" }, verseRef: "31:11" },
        { term: "فَأَرُونِي مَاذَا خَلَقَ الَّذِينَ مِن دُونِهِ", meaning: { en: "Show me what those besides Him created", ur: "مجھے دکھاؤ اس کے سوا دوسروں نے کیا بنایا" }, explanation: { en: "Rhetorical challenge - false gods created nothing", ur: "بیانیہ چیلنج - جھوٹے معبودوں نے کچھ نہیں بنایا" }, verseRef: "31:11" },
        { term: "بَلِ الظَّالِمُونَ فِي ضَلَالٍ مُّبِينٍ", meaning: { en: "Rather, the wrongdoers are in clear error", ur: "بلکہ ظالم کھلی گمراہی میں ہیں" }, explanation: { en: "Those who worship others are clearly misguided", ur: "غیراللہ کی عبادت کرنے والے واضح طور پر گمراہ ہیں" }, verseRef: "31:11" },
        { term: "وَمَن يُسْلِمْ وَجْهَهُ إِلَى اللَّهِ", meaning: { en: "Whoever submits his face to Allah", ur: "جو اپنا رخ اللہ کی طرف جھکا دے" }, explanation: { en: "Islam = submission. Face = whole being, direction", ur: "اسلام = سپردگی۔ چہرہ = پوری ذات، رُخ" }, verseRef: "31:22" },
        { term: "وَهُوَ مُحْسِنٌ", meaning: { en: "While being a doer of good", ur: "اور وہ نیکوکار بھی ہو" }, explanation: { en: "Submission + excellence = complete faith", ur: "سپردگی + احسان = مکمل ایمان" }, verseRef: "31:22" },
        { term: "فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقَىٰ", meaning: { en: "Has grasped the most trustworthy handhold", ur: "اس نے مضبوط ترین کڑی کو تھام لیا" }, explanation: { en: "Urwah wuthqa - firm handhold that never breaks (Tawheed + good deeds)", ur: "عروہ وثقیٰ - مضبوط کڑی جو کبھی نہیں ٹوٹتی (توحید + نیک اعمال)" }, verseRef: "31:22" }
      ]
    },

    disbelieversState: {
      name: "State of Disbelievers",
      nameUr: "کافروں کی حالت",
      nameArabic: "حال الكافرين",
      color: "#EF4444",
      icon: "Eye",
      concepts: [
        { term: "وَمَن كَفَرَ فَلَا يَحْزُنكَ كُفْرُهُ", meaning: { en: "Whoever disbelieves - let not his disbelief grieve you", ur: "جو کافر ہو اس کا کفر آپ کو غمگین نہ کرے" }, explanation: { en: "Comfort to Prophet - their disbelief is their loss", ur: "نبی کو تسلی - ان کا کفر ان کا اپنا نقصان ہے" }, verseRef: "31:23" },
        { term: "إِلَيْنَا مَرْجِعُهُمْ", meaning: { en: "To Us is their return", ur: "ہماری طرف ان کی واپسی ہے" }, explanation: { en: "All will return to Allah for judgment", ur: "سب فیصلے کے لیے اللہ کی طرف لوٹیں گے" }, verseRef: "31:23" },
        { term: "فَنُنَبِّئُهُم بِمَا عَمِلُوا", meaning: { en: "Then We will inform them of what they did", ur: "پھر ہم انہیں بتائیں گے جو انہوں نے کیا" }, explanation: { en: "Full disclosure of deeds on Judgment Day", ur: "قیامت کے دن اعمال کا مکمل انکشاف" }, verseRef: "31:23" },
        { term: "نُمَتِّعُهُمْ قَلِيلًا", meaning: { en: "We grant them enjoyment for a little", ur: "ہم انہیں تھوڑا فائدہ اٹھا لینے دیتے ہیں" }, explanation: { en: "Worldly pleasures are temporary", ur: "دنیاوی لذتیں عارضی ہیں" }, verseRef: "31:24" },
        { term: "ثُمَّ نَضْطَرُّهُمْ إِلَىٰ عَذَابٍ غَلِيظٍ", meaning: { en: "Then We will force them into a harsh punishment", ur: "پھر ہم انہیں سخت عذاب کی طرف مجبور کریں گے" }, explanation: { en: "Nadhtarru = forced, compelled. No escape", ur: "نضطر = مجبور، لاچار۔ کوئی فرار نہیں" }, verseRef: "31:24" }
      ]
    },

    allahsExclusiveKnowledge: {
      name: "Knowledge Only Allah Possesses",
      nameUr: "صرف اللہ کے پاس علم",
      nameArabic: "علم الغيب",
      color: "#8B5CF6",
      icon: "Star",
      concepts: [
        { term: "إِنَّ اللَّهَ عِندَهُ عِلْمُ السَّاعَةِ", meaning: { en: "Indeed, Allah has knowledge of the Hour", ur: "بے شک اللہ کے پاس قیامت کا علم ہے" }, explanation: { en: "When Judgment Day comes - only Allah knows", ur: "قیامت کب آئے گی - صرف اللہ جانتا ہے" }, verseRef: "31:34" },
        { term: "وَيُنَزِّلُ الْغَيْثَ", meaning: { en: "He sends down the rain", ur: "وہ بارش برساتا ہے" }, explanation: { en: "Exact timing and location of rain", ur: "بارش کا صحیح وقت اور مقام" }, verseRef: "31:34" },
        { term: "وَيَعْلَمُ مَا فِي الْأَرْحَامِ", meaning: { en: "Knows what is in the wombs", ur: "جانتا ہے جو رحموں میں ہے" }, explanation: { en: "Not just gender but destiny, character, lifespan", ur: "صرف جنس نہیں بلکہ تقدیر، کردار، عمر سب" }, verseRef: "31:34" },
        { term: "وَمَا تَدْرِي نَفْسٌ مَّاذَا تَكْسِبُ غَدًا", meaning: { en: "No soul knows what it will earn tomorrow", ur: "کوئی نہیں جانتا کل کیا کمائے گا" }, explanation: { en: "Future deeds and provisions unknown to creation", ur: "مستقبل کے اعمال اور رزق مخلوق کو معلوم نہیں" }, verseRef: "31:34" },
        { term: "وَمَا تَدْرِي نَفْسٌ بِأَيِّ أَرْضٍ تَمُوتُ", meaning: { en: "No soul knows in what land it will die", ur: "کوئی نہیں جانتا کس سرزمین میں مرے گا" }, explanation: { en: "Place and time of death - exclusive divine knowledge", ur: "موت کا مقام اور وقت - صرف اللہ کا علم" }, verseRef: "31:34" },
        { term: "إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ", meaning: { en: "Allah is All-Knowing, All-Aware", ur: "بے شک اللہ سب جاننے والا، باخبر ہے" }, explanation: { en: "Comprehensive divine knowledge of all things", ur: "تمام چیزوں کا جامع الٰہی علم" }, verseRef: "31:34" }
      ]
    }
  },

  relationships: [
    { from: "الحكمة", to: "اشكر لله", type: "foundation", description: { en: "First fruit of wisdom is gratitude to Allah", ur: "حکمت کا پہلا پھل اللہ کا شکر ہے" } },
    { from: "لا تشرك بالله", to: "ظلم عظيم", type: "consequence", description: { en: "Shirk is the greatest injustice", ur: "شرک سب سے بڑا ظلم ہے" } },
    { from: "وصايا لقمان", to: "عزم الأمور", type: "requirement", description: { en: "His advice requires firm determination", ur: "ان کی نصیحتوں کے لیے مضبوط عزم چاہیے" } },
    { from: "اشكر لي", to: "ولوالديك", type: "sequence", description: { en: "Gratitude to Allah then to parents", ur: "پہلے اللہ کا شکر پھر والدین کا" } },
    { from: "لا تصعر خدك", to: "لا تمش مرحا", type: "parallel", description: { en: "Both relate to humility in behavior", ur: "دونوں رویے میں عاجزی سے متعلق ہیں" } },
    { from: "اقصد في مشيك", to: "اغضض من صوتك", type: "parallel", description: { en: "Moderation in walking and speaking", ur: "چلنے اور بولنے میں اعتدال" } },
    { from: "مثقال حبة", to: "لطيف خبير", type: "explanation", description: { en: "Allah's subtle awareness explains His knowledge of the smallest things", ur: "اللہ کی باریک بین آگاہی چھوٹی سے چھوٹی چیزوں کے علم کی وضاحت کرتی ہے" } },
    { from: "العروة الوثقى", to: "محسن", type: "condition", description: { en: "Grasping firm handhold requires being a doer of good", ur: "مضبوط کڑی تھامنے کے لیے نیکوکار ہونا ضروری ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "The Wise Quran", verses: "31:1-5", description: { en: "Quran as guidance for the muhsineen who believe and act", ur: "قرآن محسنین کے لیے ہدایت جو ایمان لائیں اور عمل کریں" } },
      { stage: 2, theme: "Misguidance Warning", verses: "31:6-7", description: { en: "Those who trade guidance for idle amusement", ur: "جو لوگ ہدایت کو لغو تفریح سے بدل لیتے ہیں" } },
      { stage: 3, theme: "Promise to Believers", verses: "31:8-9", description: { en: "Gardens of pleasure for the righteous", ur: "نیکوکاروں کے لیے نعمت کے باغات" } },
      { stage: 4, theme: "Signs in Creation", verses: "31:10-11", description: { en: "Heavens, mountains, creatures - Allah's creation vs. false gods", ur: "آسمان، پہاڑ، مخلوقات - اللہ کی تخلیق بمقابلہ جھوٹے معبود" } },
      { stage: 5, theme: "Luqman's Wisdom", verses: "31:12-13", description: { en: "Gratitude and Tawheed - foundation of wisdom", ur: "شکر اور توحید - حکمت کی بنیاد" } },
      { stage: 6, theme: "Parental Rights", verses: "31:14-15", description: { en: "Mother's sacrifice, gratitude to parents, limits of obedience", ur: "ماں کی قربانی، والدین کا شکر، اطاعت کی حدود" } },
      { stage: 7, theme: "Allah's Knowledge", verses: "31:16", description: { en: "Nothing hidden from Allah - mustard seed parable", ur: "اللہ سے کچھ نہیں چھپا - رائی کے دانے کی مثال" } },
      { stage: 8, theme: "Practical Guidance", verses: "31:17-19", description: { en: "Prayer, enjoining good, patience, humility, moderation", ur: "نماز، نیکی کا حکم، صبر، عاجزی، اعتدال" } },
      { stage: 9, theme: "Allah's Blessings", verses: "31:20-21", description: { en: "Creation subjected to humanity, yet many argue without knowledge", ur: "مخلوق انسانیت کے لیے مسخر، پھر بھی بہت سے بغیر علم بحث کرتے ہیں" } },
      { stage: 10, theme: "Firm Handhold", verses: "31:22-24", description: { en: "True submission vs. disbelievers' temporary enjoyment", ur: "حقیقی سپردگی بمقابلہ کافروں کی عارضی لذت" } },
      { stage: 11, theme: "Creation Testifies", verses: "31:25-30", description: { en: "All acknowledge Allah as Creator, yet worship others", ur: "سب اللہ کو خالق مانتے ہیں، پھر بھی اوروں کی عبادت کرتے ہیں" } },
      { stage: 12, theme: "Five Keys of Unseen", verses: "31:31-34", description: { en: "Ships as signs, fear of Judgment, exclusive divine knowledge", ur: "کشتیاں بطور نشانیاں، قیامت کا خوف، خصوصی الٰہی علم" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Foundation: Tawheed", how: "Begin all teaching with the oneness of Allah - it's Luqman's first advice", verse: "31:13" },
      { principle: "Gratitude first", how: "Before asking for more, thank Allah for what you have", verse: "31:12" },
      { principle: "Gentle parenting", how: "Use 'Ya Bunayya' - address children with love, not harshness", verse: "31:13" },
      { principle: "Honor parents always", how: "Even if they're non-Muslim, treat them with kindness in worldly matters", verse: "31:15" },
      { principle: "Accountability awareness", how: "Remember: even a mustard seed's weight of deed is recorded", verse: "31:16" },
      { principle: "Establish prayer", how: "Make salah the pillar of your daily routine", verse: "31:17" },
      { principle: "Active faith", how: "Command good and forbid evil - Islam is not passive", verse: "31:17" },
      { principle: "Practice patience", how: "Expect trials when doing good, and bear them with sabr", verse: "31:17" },
      { principle: "Check arrogance", how: "Monitor your walk, your tone, your facial expressions for pride", verse: "31:18-19" },
      { principle: "Moderate voice", how: "Speak softly - loud unnecessary speech is compared to donkeys", verse: "31:19" },
      { principle: "Accept unknowns", how: "Don't worry about tomorrow or death - trust Allah's plan", verse: "31:34" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Comprehensive Parental Manual", ur: "والدین کے لیے جامع رہنما کتاب" },
    insight: { en: "Surah Luqman is unique in presenting a complete methodology for raising righteous children through the advice of a wise father. Notice the structure: Luqman begins with Tawheed (creed), moves to parent-child relations (ethics), then to prayer and social responsibility (action), and finally to character refinement (conduct). This covers 'aqeedah, mu'amalat, 'ibadah, and akhlaq - the four pillars of Islamic education. Most remarkably, his advice uses three types of reasoning: theological (shirk is wrong because Allah alone deserves worship), logical (Allah knows even a mustard seed, so nothing is hidden), and social (loud voice is ugly like a donkey). A wise parent addresses heart, mind, and behavior. The diminutive 'Ya Bunayya' (O my dear son) appears repeatedly, modeling that wisdom is transmitted through love, not force.", ur: "سورہ لقمان ایک حکیم باپ کی نصیحت کے ذریعے نیک بچوں کی تربیت کا مکمل طریقہ پیش کرنے میں منفرد ہے۔ ساخت پر غور کریں: لقمان توحید (عقیدہ) سے شروع کرتے ہیں، پھر والدین اور بچوں کے تعلقات (اخلاقیات)، پھر نماز اور سماجی ذمہ داری (عمل)، اور آخر میں کردار کی تطہیر (سلوک) کی طرف بڑھتے ہیں۔ یہ عقیدہ، معاملات، عبادات اور اخلاق - اسلامی تعلیم کے چار ستونوں کا احاطہ کرتا ہے۔ سب سے قابلِ ذکر بات یہ ہے کہ ان کی نصیحت تین طرح کی دلیلیں استعمال کرتی ہے: الٰہیاتی (شرک غلط ہے کیونکہ صرف اللہ عبادت کا حقدار ہے)، عقلی (اللہ رائی کے دانے کو بھی جانتا ہے، تو کچھ نہیں چھپا)، اور سماجی (بلند آواز گدھے جیسی بری ہے)۔ ایک حکیم والد دل، ذہن اور رویے سب کو سنبھالتا ہے۔ تصغیر 'یا بُنیّ' بار بار آتا ہے، جو دکھاتا ہے کہ حکمت محبت سے منتقل ہوتی ہے، زبردستی سے نہیں۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "يَا بُنَيَّ (diminutive)", example: { en: "O my dear little son", ur: "اے میرے پیارے بیٹے" }, effect: "Shows deep parental love and tenderness" },
      { feature: "وَهْنًا عَلَىٰ وَهْنٍ (repetition)", example: { en: "Weakness upon weakness", ur: "کمزوری پر کمزوری" }, effect: "Emphasizes cumulative exhaustion of pregnancy" },
      { feature: "مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ (imagery)", example: { en: "Weight of a mustard seed", ur: "رائی کے دانے کا وزن" }, effect: "Smallest imaginable thing - nothing escapes Allah" },
      { feature: "لَصَوْتُ الْحَمِيرِ (comparison)", example: { en: "Like voice of donkeys", ur: "گدھوں کی آواز جیسی" }, effect: "Harsh imagery to deter loud, unnecessary speech" },
      { feature: "الْعُرْوَةِ الْوُثْقَىٰ (metaphor)", example: { en: "The firmest handhold", ur: "سب سے مضبوط کڑی" }, effect: "Faith as something to grip tightly, unbreakable" },
      { feature: "Contrast: مُخْتَال فَخُور", example: { en: "Self-conceited, boastful", ur: "خودپسند، شیخی بگھارنے والا" }, effect: "Internal pride (mukhtal) vs. external showing off (fakhoor)" }
    ]
  },

  keyTerms: [
    { term: "الْحِكْمَة", transliteration: "Al-Hikmah", meaning: "Wisdom - putting knowledge into correct action" },
    { term: "يَا بُنَيَّ", transliteration: "Ya Bunayya", meaning: "O my dear son - tender address" },
    { term: "الشِّرْك", transliteration: "Ash-Shirk", meaning: "Associating partners with Allah" },
    { term: "وَهْن", transliteration: "Wahn", meaning: "Weakness, frailty (describing pregnancy)" },
    { term: "لَطِيف", transliteration: "Lateef", meaning: "Subtle - reaches finest details" },
    { term: "خَبِير", transliteration: "Khabeer", meaning: "All-Aware - fully informed" },
    { term: "مُخْتَال", transliteration: "Mukhtal", meaning: "Self-conceited, internally proud" },
    { term: "فَخُور", transliteration: "Fakhoor", meaning: "Boastful, showing off to others" },
    { term: "الْعُرْوَة الْوُثْقَى", transliteration: "Al-'Urwat al-Wuthqa", meaning: "The firmest handhold" },
    { term: "لَهْو الْحَدِيث", transliteration: "Lahw al-Hadith", meaning: "Idle/distracting talk or entertainment" }
  ]
};

export default ONTOLOGY;
