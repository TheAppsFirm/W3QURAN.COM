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
  }
};

export default TREEBANK_DATA;
