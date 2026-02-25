/**
 * Surah An-Najm (The Star) - Surah 53
 * Ontology of Quranic Concepts and Relationships
 */

export const ONTOLOGY = {
  surahId: 53,
  surahName: "An-Najm",
  surahNameArabic: "النجم",
  totalAyahs: 62,
  revelationType: "Makkan",
  mainTheme: { en: "The Prophet's Mi'raj Vision, Refutation of False Idols, Individual Accountability", ur: "نبی صلی اللہ علیہ وسلم کی معراج کی رؤیت، جھوٹے بتوں کی تردید، انفرادی جوابدہی" },

  categories: {
    starOath: {
      name: "The Star Oath",
      nameUr: "ستارے کی قسم",
      nameAr: "القسم بالنجم",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "An-Najm", arabic: "النجم", meaning: { en: "The Star when it descends", ur: "ستارہ جب غروب ہوتا ہے" }, explanation: { en: "Divine oath by the setting/descending star", ur: "ڈوبتے/اترتے ستارے کی الٰہی قسم" }, ayahs: [1] },
        { term: "Companion Not Astray", arabic: "ما ضل صاحبكم", meaning: { en: "Your companion has not strayed", ur: "تمہارا ساتھی نہ بھٹکا ہے" }, explanation: { en: "Defense of Prophet Muhammad's truthfulness", ur: "نبی محمد صلی اللہ علیہ وسلم کی سچائی کا دفاع" }, ayahs: [2] },
        { term: "Not Speaking from Desire", arabic: "وما ينطق عن الهوى", meaning: { en: "Nor does he speak from desire", ur: "اور نہ وہ خواہش سے بولتے ہیں" }, explanation: { en: "The Prophet's words are divinely guided", ur: "نبی صلی اللہ علیہ وسلم کے الفاظ الٰہی ہدایت سے ہیں" }, ayahs: [3] },
        { term: "Revelation Revealed", arabic: "وحي يوحى", meaning: { en: "It is only revelation revealed", ur: "یہ صرف وحی ہے جو نازل کی جاتی ہے" }, explanation: { en: "The Quran is pure divine revelation", ur: "قرآن خالص الٰہی وحی ہے" }, ayahs: [4] }
      ]
    },

    angelicTeacher: {
      name: "The Angelic Teacher",
      nameUr: "فرشتہ معلم",
      nameAr: "المعلم الملائكي",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Shadid al-Quwa", arabic: "شديد القوى", meaning: { en: "One mighty in power", ur: "زبردست طاقتوں والا" }, explanation: { en: "Jibreel described by his tremendous strength", ur: "جبرائیل علیہ السلام کی زبردست قوت کا بیان" }, ayahs: [5] },
        { term: "Dhu Mirrah", arabic: "ذو مرة", meaning: { en: "Possessor of soundness/vigor", ur: "حسن و توانائی والا" }, explanation: { en: "Jibreel's perfection and uprightness", ur: "جبرائیل کا کمال اور سیدھا پن" }, ayahs: [6] },
        { term: "Istawa", arabic: "استوى", meaning: { en: "He rose/appeared on the horizon", ur: "وہ افق پر ظاہر ہوا" }, explanation: { en: "Jibreel appeared in his original form", ur: "جبرائیل اپنی اصلی شکل میں ظاہر ہوئے" }, ayahs: [6, 7] },
        { term: "Bi al-Ufuq al-A'la", arabic: "بالأفق الأعلى", meaning: { en: "On the highest horizon", ur: "بلند ترین افق پر" }, explanation: { en: "First sighting of Jibreel in his true form", ur: "جبرائیل کو ان کی اصلی شکل میں پہلی بار دیکھنا" }, ayahs: [7] },
        { term: "Tadalla", arabic: "ثم دنا فتدلى", meaning: { en: "Then he drew near and descended", ur: "پھر وہ قریب آیا اور جھکا" }, explanation: { en: "Jibreel approached the Prophet", ur: "جبرائیل نبی صلی اللہ علیہ وسلم کے قریب آئے" }, ayahs: [8] },
        { term: "Qaba Qawsayn", arabic: "قاب قوسين", meaning: { en: "Distance of two bow lengths", ur: "دو کمانوں کے فاصلے پر" }, explanation: { en: "Extreme closeness - idiom for very near", ur: "انتہائی قربت - بہت نزدیک ہونے کا محاورہ" }, ayahs: [9] }
      ]
    },

    mirajVision: {
      name: "The Mi'raj Vision",
      nameUr: "معراج کی رؤیت",
      nameAr: "رؤية المعراج",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "Divine Revelation", arabic: "فأوحى إلى عبده ما أوحى", meaning: { en: "So He revealed to His servant what He revealed", ur: "تو اس نے اپنے بندے کو وحی کی جو وحی کی" }, explanation: { en: "Sacred communication during Mi'raj", ur: "معراج کے دوران مقدس مکالمہ" }, ayahs: [10] },
        { term: "Heart Did Not Lie", arabic: "ما كذب الفؤاد ما رأى", meaning: { en: "The heart did not lie about what it saw", ur: "دل نے جو دیکھا اس میں جھوٹ نہیں بولا" }, explanation: { en: "Prophet's vision was true and real", ur: "نبی صلی اللہ علیہ وسلم کی رؤیت سچی اور حقیقی تھی" }, ayahs: [11] },
        { term: "Will You Dispute?", arabic: "أفتمارونه على ما يرى", meaning: { en: "Will you dispute with him over what he saw?", ur: "کیا تم ان سے اس پر جھگڑتے ہو جو انہوں نے دیکھا؟" }, explanation: { en: "Challenge to those denying the vision", ur: "رؤیت کے منکرین کو چیلنج" }, ayahs: [12] },
        { term: "Second Sighting", arabic: "نزلة أخرى", meaning: { en: "Another descent/meeting", ur: "ایک اور نزول/ملاقات" }, explanation: { en: "The second encounter during Mi'raj", ur: "معراج کے دوران دوسری ملاقات" }, ayahs: [13] },
        { term: "Sidrat al-Muntaha", arabic: "سدرة المنتهى", meaning: { en: "The Lote Tree of the Utmost Boundary", ur: "سدرۃ المنتہیٰ - آخری حد کا بیری کا درخت" }, explanation: { en: "The furthest limit beyond which none can pass", ur: "وہ آخری حد جس سے آگے کوئی نہیں جا سکتا" }, ayahs: [14] },
        { term: "Jannat al-Ma'wa", arabic: "جنة المأوى", meaning: { en: "The Garden of Refuge", ur: "جنت الماویٰ - پناہ کی جنت" }, explanation: { en: "Paradise near the Lote Tree", ur: "سدرۃ المنتہیٰ کے قریب جنت" }, ayahs: [15] },
        { term: "Covering of the Lote Tree", arabic: "إذ يغشى السدرة ما يغشى", meaning: { en: "When there covered the Lote Tree that which covered it", ur: "جب سدرہ کو چھا لیا جس نے چھا لیا" }, explanation: { en: "Indescribable divine light/angels covering the tree", ur: "ناقابلِ بیان الٰہی نور/فرشتوں نے درخت کو ڈھانپ لیا" }, ayahs: [16] },
        { term: "Eye Did Not Deviate", arabic: "ما زاغ البصر وما طغى", meaning: { en: "The sight did not deviate nor transgress", ur: "نگاہ نہ ادھر گئی نہ حد سے بڑھی" }, explanation: { en: "Prophet's composure during the divine encounter", ur: "الٰہی ملاقات کے دوران نبی صلی اللہ علیہ وسلم کا سکون" }, ayahs: [17] },
        { term: "Greatest Signs", arabic: "الآيات الكبرى", meaning: { en: "The greatest of signs", ur: "بہت بڑی نشانیاں" }, explanation: { en: "What the Prophet witnessed of Allah's creation", ur: "نبی صلی اللہ علیہ وسلم نے اللہ کی تخلیق کا جو مشاہدہ کیا" }, ayahs: [18] }
      ]
    },

    falseIdolsRefuted: {
      name: "False Idols Refuted",
      nameUr: "جھوٹے بتوں کی تردید",
      nameAr: "إبطال الأصنام",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Al-Lat", arabic: "اللات", meaning: { en: "The idol Lat", ur: "بت لات" }, explanation: { en: "Chief goddess worshipped in Ta'if", ur: "طائف میں پوجی جانے والی مرکزی دیوی" }, ayahs: [19] },
        { term: "Al-Uzza", arabic: "العزى", meaning: { en: "The idol Uzza", ur: "بت عزیٰ" }, explanation: { en: "Goddess worshipped by Quraysh", ur: "قریش کی پوجی جانے والی دیوی" }, ayahs: [19] },
        { term: "Manat", arabic: "مناة", meaning: { en: "The idol Manat", ur: "بت مناۃ" }, explanation: { en: "Goddess of fate worshipped in Medina area", ur: "مدینہ کے علاقے میں پوجی جانے والی تقدیر کی دیوی" }, ayahs: [20] },
        { term: "Male vs Female", arabic: "الذكر والأنثى", meaning: { en: "Male offspring vs female", ur: "نر اولاد بمقابلہ مادہ" }, explanation: { en: "Hypocrisy: Arabs preferred sons but gave Allah 'daughters'", ur: "منافقت: عرب بیٹوں کو ترجیح دیتے مگر اللہ کو 'بیٹیاں' دیتے" }, ayahs: [21] },
        { term: "Unfair Division", arabic: "قسمة ضيزى", meaning: { en: "An unfair division", ur: "ظالمانہ تقسیم" }, explanation: { en: "Assigning unwanted female offspring to Allah", ur: "اللہ کو ناپسندیدہ مادہ اولاد منسوب کرنا" }, ayahs: [22] },
        { term: "Empty Names", arabic: "أسماء سميتموها", meaning: { en: "Names you and your fathers named", ur: "نام جو تم نے اور تمہارے باپ دادوں نے رکھے" }, explanation: { en: "Idols are just human inventions with no divine authority", ur: "بت صرف انسانی ایجاد ہیں جن میں کوئی الٰہی اختیار نہیں" }, ayahs: [23] },
        { term: "Following Conjecture", arabic: "الظن وما تهوى الأنفس", meaning: { en: "Following assumption and desires", ur: "گمان اور نفسانی خواہشات کی پیروی" }, explanation: { en: "Idol worship based on guesswork and whims", ur: "بت پرستی اٹکل اور من مانی پر مبنی ہے" }, ayahs: [23] }
      ]
    },

    divineAuthority: {
      name: "Divine Authority",
      nameUr: "الٰہی اختیار",
      nameAr: "السلطان الإلهي",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "To Allah Belongs", arabic: "لله ما في السماوات والأرض", meaning: { en: "To Allah belongs what is in heavens and earth", ur: "آسمانوں اور زمین میں جو کچھ ہے اللہ کا ہے" }, explanation: { en: "Complete divine ownership", ur: "مکمل الٰہی ملکیت" }, ayahs: [31] },
        { term: "Rewards Good", arabic: "يجزي الذين أساءوا... ويجزي الذين أحسنوا", meaning: { en: "He will recompense evil-doers and good-doers", ur: "وہ بدکاروں اور نیکوکاروں کو بدلہ دے گا" }, explanation: { en: "Divine justice in reward and punishment", ur: "ثواب اور سزا میں الٰہی عدل" }, ayahs: [31] },
        { term: "Avoiding Major Sins", arabic: "يجتنبون كبائر الإثم", meaning: { en: "Those who avoid major sins", ur: "جو بڑے گناہوں سے بچتے ہیں" }, explanation: { en: "Condition for Allah's forgiveness", ur: "اللہ کی مغفرت کی شرط" }, ayahs: [32] },
        { term: "Wide Forgiveness", arabic: "واسع المغفرة", meaning: { en: "Vast in forgiveness", ur: "وسیع مغفرت والا" }, explanation: { en: "Allah's mercy encompasses all", ur: "اللہ کی رحمت سب کو گھیرے ہوئے ہے" }, ayahs: [32] },
        { term: "Allah Knows Best", arabic: "هو أعلم بكم", meaning: { en: "He is most knowing of you", ur: "وہ تمہیں سب سے زیادہ جاننے والا ہے" }, explanation: { en: "Allah knew you from creation in womb", ur: "اللہ تمہیں ماں کے پیٹ سے تخلیق سے جانتا ہے" }, ayahs: [32] }
      ]
    },

    intercessionDenied: {
      name: "False Intercession Denied",
      nameUr: "باطل سفارش کی تردید",
      nameAr: "إبطال الشفاعة الباطلة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Angels Cannot Help", arabic: "لا تغني شفاعتهم شيئا", meaning: { en: "Their intercession avails nothing", ur: "ان کی سفارش کچھ کام نہیں آتی" }, explanation: { en: "Angels cannot intercede without Allah's permission", ur: "فرشتے اللہ کی اجازت کے بغیر سفارش نہیں کر سکتے" }, ayahs: [26] },
        { term: "Naming Angels Female", arabic: "يسمون الملائكة تسمية الأنثى", meaning: { en: "They name the angels female names", ur: "وہ فرشتوں کو مادہ نام دیتے ہیں" }, explanation: { en: "Polytheists falsely claimed angels were Allah's daughters", ur: "مشرکوں نے جھوٹا دعویٰ کیا کہ فرشتے اللہ کی بیٹیاں ہیں" }, ayahs: [27] },
        { term: "No Knowledge", arabic: "ما لهم به من علم", meaning: { en: "They have no knowledge of it", ur: "انہیں اس کا کوئی علم نہیں" }, explanation: { en: "Claims about angels based on ignorance", ur: "فرشتوں کے بارے میں دعوے جہالت پر مبنی ہیں" }, ayahs: [28] },
        { term: "Following Conjecture", arabic: "الظن لا يغني من الحق", meaning: { en: "Assumption avails nothing against truth", ur: "گمان حق کے مقابلے میں کچھ کام نہیں آتا" }, explanation: { en: "Guesswork cannot establish religious truth", ur: "اٹکل سے مذہبی حقیقت ثابت نہیں ہو سکتی" }, ayahs: [28] }
      ]
    },

    individualAccountability: {
      name: "Individual Accountability",
      nameUr: "انفرادی جوابدہی",
      nameAr: "المسؤولية الفردية",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Turn Away from Heedless", arabic: "فأعرض عمن تولى عن ذكرنا", meaning: { en: "Turn away from whoever turns from Our remembrance", ur: "اعراض کرو اس سے جو ہمارے ذکر سے منہ موڑے" }, explanation: { en: "Leave those who reject truth", ur: "سچائی کے منکرین کو چھوڑ دو" }, ayahs: [29] },
        { term: "Only Worldly Life", arabic: "إلا الحياة الدنيا", meaning: { en: "They only desire worldly life", ur: "وہ صرف دنیاوی زندگی چاہتے ہیں" }, explanation: { en: "Materialistic mindset of deniers", ur: "منکرین کی مادہ پرستانہ سوچ" }, ayahs: [29, 30] },
        { term: "Extent of Knowledge", arabic: "ذلك مبلغهم من العلم", meaning: { en: "That is their extent of knowledge", ur: "یہی ان کے علم کی حد ہے" }, explanation: { en: "Limited to worldly affairs only", ur: "صرف دنیاوی معاملات تک محدود" }, ayahs: [30] },
        { term: "No Bearer Bears Another's", arabic: "ألا تزر وازرة وزر أخرى", meaning: { en: "No bearer bears another's burden", ur: "کوئی بوجھ اٹھانے والا دوسرے کا بوجھ نہیں اٹھائے گا" }, explanation: { en: "Each person responsible only for their own sins", ur: "ہر شخص صرف اپنے گناہوں کا ذمہ دار ہے" }, ayahs: [38] },
        { term: "Only What You Strive For", arabic: "ليس للإنسان إلا ما سعى", meaning: { en: "Man gets only what he strives for", ur: "انسان کو وہی ملتا ہے جس کی وہ کوشش کرتا ہے" }, explanation: { en: "Reward based on personal effort", ur: "اجر ذاتی کوشش پر مبنی ہے" }, ayahs: [39] },
        { term: "Effort Will Be Seen", arabic: "وأن سعيه سوف يرى", meaning: { en: "And his effort will be seen", ur: "اور اس کی کوشش عنقریب دکھائی جائے گی" }, explanation: { en: "All deeds will be shown on Judgment Day", ur: "قیامت کے دن تمام اعمال دکھائے جائیں گے" }, ayahs: [40] },
        { term: "Full Recompense", arabic: "ثم يجزاه الجزاء الأوفى", meaning: { en: "Then he will be given the fullest recompense", ur: "پھر اسے پوری پوری جزا دی جائے گی" }, explanation: { en: "Complete justice in reward", ur: "اجر میں مکمل انصاف" }, ayahs: [41] }
      ]
    },

    scrollsOfIbrahim: {
      name: "Scrolls of Ibrahim and Musa",
      nameUr: "ابراہیم اور موسیٰ کے صحیفے",
      nameAr: "صحف إبراهيم وموسى",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Scriptures of Ibrahim", arabic: "صحف إبراهيم", meaning: { en: "The Scrolls of Ibrahim", ur: "ابراہیم علیہ السلام کے صحیفے" }, explanation: { en: "Earlier revelation to Prophet Ibrahim", ur: "حضرت ابراہیم علیہ السلام پر سابقہ وحی" }, ayahs: [36, 37] },
        { term: "Scriptures of Musa", arabic: "صحف موسى الذي وفى", meaning: { en: "Scrolls of Musa who fulfilled", ur: "موسیٰ علیہ السلام کے صحیفے جنہوں نے وفا کی" }, explanation: { en: "Musa completed his mission and covenant", ur: "موسیٰ علیہ السلام نے اپنا مشن اور عہد پورا کیا" }, ayahs: [36, 37] },
        { term: "No Bearer Bears Another", arabic: "ألا تزر وازرة وزر أخرى", meaning: { en: "That no bearer of burdens will bear another's burden", ur: "کوئی بوجھ اٹھانے والا دوسرے کا بوجھ نہ اٹھائے گا" }, explanation: { en: "Universal principle from earlier scriptures", ur: "پرانے صحیفوں سے آفاقی اصول" }, ayahs: [38] },
        { term: "Final Destination Allah", arabic: "وأن إلى ربك المنتهى", meaning: { en: "And to your Lord is the final destination", ur: "اور تیرے رب کی طرف آخری ٹھکانا ہے" }, explanation: { en: "All return to Allah", ur: "سب اللہ کی طرف لوٹیں گے" }, ayahs: [42] }
      ]
    },

    divineCreation: {
      name: "Divine Creation and Power",
      nameUr: "الٰہی تخلیق اور قدرت",
      nameAr: "الخلق والقدرة الإلهية",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Laughter and Weeping", arabic: "أضحك وأبكى", meaning: { en: "He causes laughter and weeping", ur: "وہی ہنساتا ہے اور وہی رلاتا ہے" }, explanation: { en: "Allah controls human emotions", ur: "اللہ انسانی جذبات پر قابو رکھتا ہے" }, ayahs: [43] },
        { term: "Death and Life", arabic: "أمات وأحيا", meaning: { en: "He causes death and gives life", ur: "وہی مارتا ہے اور وہی جلاتا ہے" }, explanation: { en: "Complete power over existence", ur: "وجود پر مکمل اختیار" }, ayahs: [44] },
        { term: "Male and Female Pairs", arabic: "الزوجين الذكر والأنثى", meaning: { en: "He created the two mates, male and female", ur: "اس نے دونوں جوڑے بنائے، نر اور مادہ" }, explanation: { en: "Allah created gender from a single drop", ur: "اللہ نے ایک بوند سے دونوں جنسیں بنائیں" }, ayahs: [45] },
        { term: "From a Drop", arabic: "من نطفة إذا تمنى", meaning: { en: "From a sperm drop when emitted", ur: "نطفے سے جب ٹپکایا جاتا ہے" }, explanation: { en: "Human creation from seminal fluid", ur: "منوی مادے سے انسانی تخلیق" }, ayahs: [46] },
        { term: "Second Creation", arabic: "النشأة الأخرى", meaning: { en: "The other creation (resurrection)", ur: "دوسری تخلیق (قیامت)" }, explanation: { en: "Allah will recreate for Judgment", ur: "اللہ حساب کے لیے دوبارہ پیدا کرے گا" }, ayahs: [47] },
        { term: "Enriches and Satisfies", arabic: "أغنى وأقنى", meaning: { en: "He enriches and contents", ur: "وہی غنی کرتا ہے اور قناعت دیتا ہے" }, explanation: { en: "Allah provides wealth and contentment", ur: "اللہ مال اور اطمینان دونوں دیتا ہے" }, ayahs: [48] },
        { term: "Lord of Sirius", arabic: "رب الشعرى", meaning: { en: "Lord of Sirius (the star)", ur: "شعریٰ (ستارے) کا رب" }, explanation: { en: "Allah owns even the star they worshipped", ur: "اللہ اس ستارے کا بھی مالک ہے جس کی وہ عبادت کرتے تھے" }, ayahs: [49] }
      ]
    },

    destroyedNations: {
      name: "Destroyed Nations",
      nameUr: "ہلاک شدہ اقوام",
      nameAr: "الأمم المهلكة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Aad Destroyed", arabic: "عادا الأولى", meaning: { en: "The former Aad", ur: "پہلے عاد" }, explanation: { en: "Ancient people destroyed for rejecting Hud", ur: "قدیم قوم جو ہود علیہ السلام کو رد کرنے پر ہلاک ہوئی" }, ayahs: [50] },
        { term: "Thamud Spared None", arabic: "وثمود فما أبقى", meaning: { en: "And Thamud - He spared none", ur: "اور ثمود - کسی کو نہیں چھوڑا" }, explanation: { en: "Complete destruction for rejecting Salih", ur: "صالح علیہ السلام کو رد کرنے پر مکمل تباہی" }, ayahs: [51] },
        { term: "People of Nuh", arabic: "قوم نوح", meaning: { en: "People of Noah", ur: "نوح علیہ السلام کی قوم" }, explanation: { en: "Destroyed by flood for rejecting Nuh", ur: "نوح علیہ السلام کو رد کرنے پر طوفان سے ہلاک" }, ayahs: [52] },
        { term: "Overturned Cities", arabic: "والمؤتفكة أهوى", meaning: { en: "The overturned cities He hurled down", ur: "الٹی ہوئی بستیوں کو اس نے گرا دیا" }, explanation: { en: "Cities of Lut's people destroyed", ur: "لوط علیہ السلام کی قوم کی بستیاں تباہ ہوئیں" }, ayahs: [53] },
        { term: "What Covered Them", arabic: "فغشاها ما غشى", meaning: { en: "And covered them with what covered", ur: "پھر ان پر چھا گیا جو چھا گیا" }, explanation: { en: "Stones and destruction upon Lut's people", ur: "لوط کی قوم پر پتھر اور تباہی" }, ayahs: [54] }
      ]
    },

    warningAndClosing: {
      name: "Final Warning",
      nameUr: "آخری تنبیہ",
      nameAr: "التحذير الختامي",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Which Favor Doubted?", arabic: "فبأي آلاء ربك تتمارى", meaning: { en: "Then which of your Lord's favors do you doubt?", ur: "تو تم اپنے رب کی کون سی نعمت میں شک کرتے ہو؟" }, explanation: { en: "Challenge similar to Ar-Rahman", ur: "سورة الرحمن جیسا چیلنج" }, ayahs: [55] },
        { term: "Warner from Ancient Warners", arabic: "هذا نذير من النذر الأولى", meaning: { en: "This is a warner of the former warners", ur: "یہ پہلے ڈرانے والوں میں سے ایک ڈرانے والا ہے" }, explanation: { en: "Prophet in the chain of messengers", ur: "نبی رسولوں کے سلسلے میں" }, ayahs: [56] },
        { term: "Approaching Hour", arabic: "أزفت الآزفة", meaning: { en: "The Approaching Day has approached", ur: "قریب آنے والی (قیامت) قریب آ گئی" }, explanation: { en: "Day of Judgment draws near", ur: "قیامت کا دن قریب آ رہا ہے" }, ayahs: [57] },
        { term: "No Remover But Allah", arabic: "ليس لها من دون الله كاشفة", meaning: { en: "None besides Allah can avert it", ur: "اللہ کے سوا کوئی اسے ٹال نہیں سکتا" }, explanation: { en: "Only Allah controls the Hour", ur: "صرف اللہ قیامت پر قابو رکھتا ہے" }, ayahs: [58] },
        { term: "Wonder at This Discourse?", arabic: "أفمن هذا الحديث تعجبون", meaning: { en: "Do you wonder at this statement?", ur: "کیا تم اس بات پر تعجب کرتے ہو؟" }, explanation: { en: "Rebuke for those who mock the Quran", ur: "قرآن کا مذاق اڑانے والوں کی سرزنش" }, ayahs: [59] },
        { term: "Laugh Instead of Weep", arabic: "وتضحكون ولا تبكون", meaning: { en: "And you laugh and do not weep", ur: "اور تم ہنستے ہو اور روتے نہیں" }, explanation: { en: "Inappropriate response to divine warning", ur: "الٰہی تنبیہ پر نامناسب ردعمل" }, ayahs: [60, 61] },
        { term: "Prostrate to Allah", arabic: "فاسجدوا لله واعبدوا", meaning: { en: "So prostrate to Allah and worship", ur: "پس اللہ کو سجدہ کرو اور عبادت کرو" }, explanation: { en: "Command ending with sajdah tilawah", ur: "سجدہ تلاوت پر ختم ہونے والا حکم" }, ayahs: [62] }
      ]
    }
  },

  relationships: [
    { from: "Star Oath", to: "Prophet's Truthfulness", type: "evidence", description: { en: "Star descent parallels revelation descent, validating the Prophet", ur: "ستارے کا اترنا وحی کے نزول کی مثال ہے، نبی کی تصدیق" } },
    { from: "Jibreel's Form", to: "Mi'raj Vision", type: "connection", description: { en: "Same angel who appeared twice during the night journey", ur: "وہی فرشتہ جو شبِ معراج دو بار ظاہر ہوا" } },
    { from: "Sidrat al-Muntaha", to: "Divine Boundary", type: "symbol", description: { en: "Represents limit of creation, boundary to divine presence", ur: "مخلوق کی حد اور الٰہی حضوری کی سرحد کی علامت" } },
    { from: "False Idols", to: "Empty Names", type: "refutation", description: { en: "Lat, Uzza, Manat are human inventions with no authority", ur: "لات، عزیٰ، مناۃ انسانی ایجاد ہیں جن میں کوئی اختیار نہیں" } },
    { from: "Angel Worship", to: "Conjecture", type: "basis", description: { en: "Claims about angels based on ignorance, not knowledge", ur: "فرشتوں کے بارے میں دعوے جہالت پر مبنی ہیں، علم پر نہیں" } },
    { from: "Individual Burden", to: "Scrolls of Ibrahim", type: "source", description: { en: "Accountability principle from earliest scriptures", ur: "جوابدہی کا اصول قدیم ترین صحیفوں سے ہے" } },
    { from: "Personal Effort", to: "Full Recompense", type: "consequence", description: { en: "What you strive for determines what you receive", ur: "جس چیز کی تم کوشش کرتے ہو وہی تمہیں ملتی ہے" } },
    { from: "Divine Creation", to: "Resurrection Proof", type: "evidence", description: { en: "He who creates from a drop can recreate", ur: "جو ایک بوند سے بناتا ہے وہ دوبارہ بنا سکتا ہے" } },
    { from: "Destroyed Nations", to: "Warning to Quraysh", type: "parallel", description: { en: "Same fate awaits those who reject this messenger", ur: "اس رسول کو رد کرنے والوں کا بھی وہی انجام ہو گا" } },
    { from: "Sirius Worship", to: "Divine Ownership", type: "refutation", description: { en: "Even the star they worship belongs to Allah", ur: "جس ستارے کی وہ عبادت کرتے ہیں وہ بھی اللہ کا ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Divine Vision to Individual Reckoning", ur: "الٰہی رؤیت سے انفرادی حساب تک" },
    stages: [
      { name: "The Star Oath", ayahs: [1, 2, 3, 4], description: { en: "Oath by star, validating Prophet's truthfulness", ur: "ستارے کی قسم، نبی کی سچائی کی تصدیق" } },
      { name: "Angelic Teacher", ayahs: [5, 6, 7, 8, 9, 10], description: { en: "Jibreel teaching the Prophet", ur: "جبرائیل کا نبی کو سکھانا" } },
      { name: "Mi'raj Vision", ayahs: [11, 12, 13, 14, 15, 16, 17, 18], description: { en: "The Prophet's ascension and what he witnessed", ur: "نبی صلی اللہ علیہ وسلم کا معراج اور جو انہوں نے مشاہدہ کیا" } },
      { name: "Idols Refuted", ayahs: [19, 20, 21, 22, 23], description: { en: "Lat, Uzza, Manat are empty names", ur: "لات، عزیٰ، مناۃ خالی نام ہیں" } },
      { name: "False Intercession", ayahs: [24, 25, 26, 27, 28], description: { en: "Angels cannot help without Allah's permission", ur: "فرشتے اللہ کی اجازت کے بغیر مدد نہیں کر سکتے" } },
      { name: "Turn from Heedless", ayahs: [29, 30], description: { en: "Leave those who desire only worldly life", ur: "ان سے اعراض کرو جو صرف دنیا چاہتے ہیں" } },
      { name: "Divine Justice", ayahs: [31, 32], description: { en: "Allah rewards good and evil accordingly", ur: "اللہ نیکی اور برائی کا بدلہ دیتا ہے" } },
      { name: "Self-Purification Warning", ayahs: [33, 34, 35], description: { en: "Don't claim self-purity; Allah knows best", ur: "اپنی پاکیزگی کا دعویٰ نہ کرو؛ اللہ سب سے زیادہ جانتا ہے" } },
      { name: "Scrolls Teaching", ayahs: [36, 37, 38, 39, 40, 41, 42], description: { en: "Individual accountability from Ibrahim and Musa", ur: "ابراہیم اور موسیٰ سے انفرادی جوابدہی" } },
      { name: "Divine Power", ayahs: [43, 44, 45, 46, 47, 48, 49], description: { en: "Allah's control over all aspects of existence", ur: "وجود کے ہر پہلو پر اللہ کا اختیار" } },
      { name: "Destroyed Nations", ayahs: [50, 51, 52, 53, 54, 55], description: { en: "Aad, Thamud, Nuh's people, Lut's cities", ur: "عاد، ثمود، نوح کی قوم، لوط کی بستیاں" } },
      { name: "Final Warning", ayahs: [56, 57, 58, 59, 60, 61, 62], description: { en: "Hour approaches, prostrate and worship", ur: "قیامت قریب ہے، سجدہ کرو اور عبادت کرو" } }
    ]
  },

  uniqueInsight: {
    title: { en: "Qaba Qawsayn - The Ultimate Nearness", ur: "قاب قوسین - انتہائی قربت" },
    insight: { en: "Verse 9 describes Jibreel (or according to some, the Prophet approaching Allah) as being 'at a distance of two bow lengths or nearer.' This Arabic idiom (قَابَ قَوْسَيْنِ) expresses extreme closeness—when two archers stand back-to-back, their bows span a very small distance. The phrase 'or nearer' (أَوْ أَدْنَى) pushes beyond measurable distance into the ineffable. This moment during Mi'raj represents the closest any created being has approached the divine presence. The surah places this intimate divine encounter in stark contrast with the pathetic idols—Lat, Uzza, Manat—which are 'nothing but names' (v.23). The message: while your Prophet witnessed the highest horizons and greatest signs, you worship stones that cannot even hear. The first sajdah tilawah (prostration of recitation) ever performed was when this surah was revealed—even the Quraysh prostrated upon hearing it, overwhelmed by its power.", ur: "آیت 9 میں جبرائیل (یا بعض کے مطابق نبی صلی اللہ علیہ وسلم کا اللہ سے قرب) کو 'دو کمانوں کے فاصلے یا اس سے بھی قریب' بتایا گیا۔ یہ عربی محاورہ (قَابَ قَوْسَيْنِ) انتہائی قربت کا اظہار ہے - جب دو تیرانداز پیٹھ سے پیٹھ ملا کر کھڑے ہوں تو ان کی کمانیں بہت کم فاصلے پر ہوتی ہیں۔ 'یا اس سے بھی قریب' (أَوْ أَدْنَى) ناقابلِ پیمائش فاصلے سے بھی آگے لے جاتا ہے۔ معراج کا یہ لمحہ کسی بھی مخلوق کی الٰہی حضور تک سب سے زیادہ قربت کی نمائندگی کرتا ہے۔ سورة اس مقدس الٰہی ملاقات کو لات، عزیٰ، مناۃ جیسے بے بس بتوں کے مقابلے میں رکھتی ہے۔ پیغام یہ ہے: تمہارے نبی نے بلند ترین افق اور عظیم ترین نشانیاں دیکھیں، جبکہ تم ان پتھروں کی پوجا کرتے ہو جو سن بھی نہیں سکتے۔" },
    arabicTerm: "فَكَانَ قَابَ قَوْسَيْنِ أَوْ أَدْنَىٰ",
    rootMeaning: { en: "ق-و-س (bow) and د-ن-و (nearness) - intimacy beyond measurement", ur: "ق-و-س (کمان) اور د-ن-و (قربت) - پیمائش سے پرے قربت" },
    keyAyah: 9
  },

  historicalContext: {
    revelationPeriod: "Middle Makkan period",
    occasion: { en: "Revealed after the Mi'raj (Night Journey) to affirm the Prophet's vision. When recited publicly, its power was so overwhelming that both believers and disbelievers prostrated at its conclusion—the first collective sajdah in Islam. The Quraysh later claimed they were 'bewitched' to excuse their prostration.", ur: "معراج (شبِ سفر) کے بعد نبی صلی اللہ علیہ وسلم کی رؤیت کی تصدیق کے لیے نازل ہوئی۔ جب علانیہ تلاوت ہوئی تو اس کی طاقت اتنی زبردست تھی کہ مومن اور کافر دونوں نے اختتام پر سجدہ کیا - اسلام کا پہلا اجتماعی سجدہ۔ قریش نے بعد میں دعویٰ کیا کہ ان پر 'جادو' ہو گیا تھا۔" },
    note: { en: "This is the first surah to have a sajdah tilawah (verse 62). The idol names mentioned—Lat, Uzza, and Manat—were the chief goddesses of pre-Islamic Arabia. The Arabs claimed these were Allah's 'daughters' while preferring sons themselves. The surah demolishes this hypocrisy while establishing the principle that no one bears another's sins—a revolutionary concept against the Arab tribal mentality where family honor and shame were collective.", ur: "یہ پہلی سورة ہے جس میں سجدہ تلاوت ہے (آیت 62)۔ ذکر کیے گئے بتوں کے نام - لات، عزیٰ اور مناۃ - قبل از اسلام عرب کی مرکزی دیویاں تھیں۔ عرب دعویٰ کرتے تھے کہ یہ اللہ کی 'بیٹیاں' ہیں جبکہ خود بیٹوں کو ترجیح دیتے تھے۔ سورة اس منافقت کو مسمار کرتی ہے اور یہ اصول قائم کرتی ہے کہ کوئی دوسرے کے گناہ نہیں اٹھائے گا۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Star Oath", description: "وَالنَّجْمِ إِذَا هَوَىٰ", example: { en: "Cosmic oath establishing divine source", ur: "الٰہی ماخذ قائم کرتی کائناتی قسم" }, ayah: 1 },
      { name: "Vision Verbs", description: "رَأَىٰ / زَاغَ / طَغَىٰ", example: { en: "Precise description of Prophet's controlled observation", ur: "نبی صلی اللہ علیہ وسلم کے مضبوط مشاہدے کا درست بیان" }, ayahs: [11, 17, 18] },
      { name: "Idiomatic Distance", description: "قَابَ قَوْسَيْنِ", example: { en: "Two bow-lengths expressing extreme closeness", ur: "دو کمانوں کا فاصلہ انتہائی قربت ظاہر کرتا ہے" }, ayah: 9 },
      { name: "Rhetorical Questions", description: "أَفَرَأَيْتُمُ / أَفَمِنْ هَـٰذَا", example: { en: "Challenge to reflect on idols and revelation", ur: "بتوں اور وحی پر غور کرنے کا چیلنج" }, ayahs: [19, 59] },
      { name: "Paired Opposites", description: "أَضْحَكَ وَأَبْكَىٰ / أَمَاتَ وَأَحْيَا", example: { en: "Allah's complete control over contrasts", ur: "متضاد چیزوں پر اللہ کا مکمل اختیار" }, ayahs: [43, 44] },
      { name: "Sajdah Command", description: "فَاسْجُدُوا لِلَّهِ وَاعْبُدُوا", example: { en: "Imperative ending requiring prostration", ur: "سجدہ تلاوت پر ختم ہونے والا حکم" }, ayah: 62 }
    ]
  },

  theologicalConcepts: {
    concepts: [
      { concept: "Wahy (Revelation)", description: { en: "The Quran is not human speech but divine revelation (v.4)", ur: "قرآن انسانی کلام نہیں بلکہ الٰہی وحی ہے (آیت 4)" }, significance: { en: "Establishes Quran's divine origin", ur: "قرآن کی الٰہی اصل ثابت کرتا ہے" } },
      { concept: "Isra and Mi'raj", description: { en: "Prophet's night journey to heavens and vision of greatest signs", ur: "نبی صلی اللہ علیہ وسلم کا آسمانوں تک شبِ سفر اور عظیم ترین نشانیوں کا مشاہدہ" }, significance: { en: "Affirms Prophet's special status", ur: "نبی کا خاص مقام ثابت کرتا ہے" } },
      { concept: "Tawhid", description: { en: "Refutation of all partners ascribed to Allah—idols, angels as daughters", ur: "اللہ کے ساتھ ٹھہرائے تمام شریکوں کی تردید - بت، فرشتے بطور بیٹیاں" }, significance: { en: "Pure monotheism", ur: "خالص توحید" } },
      { concept: "Individual Accountability", description: { en: "No soul bears another's burden (v.38)", ur: "کوئی جان دوسرے کا بوجھ نہیں اٹھائے گی (آیت 38)" }, significance: { en: "Personal responsibility in Islam", ur: "اسلام میں ذاتی ذمہ داری" } },
      { concept: "Resurrection", description: { en: "Allah who creates once will create again (v.47)", ur: "جو اللہ ایک بار پیدا کرتا ہے وہ دوبارہ پیدا کرے گا (آیت 47)" }, significance: { en: "Proof of afterlife", ur: "آخرت کا ثبوت" } }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 17, name: "Al-Isra", relationship: { en: "Both describe aspects of the Night Journey", ur: "دونوں شبِ معراج کے پہلوؤں کا بیان کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 81, name: "At-Takwir", relationship: { en: "Both mention Jibreel on the horizon (81:23)", ur: "دونوں جبرائیل کے افق پر ظاہر ہونے کا ذکر کرتی ہیں (81:23)" }, type: "thematic_parallel" },
      { surah: 55, name: "Ar-Rahman", relationship: { en: "Similar question 'which favor do you doubt?' (53:55)", ur: "اسی طرح کا سوال 'کون سی نعمت میں شک کرتے ہو؟' (53:55)" }, type: "linguistic_parallel" },
      { surah: 54, name: "Al-Qamar", relationship: { en: "Both mention destroyed nations; sequential surahs", ur: "دونوں ہلاک شدہ قوموں کا ذکر کرتی ہیں؛ یکے بعد دیگرے سورتیں" }, type: "sequential_relationship" },
      { surah: 86, name: "At-Tariq", relationship: { en: "Both use star oaths to introduce cosmic themes", ur: "دونوں کائناتی موضوعات متعارف کرانے کے لیے ستاروں کی قسم استعمال کرتی ہیں" }, type: "thematic_parallel" },
      { surah: 87, name: "Al-A'la", relationship: { en: "Both mention scrolls of Ibrahim (87:19)", ur: "دونوں ابراہیم کے صحیفوں کا ذکر کرتی ہیں (87:19)" }, type: "thematic_parallel" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Trust the Prophet", ur: "نبی پر بھروسہ رکھو" }, how: { en: "He spoke only revelation, not desire", ur: "وہ صرف وحی بولتے تھے، خواہش نہیں" }, verse: "53:3-4" },
      { principle: { en: "Reject false intermediaries", ur: "جھوٹے واسطوں کو رد کرو" }, how: { en: "No idol or angel can intercede without Allah's will", ur: "کوئی بت یا فرشتہ اللہ کی مرضی کے بغیر سفارش نہیں کر سکتا" }, verse: "53:26" },
      { principle: { en: "Bear your own burden", ur: "اپنا بوجھ خود اٹھاؤ" }, how: { en: "Focus on personal accountability, not others' sins", ur: "ذاتی جوابدہی پر توجہ دو، دوسروں کے گناہوں پر نہیں" }, verse: "53:38" },
      { principle: { en: "Strive for your reward", ur: "اپنے اجر کے لیے محنت کرو" }, how: { en: "Only your effort counts; others' deeds won't help you", ur: "صرف تمہاری محنت شمار ہو گی؛ دوسروں کے اعمال تمہارے کام نہیں آئیں گے" }, verse: "53:39" },
      { principle: { en: "Weep, don't laugh", ur: "روؤ، ہنسو نہیں" }, how: { en: "Take divine warnings seriously", ur: "الٰہی تنبیہات کو سنجیدگی سے لو" }, verse: "53:60-61" },
      { principle: { en: "Prostrate and worship", ur: "سجدہ کرو اور عبادت کرو" }, how: { en: "Humble yourself before Allah alone", ur: "صرف اللہ کے سامنے عاجزی کرو" }, verse: "53:62" }
    ]
  }
};

export default ONTOLOGY;
