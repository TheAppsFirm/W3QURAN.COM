/**
 * Surah Al-Muddaththir (74) - Ontology of Quranic Concepts
 * The Cloaked One
 * Theme: Early commands to Prophet, warning mission, 'Over it are 19', reasons for Hell
 */

export const ONTOLOGY = {
  surahId: 74,
  surahName: "Al-Muddaththir",
  surahNameArabic: "المدثر",
  revelationType: "Makki",
  totalAyahs: 56,

  categories: {
    propheticCommands: {
      name: "Early Commands to Prophet",
      nameArabic: "أوامر النبي الأولى",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "يَا أَيُّهَا الْمُدَّثِّرُ", meaning: { en: "O you wrapped in garments", ur: "اے کپڑا اوڑھنے والے" }, explanation: { en: "First public mission command", ur: "پہلا عوامی مشن کا حکم" }, verseRef: "74:1" },
        { term: "قُمْ فَأَنذِرْ", meaning: { en: "Arise and warn", ur: "اٹھو اور ڈراؤ" }, explanation: { en: "Core prophetic mission: warning", ur: "بنیادی نبوی مشن: خبردار کرنا" }, verseRef: "74:2" },
        { term: "وَرَبَّكَ فَكَبِّرْ", meaning: { en: "Your Lord glorify", ur: "اپنے رب کی بڑائی بیان کرو" }, explanation: { en: "Declare Allah's greatness", ur: "اللہ کی عظمت کا اعلان" }, verseRef: "74:3" },
        { term: "وَثِيَابَكَ فَطَهِّرْ", meaning: { en: "Your garments purify", ur: "اپنے کپڑے پاک رکھو" }, explanation: { en: "Physical/spiritual purity", ur: "جسمانی/روحانی طہارت" }, verseRef: "74:4" },
        { term: "وَالرُّجْزَ فَاهْجُرْ", meaning: { en: "Uncleanliness/idols avoid", ur: "گندگی/بتوں سے دور رہو" }, explanation: { en: "Abandon impurity and idolatry", ur: "ناپاکی اور بت پرستی ترک کرو" }, verseRef: "74:5" },
        { term: "وَلَا تَمْنُن تَسْتَكْثِرُ", meaning: { en: "Don't give expecting more", ur: "زیادہ لینے کی نیت سے احسان مت کرو" }, explanation: { en: "Give without worldly expectation", ur: "دنیوی توقع کے بغیر دو" }, verseRef: "74:6" },
        { term: "وَلِرَبِّكَ فَاصْبِرْ", meaning: { en: "For your Lord be patient", ur: "اپنے رب کے لیے صبر کرو" }, explanation: { en: "Patient endurance for Allah", ur: "اللہ کے لیے صبر سے برداشت" }, verseRef: "74:7" }
      ]
    },

    dayOfJudgment: {
      name: "Day of Judgment",
      nameArabic: "يوم القيامة",
      color: '#EF4444',
      icon: 'Scale',
      concepts: [
        { term: "فَإِذَا نُقِرَ فِي النَّاقُورِ", meaning: { en: "When Horn is blown", ur: "جب صور پھونکا جائے گا" }, explanation: { en: "Trumpet signals resurrection", ur: "بگل قیامت کا اعلان" }, verseRef: "74:8" },
        { term: "يَوْمٌ عَسِيرٌ... غَيْرُ يَسِيرٍ", meaning: { en: "Difficult Day, not easy", ur: "سخت دن، آسان نہیں" }, explanation: { en: "Severe for disbelievers", ur: "کافروں کے لیے شدید" }, verseRef: "74:9-10" }
      ]
    },

    waleedIbnMugheera: {
      name: "The Obstinate Denier",
      nameArabic: "المعاند الكفور",
      color: '#EC4899',
      icon: 'AlertTriangle',
      concepts: [
        { term: "ذَرْنِي وَمَنْ خَلَقْتُ وَحِيدًا", meaning: { en: "Leave Me with whom I created alone", ur: "مجھے اور جسے میں نے اکیلا پیدا کیا اس کو چھوڑ دو" }, explanation: { en: "Allah deals with Waleed personally", ur: "اللہ ولید سے خود نمٹے گا" }, verseRef: "74:11" },
        { term: "مَالًا مَّمْدُودًا", meaning: { en: "Extensive wealth", ur: "بہت زیادہ مال" }, explanation: { en: "Given abundant resources", ur: "بے شمار وسائل دیے گئے" }, verseRef: "74:12" },
        { term: "وَبَنِينَ شُهُودًا", meaning: { en: "Sons present", ur: "حاضر رہنے والے بیٹے" }, explanation: { en: "Many sons at his service", ur: "بہت سے بیٹے اس کی خدمت میں" }, verseRef: "74:13" },
        { term: "وَمَهَّدتُّ لَهُ تَمْهِيدًا", meaning: { en: "Made smooth for him", ur: "اس کے لیے (ہر چیز) آسان کر دی" }, explanation: { en: "Easy, comfortable life", ur: "آسان، آرام دہ زندگی" }, verseRef: "74:14" },
        { term: "ثُمَّ يَطْمَعُ أَنْ أَزِيدَ", meaning: { en: "Then he desires I increase", ur: "پھر چاہتا ہے کہ میں اور بڑھاؤں" }, explanation: { en: "Endless greed despite blessings", ur: "نعمتوں کے باوجود لامتناہی لالچ" }, verseRef: "74:15" },
        { term: "إِنَّهُ كَانَ لِآيَاتِنَا عَنِيدًا", meaning: { en: "He is obstinate to Our signs", ur: "وہ ہماری آیات کا ضدی دشمن ہے" }, explanation: { en: "Willful rejection", ur: "جان بوجھ کر انکار" }, verseRef: "74:16" }
      ]
    },

    waleedsDeliberation: {
      name: "The Denier's Process",
      nameArabic: "عملية إنكار الوليد",
      color: '#8B5CF6',
      icon: 'Eye',
      concepts: [
        { term: "فَكَّرَ وَقَدَّرَ", meaning: { en: "He thought and calculated", ur: "اس نے سوچا اور اندازہ لگایا" }, explanation: { en: "Deliberate plotting", ur: "جان بوجھ کر سازش" }, verseRef: "74:18" },
        { term: "فَقُتِلَ كَيْفَ قَدَّرَ", meaning: { en: "Destroyed! How he calculated!", ur: "مارا گیا! کیسا اندازہ لگایا!" }, explanation: { en: "Curse on his plotting", ur: "اس کی سازش پر لعنت" }, verseRef: "74:19-20" },
        { term: "ثُمَّ نَظَرَ", meaning: { en: "Then he looked", ur: "پھر اس نے دیکھا" }, explanation: { en: "Observed people's reactions", ur: "لوگوں کے ردعمل کا مشاہدہ" }, verseRef: "74:21" },
        { term: "ثُمَّ عَبَسَ وَبَسَرَ", meaning: { en: "Then he frowned and scowled", ur: "پھر اس نے منہ بنایا اور بھونہیں چڑھائیں" }, explanation: { en: "Showed displeasure", ur: "ناگواری ظاہر کی" }, verseRef: "74:22" },
        { term: "ثُمَّ أَدْبَرَ وَاسْتَكْبَرَ", meaning: { en: "Then turned away arrogantly", ur: "پھر پیٹھ پھیری اور تکبر کیا" }, explanation: { en: "Rejected with pride", ur: "غرور سے رد کیا" }, verseRef: "74:23" },
        { term: "إِنْ هَـٰذَا إِلَّا سِحْرٌ يُؤْثَرُ", meaning: { en: "This is only magic learned", ur: "یہ تو سیکھا ہوا جادو ہے" }, explanation: { en: "Called Quran borrowed magic", ur: "قرآن کو مستعار جادو کہا" }, verseRef: "74:24" },
        { term: "إِنْ هَـٰذَا إِلَّا قَوْلُ الْبَشَرِ", meaning: { en: "This is only speech of man", ur: "یہ تو انسان کا کلام ہے" }, explanation: { en: "Denied divine origin", ur: "الہی ماخذ سے انکار" }, verseRef: "74:25" }
      ]
    },

    saqar: {
      name: "Description of Saqar (Hell)",
      nameArabic: "وصف سقر",
      color: '#EF4444',
      icon: 'Zap',
      concepts: [
        { term: "سَأُصْلِيهِ سَقَرَ", meaning: { en: "I will burn him in Saqar", ur: "میں اسے سقر میں جھونکوں گا" }, explanation: { en: "Saqar - name for Hell", ur: "سقر - جہنم کا ایک نام" }, verseRef: "74:26" },
        { term: "وَمَا أَدْرَاكَ مَا سَقَرُ", meaning: { en: "What can make you know Saqar?", ur: "تمہیں کیا معلوم سقر کیا ہے؟" }, explanation: { en: "Beyond human comprehension", ur: "انسانی سمجھ سے باہر" }, verseRef: "74:27" },
        { term: "لَا تُبْقِي وَلَا تَذَرُ", meaning: { en: "It spares not, leaves nothing", ur: "نہ باقی رکھے نہ چھوڑے" }, explanation: { en: "Complete destruction", ur: "مکمل تباہی" }, verseRef: "74:28" },
        { term: "لَوَّاحَةٌ لِّلْبَشَرِ", meaning: { en: "Scorching for mankind", ur: "انسانوں کو جھلسانے والی" }, explanation: { en: "Burns skin completely", ur: "جلد کو مکمل جلا دے" }, verseRef: "74:29" }
      ]
    },

    nineteenAngels: {
      name: "The Nineteen Angels",
      nameArabic: "تسعة عشر ملكاً",
      color: '#06B6D4',
      icon: 'Shield',
      concepts: [
        { term: "عَلَيْهَا تِسْعَةَ عَشَرَ", meaning: { en: "Over it are nineteen", ur: "اس پر انیس (فرشتے) ہیں" }, explanation: { en: "19 angels guard Hell", ur: "19 فرشتے جہنم کی نگرانی کرتے ہیں" }, verseRef: "74:30" },
        { term: "وَمَا جَعَلْنَا أَصْحَابَ النَّارِ إِلَّا مَلَائِكَةً", meaning: { en: "Made keepers only angels", ur: "آگ کے داروغے صرف فرشتے بنائے" }, explanation: { en: "Angels, not humans, guard Hell", ur: "فرشتے جہنم کی حفاظت کرتے ہیں، انسان نہیں" }, verseRef: "74:31" },
        { term: "عِدَّتَهُمْ... فِتْنَةً لِّلَّذِينَ كَفَرُوا", meaning: { en: "Their number a trial for disbelievers", ur: "ان کی تعداد کافروں کے لیے فتنہ" }, explanation: { en: "Number itself is test - some mock 'only 19'", ur: "تعداد خود آزمائش ہے - کچھ نے 'صرف 19' کہہ کر مذاق اڑایا" }, verseRef: "74:31" }
      ]
    },

    cosmicOaths: {
      name: "Cosmic Oaths",
      nameArabic: "القسم الكوني",
      color: '#8B5CF6',
      icon: 'Moon',
      concepts: [
        { term: "وَالْقَمَرِ", meaning: { en: "By the moon", ur: "چاند کی قسم" }, explanation: { en: "Oath by moon", ur: "چاند کی قسم" }, verseRef: "74:32" },
        { term: "وَاللَّيْلِ إِذْ أَدْبَرَ", meaning: { en: "By night as it retreats", ur: "رات کی قسم جب وہ پلٹے" }, explanation: { en: "Night departing", ur: "رات کا جانا" }, verseRef: "74:33" },
        { term: "وَالصُّبْحِ إِذَا أَسْفَرَ", meaning: { en: "By dawn as it brightens", ur: "صبح کی قسم جب وہ روشن ہو" }, explanation: { en: "Dawn breaking", ur: "صبح کا نمودار ہونا" }, verseRef: "74:34" },
        { term: "إِنَّهَا لَإِحْدَى الْكُبَرِ", meaning: { en: "Indeed it is one of the greatest", ur: "بلاشبہ یہ بڑی چیزوں میں سے ایک ہے" }, explanation: { en: "Hell is major warning", ur: "جہنم بہت بڑی تنبیہ ہے" }, verseRef: "74:35" }
      ]
    },

    fourReasonsForHell: {
      name: "Four Reasons for Hell",
      nameArabic: "أربعة أسباب لدخول جهنم",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "لَمْ نَكُ مِنَ الْمُصَلِّينَ", meaning: { en: "We were not of those who prayed", ur: "ہم نماز پڑھنے والوں میں نہیں تھے" }, explanation: { en: "Reason 1: Abandoned prayer", ur: "وجہ 1: نماز چھوڑنا" }, verseRef: "74:43" },
        { term: "وَلَمْ نَكُ نُطْعِمُ الْمِسْكِينَ", meaning: { en: "Nor fed the poor", ur: "اور نہ مسکینوں کو کھلاتے تھے" }, explanation: { en: "Reason 2: Neglected charity", ur: "وجہ 2: صدقہ سے غفلت" }, verseRef: "74:44" },
        { term: "وَكُنَّا نَخُوضُ مَعَ الْخَائِضِينَ", meaning: { en: "We engaged in vain talk with others", ur: "اور بیہودہ باتوں میں مشغول رہتے تھے" }, explanation: { en: "Reason 3: Idle gossip/falsehood", ur: "وجہ 3: لغو باتیں/جھوٹ" }, verseRef: "74:45" },
        { term: "وَكُنَّا نُكَذِّبُ بِيَوْمِ الدِّينِ", meaning: { en: "We denied Day of Judgment", ur: "اور ہم جزا کے دن کو جھٹلاتے تھے" }, explanation: { en: "Reason 4: Denied accountability", ur: "وجہ 4: احتساب سے انکار" }, verseRef: "74:46" }
      ]
    },

    noIntercession: {
      name: "No Intercession",
      nameArabic: "لا شفاعة",
      color: '#EC4899',
      icon: 'Scale',
      concepts: [
        { term: "حَتَّىٰ أَتَانَا الْيَقِينُ", meaning: { en: "Until death came to us", ur: "یہاں تک کہ ہمیں موت آ گئی" }, explanation: { en: "Yaqeen = death/certainty", ur: "یقین = موت/حتمیت" }, verseRef: "74:47" },
        { term: "فَمَا تَنفَعُهُمْ شَفَاعَةُ الشَّافِعِينَ", meaning: { en: "Intercession won't benefit them", ur: "سفارش کرنے والوں کی سفارش انہیں فائدہ نہیں دے گی" }, explanation: { en: "No intercession for deniers", ur: "منکرین کے لیے کوئی سفارش نہیں" }, verseRef: "74:48" }
      ]
    },

    fleeingFromReminder: {
      name: "Fleeing from Reminder",
      nameArabic: "الفرار من التذكرة",
      color: '#3B82F6',
      icon: 'MessageCircle',
      concepts: [
        { term: "عَنِ التَّذْكِرَةِ مُعْرِضِينَ", meaning: { en: "From reminder turning away", ur: "نصیحت سے منہ موڑنے والے" }, explanation: { en: "Rejecting Quranic guidance", ur: "قرآنی ہدایت سے انکار" }, verseRef: "74:49" },
        { term: "كَأَنَّهُمْ حُمُرٌ مُّسْتَنفِرَةٌ فَرَّتْ مِن قَسْوَرَةٍ", meaning: { en: "Like donkeys fleeing from lion", ur: "جیسے بھاگتے ہوئے گدھے جو شیر سے بھاگیں" }, explanation: { en: "Wild panic from truth", ur: "سچائی سے جنگلی خوف" }, verseRef: "74:50-51" }
      ]
    },

    divineAttributes: {
      name: "Divine Attributes",
      nameArabic: "الصفات الإلهية",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "هُوَ أَهْلُ التَّقْوَىٰ", meaning: { en: "He is worthy of being feared", ur: "وہی تقویٰ کا اہل ہے" }, explanation: { en: "Allah deserves ultimate reverence", ur: "اللہ انتہائی تعظیم کا مستحق ہے" }, verseRef: "74:56" },
        { term: "وَأَهْلُ الْمَغْفِرَةِ", meaning: { en: "And worthy of forgiving", ur: "اور مغفرت کا اہل ہے" }, explanation: { en: "Allah deserves being sought for forgiveness", ur: "اللہ سے مغفرت مانگنا اسی کا حق ہے" }, verseRef: "74:56" }
      ]
    }
  },

  relationships: [
    { from: "قم فأنذر", to: "نذيرا للبشر", type: "mission", description: { en: "Prophet commanded to warn → warning for humanity", ur: "نبی کو خبردار کرنے کا حکم → انسانیت کے لیے انتباہ" } },
    { from: "مالا ممدودا... بنين شهودا", to: "عنيدا", type: "ingratitude", description: { en: "Despite all blessings → became obstinate", ur: "تمام نعمتوں کے باوجود → ضدی ہو گیا" } },
    { from: "فكر وقدر", to: "سحر يؤثر", type: "consequence", description: { en: "Deliberated → concluded it's 'magic'", ur: "سوچا → نتیجہ نکالا کہ 'جادو' ہے" } },
    { from: "لم نك من المصلين", to: "نخوض مع الخائضين", type: "causation", description: { en: "Abandoned prayer led to idle talk", ur: "نماز چھوڑنے سے لغو باتیں شروع ہوئیں" } },
    { from: "حمر مستنفرة", to: "عن التذكرة معرضين", type: "illustration", description: { en: "Fleeing donkeys = those fleeing reminder", ur: "بھاگتے گدھے = نصیحت سے بھاگنے والے" } },
    { from: "أهل التقوى", to: "أهل المغفرة", type: "balance", description: { en: "Allah deserves fear AND is source of forgiveness", ur: "اللہ خوف کا بھی مستحق ہے اور مغفرت کا بھی ذریعہ" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Prophetic Commands", verses: "74:1-7", description: { en: "Seven commands: arise, warn, glorify, purify, avoid, give, be patient", ur: "سات احکام: اٹھو، ڈراؤ، بڑائی بیان کرو، پاک رکھو، بچو، دو، صبر کرو" } },
      { stage: 2, theme: "Day's Severity", verses: "74:8-10", description: { en: "Trumpet blown; difficult Day for disbelievers", ur: "صور پھونکا جائے گا؛ کافروں کے لیے سخت دن" } },
      { stage: 3, theme: "Waleed's Story", verses: "74:11-25", description: { en: "Blessed man who deliberated then rejected", ur: "نعمتوں والا شخص جس نے سوچا پھر رد کیا" } },
      { stage: 4, theme: "Saqar Description", verses: "74:26-31", description: { en: "Hell's nature; 19 angels; trial for disbelievers", ur: "جہنم کی حقیقت؛ 19 فرشتے؛ کافروں کے لیے آزمائش" } },
      { stage: 5, theme: "Cosmic Oaths", verses: "74:32-37", description: { en: "Moon, night, dawn; greatest warning; free choice", ur: "چاند، رات، صبح؛ بڑی تنبیہ؛ آزاد انتخاب" } },
      { stage: 6, theme: "Four Reasons", verses: "74:38-48", description: { en: "No prayer, no charity, vain talk, denied Judgment", ur: "نماز نہیں، صدقہ نہیں، لغو باتیں، قیامت سے انکار" } },
      { stage: 7, theme: "Fleeing Truth", verses: "74:49-56", description: { en: "Like fleeing donkeys; Allah worthy of fear and forgiveness", ur: "بھاگتے گدھوں کی طرح؛ اللہ خوف اور مغفرت دونوں کا اہل" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Warn others", how: "Share truth even if uncomfortable - your mission", verse: "74:2" },
      { principle: "Purify yourself", how: "Physical and spiritual cleanliness together", verse: "74:4" },
      { principle: "Give without expecting", how: "Charity purely for Allah, not for returns", verse: "74:6" },
      { principle: "Be patient", how: "Patience for Allah's sake through difficulties", verse: "74:7" },
      { principle: "Pray consistently", how: "First reason for Hell was abandoning salah", verse: "74:43" },
      { principle: "Feed the poor", how: "Second reason was neglecting the needy", verse: "74:44" },
      { principle: "Avoid vain talk", how: "Third reason was idle gossip and falsehood", verse: "74:45" }
    ]
  },

  uniqueInsight: {
    title: { en: "The 'Nineteen' Controversy", ur: "'انیس' کا تنازعہ" },
    insight: { en: "Verse 30's 'عَلَيْهَا تِسْعَةَ عَشَرَ' (Over it are 19) sparked mockery from Quraysh. Abu Jahl said, 'Muhammad claims there are 19 guardians - can't some of you fight each one?' But verse 31 explains this number is itself a trial (فِتْنَة). The Quran challenges: angels guard Hell, not humans - why mock their number? Some modern scholars note '19' appears to have mathematical significance throughout Quran (Bismillah has 19 letters, Quran mentions 'Rahman' 57 times = 19×3, etc.), though this remains debated. The classical understanding: 19 refers to Zabaniyah angels who guard Hell, their number challenges human arrogance - as if humans could overpower divine guards.", ur: "آیت 30 کے 'عَلَيْهَا تِسْعَةَ عَشَرَ' (اس پر 19 ہیں) پر قریش نے مذاق اڑایا۔ ابو جہل نے کہا: 'محمد کا دعویٰ ہے 19 نگہبان ہیں - کیا تم میں سے ہر ایک سے نہیں لڑ سکتے؟' لیکن آیت 31 بتاتی ہے کہ یہ تعداد خود فتنہ ہے۔ قرآن چیلنج کرتا ہے: فرشتے جہنم کی نگرانی کرتے ہیں، انسان نہیں - ان کی تعداد پر مذاق کیوں؟ کچھ جدید علماء کا کہنا ہے کہ '19' پورے قرآن میں ریاضیاتی اہمیت رکھتا ہے (بسم اللہ میں 19 حروف وغیرہ)، اگرچہ یہ بحث طلب ہے۔ کلاسیکی فہم: 19 زبانیہ فرشتے ہیں، ان کی تعداد انسانی تکبر کو چیلنج کرتی ہے۔" }
  },

  historicalContext: {
    note: { en: "One of earliest revelations after Al-Muzzammil. Prophet was wrapped in garments after first revelation's intensity. This surah commands public preaching. Waleed ibn al-Mughirah was a respected Quraysh chief who admitted Quran's beauty privately but publicly called it 'magic' to preserve tribal standing. His deliberation process (thinking, calculating, frowning, declaring 'magic') is recorded as eternal lesson on willful rejection.", ur: "ابتدائی نازل ہونے والی سورتوں میں سے، المزمل کے بعد۔ نبی ﷺ پہلی وحی کی شدت کے بعد کپڑوں میں لپٹے ہوئے تھے۔ یہ سورت علانیہ تبلیغ کا حکم دیتی ہے۔ ولید بن مغیرہ قریش کا معزز سردار تھا جس نے خفیہ طور پر قرآن کی خوبصورتی تسلیم کی لیکن قبائلی مقام بچانے کے لیے اسے 'جادو' کہا۔ اس کا سوچنے کا عمل (سوچنا، اندازہ لگانا، منہ بنانا، 'جادو' کا اعلان) جان بوجھ کر انکار کا ابدی سبق ہے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "المُدَّثِّر", example: { en: "One wrapped", ur: "کپڑا اوڑھنے والا" }, effect: "Form V participle - wrapped heavily" },
      { feature: "Seven commands فَ", example: "قم فأنذر, ربك فكبر...", effect: "Rapid-fire instructions with فَ" },
      { feature: "قَسْوَرَة", example: { en: "Lion", ur: "شیر" }, effect: "Rare word for lion emphasizing terror" },
      { feature: "تِسْعَةَ عَشَرَ", example: { en: "Nineteen", ur: "انیس" }, effect: "Specific number - definiteness" },
      { feature: "لَوَّاحَة", example: { en: "Scorching", ur: "جھلسانے والی" }, effect: "Intensive form - burns blackening skin" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "74:30-31", topic: "The number 19", note: "Some claim mathematical patterns in Quran based on 19; classical view: 19 Zabaniyah angels guard Hell" }
    ]
  }
};

export default ONTOLOGY;
