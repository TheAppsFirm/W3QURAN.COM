/**
 * Surah Al-Fajr (89) - Ontology of Quranic Concepts
 * The Dawn
 * Theme: Destroyed nations, tests of wealth, Day of Judgment, the satisfied soul
 */

export const ONTOLOGY = {
  surahId: 89,
  surahName: "Al-Fajr",
  surahNameArabic: "الفجر",
  revelationType: "Makki",
  totalAyahs: 30,

  categories: {
    cosmicOaths: {
      name: "The Sacred Oaths",
      nameArabic: "القسم الكوني",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "الْفَجْر", meaning: { en: "The Dawn", ur: "فجر (صبح)" }, explanation: { en: "Dawn breaking darkness - truth emerging, new beginnings", ur: "صبح اندھیرے کو چیرتی ہے - سچائی کا ظہور، نئی شروعات" }, verseRef: "89:1" },
        { term: "لَيَالٍ عَشْرٍ", meaning: { en: "Ten Nights", ur: "دس راتیں" }, explanation: { en: "First ten of Dhul-Hijjah - most sacred nights of the year", ur: "ذوالحجہ کی پہلی دس راتیں - سال کی سب سے مقدس راتیں" }, verseRef: "89:2" },
        { term: "الشَّفْعِ وَالْوَتْرِ", meaning: { en: "The Even and Odd", ur: "جوڑا اور طاق" }, explanation: { en: "Days of Hajj, or creation's duality, or Allah (The One - Watr)", ur: "حج کے دن، یا تخلیق کی دوئی، یا اللہ (ایک - وتر)" }, verseRef: "89:3" },
        { term: "ذِي حِجْرٍ", meaning: { en: "One of understanding", ur: "عقل و فہم والا" }, explanation: { en: "Hijr = intellect that restrains from foolishness. These oaths are for the wise", ur: "حِجر = عقل جو حماقت سے روکے۔ یہ قسمیں عقلمندوں کے لیے ہیں" }, verseRef: "89:5" }
      ]
    },

    destroyedNations: {
      name: "Lessons from Destroyed Nations",
      nameArabic: "عبرة الأمم الهالكة",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "عَاد - إِرَمَ ذَاتِ الْعِمَادِ", meaning: { en: "Aad - Iram of lofty pillars", ur: "عاد - بلند ستونوں والا اِرَم" }, explanation: { en: "Ancient Arabian civilization with magnificent architecture, destroyed for arrogance", ur: "عظیم الشان تعمیرات والی قدیم عرب تہذیب، تکبر کی وجہ سے تباہ ہوئی" }, verseRef: "89:6-8" },
        { term: "ثَمُود - جَابُوا الصَّخْرَ", meaning: { en: "Thamud who carved rocks", ur: "ثمود - جنہوں نے چٹانیں تراشیں" }, explanation: { en: "Carved homes in mountains (Madain Saleh), destroyed for rejecting Salih", ur: "پہاڑوں میں گھر تراشے (مدائن صالح)، صالح علیہ السلام کو جھٹلانے پر تباہ ہوئے" }, verseRef: "89:9" },
        { term: "فِرْعَوْنَ ذِي الْأَوْتَادِ", meaning: { en: "Pharaoh of stakes", ur: "میخوں والا فرعون" }, explanation: { en: "Pyramids, torture stakes, or military might - epitome of tyranny", ur: "اہرام، تشدد کی میخیں، یا فوجی طاقت - ظلم کی انتہا" }, verseRef: "89:10" },
        { term: "طَغَوْا... الْفَسَادَ", meaning: { en: "Transgressed and spread corruption", ur: "سرکشی کی اور فساد پھیلایا" }, explanation: { en: "Common sin: transgression (tughyan) leading to corruption (fasaad)", ur: "مشترکہ گناہ: سرکشی (طغیان) جو فساد کی طرف لے جاتی ہے" }, verseRef: "89:11-12" },
        { term: "سَوْطَ عَذَابٍ", meaning: { en: "Scourge of punishment", ur: "عذاب کا کوڑا" }, explanation: { en: "Punishment poured like rain, striking like a whip - sudden, devastating", ur: "عذاب بارش کی طرح برسا، کوڑے کی طرح مارا - اچانک، تباہ کن" }, verseRef: "89:13" },
        { term: "رَبَّكَ لَبِالْمِرْصَادِ", meaning: { en: "Your Lord is in observation", ur: "تمہارا رب تاک میں ہے" }, explanation: { en: "Allah watches from a 'mirsaad' (watchtower) - nothing escapes His justice", ur: "اللہ 'مرصاد' (نگرانی کے مقام) سے دیکھ رہا ہے - کچھ بھی اس کے انصاف سے نہیں بچتا" }, verseRef: "89:14" }
      ]
    },

    humanNatureAndWealth: {
      name: "Human Response to Tests",
      nameArabic: "طبيعة الإنسان والابتلاء",
      color: '#EC4899',
      icon: 'Users',
      concepts: [
        { term: "أَكْرَمَهُ وَنَعَّمَهُ → رَبِّي أَكْرَمَنِ", meaning: { en: "When honored, says 'Lord honored me'", ur: "جب عزت ملے تو کہے 'رب نے مجھے عزت دی'" }, explanation: { en: "Wrong conclusion: assumes wealth = divine approval", ur: "غلط نتیجہ: سمجھتا ہے دولت = اللہ کی رضا" }, verseRef: "89:15" },
        { term: "قَدَرَ عَلَيْهِ رِزْقَهُ → رَبِّي أَهَانَنِ", meaning: { en: "When restricted, says 'Lord humiliated me'", ur: "جب تنگی ہو تو کہے 'رب نے مجھے ذلیل کیا'" }, explanation: { en: "Wrong conclusion: assumes poverty = divine rejection", ur: "غلط نتیجہ: سمجھتا ہے غربت = اللہ کی ناراضگی" }, verseRef: "89:16" },
        { term: "كَلَّا", meaning: { en: "No! (Rejection)", ur: "ہرگز نہیں! (رد)" }, explanation: { en: "Allah rejects both conclusions. Wealth/poverty are tests, not judgments", ur: "اللہ دونوں نتائج کو رد کرتا ہے۔ دولت/غربت آزمائشیں ہیں، فیصلے نہیں" }, verseRef: "89:17" }
      ]
    },

    socialFailures: {
      name: "Social Sins",
      nameArabic: "الذنوب الاجتماعية",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَّا تُكْرِمُونَ الْيَتِيمَ", meaning: { en: "You don't honor orphans", ur: "تم یتیم کی عزت نہیں کرتے" }, explanation: { en: "Neglecting the most vulnerable - sign of spiritual emptiness", ur: "سب سے کمزور کو نظرانداز کرنا - روحانی خالی پن کی نشانی" }, verseRef: "89:17" },
        { term: "لَا تَحَاضُّونَ عَلَىٰ طَعَامِ الْمِسْكِينِ", meaning: { en: "Don't encourage feeding the poor", ur: "مسکین کو کھانا کھلانے کی ترغیب نہیں دیتے" }, explanation: { en: "Not just feeding but ENCOURAGING others to feed - social responsibility", ur: "صرف کھلانا نہیں بلکہ دوسروں کو کھلانے کی ترغیب دینا - سماجی ذمہ داری" }, verseRef: "89:18" },
        { term: "تَأْكُلُونَ التُّرَاثَ أَكْلًا لَّمًّا", meaning: { en: "Devour inheritance greedily", ur: "وراثت کو سمیٹ کر کھا جاتے ہو" }, explanation: { en: "Lamm = gathering everything. Taking others' shares, especially orphans'", ur: "لَمّ = سب سمیٹنا۔ دوسروں کا حصہ لینا، خاص طور پر یتیموں کا" }, verseRef: "89:19" },
        { term: "تُحِبُّونَ الْمَالَ حُبًّا جَمًّا", meaning: { en: "Love wealth excessively", ur: "مال سے بے حد محبت کرتے ہو" }, explanation: { en: "Jamm = excessive. Wealth-worship that blinds to responsibility", ur: "جَمّ = بے حد۔ مال کی عبادت جو ذمہ داری سے اندھا کر دے" }, verseRef: "89:20" }
      ]
    },

    dayOfJudgment: {
      name: "The Day of Reckoning",
      nameArabic: "يوم الحساب",
      color: '#F59E0B',
      icon: 'Scale',
      concepts: [
        { term: "دُكَّتِ الْأَرْضُ دَكًّا دَكًّا", meaning: { en: "Earth pounded flat", ur: "زمین کو ٹکڑے ٹکڑے کر دیا جائے گا" }, explanation: { en: "Repetition = complete leveling. Mountains, buildings - all crushed", ur: "تکرار = مکمل ہمواری۔ پہاڑ، عمارتیں - سب پس ہو جائیں گے" }, verseRef: "89:21" },
        { term: "جَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا", meaning: { en: "Lord comes with angels row upon row", ur: "تمہارا رب آئے گا اور فرشتے صف در صف" }, explanation: { en: "Divine arrival with angelic armies. Awe-inspiring scene of Judgment", ur: "فرشتوں کی فوجوں کے ساتھ الٰہی آمد۔ فیصلے کا ہیبت ناک منظر" }, verseRef: "89:22" },
        { term: "جِيءَ بِجَهَنَّمَ", meaning: { en: "Hell is brought", ur: "جہنم لائی جائے گی" }, explanation: { en: "Hell physically brought, with 70,000 chains per hadith", ur: "جہنم جسمانی طور پر لائی جائے گی، حدیث کے مطابق 70,000 زنجیروں کے ساتھ" }, verseRef: "89:23" },
        { term: "يَتَذَكَّرُ... وَأَنَّىٰ لَهُ الذِّكْرَىٰ", meaning: { en: "Remembers, but how will it benefit?", ur: "یاد کرے گا، لیکن یاد کا کیا فائدہ؟" }, explanation: { en: "Too late to remember. Regret without remedy", ur: "یاد کرنے میں بہت دیر۔ بغیر علاج کی پچھتاوا" }, verseRef: "89:23" },
        { term: "يَا لَيْتَنِي قَدَّمْتُ لِحَيَاتِي", meaning: { en: "I wish I had sent ahead for my life", ur: "کاش میں نے اپنی زندگی کے لیے آگے بھیجا ہوتا" }, explanation: { en: "Real 'life' is Hereafter. The regret of the unprepared", ur: "اصل 'زندگی' آخرت ہے۔ تیاری نہ کرنے والے کا پچھتاوا" }, verseRef: "89:24" }
      ]
    },

    satisfiedSoul: {
      name: "The Tranquil Soul",
      nameArabic: "النفس المطمئنة",
      color: '#10B981',
      icon: 'Heart',
      concepts: [
        { term: "النَّفْسُ الْمُطْمَئِنَّةُ", meaning: { en: "The satisfied/tranquil soul", ur: "مطمئن نفس" }, explanation: { en: "Peak spiritual state. At peace with Allah's decree, no anxiety or doubt", ur: "اعلیٰ ترین روحانی حالت۔ اللہ کے فیصلے سے مطمئن، نہ بے چینی نہ شک" }, verseRef: "89:27" },
        { term: "رَاضِيَةً مَّرْضِيَّةً", meaning: { en: "Pleased and pleasing", ur: "راضی اور رضا پائی ہوئی" }, explanation: { en: "Mutual pleasure: soul pleased with Allah, Allah pleased with soul", ur: "باہمی رضا: نفس اللہ سے راضی، اللہ نفس سے راضی" }, verseRef: "89:28" },
        { term: "فَادْخُلِي فِي عِبَادِي", meaning: { en: "Enter among My servants", ur: "میرے (خاص) بندوں میں داخل ہو جا" }, explanation: { en: "Join the company of the righteous - ultimate honor", ur: "نیکوں کی صحبت میں شامل ہو جا - اعلیٰ ترین اعزاز" }, verseRef: "89:29" },
        { term: "وَادْخُلِي جَنَّتِي", meaning: { en: "Enter My Paradise", ur: "میری جنت میں داخل ہو جا" }, explanation: { en: "'Jannatee' - MY Paradise. Personal divine invitation", ur: "'جنتی' - میری جنت۔ ذاتی الٰہی دعوت" }, verseRef: "89:30" }
      ]
    }
  },

  relationships: [
    { from: "عاد، ثمود، فرعون", to: "لبالمرصاد", type: "consequence", description: { en: "Allah watched and destroyed them", ur: "اللہ نے دیکھا اور انہیں تباہ کیا" } },
    { from: "أكرمه/أهانه", to: "كلا", type: "correction", description: { en: "Human misreading of tests is rejected", ur: "انسان کا آزمائشوں کو غلط سمجھنا رد کیا گیا" } },
    { from: "لا تكرمون اليتيم", to: "حب المال", type: "causation", description: { en: "Wealth-love causes neglect of vulnerable", ur: "مال کی محبت کمزوروں کو نظرانداز کرنے کا سبب بنتی ہے" } },
    { from: "دكت الأرض", to: "يا ليتني", type: "sequence", description: { en: "Judgment leads to regret", ur: "فیصلے کا دن پچھتاوے کی طرف لے جاتا ہے" } },
    { from: "المطمئنة", to: "راضية مرضية", type: "result", description: { en: "Tranquility leads to mutual pleasure", ur: "اطمینان باہمی رضا کی طرف لے جاتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: { en: "Sacred Oaths", ur: "مقدس قسمیں" }, verses: "89:1-5", description: { en: "Dawn, ten nights, even/odd - oaths for the wise", ur: "فجر، دس راتیں، جوڑا/طاق - عقلمندوں کے لیے قسمیں" } },
      { stage: 2, theme: { en: "Destroyed Nations", ur: "تباہ شدہ اقوام" }, verses: "89:6-14", description: { en: "Aad, Thamud, Pharaoh - transgressed, destroyed", ur: "عاد، ثمود، فرعون - سرکشی کی، تباہ ہوئے" } },
      { stage: 3, theme: { en: "Human Failure", ur: "انسانی ناکامی" }, verses: "89:15-20", description: { en: "Misreading tests, social sins, wealth-love", ur: "آزمائشوں کو غلط سمجھنا، سماجی گناہ، مال کی محبت" } },
      { stage: 4, theme: { en: "Day of Judgment", ur: "یومِ قیامت" }, verses: "89:21-26", description: { en: "Earth leveled, Hell brought, regret", ur: "زمین ہموار، جہنم لائی گئی، پچھتاوا" } },
      { stage: 5, theme: { en: "The Blessed Soul", ur: "مبارک نفس" }, verses: "89:27-30", description: { en: "Satisfied soul invited to Paradise", ur: "مطمئن نفس کو جنت کی دعوت" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Learn from history", ur: "تاریخ سے سبق سیکھو" }, how: { en: "Study Aad, Thamud, Pharaoh - power doesn't protect from Allah", ur: "عاد، ثمود، فرعون کا مطالعہ کرو - طاقت اللہ سے نہیں بچاتی" }, verse: "89:6-14" },
      { principle: { en: "Reframe wealth/poverty", ur: "دولت/غربت کو نئے انداز سے دیکھو" }, how: { en: "Both are tests, not judgments. Don't assume divine approval or rejection", ur: "دونوں آزمائشیں ہیں، فیصلے نہیں۔ الٰہی رضا یا ناراضگی کا اندازہ نہ لگاؤ" }, verse: "89:15-16" },
      { principle: { en: "Honor orphans", ur: "یتیموں کی عزت کرو" }, how: { en: "Active honor (ikram), not just avoiding harm", ur: "عملی عزت (اکرام)، صرف نقصان سے بچنا نہیں" }, verse: "89:17" },
      { principle: { en: "Encourage feeding poor", ur: "غریبوں کو کھلانے کی ترغیب دو" }, how: { en: "Not just give, but urge others to give (tahaaddu)", ur: "صرف خود دو نہیں بلکہ دوسروں کو بھی دینے کی ترغیب دو (تحاضّ)" }, verse: "89:18" },
      { principle: { en: "Purify wealth relationships", ur: "مال سے تعلق پاک کرو" }, how: { en: "Don't hoard, don't love excessively (jamm), don't take others' shares", ur: "ذخیرہ نہ کرو، حد سے زیادہ محبت نہ کرو (جَمّ)، دوسروں کا حصہ نہ لو" }, verse: "89:19-20" },
      { principle: { en: "Seek nafs mutma'innah", ur: "نفسِ مطمئنہ تلاش کرو" }, how: { en: "Work toward soul tranquility through dhikr, tawakkul, contentment", ur: "ذکر، توکل، قناعت کے ذریعے نفس کے اطمینان کی طرف محنت کرو" }, verse: "89:27" }
    ]
  },

  uniqueInsight: {
    title: { en: "From Destruction to Peace", ur: "تباہی سے سکون تک" },
    insight: { en: "This surah moves from cosmic terror to intimate invitation. It begins with sacred time (fajr, ten nights), moves to destroyed civilizations (Aad, Thamud, Pharaoh), exposes human spiritual blindness (misreading wealth/poverty), catalogs social sins, describes Judgment's horror, then... suddenly shifts tone entirely. After all the warning, verses 27-30 become tender, personal: 'O satisfied soul, return to your Lord, pleased and pleasing...' The contrast is striking: from 'sawt 'adhab' (whip of punishment) to 'jannatee' (MY Paradise). The message: the path from destruction to peace is through the nafs mutma'innah - the soul at rest with Allah regardless of circumstances.", ur: "یہ سورت کائناتی دہشت سے پُرتعلق دعوت کی طرف سفر کرتی ہے۔ مقدس وقت (فجر، دس راتیں) سے شروع ہوتی ہے، تباہ شدہ تہذیبوں (عاد، ثمود، فرعون) کی طرف بڑھتی ہے، انسانی روحانی اندھے پن (دولت/غربت کو غلط سمجھنا) کو بے نقاب کرتی ہے، سماجی گناہوں کی فہرست دیتی ہے، قیامت کی ہولناکی بیان کرتی ہے، پھر... اچانک لہجہ بالکل بدل جاتا ہے۔ تمام تنبیہات کے بعد، آیات 27-30 نرم، ذاتی ہو جاتی ہیں: 'اے مطمئن نفس، اپنے رب کی طرف لوٹ، راضی ہو کر، رضا پائی ہوئی...' تضاد حیران کن ہے: 'سوط عذاب' (عذاب کے کوڑے) سے 'جنتی' (میری جنت) تک۔ پیغام: تباہی سے سکون تک کا راستہ نفسِ مطمئنہ سے ہے - اللہ کے ساتھ مطمئن نفس، حالات چاہے جیسے بھی ہوں۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: { en: "Repetition for intensity", ur: "شدت کے لیے تکرار" }, example: "دَكًّا دَكًّا، صَفًّا صَفًّا", effect: { en: "Complete, utter action", ur: "مکمل، انتہائی عمل" } },
      { feature: { en: "Feminine address to soul", ur: "نفس کو مؤنث خطاب" }, example: "ارْجِعِي، ادْخُلِي", effect: { en: "Intimate, personal invitation", ur: "قریبی، ذاتی دعوت" } },
      { feature: { en: "Mutual form: راضية مرضية", ur: "باہمی صیغہ: راضیہ مرضیہ" }, example: { en: "Active (pleased) + Passive (pleasing)", ur: "فاعل (راضی) + مفعول (رضا پائی)" }, effect: { en: "Two-way relationship", ur: "دو طرفہ تعلق" } },
      { feature: { en: "Personal possessive: جَنَّتِي", ur: "ذاتی اضافت: جنتی" }, example: { en: "MY Paradise", ur: "میری جنت" }, effect: { en: "Divine personal invitation", ur: "الٰہی ذاتی دعوت" } }
    ]
  }
};

export default ONTOLOGY;
