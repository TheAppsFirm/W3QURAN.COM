/**
 * Surah Al-Falaq (113) - Ontology of Quranic Concepts
 * The Surah of Seeking Refuge from External Evils
 *
 * Theme: Protection from created evils - darkness, magic, envy
 * Part of: Al-Mu'awwidhatayn (The Two Protections) with An-Nas
 */

const SURAH_113_ONTOLOGY = {
  surahId: 113,
  name: {
    en: 'Al-Falaq - Seeking Refuge from External Evils',
    ur: 'الفلق - بیرونی برائیوں سے پناہ',
    hi: 'अल-फ़लक़ - बाहरी बुराइयों से पनाह',
    ar: 'الفلق',
  },
  description: {
    en: 'Protection from evils outside ourselves - darkness, magic, and the evil eye. Together with An-Nas, these are the "Mu\'awwidhatayn" (Two Protections).',
    ur: 'اپنے باہر کی برائیوں سے حفاظت - اندھیرا، جادو، اور نظر بد۔ سورۃ الناس کے ساتھ یہ "معوذتین" (دو پناہیں) ہیں۔',
    hi: 'अपने बाहर की बुराइयों से हिफ़ाज़त - अँधेरा, जादू, और नज़र बद। सूरह अन-नास के साथ यह "मुअव्विज़तैन" हैं।',
  },

  categories: {
    protector: {
      id: 'protector',
      label: { en: 'The Protector', ur: 'محافظ', hi: 'हिफ़ाज़त करने वाला' },
      color: '#8B5CF6',
      icon: 'Shield',
      description: {
        en: 'Allah as the ultimate source of protection',
        ur: 'اللہ حفاظت کا حتمی ذریعہ',
      },
      concepts: [
        {
          id: 'rabb-al-falaq',
          arabic: 'رَبِّ الْفَلَقِ',
          transliteration: 'Rabb al-Falaq',
          meaning: { en: 'Lord of the Daybreak', ur: 'صبح کا رب', hi: 'सुबह का रब' },
          ayah: 1,
          details: {
            en: 'Allah who splits darkness with light. Just as He brings dawn after night, He protects from all darkness/evil.',
            ur: 'اللہ جو روشنی سے اندھیرا چیرتا ہے۔ جیسے رات کے بعد صبح لاتا ہے، تمام اندھیرے/برائی سے بچاتا ہے۔',
          },
        },
        {
          id: 'isti-adhah',
          arabic: 'الاِسْتِعَاذَة',
          transliteration: "Al-Isti'adhah",
          meaning: { en: 'Seeking Refuge', ur: 'پناہ مانگنا', hi: 'पनाह माँगना' },
          details: {
            en: 'The act of أَعُوذُ - actively seeking Allah\'s protection. A form of worship and acknowledgment of His power.',
            ur: 'أَعُوذُ کا عمل - فعال طور پر اللہ کی حفاظت مانگنا۔ عبادت اور اس کی طاقت کا اعتراف۔',
          },
          characteristic: {
            en: 'Saying "A\'udhu" is not weakness - it is strength through reliance on Allah',
            ur: '"أَعُوذُ" کہنا کمزوری نہیں - اللہ پر بھروسے سے طاقت ہے',
          },
        },
      ],
    },

    externalEvils: {
      id: 'external-evils',
      label: { en: 'External Evils', ur: 'بیرونی برائیاں', hi: 'बाहरी बुराइयाँ' },
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: {
        en: 'Four types of evil we seek protection from',
        ur: 'چار قسم کی برائیاں جن سے پناہ مانگتے ہیں',
      },
      concepts: [
        {
          id: 'sharr-ma-khalaq',
          arabic: 'شَرِّ مَا خَلَقَ',
          transliteration: 'Sharri ma Khalaq',
          meaning: { en: 'Evil of what He created', ur: 'مخلوقات کا شر', hi: 'मख़लूक़ात का शर' },
          ayah: 2,
          details: {
            en: 'General: All harmful things - seen and unseen, known and unknown. Comprehensive protection.',
            ur: 'عمومی: تمام نقصان دہ چیزیں - دکھائی دینے والی اور نہ دینے والی۔ جامع حفاظت۔',
          },
          characteristic: {
            en: '⚠️ Even "good" creation can harm - fire, water, animals, humans',
            ur: '⚠️ "اچھی" مخلوق بھی نقصان دے سکتی ہے - آگ، پانی، جانور، انسان',
          },
        },
        {
          id: 'ghasiq',
          arabic: 'غَاسِقٍ إِذَا وَقَبَ',
          transliteration: 'Ghasiqin idha Waqab',
          meaning: { en: 'Darkness when it settles', ur: 'اندھیرا جب چھا جائے', hi: 'अँधेरा जब छा जाए' },
          ayah: 3,
          details: {
            en: 'Night at its darkest - when evil creatures (jinn, criminals, predators) are most active.',
            ur: 'رات کا گہرا اندھیرا - جب شریر مخلوقات (جنات، مجرم، درندے) سب سے زیادہ سرگرم۔',
          },
        },
        {
          id: 'naffathat',
          arabic: 'النَّفَّاثَاتِ فِي الْعُقَدِ',
          transliteration: "An-Naffathat fi al-'Uqad",
          meaning: { en: 'Those who blow on knots', ur: 'گرہوں میں پھونکنے والیاں', hi: 'गाँठों में फूँकने वालियाँ' },
          ayah: 4,
          details: {
            en: 'Magicians/sorcerers who practice black magic by tying knots and blowing incantations. Magic is real.',
            ur: 'جادوگر جو گرہیں باندھ کر اور پھونک مار کر کالا جادو کرتے ہیں۔ جادو حقیقی ہے۔',
          },
          characteristic: {
            en: '⚠️ The Prophet ﷺ was affected by magic - Surah Al-Falaq was revealed for his cure',
            ur: '⚠️ نبی ﷺ پر جادو کیا گیا - سورۃ الفلق ان کے علاج کے لیے نازل ہوئی',
          },
        },
        {
          id: 'hasid',
          arabic: 'حَاسِدٍ إِذَا حَسَدَ',
          transliteration: 'Hasidin idha Hasad',
          meaning: { en: 'An envier when he envies', ur: 'حسد کرنے والا جب حسد کرے', hi: 'हसद करने वाला जब हसद करे' },
          ayah: 5,
          details: {
            en: 'Jealousy that moves to action - evil eye, harm, plotting. "إِذَا حَسَدَ" = when acting on envy.',
            ur: 'حسد جو عمل میں بدل جائے - نظر بد، نقصان، سازش۔ "إِذَا حَسَدَ" = جب حسد پر عمل کرے۔',
          },
          characteristic: {
            en: '⚠️ "The evil eye is real and can put a person in the grave" - Hadith',
            ur: '⚠️ "نظر بد حق ہے اور انسان کو قبر میں ڈال سکتی ہے" - حدیث',
          },
        },
      ],
    },

    protection: {
      id: 'protection',
      label: { en: 'Means of Protection', ur: 'حفاظت کے ذرائع', hi: 'हिफ़ाज़त के ज़रिए' },
      color: '#10B981',
      icon: 'Shield',
      description: {
        en: 'How to protect ourselves from these evils',
        ur: 'ان برائیوں سے کیسے بچیں',
      },
      concepts: [
        {
          id: 'recitation',
          arabic: 'التِّلَاوَة',
          transliteration: 'At-Tilawah',
          meaning: { en: 'Recitation', ur: 'تلاوت', hi: 'तिलावत' },
          details: {
            en: 'Recite Al-Falaq and An-Nas morning, evening, and before sleep. The Prophet ﷺ did this daily.',
            ur: 'الفلق اور الناس صبح، شام اور سونے سے پہلے پڑھیں۔ نبی ﷺ روزانہ ایسا کرتے۔',
          },
        },
        {
          id: 'ruqyah',
          arabic: 'الرُّقْيَة',
          transliteration: 'Ar-Ruqyah',
          meaning: { en: 'Quranic Healing', ur: 'قرآنی علاج', hi: 'क़ुरआनी इलाज' },
          details: {
            en: 'Use these surahs for ruqyah (spiritual healing) - blow on hands after reciting and wipe over body.',
            ur: 'ان سورتوں کو رقیہ (روحانی علاج) کے لیے استعمال کریں - پڑھ کر ہاتھوں پر پھونکیں اور جسم پر پھیریں۔',
          },
        },
        {
          id: 'tawakkul',
          arabic: 'التَّوَكُّل',
          transliteration: 'At-Tawakkul',
          meaning: { en: 'Reliance on Allah', ur: 'اللہ پر بھروسہ', hi: 'अल्लाह पर भरोसा' },
          details: {
            en: 'Ultimate protection is through تَوَكُّل - trusting that Allah is sufficient protection.',
            ur: 'حتمی حفاظت تَوَكُّل سے - یقین رکھنا کہ اللہ کافی محافظ ہے۔',
          },
        },
      ],
    },

    symbolism: {
      id: 'symbolism',
      label: { en: 'Deeper Meanings', ur: 'گہرے معانی', hi: 'गहरे मानी' },
      color: '#F59E0B',
      icon: 'Lightbulb',
      description: {
        en: 'Symbolic and metaphorical interpretations',
        ur: 'علامتی اور استعاراتی تفسیر',
      },
      concepts: [
        {
          id: 'light-vs-dark',
          arabic: 'النُّور والظُّلُمَات',
          transliteration: 'An-Nur wa az-Zulumat',
          meaning: { en: 'Light vs Darkness', ur: 'نور بمقابلہ ظلمت', hi: 'नूर बनाम ज़ुल्मत' },
          details: {
            en: 'فَلَق (daybreak) vs غَاسِق (darkness) - Islam as light splitting the darkness of ignorance and evil.',
            ur: 'فَلَق (صبح) بمقابلہ غَاسِق (اندھیرا) - اسلام بطور نور جہالت اور برائی کے اندھیرے کو چیرتا ہے۔',
          },
        },
        {
          id: 'internal-external',
          arabic: 'الظَّاهِر والْبَاطِن',
          transliteration: 'Az-Zahir wa al-Batin',
          meaning: { en: 'External vs Internal', ur: 'ظاہری بمقابلہ باطنی', hi: 'ज़ाहिरी बनाम बातिनी' },
          details: {
            en: 'Al-Falaq: External evils (darkness, magic, envy). An-Nas: Internal evils (waswas/whispers). Both needed.',
            ur: 'الفلق: بیرونی برائیاں (اندھیرا، جادو، حسد)۔ الناس: باطنی برائیاں (وسوسے)۔ دونوں ضروری۔',
          },
        },
      ],
    },
  },

  relationships: [
    {
      from: { en: 'رَبِّ الْفَلَقِ', ur: 'رَبِّ الْفَلَقِ (صبح کا رب)', ar: 'رَبِّ الْفَلَقِ' },
      to: { en: 'Light/Guidance', ur: 'نور/ہدایت', ar: 'النُّور' },
      type: 'implies',
      label: { en: 'Brings', ur: 'لاتا ہے', hi: 'लाता है' },
      description: {
        en: 'The Lord who brings daybreak also brings guidance - light dispels darkness and evil.',
        ur: 'صبح لانے والا رب ہدایت بھی لاتا ہے - روشنی اندھیرے اور برائی کو دور کرتی ہے۔',
      },
    },
    {
      from: { en: 'شَرِّ مَا خَلَقَ', ur: 'مخلوقات کا شر', ar: 'شَرِّ مَا خَلَقَ' },
      to: { en: 'غَاسِق + نَفَّاثَات + حَاسِد', ur: 'اندھیرا + جادو + حسد', ar: 'غَاسِق + نَفَّاثَات + حَاسِد' },
      type: 'includes',
      label: { en: 'Includes', ur: 'شامل ہے', hi: 'शामिल है' },
      description: {
        en: 'General evil (مَا خَلَقَ) includes specific evils: darkness, magic, and envy.',
        ur: 'عمومی شر (مَا خَلَقَ) میں مخصوص برائیاں شامل: اندھیرا، جادو، اور حسد۔',
      },
    },
    {
      from: { en: 'Al-Falaq (113)', ur: 'الفلق (113)', ar: 'الفلق' },
      to: { en: 'An-Nas (114)', ur: 'الناس (114)', ar: 'الناس' },
      type: 'complement',
      label: { en: 'Complements', ur: 'تکمیل کرتی ہے', hi: 'तकमील करती है' },
      description: {
        en: 'Al-Falaq (external evils) + An-Nas (internal waswas) = Complete protection (المعوذتين).',
        ur: 'الفلق (بیرونی شر) + الناس (باطنی وسوسے) = مکمل حفاظت (المعوذتين)۔',
      },
    },
  ],

  thematicFlow: {
    label: { en: 'Layers of Protection', ur: 'حفاظت کی تہیں', hi: 'हिफ़ाज़त की तहें' },
    stages: [
      {
        ayahs: [1],
        theme: { en: 'Declaration', ur: 'اعلان', hi: 'ऐलान' },
        description: {
          en: 'I seek refuge in the Lord of Daybreak - He who controls light and darkness',
          ur: 'میں صبح کے رب کی پناہ مانگتا ہوں - جو روشنی اور اندھیرے کا مالک ہے',
        },
        color: '#8B5CF6',
      },
      {
        ayahs: [2],
        theme: { en: 'General Evil', ur: 'عمومی شر', hi: 'आम शर' },
        description: {
          en: 'From ALL evil of creation - comprehensive protection',
          ur: 'تمام مخلوقات کے شر سے - جامع حفاظت',
        },
        color: '#6366F1',
      },
      {
        ayahs: [3],
        theme: { en: 'Darkness', ur: 'اندھیرا', hi: 'अँधेरा' },
        description: {
          en: 'From darkness when it intensifies - night dangers',
          ur: 'اندھیرے سے جب چھا جائے - رات کے خطرات',
        },
        color: '#3B82F6',
      },
      {
        ayahs: [4],
        theme: { en: 'Magic', ur: 'جادو', hi: 'जादू' },
        description: {
          en: 'From sorcerers who practice black magic',
          ur: 'جادوگروں سے جو کالا جادو کرتے ہیں',
        },
        color: '#EF4444',
      },
      {
        ayahs: [5],
        theme: { en: 'Envy', ur: 'حسد', hi: 'हसद' },
        description: {
          en: 'From the evil eye and jealousy',
          ur: 'نظر بد اور حسد سے',
        },
        color: '#F59E0B',
      },
    ],
  },

  crossReferences: [
    {
      reference: { surah: 114, ayah: '1-6' },
      text: { ar: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', en: 'Say, I seek refuge in the Lord of mankind...' },
      concept: 'protection',
      explanation: {
        en: 'An-Nas complements Al-Falaq - together they are المعوذتين (The Two Protections).',
        ur: 'الناس الفلق کی تکمیل کرتی ہے - دونوں مل کر المعوذتين ہیں۔',
      },
    },
    {
      reference: { surah: 7, ayah: 200 },
      text: { ar: 'وَإِمَّا يَنزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ', en: 'And if an evil suggestion comes to you from Satan, seek refuge in Allah.' },
      concept: 'isti-adhah',
      explanation: {
        en: 'Command to seek refuge is repeated - showing its importance as protection.',
        ur: 'پناہ مانگنے کا حکم دہرایا گیا - حفاظت کے طور پر اس کی اہمیت۔',
      },
    },
    {
      reference: { surah: 2, ayah: 102 },
      text: { ar: 'وَاتَّبَعُوا مَا تَتْلُو الشَّيَاطِينُ', en: 'And they followed what the devils recited...' },
      concept: 'naffathat',
      explanation: {
        en: 'Surah Al-Baqarah discusses magic of Babylon - confirming magic is real but prohibited.',
        ur: 'سورۃ البقرہ میں بابل کے جادو کا ذکر - تصدیق کہ جادو حقیقی مگر ممنوع ہے۔',
      },
    },
    {
      reference: { surah: 4, ayah: 54 },
      text: { ar: 'أَمْ يَحْسُدُونَ النَّاسَ', en: 'Or do they envy people...' },
      concept: 'hasid',
      explanation: {
        en: 'Envy (hasad) condemned in Quran - the Jews envied the Prophet ﷺ.',
        ur: 'حسد کی قرآن میں مذمت - یہود نے نبی ﷺ سے حسد کیا۔',
      },
    },
  ],

  virtue: {
    hadith: {
      en: 'The Prophet ﷺ used to seek refuge with Allah from the evil eye and jinn, until Al-Mu\'awwidhatayn were revealed. Then he used these and left everything else." (Tirmidhi)',
      ur: 'نبی ﷺ نظر بد اور جنات سے اللہ کی پناہ مانگتے تھے، یہاں تک کہ معوذتین نازل ہوئیں۔ پھر انہیں استعمال کیا اور باقی سب چھوڑ دیا۔" (ترمذی)',
    },
    practice: {
      en: 'Recite 3 times after Fajr, Maghrib, and before sleep. Blow on palms and wipe over body.',
      ur: 'فجر، مغرب کے بعد اور سونے سے پہلے 3 بار پڑھیں۔ ہتھیلیوں پر پھونکیں اور جسم پر پھیریں۔',
    },
  },
};

export default SURAH_113_ONTOLOGY;
export { SURAH_113_ONTOLOGY as ONTOLOGY };
