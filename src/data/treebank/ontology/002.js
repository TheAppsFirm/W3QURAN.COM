/**
 * Surah Al-Baqarah (The Cow) - Surah 2
 * Ontology of Quranic Concepts and Relationships
 *
 * The longest surah in the Quran, serving as a comprehensive guide for
 * the Muslim community. Named after the story of the cow that Bani Israel
 * were commanded to sacrifice.
 */

export const ONTOLOGY = {
  surahId: 2,
  surahName: "Al-Baqarah",
  surahNameArabic: "البقرة",
  totalAyahs: 286,
  revelationType: "Medinan",
  mainTheme: { en: "Comprehensive Guidance for the Muslim Ummah - Belief, Law, and Community", ur: "مسلم امت کے لیے جامع ہدایت - عقیدہ، قانون اور معاشرت" },

  categories: {
    guidanceAndRevelation: {
      name: "Guidance and Revelation",
      nameUr: "ہدایت اور وحی",
      nameAr: "الهداية والوحي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Alif Lam Mim", arabic: "الم", meaning: { en: "Mysterious letters - divine wisdom", ur: "حروفِ مقطعات - الٰہی حکمت" }, ayahs: [1] },
        { term: "The Book Without Doubt", arabic: "الكتاب لا ريب فيه", meaning: { en: "This Quran has no doubt in it", ur: "اس قرآن میں کوئی شک نہیں" }, ayahs: [2] },
        { term: "Guidance for Muttaqin", arabic: "هدى للمتقين", meaning: { en: "Guidance for the God-conscious", ur: "متقیوں کے لیے ہدایت" }, ayahs: [2] },
        { term: "Belief in Unseen", arabic: "يؤمنون بالغيب", meaning: { en: "Faith in the unseen realm", ur: "غیب پر ایمان لانا" }, ayahs: [3] },
        { term: "Establishing Prayer", arabic: "يقيمون الصلاة", meaning: { en: "Performing prayer properly", ur: "نماز کو صحیح طریقے سے قائم کرنا" }, ayahs: [3, 43, 45, 83, 110, 177, 277] },
        { term: "Spending from Provision", arabic: "ومما رزقناهم ينفقون", meaning: { en: "Spending what Allah provides", ur: "اللہ کے دیے ہوئے رزق میں سے خرچ کرنا" }, ayahs: [3, 254, 261, 262, 265, 267, 274] },
        { term: "Belief in All Revelation", arabic: "الإيمان بجميع الوحي", meaning: { en: "Believing in all scriptures", ur: "تمام الٰہی کتابوں پر ایمان لانا" }, ayahs: [4, 136, 285] },
        { term: "Certainty of Hereafter", arabic: "اليقين بالآخرة", meaning: { en: "Absolute certainty in afterlife", ur: "آخرت پر مکمل یقین" }, ayahs: [4] },
        { term: "Seal on Hearts", arabic: "ختم على القلوب", meaning: { en: "Hearts sealed from guidance", ur: "دلوں پر مہر لگ جانا جو ہدایت سے محروم کر دے" }, ayahs: [7] }
      ]
    },
    categoriesOfPeople: {
      name: "Categories of People",
      nameUr: "لوگوں کی اقسام",
      nameAr: "أصناف الناس",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "Muttaqun", arabic: "المتقون", meaning: { en: "The God-conscious believers", ur: "اللہ سے ڈرنے والے مومن" }, ayahs: [2, 177, 189, 194, 197] },
        { term: "Muflihun", arabic: "المفلحون", meaning: { en: "The successful ones", ur: "کامیاب لوگ" }, ayahs: [5, 189] },
        { term: "Kafirun", arabic: "الكافرون", meaning: { en: "Those who reject faith", ur: "ایمان سے انکار کرنے والے" }, ayahs: [6, 19, 24, 26, 34, 39, 89, 90, 98, 161, 171, 191, 254] },
        { term: "Munafiqun", arabic: "المنافقون", meaning: { en: "The hypocrites", ur: "منافقین - دو رُخے لوگ" }, ayahs: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 204] },
        { term: "Disease in Hearts", arabic: "في قلوبهم مرض", meaning: { en: "Spiritual sickness in hearts", ur: "دلوں میں روحانی بیماری" }, ayahs: [10] },
        { term: "Mufsidun", arabic: "المفسدون", meaning: { en: "The corrupters", ur: "فساد پھیلانے والے" }, ayahs: [11, 12, 27, 30, 60, 205, 220] },
        { term: "Sufaha", arabic: "السفهاء", meaning: { en: "The foolish ones", ur: "بے وقوف لوگ" }, ayahs: [13, 130, 142, 282] },
        { term: "Deaf Dumb Blind", arabic: "صم بكم عمي", meaning: { en: "Deaf, dumb, blind spiritually", ur: "روحانی طور پر بہرے، گونگے، اندھے" }, ayahs: [18, 171] },
        { term: "Zalimun", arabic: "الظالمون", meaning: { en: "The wrongdoers", ur: "ظالم لوگ" }, ayahs: [35, 51, 54, 59, 92, 95, 124, 145, 165, 193, 229, 246, 254, 258] }
      ]
    },
    adamAndCreation: {
      name: "Adam and Creation Story",
      nameUr: "آدم اور تخلیق کا قصہ",
      nameAr: "قصة آدم والخلق",
      color: '#10B981',
      icon: 'Globe',
      concepts: [
        { term: "Khalifah on Earth", arabic: "خليفة في الأرض", meaning: { en: "Adam as vicegerent on earth", ur: "آدم کو زمین پر خلیفہ بنایا گیا" }, ayahs: [30] },
        { term: "Angels' Question", arabic: "سؤال الملائكة", meaning: { en: "Angels questioning bloodshed", ur: "فرشتوں کا خون خرابے کے بارے میں سوال" }, ayahs: [30] },
        { term: "Teaching of Names", arabic: "علم آدم الأسماء", meaning: { en: "Allah taught Adam all names", ur: "اللہ نے آدم کو تمام نام سکھائے" }, ayahs: [31] },
        { term: "Prostration to Adam", arabic: "السجود لآدم", meaning: { en: "Angels commanded to prostrate", ur: "فرشتوں کو سجدے کا حکم" }, ayahs: [34] },
        { term: "Iblis' Refusal", arabic: "إباء إبليس", meaning: { en: "Satan refused and was arrogant", ur: "ابلیس نے تکبر سے انکار کر دیا" }, ayahs: [34] },
        { term: "Forbidden Tree", arabic: "الشجرة المحرمة", meaning: { en: "Tree Adam was forbidden from", ur: "وہ درخت جس سے آدم کو منع کیا گیا" }, ayahs: [35] },
        { term: "Satan's Deception", arabic: "إزلال الشيطان", meaning: { en: "Satan caused them to slip", ur: "شیطان نے انہیں پھسلا دیا" }, ayahs: [36] },
        { term: "Words of Repentance", arabic: "كلمات التوبة", meaning: { en: "Adam received words from his Lord", ur: "آدم نے اپنے رب سے توبہ کے کلمات سیکھے" }, ayahs: [37] },
        { term: "Descent to Earth", arabic: "الهبوط إلى الأرض", meaning: { en: "Commanded to descend to earth", ur: "زمین پر اترنے کا حکم" }, ayahs: [36, 38] }
      ]
    },
    baniIsraelNarratives: {
      name: "Bani Israel Narratives",
      nameUr: "بنی اسرائیل کے واقعات",
      nameAr: "قصص بني إسرائيل",
      color: '#F59E0B',
      icon: 'Book',
      concepts: [
        { term: "Divine Favors", arabic: "نعم الله على بني إسرائيل", meaning: { en: "Allah's favors upon Children of Israel", ur: "بنی اسرائیل پر اللہ کی نعمتیں" }, ayahs: [40, 47, 122] },
        { term: "Breaking Covenants", arabic: "نقض العهد", meaning: { en: "They broke their covenants", ur: "انہوں نے اپنے عہد توڑ دیے" }, ayahs: [27, 63, 83, 84, 85, 93, 100] },
        { term: "Rescue from Pharaoh", arabic: "الإنجاء من فرعون", meaning: { en: "Saved from Pharaoh's persecution", ur: "فرعون کے ظلم سے نجات" }, ayahs: [49, 50] },
        { term: "Parting of Sea", arabic: "فرق البحر", meaning: { en: "Sea was parted for them", ur: "ان کے لیے سمندر کو چیر دیا گیا" }, ayahs: [50] },
        { term: "Forty Nights", arabic: "أربعين ليلة", meaning: { en: "Musa's appointment with Allah", ur: "موسیٰ کی اللہ سے چالیس راتوں کی ملاقات" }, ayahs: [51] },
        { term: "Calf Worship", arabic: "عبادة العجل", meaning: { en: "They took the calf as deity", ur: "انہوں نے بچھڑے کو معبود بنا لیا" }, ayahs: [51, 54, 92, 93] },
        { term: "Repentance Command", arabic: "فاقتلوا أنفسكم", meaning: { en: "Kill yourselves in repentance", ur: "توبہ کے لیے ایک دوسرے کو قتل کرو" }, ayahs: [54] },
        { term: "Demanding to See Allah", arabic: "أرنا الله جهرة", meaning: { en: "They demanded to see Allah openly", ur: "انہوں نے اللہ کو کھلم کھلا دیکھنے کا مطالبہ کیا" }, ayahs: [55] },
        { term: "Struck by Lightning", arabic: "الصاعقة", meaning: { en: "Thunderbolt struck them", ur: "ان پر بجلی گری" }, ayahs: [55] },
        { term: "Manna and Quail", arabic: "المن والسلوى", meaning: { en: "Miraculous food from heaven", ur: "آسمان سے معجزانہ کھانا - من و سلویٰ" }, ayahs: [57] },
        { term: "Enter the Town", arabic: "ادخلوا القرية", meaning: { en: "Commanded to enter a town humbly", ur: "عاجزی سے شہر میں داخل ہونے کا حکم" }, ayahs: [58] },
        { term: "Twelve Springs", arabic: "اثنتا عشرة عينا", meaning: { en: "Water from rock for twelve tribes", ur: "بارہ قبیلوں کے لیے چٹان سے بارہ چشمے" }, ayahs: [60] },
        { term: "Wanting Variety", arabic: "طلب البقل والثوم", meaning: { en: "Asking for onions, garlic, lentils", ur: "پیاز، لہسن اور دال کا مطالبہ" }, ayahs: [61] },
        { term: "Humiliation Struck", arabic: "ضربت عليهم الذلة", meaning: { en: "Humiliation stamped upon them", ur: "ان پر ذلت مسلط کر دی گئی" }, ayahs: [61] },
        { term: "Killing Prophets", arabic: "قتل الأنبياء", meaning: { en: "They killed the prophets", ur: "انہوں نے انبیاء کو قتل کیا" }, ayahs: [61, 87, 91] },
        { term: "Sabbath Violation", arabic: "الاعتداء في السبت", meaning: { en: "They transgressed on the Sabbath", ur: "انہوں نے سبت (ہفتے) کی حرمت توڑی" }, ayahs: [65] },
        { term: "Transformed to Apes", arabic: "مسخ القردة", meaning: { en: "Turned into despised apes", ur: "ذلیل بندر بنا دیے گئے" }, ayahs: [65, 66] }
      ]
    },
    theCowStory: {
      name: "The Cow Story (Namesake)",
      nameUr: "گائے کا قصہ (سورت کا نام)",
      nameAr: "قصة البقرة",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "Cow Command", arabic: "اذبحوا بقرة", meaning: { en: "Allah commanded to sacrifice a cow", ur: "اللہ نے ایک گائے ذبح کرنے کا حکم دیا" }, ayahs: [67] },
        { term: "Mockery Question", arabic: "أتتخذنا هزوا", meaning: { en: "Are you mocking us?", ur: "کیا آپ ہمارا مذاق اُڑا رہے ہیں؟" }, ayahs: [67] },
        { term: "Cow Description", arabic: "صفات البقرة", meaning: { en: "Not old nor young, middle-aged", ur: "نہ بوڑھی نہ جوان، درمیانی عمر کی" }, ayahs: [68] },
        { term: "Yellow Color", arabic: "صفراء فاقع لونها", meaning: { en: "Bright yellow, pleasing to see", ur: "چمکدار زرد رنگ، دیکھنے والوں کو بھلی لگے" }, ayahs: [69] },
        { term: "No Blemish", arabic: "لا شية فيها", meaning: { en: "Without any mark or blemish", ur: "بغیر کسی داغ یا نشان کے" }, ayahs: [71] },
        { term: "Murder Mystery", arabic: "قتل النفس", meaning: { en: "They killed someone secretly", ur: "انہوں نے چھپ کر کسی کو قتل کیا" }, ayahs: [72] },
        { term: "Strike with Part", arabic: "اضربوه ببعضها", meaning: { en: "Strike the dead with part of it", ur: "مُردے کو گائے کے ٹکڑے سے مارو" }, ayahs: [73] },
        { term: "Resurrection Sign", arabic: "إحياء الموتى", meaning: { en: "Allah revives the dead", ur: "اللہ مُردوں کو زندہ کرتا ہے" }, ayahs: [73] }
      ]
    },
    scripturalDistortion: {
      name: "Scriptural Distortion",
      nameUr: "کتابوں میں تحریف",
      nameAr: "تحريف الكتب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Tahrif", arabic: "تحريف الكلم", meaning: { en: "Distorting words of scripture", ur: "کتاب کے الفاظ میں تحریف کرنا" }, ayahs: [75, 79] },
        { term: "Hiding Knowledge", arabic: "كتمان العلم", meaning: { en: "Concealing divine knowledge", ur: "الٰہی علم کو چھپانا" }, ayahs: [42, 140, 146, 159, 174] },
        { term: "Writing with Hands", arabic: "كتبوا الكتاب بأيديهم", meaning: { en: "They wrote scripture themselves", ur: "انہوں نے خود اپنے ہاتھوں سے کتاب لکھی" }, ayahs: [79] },
        { term: "For Small Price", arabic: "ثمن قليل", meaning: { en: "Selling verses for worldly gain", ur: "دنیاوی فائدے کے لیے آیات بیچنا" }, ayahs: [41, 79, 174] },
        { term: "Forgetting Part", arabic: "نسوا حظا", meaning: { en: "They forgot portion of revelation", ur: "انہوں نے وحی کا ایک حصہ بھلا دیا" }, ayahs: [63, 85] },
        { term: "Selective Belief", arabic: "الإيمان ببعض الكتاب", meaning: { en: "Believing in part, rejecting part", ur: "کتاب کے بعض حصے پر ایمان لانا اور بعض کو رد کرنا" }, ayahs: [85] },
        { term: "Disgrace in This Life", arabic: "خزي في الحياة الدنيا", meaning: { en: "Disgrace in worldly life", ur: "دنیاوی زندگی میں رسوائی" }, ayahs: [85] }
      ]
    },
    ibrahimLegacy: {
      name: "Ibrahim's Legacy",
      nameUr: "ابراہیم کی میراث",
      nameAr: "إرث إبراهيم",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Ibrahim's Trial", arabic: "ابتلاء إبراهيم", meaning: { en: "Ibrahim tested with commands", ur: "ابراہیم کو احکامات سے آزمایا گیا" }, ayahs: [124] },
        { term: "Imam for Mankind", arabic: "إمام للناس", meaning: { en: "Made leader for all people", ur: "تمام لوگوں کا امام بنایا گیا" }, ayahs: [124] },
        { term: "Covenant Not for Oppressors", arabic: "لا ينال عهدي الظالمين", meaning: { en: "My covenant excludes wrongdoers", ur: "میرا عہد ظالموں کو نہیں ملے گا" }, ayahs: [124] },
        { term: "Kaaba Foundation", arabic: "رفع القواعد", meaning: { en: "Raising foundations of the House", ur: "بیت اللہ (کعبہ) کی بنیادیں اٹھانا" }, ayahs: [127] },
        { term: "Prayer of Submission", arabic: "دعاء الإسلام", meaning: { en: "Make us Muslims (submitters)", ur: "ہمیں مسلمان (فرمانبردار) بنا دے" }, ayahs: [128] },
        { term: "Rites of Pilgrimage", arabic: "مناسك الحج", meaning: { en: "Show us our rituals", ur: "ہمیں حج کے مناسک دکھا دے" }, ayahs: [128] },
        { term: "Prayer for Messenger", arabic: "دعاء إرسال الرسول", meaning: { en: "Send among them a messenger", ur: "ان میں ایک رسول مبعوث فرما" }, ayahs: [129] },
        { term: "Millat Ibrahim", arabic: "ملة إبراهيم", meaning: { en: "The religion of Ibrahim", ur: "ابراہیم کی ملت (دین)" }, ayahs: [130, 135] },
        { term: "Hanif", arabic: "حنيفا", meaning: { en: "Turning away from all false religions", ur: "تمام باطل مذاہب سے منہ موڑنے والا - یکسو" }, ayahs: [135] },
        { term: "Neither Jew nor Christian", arabic: "ما كان يهوديا ولا نصرانيا", meaning: { en: "Ibrahim was neither Jew nor Christian", ur: "ابراہیم نہ یہودی تھے نہ عیسائی" }, ayahs: [135, 140] }
      ]
    },
    qiblaChange: {
      name: "Qibla (Direction of Prayer)",
      nameUr: "قبلہ (نماز کی سمت)",
      nameAr: "تحويل القبلة",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Face the Sacred Mosque", arabic: "ول وجهك شطر المسجد الحرام", meaning: { en: "Turn face toward Sacred Mosque", ur: "اپنا رُخ مسجد حرام کی طرف کرو" }, ayahs: [144, 149, 150] },
        { term: "We See Your Face", arabic: "نرى تقلب وجهك", meaning: { en: "We see your face turning to sky", ur: "ہم آپ کا چہرہ آسمان کی طرف پھرتے دیکھ رہے ہیں" }, ayahs: [144] },
        { term: "Foolish Will Say", arabic: "سيقول السفهاء", meaning: { en: "Foolish ones will question", ur: "بے وقوف لوگ اعتراض کریں گے" }, ayahs: [142] },
        { term: "East and West Belong to Allah", arabic: "لله المشرق والمغرب", meaning: { en: "To Allah belong East and West", ur: "مشرق اور مغرب سب اللہ کے ہیں" }, ayahs: [115, 142] },
        { term: "Middle Nation", arabic: "أمة وسطا", meaning: { en: "Made you a balanced nation", ur: "تمہیں ایک متوازن (اعتدال پسند) امت بنایا" }, ayahs: [143] },
        { term: "Witnesses over People", arabic: "شهداء على الناس", meaning: { en: "To be witnesses over mankind", ur: "لوگوں پر گواہ ہونا" }, ayahs: [143] },
        { term: "People of the Book Know", arabic: "يعرفونه كأبنائهم", meaning: { en: "They recognize him like their sons", ur: "وہ اسے ایسے پہچانتے ہیں جیسے اپنے بیٹوں کو" }, ayahs: [146] }
      ]
    },
    perseveranceAndPatience: {
      name: "Patience and Perseverance",
      nameUr: "صبر اور ثابت قدمی",
      nameAr: "الصبر والثبات",
      color: '#10B981',
      icon: 'Shield',
      concepts: [
        { term: "Seek Help Through Patience", arabic: "استعينوا بالصبر", meaning: { en: "Seek help through patience and prayer", ur: "صبر اور نماز سے مدد مانگو" }, ayahs: [45, 153] },
        { term: "Allah With Patient", arabic: "إن الله مع الصابرين", meaning: { en: "Allah is with the patient", ur: "بے شک اللہ صبر کرنے والوں کے ساتھ ہے" }, ayahs: [153, 249] },
        { term: "Tests of Fear", arabic: "ابتلاء بالخوف", meaning: { en: "Testing with fear", ur: "خوف سے آزمائش" }, ayahs: [155] },
        { term: "Tests of Hunger", arabic: "ابتلاء بالجوع", meaning: { en: "Testing with hunger", ur: "بھوک سے آزمائش" }, ayahs: [155] },
        { term: "Tests of Loss", arabic: "نقص الأموال", meaning: { en: "Loss of wealth and lives", ur: "مال و جان کا نقصان" }, ayahs: [155] },
        { term: "Inna Lillahi", arabic: "إنا لله وإنا إليه راجعون", meaning: { en: "We belong to Allah and return to Him", ur: "ہم اللہ کے ہیں اور اسی کی طرف لوٹ کر جانا ہے" }, ayahs: [156] },
        { term: "Blessings on Patient", arabic: "صلوات من ربهم", meaning: { en: "Blessings and mercy on patient ones", ur: "صبر کرنے والوں پر ان کے رب کی رحمتیں اور برکتیں" }, ayahs: [157] },
        { term: "Martyrs Are Alive", arabic: "الشهداء أحياء", meaning: { en: "Martyrs are not dead but alive", ur: "شہید مُردہ نہیں بلکہ زندہ ہیں" }, ayahs: [154] }
      ]
    },
    signsInCreation: {
      name: "Signs in Creation",
      nameUr: "کائنات میں نشانیاں",
      nameAr: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "Heavens and Earth Creation", arabic: "خلق السماوات والأرض", meaning: { en: "In creation are signs", ur: "تخلیق میں نشانیاں ہیں" }, ayahs: [164] },
        { term: "Night and Day Alternation", arabic: "اختلاف الليل والنهار", meaning: { en: "Alternation of day and night", ur: "رات اور دن کا بدلتے رہنا" }, ayahs: [164] },
        { term: "Ships in Sea", arabic: "الفلك في البحر", meaning: { en: "Ships sailing for benefit", ur: "سمندر میں فائدے کے لیے چلنے والے جہاز" }, ayahs: [164] },
        { term: "Rain Revival", arabic: "إحياء الأرض بالمطر", meaning: { en: "Rain bringing earth to life", ur: "بارش سے مُردہ زمین کا زندہ ہونا" }, ayahs: [164] },
        { term: "Creatures Scattered", arabic: "بث من كل دابة", meaning: { en: "Creatures dispersed on earth", ur: "زمین پر ہر قسم کے جانوروں کا پھیلاؤ" }, ayahs: [164] },
        { term: "Winds and Clouds", arabic: "تصريف الرياح والسحاب", meaning: { en: "Directing of winds and clouds", ur: "ہواؤں اور بادلوں کا چلایا جانا" }, ayahs: [164] }
      ]
    },
    ayatAlKursi: {
      name: "Ayat al-Kursi (Throne Verse)",
      nameUr: "آیت الکرسی",
      nameAr: "آية الكرسي",
      color: '#8B5CF6',
      icon: 'Crown',
      concepts: [
        { term: "La Ilaha Illa Huwa", arabic: "لا إله إلا هو", meaning: { en: "There is no god except Him", ur: "اس کے سوا کوئی معبود نہیں" }, ayahs: [255] },
        { term: "Al-Hayy Al-Qayyum", arabic: "الحي القيوم", meaning: { en: "The Ever-Living, Self-Sustaining", ur: "ہمیشہ زندہ رہنے والا، سب کو قائم رکھنے والا" }, ayahs: [255] },
        { term: "No Slumber", arabic: "لا تأخذه سنة ولا نوم", meaning: { en: "Neither drowsiness nor sleep overtakes Him", ur: "نہ اسے اونگھ آتی ہے نہ نیند" }, ayahs: [255] },
        { term: "All Belongs to Him", arabic: "له ما في السماوات وما في الأرض", meaning: { en: "To Him belongs all in heavens and earth", ur: "آسمانوں اور زمین میں جو کچھ ہے سب اسی کا ہے" }, ayahs: [255] },
        { term: "No Intercession Without Permission", arabic: "من ذا الذي يشفع إلا بإذنه", meaning: { en: "None intercede except by His leave", ur: "کوئی اس کی اجازت کے بغیر سفارش نہیں کر سکتا" }, ayahs: [255] },
        { term: "Divine Knowledge", arabic: "يعلم ما بين أيديهم", meaning: { en: "He knows past and future", ur: "وہ سب کا ماضی اور مستقبل جانتا ہے" }, ayahs: [255] },
        { term: "Knowledge Only by His Will", arabic: "ولا يحيطون بشيء من علمه", meaning: { en: "They encompass nothing of His knowledge except as He wills", ur: "اس کے علم میں سے کچھ بھی احاطہ نہیں کر سکتے مگر جتنا وہ چاہے" }, ayahs: [255] },
        { term: "Kursi Encompasses", arabic: "وسع كرسيه السماوات والأرض", meaning: { en: "His Kursi extends over heavens and earth", ur: "اس کی کرسی آسمانوں اور زمین پر محیط ہے" }, ayahs: [255] },
        { term: "Al-Ali Al-Azim", arabic: "العلي العظيم", meaning: { en: "The Most High, The Great", ur: "سب سے بلند، سب سے عظیم" }, ayahs: [255] }
      ]
    },
    noCompulsionInReligion: {
      name: "Faith Without Compulsion",
      nameUr: "دین میں کوئی جبر نہیں",
      nameAr: "لا إكراه في الدين",
      color: '#EC4899',
      icon: 'Heart',
      concepts: [
        { term: "No Compulsion", arabic: "لا إكراه في الدين", meaning: { en: "No forcing anyone into faith", ur: "دین میں کوئی زبردستی نہیں" }, ayahs: [256] },
        { term: "Truth Distinct from Falsehood", arabic: "تبين الرشد من الغي", meaning: { en: "Right path clearly distinct from error", ur: "ہدایت گمراہی سے واضح طور پر ممتاز ہو چکی" }, ayahs: [256] },
        { term: "Reject Taghut", arabic: "يكفر بالطاغوت", meaning: { en: "Reject false deities and tyrants", ur: "جھوٹے معبودوں اور سرکشوں کا انکار کرنا" }, ayahs: [256, 257] },
        { term: "Believe in Allah", arabic: "ويؤمن بالله", meaning: { en: "And believe in Allah alone", ur: "اور صرف اللہ پر ایمان لانا" }, ayahs: [256] },
        { term: "Firmest Handhold", arabic: "العروة الوثقى", meaning: { en: "Grasping the most trustworthy handhold", ur: "مضبوط ترین کڑے کو تھامنا" }, ayahs: [256] },
        { term: "From Darkness to Light", arabic: "من الظلمات إلى النور", meaning: { en: "Allah brings believers from darkness", ur: "اللہ مومنوں کو اندھیروں سے نکال کر روشنی میں لاتا ہے" }, ayahs: [257] }
      ]
    },
    legislation: {
      name: "Islamic Legislation",
      nameUr: "اسلامی قانون سازی",
      nameAr: "التشريعات الإسلامية",
      color: '#22C55E',
      icon: 'Scale',
      concepts: [
        { term: "Fasting Prescribed", arabic: "كتب عليكم الصيام", meaning: { en: "Fasting ordained as worship", ur: "روزہ عبادت کے طور پر فرض کیا گیا" }, ayahs: [183] },
        { term: "Month of Ramadan", arabic: "شهر رمضان", meaning: { en: "Month Quran was revealed", ur: "وہ مہینہ جس میں قرآن نازل ہوا" }, ayahs: [185] },
        { term: "Approach Wives at Night", arabic: "أحل لكم ليلة الصيام الرفث", meaning: { en: "Night intimacy in Ramadan", ur: "رمضان کی راتوں میں بیویوں سے قربت کی اجازت" }, ayahs: [187] },
        { term: "Dawn Until Sunset", arabic: "من الفجر إلى الليل", meaning: { en: "Fast from dawn to sunset", ur: "فجر سے غروبِ آفتاب تک روزہ رکھنا" }, ayahs: [187] },
        { term: "Itikaf", arabic: "عاكفون في المساجد", meaning: { en: "Spiritual retreat in mosques", ur: "مسجدوں میں روحانی اعتکاف" }, ayahs: [187] },
        { term: "Hajj and Umrah", arabic: "أتموا الحج والعمرة", meaning: { en: "Complete pilgrimage for Allah", ur: "اللہ کے لیے حج اور عمرہ مکمل کرو" }, ayahs: [196] },
        { term: "Hajj Months", arabic: "الحج أشهر معلومات", meaning: { en: "Hajj in specific months", ur: "حج کے مقررہ مہینے" }, ayahs: [197] },
        { term: "No Indecency in Hajj", arabic: "لا رفث ولا فسوق", meaning: { en: "No lewdness or sin in pilgrimage", ur: "حج میں بے حیائی اور گناہ نہیں" }, ayahs: [197] },
        { term: "Best Provision is Taqwa", arabic: "خير الزاد التقوى", meaning: { en: "Best provision is God-consciousness", ur: "بہترین زادِ راہ تقویٰ ہے" }, ayahs: [197] },
        { term: "Safa and Marwa", arabic: "الصفا والمروة", meaning: { en: "Running between hills", ur: "صفا اور مروہ کے درمیان سعی کرنا" }, ayahs: [158] }
      ]
    },
    qisasAndLaw: {
      name: "Qisas and Legal Rulings",
      nameUr: "قصاص اور قانونی احکام",
      nameAr: "القصاص والأحكام",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "Qisas Prescribed", arabic: "كتب عليكم القصاص", meaning: { en: "Retribution is ordained", ur: "قصاص (بدلہ) فرض کیا گیا" }, ayahs: [178] },
        { term: "Free for Free", arabic: "الحر بالحر", meaning: { en: "Free person for free person", ur: "آزاد کے بدلے آزاد" }, ayahs: [178] },
        { term: "Forgiveness Better", arabic: "فمن عفي له", meaning: { en: "Whoever forgives, receive compensation", ur: "جو معاف کرے تو اس کے بدلے دیت (معاوضہ) لے" }, ayahs: [178] },
        { term: "Life in Qisas", arabic: "في القصاص حياة", meaning: { en: "In retribution there is life", ur: "قصاص میں زندگی ہے" }, ayahs: [179] },
        { term: "Bequest Before Death", arabic: "الوصية", meaning: { en: "Will before death", ur: "موت سے پہلے وصیت کرنا" }, ayahs: [180, 240] },
        { term: "Do Not Consume Wealth Falsely", arabic: "لا تأكلوا أموالكم بالباطل", meaning: { en: "Don't consume wealth wrongfully", ur: "ایک دوسرے کا مال ناحق نہ کھاؤ" }, ayahs: [188] },
        { term: "Do Not Bribe Judges", arabic: "تدلوا بها إلى الحكام", meaning: { en: "Don't bribe authorities", ur: "حاکموں کو رشوت نہ دو" }, ayahs: [188] }
      ]
    },
    fightingInAllahsCause: {
      name: "Fighting in Allah's Cause",
      nameUr: "اللہ کی راہ میں جہاد",
      nameAr: "القتال في سبيل الله",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Fighting Prescribed", arabic: "كتب عليكم القتال", meaning: { en: "Fighting ordained though disliked", ur: "جنگ فرض ہے اگرچہ ناپسندیدہ ہے" }, ayahs: [216] },
        { term: "You May Dislike What is Good", arabic: "عسى أن تكرهوا شيئا", meaning: { en: "You may hate what's good for you", ur: "ہو سکتا ہے کوئی چیز تمہیں ناپسند ہو مگر تمہارے لیے بہتر ہو" }, ayahs: [216] },
        { term: "Sacred Month Question", arabic: "الشهر الحرام قتال فيه", meaning: { en: "Fighting in sacred months", ur: "حرمت والے مہینوں میں جنگ" }, ayahs: [217] },
        { term: "Fitna Worse Than Killing", arabic: "الفتنة أشد من القتل", meaning: { en: "Persecution worse than killing", ur: "فتنہ (ظلم و ستم) قتل سے بھی بدتر ہے" }, ayahs: [191, 217] },
        { term: "Fight Until No Fitna", arabic: "قاتلوهم حتى لا تكون فتنة", meaning: { en: "Fight until no persecution", ur: "لڑو یہاں تک کہ فتنہ باقی نہ رہے" }, ayahs: [193] },
        { term: "No Transgression", arabic: "لا تعتدوا", meaning: { en: "Don't transgress limits", ur: "حد سے تجاوز نہ کرو" }, ayahs: [190] },
        { term: "Spend in Allah's Cause", arabic: "أنفقوا في سبيل الله", meaning: { en: "Spend wealth for Allah's cause", ur: "اللہ کی راہ میں خرچ کرو" }, ayahs: [195] }
      ]
    },
    charityAndWealth: {
      name: "Charity and Wealth",
      nameUr: "صدقہ اور مال",
      nameAr: "الصدقة والمال",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Parable of Grain", arabic: "مثل حبة", meaning: { en: "One seed becomes 700 grains", ur: "ایک دانہ سات سو دانے پیدا کرتا ہے" }, ayahs: [261] },
        { term: "No Reproach", arabic: "لا منا ولا أذى", meaning: { en: "Don't follow charity with reminders", ur: "صدقے کے بعد احسان نہ جتاؤ اور تکلیف نہ دو" }, ayahs: [262, 264] },
        { term: "Kind Word Better", arabic: "قول معروف خير", meaning: { en: "Kind word better than hurtful charity", ur: "نرم بات تکلیف دہ صدقے سے بہتر ہے" }, ayahs: [263] },
        { term: "Nullifying Charity", arabic: "إبطال الصدقة", meaning: { en: "Reproach nullifies reward", ur: "احسان جتانا ثواب کو ضائع کر دیتا ہے" }, ayahs: [264] },
        { term: "Garden on High Ground", arabic: "جنة بربوة", meaning: { en: "Parable of fertile garden", ur: "بلند زمین پر زرخیز باغ کی مثال" }, ayahs: [265] },
        { term: "Spend from Good", arabic: "أنفقوا من طيبات", meaning: { en: "Spend from best earnings", ur: "بہترین کمائی میں سے خرچ کرو" }, ayahs: [267] },
        { term: "Satan Threatens Poverty", arabic: "الشيطان يعدكم الفقر", meaning: { en: "Satan threatens you with poverty", ur: "شیطان تمہیں فقر و تنگدستی سے ڈراتا ہے" }, ayahs: [268] },
        { term: "Allah Promises Forgiveness", arabic: "والله يعدكم مغفرة", meaning: { en: "Allah promises forgiveness and bounty", ur: "اللہ تمہ سے مغفرت اور فضل کا وعدہ کرتا ہے" }, ayahs: [268] },
        { term: "Secret Charity Better", arabic: "إن تخفوها وتؤتوها الفقراء", meaning: { en: "Giving secretly better than openly", ur: "چھپ کر صدقہ دینا کھلم کھلا دینے سے بہتر ہے" }, ayahs: [271] },
        { term: "No Fear No Grief", arabic: "لا خوف عليهم ولا هم يحزنون", meaning: { en: "No fear nor grief for charitable", ur: "خرچ کرنے والوں کو نہ کوئی خوف ہوگا نہ وہ غمگین ہوں گے" }, ayahs: [262, 274, 277] }
      ]
    },
    usury: {
      name: "Usury (Riba)",
      nameUr: "سود (ربا)",
      nameAr: "الربا",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Riba Forbidden", arabic: "وحرم الربا", meaning: { en: "Interest/usury strictly forbidden", ur: "سود سختی سے حرام ہے" }, ayahs: [275] },
        { term: "Touched by Satan", arabic: "يتخبطه الشيطان", meaning: { en: "Usurer rises like one possessed", ur: "سود خور ایسے اٹھے گا جیسے شیطان نے اسے چھوا ہو" }, ayahs: [275] },
        { term: "Trade vs Usury", arabic: "أحل الله البيع وحرم الربا", meaning: { en: "Trade lawful, usury forbidden", ur: "تجارت حلال ہے اور سود حرام" }, ayahs: [275] },
        { term: "War from Allah", arabic: "حرب من الله ورسوله", meaning: { en: "War from Allah if usury continues", ur: "سود جاری رکھنے پر اللہ اور اس کے رسول سے جنگ" }, ayahs: [279] },
        { term: "Principal Only", arabic: "رؤوس أموالكم", meaning: { en: "Take only your principal", ur: "صرف اپنی اصل رقم لو" }, ayahs: [279] },
        { term: "No Wrong No Wronged", arabic: "لا تظلمون ولا تظلمون", meaning: { en: "Neither wronging nor wronged", ur: "نہ تم ظلم کرو نہ تم پر ظلم ہو" }, ayahs: [279] },
        { term: "Give Time to Debtor", arabic: "نظرة إلى ميسرة", meaning: { en: "Give respite to debtor in hardship", ur: "تنگدست مقروض کو مہلت دو" }, ayahs: [280] },
        { term: "Forgive Debt as Charity", arabic: "وأن تصدقوا خير", meaning: { en: "Forgiving debt is charity", ur: "قرض معاف کرنا صدقہ ہے" }, ayahs: [280] }
      ]
    },
    contracts: {
      name: "Business Contracts",
      nameUr: "تجارتی معاہدے",
      nameAr: "العقود والمعاملات",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Write It Down", arabic: "فاكتبوه", meaning: { en: "Record debts in writing", ur: "قرض لکھ لو" }, ayahs: [282] },
        { term: "Just Scribe", arabic: "كاتب بالعدل", meaning: { en: "Let a scribe write justly", ur: "انصاف کے ساتھ لکھنے والا لکھے" }, ayahs: [282] },
        { term: "Debtor Dictates", arabic: "وليملل الذي عليه الحق", meaning: { en: "Let debtor dictate terms", ur: "مقروض بول کر لکھوائے" }, ayahs: [282] },
        { term: "Two Male Witnesses", arabic: "شهيدين من رجالكم", meaning: { en: "Two men as witnesses", ur: "اپنے مردوں میں سے دو گواہ بناؤ" }, ayahs: [282] },
        { term: "One Man Two Women", arabic: "رجل وامرأتان", meaning: { en: "Or one man and two women", ur: "یا ایک مرد اور دو عورتیں" }, ayahs: [282] },
        { term: "Witnesses Must Not Refuse", arabic: "لا يأب الشهداء", meaning: { en: "Witnesses must not refuse", ur: "گواہ انکار نہ کریں" }, ayahs: [282] },
        { term: "Small or Large Write", arabic: "صغيرا أو كبيرا", meaning: { en: "Write small or large amounts", ur: "چھوٹی ہو یا بڑی رقم، لکھو" }, ayahs: [282] },
        { term: "Exception for Hand Trade", arabic: "تجارة حاضرة", meaning: { en: "Immediate trade needs no writing", ur: "نقد تجارت کے لیے لکھنے کی ضرورت نہیں" }, ayahs: [282] },
        { term: "Pledge as Security", arabic: "فرهان مقبوضة", meaning: { en: "Pledge if no scribe available", ur: "اگر لکھنے والا نہ ملے تو رہن (گروی) رکھو" }, ayahs: [283] },
        { term: "Trust Returned", arabic: "فليؤد الذي اؤتمن أمانته", meaning: { en: "Let trustee discharge trust", ur: "امانتدار امانت واپس کرے" }, ayahs: [283] }
      ]
    },
    marriageAndDivorce: {
      name: "Marriage and Divorce",
      nameUr: "نکاح اور طلاق",
      nameAr: "النكاح والطلاق",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "Don't Marry Polytheists", arabic: "لا تنكحوا المشركات", meaning: { en: "Don't marry idolatress women", ur: "مشرک عورتوں سے نکاح نہ کرو" }, ayahs: [221] },
        { term: "Believing Slave Better", arabic: "أمة مؤمنة خير", meaning: { en: "Believing slave better than free polytheist", ur: "مومن باندی آزاد مشرکہ سے بہتر ہے" }, ayahs: [221] },
        { term: "Menstruation Question", arabic: "المحيض أذى", meaning: { en: "Keep away during menstruation", ur: "حیض کے دوران قربت سے اجتناب" }, ayahs: [222] },
        { term: "Your Women Are Tilth", arabic: "نساؤكم حرث لكم", meaning: { en: "Wives are your tilth", ur: "تمہاری بیویاں تمہاری کھیتی ہیں" }, ayahs: [223] },
        { term: "Forward for Yourselves", arabic: "قدموا لأنفسكم", meaning: { en: "Send good forward for yourselves", ur: "اپنے لیے آگے نیکیاں بھیجو" }, ayahs: [223] },
        { term: "Divorce Twice", arabic: "الطلاق مرتان", meaning: { en: "Divorce is twice (revocable)", ur: "طلاق دو بار ہے (رجعی)" }, ayahs: [229] },
        { term: "Keep or Release", arabic: "فإمساك بمعروف أو تسريح", meaning: { en: "Retain or release honorably", ur: "اچھائی سے روکو یا بھلائی سے رخصت کرو" }, ayahs: [229] },
        { term: "Khula", arabic: "الخلع", meaning: { en: "Wife ransoming herself", ur: "عورت کا معاوضہ دے کر آزاد ہونا (خلع)" }, ayahs: [229] },
        { term: "Third Divorce Final", arabic: "فإن طلقها فلا تحل له", meaning: { en: "Third divorce is final", ur: "تیسری طلاق حتمی ہے" }, ayahs: [230] },
        { term: "Iddah Three Periods", arabic: "ثلاثة قروء", meaning: { en: "Waiting period three cycles", ur: "عدت تین حیض کے دور" }, ayahs: [228] },
        { term: "Take Back During Iddah", arabic: "وبعولتهن أحق", meaning: { en: "Husbands may take back during iddah", ur: "شوہر عدت کے دوران رجوع کر سکتے ہیں" }, ayahs: [228] },
        { term: "Do Not Prevent", arabic: "لا تعضلوهن", meaning: { en: "Don't prevent remarriage", ur: "دوبارہ شادی سے نہ روکو" }, ayahs: [232] }
      ]
    },
    widowsAndOrphans: {
      name: "Widows and Orphans",
      nameUr: "بیوائیں اور یتیم",
      nameAr: "الأرامل والأيتام",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Widow Iddah Four Months", arabic: "أربعة أشهر وعشرا", meaning: { en: "Four months and ten days", ur: "چار مہینے دس دن (بیوہ کی عدت)" }, ayahs: [234] },
        { term: "Indication in Iddah", arabic: "فيما عرضتم به", meaning: { en: "Hint of proposal allowed", ur: "اشارے میں رشتے کا پیغام جائز ہے" }, ayahs: [235] },
        { term: "No Secret Promise", arabic: "لا تواعدوهن سرا", meaning: { en: "Don't make secret promises", ur: "چھپ کر وعدے نہ کرو" }, ayahs: [235] },
        { term: "Provision for Widow", arabic: "متاعا إلى الحول", meaning: { en: "One year's provision for widow", ur: "بیوہ کے لیے ایک سال کا خرچ" }, ayahs: [240] },
        { term: "Breastfeeding Two Years", arabic: "حولين كاملين", meaning: { en: "Full two years nursing", ur: "پورے دو سال دودھ پلانا" }, ayahs: [233] },
        { term: "Father's Provision", arabic: "رزقهن وكسوتهن", meaning: { en: "Father provides food and clothing", ur: "باپ خوراک اور لباس فراہم کرے" }, ayahs: [233] },
        { term: "Wet Nurse", arabic: "استرضعوا أولادكم", meaning: { en: "May hire wet nurse", ur: "دایہ رکھ سکتے ہو" }, ayahs: [233] },
        { term: "Orphan's Best Interest", arabic: "إصلاح اليتامى", meaning: { en: "Act in orphans' best interest", ur: "یتیموں کے بہترین مفاد میں عمل کرو" }, ayahs: [220] }
      ]
    },
    talutAndJalut: {
      name: "Talut and Jalut (Saul and Goliath)",
      nameUr: "طالوت اور جالوت کا قصہ",
      nameAr: "قصة طالوت وجالوت",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "Appoint a King", arabic: "ابعث لنا ملكا", meaning: { en: "They asked for a king to fight", ur: "انہوں نے جنگ کے لیے بادشاہ مانگا" }, ayahs: [246] },
        { term: "Talut Appointed", arabic: "إن الله قد بعث لكم طالوت", meaning: { en: "Allah appointed Talut as king", ur: "اللہ نے طالوت کو بادشاہ مقرر کیا" }, ayahs: [247] },
        { term: "Kingdom Over Us?", arabic: "أنى يكون له الملك", meaning: { en: "How can he have kingship?", ur: "اسے بادشاہی کیسے مل سکتی ہے؟" }, ayahs: [247] },
        { term: "Allah Gives Kingdom", arabic: "والله يؤتي ملكه من يشاء", meaning: { en: "Allah gives kingdom to whom He wills", ur: "اللہ جسے چاہتا ہے بادشاہی دیتا ہے" }, ayahs: [247] },
        { term: "Ark of Covenant", arabic: "التابوت", meaning: { en: "Ark with remnants from prophets", ur: "تابوت جس میں انبیاء کی یادگاریں ہیں" }, ayahs: [248] },
        { term: "River Test", arabic: "مبتليكم بنهر", meaning: { en: "Testing with a river", ur: "ایک نہر سے آزمائش" }, ayahs: [249] },
        { term: "Handful Exempted", arabic: "إلا من اغترف غرفة", meaning: { en: "Except a scooped handful", ur: "سوائے ایک چُلّو بھر پانی کے" }, ayahs: [249] },
        { term: "Small Group Prevails", arabic: "كم من فئة قليلة غلبت", meaning: { en: "How often small group defeats many", ur: "کتنے ہی چھوٹے گروہوں نے بڑے لشکروں کو شکست دی" }, ayahs: [249] },
        { term: "Dawud Killed Jalut", arabic: "قتل داود جالوت", meaning: { en: "David killed Goliath", ur: "داؤد نے جالوت کو قتل کیا" }, ayahs: [251] },
        { term: "Kingdom and Wisdom", arabic: "الملك والحكمة", meaning: { en: "David given kingdom and wisdom", ur: "داؤد کو بادشاہی اور حکمت عطا کی گئی" }, ayahs: [251] }
      ]
    },
    messenger: {
      name: "The Messenger's Description",
      nameUr: "رسول کی صفات",
      nameAr: "صفات الرسول",
      color: '#22C55E',
      icon: 'Star',
      concepts: [
        { term: "Messenger Among You", arabic: "رسولا منكم", meaning: { en: "Messenger from among themselves", ur: "انہی میں سے ایک رسول" }, ayahs: [129, 151] },
        { term: "Recites Verses", arabic: "يتلو عليكم آياتنا", meaning: { en: "Recites Allah's verses to them", ur: "ان پر اللہ کی آیات تلاوت کرتا ہے" }, ayahs: [129, 151] },
        { term: "Purifies You", arabic: "ويزكيكم", meaning: { en: "Purifies their souls", ur: "ان کے نفوس کا تزکیہ کرتا ہے" }, ayahs: [129, 151] },
        { term: "Teaches Book and Wisdom", arabic: "ويعلمكم الكتاب والحكمة", meaning: { en: "Teaches scripture and wisdom", ur: "کتاب اور حکمت سکھاتا ہے" }, ayahs: [129, 151] },
        { term: "Teaches What You Knew Not", arabic: "ما لم تكونوا تعلمون", meaning: { en: "Teaches what was unknown", ur: "وہ سکھاتا ہے جو تم نہیں جانتے تھے" }, ayahs: [151] },
        { term: "Follow His Guidance", arabic: "فمن تبع هداي", meaning: { en: "Whoever follows my guidance", ur: "جو میری ہدایت پر چلے" }, ayahs: [38] }
      ]
    },
    closingVerses: {
      name: "Closing Verses (Last Two Ayahs)",
      nameUr: "آخری دو آیات",
      nameAr: "خواتيم السورة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Messenger Believes", arabic: "آمن الرسول", meaning: { en: "The Messenger believes in revelation", ur: "رسول اس پر ایمان لائے جو ان پر نازل ہوا" }, ayahs: [285] },
        { term: "No Distinction Among Prophets", arabic: "لا نفرق بين أحد", meaning: { en: "We make no distinction among prophets", ur: "ہم انبیاء میں سے کسی میں فرق نہیں کرتے" }, ayahs: [285, 136] },
        { term: "We Hear and Obey", arabic: "سمعنا وأطعنا", meaning: { en: "We hear and we obey", ur: "ہم نے سنا اور اطاعت کی" }, ayahs: [285] },
        { term: "Your Forgiveness O Lord", arabic: "غفرانك ربنا", meaning: { en: "We seek Your forgiveness", ur: "اے ہمارے رب، ہم تیری مغفرت چاہتے ہیں" }, ayahs: [285] },
        { term: "No Burden Beyond Capacity", arabic: "لا يكلف الله نفسا إلا وسعها", meaning: { en: "Allah burdens not beyond ability", ur: "اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا" }, ayahs: [286] },
        { term: "What It Earned", arabic: "لها ما كسبت", meaning: { en: "It earns what it earns", ur: "جو نیکی کمائے وہ اس کے لیے ہے" }, ayahs: [286] },
        { term: "What It Acquired", arabic: "وعليها ما اكتسبت", meaning: { en: "Against it what it acquired", ur: "جو بُرائی کمائے وہ اس کے خلاف ہے" }, ayahs: [286] },
        { term: "Don't Punish for Forgetfulness", arabic: "لا تؤاخذنا إن نسينا", meaning: { en: "Don't hold us for mistakes", ur: "اے رب! بھول چوک پر ہماری گرفت نہ فرما" }, ayahs: [286] },
        { term: "No Heavy Burden", arabic: "لا تحمل علينا إصرا", meaning: { en: "Don't lay on us a burden", ur: "ہم پر بھاری بوجھ نہ ڈال" }, ayahs: [286] },
        { term: "Pardon and Forgive", arabic: "واعف عنا واغفر لنا", meaning: { en: "Pardon us and forgive us", ur: "ہمیں معاف کر اور بخش دے" }, ayahs: [286] },
        { term: "You Are Our Protector", arabic: "أنت مولانا", meaning: { en: "You are our Protector", ur: "تو ہمارا مولیٰ (مددگار) ہے" }, ayahs: [286] },
        { term: "Help Against Disbelievers", arabic: "فانصرنا على القوم الكافرين", meaning: { en: "Grant us victory over disbelievers", ur: "کافروں کے مقابلے میں ہماری مدد فرما" }, ayahs: [286] }
      ]
    }
  },

  relationships: [
    { from: "Guidance for Muttaqin", to: "Categories of People", type: "distinction", description: { en: "Guidance distinguishes believers from disbelievers and hypocrites", ur: "ہدایت مومنوں کو کافروں اور منافقوں سے ممتاز کرتی ہے" } },
    { from: "Adam as Khalifah", to: "Human Responsibility", type: "foundation", description: { en: "Adam's role establishes human stewardship on earth", ur: "آدم کا کردار زمین پر انسانی خلافت کی بنیاد رکھتا ہے" } },
    { from: "Bani Israel Failures", to: "Muslim Community Warnings", type: "lesson", description: { en: "Their mistakes serve as warnings for Muslims", ur: "ان کی غلطیاں مسلمانوں کے لیے عبرت ہیں" } },
    { from: "The Cow Story", to: "Obedience Without Questioning", type: "teaching", description: { en: "Immediate obedience better than excessive questioning", ur: "فوری اطاعت بہت زیادہ سوال کرنے سے بہتر ہے" } },
    { from: "Ibrahim's Millah", to: "Islamic Identity", type: "continuity", description: { en: "Islam is continuation of Ibrahim's pure monotheism", ur: "اسلام ابراہیم کی خالص توحید کا تسلسل ہے" } },
    { from: "Qibla Change", to: "New Ummah Identity", type: "establishment", description: { en: "Direction change established Muslim community distinctiveness", ur: "قبلے کی تبدیلی نے مسلم امت کی الگ شناخت قائم کی" } },
    { from: "Ayat al-Kursi", to: "Divine Sovereignty", type: "declaration", description: { en: "Supreme verse declaring Allah's absolute authority", ur: "اللہ کی مطلق حاکمیت کا اعلان کرنے والی عظیم ترین آیت" } },
    { from: "No Compulsion", to: "Religious Freedom", type: "principle", description: { en: "Faith must be freely chosen, not forced", ur: "ایمان آزادانہ انتخاب ہونا چاہیے، زبردستی نہیں" } },
    { from: "Fasting Prescription", to: "Self-Discipline", type: "training", description: { en: "Fasting trains believers in self-control", ur: "روزہ مومنوں کو ضبطِ نفس سکھاتا ہے" } },
    { from: "Fighting Rules", to: "Just War", type: "limitation", description: { en: "Fighting has strict ethical boundaries", ur: "جنگ کی سخت اخلاقی حدود ہیں" } },
    { from: "Charity Parables", to: "Spiritual Investment", type: "encouragement", description: { en: "Charity multiplied exponentially by Allah", ur: "صدقہ اللہ کی طرف سے کئی گنا بڑھایا جاتا ہے" } },
    { from: "Riba Prohibition", to: "Economic Justice", type: "protection", description: { en: "Usury prohibition protects economic balance", ur: "سود کی ممانعت معاشی توازن کی حفاظت کرتی ہے" } },
    { from: "Contract Writing", to: "Business Ethics", type: "regulation", description: { en: "Documentation ensures fair dealings", ur: "دستاویزات منصفانہ لین دین کو یقینی بناتی ہیں" } },
    { from: "Marriage Laws", to: "Family Foundation", type: "structure", description: { en: "Marriage and divorce rules build strong families", ur: "نکاح اور طلاق کے قوانین مضبوط خاندان بناتے ہیں" } },
    { from: "Talut Story", to: "Leadership by Merit", type: "principle", description: { en: "Leadership based on knowledge and strength, not wealth", ur: "قیادت علم اور طاقت پر مبنی ہو، دولت پر نہیں" } },
    { from: "Closing Verses", to: "Complete Submission", type: "culmination", description: { en: "Final duas show complete submission and trust", ur: "آخری دعائیں مکمل تسلیم و رضا کا اظہار ہیں" } }
  ],

  thematicFlow: {
    title: { en: "Comprehensive Guidance: From Belief to Legislation", ur: "جامع ہدایت: ایمان سے قانون سازی تک" },
    stages: [
      { name: "The Book and Categories of People", ayahs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], description: { en: "Introduction to Quran, believers, disbelievers, and hypocrites", ur: "قرآن، مومنوں، کافروں اور منافقوں کا تعارف" } },
      { name: "Call to Worship", ayahs: [21, 22, 23, 24, 25, 26, 27, 28, 29], description: { en: "Call to worship Allah alone; challenge to produce similar scripture", ur: "صرف اللہ کی عبادت کی دعوت؛ ایسا کلام لانے کا چیلنج" } },
      { name: "Adam's Creation Story", ayahs: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], description: { en: "Creation of Adam, angels' prostration, Satan's fall", ur: "آدم کی تخلیق، فرشتوں کا سجدہ، شیطان کی تباہی" } },
      { name: "Bani Israel's History (Part 1)", ayahs: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66], description: { en: "Allah's favors and their ingratitude", ur: "اللہ کی نعمتیں اور ان کی ناشکری" } },
      { name: "The Cow Incident", ayahs: [67, 68, 69, 70, 71, 72, 73, 74], description: { en: "The namesake story - commanded to sacrifice a cow", ur: "سورت کا نام رکھنے والا واقعہ - گائے ذبح کرنے کا حکم" } },
      { name: "Bani Israel's Continuation", ayahs: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96], description: { en: "Scripture distortion and covenant breaking", ur: "کتاب میں تحریف اور عہد شکنی" } },
      { name: "Jealousy and Magic", ayahs: [97, 98, 99, 100, 101, 102, 103], description: { en: "Harut, Marut, and rejection of revelation", ur: "ہاروت و ماروت اور وحی کا انکار" } },
      { name: "Abrogation and Patience", ayahs: [104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121], description: { en: "Abrogated verses; enduring harm; Heaven not exclusive to any group", ur: "منسوخ آیات؛ تکالیف برداشت کرنا؛ جنت کسی ایک گروہ کی میراث نہیں" } },
      { name: "Ibrahim's Legacy", ayahs: [122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141], description: { en: "Building the Kaaba; the true religion of Ibrahim", ur: "کعبہ کی تعمیر؛ ابراہیم کا سچا دین" } },
      { name: "The Qibla Change", ayahs: [142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152], description: { en: "Change from Jerusalem to Mecca; middle nation", ur: "بیت المقدس سے مکہ کی طرف تبدیلی؛ امتِ وسط" } },
      { name: "Perseverance and Signs", ayahs: [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164], description: { en: "Patience, martyrdom, and signs in creation", ur: "صبر، شہادت، اور تخلیق میں نشانیاں" } },
      { name: "Polytheism and Tawhid", ayahs: [165, 166, 167, 168, 169, 170, 171], description: { en: "Taking rivals besides Allah; blind following ancestors", ur: "اللہ کے ساتھ شریک ٹھہرانا؛ آنکھیں بند کر کے باپ دادا کی پیروی" } },
      { name: "Food Laws", ayahs: [172, 173, 174, 175, 176], description: { en: "Halal and haram foods; carrion, blood, pork, non-Allah's name", ur: "حلال و حرام غذائیں؛ مُردار، خون، سور، غیر اللہ کے نام پر ذبح" } },
      { name: "Righteousness Defined", ayahs: [177], description: { en: "Comprehensive definition of birr (righteousness)", ur: "نیکی (بِرّ) کی جامع تعریف" } },
      { name: "Qisas and Wills", ayahs: [178, 179, 180, 181, 182], description: { en: "Retribution law; importance of bequests", ur: "قصاص کا قانون؛ وصیت کی اہمیت" } },
      { name: "Fasting Legislation", ayahs: [183, 184, 185, 186, 187], description: { en: "Ramadan fasting ordained; rules and exemptions", ur: "رمضان کے روزے فرض؛ احکام اور رعایتیں" } },
      { name: "Prayers and General Ethics", ayahs: [188, 189], description: { en: "Don't consume wealth wrongfully; new moons", ur: "ناجائز طریقے سے مال نہ کھاؤ؛ نئے چاند" } },
      { name: "Fighting Rules", ayahs: [190, 191, 192, 193, 194, 195], description: { en: "Rules of engagement; transgression forbidden", ur: "جنگ کے اصول؛ زیادتی حرام" } },
      { name: "Hajj Legislation", ayahs: [196, 197, 198, 199, 200, 201, 202, 203], description: { en: "Pilgrimage rites; Arafat; remembrance", ur: "حج کے مناسک؛ عرفات؛ ذکر الٰہی" } },
      { name: "Hypocrites and Sincerity", ayahs: [204, 205, 206, 207], description: { en: "Those who impress vs those who sacrifice", ur: "دکھاوے والے بمقابلہ قربانی دینے والے" } },
      { name: "Call to Full Islam", ayahs: [208, 209, 210, 211, 212], description: { en: "Enter Islam completely; don't follow Satan's steps", ur: "اسلام میں مکمل طور پر داخل ہو؛ شیطان کے قدموں پر نہ چلو" } },
      { name: "Past Nations", ayahs: [213, 214], description: { en: "Prophets came; hardship before victory", ur: "انبیاء آئے؛ فتح سے پہلے مشکلات" } },
      { name: "Questions Answered", ayahs: [215, 216, 217, 218, 219, 220, 221], description: { en: "Spending, fighting, wine, gambling, orphans, marriage", ur: "خرچ، جنگ، شراب، جوا، یتیم، نکاح کے بارے میں سوالات" } },
      { name: "Women's Rights", ayahs: [222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242], description: { en: "Menstruation, intimacy, oaths, divorce, iddah, nursing", ur: "حیض، ازدواجی تعلقات، قسمیں، طلاق، عدت، رضاعت" } },
      { name: "Maintain Prayer", ayahs: [238, 239], description: { en: "Guard prayers especially middle prayer", ur: "نمازوں کی حفاظت کرو خصوصاً درمیانی نماز" } },
      { name: "Fighting Examples", ayahs: [243, 244, 245, 246, 247, 248, 249, 250, 251, 252], description: { en: "Talut and Jalut; few defeat many with Allah's help", ur: "طالوت و جالوت؛ اللہ کی مدد سے چند لوگوں نے بڑے لشکر کو شکست دی" } },
      { name: "Prophets' Distinctions", ayahs: [253, 254], description: { en: "Some prophets elevated; spend before judgment", ur: "بعض انبیاء کو بلند درجات؛ قیامت سے پہلے خرچ کرو" } },
      { name: "Ayat al-Kursi and Tawhid", ayahs: [255, 256, 257], description: { en: "Throne verse; no compulsion in religion", ur: "آیت الکرسی؛ دین میں کوئی جبر نہیں" } },
      { name: "Ibrahim's Debates", ayahs: [258, 259, 260], description: { en: "Ibrahim vs Nimrod; Uzayr's death; birds' revival", ur: "ابراہیم بمقابلہ نمرود؛ عزیر کی موت؛ پرندوں کا زندہ ہونا" } },
      { name: "Charity Excellence", ayahs: [261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274], description: { en: "Parables of charity; don't nullify with reproach", ur: "صدقے کی مثالیں؛ احسان جتا کر ضائع نہ کرو" } },
      { name: "Riba Prohibition", ayahs: [275, 276, 277, 278, 279, 280, 281], description: { en: "Usury forbidden; war from Allah; respite for debtor", ur: "سود حرام؛ اللہ کی طرف سے اعلانِ جنگ؛ مقروض کو مہلت" } },
      { name: "Debt and Contracts", ayahs: [282, 283, 284], description: { en: "Longest verse - writing debts; witnesses; Allah knows all", ur: "طویل ترین آیت - قرض لکھنا؛ گواہ بنانا؛ اللہ سب جانتا ہے" } },
      { name: "Closing Supplications", ayahs: [285, 286], description: { en: "Messenger believes; no burden beyond capacity; final duas", ur: "رسول کا ایمان؛ طاقت سے زیادہ بوجھ نہیں؛ آخری دعائیں" } }
    ]
  },

  uniqueInsight: {
    title: { en: "Ayat al-Kursi (The Throne Verse)", ur: "آیت الکرسی (تخت کی آیت)" },
    insight: {
      en: "Verse 255 is known as the greatest verse in the Quran according to an authentic hadith. The Prophet (peace be upon him) asked a companion which verse is greatest, and upon hearing 'Ayat al-Kursi,' he struck his chest approvingly saying, 'May knowledge bring you joy, Abu Mundhir!' This single verse encapsulates the essence of Islamic monotheism (Tawhid) with remarkable comprehensiveness. It contains nine of Allah's attributes: (1) There is no god but He (unity), (2) The Ever-Living (Al-Hayy), (3) The Self-Sustaining (Al-Qayyum), (4) Neither drowsiness nor sleep overtakes Him (perfect vigilance), (5) To Him belongs all in the heavens and earth (absolute ownership), (6) None intercedes except by His permission (supreme authority), (7) He knows what is before and behind them (complete knowledge), (8) His Kursi encompasses all (supreme dominion), (9) He is the Most High, Most Great (Al-Ali, Al-Azim). Reciting it after every prayer and before sleep provides protection. Its placement between verses about spending (261-274) and verses about no compulsion in religion (256-257) shows that true faith encompasses both financial sacrifice and spiritual freedom.",
      ur: "آیت 255 ایک صحیح حدیث کے مطابق قرآن کی سب سے عظیم آیت ہے۔ نبی ﷺ نے ایک صحابی سے پوچھا کہ سب سے بڑی آیت کون سی ہے، اور 'آیت الکرسی' سن کر خوشی سے فرمایا: 'ابو المنذر! علم تمہیں مبارک ہو!' یہ ایک آیت اسلامی توحید کا جامع خلاصہ ہے۔ اس میں اللہ کی نو صفات ہیں: (1) اس کے سوا کوئی معبود نہیں (وحدانیت)، (2) ہمیشہ زندہ (الحی)، (3) سب کو قائم رکھنے والا (القیوم)، (4) نہ اونگھ آئے نہ نیند (کامل نگہبانی)، (5) آسمانوں اور زمین کی ہر چیز اسی کی (مطلق ملکیت)، (6) اس کی اجازت کے بغیر سفارش نہیں (اعلیٰ اختیار)، (7) سب کا ماضی و مستقبل جانتا ہے (مکمل علم)، (8) اس کی کرسی سب پر محیط ہے (اعلیٰ حاکمیت)، (9) سب سے بلند، سب سے عظیم (العلی العظیم)۔ ہر نماز کے بعد اور سونے سے پہلے اس کی تلاوت حفاظت کا ذریعہ ہے۔"
    },
    arabicTerm: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    rootMeaning: { en: "ك-ر-س (footstool, throne) - The Kursi is Allah's throne/footstool extending over all existence", ur: "ک-ر-س (کرسی، تخت) - کرسی اللہ کا تخت ہے جو پوری کائنات پر محیط ہے" },
    keyAyah: 255
  },

  historicalContext: {
    revelationPeriod: { en: "Medinan, first years after Hijra (1-2 AH onwards)", ur: "مدنی، ہجرت کے بعد ابتدائی سال (1-2 ہجری سے آگے)" },
    occasion: { en: "Revealed gradually over the Medinan period to establish the Muslim community's belief system, laws, and identity. Contains some of the last revealed verses including the longest verse (282) about contracts and verse 281 about fearing the Day of return to Allah.", ur: "مدنی دور میں بتدریج نازل ہوئی تاکہ مسلم معاشرے کا عقیدہ، قانون اور شناخت قائم ہو۔ اس میں آخری نازل ہونے والی آیات بھی ہیں جن میں معاہدوں کے بارے میں سب سے لمبی آیت (282) اور اللہ کی طرف لوٹنے سے ڈرنے کی آیت (281) شامل ہے۔" },
    note: { en: "Al-Baqarah was revealed to address the unique challenges of the newly formed Muslim state in Medina - dealing with Jewish tribes, establishing Islamic law, and creating a distinct Muslim identity separate from both Judaism and Christianity while honoring shared Abrahamic heritage. The surah contains the final verse revealed (2:281) according to some scholars. Verse 282 is the longest verse in the Quran. The last two verses (285-286) are a special gift from beneath the Throne, given during Mi'raj, and have special virtue for protection. The Prophet said: 'Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him.'", ur: "البقرہ مدینہ میں نئی مسلم ریاست کے منفرد چیلنجوں کا جواب دینے کے لیے نازل ہوئی - یہودی قبائل سے معاملات، اسلامی قانون کا نفاذ، اور یہودیت اور عیسائیت دونوں سے الگ مسلم شناخت بنانا جبکہ مشترکہ ابراہیمی وراثت کا احترام۔ بعض علماء کے مطابق اس سورت میں آخری نازل ہونے والی آیت (2:281) ہے۔ آیت 282 قرآن کی سب سے لمبی آیت ہے۔ آخری دو آیات (285-286) معراج کے دوران عرش کے نیچے سے عطا کی گئیں اور حفاظت کا خاص اعزاز رکھتی ہیں۔ نبی ﷺ نے فرمایا: 'جو شخص رات کو سورۃ البقرہ کی آخری دو آیات پڑھ لے، وہ اسے کافی ہوں گی۔'" }
  },

  linguisticFeatures: {
    features: [
      { name: "Huruf Muqatta'at", description: "الم - Disconnected letters", example: { en: "Opening with mysterious letters found in 29 surahs", ur: "29 سورتوں میں پائے جانے والے معمّہ حروف سے آغاز" }, ayah: 1 },
      { name: "Mathalu Definition", description: "مثل - Parable structure", example: { en: "Multiple parables: charity seed (261), hypocrites' fire (17), rain storm (19)", ur: "متعدد مثالیں: صدقے کا دانہ (261)، منافقوں کی آگ (17)، بارش کا طوفان (19)" }, ayah: 261 },
      { name: "Question-Answer Format", description: "يسألونك", example: { en: "'They ask you about...' appears 15+ times in Quran, several times here", ur: "'وہ آپ سے پوچھتے ہیں...' قرآن میں 15 سے زائد بار آیا، کئی بار یہاں" }, ayah: 189 },
      { name: "Kutiba 'Alaykum", description: "كتب عليكم", example: { en: "'Prescribed for you' - used for fasting (183), fighting (216), qisas (178)", ur: "'تم پر فرض کیا گیا' - روزے (183)، جنگ (216)، قصاص (178) کے لیے استعمال" }, ayah: 183 },
      { name: "Rhetorical Question Alam Tara", description: "ألم تر", example: { en: "'Have you not seen...' pointing to evidence", ur: "'کیا تم نے نہیں دیکھا...' دلیل کی طرف اشارہ" }, ayah: 243 },
      { name: "Longest Verse", description: "آية الدين", example: { en: "Verse 282 contains ~128 words - longest in Quran", ur: "آیت 282 میں تقریباً 128 الفاظ ہیں - قرآن کی طویل ترین آیت" }, ayah: 282 },
      { name: "Ayat al-Birr", description: "تعريف البر الجامع", example: { en: "Comprehensive definition of righteousness in one verse", ur: "ایک آیت میں نیکی کی جامع تعریف" }, ayah: 177 },
      { name: "Ring Composition", description: "البنية الدائرية", example: { en: "Surah begins and ends with similar themes of faith and guidance", ur: "سورت ایمان اور ہدایت کے ملتے جلتے موضوعات سے شروع اور ختم ہوتی ہے" }, ayah: 286 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 1, name: "Al-Fatiha", relationship: { en: "Al-Fatiha's prayer for guidance answered in Al-Baqarah's opening: 'This is the Book, guidance for the Muttaqin'", ur: "الفاتحہ میں ہدایت کی دعا کا جواب البقرہ کے آغاز میں: 'یہ وہ کتاب ہے جس میں شک نہیں، متقیوں کے لیے ہدایت'" }, type: "prayer_answer" },
      { surah: 3, name: "Aal Imran", relationship: { en: "Both called 'Az-Zahrawain' (The Two Lights); Al-Baqarah focuses on Jews, Aal Imran on Christians", ur: "دونوں کو 'الزہراوین' (دو نور) کہا جاتا ہے؛ البقرہ یہودیوں پر اور آل عمران عیسائیوں پر مرکوز" }, type: "paired_surahs" },
      { surah: 4, name: "An-Nisa", relationship: { en: "Continues legislation themes; elaborates on inheritance and women's rights", ur: "قانون سازی کے موضوعات کا تسلسل؛ وراثت اور خواتین کے حقوق کی تفصیل" }, type: "legislative_continuation" },
      { surah: 5, name: "Al-Ma'idah", relationship: { en: "Completes dietary laws and contracts mentioned in Al-Baqarah", ur: "البقرہ میں مذکور غذائی قوانین اور معاہدوں کی تکمیل" }, type: "legislative_completion" },
      { surah: 7, name: "Al-A'raf", relationship: { en: "Expands on Adam's story and Bani Israel narratives", ur: "آدم کے قصے اور بنی اسرائیل کے واقعات کی توسیع" }, type: "narrative_expansion" },
      { surah: 17, name: "Al-Isra", relationship: { en: "Both discuss Bani Israel; Al-Baqarah's warnings echoed in their future punishment", ur: "دونوں بنی اسرائیل کا ذکر کرتی ہیں؛ البقرہ کی تنبیہات ان کی مستقبل کی سزا میں گونجتی ہیں" }, type: "thematic_echo" },
      { surah: 22, name: "Al-Hajj", relationship: { en: "Elaborates on Hajj rites briefly mentioned in Al-Baqarah", ur: "البقرہ میں مختصراً مذکور حج کے مناسک کی تفصیل" }, type: "thematic_expansion" },
      { surah: 57, name: "Al-Hadid", relationship: { en: "Both discuss spending in Allah's way with multiplication parables", ur: "دونوں اللہ کی راہ میں خرچ اور اس کے بڑھنے کی مثالیں بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 112, name: "Al-Ikhlas", relationship: { en: "Ayat al-Kursi's Tawhid concepts condensed in Al-Ikhlas", ur: "آیت الکرسی کے توحید کے تصورات سورۃ الاخلاص میں مختصراً بیان" }, type: "thematic_summary" }
    ]
  }
};

export default ONTOLOGY;
