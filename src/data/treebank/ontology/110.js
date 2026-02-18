/**
 * Surah An-Nasr (110) - Ontology of Quranic Concepts
 * The Victory Surah - The Farewell Surah
 *
 * Theme: Divine victory, mass conversion, and preparation for death
 * Context: One of the last surahs revealed, signaling the completion of the Prophet's mission
 */

const SURAH_110_ONTOLOGY = {
  surahId: 110,
  name: {
    en: 'An-Nasr - The Divine Help',
    ur: 'النصر - الہی مدد',
    hi: 'अन-नस्र - इलाही मदद',
    ar: 'النصر',
  },
  description: {
    en: 'The "Farewell Surah" - revealed after the conquest of Mecca. It announced the completion of the Prophet\'s mission and prepared him for his approaching death. When victory comes, the response is not pride but deeper worship and seeking forgiveness.',
    ur: '"الوداعی سورۃ" - فتح مکہ کے بعد نازل ہوئی۔ نبی کے مشن کی تکمیل کا اعلان کیا اور انہیں آنے والی وفات کے لیے تیار کیا۔ جب فتح آئے، جواب غرور نہیں بلکہ گہری عبادت اور استغفار ہے۔',
    hi: '"अलविदाई सूरह" - फ़तह मक्का के बाद नाज़िल हुई। नबी के मिशन की तकमील का ऐलान किया और उन्हें आने वाली वफ़ात के लिए तैयार किया। जब फ़तह आए, जवाब ग़ुरूर नहीं बल्कि गहरी इबादत और इस्तिग़फ़ार है।',
  },

  categories: {
    divineVictory: {
      id: 'divine-victory',
      label: { en: 'Divine Victory', ur: 'الہی فتح', hi: 'इलाही फ़तह' },
      color: '#10B981',
      icon: 'Trophy',
      description: {
        en: 'Victory comes from Allah alone',
        ur: 'فتح صرف اللہ کی طرف سے آتی ہے',
      },
      concepts: [
        {
          id: 'nasr-allah',
          arabic: 'نَصْرُ اللَّهِ',
          transliteration: 'Nasr Allah',
          meaning: { en: 'The Help of Allah', ur: 'اللہ کی مدد', hi: 'अल्लाह की मदद' },
          ayah: 1,
          details: {
            en: 'Victory attributed to Allah, not strategy or strength. نَصْر means divine aid that leads to triumph.',
            ur: 'فتح اللہ سے منسوب، حکمت عملی یا طاقت سے نہیں۔ نَصْر کا مطلب الہی مدد جو کامیابی کا سبب۔',
          },
          characteristic: {
            en: 'True victory is not what you achieve, but what Allah grants you.',
            ur: 'حقیقی فتح وہ نہیں جو تم حاصل کرو، بلکہ جو اللہ تمہیں دے۔',
          },
        },
        {
          id: 'al-fath',
          arabic: 'الْفَتْحُ',
          transliteration: 'Al-Fath',
          meaning: { en: 'The Conquest', ur: 'فتح (مکہ)', hi: 'फ़तह (मक्का)' },
          ayah: 1,
          details: {
            en: 'Refers to Fath Makkah - the bloodless conquest of Mecca in 8 AH, when the Prophet ﷺ entered with 10,000 companions.',
            ur: 'فتح مکہ - 8 ہجری میں مکہ کی بے خون فتح، جب نبی ﷺ 10,000 صحابہ کے ساتھ داخل ہوئے۔',
          },
          characteristic: {
            en: 'فَتْح also means "opening" - Mecca\'s conquest opened all of Arabia to Islam.',
            ur: 'فَتْح کا مطلب "کھولنا" بھی - مکہ کی فتح نے پورے عرب کو اسلام کے لیے کھول دیا۔',
          },
        },
      ],
    },

    massConversion: {
      id: 'mass-conversion',
      label: { en: 'Mass Conversion', ur: 'اجتماعی قبول اسلام', hi: 'इजतिमाई क़बूल इस्लाम' },
      color: '#3B82F6',
      icon: 'Users',
      description: {
        en: 'People entering Islam in waves after the conquest',
        ur: 'فتح کے بعد لہروں میں اسلام میں داخل ہوتے لوگ',
      },
      concepts: [
        {
          id: 'afwajan',
          arabic: 'أَفْوَاجًا',
          transliteration: 'Afwaja',
          meaning: { en: 'In multitudes/waves', ur: 'فوج در فوج', hi: 'फ़ौज दर फ़ौज' },
          ayah: 2,
          details: {
            en: 'Before Fath Makkah: individuals accepted Islam (drip). After: entire tribes came in waves (flood).',
            ur: 'فتح مکہ سے پہلے: افراد اسلام قبول کرتے (قطرہ قطرہ)۔ بعد میں: پورے قبائل لہروں میں (سیلاب)۔',
          },
          characteristic: {
            en: 'Historical accounts: Yemen, Oman, Bahrain, and all major tribes sent delegations after Fath Makkah.',
            ur: 'تاریخی روایات: یمن، عمان، بحرین، اور تمام بڑے قبائل نے فتح مکہ کے بعد وفود بھیجے۔',
          },
        },
        {
          id: 'din-allah',
          arabic: 'دِينِ اللَّهِ',
          transliteration: 'Din Allah',
          meaning: { en: 'The Religion of Allah', ur: 'اللہ کا دین', hi: 'अल्लाह का दीन' },
          ayah: 2,
          details: {
            en: 'Islam is Allah\'s religion, not Muhammad\'s ﷺ. It belongs to the Creator, not the messenger.',
            ur: 'اسلام اللہ کا دین ہے، محمد ﷺ کا نہیں۔ یہ خالق کا ہے، رسول کا نہیں۔',
          },
        },
      ],
    },

    responseToVictory: {
      id: 'response-to-victory',
      label: { en: 'Response to Victory', ur: 'فتح کا جواب', hi: 'फ़तह का जवाब' },
      color: '#8B5CF6',
      icon: 'Heart',
      description: {
        en: 'How a believer should respond to success',
        ur: 'ایماندار کامیابی پر کیسے عمل کرے',
      },
      concepts: [
        {
          id: 'tasbih-hamd',
          arabic: 'سَبِّحْ بِحَمْدِ رَبِّكَ',
          transliteration: 'Sabbih bi-Hamdi Rabbik',
          meaning: { en: 'Glorify with praise of your Lord', ur: 'اپنے رب کی حمد کے ساتھ تسبیح کرو', hi: 'अपने रब की हम्द के साथ तस्बीह करो' },
          ayah: 3,
          details: {
            en: 'Combine تسبيح (declaring Allah\'s perfection) with حمد (thanking Him). Not arrogance, but gratitude.',
            ur: 'تسبیح (اللہ کے کمال کا اعلان) کو حمد (اس کا شکر) کے ساتھ ملاؤ۔ غرور نہیں، شکر۔',
          },
          characteristic: {
            en: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ - this dhikr fulfills both commands.',
            ur: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ - یہ ذکر دونوں احکام پورے کرتا ہے۔',
          },
        },
        {
          id: 'istighfar',
          arabic: 'وَاسْتَغْفِرْهُ',
          transliteration: 'Wa-staghfirhu',
          meaning: { en: 'And seek His forgiveness', ur: 'اور اس سے مغفرت مانگو', hi: 'और उससे मग़फ़िरत माँगो' },
          ayah: 3,
          details: {
            en: 'Even the Prophet ﷺ commanded to seek forgiveness! No one is beyond the need for istighfar.',
            ur: 'نبی ﷺ کو بھی استغفار کا حکم! کوئی بھی استغفار کی ضرورت سے باہر نہیں۔',
          },
          characteristic: {
            en: 'Scholars say istighfar here = preparing to meet Allah. His mission was complete.',
            ur: 'علماء کہتے ہیں یہاں استغفار = اللہ سے ملاقات کی تیاری۔ ان کا مشن مکمل ہو گیا تھا۔',
          },
        },
      ],
    },

    divineAttribute: {
      id: 'divine-attribute',
      label: { en: 'Divine Attribute', ur: 'الہی صفت', hi: 'इलाही सिफ़त' },
      color: '#F59E0B',
      icon: 'Star',
      description: {
        en: 'Allah\'s attribute of accepting repentance',
        ur: 'اللہ کی توبہ قبول کرنے کی صفت',
      },
      concepts: [
        {
          id: 'at-tawwab',
          arabic: 'التَّوَّابُ',
          transliteration: 'At-Tawwab',
          meaning: { en: 'The Oft-Accepting of Repentance', ur: 'بار بار توبہ قبول کرنے والا', hi: 'बार बार तौबा क़बूल करने वाला' },
          ayah: 3,
          details: {
            en: 'تَوَّاب is intensive (فَعَّال pattern) - He accepts repentance REPEATEDLY, ABUNDANTLY. Never despair of His mercy.',
            ur: 'تَوَّاب مبالغہ ہے (فَعَّال وزن) - وہ بار بار، کثرت سے توبہ قبول کرتا ہے۔ اس کی رحمت سے مایوس نہ ہو۔',
          },
          characteristic: {
            en: 'The door of repentance is always open - this is Allah\'s eternal attribute.',
            ur: 'توبہ کا دروازہ ہمیشہ کھلا ہے - یہ اللہ کی ابدی صفت ہے۔',
          },
        },
      ],
    },

    historicalContext: {
      id: 'historical-context',
      label: { en: 'Historical Context', ur: 'تاریخی پس منظر', hi: 'ऐतिहासिक पृष्ठभूमि' },
      color: '#EF4444',
      icon: 'Book',
      description: {
        en: 'The circumstances of this surah',
        ur: 'اس سورہ کے حالات',
      },
      concepts: [
        {
          id: 'fath-makkah',
          meaning: { en: 'Conquest of Mecca', ur: 'فتح مکہ', hi: 'फ़तह मक्का' },
          details: {
            en: '8 AH (630 CE): Prophet ﷺ entered Mecca with 10,000 companions. Nearly bloodless conquest. Kaaba cleansed of idols.',
            ur: '8 ہجری (630 عیسوی): نبی ﷺ 10,000 صحابہ کے ساتھ مکہ میں داخل۔ تقریباً بے خون فتح۔ کعبہ بتوں سے پاک۔',
          },
        },
        {
          id: 'last-surah',
          meaning: { en: 'One of the Last Surahs', ur: 'آخری سورتوں میں سے', hi: 'आख़िरी सूरतों में से' },
          details: {
            en: 'Revealed in 10 AH, after Hajjat al-Wida (Farewell Hajj). Scholars say it announced the Prophet\'s approaching death.',
            ur: '10 ہجری میں نازل، حجۃ الوداع کے بعد۔ علماء کہتے ہیں اس نے نبی کی قریبی وفات کا اعلان کیا۔',
          },
          characteristic: {
            en: 'When ibn Abbas heard this surah, he understood: "The Prophet ﷺ has been informed of his death."',
            ur: 'جب ابن عباس نے یہ سورہ سنی، سمجھ گئے: "نبی ﷺ کو ان کی وفات کی خبر دے دی گئی۔"',
          },
        },
        {
          id: 'prophet-response',
          meaning: { en: 'Prophet\'s Response', ur: 'نبی کا عمل', hi: 'नबी का अमल' },
          details: {
            en: 'After this surah, Prophet ﷺ increased his istighfar significantly. Aisha reported he would say "Subhan Allah wa bihamdihi, astaghfirullah wa atubu ilayh" repeatedly.',
            ur: 'اس سورہ کے بعد نبی ﷺ نے اپنا استغفار بہت بڑھا دیا۔ عائشہ نے بتایا وہ "سبحان اللہ وبحمدہ، استغفراللہ واتوب الیہ" بار بار کہتے۔',
          },
        },
      ],
    },
  },

  relationships: [
    {
      from: { en: 'Victory (Nasr)', ur: 'فتح (نصر)', ar: 'نَصْر' },
      to: { en: 'Conquest (Fath)', ur: 'فتح', ar: 'فَتْح' },
      type: 'parallel',
      explanation: {
        en: 'Both came together - Allah\'s help resulted in the conquest of Mecca.',
        ur: 'دونوں ایک ساتھ آئیں - اللہ کی مدد نے فتح مکہ کا نتیجہ دیا۔',
      },
    },
    {
      from: { en: 'Victory', ur: 'فتح', ar: 'الْفَتْحُ' },
      to: { en: 'Mass Conversion', ur: 'اجتماعی اسلام', ar: 'أَفْوَاجًا' },
      type: 'cause-effect',
      explanation: {
        en: 'The conquest caused mass conversion - tribes saw Islam triumph and accepted it.',
        ur: 'فتح نے اجتماعی قبول اسلام کا سبب بنا - قبائل نے اسلام کی فتح دیکھی اور قبول کیا۔',
      },
    },
    {
      from: { en: 'Mass Conversion', ur: 'اجتماعی اسلام', ar: 'أَفْوَاجًا' },
      to: { en: 'Glorification & Forgiveness', ur: 'تسبیح و استغفار', ar: 'سَبِّحْ وَاسْتَغْفِرْ' },
      type: 'response',
      explanation: {
        en: 'The proper response to witnessing success is worship, not pride.',
        ur: 'کامیابی دیکھنے کا مناسب جواب عبادت ہے، غرور نہیں۔',
      },
    },
    {
      from: { en: 'Seeking Forgiveness', ur: 'استغفار', ar: 'اسْتَغْفِرْهُ' },
      to: { en: 'Tawwab (Allah)', ur: 'توّاب (اللہ)', ar: 'تَوَّابًا' },
      type: 'assurance',
      explanation: {
        en: 'Seek forgiveness with confidence - Allah ALWAYS accepts repentance.',
        ur: 'اعتماد سے مغفرت مانگو - اللہ ہمیشہ توبہ قبول کرتا ہے۔',
      },
    },
  ],

  thematicFlow: {
    title: {
      en: 'The Victory Cycle',
      ur: 'فتح کا دائرہ',
      hi: 'फ़तह का दायरा',
    },
    stages: [
      {
        ayah: 1,
        stage: { en: 'The Promise Fulfilled', ur: 'وعدہ پورا' },
        description: {
          en: 'Allah\'s help and victory arrive. The conquest of Mecca - the climax of the Prophet\'s mission.',
          ur: 'اللہ کی مدد اور فتح آتی ہے۔ فتح مکہ - نبی کے مشن کا عروج۔',
        },
        color: '#10B981',
      },
      {
        ayah: 2,
        stage: { en: 'The Result Witnessed', ur: 'نتیجہ دیکھا' },
        description: {
          en: 'People enter Islam in waves. The dream of 23 years becomes reality before the Prophet\'s eyes.',
          ur: 'لوگ لہروں میں اسلام میں داخل۔ 23 سال کا خواب نبی کی آنکھوں کے سامنے حقیقت بنتا ہے۔',
        },
        color: '#3B82F6',
      },
      {
        ayah: 3,
        stage: { en: 'The Proper Response', ur: 'مناسب جواب' },
        description: {
          en: 'Not pride, but worship and seeking forgiveness. Mission complete, preparation for meeting Allah.',
          ur: 'غرور نہیں، بلکہ عبادت اور استغفار۔ مشن مکمل، اللہ سے ملاقات کی تیاری۔',
        },
        color: '#8B5CF6',
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
        surah: 48,
        name: { en: 'Al-Fath', ur: 'الفتح' },
        arabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا',
        connection: {
          en: '"Indeed, We have given you a clear conquest." Surah Al-Fath (48) revealed before conquest, An-Nasr after.',
          ur: '"بیشک ہم نے تمہیں واضح فتح دی۔" سورۃ الفتح (48) فتح سے پہلے نازل، النصر بعد میں۔',
        },
      },
      {
        surah: 5,
        ayah: 3,
        name: { en: 'Al-Ma\'idah', ur: 'المائدہ' },
        arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ',
        connection: {
          en: '"Today I have perfected your religion for you." Also revealed near the end, confirming mission completion.',
          ur: '"آج میں نے تمہارے لیے تمہارا دین مکمل کر دیا۔" یہ بھی آخر میں نازل، مشن کی تکمیل کی تصدیق۔',
        },
      },
      {
        surah: 9,
        ayah: 25,
        name: { en: 'At-Tawbah', ur: 'التوبہ' },
        arabic: 'ثُمَّ أَنزَلَ اللَّهُ سَكِينَتَهُ عَلَىٰ رَسُولِهِ',
        connection: {
          en: 'Describes divine help in battle - same concept of نَصْر from Allah.',
          ur: 'جنگ میں الہی مدد کا بیان - وہی تصور نَصْر اللہ کی طرف سے۔',
        },
      },
    ],
  },

  hadith: {
    virtue: {
      text: {
        ar: 'لَمَّا نَزَلَتْ إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ قَالَ رَسُولُ اللَّهِ نُعِيَتْ إِلَيَّ نَفْسِي',
        en: 'When "When the help of Allah comes and the victory" was revealed, the Messenger of Allah ﷺ said: "My death has been announced to me."',
        ur: 'جب "جب اللہ کی مدد اور فتح آ جائے" نازل ہوئی، رسول اللہ ﷺ نے فرمایا: "میری وفات کی خبر مجھے دے دی گئی۔"',
      },
      source: 'Ibn Kathir\'s Tafsir, from Ibn Abbas',
      narrator: 'Ibn Abbas',
    },
    additional: [
      {
        text: {
          en: 'After this surah, the Prophet ﷺ was never seen except that he was saying: "Subhanak Allahumma wa bihamdik, astaghfiruka wa atubu ilayk."',
          ur: 'اس سورہ کے بعد نبی ﷺ کبھی نہیں دیکھے گئے مگر کہہ رہے ہوتے: "سبحانک اللہم وبحمدک، استغفرک واتوب الیک۔"',
        },
        source: 'Sahih al-Bukhari',
        narrator: 'Aisha',
      },
    ],
  },

  lessonsForUs: {
    title: { en: 'Lessons for Us', ur: 'ہمارے لیے سبق' },
    lessons: [
      {
        lesson: { en: 'Victory is from Allah', ur: 'فتح اللہ کی طرف سے ہے' },
        explanation: {
          en: 'Never attribute success to your own abilities. Say "ما شاء الله" and acknowledge the true source.',
          ur: 'کامیابی کبھی اپنی صلاحیتوں سے منسوب نہ کرو۔ "ما شاء اللہ" کہو اور حقیقی ذریعے کا اعتراف کرو۔',
        },
      },
      {
        lesson: { en: 'Humility in Success', ur: 'کامیابی میں عاجزی' },
        explanation: {
          en: 'The proper response to achievement is worship and forgiveness-seeking, not arrogance.',
          ur: 'کامیابی کا مناسب جواب عبادت اور استغفار ہے، غرور نہیں۔',
        },
      },
      {
        lesson: { en: 'Never Stop Seeking Forgiveness', ur: 'استغفار کبھی نہ چھوڑو' },
        explanation: {
          en: 'If the Prophet ﷺ was commanded to seek forgiveness after victory, none of us is beyond the need.',
          ur: 'اگر نبی ﷺ کو فتح کے بعد استغفار کا حکم ہوا، تو ہم میں سے کوئی بھی اس ضرورت سے باہر نہیں۔',
        },
      },
      {
        lesson: { en: 'Prepare for the End', ur: 'اختتام کی تیاری کرو' },
        explanation: {
          en: 'Life has an end. Use success as a reminder to prepare for meeting Allah.',
          ur: 'زندگی کا اختتام ہے۔ کامیابی کو اللہ سے ملاقات کی تیاری کی یاد دہانی بناؤ۔',
        },
      },
    ],
  },

  uniqueInsight: {
    title: { en: 'The Farewell Surah', ur: 'الوداعی سورۃ' },
    content: {
      en: 'An-Nasr is unique: it announces mission accomplished AND approaching death in the same surah. The Prophet ﷺ spent 23 years calling to Islam - often facing rejection, hardship, and persecution. Finally, he sees victory and mass acceptance. But Allah\'s message is not "celebrate" - it\'s "glorify Me, thank Me, and prepare to meet Me." This teaches the greatest lesson: worldly success is not the goal; meeting Allah in a state of worship and repentance is.',
      ur: 'النصر منفرد ہے: ایک ہی سورہ میں مشن مکمل اور قریبی وفات کا اعلان۔ نبی ﷺ نے 23 سال اسلام کی دعوت میں گزارے - اکثر رد، مشکلات، اور ظلم کا سامنا۔ آخرکار وہ فتح اور اجتماعی قبولیت دیکھتے ہیں۔ لیکن اللہ کا پیغام "جشن مناؤ" نہیں - بلکہ "میری تسبیح کرو، شکر ادا کرو، اور مجھ سے ملاقات کی تیاری کرو۔" یہ سب سے بڑا سبق سکھاتا ہے: دنیاوی کامیابی مقصد نہیں؛ عبادت اور توبہ کی حالت میں اللہ سے ملاقات مقصد ہے۔',
    },
  },
};

export default SURAH_110_ONTOLOGY;
