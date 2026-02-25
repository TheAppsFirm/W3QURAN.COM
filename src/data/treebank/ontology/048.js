/**
 * Surah Al-Fath (The Victory) - Surah 48
 * Ontology of Quranic Concepts and Relationships
 *
 * Theme: The Treaty of Hudaybiyyah, Bay'at ar-Ridwan, Prophet's vision fulfilled
 * Revelation: Medinan (revealed on return from Hudaybiyyah, 6 AH)
 * Ayahs: 29
 *
 * This surah was revealed after the Treaty of Hudaybiyyah, which appeared to be
 * a setback but was actually a manifest victory (فَتْحًا مُّبِينًا).
 */

export const ONTOLOGY = {
  surahId: 48,
  surahName: "Al-Fath",
  surahNameArabic: "الفتح",
  totalAyahs: 29,
  revelationType: "Medinan",
  revelationContext: { en: "Revealed on the return journey from Hudaybiyyah in 6 AH. Umar initially questioned the treaty, asking: 'Aren't we on the truth?' The Prophet affirmed yes, but this surah revealed that what seemed like concession was actually a manifest victory that would lead to the conquest of Makkah.", ur: "6 ہجری میں حدیبیہ سے واپسی کے سفر میں نازل ہوئی۔ عمر رضی اللہ عنہ نے ابتدائی طور پر معاہدے پر سوال اٹھایا: 'کیا ہم حق پر نہیں ہیں؟' نبی ﷺ نے ہاں کہا، لیکن اس سورت نے ظاہر کیا کہ جو رعایت لگ رہی تھی وہ دراصل فتحِ مبین تھی جو فتحِ مکہ کا سبب بنے گی۔" },
  mainTheme: "The Treaty of Hudaybiyyah as Divine Victory, Bay'at ar-Ridwan under the tree, forgiveness of sins, and the Prophet's vision fulfilled",

  categories: {
    manifestVictory: {
      name: "The Manifest Victory",
      nameAr: "الفتح المبين",
      color: '#F59E0B',
      icon: 'Crown',
      description: { en: "The Treaty of Hudaybiyyah - appearing as setback but revealed as clear victory", ur: "صلح حدیبیہ - بظاہر شکست لیکن واضح فتح ثابت ہوئی" },
      concepts: [
        { term: "Al-Fath al-Mubeen", arabic: "فَتْحًا مُّبِينًا", meaning: { en: "A manifest victory", ur: "کھلی فتح" }, ayahs: [1] },
        { term: "Forgiveness of Past and Future", arabic: "مَا تَقَدَّمَ وَمَا تَأَخَّرَ", meaning: { en: "Forgiveness of all sins", ur: "تمام گناہوں کی مغفرت" }, ayahs: [2] },
        { term: "Completing Favor", arabic: "وَيُتِمَّ نِعْمَتَهُ عَلَيْكَ", meaning: { en: "Completing Allah's favor upon the Prophet", ur: "نبی ﷺ پر اللہ کی نعمت مکمل کرنا" }, ayahs: [2] },
        { term: "Straight Path", arabic: "صِرَاطًا مُّسْتَقِيمًا", meaning: { en: "Guiding to a straight path", ur: "سیدھے راستے کی رہنمائی" }, ayahs: [2] },
        { term: "Mighty Help", arabic: "نَصْرًا عَزِيزًا", meaning: { en: "Helping with a mighty help", ur: "زبردست مدد سے نصرت دینا" }, ayahs: [3] }
      ]
    },
    sakinah: {
      name: "Divine Tranquility (Sakinah)",
      nameAr: "السكينة",
      color: '#8B5CF6',
      icon: 'Sparkles',
      description: { en: "The special tranquility sent down upon believers' hearts", ur: "مومنوں کے دلوں میں نازل کی گئی خصوصی سکینت" },
      concepts: [
        { term: "Sakinah in Hearts", arabic: "أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ", meaning: { en: "Tranquility sent into believers' hearts", ur: "مومنوں کے دلوں میں سکینت نازل کی" }, ayahs: [4] },
        { term: "Increase in Faith", arabic: "لِيَزْدَادُوا إِيمَانًا مَّعَ إِيمَانِهِمْ", meaning: { en: "To increase them in faith upon faith", ur: "تاکہ ان کا ایمان بڑھتا رہے" }, ayahs: [4] },
        { term: "Armies of Heaven and Earth", arabic: "جُنُودُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "Allah's forces in heavens and earth", ur: "آسمانوں اور زمین کے لشکر اللہ کے ہیں" }, ayahs: [4, 7] },
        { term: "All-Knowing, All-Wise", arabic: "عَلِيمًا حَكِيمًا", meaning: { en: "Allah is All-Knowing, All-Wise", ur: "اللہ سب جاننے والا، حکمت والا ہے" }, ayahs: [4] },
        { term: "Sakinah at Hudaybiyyah", arabic: "السَّكِينَةَ عَلَيْهِ", meaning: { en: "Tranquility sent upon them under the tree", ur: "درخت کے نیچے ان پر سکینت نازل کی گئی" }, ayahs: [18, 26] }
      ]
    },
    bayatRidwan: {
      name: "Bay'at ar-Ridwan (Pledge of Pleasure)",
      nameAr: "بيعة الرضوان",
      color: '#10B981',
      icon: 'Heart',
      description: { en: "The historic pledge under the tree at Hudaybiyyah", ur: "حدیبیہ میں درخت کے نیچے تاریخی بیعت" },
      concepts: [
        { term: "Pledge Under the Tree", arabic: "يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ", meaning: { en: "Those who pledged under the tree", ur: "جنہوں نے درخت کے نیچے بیعت کی" }, ayahs: [18] },
        { term: "Allah's Pleasure", arabic: "رَضِيَ اللَّهُ عَنْهُمْ", meaning: { en: "Allah was pleased with them", ur: "اللہ ان سے راضی ہوا" }, ayahs: [18] },
        { term: "Hand of Allah", arabic: "يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ", meaning: { en: "Allah's hand was above their hands", ur: "اللہ کا ہاتھ ان کے ہاتھوں کے اوپر تھا" }, ayahs: [10] },
        { term: "Pledging to the Prophet", arabic: "يُبَايِعُونَكَ", meaning: { en: "Those who pledge to you (Prophet)", ur: "جو آپ سے بیعت کرتے ہیں (نبی ﷺ)" }, ayahs: [10] },
        { term: "Pledging to Allah", arabic: "إِنَّمَا يُبَايِعُونَ اللَّهَ", meaning: { en: "They only pledge to Allah", ur: "وہ دراصل اللہ سے بیعت کرتے ہیں" }, ayahs: [10] },
        { term: "Near Victory", arabic: "فَتْحًا قَرِيبًا", meaning: { en: "A near victory (Conquest of Makkah)", ur: "قریب کی فتح (فتح مکہ)" }, ayahs: [18] },
        { term: "Abundant Spoils", arabic: "مَغَانِمَ كَثِيرَةً", meaning: { en: "Many spoils to come", ur: "بہت سے مالِ غنیمت آنے والے ہیں" }, ayahs: [19, 20] }
      ]
    },
    believersRewards: {
      name: "Rewards for True Believers",
      nameAr: "جزاء المؤمنين",
      color: '#8B5CF6',
      icon: 'Sparkles',
      description: { en: "Paradise and eternal rewards promised to believers", ur: "مومنوں کو جنت اور ابدی اجر کا وعدہ" },
      concepts: [
        { term: "Gardens Under Rivers", arabic: "جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ", meaning: { en: "Gardens with flowing rivers", ur: "جنتیں جن کے نیچے نہریں بہتی ہیں" }, ayahs: [5, 17] },
        { term: "Eternal Dwelling", arabic: "خَالِدِينَ فِيهَا", meaning: { en: "Dwelling therein forever", ur: "ہمیشہ ہمیشہ ان میں رہنا" }, ayahs: [5] },
        { term: "Great Success", arabic: "الْفَوْزُ الْعَظِيمُ", meaning: { en: "The supreme achievement", ur: "عظیم کامیابی" }, ayahs: [5] },
        { term: "Sins Expiated", arabic: "يُكَفِّرَ عَنْهُمْ سَيِّئَاتِهِمْ", meaning: { en: "Evil deeds removed", ur: "برے اعمال دور کر دیے جائیں گے" }, ayahs: [5] },
        { term: "Forgiveness and Reward", arabic: "مَّغْفِرَةً وَأَجْرًا عَظِيمًا", meaning: { en: "Forgiveness and great reward", ur: "مغفرت اور عظیم اجر" }, ayahs: [29] }
      ]
    },
    munafiqunAndDoubters: {
      name: "Hypocrites and Doubters",
      nameAr: "المنافقون والمرجفون",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "Those who doubted and harbored evil suspicions", ur: "جنہوں نے شک کیا اور بری سوچ رکھی" },
      concepts: [
        { term: "Hypocrite Men and Women", arabic: "الْمُنَافِقِينَ وَالْمُنَافِقَاتِ", meaning: { en: "Male and female hypocrites punished", ur: "منافق مرد اور عورتوں کو سزا" }, ayahs: [6] },
        { term: "Mushrik Men and Women", arabic: "الْمُشْرِكِينَ وَالْمُشْرِكَاتِ", meaning: { en: "Male and female polytheists punished", ur: "مشرک مرد اور عورتوں کو سزا" }, ayahs: [6] },
        { term: "Evil Suspicion", arabic: "ظَنَّ السَّوْءِ", meaning: { en: "Those who think evil thoughts about Allah", ur: "جو اللہ کے بارے میں بری سوچ رکھتے ہیں" }, ayahs: [6] },
        { term: "Circle of Evil", arabic: "دَائِرَةُ السَّوْءِ", meaning: { en: "Upon them is the evil turn of fortune", ur: "بری بات کا پلٹاؤ انہی پر ہے" }, ayahs: [6] },
        { term: "Allah's Wrath", arabic: "غَضِبَ اللَّهُ عَلَيْهِمْ", meaning: { en: "Allah's anger upon them", ur: "اللہ کا غضب ان پر ہے" }, ayahs: [6] },
        { term: "Curse and Hellfire", arabic: "وَلَعَنَهُمْ وَأَعَدَّ لَهُمْ جَهَنَّمَ", meaning: { en: "Cursed and prepared Hellfire for them", ur: "ان پر لعنت کی اور ان کے لیے جہنم تیار کی" }, ayahs: [6] }
      ]
    },
    bedouinsLeft: {
      name: "Bedouins Who Stayed Behind",
      nameAr: "المخلفون من الأعراب",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "Desert Arabs who made excuses and didn't join at Hudaybiyyah", ur: "صحرائی عرب جنہوں نے بہانے بنائے اور حدیبیہ میں شامل نہیں ہوئے" },
      concepts: [
        { term: "Those Left Behind", arabic: "الْمُخَلَّفُونَ مِنَ الْأَعْرَابِ", meaning: { en: "Bedouins who stayed behind", ur: "پیچھے رہ جانے والے اعراب" }, ayahs: [11, 15, 16] },
        { term: "False Excuses", arabic: "شَغَلَتْنَا أَمْوَالُنَا وَأَهْلُونَا", meaning: { en: "Our wealth and families kept us busy", ur: "ہمارے مال اور اہل و عیال نے ہمیں مصروف رکھا" }, ayahs: [11] },
        { term: "Saying with Tongues", arabic: "يَقُولُونَ بِأَلْسِنَتِهِم", meaning: { en: "They say with tongues what is not in hearts", ur: "زبان سے وہ کہتے ہیں جو دل میں نہیں" }, ayahs: [11] },
        { term: "Evil Thought", arabic: "ظَنَنتُمْ ظَنَّ السَّوْءِ", meaning: { en: "You harbored evil thoughts", ur: "تم نے بری سوچ رکھی" }, ayahs: [12] },
        { term: "Doomed People", arabic: "قَوْمًا بُورًا", meaning: { en: "A people ruined/doomed", ur: "ہلاک ہونے والی قوم" }, ayahs: [12] },
        { term: "Test of Sincerity", arabic: "قُل لِّلْمُخَلَّفِينَ", meaning: { en: "Say to those left behind - future test awaits", ur: "پیچھے رہنے والوں سے کہو - آئندہ آزمائش منتظر ہے" }, ayahs: [16] },
        { term: "Fighting People", arabic: "قَوْمٍ أُولِي بَأْسٍ شَدِيدٍ", meaning: { en: "A people of great military might", ur: "سخت جنگجو قوم" }, ayahs: [16] }
      ]
    },
    treatyHudaybiyyah: {
      name: "Treaty of Hudaybiyyah",
      nameAr: "صلح الحديبية",
      color: '#3B82F6',
      icon: 'Book',
      description: { en: "The historic peace treaty that was actually a victory", ur: "تاریخی صلح نامہ جو دراصل فتح تھی" },
      concepts: [
        { term: "Restraining Hands", arabic: "كَفَّ أَيْدِيَهُمْ عَنكُمْ", meaning: { en: "He restrained their hands from you", ur: "اس نے ان کے ہاتھ تم سے روک دیے" }, ayahs: [24] },
        { term: "Restraining Your Hands", arabic: "وَأَيْدِيَكُمْ عَنْهُم", meaning: { en: "And your hands from them", ur: "اور تمہارے ہاتھ ان سے" }, ayahs: [24] },
        { term: "Valley of Makkah", arabic: "بِبَطْنِ مَكَّةَ", meaning: { en: "In the valley of Makkah", ur: "مکہ کی وادی میں" }, ayahs: [24] },
        { term: "Allah's Observation", arabic: "وَكَانَ اللَّهُ بِمَا تَعْمَلُونَ بَصِيرًا", meaning: { en: "Allah sees all that you do", ur: "اللہ تمہارے سب اعمال دیکھتا ہے" }, ayahs: [24] },
        { term: "Those Who Disbelieved", arabic: "هُمُ الَّذِينَ كَفَرُوا", meaning: { en: "They are the ones who disbelieved", ur: "وہی ہیں جنہوں نے کفر کیا" }, ayahs: [25] },
        { term: "Prevented from Sacred Mosque", arabic: "وَصَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ", meaning: { en: "And barred you from the Sacred Mosque", ur: "اور تمہیں مسجد حرام سے روکا" }, ayahs: [25] },
        { term: "Detained Offering", arabic: "وَالْهَدْيَ مَعْكُوفًا", meaning: { en: "And the sacrificial animals detained", ur: "اور قربانی کے جانور روک لیے گئے" }, ayahs: [25] }
      ]
    },
    protectionBelievers: {
      name: "Protection of Hidden Believers",
      nameAr: "حماية المؤمنين المختفين",
      color: '#10B981',
      icon: 'Users',
      description: { en: "Secret Muslims in Makkah who needed protection", ur: "مکہ میں خفیہ مسلمان جنہیں تحفظ کی ضرورت تھی" },
      concepts: [
        { term: "Believing Men Unknown", arabic: "رِجَالٌ مُّؤْمِنُونَ", meaning: { en: "Believing men you did not know", ur: "مومن مرد جنہیں تم نہیں جانتے تھے" }, ayahs: [25] },
        { term: "Believing Women Unknown", arabic: "وَنِسَاءٌ مُّؤْمِنَاتٌ", meaning: { en: "Believing women you did not know", ur: "مومن عورتیں جنہیں تم نہیں جانتے تھے" }, ayahs: [25] },
        { term: "Trampling Them", arabic: "أَن تَطَئُوهُمْ", meaning: { en: "That you might trample them unknowingly", ur: "کہیں تم انجانے میں انہیں کچل نہ دو" }, ayahs: [25] },
        { term: "Guilt Upon You", arabic: "فَتُصِيبَكُم مِّنْهُم مَّعَرَّةٌ", meaning: { en: "And incur guilt from harming them", ur: "اور ان کو نقصان پہنچانے کا گناہ تم پر آئے" }, ayahs: [25] },
        { term: "Mercy for Believers", arabic: "لِّيُدْخِلَ اللَّهُ فِي رَحْمَتِهِ", meaning: { en: "That Allah may admit into His mercy", ur: "تاکہ اللہ اپنی رحمت میں داخل کرے" }, ayahs: [25] }
      ]
    },
    jahiliyyahVsIslam: {
      name: "Jahiliyyah Pride vs Islamic Tranquility",
      nameAr: "حمية الجاهلية مقابل السكينة",
      color: '#EF4444',
      icon: 'Shield',
      description: { en: "Contrast between pre-Islamic arrogance and Islamic serenity", ur: "جاہلی غرور اور اسلامی سکون کا تقابل" },
      concepts: [
        { term: "Fury of Jahiliyyah", arabic: "حَمِيَّةَ الْجَاهِلِيَّةِ", meaning: { en: "The tribal fury of ignorance", ur: "جاہلیت کی قبائلی حمیت" }, ayahs: [26] },
        { term: "Disbelievers' Hearts", arabic: "فِي قُلُوبِهِمُ الْحَمِيَّةَ", meaning: { en: "Arrogance in disbelievers' hearts", ur: "کافروں کے دلوں میں تکبر" }, ayahs: [26] },
        { term: "Allah's Sakinah", arabic: "فَأَنزَلَ اللَّهُ سَكِينَتَهُ", meaning: { en: "Allah sent His tranquility", ur: "اللہ نے اپنی سکینت نازل کی" }, ayahs: [26] },
        { term: "Word of Taqwa", arabic: "كَلِمَةَ التَّقْوَىٰ", meaning: { en: "The word of piety (La ilaha illallah)", ur: "تقویٰ کا کلمہ (لا الٰہ الا اللہ)" }, ayahs: [26] },
        { term: "Most Deserving", arabic: "أَحَقَّ بِهَا وَأَهْلَهَا", meaning: { en: "They were most worthy of it", ur: "وہ اس کے سب سے زیادہ مستحق اور اہل تھے" }, ayahs: [26] }
      ]
    },
    visionFulfilled: {
      name: "The Prophet's Vision Fulfilled",
      nameAr: "تحقق رؤيا النبي",
      color: '#F59E0B',
      icon: 'Star',
      description: { en: "The true dream of entering Makkah came true", ur: "مکہ میں داخل ہونے کا سچا خواب پورا ہوا" },
      concepts: [
        { term: "True Vision", arabic: "لَقَدْ صَدَقَ اللَّهُ رَسُولَهُ الرُّؤْيَا", meaning: { en: "Allah fulfilled His Messenger's vision", ur: "اللہ نے اپنے رسول کا خواب سچ کر دکھایا" }, ayahs: [27] },
        { term: "Entering Sacred Mosque", arabic: "لَتَدْخُلُنَّ الْمَسْجِدَ الْحَرَامَ", meaning: { en: "You shall enter the Sacred Mosque", ur: "تم ضرور مسجد حرام میں داخل ہو گے" }, ayahs: [27] },
        { term: "In Safety", arabic: "إِن شَاءَ اللَّهُ آمِنِينَ", meaning: { en: "In safety, if Allah wills", ur: "ان شاء اللہ امن کے ساتھ" }, ayahs: [27] },
        { term: "Heads Shaved", arabic: "مُحَلِّقِينَ رُءُوسَكُمْ", meaning: { en: "Heads shaved (completing Umrah)", ur: "سر منڈائے ہوئے (عمرہ مکمل کرتے ہوئے)" }, ayahs: [27] },
        { term: "Hair Shortened", arabic: "وَمُقَصِّرِينَ", meaning: { en: "Or hair shortened", ur: "یا بال چھوٹے کرائے ہوئے" }, ayahs: [27] },
        { term: "No Fear", arabic: "لَا تَخَافُونَ", meaning: { en: "Fearing not", ur: "بغیر کسی خوف کے" }, ayahs: [27] },
        { term: "Near Victory", arabic: "فَجَعَلَ مِن دُونِ ذَٰلِكَ فَتْحًا قَرِيبًا", meaning: { en: "He arranged before that a near victory", ur: "اس سے پہلے ایک قریبی فتح مقرر کر دی" }, ayahs: [27] }
      ]
    },
    islamTriumph: {
      name: "Islam Over All Religions",
      nameAr: "ظهور الإسلام",
      color: '#F59E0B',
      icon: 'Crown',
      description: { en: "Islam sent to prevail over all other religions", ur: "اسلام تمام ادیان پر غالب آنے کے لیے بھیجا گیا" },
      concepts: [
        { term: "Sent His Messenger", arabic: "أَرْسَلَ رَسُولَهُ", meaning: { en: "He sent His Messenger", ur: "اس نے اپنا رسول بھیجا" }, ayahs: [28] },
        { term: "With Guidance", arabic: "بِالْهُدَىٰ", meaning: { en: "With guidance", ur: "ہدایت کے ساتھ" }, ayahs: [28] },
        { term: "Religion of Truth", arabic: "وَدِينِ الْحَقِّ", meaning: { en: "And the religion of truth", ur: "اور دینِ حق کے ساتھ" }, ayahs: [28] },
        { term: "Prevail Over All", arabic: "لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ", meaning: { en: "To make it prevail over all religion", ur: "تاکہ اسے تمام ادیان پر غالب کر دے" }, ayahs: [28] },
        { term: "Allah as Witness", arabic: "وَكَفَىٰ بِاللَّهِ شَهِيدًا", meaning: { en: "And sufficient is Allah as witness", ur: "اور اللہ گواہی کے لیے کافی ہے" }, ayahs: [28] }
      ]
    },
    companionsDescription: {
      name: "Description of the Companions",
      nameAr: "صفة الصحابة",
      color: '#10B981',
      icon: 'Users',
      description: { en: "The beautiful description of the Prophet and his companions", ur: "نبی ﷺ اور ان کے صحابہ کا خوبصورت بیان" },
      concepts: [
        { term: "Muhammad Messenger", arabic: "مُّحَمَّدٌ رَّسُولُ اللَّهِ", meaning: { en: "Muhammad is the Messenger of Allah", ur: "محمد ﷺ اللہ کے رسول ہیں" }, ayahs: [29] },
        { term: "Stern Against Disbelievers", arabic: "أَشِدَّاءُ عَلَى الْكُفَّارِ", meaning: { en: "Stern/severe against disbelievers", ur: "کافروں پر سخت" }, ayahs: [29] },
        { term: "Merciful Among Themselves", arabic: "رُحَمَاءُ بَيْنَهُمْ", meaning: { en: "Merciful among themselves", ur: "آپس میں رحمدل" }, ayahs: [29] },
        { term: "Bowing and Prostrating", arabic: "رُكَّعًا سُجَّدًا", meaning: { en: "You see them bowing, prostrating", ur: "تم انہیں رکوع اور سجدے میں دیکھو گے" }, ayahs: [29] },
        { term: "Seeking Bounty", arabic: "يَبْتَغُونَ فَضْلًا مِّنَ اللَّهِ", meaning: { en: "Seeking bounty and pleasure from Allah", ur: "اللہ کا فضل اور رضا چاہتے ہیں" }, ayahs: [29] },
        { term: "Mark of Prostration", arabic: "سِيمَاهُمْ فِي وُجُوهِهِم مِّنْ أَثَرِ السُّجُودِ", meaning: { en: "Their mark is on faces from prostration", ur: "سجدے کے اثر سے ان کے چہروں پر نشان ہے" }, ayahs: [29] },
        { term: "Likeness in Torah", arabic: "ذَٰلِكَ مَثَلُهُمْ فِي التَّوْرَاةِ", meaning: { en: "That is their description in Torah", ur: "یہ ان کا تورات میں بیان ہے" }, ayahs: [29] },
        { term: "Likeness in Gospel", arabic: "وَمَثَلُهُمْ فِي الْإِنجِيلِ", meaning: { en: "And their description in Gospel", ur: "اور انجیل میں ان کا بیان" }, ayahs: [29] },
        { term: "Like Planted Seed", arabic: "كَزَرْعٍ أَخْرَجَ شَطْأَهُ", meaning: { en: "Like a seed that sprouts its shoot", ur: "جیسے ایک بیج جس نے اپنی کونپل نکالی" }, ayahs: [29] },
        { term: "Strengthened and Firm", arabic: "فَآزَرَهُ فَاسْتَغْلَظَ فَاسْتَوَىٰ عَلَىٰ سُوقِهِ", meaning: { en: "Strengthened it until thick on its stem", ur: "اسے مضبوط کیا یہاں تک کہ اپنے تنے پر مضبوطی سے کھڑا ہو گیا" }, ayahs: [29] },
        { term: "Delighting the Sowers", arabic: "يُعْجِبُ الزُّرَّاعَ", meaning: { en: "Pleasing to the sowers", ur: "کاشتکاروں کو خوش کرنے والا" }, ayahs: [29] },
        { term: "Enraging Disbelievers", arabic: "لِيَغِيظَ بِهِمُ الْكُفَّارَ", meaning: { en: "Through them He enrages disbelievers", ur: "تاکہ ان کے ذریعے کافروں کو غصہ دلائے" }, ayahs: [29] }
      ]
    },
    breakingPledge: {
      name: "Consequences of Breaking Pledge",
      nameAr: "نقض العهد",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: { en: "Warning against breaking the pledge to Allah", ur: "اللہ سے عہد توڑنے کی تنبیہ" },
      concepts: [
        { term: "Whoever Breaks Pledge", arabic: "فَمَن نَّكَثَ", meaning: { en: "Whoever breaks the pledge", ur: "جو بیعت توڑے" }, ayahs: [10] },
        { term: "Against Himself", arabic: "فَإِنَّمَا يَنكُثُ عَلَىٰ نَفْسِهِ", meaning: { en: "Only breaks it against himself", ur: "وہ اپنے ہی خلاف توڑتا ہے" }, ayahs: [10] },
        { term: "Whoever Fulfills", arabic: "وَمَنْ أَوْفَىٰ", meaning: { en: "And whoever fulfills", ur: "اور جو پورا کرے" }, ayahs: [10] },
        { term: "Great Reward", arabic: "فَسَيُؤْتِيهِ أَجْرًا عَظِيمًا", meaning: { en: "Will receive a great reward", ur: "اسے عظیم اجر دیا جائے گا" }, ayahs: [10] }
      ]
    },
    divineDominion: {
      name: "Allah's Complete Dominion",
      nameAr: "ملك الله المطلق",
      color: '#F59E0B',
      icon: 'Crown',
      description: { en: "Allah's ownership and control of all things", ur: "تمام چیزوں پر اللہ کی ملکیت اور اختیار" },
      concepts: [
        { term: "Kingdom of Heavens and Earth", arabic: "مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ", meaning: { en: "To Allah belongs dominion of heavens and earth", ur: "آسمانوں اور زمین کی بادشاہی اللہ کی ہے" }, ayahs: [14] },
        { term: "Forgives Whom He Wills", arabic: "يَغْفِرُ لِمَن يَشَاءُ", meaning: { en: "He forgives whom He wills", ur: "جسے چاہے معاف کرے" }, ayahs: [14] },
        { term: "Punishes Whom He Wills", arabic: "وَيُعَذِّبُ مَن يَشَاءُ", meaning: { en: "He punishes whom He wills", ur: "جسے چاہے سزا دے" }, ayahs: [14] },
        { term: "Ever Forgiving, Merciful", arabic: "غَفُورًا رَّحِيمًا", meaning: { en: "Allah is Forgiving, Merciful", ur: "اللہ بخشنے والا، رحم کرنے والا ہے" }, ayahs: [14] }
      ]
    },
    obedienceRequired: {
      name: "Obedience to Allah and Messenger",
      nameAr: "طاعة الله والرسول",
      color: '#3B82F6',
      icon: 'Compass',
      description: { en: "Command to follow Allah and His Messenger", ur: "اللہ اور اس کے رسول کی پیروی کا حکم" },
      concepts: [
        { term: "Obey Allah and Messenger", arabic: "يُطِعِ اللَّهَ وَرَسُولَهُ", meaning: { en: "Whoever obeys Allah and His Messenger", ur: "جو اللہ اور اس کے رسول کی اطاعت کرے" }, ayahs: [17] },
        { term: "No Blame on Disabled", arabic: "لَّيْسَ عَلَى الْأَعْمَىٰ حَرَجٌ", meaning: { en: "No blame on the blind", ur: "اندھے پر کوئی حرج نہیں" }, ayahs: [17] },
        { term: "No Blame on Lame", arabic: "وَلَا عَلَى الْأَعْرَجِ حَرَجٌ", meaning: { en: "No blame on the lame", ur: "لنگڑے پر کوئی حرج نہیں" }, ayahs: [17] },
        { term: "No Blame on Sick", arabic: "وَلَا عَلَى الْمَرِيضِ حَرَجٌ", meaning: { en: "No blame on the sick", ur: "بیمار پر کوئی حرج نہیں" }, ayahs: [17] }
      ]
    }
  },

  relationships: [
    { from: "Bay'at ar-Ridwan", to: "Allah's Pleasure", type: "result", description: { en: "The pledge under the tree earned Allah's pleasure for the Companions", ur: "درخت کے نیچے بیعت نے صحابہ کے لیے اللہ کی رضا حاصل کی" } },
    { from: "Treaty of Hudaybiyyah", to: "Manifest Victory", type: "identity", description: { en: "What appeared as political defeat was actually the promised victory", ur: "جو سیاسی شکست لگ رہی تھی وہ دراصل وعدہ شدہ فتح تھی" } },
    { from: "Prophet's Vision", to: "Conquest of Makkah", type: "fulfillment", description: { en: "The dream of entering Sacred Mosque was fulfilled in Conquest", ur: "مسجد حرام میں داخل ہونے کا خواب فتح مکہ میں پورا ہوا" } },
    { from: "Sakinah", to: "Increase in Faith", type: "effect", description: { en: "Divine tranquility strengthened believers' faith", ur: "الٰہی سکینت نے مومنوں کا ایمان مضبوط کیا" } },
    { from: "Jahiliyyah Pride", to: "Islamic Tranquility", type: "contrast", description: { en: "Quraysh's arrogance met by believers' serene confidence", ur: "قریش کے غرور کا مقابلہ مومنوں کے پُرسکون اعتماد سے ہوا" } },
    { from: "Bedouins' Excuses", to: "Future Test", type: "consequence", description: { en: "Those who made excuses will be tested with stronger foes", ur: "بہانے بنانے والوں کو مضبوط دشمنوں سے آزمایا جائے گا" } },
    { from: "Breaking Pledge", to: "Self-Harm", type: "consequence", description: { en: "Breaking covenant only harms the one who breaks it", ur: "عہد توڑنا صرف توڑنے والے کو نقصان پہنچاتا ہے" } },
    { from: "Hidden Believers", to: "Prevention of War", type: "cause", description: { en: "Secret Muslims in Makkah prevented all-out war", ur: "مکہ میں خفیہ مسلمانوں نے مکمل جنگ روکی" } },
    { from: "Companions Description", to: "Torah and Gospel", type: "prophecy", description: { en: "Companions' qualities were foretold in previous scriptures", ur: "صحابہ کی صفات پچھلی کتابوں میں پیشگوئی تھیں" } },
    { from: "Islam", to: "Prevailing Over All", type: "destiny", description: { en: "Islam will dominate all other ideologies", ur: "اسلام تمام نظریات پر غالب آئے گا" } },
    { from: "Stern Against Disbelievers", to: "Merciful Among Themselves", type: "balance", description: { en: "Companions balanced firmness externally with mercy internally", ur: "صحابہ نے بیرونی سختی اور اندرونی رحم میں توازن رکھا" } },
    { from: "Pledge to Prophet", to: "Pledge to Allah", type: "equivalence", description: { en: "Pledging allegiance to Prophet equals pledging to Allah", ur: "نبی ﷺ سے بیعت اللہ سے بیعت کے برابر ہے" } }
  ],

  thematicFlow: {
    title: { en: "From Apparent Setback to Manifest Victory", ur: "بظاہر شکست سے فتحِ مبین تک" },
    stages: [
      { name: "Declaration of Victory", ayahs: [1, 2, 3], description: { en: "Opening announcement: This is a manifest victory, forgiveness granted, help given", ur: "افتتاحی اعلان: یہ فتحِ مبین ہے، مغفرت عطا ہوئی، نصرت دی گئی" } },
      { name: "Divine Tranquility", ayahs: [4, 5], description: { en: "Sakinah sent to believers, Paradise promised", ur: "مومنوں پر سکینت نازل، جنت کا وعدہ" } },
      { name: "Punishment for Doubters", ayahs: [6], description: { en: "Hypocrites and polytheists who harbored evil thoughts", ur: "منافقین اور مشرکین جنہوں نے بری سوچ رکھی" } },
      { name: "Divine Sovereignty", ayahs: [7, 8, 9], description: { en: "Allah's forces, Prophet sent as witness, warner, giver of glad tidings", ur: "اللہ کے لشکر، نبی ﷺ گواہ، ڈرانے والے، خوشخبری دینے والے" } },
      { name: "The Sacred Pledge", ayahs: [10], description: { en: "Bay'ah to Prophet is bay'ah to Allah; consequences of breaking/keeping", ur: "نبی ﷺ سے بیعت اللہ سے بیعت ہے؛ توڑنے/نبھانے کے نتائج" } },
      { name: "Bedouins' Excuses", ayahs: [11, 12, 13], description: { en: "Those who stayed behind with false excuses, their doom", ur: "جھوٹے بہانوں سے پیچھے رہنے والے، ان کی تباہی" } },
      { name: "Divine Dominion", ayahs: [14, 15], description: { en: "Allah's complete authority to forgive or punish", ur: "معاف کرنے یا سزا دینے کا اللہ کا مکمل اختیار" } },
      { name: "Future Test", ayahs: [16, 17], description: { en: "Call to fight stronger enemy; exemptions for disabled", ur: "مضبوط دشمن سے لڑنے کی دعوت؛ معذوروں کے لیے رعایت" } },
      { name: "Bay'at ar-Ridwan", ayahs: [18, 19, 20, 21], description: { en: "Allah's pleasure, near victory, spoils promised", ur: "اللہ کی رضا، قریبی فتح، غنیمت کا وعدہ" } },
      { name: "Victory Assured", ayahs: [22, 23], description: { en: "Had battle occurred, enemies would have fled; Allah's unchanging way", ur: "اگر جنگ ہوتی تو دشمن بھاگ جاتے؛ اللہ کا نہ بدلنے والا طریقہ" } },
      { name: "Treaty Explained", ayahs: [24, 25, 26], description: { en: "Restraining hands, protecting hidden believers, Jahiliyyah vs. Sakinah", ur: "ہاتھ روکنا، خفیہ مومنوں کی حفاظت، جاہلیت بمقابلہ سکینت" } },
      { name: "Vision Fulfilled", ayahs: [27], description: { en: "Prophet's dream of entering Sacred Mosque confirmed true", ur: "مسجد حرام میں داخل ہونے کا نبی ﷺ کا خواب سچ ثابت ہوا" } },
      { name: "Islam's Triumph", ayahs: [28], description: { en: "Islam sent to prevail over all religion", ur: "اسلام تمام ادیان پر غالب آنے کے لیے بھیجا گیا" } },
      { name: "Description of Companions", ayahs: [29], description: { en: "Beautiful portrait of Prophet and Companions, their qualities", ur: "نبی ﷺ اور صحابہ کا خوبصورت نقشہ، ان کی خصوصیات" } }
    ]
  },

  uniqueInsight: {
    title: { en: "Victory Through Apparent Defeat (الفتح في ما يبدو هزيمة)", ur: "بظاہر شکست سے فتح (الفتح في ما يبدو هزيمة)" },
    insight: { en: "When the Treaty of Hudaybiyyah was signed, many companions were distressed. They had come for Umrah but were turned back. The terms seemed unfavorable: Muslims would return that year, any Quraysh escaping to Medina would be returned, but not vice versa. Umar asked the Prophet: 'Are we not on the truth and they on falsehood?' Yet this surah revealed it as 'fath mubeen' - a manifest victory. Why? (1) It gave Islam official recognition as a state. (2) It allowed peaceful da'wah, and more converted in 2 years than in the previous 19. (3) It freed the Prophet to deal with other threats (Khaybar). (4) It led directly to the Conquest of Makkah when Quraysh violated the treaty. This teaches that divine strategy often appears counterintuitive. The believer's surrender to Allah's wisdom, even when logic protests, is itself the victory. The 'hand of Allah above their hands' at Bay'at ar-Ridwan symbolized this: human planning submitted to divine plan.", ur: "جب صلح حدیبیہ ہوئی تو بہت سے صحابہ پریشان تھے۔ وہ عمرہ کے لیے آئے تھے لیکن واپس کر دیے گئے۔ شرائط ناموافق لگتی تھیں: مسلمان اس سال واپس جائیں گے، قریش کا کوئی بھاگ کر مدینہ آئے تو واپس کیا جائے، لیکن الٹا نہیں۔ عمر رضی اللہ عنہ نے پوچھا: 'کیا ہم حق پر نہیں اور وہ باطل پر؟' پھر بھی اس سورت نے اسے 'فتح مبین' قرار دیا۔ کیوں؟ (1) اسلام کو بطور ریاست باقاعدہ پہچان ملی۔ (2) پُرامن دعوت ممکن ہوئی اور 2 سالوں میں پچھلے 19 سالوں سے زیادہ لوگ مسلمان ہوئے۔ (3) نبی ﷺ کو دوسرے خطرات (خیبر) سے نمٹنے کا موقع ملا۔ (4) جب قریش نے معاہدہ توڑا تو یہ براہ راست فتح مکہ کا سبب بنا۔ یہ سکھاتا ہے کہ الٰہی حکمت عملی اکثر عقل کے خلاف لگتی ہے۔ اللہ کی حکمت کے سامنے سرتسلیم خم کرنا خود فتح ہے۔" },
    arabicTerm: "فَتْحًا مُّبِينًا",
    rootMeaning: { en: "ف-ت-ح (to open) - Victory is an 'opening' of closed doors", ur: "ف-ت-ح (کھولنا) - فتح بند دروازوں کا 'کھلنا' ہے" },
    keyAyah: 1
  },

  historicalContext: {
    revelationPeriod: { en: "6 AH, on return journey from Hudaybiyyah", ur: "6 ہجری، حدیبیہ سے واپسی کے سفر میں" },
    occasion: { en: "The Prophet saw a dream that he and companions entered Makkah for Umrah. In Dhul-Qa'dah 6 AH, 1400+ companions set out in ihram. Quraysh blocked them at Hudaybiyyah. After negotiations, a 10-year peace treaty was signed with terms appearing unfavorable to Muslims. This surah was revealed declaring it a manifest victory.", ur: "نبی ﷺ نے خواب دیکھا کہ وہ اور صحابہ عمرہ کے لیے مکہ میں داخل ہو رہے ہیں۔ ذوالقعدہ 6 ہجری میں 1400 سے زائد صحابہ احرام باندھ کر چلے۔ قریش نے حدیبیہ پر انہیں روکا۔ بات چیت کے بعد 10 سالہ صلح نامہ ہوا جس کی شرائط مسلمانوں کے خلاف لگتی تھیں۔ اس سورت نے اسے فتح مبین قرار دیا۔" },
    keyEvents: [
      { name: "Prophet's Dream", description: { en: "Vision of performing Umrah in Makkah", ur: "مکہ میں عمرہ کرنے کا خواب" } },
      { name: "Journey to Makkah", description: { en: "1400 companions in ihram, unarmed", ur: "1400 صحابہ احرام میں، بغیر ہتھیار" } },
      { name: "Blocked at Hudaybiyyah", description: { en: "Quraysh sent forces to prevent entry", ur: "قریش نے داخلے سے روکنے کے لیے فوج بھیجی" } },
      { name: "Bay'at ar-Ridwan", description: { en: "Pledge of death/allegiance under the tree when rumors of Uthman's death spread", ur: "عثمان رضی اللہ عنہ کی شہادت کی افواہ پر درخت کے نیچے موت/وفاداری کی بیعت" } },
      { name: "Treaty Signed", description: { en: "10-year peace with Quraysh", ur: "قریش سے 10 سالہ صلح" } },
      { name: "Surah Revealed", description: { en: "On return journey, declaring it victory", ur: "واپسی پر نازل ہوئی، اسے فتح قرار دیا" } },
      { name: "Vision Fulfilled", description: { en: "Next year (7 AH) Muslims performed Umrah; later Makkah conquered (8 AH)", ur: "اگلے سال (7 ہجری) مسلمانوں نے عمرہ کیا؛ بعد میں مکہ فتح ہوا (8 ہجری)" } }
    ],
    note: { en: "Umar later said: 'I have never had doubt since I accepted Islam except on that day (Hudaybiyyah).' He sought good deeds as expiation for questioning the Prophet's decision. This surah vindicated the Prophet's wisdom.", ur: "عمر رضی اللہ عنہ نے بعد میں کہا: 'اسلام قبول کرنے کے بعد مجھے اس دن (حدیبیہ) کے سوا کبھی شک نہیں ہوا۔' انہوں نے نبی ﷺ کے فیصلے پر سوال اٹھانے کا کفارہ نیک اعمال سے ادا کیا۔ اس سورت نے نبی ﷺ کی حکمت کی تصدیق کی۔" }
  },

  linguisticFeatures: {
    features: [
      { name: "Opening with Victory", description: "إِنَّا فَتَحْنَا لَكَ", example: { en: "Emphatic 'indeed We have opened/granted you' - decisive announcement", ur: "تاکیدی 'بے شک ہم نے آپ کو فتح دی' - فیصلہ کن اعلان" }, ayah: 1 },
      { name: "Purpose Clauses", description: "لِيَغْفِرَ لَكَ... وَيُتِمَّ... وَيَهْدِيَكَ... وَيَنصُرَكَ", example: { en: "Four purposes of victory: forgiveness, completion, guidance, help", ur: "فتح کے چار مقاصد: مغفرت، تکمیل، ہدایت، نصرت" }, ayah: 2 },
      { name: "Hand of Allah Metaphor", description: "يَدُ اللَّهِ فَوْقَ أَيْدِيهِمْ", example: { en: "Powerful image of divine presence in human pledge", ur: "انسانی بیعت میں الٰہی موجودگی کی طاقتور تصویر" }, ayah: 10 },
      { name: "Agricultural Simile", description: "كَزَرْعٍ أَخْرَجَ شَطْأَهُ", example: { en: "Companions compared to growing, strengthening seed/plant", ur: "صحابہ کا بڑھتے، مضبوط ہوتے بیج/پودے سے تقابل" }, ayah: 29 },
      { name: "Contrasting Pairs", description: "أَشِدَّاءُ عَلَى الْكُفَّارِ رُحَمَاءُ بَيْنَهُمْ", example: { en: "Stern/severe paired with merciful/compassionate", ur: "سختی/شدت کا جوڑا رحم/شفقت کے ساتھ" }, ayah: 29 },
      { name: "Dual Prophecy Reference", description: "فِي التَّوْرَاةِ... وَفِي الْإِنجِيلِ", example: { en: "Companions described in both Torah and Gospel", ur: "صحابہ کا بیان تورات اور انجیل دونوں میں" }, ayah: 29 }
    ]
  },

  connectionToOtherSurahs: {
    connections: [
      { surah: 8, name: "Al-Anfal", relationship: "Both discuss battles and spoils; Badr and Hudaybiyyah are linked victories", type: "thematic_parallel" },
      { surah: 9, name: "At-Tawbah", relationship: "Both address hypocrites and Bedouins who stayed behind; both discuss pledges", type: "thematic_continuation" },
      { surah: 33, name: "Al-Ahzab", relationship: "Both mention tranquility (sakinah) sent down in times of crisis", type: "thematic_parallel" },
      { surah: 110, name: "An-Nasr", relationship: "Both about victory (fath/nasr) and Islam's triumph", type: "thematic_parallel" },
      { surah: 61, name: "As-Saff", relationship: "Both mention Islam prevailing over all religion (liYuzhirahu 'ala ad-deen)", type: "identical_phrase" },
      { surah: 3, name: "Aal Imran", relationship: "Both describe companions' qualities and steadfastness in adversity", type: "thematic_parallel" }
    ]
  },

  practicalApplications: {
    lessons: [
      { principle: { en: "Trust Divine Wisdom", ur: "الٰہی حکمت پر بھروسہ" }, application: { en: "When Allah's decree seems unfavorable, trust that He sees what we cannot", ur: "جب اللہ کا فیصلہ ناموافق لگے تو بھروسہ کرو کہ وہ دیکھتا ہے جو ہم نہیں دیکھ سکتے" }, ayah: 1 },
      { principle: { en: "Sakinah Through Surrender", ur: "تسلیم سے سکینت" }, application: { en: "Inner peace comes from accepting Allah's plan, not from favorable circumstances", ur: "اندرونی سکون اللہ کے منصوبے کی قبولیت سے آتا ہے، سازگار حالات سے نہیں" }, ayah: 4 },
      { principle: { en: "Pledge is Sacred", ur: "عہد مقدس ہے" }, application: { en: "Commitments to Allah and His cause must never be broken", ur: "اللہ اور اس کے دین سے عہد کبھی نہیں توڑنا چاہیے" }, ayah: 10 },
      { principle: { en: "No Excuses When Called", ur: "بلاوے پر کوئی بہانہ نہیں" }, application: { en: "When duty calls, worldly preoccupations are not valid excuses", ur: "جب فرض بلائے تو دنیاوی مصروفیات جائز بہانہ نہیں" }, ayah: 11 },
      { principle: { en: "Balance Firmness and Mercy", ur: "سختی اور رحم میں توازن" }, application: { en: "Be strong against falsehood but compassionate with fellow believers", ur: "باطل کے خلاف مضبوط رہو لیکن مسلمان بھائیوں کے ساتھ مہربان" }, ayah: 29 },
      { principle: { en: "Actions Leave Marks", ur: "اعمال نشان چھوڑتے ہیں" }, application: { en: "True worship leaves visible traces on character and appearance", ur: "حقیقی عبادت کردار اور ظاہری شکل پر نشانات چھوڑتی ہے" }, ayah: 29 }
    ]
  }
};

export default ONTOLOGY;
