/**
 * Surah Al-Kawthar (108) - Ontology of Quranic Concepts
 * The Shortest Surah - But Contains a Universe of Meaning
 *
 * Theme: Divine abundance, gratitude, and victory over enemies
 * Context: Enemies mocked Prophet ﷺ for being "abtar" (without male heir)
 */

const SURAH_108_ONTOLOGY = {
  surahId: 108,
  name: {
    en: 'Al-Kawthar - The Abundance',
    ur: 'الکوثر - بے پایاں نعمت',
    hi: 'अल-कौसर - बहुतायत',
    ar: 'الكوثر',
  },
  description: {
    en: 'The shortest surah in the Quran, yet contains a complete worldview: Allah gives abundantly, we respond with worship, and our enemies are forgotten while our legacy endures.',
    ur: 'قرآن کی سب سے چھوٹی سورت، مگر مکمل عالمی نظریہ رکھتی ہے: اللہ کثرت سے دیتا ہے، ہم عبادت سے جواب دیتے ہیں، اور ہمارے دشمن بھلا دیے جاتے ہیں جبکہ ہماری میراث باقی رہتی ہے۔',
    hi: 'क़ुरआन की सबसे छोटी सूरह, फिर भी मुकम्मल विश्वदृष्टि: अल्लाह भरपूर देता है, हम इबादत से जवाब देते हैं, और हमारे दुश्मन भुला दिए जाते हैं जबकि हमारी विरासत बाक़ी रहती है।',
  },

  categories: {
    divineGift: {
      id: 'divine-gift',
      label: { en: 'Divine Abundance', ur: 'الہی کثرت', hi: 'इलाही बहुतायत' },
      color: '#06B6D4',
      icon: 'Gift',
      description: {
        en: 'What Allah has given to Prophet Muhammad ﷺ',
        ur: 'اللہ نے نبی محمد ﷺ کو کیا دیا',
      },
      concepts: [
        {
          id: 'kawthar-river',
          arabic: 'الْكَوْثَرُ',
          transliteration: 'Al-Kawthar',
          meaning: { en: 'River in Paradise', ur: 'جنت کی نہر', hi: 'जन्नत की नहर' },
          ayah: 1,
          details: {
            en: 'A river in Paradise, whiter than milk, sweeter than honey, with banks of gold. The Prophet ﷺ will give his followers water from it on Judgment Day.',
            ur: 'جنت کی نہر، دودھ سے زیادہ سفید، شہد سے زیادہ میٹھی، سونے کے کنارے۔ نبی ﷺ قیامت کے دن اپنے پیروکاروں کو اس سے پانی پلائیں گے۔',
          },
          characteristic: {
            en: 'Hadith: "It is a river Allah has given me in Paradise"',
            ur: 'حدیث: "یہ ایک نہر ہے جو اللہ نے مجھے جنت میں دی"',
          },
        },
        {
          id: 'kawthar-pool',
          arabic: 'حَوْض الْكَوْثَر',
          transliteration: 'Hawd al-Kawthar',
          meaning: { en: 'The Pool on Judgment Day', ur: 'قیامت کا حوض', hi: 'क़यामत का हौज़' },
          details: {
            en: 'On Judgment Day, the Prophet ﷺ will have a pool from which believers will drink. Those who deviate will be turned away.',
            ur: 'قیامت کے دن نبی ﷺ کا حوض ہوگا جہاں سے ایماندار پئیں گے۔ گمراہ ہونے والوں کو واپس کر دیا جائے گا۔',
          },
        },
        {
          id: 'kawthar-followers',
          arabic: 'الأُمَّة',
          transliteration: 'Al-Ummah',
          meaning: { en: 'Billions of Followers', ur: 'کروڑوں پیروکار', hi: 'करोड़ों अनुयायी' },
          details: {
            en: 'Prophet Muhammad ﷺ has the largest following of any human in history - nearly 2 billion Muslims today, plus all believers from 1400+ years.',
            ur: 'محمد ﷺ کے تاریخ میں کسی بھی انسان سے زیادہ پیروکار ہیں - آج تقریباً 2 ارب مسلمان، نیز 1400+ سال کے تمام ایماندار۔',
          },
          characteristic: {
            en: 'The "abtar" (childless) Prophet has more spiritual children than anyone!',
            ur: '"ابتر" (بے اولاد) نبی کے سب سے زیادہ روحانی بچے ہیں!',
          },
        },
        {
          id: 'kawthar-quran',
          arabic: 'القُرْآن',
          transliteration: 'Al-Quran',
          meaning: { en: 'The Quran', ur: 'قرآن', hi: 'क़ुरआन' },
          details: {
            en: 'The greatest gift - a book preserved for 1400+ years, memorized by millions, recited daily by hundreds of millions.',
            ur: 'سب سے بڑا تحفہ - 1400+ سال سے محفوظ کتاب، لاکھوں کو یاد، کروڑوں روزانہ پڑھتے ہیں۔',
          },
        },
        {
          id: 'kawthar-intercession',
          arabic: 'الشَّفَاعَة',
          transliteration: 'Ash-Shafaah',
          meaning: { en: 'The Grand Intercession', ur: 'شفاعت عظمیٰ', hi: 'शफ़ाअत उज़मा' },
          details: {
            en: 'On Judgment Day, when all prophets say "nafsi nafsi" (myself!), Prophet Muhammad ﷺ will intercede for humanity.',
            ur: 'قیامت کے دن جب سب نبی کہیں گے "نفسی نفسی" (میں!)، محمد ﷺ انسانیت کی شفاعت کریں گے۔',
          },
        },
      ],
    },

    gratitudeResponse: {
      id: 'gratitude-response',
      label: { en: 'Response of Gratitude', ur: 'شکر کا جواب', hi: 'शुक्र का जवाब' },
      color: '#10B981',
      icon: 'Heart',
      description: {
        en: 'How to respond to Allah\'s blessings',
        ur: 'اللہ کی نعمتوں کا جواب کیسے دیں',
      },
      concepts: [
        {
          id: 'salah-response',
          arabic: 'فَصَلِّ لِرَبِّكَ',
          transliteration: 'Fa-salli li-Rabbik',
          meaning: { en: 'So pray to your Lord', ur: 'اپنے رب کے لیے نماز پڑھو', hi: 'अपने रब के लिए नमाज़ पढ़ो' },
          ayah: 2,
          details: {
            en: 'Prayer is the first response to blessing. It acknowledges the Giver, not just the gift.',
            ur: 'نماز نعمت کا پہلا جواب ہے۔ یہ عطا کرنے والے کو تسلیم کرتی ہے، صرف عطیے کو نہیں۔',
          },
          characteristic: {
            en: 'لِرَبِّكَ (for YOUR Lord) - exclusive worship, no shirk, no showing off',
            ur: 'لِرَبِّكَ (اپنے رب کے لیے) - خالص عبادت، شرک نہیں، ریاکاری نہیں',
          },
        },
        {
          id: 'sacrifice-response',
          arabic: 'وَانْحَرْ',
          transliteration: 'Wa-nhar',
          meaning: { en: 'And sacrifice', ur: 'اور قربانی کرو', hi: 'और क़ुर्बानी करो' },
          ayah: 2,
          details: {
            en: 'Physical worship through sacrifice - giving up wealth for Allah. This is the basis for Eid ul-Adha qurbani.',
            ur: 'قربانی سے جسمانی عبادت - اللہ کے لیے مال چھوڑنا۔ یہ عید الاضحیٰ کی قربانی کی بنیاد ہے۔',
          },
          characteristic: {
            en: 'Salah + Nahr = spiritual + material worship. Islam wants BOTH.',
            ur: 'صلاۃ + نحر = روحانی + مادی عبادت۔ اسلام دونوں چاہتا ہے۔',
          },
        },
      ],
    },

    victoryPromise: {
      id: 'victory-promise',
      label: { en: 'Victory Over Enemies', ur: 'دشمنوں پر فتح', hi: 'दुश्मनों पर फ़तह' },
      color: '#EF4444',
      icon: 'Trophy',
      description: {
        en: 'Allah\'s promise about the fate of those who mock His Messenger',
        ur: 'اللہ کا وعدہ ان کے بارے میں جو اس کے رسول کا مذاق اڑاتے ہیں',
      },
      concepts: [
        {
          id: 'the-hater',
          arabic: 'شَانِئَكَ',
          transliteration: "Shani'ak",
          meaning: { en: 'Your hater', ur: 'تمہارا دشمن', hi: 'तुम्हारा दुश्मन' },
          ayah: 3,
          details: {
            en: 'Refers to al-As ibn Wa\'il (or Abu Lahab) who called Prophet ﷺ "abtar" (cut-off) after his son died.',
            ur: 'عاص بن وائل (یا ابو لہب) کی طرف اشارہ ہے جس نے بیٹے کی وفات کے بعد نبی ﷺ کو "ابتر" (کٹا ہوا) کہا۔',
          },
          characteristic: {
            en: 'شَانِئ = active hater. Not just opponent, but someone with burning hatred.',
            ur: 'شَانِئ = فعال نفرت کرنے والا۔ صرف مخالف نہیں، بلکہ جلتی نفرت والا۔',
          },
        },
        {
          id: 'the-cut-off',
          arabic: 'الْأَبْتَرُ',
          transliteration: 'Al-Abtar',
          meaning: { en: 'The one cut off', ur: 'کٹا ہوا', hi: 'कटा हुआ' },
          ayah: 3,
          details: {
            en: 'The tables turn: the one who called Prophet ﷺ "abtar" is himself abtar - cut off from memory, legacy, and good.',
            ur: 'پانسے پلٹ گئے: جس نے نبی ﷺ کو "ابتر" کہا وہ خود ابتر ہے - یاد، میراث، اور خیر سے کٹا۔',
          },
          characteristic: {
            en: 'Who remembers al-As ibn Wa\'il today? But Prophet Muhammad ﷺ is mentioned 5 times a day in every adhan worldwide!',
            ur: 'آج عاص بن وائل کو کون جانتا ہے؟ مگر محمد ﷺ کا نام روزانہ 5 بار دنیا بھر کی اذان میں آتا ہے!',
          },
        },
      ],
    },

    historicalContext: {
      id: 'historical-context',
      label: { en: 'Historical Context', ur: 'تاریخی پس منظر', hi: 'ऐतिहासिक पृष्ठभूमि' },
      color: '#8B5CF6',
      icon: 'Book',
      description: {
        en: 'The circumstances of revelation',
        ur: 'نزول کے حالات',
      },
      concepts: [
        {
          id: 'sons-death',
          meaning: { en: 'Death of Prophet\'s Son', ur: 'نبی کے بیٹے کی وفات', hi: 'नबी के बेटे की वफ़ात' },
          details: {
            en: 'Prophet Muhammad ﷺ\'s son Qasim (or Abdullah) died in infancy. In Arab culture, a man without a son was considered "cut off" - his legacy would end.',
            ur: 'محمد ﷺ کے بیٹے قاسم (یا عبداللہ) بچپن میں وفات پا گئے۔ عرب ثقافت میں بیٹے کے بغیر آدمی "کٹا ہوا" سمجھا جاتا تھا - اس کی میراث ختم ہو جائے گی۔',
          },
        },
        {
          id: 'enemy-mockery',
          meaning: { en: 'Enemy Mocks Prophet', ur: 'دشمن کا مذاق', hi: 'दुश्मन का मज़ाक़' },
          details: {
            en: 'Al-As ibn Wa\'il said: "Leave Muhammad alone, he is abtar. When he dies, there will be no one to remember him."',
            ur: 'عاص بن وائل نے کہا: "محمد کو چھوڑ دو، وہ ابتر ہے۔ جب مر جائے گا، کوئی یاد کرنے والا نہیں ہوگا۔"',
          },
        },
        {
          id: 'allah-response',
          meaning: { en: 'Allah\'s Response', ur: 'اللہ کا جواب', hi: 'अल्लाह का जवाब' },
          details: {
            en: 'This surah was revealed: "We have given YOU abundance. YOUR hater is the one cut off." A prophecy fulfilled before our eyes.',
            ur: 'یہ سورہ نازل ہوئی: "ہم نے تمہیں کثرت دی۔ تمہارا دشمن کٹا ہوا ہے۔" ہماری آنکھوں کے سامنے پوری ہونے والی پیشگوئی۔',
          },
        },
      ],
    },
  },

  relationships: [
    {
      from: { en: 'Divine Gift (Kawthar)', ur: 'الہی عطیہ (کوثر)', ar: 'الْكَوْثَرُ' },
      to: { en: 'Worship Response', ur: 'عبادت کا جواب', ar: 'فَصَلِّ وَانْحَرْ' },
      type: 'cause-effect',
      explanation: {
        en: 'BECAUSE Allah gave you Kawthar, THEREFORE worship Him. Blessing demands gratitude.',
        ur: 'کیونکہ اللہ نے تمہیں کوثر دی، اس لیے اس کی عبادت کرو۔ نعمت شکر مانگتی ہے۔',
      },
    },
    {
      from: { en: 'Prayer (Salah)', ur: 'نماز', ar: 'صَلِّ' },
      to: { en: 'Sacrifice (Nahr)', ur: 'قربانی', ar: 'انْحَرْ' },
      type: 'parallel',
      explanation: {
        en: 'Two forms of worship: spiritual (prayer) + physical/material (sacrifice). Both are required.',
        ur: 'عبادت کی دو صورتیں: روحانی (نماز) + جسمانی/مادی (قربانی)۔ دونوں ضروری ہیں۔',
      },
    },
    {
      from: { en: 'Hater (Shani\')', ur: 'دشمن (شانئ)', ar: 'شَانِئَكَ' },
      to: { en: 'Cut Off (Abtar)', ur: 'کٹا ہوا (ابتر)', ar: 'الْأَبْتَرُ' },
      type: 'consequence',
      explanation: {
        en: 'The one who called Prophet ﷺ "abtar" becomes abtar himself. Divine justice.',
        ur: 'جس نے نبی ﷺ کو "ابتر" کہا وہ خود ابتر ہو گیا۔ الہی انصاف۔',
      },
    },
    {
      from: { en: 'Prophet\'s Legacy', ur: 'نبی کی میراث', ar: 'الذِّكْرُ' },
      to: { en: 'Enemy\'s Legacy', ur: 'دشمن کی میراث', ar: 'النِّسْيَان' },
      type: 'opposition',
      explanation: {
        en: 'Prophet remembered 5x daily in adhan worldwide. Enemy completely forgotten. Prophecy fulfilled.',
        ur: 'نبی روزانہ 5 بار دنیا بھر کی اذان میں یاد۔ دشمن مکمل بھلا دیا گیا۔ پیشگوئی پوری۔',
      },
    },
  ],

  thematicFlow: {
    title: {
      en: 'The Complete Cycle: Gift → Gratitude → Victory',
      ur: 'مکمل دائرہ: عطیہ → شکر → فتح',
      hi: 'मुकम्मल चक्र: अता → शुक्र → फ़तह',
    },
    stages: [
      {
        ayah: 1,
        stage: { en: 'The Divine Gift', ur: 'الہی عطیہ' },
        description: {
          en: 'Allah gives abundantly - Kawthar encompasses rivers, pools, followers, Quran, intercession, and eternal legacy.',
          ur: 'اللہ کثرت سے دیتا ہے - کوثر میں نہریں، حوض، پیروکار، قرآن، شفاعت، اور ابدی میراث شامل۔',
        },
        color: '#06B6D4',
      },
      {
        ayah: 2,
        stage: { en: 'The Grateful Response', ur: 'شکرگزار جواب' },
        description: {
          en: 'Respond with exclusive worship: prayer (spiritual) + sacrifice (material). Both directed solely to Allah.',
          ur: 'خالص عبادت سے جواب دو: نماز (روحانی) + قربانی (مادی)۔ دونوں صرف اللہ کے لیے۔',
        },
        color: '#10B981',
      },
      {
        ayah: 3,
        stage: { en: 'The Promised Victory', ur: 'وعدہ شدہ فتح' },
        description: {
          en: 'Your enemies will be cut off. Those who mock will be forgotten. Your legacy will endure forever.',
          ur: 'تمہارے دشمن کاٹ دیے جائیں گے۔ مذاق اڑانے والے بھلا دیے جائیں گے۔ تمہاری میراث ہمیشہ رہے گی۔',
        },
        color: '#EF4444',
      },
    ],
  },

  crossReferences: {
    title: {
      en: 'Related Verses in Other Surahs',
      ur: 'دیگر سورتوں میں متعلقہ آیات',
    },
    references: [
      {
        surah: 94,
        ayah: 4,
        name: { en: 'Ash-Sharh', ur: 'الشرح' },
        arabic: 'وَرَفَعْنَا لَكَ ذِكْرَكَ',
        connection: {
          en: '"And We raised high for you your mention." Same theme - Prophet\'s fame is elevated by Allah.',
          ur: '"اور ہم نے تمہارا ذکر بلند کیا۔" وہی موضوع - نبی کی شہرت اللہ نے بڑھائی۔',
        },
      },
      {
        surah: 15,
        ayah: 9,
        name: { en: 'Al-Hijr', ur: 'الحجر' },
        arabic: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
        connection: {
          en: '"We sent down the Reminder and We preserve it." Part of Kawthar - the Quran preserved.',
          ur: '"ہم نے ذکر نازل کیا اور ہم اسے محفوظ رکھیں گے۔" کوثر کا حصہ - قرآن محفوظ۔',
        },
      },
      {
        surah: 33,
        ayah: 56,
        name: { en: 'Al-Ahzab', ur: 'الاحزاب' },
        arabic: 'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ',
        connection: {
          en: '"Allah and His angels send blessings on the Prophet." Another form of Kawthar - divine honor.',
          ur: '"اللہ اور فرشتے نبی پر درود بھیجتے ہیں۔" کوثر کی ایک اور صورت - الہی عزت۔',
        },
      },
      {
        surah: 111,
        name: { en: 'Al-Masad (Abu Lahab)', ur: 'المسد (ابو لہب)' },
        connection: {
          en: 'Another enemy (Abu Lahab) cursed in the Quran. Similar theme of enemies being cut off.',
          ur: 'ایک اور دشمن (ابو لہب) قرآن میں لعنت شدہ۔ دشمنوں کے کٹ جانے کا ملتا جلتا موضوع۔',
        },
      },
    ],
  },

  hadith: {
    virtue: {
      text: {
        ar: 'الْكَوْثَرُ نَهْرٌ فِي الْجَنَّةِ حَافَتَاهُ مِنْ ذَهَبٍ وَمَجْرَاهُ عَلَى الدُّرِّ وَالْيَاقُوتِ',
        en: 'Al-Kawthar is a river in Paradise, its banks are of gold, and it flows over pearls and rubies.',
        ur: 'کوثر جنت کی نہر ہے، اس کے کنارے سونے کے ہیں، اور یہ موتیوں اور یاقوت پر بہتی ہے۔',
      },
      source: 'Sahih al-Tirmidhi',
      narrator: 'Anas ibn Malik',
    },
    additional: [
      {
        text: {
          en: 'This surah is equivalent to one-third of the Quran.',
          ur: 'یہ سورت قرآن کے تہائی کے برابر ہے۔',
        },
        source: 'Some scholars\' opinions',
        note: { en: 'Due to its complete meaning in just 3 verses', ur: 'صرف 3 آیات میں مکمل مفہوم کی وجہ سے' },
      },
    ],
  },

  comparisonTable: {
    title: { en: 'The Reversal of Fortune', ur: 'قسمت کی تبدیلی' },
    headers: {
      aspect: { en: 'Aspect', ur: 'پہلو' },
      enemy: { en: 'Enemy Said', ur: 'دشمن نے کہا' },
      reality: { en: 'Reality Today', ur: 'آج کی حقیقت' },
    },
    rows: [
      {
        aspect: { en: 'Offspring/Legacy', ur: 'اولاد/میراث' },
        enemy: { en: '"He has no sons, he is abtar"', ur: '"اس کے بیٹے نہیں، وہ ابتر ہے"' },
        reality: { en: '2 billion spiritual children', ur: '2 ارب روحانی بچے' },
      },
      {
        aspect: { en: 'Memory', ur: 'یاد' },
        enemy: { en: '"He will be forgotten"', ur: '"وہ بھلا دیا جائے گا"' },
        reality: { en: 'Mentioned 5x daily in every adhan', ur: 'ہر اذان میں روزانہ 5 بار ذکر' },
      },
      {
        aspect: { en: 'Influence', ur: 'اثر' },
        enemy: { en: '"His message will die"', ur: '"اس کا پیغام مر جائے گا"' },
        reality: { en: 'Most influential human ever', ur: 'تاریخ کا سب سے بااثر انسان' },
      },
      {
        aspect: { en: 'Who is Abtar?', ur: 'ابتر کون؟' },
        enemy: { en: '"Muhammad is abtar"', ur: '"محمد ابتر ہے"' },
        reality: { en: 'Enemy is completely forgotten', ur: 'دشمن مکمل بھلا دیا گیا' },
      },
    ],
  },

  uniqueInsight: {
    title: { en: 'The Shortest Surah, The Biggest Victory', ur: 'سب سے چھوٹی سورت، سب سے بڑی فتح' },
    content: {
      en: 'In just 10 words and 3 verses, Allah delivers the complete answer to every enemy of Islam: You cannot defeat what Allah has blessed. The enemy who mocked the Prophet ﷺ for having no legacy is himself forgotten, while Prophet Muhammad ﷺ is the most mentioned human name on earth - called 5 times a day in every adhan, from Tokyo to Toronto.',
      ur: 'صرف 10 الفاظ اور 3 آیات میں اللہ اسلام کے ہر دشمن کو مکمل جواب دیتا ہے: جسے اللہ نے برکت دی اسے تم شکست نہیں دے سکتے۔ جس دشمن نے بے میراث ہونے پر نبی ﷺ کا مذاق اڑایا وہ خود بھلا دیا گیا، جبکہ محمد ﷺ زمین پر سب سے زیادہ پکارا جانے والا انسانی نام ہے - ٹوکیو سے ٹورنٹو تک ہر اذان میں روزانہ 5 بار۔',
    },
  },

  practicalLessons: {
    title: { en: 'Lessons for Us', ur: 'ہمارے لیے سبق' },
    lessons: [
      {
        lesson: { en: 'Gratitude over Grievance', ur: 'شکایت پر شکر' },
        explanation: {
          en: 'When enemies mock you, focus on Allah\'s blessings, not their insults.',
          ur: 'جب دشمن مذاق اڑائیں، اللہ کی نعمتوں پر توجہ دو، ان کی توہین پر نہیں۔',
        },
      },
      {
        lesson: { en: 'Worship is the Response', ur: 'عبادت جواب ہے' },
        explanation: {
          en: 'Don\'t waste time arguing with haters. Channel energy into prayer and sacrifice.',
          ur: 'نفرت کرنے والوں سے بحث میں وقت ضائع نہ کرو۔ توانائی نماز اور قربانی میں لگاؤ۔',
        },
      },
      {
        lesson: { en: 'Trust Allah\'s Justice', ur: 'اللہ کے انصاف پر بھروسہ' },
        explanation: {
          en: 'Your enemies will be "cut off." You don\'t need to take revenge - Allah will.',
          ur: 'تمہارے دشمن "کاٹ" دیے جائیں گے۔ بدلہ لینے کی ضرورت نہیں - اللہ لے گا۔',
        },
      },
    ],
  },
};

export default SURAH_108_ONTOLOGY;
