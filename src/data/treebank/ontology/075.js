/**
 * Surah Al-Qiyamah (75) - Ontology of Quranic Concepts
 * The Resurrection
 * Theme: Day of Judgment certainty, self-reproaching soul, death scene, resurrection proof
 */

export const ONTOLOGY = {
  surahId: 75,
  surahName: "Al-Qiyamah",
  surahNameArabic: "القيامة",
  revelationType: "Makki",
  totalAyahs: 40,

  categories: {
    divineOaths: {
      name: "Divine Oaths",
      nameArabic: "القسم الإلهي",
      color: '#F59E0B',
      icon: 'Star',
      concepts: [
        { term: "لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ", meaning: { en: "I swear by Day of Resurrection", ur: "مجھے قیامت کے دن کی قسم ہے" }, explanation: { en: "Emphatic oath (لا here is emphasis, not negation)", ur: "زور دار قسم (لا یہاں تاکید ہے، نفی نہیں)" }, verseRef: "75:1" },
        { term: "النَّفْسِ اللَّوَّامَةِ", meaning: { en: "Self-reproaching soul", ur: "ملامت کرنے والا نفس" }, explanation: { en: "Conscience that blames itself for sins", ur: "ضمیر جو گناہوں پر خود کو ملامت کرے" }, verseRef: "75:2" }
      ]
    },

    resurrectionProof: {
      name: "Proof of Resurrection",
      nameArabic: "برهان البعث",
      color: '#3B82F6',
      icon: 'Globe',
      concepts: [
        { term: "أَلَّن نَّجْمَعَ عِظَامَهُ", meaning: { en: "We cannot assemble his bones?", ur: "کیا ہم اس کی ہڈیاں جمع نہیں کر سکتے؟" }, explanation: { en: "Deniers doubt bodily resurrection", ur: "منکرین جسمانی قیامت پر شک کرتے ہیں" }, verseRef: "75:3" },
        { term: "قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ", meaning: { en: "Able to restore his fingertips", ur: "ہم اس کی انگلیوں کے پور بھی درست کر سکتے ہیں" }, explanation: { en: "Even unique fingerprints can be recreated", ur: "منفرد انگلیوں کے نشانات بھی دوبارہ بنا سکتے ہیں" }, verseRef: "75:4" },
        { term: "أَن يُتْرَكَ سُدًى", meaning: { en: "Left neglected?", ur: "کیا بے مقصد چھوڑ دیا جائے گا؟" }, explanation: { en: "Man not created purposeless", ur: "انسان بے مقصد نہیں بنایا گیا" }, verseRef: "75:36" },
        { term: "نُطْفَةً... عَلَقَةً... فَخَلَقَ فَسَوَّىٰ", meaning: { en: "Drop → clot → created → proportioned", ur: "قطرہ → لوتھڑا → پیدا کیا → ڈھالا" }, explanation: { en: "First creation proves ability to recreate", ur: "پہلی تخلیق دوبارہ بنانے کی صلاحیت ثابت کرتی ہے" }, verseRef: "75:37-38" },
        { term: "أَلَيْسَ ذَٰلِكَ بِقَادِرٍ عَلَىٰ أَن يُحْيِيَ الْمَوْتَىٰ", meaning: { en: "Is He not able to give life to the dead?", ur: "کیا وہ مردوں کو زندہ کرنے پر قادر نہیں؟" }, explanation: { en: "Final rhetorical proof - who created can recreate", ur: "آخری بلاغتی دلیل - جس نے بنایا وہ دوبارہ بنا سکتا ہے" }, verseRef: "75:40" }
      ]
    },

    humanDefiance: {
      name: "Human Defiance",
      nameArabic: "عناد الإنسان",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "يُرِيدُ لِيَفْجُرَ أَمَامَهُ", meaning: { en: "Desires to sin in his future", ur: "چاہتا ہے کہ آگے بھی گناہ کرتا رہے" }, explanation: { en: "Denies resurrection to continue sinning", ur: "گناہ جاری رکھنے کے لیے قیامت سے انکار" }, verseRef: "75:5" },
        { term: "أَيَّانَ يَوْمُ الْقِيَامَةِ", meaning: { en: "When is Day of Resurrection?", ur: "قیامت کا دن کب ہے؟" }, explanation: { en: "Mocking question", ur: "تمسخر آمیز سوال" }, verseRef: "75:6" },
        { term: "تُحِبُّونَ الْعَاجِلَةَ", meaning: { en: "You love the immediate", ur: "تم جلد ملنے والی (دنیا) سے محبت رکھتے ہو" }, explanation: { en: "Worldly attachment", ur: "دنیا سے لگاؤ" }, verseRef: "75:20" },
        { term: "تَذَرُونَ الْآخِرَةَ", meaning: { en: "Leave the Hereafter", ur: "آخرت کو چھوڑ دیتے ہو" }, explanation: { en: "Neglecting eternal", ur: "ابدی زندگی سے غفلت" }, verseRef: "75:21" }
      ]
    },

    cosmicSigns: {
      name: "Cosmic Signs of Resurrection",
      nameArabic: "علامات كونية للقيامة",
      color: '#8B5CF6',
      icon: 'Sun',
      concepts: [
        { term: "بَرِقَ الْبَصَرُ", meaning: { en: "Sight is dazzled", ur: "نظر چندھیا جائے گی" }, explanation: { en: "Eyes stunned by events", ur: "آنکھیں واقعات سے حیران" }, verseRef: "75:7" },
        { term: "خَسَفَ الْقَمَرُ", meaning: { en: "Moon is eclipsed", ur: "چاند گہن ہو جائے گا" }, explanation: { en: "Lunar eclipse at end times", ur: "آخری وقت میں چاند گرہن" }, verseRef: "75:8" },
        { term: "جُمِعَ الشَّمْسُ وَالْقَمَرُ", meaning: { en: "Sun and moon joined", ur: "سورج اور چاند اکٹھے ہو جائیں گے" }, explanation: { en: "Both sources of light merge/extinguish", ur: "دونوں روشنی کے ذرائع یکجا/بجھ جائیں گے" }, verseRef: "75:9" },
        { term: "أَيْنَ الْمَفَرُّ", meaning: { en: "Where is the escape?", ur: "بھاگنے کی جگہ کہاں ہے؟" }, explanation: { en: "Desperate search for refuge", ur: "مایوسانہ پناہ کی تلاش" }, verseRef: "75:10" }
      ]
    },

    noEscape: {
      name: "No Escape",
      nameArabic: "لا مفر",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "كَلَّا لَا وَزَرَ", meaning: { en: "No! No refuge", ur: "ہرگز نہیں! کوئی پناہ نہیں" }, explanation: { en: "No protection available", ur: "کوئی تحفظ دستیاب نہیں" }, verseRef: "75:11" },
        { term: "إِلَىٰ رَبِّكَ... الْمُسْتَقَرُّ", meaning: { en: "To your Lord is the settlement", ur: "تیرے رب ہی کے پاس ٹھکانا ہے" }, explanation: { en: "Final destination with Allah", ur: "آخری منزل اللہ کے پاس ہے" }, verseRef: "75:12" }
      ]
    },

    selfWitness: {
      name: "Self as Witness",
      nameArabic: "الإنسان شاهد على نفسه",
      color: '#06B6D4',
      icon: 'Eye',
      concepts: [
        { term: "يُنَبَّأُ... بِمَا قَدَّمَ وَأَخَّرَ", meaning: { en: "Informed of what sent forth and left behind", ur: "بتایا جائے گا جو آگے بھیجا اور پیچھے چھوڑا" }, explanation: { en: "All deeds revealed", ur: "تمام اعمال ظاہر ہوں گے" }, verseRef: "75:13" },
        { term: "الْإِنسَانُ عَلَىٰ نَفْسِهِ بَصِيرَةٌ", meaning: { en: "Man is witness against himself", ur: "انسان خود اپنے اوپر گواہ ہے" }, explanation: { en: "Self-awareness of one's own sins", ur: "اپنے گناہوں کا خود ادراک" }, verseRef: "75:14" },
        { term: "وَلَوْ أَلْقَىٰ مَعَاذِيرَهُ", meaning: { en: "Even if he presents excuses", ur: "چاہے وہ بہانے بنائے" }, explanation: { en: "Excuses won't help - he knows truth", ur: "بہانے کام نہیں آئیں گے - وہ سچائی جانتا ہے" }, verseRef: "75:15" }
      ]
    },

    quranRevelation: {
      name: "Quran Revelation",
      nameArabic: "نزول القرآن",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "لَا تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ", meaning: { en: "Don't move tongue to hasten it", ur: "اسے جلدی یاد کرنے کے لیے اپنی زبان نہ ہلاؤ" }, explanation: { en: "Prophet shouldn't rush to memorize", ur: "نبی ﷺ کو جلدی سے یاد کرنے کی ضرورت نہیں" }, verseRef: "75:16" },
        { term: "إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ", meaning: { en: "Upon Us is its collection and recitation", ur: "اس کا جمع کرنا اور پڑھوانا ہمارے ذمے ہے" }, explanation: { en: "Allah guarantees Quran's preservation", ur: "اللہ قرآن کی حفاظت کی ضمانت دیتا ہے" }, verseRef: "75:17" },
        { term: "فَاتَّبِعْ قُرْآنَهُ", meaning: { en: "Then follow its recitation", ur: "پھر اس کی تلاوت کی پیروی کرو" }, explanation: { en: "Listen to Jibreel, then follow", ur: "جبریل کو سنو، پھر پیروی کرو" }, verseRef: "75:18" },
        { term: "عَلَيْنَا بَيَانَهُ", meaning: { en: "Upon Us is its explanation", ur: "اس کی وضاحت ہمارے ذمے ہے" }, explanation: { en: "Allah explains its meanings", ur: "اللہ اس کے معانی واضح کرتا ہے" }, verseRef: "75:19" }
      ]
    },

    twoFaces: {
      name: "Two Types of Faces",
      nameArabic: "نوعان من الوجوه",
      color: '#10B981',
      icon: 'Users',
      concepts: [
        { term: "وُجُوهٌ يَوْمَئِذٍ نَّاضِرَةٌ", meaning: { en: "Some faces that Day radiant", ur: "اس دن کچھ چہرے تروتازہ ہوں گے" }, explanation: { en: "Believers' faces glowing", ur: "مومنین کے چہرے چمکتے ہوئے" }, verseRef: "75:22" },
        { term: "إِلَىٰ رَبِّهَا نَاظِرَةٌ", meaning: { en: "Looking at their Lord", ur: "اپنے رب کو دیکھ رہے ہوں گے" }, explanation: { en: "Believers see Allah - greatest reward", ur: "مومنین اللہ کو دیکھیں گے - سب سے بڑا اجر" }, verseRef: "75:23" },
        { term: "وُجُوهٌ... بَاسِرَةٌ", meaning: { en: "Some faces contorted", ur: "کچھ چہرے بگڑے ہوئے" }, explanation: { en: "Disbelievers' despair visible", ur: "کافروں کی مایوسی نظر آئے گی" }, verseRef: "75:24" },
        { term: "فَاقِرَةٌ", meaning: { en: "Back-breaking calamity", ur: "کمر توڑنے والی مصیبت" }, explanation: { en: "Expecting punishment", ur: "سزا کا انتظار" }, verseRef: "75:25" }
      ]
    },

    deathScene: {
      name: "The Death Scene",
      nameArabic: "مشهد الموت",
      color: '#EC4899',
      icon: 'Heart',
      concepts: [
        { term: "إِذَا بَلَغَتِ التَّرَاقِيَ", meaning: { en: "When it reaches the collarbones", ur: "جب (روح) ہنسلی تک پہنچ جائے" }, explanation: { en: "Soul rising to throat", ur: "روح گلے تک آ رہی ہو" }, verseRef: "75:26" },
        { term: "وَقِيلَ مَنْ رَاقٍ", meaning: { en: "Who is a healer?", ur: "کون ہے جھاڑ پھونک کرنے والا؟" }, explanation: { en: "Desperate search for help", ur: "مایوسانہ مدد کی تلاش" }, verseRef: "75:27" },
        { term: "وَظَنَّ أَنَّهُ الْفِرَاقُ", meaning: { en: "Certain it is the parting", ur: "اسے یقین ہو گیا کہ جدائی کا وقت ہے" }, explanation: { en: "Knowing death has arrived", ur: "یہ جان لینا کہ موت آ گئی" }, verseRef: "75:28" },
        { term: "وَالْتَفَّتِ السَّاقُ بِالسَّاقِ", meaning: { en: "Leg wound with leg", ur: "ٹانگ سے ٹانگ لپٹ گئی" }, explanation: { en: "Death throes - legs intertwined", ur: "سکراتِ موت - ٹانگیں لپٹ گئیں" }, verseRef: "75:29" },
        { term: "إِلَىٰ رَبِّكَ... الْمَسَاقُ", meaning: { en: "To your Lord is the driving", ur: "تیرے رب ہی کی طرف لے جایا جائے گا" }, explanation: { en: "Soul driven to Allah", ur: "روح اللہ کی طرف لے جائی جائے گی" }, verseRef: "75:30" }
      ]
    },

    disbelieverProfile: {
      name: "Profile of Disbeliever",
      nameArabic: "صورة الكافر",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "فَلَا صَدَّقَ وَلَا صَلَّىٰ", meaning: { en: "He neither believed nor prayed", ur: "نہ سچ مانا نہ نماز پڑھی" }, explanation: { en: "No faith, no worship", ur: "نہ ایمان، نہ عبادت" }, verseRef: "75:31" },
        { term: "وَلَـٰكِن كَذَّبَ وَتَوَلَّىٰ", meaning: { en: "But he denied and turned away", ur: "بلکہ جھٹلایا اور منہ پھیرا" }, explanation: { en: "Active rejection", ur: "عملی انکار" }, verseRef: "75:32" },
        { term: "ذَهَبَ إِلَىٰ أَهْلِهِ يَتَمَطَّىٰ", meaning: { en: "Went to his people strutting", ur: "اکڑتا ہوا اپنے گھر والوں کے پاس چلا گیا" }, explanation: { en: "Arrogant swagger", ur: "متکبرانہ اکڑ" }, verseRef: "75:33" },
        { term: "أَوْلَىٰ لَكَ فَأَوْلَىٰ", meaning: { en: "Woe to you, and woe", ur: "افسوس تجھ پر، پھر افسوس" }, explanation: { en: "Four-fold warning", ur: "چار مرتبہ تنبیہ" }, verseRef: "75:34-35" }
      ]
    }
  },

  relationships: [
    { from: "النفس اللوامة", to: "الإنسان على نفسه بصيرة", type: "identity", description: { en: "Self-reproaching soul = witness against self", ur: "ملامت کرنے والا نفس = اپنے خلاف گواہ" } },
    { from: "نسوي بنانه", to: "أليس بقادر أن يحيي الموتى", type: "proof", description: { en: "Fingerprint recreation → resurrection ability", ur: "انگلیوں کے نشانات کی تخلیقِ نو → قیامت کی صلاحیت" } },
    { from: "تحبون العاجلة", to: "يريد ليفجر أمامه", type: "consequence", description: { en: "Loving dunya leads to continuous sinning", ur: "دنیا سے محبت مسلسل گناہوں کی طرف لے جاتی ہے" } },
    { from: "بلغت التراقي", to: "إلى ربك المساق", type: "sequence", description: { en: "Death process → driven to Allah", ur: "موت کا عمل → اللہ کی طرف لے جانا" } },
    { from: "لا صدق ولا صلى", to: "كذب وتولى", type: "parallel", description: { en: "Neither believed/prayed + denied/turned away", ur: "نہ ایمان لایا/نماز پڑھی + جھٹلایا/منہ پھیرا" } },
    { from: "وجوه ناضرة", to: "وجوه باسرة", type: "contrast", description: { en: "Radiant believers vs. contorted disbelievers", ur: "چمکتے مومنین بمقابلہ بگڑے چہرے والے کافرین" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Double Oath", verses: "75:1-2", description: { en: "Oath by Resurrection and self-reproaching soul", ur: "قیامت اور نفسِ لوامہ کی قسم" } },
      { stage: 2, theme: "Resurrection Proof", verses: "75:3-6", description: { en: "Can reassemble bones, even fingertips; man denies to sin", ur: "ہڈیاں جوڑ سکتے ہیں، انگلیاں بھی؛ انسان گناہ کے لیے انکار کرتا ہے" } },
      { stage: 3, theme: "Cosmic Events", verses: "75:7-12", description: { en: "Eyes dazzled, moon eclipsed, sun-moon joined, no escape", ur: "نظر چندھیائے، چاند گہن، سورج چاند ملیں، کوئی فرار نہیں" } },
      { stage: 4, theme: "Self-Witness", verses: "75:13-15", description: { en: "Man is witness against himself despite excuses", ur: "انسان بہانوں کے باوجود اپنے خلاف گواہ" } },
      { stage: 5, theme: "Quran Preservation", verses: "75:16-19", description: { en: "Allah preserves, collects, explains Quran", ur: "اللہ قرآن کی حفاظت، جمع اور وضاحت کرتا ہے" } },
      { stage: 6, theme: "Two Faces", verses: "75:20-25", description: { en: "Radiant faces see Lord; contorted faces await calamity", ur: "تروتازہ چہرے رب کو دیکھیں؛ بگڑے چہرے مصیبت کے منتظر" } },
      { stage: 7, theme: "Death Scene", verses: "75:26-35", description: { en: "Soul reaching throat, death throes, disbeliever's profile", ur: "روح گلے تک، سکراتِ موت، کافر کا حال" } },
      { stage: 8, theme: "Final Proof", verses: "75:36-40", description: { en: "Not created neglected; creation proves resurrection", ur: "بے مقصد نہیں بنایا؛ تخلیق قیامت ثابت کرتی ہے" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Develop lawwamah", how: "Let your soul reproach you when you sin - build conscience", verse: "75:2" },
      { principle: "Believe in accountability", how: "You're a witness against yourself - live knowing this", verse: "75:14" },
      { principle: "Don't love dunya excessively", how: "Love of immediate makes you neglect eternal", verse: "75:20-21" },
      { principle: "Prepare for death", how: "It will come - soul will reach throat - prepare now", verse: "75:26-30" },
      { principle: "Believe AND pray", how: "Both tasdeeq and salah required - not one without other", verse: "75:31" }
    ]
  },

  uniqueInsight: {
    title: { en: "The Fingerprint Miracle", ur: "انگلیوں کے نشانات کا معجزہ" },
    insight: { en: "Verse 4's 'بَنَانَهُ' (fingertips) contains remarkable precision. Arabs of 7th century couldn't know that fingerprints are unique to each person - this wasn't scientifically established until 1880s by Henry Faulds. Yet the Quran specifically mentions Allah's ability to recreate even the fingertips - the most individually unique part of human anatomy. Allah doesn't say 'hands' or 'body' but specifically 'banānahu' (his fingertips). The message: even the most minute, unique details will be perfectly recreated in resurrection. This addresses the core doubt of deniers: 'How can scattered bones be reassembled?' Answer: Not only bones, but even unique fingerprints will be restored.", ur: "آیت 4 کا 'بَنَانَهُ' (انگلیوں کے پور) حیرت انگیز درستگی رکھتا ہے۔ 7ویں صدی کے عرب نہیں جانتے تھے کہ انگلیوں کے نشانات ہر شخص کے منفرد ہیں - یہ سائنسی طور پر 1880 کی دہائی میں Henry Faulds نے ثابت کیا۔ مگر قرآن خاص طور پر انگلیوں کے پور دوبارہ بنانے کی اللہ کی صلاحیت کا ذکر کرتا ہے - انسانی جسم کا سب سے منفرد حصہ۔ اللہ نے 'ہاتھ' یا 'جسم' نہیں کہا بلکہ خاص طور پر 'بنانہ' (اس کے انگلیوں کے پور) کہا۔ پیغام: چھوٹی سے چھوٹی منفرد تفصیل بھی قیامت میں بالکل دوبارہ بنائی جائے گی۔ یہ منکرین کے بنیادی شک کا جواب ہے: 'بکھری ہڈیاں کیسے جمع ہوں گی؟' جواب: نہ صرف ہڈیاں بلکہ منفرد انگلیوں کے نشانات بھی بحال ہوں گے۔" }
  },

  linguisticFeatures: {
    features: [
      { feature: "لَا emphatic", example: { en: "لَا أُقْسِمُ = I DO swear (not 'I don't swear')", ur: "لَا أُقْسِمُ = میں قسم کھاتا ہوں (نفی نہیں)" }, effect: "Intensifies oath" },
      { feature: "بَنَان", example: { en: "Fingertips specifically", ur: "خاص طور پر انگلیوں کے پور" }, effect: "Precision in resurrection claim" },
      { feature: "التَّرَاقِي", example: { en: "Collarbones", ur: "ہنسلیاں" }, effect: "Anatomical precision in death scene" },
      { feature: "Four-fold أَوْلَى", example: "75:34-35", effect: "Intensified warning through repetition" },
      { feature: "بَصِيرَة feminine", example: { en: "Man is بَصِيرَة against himself", ur: "انسان خود پر بَصِيرَة (گواہ) ہے" }, effect: "Man as proof/witness (not just seeing)" }
    ]
  },

  theologicalSignificance: {
    visionOfAllah: {
      verse: "75:23",
      text: "إِلَىٰ رَبِّهَا نَاظِرَةٌ",
      significance: "Major proof that believers will see Allah in Paradise - ru'yatullah"
    }
  },

  scientificReferences: {
    notes: [
      { verse: "75:4", topic: "Fingerprints", note: "بَنَان - fingertips are unique to each person; scientific discovery in 1880s" },
      { verse: "75:37-38", topic: "Embryology", note: "نُطْفَة → عَلَقَة - stages of human development accurately described" }
    ]
  }
};

export default ONTOLOGY;
