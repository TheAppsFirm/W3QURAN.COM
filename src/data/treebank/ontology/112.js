/**
 * Surah Al-Ikhlas (112) - Ontology of Quranic Concepts
 * The Surah of Pure Tawheed (Monotheism)
 *
 * Theme: Declaration of Allah's absolute oneness and uniqueness
 * Virtue: Reciting it equals 1/3 of the Quran in reward
 */

const SURAH_112_ONTOLOGY = {
  surahId: 112,
  name: {
    en: 'Al-Ikhlas - The Purity of Faith',
    ur: 'الاخلاص - خالص توحید',
    hi: 'अल-इख़लास - विशुद्ध एकेश्वरवाद',
    ar: 'الإخلاص',
  },
  description: {
    en: 'A complete declaration of Tawheed (monotheism) in just 4 verses. Answers the question "Who is Allah?" with perfect clarity.',
    ur: 'صرف 4 آیات میں توحید کا مکمل اعلان۔ "اللہ کون ہے؟" کے سوال کا واضح جواب۔',
    hi: 'केवल 4 आयतों में तौहीद का पूर्ण ऐलान। "अल्लाह कौन है?" का स्पष्ट जवाब।',
  },

  // Concept Categories
  categories: {
    divineOneness: {
      id: 'divine-oneness',
      label: { en: 'Divine Oneness (Tawheed)', ur: 'توحید (اللہ کی یکتائی)', hi: 'तौहीद (अल्लाह की एकता)' },
      color: '#8B5CF6',
      icon: 'Star',
      description: {
        en: 'The core concept - Allah is absolutely One, unique, with no equal',
        ur: 'بنیادی تصور - اللہ بالکل ایک ہے، منفرد ہے، کوئی ہمسر نہیں',
        hi: 'मूल अवधारणा - अल्लाह बिल्कुल एक है, अनोखा है, कोई समकक्ष नहीं',
      },
      concepts: [
        {
          id: 'ahad',
          arabic: 'أَحَدٌ',
          transliteration: 'Ahad',
          meaning: { en: 'The Absolutely One', ur: 'بالکل ایک (منفرد)', hi: 'बिल्कुल एक (अनोखा)' },
          ayah: 1,
          details: {
            en: 'Not just "one" in number, but ONE with no equal, no partner, no comparison. Different from واحد which means "one" in counting.',
            ur: 'صرف گنتی میں "ایک" نہیں، بلکہ ایسا ایک جس کا کوئی ہمسر، شریک، یا مثال نہیں۔ واحد سے مختلف جو گنتی کا ایک ہے۔',
            hi: 'सिर्फ गिनती में "एक" नहीं, बल्कि ऐसा एक जिसका कोई समकक्ष, साझीदार, या मिसाल नहीं। वाहिद से अलग जो गिनती का एक है।',
          },
          characteristic: {
            en: 'This is why we say "La ilaha illa Allah" - no deity except THE One Allah',
            ur: 'اسی لیے ہم کہتے ہیں "لا الٰہ الا اللہ" - کوئی معبود نہیں سوائے اس ایک اللہ کے',
          },
        },
        {
          id: 'la-shareek',
          arabic: 'لا شَرِيكَ لَهُ',
          transliteration: 'La Shareeka Lahu',
          meaning: { en: 'No Partner', ur: 'کوئی شریک نہیں', hi: 'कोई साझीदार नहीं' },
          implied: true,
          details: {
            en: 'Implied by أَحَدٌ - if He is absolutely One, He cannot have any partner in His essence, attributes, or worship.',
            ur: 'أَحَدٌ سے مستفاد - اگر وہ بالکل ایک ہے تو اس کی ذات، صفات، یا عبادت میں کوئی شریک نہیں ہو سکتا۔',
          },
        },
      ],
    },

    divineAttributes: {
      id: 'divine-attributes',
      label: { en: 'Divine Attributes', ur: 'اللہ کی صفات', hi: 'अल्लाह की सिफ़ात' },
      color: '#F59E0B',
      icon: 'Crown',
      description: {
        en: 'The unique attributes of Allah mentioned in this surah',
        ur: 'اس سورہ میں بیان کردہ اللہ کی منفرد صفات',
      },
      concepts: [
        {
          id: 'as-samad',
          arabic: 'الصَّمَدُ',
          transliteration: 'As-Samad',
          meaning: { en: 'The Eternal Refuge / Self-Sufficient Master', ur: 'بے نیاز / جس کی طرف رجوع کیا جائے', hi: 'बेनियाज़ / जिसकी तरफ़ रुजू किया जाए' },
          ayah: 2,
          details: {
            en: 'Unique attribute appearing ONLY once in Quran. Means: (1) He needs nothing, (2) Everything needs Him, (3) All turn to Him in need, (4) Solid/Eternal - no hollow.',
            ur: 'قرآن میں صرف ایک بار آنے والی منفرد صفت۔ معنی: (1) اسے کسی کی ضرورت نہیں، (2) سب کو اس کی ضرورت ہے، (3) سب اس کی طرف رجوع کرتے ہیں، (4) ٹھوس/ابدی - کوئی خلا نہیں۔',
          },
          characteristic: {
            en: 'This name tells us: When you need something, turn to Allah - He alone is الصَّمَد',
            ur: 'یہ نام بتاتا ہے: جب کچھ چاہیے، اللہ کی طرف رجوع کرو - وہی الصَّمَد ہے',
          },
        },
        {
          id: 'eternal',
          arabic: 'الأَزَلِي',
          transliteration: 'Al-Azali',
          meaning: { en: 'The Eternal (No Beginning)', ur: 'ازلی (کوئی شروعات نہیں)', hi: 'अज़ली (कोई शुरुआत नहीं)' },
          implied: true,
          ayah: 3,
          details: {
            en: 'Derived from "لَمْ يُولَدْ" (not born) - He has no beginning, no origin, always existed.',
            ur: '"لَمْ يُولَدْ" (پیدا نہیں ہوا) سے ماخوذ - اس کی کوئی ابتدا نہیں، ہمیشہ سے ہے۔',
          },
        },
        {
          id: 'unique',
          arabic: 'لَا كُفُوَ لَهُ',
          transliteration: 'La Kufuwa Lahu',
          meaning: { en: 'None Equal to Him', ur: 'کوئی اس کا ہمسر نہیں', hi: 'कोई उसका हमसर नहीं' },
          ayah: 4,
          details: {
            en: 'Final declaration: Nothing in creation can be compared to Allah - not in essence, attributes, or actions.',
            ur: 'آخری اعلان: مخلوق میں کوئی چیز اللہ کی مثل نہیں - نہ ذات میں، نہ صفات میں، نہ افعال میں۔',
          },
        },
      ],
    },

    negations: {
      id: 'negations',
      label: { en: 'What Allah is NOT', ur: 'اللہ کیا نہیں ہے', hi: 'अल्लाह क्या नहीं है' },
      color: '#EF4444',
      icon: 'X',
      description: {
        en: 'Tawheed is also about negating false beliefs - what Allah is NOT',
        ur: 'توحید باطل عقائد کی نفی بھی ہے - اللہ کیا نہیں ہے',
      },
      concepts: [
        {
          id: 'no-offspring',
          arabic: 'لَمْ يَلِدْ',
          transliteration: 'Lam Yalid',
          meaning: { en: 'He does not beget', ur: 'اس نے کسی کو نہیں جنا', hi: 'उसने किसी को नहीं जना' },
          ayah: 3,
          details: {
            en: 'Refutes: Christians (Jesus as son), Arabs (angels as daughters). Allah has no children because He needs no successor.',
            ur: 'تردید: عیسائی (عیسیٰ بیٹا)، عرب (فرشتے بیٹیاں)۔ اللہ کی کوئی اولاد نہیں کیونکہ اسے کسی جانشین کی ضرورت نہیں۔',
          },
          characteristic: {
            en: '⚠️ Believing Allah has children is major shirk (polytheism)',
            ur: '⚠️ اللہ کی اولاد ماننا بڑا شرک ہے',
          },
        },
        {
          id: 'not-born',
          arabic: 'لَمْ يُولَدْ',
          transliteration: 'Lam Yulad',
          meaning: { en: 'He was not born', ur: 'وہ پیدا نہیں ہوا', hi: 'वह पैदा नहीं हुआ' },
          ayah: 3,
          details: {
            en: 'Allah has no origin, no creator, no beginning. He is الأَوَّل (The First) with nothing before Him.',
            ur: 'اللہ کی کوئی ابتدا نہیں، کوئی خالق نہیں۔ وہ الاول ہے جس سے پہلے کچھ نہیں۔',
          },
        },
        {
          id: 'no-equal',
          arabic: 'لَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
          transliteration: 'Lam Yakun Lahu Kufuwan Ahad',
          meaning: { en: 'No one is equal to Him', ur: 'کوئی اس کا ہمسر نہیں', hi: 'कोई उसके बराबर नहीं' },
          ayah: 4,
          details: {
            en: 'Nothing can be compared to Allah. No idol, no human, no angel, no creation is like Him.',
            ur: 'کوئی چیز اللہ کی مثل نہیں۔ نہ کوئی بت، نہ انسان، نہ فرشتہ، نہ کوئی مخلوق۔',
          },
          characteristic: {
            en: '⚠️ Comparing anything to Allah is shirk',
            ur: '⚠️ کسی چیز کو اللہ کی مثل ماننا شرک ہے',
          },
        },
      ],
    },

    practicalTawheed: {
      id: 'practical-tawheed',
      label: { en: 'Living Tawheed', ur: 'عملی توحید', hi: 'अमली तौहीद' },
      color: '#10B981',
      icon: 'Heart',
      description: {
        en: 'How this surah should affect our daily life',
        ur: 'یہ سورہ ہماری روزمرہ زندگی کو کیسے متاثر کرے',
      },
      concepts: [
        {
          id: 'pure-worship',
          arabic: 'إِخْلَاص',
          transliteration: 'Ikhlas',
          meaning: { en: 'Sincerity / Purity', ur: 'خلوص / پاکیزگی', hi: 'इख़लास / पाकीज़गी' },
          details: {
            en: 'Surah name itself! Worship only Allah, with pure intention, no showing off, no partners.',
            ur: 'سورہ کا نام! صرف اللہ کی عبادت، خالص نیت سے، کوئی دکھاوا نہیں، کوئی شریک نہیں۔',
          },
        },
        {
          id: 'trust-in-samad',
          arabic: 'التَّوَكُّل',
          transliteration: 'At-Tawakkul',
          meaning: { en: 'Reliance on Allah', ur: 'اللہ پر بھروسہ', hi: 'अल्लाह पर भरोसा' },
          details: {
            en: 'Since Allah is الصَّمَد (Self-Sufficient, everyone needs Him), we should rely only on Him.',
            ur: 'چونکہ اللہ الصَّمَد ہے (بے نیاز، سب کو اس کی ضرورت)، ہمیں صرف اسی پر بھروسہ کرنا چاہیے۔',
          },
        },
        {
          id: 'no-intercession-worship',
          arabic: 'لَا وَاسِطَة',
          transliteration: 'La Wasitah',
          meaning: { en: 'No Intermediary in Worship', ur: 'عبادت میں کوئی واسطہ نہیں', hi: 'इबादत में कोई वास्ता नहीं' },
          details: {
            en: 'Since Allah is أَحَدٌ (One), worship Him directly - no saints, graves, or intermediaries.',
            ur: 'چونکہ اللہ أَحَدٌ (ایک) ہے، اس کی عبادت براہ راست کرو - کوئی اولیاء، قبریں، یا واسطے نہیں۔',
          },
        },
      ],
    },
  },

  // Semantic Relationships
  relationships: [
    {
      from: { en: 'أَحَدٌ', ur: 'أَحَدٌ (ایک)', ar: 'أَحَدٌ' },
      to: { en: 'الصَّمَدُ', ur: 'الصَّمَدُ (بے نیاز)', ar: 'الصَّمَدُ' },
      type: 'implies',
      label: { en: 'Therefore', ur: 'لہذا', hi: 'इसलिए' },
      description: {
        en: 'Because Allah is ONE (أَحَدٌ), He must be Self-Sufficient (الصَّمَدُ) - needing nothing outside Himself.',
        ur: 'چونکہ اللہ ایک (أَحَدٌ) ہے، لہذا وہ بے نیاز (الصَّمَدُ) ہے - اسے اپنے سوا کسی کی ضرورت نہیں۔',
      },
    },
    {
      from: { en: 'الصَّمَدُ', ur: 'الصَّمَدُ', ar: 'الصَّمَدُ' },
      to: { en: 'لَمْ يَلِدْ', ur: 'لَمْ يَلِدْ (نہیں جنا)', ar: 'لَمْ يَلِدْ' },
      type: 'implies',
      label: { en: 'Therefore', ur: 'لہذا', hi: 'इसलिए' },
      description: {
        en: 'Because Allah is الصَّمَدُ (Self-Sufficient), He does not need children or offspring.',
        ur: 'چونکہ اللہ الصَّمَدُ (بے نیاز) ہے، اسے اولاد کی ضرورت نہیں۔',
      },
    },
    {
      from: { en: 'لَمْ يَلِدْ', ur: 'لَمْ يَلِدْ', ar: 'لَمْ يَلِدْ' },
      to: { en: 'لَمْ يُولَدْ', ur: 'لَمْ يُولَدْ (پیدا نہیں ہوا)', ar: 'لَمْ يُولَدْ' },
      type: 'parallel',
      label: { en: 'And Similarly', ur: 'اور اسی طرح', hi: 'और इसी तरह' },
      description: {
        en: 'Just as He has no offspring, He has no origin. Both past (born) and future (beget) are negated.',
        ur: 'جیسے اس کی اولاد نہیں، ویسے اس کی ابتدا بھی نہیں۔ ماضی (پیدا) اور مستقبل (جنا) دونوں کی نفی۔',
      },
    },
    {
      from: { en: 'All Above', ur: 'مندرجہ بالا سب', ar: 'كل ما سبق' },
      to: { en: 'لَا كُفُوَ', ur: 'لَا كُفُوَ (کوئی ہمسر نہیں)', ar: 'لَا كُفُوَ' },
      type: 'conclusion',
      label: { en: 'Conclusion', ur: 'نتیجہ', hi: 'नतीजा' },
      description: {
        en: 'Final conclusion: Because of all these attributes, NOTHING can be equal to Allah.',
        ur: 'آخری نتیجہ: ان تمام صفات کی وجہ سے، کوئی چیز اللہ کی مثل نہیں ہو سکتی۔',
      },
    },
  ],

  // Thematic Flow
  thematicFlow: {
    label: { en: 'The Logic of Tawheed', ur: 'توحید کی منطق', hi: 'तौहीद की मंतिक़' },
    stages: [
      {
        ayahs: [1],
        theme: { en: 'Declaration', ur: 'اعلان', hi: 'ऐलान' },
        description: {
          en: 'Proclaim! Allah is Absolutely One (أَحَدٌ)',
          ur: 'اعلان کرو! اللہ بالکل ایک (أَحَدٌ) ہے',
        },
        color: '#8B5CF6',
      },
      {
        ayahs: [2],
        theme: { en: 'Affirmation', ur: 'تصدیق', hi: 'तस्दीक़' },
        description: {
          en: 'Allah is الصَّمَد - Self-Sufficient, everyone needs Him',
          ur: 'اللہ الصَّمَد ہے - بے نیاز، سب کو اس کی ضرورت ہے',
        },
        color: '#F59E0B',
      },
      {
        ayahs: [3],
        theme: { en: 'Negation', ur: 'نفی', hi: 'नफ़ी' },
        description: {
          en: 'No offspring, no origin - rejecting false beliefs',
          ur: 'نہ اولاد، نہ ابتدا - باطل عقائد کی تردید',
        },
        color: '#EF4444',
      },
      {
        ayahs: [4],
        theme: { en: 'Conclusion', ur: 'نتیجہ', hi: 'नतीजा' },
        description: {
          en: 'Nothing equals Him - complete Tawheed',
          ur: 'کوئی اس کا ہمسر نہیں - مکمل توحید',
        },
        color: '#10B981',
      },
    ],
  },

  // Cross-References
  crossReferences: [
    {
      reference: { surah: 2, ayah: 255 },
      text: { ar: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', en: 'Allah - there is no deity except Him, the Ever-Living...' },
      concept: 'ahad',
      explanation: {
        en: 'Ayat al-Kursi also declares Tawheed - Allah alone is God, Ever-Living, Self-Sustaining.',
        ur: 'آیت الکرسی بھی توحید کا اعلان ہے - اللہ اکیلا معبود ہے، زندہ، قائم بالذات۔',
      },
    },
    {
      reference: { surah: 59, ayah: '22-24' },
      text: { ar: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ', en: 'He is Allah, other than whom there is no deity...' },
      concept: 'divine-attributes',
      explanation: {
        en: 'End of Al-Hashr lists many divine names - all point to same Tawheed as Al-Ikhlas.',
        ur: 'سورۃ الحشر کے آخری آیات میں اللہ کے نام - سب الاخلاص کی توحید کی طرف اشارہ۔',
      },
    },
    {
      reference: { surah: 19, ayah: 35 },
      text: { ar: 'مَا كَانَ لِلَّهِ أَن يَتَّخِذَ مِن وَلَدٍ', en: 'It is not for Allah to take a son...' },
      concept: 'no-offspring',
      explanation: {
        en: 'Surah Maryam also refutes the claim of Allah having a son.',
        ur: 'سورۃ مریم بھی اللہ کے بیٹے کے دعوے کی تردید کرتی ہے۔',
      },
    },
    {
      reference: { surah: 42, ayah: 11 },
      text: { ar: 'لَيْسَ كَمِثْلِهِ شَيْءٌ', en: 'There is nothing like unto Him...' },
      concept: 'unique',
      explanation: {
        en: 'Ash-Shura confirms: Nothing resembles Allah - same message as "لَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ".',
        ur: 'سورۃ الشوری کی تصدیق: کوئی چیز اللہ کی مثل نہیں - وہی پیغام جو "لَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"۔',
      },
    },
  ],

  // Virtue
  virtue: {
    hadith: {
      en: 'The Prophet ﷺ said: "Whoever recites Qul Huwa Allahu Ahad ten times, Allah will build for him a house in Paradise." (Sahih al-Jami)',
      ur: 'نبی ﷺ نے فرمایا: "جو قل ہو اللہ احد دس بار پڑھے، اللہ اس کے لیے جنت میں گھر بنائے گا۔" (صحیح الجامع)',
    },
    equivalence: {
      en: 'Equal to 1/3 of the Quran in reward because it contains the complete essence of Tawheed.',
      ur: 'ثواب میں قرآن کے ایک تہائی کے برابر کیونکہ اس میں توحید کا مکمل خلاصہ ہے۔',
    },
  },
};

export default SURAH_112_ONTOLOGY;
export { SURAH_112_ONTOLOGY as ONTOLOGY };
