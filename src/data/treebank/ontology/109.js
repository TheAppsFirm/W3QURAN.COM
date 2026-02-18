/**
 * Surah Al-Kafirun (109) - Ontology of Quranic Concepts
 * The Surah of Complete Religious Distinction
 *
 * Theme: Absolute rejection of shirk, declaration of religious freedom
 * Recitation: Recommended before sleep (one of the protective "Quls")
 */

const SURAH_109_ONTOLOGY = {
  surahId: 109,
  name: {
    en: 'Al-Kafirun - The Declaration of Distinction',
    ur: 'الکافرون - علیحدگی کا اعلان',
    hi: 'अल-काफ़िरून - अलग-अलग होने का एलान',
    ar: 'الكافرون',
  },
  description: {
    en: 'A surah of absolute clarity: no compromise on tawheed, no mixing of truth with falsehood. The Prophet ﷺ declares total rejection of idol worship while establishing the principle of religious coexistence - "your religion for you, my religion for me."',
    ur: 'مطلق وضاحت کی سورہ: توحید پر کوئی سمجھوتہ نہیں، سچ کو جھوٹ کے ساتھ نہیں ملانا۔ نبی ﷺ بت پرستی کا مکمل انکار کرتے ہیں جبکہ مذہبی ہم آہنگی کا اصول قائم کرتے ہیں - "تمہارا دین تمہیں، میرا دین مجھے۔"',
    hi: 'मुतलक़ वज़ाहत की सूरह: तौहीद पर कोई समझौता नहीं, सच को झूठ के साथ नहीं मिलाना। नबी ﷺ बुत परस्ती का मुकम्मल इंकार करते हैं जबकि मज़हबी हम-आहंगी का उसूल क़ायम करते हैं।',
  },

  categories: {
    context: {
      id: 'context',
      label: { en: 'Historical Context', ur: 'تاریخی پس منظر', hi: 'ऐतिहासिक पृष्ठभूमि' },
      color: '#8B5CF6',
      icon: 'Book',
      description: {
        en: 'Why this surah was revealed',
        ur: 'یہ سورہ کیوں نازل ہوئی',
      },
      concepts: [
        {
          id: 'quraysh-proposal',
          meaning: { en: 'The Quraysh Proposal', ur: 'قریش کی تجویز', hi: 'क़ुरैश का प्रस्ताव' },
          details: {
            en: 'Quraysh leaders offered a "compromise": worship our gods one year, we worship your God next year. Alternate between religions. This surah was revealed as Allah\'s emphatic NO.',
            ur: 'قریش سرداروں نے "سمجھوتے" کی پیشکش کی: ایک سال ہمارے معبودوں کی پوجا کرو، اگلے سال ہم تمہارے اللہ کی کریں۔ ادل بدل کر۔ یہ سورہ اللہ کا قطعی انکار ہے۔',
          },
          characteristic: {
            en: 'Truth cannot be mixed with falsehood, even partially or temporarily.',
            ur: 'سچ کو جھوٹ کے ساتھ نہیں ملایا جا سکتا، جزوی یا عارضی طور پر بھی نہیں۔',
          },
        },
      ],
    },

    rejection: {
      id: 'rejection',
      label: { en: 'The Rejection', ur: 'انکار', hi: 'इंकार' },
      color: '#EF4444',
      icon: 'X',
      description: {
        en: 'Complete rejection of shirk in all times',
        ur: 'ہر زمانے میں شرک کا مکمل انکار',
      },
      concepts: [
        {
          id: 'la-abudu-present',
          arabic: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
          transliteration: "La A'budu Ma Ta'budun",
          meaning: { en: 'I do not worship what you worship', ur: 'میں اس کی عبادت نہیں کرتا جس کی تم کرتے ہو', hi: 'मैं उसकी इबादत नहीं करता जिसकी तुम करते हो' },
          ayah: 2,
          details: {
            en: 'PRESENT rejection - I do NOT now worship your idols. What I worship (Allah) is completely different from your objects.',
            ur: 'حال کا انکار - میں ابھی تمہارے بتوں کی عبادت نہیں کرتا۔ جس کی میں عبادت کرتا ہوں (اللہ) تمہاری چیزوں سے بالکل مختلف ہے۔',
          },
        },
        {
          id: 'la-abid-past',
          arabic: 'وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ',
          transliteration: "Wa-la Ana 'Abidun Ma 'Abadtum",
          meaning: { en: 'Nor am I a worshipper of what you worshipped', ur: 'نہ میں اس کا عبادت گزار جس کی تم نے عبادت کی', hi: 'न मैं उसका इबादत गुज़ार जिसकी तुमने इबादत की' },
          ayah: 4,
          details: {
            en: 'PAST rejection - I never was and never will be a worshipper of what you have worshipped throughout your history.',
            ur: 'ماضی کا انکار - میں کبھی نہیں تھا اور نہ کبھی ہوں گا اس کا عبادت گزار جس کی تم نے پوری تاریخ میں عبادت کی۔',
          },
        },
        {
          id: 'antum-not-worshippers',
          arabic: 'وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ',
          transliteration: "Wa-la Antum 'Abiduna Ma A'bud",
          meaning: { en: 'Nor are you worshippers of what I worship', ur: 'نہ تم اس کے عبادت گزار جس کی میں عبادت کرتا ہوں', hi: 'न तुम उसके इबादत गुज़ार जिसकी मैं इबादत करता हूँ' },
          ayah: '3,5',
          details: {
            en: 'Repeated twice (ayah 3 and 5) for present and future - you are NOT now and will NOT become worshippers of Allah.',
            ur: 'دو بار دہرایا (آیت 3 اور 5) حال اور مستقبل کے لیے - تم ابھی نہیں ہو اور نہ اللہ کے عبادت گزار بنو گے۔',
          },
          characteristic: {
            en: 'Some scholars say this was a prophecy - these specific disbelievers never accepted Islam.',
            ur: 'کچھ علماء کہتے ہیں یہ پیشگوئی تھی - یہ مخصوص کافر کبھی اسلام نہیں لائے۔',
          },
        },
      ],
    },

    distinctionPrinciple: {
      id: 'distinction-principle',
      label: { en: 'The Distinction Principle', ur: 'علیحدگی کا اصول', hi: 'अलग-अलग होने का उसूल' },
      color: '#10B981',
      icon: 'GitBranch',
      description: {
        en: 'Clear separation between truth and falsehood',
        ur: 'سچ اور جھوٹ کے درمیان واضح علیحدگی',
      },
      concepts: [
        {
          id: 'lakum-dinukum',
          arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
          transliteration: 'Lakum Dinukum wa-liya Din',
          meaning: { en: 'For you is your religion, and for me is mine', ur: 'تمہارے لیے تمہارا دین اور میرے لیے میرا', hi: 'तुम्हारे लिए तुम्हारा दीन और मेरे लिए मेरा' },
          ayah: 6,
          details: {
            en: 'The definitive conclusion. Not compromise, but clear distinction. I won\'t worship idols, and I don\'t expect you (now) to worship Allah.',
            ur: 'حتمی نتیجہ۔ سمجھوتہ نہیں، بلکہ واضح علیحدگی۔ میں بت نہیں پوجوں گا، اور (ابھی) تم سے اللہ کی عبادت کی توقع نہیں۔',
          },
          characteristic: {
            en: 'This is NOT approval of shirk. It is declaration of incompatibility.',
            ur: 'یہ شرک کی منظوری نہیں۔ یہ عدم مطابقت کا اعلان ہے۔',
          },
        },
      ],
    },

    repetitionWisdom: {
      id: 'repetition-wisdom',
      label: { en: 'Wisdom of Repetition', ur: 'تکرار کی حکمت', hi: 'तकरार की हिकमत' },
      color: '#F59E0B',
      icon: 'Repeat',
      description: {
        en: 'Why verses seem to repeat',
        ur: 'آیات تکراری کیوں لگتی ہیں',
      },
      concepts: [
        {
          id: 'time-coverage',
          meaning: { en: 'Complete Time Coverage', ur: 'مکمل وقت کا احاطہ', hi: 'मुकम्मल वक़्त का एहाता' },
          details: {
            en: 'Ayah 2: PRESENT worship (تَعْبُدُونَ). Ayah 4: PAST worship (عَبَدتُّمْ). Together: I reject ALL of it - what you worship now and what you have always worshipped.',
            ur: 'آیت 2: حال کی عبادت (تَعْبُدُونَ)۔ آیت 4: ماضی کی عبادت (عَبَدتُّمْ)۔ ملا کر: میں سب کو رد کرتا ہوں - جو ابھی پوجتے ہو اور جو ہمیشہ پوجتے آئے۔',
          },
        },
        {
          id: 'emphasis-through-repetition',
          meaning: { en: 'Emphasis Through Repetition', ur: 'تکرار سے تاکید', hi: 'तकरार से ताकीद' },
          details: {
            en: 'Saying "no" FOUR times (لَا in ayahs 2,3,4,5) leaves zero ambiguity. No room for misunderstanding.',
            ur: '"نہیں" چار بار کہنا (آیات 2,3,4,5 میں لَا) کوئی ابہام نہیں چھوڑتا۔ غلط فہمی کی گنجائش نہیں۔',
          },
        },
        {
          id: 'prophecy-element',
          meaning: { en: 'Prophecy Element', ur: 'پیشگوئی کا پہلو', hi: 'पेशगोई का पहलू' },
          details: {
            en: 'Ayah 3 (present): You are not worshippers. Ayah 5 (future): You will not become worshippers. The addressed disbelievers died as such.',
            ur: 'آیت 3 (حال): تم عبادت گزار نہیں۔ آیت 5 (مستقبل): تم عبادت گزار نہیں بنو گے۔ مخاطب کافر ایسے ہی مرے۔',
          },
        },
      ],
    },

    religiousFreedom: {
      id: 'religious-freedom',
      label: { en: 'Religious Freedom', ur: 'مذہبی آزادی', hi: 'मज़हबी आज़ादी' },
      color: '#3B82F6',
      icon: 'Shield',
      description: {
        en: 'What this surah teaches about coexistence',
        ur: 'یہ سورہ ہم آہنگی کے بارے میں کیا سکھاتی ہے',
      },
      concepts: [
        {
          id: 'no-forced-conversion',
          meaning: { en: 'No Forced Conversion', ur: 'جبری تبدیلی نہیں', hi: 'जबरी तब्दीली नहीं' },
          details: {
            en: '"Your religion for you, mine for me" - I won\'t force you, and you cannot force me. Clear boundaries.',
            ur: '"تمہارا دین تمہیں، میرا مجھے" - میں تم پر جبر نہیں کروں گا، اور تم مجھ پر نہیں کر سکتے۔ واضح حدود۔',
          },
        },
        {
          id: 'clear-identity',
          meaning: { en: 'Clear Religious Identity', ur: 'واضح مذہبی شناخت', hi: 'वाज़ेह मज़हबी पहचान' },
          details: {
            en: 'Coexistence ≠ syncretism. Living together peacefully does NOT mean mixing religions or compromising beliefs.',
            ur: 'ہم آہنگی ≠ ملاوٹ۔ پرامن رہنا مذاہب کو ملانا یا عقائد پر سمجھوتہ نہیں ہے۔',
          },
        },
      ],
    },
  },

  relationships: [
    {
      from: { en: 'What I worship (Allah)', ur: 'جس کی میں عبادت کرتا ہوں (اللہ)', ar: 'مَا أَعْبُدُ' },
      to: { en: 'What you worship (idols)', ur: 'جس کی تم عبادت کرتے ہو (بت)', ar: 'مَا تَعْبُدُونَ' },
      type: 'opposition',
      explanation: {
        en: 'Complete opposition - these are not two versions of the same thing. They are entirely different.',
        ur: 'مکمل تضاد - یہ ایک چیز کے دو ورژن نہیں۔ یہ بالکل مختلف ہیں۔',
      },
    },
    {
      from: { en: 'Present Worship (تَعْبُدُونَ)', ur: 'حال کی عبادت', ar: 'تَعْبُدُونَ' },
      to: { en: 'Past Worship (عَبَدتُّمْ)', ur: 'ماضی کی عبادت', ar: 'عَبَدتُّمْ' },
      type: 'time-contrast',
      explanation: {
        en: 'Both rejected - I reject what you worship now AND what you have always worshipped.',
        ur: 'دونوں مسترد - میں رد کرتا ہوں جو اب پوجتے ہو اور جو ہمیشہ پوجتے رہے۔',
      },
    },
    {
      from: { en: 'Ayah 3', ur: 'آیت 3', ar: 'عَابِدُونَ (حال)' },
      to: { en: 'Ayah 5', ur: 'آیت 5', ar: 'عَابِدُونَ (مستقبل)' },
      type: 'time-progression',
      explanation: {
        en: 'You are NOT now worshippers (3) → You will NOT become worshippers (5). Present and future denial.',
        ur: 'تم ابھی عبادت گزار نہیں (3) → تم عبادت گزار نہیں بنو گے (5)۔ حال اور مستقبل کا انکار۔',
      },
    },
  ],

  thematicFlow: {
    title: {
      en: 'The Structure of Separation',
      ur: 'علیحدگی کا ڈھانچہ',
      hi: 'अलग-अलग होने का ढाँचा',
    },
    stages: [
      {
        ayah: 1,
        stage: { en: 'The Address', ur: 'خطاب' },
        description: {
          en: 'Direct confrontation: "Say, O disbelievers!" - no intermediary, face to face declaration.',
          ur: 'براہ راست مقابلہ: "کہو، اے کافرو!" - کوئی واسطہ نہیں، روبرو اعلان۔',
        },
        color: '#8B5CF6',
      },
      {
        ayah: 2,
        stage: { en: 'Present Rejection', ur: 'حال کا انکار' },
        description: {
          en: 'I do NOT worship what you currently worship. My present practice is pure tawheed.',
          ur: 'میں اس کی عبادت نہیں کرتا جس کی تم ابھی کرتے ہو۔ میرا موجودہ عمل خالص توحید ہے۔',
        },
        color: '#EF4444',
      },
      {
        ayah: 3,
        stage: { en: 'Their Present State', ur: 'ان کی موجودہ حالت' },
        description: {
          en: 'And you are NOT worshippers of Allah - now. You have not accepted truth.',
          ur: 'اور تم اللہ کے عبادت گزار نہیں - ابھی۔ تم نے سچائی قبول نہیں کی۔',
        },
        color: '#F59E0B',
      },
      {
        ayah: 4,
        stage: { en: 'Past Rejection', ur: 'ماضی کا انکار' },
        description: {
          en: 'I am NOT and never was a worshipper of what you have been worshipping throughout history.',
          ur: 'میں نہیں ہوں اور کبھی نہیں تھا اس کا عبادت گزار جس کی تم پوری تاریخ میں پوجتے رہے۔',
        },
        color: '#EF4444',
      },
      {
        ayah: 5,
        stage: { en: 'Their Future State', ur: 'ان کا مستقبل' },
        description: {
          en: 'And you will NOT become worshippers of Allah - prophecy that they will die as disbelievers.',
          ur: 'اور تم اللہ کے عبادت گزار نہیں بنو گے - پیشگوئی کہ کافر مریں گے۔',
        },
        color: '#F59E0B',
      },
      {
        ayah: 6,
        stage: { en: 'The Conclusion', ur: 'نتیجہ' },
        description: {
          en: 'Final declaration: Your way is yours, mine is mine. Complete separation, clear distinction.',
          ur: 'آخری اعلان: تمہارا راستہ تمہارا، میرا میرا۔ مکمل علیحدگی، واضح فرق۔',
        },
        color: '#10B981',
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
        surah: 2,
        ayah: 256,
        name: { en: 'Al-Baqarah', ur: 'البقرہ' },
        arabic: 'لَا إِكْرَاهَ فِي الدِّينِ',
        connection: {
          en: '"No compulsion in religion." Same principle of religious freedom.',
          ur: '"دین میں کوئی جبر نہیں۔" مذہبی آزادی کا وہی اصول۔',
        },
      },
      {
        surah: 10,
        ayah: 41,
        name: { en: 'Yunus', ur: 'یونس' },
        arabic: 'لَكُمْ عَمَلُكُمْ وَلِيَ عَمَلِي',
        connection: {
          en: '"For you your deeds, and for me my deeds." Same formula of distinction.',
          ur: '"تمہارے اعمال تمہیں اور میرے اعمال مجھے۔" علیحدگی کا وہی فارمولا۔',
        },
      },
      {
        surah: 112,
        name: { en: 'Al-Ikhlas', ur: 'الاخلاص' },
        connection: {
          en: 'Al-Ikhlas describes WHAT I worship (Allah, One, Eternal). Al-Kafirun declares I worship ONLY Him.',
          ur: 'الاخلاص بتاتی ہے کیا پوجتا ہوں (اللہ، ایک، قائم)۔ الکافرون اعلان کرتی ہے صرف اسی کی۔',
        },
      },
    ],
  },

  hadith: {
    virtue: {
      text: {
        ar: 'مَنْ قَرَأَ قُلْ يَا أَيُّهَا الْكَافِرُونَ كَانَتْ لَهُ عَدْلَ رُبْعِ الْقُرْآنِ',
        en: 'Whoever recites "Qul ya ayyuhal kafirun" - it will be equivalent to a quarter of the Quran for him.',
        ur: 'جو "قل یا ایھا الکافرون" پڑھے اس کے لیے قرآن کے ایک چوتھائی کے برابر ہے۔',
      },
      source: 'Sunan at-Tirmidhi',
    },
    additional: [
      {
        text: {
          en: 'Recite "Qul ya ayyuhal kafirun" then sleep upon its conclusion, you will be free from shirk.',
          ur: '"قل یا ایھا الکافرون" پڑھو پھر اس کے اختتام پر سو جاؤ، شرک سے بری ہو جاؤ گے۔',
        },
        source: 'Sunan Abu Dawud',
      },
    ],
  },

  practicalApplication: {
    title: { en: 'When to Recite', ur: 'کب پڑھیں' },
    situations: [
      {
        situation: { en: 'Before sleep', ur: 'سونے سے پہلے' },
        benefit: { en: 'Protection from shirk, dies upon tawheed', ur: 'شرک سے حفاظت، توحید پر موت' },
      },
      {
        situation: { en: 'In witr prayer (1st rakah)', ur: 'وتر نماز میں (پہلی رکعت)' },
        benefit: { en: 'Sunnah of the Prophet ﷺ', ur: 'نبی ﷺ کی سنت' },
      },
      {
        situation: { en: 'When facing religious pressure/compromise', ur: 'مذہبی دباؤ/سمجھوتے کا سامنا' },
        benefit: { en: 'Strengthens resolve against mixing truth with falsehood', ur: 'سچ کو جھوٹ سے ملانے کے خلاف عزم مضبوط' },
      },
    ],
  },

  uniqueInsight: {
    title: { en: 'No Compromise, But No Force', ur: 'سمجھوتہ نہیں، مگر جبر بھی نہیں' },
    content: {
      en: 'This surah teaches two complementary truths: (1) NO compromise on tawheed - truth cannot be mixed with falsehood, even partially. (2) NO forced conversion - each person has their path. The surah doesn\'t say "become Muslims or else." It says "you do yours, I do mine." This is the Islamic model: absolute clarity of belief + peaceful coexistence. The Prophet ﷺ lived among polytheists in Mecca for years, never forcing anyone, but also never compromising his message.',
      ur: 'یہ سورہ دو تکمیلی سچائیاں سکھاتی ہے: (1) توحید پر کوئی سمجھوتہ نہیں - سچ کو جھوٹ سے نہیں ملایا جا سکتا، جزوی طور پر بھی۔ (2) جبری تبدیلی نہیں - ہر شخص کا اپنا راستہ۔ سورہ نہیں کہتی "مسلمان بنو ورنہ۔" کہتی ہے "تم اپنا کرو، میں اپنا۔" یہ اسلامی ماڈل ہے: عقیدے کی مطلق وضاحت + پرامن ہم آہنگی۔ نبی ﷺ مکہ میں مشرکین کے درمیان سالوں رہے، کبھی جبر نہیں کیا، مگر پیغام پر سمجھوتہ بھی نہیں۔',
    },
  },
};

export default SURAH_109_ONTOLOGY;
