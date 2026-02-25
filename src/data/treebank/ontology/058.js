/**
 * Surah Al-Mujadila (The Pleading Woman) - Surah 58
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 58,
  surahName: "Al-Mujadila",
  surahNameArabic: "المجادلة",
  totalAyahs: 22,
  revelationType: "Medinan",
  mainTheme: { en: "Social Regulations, Zihar Laws, and Loyalty to Allah Over Family", ur: "معاشرتی احکام، ظہار کے قوانین، اور خاندان پر اللہ سے وفاداری" },

  categories: {
    ziharLaw: {
      name: "Zihar (False Divorce) Legislation",
      nameUr: "ظہار کے احکام",
      nameAr: "أحكام الظهار",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Allah Heard Her Complaint", arabic: "سمع الله قولها", meaning: { en: "Allah heard the woman pleading about her husband", ur: "اللہ نے اس عورت کی فریاد سنی جو اپنے شوہر کے بارے میں شکایت کر رہی تھی" }, ayahs: [1] },
        { term: "Zihar Declaration", arabic: "الظهار", meaning: { en: "Declaring wife like mother's back", ur: "بیوی کو ماں کی پیٹھ جیسا قرار دینا" }, ayahs: [2] },
        { term: "Wives Are Not Mothers", arabic: "ما هن أمهاتهم", meaning: { en: "Wives cannot become like mothers by statement", ur: "بیویاں محض کہنے سے مائیں نہیں بن سکتیں" }, ayahs: [2] },
        { term: "Munkar Statement", arabic: "قول منكر وزور", meaning: { en: "Zihar is false and evil speech", ur: "ظہار ناپسندیدہ اور جھوٹی بات ہے" }, ayahs: [2] }
      ]
    },
    ziharExpiation: {
      name: "Expiation for Zihar",
      nameUr: "ظہار کا کفارہ",
      nameAr: "كفارة الظهار",
      color: '#8B5CF6',
      icon: 'Scale',
      concepts: [
        { term: "Freeing a Slave", arabic: "تحرير رقبة", meaning: { en: "First option: free a slave before touching", ur: "پہلا اختیار: ملاپ سے پہلے ایک غلام آزاد کرنا" }, ayahs: [3] },
        { term: "Two Months Fasting", arabic: "صيام شهرين", meaning: { en: "Second option: fast two consecutive months", ur: "دوسرا اختیار: لگاتار دو مہینے روزے رکھنا" }, ayahs: [4] },
        { term: "Feeding Sixty Poor", arabic: "إطعام ستين مسكينا", meaning: { en: "Third option: feed sixty needy people", ur: "تیسرا اختیار: ساٹھ مسکینوں کو کھانا کھلانا" }, ayahs: [4] },
        { term: "Before Intimacy", arabic: "قبل أن يتماسا", meaning: { en: "Expiation must precede resuming relations", ur: "کفارہ تعلقات دوبارہ شروع کرنے سے پہلے ادا کرنا ضروری ہے" }, ayahs: [3, 4] }
      ]
    },
    divineOmniscience: {
      name: "Allah's Complete Knowledge",
      nameUr: "اللہ کا مکمل علم",
      nameAr: "علم الله الشامل",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "Fourth of Three", arabic: "رابع ثلاثة", meaning: { en: "In any three's conversation, He is the fourth", ur: "تین کی سرگوشی میں چوتھا وہی ہے" }, ayahs: [7] },
        { term: "Fifth of Five", arabic: "خامس خمسة", meaning: { en: "In any five's conversation, He is the sixth", ur: "پانچ کی سرگوشی میں چھٹا وہی ہے" }, ayahs: [7] },
        { term: "Closer Than Close", arabic: "أدنى من ذلك ولا أكثر", meaning: { en: "Present in every gathering, small or large", ur: "ہر مجلس میں موجود، چھوٹی ہو یا بڑی" }, ayahs: [7] },
        { term: "Allah Hears and Sees", arabic: "سميع بصير", meaning: { en: "Allah hears all and sees all", ur: "اللہ سب کچھ سنتا اور سب کچھ دیکھتا ہے" }, ayahs: [1] }
      ]
    },
    secretConversations: {
      name: "Regulations on Private Conversations",
      nameUr: "سرگوشی کے آداب",
      nameAr: "آداب النجوى",
      color: '#06B6D4',
      icon: 'MessageCircle',
      concepts: [
        { term: "Forbidden Private Talk", arabic: "النجوى المحرمة", meaning: { en: "Secret talk in sin and aggression", ur: "گناہ اور زیادتی کی سرگوشی" }, ayahs: [8, 9] },
        { term: "Permitted Private Talk", arabic: "النجوى المباحة", meaning: { en: "Secret talk in righteousness and piety", ur: "نیکی اور تقویٰ کی سرگوشی" }, ayahs: [9] },
        { term: "Satan's Whispering", arabic: "نجوى الشيطان", meaning: { en: "Secret talk from Satan to grieve believers", ur: "شیطان کی سرگوشی جو مومنوں کو غمگین کرے" }, ayahs: [10] },
        { term: "Tawakkul Response", arabic: "التوكل على الله", meaning: { en: "Reliance on Allah against Satan's plots", ur: "شیطان کی سازشوں کے خلاف اللہ پر بھروسہ" }, ayahs: [10] }
      ]
    },
    assemblyEtiquette: {
      name: "Assembly Etiquette",
      nameUr: "مجلسوں کے آداب",
      nameAr: "آداب المجالس",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "Making Room", arabic: "التفسح في المجالس", meaning: { en: "Spreading out when asked in assemblies", ur: "مجلسوں میں کہے جانے پر جگہ دینا" }, ayahs: [11] },
        { term: "Rising When Asked", arabic: "النشوز عند الطلب", meaning: { en: "Rising up when requested to disperse", ur: "اٹھنے کو کہا جائے تو اٹھ جانا" }, ayahs: [11] },
        { term: "Allah Makes Room", arabic: "يفسح الله لكم", meaning: { en: "Allah expands for those who make room", ur: "جو جگہ دیتا ہے اللہ اسے وسعت دیتا ہے" }, ayahs: [11] },
        { term: "Elevation of Knowledge", arabic: "رفع أهل العلم", meaning: { en: "Allah raises those with knowledge in degrees", ur: "اللہ اہلِ علم کے درجات بلند کرتا ہے" }, ayahs: [11] }
      ]
    },
    charityBeforeConsultation: {
      name: "Charity Before Private Consultation",
      nameUr: "نجی مشاورت سے پہلے صدقہ",
      nameAr: "الصدقة قبل النجوى",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "Sadaqah Before Najwa", arabic: "صدقة قبل النجوى", meaning: { en: "Giving charity before private talk with Prophet", ur: "نبی ﷺ سے نجی گفتگو سے پہلے صدقہ دینا" }, ayahs: [12] },
        { term: "Abrogation of Ruling", arabic: "نسخ الحكم", meaning: { en: "Ruling eased when people hesitated", ur: "لوگوں کے ہچکچانے پر حکم میں آسانی کر دی گئی" }, ayahs: [13] },
        { term: "Prayer and Zakah", arabic: "الصلاة والزكاة", meaning: { en: "Return to basic obligations after abrogation", ur: "نسخ کے بعد بنیادی فرائض کی طرف واپسی" }, ayahs: [13] }
      ]
    },
    hypocritesExposed: {
      name: "Hypocrites' False Allegiances",
      nameUr: "منافقین کی جھوٹی وفاداریاں",
      nameAr: "فضح المنافقين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Allying with Cursed People", arabic: "موالاة المغضوب عليهم", meaning: { en: "Befriending those under Allah's wrath", ur: "اللہ کے غضب والوں سے دوستی" }, ayahs: [14] },
        { term: "False Oaths", arabic: "الأيمان الكاذبة", meaning: { en: "Swearing falsely while knowing", ur: "جانتے بوجھتے جھوٹی قسمیں کھانا" }, ayahs: [14, 18] },
        { term: "Oaths as Shields", arabic: "اتخاذ الأيمان جنة", meaning: { en: "Using false oaths as protection", ur: "جھوٹی قسموں کو ڈھال بنانا" }, ayahs: [16] },
        { term: "Neither Group", arabic: "ما هم منكم ولا منهم", meaning: { en: "Belonging to neither believers nor disbelievers", ur: "نہ مومنوں میں سے ہیں نہ کافروں میں سے" }, ayahs: [14] }
      ]
    },
    twoParties: {
      name: "Two Opposing Parties",
      nameUr: "دو متقابل گروہ",
      nameAr: "الحزبان المتقابلان",
      color: '#8B5CF6',
      icon: 'Users',
      concepts: [
        { term: "Satan's Party", arabic: "حزب الشيطان", meaning: { en: "Those overcome by Satan, forgetting Allah", ur: "وہ جن پر شیطان غالب آ گیا اور اللہ کو بھول گئے" }, ayahs: [19] },
        { term: "Allah's Party", arabic: "حزب الله", meaning: { en: "Those who love Allah over family", ur: "وہ جو خاندان سے زیادہ اللہ سے محبت رکھتے ہیں" }, ayahs: [22] },
        { term: "Losers", arabic: "الخاسرون", meaning: { en: "Satan's party are the true losers", ur: "شیطان کا گروہ ہی اصل خسارے میں ہے" }, ayahs: [19] },
        { term: "Successful", arabic: "المفلحون", meaning: { en: "Allah's party are the successful", ur: "اللہ کا گروہ ہی کامیاب ہے" }, ayahs: [22] }
      ]
    },
    loyaltyToAllah: {
      name: "Loyalty to Allah Over Family",
      nameUr: "خاندان سے بالاتر اللہ سے وفاداری",
      nameAr: "الولاء لله فوق القرابة",
      color: '#F59E0B',
      icon: 'Shield',
      concepts: [
        { term: "No Affection for Opponents", arabic: "عدم موادة المحادين", meaning: { en: "Not loving those who oppose Allah", ur: "اللہ کے مخالفین سے محبت نہ رکھنا" }, ayahs: [22] },
        { term: "Even If Family", arabic: "ولو كانوا آباءهم", meaning: { en: "Even if they are fathers, sons, brothers, clan", ur: "خواہ وہ ان کے باپ، بیٹے، بھائی یا قبیلے ہوں" }, ayahs: [22] },
        { term: "Faith Written in Hearts", arabic: "كتب في قلوبهم الإيمان", meaning: { en: "Allah inscribes faith in believers' hearts", ur: "اللہ مومنوں کے دلوں میں ایمان لکھ دیتا ہے" }, ayahs: [22] },
        { term: "Spirit from Allah", arabic: "أيدهم بروح منه", meaning: { en: "Allah supports them with a spirit from Him", ur: "اللہ انہیں اپنی طرف سے روح کے ذریعے تقویت دیتا ہے" }, ayahs: [22] }
      ]
    }
  },

  relationships: [
    { from: "Woman's Plea", to: "Divine Response", type: "answered_prayer", description: { en: "Allah heard and revealed zihar laws", ur: "اللہ نے سنا اور ظہار کے احکام نازل فرمائے" } },
    { from: "Zihar Statement", to: "Expiation", type: "remedy", description: { en: "False statement requires atonement", ur: "جھوٹے بیان کا کفارہ ادا کرنا ضروری ہے" } },
    { from: "Expiation Levels", to: "Ability", type: "gradation", description: { en: "Three levels based on financial ability", ur: "مالی استطاعت کی بنیاد پر تین درجے" } },
    { from: "Divine Omniscience", to: "Private Conversations", type: "warning", description: { en: "Allah is present in all gatherings", ur: "اللہ ہر مجلس میں حاضر ہے" } },
    { from: "Making Room", to: "Divine Expansion", type: "reciprocity", description: { en: "Allah expands for those who accommodate others", ur: "جو دوسروں کو جگہ دے اللہ اسے وسعت دیتا ہے" } },
    { from: "Knowledge Seekers", to: "Elevated Ranks", type: "reward", description: { en: "People of knowledge raised in degrees", ur: "اہلِ علم کے درجات بلند کیے جاتے ہیں" } },
    { from: "False Oaths", to: "Shield Against Truth", type: "misuse", description: { en: "Hypocrites misuse oaths for protection", ur: "منافقین قسموں کو حق سے بچنے کی ڈھال بناتے ہیں" } },
    { from: "Satan's Domination", to: "Forgetting Allah", type: "consequence", description: { en: "Satan makes them forget divine remembrance", ur: "شیطان انہیں اللہ کی یاد بھلا دیتا ہے" } },
    { from: "Family Ties", to: "Faith Loyalty", type: "subordination", description: { en: "Love for Allah supersedes family love", ur: "اللہ کی محبت خاندانی محبت سے بالاتر ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Personal Plea to Universal Principle", ur: "ذاتی فریاد سے آفاقی اصول تک" },
    stages: [
      { name: "Woman's Complaint Heard", ayahs: [1], description: { en: "Allah hears Khawla's plea about zihar", ur: "اللہ نے خولہ کی ظہار کے بارے میں فریاد سنی" } },
      { name: "Zihar Condemned", ayahs: [2], description: { en: "Zihar declared false and evil speech", ur: "ظہار کو جھوٹی اور بری بات قرار دیا گیا" } },
      { name: "Expiation Levels", ayahs: [3, 4], description: { en: "Three-tiered expiation: slave, fasting, feeding", ur: "تین درجے کا کفارہ: غلام آزاد کرنا، روزے، کھانا کھلانا" } },
      { name: "Divine Limits", ayahs: [5], description: { en: "These are Allah's boundaries", ur: "یہ اللہ کی حدود ہیں" } },
      { name: "Opposition Condemned", ayahs: [6], description: { en: "Those opposing Allah will be humiliated", ur: "اللہ کی مخالفت کرنے والے ذلیل ہوں گے" } },
      { name: "Divine Omniscience", ayahs: [7], description: { en: "Allah present in every private gathering", ur: "اللہ ہر نجی مجلس میں حاضر ہے" } },
      { name: "Secret Talk Rules", ayahs: [8, 9, 10], description: { en: "Forbidden and permitted private conversations", ur: "ممنوع اور جائز سرگوشیاں" } },
      { name: "Assembly Etiquette", ayahs: [11], description: { en: "Making room and rising when asked", ur: "جگہ دینا اور کہے جانے پر اٹھ جانا" } },
      { name: "Charity Before Consultation", ayahs: [12, 13], description: { en: "Sadaqah requirement and its easing", ur: "صدقے کی شرط اور اس میں آسانی" } },
      { name: "Hypocrites Exposed", ayahs: [14, 15, 16, 17, 18], description: { en: "False alliances and oaths", ur: "جھوٹے اتحاد اور قسمیں" } },
      { name: "Two Parties", ayahs: [19, 20, 21], description: { en: "Satan's party vs Allah's decree of victory", ur: "شیطان کا گروہ بمقابلہ اللہ کا فیصلۂ فتح" } },
      { name: "Faith Over Family", ayahs: [22], description: { en: "True believers don't love Allah's enemies", ur: "سچے مومن اللہ کے دشمنوں سے محبت نہیں رکھتے" } }
    ]
  },

  practicalApplication: {
    title: { en: "Living the Lessons of Al-Mujadila", ur: "سورۃ المجادلہ کے اسباق پر عمل" },
    applications: [
      {
        context: { en: "Marital Disputes", ur: "ازدواجی تنازعات" },
        teaching: { en: "Never equate wife to mother in anger; it's a grave sin requiring expiation", ur: "غصے میں بیوی کو ماں سے تشبیہ نہ دو؛ یہ سنگین گناہ ہے جس کا کفارہ ضروری ہے" },
        ayah: 2
      },
      {
        context: { en: "Awareness of Allah", ur: "اللہ سے آگاہی" },
        teaching: { en: "Remember Allah is present in every private conversation", ur: "یاد رکھو اللہ ہر نجی گفتگو میں حاضر ہے" },
        ayah: 7
      },
      {
        context: { en: "Private Conversations", ur: "نجی گفتگو" },
        teaching: { en: "Use privacy for good counsel, not sin, aggression, or disobedience", ur: "نجی گفتگو نیک مشورے کے لیے کرو، گناہ، زیادتی یا نافرمانی کے لیے نہیں" },
        ayah: 9
      },
      {
        context: { en: "In Gatherings", ur: "مجلسوں میں" },
        teaching: { en: "Make room for others; Allah will make room for you", ur: "دوسروں کو جگہ دو؛ اللہ تمہیں وسعت دے گا" },
        ayah: 11
      },
      {
        context: { en: "Knowledge Seeking", ur: "علم حاصل کرنا" },
        teaching: { en: "Those with knowledge are elevated in rank by Allah", ur: "اللہ اہلِ علم کے مرتبے بلند فرماتا ہے" },
        ayah: 11
      },
      {
        context: { en: "Against False Oaths", ur: "جھوٹی قسموں کے خلاف" },
        teaching: { en: "Never use oaths as shields for wrongdoing", ur: "قسموں کو کبھی غلط کاموں کی ڈھال نہ بناؤ" },
        ayah: 16
      },
      {
        context: { en: "Loyalty Priorities", ur: "وفاداری کی ترجیحات" },
        teaching: { en: "Love for Allah must supersede even family ties", ur: "اللہ کی محبت خاندانی رشتوں سے بھی بالاتر ہونی چاہیے" },
        ayah: 22
      }
    ]
  },

  uniqueInsight: {
    title: { en: "Divine Presence in Every Gathering (مَا يَكُونُ مِن نَّجْوَىٰ ثَلَاثَةٍ إِلَّا هُوَ رَابِعُهُمْ)", ur: "ہر مجلس میں الٰہی حضوری (مَا يَكُونُ مِن نَّجْوَىٰ ثَلَاثَةٍ إِلَّا هُوَ رَابِعُهُمْ)" },
    insight: {
      en: "Verse 7 presents one of the Quran's most powerful statements about divine omniscience: in any private conversation of three, Allah is the fourth; in any gathering of five, He is the sixth. This isn't about numerical presence but about complete awareness. The verse systematically covers all possible group sizes ('nor less than that nor more') and notes that Allah will inform them of their discussions on Judgment Day. This awareness serves as both a warning (against evil scheming) and a comfort (Allah witnesses injustice against the oppressed). The woman Khawla came to complain about her husband, and Aisha said she could barely hear parts of her conversation with the Prophet from the same room—yet Allah heard it all from above the seven heavens. This surah begins and ends with divine knowledge: hearing one woman's whispered plea (v.1) and knowing who truly loves Him over their own families (v.22).",
      ur: "آیت 7 قرآن کے سب سے طاقتور بیانات میں سے ایک ہے الٰہی علمِ کامل کے بارے میں: تین لوگوں کی کسی بھی سرگوشی میں اللہ چوتھا ہے؛ پانچ کی مجلس میں وہ چھٹا ہے۔ یہ عددی موجودگی نہیں بلکہ مکمل آگاہی ہے۔ آیت منظم طریقے سے تمام ممکنہ گروہوں کا احاطہ کرتی ہے ('نہ اس سے کم نہ زیادہ') اور بتاتی ہے کہ اللہ قیامت کے دن ان کی باتوں سے آگاہ کرے گا۔ یہ آگاہی بیک وقت تنبیہ (بری سازشوں کے خلاف) اور تسلی (مظلوموں کے ساتھ اللہ کی گواہی) ہے۔ خولہ اپنے شوہر کی شکایت لے کر آئیں، اور عائشہ رضی اللہ عنہا فرماتی ہیں کہ وہ اسی کمرے سے ان کی نبی ﷺ سے گفتگو کے حصے بمشکل سن سکتی تھیں—مگر اللہ نے سات آسمانوں کے اوپر سے سب سن لیا۔ یہ سورت الٰہی علم سے شروع اور ختم ہوتی ہے: ایک عورت کی سرگوشی سننا (آیت 1) اور یہ جاننا کہ کون واقعی اپنے خاندان سے زیادہ اس سے محبت رکھتا ہے (آیت 22)۔"
    },
    arabicTerm: "مَا يَكُونُ مِن نَّجْوَىٰ ثَلَاثَةٍ إِلَّا هُوَ رَابِعُهُمْ",
    rootMeaning: { en: "ن-ج-و (to whisper secretly) - Allah is present in all private counsel", ur: "ن-ج-و (سرگوشی کرنا) - اللہ ہر نجی مشورے میں حاضر ہے" },
    keyAyah: 7
  },

  historicalContext: {
    revelationPeriod: { en: "Medinan period, around 5-6 AH", ur: "مدنی دور، تقریباً 5-6 ہجری" },
    occasion: { en: "Khawla bint Tha'laba came to the Prophet complaining about her husband Aws ibn al-Samit, who had declared zihar (saying 'you are to me like my mother's back'). This pre-Islamic formula was used to abandon wives without formally divorcing them. She pleaded for justice, and Allah revealed this surah starting with 'Indeed, Allah has heard...'", ur: "خولہ بنت ثعلبہ نبی ﷺ کے پاس اپنے شوہر اوس بن صامت کی شکایت لے کر آئیں جنہوں نے ظہار کیا تھا (یعنی کہا 'تو میرے لیے میری ماں کی پیٹھ جیسی ہے')۔ یہ جاہلیت کا طریقہ تھا جس سے بیویوں کو باقاعدہ طلاق دیے بغیر چھوڑ دیا جاتا تھا۔ انہوں نے انصاف کی فریاد کی اور اللہ نے یہ سورت نازل فرمائی جو 'بے شک اللہ نے سن لیا...' سے شروع ہوتی ہے۔" },
    note: { en: "The surah's name 'Al-Mujadila' (The Pleading Woman) immortalizes Khawla's complaint—a woman's voice reaching the heavens. The zihar laws abolished a cruel pre-Islamic practice. The abrogated charity-before-consultation ruling (v.12-13) shows how Allah eases rulings based on the ummah's capacity. 'Umar noted that Ali ibn Abi Talib was the only one who acted on v.12 before its abrogation.", ur: "سورت کا نام 'المجادلہ' (فریاد کرنے والی عورت) خولہ کی شکایت کو لازوال بنا دیتا ہے—ایک عورت کی آواز جو آسمانوں تک پہنچی۔ ظہار کے قوانین نے جاہلیت کی ایک ظالمانہ رسم ختم کی۔ مشاورت سے پہلے صدقے کے منسوخ حکم (آیت 12-13) سے ظاہر ہوتا ہے کہ اللہ امت کی استطاعت کے مطابق احکام میں آسانی فرماتا ہے۔ عمر رضی اللہ عنہ نے نوٹ کیا کہ علی بن ابی طالب واحد شخص تھے جنہوں نے آیت 12 کے منسوخ ہونے سے پہلے اس پر عمل کیا۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Opening Formula", description: { en: "قَدْ سَمِعَ - emphatic 'Indeed Allah has heard'", ur: "قَدْ سَمِعَ - تاکیدی 'بے شک اللہ نے سن لیا'" }, example: { en: "Past tense indicating certainty", ur: "ماضی کا صیغہ جو یقین کی نشاندہی کرتا ہے" }, ayah: 1 },
      { name: "Numerical Progression", description: { en: "Three→fourth, five→sixth pattern", ur: "تین→چوتھا، پانچ→چھٹا کا نمونہ" }, example: { en: "Systematic coverage of all group sizes", ur: "تمام گروہوں کے سائز کا منظم احاطہ" }, ayah: 7 },
      { name: "Dual Party Contrast", description: { en: "حِزْبُ الشَّيْطَانِ vs حِزْبُ اللَّهِ", ur: "حِزْبُ الشَّيْطَانِ بمقابلہ حِزْبُ اللَّهِ" }, example: { en: "Clear binary between losers and successful", ur: "خسارے والوں اور کامیابوں کا واضح تقابل" }, ayahs: [19, 22] },
      { name: "Family Listing", description: { en: "Fathers, sons, brothers, kindred", ur: "باپ، بیٹے، بھائی، قبیلے" }, example: { en: "Comprehensive family relations subordinated to faith", ur: "تمام خاندانی رشتوں کو ایمان کے تابع کرنا" }, ayah: 22 },
      { name: "Attention Particle", description: { en: "أَلَا إِنَّ - 'Unquestionably indeed'", ur: "أَلَا إِنَّ - 'خبردار! بے شک'" }, example: { en: "Strong warning formula", ur: "سخت تنبیہ کا اسلوب" }, ayahs: [18, 19] }
    ]
  },

  scientificReferences: {
    notes: [
      {
        topic: { en: "Psychology of Privacy", ur: "خلوت کی نفسیات" },
        observation: { en: "The surah's warning that Allah is present in private conversations addresses the psychological tendency to behave differently when unobserved", ur: "سورت کی تنبیہ کہ اللہ نجی گفتگو میں حاضر ہے، اس نفسیاتی رجحان کو مخاطب کرتی ہے کہ انسان تنہائی میں مختلف رویہ اختیار کرتا ہے" },
        ayah: 7
      },
      {
        topic: { en: "Social Dynamics", ur: "معاشرتی حرکیات" },
        observation: { en: "Making room in gatherings (v.11) reflects understanding that physical space affects social relationships and dignity", ur: "مجلسوں میں جگہ دینا (آیت 11) اس سمجھ کی عکاسی کرتا ہے کہ جسمانی جگہ سماجی تعلقات اور عزت پر اثر ڈالتی ہے" },
        ayah: 11
      }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 65, name: "At-Talaq", relationship: { en: "Both address marriage regulations and women's rights", ur: "دونوں میں ازدواجی احکام اور خواتین کے حقوق کا ذکر ہے" }, type: "thematic_parallel" },
      { surah: 33, name: "Al-Ahzab", relationship: { en: "Both address zihar (v.4 of Al-Ahzab)", ur: "دونوں میں ظہار کا بیان ہے (الاحزاب آیت 4)" }, type: "thematic_parallel" },
      { surah: 63, name: "Al-Munafiqun", relationship: { en: "Both expose hypocrites' false oaths", ur: "دونوں منافقین کی جھوٹی قسموں کو بے نقاب کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 59, name: "Al-Hashr", relationship: { en: "Following surah, both address loyalty boundaries", ur: "اگلی سورت، دونوں وفاداری کی حدود بیان کرتی ہیں" }, type: "sequential_relationship" },
      { surah: 9, name: "At-Tawbah", relationship: { en: "Both discuss loyalty to Allah over family", ur: "دونوں میں خاندان پر اللہ سے وفاداری کا ذکر ہے" }, type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
