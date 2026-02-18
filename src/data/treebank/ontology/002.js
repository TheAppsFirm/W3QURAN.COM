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
  mainTheme: "Comprehensive Guidance for the Muslim Ummah - Belief, Law, and Community",

  categories: {
    guidanceAndRevelation: {
      name: "Guidance and Revelation",
      nameAr: "الهداية والوحي",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Alif Lam Mim", arabic: "الم", meaning: "Mysterious letters - divine wisdom", ayahs: [1] },
        { term: "The Book Without Doubt", arabic: "الكتاب لا ريب فيه", meaning: "This Quran has no doubt in it", ayahs: [2] },
        { term: "Guidance for Muttaqin", arabic: "هدى للمتقين", meaning: "Guidance for the God-conscious", ayahs: [2] },
        { term: "Belief in Unseen", arabic: "يؤمنون بالغيب", meaning: "Faith in the unseen realm", ayahs: [3] },
        { term: "Establishing Prayer", arabic: "يقيمون الصلاة", meaning: "Performing prayer properly", ayahs: [3, 43, 45, 83, 110, 177, 277] },
        { term: "Spending from Provision", arabic: "ومما رزقناهم ينفقون", meaning: "Spending what Allah provides", ayahs: [3, 254, 261, 262, 265, 267, 274] },
        { term: "Belief in All Revelation", arabic: "الإيمان بجميع الوحي", meaning: "Believing in all scriptures", ayahs: [4, 136, 285] },
        { term: "Certainty of Hereafter", arabic: "اليقين بالآخرة", meaning: "Absolute certainty in afterlife", ayahs: [4] },
        { term: "Seal on Hearts", arabic: "ختم على القلوب", meaning: "Hearts sealed from guidance", ayahs: [7] }
      ]
    },
    categoriesOfPeople: {
      name: "Categories of People",
      nameAr: "أصناف الناس",
      color: '#06B6D4',
      icon: 'Users',
      concepts: [
        { term: "Muttaqun", arabic: "المتقون", meaning: "The God-conscious believers", ayahs: [2, 177, 189, 194, 197] },
        { term: "Muflihun", arabic: "المفلحون", meaning: "The successful ones", ayahs: [5, 189] },
        { term: "Kafirun", arabic: "الكافرون", meaning: "Those who reject faith", ayahs: [6, 19, 24, 26, 34, 39, 89, 90, 98, 161, 171, 191, 254] },
        { term: "Munafiqun", arabic: "المنافقون", meaning: "The hypocrites", ayahs: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 204] },
        { term: "Disease in Hearts", arabic: "في قلوبهم مرض", meaning: "Spiritual sickness in hearts", ayahs: [10] },
        { term: "Mufsidun", arabic: "المفسدون", meaning: "The corrupters", ayahs: [11, 12, 27, 30, 60, 205, 220] },
        { term: "Sufaha", arabic: "السفهاء", meaning: "The foolish ones", ayahs: [13, 130, 142, 282] },
        { term: "Deaf Dumb Blind", arabic: "صم بكم عمي", meaning: "Deaf, dumb, blind spiritually", ayahs: [18, 171] },
        { term: "Zalimun", arabic: "الظالمون", meaning: "The wrongdoers", ayahs: [35, 51, 54, 59, 92, 95, 124, 145, 165, 193, 229, 246, 254, 258] }
      ]
    },
    adamAndCreation: {
      name: "Adam and Creation Story",
      nameAr: "قصة آدم والخلق",
      color: '#10B981',
      icon: 'Globe',
      concepts: [
        { term: "Khalifah on Earth", arabic: "خليفة في الأرض", meaning: "Adam as vicegerent on earth", ayahs: [30] },
        { term: "Angels' Question", arabic: "سؤال الملائكة", meaning: "Angels questioning bloodshed", ayahs: [30] },
        { term: "Teaching of Names", arabic: "علم آدم الأسماء", meaning: "Allah taught Adam all names", ayahs: [31] },
        { term: "Prostration to Adam", arabic: "السجود لآدم", meaning: "Angels commanded to prostrate", ayahs: [34] },
        { term: "Iblis' Refusal", arabic: "إباء إبليس", meaning: "Satan refused and was arrogant", ayahs: [34] },
        { term: "Forbidden Tree", arabic: "الشجرة المحرمة", meaning: "Tree Adam was forbidden from", ayahs: [35] },
        { term: "Satan's Deception", arabic: "إزلال الشيطان", meaning: "Satan caused them to slip", ayahs: [36] },
        { term: "Words of Repentance", arabic: "كلمات التوبة", meaning: "Adam received words from his Lord", ayahs: [37] },
        { term: "Descent to Earth", arabic: "الهبوط إلى الأرض", meaning: "Commanded to descend to earth", ayahs: [36, 38] }
      ]
    },
    baniIsraelNarratives: {
      name: "Bani Israel Narratives",
      nameAr: "قصص بني إسرائيل",
      color: '#F59E0B',
      icon: 'Book',
      concepts: [
        { term: "Divine Favors", arabic: "نعم الله على بني إسرائيل", meaning: "Allah's favors upon Children of Israel", ayahs: [40, 47, 122] },
        { term: "Breaking Covenants", arabic: "نقض العهد", meaning: "They broke their covenants", ayahs: [27, 63, 83, 84, 85, 93, 100] },
        { term: "Rescue from Pharaoh", arabic: "الإنجاء من فرعون", meaning: "Saved from Pharaoh's persecution", ayahs: [49, 50] },
        { term: "Parting of Sea", arabic: "فرق البحر", meaning: "Sea was parted for them", ayahs: [50] },
        { term: "Forty Nights", arabic: "أربعين ليلة", meaning: "Musa's appointment with Allah", ayahs: [51] },
        { term: "Calf Worship", arabic: "عبادة العجل", meaning: "They took the calf as deity", ayahs: [51, 54, 92, 93] },
        { term: "Repentance Command", arabic: "فاقتلوا أنفسكم", meaning: "Kill yourselves in repentance", ayahs: [54] },
        { term: "Demanding to See Allah", arabic: "أرنا الله جهرة", meaning: "They demanded to see Allah openly", ayahs: [55] },
        { term: "Struck by Lightning", arabic: "الصاعقة", meaning: "Thunderbolt struck them", ayahs: [55] },
        { term: "Manna and Quail", arabic: "المن والسلوى", meaning: "Miraculous food from heaven", ayahs: [57] },
        { term: "Enter the Town", arabic: "ادخلوا القرية", meaning: "Commanded to enter a town humbly", ayahs: [58] },
        { term: "Twelve Springs", arabic: "اثنتا عشرة عينا", meaning: "Water from rock for twelve tribes", ayahs: [60] },
        { term: "Wanting Variety", arabic: "طلب البقل والثوم", meaning: "Asking for onions, garlic, lentils", ayahs: [61] },
        { term: "Humiliation Struck", arabic: "ضربت عليهم الذلة", meaning: "Humiliation stamped upon them", ayahs: [61] },
        { term: "Killing Prophets", arabic: "قتل الأنبياء", meaning: "They killed the prophets", ayahs: [61, 87, 91] },
        { term: "Sabbath Violation", arabic: "الاعتداء في السبت", meaning: "They transgressed on the Sabbath", ayahs: [65] },
        { term: "Transformed to Apes", arabic: "مسخ القردة", meaning: "Turned into despised apes", ayahs: [65, 66] }
      ]
    },
    theCowStory: {
      name: "The Cow Story (Namesake)",
      nameAr: "قصة البقرة",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "Cow Command", arabic: "اذبحوا بقرة", meaning: "Allah commanded to sacrifice a cow", ayahs: [67] },
        { term: "Mockery Question", arabic: "أتتخذنا هزوا", meaning: "Are you mocking us?", ayahs: [67] },
        { term: "Cow Description", arabic: "صفات البقرة", meaning: "Not old nor young, middle-aged", ayahs: [68] },
        { term: "Yellow Color", arabic: "صفراء فاقع لونها", meaning: "Bright yellow, pleasing to see", ayahs: [69] },
        { term: "No Blemish", arabic: "لا شية فيها", meaning: "Without any mark or blemish", ayahs: [71] },
        { term: "Murder Mystery", arabic: "قتل النفس", meaning: "They killed someone secretly", ayahs: [72] },
        { term: "Strike with Part", arabic: "اضربوه ببعضها", meaning: "Strike the dead with part of it", ayahs: [73] },
        { term: "Resurrection Sign", arabic: "إحياء الموتى", meaning: "Allah revives the dead", ayahs: [73] }
      ]
    },
    scripturalDistortion: {
      name: "Scriptural Distortion",
      nameAr: "تحريف الكتب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Tahrif", arabic: "تحريف الكلم", meaning: "Distorting words of scripture", ayahs: [75, 79] },
        { term: "Hiding Knowledge", arabic: "كتمان العلم", meaning: "Concealing divine knowledge", ayahs: [42, 140, 146, 159, 174] },
        { term: "Writing with Hands", arabic: "كتبوا الكتاب بأيديهم", meaning: "They wrote scripture themselves", ayahs: [79] },
        { term: "For Small Price", arabic: "ثمن قليل", meaning: "Selling verses for worldly gain", ayahs: [41, 79, 174] },
        { term: "Forgetting Part", arabic: "نسوا حظا", meaning: "They forgot portion of revelation", ayahs: [63, 85] },
        { term: "Selective Belief", arabic: "الإيمان ببعض الكتاب", meaning: "Believing in part, rejecting part", ayahs: [85] },
        { term: "Disgrace in This Life", arabic: "خزي في الحياة الدنيا", meaning: "Disgrace in worldly life", ayahs: [85] }
      ]
    },
    ibrahimLegacy: {
      name: "Ibrahim's Legacy",
      nameAr: "إرث إبراهيم",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Ibrahim's Trial", arabic: "ابتلاء إبراهيم", meaning: "Ibrahim tested with commands", ayahs: [124] },
        { term: "Imam for Mankind", arabic: "إمام للناس", meaning: "Made leader for all people", ayahs: [124] },
        { term: "Covenant Not for Oppressors", arabic: "لا ينال عهدي الظالمين", meaning: "My covenant excludes wrongdoers", ayahs: [124] },
        { term: "Kaaba Foundation", arabic: "رفع القواعد", meaning: "Raising foundations of the House", ayahs: [127] },
        { term: "Prayer of Submission", arabic: "دعاء الإسلام", meaning: "Make us Muslims (submitters)", ayahs: [128] },
        { term: "Rites of Pilgrimage", arabic: "مناسك الحج", meaning: "Show us our rituals", ayahs: [128] },
        { term: "Prayer for Messenger", arabic: "دعاء إرسال الرسول", meaning: "Send among them a messenger", ayahs: [129] },
        { term: "Millat Ibrahim", arabic: "ملة إبراهيم", meaning: "The religion of Ibrahim", ayahs: [130, 135] },
        { term: "Hanif", arabic: "حنيفا", meaning: "Turning away from all false religions", ayahs: [135] },
        { term: "Neither Jew nor Christian", arabic: "ما كان يهوديا ولا نصرانيا", meaning: "Ibrahim was neither Jew nor Christian", ayahs: [135, 140] }
      ]
    },
    qiblaChange: {
      name: "Qibla (Direction of Prayer)",
      nameAr: "تحويل القبلة",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Face the Sacred Mosque", arabic: "ول وجهك شطر المسجد الحرام", meaning: "Turn face toward Sacred Mosque", ayahs: [144, 149, 150] },
        { term: "We See Your Face", arabic: "نرى تقلب وجهك", meaning: "We see your face turning to sky", ayahs: [144] },
        { term: "Foolish Will Say", arabic: "سيقول السفهاء", meaning: "Foolish ones will question", ayahs: [142] },
        { term: "East and West Belong to Allah", arabic: "لله المشرق والمغرب", meaning: "To Allah belong East and West", ayahs: [115, 142] },
        { term: "Middle Nation", arabic: "أمة وسطا", meaning: "Made you a balanced nation", ayahs: [143] },
        { term: "Witnesses over People", arabic: "شهداء على الناس", meaning: "To be witnesses over mankind", ayahs: [143] },
        { term: "People of the Book Know", arabic: "يعرفونه كأبنائهم", meaning: "They recognize him like their sons", ayahs: [146] }
      ]
    },
    perseveranceAndPatience: {
      name: "Patience and Perseverance",
      nameAr: "الصبر والثبات",
      color: '#10B981',
      icon: 'Shield',
      concepts: [
        { term: "Seek Help Through Patience", arabic: "استعينوا بالصبر", meaning: "Seek help through patience and prayer", ayahs: [45, 153] },
        { term: "Allah With Patient", arabic: "إن الله مع الصابرين", meaning: "Allah is with the patient", ayahs: [153, 249] },
        { term: "Tests of Fear", arabic: "ابتلاء بالخوف", meaning: "Testing with fear", ayahs: [155] },
        { term: "Tests of Hunger", arabic: "ابتلاء بالجوع", meaning: "Testing with hunger", ayahs: [155] },
        { term: "Tests of Loss", arabic: "نقص الأموال", meaning: "Loss of wealth and lives", ayahs: [155] },
        { term: "Inna Lillahi", arabic: "إنا لله وإنا إليه راجعون", meaning: "We belong to Allah and return to Him", ayahs: [156] },
        { term: "Blessings on Patient", arabic: "صلوات من ربهم", meaning: "Blessings and mercy on patient ones", ayahs: [157] },
        { term: "Martyrs Are Alive", arabic: "الشهداء أحياء", meaning: "Martyrs are not dead but alive", ayahs: [154] }
      ]
    },
    signsInCreation: {
      name: "Signs in Creation",
      nameAr: "آيات في الخلق",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "Heavens and Earth Creation", arabic: "خلق السماوات والأرض", meaning: "In creation are signs", ayahs: [164] },
        { term: "Night and Day Alternation", arabic: "اختلاف الليل والنهار", meaning: "Alternation of day and night", ayahs: [164] },
        { term: "Ships in Sea", arabic: "الفلك في البحر", meaning: "Ships sailing for benefit", ayahs: [164] },
        { term: "Rain Revival", arabic: "إحياء الأرض بالمطر", meaning: "Rain bringing earth to life", ayahs: [164] },
        { term: "Creatures Scattered", arabic: "بث من كل دابة", meaning: "Creatures dispersed on earth", ayahs: [164] },
        { term: "Winds and Clouds", arabic: "تصريف الرياح والسحاب", meaning: "Directing of winds and clouds", ayahs: [164] }
      ]
    },
    ayatAlKursi: {
      name: "Ayat al-Kursi (Throne Verse)",
      nameAr: "آية الكرسي",
      color: '#8B5CF6',
      icon: 'Crown',
      concepts: [
        { term: "La Ilaha Illa Huwa", arabic: "لا إله إلا هو", meaning: "There is no god except Him", ayahs: [255] },
        { term: "Al-Hayy Al-Qayyum", arabic: "الحي القيوم", meaning: "The Ever-Living, Self-Sustaining", ayahs: [255] },
        { term: "No Slumber", arabic: "لا تأخذه سنة ولا نوم", meaning: "Neither drowsiness nor sleep overtakes Him", ayahs: [255] },
        { term: "All Belongs to Him", arabic: "له ما في السماوات وما في الأرض", meaning: "To Him belongs all in heavens and earth", ayahs: [255] },
        { term: "No Intercession Without Permission", arabic: "من ذا الذي يشفع إلا بإذنه", meaning: "None intercede except by His leave", ayahs: [255] },
        { term: "Divine Knowledge", arabic: "يعلم ما بين أيديهم", meaning: "He knows past and future", ayahs: [255] },
        { term: "Knowledge Only by His Will", arabic: "ولا يحيطون بشيء من علمه", meaning: "They encompass nothing of His knowledge except as He wills", ayahs: [255] },
        { term: "Kursi Encompasses", arabic: "وسع كرسيه السماوات والأرض", meaning: "His Kursi extends over heavens and earth", ayahs: [255] },
        { term: "Al-Ali Al-Azim", arabic: "العلي العظيم", meaning: "The Most High, The Great", ayahs: [255] }
      ]
    },
    noCompulsionInReligion: {
      name: "Faith Without Compulsion",
      nameAr: "لا إكراه في الدين",
      color: '#EC4899',
      icon: 'Heart',
      concepts: [
        { term: "No Compulsion", arabic: "لا إكراه في الدين", meaning: "No forcing anyone into faith", ayahs: [256] },
        { term: "Truth Distinct from Falsehood", arabic: "تبين الرشد من الغي", meaning: "Right path clearly distinct from error", ayahs: [256] },
        { term: "Reject Taghut", arabic: "يكفر بالطاغوت", meaning: "Reject false deities and tyrants", ayahs: [256, 257] },
        { term: "Believe in Allah", arabic: "ويؤمن بالله", meaning: "And believe in Allah alone", ayahs: [256] },
        { term: "Firmest Handhold", arabic: "العروة الوثقى", meaning: "Grasping the most trustworthy handhold", ayahs: [256] },
        { term: "From Darkness to Light", arabic: "من الظلمات إلى النور", meaning: "Allah brings believers from darkness", ayahs: [257] }
      ]
    },
    legislation: {
      name: "Islamic Legislation",
      nameAr: "التشريعات الإسلامية",
      color: '#22C55E',
      icon: 'Scale',
      concepts: [
        { term: "Fasting Prescribed", arabic: "كتب عليكم الصيام", meaning: "Fasting ordained as worship", ayahs: [183] },
        { term: "Month of Ramadan", arabic: "شهر رمضان", meaning: "Month Quran was revealed", ayahs: [185] },
        { term: "Approach Wives at Night", arabic: "أحل لكم ليلة الصيام الرفث", meaning: "Night intimacy in Ramadan", ayahs: [187] },
        { term: "Dawn Until Sunset", arabic: "من الفجر إلى الليل", meaning: "Fast from dawn to sunset", ayahs: [187] },
        { term: "Itikaf", arabic: "عاكفون في المساجد", meaning: "Spiritual retreat in mosques", ayahs: [187] },
        { term: "Hajj and Umrah", arabic: "أتموا الحج والعمرة", meaning: "Complete pilgrimage for Allah", ayahs: [196] },
        { term: "Hajj Months", arabic: "الحج أشهر معلومات", meaning: "Hajj in specific months", ayahs: [197] },
        { term: "No Indecency in Hajj", arabic: "لا رفث ولا فسوق", meaning: "No lewdness or sin in pilgrimage", ayahs: [197] },
        { term: "Best Provision is Taqwa", arabic: "خير الزاد التقوى", meaning: "Best provision is God-consciousness", ayahs: [197] },
        { term: "Safa and Marwa", arabic: "الصفا والمروة", meaning: "Running between hills", ayahs: [158] }
      ]
    },
    qisasAndLaw: {
      name: "Qisas and Legal Rulings",
      nameAr: "القصاص والأحكام",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "Qisas Prescribed", arabic: "كتب عليكم القصاص", meaning: "Retribution is ordained", ayahs: [178] },
        { term: "Free for Free", arabic: "الحر بالحر", meaning: "Free person for free person", ayahs: [178] },
        { term: "Forgiveness Better", arabic: "فمن عفي له", meaning: "Whoever forgives, receive compensation", ayahs: [178] },
        { term: "Life in Qisas", arabic: "في القصاص حياة", meaning: "In retribution there is life", ayahs: [179] },
        { term: "Bequest Before Death", arabic: "الوصية", meaning: "Will before death", ayahs: [180, 240] },
        { term: "Do Not Consume Wealth Falsely", arabic: "لا تأكلوا أموالكم بالباطل", meaning: "Don't consume wealth wrongfully", ayahs: [188] },
        { term: "Do Not Bribe Judges", arabic: "تدلوا بها إلى الحكام", meaning: "Don't bribe authorities", ayahs: [188] }
      ]
    },
    fightingInAllahsCause: {
      name: "Fighting in Allah's Cause",
      nameAr: "القتال في سبيل الله",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Fighting Prescribed", arabic: "كتب عليكم القتال", meaning: "Fighting ordained though disliked", ayahs: [216] },
        { term: "You May Dislike What is Good", arabic: "عسى أن تكرهوا شيئا", meaning: "You may hate what's good for you", ayahs: [216] },
        { term: "Sacred Month Question", arabic: "الشهر الحرام قتال فيه", meaning: "Fighting in sacred months", ayahs: [217] },
        { term: "Fitna Worse Than Killing", arabic: "الفتنة أشد من القتل", meaning: "Persecution worse than killing", ayahs: [191, 217] },
        { term: "Fight Until No Fitna", arabic: "قاتلوهم حتى لا تكون فتنة", meaning: "Fight until no persecution", ayahs: [193] },
        { term: "No Transgression", arabic: "لا تعتدوا", meaning: "Don't transgress limits", ayahs: [190] },
        { term: "Spend in Allah's Cause", arabic: "أنفقوا في سبيل الله", meaning: "Spend wealth for Allah's cause", ayahs: [195] }
      ]
    },
    charityAndWealth: {
      name: "Charity and Wealth",
      nameAr: "الصدقة والمال",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Parable of Grain", arabic: "مثل حبة", meaning: "One seed becomes 700 grains", ayahs: [261] },
        { term: "No Reproach", arabic: "لا منا ولا أذى", meaning: "Don't follow charity with reminders", ayahs: [262, 264] },
        { term: "Kind Word Better", arabic: "قول معروف خير", meaning: "Kind word better than hurtful charity", ayahs: [263] },
        { term: "Nullifying Charity", arabic: "إبطال الصدقة", meaning: "Reproach nullifies reward", ayahs: [264] },
        { term: "Garden on High Ground", arabic: "جنة بربوة", meaning: "Parable of fertile garden", ayahs: [265] },
        { term: "Spend from Good", arabic: "أنفقوا من طيبات", meaning: "Spend from best earnings", ayahs: [267] },
        { term: "Satan Threatens Poverty", arabic: "الشيطان يعدكم الفقر", meaning: "Satan threatens you with poverty", ayahs: [268] },
        { term: "Allah Promises Forgiveness", arabic: "والله يعدكم مغفرة", meaning: "Allah promises forgiveness and bounty", ayahs: [268] },
        { term: "Secret Charity Better", arabic: "إن تخفوها وتؤتوها الفقراء", meaning: "Giving secretly better than openly", ayahs: [271] },
        { term: "No Fear No Grief", arabic: "لا خوف عليهم ولا هم يحزنون", meaning: "No fear nor grief for charitable", ayahs: [262, 274, 277] }
      ]
    },
    usury: {
      name: "Usury (Riba)",
      nameAr: "الربا",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Riba Forbidden", arabic: "وحرم الربا", meaning: "Interest/usury strictly forbidden", ayahs: [275] },
        { term: "Touched by Satan", arabic: "يتخبطه الشيطان", meaning: "Usurer rises like one possessed", ayahs: [275] },
        { term: "Trade vs Usury", arabic: "أحل الله البيع وحرم الربا", meaning: "Trade lawful, usury forbidden", ayahs: [275] },
        { term: "War from Allah", arabic: "حرب من الله ورسوله", meaning: "War from Allah if usury continues", ayahs: [279] },
        { term: "Principal Only", arabic: "رؤوس أموالكم", meaning: "Take only your principal", ayahs: [279] },
        { term: "No Wrong No Wronged", arabic: "لا تظلمون ولا تظلمون", meaning: "Neither wronging nor wronged", ayahs: [279] },
        { term: "Give Time to Debtor", arabic: "نظرة إلى ميسرة", meaning: "Give respite to debtor in hardship", ayahs: [280] },
        { term: "Forgive Debt as Charity", arabic: "وأن تصدقوا خير", meaning: "Forgiving debt is charity", ayahs: [280] }
      ]
    },
    contracts: {
      name: "Business Contracts",
      nameAr: "العقود والمعاملات",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Write It Down", arabic: "فاكتبوه", meaning: "Record debts in writing", ayahs: [282] },
        { term: "Just Scribe", arabic: "كاتب بالعدل", meaning: "Let a scribe write justly", ayahs: [282] },
        { term: "Debtor Dictates", arabic: "وليملل الذي عليه الحق", meaning: "Let debtor dictate terms", ayahs: [282] },
        { term: "Two Male Witnesses", arabic: "شهيدين من رجالكم", meaning: "Two men as witnesses", ayahs: [282] },
        { term: "One Man Two Women", arabic: "رجل وامرأتان", meaning: "Or one man and two women", ayahs: [282] },
        { term: "Witnesses Must Not Refuse", arabic: "لا يأب الشهداء", meaning: "Witnesses must not refuse", ayahs: [282] },
        { term: "Small or Large Write", arabic: "صغيرا أو كبيرا", meaning: "Write small or large amounts", ayahs: [282] },
        { term: "Exception for Hand Trade", arabic: "تجارة حاضرة", meaning: "Immediate trade needs no writing", ayahs: [282] },
        { term: "Pledge as Security", arabic: "فرهان مقبوضة", meaning: "Pledge if no scribe available", ayahs: [283] },
        { term: "Trust Returned", arabic: "فليؤد الذي اؤتمن أمانته", meaning: "Let trustee discharge trust", ayahs: [283] }
      ]
    },
    marriageAndDivorce: {
      name: "Marriage and Divorce",
      nameAr: "النكاح والطلاق",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "Don't Marry Polytheists", arabic: "لا تنكحوا المشركات", meaning: "Don't marry idolatress women", ayahs: [221] },
        { term: "Believing Slave Better", arabic: "أمة مؤمنة خير", meaning: "Believing slave better than free polytheist", ayahs: [221] },
        { term: "Menstruation Question", arabic: "المحيض أذى", meaning: "Keep away during menstruation", ayahs: [222] },
        { term: "Your Women Are Tilth", arabic: "نساؤكم حرث لكم", meaning: "Wives are your tilth", ayahs: [223] },
        { term: "Forward for Yourselves", arabic: "قدموا لأنفسكم", meaning: "Send good forward for yourselves", ayahs: [223] },
        { term: "Divorce Twice", arabic: "الطلاق مرتان", meaning: "Divorce is twice (revocable)", ayahs: [229] },
        { term: "Keep or Release", arabic: "فإمساك بمعروف أو تسريح", meaning: "Retain or release honorably", ayahs: [229] },
        { term: "Khula", arabic: "الخلع", meaning: "Wife ransoming herself", ayahs: [229] },
        { term: "Third Divorce Final", arabic: "فإن طلقها فلا تحل له", meaning: "Third divorce is final", ayahs: [230] },
        { term: "Iddah Three Periods", arabic: "ثلاثة قروء", meaning: "Waiting period three cycles", ayahs: [228] },
        { term: "Take Back During Iddah", arabic: "وبعولتهن أحق", meaning: "Husbands may take back during iddah", ayahs: [228] },
        { term: "Do Not Prevent", arabic: "لا تعضلوهن", meaning: "Don't prevent remarriage", ayahs: [232] }
      ]
    },
    widowsAndOrphans: {
      name: "Widows and Orphans",
      nameAr: "الأرامل والأيتام",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "Widow Iddah Four Months", arabic: "أربعة أشهر وعشرا", meaning: "Four months and ten days", ayahs: [234] },
        { term: "Indication in Iddah", arabic: "فيما عرضتم به", meaning: "Hint of proposal allowed", ayahs: [235] },
        { term: "No Secret Promise", arabic: "لا تواعدوهن سرا", meaning: "Don't make secret promises", ayahs: [235] },
        { term: "Provision for Widow", arabic: "متاعا إلى الحول", meaning: "One year's provision for widow", ayahs: [240] },
        { term: "Breastfeeding Two Years", arabic: "حولين كاملين", meaning: "Full two years nursing", ayahs: [233] },
        { term: "Father's Provision", arabic: "رزقهن وكسوتهن", meaning: "Father provides food and clothing", ayahs: [233] },
        { term: "Wet Nurse", arabic: "استرضعوا أولادكم", meaning: "May hire wet nurse", ayahs: [233] },
        { term: "Orphan's Best Interest", arabic: "إصلاح اليتامى", meaning: "Act in orphans' best interest", ayahs: [220] }
      ]
    },
    talutAndJalut: {
      name: "Talut and Jalut (Saul and Goliath)",
      nameAr: "قصة طالوت وجالوت",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "Appoint a King", arabic: "ابعث لنا ملكا", meaning: "They asked for a king to fight", ayahs: [246] },
        { term: "Talut Appointed", arabic: "إن الله قد بعث لكم طالوت", meaning: "Allah appointed Talut as king", ayahs: [247] },
        { term: "Kingdom Over Us?", arabic: "أنى يكون له الملك", meaning: "How can he have kingship?", ayahs: [247] },
        { term: "Allah Gives Kingdom", arabic: "والله يؤتي ملكه من يشاء", meaning: "Allah gives kingdom to whom He wills", ayahs: [247] },
        { term: "Ark of Covenant", arabic: "التابوت", meaning: "Ark with remnants from prophets", ayahs: [248] },
        { term: "River Test", arabic: "مبتليكم بنهر", meaning: "Testing with a river", ayahs: [249] },
        { term: "Handful Exempted", arabic: "إلا من اغترف غرفة", meaning: "Except a scooped handful", ayahs: [249] },
        { term: "Small Group Prevails", arabic: "كم من فئة قليلة غلبت", meaning: "How often small group defeats many", ayahs: [249] },
        { term: "Dawud Killed Jalut", arabic: "قتل داود جالوت", meaning: "David killed Goliath", ayahs: [251] },
        { term: "Kingdom and Wisdom", arabic: "الملك والحكمة", meaning: "David given kingdom and wisdom", ayahs: [251] }
      ]
    },
    messenger: {
      name: "The Messenger's Description",
      nameAr: "صفات الرسول",
      color: '#22C55E',
      icon: 'Star',
      concepts: [
        { term: "Messenger Among You", arabic: "رسولا منكم", meaning: "Messenger from among themselves", ayahs: [129, 151] },
        { term: "Recites Verses", arabic: "يتلو عليكم آياتنا", meaning: "Recites Allah's verses to them", ayahs: [129, 151] },
        { term: "Purifies You", arabic: "ويزكيكم", meaning: "Purifies their souls", ayahs: [129, 151] },
        { term: "Teaches Book and Wisdom", arabic: "ويعلمكم الكتاب والحكمة", meaning: "Teaches scripture and wisdom", ayahs: [129, 151] },
        { term: "Teaches What You Knew Not", arabic: "ما لم تكونوا تعلمون", meaning: "Teaches what was unknown", ayahs: [151] },
        { term: "Follow His Guidance", arabic: "فمن تبع هداي", meaning: "Whoever follows my guidance", ayahs: [38] }
      ]
    },
    closingVerses: {
      name: "Closing Verses (Last Two Ayahs)",
      nameAr: "خواتيم السورة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Messenger Believes", arabic: "آمن الرسول", meaning: "The Messenger believes in revelation", ayahs: [285] },
        { term: "No Distinction Among Prophets", arabic: "لا نفرق بين أحد", meaning: "We make no distinction among prophets", ayahs: [285, 136] },
        { term: "We Hear and Obey", arabic: "سمعنا وأطعنا", meaning: "We hear and we obey", ayahs: [285] },
        { term: "Your Forgiveness O Lord", arabic: "غفرانك ربنا", meaning: "We seek Your forgiveness", ayahs: [285] },
        { term: "No Burden Beyond Capacity", arabic: "لا يكلف الله نفسا إلا وسعها", meaning: "Allah burdens not beyond ability", ayahs: [286] },
        { term: "What It Earned", arabic: "لها ما كسبت", meaning: "It earns what it earns", ayahs: [286] },
        { term: "What It Acquired", arabic: "وعليها ما اكتسبت", meaning: "Against it what it acquired", ayahs: [286] },
        { term: "Don't Punish for Forgetfulness", arabic: "لا تؤاخذنا إن نسينا", meaning: "Don't hold us for mistakes", ayahs: [286] },
        { term: "No Heavy Burden", arabic: "لا تحمل علينا إصرا", meaning: "Don't lay on us a burden", ayahs: [286] },
        { term: "Pardon and Forgive", arabic: "واعف عنا واغفر لنا", meaning: "Pardon us and forgive us", ayahs: [286] },
        { term: "You Are Our Protector", arabic: "أنت مولانا", meaning: "You are our Protector", ayahs: [286] },
        { term: "Help Against Disbelievers", arabic: "فانصرنا على القوم الكافرين", meaning: "Grant us victory over disbelievers", ayahs: [286] }
      ]
    }
  },

  relationships: [
    { from: "Guidance for Muttaqin", to: "Categories of People", type: "distinction", description: "Guidance distinguishes believers from disbelievers and hypocrites" },
    { from: "Adam as Khalifah", to: "Human Responsibility", type: "foundation", description: "Adam's role establishes human stewardship on earth" },
    { from: "Bani Israel Failures", to: "Muslim Community Warnings", type: "lesson", description: "Their mistakes serve as warnings for Muslims" },
    { from: "The Cow Story", to: "Obedience Without Questioning", type: "teaching", description: "Immediate obedience better than excessive questioning" },
    { from: "Ibrahim's Millah", to: "Islamic Identity", type: "continuity", description: "Islam is continuation of Ibrahim's pure monotheism" },
    { from: "Qibla Change", to: "New Ummah Identity", type: "establishment", description: "Direction change established Muslim community distinctiveness" },
    { from: "Ayat al-Kursi", to: "Divine Sovereignty", type: "declaration", description: "Supreme verse declaring Allah's absolute authority" },
    { from: "No Compulsion", to: "Religious Freedom", type: "principle", description: "Faith must be freely chosen, not forced" },
    { from: "Fasting Prescription", to: "Self-Discipline", type: "training", description: "Fasting trains believers in self-control" },
    { from: "Fighting Rules", to: "Just War", type: "limitation", description: "Fighting has strict ethical boundaries" },
    { from: "Charity Parables", to: "Spiritual Investment", type: "encouragement", description: "Charity multiplied exponentially by Allah" },
    { from: "Riba Prohibition", to: "Economic Justice", type: "protection", description: "Usury prohibition protects economic balance" },
    { from: "Contract Writing", to: "Business Ethics", type: "regulation", description: "Documentation ensures fair dealings" },
    { from: "Marriage Laws", to: "Family Foundation", type: "structure", description: "Marriage and divorce rules build strong families" },
    { from: "Talut Story", to: "Leadership by Merit", type: "principle", description: "Leadership based on knowledge and strength, not wealth" },
    { from: "Closing Verses", to: "Complete Submission", type: "culmination", description: "Final duas show complete submission and trust" }
  ],

  thematicFlow: {
    title: "Comprehensive Guidance: From Belief to Legislation",
    stages: [
      { name: "The Book and Categories of People", ayahs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], description: "Introduction to Quran, believers, disbelievers, and hypocrites" },
      { name: "Call to Worship", ayahs: [21, 22, 23, 24, 25, 26, 27, 28, 29], description: "Call to worship Allah alone; challenge to produce similar scripture" },
      { name: "Adam's Creation Story", ayahs: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], description: "Creation of Adam, angels' prostration, Satan's fall" },
      { name: "Bani Israel's History (Part 1)", ayahs: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66], description: "Allah's favors and their ingratitude" },
      { name: "The Cow Incident", ayahs: [67, 68, 69, 70, 71, 72, 73, 74], description: "The namesake story - commanded to sacrifice a cow" },
      { name: "Bani Israel's Continuation", ayahs: [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96], description: "Scripture distortion and covenant breaking" },
      { name: "Jealousy and Magic", ayahs: [97, 98, 99, 100, 101, 102, 103], description: "Harut, Marut, and rejection of revelation" },
      { name: "Abrogation and Patience", ayahs: [104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121], description: "Abrogated verses; enduring harm; Heaven not exclusive to any group" },
      { name: "Ibrahim's Legacy", ayahs: [122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141], description: "Building the Kaaba; the true religion of Ibrahim" },
      { name: "The Qibla Change", ayahs: [142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152], description: "Change from Jerusalem to Mecca; middle nation" },
      { name: "Perseverance and Signs", ayahs: [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164], description: "Patience, martyrdom, and signs in creation" },
      { name: "Polytheism and Tawhid", ayahs: [165, 166, 167, 168, 169, 170, 171], description: "Taking rivals besides Allah; blind following ancestors" },
      { name: "Food Laws", ayahs: [172, 173, 174, 175, 176], description: "Halal and haram foods; carrion, blood, pork, non-Allah's name" },
      { name: "Righteousness Defined", ayahs: [177], description: "Comprehensive definition of birr (righteousness)" },
      { name: "Qisas and Wills", ayahs: [178, 179, 180, 181, 182], description: "Retribution law; importance of bequests" },
      { name: "Fasting Legislation", ayahs: [183, 184, 185, 186, 187], description: "Ramadan fasting ordained; rules and exemptions" },
      { name: "Prayers and General Ethics", ayahs: [188, 189], description: "Don't consume wealth wrongfully; new moons" },
      { name: "Fighting Rules", ayahs: [190, 191, 192, 193, 194, 195], description: "Rules of engagement; transgression forbidden" },
      { name: "Hajj Legislation", ayahs: [196, 197, 198, 199, 200, 201, 202, 203], description: "Pilgrimage rites; Arafat; remembrance" },
      { name: "Hypocrites and Sincerity", ayahs: [204, 205, 206, 207], description: "Those who impress vs those who sacrifice" },
      { name: "Call to Full Islam", ayahs: [208, 209, 210, 211, 212], description: "Enter Islam completely; don't follow Satan's steps" },
      { name: "Past Nations", ayahs: [213, 214], description: "Prophets came; hardship before victory" },
      { name: "Questions Answered", ayahs: [215, 216, 217, 218, 219, 220, 221], description: "Spending, fighting, wine, gambling, orphans, marriage" },
      { name: "Women's Rights", ayahs: [222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242], description: "Menstruation, intimacy, oaths, divorce, iddah, nursing" },
      { name: "Maintain Prayer", ayahs: [238, 239], description: "Guard prayers especially middle prayer" },
      { name: "Fighting Examples", ayahs: [243, 244, 245, 246, 247, 248, 249, 250, 251, 252], description: "Talut and Jalut; few defeat many with Allah's help" },
      { name: "Prophets' Distinctions", ayahs: [253, 254], description: "Some prophets elevated; spend before judgment" },
      { name: "Ayat al-Kursi and Tawhid", ayahs: [255, 256, 257], description: "Throne verse; no compulsion in religion" },
      { name: "Ibrahim's Debates", ayahs: [258, 259, 260], description: "Ibrahim vs Nimrod; Uzayr's death; birds' revival" },
      { name: "Charity Excellence", ayahs: [261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274], description: "Parables of charity; don't nullify with reproach" },
      { name: "Riba Prohibition", ayahs: [275, 276, 277, 278, 279, 280, 281], description: "Usury forbidden; war from Allah; respite for debtor" },
      { name: "Debt and Contracts", ayahs: [282, 283, 284], description: "Longest verse - writing debts; witnesses; Allah knows all" },
      { name: "Closing Supplications", ayahs: [285, 286], description: "Messenger believes; no burden beyond capacity; final duas" }
    ]
  },

  uniqueInsight: {
    title: "Ayat al-Kursi (آية الكرسي) - The Throne Verse",
    insight: "Verse 255 is known as the greatest verse in the Quran according to an authentic hadith. The Prophet (peace be upon him) asked a companion which verse is greatest, and upon hearing 'Ayat al-Kursi,' he struck his chest approvingly saying, 'May knowledge bring you joy, Abu Mundhir!' This single verse encapsulates the essence of Islamic monotheism (Tawhid) with remarkable comprehensiveness. It contains nine of Allah's attributes: (1) There is no god but He (unity), (2) The Ever-Living (Al-Hayy), (3) The Self-Sustaining (Al-Qayyum), (4) Neither drowsiness nor sleep overtakes Him (perfect vigilance), (5) To Him belongs all in the heavens and earth (absolute ownership), (6) None intercedes except by His permission (supreme authority), (7) He knows what is before and behind them (complete knowledge), (8) His Kursi encompasses all (supreme dominion), (9) He is the Most High, Most Great (Al-Ali, Al-Azim). Reciting it after every prayer and before sleep provides protection. Its placement between verses about spending (261-274) and verses about no compulsion in religion (256-257) shows that true faith encompasses both financial sacrifice and spiritual freedom.",
    arabicTerm: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    rootMeaning: "ك-ر-س (footstool, throne) - The Kursi is Allah's throne/footstool extending over all existence",
    keyAyah: 255
  },

  historicalContext: {
    revelationPeriod: "Medinan, first years after Hijra (1-2 AH onwards)",
    occasion: "Revealed gradually over the Medinan period to establish the Muslim community's belief system, laws, and identity. Contains some of the last revealed verses including the longest verse (282) about contracts and verse 281 about fearing the Day of return to Allah.",
    note: "Al-Baqarah was revealed to address the unique challenges of the newly formed Muslim state in Medina - dealing with Jewish tribes, establishing Islamic law, and creating a distinct Muslim identity separate from both Judaism and Christianity while honoring shared Abrahamic heritage. The surah contains the final verse revealed (2:281) according to some scholars. Verse 282 is the longest verse in the Quran. The last two verses (285-286) are a special gift from beneath the Throne, given during Mi'raj, and have special virtue for protection. The Prophet said: 'Whoever recites the last two verses of Surah Al-Baqarah at night, they will suffice him.'"
  },

  linguisticFeatures: {
    features: [
      { name: "Huruf Muqatta'at", description: "الم - Disconnected letters", example: "Opening with mysterious letters found in 29 surahs", ayah: 1 },
      { name: "Mathalu Definition", description: "مثل - Parable structure", example: "Multiple parables: charity seed (261), hypocrites' fire (17), rain storm (19)", ayah: 261 },
      { name: "Question-Answer Format", description: "يسألونك", example: "'They ask you about...' appears 15+ times in Quran, several times here", ayah: 189 },
      { name: "Kutiba 'Alaykum", description: "كتب عليكم", example: "'Prescribed for you' - used for fasting (183), fighting (216), qisas (178)", ayah: 183 },
      { name: "Rhetorical Question Alam Tara", description: "ألم تر", example: "'Have you not seen...' pointing to evidence", ayah: 243 },
      { name: "Longest Verse", description: "آية الدين", example: "Verse 282 contains ~128 words - longest in Quran", ayah: 282 },
      { name: "Ayat al-Birr", description: "تعريف البر الجامع", example: "Comprehensive definition of righteousness in one verse", ayah: 177 },
      { name: "Ring Composition", description: "البنية الدائرية", example: "Surah begins and ends with similar themes of faith and guidance", ayah: 286 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 1, name: "Al-Fatiha", relationship: "Al-Fatiha's prayer for guidance answered in Al-Baqarah's opening: 'This is the Book, guidance for the Muttaqin'", type: "prayer_answer" },
      { surah: 3, name: "Aal Imran", relationship: "Both called 'Az-Zahrawain' (The Two Lights); Al-Baqarah focuses on Jews, Aal Imran on Christians", type: "paired_surahs" },
      { surah: 4, name: "An-Nisa", relationship: "Continues legislation themes; elaborates on inheritance and women's rights", type: "legislative_continuation" },
      { surah: 5, name: "Al-Ma'idah", relationship: "Completes dietary laws and contracts mentioned in Al-Baqarah", type: "legislative_completion" },
      { surah: 7, name: "Al-A'raf", relationship: "Expands on Adam's story and Bani Israel narratives", type: "narrative_expansion" },
      { surah: 17, name: "Al-Isra", relationship: "Both discuss Bani Israel; Al-Baqarah's warnings echoed in their future punishment", type: "thematic_echo" },
      { surah: 22, name: "Al-Hajj", relationship: "Elaborates on Hajj rites briefly mentioned in Al-Baqarah", type: "thematic_expansion" },
      { surah: 57, name: "Al-Hadid", relationship: "Both discuss spending in Allah's way with multiplication parables", type: "thematic_parallel" },
      { surah: 112, name: "Al-Ikhlas", relationship: "Ayat al-Kursi's Tawhid concepts condensed in Al-Ikhlas", type: "thematic_summary" }
    ]
  }
};

export default ONTOLOGY;
