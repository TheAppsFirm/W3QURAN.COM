/**
 * Surah Sad (38) - The Letter Sad
 * Quranic Arabic Treebank Data
 * First 10 ayahs - Makki surah (88 total ayahs)
 * Theme: Stories of prophets (David, Solomon), warning to disbelievers
 */

export const TREEBANK_DATA = {
  surahId: 38,
  surahName: "Sad",
  surahNameArabic: "ص",
  totalAyahs: 88,

  1: {
    ayahNumber: 1,
    text: "ص ۚ وَالْقُرْآنِ ذِي الذِّكْرِ",
    words: [
      {
        id: '38:1:1',
        arabic: 'ص',
        transliteration: 'Ṣād',
        pos: ['LETTER'],
        posLabel: 'LETTER',
        root: null,
        meaning: {
          en: 'Sad (letter)',
          ur: 'ص (حرف)'
        },
        grammarRole: 'huruf_muqatta\'at',
        grammarExplanations: {
          en: 'Disconnected letter (حرف مقطع) - one of the mysterious letters opening some surahs. Its meaning is known only to Allah.',
          ur: 'حروف مقطعات - کچھ سورتوں کے شروع میں آنے والے پراسرار حروف۔ ان کا معنی صرف اللہ جانتا ہے۔'
        }
      },
      {
        id: '38:1:2',
        arabic: 'وَالْقُرْآنِ',
        transliteration: 'wal-qur\'āni',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ق ر أ',
        meaning: {
          en: 'By the Quran',
          ur: 'قرآن کی قسم'
        },
        grammarRole: 'qasam',
        grammarExplanations: {
          en: 'Oath particle وَ (by) + genitive definite noun. Allah swears by the Quran.',
          ur: 'حرف قسم وَ + اسم معرفہ مجرور۔ اللہ قرآن کی قسم کھاتا ہے۔'
        }
      },
      {
        id: '38:1:3',
        arabic: 'ذِي',
        transliteration: 'dhī',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'full of',
          ur: 'والا'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'One of the five nouns (أسماء خمسة) - genitive form meaning "possessor of". Describes الْقُرْآنِ.',
          ur: 'اسماء خمسہ میں سے - مجرور معنی "والا"۔ الْقُرْآنِ کی صفت۔'
        }
      },
      {
        id: '38:1:4',
        arabic: 'الذِّكْرِ',
        transliteration: 'adh-dhikri',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'ذ ك ر',
        meaning: {
          en: 'the Reminder',
          ur: 'نصیحت'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) in idafa with ذِي. The Quran is "owner/full of reminder/remembrance".',
          ur: 'مضاف إليه ذِي کی اضافت میں۔ قرآن "نصیحت والا" ہے۔'
        }
      }
    ]
  },

  2: {
    ayahNumber: 2,
    text: "بَلِ الَّذِينَ كَفَرُوا فِي عِزَّةٍ وَشِقَاقٍ",
    words: [
      {
        id: '38:2:1',
        arabic: 'بَلِ',
        transliteration: 'bali',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'But/Rather',
          ur: 'بلکہ'
        },
        grammarRole: 'harf_idrab',
        grammarExplanations: {
          en: 'Particle of digression (حرف إضراب) - shifts to a contrasting statement.',
          ur: 'حرف اضراب - متضاد بیان کی طرف منتقل ہوتا ہے۔'
        }
      },
      {
        id: '38:2:2',
        arabic: 'الَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'those who',
          ur: 'جو لوگ'
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Relative pronoun (اسم موصول) as subject - plural masculine. "Those who..."',
          ur: 'اسم موصول بطور مبتدأ - جمع مذکر۔ "وہ لوگ جو..."'
        }
      },
      {
        id: '38:2:3',
        arabic: 'كَفَرُوا',
        transliteration: 'kafarū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك ف ر',
        meaning: {
          en: 'disbelieve',
          ur: 'کفر کیا'
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Perfect verb (فعل ماضي) - 3rd person masculine plural. Part of relative clause (صلة الموصول).',
          ur: 'فعل ماضی - غائب مذکر جمع۔ صلہ موصول کا حصہ۔'
        }
      },
      {
        id: '38:2:4',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'in',
          ur: 'میں'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition indicating state/condition they are in.',
          ur: 'حرف جر جو ان کی حالت بیان کرتا ہے۔'
        }
      },
      {
        id: '38:2:5',
        arabic: 'عِزَّةٍ',
        transliteration: '\'izzatin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ز ز',
        meaning: {
          en: 'pride/arrogance',
          ur: 'تکبر'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun (مجرور) governed by فِي. Here means false pride/arrogance, not honor.',
          ur: 'اسم مجرور فِي سے۔ یہاں جھوٹا غرور/تکبر مراد ہے، عزت نہیں۔'
        }
      },
      {
        id: '38:2:6',
        arabic: 'وَشِقَاقٍ',
        transliteration: 'wa-shiqāqin',
        pos: ['CONJ', 'N'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'CONJ+N',
        root: 'ش ق ق',
        meaning: {
          en: 'and dissension',
          ur: 'اور مخالفت'
        },
        grammarRole: 'matoof',
        grammarExplanations: {
          en: 'Conjunction + conjoined genitive noun. Opposition/discord with the truth.',
          ur: 'حرف عطف + معطوف مجرور۔ حق کی مخالفت/اختلاف۔'
        }
      }
    ]
  },

  3: {
    ayahNumber: 3,
    text: "كَمْ أَهْلَكْنَا مِن قَبْلِهِم مِّن قَرْنٍ فَنَادَوْا وَلَاتَ حِينَ مَنَاصٍ",
    words: [
      {
        id: '38:3:1',
        arabic: 'كَمْ',
        transliteration: 'kam',
        pos: ['INTERROG'],
        posLabel: 'INTERROG',
        root: null,
        meaning: {
          en: 'How many',
          ur: 'کتنی'
        },
        grammarRole: 'khabariyya',
        grammarExplanations: {
          en: 'Interrogative particle (كم الخبرية) used rhetorically meaning "many". Governs genitive.',
          ur: 'کم خبریہ بیانیہ طور پر استعمال معنی "بہت سی"۔ مجرور حکم کرتا ہے۔'
        }
      },
      {
        id: '38:3:2',
        arabic: 'أَهْلَكْنَا',
        transliteration: 'ahlaknā',
        pos: ['V'],
        posLabel: 'V',
        root: 'ه ل ك',
        meaning: {
          en: 'We destroyed',
          ur: 'ہم نے ہلاک کیا'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Perfect verb Form IV (أَفْعَلَ) - causative "caused to perish". 1st person plural (royal we).',
          ur: 'فعل ماضی باب إفعال - متعدی "ہلاک کیا"۔ متکلم جمع (تعظیمی)۔'
        }
      },
      {
        id: '38:3:3',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'before',
          ur: 'سے پہلے'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition - part of temporal phrase "before them".',
          ur: 'حرف جر - زمانی عبارت "ان سے پہلے" کا حصہ۔'
        }
      },
      {
        id: '38:3:4',
        arabic: 'قَبْلِهِم',
        transliteration: 'qablihim',
        pos: ['ADV', 'PRON'],
        posLabel: 'ADV+PRON',
        root: 'ق ب ل',
        meaning: {
          en: 'them',
          ur: 'ان'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Adverb of time (ظرف زمان) + attached pronoun هِمْ (them). "Before them".',
          ur: 'ظرف زمان + ضمیر متصل هِمْ (ان)۔ "ان سے پہلے"۔'
        }
      },
      {
        id: '38:3:5',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'of',
          ur: 'سے'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition indicating partitive - "of/from" generations.',
          ur: 'حرف جر تبعیضی - "نسلوں میں سے"۔'
        }
      },
      {
        id: '38:3:6',
        arabic: 'قَرْنٍ',
        transliteration: 'qarnin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق ر ن',
        meaning: {
          en: 'generation',
          ur: 'قوم'
        },
        grammarRole: 'tamyeez',
        grammarExplanations: {
          en: 'Specification (تمييز) for كَمْ - genitive indefinite. "How many a generation".',
          ur: 'تمییز کَمْ کے لیے - مجرور نکرہ۔ "کتنی ہی قومیں"۔'
        }
      },
      {
        id: '38:3:7',
        arabic: 'فَنَادَوْا',
        transliteration: 'fa-nādaw',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ن د و',
        meaning: {
          en: 'and they called out',
          ur: 'تو انہوں نے پکارا'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Conjunction فَ + perfect verb - 3rd person masculine plural. "Then they cried out".',
          ur: 'حرف عطف فَ + فعل ماضی - غائب مذکر جمع۔ "پھر انہوں نے چلایا"۔'
        }
      },
      {
        id: '38:3:8',
        arabic: 'وَلَاتَ',
        transliteration: 'wa-lāta',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'but it was not',
          ur: 'مگر نہیں تھا'
        },
        grammarRole: 'nafy',
        grammarExplanations: {
          en: 'Conjunction + لَاتَ (special negative for time). Works like لَيْسَ, negating time.',
          ur: 'حرف عطف + لَاتَ (خاص نفی زمان کے لیے)۔ لَيْسَ کی طرح کام کرتا ہے۔'
        }
      },
      {
        id: '38:3:9',
        arabic: 'حِينَ',
        transliteration: 'ḥīna',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح ي ن',
        meaning: {
          en: 'time',
          ur: 'وقت'
        },
        grammarRole: 'ism_lata',
        grammarExplanations: {
          en: 'Subject of لَاتَ (اسم لات) - accusative. "It was not the time for..."',
          ur: 'اسم لات - منصوب۔ "وہ وقت نہیں تھا..."'
        }
      },
      {
        id: '38:3:10',
        arabic: 'مَنَاصٍ',
        transliteration: 'manāṣin',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 2, to: 7, label: 'عطف' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'ن و ص',
        meaning: {
          en: 'escape',
          ur: 'بچاؤ'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) - "time of escape". There was no time to flee.',
          ur: 'مضاف إليه - "بچنے کا وقت"۔ بھاگنے کا وقت نہیں تھا۔'
        }
      }
    ]
  },

  4: {
    ayahNumber: 4,
    text: "وَعَجِبُوا أَن جَاءَهُم مُّنذِرٌ مِّنْهُمْ ۖ وَقَالَ الْكَافِرُونَ هَٰذَا سَاحِرٌ كَذَّابٌ",
    words: [
      {
        id: '38:4:1',
        arabic: 'وَعَجِبُوا',
        transliteration: 'wa-\'ajibū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ع ج ب',
        meaning: {
          en: 'And they wonder',
          ur: 'اور وہ حیران ہوئے'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Conjunction + perfect verb - 3rd person masculine plural. "They wondered/were amazed".',
          ur: 'حرف عطف + فعل ماضی - غائب مذکر جمع۔ "وہ حیران ہوئے"۔'
        }
      },
      {
        id: '38:4:2',
        arabic: 'أَن',
        transliteration: 'an',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'that',
          ur: 'کہ'
        },
        grammarRole: 'harf_masdariyya',
        grammarExplanations: {
          en: 'Masdariyya particle (أَنْ المصدرية) forming a clause as object of عَجِبُوا.',
          ur: 'أَنْ مصدریہ - عَجِبُوا کے مفعول کے طور پر جملہ بناتا ہے۔'
        }
      },
      {
        id: '38:4:3',
        arabic: 'جَاءَهُم',
        transliteration: 'jā\'ahum',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ج ي أ',
        meaning: {
          en: 'has come to them',
          ur: 'ان کے پاس آیا'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Perfect verb + attached pronoun هُمْ (them). "Came to them".',
          ur: 'فعل ماضی + ضمیر متصل هُمْ (ان کے پاس)۔ "ان کے پاس آیا"۔'
        }
      },
      {
        id: '38:4:4',
        arabic: 'مُّنذِرٌ',
        transliteration: 'mundhirun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ذ ر',
        meaning: {
          en: 'a warner',
          ur: 'ڈرانے والا'
        },
        grammarRole: 'faa\'il',
        grammarExplanations: {
          en: 'Subject (فاعل) of جَاءَ - nominative indefinite. Active participle from Form IV.',
          ur: 'فاعل جَاءَ کا - مرفوع نکرہ۔ اسم فاعل باب إفعال سے۔'
        }
      },
      {
        id: '38:4:5',
        arabic: 'مِّنْهُمْ',
        transliteration: 'minhum',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: {
          en: 'from among them',
          ur: 'انہی میں سے'
        },
        grammarRole: 'jarr_majroor',
        grammarExplanations: {
          en: 'Preposition مِنْ + pronoun هُمْ. Describes the warner as being from their own people.',
          ur: 'حرف جر مِنْ + ضمیر هُمْ۔ ڈرانے والے کو انہی کی قوم سے بتاتا ہے۔'
        }
      },
      {
        id: '38:4:6',
        arabic: 'وَقَالَ',
        transliteration: 'wa-qāla',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: {
          en: 'And said',
          ur: 'اور کہا'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Conjunction + perfect verb - 3rd person masculine singular.',
          ur: 'حرف عطف + فعل ماضی - غائب مذکر واحد۔'
        }
      },
      {
        id: '38:4:7',
        arabic: 'الْكَافِرُونَ',
        transliteration: 'al-kāfirūna',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ف ر',
        meaning: {
          en: 'the disbelievers',
          ur: 'کافروں نے'
        },
        grammarRole: 'faa\'il',
        grammarExplanations: {
          en: 'Subject (فاعل) of قَالَ - nominative plural with وَ (sound masculine plural).',
          ur: 'فاعل قَالَ کا - مرفوع جمع مذکر سالم (واو کے ساتھ)۔'
        }
      },
      {
        id: '38:4:8',
        arabic: 'هَٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'This',
          ur: 'یہ'
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative pronoun (اسم إشارة) as subject - referring to the Prophet.',
          ur: 'اسم اشارہ بطور مبتدأ - نبی کی طرف اشارہ۔'
        }
      },
      {
        id: '38:4:9',
        arabic: 'سَاحِرٌ',
        transliteration: 'sāḥirun',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ح ر',
        meaning: {
          en: 'a magician',
          ur: 'جادوگر'
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'First predicate (خبر) - nominative indefinite. Their false accusation.',
          ur: 'خبر اول - مرفوع نکرہ۔ ان کا جھوٹا الزام۔'
        }
      },
      {
        id: '38:4:10',
        arabic: 'كَذَّابٌ',
        transliteration: 'kadhdhābun',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 3, to: 6, label: 'عطف' },
        { from: 8, to: 9, label: 'مبتدأ + خبر' }
      ],
    },
        posLabel: 'N',
        root: 'ك ذ ب',
        meaning: {
          en: 'a liar',
          ur: 'جھوٹا'
        },
        grammarRole: 'khabar_thani',
        grammarExplanations: {
          en: 'Second predicate - nominative. Intensive form (فَعَّال) meaning "great liar".',
          ur: 'خبر ثانی - مرفوع۔ صیغہ مبالغہ (فَعَّال) معنی "بڑا جھوٹا"۔'
        }
      }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "أَجَعَلَ الْآلِهَةَ إِلَٰهًا وَاحِدًا ۖ إِنَّ هَٰذَا لَشَيْءٌ عُجَابٌ",
    words: [
      {
        id: '38:5:1',
        arabic: 'أَجَعَلَ',
        transliteration: 'a-ja\'ala',
        pos: ['INTERROG', 'V'],
        posLabel: 'INTERROG+V',
        root: 'ج ع ل',
        meaning: {
          en: 'Has he made',
          ur: 'کیا اس نے بنا دیا'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Interrogative أَ + perfect verb. Rhetorical question expressing disbelief.',
          ur: 'استفہام أَ + فعل ماضی۔ بیانیہ سوال انکار ظاہر کرتا ہے۔'
        }
      },
      {
        id: '38:5:2',
        arabic: 'الْآلِهَةَ',
        transliteration: 'al-ālihata',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'the gods',
          ur: 'معبودوں کو'
        },
        grammarRole: 'mafool_bihi_awwal',
        grammarExplanations: {
          en: 'First direct object (مفعول به أول) - accusative definite plural.',
          ur: 'مفعول بہ اول - منصوب معرفہ جمع۔'
        }
      },
      {
        id: '38:5:3',
        arabic: 'إِلَٰهًا',
        transliteration: 'ilāhan',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'one god',
          ur: 'ایک معبود'
        },
        grammarRole: 'mafool_bihi_thani',
        grammarExplanations: {
          en: 'Second direct object (مفعول به ثاني) - جَعَلَ takes two objects. Accusative indefinite.',
          ur: 'مفعول بہ ثانی - جَعَلَ دو مفعول لیتا ہے۔ منصوب نکرہ۔'
        }
      },
      {
        id: '38:5:4',
        arabic: 'وَاحِدًا',
        transliteration: 'wāḥidan',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'و ح د',
        meaning: {
          en: 'one',
          ur: 'واحد'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for إِلَٰهًا - accusative to match.',
          ur: 'صفت إِلَٰهًا کی - منصوب مطابقت کے لیے۔'
        }
      },
      {
        id: '38:5:5',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['EMPH'],
        posLabel: 'EMPH',
        root: null,
        meaning: {
          en: 'Indeed',
          ur: 'بے شک'
        },
        grammarRole: 'harf_tawkeed',
        grammarExplanations: {
          en: 'Emphatic particle introducing their exclamation of disbelief.',
          ur: 'حرف توکید ان کے انکار کا اظہار شروع کرتا ہے۔'
        }
      },
      {
        id: '38:5:6',
        arabic: 'هَٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'this',
          ur: 'یہ'
        },
        grammarRole: 'ism_inna',
        grammarExplanations: {
          en: 'Demonstrative pronoun as subject of إِنَّ (اسم إن) - in mahall nasb.',
          ur: 'اسم اشارہ بطور اسم إن - محلاً منصوب۔'
        }
      },
      {
        id: '38:5:7',
        arabic: 'لَشَيْءٌ',
        transliteration: 'la-shay\'un',
        pos: ['EMPH', 'N'],
        posLabel: 'EMPH+N',
        root: 'ش ي أ',
        meaning: {
          en: 'surely a thing',
          ur: 'یقیناً بات'
        },
        grammarRole: 'khabar_inna',
        grammarExplanations: {
          en: 'Emphatic لَ + predicate of إِنَّ - nominative. Double emphasis.',
          ur: 'تاکیدی لَ + خبر إن - مرفوع۔ دوہری تاکید۔'
        }
      },
      {
        id: '38:5:8',
        arabic: 'عُجَابٌ',
        transliteration: '\'ujābun',
        pos: ['ADJ'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 1, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'توکید' },
        { from: 6, to: 7, label: 'مبتدأ + خبر' },
        { from: 7, to: 8, label: 'موصوف + صفت' }
      ],
    },
        posLabel: 'ADJ',
        root: 'ع ج ب',
        meaning: {
          en: 'amazing/strange',
          ur: 'عجیب'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for شَيْءٌ - nominative. Intensive form (فُعَال) meaning "very strange".',
          ur: 'صفت شَيْءٌ کی - مرفوع۔ صیغہ مبالغہ (فُعَال) معنی "بہت عجیب"۔'
        }
      }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "وَانطَلَقَ الْمَلَأُ مِنْهُمْ أَنِ امْشُوا وَاصْبِرُوا عَلَىٰ آلِهَتِكُمْ ۖ إِنَّ هَٰذَا لَشَيْءٌ يُرَادُ",
    words: [
      {
        id: '38:6:1',
        arabic: 'وَانطَلَقَ',
        transliteration: 'wa-nṭalaqa',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ط ل ق',
        meaning: {
          en: 'And went forth',
          ur: 'اور چل دیے'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Conjunction + perfect verb Form VII (انفَعَلَ) - reflexive/intransitive "set off".',
          ur: 'حرف عطف + فعل ماضی باب انفعال - لازم "چل دیے"۔'
        }
      },
      {
        id: '38:6:2',
        arabic: 'الْمَلَأُ',
        transliteration: 'al-mala\'u',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل أ',
        meaning: {
          en: 'the chiefs',
          ur: 'سردار'
        },
        grammarRole: 'faa\'il',
        grammarExplanations: {
          en: 'Subject (فاعل) - nominative definite. The leaders/elite of the disbelievers.',
          ur: 'فاعل - مرفوع معرفہ۔ کافروں کے سردار۔'
        }
      },
      {
        id: '38:6:3',
        arabic: 'مِنْهُمْ',
        transliteration: 'minhum',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: {
          en: 'among them',
          ur: 'ان میں سے'
        },
        grammarRole: 'jarr_majroor',
        grammarExplanations: {
          en: 'Preposition + pronoun - specifying which chiefs (from the disbelievers).',
          ur: 'حرف جر + ضمیر - کون سے سردار (کافروں میں سے)۔'
        }
      },
      {
        id: '38:6:4',
        arabic: 'أَنِ',
        transliteration: 'ani',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'that',
          ur: 'کہ'
        },
        grammarRole: 'harf_tafseer',
        grammarExplanations: {
          en: 'Explanatory particle (أَنْ التفسيرية) introducing their speech.',
          ur: 'أَنْ تفسیریہ ان کی بات شروع کرتا ہے۔'
        }
      },
      {
        id: '38:6:5',
        arabic: 'امْشُوا',
        transliteration: 'imshū',
        pos: ['V'],
        posLabel: 'V',
        root: 'م ش ي',
        meaning: {
          en: 'Continue',
          ur: 'چلتے رہو'
        },
        grammarRole: 'verb_amr',
        grammarExplanations: {
          en: 'Imperative verb - 2nd person masculine plural. "Walk/Continue/Go on".',
          ur: 'فعل امر - مخاطب مذکر جمع۔ "چلو/جاری رہو"۔'
        }
      },
      {
        id: '38:6:6',
        arabic: 'وَاصْبِرُوا',
        transliteration: 'wa-ṣbirū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ص ب ر',
        meaning: {
          en: 'and be patient',
          ur: 'اور صبر کرو'
        },
        grammarRole: 'verb_amr',
        grammarExplanations: {
          en: 'Conjunction + imperative verb. Command to persist in their false beliefs.',
          ur: 'حرف عطف + فعل امر۔ اپنے باطل عقائد پر قائم رہنے کا حکم۔'
        }
      },
      {
        id: '38:6:7',
        arabic: 'عَلَىٰ',
        transliteration: '\'alā',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'upon',
          ur: 'پر'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition indicating adherence/steadfastness upon something.',
          ur: 'حرف جر کسی پر قائم رہنے کی طرف اشارہ۔'
        }
      },
      {
        id: '38:6:8',
        arabic: 'آلِهَتِكُمْ',
        transliteration: 'ālihatikum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'أ ل ه',
        meaning: {
          en: 'your gods',
          ur: 'اپنے معبودوں'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun + possessive pronoun كُمْ (your, plural). Their false gods.',
          ur: 'اسم مجرور + ضمیر ملکیت كُمْ (تمہارے)۔ ان کے جھوٹے معبود۔'
        }
      },
      {
        id: '38:6:9',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['EMPH'],
        posLabel: 'EMPH',
        root: null,
        meaning: {
          en: 'Indeed',
          ur: 'بے شک'
        },
        grammarRole: 'harf_tawkeed',
        grammarExplanations: {
          en: 'Emphatic particle - continuation of their speech.',
          ur: 'حرف توکید - ان کی بات کا تسلسل۔'
        }
      },
      {
        id: '38:6:10',
        arabic: 'هَٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'this',
          ur: 'یہ'
        },
        grammarRole: 'ism_inna',
        grammarExplanations: {
          en: 'Demonstrative as subject of إِنَّ - referring to the message of Tawheed.',
          ur: 'اسم اشارہ بطور اسم إن - توحید کے پیغام کی طرف اشارہ۔'
        }
      },
      {
        id: '38:6:11',
        arabic: 'لَشَيْءٌ',
        transliteration: 'la-shay\'un',
        pos: ['EMPH', 'N'],
        posLabel: 'EMPH+N',
        root: 'ش ي أ',
        meaning: {
          en: 'surely a thing',
          ur: 'یقیناً بات'
        },
        grammarRole: 'khabar_inna',
        grammarExplanations: {
          en: 'Emphatic لَ + predicate - nominative.',
          ur: 'تاکیدی لَ + خبر - مرفوع۔'
        }
      },
      {
        id: '38:6:12',
        arabic: 'يُرَادُ',
        transliteration: 'yurādu',
        pos: ['V'],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'عطف' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'توکید' },
        { from: 10, to: 11, label: 'مبتدأ + خبر' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ],
    },
        posLabel: 'V',
        root: 'ر و د',
        meaning: {
          en: 'intended',
          ur: 'مقصود ہے'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Passive imperfect verb as adjective (صفة) for شَيْءٌ. "A thing intended/desired".',
          ur: 'فعل مضارع مجہول بطور صفت شَيْءٌ کی۔ "ایک مقصود بات"۔'
        }
      }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "مَا سَمِعْنَا بِهَٰذَا فِي الْمِلَّةِ الْآخِرَةِ إِنْ هَٰذَا إِلَّا اخْتِلَاقٌ",
    words: [
      {
        id: '38:7:1',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں'
        },
        grammarRole: 'harf_nafy',
        grammarExplanations: {
          en: 'Negative particle negating the past - "We did not hear".',
          ur: 'حرف نفی ماضی کی نفی - "ہم نے نہیں سنا"۔'
        }
      },
      {
        id: '38:7:2',
        arabic: 'سَمِعْنَا',
        transliteration: 'sami\'nā',
        pos: ['V'],
        posLabel: 'V',
        root: 'س م ع',
        meaning: {
          en: 'we heard',
          ur: 'ہم نے سنا'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Perfect verb - 1st person plural. "We heard".',
          ur: 'فعل ماضی - متکلم جمع۔ "ہم نے سنا"۔'
        }
      },
      {
        id: '38:7:3',
        arabic: 'بِهَٰذَا',
        transliteration: 'bi-hādhā',
        pos: ['PREP', 'DEM'],
        posLabel: 'PREP+DEM',
        root: null,
        meaning: {
          en: 'of this',
          ur: 'یہ بات'
        },
        grammarRole: 'jarr_majroor',
        grammarExplanations: {
          en: 'Preposition بِ + demonstrative. سَمِعَ takes بِ for what is heard about.',
          ur: 'حرف جر بِ + اسم اشارہ۔ سَمِعَ جس بات کے بارے میں سنا بِ لیتا ہے۔'
        }
      },
      {
        id: '38:7:4',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'in',
          ur: 'میں'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition indicating time/era.',
          ur: 'حرف جر زمانے کی طرف اشارہ۔'
        }
      },
      {
        id: '38:7:5',
        arabic: 'الْمِلَّةِ',
        transliteration: 'al-millati',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل ل',
        meaning: {
          en: 'the religion',
          ur: 'دین'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun - "in the religion/creed". Refers to previous religions.',
          ur: 'اسم مجرور - "دین میں"۔ پہلے مذاہب کی طرف اشارہ۔'
        }
      },
      {
        id: '38:7:6',
        arabic: 'الْآخِرَةِ',
        transliteration: 'al-ākhirati',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'أ خ ر',
        meaning: {
          en: 'the latest',
          ur: 'پچھلے'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for الْمِلَّةِ - genitive. "The latest/last religion" (Christianity).',
          ur: 'صفت الْمِلَّةِ کی - مجرور۔ "پچھلا دین" (عیسائیت)۔'
        }
      },
      {
        id: '38:7:7',
        arabic: 'إِنْ',
        transliteration: 'in',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں'
        },
        grammarRole: 'harf_nafy',
        grammarExplanations: {
          en: 'Negative particle إِنْ meaning "not" (same as مَا).',
          ur: 'حرف نفی إِنْ معنی "نہیں" (مَا کی طرح)۔'
        }
      },
      {
        id: '38:7:8',
        arabic: 'هَٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'this',
          ur: 'یہ'
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Demonstrative as subject - referring to the message.',
          ur: 'اسم اشارہ بطور مبتدأ - پیغام کی طرف اشارہ۔'
        }
      },
      {
        id: '38:7:9',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['EXCEPT'],
        posLabel: 'EXCEPT',
        root: null,
        meaning: {
          en: 'except/but',
          ur: 'سوائے'
        },
        grammarRole: 'adat_hasr',
        grammarExplanations: {
          en: 'Restriction particle - إِنْ...إِلَّا means "nothing but/only".',
          ur: 'ادات حصر - إِنْ...إِلَّا معنی "صرف/سوائے"۔'
        }
      },
      {
        id: '38:7:10',
        arabic: 'اخْتِلَاقٌ',
        transliteration: 'ikhtilāqun',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'موصوف + صفت' },
        { from: 8, to: 10, label: 'مبتدأ + خبر' }
      ],
    },
        posLabel: 'N',
        root: 'خ ل ق',
        meaning: {
          en: 'an invention',
          ur: 'گھڑی ہوئی بات'
        },
        grammarRole: 'khabar',
        grammarExplanations: {
          en: 'Predicate (خبر) - nominative. Verbal noun Form VIII meaning "fabrication".',
          ur: 'خبر - مرفوع۔ مصدر باب افتعال معنی "من گھڑت"۔'
        }
      }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "أَأُنزِلَ عَلَيْهِ الذِّكْرُ مِن بَيْنِنَا ۚ بَلْ هُمْ فِي شَكٍّ مِّن ذِكْرِي ۖ بَل لَّمَّا يَذُوقُوا عَذَابِ",
    words: [
      {
        id: '38:8:1',
        arabic: 'أَأُنزِلَ',
        transliteration: 'a-unzila',
        pos: ['INTERROG', 'V'],
        posLabel: 'INTERROG+V',
        root: 'ن ز ل',
        meaning: {
          en: 'Has been sent down',
          ur: 'کیا اتاری گئی'
        },
        grammarRole: 'verb_passive',
        grammarExplanations: {
          en: 'Double hamza (همزة الاستفهام + همزة الفعل) + passive perfect. Rhetorical disbelief.',
          ur: 'دوہرا ہمزہ (استفہام + فعل) + فعل ماضی مجہول۔ بیانیہ انکار۔'
        }
      },
      {
        id: '38:8:2',
        arabic: 'عَلَيْهِ',
        transliteration: '\'alayhi',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: {
          en: 'upon him',
          ur: 'اس پر'
        },
        grammarRole: 'jarr_majroor',
        grammarExplanations: {
          en: 'Preposition + pronoun - referring to the Prophet.',
          ur: 'حرف جر + ضمیر - نبی کی طرف اشارہ۔'
        }
      },
      {
        id: '38:8:3',
        arabic: 'الذِّكْرُ',
        transliteration: 'adh-dhikru',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        meaning: {
          en: 'the Reminder',
          ur: 'نصیحت'
        },
        grammarRole: 'naib_faa\'il',
        grammarExplanations: {
          en: 'Deputy subject (نائب الفاعل) of passive verb - nominative. The Quran.',
          ur: 'نائب فاعل فعل مجہول کا - مرفوع۔ قرآن۔'
        }
      },
      {
        id: '38:8:4',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'from',
          ur: 'سے'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition indicating source/selection from among.',
          ur: 'حرف جر ماخذ/انتخاب کی طرف اشارہ۔'
        }
      },
      {
        id: '38:8:5',
        arabic: 'بَيْنِنَا',
        transliteration: 'bayninā',
        pos: ['ADV', 'PRON'],
        posLabel: 'ADV+PRON',
        root: 'ب ي ن',
        meaning: {
          en: 'among us',
          ur: 'ہم میں سے'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Adverb of place + attached pronoun نَا (us). "From among us".',
          ur: 'ظرف مکان + ضمیر متصل نَا (ہم)۔ "ہم میں سے"۔'
        }
      },
      {
        id: '38:8:6',
        arabic: 'بَلْ',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Rather',
          ur: 'بلکہ'
        },
        grammarRole: 'harf_idrab',
        grammarExplanations: {
          en: 'Particle of digression - Allah responds to their claim.',
          ur: 'حرف اضراب - اللہ ان کے دعوے کا جواب دیتا ہے۔'
        }
      },
      {
        id: '38:8:7',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'they',
          ur: 'وہ'
        },
        grammarRole: 'mubtada',
        grammarExplanations: {
          en: 'Third person plural pronoun as subject.',
          ur: 'ضمیر غائب جمع بطور مبتدأ۔'
        }
      },
      {
        id: '38:8:8',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'in',
          ur: 'میں'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition - they are IN doubt.',
          ur: 'حرف جر - وہ شک میں ہیں۔'
        }
      },
      {
        id: '38:8:9',
        arabic: 'شَكٍّ',
        transliteration: 'shakkin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ك ك',
        meaning: {
          en: 'doubt',
          ur: 'شک'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun governed by فِي - indefinite.',
          ur: 'اسم مجرور فِي سے - نکرہ۔'
        }
      },
      {
        id: '38:8:10',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'about',
          ur: 'کے بارے میں'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition - concerning/about My reminder.',
          ur: 'حرف جر - میری نصیحت کے بارے میں۔'
        }
      },
      {
        id: '38:8:11',
        arabic: 'ذِكْرِي',
        transliteration: 'dhikrī',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ذ ك ر',
        meaning: {
          en: 'My Reminder',
          ur: 'میری نصیحت'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun + attached pronoun ي (My). Allah\'s reminder.',
          ur: 'اسم مجرور + ضمیر متصل ي (میری)۔ اللہ کی نصیحت۔'
        }
      },
      {
        id: '38:8:12',
        arabic: 'بَل',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Rather',
          ur: 'بلکہ'
        },
        grammarRole: 'harf_idrab',
        grammarExplanations: {
          en: 'Another digression - the real reason is they haven\'t tasted punishment yet.',
          ur: 'ایک اور اضراب - اصل وجہ ابھی انہوں نے عذاب نہیں چکھا۔'
        }
      },
      {
        id: '38:8:13',
        arabic: 'لَّمَّا',
        transliteration: 'lammā',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'not yet',
          ur: 'ابھی نہیں'
        },
        grammarRole: 'harf_nafy',
        grammarExplanations: {
          en: 'Negative particle for "not yet" - expects future change.',
          ur: 'حرف نفی "ابھی تک نہیں" - مستقبل کی تبدیلی متوقع۔'
        }
      },
      {
        id: '38:8:14',
        arabic: 'يَذُوقُوا',
        transliteration: 'yadhūqū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ذ و ق',
        meaning: {
          en: 'they taste',
          ur: 'چکھیں'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Imperfect verb - 3rd person masculine plural, jussive mood due to لَّمَّا.',
          ur: 'فعل مضارع - غائب مذکر جمع، مجزوم لَّمَّا کی وجہ سے۔'
        }
      },
      {
        id: '38:8:15',
        arabic: 'عَذَابِ',
        transliteration: '\'adhābi',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' },
        { from: 13, to: 14, label: 'نفی + فعل' },
        { from: 14, to: 15, label: 'فعل + مفعول به' }
      ],
    },
        posLabel: 'N',
        root: 'ع ذ ب',
        meaning: {
          en: 'My punishment',
          ur: 'میرا عذاب'
        },
        grammarRole: 'mafool_bihi',
        grammarExplanations: {
          en: 'Direct object (مفعول به) - genitive due to attached pronoun ي (implied). "My punishment".',
          ur: 'مفعول بہ - مجرور ضمیر ي (مقدر) کی وجہ سے۔ "میرا عذاب"۔'
        }
      }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "أَمْ عِندَهُمْ خَزَائِنُ رَحْمَةِ رَبِّكَ الْعَزِيزِ الْوَهَّابِ",
    words: [
      {
        id: '38:9:1',
        arabic: 'أَمْ',
        transliteration: 'am',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Or',
          ur: 'کیا'
        },
        grammarRole: 'harf_idrab',
        grammarExplanations: {
          en: 'Interrogative/disjunctive particle - rhetorical question.',
          ur: 'حرف استفہام/اضراب - بیانیہ سوال۔'
        }
      },
      {
        id: '38:9:2',
        arabic: 'عِندَهُمْ',
        transliteration: '\'indahum',
        pos: ['ADV', 'PRON'],
        posLabel: 'ADV+PRON',
        root: 'ع ن د',
        meaning: {
          en: 'with them',
          ur: 'ان کے پاس'
        },
        grammarRole: 'khabar_muqaddam',
        grammarExplanations: {
          en: 'Adverb of place + pronoun as front-loaded predicate (خبر مقدم).',
          ur: 'ظرف مکان + ضمیر بطور خبر مقدم۔'
        }
      },
      {
        id: '38:9:3',
        arabic: 'خَزَائِنُ',
        transliteration: 'khazā\'inu',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ز ن',
        meaning: {
          en: 'treasures',
          ur: 'خزانے'
        },
        grammarRole: 'mubtada_muakhkhar',
        grammarExplanations: {
          en: 'Delayed subject (مبتدأ مؤخر) - nominative. Plural of خزينة.',
          ur: 'مبتدأ مؤخر - مرفوع۔ خزینہ کی جمع۔'
        }
      },
      {
        id: '38:9:4',
        arabic: 'رَحْمَةِ',
        transliteration: 'raḥmati',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ح م',
        meaning: {
          en: 'of the mercy',
          ur: 'رحمت کے'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) in idafa with خَزَائِنُ.',
          ur: 'مضاف إليه خَزَائِنُ کی اضافت میں۔'
        }
      },
      {
        id: '38:9:5',
        arabic: 'رَبِّكَ',
        transliteration: 'rabbika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: {
          en: 'of your Lord',
          ur: 'تیرے رب کی'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive in second idafa + attached pronoun كَ (your, singular).',
          ur: 'دوسری اضافت میں مجرور + ضمیر متصل كَ (تیرے)۔'
        }
      },
      {
        id: '38:9:6',
        arabic: 'الْعَزِيزِ',
        transliteration: 'al-\'azīzi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ز ز',
        meaning: {
          en: 'the Mighty',
          ur: 'غالب'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for رَبِّكَ - genitive to match. Divine name.',
          ur: 'صفت رَبِّكَ کی - مجرور مطابقت کے لیے۔ اسم الٰہی۔'
        }
      },
      {
        id: '38:9:7',
        arabic: 'الْوَهَّابِ',
        transliteration: 'al-wahhābi',
        pos: ['ADJ'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'ADJ',
        root: 'و ه ب',
        meaning: {
          en: 'the Bestower',
          ur: 'بڑا عطا کرنے والا'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Second adjective for رَبِّكَ - intensive form (فَعَّال) meaning "constantly bestowing".',
          ur: 'دوسری صفت رَبِّكَ کی - صیغہ مبالغہ (فَعَّال) معنی "ہمیشہ عطا کرنے والا"۔'
        }
      }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "أَمْ لَهُم مُّلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا ۖ فَلْيَرْتَقُوا فِي الْأَسْبَابِ",
    words: [
      {
        id: '38:10:1',
        arabic: 'أَمْ',
        transliteration: 'am',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Or',
          ur: 'کیا'
        },
        grammarRole: 'harf_idrab',
        grammarExplanations: {
          en: 'Interrogative particle - continuing rhetorical questions.',
          ur: 'حرف استفہام - بیانیہ سوالات کا تسلسل۔'
        }
      },
      {
        id: '38:10:2',
        arabic: 'لَهُم',
        transliteration: 'lahum',
        pos: ['PREP', 'PRON'],
        posLabel: 'PREP+PRON',
        root: null,
        meaning: {
          en: 'do they have',
          ur: 'کیا ان کے پاس'
        },
        grammarRole: 'khabar_muqaddam',
        grammarExplanations: {
          en: 'Preposition لِ + pronoun as front-loaded predicate.',
          ur: 'حرف جر لِ + ضمیر بطور خبر مقدم۔'
        }
      },
      {
        id: '38:10:3',
        arabic: 'مُّلْكُ',
        transliteration: 'mulku',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل ك',
        meaning: {
          en: 'dominion',
          ur: 'بادشاہت'
        },
        grammarRole: 'mubtada_muakhkhar',
        grammarExplanations: {
          en: 'Delayed subject (مبتدأ مؤخر) - nominative.',
          ur: 'مبتدأ مؤخر - مرفوع۔'
        }
      },
      {
        id: '38:10:4',
        arabic: 'السَّمَاوَاتِ',
        transliteration: 'as-samāwāti',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: {
          en: 'of the heavens',
          ur: 'آسمانوں کی'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) in idafa with مُّلْكُ.',
          ur: 'مضاف إليه مُّلْكُ کی اضافت میں۔'
        }
      },
      {
        id: '38:10:5',
        arabic: 'وَالْأَرْضِ',
        transliteration: 'wal-arḍi',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'أ ر ض',
        meaning: {
          en: 'and the earth',
          ur: 'اور زمین'
        },
        grammarRole: 'matoof',
        grammarExplanations: {
          en: 'Conjunction + conjoined genitive noun.',
          ur: 'حرف عطف + معطوف مجرور۔'
        }
      },
      {
        id: '38:10:6',
        arabic: 'وَمَا',
        transliteration: 'wa-mā',
        pos: ['CONJ', 'REL'],
        posLabel: 'CONJ+REL',
        root: null,
        meaning: {
          en: 'and whatever',
          ur: 'اور جو کچھ'
        },
        grammarRole: 'matoof',
        grammarExplanations: {
          en: 'Conjunction + relative pronoun.',
          ur: 'حرف عطف + اسم موصول۔'
        }
      },
      {
        id: '38:10:7',
        arabic: 'بَيْنَهُمَا',
        transliteration: 'baynahumā',
        pos: ['ADV', 'PRON'],
        posLabel: 'ADV+PRON',
        root: 'ب ي ن',
        meaning: {
          en: 'is between them',
          ur: 'ان کے درمیان ہے'
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Adverb + dual pronoun as relative clause. "What is between them".',
          ur: 'ظرف + ضمیر تثنیہ بطور صلہ۔ "جو ان کے درمیان ہے"۔'
        }
      },
      {
        id: '38:10:8',
        arabic: 'فَلْيَرْتَقُوا',
        transliteration: 'fal-yartaqū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر ق ي',
        meaning: {
          en: 'Then let them ascend',
          ur: 'تو چڑھ جائیں'
        },
        grammarRole: 'verb_amr',
        grammarExplanations: {
          en: 'Conjunction فَ + لِ command particle + jussive verb Form VIII. Sarcastic challenge.',
          ur: 'حرف عطف فَ + لام امر + فعل مضارع مجزوم باب افتعال۔ طنزیہ چیلنج۔'
        }
      },
      {
        id: '38:10:9',
        arabic: 'فِي',
        transliteration: 'fī',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'through',
          ur: 'میں'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition - ascending through/by means of.',
          ur: 'حرف جر - کے ذریعے چڑھنا۔'
        }
      },
      {
        id: '38:10:10',
        arabic: 'الْأَسْبَابِ',
        transliteration: 'al-asbābi',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 6, label: 'عطف' },
        { from: 4, to: 7, label: 'عطف' },
        { from: 7, to: 8, label: 'موصول + صلة' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
        posLabel: 'N',
        root: 'س ب ب',
        meaning: {
          en: 'the means/ropes',
          ur: 'رسیوں'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun - plural of سَبَب. Means "ropes/means/ways" to reach the heavens.',
          ur: 'اسم مجرور - سَبَب کی جمع۔ معنی "رسیاں/ذرائع" آسمانوں تک پہنچنے کے۔'
        }
      }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "جُندٌۭ مَّا هُنَالِكَ مَهْزُومٌۭ مِّنَ ٱلْأَحْزَابِ",
    words: [
      { arabic: "جُندٌۭ", transliteration: "jundun", meaning: { en: "Soldiers ", ur: "Soldiers " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "there", ur: "there" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُنَالِكَ", transliteration: "hunālika", meaning: { en: "there", ur: "there" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَهْزُومٌۭ", transliteration: "mahzūmun", meaning: { en: "(they will be) defeated", ur: "(وہ لوگ will be) defeated" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "among", ur: "among" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَحْزَابِ", transliteration: "l-aḥzābi", meaning: { en: "the companies", ur: "the companies" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  12: {
    ayahNumber: 12,
    text: "كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍۢ وَعَادٌۭ وَفِرْعَوْنُ ذُو ٱلْأَوْتَادِ",
    words: [
      { arabic: "كَذَّبَتْ", transliteration: "kadhabat", meaning: { en: "Denied", ur: "Denied" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "قَبْلَهُمْ", transliteration: "qablahum", meaning: { en: "before them", ur: "پہلے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَوْمُ", transliteration: "qawmu", meaning: { en: "(the) people", ur: "(the) لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نُوحٍۢ", transliteration: "nūḥin", meaning: { en: "(of) Nuh", ur: "(of) Nuh" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَادٌۭ", transliteration: "waʿādun", meaning: { en: "and Aad", ur: "اور Aad" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَفِرْعَوْنُ", transliteration: "wafir'ʿawnu", meaning: { en: "and Firaun", ur: "اور Firaun" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ذُو", transliteration: "dhū", meaning: { en: "(the) owner", ur: "(the) owner" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَوْتَادِ", transliteration: "l-awtādi", meaning: { en: "(of) the stakes", ur: "(of) the stakes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  13: {
    ayahNumber: 13,
    text: "وَثَمُودُ وَقَوْمُ لُوطٍۢ وَأَصْحَـٰبُ لْـَٔيْكَةِ ۚ أُو۟لَـٰٓئِكَ ٱلْأَحْزَابُ",
    words: [
      { arabic: "وَثَمُودُ", transliteration: "wathamūdu", meaning: { en: "And Thamud", ur: "اور Thamud" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَقَوْمُ", transliteration: "waqawmu", meaning: { en: "and (the) people", ur: "اور (the) لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لُوطٍۢ", transliteration: "lūṭin", meaning: { en: "(of) Lut", ur: "(of) Lut" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَصْحَـٰبُ", transliteration: "wa-aṣḥābu", meaning: { en: "and (the) companions", ur: "اور (the) companions" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لْـَٔيْكَةِ ۚ", transliteration: "al'aykati", meaning: { en: "(of) the wood", ur: "(of) the wood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أُو۟لَـٰٓئِكَ", transliteration: "ulāika", meaning: { en: "Those", ur: "Those" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَحْزَابُ", transliteration: "l-aḥzābu", meaning: { en: "(were) the companies", ur: "(were) the companies" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  14: {
    ayahNumber: 14,
    text: "إِن كُلٌّ إِلَّا كَذَّبَ ٱلرُّسُلَ فَحَقَّ عِقَابِ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلٌّ", transliteration: "kullun", meaning: { en: "all (of them)", ur: "سب (of them)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَذَّبَ", transliteration: "kadhaba", meaning: { en: "denied", ur: "denied" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلرُّسُلَ", transliteration: "l-rusula", meaning: { en: "the Messengers", ur: "the Messengers" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَحَقَّ", transliteration: "faḥaqqa", meaning: { en: "so (was) just", ur: "so (was) just" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "عِقَابِ", transliteration: "ʿiqābi", meaning: { en: "My penalty", ur: "My penalty" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  15: {
    ayahNumber: 15,
    text: "وَمَا يَنظُرُ هَـٰٓؤُلَآءِ إِلَّا صَيْحَةًۭ وَٰحِدَةًۭ مَّا لَهَا مِن فَوَاقٍۢ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "يَنظُرُ", transliteration: "yanẓuru", meaning: { en: "await", ur: "await" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰٓؤُلَآءِ", transliteration: "hāulāi", meaning: { en: "these", ur: "these" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "but", ur: "لیکن" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَيْحَةًۭ", transliteration: "ṣayḥatan", meaning: { en: "a shout", ur: "a shout" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٰحِدَةًۭ", transliteration: "wāḥidatan", meaning: { en: "one", ur: "one" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهَا", transliteration: "lahā", meaning: { en: "for it", ur: "for it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "فَوَاقٍۢ", transliteration: "fawāqin", meaning: { en: "delay", ur: "delay" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  16: {
    ayahNumber: 16,
    text: "وَقَالُوا۟ رَبَّنَا عَجِّل لَّنَا قِطَّنَا قَبْلَ يَوْمِ ٱلْحِسَابِ",
    words: [
      { arabic: "وَقَالُوا۟", transliteration: "waqālū", meaning: { en: "And they say", ur: "اور وہ لوگ کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "Our رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَجِّل", transliteration: "ʿajjil", meaning: { en: "Hasten", ur: "Hasten" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّنَا", transliteration: "lanā", meaning: { en: "for us", ur: "for us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قِطَّنَا", transliteration: "qiṭṭanā", meaning: { en: "our share", ur: "our share" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَبْلَ", transliteration: "qabla", meaning: { en: "before", ur: "پہلے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَوْمِ", transliteration: "yawmi", meaning: { en: "(the) Day", ur: "(the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحِسَابِ", transliteration: "l-ḥisābi", meaning: { en: "(of) the Account", ur: "(of) the Account" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  17: {
    ayahNumber: 17,
    text: "ٱصْبِرْ عَلَىٰ مَا يَقُولُونَ وَٱذْكُرْ عَبْدَنَا دَاوُۥدَ ذَا ٱلْأَيْدِ ۖ إِنَّهُۥٓ أَوَّابٌ",
    words: [
      { arabic: "ٱصْبِرْ", transliteration: "iṣ'bir", meaning: { en: "Be patient", ur: "Be patient" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "over", ur: "اوپر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "what", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "يَقُولُونَ", transliteration: "yaqūlūna", meaning: { en: "they say", ur: "وہ لوگ کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَٱذْكُرْ", transliteration: "wa-udh'kur", meaning: { en: "and remember", ur: "اور remember" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَبْدَنَا", transliteration: "ʿabdanā", meaning: { en: "Our slave", ur: "Our slave" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَاوُۥدَ", transliteration: "dāwūda", meaning: { en: "Dawood", ur: "Dawood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَا", transliteration: "dhā", meaning: { en: "the possessor of strength", ur: "the possessor of strength" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَيْدِ ۖ", transliteration: "l-aydi", meaning: { en: "the possessor of strength", ur: "the possessor of strength" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥٓ", transliteration: "innahu", meaning: { en: "Indeed, he (was)", ur: "بیشک, وہ (was)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوَّابٌ", transliteration: "awwābun", meaning: { en: "repeatedly turning", ur: "repeatedly turning" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' },
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  18: {
    ayahNumber: 18,
    text: "إِنَّا سَخَّرْنَا ٱلْجِبَالَ مَعَهُۥ يُسَبِّحْنَ بِٱلْعَشِىِّ وَٱلْإِشْرَاقِ",
    words: [
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَخَّرْنَا", transliteration: "sakharnā", meaning: { en: "subjected", ur: "subjected" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْجِبَالَ", transliteration: "l-jibāla", meaning: { en: "the mountains", ur: "the mountains" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَعَهُۥ", transliteration: "maʿahu", meaning: { en: "with him", ur: "ساتھ him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُسَبِّحْنَ", transliteration: "yusabbiḥ'na", meaning: { en: "glorifying", ur: "glorifying" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْعَشِىِّ", transliteration: "bil-ʿashiyi", meaning: { en: "in the evening", ur: "میں the evening" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَٱلْإِشْرَاقِ", transliteration: "wal-ish'rāqi", meaning: { en: "and [the] sunrise", ur: "اور [the] sunrise" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  19: {
    ayahNumber: 19,
    text: "وَٱلطَّيْرَ مَحْشُورَةًۭ ۖ كُلٌّۭ لَّهُۥٓ أَوَّابٌۭ",
    words: [
      { arabic: "وَٱلطَّيْرَ", transliteration: "wal-ṭayra", meaning: { en: "And the birds", ur: "اور the birds" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَحْشُورَةًۭ ۖ", transliteration: "maḥshūratan", meaning: { en: "assembled", ur: "assembled" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "كُلٌّۭ", transliteration: "kullun", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّهُۥٓ", transliteration: "lahu", meaning: { en: "with him", ur: "ساتھ him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوَّابٌۭ", transliteration: "awwābun", meaning: { en: "repeatedly turning", ur: "repeatedly turning" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  20: {
    ayahNumber: 20,
    text: "وَشَدَدْنَا مُلْكَهُۥ وَءَاتَيْنَـٰهُ ٱلْحِكْمَةَ وَفَصْلَ ٱلْخِطَابِ",
    words: [
      { arabic: "وَشَدَدْنَا", transliteration: "washadadnā", meaning: { en: "And We strengthened", ur: "اور ہم strengthened" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُلْكَهُۥ", transliteration: "mul'kahu", meaning: { en: "his kingdom", ur: "his kingdom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَءَاتَيْنَـٰهُ", transliteration: "waātaynāhu", meaning: { en: "and We gave him", ur: "اور ہم gave him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْحِكْمَةَ", transliteration: "l-ḥik'mata", meaning: { en: "[the] wisdom", ur: "[the] wisdom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَفَصْلَ", transliteration: "wafaṣla", meaning: { en: "and decisive", ur: "اور decisive" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْخِطَابِ", transliteration: "l-khiṭābi", meaning: { en: "speech", ur: "speech" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  21: {
    ayahNumber: 21,
    text: "۞ وَهَلْ أَتَىٰكَ نَبَؤُا۟ ٱلْخَصْمِ إِذْ تَسَوَّرُوا۟ ٱلْمِحْرَابَ",
    words: [
      { arabic: "۞ وَهَلْ", transliteration: "wahal", meaning: { en: "And has (there)", ur: "اور has (there)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَتَىٰكَ", transliteration: "atāka", meaning: { en: "come to you", ur: "come کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَبَؤُا۟", transliteration: "naba-u", meaning: { en: "(the) news", ur: "(the) news" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْخَصْمِ", transliteration: "l-khaṣmi", meaning: { en: "(of) the litigants", ur: "(of) the litigants" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَسَوَّرُوا۟", transliteration: "tasawwarū", meaning: { en: "they climbed over the wall", ur: "وہ لوگ climbed اوپر the wall" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمِحْرَابَ", transliteration: "l-miḥ'rāba", meaning: { en: "(of) the chamber", ur: "(of) the chamber" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'فعل + فاعل' }
      ],
    },
  },
  22: {
    ayahNumber: 22,
    text: "إِذْ دَخَلُوا۟ عَلَىٰ دَاوُۥدَ فَفَزِعَ مِنْهُمْ ۖ قَالُوا۟ لَا تَخَفْ ۖ خَصْمَانِ بَغَىٰ بَعْضُنَا عَلَىٰ بَعْضٍۢ فَٱحْكُم بَيْنَنَا بِٱلْحَقِّ وَلَا تُشْطِطْ وَٱهْدِنَآ إِلَىٰ سَوَآءِ ٱلصِّرَٰطِ",
    words: [
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "When" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "دَخَلُوا۟", transliteration: "dakhalū", meaning: { en: "they entered", ur: "وہ لوگ entered" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "upon", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "دَاوُۥدَ", transliteration: "dāwūda", meaning: { en: "Dawood", ur: "Dawood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَفَزِعَ", transliteration: "fafaziʿa", meaning: { en: "and he was afraid", ur: "اور وہ was afraid" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مِنْهُمْ ۖ", transliteration: "min'hum", meaning: { en: "of them", ur: "of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "they said", ur: "وہ لوگ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "(Do) not", ur: "(Do) نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "تَخَفْ ۖ", transliteration: "takhaf", meaning: { en: "fear", ur: "ڈرنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "خَصْمَانِ", transliteration: "khaṣmāni", meaning: { en: "(We are) two litigants", ur: "(ہم are) two litigants" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَغَىٰ", transliteration: "baghā", meaning: { en: "has wronged", ur: "has wronged" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْضُنَا", transliteration: "baʿḍunā", meaning: { en: "one of us", ur: "one of us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْضٍۢ", transliteration: "baʿḍin", meaning: { en: "another", ur: "another" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱحْكُم", transliteration: "fa-uḥ'kum", meaning: { en: "so judge", ur: "so judge" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بَيْنَنَا", transliteration: "baynanā", meaning: { en: "between us", ur: "درمیان us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "in truth", ur: "میں سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and (do) not", ur: "اور (do) نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تُشْطِطْ", transliteration: "tush'ṭiṭ", meaning: { en: "be unjust", ur: "be unjust" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَٱهْدِنَآ", transliteration: "wa-ih'dinā", meaning: { en: "and guide us", ur: "اور guide us" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَوَآءِ", transliteration: "sawāi", meaning: { en: "an even", ur: "an even" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلصِّرَٰطِ", transliteration: "l-ṣirāṭi", meaning: { en: "[the] path", ur: "[the] راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'نفی + فعل' },
        { from: 9, to: 10, label: 'فعل + فاعل' },
        { from: 11, to: 12, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'جار + مجرور' },
        { from: 21, to: 22, label: 'جار + مجرور' }
      ],
    },
  },
  23: {
    ayahNumber: 23,
    text: "إِنَّ هَـٰذَآ أَخِى لَهُۥ تِسْعٌۭ وَتِسْعُونَ نَعْجَةًۭ وَلِىَ نَعْجَةٌۭ وَٰحِدَةٌۭ فَقَالَ أَكْفِلْنِيهَا وَعَزَّنِى فِى ٱلْخِطَابِ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰذَآ", transliteration: "hādhā", meaning: { en: "this", ur: "this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخِى", transliteration: "akhī", meaning: { en: "(is) my brother", ur: "(is) my brother" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "he has", ur: "وہ has" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "تِسْعٌۭ", transliteration: "tis'ʿun", meaning: { en: "ninety-nine", ur: "ninety-nine" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَتِسْعُونَ", transliteration: "watis'ʿūna", meaning: { en: "ninety-nine", ur: "ninety-nine" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَعْجَةًۭ", transliteration: "naʿjatan", meaning: { en: "ewe(s)", ur: "ewe(s)" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَلِىَ", transliteration: "waliya", meaning: { en: "while I have", ur: "while میں have" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَعْجَةٌۭ", transliteration: "naʿjatun", meaning: { en: "ewe", ur: "ewe" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَٰحِدَةٌۭ", transliteration: "wāḥidatun", meaning: { en: "one", ur: "one" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَقَالَ", transliteration: "faqāla", meaning: { en: "so he said", ur: "so وہ کہا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَكْفِلْنِيهَا", transliteration: "akfil'nīhā", meaning: { en: "Entrust her to me", ur: "Entrust her کو me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَزَّنِى", transliteration: "waʿazzanī", meaning: { en: "and he overpowered me", ur: "اور وہ overpowered me" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْخِطَابِ", transliteration: "l-khiṭābi", meaning: { en: "[the] speech", ur: "[the] speech" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ],
    },
  },
  24: {
    ayahNumber: 24,
    text: "قَالَ لَقَدْ ظَلَمَكَ بِسُؤَالِ نَعْجَتِكَ إِلَىٰ نِعَاجِهِۦ ۖ وَإِنَّ كَثِيرًۭا مِّنَ ٱلْخُلَطَآءِ لَيَبْغِى بَعْضُهُمْ عَلَىٰ بَعْضٍ إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ وَقَلِيلٌۭ مَّا هُمْ ۗ وَظَنَّ دَاوُۥدُ أَنَّمَا فَتَنَّـٰهُ فَٱسْتَغْفَرَ رَبَّهُۥ وَخَرَّ رَاكِعًۭا وَأَنَابَ ۩",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَقَدْ", transliteration: "laqad", meaning: { en: "Certainly", ur: "Certainly" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ظَلَمَكَ", transliteration: "ẓalamaka", meaning: { en: "he has wronged you", ur: "وہ has wronged تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِسُؤَالِ", transliteration: "bisuāli", meaning: { en: "by demanding", ur: "by demanding" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "نَعْجَتِكَ", transliteration: "naʿjatika", meaning: { en: "your ewe", ur: "your ewe" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "to", ur: "کو" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نِعَاجِهِۦ ۖ", transliteration: "niʿājihi", meaning: { en: "his ewes", ur: "his ewes" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كَثِيرًۭا", transliteration: "kathīran", meaning: { en: "many", ur: "many" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْخُلَطَآءِ", transliteration: "l-khulaṭāi", meaning: { en: "the partners", ur: "the partners" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَيَبْغِى", transliteration: "layabghī", meaning: { en: "certainly oppress", ur: "certainly oppress" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْضُهُمْ", transliteration: "baʿḍuhum", meaning: { en: "some of them", ur: "some of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "[on]", ur: "[پر]" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "بَعْضٍ", transliteration: "baʿḍin", meaning: { en: "another", ur: "another" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", meaning: { en: "and do", ur: "اور do" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک deeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَقَلِيلٌۭ", transliteration: "waqalīlun", meaning: { en: "and few", ur: "اور few" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَّا", transliteration: "mā", meaning: { en: "(are) they", ur: "(are) وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُمْ ۗ", transliteration: "hum", meaning: { en: "(are) they", ur: "(are) وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَظَنَّ", transliteration: "waẓanna", meaning: { en: "And became certain", ur: "اور became certain" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "دَاوُۥدُ", transliteration: "dāwūdu", meaning: { en: "Dawood", ur: "Dawood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّمَا", transliteration: "annamā", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَتَنَّـٰهُ", transliteration: "fatannāhu", meaning: { en: "We (had) tried him", ur: "ہم (had) tried him" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "فَٱسْتَغْفَرَ", transliteration: "fa-is'taghfara", meaning: { en: "and he asked forgiveness", ur: "اور وہ asked مغفرت" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "رَبَّهُۥ", transliteration: "rabbahu", meaning: { en: "(of) his Lord", ur: "(of) his رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَخَرَّ", transliteration: "wakharra", meaning: { en: "and fell down", ur: "اور fell down" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "رَاكِعًۭا", transliteration: "rākiʿan", meaning: { en: "bowing", ur: "bowing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَأَنَابَ ۩", transliteration: "wa-anāba", meaning: { en: "and turned in repentance", ur: "اور turned میں repentance" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' },
        { from: 12, to: 13, label: 'مضاف + مضاف إليه' },
        { from: 14, to: 15, label: 'جار + مجرور' }
      ],
    },
  },
  25: {
    ayahNumber: 25,
    text: "فَغَفَرْنَا لَهُۥ ذَٰلِكَ ۖ وَإِنَّ لَهُۥ عِندَنَا لَزُلْفَىٰ وَحُسْنَ مَـَٔابٍۢ",
    words: [
      { arabic: "فَغَفَرْنَا", transliteration: "faghafarnā", meaning: { en: "So We forgave", ur: "So ہم forgave" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَٰلِكَ ۖ", transliteration: "dhālika", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِندَنَا", transliteration: "ʿindanā", meaning: { en: "with Us", ur: "ساتھ Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَزُلْفَىٰ", transliteration: "lazul'fā", meaning: { en: "surely is a near access", ur: "یقیناً is a near access" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَحُسْنَ", transliteration: "waḥus'na", meaning: { en: "and a good", ur: "اور a اچھا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَـَٔابٍۢ", transliteration: "maābin", meaning: { en: "place of return", ur: "place of return" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  26: {
    ayahNumber: 26,
    text: "يَـٰدَاوُۥدُ إِنَّا جَعَلْنَـٰكَ خَلِيفَةًۭ فِى ٱلْأَرْضِ فَٱحْكُم بَيْنَ ٱلنَّاسِ بِٱلْحَقِّ وَلَا تَتَّبِعِ ٱلْهَوَىٰ فَيُضِلَّكَ عَن سَبِيلِ ٱللَّهِ ۚ إِنَّ ٱلَّذِينَ يَضِلُّونَ عَن سَبِيلِ ٱللَّهِ لَهُمْ عَذَابٌۭ شَدِيدٌۢ بِمَا نَسُوا۟ يَوْمَ ٱلْحِسَابِ",
    words: [
      { arabic: "يَـٰدَاوُۥدُ", transliteration: "yādāwūdu", meaning: { en: "O Dawood", ur: "اے Dawood" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَعَلْنَـٰكَ", transliteration: "jaʿalnāka", meaning: { en: "[We] have made you", ur: "[ہم] have made تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلِيفَةًۭ", transliteration: "khalīfatan", meaning: { en: "a vicegerent", ur: "a vicegerent" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱحْكُم", transliteration: "fa-uḥ'kum", meaning: { en: "so judge", ur: "so judge" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بَيْنَ", transliteration: "bayna", meaning: { en: "between", ur: "درمیان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّاسِ", transliteration: "l-nāsi", meaning: { en: "[the] men", ur: "[the] men" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْحَقِّ", transliteration: "bil-ḥaqi", meaning: { en: "in truth", ur: "میں سچ" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and (do) not", ur: "اور (do) نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَتَّبِعِ", transliteration: "tattabiʿi", meaning: { en: "follow", ur: "follow" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْهَوَىٰ", transliteration: "l-hawā", meaning: { en: "the desire", ur: "the desire" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَيُضِلَّكَ", transliteration: "fayuḍillaka", meaning: { en: "for it will lead you astray", ur: "for it will lead تم astray" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "(the) way", ur: "(the) راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ ۚ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَضِلُّونَ", transliteration: "yaḍillūna", meaning: { en: "go astray", ur: "go astray" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "سَبِيلِ", transliteration: "sabīli", meaning: { en: "(the) way", ur: "(the) راستہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهِ", transliteration: "l-lahi", meaning: { en: "(of) Allah", ur: "(of) اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَهُمْ", transliteration: "lahum", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَذَابٌۭ", transliteration: "ʿadhābun", meaning: { en: "(is) a punishment", ur: "(is) a عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "شَدِيدٌۢ", transliteration: "shadīdun", meaning: { en: "severe", ur: "severe" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِمَا", transliteration: "bimā", meaning: { en: "because", ur: "because" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "نَسُوا۟", transliteration: "nasū", meaning: { en: "they forgot", ur: "وہ لوگ forgot" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَوْمَ", transliteration: "yawma", meaning: { en: "(the) Day", ur: "(the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْحِسَابِ", transliteration: "l-ḥisābi", meaning: { en: "(of) Account", ur: "(of) Account" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'جار + مجرور' },
        { from: 18, to: 19, label: 'فعل + فاعل' },
        { from: 21, to: 22, label: 'جار + مجرور' },
        { from: 29, to: 30, label: 'فعل + فاعل' }
      ],
    },
  },
  27: {
    ayahNumber: 27,
    text: "وَمَا خَلَقْنَا ٱلسَّمَآءَ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا بَـٰطِلًۭا ۚ ذَٰلِكَ ظَنُّ ٱلَّذِينَ كَفَرُوا۟ ۚ فَوَيْلٌۭ لِّلَّذِينَ كَفَرُوا۟ مِنَ ٱلنَّارِ",
    words: [
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "And not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "خَلَقْنَا", transliteration: "khalaqnā", meaning: { en: "We created", ur: "ہم پیدا کیا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلسَّمَآءَ", transliteration: "l-samāa", meaning: { en: "the heaven", ur: "the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضَ", transliteration: "wal-arḍa", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور whatever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "(is) between them", ur: "(is) درمیان them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَـٰطِلًۭا ۚ", transliteration: "bāṭilan", meaning: { en: "without purpose", ur: "without purpose" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "That", ur: "وہ" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "ظَنُّ", transliteration: "ẓannu", meaning: { en: "(is the) assumption", ur: "(is the) assumption" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "(of) those who", ur: "(of) جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟ ۚ", transliteration: "kafarū", meaning: { en: "disbelieve", ur: "disbelieve" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَوَيْلٌۭ", transliteration: "fawaylun", meaning: { en: "So woe", ur: "So woe" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لِّلَّذِينَ", transliteration: "lilladhīna", meaning: { en: "to those", ur: "کو those" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَفَرُوا۟", transliteration: "kafarū", meaning: { en: "who disbelieve", ur: "جو disbelieve" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "the Fire", ur: "the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 15, to: 16, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  28: {
    ayahNumber: 28,
    text: "أَمْ نَجْعَلُ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ كَٱلْمُفْسِدِينَ فِى ٱلْأَرْضِ أَمْ نَجْعَلُ ٱلْمُتَّقِينَ كَٱلْفُجَّارِ",
    words: [
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "نَجْعَلُ", transliteration: "najʿalu", meaning: { en: "should We treat", ur: "should ہم treat" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلَّذِينَ", transliteration: "alladhīna", meaning: { en: "those who", ur: "جو لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَامَنُوا۟", transliteration: "āmanū", meaning: { en: "believe", ur: "ایمان لانا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَعَمِلُوا۟", transliteration: "waʿamilū", meaning: { en: "and do", ur: "اور do" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلصَّـٰلِحَـٰتِ", transliteration: "l-ṣāliḥāti", meaning: { en: "righteous deeds", ur: "نیک deeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كَٱلْمُفْسِدِينَ", transliteration: "kal-muf'sidīna", meaning: { en: "like those who spread corruption", ur: "like جو لوگ spread corruption" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَرْضِ", transliteration: "l-arḍi", meaning: { en: "the earth", ur: "زمین" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "Or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "نَجْعَلُ", transliteration: "najʿalu", meaning: { en: "should We treat", ur: "should ہم treat" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْمُتَّقِينَ", transliteration: "l-mutaqīna", meaning: { en: "the pious", ur: "the pious" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "كَٱلْفُجَّارِ", transliteration: "kal-fujāri", meaning: { en: "like the wicked", ur: "like the wicked" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'جار + مجرور' }
      ],
    },
  },
  29: {
    ayahNumber: 29,
    text: "كِتَـٰبٌ أَنزَلْنَـٰهُ إِلَيْكَ مُبَـٰرَكٌۭ لِّيَدَّبَّرُوٓا۟ ءَايَـٰتِهِۦ وَلِيَتَذَكَّرَ أُو۟لُوا۟ ٱلْأَلْبَـٰبِ",
    words: [
      { arabic: "كِتَـٰبٌ", transliteration: "kitābun", meaning: { en: "(This is) a Book", ur: "(This is) a کتاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنزَلْنَـٰهُ", transliteration: "anzalnāhu", meaning: { en: "We have revealed it", ur: "ہم have revealed it" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَيْكَ", transliteration: "ilayka", meaning: { en: "to you", ur: "کو تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُبَـٰرَكٌۭ", transliteration: "mubārakun", meaning: { en: "blessed", ur: "blessed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِّيَدَّبَّرُوٓا۟", transliteration: "liyaddabbarū", meaning: { en: "that they may ponder", ur: "وہ وہ لوگ may ponder" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ءَايَـٰتِهِۦ", transliteration: "āyātihi", meaning: { en: "(over) its Verses", ur: "(اوپر) its Verses" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلِيَتَذَكَّرَ", transliteration: "waliyatadhakkara", meaning: { en: "and may be reminded", ur: "اور may be reminded" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أُو۟لُوا۟", transliteration: "ulū", meaning: { en: "those of understanding", ur: "those of understanding" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْأَلْبَـٰبِ", transliteration: "l-albābi", meaning: { en: "those of understanding", ur: "those of understanding" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'فعل + فاعل' }
      ],
    },
  },
  30: {
    ayahNumber: 30,
    text: "وَوَهَبْنَا لِدَاوُۥدَ سُلَيْمَـٰنَ ۚ نِعْمَ ٱلْعَبْدُ ۖ إِنَّهُۥٓ أَوَّابٌ",
    words: [
      { arabic: "وَوَهَبْنَا", transliteration: "wawahabnā", meaning: { en: "And We gave", ur: "اور ہم gave" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِدَاوُۥدَ", transliteration: "lidāwūda", meaning: { en: "to Dawood", ur: "کو Dawood" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "سُلَيْمَـٰنَ ۚ", transliteration: "sulaymāna", meaning: { en: "Sulaiman", ur: "Sulaiman" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نِعْمَ", transliteration: "niʿ'ma", meaning: { en: "an excellent", ur: "an excellent" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَبْدُ ۖ", transliteration: "l-ʿabdu", meaning: { en: "slave", ur: "slave" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥٓ", transliteration: "innahu", meaning: { en: "Indeed, he", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوَّابٌ", transliteration: "awwābun", meaning: { en: "(was) one who repeatedly turned", ur: "(was) one جو repeatedly turned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  31: {
    ayahNumber: 31,
    text: "إِذْ عُرِضَ عَلَيْهِ بِٱلْعَشِىِّ ٱلصَّـٰفِنَـٰتُ ٱلْجِيَادُ",
    words: [
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "When" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عُرِضَ", transliteration: "ʿuriḍa", meaning: { en: "were displayed", ur: "were displayed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "to him", ur: "کو him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْعَشِىِّ", transliteration: "bil-ʿashiyi", meaning: { en: "in the afternoon", ur: "میں the afternoon" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلصَّـٰفِنَـٰتُ", transliteration: "l-ṣāfinātu", meaning: { en: "excellent bred steeds", ur: "excellent bred steeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْجِيَادُ", transliteration: "l-jiyādu", meaning: { en: "excellent bred steeds", ur: "excellent bred steeds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  32: {
    ayahNumber: 32,
    text: "فَقَالَ إِنِّىٓ أَحْبَبْتُ حُبَّ ٱلْخَيْرِ عَن ذِكْرِ رَبِّى حَتَّىٰ تَوَارَتْ بِٱلْحِجَابِ",
    words: [
      { arabic: "فَقَالَ", transliteration: "faqāla", meaning: { en: "And he said", ur: "اور وہ کہا" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِنِّىٓ", transliteration: "innī", meaning: { en: "Indeed, I", ur: "بیشک, میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَحْبَبْتُ", transliteration: "aḥbabtu", meaning: { en: "[I] preferred", ur: "[میں] preferred" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "حُبَّ", transliteration: "ḥubba", meaning: { en: "(the) love", ur: "(the) love" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْخَيْرِ", transliteration: "l-khayri", meaning: { en: "(of) the good", ur: "(of) the اچھا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَن", transliteration: "ʿan", meaning: { en: "over", ur: "اوپر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ذِكْرِ", transliteration: "dhik'ri", meaning: { en: "(the) remembrance", ur: "(the) remembrance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبِّى", transliteration: "rabbī", meaning: { en: "(of) my Lord", ur: "(of) my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَتَّىٰ", transliteration: "ḥattā", meaning: { en: "Until", ur: "Until" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَوَارَتْ", transliteration: "tawārat", meaning: { en: "they were hidden", ur: "وہ لوگ were hidden" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِٱلْحِجَابِ", transliteration: "bil-ḥijābi", meaning: { en: "in the veil", ur: "میں the veil" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  33: {
    ayahNumber: 33,
    text: "رُدُّوهَا عَلَىَّ ۖ فَطَفِقَ مَسْحًۢا بِٱلسُّوقِ وَٱلْأَعْنَاقِ",
    words: [
      { arabic: "رُدُّوهَا", transliteration: "ruddūhā", meaning: { en: "Return them", ur: "Return them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَىَّ ۖ", transliteration: "ʿalayya", meaning: { en: "to me", ur: "کو me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَطَفِقَ", transliteration: "faṭafiqa", meaning: { en: "Then he began", ur: "پھر وہ began" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مَسْحًۢا", transliteration: "masḥan", meaning: { en: "(to) pass (his hand)", ur: "(کو) pass (his hand)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلسُّوقِ", transliteration: "bil-sūqi", meaning: { en: "over the legs", ur: "اوپر the legs" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَٱلْأَعْنَاقِ", transliteration: "wal-aʿnāqi", meaning: { en: "and the necks", ur: "اور the necks" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  34: {
    ayahNumber: 34,
    text: "وَلَقَدْ فَتَنَّا سُلَيْمَـٰنَ وَأَلْقَيْنَا عَلَىٰ كُرْسِيِّهِۦ جَسَدًۭا ثُمَّ أَنَابَ",
    words: [
      { arabic: "وَلَقَدْ", transliteration: "walaqad", meaning: { en: "And certainly", ur: "اور certainly" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فَتَنَّا", transliteration: "fatannā", meaning: { en: "We tried", ur: "ہم tried" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "سُلَيْمَـٰنَ", transliteration: "sulaymāna", meaning: { en: "Sulaiman", ur: "Sulaiman" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَأَلْقَيْنَا", transliteration: "wa-alqaynā", meaning: { en: "and We placed", ur: "اور ہم placed" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَىٰ", transliteration: "ʿalā", meaning: { en: "on", ur: "پر" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "كُرْسِيِّهِۦ", transliteration: "kur'siyyihi", meaning: { en: "his throne", ur: "his throne" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "جَسَدًۭا", transliteration: "jasadan", meaning: { en: "a body", ur: "a body" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ثُمَّ", transliteration: "thumma", meaning: { en: "then", ur: "پھر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَابَ", transliteration: "anāba", meaning: { en: "he turned", ur: "وہ turned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  35: {
    ayahNumber: 35,
    text: "قَالَ رَبِّ ٱغْفِرْ لِى وَهَبْ لِى مُلْكًۭا لَّا يَنۢبَغِى لِأَحَدٍۢ مِّنۢ بَعْدِىٓ ۖ إِنَّكَ أَنتَ ٱلْوَهَّابُ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "O my Lord", ur: "اے my رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱغْفِرْ", transliteration: "igh'fir", meaning: { en: "Forgive", ur: "Forgive" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "لِى", transliteration: "lī", meaning: { en: "me", ur: "me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَهَبْ", transliteration: "wahab", meaning: { en: "and grant", ur: "اور grant" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِى", transliteration: "lī", meaning: { en: "me", ur: "me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مُلْكًۭا", transliteration: "mul'kan", meaning: { en: "a kingdom", ur: "a kingdom" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَّا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَنۢبَغِى", transliteration: "yanbaghī", meaning: { en: "(will) belong", ur: "(will) belong" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِأَحَدٍۢ", transliteration: "li-aḥadin", meaning: { en: "to anyone", ur: "کو anyone" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِّنۢ", transliteration: "min", meaning: { en: "after me", ur: "بعد me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَعْدِىٓ ۖ", transliteration: "baʿdī", meaning: { en: "after me", ur: "بعد me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّكَ", transliteration: "innaka", meaning: { en: "Indeed, You", ur: "بیشک, تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنتَ", transliteration: "anta", meaning: { en: "[You]", ur: "[تم]" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "ٱلْوَهَّابُ", transliteration: "l-wahābu", meaning: { en: "(are) the Bestower", ur: "(are) the Bestower" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  36: {
    ayahNumber: 36,
    text: "فَسَخَّرْنَا لَهُ ٱلرِّيحَ تَجْرِى بِأَمْرِهِۦ رُخَآءً حَيْثُ أَصَابَ",
    words: [
      { arabic: "فَسَخَّرْنَا", transliteration: "fasakharnā", meaning: { en: "Then We subjected", ur: "پھر ہم subjected" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَهُ", transliteration: "lahu", meaning: { en: "to him", ur: "کو him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلرِّيحَ", transliteration: "l-rīḥa", meaning: { en: "the wind", ur: "the wind" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَجْرِى", transliteration: "tajrī", meaning: { en: "to flow", ur: "کو flow" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِأَمْرِهِۦ", transliteration: "bi-amrihi", meaning: { en: "by his command", ur: "by his command" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "رُخَآءً", transliteration: "rukhāan", meaning: { en: "gently", ur: "gently" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حَيْثُ", transliteration: "ḥaythu", meaning: { en: "wherever", ur: "wherever" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَصَابَ", transliteration: "aṣāba", meaning: { en: "he directed", ur: "وہ directed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  37: {
    ayahNumber: 37,
    text: "وَٱلشَّيَـٰطِينَ كُلَّ بَنَّآءٍۢ وَغَوَّاصٍۢ",
    words: [
      { arabic: "وَٱلشَّيَـٰطِينَ", transliteration: "wal-shayāṭīna", meaning: { en: "And the devils", ur: "اور the devils" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "كُلَّ", transliteration: "kulla", meaning: { en: "every", ur: "ہر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَنَّآءٍۢ", transliteration: "bannāin", meaning: { en: "builder", ur: "builder" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَغَوَّاصٍۢ", transliteration: "waghawwāṣin", meaning: { en: "and diver", ur: "اور diver" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  38: {
    ayahNumber: 38,
    text: "وَءَاخَرِينَ مُقَرَّنِينَ فِى ٱلْأَصْفَادِ",
    words: [
      { arabic: "وَءَاخَرِينَ", transliteration: "waākharīna", meaning: { en: "And others", ur: "اور others" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مُقَرَّنِينَ", transliteration: "muqarranīna", meaning: { en: "bound", ur: "bound" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلْأَصْفَادِ", transliteration: "l-aṣfādi", meaning: { en: "chains", ur: "chains" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
  },
  39: {
    ayahNumber: 39,
    text: "هَـٰذَا عَطَآؤُنَا فَٱمْنُنْ أَوْ أَمْسِكْ بِغَيْرِ حِسَابٍۢ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَطَآؤُنَا", transliteration: "ʿaṭāunā", meaning: { en: "(is) Our gift", ur: "(is) Our gift" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱمْنُنْ", transliteration: "fa-um'nun", meaning: { en: "so grant", ur: "so grant" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "أَوْ", transliteration: "aw", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَمْسِكْ", transliteration: "amsik", meaning: { en: "withhold", ur: "withhold" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِغَيْرِ", transliteration: "bighayri", meaning: { en: "without", ur: "without" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "حِسَابٍۢ", transliteration: "ḥisābin", meaning: { en: "account", ur: "account" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
  },
  40: {
    ayahNumber: 40,
    text: "وَإِنَّ لَهُۥ عِندَنَا لَزُلْفَىٰ وَحُسْنَ مَـَٔابٍۢ",
    words: [
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for him", ur: "for him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِندَنَا", transliteration: "ʿindanā", meaning: { en: "with Us", ur: "ساتھ Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَزُلْفَىٰ", transliteration: "lazul'fā", meaning: { en: "surely is a near access", ur: "یقیناً is a near access" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَحُسْنَ", transliteration: "waḥus'na", meaning: { en: "and a good", ur: "اور a اچھا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَـَٔابٍۢ", transliteration: "maābin", meaning: { en: "place of return", ur: "place of return" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  41: {
    ayahNumber: 41,
    text: "وَٱذْكُرْ عَبْدَنَآ أَيُّوبَ إِذْ نَادَىٰ رَبَّهُۥٓ أَنِّى مَسَّنِىَ ٱلشَّيْطَـٰنُ بِنُصْبٍۢ وَعَذَابٍ",
    words: [
      { arabic: "وَٱذْكُرْ", transliteration: "wa-udh'kur", meaning: { en: "And remember", ur: "اور remember" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَبْدَنَآ", transliteration: "ʿabdanā", meaning: { en: "Our slave", ur: "Our slave" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَيُّوبَ", transliteration: "ayyūba", meaning: { en: "Ayyub", ur: "Ayyub" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَادَىٰ", transliteration: "nādā", meaning: { en: "he called", ur: "وہ called" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّهُۥٓ", transliteration: "rabbahu", meaning: { en: "his Lord", ur: "his رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنِّى", transliteration: "annī", meaning: { en: "That [I]", ur: "وہ [میں]" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَسَّنِىَ", transliteration: "massaniya", meaning: { en: "(has) touched me", ur: "(has) touched me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلشَّيْطَـٰنُ", transliteration: "l-shayṭānu", meaning: { en: "Shaitaan", ur: "Shaitaan" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِنُصْبٍۢ", transliteration: "binuṣ'bin", meaning: { en: "with distress", ur: "ساتھ distress" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "وَعَذَابٍ", transliteration: "waʿadhābin", meaning: { en: "and suffering", ur: "اور suffering" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  42: {
    ayahNumber: 42,
    text: "ٱرْكُضْ بِرِجْلِكَ ۖ هَـٰذَا مُغْتَسَلٌۢ بَارِدٌۭ وَشَرَابٌۭ",
    words: [
      { arabic: "ٱرْكُضْ", transliteration: "ur'kuḍ", meaning: { en: "Strike", ur: "Strike" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِرِجْلِكَ ۖ", transliteration: "birij'lika", meaning: { en: "with your foot", ur: "ساتھ your foot" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُغْتَسَلٌۢ", transliteration: "mugh'tasalun", meaning: { en: "(is a spring of) water to bathe", ur: "(is a spring of) پانی کو bathe" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَارِدٌۭ", transliteration: "bāridun", meaning: { en: "cool", ur: "cool" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَشَرَابٌۭ", transliteration: "washarābun", meaning: { en: "and a drink", ur: "اور a drink" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
  },
  43: {
    ayahNumber: 43,
    text: "وَوَهَبْنَا لَهُۥٓ أَهْلَهُۥ وَمِثْلَهُم مَّعَهُمْ رَحْمَةًۭ مِّنَّا وَذِكْرَىٰ لِأُو۟لِى ٱلْأَلْبَـٰبِ",
    words: [
      { arabic: "وَوَهَبْنَا", transliteration: "wawahabnā", meaning: { en: "And We granted", ur: "اور ہم granted" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لَهُۥٓ", transliteration: "lahu", meaning: { en: "[to] him", ur: "[کو] him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَهْلَهُۥ", transliteration: "ahlahu", meaning: { en: "his family", ur: "his family" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِثْلَهُم", transliteration: "wamith'lahum", meaning: { en: "and a like of them", ur: "اور a like of them" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَّعَهُمْ", transliteration: "maʿahum", meaning: { en: "with them", ur: "ساتھ them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَحْمَةًۭ", transliteration: "raḥmatan", meaning: { en: "a Mercy", ur: "a رحمت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنَّا", transliteration: "minnā", meaning: { en: "from Us", ur: "سے Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَذِكْرَىٰ", transliteration: "wadhik'rā", meaning: { en: "and a Reminder", ur: "اور a Reminder" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِأُو۟لِى", transliteration: "li-ulī", meaning: { en: "for those of understanding", ur: "for those of understanding" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْأَلْبَـٰبِ", transliteration: "l-albābi", meaning: { en: "for those of understanding", ur: "for those of understanding" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  44: {
    ayahNumber: 44,
    text: "وَخُذْ بِيَدِكَ ضِغْثًۭا فَٱضْرِب بِّهِۦ وَلَا تَحْنَثْ ۗ إِنَّا وَجَدْنَـٰهُ صَابِرًۭا ۚ نِّعْمَ ٱلْعَبْدُ ۖ إِنَّهُۥٓ أَوَّابٌۭ",
    words: [
      { arabic: "وَخُذْ", transliteration: "wakhudh", meaning: { en: "And take", ur: "اور take" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بِيَدِكَ", transliteration: "biyadika", meaning: { en: "in your hand", ur: "میں your hand" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ضِغْثًۭا", transliteration: "ḍigh'than", meaning: { en: "a bunch", ur: "a bunch" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَٱضْرِب", transliteration: "fa-iḍ'rib", meaning: { en: "and strike", ur: "اور strike" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "بِّهِۦ", transliteration: "bihi", meaning: { en: "with it", ur: "ساتھ it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَلَا", transliteration: "walā", meaning: { en: "and (do) not", ur: "اور (do) نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَحْنَثْ ۗ", transliteration: "taḥnath", meaning: { en: "break (your) oath", ur: "break (your) oath" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِنَّا", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَجَدْنَـٰهُ", transliteration: "wajadnāhu", meaning: { en: "[We] found him", ur: "[ہم] found him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "صَابِرًۭا ۚ", transliteration: "ṣābiran", meaning: { en: "patient", ur: "patient" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نِّعْمَ", transliteration: "niʿ'ma", meaning: { en: "an excellent", ur: "an excellent" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَبْدُ ۖ", transliteration: "l-ʿabdu", meaning: { en: "slave", ur: "slave" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّهُۥٓ", transliteration: "innahu", meaning: { en: "Indeed, he", ur: "بیشک, وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَوَّابٌۭ", transliteration: "awwābun", meaning: { en: "repeatedly turned", ur: "repeatedly turned" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  45: {
    ayahNumber: 45,
    text: "وَٱذْكُرْ عِبَـٰدَنَآ إِبْرَٰهِيمَ وَإِسْحَـٰقَ وَيَعْقُوبَ أُو۟لِى ٱلْأَيْدِى وَٱلْأَبْصَـٰرِ",
    words: [
      { arabic: "وَٱذْكُرْ", transliteration: "wa-udh'kur", meaning: { en: "And remember", ur: "اور remember" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عِبَـٰدَنَآ", transliteration: "ʿibādanā", meaning: { en: "Our slaves", ur: "Our slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِبْرَٰهِيمَ", transliteration: "ib'rāhīma", meaning: { en: "Ibrahim", ur: "Ibrahim" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِسْحَـٰقَ", transliteration: "wa-is'ḥāqa", meaning: { en: "and Isaac", ur: "اور Isaac" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَيَعْقُوبَ", transliteration: "wayaʿqūba", meaning: { en: "and Ayyub", ur: "اور Ayyub" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أُو۟لِى", transliteration: "ulī", meaning: { en: "possessors", ur: "possessors" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَيْدِى", transliteration: "l-aydī", meaning: { en: "(of) strength", ur: "(of) strength" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَبْصَـٰرِ", transliteration: "wal-abṣāri", meaning: { en: "and vision", ur: "اور vision" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  46: {
    ayahNumber: 46,
    text: "إِنَّآ أَخْلَصْنَـٰهُم بِخَالِصَةٍۢ ذِكْرَى ٱلدَّارِ",
    words: [
      { arabic: "إِنَّآ", transliteration: "innā", meaning: { en: "Indeed, We", ur: "بیشک, ہم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَخْلَصْنَـٰهُم", transliteration: "akhlaṣnāhum", meaning: { en: "[We] chose them", ur: "[ہم] chose them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِخَالِصَةٍۢ", transliteration: "bikhāliṣatin", meaning: { en: "for an exclusive (quality)", ur: "for an exclusive (quality)" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ذِكْرَى", transliteration: "dhik'rā", meaning: { en: "remembrance", ur: "remembrance" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلدَّارِ", transliteration: "l-dāri", meaning: { en: "(of) the Home", ur: "(of) the Home" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  47: {
    ayahNumber: 47,
    text: "وَإِنَّهُمْ عِندَنَا لَمِنَ ٱلْمُصْطَفَيْنَ ٱلْأَخْيَارِ",
    words: [
      { arabic: "وَإِنَّهُمْ", transliteration: "wa-innahum", meaning: { en: "And indeed, they", ur: "اور بیشک, وہ لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عِندَنَا", transliteration: "ʿindanā", meaning: { en: "to Us", ur: "کو Us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَمِنَ", transliteration: "lamina", meaning: { en: "(are) from", ur: "(are) سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُصْطَفَيْنَ", transliteration: "l-muṣ'ṭafayna", meaning: { en: "the chosen ones", ur: "the chosen ones" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَخْيَارِ", transliteration: "l-akhyāri", meaning: { en: "the best", ur: "the best" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  48: {
    ayahNumber: 48,
    text: "وَٱذْكُرْ إِسْمَـٰعِيلَ وَٱلْيَسَعَ وَذَا ٱلْكِفْلِ ۖ وَكُلٌّۭ مِّنَ ٱلْأَخْيَارِ",
    words: [
      { arabic: "وَٱذْكُرْ", transliteration: "wa-udh'kur", meaning: { en: "And remember", ur: "اور remember" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "إِسْمَـٰعِيلَ", transliteration: "is'māʿīla", meaning: { en: "Ishmael", ur: "Ishmael" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْيَسَعَ", transliteration: "wal-yasaʿa", meaning: { en: "and Elisha", ur: "اور Elisha" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَذَا", transliteration: "wadhā", meaning: { en: "and Dhul-kifl", ur: "اور Dhul-kifl" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "ٱلْكِفْلِ ۖ", transliteration: "l-kif'li", meaning: { en: "and Dhul-kifl", ur: "اور Dhul-kifl" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَكُلٌّۭ", transliteration: "wakullun", meaning: { en: "and all", ur: "اور سب" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "(are) from", ur: "(are) سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَخْيَارِ", transliteration: "l-akhyāri", meaning: { en: "the best", ur: "the best" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 7, to: 8, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  49: {
    ayahNumber: 49,
    text: "هَـٰذَا ذِكْرٌۭ ۚ وَإِنَّ لِلْمُتَّقِينَ لَحُسْنَ مَـَٔابٍۢ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذِكْرٌۭ ۚ", transliteration: "dhik'run", meaning: { en: "(is) a Reminder", ur: "(is) a Reminder" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِلْمُتَّقِينَ", transliteration: "lil'muttaqīna", meaning: { en: "for the righteous", ur: "for the نیک" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "لَحُسْنَ", transliteration: "laḥus'na", meaning: { en: "surely, is a good", ur: "یقیناً, is a اچھا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَـَٔابٍۢ", transliteration: "maābin", meaning: { en: "place of return", ur: "place of return" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  50: {
    ayahNumber: 50,
    text: "جَنَّـٰتِ عَدْنٍۢ مُّفَتَّحَةًۭ لَّهُمُ ٱلْأَبْوَٰبُ",
    words: [
      { arabic: "جَنَّـٰتِ", transliteration: "jannāti", meaning: { en: "Gardens", ur: "باغات" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَدْنٍۢ", transliteration: "ʿadnin", meaning: { en: "(of) Eternity", ur: "(of) Eternity" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُّفَتَّحَةًۭ", transliteration: "mufattaḥatan", meaning: { en: "(will be) opened", ur: "(will be) opened" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لَّهُمُ", transliteration: "lahumu", meaning: { en: "for them", ur: "for them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَبْوَٰبُ", transliteration: "l-abwābu", meaning: { en: "the gates", ur: "the gates" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  51: {
    ayahNumber: 51,
    text: "مُتَّكِـِٔينَ فِيهَا يَدْعُونَ فِيهَا بِفَـٰكِهَةٍۢ كَثِيرَةٍۢ وَشَرَابٍۢ",
    words: [
      { arabic: "مُتَّكِـِٔينَ", transliteration: "muttakiīna", meaning: { en: "Reclining", ur: "Reclining" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَدْعُونَ", transliteration: "yadʿūna", meaning: { en: "they will call", ur: "وہ لوگ will call" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فِيهَا", transliteration: "fīhā", meaning: { en: "therein", ur: "اس میں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِفَـٰكِهَةٍۢ", transliteration: "bifākihatin", meaning: { en: "for fruit", ur: "for fruit" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "كَثِيرَةٍۢ", transliteration: "kathīratin", meaning: { en: "many", ur: "many" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَشَرَابٍۢ", transliteration: "washarābin", meaning: { en: "and drink", ur: "اور drink" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  52: {
    ayahNumber: 52,
    text: "۞ وَعِندَهُمْ قَـٰصِرَٰتُ ٱلطَّرْفِ أَتْرَابٌ",
    words: [
      { arabic: "۞ وَعِندَهُمْ", transliteration: "waʿindahum", meaning: { en: "And with them", ur: "اور ساتھ them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَـٰصِرَٰتُ", transliteration: "qāṣirātu", meaning: { en: "(will be) companions of modest gaze", ur: "(will be) companions of modest gaze" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلطَّرْفِ", transliteration: "l-ṭarfi", meaning: { en: "(will be) companions of modest gaze", ur: "(will be) companions of modest gaze" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَتْرَابٌ", transliteration: "atrābun", meaning: { en: "well-matched", ur: "well-matched" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  53: {
    ayahNumber: 53,
    text: "هَـٰذَا مَا تُوعَدُونَ لِيَوْمِ ٱلْحِسَابِ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "(is) what", ur: "(is) کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "تُوعَدُونَ", transliteration: "tūʿadūna", meaning: { en: "you are promised", ur: "تم are promised" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِيَوْمِ", transliteration: "liyawmi", meaning: { en: "for (the) Day", ur: "for (the) دن" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْحِسَابِ", transliteration: "l-ḥisābi", meaning: { en: "(of) Account", ur: "(of) Account" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
  },
  54: {
    ayahNumber: 54,
    text: "إِنَّ هَـٰذَا لَرِزْقُنَا مَا لَهُۥ مِن نَّفَادٍ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَرِزْقُنَا", transliteration: "lariz'qunā", meaning: { en: "(is) surely Our provision", ur: "(is) یقیناً Our provision" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "for it", ur: "for it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نَّفَادٍ", transliteration: "nafādin", meaning: { en: "depletion", ur: "depletion" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  55: {
    ayahNumber: 55,
    text: "هَـٰذَا ۚ وَإِنَّ لِلطَّـٰغِينَ لَشَرَّ مَـَٔابٍۢ",
    words: [
      { arabic: "هَـٰذَا ۚ", transliteration: "hādhā", meaning: { en: "This (is so)", ur: "This (is so)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "لِلطَّـٰغِينَ", transliteration: "lilṭṭāghīna", meaning: { en: "for the transgressors", ur: "for the transgressors" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "لَشَرَّ", transliteration: "lasharra", meaning: { en: "surely (is) an evil", ur: "یقیناً (is) an برا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَـَٔابٍۢ", transliteration: "maābin", meaning: { en: "place of return", ur: "place of return" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  56: {
    ayahNumber: 56,
    text: "جَهَنَّمَ يَصْلَوْنَهَا فَبِئْسَ ٱلْمِهَادُ",
    words: [
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "Hell", ur: "جہنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَصْلَوْنَهَا", transliteration: "yaṣlawnahā", meaning: { en: "they will burn therein", ur: "وہ لوگ will burn اس میں" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَبِئْسَ", transliteration: "fabi'sa", meaning: { en: "and wretched (is)", ur: "اور wretched (is)" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلْمِهَادُ", transliteration: "l-mihādu", meaning: { en: "the resting place", ur: "the resting place" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  57: {
    ayahNumber: 57,
    text: "هَـٰذَا فَلْيَذُوقُوهُ حَمِيمٌۭ وَغَسَّاقٌۭ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This (is so)", ur: "This (is so)" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَلْيَذُوقُوهُ", transliteration: "falyadhūqūhu", meaning: { en: "Then let them taste it", ur: "پھر let them taste it" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "حَمِيمٌۭ", transliteration: "ḥamīmun", meaning: { en: "boiling fluid", ur: "boiling fluid" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَغَسَّاقٌۭ", transliteration: "waghassāqun", meaning: { en: "and purulence", ur: "اور purulence" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  58: {
    ayahNumber: 58,
    text: "وَءَاخَرُ مِن شَكْلِهِۦٓ أَزْوَٰجٌ",
    words: [
      { arabic: "وَءَاخَرُ", transliteration: "waākharu", meaning: { en: "And other", ur: "اور other" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "شَكْلِهِۦٓ", transliteration: "shaklihi", meaning: { en: "its type", ur: "its type" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَزْوَٰجٌ", transliteration: "azwājun", meaning: { en: "(of various) kinds", ur: "(of various) kinds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  59: {
    ayahNumber: 59,
    text: "هَـٰذَا فَوْجٌۭ مُّقْتَحِمٌۭ مَّعَكُمْ ۖ لَا مَرْحَبًۢا بِهِمْ ۚ إِنَّهُمْ صَالُوا۟ ٱلنَّارِ",
    words: [
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "This", ur: "This" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَوْجٌۭ", transliteration: "fawjun", meaning: { en: "(is) a company", ur: "(is) a company" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مُّقْتَحِمٌۭ", transliteration: "muq'taḥimun", meaning: { en: "bursting", ur: "bursting" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مَّعَكُمْ ۖ", transliteration: "maʿakum", meaning: { en: "(in) with you", ur: "(میں) ساتھ تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "No", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَرْحَبًۢا", transliteration: "marḥaban", meaning: { en: "welcome", ur: "welcome" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِهِمْ ۚ", transliteration: "bihim", meaning: { en: "for them", ur: "for them" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِنَّهُمْ", transliteration: "innahum", meaning: { en: "Indeed, they", ur: "بیشک, وہ لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "صَالُوا۟", transliteration: "ṣālū", meaning: { en: "(will) burn", ur: "(will) burn" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "(in) the Fire", ur: "(میں) the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  60: {
    ayahNumber: 60,
    text: "قَالُوا۟ بَلْ أَنتُمْ لَا مَرْحَبًۢا بِكُمْ ۖ أَنتُمْ قَدَّمْتُمُوهُ لَنَا ۖ فَبِئْسَ ٱلْقَرَارُ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They say", ur: "وہ لوگ کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَلْ", transliteration: "bal", meaning: { en: "Nay", ur: "Nay" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "You ", ur: "تم " }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "no", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَرْحَبًۢا", transliteration: "marḥaban", meaning: { en: "welcome", ur: "welcome" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِكُمْ ۖ", transliteration: "bikum", meaning: { en: "for you", ur: "for تم" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "You", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "قَدَّمْتُمُوهُ", transliteration: "qaddamtumūhu", meaning: { en: "brought this", ur: "brought this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَنَا ۖ", transliteration: "lanā", meaning: { en: "upon us", ur: "پر us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَبِئْسَ", transliteration: "fabi'sa", meaning: { en: "So wretched (is)", ur: "So wretched (is)" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلْقَرَارُ", transliteration: "l-qarāru", meaning: { en: "the settlement", ur: "the settlement" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  61: {
    ayahNumber: 61,
    text: "قَالُوا۟ رَبَّنَا مَن قَدَّمَ لَنَا هَـٰذَا فَزِدْهُ عَذَابًۭا ضِعْفًۭا فِى ٱلنَّارِ",
    words: [
      { arabic: "قَالُوا۟", transliteration: "qālū", meaning: { en: "They will say", ur: "وہ لوگ will کہو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبَّنَا", transliteration: "rabbanā", meaning: { en: "Our Lord", ur: "Our رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَن", transliteration: "man", meaning: { en: "whoever", ur: "whoever" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "قَدَّمَ", transliteration: "qaddama", meaning: { en: "brought", ur: "brought" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "upon us", ur: "پر us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هَـٰذَا", transliteration: "hādhā", meaning: { en: "this", ur: "this" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَزِدْهُ", transliteration: "fazid'hu", meaning: { en: "increase for him", ur: "increase for him" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "عَذَابًۭا", transliteration: "ʿadhāban", meaning: { en: "a punishment", ur: "a عذاب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ضِعْفًۭا", transliteration: "ḍiʿ'fan", meaning: { en: "double", ur: "double" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فِى", transliteration: "fī", meaning: { en: "in", ur: "میں" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "the Fire", ur: "the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 10, to: 11, label: 'جار + مجرور' }
      ],
    },
  },
  62: {
    ayahNumber: 62,
    text: "وَقَالُوا۟ مَا لَنَا لَا نَرَىٰ رِجَالًۭا كُنَّا نَعُدُّهُم مِّنَ ٱلْأَشْرَارِ",
    words: [
      { arabic: "وَقَالُوا۟", transliteration: "waqālū", meaning: { en: "And they (will) say", ur: "اور وہ لوگ (will) کہو" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What (is)", ur: "کیا (is)" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "لَنَا", transliteration: "lanā", meaning: { en: "for us", ur: "for us" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَا", transliteration: "lā", meaning: { en: "not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "نَرَىٰ", transliteration: "narā", meaning: { en: "we see", ur: "ہم دیکھنا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رِجَالًۭا", transliteration: "rijālan", meaning: { en: "men", ur: "men" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُنَّا", transliteration: "kunnā", meaning: { en: "we used to", ur: "ہم used کو" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "نَعُدُّهُم", transliteration: "naʿudduhum", meaning: { en: "count them", ur: "count them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّنَ", transliteration: "mina", meaning: { en: "among", ur: "among" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَشْرَارِ", transliteration: "l-ashrāri", meaning: { en: "the bad ones", ur: "the bad ones" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'نفی + فعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' },
        { from: 8, to: 9, label: 'فعل + فاعل' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  63: {
    ayahNumber: 63,
    text: "أَتَّخَذْنَـٰهُمْ سِخْرِيًّا أَمْ زَاغَتْ عَنْهُمُ ٱلْأَبْصَـٰرُ",
    words: [
      { arabic: "أَتَّخَذْنَـٰهُمْ", transliteration: "attakhadhnāhum", meaning: { en: "Did we take them", ur: "Did ہم take them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "سِخْرِيًّا", transliteration: "sikh'riyyan", meaning: { en: "(in) ridicule", ur: "(میں) ridicule" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "زَاغَتْ", transliteration: "zāghat", meaning: { en: "has turned away", ur: "has turned away" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَنْهُمُ", transliteration: "ʿanhumu", meaning: { en: "from them", ur: "سے them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْأَبْصَـٰرُ", transliteration: "l-abṣāru", meaning: { en: "the vision", ur: "the vision" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  64: {
    ayahNumber: 64,
    text: "إِنَّ ذَٰلِكَ لَحَقٌّۭ تَخَاصُمُ أَهْلِ ٱلنَّارِ",
    words: [
      { arabic: "إِنَّ", transliteration: "inna", meaning: { en: "Indeed", ur: "بیشک" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ذَٰلِكَ", transliteration: "dhālika", meaning: { en: "that", ur: "وہ" }, pos: "DEM", posLabel: "DEM", grammar: { role: "demonstrative" } },
      { arabic: "لَحَقٌّۭ", transliteration: "laḥaqqun", meaning: { en: "(is) surely (the) truth ", ur: "(is) یقیناً (the) سچ " }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَخَاصُمُ", transliteration: "takhāṣumu", meaning: { en: "(the) quarreling", ur: "(the) quarreling" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَهْلِ", transliteration: "ahli", meaning: { en: "(of the) people", ur: "(of the) لوگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلنَّارِ", transliteration: "l-nāri", meaning: { en: "(of) the Fire", ur: "(of) the آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  65: {
    ayahNumber: 65,
    text: "قُلْ إِنَّمَآ أَنَا۠ مُنذِرٌۭ ۖ وَمَا مِنْ إِلَـٰهٍ إِلَّا ٱللَّهُ ٱلْوَٰحِدُ ٱلْقَهَّارُ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِنَّمَآ", transliteration: "innamā", meaning: { en: "Only", ur: "صرف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَا۠", transliteration: "anā", meaning: { en: "I am", ur: "میں am" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُنذِرٌۭ ۖ", transliteration: "mundhirun", meaning: { en: "a warner", ur: "a warner" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "(is there) any", ur: "(is there) any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "إِلَـٰهٍ", transliteration: "ilāhin", meaning: { en: "god", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱللَّهُ", transliteration: "l-lahu", meaning: { en: "Allah", ur: "اللہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْوَٰحِدُ", transliteration: "l-wāḥidu", meaning: { en: "the One", ur: "the One" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْقَهَّارُ", transliteration: "l-qahāru", meaning: { en: "the Irresistible", ur: "the Irresistible" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' },
        { from: 10, to: 11, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  66: {
    ayahNumber: 66,
    text: "رَبُّ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَمَا بَيْنَهُمَا ٱلْعَزِيزُ ٱلْغَفَّـٰرُ",
    words: [
      { arabic: "رَبُّ", transliteration: "rabbu", meaning: { en: "Lord", ur: "رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلسَّمَـٰوَٰتِ", transliteration: "l-samāwāti", meaning: { en: "(of) the heavens", ur: "(of) the آسمان" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَٱلْأَرْضِ", transliteration: "wal-arḍi", meaning: { en: "and the earth", ur: "اور زمین" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "وَمَا", transliteration: "wamā", meaning: { en: "and whatever", ur: "اور whatever" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "بَيْنَهُمَا", transliteration: "baynahumā", meaning: { en: "(is) between them", ur: "(is) درمیان them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَزِيزُ", transliteration: "l-ʿazīzu", meaning: { en: "the All-Mighty", ur: "the سب-Mighty" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } },
      { arabic: "ٱلْغَفَّـٰرُ", transliteration: "l-ghafāru", meaning: { en: "the Oft-Forgiving", ur: "the Oft-Forgiving" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
  },
  67: {
    ayahNumber: 67,
    text: "قُلْ هُوَ نَبَؤٌا۟ عَظِيمٌ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "It (is)", ur: "It (is)" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "نَبَؤٌا۟", transliteration: "naba-on", meaning: { en: "a news", ur: "a news" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "عَظِيمٌ", transliteration: "ʿaẓīmun", meaning: { en: "great", ur: "great" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  68: {
    ayahNumber: 68,
    text: "أَنتُمْ عَنْهُ مُعْرِضُونَ",
    words: [
      { arabic: "أَنتُمْ", transliteration: "antum", meaning: { en: "You", ur: "تم" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "عَنْهُ", transliteration: "ʿanhu", meaning: { en: "from it", ur: "سے it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مُعْرِضُونَ", transliteration: "muʿ'riḍūna", meaning: { en: "turn away", ur: "turn away" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  69: {
    ayahNumber: 69,
    text: "مَا كَانَ لِىَ مِنْ عِلْمٍۭ بِٱلْمَلَإِ ٱلْأَعْلَىٰٓ إِذْ يَخْتَصِمُونَ",
    words: [
      { arabic: "مَا", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "NEG", posLabel: "NEG", grammar: { role: "negation" } },
      { arabic: "كَانَ", transliteration: "kāna", meaning: { en: "is", ur: "is" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِىَ", transliteration: "liya", meaning: { en: "for me", ur: "for me" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "عِلْمٍۭ", transliteration: "ʿil'min", meaning: { en: "knowledge", ur: "knowledge" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بِٱلْمَلَإِ", transliteration: "bil-mala-i", meaning: { en: "(of) the chiefs", ur: "(of) the chiefs" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "ٱلْأَعْلَىٰٓ", transliteration: "l-aʿlā", meaning: { en: "the exalted", ur: "the exalted" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "when", ur: "when" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يَخْتَصِمُونَ", transliteration: "yakhtaṣimūna", meaning: { en: "they were disputing", ur: "وہ لوگ were disputing" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  70: {
    ayahNumber: 70,
    text: "إِن يُوحَىٰٓ إِلَىَّ إِلَّآ أَنَّمَآ أَنَا۠ نَذِيرٌۭ مُّبِينٌ",
    words: [
      { arabic: "إِن", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "يُوحَىٰٓ", transliteration: "yūḥā", meaning: { en: "has been revealed", ur: "has been revealed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "إِلَىَّ", transliteration: "ilayya", meaning: { en: "to me", ur: "کو me" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَّآ", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَّمَآ", transliteration: "annamā", meaning: { en: "that only", ur: "وہ صرف" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَنَا۠", transliteration: "anā", meaning: { en: "I am", ur: "میں am" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "نَذِيرٌۭ", transliteration: "nadhīrun", meaning: { en: "a warner", ur: "a warner" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مُّبِينٌ", transliteration: "mubīnun", meaning: { en: "clear", ur: "clear" }, pos: "ADJ", posLabel: "ADJ", grammar: { role: "adjective" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  71: {
    ayahNumber: 71,
    text: "إِذْ قَالَ رَبُّكَ لِلْمَلَـٰٓئِكَةِ إِنِّى خَـٰلِقٌۢ بَشَرًۭا مِّن طِينٍۢ",
    words: [
      { arabic: "إِذْ", transliteration: "idh", meaning: { en: "When", ur: "When" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "said", ur: "کہا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "رَبُّكَ", transliteration: "rabbuka", meaning: { en: "your Lord", ur: "your رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِلْمَلَـٰٓئِكَةِ", transliteration: "lil'malāikati", meaning: { en: "to the Angels", ur: "کو the Angels" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "إِنِّى", transliteration: "innī", meaning: { en: "Indeed, I Am", ur: "بیشک, میں Am" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَـٰلِقٌۢ", transliteration: "khāliqun", meaning: { en: "going to create", ur: "going کو پیدا کرنا" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "بَشَرًۭا", transliteration: "basharan", meaning: { en: "a human being", ur: "a human being" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِّن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "طِينٍۢ", transliteration: "ṭīnin", meaning: { en: "clay", ur: "clay" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' },
        { from: 7, to: 8, label: 'فعل + فاعل' }
      ],
    },
  },
  72: {
    ayahNumber: 72,
    text: "فَإِذَا سَوَّيْتُهُۥ وَنَفَخْتُ فِيهِ مِن رُّوحِى فَقَعُوا۟ لَهُۥ سَـٰجِدِينَ",
    words: [
      { arabic: "فَإِذَا", transliteration: "fa-idhā", meaning: { en: "So when", ur: "So when" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "سَوَّيْتُهُۥ", transliteration: "sawwaytuhu", meaning: { en: "I have proportioned him", ur: "میں have proportioned him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَنَفَخْتُ", transliteration: "wanafakhtu", meaning: { en: "and breathed", ur: "اور breathed" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "فِيهِ", transliteration: "fīhi", meaning: { en: "into him", ur: "into him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "of", ur: "of" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "رُّوحِى", transliteration: "rūḥī", meaning: { en: "My spirit", ur: "My spirit" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَقَعُوا۟", transliteration: "faqaʿū", meaning: { en: "then fall down", ur: "پھر fall down" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَهُۥ", transliteration: "lahu", meaning: { en: "to him", ur: "کو him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "سَـٰجِدِينَ", transliteration: "sājidīna", meaning: { en: "prostrating", ur: "prostrating" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
  },
  73: {
    ayahNumber: 73,
    text: "فَسَجَدَ ٱلْمَلَـٰٓئِكَةُ كُلُّهُمْ أَجْمَعُونَ",
    words: [
      { arabic: "فَسَجَدَ", transliteration: "fasajada", meaning: { en: "So prostrated", ur: "So prostrated" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "ٱلْمَلَـٰٓئِكَةُ", transliteration: "l-malāikatu", meaning: { en: "the Angels", ur: "the Angels" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "كُلُّهُمْ", transliteration: "kulluhum", meaning: { en: "all of them", ur: "سب of them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْمَعُونَ", transliteration: "ajmaʿūna", meaning: { en: "together", ur: "together" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  74: {
    ayahNumber: 74,
    text: "إِلَّآ إِبْلِيسَ ٱسْتَكْبَرَ وَكَانَ مِنَ ٱلْكَـٰفِرِينَ",
    words: [
      { arabic: "إِلَّآ", transliteration: "illā", meaning: { en: "Except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِبْلِيسَ", transliteration: "ib'līsa", meaning: { en: "Iblis", ur: "Iblis" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱسْتَكْبَرَ", transliteration: "is'takbara", meaning: { en: "he was arrogant", ur: "وہ was arrogant" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "وَكَانَ", transliteration: "wakāna", meaning: { en: "and became", ur: "اور became" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْكَـٰفِرِينَ", transliteration: "l-kāfirīna", meaning: { en: "the disbelievers", ur: "the کافر" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  75: {
    ayahNumber: 75,
    text: "قَالَ يَـٰٓإِبْلِيسُ مَا مَنَعَكَ أَن تَسْجُدَ لِمَا خَلَقْتُ بِيَدَىَّ ۖ أَسْتَكْبَرْتَ أَمْ كُنتَ مِنَ ٱلْعَالِينَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يَـٰٓإِبْلِيسُ", transliteration: "yāib'līsu", meaning: { en: "O Iblis", ur: "اے Iblis" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَا", transliteration: "mā", meaning: { en: "What", ur: "کیا" }, pos: "REL", posLabel: "REL", grammar: { role: "relative" } },
      { arabic: "مَنَعَكَ", transliteration: "manaʿaka", meaning: { en: "prevented you", ur: "prevented تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَن", transliteration: "an", meaning: { en: "that", ur: "وہ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "تَسْجُدَ", transliteration: "tasjuda", meaning: { en: "you (should) prostrate", ur: "تم (should) prostrate" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "لِمَا", transliteration: "limā", meaning: { en: "to (one) whom", ur: "کو (one) whom" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "خَلَقْتُ", transliteration: "khalaqtu", meaning: { en: "I created", ur: "میں پیدا کیا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بِيَدَىَّ ۖ", transliteration: "biyadayya", meaning: { en: "with My Hands", ur: "ساتھ My Hands" }, pos: "P+N", posLabel: "P+N", grammar: { role: "preposition+noun" } },
      { arabic: "أَسْتَكْبَرْتَ", transliteration: "astakbarta", meaning: { en: "Are you arrogant", ur: "Are تم arrogant" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَمْ", transliteration: "am", meaning: { en: "or", ur: "یا" }, pos: "CONJ", posLabel: "CONJ", grammar: { role: "conjunction" } },
      { arabic: "كُنتَ", transliteration: "kunta", meaning: { en: "are you", ur: "are تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْعَالِينَ", transliteration: "l-ʿālīna", meaning: { en: "the exalted ones", ur: "the exalted ones" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 12, to: 13, label: 'فعل + فاعل' },
        { from: 13, to: 14, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  76: {
    ayahNumber: 76,
    text: "قَالَ أَنَا۠ خَيْرٌۭ مِّنْهُ ۖ خَلَقْتَنِى مِن نَّارٍۢ وَخَلَقْتَهُۥ مِن طِينٍۢ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَنَا۠", transliteration: "anā", meaning: { en: "I am", ur: "میں am" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَيْرٌۭ", transliteration: "khayrun", meaning: { en: "better", ur: "better" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِّنْهُ ۖ", transliteration: "min'hu", meaning: { en: "than him", ur: "than him" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "خَلَقْتَنِى", transliteration: "khalaqtanī", meaning: { en: "You created me", ur: "تم پیدا کیا me" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "نَّارٍۢ", transliteration: "nārin", meaning: { en: "fire", ur: "آگ" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَخَلَقْتَهُۥ", transliteration: "wakhalaqtahu", meaning: { en: "and You created him", ur: "اور تم پیدا کیا him" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "مِن", transliteration: "min", meaning: { en: "from", ur: "سے" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "طِينٍۢ", transliteration: "ṭīnin", meaning: { en: "clay", ur: "clay" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 6, to: 7, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' }
      ],
    },
  },
  77: {
    ayahNumber: 77,
    text: "قَالَ فَٱخْرُجْ مِنْهَا فَإِنَّكَ رَجِيمٌۭ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَٱخْرُجْ", transliteration: "fa-ukh'ruj", meaning: { en: "Then get out", ur: "پھر get out" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مِنْهَا", transliteration: "min'hā", meaning: { en: "of it", ur: "of it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَإِنَّكَ", transliteration: "fa-innaka", meaning: { en: "for indeed, you", ur: "for بیشک, تم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "رَجِيمٌۭ", transliteration: "rajīmun", meaning: { en: "(are) accursed", ur: "(are) accursed" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  78: {
    ayahNumber: 78,
    text: "وَإِنَّ عَلَيْكَ لَعْنَتِىٓ إِلَىٰ يَوْمِ ٱلدِّينِ",
    words: [
      { arabic: "وَإِنَّ", transliteration: "wa-inna", meaning: { en: "And indeed", ur: "اور بیشک" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "عَلَيْكَ", transliteration: "ʿalayka", meaning: { en: "upon you", ur: "پر تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لَعْنَتِىٓ", transliteration: "laʿnatī", meaning: { en: "(is) My curse", ur: "(is) My curse" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "until", ur: "until" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَوْمِ", transliteration: "yawmi", meaning: { en: "(the) Day", ur: "(the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلدِّينِ", transliteration: "l-dīni", meaning: { en: "(of) Judgment", ur: "(of) Judgment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  79: {
    ayahNumber: 79,
    text: "قَالَ رَبِّ فَأَنظِرْنِىٓ إِلَىٰ يَوْمِ يُبْعَثُونَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "رَبِّ", transliteration: "rabbi", meaning: { en: "My Lord", ur: "My رب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "فَأَنظِرْنِىٓ", transliteration: "fa-anẓir'nī", meaning: { en: "Then give me respite", ur: "پھر give me respite" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "until", ur: "until" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَوْمِ", transliteration: "yawmi", meaning: { en: "(the) Day", ur: "(the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "يُبْعَثُونَ", transliteration: "yub'ʿathūna", meaning: { en: "they are resurrected", ur: "وہ لوگ are resurrected" }, pos: "V", posLabel: "V", grammar: { role: "verb" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' }
      ],
    },
  },
  80: {
    ayahNumber: 80,
    text: "قَالَ فَإِنَّكَ مِنَ ٱلْمُنظَرِينَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَإِنَّكَ", transliteration: "fa-innaka", meaning: { en: "Then indeed, you", ur: "پھر بیشک, تم" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "(are) of", ur: "(are) of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُنظَرِينَ", transliteration: "l-munẓarīna", meaning: { en: "those given respite", ur: "those given respite" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  81: {
    ayahNumber: 81,
    text: "إِلَىٰ يَوْمِ ٱلْوَقْتِ ٱلْمَعْلُومِ",
    words: [
      { arabic: "إِلَىٰ", transliteration: "ilā", meaning: { en: "Until", ur: "Until" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "يَوْمِ", transliteration: "yawmi", meaning: { en: "(the) Day", ur: "(the) دن" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "ٱلْوَقْتِ", transliteration: "l-waqti", meaning: { en: "(of) the time", ur: "(of) the وقت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمَعْلُومِ", transliteration: "l-maʿlūmi", meaning: { en: "well-known", ur: "well-known" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
  82: {
    ayahNumber: 82,
    text: "قَالَ فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَبِعِزَّتِكَ", transliteration: "fabiʿizzatika", meaning: { en: "Then by Your might", ur: "پھر by Your might" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "لَأُغْوِيَنَّهُمْ", transliteration: "la-ugh'wiyannahum", meaning: { en: "I will surely mislead them", ur: "میں will یقیناً mislead them" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + فاعل' }
      ],
    },
  },
  83: {
    ayahNumber: 83,
    text: "إِلَّا عِبَادَكَ مِنْهُمُ ٱلْمُخْلَصِينَ",
    words: [
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "Except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عِبَادَكَ", transliteration: "ʿibādaka", meaning: { en: "Your slaves", ur: "Your slaves" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْهُمُ", transliteration: "min'humu", meaning: { en: "among them", ur: "among them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُخْلَصِينَ", transliteration: "l-mukh'laṣīna", meaning: { en: "the chosen ones", ur: "the chosen ones" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  84: {
    ayahNumber: 84,
    text: "قَالَ فَٱلْحَقُّ وَٱلْحَقَّ أَقُولُ",
    words: [
      { arabic: "قَالَ", transliteration: "qāla", meaning: { en: "He said", ur: "وہ کہا" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "فَٱلْحَقُّ", transliteration: "fal-ḥaqu", meaning: { en: "Then (it is) the truth", ur: "پھر (it is) the سچ" }, pos: "CONJ+V", posLabel: "CONJ+V", grammar: { role: "conjunction+verb" } },
      { arabic: "وَٱلْحَقَّ", transliteration: "wal-ḥaqa", meaning: { en: "and the truth", ur: "اور the سچ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَقُولُ", transliteration: "aqūlu", meaning: { en: "I say", ur: "میں کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [

      ],
    },
  },
  85: {
    ayahNumber: 85,
    text: "لَأَمْلَأَنَّ جَهَنَّمَ مِنكَ وَمِمَّن تَبِعَكَ مِنْهُمْ أَجْمَعِينَ",
    words: [
      { arabic: "لَأَمْلَأَنَّ", transliteration: "la-amla-anna", meaning: { en: "Surely I will fill", ur: "یقیناً میں will fill" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "جَهَنَّمَ", transliteration: "jahannama", meaning: { en: "Hell", ur: "جہنم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنكَ", transliteration: "minka", meaning: { en: "with you", ur: "ساتھ تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمِمَّن", transliteration: "wamimman", meaning: { en: "and those who", ur: "اور جو لوگ" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "تَبِعَكَ", transliteration: "tabiʿaka", meaning: { en: "follow you", ur: "follow تم" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "مِنْهُمْ", transliteration: "min'hum", meaning: { en: "among them", ur: "among them" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَجْمَعِينَ", transliteration: "ajmaʿīna", meaning: { en: "all", ur: "سب" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + فاعل' },
        { from: 5, to: 6, label: 'فعل + فاعل' }
      ],
    },
  },
  86: {
    ayahNumber: 86,
    text: "قُلْ مَآ أَسْـَٔلُكُمْ عَلَيْهِ مِنْ أَجْرٍۢ وَمَآ أَنَا۠ مِنَ ٱلْمُتَكَلِّفِينَ",
    words: [
      { arabic: "قُلْ", transliteration: "qul", meaning: { en: "Say", ur: "کہو" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مَآ", transliteration: "mā", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "أَسْـَٔلُكُمْ", transliteration: "asalukum", meaning: { en: "I ask of you", ur: "میں ask of تم" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "عَلَيْهِ", transliteration: "ʿalayhi", meaning: { en: "for it", ur: "for it" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنْ", transliteration: "min", meaning: { en: "any", ur: "any" }, pos: "PREP", posLabel: "PREP", grammar: { role: "preposition" } },
      { arabic: "أَجْرٍۢ", transliteration: "ajrin", meaning: { en: "payment", ur: "payment" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "وَمَآ", transliteration: "wamā", meaning: { en: "and not", ur: "اور نہیں" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "أَنَا۠", transliteration: "anā", meaning: { en: "I am", ur: "میں am" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "مِنَ", transliteration: "mina", meaning: { en: "of", ur: "of" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ٱلْمُتَكَلِّفِينَ", transliteration: "l-mutakalifīna", meaning: { en: "the ones who pretend", ur: "the ones جو pretend" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' },
        { from: 5, to: 6, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  87: {
    ayahNumber: 87,
    text: "إِنْ هُوَ إِلَّا ذِكْرٌۭ لِّلْعَـٰلَمِينَ",
    words: [
      { arabic: "إِنْ", transliteration: "in", meaning: { en: "Not", ur: "نہیں" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "هُوَ", transliteration: "huwa", meaning: { en: "it (is)", ur: "it (is)" }, pos: "PRON", posLabel: "PRON", grammar: { role: "subject" } },
      { arabic: "إِلَّا", transliteration: "illā", meaning: { en: "except", ur: "سوائے" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "ذِكْرٌۭ", transliteration: "dhik'run", meaning: { en: "a Reminder", ur: "a Reminder" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "لِّلْعَـٰلَمِينَ", transliteration: "lil'ʿālamīna", meaning: { en: "to the worlds", ur: "کو the worlds" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'مضاف + مضاف إليه' }
      ],
    },
  },
  88: {
    ayahNumber: 88,
    text: "وَلَتَعْلَمُنَّ نَبَأَهُۥ بَعْدَ حِينٍۭ",
    words: [
      { arabic: "وَلَتَعْلَمُنَّ", transliteration: "walataʿlamunna", meaning: { en: "And surely you will know", ur: "اور یقیناً تم will جاننا" }, pos: "CONJ+N", posLabel: "CONJ+N", grammar: { role: "conjunction+noun" } },
      { arabic: "نَبَأَهُۥ", transliteration: "naba-ahu", meaning: { en: "its information", ur: "its information" }, pos: "V", posLabel: "V", grammar: { role: "verb" } },
      { arabic: "بَعْدَ", transliteration: "baʿda", meaning: { en: "after", ur: "بعد" }, pos: "N", posLabel: "N", grammar: { role: "noun" } },
      { arabic: "حِينٍۭ", transliteration: "ḥīnin", meaning: { en: "a time", ur: "a وقت" }, pos: "N", posLabel: "N", grammar: { role: "noun" } }
    ],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + فاعل' }
      ],
    },
  },
};

export default TREEBANK_DATA;
