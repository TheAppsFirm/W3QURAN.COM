/**
 * Surah At-Tahrim (66) - Ontology of Quranic Concepts
 * The Prohibition
 * Theme: Household matters of Prophet, repentance, examples of righteous/wicked women
 */

export const ONTOLOGY = {
  surahId: 66,
  surahName: "At-Tahrim",
  surahNameArabic: "التحريم",
  revelationType: "Madani",
  totalAyahs: 12,

  categories: {
    propheticHousehold: {
      name: "Prophet's Household Matter",
      nameArabic: "شأن بيت النبي",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "لِمَ تُحَرِّمُ مَا أَحَلَّ اللَّهُ لَكَ", meaning: { en: "Why do you prohibit what Allah made lawful?", ur: "آپ کیوں حرام کرتے ہیں جو Allah نے حلال کیا ہے؟" }, explanation: { en: "Prophet made something lawful upon himself forbidden to please wives", ur: "نبی ﷺ نے بیویوں کی خوشنودی کے لیے حلال چیز خود پر حرام کی" }, verseRef: "66:1" },
        { term: "تَبْتَغِي مَرْضَاتَ أَزْوَاجِكَ", meaning: { en: "Seeking approval of your wives", ur: "اپنی بیویوں کی خوشنودی چاہتے ہیں" }, explanation: { en: "Gentleness toward wives - but not at cost of divine law", ur: "بیویوں سے نرمی - مگر شریعت کی قیمت پر نہیں" }, verseRef: "66:1" },
        { term: "تَحِلَّةَ أَيْمَانِكُمْ", meaning: { en: "Dissolution of your oaths", ur: "اپنی قسموں کا کفارہ" }, explanation: { en: "Allah provides way to undo oaths (kaffārah)", ur: "Allah نے قسموں کا توڑ فراہم کیا ہے (کفارہ)" }, verseRef: "66:2" }
      ]
    },

    secretRevealed: {
      name: "Secret Revealed",
      nameArabic: "كشف السر",
      color: '#F59E0B',
      icon: 'Eye',
      concepts: [
        { term: "أَسَرَّ النَّبِيُّ إِلَىٰ بَعْضِ أَزْوَاجِهِ حَدِيثًا", meaning: { en: "Prophet confided to one of his wives", ur: "نبی ﷺ نے اپنی ایک بیوی سے رازداری سے بات کی" }, explanation: { en: "Private conversation between spouses", ur: "میاں بیوی کے درمیان نجی بات" }, verseRef: "66:3" },
        { term: "فَلَمَّا نَبَّأَتْ بِهِ", meaning: { en: "When she informed about it", ur: "جب اس نے یہ بات بتا دی" }, explanation: { en: "Breaking confidence is serious", ur: "رازداری توڑنا سنگین معاملہ ہے" }, verseRef: "66:3" },
        { term: "وَأَظْهَرَهُ اللَّهُ عَلَيْهِ", meaning: { en: "Allah informed him of it", ur: "Allah نے نبی ﷺ کو اس کی خبر دی" }, explanation: { en: "Allah revealed betrayal to Prophet", ur: "Allah نے نبی ﷺ کو خیانت سے آگاہ کیا" }, verseRef: "66:3" },
        { term: "عَرَّفَ بَعْضَهُ وَأَعْرَضَ عَن بَعْضٍ", meaning: { en: "He mentioned part and overlooked part", ur: "کچھ بتایا اور کچھ سے درگزر کیا" }, explanation: { en: "Prophet's mercy - didn't expose fully", ur: "نبی ﷺ کی رحمدلی - پوری طرح ظاہر نہ کیا" }, verseRef: "66:3" },
        { term: "نَبَّأَنِيَ الْعَلِيمُ الْخَبِيرُ", meaning: { en: "The All-Knowing, All-Aware informed me", ur: "مجھے علیم خبیر نے خبر دی" }, explanation: { en: "Source was divine revelation", ur: "ذریعہ وحیِ الٰہی تھا" }, verseRef: "66:3" }
      ]
    },

    callToRepentance: {
      name: "Call to Repentance",
      nameArabic: "الدعوة إلى التوبة",
      color: '#8B5CF6',
      icon: 'Heart',
      concepts: [
        { term: "إِن تَتُوبَا إِلَى اللَّهِ", meaning: { en: "If you both repent to Allah", ur: "اگر تم دونوں Allah سے توبہ کرو" }, explanation: { en: "Addressed to Hafsa and Aisha", ur: "حفصہ اور عائشہ رضی اللہ عنہما سے خطاب" }, verseRef: "66:4" },
        { term: "فَقَدْ صَغَتْ قُلُوبُكُمَا", meaning: { en: "Your hearts have inclined", ur: "تمہارے دل ٹیڑھے ہو چکے ہیں" }, explanation: { en: "Hearts deviated from what's right", ur: "دل حق سے ہٹ گئے" }, verseRef: "66:4" },
        { term: "وَإِن تَظَاهَرَا عَلَيْهِ", meaning: { en: "If you cooperate against him", ur: "اگر تم دونوں ان کے خلاف مل جاؤ" }, explanation: { en: "Warning against conspiring", ur: "سازش کی تنبیہ" }, verseRef: "66:4" },
        { term: "اللَّهَ هُوَ مَوْلَاهُ وَجِبْرِيلُ", meaning: { en: "Allah is his protector, and Gabriel", ur: "Allah ان کا حامی ہے، اور جبریل" }, explanation: { en: "Prophet has divine support", ur: "نبی ﷺ کو الٰہی تائید حاصل ہے" }, verseRef: "66:4" }
      ]
    },

    idealWifeQualities: {
      name: "Qualities of Ideal Wives",
      nameArabic: "صفات الزوجات المثاليات",
      color: '#10B981',
      icon: 'Sparkles',
      concepts: [
        { term: "مُسْلِمَاتٍ", meaning: { en: "Muslim women", ur: "مسلمان عورتیں" }, explanation: { en: "Submitted to Allah", ur: "Allah کے حکم کے سامنے سرِ تسلیم خم" }, verseRef: "66:5" },
        { term: "مُّؤْمِنَاتٍ", meaning: { en: "Believing women", ur: "ایمان والی عورتیں" }, explanation: { en: "Strong in faith", ur: "مضبوط ایمان والی" }, verseRef: "66:5" },
        { term: "قَانِتَاتٍ", meaning: { en: "Devoutly obedient", ur: "فرمانبردار" }, explanation: { en: "Humble and devout", ur: "عاجزانہ اور عبادت گزار" }, verseRef: "66:5" },
        { term: "تَائِبَاتٍ", meaning: { en: "Repentant", ur: "توبہ کرنے والی" }, explanation: { en: "Quick to repent", ur: "جلد توبہ کرنے والی" }, verseRef: "66:5" },
        { term: "عَابِدَاتٍ", meaning: { en: "Worshipping", ur: "عبادت گزار" }, explanation: { en: "Dedicated to worship", ur: "عبادت میں مصروف" }, verseRef: "66:5" },
        { term: "سَائِحَاتٍ", meaning: { en: "Fasting/traveling", ur: "روزہ دار/سفر کرنے والی" }, explanation: { en: "Fasting or striving for Allah", ur: "روزہ رکھنے والی یا Allah کی راہ میں کوشاں" }, verseRef: "66:5" },
        { term: "ثَيِّبَاتٍ وَأَبْكَارًا", meaning: { en: "Previously married and virgins", ur: "شوہر دیدہ اور کنواری" }, explanation: { en: "Both types acceptable", ur: "دونوں قسمیں قابلِ قبول" }, verseRef: "66:5" }
      ]
    },

    familyProtection: {
      name: "Family Protection from Fire",
      nameArabic: "حماية الأسرة من النار",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا", meaning: { en: "Protect yourselves and families from Fire", ur: "اپنے آپ کو اور اپنے اہل و عیال کو آگ سے بچاؤ" }, explanation: { en: "Family head's responsibility", ur: "سربراہِ خاندان کی ذمہ داری" }, verseRef: "66:6" },
        { term: "وَقُودُهَا النَّاسُ وَالْحِجَارَةُ", meaning: { en: "Fuel is people and stones", ur: "اس کا ایندھن انسان اور پتھر ہیں" }, explanation: { en: "Terrifying description of Hell", ur: "جہنم کی خوفناک تصویر" }, verseRef: "66:6" },
        { term: "مَلَائِكَةٌ غِلَاظٌ شِدَادٌ", meaning: { en: "Angels harsh and severe", ur: "سخت مزاج اور تند خو فرشتے" }, explanation: { en: "Hell's guardians are merciless", ur: "جہنم کے نگہبان بے رحم ہیں" }, verseRef: "66:6" },
        { term: "لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ", meaning: { en: "They never disobey Allah", ur: "وہ Allah کی نافرمانی نہیں کرتے" }, explanation: { en: "Angels' perfect obedience", ur: "فرشتوں کی مکمل اطاعت" }, verseRef: "66:6" }
      ]
    },

    noExcuses: {
      name: "No Excuses Accepted",
      nameArabic: "لا أعذار مقبولة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَا تَعْتَذِرُوا الْيَوْمَ", meaning: { en: "Do not make excuses today", ur: "آج بہانے مت بناؤ" }, explanation: { en: "Day of Judgment - no excuses help", ur: "قیامت کا دن - کوئی بہانہ کام نہ آئے" }, verseRef: "66:7" },
        { term: "تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ", meaning: { en: "You are recompensed for what you did", ur: "تمہیں وہی بدلہ ملے گا جو تم کرتے تھے" }, explanation: { en: "Just reward for actions", ur: "اعمال کا منصفانہ بدلہ" }, verseRef: "66:7" }
      ]
    },

    sincereRepentance: {
      name: "Sincere Repentance",
      nameArabic: "التوبة النصوح",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "تَوْبَةً نَّصُوحًا", meaning: { en: "Sincere repentance", ur: "سچی توبہ" }, explanation: { en: "Complete, honest, irreversible repentance", ur: "مکمل، سچی، ناقابلِ واپسی توبہ" }, verseRef: "66:8" },
        { term: "يُكَفِّرَ عَنكُمْ سَيِّئَاتِكُمْ", meaning: { en: "Remove from you your misdeeds", ur: "تمہاری برائیاں دور کر دے" }, explanation: { en: "Sincere repentance erases sins", ur: "سچی توبہ گناہوں کو مٹا دیتی ہے" }, verseRef: "66:8" },
        { term: "جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", meaning: { en: "Gardens beneath which rivers flow", ur: "جنتیں جن کے نیچے نہریں بہتی ہیں" }, explanation: { en: "Reward for repentant believers", ur: "توبہ کرنے والے مومنوں کا اجر" }, verseRef: "66:8" },
        { term: "نُورُهُمْ يَسْعَىٰ بَيْنَ أَيْدِيهِمْ", meaning: { en: "Light will proceed before them", ur: "ان کا نور ان کے آگے دوڑے گا" }, explanation: { en: "Believers' light on Day of Judgment", ur: "قیامت کے دن مومنوں کا نور" }, verseRef: "66:8" },
        { term: "أَتْمِمْ لَنَا نُورَنَا", meaning: { en: "Perfect for us our light", ur: "ہمارا نور ہمارے لیے مکمل کر دے" }, explanation: { en: "Prayer for complete guidance", ur: "مکمل ہدایت کی دعا" }, verseRef: "66:8" }
      ]
    },

    striving: {
      name: "Striving Against Disbelief",
      nameArabic: "الجهاد ضد الكفر",
      color: '#3B82F6',
      icon: 'Shield',
      concepts: [
        { term: "جَاهِدِ الْكُفَّارَ وَالْمُنَافِقِينَ", meaning: { en: "Strive against disbelievers and hypocrites", ur: "کافروں اور منافقوں سے جہاد کرو" }, explanation: { en: "Jihad includes verbal/intellectual struggle", ur: "جہاد میں زبانی/علمی جدوجہد بھی شامل ہے" }, verseRef: "66:9" },
        { term: "وَاغْلُظْ عَلَيْهِمْ", meaning: { en: "Be harsh with them", ur: "ان پر سختی کرو" }, explanation: { en: "Firm stance against enemies of Islam", ur: "دشمنانِ اسلام کے خلاف سخت موقف" }, verseRef: "66:9" },
        { term: "مَأْوَاهُمْ جَهَنَّمُ", meaning: { en: "Their refuge is Hell", ur: "ان کا ٹھکانا جہنم ہے" }, explanation: { en: "Final destination of rejecters", ur: "منکروں کی آخری منزل" }, verseRef: "66:9" }
      ]
    },

    wickedWomenExamples: {
      name: "Examples of Wicked Women",
      nameArabic: "أمثلة النساء الكافرات",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "امْرَأَتَ نُوحٍ", meaning: { en: "Wife of Noah", ur: "نوح علیہ السلام کی بیوی" }, explanation: { en: "Disbelieved despite prophet husband", ur: "نبی شوہر کے باوجود کافر رہی" }, verseRef: "66:10" },
        { term: "وَامْرَأَتَ لُوطٍ", meaning: { en: "Wife of Lot", ur: "لوط علیہ السلام کی بیوی" }, explanation: { en: "Betrayed prophet husband", ur: "نبی شوہر سے خیانت کی" }, verseRef: "66:10" },
        { term: "كَانَتَا تَحْتَ عَبْدَيْنِ مِنْ عِبَادِنَا صَالِحَيْنِ", meaning: { en: "Were under two righteous servants", ur: "ہمارے دو نیک بندوں کی زوجیت میں تھیں" }, explanation: { en: "Marriage to prophet didn't save them", ur: "نبی سے شادی نے انہیں نہیں بچایا" }, verseRef: "66:10" },
        { term: "فَخَانَتَاهُمَا", meaning: { en: "They betrayed them", ur: "ان دونوں نے خیانت کی" }, explanation: { en: "Betrayal in religion, not adultery", ur: "دین میں خیانت، زنا نہیں" }, verseRef: "66:10" },
        { term: "فَلَمْ يُغْنِيَا عَنْهُمَا مِنَ اللَّهِ شَيْئًا", meaning: { en: "Did not avail them anything from Allah", ur: "ان دونوں نبیوں نے انہیں Allah کے عذاب سے نہ بچایا" }, explanation: { en: "Family ties don't override personal faith", ur: "رشتے ذاتی ایمان سے بالاتر نہیں" }, verseRef: "66:10" }
      ]
    },

    righteousWomenExamples: {
      name: "Examples of Righteous Women",
      nameArabic: "أمثلة النساء الصالحات",
      color: '#10B981',
      icon: 'Crown',
      concepts: [
        { term: "امْرَأَتَ فِرْعَوْنَ", meaning: { en: "Wife of Pharaoh", ur: "فرعون کی بیوی" }, explanation: { en: "Asiya - believed despite tyrant husband", ur: "آسیہ - ظالم شوہر کے باوجود ایمان لائیں" }, verseRef: "66:11" },
        { term: "ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ", meaning: { en: "Build for me near You a house in Paradise", ur: "میرے لیے اپنے پاس جنت میں گھر بنا دے" }, explanation: { en: "Her famous supplication", ur: "ان کی مشہور دعا" }, verseRef: "66:11" },
        { term: "نَجِّنِي مِن فِرْعَوْنَ وَعَمَلِهِ", meaning: { en: "Save me from Pharaoh and his deeds", ur: "مجھے فرعون اور اس کے عمل سے نجات دے" }, explanation: { en: "Sought refuge from evil", ur: "برائی سے پناہ مانگی" }, verseRef: "66:11" },
        { term: "مَرْيَمَ ابْنَتَ عِمْرَانَ", meaning: { en: "Maryam daughter of Imran", ur: "مریم بنت عمران" }, explanation: { en: "Virgin Mary - supreme example", ur: "حضرت مریم - اعلیٰ ترین مثال" }, verseRef: "66:12" },
        { term: "أَحْصَنَتْ فَرْجَهَا", meaning: { en: "Guarded her chastity", ur: "اپنی عفت کی حفاظت کی" }, explanation: { en: "Perfect purity", ur: "مکمل پاکدامنی" }, verseRef: "66:12" },
        { term: "فَنَفَخْنَا فِيهِ مِن رُّوحِنَا", meaning: { en: "We breathed into it Our spirit", ur: "ہم نے اس میں اپنی روح پھونکی" }, explanation: { en: "Miraculous conception of Jesus", ur: "عیسیٰ علیہ السلام کی معجزانہ پیدائش" }, verseRef: "66:12" },
        { term: "وَكَانَتْ مِنَ الْقَانِتِينَ", meaning: { en: "She was of the devoutly obedient", ur: "وہ فرمانبرداروں میں سے تھیں" }, explanation: { en: "Masculine form - transcends gender in piety", ur: "مذکر صیغہ - تقویٰ میں صنفی حدود سے بالاتر" }, verseRef: "66:12" }
      ]
    }
  },

  relationships: [
    { from: "تحرم ما أحل الله", to: "تحلة أيمانكم", type: "solution", description: { en: "Self-imposed prohibition can be dissolved", ur: "خود عائد کردہ پابندی ختم کی جا سکتی ہے" } },
    { from: "أسر النبي حديثاً", to: "فنبأت به", type: "cause-effect", description: { en: "Confidence shared was betrayed", ur: "رازداری سے بتائی بات افشا ہو گئی" } },
    { from: "تتوبا", to: "صغت قلوبكما", type: "reason", description: { en: "Hearts inclined wrongly - need repentance", ur: "دل کج ہو گئے - توبہ ضروری ہے" } },
    { from: "امرأت نوح/لوط", to: "امرأت فرعون/مريم", type: "contrast", description: { en: "Wicked wives of prophets vs righteous in evil environments", ur: "انبیاء کی بدکار بیویاں بمقابلہ برے ماحول میں نیک خواتین" } },
    { from: "تحت عبدين صالحين", to: "فخانتاهما", type: "irony", description: { en: "Proximity to righteousness didn't help", ur: "نیکی سے قربت نے فائدہ نہ دیا" } },
    { from: "توبة نصوحاً", to: "نورهم يسعى", type: "reward", description: { en: "Sincere repentance leads to light on Judgment Day", ur: "سچی توبہ قیامت کے دن نور کا سبب ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Prophet's Household", verses: "66:1-5", description: { en: "Incident with wives, call to repent", ur: "بیویوں کے ساتھ واقعہ، توبہ کی دعوت" } },
      { stage: 2, theme: "Family Protection", verses: "66:6-7", description: { en: "Protect family from Fire, no excuses", ur: "خاندان کو آگ سے بچاؤ، کوئی بہانہ نہیں" } },
      { stage: 3, theme: "Sincere Repentance", verses: "66:8", description: { en: "Tawbah nasuha - complete repentance", ur: "توبہ نصوح - مکمل توبہ" } },
      { stage: 4, theme: "Striving", verses: "66:9", description: { en: "Jihad against disbelievers and hypocrites", ur: "کافروں اور منافقوں سے جہاد" } },
      { stage: 5, theme: "Contrasting Examples", verses: "66:10-12", description: { en: "Wicked vs righteous women", ur: "بدکار بمقابلہ نیک خواتین" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Don't prohibit the permissible", how: "Don't make halal upon yourself haram", verse: "66:1" },
      { principle: "Keep confidences", how: "Don't share private conversations of spouse", verse: "66:3" },
      { principle: "Overlook spouse's faults", how: "Like Prophet who overlooked some matters", verse: "66:3" },
      { principle: "Protect family spiritually", how: "Educate family about religion to save from Fire", verse: "66:6" },
      { principle: "Repent sincerely", how: "Repentance must be complete - nasuha", verse: "66:8" },
      { principle: "Environment doesn't determine fate", how: "Asiya believed despite Pharaoh, wives of prophets disbelieved", verse: "66:10-11" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Four Greatest Women", ur: "چار عظیم ترین خواتین" },
    insight: { en: "This surah presents two of the four greatest women ever: Asiya (Pharaoh's wife) and Maryam (daughter of Imran). Prophet Muhammad ﷺ said: 'The best women of Paradise are Khadijah bint Khuwaylid, Fatimah bint Muhammad, Maryam bint Imran, and Asiya bint Muzahim wife of Pharaoh.' Notice the surah's profound teaching: being married to a prophet (Noah, Lot) doesn't guarantee salvation, and being married to the worst tyrant (Pharaoh) doesn't prevent it. Personal faith is what matters. The final verse describes Maryam using the masculine plural 'qānitīn' (devoutly obedient ones) rather than feminine 'qānitāt' - scholars explain this indicates her piety transcended gender distinctions, placing her among the highest ranks of the obedient.", ur: "اس سورت میں تاریخ کی چار عظیم ترین خواتین میں سے دو کا ذکر ہے: آسیہ (فرعون کی بیوی) اور مریم (بنت عمران)۔ نبی ﷺ نے فرمایا: 'جنت کی بہترین خواتین خدیجہ بنت خویلد، فاطمہ بنت محمد، مریم بنت عمران اور آسیہ بنت مزاحم زوجہ فرعون ہیں۔' سورت کی گہری تعلیم دیکھیں: نبی سے شادی (نوح، لوط) نجات کی ضمانت نہیں، اور بدترین ظالم (فرعون) سے شادی نجات میں رکاوٹ نہیں۔ ذاتی ایمان اہم ہے۔ آخری آیت مریم کے لیے مذکر جمع 'قانتین' استعمال کرتی ہے بجائے مونث 'قانتات' - علماء کہتے ہیں کہ یہ ان کی تقویٰ کی صنفی حدود سے بلندی ظاہر کرتا ہے۔" }
  },

  historicalContext: {
    note: { en: "This surah was revealed regarding an incident where the Prophet ﷺ made something lawful upon himself forbidden (either honey or spending time with Maria the Copt) to please some of his wives. Hafsa shared a secret the Prophet had confided in her with Aisha. The surah addresses these matters while drawing universal lessons about repentance, family responsibility, and the importance of personal faith over associations. Asiya is praised for her famous supplication for a house in Paradise 'near' Allah - prioritizing closeness to Allah over worldly comfort despite being queen of Egypt.", ur: "یہ سورت اس واقعے پر نازل ہوئی جب نبی ﷺ نے حلال چیز (یا تو شہد یا ماریہ قبطیہ کے پاس وقت گزارنا) بعض بیویوں کی خوشنودی کے لیے خود پر حرام کی۔ حفصہ نے نبی ﷺ کا رازداری سے بتایا راز عائشہ کو بتا دیا۔ سورت ان معاملات کو حل کرتے ہوئے توبہ، خاندانی ذمہ داری اور رشتوں سے بالاتر ذاتی ایمان کی اہمیت کے آفاقی سبق دیتی ہے۔ آسیہ کو ان کی مشہور دعا کی تعریف میں ذکر کیا گیا جس میں انہوں نے Allah کے 'پاس' جنت میں گھر مانگا - مصر کی ملکہ ہونے کے باوجود دنیاوی آرام پر Allah کی قربت کو ترجیح دی۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "تَوْبَةً نَّصُوحًا", example: { en: "Sincere repentance", ur: "سچی توبہ" }, effect: "naṣūḥ from نصح - advice/sincerity - meaning pure, advising repentance" },
      { feature: "صَغَتْ قُلُوبُكُمَا", example: { en: "Your hearts inclined", ur: "تمہارے دل ٹیڑھے ہو گئے" }, effect: "Dual address - specifically to two wives" },
      { feature: "غِلَاظٌ شِدَادٌ", example: { en: "Harsh and severe", ur: "سخت اور تند" }, effect: "Both intensive adjectives - extreme harshness" },
      { feature: "سَائِحَاتٍ", example: { en: "Fasting/traveling", ur: "روزہ دار/سیاحت کرنے والی" }, effect: "From سِيَاحَة - means fasting or traveling in worship" },
      { feature: "الْقَانِتِينَ (masculine)", example: { en: "The devoutly obedient", ur: "فرمانبرداروں میں سے" }, effect: "Masculine used for Maryam - transcending gender in piety" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "66:6", topic: "Parental responsibility", note: "Modern psychology confirms parents shape children's worldview and moral development" },
      { verse: "66:12", topic: "Virgin birth", note: "Miraculous conception - beyond natural explanation, divine intervention" }
    ]
  }
};

export default ONTOLOGY;
