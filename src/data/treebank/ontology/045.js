/**
 * Surah Al-Jathiyah (The Kneeling) - Surah 45
 * Ontology of Quranic Concepts and Relationships
 * Theme: Signs in creation, warning against following desires, favors upon Bani Israel, Day of Judgment kneeling
 */

export const ONTOLOGY = {
  surahId: 45,
  surahName: "Al-Jathiyah",
  surahNameArabic: "الجاثية",
  totalAyahs: 37,
  revelationType: "Makkan",
  mainTheme: "Signs of Allah in Creation and the Day When All Nations Kneel Before Him",

  categories: {
    signsInCreation: {
      name: "Signs of Allah in Creation",
      nameUr: "تخلیق میں اللہ کی نشانیاں",
      nameAr: "آيات الله في الخلق",
      color: '#06B6D4',
      icon: 'Globe',
      concepts: [
        { term: "Ayat fi al-Samawat", arabic: "آيَاتٌ فِي السَّمَاوَاتِ", meaning: { en: "Signs in the heavens", ur: "آسمانوں میں نشانیاں" }, ayahs: [3] },
        { term: "Ayat fi al-Ard", arabic: "وَالْأَرْضِ", meaning: { en: "Signs in the earth", ur: "زمین میں نشانیاں" }, ayahs: [3] },
        { term: "Ayat li al-Mu'minin", arabic: "آيَاتٌ لِّلْمُؤْمِنِينَ", meaning: { en: "Signs for the believers", ur: "مومنوں کے لیے نشانیاں" }, ayahs: [3] },
        { term: "Khalqikum", arabic: "خَلْقِكُمْ", meaning: { en: "Your creation", ur: "تمہاری تخلیق" }, ayahs: [4] },
        { term: "Dabbah", arabic: "دَابَّةٍ", meaning: { en: "Creatures He disperses", ur: "جانور جو وہ پھیلاتا ہے" }, ayahs: [4] },
        { term: "Ikhtilaf al-Layl", arabic: "اخْتِلَافِ اللَّيْلِ وَالنَّهَارِ", meaning: { en: "Alternation of night and day", ur: "رات اور دن کا بدلنا" }, ayahs: [5] },
        { term: "Rizq min al-Sama", arabic: "رِزْقٍ مِّنَ السَّمَاءِ", meaning: { en: "Provision from the sky (rain)", ur: "آسمان سے رزق (بارش)" }, ayahs: [5] },
        { term: "Ihya al-Ard", arabic: "فَأَحْيَا بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا", meaning: { en: "Reviving earth after its death", ur: "زمین کو مرنے کے بعد زندہ کرنا" }, ayahs: [5] },
        { term: "Tasrif al-Riyah", arabic: "تَصْرِيفِ الرِّيَاحِ", meaning: { en: "Directing of the winds", ur: "ہواؤں کا چلانا" }, ayahs: [5] }
      ]
    },

    subjugationBlessings: {
      name: "Subjugation of Creation",
      nameUr: "کائنات کی تسخیر",
      nameAr: "تسخير الكون",
      color: '#06B6D4',
      icon: 'Sun',
      concepts: [
        { term: "Sakhkhara ma fi al-Samawat", arabic: "سَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ", meaning: { en: "Subjected what is in the heavens", ur: "آسمانوں کی چیزیں مسخر کیں" }, ayahs: [13] },
        { term: "Sakhkhara ma fi al-Ard", arabic: "وَمَا فِي الْأَرْضِ", meaning: { en: "And what is in the earth", ur: "اور جو زمین میں ہے" }, ayahs: [13] },
        { term: "Jami'an Minhu", arabic: "جَمِيعًا مِّنْهُ", meaning: { en: "All from Him", ur: "سب اسی کی طرف سے" }, ayahs: [13] },
        { term: "Sakhkhara lakum al-Bahr", arabic: "سَخَّرَ لَكُمُ الْبَحْرَ", meaning: { en: "Subjected the sea for you", ur: "سمندر کو تمہارے لیے مسخر کیا" }, ayahs: [12] },
        { term: "Fulk Tajri Fihi", arabic: "لِتَجْرِيَ الْفُلْكُ فِيهِ", meaning: { en: "Ships sail through it", ur: "جہاز اس میں چلتے ہیں" }, ayahs: [12] },
        { term: "Tabtaghu min Fadlihi", arabic: "وَلِتَبْتَغُوا مِن فَضْلِهِ", meaning: { en: "To seek from His bounty", ur: "تاکہ تم اس کے فضل سے تلاش کرو" }, ayahs: [12] }
      ]
    },

    rejectionOfSigns: {
      name: "Rejection of Divine Signs",
      nameUr: "الٰہی نشانیوں کا انکار",
      nameAr: "إنكار الآيات",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Bi Ayyi Hadith", arabic: "فَبِأَيِّ حَدِيثٍ بَعْدَ اللَّهِ وَآيَاتِهِ يُؤْمِنُونَ", meaning: { en: "In what message after Allah and His signs will they believe?", ur: "اللہ اور اس کی آیات کے بعد کس بات پر ایمان لائیں گے؟" }, ayahs: [6] },
        { term: "Affak Athim", arabic: "أَفَّاكٍ أَثِيمٍ", meaning: { en: "Every sinful liar", ur: "ہر جھوٹے گنہگار کے لیے" }, ayahs: [7] },
        { term: "Yusirru Mustakbiran", arabic: "يُصِرُّ مُسْتَكْبِرًا", meaning: { en: "Persists arrogantly", ur: "تکبر سے اصرار کرتا ہے" }, ayahs: [8] },
        { term: "Ka'an Lam Yasma'ha", arabic: "كَأَن لَّمْ يَسْمَعْهَا", meaning: { en: "As if he had not heard them", ur: "گویا اس نے سنا ہی نہیں" }, ayahs: [8] },
        { term: "Waqran fi Udhunayhi", arabic: "وَقْرًا فِي أُذُنَيْهِ", meaning: { en: "Deafness in his ears", ur: "اس کے کانوں میں بہرا پن" }, ayahs: [8] },
        { term: "Ittikhādh Ayat Huzuwan", arabic: "اتَّخَذَهَا هُزُوًا", meaning: { en: "Takes them (signs) in ridicule", ur: "ان (آیات) کا مذاق اڑاتا ہے" }, ayahs: [9, 35] }
      ]
    },

    followingDesires: {
      name: "Following Desires and Whims",
      nameUr: "خواہشات اور ہوس کی پیروی",
      nameAr: "اتباع الهوى",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Ittakhadha Ilahahu Hawahu", arabic: "اتَّخَذَ إِلَٰهَهُ هَوَاهُ", meaning: { en: "Takes his desire as his god", ur: "اپنی خواہش کو اپنا معبود بنا لیتا ہے" }, ayahs: [23] },
        { term: "Adallahu Allah", arabic: "وَأَضَلَّهُ اللَّهُ عَلَىٰ عِلْمٍ", meaning: { en: "Allah left him astray knowingly", ur: "اللہ نے جان بوجھ کر اسے گمراہ چھوڑ دیا" }, ayahs: [23] },
        { term: "Khatama 'ala Sam'ihi", arabic: "وَخَتَمَ عَلَىٰ سَمْعِهِ", meaning: { en: "Sealed his hearing", ur: "اس کے کان پر مہر لگا دی" }, ayahs: [23] },
        { term: "Khatama 'ala Qalbihi", arabic: "وَقَلْبِهِ", meaning: { en: "Sealed his heart", ur: "اس کے دل پر مہر لگا دی" }, ayahs: [23] },
        { term: "Ghishawah 'ala Basarihi", arabic: "وَجَعَلَ عَلَىٰ بَصَرِهِ غِشَاوَةً", meaning: { en: "Placed over his sight a veil", ur: "اس کی آنکھوں پر پردہ ڈال دیا" }, ayahs: [23] },
        { term: "Man Yahdihi", arabic: "فَمَن يَهْدِيهِ مِن بَعْدِ اللَّهِ", meaning: { en: "Who will guide him after Allah?", ur: "اللہ کے بعد کون اسے ہدایت دے گا؟" }, ayahs: [23] }
      ]
    },

    denialOfHereafter: {
      name: "Denial of the Hereafter",
      nameUr: "آخرت کا انکار",
      nameAr: "إنكار الآخرة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Ma Hiya Illa Hayatuna", arabic: "مَا هِيَ إِلَّا حَيَاتُنَا الدُّنْيَا", meaning: { en: "There is nothing but our worldly life", ur: "ہماری دنیاوی زندگی کے سوا کچھ نہیں" }, ayahs: [24] },
        { term: "Namut wa Nahya", arabic: "نَمُوتُ وَنَحْيَا", meaning: { en: "We die and we live", ur: "ہم مرتے ہیں اور جیتے ہیں" }, ayahs: [24] },
        { term: "Ma Yuhlikuna illa al-Dahr", arabic: "وَمَا يُهْلِكُنَا إِلَّا الدَّهْرُ", meaning: { en: "Nothing destroys us except time", ur: "زمانے کے سوا ہمیں کوئی چیز ہلاک نہیں کرتی" }, ayahs: [24] },
        { term: "Ma Lahum Bi Dhālika Min 'Ilm", arabic: "وَمَا لَهُم بِذَٰلِكَ مِنْ عِلْمٍ", meaning: { en: "They have no knowledge of that", ur: "ان کو اس کا کوئی علم نہیں" }, ayahs: [24] },
        { term: "In Hum Illa Yadhunnun", arabic: "إِنْ هُمْ إِلَّا يَظُنُّونَ", meaning: { en: "They only assume", ur: "وہ صرف گمان کرتے ہیں" }, ayahs: [24] },
        { term: "I'tuna bi Aba'ina", arabic: "ائْتُوا بِآبَائِنَا", meaning: { en: "Bring back our forefathers", ur: "ہمارے باپ دادا کو واپس لاؤ" }, ayahs: [25] }
      ]
    },

    baniIsraelFavors: {
      name: "Favors Upon Bani Israel",
      nameUr: "بنی اسرائیل پر احسانات",
      nameAr: "نعم الله على بني إسرائيل",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Atayna Bani Isra'il al-Kitab", arabic: "آتَيْنَا بَنِي إِسْرَائِيلَ الْكِتَابَ", meaning: { en: "We gave Bani Israel the Scripture", ur: "ہم نے بنی اسرائیل کو کتاب دی" }, ayahs: [16] },
        { term: "Al-Hukm", arabic: "وَالْحُكْمَ", meaning: { en: "And authority/judgment", ur: "اور حکومت و فیصلہ" }, ayahs: [16] },
        { term: "Al-Nubuwwah", arabic: "وَالنُّبُوَّةَ", meaning: { en: "And prophethood", ur: "اور نبوت" }, ayahs: [16] },
        { term: "Al-Tayyibat", arabic: "وَرَزَقْنَاهُم مِّنَ الطَّيِّبَاتِ", meaning: { en: "Provided them with good things", ur: "انہیں پاکیزہ رزق دیا" }, ayahs: [16] },
        { term: "Faddalnahum 'ala al-'Alamin", arabic: "وَفَضَّلْنَاهُمْ عَلَى الْعَالَمِينَ", meaning: { en: "Preferred them over the worlds", ur: "انہیں جہانوں پر فضیلت دی" }, ayahs: [16] },
        { term: "Bayyinat min al-Amr", arabic: "بَيِّنَاتٍ مِّنَ الْأَمْرِ", meaning: { en: "Clear proofs of the matter", ur: "دین کے واضح دلائل" }, ayahs: [17] }
      ]
    },

    baniIsraelDivision: {
      name: "Division Among Bani Israel",
      nameUr: "بنی اسرائیل میں تفرقہ",
      nameAr: "اختلاف بني إسرائيل",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Ikhtalafū min Ba'di Ma Ja'ahum", arabic: "فَمَا اخْتَلَفُوا إِلَّا مِن بَعْدِ مَا جَاءَهُمُ الْعِلْمُ", meaning: { en: "They differed only after knowledge came", ur: "انہوں نے علم آنے کے بعد ہی اختلاف کیا" }, ayahs: [17] },
        { term: "Baghyan Baynahum", arabic: "بَغْيًا بَيْنَهُمْ", meaning: { en: "Out of jealousy between themselves", ur: "آپس کی حسد سے" }, ayahs: [17] },
        { term: "Yaqdi Baynahum", arabic: "إِنَّ رَبَّكَ يَقْضِي بَيْنَهُمْ يَوْمَ الْقِيَامَةِ", meaning: { en: "Your Lord will judge between them on Judgment Day", ur: "تمہارا رب قیامت کے دن ان کے درمیان فیصلہ کرے گا" }, ayahs: [17] }
      ]
    },

    shariahAndGuidance: {
      name: "Shariah and Divine Guidance",
      nameUr: "شریعت اور الٰہی ہدایت",
      nameAr: "الشريعة والهداية",
      color: '#3B82F6',
      icon: 'Compass',
      concepts: [
        { term: "Ja'alnaka 'ala Shari'ah", arabic: "جَعَلْنَاكَ عَلَىٰ شَرِيعَةٍ مِّنَ الْأَمْرِ", meaning: { en: "We placed you upon a Shariah", ur: "ہم نے تمہیں ایک شریعت پر رکھا" }, ayahs: [18] },
        { term: "Fattabi'ha", arabic: "فَاتَّبِعْهَا", meaning: { en: "So follow it", ur: "پس اس کی پیروی کرو" }, ayahs: [18] },
        { term: "La Tattabi' Ahwa'", arabic: "وَلَا تَتَّبِعْ أَهْوَاءَ الَّذِينَ لَا يَعْلَمُونَ", meaning: { en: "Do not follow desires of those who do not know", ur: "بے علموں کی خواہشات کی پیروی نہ کرو" }, ayahs: [18] },
        { term: "Lan Yughnu 'anka", arabic: "إِنَّهُمْ لَن يُغْنُوا عَنكَ مِنَ اللَّهِ شَيْئًا", meaning: { en: "They will not avail you against Allah", ur: "وہ اللہ کے مقابلے میں تمہارے کام نہیں آئیں گے" }, ayahs: [19] },
        { term: "Ba'duhum Awliya' Ba'd", arabic: "وَالظَّالِمُونَ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ", meaning: { en: "The wrongdoers are allies of one another", ur: "ظالم ایک دوسرے کے دوست ہیں" }, ayahs: [19] },
        { term: "Allah Waliyy al-Muttaqin", arabic: "وَاللَّهُ وَلِيُّ الْمُتَّقِينَ", meaning: { en: "Allah is protector of the righteous", ur: "اللہ متقیوں کا محافظ ہے" }, ayahs: [19] }
      ]
    },

    quranAsGuidance: {
      name: "The Quran as Guidance",
      nameUr: "قرآن بطور ہدایت",
      nameAr: "القرآن هدى",
      color: '#3B82F6',
      icon: 'Book',
      concepts: [
        { term: "Basa'ir li al-Nas", arabic: "هَٰذَا بَصَائِرُ لِلنَّاسِ", meaning: { en: "This is insight for mankind", ur: "یہ لوگوں کے لیے بصیرت ہے" }, ayahs: [20] },
        { term: "Hudan", arabic: "وَهُدًى", meaning: { en: "And guidance", ur: "اور ہدایت" }, ayahs: [20] },
        { term: "Rahmah", arabic: "وَرَحْمَةٌ", meaning: { en: "And mercy", ur: "اور رحمت" }, ayahs: [20] },
        { term: "Li Qawmin Yuqinun", arabic: "لِّقَوْمٍ يُوقِنُونَ", meaning: { en: "For people who have certainty", ur: "یقین رکھنے والوں کے لیے" }, ayahs: [20] }
      ]
    },

    theKneeling: {
      name: "The Kneeling - Day of Judgment",
      nameUr: "گھٹنوں کے بل - یومِ قیامت",
      nameAr: "الجثو يوم القيامة",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Kull Ummah Jathiyah", arabic: "وَتَرَىٰ كُلَّ أُمَّةٍ جَاثِيَةً", meaning: { en: "You will see every nation kneeling", ur: "تم ہر امت کو گھٹنوں کے بل دیکھو گے" }, ayahs: [28] },
        { term: "Tud'a ila Kitabiha", arabic: "كُلُّ أُمَّةٍ تُدْعَىٰ إِلَىٰ كِتَابِهَا", meaning: { en: "Each nation called to its record", ur: "ہر امت کو اس کے نامۂ اعمال کی طرف بلایا جائے گا" }, ayahs: [28] },
        { term: "Tujzawna ma Kuntum Ta'malun", arabic: "الْيَوْمَ تُجْزَوْنَ مَا كُنتُمْ تَعْمَلُونَ", meaning: { en: "Today you are recompensed for what you used to do", ur: "آج تمہیں وہ بدلہ دیا جائے گا جو تم کرتے تھے" }, ayahs: [28] },
        { term: "Kitabuna Yantiq", arabic: "هَٰذَا كِتَابُنَا يَنطِقُ عَلَيْكُم بِالْحَقِّ", meaning: { en: "This Our record speaks against you with truth", ur: "یہ ہمارا نامۂ اعمال تمہارے خلاف سچ بولتا ہے" }, ayahs: [29] },
        { term: "Nastansikhu ma Kuntum Ta'malun", arabic: "إِنَّا كُنَّا نَسْتَنسِخُ مَا كُنتُمْ تَعْمَلُونَ", meaning: { en: "We were having transcribed what you used to do", ur: "ہم تمہارے اعمال کا نسخہ اتارتے تھے" }, ayahs: [29] }
      ]
    },

    fateOfBelievers: {
      name: "Fate of the Believers",
      nameUr: "مومنین کا انجام",
      nameAr: "مصير المؤمنين",
      color: '#8B5CF6',
      icon: 'Sparkles',
      concepts: [
        { term: "Fa Yudkhiluhum fi Rahmatihi", arabic: "فَيُدْخِلُهُمْ رَبُّهُمْ فِي رَحْمَتِهِ", meaning: { en: "Their Lord will admit them into His mercy", ur: "ان کا رب انہیں اپنی رحمت میں داخل کرے گا" }, ayahs: [30] },
        { term: "Dhalika al-Fawz al-Mubin", arabic: "ذَٰلِكَ هُوَ الْفَوْزُ الْمُبِينُ", meaning: { en: "That is the clear success", ur: "یہی کھلی کامیابی ہے" }, ayahs: [30] }
      ]
    },

    fateOfDisbelievers: {
      name: "Fate of the Disbelievers",
      nameUr: "کافروں کا انجام",
      nameAr: "مصير الكافرين",
      color: '#EF4444',
      icon: 'AlertTriangle',
      concepts: [
        { term: "Alam Tukun Ayati Tutla", arabic: "أَلَمْ تَكُنْ آيَاتِي تُتْلَىٰ عَلَيْكُمْ", meaning: { en: "Were not My verses recited to you?", ur: "کیا تم پر میری آیات نہیں پڑھی جاتی تھیں؟" }, ayahs: [31] },
        { term: "Istakbartum", arabic: "فَاسْتَكْبَرْتُمْ", meaning: { en: "But you were arrogant", ur: "مگر تم نے تکبر کیا" }, ayahs: [31] },
        { term: "Qawman Mujrimin", arabic: "وَكُنتُمْ قَوْمًا مُّجْرِمِينَ", meaning: { en: "You were a criminal people", ur: "تم مجرم قوم تھے" }, ayahs: [31] },
        { term: "Wa'd Allah Haqq", arabic: "وَأَنَّ وَعْدَ اللَّهِ حَقٌّ", meaning: { en: "The promise of Allah is truth", ur: "اللہ کا وعدہ سچا ہے" }, ayahs: [32] },
        { term: "Wa al-Sa'ah La Rayba Fiha", arabic: "وَالسَّاعَةُ لَا رَيْبَ فِيهَا", meaning: { en: "The Hour is coming without doubt", ur: "قیامت آنے والی ہے بلا شک" }, ayahs: [32] },
        { term: "Qultum Ma Nadri", arabic: "قُلْتُم مَّا نَدْرِي مَا السَّاعَةُ", meaning: { en: "You said: We do not know what the Hour is", ur: "تم نے کہا: ہم نہیں جانتے قیامت کیا ہے" }, ayahs: [32] },
        { term: "In Nadhunnu illa Dhanna", arabic: "إِن نَّظُنُّ إِلَّا ظَنًّا", meaning: { en: "We assume only assumption", ur: "ہم تو صرف گمان کرتے ہیں" }, ayahs: [32] },
        { term: "Bada Lahum Sayyi'at", arabic: "وَبَدَا لَهُمْ سَيِّئَاتُ مَا عَمِلُوا", meaning: { en: "Appeared to them the evils of what they did", ur: "ان کے سامنے ان کے اعمال کی برائیاں ظاہر ہوئیں" }, ayahs: [33] },
        { term: "Haqa bihim ma Kanu Yastahzi'un", arabic: "وَحَاقَ بِهِم مَّا كَانُوا بِهِ يَسْتَهْزِئُونَ", meaning: { en: "Surrounded them what they used to ridicule", ur: "جس کا وہ مذاق اڑاتے تھے اس نے انہیں گھیر لیا" }, ayahs: [33] }
      ]
    },

    divineAbandonment: {
      name: "Divine Abandonment",
      nameUr: "الٰہی ترک",
      nameAr: "الترك الإلهي",
      color: '#EF4444',
      icon: 'Shield',
      concepts: [
        { term: "Fa al-Yawm Nunsikum", arabic: "فَالْيَوْمَ نُنسَاكُمْ", meaning: { en: "So today We forget you", ur: "پس آج ہم تمہیں بھلا دیتے ہیں" }, ayahs: [34] },
        { term: "Kama Nasitum Liqa'", arabic: "كَمَا نَسِيتُمْ لِقَاءَ يَوْمِكُمْ هَٰذَا", meaning: { en: "As you forgot the meeting of this Day", ur: "جیسے تم اس دن کی ملاقات بھول گئے" }, ayahs: [34] },
        { term: "Ma'wakum al-Nar", arabic: "وَمَأْوَاكُمُ النَّارُ", meaning: { en: "Your refuge is the Fire", ur: "تمہارا ٹھکانا آگ ہے" }, ayahs: [34] },
        { term: "Ma Lakum min Nasirin", arabic: "وَمَا لَكُم مِّن نَّاصِرِينَ", meaning: { en: "You have no helpers", ur: "تمہارا کوئی مددگار نہیں" }, ayahs: [34] },
        { term: "Dhalika bi Annakum Ittakhadhtum", arabic: "ذَٰلِكُم بِأَنَّكُمُ اتَّخَذْتُمْ", meaning: { en: "That is because you took", ur: "یہ اس لیے کہ تم نے" }, ayahs: [35] },
        { term: "Ayatillahi Huzuwa", arabic: "آيَاتِ اللَّهِ هُزُوًا", meaning: { en: "Signs of Allah in ridicule", ur: "اللہ کی آیات کا مذاق اڑایا" }, ayahs: [35] },
        { term: "Gharratkum al-Hayat al-Dunya", arabic: "وَغَرَّتْكُمُ الْحَيَاةُ الدُّنْيَا", meaning: { en: "The worldly life deceived you", ur: "دنیاوی زندگی نے تمہیں دھوکا دیا" }, ayahs: [35] }
      ]
    },

    divineMajesty: {
      name: "Divine Majesty and Sovereignty",
      nameUr: "الٰہی عظمت اور حاکمیت",
      nameAr: "عظمة الله وملكه",
      color: '#F59E0B',
      icon: 'Crown',
      concepts: [
        { term: "Fa Lillah al-Hamd", arabic: "فَلِلَّهِ الْحَمْدُ", meaning: { en: "So to Allah belongs all praise", ur: "پس تمام تعریف اللہ ہی کے لیے ہے" }, ayahs: [36] },
        { term: "Rabb al-Samawat", arabic: "رَبِّ السَّمَاوَاتِ", meaning: { en: "Lord of the heavens", ur: "آسمانوں کا رب" }, ayahs: [36] },
        { term: "Rabb al-Ard", arabic: "وَرَبِّ الْأَرْضِ", meaning: { en: "Lord of the earth", ur: "زمین کا رب" }, ayahs: [36] },
        { term: "Rabb al-'Alamin", arabic: "رَبِّ الْعَالَمِينَ", meaning: { en: "Lord of all worlds", ur: "تمام جہانوں کا رب" }, ayahs: [36] },
        { term: "Lahu al-Kibriya'", arabic: "وَلَهُ الْكِبْرِيَاءُ فِي السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "His is the grandeur in heavens and earth", ur: "آسمانوں اور زمین میں بڑائی اسی کی ہے" }, ayahs: [37] },
        { term: "Al-'Aziz al-Hakim", arabic: "وَهُوَ الْعَزِيزُ الْحَكِيمُ", meaning: { en: "And He is the Mighty, the Wise", ur: "اور وہ غالب حکمت والا ہے" }, ayahs: [37] }
      ]
    }
  },

  relationships: [
    { from: "Signs in Creation", to: "Belief", type: "evidence", description: { en: "Creation signs prove divine existence", ur: "تخلیق کی نشانیاں الٰہی وجود ثابت کرتی ہیں" } },
    { from: "Following Desires", to: "Misguidance", type: "consequence", description: { en: "Making desire one's god leads to being sealed", ur: "خواہشات کو معبود بنانا مہر لگنے کا باعث بنتا ہے" } },
    { from: "Denial of Hereafter", to: "Kneeling on Judgment Day", type: "irony", description: { en: "Those who denied will kneel humiliated", ur: "انکار کرنے والے ذلت سے گھٹنوں پر ہوں گے" } },
    { from: "Bani Israel Favors", to: "Division After Knowledge", type: "warning", description: { en: "Even blessed nations can fall through jealousy", ur: "نعمت یافتہ قومیں بھی حسد سے زوال پا سکتی ہیں" } },
    { from: "Quran as Guidance", to: "Shariah", type: "manifestation", description: { en: "The Shariah is the practical guidance", ur: "شریعت عملی رہنمائی ہے" } },
    { from: "Record of Deeds", to: "Perfect Justice", type: "guarantee", description: { en: "Allah records everything for just recompense", ur: "اللہ منصفانہ بدلے کے لیے سب کچھ ریکارڈ کرتا ہے" } },
    { from: "Ridiculing Signs", to: "Being Forgotten", type: "reciprocity", description: { en: "As they forgot Allah, He forgets them", ur: "جیسے انہوں نے اللہ کو بھلایا ویسے ہی وہ انہیں بھلا دے گا" } },
    { from: "Worldly Deception", to: "Eternal Loss", type: "consequence", description: { en: "Being deceived by dunya leads to loss of akhirah", ur: "دنیا کے دھوکے میں آنا آخرت کے نقصان کا باعث بنتا ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Creation Signs to Kneeling in Judgment", ur: "تخلیق کی نشانیوں سے قیامت میں گھٹنے ٹیکنے تک" },
    stages: [
      { name: "Revelation Source", ayahs: [1, 2], description: { en: "Ha-Mim, revelation from the Mighty, Wise", ur: "حم، غالب حکمت والے کی طرف سے وحی" } },
      { name: "Signs in Creation", ayahs: [3, 4, 5], description: { en: "Signs in heavens, earth, creatures, night/day, rain, winds", ur: "آسمانوں، زمین، مخلوقات، رات/دن، بارش، ہواؤں میں نشانیاں" } },
      { name: "Rejection Warning", ayahs: [6, 7, 8, 9, 10, 11], description: { en: "Those who reject signs despite evidence", ur: "دلائل کے باوجود نشانیوں کا انکار کرنے والے" } },
      { name: "Sea Subjugation", ayahs: [12, 13, 14, 15], description: { en: "Sea and all creation subjected for mankind", ur: "سمندر اور ساری کائنات انسان کے لیے مسخر" } },
      { name: "Bani Israel Story", ayahs: [16, 17], description: { en: "Scripture, wisdom, prophethood given, then they divided", ur: "کتاب، حکمت، نبوت دی گئی پھر تفرقے ڈالے" } },
      { name: "Shariah for Muhammad", ayahs: [18, 19, 20], description: { en: "Follow the Shariah, not the ignorant", ur: "شریعت کی پیروی کرو جاہلوں کی نہیں" } },
      { name: "Equality Warning", ayahs: [21], description: { en: "Evil-doers not equal to believers", ur: "بدکار مومنوں کے برابر نہیں" } },
      { name: "Perfect Creation", ayahs: [22], description: { en: "Creation with truth for recompense", ur: "تخلیق حق کے ساتھ بدلے کے لیے" } },
      { name: "Desire as God", ayahs: [23], description: { en: "Taking desire as deity, sealed faculties", ur: "خواہش کو معبود بنانا، صلاحیتوں پر مہر" } },
      { name: "Materialist Denial", ayahs: [24, 25, 26], description: { en: "Denial of afterlife, only time kills", ur: "آخرت کا انکار، صرف زمانہ مارتا ہے" } },
      { name: "Allah's Sovereignty", ayahs: [27], description: { en: "Dominion of heavens and earth", ur: "آسمانوں اور زمین کی بادشاہی" } },
      { name: "The Kneeling Scene", ayahs: [28, 29], description: { en: "Every nation kneeling, record speaks", ur: "ہر امت گھٹنوں پر، نامۂ اعمال بولتا ہے" } },
      { name: "Believers' Success", ayahs: [30], description: { en: "Admitted into mercy, clear triumph", ur: "رحمت میں داخل، واضح کامیابی" } },
      { name: "Disbelievers' Questioning", ayahs: [31, 32, 33], description: { en: "Signs recited but rejected, doubted the Hour", ur: "آیات سنائی گئیں مگر ٹھکرا دیں، قیامت پر شک کیا" } },
      { name: "Divine Abandonment", ayahs: [34, 35], description: { en: "Forgotten as they forgot, worldly deception", ur: "بھلا دیے گئے جیسے وہ بھول گئے، دنیاوی دھوکا" } },
      { name: "Closing Praise", ayahs: [36, 37], description: { en: "All praise to Lord of worlds, His grandeur", ur: "رب العالمین کی تمام حمد، اس کی عظمت" } }
    ]
  },

  uniqueInsight: {
    title: { en: "The One Who Takes His Desire as His God (اتَّخَذَ إِلَٰهَهُ هَوَاهُ)", ur: "وہ جو اپنی خواہش کو معبود بنائے (اتَّخَذَ إِلَٰهَهُ هَوَاهُ)" },
    insight: { en: "Verse 23 presents one of the Quran's most powerful psychological analyses: 'Have you seen the one who takes his own desire as his god?' This is not idol worship in the traditional sense, but a deeper form of shirk - making one's passions and whims the ultimate arbiter of truth. Allah describes the consequence: He leaves such a person astray 'upon knowledge' (ala 'ilm), meaning despite having access to truth. The sealing of hearing, heart, and sight represents the natural consequence of consistently choosing desire over guidance. The rhetorical question 'who will guide him after Allah?' emphasizes that once divine guidance is rejected, no other source can suffice.", ur: "آیت 23 قرآن کے طاقتور ترین نفسیاتی تجزیوں میں سے ایک پیش کرتی ہے: کیا تم نے اسے دیکھا جس نے اپنی خواہش کو معبود بنا لیا؟ یہ روایتی بت پرستی نہیں بلکہ شرک کی گہری شکل ہے - اپنے جذبات اور خواہشات کو حق کا حتمی فیصلہ کن بنانا۔ اللہ نتیجہ بیان کرتا ہے: وہ ایسے شخص کو باوجود علم کے گمراہ چھوڑ دیتا ہے۔ سماعت، قلب اور بصارت پر مہر لگنا مسلسل ہدایت پر خواہش کو ترجیح دینے کا فطری نتیجہ ہے۔ استفہامِ انکاری کہ اللہ کے بعد کون ہدایت دے گا اس بات پر زور دیتا ہے کہ الٰہی ہدایت ٹھکرانے کے بعد کوئی اور ذریعہ کافی نہیں۔" },
    arabicTerm: "أَفَرَأَيْتَ مَنِ اتَّخَذَ إِلَٰهَهُ هَوَاهُ وَأَضَلَّهُ اللَّهُ عَلَىٰ عِلْمٍ",
    rootMeaning: { en: "ه-و-ى (hawa) - desire, passion, to fall, to love; making hawa one's ilah means following passion as one's supreme authority", ur: "ه-و-ى (ھویٰ) - خواہش، جذبہ، گرنا، محبت؛ ھویٰ کو الٰہ بنانے کا مطلب جذبات کو اعلیٰ ترین اختیار ماننا" },
    keyAyah: 23
  },

  historicalContext: {
    revelationPeriod: "Makkan period",
    occasion: { en: "Revealed during the later Makkan period when the Quraysh were intensifying their denial of resurrection and the afterlife. The surah addresses their materialistic worldview ('nothing kills us except time') and their mockery of divine signs.", ur: "بعد کے مکی دور میں نازل ہوئی جب قریش قیامت اور آخرت کے انکار میں شدت اختیار کر رہے تھے۔ سورت ان کے مادہ پرستانہ نظریے (زمانے کے سوا ہمیں کوئی نہیں مارتا) اور الٰہی نشانیوں کے مذاق کا جواب دیتی ہے۔" },
    note: { en: "This surah is part of the Ha-Mim series (40-46), known as the 'Hawamim' surahs. The name 'Al-Jathiyah' (The Kneeling) comes from verse 28's vivid image of every nation kneeling before Allah on Judgment Day. It also contains the important word 'Shari'ah' (verse 18), establishing that Muhammad was given a specific divine law to follow.", ur: "یہ سورت حوامیم سلسلے (40-46) کا حصہ ہے۔ الجاثیہ (گھٹنے ٹیکنا) نام آیت 28 کی جاندار تصویر سے ہے جب ہر امت قیامت کے دن اللہ کے سامنے گھٹنوں پر ہوگی۔ اس میں شریعت کا اہم لفظ (آیت 18) بھی ہے جو واضح کرتا ہے کہ محمد ﷺ کو ایک مخصوص الٰہی قانون دیا گیا۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Ha-Mim Opening", description: { en: "حم", ur: "حم" }, example: { en: "Part of the Hawamim series", ur: "حوامیم سلسلے کا حصہ" }, ayah: 1 },
      { name: "Rhetorical Question", description: { en: "أَفَرَأَيْتَ", ur: "أَفَرَأَيْتَ" }, example: { en: "Have you seen the one who...", ur: "کیا تم نے اسے دیکھا جو..." }, ayah: 23 },
      { name: "Shari'ah Term", description: { en: "شَرِيعَةٍ مِّنَ الْأَمْرِ", ur: "شَرِيعَةٍ مِّنَ الْأَمْرِ" }, example: { en: "First explicit use of Shari'ah for divine law", ur: "الٰہی قانون کے لیے شریعت کا پہلا واضح استعمال" }, ayah: 18 },
      { name: "Jathi Imagery", description: { en: "كُلَّ أُمَّةٍ جَاثِيَةً", ur: "كُلَّ أُمَّةٍ جَاثِيَةً" }, example: { en: "Every nation kneeling - powerful visual", ur: "ہر امت گھٹنوں پر - طاقتور منظر" }, ayah: 28 },
      { name: "Record Speaking", description: { en: "كِتَابُنَا يَنطِقُ", ur: "كِتَابُنَا يَنطِقُ" }, example: { en: "Our record speaks with truth", ur: "ہمارا نامۂ اعمال سچ بولتا ہے" }, ayah: 29 },
      { name: "Reciprocal Justice", description: { en: "نُنسَاكُمْ كَمَا نَسِيتُمْ", ur: "نُنسَاكُمْ كَمَا نَسِيتُمْ" }, example: { en: "We forget you as you forgot", ur: "ہم تمہیں بھلا دیتے ہیں جیسے تم بھول گئے" }, ayah: 34 },
      { name: "Closing Doxology", description: { en: "فَلِلَّهِ الْحَمْدُ", ur: "فَلِلَّهِ الْحَمْدُ" }, example: { en: "All praise belongs to Allah", ur: "تمام تعریف اللہ کے لیے ہے" }, ayah: 36 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 44, name: "Ad-Dukhan", relationship: "Previous Ha-Mim surah, both warn of Day of Judgment", type: "sequential_ha_mim" },
      { surah: 46, name: "Al-Ahqaf", relationship: "Following Ha-Mim surah, continues themes of revelation and warning", type: "sequential_ha_mim" },
      { surah: 40, name: "Ghafir", relationship: "First of Ha-Mim series, shares themes of signs and divine names", type: "thematic_parallel" },
      { surah: 6, name: "Al-An'am", relationship: "Both extensively discuss signs in creation", type: "thematic_parallel" },
      { surah: 17, name: "Al-Isra", relationship: "Both discuss Bani Israel and their scripture", type: "thematic_parallel" },
      { surah: 25, name: "Al-Furqan", relationship: "Both warn against following those without knowledge", type: "thematic_parallel" }
    ]
  }
};

export default ONTOLOGY;
