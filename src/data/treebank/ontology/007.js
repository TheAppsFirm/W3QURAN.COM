/**
 * Surah Al-A'raf (7) - Ontology of Quranic Concepts
 * The Heights
 * Theme: Adam and Iblis, prophets' stories (Nuh, Hud, Salih, Lut, Shu'ayb, Musa), Al-A'raf (barrier between Paradise and Hell)
 */

export const ONTOLOGY = {
  surahId: 7,
  surahName: "Al-A'raf",
  surahNameArabic: "الأعراف",
  revelationType: "Makki",
  totalAyahs: 206,

  categories: {
    quranIntroduction: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Introduction to the Quran",
      nameArabic: "مقدمة القرآن",
      concepts: [
        { term: "كِتَابٌ أُنزِلَ إِلَيْكَ", meaning: { en: "A Book revealed to you", ur: "ایک کتاب جو آپ پر نازل کی گئی" }, explanation: { en: "Quran's divine origin", ur: "قرآن کی الٰہی اصل" }, verseRef: "7:2" },
        { term: "لِتُنذِرَ بِهِ", meaning: { en: "That you may warn thereby", ur: "تاکہ آپ اس سے ڈرائیں" }, explanation: { en: "Purpose: warning", ur: "مقصد: انذار و تنبیہ" }, verseRef: "7:2" },
        { term: "وَذِكْرَىٰ لِلْمُؤْمِنِينَ", meaning: { en: "And a reminder for believers", ur: "اور مومنوں کے لیے نصیحت" }, explanation: { en: "Purpose: reminder", ur: "مقصد: یاددہانی" }, verseRef: "7:2" },
        { term: "اتَّبِعُوا مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ", meaning: { en: "Follow what is revealed to you from your Lord", ur: "جو تمہارے رب کی طرف سے نازل کیا گیا اس کی پیروی کرو" }, explanation: { en: "Command to follow revelation", ur: "وحی کی پیروی کا حکم" }, verseRef: "7:3" }
      ]
    },

    adamCreation: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Creation of Adam",
      nameArabic: "خلق آدم",
      concepts: [
        { term: "خَلَقْنَاكُمْ ثُمَّ صَوَّرْنَاكُمْ", meaning: { en: "We created you, then fashioned you", ur: "ہم نے تمہیں پیدا کیا، پھر تمہاری صورت بنائی" }, explanation: { en: "Two stages: creation then shaping", ur: "دو مراحل: تخلیق پھر صورت گری" }, verseRef: "7:11" },
        { term: "اسْجُدُوا لِآدَمَ", meaning: { en: "Prostrate to Adam", ur: "آدم کو سجدہ کرو" }, explanation: { en: "Divine command to angels", ur: "فرشتوں کو الٰہی حکم" }, verseRef: "7:11" },
        { term: "فَسَجَدُوا إِلَّا إِبْلِيسَ", meaning: { en: "They prostrated except Iblis", ur: "سب نے سجدہ کیا سوائے ابلیس کے" }, explanation: { en: "Angels obeyed, Iblis refused", ur: "فرشتوں نے اطاعت کی، ابلیس نے انکار کیا" }, verseRef: "7:11" },
        { term: "خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ", meaning: { en: "You created me from fire and him from clay", ur: "تو نے مجھے آگ سے بنایا اور اسے مٹی سے" }, explanation: { en: "Iblis's false reasoning", ur: "ابلیس کی غلط دلیل" }, verseRef: "7:12" }
      ]
    },

    iblisRefusal: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Iblis's Refusal and Fall",
      nameArabic: "رفض إبليس وسقوطه",
      concepts: [
        { term: "أَنَا خَيْرٌ مِّنْهُ", meaning: { en: "I am better than him", ur: "میں اس سے بہتر ہوں" }, explanation: { en: "Root of pride: self-superiority", ur: "تکبر کی جڑ: اپنے آپ کو برتر سمجھنا" }, verseRef: "7:12" },
        { term: "فَاهْبِطْ مِنْهَا", meaning: { en: "Descend from it (Paradise)", ur: "اس (جنت) سے اتر جا" }, explanation: { en: "Expulsion for arrogance", ur: "تکبر کی وجہ سے نکالا جانا" }, verseRef: "7:13" },
        { term: "أَنظِرْنِي إِلَىٰ يَوْمِ يُبْعَثُونَ", meaning: { en: "Reprieve me until the Day they are resurrected", ur: "مجھے اس دن تک مہلت دے جب یہ اٹھائے جائیں گے" }, explanation: { en: "Iblis's request for time", ur: "ابلیس کی مہلت کی درخواست" }, verseRef: "7:14" },
        { term: "لَأَقْعُدَنَّ لَهُمْ صِرَاطَكَ الْمُسْتَقِيمَ", meaning: { en: "I will sit for them on Your straight path", ur: "میں تیرے سیدھے راستے پر ان کی گھات میں بیٹھوں گا" }, explanation: { en: "Shaytan's strategy: block the path", ur: "شیطان کی حکمت عملی: راستہ روکنا" }, verseRef: "7:16" },
        { term: "ثُمَّ لَآتِيَنَّهُم مِّن بَيْنِ أَيْدِيهِمْ وَمِنْ خَلْفِهِمْ", meaning: { en: "I will come at them from front and behind", ur: "پھر میں ان کے آگے سے اور پیچھے سے آؤں گا" }, explanation: { en: "Four directions of attack", ur: "حملے کی چار سمتیں" }, verseRef: "7:17" },
        { term: "وَعَنْ أَيْمَانِهِمْ وَعَن شَمَائِلِهِمْ", meaning: { en: "From their right and left", ur: "ان کے دائیں سے اور بائیں سے" }, explanation: { en: "Comprehensive assault strategy", ur: "ہمہ جہت حملے کی حکمت عملی" }, verseRef: "7:17" }
      ]
    },

    adamParadise: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Adam in Paradise",
      nameArabic: "آدم في الجنة",
      concepts: [
        { term: "اسْكُنْ أَنتَ وَزَوْجُكَ الْجَنَّةَ", meaning: { en: "Dwell, you and your wife, in Paradise", ur: "تم اور تمہاری بیوی جنت میں رہو" }, explanation: { en: "Initial dwelling", ur: "ابتدائی سکونت" }, verseRef: "7:19" },
        { term: "كُلَا مِنْ حَيْثُ شِئْتُمَا", meaning: { en: "Eat from wherever you wish", ur: "جہاں سے چاہو کھاؤ" }, explanation: { en: "Abundant provision", ur: "وافر رزق" }, verseRef: "7:19" },
        { term: "وَلَا تَقْرَبَا هَـٰذِهِ الشَّجَرَةَ", meaning: { en: "Do not approach this tree", ur: "اس درخت کے قریب نہ جانا" }, explanation: { en: "Single prohibition", ur: "واحد ممانعت" }, verseRef: "7:19" },
        { term: "فَتَكُونَا مِنَ الظَّالِمِينَ", meaning: { en: "Lest you become wrongdoers", ur: "ورنہ تم ظالموں میں سے ہو جاؤ گے" }, explanation: { en: "Warning of consequence", ur: "نتیجے کی تنبیہ" }, verseRef: "7:19" }
      ]
    },

    shaytanDeception: {
      color: '#10B981',
      icon: 'Book',
      name: "Shaytan's Deception",
      nameArabic: "خداع الشيطان",
      concepts: [
        { term: "فَوَسْوَسَ لَهُمَا الشَّيْطَانُ", meaning: { en: "Then Shaytan whispered to them", ur: "پھر شیطان نے ان دونوں کو وسوسہ ڈالا" }, explanation: { en: "Method: whispering", ur: "طریقہ: وسوسہ اندازی" }, verseRef: "7:20" },
        { term: "لِيُبْدِيَ لَهُمَا مَا وُورِيَ عَنْهُمَا", meaning: { en: "To expose their private parts", ur: "تاکہ ان کے ستر جو ان سے چھپائے گئے تھے ظاہر کر دے" }, explanation: { en: "Revealing their nakedness", ur: "ان کی برہنگی ظاہر کرنا" }, verseRef: "7:20" },
        { term: "مَا نَهَاكُمَا رَبُّكُمَا عَنْ هَـٰذِهِ الشَّجَرَةِ إِلَّا أَن تَكُونَا مَلَكَيْنِ", meaning: { en: "Your Lord forbade this tree only so you become angels", ur: "تمہارے رب نے اس درخت سے اس لیے منع کیا کہ کہیں تم فرشتے نہ بن جاؤ" }, explanation: { en: "False promise #1", ur: "جھوٹا وعدہ نمبر 1" }, verseRef: "7:20" },
        { term: "أَوْ تَكُونَا مِنَ الْخَالِدِينَ", meaning: { en: "Or become immortal", ur: "یا ہمیشہ رہنے والوں میں سے ہو جاؤ" }, explanation: { en: "False promise #2", ur: "جھوٹا وعدہ نمبر 2" }, verseRef: "7:20" },
        { term: "وَقَاسَمَهُمَا إِنِّي لَكُمَا لَمِنَ النَّاصِحِينَ", meaning: { en: "And swore: I am your sincere advisor", ur: "اور قسم کھائی کہ میں تمہارا خیرخواہ ہوں" }, explanation: { en: "Deception through false oath", ur: "جھوٹی قسم کے ذریعے دھوکا" }, verseRef: "7:21" },
        { term: "فَدَلَّاهُمَا بِغُرُورٍ", meaning: { en: "So he led them by delusion", ur: "پس اس نے دھوکے سے ان کو گرا دیا" }, explanation: { en: "Gradual misleading", ur: "بتدریج گمراہ کرنا" }, verseRef: "7:22" }
      ]
    },

    adamRepentance: {
      color: '#EF4444',
      icon: 'Users',
      name: "Adam's Repentance",
      nameArabic: "توبة آدم",
      concepts: [
        { term: "بَدَتْ لَهُمَا سَوْآتُهُمَا", meaning: { en: "Their private parts became visible", ur: "ان کے ستر ان پر ظاہر ہو گئے" }, explanation: { en: "Consequence of sin", ur: "گناہ کا نتیجہ" }, verseRef: "7:22" },
        { term: "طَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ", meaning: { en: "They began covering with leaves of Paradise", ur: "وہ جنت کے پتوں سے اپنے آپ کو ڈھانکنے لگے" }, explanation: { en: "Attempt to cover shame", ur: "شرمندگی چھپانے کی کوشش" }, verseRef: "7:22" },
        { term: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا", meaning: { en: "Our Lord, we have wronged ourselves", ur: "اے ہمارے رب، ہم نے اپنی جانوں پر ظلم کیا" }, explanation: { en: "Acknowledgment of sin", ur: "گناہ کا اعتراف" }, verseRef: "7:23" },
        { term: "وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ", meaning: { en: "If You don't forgive and have mercy, we'll be losers", ur: "اگر تو ہمیں معاف نہ کرے اور رحم نہ فرمائے تو ہم نقصان اٹھانے والوں میں سے ہوں گے" }, explanation: { en: "Seeking forgiveness", ur: "مغفرت طلب کرنا" }, verseRef: "7:23" },
        { term: "اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ", meaning: { en: "Descend, some of you enemies to others", ur: "اتر جاؤ، تم میں سے بعض بعض کے دشمن ہوں گے" }, explanation: { en: "Earth as place of trial", ur: "زمین بطور آزمائش کی جگہ" }, verseRef: "7:24" },
        { term: "وَلَكُمْ فِي الْأَرْضِ مُسْتَقَرٌّ وَمَتَاعٌ إِلَىٰ حِينٍ", meaning: { en: "On earth is your dwelling and provision for a time", ur: "اور تمہارے لیے زمین میں ایک وقت تک ٹھکانا اور فائدہ ہے" }, explanation: { en: "Temporary worldly life", ur: "عارضی دنیاوی زندگی" }, verseRef: "7:24" }
      ]
    },

    clothing: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Clothing of Taqwa",
      nameArabic: "لباس التقوى",
      concepts: [
        { term: "أَنزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْآتِكُمْ", meaning: { en: "We sent down clothing to cover your private parts", ur: "ہم نے تم پر لباس اتارا جو تمہارے ستر چھپاتا ہے" }, explanation: { en: "Physical covering", ur: "جسمانی پردہ" }, verseRef: "7:26" },
        { term: "وَرِيشًا", meaning: { en: "And adornment", ur: "اور زیب و زینت" }, explanation: { en: "Beauty in dress", ur: "لباس میں خوبصورتی" }, verseRef: "7:26" },
        { term: "وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ", meaning: { en: "But clothing of taqwa - that is best", ur: "لیکن تقویٰ کا لباس سب سے بہتر ہے" }, explanation: { en: "Spiritual covering superior", ur: "روحانی پردہ افضل ہے" }, verseRef: "7:26" }
      ]
    },

    alAraf: {
      color: '#10B981',
      icon: 'Book',
      name: "Al-A'raf - The Heights",
      nameArabic: "الأعراف",
      concepts: [
        { term: "وَبَيْنَهُمَا حِجَابٌ", meaning: { en: "Between them is a barrier", ur: "ان دونوں کے درمیان ایک پردہ ہے" }, explanation: { en: "Partition between Paradise and Hell", ur: "جنت اور جہنم کے درمیان آڑ" }, verseRef: "7:46" },
        { term: "وَعَلَى الْأَعْرَافِ رِجَالٌ", meaning: { en: "And on the Heights are men", ur: "اور اعراف پر کچھ لوگ ہوں گے" }, explanation: { en: "People on the barrier", ur: "اونچی جگہ پر کھڑے لوگ" }, verseRef: "7:46" },
        { term: "يَعْرِفُونَ كُلًّا بِسِيمَاهُمْ", meaning: { en: "They recognize all by their marks", ur: "وہ سب کو ان کے چہروں سے پہچانیں گے" }, explanation: { en: "Recognition of faces", ur: "چہروں کی پہچان" }, verseRef: "7:46" },
        { term: "وَنَادَوْا أَصْحَابَ الْجَنَّةِ أَن سَلَامٌ عَلَيْكُمْ", meaning: { en: "They call to Paradise dwellers: Peace be upon you", ur: "وہ جنت والوں کو پکاریں گے: تم پر سلامتی ہو" }, explanation: { en: "Greeting to Paradise", ur: "جنت والوں کو سلام" }, verseRef: "7:46" },
        { term: "لَمْ يَدْخُلُوهَا وَهُمْ يَطْمَعُونَ", meaning: { en: "They have not entered it but hope to", ur: "وہ ابھی اس میں داخل نہیں ہوئے لیکن امید رکھتے ہیں" }, explanation: { en: "Aspiring for Paradise", ur: "جنت کی آرزو" }, verseRef: "7:46" }
      ]
    },

    paradiseHellDialogue: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Dialogue Between Paradise and Hell Dwellers",
      nameArabic: "حوار أهل الجنة والنار",
      concepts: [
        { term: "وَنَادَىٰ أَصْحَابُ الْجَنَّةِ أَصْحَابَ النَّارِ", meaning: { en: "Paradise dwellers call to Hell dwellers", ur: "جنت والے جہنم والوں کو پکاریں گے" }, explanation: { en: "Cross-realm dialogue", ur: "دونوں جہانوں کے درمیان مکالمہ" }, verseRef: "7:44" },
        { term: "أَن قَدْ وَجَدْنَا مَا وَعَدَنَا رَبُّنَا حَقًّا", meaning: { en: "We found what our Lord promised to be true", ur: "ہم نے اپنے رب کا وعدہ سچا پایا" }, explanation: { en: "Promise fulfilled", ur: "وعدہ پورا ہوا" }, verseRef: "7:44" },
        { term: "فَهَلْ وَجَدتُّم مَّا وَعَدَ رَبُّكُمْ حَقًّا", meaning: { en: "Have you found your Lord's promise true?", ur: "کیا تم نے اپنے رب کا وعدہ سچا پایا؟" }, explanation: { en: "Questioning disbelievers", ur: "کافروں سے سوال" }, verseRef: "7:44" },
        { term: "فَأَذَّنَ مُؤَذِّنٌ بَيْنَهُمْ أَن لَّعْنَةُ اللَّهِ عَلَى الظَّالِمِينَ", meaning: { en: "An announcer proclaimed: Allah's curse on wrongdoers", ur: "ایک پکارنے والے نے پکارا: اللہ کی لعنت ہو ظالموں پر" }, explanation: { en: "Declaration of curse", ur: "لعنت کا اعلان" }, verseRef: "7:44" },
        { term: "أَفِيضُوا عَلَيْنَا مِنَ الْمَاءِ", meaning: { en: "Pour water upon us", ur: "ہم پر کچھ پانی ڈال دو" }, explanation: { en: "Hell dwellers begging", ur: "جہنمیوں کی التجا" }, verseRef: "7:50" },
        { term: "إِنَّ اللَّهَ حَرَّمَهُمَا عَلَى الْكَافِرِينَ", meaning: { en: "Allah has forbidden both to disbelievers", ur: "اللہ نے یہ دونوں کافروں پر حرام کر دی ہیں" }, explanation: { en: "Blessings withheld", ur: "نعمتوں سے محرومی" }, verseRef: "7:50" }
      ]
    },

    prophetNuh: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Prophet Nuh (Noah)",
      nameArabic: "قصة نوح",
      concepts: [
        { term: "لَقَدْ أَرْسَلْنَا نُوحًا إِلَىٰ قَوْمِهِ", meaning: { en: "We sent Nuh to his people", ur: "ہم نے نوح کو ان کی قوم کی طرف بھیجا" }, explanation: { en: "First named prophet in series", ur: "سلسلے میں پہلے نامزد نبی" }, verseRef: "7:59" },
        { term: "يَا قَوْمِ اعْبُدُوا اللَّهَ", meaning: { en: "O my people, worship Allah", ur: "اے میری قوم، اللہ کی عبادت کرو" }, explanation: { en: "Core message: tawhid", ur: "بنیادی پیغام: توحید" }, verseRef: "7:59" },
        { term: "مَا لَكُم مِّنْ إِلَـٰهٍ غَيْرُهُ", meaning: { en: "You have no god other than Him", ur: "اس کے سوا تمہارا کوئی معبود نہیں" }, explanation: { en: "No deity but Allah", ur: "اللہ کے سوا کوئی معبود نہیں" }, verseRef: "7:59" },
        { term: "إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ", meaning: { en: "I fear for you punishment of a great Day", ur: "مجھے تم پر ایک بڑے دن کے عذاب کا خوف ہے" }, explanation: { en: "Warning of judgment", ur: "عذاب سے خبردار کرنا" }, verseRef: "7:59" },
        { term: "فَأَنجَيْنَاهُ وَالَّذِينَ مَعَهُ فِي الْفُلْكِ", meaning: { en: "We saved him and those with him in the Ark", ur: "پھر ہم نے انہیں اور ان کے ساتھیوں کو کشتی میں بچا لیا" }, explanation: { en: "Salvation of believers", ur: "ایمان والوں کی نجات" }, verseRef: "7:64" },
        { term: "وَأَغْرَقْنَا الَّذِينَ كَذَّبُوا بِآيَاتِنَا", meaning: { en: "We drowned those who denied Our signs", ur: "اور ہم نے ان لوگوں کو ڈبو دیا جنہوں نے ہماری نشانیوں کو جھٹلایا" }, explanation: { en: "Destruction of deniers", ur: "جھٹلانے والوں کی تباہی" }, verseRef: "7:64" }
      ]
    },

    prophetHud: {
      color: '#10B981',
      icon: 'Book',
      name: "Prophet Hud",
      nameArabic: "قصة هود",
      concepts: [
        { term: "وَإِلَىٰ عَادٍ أَخَاهُمْ هُودًا", meaning: { en: "And to 'Ad, their brother Hud", ur: "اور عاد کی طرف ان کے بھائی ہود کو" }, explanation: { en: "Prophet to 'Ad", ur: "قومِ عاد کے لیے نبی" }, verseRef: "7:65" },
        { term: "أَفَلَا تَتَّقُونَ", meaning: { en: "Will you not fear Allah?", ur: "کیا تم اللہ سے نہیں ڈرتے؟" }, explanation: { en: "Call to taqwa", ur: "تقویٰ کی دعوت" }, verseRef: "7:65" },
        { term: "إِنَّا لَنَرَاكَ فِي سَفَاهَةٍ", meaning: { en: "We see you in foolishness", ur: "ہم تمہیں بیوقوفی میں دیکھتے ہیں" }, explanation: { en: "People's accusation", ur: "قوم کا الزام" }, verseRef: "7:66" },
        { term: "إِنِّي أُبَلِّغُكُمْ رِسَالَاتِ رَبِّي", meaning: { en: "I convey my Lord's messages to you", ur: "میں تمہیں اپنے رب کے پیغامات پہنچاتا ہوں" }, explanation: { en: "Prophet's duty", ur: "نبی کا فریضہ" }, verseRef: "7:68" },
        { term: "وَأَنَا لَكُمْ نَاصِحٌ أَمِينٌ", meaning: { en: "And I am a trustworthy advisor", ur: "اور میں تمہارا امانتدار خیرخواہ ہوں" }, explanation: { en: "Prophet's qualities", ur: "نبی کی صفات" }, verseRef: "7:68" },
        { term: "فَأَنجَيْنَاهُ وَالَّذِينَ مَعَهُ بِرَحْمَةٍ مِّنَّا", meaning: { en: "We saved him and those with him by Our mercy", ur: "پھر ہم نے اسے اور اس کے ساتھیوں کو اپنی رحمت سے بچا لیا" }, explanation: { en: "Divine salvation", ur: "الٰہی نجات" }, verseRef: "7:72" },
        { term: "وَقَطَعْنَا دَابِرَ الَّذِينَ كَذَّبُوا", meaning: { en: "We cut off the roots of those who denied", ur: "اور ہم نے جھٹلانے والوں کی جڑ کاٹ دی" }, explanation: { en: "Complete destruction of 'Ad", ur: "قومِ عاد کی مکمل تباہی" }, verseRef: "7:72" }
      ]
    },

    prophetSalih: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Prophet Salih",
      nameArabic: "قصة صالح",
      concepts: [
        { term: "وَإِلَىٰ ثَمُودَ أَخَاهُمْ صَالِحًا", meaning: { en: "And to Thamud, their brother Salih", ur: "اور ثمود کی طرف ان کے بھائی صالح کو" }, explanation: { en: "Prophet to Thamud", ur: "قومِ ثمود کے لیے نبی" }, verseRef: "7:73" },
        { term: "هَـٰذِهِ نَاقَةُ اللَّهِ لَكُمْ آيَةً", meaning: { en: "This she-camel of Allah is a sign for you", ur: "یہ اللہ کی اونٹنی تمہارے لیے نشانی ہے" }, explanation: { en: "Miraculous she-camel", ur: "معجزاتی اونٹنی" }, verseRef: "7:73" },
        { term: "فَذَرُوهَا تَأْكُلْ فِي أَرْضِ اللَّهِ", meaning: { en: "Let her eat in Allah's land", ur: "اسے اللہ کی زمین میں کھانے دو" }, explanation: { en: "Command to spare her", ur: "اسے چھوڑ دینے کا حکم" }, verseRef: "7:73" },
        { term: "وَلَا تَمَسُّوهَا بِسُوءٍ", meaning: { en: "Do not touch her with harm", ur: "اسے کوئی تکلیف نہ پہنچانا" }, explanation: { en: "Warning against harm", ur: "نقصان سے خبردار کرنا" }, verseRef: "7:73" },
        { term: "فَعَقَرُوا النَّاقَةَ", meaning: { en: "They hamstrung the she-camel", ur: "انہوں نے اونٹنی کی کونچیں کاٹ دیں" }, explanation: { en: "Their transgression", ur: "ان کی سرکشی" }, verseRef: "7:77" },
        { term: "وَعَتَوْا عَنْ أَمْرِ رَبِّهِمْ", meaning: { en: "They defied their Lord's command", ur: "اور اپنے رب کے حکم سے سرتابی کی" }, explanation: { en: "Insolent rebellion", ur: "گستاخانہ بغاوت" }, verseRef: "7:77" },
        { term: "فَأَخَذَتْهُمُ الرَّجْفَةُ", meaning: { en: "So the earthquake seized them", ur: "پھر زلزلے نے انہیں پکڑ لیا" }, explanation: { en: "Destruction by tremor", ur: "زلزلے سے تباہی" }, verseRef: "7:78" }
      ]
    },

    prophetLut: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Prophet Lut (Lot)",
      nameArabic: "قصة لوط",
      concepts: [
        { term: "وَلُوطًا إِذْ قَالَ لِقَوْمِهِ", meaning: { en: "And Lut when he said to his people", ur: "اور لوط نے جب اپنی قوم سے کہا" }, explanation: { en: "Lut's mission", ur: "لوط کی دعوت" }, verseRef: "7:80" },
        { term: "أَتَأْتُونَ الْفَاحِشَةَ مَا سَبَقَكُم بِهَا مِنْ أَحَدٍ", meaning: { en: "Do you commit immorality unprecedented?", ur: "کیا تم ایسی بے حیائی کرتے ہو جو تم سے پہلے کسی نے نہیں کی" }, explanation: { en: "Unique sin of his people", ur: "ان کی قوم کا بے مثال گناہ" }, verseRef: "7:80" },
        { term: "إِنَّكُمْ لَتَأْتُونَ الرِّجَالَ شَهْوَةً مِّن دُونِ النِّسَاءِ", meaning: { en: "You approach men with desire instead of women", ur: "تم عورتوں کو چھوڑ کر مردوں سے شہوت پوری کرتے ہو" }, explanation: { en: "Description of their sin", ur: "ان کے گناہ کی تفصیل" }, verseRef: "7:81" },
        { term: "بَلْ أَنتُمْ قَوْمٌ مُّسْرِفُونَ", meaning: { en: "Rather, you are a transgressing people", ur: "بلکہ تم حد سے گزرنے والے لوگ ہو" }, explanation: { en: "Judgment on them", ur: "ان پر حکم" }, verseRef: "7:81" },
        { term: "أَخْرِجُوهُم مِّن قَرْيَتِكُمْ", meaning: { en: "Expel them from your town", ur: "انہیں اپنی بستی سے نکال دو" }, explanation: { en: "People's hostility", ur: "قوم کی دشمنی" }, verseRef: "7:82" },
        { term: "إِنَّهُمْ أُنَاسٌ يَتَطَهَّرُونَ", meaning: { en: "They are people who keep pure", ur: "یہ لوگ پاکیزگی اختیار کرتے ہیں" }, explanation: { en: "Mocking Lut's purity", ur: "لوط کی پاکیزگی کا مذاق" }, verseRef: "7:82" },
        { term: "وَأَمْطَرْنَا عَلَيْهِم مَّطَرًا", meaning: { en: "We rained upon them a rain", ur: "اور ہم نے ان پر پتھروں کی بارش برسائی" }, explanation: { en: "Rain of stones", ur: "پتھروں کی بارش" }, verseRef: "7:84" }
      ]
    },

    prophetShuayb: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Prophet Shu'ayb",
      nameArabic: "قصة شعيب",
      concepts: [
        { term: "وَإِلَىٰ مَدْيَنَ أَخَاهُمْ شُعَيْبًا", meaning: { en: "And to Madyan, their brother Shu'ayb", ur: "اور مدین کی طرف ان کے بھائی شعیب کو" }, explanation: { en: "Prophet to Madyan", ur: "اہلِ مدین کے لیے نبی" }, verseRef: "7:85" },
        { term: "فَأَوْفُوا الْكَيْلَ وَالْمِيزَانَ", meaning: { en: "Give full measure and weight", ur: "ناپ اور تول پوری کرو" }, explanation: { en: "Economic justice", ur: "معاشی انصاف" }, verseRef: "7:85" },
        { term: "وَلَا تَبْخَسُوا النَّاسَ أَشْيَاءَهُمْ", meaning: { en: "Do not deprive people of their due", ur: "لوگوں کی چیزیں کم نہ دو" }, explanation: { en: "Fair dealing", ur: "منصفانہ لین دین" }, verseRef: "7:85" },
        { term: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا", meaning: { en: "Do not corrupt the earth after its reform", ur: "زمین میں اصلاح کے بعد فساد نہ پھیلاؤ" }, explanation: { en: "Preserve good order", ur: "اچھے نظام کو محفوظ رکھو" }, verseRef: "7:85" },
        { term: "وَلَا تَقْعُدُوا بِكُلِّ صِرَاطٍ تُوعِدُونَ", meaning: { en: "Do not sit on every path threatening", ur: "ہر راستے پر نہ بیٹھو دھمکاتے ہوئے" }, explanation: { en: "Condemning highway robbery", ur: "راہزنی کی مذمت" }, verseRef: "7:86" },
        { term: "وَتَصُدُّونَ عَن سَبِيلِ اللَّهِ", meaning: { en: "Barring from Allah's way", ur: "اللہ کے راستے سے روکتے ہو" }, explanation: { en: "Blocking guidance", ur: "ہدایت سے روکنا" }, verseRef: "7:86" },
        { term: "فَأَخَذَتْهُمُ الرَّجْفَةُ", meaning: { en: "So the earthquake seized them", ur: "پھر زلزلے نے انہیں پکڑ لیا" }, explanation: { en: "Destruction of Madyan", ur: "مدین کی تباہی" }, verseRef: "7:91" }
      ]
    },

    prophetMusa: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Prophet Musa (Moses) - Most Extensive",
      nameArabic: "قصة موسى",
      concepts: [
        { term: "ثُمَّ بَعَثْنَا مِن بَعْدِهِم مُّوسَىٰ بِآيَاتِنَا إِلَىٰ فِرْعَوْنَ وَمَلَئِهِ", meaning: { en: "Then We sent Musa with Our signs to Pharaoh", ur: "پھر ہم نے ان کے بعد موسیٰ کو اپنی نشانیوں کے ساتھ فرعون اور اس کے سرداروں کی طرف بھیجا" }, explanation: { en: "Musa's mission", ur: "موسیٰ کی بعثت" }, verseRef: "7:103" },
        { term: "إِنِّي رَسُولٌ مِّن رَّبِّ الْعَالَمِينَ", meaning: { en: "I am a messenger from the Lord of the worlds", ur: "میں تمام جہانوں کے رب کی طرف سے رسول ہوں" }, explanation: { en: "Musa's declaration", ur: "موسیٰ کا اعلان" }, verseRef: "7:104" },
        { term: "فَأَلْقَىٰ عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُّبِينٌ", meaning: { en: "He cast his staff and it became a clear serpent", ur: "اس نے اپنا عصا ڈالا تو وہ ایک صریح اژدہا بن گیا" }, explanation: { en: "First sign", ur: "پہلی نشانی" }, verseRef: "7:107" },
        { term: "وَنَزَعَ يَدَهُ فَإِذَا هِيَ بَيْضَاءُ لِلنَّاظِرِينَ", meaning: { en: "He drew out his hand and it was white for beholders", ur: "اس نے اپنا ہاتھ نکالا تو وہ دیکھنے والوں کے لیے چمکتا ہوا تھا" }, explanation: { en: "Second sign", ur: "دوسری نشانی" }, verseRef: "7:108" }
      ]
    },

    musaVsMagicians: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Musa vs. Pharaoh's Magicians",
      nameArabic: "موسى والسحرة",
      concepts: [
        { term: "ائْتُونِي بِكُلِّ سَاحِرٍ عَلِيمٍ", meaning: { en: "Bring me every skilled magician", ur: "ہر ماہر جادوگر کو میرے پاس لاؤ" }, explanation: { en: "Pharaoh's challenge", ur: "فرعون کا چیلنج" }, verseRef: "7:112" },
        { term: "إِنَّ لَنَا لَأَجْرًا إِن كُنَّا نَحْنُ الْغَالِبِينَ", meaning: { en: "Will we have reward if we prevail?", ur: "کیا ہمیں اجر ملے گا اگر ہم غالب آئے؟" }, explanation: { en: "Magicians' demand", ur: "جادوگروں کا مطالبہ" }, verseRef: "7:113" },
        { term: "فَلَمَّا أَلْقَوْا سَحَرُوا أَعْيُنَ النَّاسِ", meaning: { en: "When they threw, they bewitched people's eyes", ur: "جب انہوں نے ڈالا تو لوگوں کی آنکھوں پر جادو کر دیا" }, explanation: { en: "Magic's illusion", ur: "جادو کا دھوکا" }, verseRef: "7:116" },
        { term: "أَلْقِ مَا أَنتَ مُلْقٍ", meaning: { en: "Throw what you will throw", ur: "جو ڈالنا ہے ڈال دو" }, explanation: { en: "Musa's confidence", ur: "موسیٰ کا اعتماد" }, verseRef: "7:117" },
        { term: "فَوَقَعَ الْحَقُّ وَبَطَلَ مَا كَانُوا يَعْمَلُونَ", meaning: { en: "Truth prevailed and what they did was nullified", ur: "حق غالب آیا اور جو وہ کر رہے تھے باطل ہو گیا" }, explanation: { en: "Truth defeats falsehood", ur: "حق باطل پر غالب آیا" }, verseRef: "7:118" },
        { term: "فَغُلِبُوا هُنَالِكَ وَانقَلَبُوا صَاغِرِينَ", meaning: { en: "They were defeated and humiliated", ur: "وہ وہیں مغلوب ہو گئے اور ذلیل ہو کر رہ گئے" }, explanation: { en: "Magicians' defeat", ur: "جادوگروں کی شکست" }, verseRef: "7:119" },
        { term: "وَأُلْقِيَ السَّحَرَةُ سَاجِدِينَ", meaning: { en: "The magicians fell in prostration", ur: "جادوگر سجدے میں گر پڑے" }, explanation: { en: "Magicians accept truth", ur: "جادوگروں نے حق قبول کیا" }, verseRef: "7:120" },
        { term: "آمَنَّا بِرَبِّ الْعَالَمِينَ رَبِّ مُوسَىٰ وَهَارُونَ", meaning: { en: "We believe in Lord of the worlds, Lord of Musa and Harun", ur: "ہم ایمان لائے تمام جہانوں کے رب پر، موسیٰ اور ہارون کے رب پر" }, explanation: { en: "Magicians' faith", ur: "جادوگروں کا ایمان" }, verseRef: "7:121-122" }
      ]
    },

    pharaohThreat: {
      color: '#10B981',
      icon: 'Book',
      name: "Pharaoh's Threat",
      nameArabic: "تهديد فرعون",
      concepts: [
        { term: "آمَنتُم بِهِ قَبْلَ أَنْ آذَنَ لَكُمْ", meaning: { en: "You believed before I permitted you", ur: "تم نے میری اجازت سے پہلے ایمان لے آئے" }, explanation: { en: "Pharaoh's anger", ur: "فرعون کا غصہ" }, verseRef: "7:123" },
        { term: "لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَافٍ", meaning: { en: "I will cut your hands and feet alternately", ur: "میں تمہارے ہاتھ اور پاؤں ایک دوسرے کی مخالف سمت سے کاٹوں گا" }, explanation: { en: "Torture threat", ur: "اذیت کی دھمکی" }, verseRef: "7:124" },
        { term: "ثُمَّ لَأُصَلِّبَنَّكُمْ أَجْمَعِينَ", meaning: { en: "Then I will crucify you all", ur: "پھر تم سب کو سولی پر لٹکاؤں گا" }, explanation: { en: "Crucifixion threat", ur: "سولی کی دھمکی" }, verseRef: "7:124" },
        { term: "إِنَّا إِلَىٰ رَبِّنَا مُنقَلِبُونَ", meaning: { en: "Indeed, to our Lord we will return", ur: "بے شک ہم اپنے رب کی طرف لوٹنے والے ہیں" }, explanation: { en: "Magicians' firm faith", ur: "جادوگروں کا مضبوط ایمان" }, verseRef: "7:125" },
        { term: "أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ", meaning: { en: "Pour patience on us and take us as Muslims", ur: "ہم پر صبر انڈیل دے اور ہمیں مسلمان ہونے کی حالت میں وفات دے" }, explanation: { en: "Magicians' prayer", ur: "جادوگروں کی دعا" }, verseRef: "7:126" }
      ]
    },

    ninePlagues: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Plagues on Egypt",
      nameArabic: "الآيات التسع",
      concepts: [
        { term: "الطُّوفَانَ", meaning: { en: "The flood", ur: "طوفان" }, explanation: { en: "First plague", ur: "پہلی آفت" }, verseRef: "7:133" },
        { term: "وَالْجَرَادَ", meaning: { en: "The locusts", ur: "ٹڈیاں" }, explanation: { en: "Second plague", ur: "دوسری آفت" }, verseRef: "7:133" },
        { term: "وَالْقُمَّلَ", meaning: { en: "The lice", ur: "جوئیں" }, explanation: { en: "Third plague", ur: "تیسری آفت" }, verseRef: "7:133" },
        { term: "وَالضَّفَادِعَ", meaning: { en: "The frogs", ur: "مینڈک" }, explanation: { en: "Fourth plague", ur: "چوتھی آفت" }, verseRef: "7:133" },
        { term: "وَالدَّمَ", meaning: { en: "The blood", ur: "خون" }, explanation: { en: "Fifth plague", ur: "پانچویں آفت" }, verseRef: "7:133" },
        { term: "آيَاتٍ مُّفَصَّلَاتٍ", meaning: { en: "Distinct signs", ur: "واضح نشانیاں" }, explanation: { en: "Clear evidence", ur: "واضح دلائل" }, verseRef: "7:133" },
        { term: "فَاسْتَكْبَرُوا وَكَانُوا قَوْمًا مُّجْرِمِينَ", meaning: { en: "They were arrogant criminal people", ur: "وہ تکبر کرتے رہے اور وہ مجرم قوم تھے" }, explanation: { en: "Egypt's response", ur: "مصریوں کا ردعمل" }, verseRef: "7:133" }
      ]
    },

    exodusAndSea: {
      color: '#EF4444',
      icon: 'Users',
      name: "Exodus and Crossing the Sea",
      nameArabic: "الخروج وعبور البحر",
      concepts: [
        { term: "وَجَاوَزْنَا بِبَنِي إِسْرَائِيلَ الْبَحْرَ", meaning: { en: "We took Children of Israel across the sea", ur: "اور ہم بنی اسرائیل کو سمندر پار لے گئے" }, explanation: { en: "Sea crossing miracle", ur: "سمندر پار کرنے کا معجزہ" }, verseRef: "7:138" },
        { term: "فَأَتَوْا عَلَىٰ قَوْمٍ يَعْكُفُونَ عَلَىٰ أَصْنَامٍ", meaning: { en: "They came upon people devoted to idols", ur: "وہ ایسے لوگوں کے پاس آئے جو بتوں کی پوجا میں لگے ہوئے تھے" }, explanation: { en: "Encountering idolaters", ur: "بت پرستوں سے ملاقات" }, verseRef: "7:138" },
        { term: "اجْعَل لَّنَا إِلَـٰهًا كَمَا لَهُمْ آلِهَةٌ", meaning: { en: "Make for us a god as they have gods", ur: "ہمارے لیے بھی ایک معبود بنا دو جیسے ان کے معبود ہیں" }, explanation: { en: "Israel's ignorant request", ur: "بنی اسرائیل کی جاہلانہ فرمائش" }, verseRef: "7:138" },
        { term: "إِنَّكُمْ قَوْمٌ تَجْهَلُونَ", meaning: { en: "You are an ignorant people", ur: "بے شک تم جاہل لوگ ہو" }, explanation: { en: "Musa's rebuke", ur: "موسیٰ کی سرزنش" }, verseRef: "7:138" }
      ]
    },

    musaAtTur: {
      color: '#10B981',
      icon: 'Book',
      name: "Musa at Mount Tur",
      nameArabic: "موسى عند الطور",
      concepts: [
        { term: "وَوَاعَدْنَا مُوسَىٰ ثَلَاثِينَ لَيْلَةً وَأَتْمَمْنَاهَا بِعَشْرٍ", meaning: { en: "We appointed for Musa thirty nights, then ten more", ur: "ہم نے موسیٰ سے تیس راتوں کا وعدہ کیا پھر دس مزید سے پورا کیا" }, explanation: { en: "Forty nights total", ur: "کل چالیس راتیں" }, verseRef: "7:142" },
        { term: "رَبِّ أَرِنِي أَنظُرْ إِلَيْكَ", meaning: { en: "My Lord, show me that I may look at You", ur: "اے میرے رب، مجھے دکھا دے تاکہ میں تجھے دیکھوں" }, explanation: { en: "Musa's request to see Allah", ur: "موسیٰ کی اللہ کو دیکھنے کی درخواست" }, verseRef: "7:143" },
        { term: "لَن تَرَانِي", meaning: { en: "You will never see Me", ur: "تو مجھے ہرگز نہیں دیکھ سکتا" }, explanation: { en: "Allah's response", ur: "اللہ کا جواب" }, verseRef: "7:143" },
        { term: "وَلَـٰكِنِ انظُرْ إِلَى الْجَبَلِ", meaning: { en: "But look at the mountain", ur: "لیکن اس پہاڑ کی طرف دیکھ" }, explanation: { en: "Test of perception", ur: "ادراک کا امتحان" }, verseRef: "7:143" },
        { term: "فَلَمَّا تَجَلَّىٰ رَبُّهُ لِلْجَبَلِ جَعَلَهُ دَكًّا", meaning: { en: "When his Lord appeared to mountain, it crumbled", ur: "جب اس کے رب نے پہاڑ پر تجلی فرمائی تو اسے ریزہ ریزہ کر دیا" }, explanation: { en: "Mountain destroyed", ur: "پہاڑ ٹکڑے ٹکڑے ہو گیا" }, verseRef: "7:143" },
        { term: "وَخَرَّ مُوسَىٰ صَعِقًا", meaning: { en: "Musa fell unconscious", ur: "موسیٰ بے ہوش ہو کر گر پڑے" }, explanation: { en: "Effect of manifestation", ur: "تجلی کا اثر" }, verseRef: "7:143" },
        { term: "سُبْحَانَكَ تُبْتُ إِلَيْكَ", meaning: { en: "Glory to You, I repent to You", ur: "تیری ذات پاک ہے، میں تیری طرف رجوع کرتا ہوں" }, explanation: { en: "Musa's repentance", ur: "موسیٰ کی توبہ" }, verseRef: "7:143" }
      ]
    },

    tablets: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "The Tablets",
      nameArabic: "الألواح",
      concepts: [
        { term: "وَكَتَبْنَا لَهُ فِي الْأَلْوَاحِ", meaning: { en: "We wrote for him on tablets", ur: "اور ہم نے اس کے لیے تختیوں میں لکھ دیا" }, explanation: { en: "Divine writing", ur: "الٰہی تحریر" }, verseRef: "7:145" },
        { term: "مِن كُلِّ شَيْءٍ مَّوْعِظَةً", meaning: { en: "Of everything an admonition", ur: "ہر چیز کی نصیحت" }, explanation: { en: "Comprehensive guidance", ur: "جامع ہدایت" }, verseRef: "7:145" },
        { term: "وَتَفْصِيلًا لِّكُلِّ شَيْءٍ", meaning: { en: "And detailed explanation of everything", ur: "اور ہر چیز کی تفصیل" }, explanation: { en: "Complete details", ur: "مکمل تفصیلات" }, verseRef: "7:145" },
        { term: "فَخُذْهَا بِقُوَّةٍ", meaning: { en: "Take them with determination", ur: "انہیں مضبوطی سے پکڑو" }, explanation: { en: "Command to hold firmly", ur: "مضبوطی سے تھامنے کا حکم" }, verseRef: "7:145" },
        { term: "وَأْمُرْ قَوْمَكَ يَأْخُذُوا بِأَحْسَنِهَا", meaning: { en: "Command your people to take the best of it", ur: "اپنی قوم کو حکم دو کہ اس کے بہترین حصے پر عمل کریں" }, explanation: { en: "Choose best rulings", ur: "بہترین احکام اختیار کرو" }, verseRef: "7:145" }
      ]
    },

    goldenCalf: {
      color: '#EC4899',
      icon: 'Globe',
      name: "The Golden Calf",
      nameArabic: "العجل",
      concepts: [
        { term: "وَاتَّخَذَ قَوْمُ مُوسَىٰ مِن بَعْدِهِ مِنْ حُلِيِّهِمْ عِجْلًا جَسَدًا", meaning: { en: "Musa's people made from their ornaments a calf body", ur: "موسیٰ کی قوم نے اس کے بعد اپنے زیوروں سے ایک بچھڑے کا جسم بنا لیا" }, explanation: { en: "Calf creation", ur: "بچھڑے کی تخلیق" }, verseRef: "7:148" },
        { term: "لَّهُ خُوَارٌ", meaning: { en: "Having a lowing sound", ur: "جس سے بچھڑے کی آواز آتی تھی" }, explanation: { en: "Artificial sound", ur: "مصنوعی آواز" }, verseRef: "7:148" },
        { term: "أَلَمْ يَرَوْا أَنَّهُ لَا يُكَلِّمُهُمْ وَلَا يَهْدِيهِمْ سَبِيلًا", meaning: { en: "Did they not see it could not speak or guide?", ur: "کیا انہیں نظر نہیں آیا کہ وہ ان سے بات نہیں کر سکتا اور نہ راستہ دکھا سکتا ہے" }, explanation: { en: "Idol's powerlessness", ur: "بت کی بے بسی" }, verseRef: "7:148" },
        { term: "اتَّخَذُوهُ وَكَانُوا ظَالِمِينَ", meaning: { en: "They took it and were wrongdoers", ur: "انہوں نے اسے (معبود) بنا لیا اور وہ ظالم تھے" }, explanation: { en: "Sin of idolatry", ur: "بت پرستی کا گناہ" }, verseRef: "7:148" },
        { term: "سُقِطَ فِي أَيْدِيهِمْ", meaning: { en: "They fell into regret", ur: "وہ بہت پچھتائے" }, explanation: { en: "Realization of error", ur: "غلطی کا احساس" }, verseRef: "7:149" },
        { term: "لَئِن لَّمْ يَرْحَمْنَا رَبُّنَا وَيَغْفِرْ لَنَا", meaning: { en: "If our Lord does not have mercy and forgive", ur: "اگر ہمارا رب ہم پر رحم نہ کرے اور معاف نہ کرے" }, explanation: { en: "Seeking forgiveness", ur: "مغفرت طلب کرنا" }, verseRef: "7:149" }
      ]
    },

    musaAnger: {
      color: '#10B981',
      icon: 'Book',
      name: "Musa's Return and Anger",
      nameArabic: "عودة موسى وغضبه",
      concepts: [
        { term: "وَلَمَّا رَجَعَ مُوسَىٰ إِلَىٰ قَوْمِهِ غَضْبَانَ أَسِفًا", meaning: { en: "When Musa returned angry and grieved", ur: "جب موسیٰ غصے اور غم سے بھرے ہوئے اپنی قوم کی طرف لوٹے" }, explanation: { en: "Musa's reaction", ur: "موسیٰ کا ردعمل" }, verseRef: "7:150" },
        { term: "بِئْسَمَا خَلَفْتُمُونِي مِن بَعْدِي", meaning: { en: "How terrible what you did after me", ur: "تم نے میرے بعد کتنا برا کام کیا" }, explanation: { en: "Rebuke to his people", ur: "اپنی قوم کو ڈانٹنا" }, verseRef: "7:150" },
        { term: "أَعَجِلْتُمْ أَمْرَ رَبِّكُمْ", meaning: { en: "Were you impatient for your Lord's command?", ur: "کیا تم نے اپنے رب کے حکم میں جلدی کی؟" }, explanation: { en: "Question about impatience", ur: "بے صبری کے بارے میں سوال" }, verseRef: "7:150" },
        { term: "وَأَلْقَى الْأَلْوَاحَ", meaning: { en: "He threw down the tablets", ur: "اس نے تختیاں پھینک دیں" }, explanation: { en: "Casting tablets in anger", ur: "غصے میں تختیاں پھینکنا" }, verseRef: "7:150" },
        { term: "وَأَخَذَ بِرَأْسِ أَخِيهِ يَجُرُّهُ إِلَيْهِ", meaning: { en: "Seized his brother's head, pulling him", ur: "اپنے بھائی کا سر پکڑ کر اپنی طرف کھینچا" }, explanation: { en: "Confronting Harun", ur: "ہارون سے باز پرس" }, verseRef: "7:150" },
        { term: "إِنَّ الْقَوْمَ اسْتَضْعَفُونِي وَكَادُوا يَقْتُلُونَنِي", meaning: { en: "The people oppressed me and nearly killed me", ur: "لوگوں نے مجھے کمزور سمجھا اور قریب تھا کہ مجھے مار ڈالتے" }, explanation: { en: "Harun's explanation", ur: "ہارون کی وضاحت" }, verseRef: "7:150" }
      ]
    },

    divineNames: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Allah's Beautiful Names",
      nameArabic: "أسماء الله الحسنى",
      concepts: [
        { term: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ", meaning: { en: "To Allah belong the Beautiful Names", ur: "اللہ کے لیے سب سے اچھے نام ہیں" }, explanation: { en: "Divine Names concept", ur: "اسمائے الٰہی کا تصور" }, verseRef: "7:180" },
        { term: "فَادْعُوهُ بِهَا", meaning: { en: "So call upon Him by them", ur: "پس انہی ناموں سے اسے پکارو" }, explanation: { en: "How to invoke Allah", ur: "اللہ کو پکارنے کا طریقہ" }, verseRef: "7:180" },
        { term: "وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ", meaning: { en: "Leave those who deviate in His Names", ur: "ان لوگوں کو چھوڑ دو جو اس کے ناموں میں کجی کرتے ہیں" }, explanation: { en: "Warning against distortion", ur: "تحریف سے خبردار کرنا" }, verseRef: "7:180" }
      ]
    },

    creationReflection: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Reflection on Creation",
      nameArabic: "التفكر في الخلق",
      concepts: [
        { term: "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ", meaning: { en: "Your Lord is Allah who created heavens and earth in six days", ur: "بے شک تمہارا رب اللہ ہے جس نے آسمانوں اور زمین کو چھ دنوں میں بنایا" }, explanation: { en: "Creation in six periods", ur: "چھ ادوار میں تخلیق" }, verseRef: "7:54" },
        { term: "ثُمَّ اسْتَوَىٰ عَلَى الْعَرْشِ", meaning: { en: "Then established Himself on the Throne", ur: "پھر عرش پر مستوی ہوا" }, explanation: { en: "Divine sovereignty", ur: "الٰہی حاکمیتِ اعلیٰ" }, verseRef: "7:54" },
        { term: "يُغْشِي اللَّيْلَ النَّهَارَ", meaning: { en: "He covers night with day", ur: "وہ رات سے دن کو ڈھانپ دیتا ہے" }, explanation: { en: "Day-night cycle", ur: "شب و روز کا چکر" }, verseRef: "7:54" },
        { term: "وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ", meaning: { en: "Sun, moon, stars are subjected to His command", ur: "سورج، چاند اور ستارے اس کے حکم کے تابع ہیں" }, explanation: { en: "Celestial obedience", ur: "آسمانی اجرام کی فرمانبرداری" }, verseRef: "7:54" },
        { term: "أَلَا لَهُ الْخَلْقُ وَالْأَمْرُ", meaning: { en: "Is not creation and command His alone?", ur: "خبردار! تخلیق بھی اسی کی ہے اور حکم بھی اسی کا" }, explanation: { en: "Divine exclusive sovereignty", ur: "خالصتاً الٰہی حاکمیت" }, verseRef: "7:54" }
      ]
    },

    supplicationGuidelines: {
      color: '#F59E0B',
      icon: 'Star',
      name: "How to Supplicate",
      nameArabic: "آداب الدعاء",
      concepts: [
        { term: "ادْعُوا رَبَّكُمْ تَضَرُّعًا وَخُفْيَةً", meaning: { en: "Call your Lord humbly and privately", ur: "اپنے رب کو عاجزی سے اور خاموشی سے پکارو" }, explanation: { en: "Humble, quiet supplication", ur: "عاجزانہ اور خاموش دعا" }, verseRef: "7:55" },
        { term: "إِنَّهُ لَا يُحِبُّ الْمُعْتَدِينَ", meaning: { en: "He does not love transgressors", ur: "وہ حد سے گزرنے والوں کو پسند نہیں کرتا" }, explanation: { en: "Avoid excess in dua", ur: "دعا میں حد سے تجاوز سے بچو" }, verseRef: "7:55" },
        { term: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا", meaning: { en: "Do not corrupt earth after its reform", ur: "زمین میں اصلاح کے بعد فساد نہ پھیلاؤ" }, explanation: { en: "Preserve order", ur: "نظام کو محفوظ رکھو" }, verseRef: "7:56" },
        { term: "وَادْعُوهُ خَوْفًا وَطَمَعًا", meaning: { en: "Call Him with fear and hope", ur: "اسے خوف اور امید کے ساتھ پکارو" }, explanation: { en: "Balance fear and hope", ur: "خوف اور امید میں توازن" }, verseRef: "7:56" },
        { term: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ", meaning: { en: "Allah's mercy is near to doers of good", ur: "بے شک اللہ کی رحمت نیکو کاروں سے قریب ہے" }, explanation: { en: "Mercy for the good", ur: "نیکوں کے لیے رحمت" }, verseRef: "7:56" }
      ]
    },

    covenant: {
      color: '#10B981',
      icon: 'Book',
      name: "The Primordial Covenant",
      nameArabic: "الميثاق الأول",
      concepts: [
        { term: "وَإِذْ أَخَذَ رَبُّكَ مِن بَنِي آدَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ", meaning: { en: "When your Lord took from Adam's children, from their loins, their descendants", ur: "جب تمہارے رب نے اولادِ آدم کی پشتوں سے ان کی ذریت نکالی" }, explanation: { en: "Extraction of souls", ur: "روحوں کا نکالنا" }, verseRef: "7:172" },
        { term: "وَأَشْهَدَهُمْ عَلَىٰ أَنفُسِهِمْ أَلَسْتُ بِرَبِّكُمْ", meaning: { en: "Made them testify: Am I not your Lord?", ur: "انہیں خود ان پر گواہ بنایا: کیا میں تمہارا رب نہیں؟" }, explanation: { en: "Divine question", ur: "الٰہی سوال" }, verseRef: "7:172" },
        { term: "قَالُوا بَلَىٰ شَهِدْنَا", meaning: { en: "They said: Yes, we testify", ur: "انہوں نے کہا: ہاں، ہم گواہی دیتے ہیں" }, explanation: { en: "Universal acknowledgment", ur: "آفاقی اقرار" }, verseRef: "7:172" },
        { term: "أَن تَقُولُوا يَوْمَ الْقِيَامَةِ إِنَّا كُنَّا عَنْ هَـٰذَا غَافِلِينَ", meaning: { en: "Lest you say on Judgment Day: We were unaware", ur: "تاکہ تم قیامت کے دن یہ نہ کہو کہ ہم اس سے بے خبر تھے" }, explanation: { en: "Removing excuse of ignorance", ur: "جہالت کا بہانہ ختم کرنا" }, verseRef: "7:172" }
      ]
    },

    prophetMuhammad: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Prophet Muhammad Prophecy",
      nameArabic: "البشارة بمحمد",
      concepts: [
        { term: "الَّذِينَ يَتَّبِعُونَ الرَّسُولَ النَّبِيَّ الْأُمِّيَّ", meaning: { en: "Those who follow the Messenger, the unlettered Prophet", ur: "وہ لوگ جو اس رسول، نبی اُمّی کی پیروی کرتے ہیں" }, explanation: { en: "Description of Muhammad", ur: "محمد ﷺ کا تعارف" }, verseRef: "7:157" },
        { term: "الَّذِي يَجِدُونَهُ مَكْتُوبًا عِندَهُمْ فِي التَّوْرَاةِ وَالْإِنجِيلِ", meaning: { en: "Whom they find written with them in Torah and Gospel", ur: "جسے وہ اپنے پاس تورات اور انجیل میں لکھا ہوا پاتے ہیں" }, explanation: { en: "Prophecy in previous scriptures", ur: "سابقہ کتابوں میں پیشگوئی" }, verseRef: "7:157" },
        { term: "يَأْمُرُهُم بِالْمَعْرُوفِ وَيَنْهَاهُمْ عَنِ الْمُنكَرِ", meaning: { en: "Commands good, forbids evil", ur: "نیکی کا حکم دیتا ہے اور برائی سے روکتا ہے" }, explanation: { en: "His mission", ur: "ان کی دعوت" }, verseRef: "7:157" },
        { term: "وَيُحِلُّ لَهُمُ الطَّيِّبَاتِ وَيُحَرِّمُ عَلَيْهِمُ الْخَبَائِثَ", meaning: { en: "Makes lawful pure things, forbids impure", ur: "پاک چیزیں حلال کرتا ہے اور ناپاک چیزیں حرام" }, explanation: { en: "His legislation", ur: "ان کی شریعت" }, verseRef: "7:157" },
        { term: "وَيَضَعُ عَنْهُمْ إِصْرَهُمْ وَالْأَغْلَالَ", meaning: { en: "Relieves them of burden and shackles", ur: "اور ان سے بوجھ اور طوق اتارتا ہے" }, explanation: { en: "Ease of his law", ur: "ان کی شریعت کی آسانی" }, verseRef: "7:157" }
      ]
    },

    finalGuidance: {
      color: '#3B82F6',
      icon: 'Shield',
      name: "Final Guidance",
      nameArabic: "الهداية الختامية",
      concepts: [
        { term: "وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا", meaning: { en: "When Quran is recited, listen and be silent", ur: "جب قرآن پڑھا جائے تو غور سے سنو اور خاموش رہو" }, explanation: { en: "Etiquette of Quran recitation", ur: "قرآن کی تلاوت کے آداب" }, verseRef: "7:204" },
        { term: "لَعَلَّكُمْ تُرْحَمُونَ", meaning: { en: "That you may receive mercy", ur: "تاکہ تم پر رحم کیا جائے" }, explanation: { en: "Benefit of listening", ur: "سننے کا فائدہ" }, verseRef: "7:204" },
        { term: "وَاذْكُر رَّبَّكَ فِي نَفْسِكَ تَضَرُّعًا وَخِيفَةً", meaning: { en: "Remember your Lord within yourself humbly and fearfully", ur: "اپنے رب کو دل ہی دل میں عاجزی اور خوف سے یاد کرو" }, explanation: { en: "Personal dhikr", ur: "ذاتی ذکر" }, verseRef: "7:205" },
        { term: "وَدُونَ الْجَهْرِ مِنَ الْقَوْلِ", meaning: { en: "Without loudness of speech", ur: "بلند آواز سے نہیں بلکہ آہستہ" }, explanation: { en: "Moderate voice", ur: "معتدل آواز" }, verseRef: "7:205" },
        { term: "بِالْغُدُوِّ وَالْآصَالِ", meaning: { en: "Morning and evening", ur: "صبح اور شام" }, explanation: { en: "Times of remembrance", ur: "ذکر کے اوقات" }, verseRef: "7:205" },
        { term: "وَلَا تَكُن مِّنَ الْغَافِلِينَ", meaning: { en: "And do not be among the heedless", ur: "اور غافلوں میں سے نہ ہو" }, explanation: { en: "Warning against neglect", ur: "غفلت سے خبردار کرنا" }, verseRef: "7:205" }
      ]
    },

    prostrationVerse: {
      color: '#EF4444',
      icon: 'Users',
      name: "Verse of Prostration",
      nameArabic: "آية السجدة",
      concepts: [
        { term: "إِنَّ الَّذِينَ عِندَ رَبِّكَ لَا يَسْتَكْبِرُونَ عَنْ عِبَادَتِهِ", meaning: { en: "Those near your Lord are not too proud to worship", ur: "جو تمہارے رب کے قریب ہیں وہ اس کی عبادت سے تکبر نہیں کرتے" }, explanation: { en: "Angels' humility", ur: "فرشتوں کی عاجزی" }, verseRef: "7:206" },
        { term: "وَيُسَبِّحُونَهُ", meaning: { en: "They glorify Him", ur: "وہ اس کی تسبیح کرتے ہیں" }, explanation: { en: "Constant tasbih", ur: "مسلسل تسبیح" }, verseRef: "7:206" },
        { term: "وَلَهُ يَسْجُدُونَ", meaning: { en: "And to Him they prostrate", ur: "اور اسی کو سجدہ کرتے ہیں" }, explanation: { en: "Sujud - requires prostration when recited", ur: "سجدہ - تلاوت کے وقت سجدہ واجب ہے" }, verseRef: "7:206" }
      ]
    }
  },

  relationships: [
    { from: "خلقتني من نار", to: "أنا خير منه", type: "causation", description: { en: "False origin-based superiority claim", ur: "اصل کی بنیاد پر جھوٹا برتری کا دعویٰ" } },
    { from: "فوسوس لهما", to: "بدت لهما سوآتهما", type: "consequence", description: { en: "Shaytan's whisper led to exposure", ur: "شیطان کے وسوسے نے برہنگی ظاہر کر دی" } },
    { from: "ظلمنا أنفسنا", to: "فتلقى آدم من ربه كلمات", type: "progression", description: { en: "Confession led to forgiveness", ur: "اعتراف نے مغفرت کا راستہ کھولا" } },
    { from: "اعبدوا الله", to: "ما لكم من إله غيره", type: "elaboration", description: { en: "All prophets' core message", ur: "تمام انبیاء کا بنیادی پیغام" } },
    { from: "فأنجيناه والذين معه", to: "وأغرقنا/فأخذتهم الرجفة", type: "contrast", description: { en: "Believers saved, deniers destroyed", ur: "ایمان والے بچائے گئے، انکار کرنے والے تباہ ہوئے" } },
    { from: "ألقى عصاه", to: "فوقع الحق", type: "causation", description: { en: "Musa's sign established truth", ur: "موسیٰ کی نشانی نے حق ثابت کیا" } },
    { from: "آمنا برب العالمين", to: "لأقطعن أيديكم", type: "consequence", description: { en: "Faith led to persecution", ur: "ایمان نے ظلم و ستم کی طرف لے گیا" } },
    { from: "أرني أنظر إليك", to: "لن تراني", type: "divine_response", description: { en: "Human limitation in seeing Allah", ur: "اللہ کو دیکھنے میں انسانی محدودیت" } },
    { from: "ألست بربكم", to: "بلى شهدنا", type: "covenant", description: { en: "Primordial testimony of souls", ur: "روحوں کی ازلی گواہی" } },
    { from: "إذا قرئ القرآن فاستمعوا", to: "لعلكم ترحمون", type: "causation", description: { en: "Listening leads to mercy", ur: "سننا رحمت کا سبب بنتا ہے" } }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Introduction & Quran's Purpose", verses: "7:1-10", description: { en: "Book revealed to warn and remind", ur: "کتاب انذار اور یاددہانی کے لیے نازل ہوئی" } },
      { stage: 2, theme: "Adam, Iblis, and Paradise", verses: "7:11-25", description: { en: "Creation, prostration refusal, fall from Paradise", ur: "تخلیق، سجدے سے انکار، جنت سے نکلنا" } },
      { stage: 3, theme: "Children of Adam", verses: "7:26-53", description: { en: "Clothing, Satan's enmity, Day of Judgment", ur: "لباس، شیطان کی دشمنی، یومِ حساب" } },
      { stage: 4, theme: "Al-A'raf (The Heights)", verses: "7:44-51", description: { en: "Barrier between Paradise and Hell", ur: "جنت اور جہنم کے درمیان آڑ" } },
      { stage: 5, theme: "Creation and Worship", verses: "7:54-58", description: { en: "Allah's creation, how to supplicate", ur: "اللہ کی تخلیق، دعا کا طریقہ" } },
      { stage: 6, theme: "Prophet Nuh", verses: "7:59-64", description: { en: "First prophet, flood, salvation of believers", ur: "پہلے نبی، طوفان، ایمان والوں کی نجات" } },
      { stage: 7, theme: "Prophet Hud and 'Ad", verses: "7:65-72", description: { en: "Hud's message, people's arrogance, destruction", ur: "ہود کا پیغام، قوم کا تکبر، تباہی" } },
      { stage: 8, theme: "Prophet Salih and Thamud", verses: "7:73-79", description: { en: "She-camel miracle, hamstringing, earthquake", ur: "اونٹنی کا معجزہ، کونچیں کاٹنا، زلزلہ" } },
      { stage: 9, theme: "Prophet Lut", verses: "7:80-84", description: { en: "Unprecedented sin, rain of stones", ur: "بے مثال گناہ، پتھروں کی بارش" } },
      { stage: 10, theme: "Prophet Shu'ayb and Madyan", verses: "7:85-93", description: { en: "Economic justice, destruction of cheaters", ur: "معاشی انصاف، دھوکے بازوں کی تباہی" } },
      { stage: 11, theme: "Prophet Musa - Mission Begins", verses: "7:103-126", description: { en: "Sent to Pharaoh, signs, magicians convert", ur: "فرعون کی طرف بھیجے گئے، نشانیاں، جادوگروں کا ایمان" } },
      { stage: 12, theme: "Plagues on Egypt", verses: "7:127-136", description: { en: "Nine plagues, Pharaoh's stubbornness", ur: "نو آفتیں، فرعون کی ضد" } },
      { stage: 13, theme: "Exodus & Sea Crossing", verses: "7:137-141", description: { en: "Israel inherits, crosses sea, requests idol", ur: "بنی اسرائیل کو وراثت ملی، سمندر پار کیا، بت کی فرمائش" } },
      { stage: 14, theme: "Mount Tur & Tablets", verses: "7:142-147", description: { en: "40 nights, Musa asks to see Allah, tablets", ur: "چالیس راتیں، موسیٰ کا دیدار کی درخواست، تختیاں" } },
      { stage: 15, theme: "Golden Calf Incident", verses: "7:148-156", description: { en: "Calf worship, Musa's anger, repentance", ur: "بچھڑے کی پوجا، موسیٰ کا غصہ، توبہ" } },
      { stage: 16, theme: "Prophet Muhammad Prophecy", verses: "7:157-158", description: { en: "Unlettered prophet foretold in scriptures", ur: "اُمّی نبی کی پچھلی کتابوں میں پیشگوئی" } },
      { stage: 17, theme: "Israel's Trials", verses: "7:159-171", description: { en: "Righteous among them, covenant, mountain raised", ur: "ان میں نیک لوگ، عہد، پہاڑ اٹھایا جانا" } },
      { stage: 18, theme: "Primordial Covenant", verses: "7:172-174", description: { en: "Souls testify to Allah's lordship", ur: "روحوں نے اللہ کی ربوبیت کی گواہی دی" } },
      { stage: 19, theme: "Warning Examples", verses: "7:175-186", description: { en: "Bal'am story, those who reject signs", ur: "بلعم کا قصہ، نشانیاں جھٹلانے والے" } },
      { stage: 20, theme: "Final Guidance", verses: "7:187-206", description: { en: "Hour's knowledge, Quran recitation etiquette, prostration", ur: "قیامت کا علم، تلاوتِ قرآن کے آداب، سجدہ" } }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: { en: "Avoid pride", ur: "تکبر سے بچو" }, how: { en: "Iblis was destroyed by pride - never consider yourself superior", ur: "ابلیس تکبر سے تباہ ہوا - کبھی اپنے آپ کو برتر نہ سمجھو" }, verse: "7:12-13" },
      { principle: { en: "Beware of Shaytan's whispers", ur: "شیطان کے وسوسوں سے ہوشیار رہو" }, how: { en: "He attacks from all directions - stay vigilant", ur: "وہ ہر طرف سے حملہ کرتا ہے - چوکنے رہو" }, verse: "7:16-17" },
      { principle: { en: "Repent sincerely", ur: "سچی توبہ کرو" }, how: { en: "Adam's model: acknowledge sin, seek forgiveness", ur: "آدم کا نمونہ: گناہ کا اعتراف، مغفرت طلب کرنا" }, verse: "7:23" },
      { principle: { en: "Wear clothing of taqwa", ur: "تقویٰ کا لباس پہنو" }, how: { en: "Physical modesty + inner consciousness of Allah", ur: "جسمانی پردہ + باطنی خدا آگاہی" }, verse: "7:26" },
      { principle: { en: "Prophets had one message", ur: "تمام انبیاء کا ایک ہی پیغام تھا" }, how: { en: "All called to worship Allah alone - follow this", ur: "سب نے صرف اللہ کی عبادت کی طرف بلایا - اسی پر عمل کرو" }, verse: "7:59,65,73,85" },
      { principle: { en: "Economic justice", ur: "معاشی انصاف" }, how: { en: "Give full measure, don't cheat in business", ur: "ناپ تول پوری کرو، کاروبار میں دھوکا نہ دو" }, verse: "7:85" },
      { principle: { en: "Truth defeats falsehood", ur: "حق باطل پر غالب آتا ہے" }, how: { en: "Stay firm in truth even against overwhelming odds", ur: "سچ پر قائم رہو چاہے مشکلات کتنی ہی بڑی ہوں" }, verse: "7:118-119" },
      { principle: { en: "Faith over fear", ur: "خوف پر ایمان کو ترجیح دو" }, how: { en: "Magicians chose faith despite crucifixion threat", ur: "جادوگروں نے سولی کی دھمکی کے باوجود ایمان چنا" }, verse: "7:124-126" },
      { principle: { en: "Hold scripture firmly", ur: "کتاب کو مضبوطی سے تھامو" }, how: { en: "Take guidance with determination, not casually", ur: "ہدایت کو عزم کے ساتھ پکڑو، بے پروائی سے نہیں" }, verse: "7:145" },
      { principle: { en: "Listen to Quran attentively", ur: "قرآن کو غور سے سنو" }, how: { en: "When recited, be silent and attentive", ur: "جب تلاوت ہو تو خاموش اور متوجہ رہو" }, verse: "7:204" },
      { principle: { en: "Remember Allah morning and evening", ur: "صبح و شام اللہ کو یاد کرو" }, how: { en: "Consistent dhikr prevents heedlessness", ur: "مسلسل ذکر غفلت سے بچاتا ہے" }, verse: "7:205" }
    ]
  },

  uniqueInsight: {
    title: { en: "Al-A'raf - The Barrier Between Eternal Destinations", ur: "الاعراف - ابدی منزلوں کے درمیان رکاوٹ" },
    insight: {
      en: "The surah takes its name from Al-A'raf (verses 46-48), a concept unique to Quranic eschatology. It refers to elevated heights between Paradise and Hell where certain people will stand. Scholars differ: some say they are those whose good and bad deeds are equal, others say they are martyrs whose parents didn't permit jihad, or children of mushrikin. They recognize both Paradise and Hell dwellers by their marks. They greet Paradise dwellers but haven't entered yet; they seek refuge from Hell. Eventually, Allah admits them to Paradise by His mercy. This represents divine justice - no one is lost in ambiguity; everyone has a destination, even if delayed. The concept also symbolizes how humans in dunya stand on a ridge between two eternities, choosing their direction.",
      ur: "اس سورت کا نام الاعراف (آیات 46-48) سے لیا گیا ہے، جو قرآنی آخرت شناسی میں ایک منفرد تصور ہے۔ یہ جنت اور جہنم کے درمیان بلندیوں کی طرف اشارہ کرتا ہے جہاں کچھ لوگ کھڑے ہوں گے۔ علماء کا اختلاف ہے: بعض کہتے ہیں یہ وہ ہیں جن کی نیکیاں اور بدیاں برابر ہیں، بعض کہتے ہیں یہ وہ شہید ہیں جن کے والدین نے جہاد کی اجازت نہیں دی، یا مشرکین کے بچے۔ وہ جنت اور جہنم والوں کو ان کی نشانیوں سے پہچانتے ہیں۔ وہ جنت والوں کو سلام کرتے ہیں لیکن ابھی داخل نہیں ہوئے؛ جہنم سے پناہ مانگتے ہیں۔ بالآخر اللہ اپنی رحمت سے انہیں جنت میں داخل کر دیتا ہے۔ یہ الٰہی انصاف کی علامت ہے - کوئی ابہام میں گم نہیں ہوتا؛ ہر کسی کی منزل ہے، چاہے تاخیر ہو۔ یہ تصور اس بات کی بھی علامت ہے کہ دنیا میں انسان دو ابدیتوں کے درمیان ایک چوٹی پر کھڑا ہے، اپنی سمت خود چنتا ہے۔"
    }
  },

  historicalContext: {
    note: {
      en: "This is the longest Makkan surah, revealed before the migration to Madinah when Muslims faced severe persecution. The extensive stories of previous prophets served to comfort Prophet Muhammad and believers, showing that all messengers faced rejection but truth ultimately prevailed. The Pharaoh-Musa narrative is particularly detailed (70+ verses), perhaps paralleling Quraysh's opposition. The surah's emphasis on prophets being 'brothers' to their people (أخاهم) highlights that messengers came from within communities, not as outsiders. The primordial covenant (7:172) establishes that every soul has inherent knowledge of Allah, making disbelief a betrayal of one's own testimony.",
      ur: "یہ سب سے لمبی مکی سورت ہے، ہجرت سے پہلے نازل ہوئی جب مسلمانوں کو شدید ظلم و ستم کا سامنا تھا۔ پچھلے انبیاء کے تفصیلی قصے نبی ﷺ اور مومنین کو تسلی دینے کے لیے تھے، یہ دکھاتے ہوئے کہ تمام رسولوں کو رد کیا گیا لیکن بالآخر حق غالب آیا۔ فرعون اور موسیٰ کا بیان خاص طور پر تفصیلی ہے (70 سے زیادہ آیات)، شاید قریش کی مخالفت کے متوازی۔ سورت کا انبیاء کو اپنی قوم کے 'بھائی' (أخاهم) کہنا اس بات پر زور دیتا ہے کہ رسول اپنی قوموں کے اندر سے آئے، باہر سے نہیں۔ ازلی عہد (7:172) ثابت کرتا ہے کہ ہر روح میں اللہ کا فطری علم ہے، جس سے کفر اپنی ہی گواہی کے ساتھ خیانت بن جاتا ہے۔"
    }
  },

  linguisticFeatures: {
    features: [
      { feature: "الأعراف", example: "The Heights", effect: { en: "Plural of عُرف (elevated place) - unique Quranic term", ur: "عُرف (اونچی جگہ) کی جمع - منفرد قرآنی اصطلاح" } },
      { feature: "فَدَلَّاهُمَا بِغُرُورٍ", example: "Led them gradually by deception", effect: { en: "دلّى from دَلْو (bucket) - lowered them step by step", ur: "دلّیٰ دَلْو (ڈول) سے ہے - قدم بہ قدم نیچے گرایا" } },
      { feature: "اسْتَكْبَرَ", example: "Was arrogant", effect: { en: "Form X - sought/considered self great", ur: "باب استفعال - اپنے آپ کو بڑا سمجھنا" } },
      { feature: "أَسِفًا", example: "Grieved", effect: { en: "Pattern فَعِل indicating intense emotional state", ur: "وزن فَعِل جو شدید جذباتی کیفیت ظاہر کرتا ہے" } },
      { feature: "طِبَاقًا", example: "Layered", effect: { en: "Describes seven heavens in layers", ur: "سات آسمانوں کو تہوں میں بیان کرتا ہے" } },
      { feature: "الْأَسْمَاءُ الْحُسْنَىٰ", example: "Most Beautiful Names", effect: { en: "Superlative pattern فُعْلَى", ur: "افعل التفضیل کا وزن فُعْلَى" } },
      { feature: "مُسَخَّرَات", example: "Subjected/made subservient", effect: { en: "Passive participle Form II - celestial obedience", ur: "اسم مفعول باب تفعیل - آسمانی فرمانبرداری" } },
      { feature: "تَضَرُّعًا وَخُفْيَةً", example: "Humbly and privately", effect: { en: "Two modes of proper supplication", ur: "صحیح دعا کے دو طریقے" } }
    ]
  },

  prophetMentions: {
    prophets: [
      { name: "Adam", arabic: "آدم", verses: "7:11-25, 172", role: { en: "First human, covenant representative", ur: "پہلا انسان، عہد کا نمائندہ" } },
      { name: "Nuh (Noah)", arabic: "نوح", verses: "7:59-64", role: { en: "First named prophet to a nation", ur: "کسی قوم کی طرف بھیجے جانے والے پہلے نامزد نبی" } },
      { name: "Hud", arabic: "هود", verses: "7:65-72", role: { en: "Prophet to 'Ad", ur: "قومِ عاد کے نبی" } },
      { name: "Salih", arabic: "صالح", verses: "7:73-79", role: { en: "Prophet to Thamud, she-camel miracle", ur: "قومِ ثمود کے نبی، اونٹنی کا معجزہ" } },
      { name: "Lut (Lot)", arabic: "لوط", verses: "7:80-84", role: { en: "Prophet condemning unprecedented sin", ur: "بے مثال گناہ کی مذمت کرنے والے نبی" } },
      { name: "Shu'ayb", arabic: "شعيب", verses: "7:85-93", role: { en: "Prophet to Madyan, economic justice", ur: "اہلِ مدین کے نبی، معاشی انصاف" } },
      { name: "Musa (Moses)", arabic: "موسى", verses: "7:103-162", role: { en: "Most detailed story - Pharaoh, plagues, tablets", ur: "سب سے تفصیلی قصہ - فرعون، آفات، تختیاں" } },
      { name: "Harun (Aaron)", arabic: "هارون", verses: "7:122, 142, 150-151", role: { en: "Musa's brother and helper", ur: "موسیٰ کے بھائی اور مددگار" } },
      { name: "Muhammad", arabic: "محمد", verses: "7:157-158", role: { en: "Prophesied in previous scriptures", ur: "سابقہ کتابوں میں جن کی پیشگوئی ہے" } }
    ]
  },

  destructions: {
    nations: [
      { nation: "People of Nuh", punishment: "أَغْرَقْنَا - Drowned in flood", verse: "7:64" },
      { nation: "'Ad (Hud's people)", punishment: "قَطَعْنَا دَابِرَ - Cut off completely", verse: "7:72" },
      { nation: "Thamud (Salih's people)", punishment: "الرَّجْفَة - Earthquake", verse: "7:78" },
      { nation: "People of Lut", punishment: "أَمْطَرْنَا مَطَرًا - Rain of stones", verse: "7:84" },
      { nation: "Madyan (Shu'ayb's people)", punishment: "الرَّجْفَة - Earthquake", verse: "7:91" },
      { nation: "Pharaoh's people", punishment: "أَغْرَقْنَاهُمْ فِي الْيَمِّ - Drowned in sea", verse: "7:136" }
    ]
  },

  scientificReferences: {
    notes: [
      { verse: "7:11", topic: { en: "Human Creation", ur: "انسانی تخلیق" }, note: { en: "خَلَقْنَاكُمْ ثُمَّ صَوَّرْنَاكُمْ - Creation then shaping/formation stages", ur: "خَلَقْنَاكُمْ ثُمَّ صَوَّرْنَاكُمْ - تخلیق پھر صورت گری کے مراحل" } },
      { verse: "7:54", topic: { en: "Cosmology", ur: "کائنات شناسی" }, note: { en: "Six days of creation, cosmic order, day-night cycle", ur: "چھ دنوں میں تخلیق، کائناتی نظام، شب و روز کا چکر" } },
      { verse: "7:57", topic: { en: "Water Cycle", ur: "پانی کا دوران" }, note: { en: "Winds carrying clouds, rain reviving dead earth", ur: "ہوائیں بادل اٹھاتی ہیں، بارش مردہ زمین کو زندہ کرتی ہے" } },
      { verse: "7:172", topic: { en: "Consciousness", ur: "شعور" }, note: { en: "Pre-existence awareness, souls acknowledging their Lord", ur: "قبل از وجود آگاہی، روحوں نے اپنے رب کو تسلیم کیا" } }
    ]
  }
};

export default ONTOLOGY;
