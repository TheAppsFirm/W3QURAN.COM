/**
 * Surah As-Saffat (37) - Those Ranged in Rows
 * Quranic Arabic Treebank Data
 * First 10 ayahs - Makki surah (182 total ayahs)
 * Theme: The Day of Judgment, stories of prophets, and condemnation of shirk
 */

export const TREEBANK_DATA = {
  surahId: 37,
  surahName: "As-Saffat",
  surahNameArabic: "الصافات",
  totalAyahs: 182,

  1: {
    ayahNumber: 1,
    text: "وَالصَّافَّاتِ صَفًّا",
    words: [
      {
        id: '37:1:1',
        arabic: 'وَالصَّافَّاتِ',
        transliteration: 'waṣ-ṣāffāti',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ص ف ف',
        meaning: {
          en: 'By those lined up in rows',
          ur: 'قسم ہے صف باندھنے والوں کی'
        },
        grammarRole: 'oath',
        grammarExplanations: {
          en: 'Oath particle وَ (by) + feminine plural active participle (اسم فاعل). The ones lined in rows - refers to angels or believers in prayer.',
          ur: 'حرف قسم وَ + اسم فاعل جمع مؤنث۔ صف باندھنے والے - فرشتوں یا نماز میں مومنین کی طرف اشارہ۔'
        }
      },
      {
        id: '37:1:2',
        arabic: 'صَفًّا',
        transliteration: 'ṣaffan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ص ف ف',
        meaning: {
          en: 'in rows',
          ur: 'صف بستہ'
        },
        grammarRole: 'mafool_mutlaq',
        grammarExplanations: {
          en: 'Cognate accusative (مفعول مطلق) - emphasizes the manner of lining up. Accusative case with tanween.',
          ur: 'مفعول مطلق - صف باندھنے کے انداز پر زور۔ منصوب تنوین کے ساتھ۔'
        }
      }
    ],
    structure: {
      relationships: [],
    },
  },

  2: {
    ayahNumber: 2,
    text: "فَالزَّاجِرَاتِ زَجْرًا",
    words: [
      {
        id: '37:2:1',
        arabic: 'فَالزَّاجِرَاتِ',
        transliteration: 'faz-zājirāti',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ز ج ر',
        meaning: {
          en: 'And those who drive/repel',
          ur: 'پھر ڈانٹنے والوں کی'
        },
        grammarRole: 'oath_continuation',
        grammarExplanations: {
          en: 'Conjunction فَ (then) + definite feminine plural active participle. Those who rebuke/drive away - angels who drive clouds or repel evil.',
          ur: 'حرف عطف فَ + اسم فاعل معرفہ جمع مؤنث۔ ڈانٹنے والے - فرشتے جو بادلوں کو چلاتے یا شر کو دور کرتے ہیں۔'
        }
      },
      {
        id: '37:2:2',
        arabic: 'زَجْرًا',
        transliteration: 'zajran',
        pos: ['N'],
        posLabel: 'N',
        root: 'ز ج ر',
        meaning: {
          en: 'driving/rebuking',
          ur: 'ڈانٹ کر'
        },
        grammarRole: 'mafool_mutlaq',
        grammarExplanations: {
          en: 'Cognate accusative (مفعول مطلق) emphasizing the act of rebuking. Accusative indefinite.',
          ur: 'مفعول مطلق ڈانٹنے کے عمل پر زور۔ منصوب نکرہ۔'
        }
      }
    ],
    structure: {
      relationships: [],
    },
  },

  3: {
    ayahNumber: 3,
    text: "فَالتَّالِيَاتِ ذِكْرًا",
    words: [
      {
        id: '37:3:1',
        arabic: 'فَالتَّالِيَاتِ',
        transliteration: 'fat-tāliyāti',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ت ل و',
        meaning: {
          en: 'And those who recite',
          ur: 'پھر تلاوت کرنے والوں کی'
        },
        grammarRole: 'oath_continuation',
        grammarExplanations: {
          en: 'Conjunction فَ + definite feminine plural active participle from root ت ل و (to follow/recite). Angels or believers who recite.',
          ur: 'حرف عطف فَ + اسم فاعل معرفہ جمع مؤنث۔ تلاوت کرنے والے فرشتے یا مومنین۔'
        }
      },
      {
        id: '37:3:2',
        arabic: 'ذِكْرًا',
        transliteration: 'dhikran',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        meaning: {
          en: 'a reminder/remembrance',
          ur: 'ذکر'
        },
        grammarRole: 'mafool_bihi',
        grammarExplanations: {
          en: 'Direct object (مفعول به) - what is being recited. Accusative indefinite with tanween.',
          ur: 'مفعول بہ - جو تلاوت کیا جا رہا ہے۔ منصوب نکرہ تنوین کے ساتھ۔'
        }
      }
    ],
    structure: {
      relationships: [],
    },
  },

  4: {
    ayahNumber: 4,
    text: "إِنَّ إِلَٰهَكُمْ لَوَاحِدٌ",
    words: [
      {
        id: '37:4:1',
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
          en: 'Emphatic particle (حرف توكيد) that introduces a nominal sentence with emphasis. Puts its noun in accusative.',
          ur: 'حرف توکید جو جملہ اسمیہ کو تاکید کے ساتھ شروع کرتا ہے۔ اپنے اسم کو منصوب کرتا ہے۔'
        }
      },
      {
        id: '37:4:2',
        arabic: 'إِلَٰهَكُمْ',
        transliteration: 'ilāhakum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'أ ل ه',
        meaning: {
          en: 'your God',
          ur: 'تمہارا معبود'
        },
        grammarRole: 'ism_inna',
        grammarExplanations: {
          en: 'Subject of إِنَّ (اسم إن) - accusative case + attached possessive pronoun كُمْ (your, 2nd person masculine plural).',
          ur: 'اسم إن - منصوب + ضمیر متصل ملکیت كُمْ (تمہارا، مذکر جمع مخاطب)۔'
        }
      },
      {
        id: '37:4:3',
        arabic: 'لَوَاحِدٌ',
        transliteration: 'la-wāḥidun',
        pos: ['EMPH', 'ADJ'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'توکید' },
        { from: 2, to: 3, label: 'مبتدأ + خبر' }
      ],
    },
        posLabel: 'EMPH+ADJ',
        root: 'و ح د',
        meaning: {
          en: 'surely One',
          ur: 'یقیناً ایک ہی ہے'
        },
        grammarRole: 'khabar_inna',
        grammarExplanations: {
          en: 'Predicate of إِنَّ (خبر إن) with emphatic لَ prefix. Nominative case - "your God is certainly One".',
          ur: 'خبر إن تاکیدی لَ کے ساتھ۔ مرفوع - "تمہارا معبود یقیناً ایک ہے"۔'
        }
      }
    ]
  },

  5: {
    ayahNumber: 5,
    text: "رَّبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا وَرَبُّ الْمَشَارِقِ",
    words: [
      {
        id: '37:5:1',
        arabic: 'رَّبُّ',
        transliteration: 'rabbu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: 'Lord',
          ur: 'رب'
        },
        grammarRole: 'badal',
        grammarExplanations: {
          en: 'Substitute (بدل) for إِلَٰهَكُمْ or continuation as khabar. Nominative case as predicate.',
          ur: 'إِلَٰهَكُمْ کا بدل یا خبر کا تسلسل۔ مرفوع بطور خبر۔'
        }
      },
      {
        id: '37:5:2',
        arabic: 'السَّمَاوَاتِ',
        transliteration: 'as-samāwāti',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: {
          en: 'of the heavens',
          ur: 'آسمانوں کا'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) - possessor in idafa construction. Definite plural feminine.',
          ur: 'مضاف إليه - اضافت میں مملوک۔ معرفہ جمع مؤنث۔'
        }
      },
      {
        id: '37:5:3',
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
          en: 'Conjunction وَ + conjoined noun (معطوف) in genitive case matching السَّمَاوَاتِ.',
          ur: 'حرف عطف وَ + معطوف مجرور السَّمَاوَاتِ کے مطابق۔'
        }
      },
      {
        id: '37:5:4',
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
          en: 'Conjunction + relative pronoun مَا (what/whatever). Refers to everything in between.',
          ur: 'حرف عطف + اسم موصول مَا (جو کچھ)۔ درمیان کی ہر چیز کی طرف اشارہ۔'
        }
      },
      {
        id: '37:5:5',
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
          en: 'Adverb of place (ظرف مكان) + dual pronoun هُمَا (them both - heaven and earth).',
          ur: 'ظرف مکان + ضمیر تثنیہ هُمَا (ان دونوں - آسمان اور زمین)۔'
        }
      },
      {
        id: '37:5:6',
        arabic: 'وَرَبُّ',
        transliteration: 'wa-rabbu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ر ب ب',
        meaning: {
          en: 'and Lord',
          ur: 'اور رب'
        },
        grammarRole: 'matoof',
        grammarExplanations: {
          en: 'Conjunction + conjoined noun. Another attribute of Allah - Lord of the easts.',
          ur: 'حرف عطف + معطوف۔ اللہ کی ایک اور صفت - مشرقوں کا رب۔'
        }
      },
      {
        id: '37:5:7',
        arabic: 'الْمَشَارِقِ',
        transliteration: 'al-mashāriqi',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 4, label: 'عطف' },
        { from: 2, to: 5, label: 'عطف' },
        { from: 5, to: 7, label: 'عطف' },
        { from: 6, to: 7, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'ش ر ق',
        meaning: {
          en: 'of the easts',
          ur: 'مشرقوں کا'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه). Plural indicates different rising points of the sun throughout the year.',
          ur: 'مضاف إليه۔ جمع سال بھر سورج کے مختلف طلوع ہونے کی جگہوں کی طرف اشارہ۔'
        }
      }
    ]
  },

  6: {
    ayahNumber: 6,
    text: "إِنَّا زَيَّنَّا السَّمَاءَ الدُّنْيَا بِزِينَةٍ الْكَوَاكِبِ",
    words: [
      {
        id: '37:6:1',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['EMPH', 'PRON'],
        posLabel: 'EMPH+PRON',
        root: null,
        meaning: {
          en: 'Indeed, We',
          ur: 'بے شک ہم نے'
        },
        grammarRole: 'inna_ism',
        grammarExplanations: {
          en: 'Emphatic particle إِنَّ + attached pronoun نَا (We - royal we referring to Allah). Combined form.',
          ur: 'حرف توکید إِنَّ + ضمیر متصل نَا (ہم - اللہ کی تعظیمی ضمیر)۔ مرکب صورت۔'
        }
      },
      {
        id: '37:6:2',
        arabic: 'زَيَّنَّا',
        transliteration: 'zayyannā',
        pos: ['V'],
        posLabel: 'V',
        root: 'ز ي ن',
        meaning: {
          en: 'We have adorned',
          ur: 'آراستہ کیا'
        },
        grammarRole: 'khabar_inna',
        grammarExplanations: {
          en: 'Perfect verb Form II (فعّل pattern) - intensive meaning "to beautify/adorn". Subject is نَا (we).',
          ur: 'فعل ماضی باب تفعیل - تکثیری معنی "سجانا/آراستہ کرنا"۔ فاعل نَا (ہم)۔'
        }
      },
      {
        id: '37:6:3',
        arabic: 'السَّمَاءَ',
        transliteration: 'as-samā\'a',
        pos: ['N'],
        posLabel: 'N',
        root: 'س م و',
        meaning: {
          en: 'the heaven',
          ur: 'آسمان کو'
        },
        grammarRole: 'mafool_bihi',
        grammarExplanations: {
          en: 'Direct object (مفعول به) - accusative definite. The sky that was adorned.',
          ur: 'مفعول بہ - منصوب معرفہ۔ آسمان جو سجایا گیا۔'
        }
      },
      {
        id: '37:6:4',
        arabic: 'الدُّنْيَا',
        transliteration: 'ad-dunyā',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'د ن و',
        meaning: {
          en: 'the nearest',
          ur: 'قریب والے'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) describing السَّمَاءَ. Means "lowest/nearest" - the sky visible to us.',
          ur: 'صفت السَّمَاءَ کی۔ معنی "سب سے قریب/نیچے والا" - ہمیں نظر آنے والا آسمان۔'
        }
      },
      {
        id: '37:6:5',
        arabic: 'بِزِينَةٍ',
        transliteration: 'bi-zīnatin',
        pos: ['PREP', 'N'],
        posLabel: 'PREP+N',
        root: 'ز ي ن',
        meaning: {
          en: 'with an adornment',
          ur: 'زینت سے'
        },
        grammarRole: 'jarr_majroor',
        grammarExplanations: {
          en: 'Preposition بِ + genitive noun (مجرور). Indicates the means of adornment.',
          ur: 'حرف جر بِ + اسم مجرور۔ زینت کا ذریعہ بیان کرتا ہے۔'
        }
      },
      {
        id: '37:6:6',
        arabic: 'الْكَوَاكِبِ',
        transliteration: 'al-kawākibi',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مبتدأ + خبر' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفت' },
        { from: 5, to: 6, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'ك و ك ب',
        meaning: {
          en: 'the stars',
          ur: 'ستاروں کی'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) or بدل for زِينَةٍ. The stars are themselves the adornment.',
          ur: 'مضاف إليه یا زِينَةٍ کا بدل۔ ستارے خود زینت ہیں۔'
        }
      }
    ]
  },

  7: {
    ayahNumber: 7,
    text: "وَحِفْظًا مِّن كُلِّ شَيْطَانٍ مَّارِدٍ",
    words: [
      {
        id: '37:7:1',
        arabic: 'وَحِفْظًا',
        transliteration: 'wa-ḥifẓan',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ح ف ظ',
        meaning: {
          en: 'And as protection',
          ur: 'اور حفاظت کے لیے'
        },
        grammarRole: 'mafool_lahu',
        grammarExplanations: {
          en: 'Conjunction + accusative noun as مفعول لأجله (object of purpose) - stars serve as protection too.',
          ur: 'حرف عطف + منصوب بطور مفعول لأجلہ - ستارے حفاظت کا کام بھی کرتے ہیں۔'
        }
      },
      {
        id: '37:7:2',
        arabic: 'مِّن',
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
          en: 'Preposition indicating protection FROM something.',
          ur: 'حرف جر جو کسی چیز سے حفاظت کا بیان کرتا ہے۔'
        }
      },
      {
        id: '37:7:3',
        arabic: 'كُلِّ',
        transliteration: 'kulli',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل ل',
        meaning: {
          en: 'every',
          ur: 'ہر'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun (مجرور) governed by مِن. Universal quantifier "all/every".',
          ur: 'اسم مجرور مِن سے۔ کلی معنی "ہر/تمام"۔'
        }
      },
      {
        id: '37:7:4',
        arabic: 'شَيْطَانٍ',
        transliteration: 'shayṭānin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ط ن',
        meaning: {
          en: 'devil',
          ur: 'شیطان'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) in idafa with كُلِّ. Indefinite indicates any/every devil.',
          ur: 'مضاف إليه کُلِّ کی اضافت میں۔ نکرہ ہر شیطان کی طرف اشارہ۔'
        }
      },
      {
        id: '37:7:5',
        arabic: 'مَّارِدٍ',
        transliteration: 'māridin',
        pos: ['ADJ'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 3, to: 4, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'ADJ',
        root: 'م ر د',
        meaning: {
          en: 'rebellious',
          ur: 'سرکش'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for شَيْطَانٍ - genitive to match. Active participle meaning "obstinate/rebellious".',
          ur: 'صفت شَيْطَانٍ کی - مجرور مطابقت کے لیے۔ اسم فاعل معنی "ضدی/سرکش"۔'
        }
      }
    ]
  },

  8: {
    ayahNumber: 8,
    text: "لَّا يَسَّمَّعُونَ إِلَى الْمَلَإِ الْأَعْلَىٰ وَيُقْذَفُونَ مِن كُلِّ جَانِبٍ",
    words: [
      {
        id: '37:8:1',
        arabic: 'لَّا',
        transliteration: 'lā',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں'
        },
        grammarRole: 'harf_nafy',
        grammarExplanations: {
          en: 'Negative particle negating the following imperfect verb.',
          ur: 'حرف نفی آنے والے فعل مضارع کی نفی کرتا ہے۔'
        }
      },
      {
        id: '37:8:2',
        arabic: 'يَسَّمَّعُونَ',
        transliteration: 'yassamma\'ūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'س م ع',
        meaning: {
          en: 'they can listen',
          ur: 'وہ سن سکیں'
        },
        grammarRole: 'verb',
        grammarExplanations: {
          en: 'Imperfect verb Form V (تَفَعَّلَ) - they try to listen/eavesdrop. 3rd person masculine plural.',
          ur: 'فعل مضارع باب تفعّل - سننے کی کوشش کرتے ہیں۔ غائب مذکر جمع۔'
        }
      },
      {
        id: '37:8:3',
        arabic: 'إِلَى',
        transliteration: 'ilā',
        pos: ['PREP'],
        posLabel: 'PREP',
        root: null,
        meaning: {
          en: 'to',
          ur: 'کی طرف'
        },
        grammarRole: 'harf_jarr',
        grammarExplanations: {
          en: 'Preposition indicating direction - listening towards.',
          ur: 'حرف جر سمت کی طرف اشارہ - کی جانب سننا۔'
        }
      },
      {
        id: '37:8:4',
        arabic: 'الْمَلَإِ',
        transliteration: 'al-mala\'i',
        pos: ['N'],
        posLabel: 'N',
        root: 'م ل أ',
        meaning: {
          en: 'the assembly',
          ur: 'مجلس'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun (مجرور) governed by إِلَى. Refers to the heavenly assembly/council.',
          ur: 'اسم مجرور إِلَى سے۔ آسمانی مجلس/دربار کی طرف اشارہ۔'
        }
      },
      {
        id: '37:8:5',
        arabic: 'الْأَعْلَىٰ',
        transliteration: 'al-a\'lā',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ع ل و',
        meaning: {
          en: 'the Highest',
          ur: 'اعلیٰ'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for الْمَلَإِ - superlative form (أَفْعَل) meaning "highest".',
          ur: 'صفت الْمَلَإِ کی - اسم تفضیل (أَفْعَل) معنی "سب سے اونچا"۔'
        }
      },
      {
        id: '37:8:6',
        arabic: 'وَيُقْذَفُونَ',
        transliteration: 'wa-yuqdhafūna',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق ذ ف',
        meaning: {
          en: 'and they are pelted',
          ur: 'اور ان پر مارا جاتا ہے'
        },
        grammarRole: 'verb_passive',
        grammarExplanations: {
          en: 'Conjunction + passive imperfect verb. They are pelted/thrown at with meteors.',
          ur: 'حرف عطف + فعل مضارع مجہول۔ ان پر شہاب ثاقب مارے جاتے ہیں۔'
        }
      },
      {
        id: '37:8:7',
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
          en: 'Preposition indicating source/direction of the pelting.',
          ur: 'حرف جر مارنے کی سمت/منبع کی طرف اشارہ۔'
        }
      },
      {
        id: '37:8:8',
        arabic: 'كُلِّ',
        transliteration: 'kulli',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك ل ل',
        meaning: {
          en: 'every',
          ur: 'ہر'
        },
        grammarRole: 'majroor',
        grammarExplanations: {
          en: 'Genitive noun governed by مِن. "From every/all sides".',
          ur: 'اسم مجرور مِن سے۔ "ہر طرف سے"۔'
        }
      },
      {
        id: '37:8:9',
        arabic: 'جَانِبٍ',
        transliteration: 'jānibin',
        pos: ['N'],
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 3, to: 4, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' },
        { from: 2, to: 6, label: 'عطف' },
        { from: 7, to: 8, label: 'جار + مجرور' },
        { from: 8, to: 9, label: 'مضاف + مضاف إليه' }
      ],
    },
        posLabel: 'N',
        root: 'ج ن ب',
        meaning: {
          en: 'side',
          ur: 'طرف'
        },
        grammarRole: 'mudaf_ilayh',
        grammarExplanations: {
          en: 'Genitive (مضاف إليه) in idafa with كُلِّ. Indefinite - any/every side.',
          ur: 'مضاف إليه کُلِّ کی اضافت میں۔ نکرہ - ہر طرف۔'
        }
      }
    ]
  },

  9: {
    ayahNumber: 9,
    text: "دُحُورًا ۖ وَلَهُمْ عَذَابٌ وَاصِبٌ",
    words: [
      {
        id: '37:9:1',
        arabic: 'دُحُورًا',
        transliteration: 'duḥūran',
        pos: ['N'],
        posLabel: 'N',
        root: 'د ح ر',
        meaning: {
          en: 'repelled/driven away',
          ur: 'دھکیلے ہوئے'
        },
        grammarRole: 'mafool_lahu',
        grammarExplanations: {
          en: 'Accusative noun as مفعول لأجله or حال - state of being driven away. Masdar (verbal noun).',
          ur: 'منصوب بطور مفعول لأجلہ یا حال - دھکیلے جانے کی حالت۔ مصدر۔'
        }
      },
      {
        id: '37:9:2',
        arabic: 'وَلَهُمْ',
        transliteration: 'wa-lahum',
        pos: ['CONJ', 'PREP', 'PRON'],
        posLabel: 'CONJ+PREP+PRON',
        root: null,
        meaning: {
          en: 'and for them',
          ur: 'اور ان کے لیے'
        },
        grammarRole: 'jarr_majroor',
        grammarExplanations: {
          en: 'Conjunction وَ + preposition لِ + pronoun هُمْ. Front-loaded predicate (خبر مقدم).',
          ur: 'حرف عطف وَ + حرف جر لِ + ضمیر هُمْ۔ خبر مقدم۔'
        }
      },
      {
        id: '37:9:3',
        arabic: 'عَذَابٌ',
        transliteration: '\'adhābun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ذ ب',
        meaning: {
          en: 'punishment',
          ur: 'عذاب'
        },
        grammarRole: 'mubtada_muakhkhar',
        grammarExplanations: {
          en: 'Delayed subject (مبتدأ مؤخر) - nominative indefinite. "For them is punishment".',
          ur: 'مبتدأ مؤخر - مرفوع نکرہ۔ "ان کے لیے عذاب ہے"۔'
        }
      },
      {
        id: '37:9:4',
        arabic: 'وَاصِبٌ',
        transliteration: 'wāṣibun',
        pos: ['ADJ'],
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
        posLabel: 'ADJ',
        root: 'و ص ب',
        meaning: {
          en: 'lasting/perpetual',
          ur: 'مسلسل'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for عَذَابٌ - nominative to match. Active participle meaning "continuous/perpetual".',
          ur: 'صفت عَذَابٌ کی - مرفوع مطابقت کے لیے۔ اسم فاعل معنی "مسلسل/دائمی"۔'
        }
      }
    ]
  },

  10: {
    ayahNumber: 10,
    text: "إِلَّا مَنْ خَطِفَ الْخَطْفَةَ فَأَتْبَعَهُ شِهَابٌ ثَاقِبٌ",
    words: [
      {
        id: '37:10:1',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['EXCEPT'],
        posLabel: 'EXCEPT',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'مگر'
        },
        grammarRole: 'adat_istithna',
        grammarExplanations: {
          en: 'Exception particle - introduces an exception to the previous statement about not listening.',
          ur: 'ادات استثناء - پہلے بیان کی نفی سے استثناء بیان کرتا ہے۔'
        }
      },
      {
        id: '37:10:2',
        arabic: 'مَنْ',
        transliteration: 'man',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'one who',
          ur: 'جو'
        },
        grammarRole: 'mustathna',
        grammarExplanations: {
          en: 'Relative pronoun (اسم موصول) as the excepted entity. "Whoever" snatches.',
          ur: 'اسم موصول بطور مستثنیٰ۔ "جو بھی" چھین لے۔'
        }
      },
      {
        id: '37:10:3',
        arabic: 'خَطِفَ',
        transliteration: 'khaṭifa',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ط ف',
        meaning: {
          en: 'snatches',
          ur: 'اچک لے'
        },
        grammarRole: 'sila',
        grammarExplanations: {
          en: 'Perfect verb Form I - "snatched/grabbed quickly". Part of the relative clause (صلة الموصول).',
          ur: 'فعل ماضی باب اول - "تیزی سے چھین لیا"۔ صلہ موصول کا حصہ۔'
        }
      },
      {
        id: '37:10:4',
        arabic: 'الْخَطْفَةَ',
        transliteration: 'al-khaṭfata',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ط ف',
        meaning: {
          en: 'a snatching',
          ur: 'ایک جھپٹ'
        },
        grammarRole: 'mafool_mutlaq',
        grammarExplanations: {
          en: 'Cognate accusative (مفعول مطلق) - emphasizes the act of snatching. Definite for specificity.',
          ur: 'مفعول مطلق - چھیننے کے عمل پر زور۔ معرفہ مخصوص کرنے کے لیے۔'
        }
      },
      {
        id: '37:10:5',
        arabic: 'فَأَتْبَعَهُ',
        transliteration: 'fa-atba\'ahu',
        pos: ['CONJ', 'V', 'PRON'],
        posLabel: 'CONJ+V+PRON',
        root: 'ت ب ع',
        meaning: {
          en: 'then follows him',
          ur: 'تو اس کا پیچھا کرتا ہے'
        },
        grammarRole: 'jawab',
        grammarExplanations: {
          en: 'Conjunction فَ + perfect verb Form IV (أَفْعَلَ - causative) + object pronoun. "Then pursues him".',
          ur: 'حرف عطف فَ + فعل ماضی باب إفعال (متعدی) + ضمیر مفعول۔ "پھر اس کا پیچھا کرتا ہے"۔'
        }
      },
      {
        id: '37:10:6',
        arabic: 'شِهَابٌ',
        transliteration: 'shihābun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ه ب',
        meaning: {
          en: 'a flaming fire',
          ur: 'شعلہ'
        },
        grammarRole: 'faa\'il',
        grammarExplanations: {
          en: 'Subject (فاعل) of أَتْبَعَ - nominative indefinite. The meteor/shooting star.',
          ur: 'فاعل أَتْبَعَ کا - مرفوع نکرہ۔ شہاب ثاقب۔'
        }
      },
      {
        id: '37:10:7',
        arabic: 'ثَاقِبٌ',
        transliteration: 'thāqibun',
        pos: ['ADJ'],
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصول + صلة' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 3, to: 5, label: 'عطف' },
        { from: 6, to: 7, label: 'موصوف + صفت' }
      ],
    },
        posLabel: 'ADJ',
        root: 'ث ق ب',
        meaning: {
          en: 'piercing',
          ur: 'چمکدار'
        },
        grammarRole: 'sifa',
        grammarExplanations: {
          en: 'Adjective (صفة) for شِهَابٌ - nominative to match. Active participle meaning "piercing/penetrating".',
          ur: 'صفت شِهَابٌ کی - مرفوع مطابقت کے لیے۔ اسم فاعل معنی "چمکدار/چھیدنے والا"۔'
        }
      }
    ]
  },

  11: {
    ayahNumber: 11,
    text: "فَٱسْتَفْتِهِمْ أَهُمْ أَشَدُّ خَلْقًا أَم مَّنْ خَلَقْنَآ ۚ إِنَّا خَلَقْنَـٰهُم مِّن طِينٍۢ لَّازِبٍۭ",
    words: [
      {
        id: '37:11:1',
        arabic: 'فَٱسْتَفْتِهِمْ',
        transliteration: 'fa-is\'taftihim',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then ask them',
          ur: 'پھر ask انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:11:2',
        arabic: 'أَهُمْ',
        transliteration: 'ahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Are they',
          ur: 'ہیں وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:11:3',
        arabic: 'أَشَدُّ',
        transliteration: 'ashaddu',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ش د د',
        meaning: {
          en: 'a stronger',
          ur: 'a stronger'
        },
        grammarRole: 'sifa',
      },
      {
        id: '37:11:4',
        arabic: 'خَلْقًا',
        transliteration: 'khalqan',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ل ق',
        meaning: {
          en: 'creation',
          ur: 'creation'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:11:5',
        arabic: 'أَم',
        transliteration: 'am',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'or',
          ur: 'یا'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:11:6',
        arabic: 'مَّنْ',
        transliteration: 'man',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(those) whom',
          ur: '(those) whom'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:11:7',
        arabic: 'خَلَقْنَآ ۚ',
        transliteration: 'khalaqnā',
        pos: ['V'],
        posLabel: 'V',
        root: 'خ ل ق',
        meaning: {
          en: 'We have created',
          ur: 'ہم have created'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:11:8',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, We',
          ur: 'Indeed, ہم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:11:9',
        arabic: 'خَلَقْنَـٰهُم',
        transliteration: 'khalaqnāhum',
        pos: ['N'],
        posLabel: 'N',
        root: 'خ ل ق',
        meaning: {
          en: 'created them',
          ur: 'created انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:11:10',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'from',
          ur: 'سے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:11:11',
        arabic: 'طِينٍۢ',
        transliteration: 'ṭīnin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a clay',
          ur: 'a clay'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:11:12',
        arabic: 'لَّازِبٍۭ',
        transliteration: 'lāzibin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'sticky',
          ur: 'sticky'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' },
        { from: 7, to: 8, label: 'فعل + مفعول به' },
        { from: 11, to: 12, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  12: {
    ayahNumber: 12,
    text: "بَلْ عَجِبْتَ وَيَسْخَرُونَ",
    words: [
      {
        id: '37:12:1',
        arabic: 'بَلْ',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Nay',
          ur: 'Nay'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:12:2',
        arabic: 'عَجِبْتَ',
        transliteration: 'ʿajib\'ta',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ج ب',
        meaning: {
          en: 'you wonder',
          ur: 'تم wonder'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:12:3',
        arabic: 'وَيَسْخَرُونَ',
        transliteration: 'wayaskharūna',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'س خ ر',
        meaning: {
          en: 'while they mock',
          ur: 'while وہ mock'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'عطف' }
      ],
    },
  },

  13: {
    ayahNumber: 13,
    text: "وَإِذَا ذُكِّرُوا۟ لَا يَذْكُرُونَ",
    words: [
      {
        id: '37:13:1',
        arabic: 'وَإِذَا',
        transliteration: 'wa-idhā',
        pos: ['CONJ', 'T'],
        posLabel: 'CONJ+T',
        root: null,
        meaning: {
          en: 'And when',
          ur: 'اور جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:13:2',
        arabic: 'ذُكِّرُوا۟',
        transliteration: 'dhukkirū',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'they are reminded',
          ur: 'وہ ہیں reminded'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:13:3',
        arabic: 'لَا',
        transliteration: 'lā',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'not',
          ur: 'نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:13:4',
        arabic: 'يَذْكُرُونَ',
        transliteration: 'yadhkurūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ذ ك ر',
        meaning: {
          en: 'they receive admonition',
          ur: 'وہ receive admonition'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' }
      ],
    },
      }
    ]
  },

  14: {
    ayahNumber: 14,
    text: "وَإِذَا رَأَوْا۟ ءَايَةًۭ يَسْتَسْخِرُونَ",
    words: [
      {
        id: '37:14:1',
        arabic: 'وَإِذَا',
        transliteration: 'wa-idhā',
        pos: ['CONJ', 'T'],
        posLabel: 'CONJ+T',
        root: null,
        meaning: {
          en: 'And when',
          ur: 'اور جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:14:2',
        arabic: 'رَأَوْا۟',
        transliteration: 'ra-aw',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر أ ي',
        meaning: {
          en: 'they see',
          ur: 'وہ see'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:14:3',
        arabic: 'ءَايَةًۭ',
        transliteration: 'āyatan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a Sign',
          ur: 'a Sign'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:14:4',
        arabic: 'يَسْتَسْخِرُونَ',
        transliteration: 'yastaskhirūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'س خ ر',
        meaning: {
          en: 'they mock',
          ur: 'وہ mock'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  15: {
    ayahNumber: 15,
    text: "وَقَالُوٓا۟ إِنْ هَـٰذَآ إِلَّا سِحْرٌۭ مُّبِينٌ",
    words: [
      {
        id: '37:15:1',
        arabic: 'وَقَالُوٓا۟',
        transliteration: 'waqālū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: {
          en: 'And they say',
          ur: 'اور وہ کہو'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:15:2',
        arabic: 'إِنْ',
        transliteration: 'in',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:15:3',
        arabic: 'هَـٰذَآ',
        transliteration: 'hādhā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(is) this',
          ur: '(is) یہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:15:4',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'except',
          ur: 'سوائے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:15:5',
        arabic: 'سِحْرٌۭ',
        transliteration: 'siḥ\'run',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a magic',
          ur: 'a magic'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:15:6',
        arabic: 'مُّبِينٌ',
        transliteration: 'mubīnun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'clear',
          ur: 'واضح'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  16: {
    ayahNumber: 16,
    text: "أَءِذَا مِتْنَا وَكُنَّا تُرَابًۭا وَعِظَـٰمًا أَءِنَّا لَمَبْعُوثُونَ",
    words: [
      {
        id: '37:16:1',
        arabic: 'أَءِذَا',
        transliteration: 'a-idhā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Is it when',
          ur: 'ہے it جب'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:16:2',
        arabic: 'مِتْنَا',
        transliteration: 'mit\'nā',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'م و ت',
        meaning: {
          en: 'we are dead',
          ur: 'ہم ہیں dead'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:16:3',
        arabic: 'وَكُنَّا',
        transliteration: 'wakunnā',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ك و ن',
        meaning: {
          en: 'and have become',
          ur: 'اور have become'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:16:4',
        arabic: 'تُرَابًۭا',
        transliteration: 'turāban',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'dust',
          ur: 'dust'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:16:5',
        arabic: 'وَعِظَـٰمًا',
        transliteration: 'waʿiẓāman',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and bones',
          ur: 'اور bones'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:16:6',
        arabic: 'أَءِنَّا',
        transliteration: 'a-innā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'shall we then',
          ur: 'shall ہم پھر'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:16:7',
        arabic: 'لَمَبْعُوثُونَ',
        transliteration: 'lamabʿūthūna',
        pos: ['N'],
        posLabel: 'N',
        root: 'ب ع ث',
        meaning: {
          en: 'be certainly resurrected',
          ur: 'be certainly resurrected'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  17: {
    ayahNumber: 17,
    text: "أَوَءَابَآؤُنَا ٱلْأَوَّلُونَ",
    words: [
      {
        id: '37:17:1',
        arabic: 'أَوَءَابَآؤُنَا',
        transliteration: 'awaābāunā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Or our fathers',
          ur: 'یا ہمارا fathers'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:17:2',
        arabic: 'ٱلْأَوَّلُونَ',
        transliteration: 'l-awalūna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'former',
          ur: 'former'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  18: {
    ayahNumber: 18,
    text: "قُلْ نَعَمْ وَأَنتُمْ دَٰخِرُونَ",
    words: [
      {
        id: '37:18:1',
        arabic: 'قُلْ',
        transliteration: 'qul',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: 'Say',
          ur: 'کہو'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:18:2',
        arabic: 'نَعَمْ',
        transliteration: 'naʿam',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Yes',
          ur: 'Yes'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:18:3',
        arabic: 'وَأَنتُمْ',
        transliteration: 'wa-antum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and you',
          ur: 'اور تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:18:4',
        arabic: 'دَٰخِرُونَ',
        transliteration: 'dākhirūna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: '(will be) humiliated',
          ur: '(will be) humiliated'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  19: {
    ayahNumber: 19,
    text: "فَإِنَّمَا هِىَ زَجْرَةٌۭ وَٰحِدَةٌۭ فَإِذَا هُمْ يَنظُرُونَ",
    words: [
      {
        id: '37:19:1',
        arabic: 'فَإِنَّمَا',
        transliteration: 'fa-innamā',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then only',
          ur: 'پھر صرف'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:19:2',
        arabic: 'هِىَ',
        transliteration: 'hiya',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'it',
          ur: 'it'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:19:3',
        arabic: 'زَجْرَةٌۭ',
        transliteration: 'zajratun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will be) a cry',
          ur: '(will be) a cry'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:19:4',
        arabic: 'وَٰحِدَةٌۭ',
        transliteration: 'wāḥidatun',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'single',
          ur: 'single'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:19:5',
        arabic: 'فَإِذَا',
        transliteration: 'fa-idhā',
        pos: ['CONJ', 'T'],
        posLabel: 'CONJ+T',
        root: null,
        meaning: {
          en: 'then, behold',
          ur: 'then, behold'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:19:6',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'They',
          ur: 'وہ'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:19:7',
        arabic: 'يَنظُرُونَ',
        transliteration: 'yanẓurūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'will see',
          ur: 'will see'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  20: {
    ayahNumber: 20,
    text: "وَقَالُوا۟ يَـٰوَيْلَنَا هَـٰذَا يَوْمُ ٱلدِّينِ",
    words: [
      {
        id: '37:20:1',
        arabic: 'وَقَالُوا۟',
        transliteration: 'waqālū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: {
          en: 'And they will say',
          ur: 'اور وہ will کہو'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:20:2',
        arabic: 'يَـٰوَيْلَنَا',
        transliteration: 'yāwaylanā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'O woe to us',
          ur: 'O woe to us'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:20:3',
        arabic: 'هَـٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'This',
          ur: 'یہ'
        },
        grammarRole: 'ism-ishara',
      },
      {
        id: '37:20:4',
        arabic: 'يَوْمُ',
        transliteration: 'yawmu',
        pos: ['T'],
        posLabel: 'T',
        root: 'ي و م',
        meaning: {
          en: '(is the) Day',
          ur: '(is the) دن'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:20:5',
        arabic: 'ٱلدِّينِ',
        transliteration: 'l-dīni',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) the Recompense',
          ur: '(of) the Recompense'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  21: {
    ayahNumber: 21,
    text: "هَـٰذَا يَوْمُ ٱلْفَصْلِ ٱلَّذِى كُنتُم بِهِۦ تُكَذِّبُونَ",
    words: [
      {
        id: '37:21:1',
        arabic: 'هَـٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'This',
          ur: 'یہ'
        },
        grammarRole: 'ism-ishara',
      },
      {
        id: '37:21:2',
        arabic: 'يَوْمُ',
        transliteration: 'yawmu',
        pos: ['T'],
        posLabel: 'T',
        root: 'ي و م',
        meaning: {
          en: '(is the) Day',
          ur: '(is the) دن'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:21:3',
        arabic: 'ٱلْفَصْلِ',
        transliteration: 'l-faṣli',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Judgment',
          ur: '(of) Judgment'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:21:4',
        arabic: 'ٱلَّذِى',
        transliteration: 'alladhī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'which',
          ur: 'which'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:21:5',
        arabic: 'كُنتُم',
        transliteration: 'kuntum',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'you used to',
          ur: 'تم used to'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:21:6',
        arabic: 'بِهِۦ',
        transliteration: 'bihi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: '[of it]',
          ur: '[of it]'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:21:7',
        arabic: 'تُكَذِّبُونَ',
        transliteration: 'tukadhibūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'deny',
          ur: 'deny'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  22: {
    ayahNumber: 22,
    text: "۞ ٱحْشُرُوا۟ ٱلَّذِينَ ظَلَمُوا۟ وَأَزْوَٰجَهُمْ وَمَا كَانُوا۟ يَعْبُدُونَ",
    words: [
      {
        id: '37:22:1',
        arabic: '۞ ٱحْشُرُوا۟',
        transliteration: 'uḥ\'shurū',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Gather',
          ur: 'Gather'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:22:2',
        arabic: 'ٱلَّذِينَ',
        transliteration: 'alladhīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'those who',
          ur: 'those جو'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:22:3',
        arabic: 'ظَلَمُوا۟',
        transliteration: 'ẓalamū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ظ ل م',
        meaning: {
          en: 'wronged',
          ur: 'wronged'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:22:4',
        arabic: 'وَأَزْوَٰجَهُمْ',
        transliteration: 'wa-azwājahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and their kinds',
          ur: 'اور ان کا kinds'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:22:5',
        arabic: 'وَمَا',
        transliteration: 'wamā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'and what',
          ur: 'اور کیا'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:22:6',
        arabic: 'كَانُوا۟',
        transliteration: 'kānū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'they used (to)',
          ur: 'وہ used (to)'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:22:7',
        arabic: 'يَعْبُدُونَ',
        transliteration: 'yaʿbudūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ب د',
        meaning: {
          en: 'worship',
          ur: 'worship'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'نفی + فعل' }
      ],
    },
      }
    ]
  },

  23: {
    ayahNumber: 23,
    text: "مِن دُونِ ٱللَّهِ فَٱهْدُوهُمْ إِلَىٰ صِرَٰطِ ٱلْجَحِيمِ",
    words: [
      {
        id: '37:23:1',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'Besides',
          ur: 'Besides'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:23:2',
        arabic: 'دُونِ',
        transliteration: 'dūni',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Besides',
          ur: 'Besides'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:23:3',
        arabic: 'ٱللَّهِ',
        transliteration: 'l-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Allah',
          ur: 'اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:23:4',
        arabic: 'فَٱهْدُوهُمْ',
        transliteration: 'fa-ih\'dūhum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'then lead them',
          ur: 'پھر lead انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:23:5',
        arabic: 'إِلَىٰ',
        transliteration: 'ilā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'to',
          ur: 'to'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:23:6',
        arabic: 'صِرَٰطِ',
        transliteration: 'ṣirāṭi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(the) Path',
          ur: '(the) راستہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:23:7',
        arabic: 'ٱلْجَحِيمِ',
        transliteration: 'l-jaḥīmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) the Hellfire',
          ur: '(of) the Hellfire'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 5, to: 6, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  24: {
    ayahNumber: 24,
    text: "وَقِفُوهُمْ ۖ إِنَّهُم مَّسْـُٔولُونَ",
    words: [
      {
        id: '37:24:1',
        arabic: 'وَقِفُوهُمْ ۖ',
        transliteration: 'waqifūhum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And stop them',
          ur: 'اور stop انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:24:2',
        arabic: 'إِنَّهُم',
        transliteration: 'innahum',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'indeed, they',
          ur: 'indeed, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:24:3',
        arabic: 'مَّسْـُٔولُونَ',
        transliteration: 'masūlūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(are) to be questioned',
          ur: '(are) to be questioned'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  25: {
    ayahNumber: 25,
    text: "مَا لَكُمْ لَا تَنَاصَرُونَ",
    words: [
      {
        id: '37:25:1',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'What',
          ur: 'کیا'
        },
        grammarRole: 'ism-mawsul',
      },
      {
        id: '37:25:2',
        arabic: 'لَكُمْ',
        transliteration: 'lakum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: '(is) for you',
          ur: '(is) کے لیے تم'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:25:3',
        arabic: 'لَا',
        transliteration: 'lā',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: '(Why) not',
          ur: '(Why) نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:25:4',
        arabic: 'تَنَاصَرُونَ',
        transliteration: 'tanāṣarūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you help one another',
          ur: 'تم help one another'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' }
      ],
    },
      }
    ]
  },

  26: {
    ayahNumber: 26,
    text: "بَلْ هُمُ ٱلْيَوْمَ مُسْتَسْلِمُونَ",
    words: [
      {
        id: '37:26:1',
        arabic: 'بَلْ',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Nay',
          ur: 'Nay'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:26:2',
        arabic: 'هُمُ',
        transliteration: 'humu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'they',
          ur: 'وہ'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:26:3',
        arabic: 'ٱلْيَوْمَ',
        transliteration: 'l-yawma',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(on) that Day',
          ur: '(on) وہ دن'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:26:4',
        arabic: 'مُسْتَسْلِمُونَ',
        transliteration: 'mus\'taslimūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will) surrender',
          ur: '(will) surrender'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  27: {
    ayahNumber: 27,
    text: "وَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍۢ يَتَسَآءَلُونَ",
    words: [
      {
        id: '37:27:1',
        arabic: 'وَأَقْبَلَ',
        transliteration: 'wa-aqbala',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And will approach',
          ur: 'اور will approach'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:27:2',
        arabic: 'بَعْضُهُمْ',
        transliteration: 'baʿḍuhum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'some of them',
          ur: 'some کا انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:27:3',
        arabic: 'عَلَىٰ',
        transliteration: 'ʿalā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'to',
          ur: 'to'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:27:4',
        arabic: 'بَعْضٍۢ',
        transliteration: 'baʿḍin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'others',
          ur: 'others'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:27:5',
        arabic: 'يَتَسَآءَلُونَ',
        transliteration: 'yatasāalūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'questioning one another',
          ur: 'questioning one another'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  28: {
    ayahNumber: 28,
    text: "قَالُوٓا۟ إِنَّكُمْ كُنتُمْ تَأْتُونَنَا عَنِ ٱلْيَمِينِ",
    words: [
      {
        id: '37:28:1',
        arabic: 'قَالُوٓا۟',
        transliteration: 'qālū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: 'They will say',
          ur: 'وہ will کہو'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:28:2',
        arabic: 'إِنَّكُمْ',
        transliteration: 'innakum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Indeed, you',
          ur: 'Indeed, تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:28:3',
        arabic: 'كُنتُمْ',
        transliteration: 'kuntum',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '[you] used (to)',
          ur: '[you] used (to)'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:28:4',
        arabic: 'تَأْتُونَنَا',
        transliteration: 'tatūnanā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'come (to) us',
          ur: 'come (to) us'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:28:5',
        arabic: 'عَنِ',
        transliteration: 'ʿani',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'from',
          ur: 'سے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:28:6',
        arabic: 'ٱلْيَمِينِ',
        transliteration: 'l-yamīni',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the right',
          ur: 'the right'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  29: {
    ayahNumber: 29,
    text: "قَالُوا۟ بَل لَّمْ تَكُونُوا۟ مُؤْمِنِينَ",
    words: [
      {
        id: '37:29:1',
        arabic: 'قَالُوا۟',
        transliteration: 'qālū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: 'They will say',
          ur: 'وہ will کہو'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:29:2',
        arabic: 'بَل',
        transliteration: 'bal',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Nay',
          ur: 'Nay'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:29:3',
        arabic: 'لَّمْ',
        transliteration: 'lam',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'not',
          ur: 'نہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:29:4',
        arabic: 'تَكُونُوا۟',
        transliteration: 'takūnū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'you were',
          ur: 'تم were'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:29:5',
        arabic: 'مُؤْمِنِينَ',
        transliteration: 'mu\'minīna',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ م ن',
        meaning: {
          en: 'believers',
          ur: 'believers'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  30: {
    ayahNumber: 30,
    text: "وَمَا كَانَ لَنَا عَلَيْكُم مِّن سُلْطَـٰنٍۭ ۖ بَلْ كُنتُمْ قَوْمًۭا طَـٰغِينَ",
    words: [
      {
        id: '37:30:1',
        arabic: 'وَمَا',
        transliteration: 'wamā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:30:2',
        arabic: 'كَانَ',
        transliteration: 'kāna',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك و ن',
        meaning: {
          en: 'was',
          ur: 'تھا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:30:3',
        arabic: 'لَنَا',
        transliteration: 'lanā',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'for us',
          ur: 'کے لیے us'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:30:4',
        arabic: 'عَلَيْكُم',
        transliteration: 'ʿalaykum',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'over you',
          ur: 'over تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:30:5',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'any',
          ur: 'any'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:30:6',
        arabic: 'سُلْطَـٰنٍۭ ۖ',
        transliteration: 'sul\'ṭānin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'authority',
          ur: 'authority'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:30:7',
        arabic: 'بَلْ',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Nay',
          ur: 'Nay'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:30:8',
        arabic: 'كُنتُمْ',
        transliteration: 'kuntum',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you were',
          ur: 'تم were'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:30:9',
        arabic: 'قَوْمًۭا',
        transliteration: 'qawman',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a people',
          ur: 'a لوگ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:30:10',
        arabic: 'طَـٰغِينَ',
        transliteration: 'ṭāghīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'transgressing',
          ur: 'transgressing'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 8, to: 9, label: 'فعل + مفعول به' },
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  31: {
    ayahNumber: 31,
    text: "فَحَقَّ عَلَيْنَا قَوْلُ رَبِّنَآ ۖ إِنَّا لَذَآئِقُونَ",
    words: [
      {
        id: '37:31:1',
        arabic: 'فَحَقَّ',
        transliteration: 'faḥaqqa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ح ق ق',
        meaning: {
          en: 'So has been proved true',
          ur: 'So has been proved true'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:31:2',
        arabic: 'عَلَيْنَا',
        transliteration: 'ʿalaynā',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'against us',
          ur: 'against us'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:31:3',
        arabic: 'قَوْلُ',
        transliteration: 'qawlu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(the) Word',
          ur: '(the) Word'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:31:4',
        arabic: 'رَبِّنَآ ۖ',
        transliteration: 'rabbinā',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: '(of) our Lord',
          ur: '(of) ہمارا رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:31:5',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'indeed, we',
          ur: 'indeed, ہم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:31:6',
        arabic: 'لَذَآئِقُونَ',
        transliteration: 'ladhāiqūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will) certainly taste',
          ur: '(will) certainly taste'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  32: {
    ayahNumber: 32,
    text: "فَأَغْوَيْنَـٰكُمْ إِنَّا كُنَّا غَـٰوِينَ",
    words: [
      {
        id: '37:32:1',
        arabic: 'فَأَغْوَيْنَـٰكُمْ',
        transliteration: 'fa-aghwaynākum',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'So we led you astray',
          ur: 'So ہم led تم astray'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:32:2',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'indeed, we',
          ur: 'indeed, ہم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:32:3',
        arabic: 'كُنَّا',
        transliteration: 'kunnā',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك و ن',
        meaning: {
          en: 'were',
          ur: 'were'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:32:4',
        arabic: 'غَـٰوِينَ',
        transliteration: 'ghāwīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'astray',
          ur: 'astray'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  33: {
    ayahNumber: 33,
    text: "فَإِنَّهُمْ يَوْمَئِذٍۢ فِى ٱلْعَذَابِ مُشْتَرِكُونَ",
    words: [
      {
        id: '37:33:1',
        arabic: 'فَإِنَّهُمْ',
        transliteration: 'fa-innahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then indeed, they',
          ur: 'پھر indeed, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:33:2',
        arabic: 'يَوْمَئِذٍۢ',
        transliteration: 'yawma-idhin',
        pos: ['N'],
        posLabel: 'N',
        root: 'ي و م',
        meaning: {
          en: 'that Day',
          ur: 'وہ دن'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:33:3',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'in',
          ur: 'میں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:33:4',
        arabic: 'ٱلْعَذَابِ',
        transliteration: 'l-ʿadhābi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the punishment',
          ur: 'the عذاب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:33:5',
        arabic: 'مُشْتَرِكُونَ',
        transliteration: 'mush\'tarikūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will be) sharers',
          ur: '(will be) sharers'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  34: {
    ayahNumber: 34,
    text: "إِنَّا كَذَٰلِكَ نَفْعَلُ بِٱلْمُجْرِمِينَ",
    words: [
      {
        id: '37:34:1',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, We',
          ur: 'Indeed, ہم'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:34:2',
        arabic: 'كَذَٰلِكَ',
        transliteration: 'kadhālika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'thus',
          ur: 'thus'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:34:3',
        arabic: 'نَفْعَلُ',
        transliteration: 'nafʿalu',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'We deal',
          ur: 'ہم deal'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:34:4',
        arabic: 'بِٱلْمُجْرِمِينَ',
        transliteration: 'bil-muj\'rimīna',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'with the criminals',
          ur: 'ساتھ the criminals'
        },
        grammarRole: 'jarr-majrur',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  35: {
    ayahNumber: 35,
    text: "إِنَّهُمْ كَانُوٓا۟ إِذَا قِيلَ لَهُمْ لَآ إِلَـٰهَ إِلَّا ٱللَّهُ يَسْتَكْبِرُونَ",
    words: [
      {
        id: '37:35:1',
        arabic: 'إِنَّهُمْ',
        transliteration: 'innahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Indeed, they',
          ur: 'Indeed, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:35:2',
        arabic: 'كَانُوٓا۟',
        transliteration: 'kānū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'were',
          ur: 'were'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:35:3',
        arabic: 'إِذَا',
        transliteration: 'idhā',
        pos: ['T'],
        posLabel: 'T',
        root: null,
        meaning: {
          en: 'when',
          ur: 'جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:35:4',
        arabic: 'قِيلَ',
        transliteration: 'qīla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'it was said',
          ur: 'it تھا کہا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:35:5',
        arabic: 'لَهُمْ',
        transliteration: 'lahum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'to them',
          ur: 'to انہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:35:6',
        arabic: 'لَآ',
        transliteration: 'lā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(There is) no',
          ur: '(There is) نہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:35:7',
        arabic: 'إِلَـٰهَ',
        transliteration: 'ilāha',
        pos: ['N'],
        posLabel: 'N',
        root: 'أ ل ه',
        meaning: {
          en: 'god',
          ur: 'god'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:35:8',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'except',
          ur: 'سوائے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:35:9',
        arabic: 'ٱللَّهُ',
        transliteration: 'l-lahu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Allah',
          ur: 'اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:35:10',
        arabic: 'يَسْتَكْبِرُونَ',
        transliteration: 'yastakbirūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'were arrogant',
          ur: 'were arrogant'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  36: {
    ayahNumber: 36,
    text: "وَيَقُولُونَ أَئِنَّا لَتَارِكُوٓا۟ ءَالِهَتِنَا لِشَاعِرٍۢ مَّجْنُونٍۭ",
    words: [
      {
        id: '37:36:1',
        arabic: 'وَيَقُولُونَ',
        transliteration: 'wayaqūlūna',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ق و ل',
        meaning: {
          en: 'And they say',
          ur: 'اور وہ کہو'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:36:2',
        arabic: 'أَئِنَّا',
        transliteration: 'a-innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Are we',
          ur: 'ہیں ہم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:36:3',
        arabic: 'لَتَارِكُوٓا۟',
        transliteration: 'latārikū',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'to leave',
          ur: 'to leave'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:36:4',
        arabic: 'ءَالِهَتِنَا',
        transliteration: 'ālihatinā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'أ ل ه',
        meaning: {
          en: 'our gods',
          ur: 'ہمارا gods'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:36:5',
        arabic: 'لِشَاعِرٍۢ',
        transliteration: 'lishāʿirin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'for a poet',
          ur: 'کے لیے a poet'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:36:6',
        arabic: 'مَّجْنُونٍۭ',
        transliteration: 'majnūnin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'mad',
          ur: 'mad'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  37: {
    ayahNumber: 37,
    text: "بَلْ جَآءَ بِٱلْحَقِّ وَصَدَّقَ ٱلْمُرْسَلِينَ",
    words: [
      {
        id: '37:37:1',
        arabic: 'بَلْ',
        transliteration: 'bal',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Nay',
          ur: 'Nay'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:37:2',
        arabic: 'جَآءَ',
        transliteration: 'jāa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'he has brought',
          ur: 'وہ has brought'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:37:3',
        arabic: 'بِٱلْحَقِّ',
        transliteration: 'bil-ḥaqi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'the truth',
          ur: 'the سچ'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:37:4',
        arabic: 'وَصَدَّقَ',
        transliteration: 'waṣaddaqa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and confirmed',
          ur: 'اور confirmed'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:37:5',
        arabic: 'ٱلْمُرْسَلِينَ',
        transliteration: 'l-mur\'salīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Messengers',
          ur: 'the رسول'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  38: {
    ayahNumber: 38,
    text: "إِنَّكُمْ لَذَآئِقُوا۟ ٱلْعَذَابِ ٱلْأَلِيمِ",
    words: [
      {
        id: '37:38:1',
        arabic: 'إِنَّكُمْ',
        transliteration: 'innakum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Indeed, you',
          ur: 'Indeed, تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:38:2',
        arabic: 'لَذَآئِقُوا۟',
        transliteration: 'ladhāiqū',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: '(will) surely taste',
          ur: '(will) surely taste'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:38:3',
        arabic: 'ٱلْعَذَابِ',
        transliteration: 'l-ʿadhābi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the punishment',
          ur: 'the عذاب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:38:4',
        arabic: 'ٱلْأَلِيمِ',
        transliteration: 'l-alīmi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'painful',
          ur: 'painful'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  39: {
    ayahNumber: 39,
    text: "وَمَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ",
    words: [
      {
        id: '37:39:1',
        arabic: 'وَمَا',
        transliteration: 'wamā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:39:2',
        arabic: 'تُجْزَوْنَ',
        transliteration: 'tuj\'zawna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you will be recompensed',
          ur: 'تم will be recompensed'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:39:3',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'except',
          ur: 'سوائے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:39:4',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'what',
          ur: 'کیا'
        },
        grammarRole: 'ism-mawsul',
      },
      {
        id: '37:39:5',
        arabic: 'كُنتُمْ',
        transliteration: 'kuntum',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you used to',
          ur: 'تم used to'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:39:6',
        arabic: 'تَعْمَلُونَ',
        transliteration: 'taʿmalūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'do',
          ur: 'do'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'نفی + فعل' },
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصول + صلة' },
        { from: 5, to: 6, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  40: {
    ayahNumber: 40,
    text: "إِلَّا عِبَادَ ٱللَّهِ ٱلْمُخْلَصِينَ",
    words: [
      {
        id: '37:40:1',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:40:2',
        arabic: 'عِبَادَ',
        transliteration: 'ʿibāda',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ب د',
        meaning: {
          en: '(the) slaves',
          ur: '(the) slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:40:3',
        arabic: 'ٱللَّهِ',
        transliteration: 'l-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Allah',
          ur: '(of) اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:40:4',
        arabic: 'ٱلْمُخْلَصِينَ',
        transliteration: 'l-mukh\'laṣīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the chosen ones',
          ur: 'the chosen ones'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  41: {
    ayahNumber: 41,
    text: "أُو۟لَـٰٓئِكَ لَهُمْ رِزْقٌۭ مَّعْلُومٌۭ",
    words: [
      {
        id: '37:41:1',
        arabic: 'أُو۟لَـٰٓئِكَ',
        transliteration: 'ulāika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Those',
          ur: 'Those'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:41:2',
        arabic: 'لَهُمْ',
        transliteration: 'lahum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'for them',
          ur: 'کے لیے انہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:41:3',
        arabic: 'رِزْقٌۭ',
        transliteration: 'riz\'qun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will be) a provision',
          ur: '(will be) a provision'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:41:4',
        arabic: 'مَّعْلُومٌۭ',
        transliteration: 'maʿlūmun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'determined',
          ur: 'determined'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  42: {
    ayahNumber: 42,
    text: "فَوَٰكِهُ ۖ وَهُم مُّكْرَمُونَ",
    words: [
      {
        id: '37:42:1',
        arabic: 'فَوَٰكِهُ ۖ',
        transliteration: 'fawākihu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Fruits',
          ur: 'Fruits'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:42:2',
        arabic: 'وَهُم',
        transliteration: 'wahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and they',
          ur: 'اور وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:42:3',
        arabic: 'مُّكْرَمُونَ',
        transliteration: 'muk\'ramūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will) be honored',
          ur: '(will) be honored'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  43: {
    ayahNumber: 43,
    text: "فِى جَنَّـٰتِ ٱلنَّعِيمِ",
    words: [
      {
        id: '37:43:1',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'In',
          ur: 'میں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:43:2',
        arabic: 'جَنَّـٰتِ',
        transliteration: 'jannāti',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Gardens',
          ur: 'Gardens'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:43:3',
        arabic: 'ٱلنَّعِيمِ',
        transliteration: 'l-naʿīmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Delight',
          ur: '(of) Delight'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  44: {
    ayahNumber: 44,
    text: "عَلَىٰ سُرُرٍۢ مُّتَقَـٰبِلِينَ",
    words: [
      {
        id: '37:44:1',
        arabic: 'عَلَىٰ',
        transliteration: 'ʿalā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'On',
          ur: 'On'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:44:2',
        arabic: 'سُرُرٍۢ',
        transliteration: 'sururin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'thrones',
          ur: 'thrones'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:44:3',
        arabic: 'مُّتَقَـٰبِلِينَ',
        transliteration: 'mutaqābilīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'facing each other',
          ur: 'facing each other'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  45: {
    ayahNumber: 45,
    text: "يُطَافُ عَلَيْهِم بِكَأْسٍۢ مِّن مَّعِينٍۭ",
    words: [
      {
        id: '37:45:1',
        arabic: 'يُطَافُ',
        transliteration: 'yuṭāfu',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Will be circulated',
          ur: 'Will be circulated'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:45:2',
        arabic: 'عَلَيْهِم',
        transliteration: 'ʿalayhim',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'among them',
          ur: 'among انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:45:3',
        arabic: 'بِكَأْسٍۢ',
        transliteration: 'bikasin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'a cup',
          ur: 'a cup'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:45:4',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'from',
          ur: 'سے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:45:5',
        arabic: 'مَّعِينٍۭ',
        transliteration: 'maʿīnin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a flowing spring',
          ur: 'a flowing spring'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  46: {
    ayahNumber: 46,
    text: "بَيْضَآءَ لَذَّةٍۢ لِّلشَّـٰرِبِينَ",
    words: [
      {
        id: '37:46:1',
        arabic: 'بَيْضَآءَ',
        transliteration: 'bayḍāa',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'White',
          ur: 'White'
        },
        grammarRole: 'sifa',
      },
      {
        id: '37:46:2',
        arabic: 'لَذَّةٍۢ',
        transliteration: 'ladhatin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'delicious',
          ur: 'delicious'
        },
        grammarRole: 'sifa',
      },
      {
        id: '37:46:3',
        arabic: 'لِّلشَّـٰرِبِينَ',
        transliteration: 'lilshāribīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'for the drinkers',
          ur: 'کے لیے the drinkers'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  47: {
    ayahNumber: 47,
    text: "لَا فِيهَا غَوْلٌۭ وَلَا هُمْ عَنْهَا يُنزَفُونَ",
    words: [
      {
        id: '37:47:1',
        arabic: 'لَا',
        transliteration: 'lā',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:47:2',
        arabic: 'فِيهَا',
        transliteration: 'fīhā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'in it',
          ur: 'میں it'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:47:3',
        arabic: 'غَوْلٌۭ',
        transliteration: 'ghawlun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(is) bad effect',
          ur: '(is) bad effect'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:47:4',
        arabic: 'وَلَا',
        transliteration: 'walā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'and not',
          ur: 'اور نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:47:5',
        arabic: 'هُمْ',
        transliteration: 'hum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'they',
          ur: 'وہ'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:47:6',
        arabic: 'عَنْهَا',
        transliteration: 'ʿanhā',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'from it',
          ur: 'سے it'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:47:7',
        arabic: 'يُنزَفُونَ',
        transliteration: 'yunzafūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'will be intoxicated',
          ur: 'will be intoxicated'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  48: {
    ayahNumber: 48,
    text: "وَعِندَهُمْ قَـٰصِرَٰتُ ٱلطَّرْفِ عِينٌۭ",
    words: [
      {
        id: '37:48:1',
        arabic: 'وَعِندَهُمْ',
        transliteration: 'waʿindahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And with them',
          ur: 'اور ساتھ انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:48:2',
        arabic: 'قَـٰصِرَٰتُ',
        transliteration: 'qāṣirātu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will be) companions of modest gaze',
          ur: '(will be) companions کا modest gaze'
        },
        grammarRole: 'mudaf-ilayh',
      },
      {
        id: '37:48:3',
        arabic: 'ٱلطَّرْفِ',
        transliteration: 'l-ṭarfi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will be) companions of modest gaze',
          ur: '(will be) companions کا modest gaze'
        },
        grammarRole: 'mudaf-ilayh',
      },
      {
        id: '37:48:4',
        arabic: 'عِينٌۭ',
        transliteration: 'ʿīnun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(having) beautiful eyes',
          ur: '(having) beautiful eyes'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'مضاف + مضاف إليه' },
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
      }
    ]
  },

  49: {
    ayahNumber: 49,
    text: "كَأَنَّهُنَّ بَيْضٌۭ مَّكْنُونٌۭ",
    words: [
      {
        id: '37:49:1',
        arabic: 'كَأَنَّهُنَّ',
        transliteration: 'ka-annahunna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'As if they were',
          ur: 'As اگر وہ were'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:49:2',
        arabic: 'بَيْضٌۭ',
        transliteration: 'bayḍun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'eggs',
          ur: 'eggs'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:49:3',
        arabic: 'مَّكْنُونٌۭ',
        transliteration: 'maknūnun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'well protected',
          ur: 'well protected'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  50: {
    ayahNumber: 50,
    text: "فَأَقْبَلَ بَعْضُهُمْ عَلَىٰ بَعْضٍۢ يَتَسَآءَلُونَ",
    words: [
      {
        id: '37:50:1',
        arabic: 'فَأَقْبَلَ',
        transliteration: 'fa-aqbala',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And (will) approach',
          ur: 'اور (will) approach'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:50:2',
        arabic: 'بَعْضُهُمْ',
        transliteration: 'baʿḍuhum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'some of them',
          ur: 'some کا انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:50:3',
        arabic: 'عَلَىٰ',
        transliteration: 'ʿalā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'to',
          ur: 'to'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:50:4',
        arabic: 'بَعْضٍۢ',
        transliteration: 'baʿḍin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'others',
          ur: 'others'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:50:5',
        arabic: 'يَتَسَآءَلُونَ',
        transliteration: 'yatasāalūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'questioning one another',
          ur: 'questioning one another'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  51: {
    ayahNumber: 51,
    text: "قَالَ قَآئِلٌۭ مِّنْهُمْ إِنِّى كَانَ لِى قَرِينٌۭ",
    words: [
      {
        id: '37:51:1',
        arabic: 'قَالَ',
        transliteration: 'qāla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'Will say',
          ur: 'Will کہو'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:51:2',
        arabic: 'قَآئِلٌۭ',
        transliteration: 'qāilun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a speaker',
          ur: 'a speaker'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:51:3',
        arabic: 'مِّنْهُمْ',
        transliteration: 'min\'hum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'among them',
          ur: 'among انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:51:4',
        arabic: 'إِنِّى',
        transliteration: 'innī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, I',
          ur: 'Indeed, I'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:51:5',
        arabic: 'كَانَ',
        transliteration: 'kāna',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك و ن',
        meaning: {
          en: 'had',
          ur: 'had'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:51:6',
        arabic: 'لِى',
        transliteration: 'lī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'for me',
          ur: 'کے لیے me'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:51:7',
        arabic: 'قَرِينٌۭ',
        transliteration: 'qarīnun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a companion',
          ur: 'a companion'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  52: {
    ayahNumber: 52,
    text: "يَقُولُ أَءِنَّكَ لَمِنَ ٱلْمُصَدِّقِينَ",
    words: [
      {
        id: '37:52:1',
        arabic: 'يَقُولُ',
        transliteration: 'yaqūlu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'Who (would) say',
          ur: 'جو (would) کہو'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:52:2',
        arabic: 'أَءِنَّكَ',
        transliteration: 'a-innaka',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: null,
        meaning: {
          en: 'Are you indeed',
          ur: 'ہیں تم indeed'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:52:3',
        arabic: 'لَمِنَ',
        transliteration: 'lamina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely of',
          ur: 'surely کا'
        },
        grammarRole: 'mudaf-ilayh',
      },
      {
        id: '37:52:4',
        arabic: 'ٱلْمُصَدِّقِينَ',
        transliteration: 'l-muṣadiqīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'those who believe',
          ur: 'those جو believe'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  53: {
    ayahNumber: 53,
    text: "أَءِذَا مِتْنَا وَكُنَّا تُرَابًۭا وَعِظَـٰمًا أَءِنَّا لَمَدِينُونَ",
    words: [
      {
        id: '37:53:1',
        arabic: 'أَءِذَا',
        transliteration: 'a-idhā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Is (it) when',
          ur: 'ہے (it) جب'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:53:2',
        arabic: 'مِتْنَا',
        transliteration: 'mit\'nā',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'م و ت',
        meaning: {
          en: 'we have died',
          ur: 'ہم have died'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:53:3',
        arabic: 'وَكُنَّا',
        transliteration: 'wakunnā',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ك و ن',
        meaning: {
          en: 'and become',
          ur: 'اور become'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:53:4',
        arabic: 'تُرَابًۭا',
        transliteration: 'turāban',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'dust',
          ur: 'dust'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:53:5',
        arabic: 'وَعِظَـٰمًا',
        transliteration: 'waʿiẓāman',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and bones',
          ur: 'اور bones'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:53:6',
        arabic: 'أَءِنَّا',
        transliteration: 'a-innā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'will we',
          ur: 'will ہم'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:53:7',
        arabic: 'لَمَدِينُونَ',
        transliteration: 'lamadīnūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely be brought to Judgment',
          ur: 'surely be brought to Judgment'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  54: {
    ayahNumber: 54,
    text: "قَالَ هَلْ أَنتُم مُّطَّلِعُونَ",
    words: [
      {
        id: '37:54:1',
        arabic: 'قَالَ',
        transliteration: 'qāla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'He (will) say',
          ur: 'وہ (will) کہو'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:54:2',
        arabic: 'هَلْ',
        transliteration: 'hal',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Will',
          ur: 'Will'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:54:3',
        arabic: 'أَنتُم',
        transliteration: 'antum',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'you',
          ur: 'تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:54:4',
        arabic: 'مُّطَّلِعُونَ',
        transliteration: 'muṭṭaliʿūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'be looking',
          ur: 'be looking'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  55: {
    ayahNumber: 55,
    text: "فَٱطَّلَعَ فَرَءَاهُ فِى سَوَآءِ ٱلْجَحِيمِ",
    words: [
      {
        id: '37:55:1',
        arabic: 'فَٱطَّلَعَ',
        transliteration: 'fa-iṭṭalaʿa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then he (will) look',
          ur: 'پھر وہ (will) look'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:55:2',
        arabic: 'فَرَءَاهُ',
        transliteration: 'faraāhu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and see him',
          ur: 'اور see him'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:55:3',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'in',
          ur: 'میں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:55:4',
        arabic: 'سَوَآءِ',
        transliteration: 'sawāi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(the) midst',
          ur: '(the) midst'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:55:5',
        arabic: 'ٱلْجَحِيمِ',
        transliteration: 'l-jaḥīmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) the Hellfire',
          ur: '(of) the Hellfire'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  56: {
    ayahNumber: 56,
    text: "قَالَ تَٱللَّهِ إِن كِدتَّ لَتُرْدِينِ",
    words: [
      {
        id: '37:56:1',
        arabic: 'قَالَ',
        transliteration: 'qāla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'He (will) say',
          ur: 'وہ (will) کہو'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:56:2',
        arabic: 'تَٱللَّهِ',
        transliteration: 'tal-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'By Allah',
          ur: 'By اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:56:3',
        arabic: 'إِن',
        transliteration: 'in',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'verily',
          ur: 'verily'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:56:4',
        arabic: 'كِدتَّ',
        transliteration: 'kidtta',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'you almost',
          ur: 'تم almost'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:56:5',
        arabic: 'لَتُرْدِينِ',
        transliteration: 'latur\'dīni',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'ruined me',
          ur: 'ruined me'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  57: {
    ayahNumber: 57,
    text: "وَلَوْلَا نِعْمَةُ رَبِّى لَكُنتُ مِنَ ٱلْمُحْضَرِينَ",
    words: [
      {
        id: '37:57:1',
        arabic: 'وَلَوْلَا',
        transliteration: 'walawlā',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And if not',
          ur: 'اور اگر نہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:57:2',
        arabic: 'نِعْمَةُ',
        transliteration: 'niʿ\'matu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ن ع م',
        meaning: {
          en: '(for the) Grace',
          ur: '(for the) Grace'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:57:3',
        arabic: 'رَبِّى',
        transliteration: 'rabbī',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: '(of) my Lord',
          ur: '(of) my رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:57:4',
        arabic: 'لَكُنتُ',
        transliteration: 'lakuntu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'certainly, I (would) have been',
          ur: 'certainly, I (would) have been'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:57:5',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'among',
          ur: 'among'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:57:6',
        arabic: 'ٱلْمُحْضَرِينَ',
        transliteration: 'l-muḥ\'ḍarīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'those brought',
          ur: 'those brought'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  58: {
    ayahNumber: 58,
    text: "أَفَمَا نَحْنُ بِمَيِّتِينَ",
    words: [
      {
        id: '37:58:1',
        arabic: 'أَفَمَا',
        transliteration: 'afamā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Then are not',
          ur: 'پھر ہیں نہیں'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:58:2',
        arabic: 'نَحْنُ',
        transliteration: 'naḥnu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'we',
          ur: 'ہم'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:58:3',
        arabic: 'بِمَيِّتِينَ',
        transliteration: 'bimayyitīna',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: '(to) die',
          ur: '(to) die'
        },
        grammarRole: 'jarr-majrur',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  59: {
    ayahNumber: 59,
    text: "إِلَّا مَوْتَتَنَا ٱلْأُولَىٰ وَمَا نَحْنُ بِمُعَذَّبِينَ",
    words: [
      {
        id: '37:59:1',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:59:2',
        arabic: 'مَوْتَتَنَا',
        transliteration: 'mawtatanā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'م و ت',
        meaning: {
          en: 'our death',
          ur: 'ہمارا death'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:59:3',
        arabic: 'ٱلْأُولَىٰ',
        transliteration: 'l-ūlā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the first',
          ur: 'the first'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:59:4',
        arabic: 'وَمَا',
        transliteration: 'wamā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'and not',
          ur: 'اور نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:59:5',
        arabic: 'نَحْنُ',
        transliteration: 'naḥnu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'we',
          ur: 'ہم'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:59:6',
        arabic: 'بِمُعَذَّبِينَ',
        transliteration: 'bimuʿadhabīna',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'will be punished',
          ur: 'will be punished'
        },
        grammarRole: 'jarr-majrur',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  60: {
    ayahNumber: 60,
    text: "إِنَّ هَـٰذَا لَهُوَ ٱلْفَوْزُ ٱلْعَظِيمُ",
    words: [
      {
        id: '37:60:1',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed',
          ur: 'بیشک'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:60:2',
        arabic: 'هَـٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'this',
          ur: 'یہ'
        },
        grammarRole: 'ism-ishara',
      },
      {
        id: '37:60:3',
        arabic: 'لَهُوَ',
        transliteration: 'lahuwa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely',
          ur: 'surely'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:60:4',
        arabic: 'ٱلْفَوْزُ',
        transliteration: 'l-fawzu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(is) the attainment',
          ur: '(is) the attainment'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:60:5',
        arabic: 'ٱلْعَظِيمُ',
        transliteration: 'l-ʿaẓīmu',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'great',
          ur: 'بڑا'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  61: {
    ayahNumber: 61,
    text: "لِمِثْلِ هَـٰذَا فَلْيَعْمَلِ ٱلْعَـٰمِلُونَ",
    words: [
      {
        id: '37:61:1',
        arabic: 'لِمِثْلِ',
        transliteration: 'limith\'li',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'For (the) like',
          ur: 'کے لیے (the) like'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:61:2',
        arabic: 'هَـٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: '(of) this',
          ur: '(of) یہ'
        },
        grammarRole: 'ism-ishara',
      },
      {
        id: '37:61:3',
        arabic: 'فَلْيَعْمَلِ',
        transliteration: 'falyaʿmali',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'let work',
          ur: 'let work'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:61:4',
        arabic: 'ٱلْعَـٰمِلُونَ',
        transliteration: 'l-ʿāmilūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the workers',
          ur: 'the workers'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  62: {
    ayahNumber: 62,
    text: "أَذَٰلِكَ خَيْرٌۭ نُّزُلًا أَمْ شَجَرَةُ ٱلزَّقُّومِ",
    words: [
      {
        id: '37:62:1',
        arabic: 'أَذَٰلِكَ',
        transliteration: 'adhālika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Is that',
          ur: 'ہے وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:62:2',
        arabic: 'خَيْرٌۭ',
        transliteration: 'khayrun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'better',
          ur: 'better'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:62:3',
        arabic: 'نُّزُلًا',
        transliteration: 'nuzulan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(as) hospitality',
          ur: '(as) hospitality'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:62:4',
        arabic: 'أَمْ',
        transliteration: 'am',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'or',
          ur: 'یا'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:62:5',
        arabic: 'شَجَرَةُ',
        transliteration: 'shajaratu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ج ر',
        meaning: {
          en: '(the) tree',
          ur: '(the) tree'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:62:6',
        arabic: 'ٱلزَّقُّومِ',
        transliteration: 'l-zaqūmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Zaqqum',
          ur: '(of) Zaqqum'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  63: {
    ayahNumber: 63,
    text: "إِنَّا جَعَلْنَـٰهَا فِتْنَةًۭ لِّلظَّـٰلِمِينَ",
    words: [
      {
        id: '37:63:1',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, We',
          ur: 'Indeed, ہم'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:63:2',
        arabic: 'جَعَلْنَـٰهَا',
        transliteration: 'jaʿalnāhā',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: '[We] have made it',
          ur: '[We] have made it'
        },
        grammarRole: 'sifa',
      },
      {
        id: '37:63:3',
        arabic: 'فِتْنَةًۭ',
        transliteration: 'fit\'natan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ف ت ن',
        meaning: {
          en: 'a trial',
          ur: 'a trial'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:63:4',
        arabic: 'لِّلظَّـٰلِمِينَ',
        transliteration: 'lilẓẓālimīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'for the wrongdoers',
          ur: 'کے لیے the wrongdoers'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  64: {
    ayahNumber: 64,
    text: "إِنَّهَا شَجَرَةٌۭ تَخْرُجُ فِىٓ أَصْلِ ٱلْجَحِيمِ",
    words: [
      {
        id: '37:64:1',
        arabic: 'إِنَّهَا',
        transliteration: 'innahā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Indeed, it',
          ur: 'Indeed, it'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:64:2',
        arabic: 'شَجَرَةٌۭ',
        transliteration: 'shajaratun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ج ر',
        meaning: {
          en: '(is) a tree',
          ur: '(is) a tree'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:64:3',
        arabic: 'تَخْرُجُ',
        transliteration: 'takhruju',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'that grows',
          ur: 'وہ grows'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:64:4',
        arabic: 'فِىٓ',
        transliteration: 'fī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'in',
          ur: 'میں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:64:5',
        arabic: 'أَصْلِ',
        transliteration: 'aṣli',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(the) bottom',
          ur: '(the) bottom'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:64:6',
        arabic: 'ٱلْجَحِيمِ',
        transliteration: 'l-jaḥīmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) the Hellfire',
          ur: '(of) the Hellfire'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  65: {
    ayahNumber: 65,
    text: "طَلْعُهَا كَأَنَّهُۥ رُءُوسُ ٱلشَّيَـٰطِينِ",
    words: [
      {
        id: '37:65:1',
        arabic: 'طَلْعُهَا',
        transliteration: 'ṭalʿuhā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Its emerging fruit',
          ur: 'Its emerging fruit'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:65:2',
        arabic: 'كَأَنَّهُۥ',
        transliteration: 'ka-annahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(is) as if it',
          ur: '(is) as اگر it'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:65:3',
        arabic: 'رُءُوسُ',
        transliteration: 'ruūsu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(was) heads',
          ur: '(was) heads'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:65:4',
        arabic: 'ٱلشَّيَـٰطِينِ',
        transliteration: 'l-shayāṭīni',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) the devils',
          ur: '(of) the devils'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  66: {
    ayahNumber: 66,
    text: "فَإِنَّهُمْ لَـَٔاكِلُونَ مِنْهَا فَمَالِـُٔونَ مِنْهَا ٱلْبُطُونَ",
    words: [
      {
        id: '37:66:1',
        arabic: 'فَإِنَّهُمْ',
        transliteration: 'fa-innahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed, they',
          ur: 'اور indeed, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:66:2',
        arabic: 'لَـَٔاكِلُونَ',
        transliteration: 'laākilūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will) surely eat',
          ur: '(will) surely eat'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:66:3',
        arabic: 'مِنْهَا',
        transliteration: 'min\'hā',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'from it',
          ur: 'سے it'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:66:4',
        arabic: 'فَمَالِـُٔونَ',
        transliteration: 'famāliūna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and fill',
          ur: 'اور fill'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:66:5',
        arabic: 'مِنْهَا',
        transliteration: 'min\'hā',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'with it',
          ur: 'ساتھ it'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:66:6',
        arabic: 'ٱلْبُطُونَ',
        transliteration: 'l-buṭūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(their) bellies',
          ur: '(their) bellies'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  67: {
    ayahNumber: 67,
    text: "ثُمَّ إِنَّ لَهُمْ عَلَيْهَا لَشَوْبًۭا مِّنْ حَمِيمٍۢ",
    words: [
      {
        id: '37:67:1',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Then',
          ur: 'پھر'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:67:2',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'indeed',
          ur: 'indeed'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:67:3',
        arabic: 'لَهُمْ',
        transliteration: 'lahum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'for them',
          ur: 'کے لیے انہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:67:4',
        arabic: 'عَلَيْهَا',
        transliteration: 'ʿalayhā',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'in it',
          ur: 'میں it'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:67:5',
        arabic: 'لَشَوْبًۭا',
        transliteration: 'lashawban',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(is) a mixture',
          ur: '(is) a mixture'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:67:6',
        arabic: 'مِّنْ',
        transliteration: 'min',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:67:7',
        arabic: 'حَمِيمٍۢ',
        transliteration: 'ḥamīmin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'boiling water',
          ur: 'boiling water'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  68: {
    ayahNumber: 68,
    text: "ثُمَّ إِنَّ مَرْجِعَهُمْ لَإِلَى ٱلْجَحِيمِ",
    words: [
      {
        id: '37:68:1',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Then',
          ur: 'پھر'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:68:2',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'indeed',
          ur: 'indeed'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:68:3',
        arabic: 'مَرْجِعَهُمْ',
        transliteration: 'marjiʿahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'their return',
          ur: 'ان کا return'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:68:4',
        arabic: 'لَإِلَى',
        transliteration: 'la-ilā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will) surely be to',
          ur: '(will) surely be to'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:68:5',
        arabic: 'ٱلْجَحِيمِ',
        transliteration: 'l-jaḥīmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Hellfire',
          ur: 'the Hellfire'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  69: {
    ayahNumber: 69,
    text: "إِنَّهُمْ أَلْفَوْا۟ ءَابَآءَهُمْ ضَآلِّينَ",
    words: [
      {
        id: '37:69:1',
        arabic: 'إِنَّهُمْ',
        transliteration: 'innahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Indeed, they',
          ur: 'Indeed, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:69:2',
        arabic: 'أَلْفَوْا۟',
        transliteration: 'alfaw',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'found',
          ur: 'found'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:69:3',
        arabic: 'ءَابَآءَهُمْ',
        transliteration: 'ābāahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'their fathers',
          ur: 'ان کا fathers'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:69:4',
        arabic: 'ضَآلِّينَ',
        transliteration: 'ḍāllīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'astray',
          ur: 'astray'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  70: {
    ayahNumber: 70,
    text: "فَهُمْ عَلَىٰٓ ءَاثَـٰرِهِمْ يُهْرَعُونَ",
    words: [
      {
        id: '37:70:1',
        arabic: 'فَهُمْ',
        transliteration: 'fahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'So they',
          ur: 'So وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:70:2',
        arabic: 'عَلَىٰٓ',
        transliteration: 'ʿalā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'on',
          ur: 'on'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:70:3',
        arabic: 'ءَاثَـٰرِهِمْ',
        transliteration: 'āthārihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'their footsteps',
          ur: 'ان کا footsteps'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:70:4',
        arabic: 'يُهْرَعُونَ',
        transliteration: 'yuh\'raʿūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'they hastened',
          ur: 'وہ hastened'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  71: {
    ayahNumber: 71,
    text: "وَلَقَدْ ضَلَّ قَبْلَهُمْ أَكْثَرُ ٱلْأَوَّلِينَ",
    words: [
      {
        id: '37:71:1',
        arabic: 'وَلَقَدْ',
        transliteration: 'walaqad',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And verily',
          ur: 'اور verily'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:71:2',
        arabic: 'ضَلَّ',
        transliteration: 'ḍalla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ض ل ل',
        meaning: {
          en: 'went astray',
          ur: 'went astray'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:71:3',
        arabic: 'قَبْلَهُمْ',
        transliteration: 'qablahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'before them',
          ur: 'before انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:71:4',
        arabic: 'أَكْثَرُ',
        transliteration: 'aktharu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'most',
          ur: 'most'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:71:5',
        arabic: 'ٱلْأَوَّلِينَ',
        transliteration: 'l-awalīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: '(of) the former (people)',
          ur: '(of) the former (people)'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  72: {
    ayahNumber: 72,
    text: "وَلَقَدْ أَرْسَلْنَا فِيهِم مُّنذِرِينَ",
    words: [
      {
        id: '37:72:1',
        arabic: 'وَلَقَدْ',
        transliteration: 'walaqad',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And verily',
          ur: 'اور verily'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:72:2',
        arabic: 'أَرْسَلْنَا',
        transliteration: 'arsalnā',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'ر س ل',
        meaning: {
          en: 'We sent',
          ur: 'ہم sent'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:72:3',
        arabic: 'فِيهِم',
        transliteration: 'fīhim',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'among them',
          ur: 'among انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:72:4',
        arabic: 'مُّنذِرِينَ',
        transliteration: 'mundhirīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'warners',
          ur: 'warners'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  73: {
    ayahNumber: 73,
    text: "فَٱنظُرْ كَيْفَ كَانَ عَـٰقِبَةُ ٱلْمُنذَرِينَ",
    words: [
      {
        id: '37:73:1',
        arabic: 'فَٱنظُرْ',
        transliteration: 'fa-unẓur',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then see',
          ur: 'پھر see'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:73:2',
        arabic: 'كَيْفَ',
        transliteration: 'kayfa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'how',
          ur: 'how'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:73:3',
        arabic: 'كَانَ',
        transliteration: 'kāna',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك و ن',
        meaning: {
          en: 'was',
          ur: 'تھا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:73:4',
        arabic: 'عَـٰقِبَةُ',
        transliteration: 'ʿāqibatu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(the) end',
          ur: '(the) end'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:73:5',
        arabic: 'ٱلْمُنذَرِينَ',
        transliteration: 'l-mundharīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) those who were warned',
          ur: '(of) those جو were warned'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  74: {
    ayahNumber: 74,
    text: "إِلَّا عِبَادَ ٱللَّهِ ٱلْمُخْلَصِينَ",
    words: [
      {
        id: '37:74:1',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:74:2',
        arabic: 'عِبَادَ',
        transliteration: 'ʿibāda',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ب د',
        meaning: {
          en: '(the) slaves',
          ur: '(the) slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:74:3',
        arabic: 'ٱللَّهِ',
        transliteration: 'l-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Allah',
          ur: '(of) اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:74:4',
        arabic: 'ٱلْمُخْلَصِينَ',
        transliteration: 'l-mukh\'laṣīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the chosen ones',
          ur: 'the chosen ones'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  75: {
    ayahNumber: 75,
    text: "وَلَقَدْ نَادَىٰنَا نُوحٌۭ فَلَنِعْمَ ٱلْمُجِيبُونَ",
    words: [
      {
        id: '37:75:1',
        arabic: 'وَلَقَدْ',
        transliteration: 'walaqad',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And verily',
          ur: 'اور verily'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:75:2',
        arabic: 'نَادَىٰنَا',
        transliteration: 'nādānā',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: null,
        meaning: {
          en: 'called Us',
          ur: 'called Us'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:75:3',
        arabic: 'نُوحٌۭ',
        transliteration: 'nūḥun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Nuh',
          ur: 'Nuh'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:75:4',
        arabic: 'فَلَنِعْمَ',
        transliteration: 'falaniʿ\'ma',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'and Best',
          ur: 'اور Best'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:75:5',
        arabic: 'ٱلْمُجِيبُونَ',
        transliteration: 'l-mujībūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: '(are We as) Responders',
          ur: '(are ہم as) Responders'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  76: {
    ayahNumber: 76,
    text: "وَنَجَّيْنَـٰهُ وَأَهْلَهُۥ مِنَ ٱلْكَرْبِ ٱلْعَظِيمِ",
    words: [
      {
        id: '37:76:1',
        arabic: 'وَنَجَّيْنَـٰهُ',
        transliteration: 'wanajjaynāhu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And We saved him',
          ur: 'اور ہم saved him'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:76:2',
        arabic: 'وَأَهْلَهُۥ',
        transliteration: 'wa-ahlahu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and his family',
          ur: 'اور اس کا family'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:76:3',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'from',
          ur: 'سے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:76:4',
        arabic: 'ٱلْكَرْبِ',
        transliteration: 'l-karbi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the distress',
          ur: 'the distress'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:76:5',
        arabic: 'ٱلْعَظِيمِ',
        transliteration: 'l-ʿaẓīmi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'the great',
          ur: 'the بڑا'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  77: {
    ayahNumber: 77,
    text: "وَجَعَلْنَا ذُرِّيَّتَهُۥ هُمُ ٱلْبَاقِينَ",
    words: [
      {
        id: '37:77:1',
        arabic: 'وَجَعَلْنَا',
        transliteration: 'wajaʿalnā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And We made',
          ur: 'اور ہم made'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:77:2',
        arabic: 'ذُرِّيَّتَهُۥ',
        transliteration: 'dhurriyyatahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'his offspring',
          ur: 'اس کا offspring'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:77:3',
        arabic: 'هُمُ',
        transliteration: 'humu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: '[they]',
          ur: '[they]'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:77:4',
        arabic: 'ٱلْبَاقِينَ',
        transliteration: 'l-bāqīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the survivors',
          ur: 'the survivors'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  78: {
    ayahNumber: 78,
    text: "وَتَرَكْنَا عَلَيْهِ فِى ٱلْـَٔاخِرِينَ",
    words: [
      {
        id: '37:78:1',
        arabic: 'وَتَرَكْنَا',
        transliteration: 'wataraknā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر أ ي',
        meaning: {
          en: 'And We left',
          ur: 'اور ہم left'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:78:2',
        arabic: 'عَلَيْهِ',
        transliteration: 'ʿalayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'for him',
          ur: 'کے لیے him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:78:3',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'among',
          ur: 'among'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:78:4',
        arabic: 'ٱلْـَٔاخِرِينَ',
        transliteration: 'l-ākhirīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the later generations',
          ur: 'the later generations'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  79: {
    ayahNumber: 79,
    text: "سَلَـٰمٌ عَلَىٰ نُوحٍۢ فِى ٱلْعَـٰلَمِينَ",
    words: [
      {
        id: '37:79:1',
        arabic: 'سَلَـٰمٌ',
        transliteration: 'salāmun',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ل م',
        meaning: {
          en: 'Peace be',
          ur: 'سلام be'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:79:2',
        arabic: 'عَلَىٰ',
        transliteration: 'ʿalā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'upon',
          ur: 'پر'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:79:3',
        arabic: 'نُوحٍۢ',
        transliteration: 'nūḥin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Nuh',
          ur: 'Nuh'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:79:4',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'among',
          ur: 'among'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:79:5',
        arabic: 'ٱلْعَـٰلَمِينَ',
        transliteration: 'l-ʿālamīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the worlds',
          ur: 'the worlds'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  80: {
    ayahNumber: 80,
    text: "إِنَّا كَذَٰلِكَ نَجْزِى ٱلْمُحْسِنِينَ",
    words: [
      {
        id: '37:80:1',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, We',
          ur: 'Indeed, ہم'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:80:2',
        arabic: 'كَذَٰلِكَ',
        transliteration: 'kadhālika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'thus',
          ur: 'thus'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:80:3',
        arabic: 'نَجْزِى',
        transliteration: 'najzī',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ز ي',
        meaning: {
          en: '[We] reward',
          ur: '[We] اجر'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:80:4',
        arabic: 'ٱلْمُحْسِنِينَ',
        transliteration: 'l-muḥ\'sinīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the good-doers',
          ur: 'the good-doers'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  81: {
    ayahNumber: 81,
    text: "إِنَّهُۥ مِنْ عِبَادِنَا ٱلْمُؤْمِنِينَ",
    words: [
      {
        id: '37:81:1',
        arabic: 'إِنَّهُۥ',
        transliteration: 'innahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, he',
          ur: 'Indeed, وہ'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:81:2',
        arabic: 'مِنْ',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: '(was) of',
          ur: '(was) کا'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:81:3',
        arabic: 'عِبَادِنَا',
        transliteration: 'ʿibādinā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ب د',
        meaning: {
          en: 'Our slaves',
          ur: 'ہمارا slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:81:4',
        arabic: 'ٱلْمُؤْمِنِينَ',
        transliteration: 'l-mu\'minīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'believing',
          ur: 'believing'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  82: {
    ayahNumber: 82,
    text: "ثُمَّ أَغْرَقْنَا ٱلْـَٔاخَرِينَ",
    words: [
      {
        id: '37:82:1',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Then',
          ur: 'پھر'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:82:2',
        arabic: 'أَغْرَقْنَا',
        transliteration: 'aghraqnā',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: null,
        meaning: {
          en: 'We drowned',
          ur: 'ہم drowned'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:82:3',
        arabic: 'ٱلْـَٔاخَرِينَ',
        transliteration: 'l-ākharīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the others',
          ur: 'the others'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  83: {
    ayahNumber: 83,
    text: "۞ وَإِنَّ مِن شِيعَتِهِۦ لَإِبْرَٰهِيمَ",
    words: [
      {
        id: '37:83:1',
        arabic: '۞ وَإِنَّ',
        transliteration: 'wa-inna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'And indeed',
          ur: 'اور indeed'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:83:2',
        arabic: 'مِن',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'among',
          ur: 'among'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:83:3',
        arabic: 'شِيعَتِهِۦ',
        transliteration: 'shīʿatihi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'his kind',
          ur: 'اس کا kind'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:83:4',
        arabic: 'لَإِبْرَٰهِيمَ',
        transliteration: 'la-ib\'rāhīma',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(was) surely Ibrahim',
          ur: '(was) surely Ibrahim'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  84: {
    ayahNumber: 84,
    text: "إِذْ جَآءَ رَبَّهُۥ بِقَلْبٍۢ سَلِيمٍ",
    words: [
      {
        id: '37:84:1',
        arabic: 'إِذْ',
        transliteration: 'idh',
        pos: ['T'],
        posLabel: 'T',
        root: null,
        meaning: {
          en: 'When',
          ur: 'جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:84:2',
        arabic: 'جَآءَ',
        transliteration: 'jāa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'he came',
          ur: 'وہ came'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:84:3',
        arabic: 'رَبَّهُۥ',
        transliteration: 'rabbahu',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: '(to) his Lord',
          ur: '(to) اس کا رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:84:4',
        arabic: 'بِقَلْبٍۢ',
        transliteration: 'biqalbin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'with a heart',
          ur: 'ساتھ a دل'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:84:5',
        arabic: 'سَلِيمٍ',
        transliteration: 'salīmin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'sound',
          ur: 'sound'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  85: {
    ayahNumber: 85,
    text: "إِذْ قَالَ لِأَبِيهِ وَقَوْمِهِۦ مَاذَا تَعْبُدُونَ",
    words: [
      {
        id: '37:85:1',
        arabic: 'إِذْ',
        transliteration: 'idh',
        pos: ['T'],
        posLabel: 'T',
        root: null,
        meaning: {
          en: 'When',
          ur: 'جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:85:2',
        arabic: 'قَالَ',
        transliteration: 'qāla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'he said',
          ur: 'وہ کہا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:85:3',
        arabic: 'لِأَبِيهِ',
        transliteration: 'li-abīhi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'to his father',
          ur: 'to اس کا father'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:85:4',
        arabic: 'وَقَوْمِهِۦ',
        transliteration: 'waqawmihi',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and his people',
          ur: 'اور اس کا لوگ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:85:5',
        arabic: 'مَاذَا',
        transliteration: 'mādhā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'What is it',
          ur: 'کیا ہے it'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:85:6',
        arabic: 'تَعْبُدُونَ',
        transliteration: 'taʿbudūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ب د',
        meaning: {
          en: 'you worship',
          ur: 'تم worship'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  86: {
    ayahNumber: 86,
    text: "أَئِفْكًا ءَالِهَةًۭ دُونَ ٱللَّهِ تُرِيدُونَ",
    words: [
      {
        id: '37:86:1',
        arabic: 'أَئِفْكًا',
        transliteration: 'a-if\'kan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Is it falsehood ',
          ur: 'ہے it falsehood'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:86:2',
        arabic: 'ءَالِهَةًۭ',
        transliteration: 'ālihatan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'gods',
          ur: 'gods'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:86:3',
        arabic: 'دُونَ',
        transliteration: 'dūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'other than',
          ur: 'other than'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:86:4',
        arabic: 'ٱللَّهِ',
        transliteration: 'l-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Allah ',
          ur: 'اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:86:5',
        arabic: 'تُرِيدُونَ',
        transliteration: 'turīdūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: '(that) you desire',
          ur: '(that) تم desire'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  87: {
    ayahNumber: 87,
    text: "فَمَا ظَنُّكُم بِرَبِّ ٱلْعَـٰلَمِينَ",
    words: [
      {
        id: '37:87:1',
        arabic: 'فَمَا',
        transliteration: 'famā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'Then what',
          ur: 'پھر کیا'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:87:2',
        arabic: 'ظَنُّكُم',
        transliteration: 'ẓannukum',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(do) you think',
          ur: '(do) تم think'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:87:3',
        arabic: 'بِرَبِّ',
        transliteration: 'birabbi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'about (the) Lord',
          ur: 'about (the) رب'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:87:4',
        arabic: 'ٱلْعَـٰلَمِينَ',
        transliteration: 'l-ʿālamīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) the worlds',
          ur: '(of) the worlds'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  88: {
    ayahNumber: 88,
    text: "فَنَظَرَ نَظْرَةًۭ فِى ٱلنُّجُومِ",
    words: [
      {
        id: '37:88:1',
        arabic: 'فَنَظَرَ',
        transliteration: 'fanaẓara',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'Then he glanced',
          ur: 'پھر وہ glanced'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:88:2',
        arabic: 'نَظْرَةًۭ',
        transliteration: 'naẓratan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a glance',
          ur: 'a glance'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:88:3',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'at',
          ur: 'at'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:88:4',
        arabic: 'ٱلنُّجُومِ',
        transliteration: 'l-nujūmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the stars',
          ur: 'the stars'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  89: {
    ayahNumber: 89,
    text: "فَقَالَ إِنِّى سَقِيمٌۭ",
    words: [
      {
        id: '37:89:1',
        arabic: 'فَقَالَ',
        transliteration: 'faqāla',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ق و ل',
        meaning: {
          en: 'And he said',
          ur: 'اور وہ کہا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:89:2',
        arabic: 'إِنِّى',
        transliteration: 'innī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, I am',
          ur: 'Indeed, I am'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:89:3',
        arabic: 'سَقِيمٌۭ',
        transliteration: 'saqīmun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'sick',
          ur: 'sick'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  90: {
    ayahNumber: 90,
    text: "فَتَوَلَّوْا۟ عَنْهُ مُدْبِرِينَ",
    words: [
      {
        id: '37:90:1',
        arabic: 'فَتَوَلَّوْا۟',
        transliteration: 'fatawallaw',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'So they turned away',
          ur: 'So وہ turned away'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:90:2',
        arabic: 'عَنْهُ',
        transliteration: 'ʿanhu',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'from him',
          ur: 'سے him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:90:3',
        arabic: 'مُدْبِرِينَ',
        transliteration: 'mud\'birīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'departing',
          ur: 'departing'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  91: {
    ayahNumber: 91,
    text: "فَرَاغَ إِلَىٰٓ ءَالِهَتِهِمْ فَقَالَ أَلَا تَأْكُلُونَ",
    words: [
      {
        id: '37:91:1',
        arabic: 'فَرَاغَ',
        transliteration: 'farāgha',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then he turned',
          ur: 'پھر وہ turned'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:91:2',
        arabic: 'إِلَىٰٓ',
        transliteration: 'ilā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'to',
          ur: 'to'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:91:3',
        arabic: 'ءَالِهَتِهِمْ',
        transliteration: 'ālihatihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'أ ل ه',
        meaning: {
          en: 'their gods',
          ur: 'ان کا gods'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:91:4',
        arabic: 'فَقَالَ',
        transliteration: 'faqāla',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ق و ل',
        meaning: {
          en: 'and said',
          ur: 'اور کہا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:91:5',
        arabic: 'أَلَا',
        transliteration: 'alā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Do not',
          ur: 'Do نہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:91:6',
        arabic: 'تَأْكُلُونَ',
        transliteration: 'takulūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'أ ك ل',
        meaning: {
          en: 'you eat',
          ur: 'تم eat'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  92: {
    ayahNumber: 92,
    text: "مَا لَكُمْ لَا تَنطِقُونَ",
    words: [
      {
        id: '37:92:1',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'What (is)',
          ur: 'کیا (is)'
        },
        grammarRole: 'ism-mawsul',
      },
      {
        id: '37:92:2',
        arabic: 'لَكُمْ',
        transliteration: 'lakum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'for you',
          ur: 'کے لیے تم'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:92:3',
        arabic: 'لَا',
        transliteration: 'lā',
        pos: ['NEG'],
        posLabel: 'NEG',
        root: null,
        meaning: {
          en: 'not',
          ur: 'نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:92:4',
        arabic: 'تَنطِقُونَ',
        transliteration: 'tanṭiqūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you speak',
          ur: 'تم speak'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' }
      ],
    },
      }
    ]
  },

  93: {
    ayahNumber: 93,
    text: "فَرَاغَ عَلَيْهِمْ ضَرْبًۢا بِٱلْيَمِينِ",
    words: [
      {
        id: '37:93:1',
        arabic: 'فَرَاغَ',
        transliteration: 'farāgha',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then he turned',
          ur: 'پھر وہ turned'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:93:2',
        arabic: 'عَلَيْهِمْ',
        transliteration: 'ʿalayhim',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'upon them',
          ur: 'پر انہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:93:3',
        arabic: 'ضَرْبًۢا',
        transliteration: 'ḍarban',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'striking',
          ur: 'striking'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:93:4',
        arabic: 'بِٱلْيَمِينِ',
        transliteration: 'bil-yamīni',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'with the right hand',
          ur: 'ساتھ the right hand'
        },
        grammarRole: 'jarr-majrur',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  94: {
    ayahNumber: 94,
    text: "فَأَقْبَلُوٓا۟ إِلَيْهِ يَزِفُّونَ",
    words: [
      {
        id: '37:94:1',
        arabic: 'فَأَقْبَلُوٓا۟',
        transliteration: 'fa-aqbalū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'Then they advanced',
          ur: 'پھر وہ advanced'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:94:2',
        arabic: 'إِلَيْهِ',
        transliteration: 'ilayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'towards him',
          ur: 'towards him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:94:3',
        arabic: 'يَزِفُّونَ',
        transliteration: 'yaziffūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'hastening',
          ur: 'hastening'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  95: {
    ayahNumber: 95,
    text: "قَالَ أَتَعْبُدُونَ مَا تَنْحِتُونَ",
    words: [
      {
        id: '37:95:1',
        arabic: 'قَالَ',
        transliteration: 'qāla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'He said',
          ur: 'وہ کہا'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:95:2',
        arabic: 'أَتَعْبُدُونَ',
        transliteration: 'ataʿbudūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Do you worship',
          ur: 'Do تم worship'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:95:3',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'what',
          ur: 'کیا'
        },
        grammarRole: 'ism-mawsul',
      },
      {
        id: '37:95:4',
        arabic: 'تَنْحِتُونَ',
        transliteration: 'tanḥitūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you carve',
          ur: 'تم carve'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصول + صلة' }
      ],
    },
      }
    ]
  },

  96: {
    ayahNumber: 96,
    text: "وَٱللَّهُ خَلَقَكُمْ وَمَا تَعْمَلُونَ",
    words: [
      {
        id: '37:96:1',
        arabic: 'وَٱللَّهُ',
        transliteration: 'wal-lahu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'While Allah',
          ur: 'While اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:96:2',
        arabic: 'خَلَقَكُمْ',
        transliteration: 'khalaqakum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'خ ل ق',
        meaning: {
          en: 'created you',
          ur: 'created تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:96:3',
        arabic: 'وَمَا',
        transliteration: 'wamā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'and what',
          ur: 'اور کیا'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:96:4',
        arabic: 'تَعْمَلُونَ',
        transliteration: 'taʿmalūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you make',
          ur: 'تم make'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'نفی + فعل' }
      ],
    },
      }
    ]
  },

  97: {
    ayahNumber: 97,
    text: "قَالُوا۟ ٱبْنُوا۟ لَهُۥ بُنْيَـٰنًۭا فَأَلْقُوهُ فِى ٱلْجَحِيمِ",
    words: [
      {
        id: '37:97:1',
        arabic: 'قَالُوا۟',
        transliteration: 'qālū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ق و ل',
        meaning: {
          en: 'They said',
          ur: 'وہ کہا'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:97:2',
        arabic: 'ٱبْنُوا۟',
        transliteration: 'ib\'nū',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Build',
          ur: 'Build'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:97:3',
        arabic: 'لَهُۥ',
        transliteration: 'lahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'for him',
          ur: 'کے لیے him'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:97:4',
        arabic: 'بُنْيَـٰنًۭا',
        transliteration: 'bun\'yānan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a structure',
          ur: 'a structure'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:97:5',
        arabic: 'فَأَلْقُوهُ',
        transliteration: 'fa-alqūhu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and throw him',
          ur: 'اور throw him'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:97:6',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'into',
          ur: 'into'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:97:7',
        arabic: 'ٱلْجَحِيمِ',
        transliteration: 'l-jaḥīmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the blazing Fire',
          ur: 'the blazing آگ'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  98: {
    ayahNumber: 98,
    text: "فَأَرَادُوا۟ بِهِۦ كَيْدًۭا فَجَعَلْنَـٰهُمُ ٱلْأَسْفَلِينَ",
    words: [
      {
        id: '37:98:1',
        arabic: 'فَأَرَادُوا۟',
        transliteration: 'fa-arādū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر أ ي',
        meaning: {
          en: 'And they intended',
          ur: 'اور وہ intended'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:98:2',
        arabic: 'بِهِۦ',
        transliteration: 'bihi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'for him',
          ur: 'کے لیے him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:98:3',
        arabic: 'كَيْدًۭا',
        transliteration: 'kaydan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a plot',
          ur: 'a plot'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:98:4',
        arabic: 'فَجَعَلْنَـٰهُمُ',
        transliteration: 'fajaʿalnāhumu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'but We made them',
          ur: 'مگر ہم made انہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:98:5',
        arabic: 'ٱلْأَسْفَلِينَ',
        transliteration: 'l-asfalīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the lowest',
          ur: 'the lowest'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  99: {
    ayahNumber: 99,
    text: "وَقَالَ إِنِّى ذَاهِبٌ إِلَىٰ رَبِّى سَيَهْدِينِ",
    words: [
      {
        id: '37:99:1',
        arabic: 'وَقَالَ',
        transliteration: 'waqāla',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ق و ل',
        meaning: {
          en: 'And he said',
          ur: 'اور وہ کہا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:99:2',
        arabic: 'إِنِّى',
        transliteration: 'innī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, I am',
          ur: 'Indeed, I am'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:99:3',
        arabic: 'ذَاهِبٌ',
        transliteration: 'dhāhibun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'going',
          ur: 'going'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:99:4',
        arabic: 'إِلَىٰ',
        transliteration: 'ilā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'to',
          ur: 'to'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:99:5',
        arabic: 'رَبِّى',
        transliteration: 'rabbī',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: 'my Lord',
          ur: 'my رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:99:6',
        arabic: 'سَيَهْدِينِ',
        transliteration: 'sayahdīni',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'He will guide me',
          ur: 'وہ will guide me'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  100: {
    ayahNumber: 100,
    text: "رَبِّ هَبْ لِى مِنَ ٱلصَّـٰلِحِينَ",
    words: [
      {
        id: '37:100:1',
        arabic: 'رَبِّ',
        transliteration: 'rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: 'My Lord',
          ur: 'My رب'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:100:2',
        arabic: 'هَبْ',
        transliteration: 'hab',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'grant',
          ur: 'grant'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:100:3',
        arabic: 'لِى',
        transliteration: 'lī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'me',
          ur: 'me'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:100:4',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:100:5',
        arabic: 'ٱلصَّـٰلِحِينَ',
        transliteration: 'l-ṣāliḥīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'the righteous',
          ur: 'the righteous'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  101: {
    ayahNumber: 101,
    text: "فَبَشَّرْنَـٰهُ بِغُلَـٰمٍ حَلِيمٍۢ",
    words: [
      {
        id: '37:101:1',
        arabic: 'فَبَشَّرْنَـٰهُ',
        transliteration: 'fabasharnāhu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'So We gave him the glad tidings',
          ur: 'So ہم gave him the glad tidings'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:101:2',
        arabic: 'بِغُلَـٰمٍ',
        transliteration: 'bighulāmin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'of a boy',
          ur: 'کا a boy'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:101:3',
        arabic: 'حَلِيمٍۢ',
        transliteration: 'ḥalīmin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: 'ح ل م',
        meaning: {
          en: 'forbearing',
          ur: 'forbearing'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  102: {
    ayahNumber: 102,
    text: "فَلَمَّا بَلَغَ مَعَهُ ٱلسَّعْىَ قَالَ يَـٰبُنَىَّ إِنِّىٓ أَرَىٰ فِى ٱلْمَنَامِ أَنِّىٓ أَذْبَحُكَ فَٱنظُرْ مَاذَا تَرَىٰ ۚ قَالَ يَـٰٓأَبَتِ ٱفْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِىٓ إِن شَآءَ ٱللَّهُ مِنَ ٱلصَّـٰبِرِينَ",
    words: [
      {
        id: '37:102:1',
        arabic: 'فَلَمَّا',
        transliteration: 'falammā',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'Then when',
          ur: 'پھر جب'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:102:2',
        arabic: 'بَلَغَ',
        transliteration: 'balagha',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'he reached',
          ur: 'وہ reached'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:3',
        arabic: 'مَعَهُ',
        transliteration: 'maʿahu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'the (age of) working with him',
          ur: 'the (age of) working ساتھ him'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:4',
        arabic: 'ٱلسَّعْىَ',
        transliteration: 'l-saʿya',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the (age of) working with him',
          ur: 'the (age of) working ساتھ him'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:5',
        arabic: 'قَالَ',
        transliteration: 'qāla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'he said',
          ur: 'وہ کہا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:6',
        arabic: 'يَـٰبُنَىَّ',
        transliteration: 'yābunayya',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'O my son',
          ur: 'O my son'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:7',
        arabic: 'إِنِّىٓ',
        transliteration: 'innī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, I',
          ur: 'Indeed, I'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:8',
        arabic: 'أَرَىٰ',
        transliteration: 'arā',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر أ ي',
        meaning: {
          en: 'have seen',
          ur: 'have seen'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:102:9',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'in',
          ur: 'میں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:102:10',
        arabic: 'ٱلْمَنَامِ',
        transliteration: 'l-manāmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the dream',
          ur: 'the dream'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:11',
        arabic: 'أَنِّىٓ',
        transliteration: 'annī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'that I am',
          ur: 'وہ I am'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:12',
        arabic: 'أَذْبَحُكَ',
        transliteration: 'adhbaḥuka',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ذ ب ح',
        meaning: {
          en: 'sacrificing you',
          ur: 'sacrificing تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:13',
        arabic: 'فَٱنظُرْ',
        transliteration: 'fa-unẓur',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'so look',
          ur: 'so look'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:14',
        arabic: 'مَاذَا',
        transliteration: 'mādhā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'what',
          ur: 'کیا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:15',
        arabic: 'تَرَىٰ ۚ',
        transliteration: 'tarā',
        pos: ['V'],
        posLabel: 'V',
        root: 'ر أ ي',
        meaning: {
          en: 'you see',
          ur: 'تم see'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:102:16',
        arabic: 'قَالَ',
        transliteration: 'qāla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'He said',
          ur: 'وہ کہا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:17',
        arabic: 'يَـٰٓأَبَتِ',
        transliteration: 'yāabati',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'O my father',
          ur: 'O my father'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:18',
        arabic: 'ٱفْعَلْ',
        transliteration: 'if\'ʿal',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Do',
          ur: 'Do'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:19',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'what',
          ur: 'کیا'
        },
        grammarRole: 'ism-mawsul',
      },
      {
        id: '37:102:20',
        arabic: 'تُؤْمَرُ ۖ',
        transliteration: 'tu\'maru',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you are commanded',
          ur: 'تم ہیں commanded'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:102:21',
        arabic: 'سَتَجِدُنِىٓ',
        transliteration: 'satajidunī',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'You will find me',
          ur: 'تم will find me'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:22',
        arabic: 'إِن',
        transliteration: 'in',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'if',
          ur: 'اگر'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:23',
        arabic: 'شَآءَ',
        transliteration: 'shāa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Allah wills',
          ur: 'اللہ wills'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:24',
        arabic: 'ٱللَّهُ',
        transliteration: 'l-lahu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Allah wills',
          ur: 'اللہ wills'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:25',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:102:26',
        arabic: 'ٱلصَّـٰبِرِينَ',
        transliteration: 'l-ṣābirīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the patient ones',
          ur: 'the patient ones'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 9, to: 10, label: 'جار + مجرور' },
        { from: 15, to: 16, label: 'فعل + مفعول به' },
        { from: 19, to: 20, label: 'موصول + صلة' },
        { from: 20, to: 21, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  103: {
    ayahNumber: 103,
    text: "فَلَمَّآ أَسْلَمَا وَتَلَّهُۥ لِلْجَبِينِ",
    words: [
      {
        id: '37:103:1',
        arabic: 'فَلَمَّآ',
        transliteration: 'falammā',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'Then when',
          ur: 'پھر جب'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:103:2',
        arabic: 'أَسْلَمَا',
        transliteration: 'aslamā',
        pos: ['V'],
        posLabel: 'V',
        root: 'س ل م',
        meaning: {
          en: 'both of them had submitted',
          ur: 'both کا انہیں had submitted'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:103:3',
        arabic: 'وَتَلَّهُۥ',
        transliteration: 'watallahu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'and he put him down',
          ur: 'اور وہ put him down'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:103:4',
        arabic: 'لِلْجَبِينِ',
        transliteration: 'lil\'jabīni',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'upon his forehead',
          ur: 'پر اس کا forehead'
        },
        grammarRole: 'jarr-majrur',
      }
    ],
    structure: {
      relationships: [
      { from: 2, to: 3, label: 'عطف' }
      ],
    },
  },

  104: {
    ayahNumber: 104,
    text: "وَنَـٰدَيْنَـٰهُ أَن يَـٰٓإِبْرَٰهِيمُ",
    words: [
      {
        id: '37:104:1',
        arabic: 'وَنَـٰدَيْنَـٰهُ',
        transliteration: 'wanādaynāhu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And We called out to him',
          ur: 'اور ہم called out to him'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:104:2',
        arabic: 'أَن',
        transliteration: 'an',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'that',
          ur: 'وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:104:3',
        arabic: 'يَـٰٓإِبْرَٰهِيمُ',
        transliteration: 'yāib\'rāhīmu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'O Ibrahim',
          ur: 'O Ibrahim'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  105: {
    ayahNumber: 105,
    text: "قَدْ صَدَّقْتَ ٱلرُّءْيَآ ۚ إِنَّا كَذَٰلِكَ نَجْزِى ٱلْمُحْسِنِينَ",
    words: [
      {
        id: '37:105:1',
        arabic: 'قَدْ',
        transliteration: 'qad',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Verily',
          ur: 'Verily'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:105:2',
        arabic: 'صَدَّقْتَ',
        transliteration: 'ṣaddaqta',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you have fulfilled',
          ur: 'تم have fulfilled'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:105:3',
        arabic: 'ٱلرُّءْيَآ ۚ',
        transliteration: 'l-ru\'yā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the vision',
          ur: 'the vision'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:105:4',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, We',
          ur: 'Indeed, ہم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:105:5',
        arabic: 'كَذَٰلِكَ',
        transliteration: 'kadhālika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'thus',
          ur: 'thus'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:105:6',
        arabic: 'نَجْزِى',
        transliteration: 'najzī',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ز ي',
        meaning: {
          en: '[We] reward',
          ur: '[We] اجر'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:105:7',
        arabic: 'ٱلْمُحْسِنِينَ',
        transliteration: 'l-muḥ\'sinīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the good-doers',
          ur: 'the good-doers'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  106: {
    ayahNumber: 106,
    text: "إِنَّ هَـٰذَا لَهُوَ ٱلْبَلَـٰٓؤُا۟ ٱلْمُبِينُ",
    words: [
      {
        id: '37:106:1',
        arabic: 'إِنَّ',
        transliteration: 'inna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed',
          ur: 'بیشک'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:106:2',
        arabic: 'هَـٰذَا',
        transliteration: 'hādhā',
        pos: ['DEM'],
        posLabel: 'DEM',
        root: null,
        meaning: {
          en: 'this',
          ur: 'یہ'
        },
        grammarRole: 'ism-ishara',
      },
      {
        id: '37:106:3',
        arabic: 'لَهُوَ',
        transliteration: 'lahuwa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(was) surely [it]',
          ur: '(was) surely [it]'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:106:4',
        arabic: 'ٱلْبَلَـٰٓؤُا۟',
        transliteration: 'l-balāu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the trial',
          ur: 'the trial'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:106:5',
        arabic: 'ٱلْمُبِينُ',
        transliteration: 'l-mubīnu',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'clear',
          ur: 'واضح'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  107: {
    ayahNumber: 107,
    text: "وَفَدَيْنَـٰهُ بِذِبْحٍ عَظِيمٍۢ",
    words: [
      {
        id: '37:107:1',
        arabic: 'وَفَدَيْنَـٰهُ',
        transliteration: 'wafadaynāhu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ف د ي',
        meaning: {
          en: 'And We ransomed him',
          ur: 'اور ہم ransomed him'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:107:2',
        arabic: 'بِذِبْحٍ',
        transliteration: 'bidhib\'ḥin',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'with a sacrifice',
          ur: 'ساتھ a sacrifice'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:107:3',
        arabic: 'عَظِيمٍۢ',
        transliteration: 'ʿaẓīmin',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'great',
          ur: 'بڑا'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  108: {
    ayahNumber: 108,
    text: "وَتَرَكْنَا عَلَيْهِ فِى ٱلْـَٔاخِرِينَ",
    words: [
      {
        id: '37:108:1',
        arabic: 'وَتَرَكْنَا',
        transliteration: 'wataraknā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر أ ي',
        meaning: {
          en: 'And We left',
          ur: 'اور ہم left'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:108:2',
        arabic: 'عَلَيْهِ',
        transliteration: 'ʿalayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'for him',
          ur: 'کے لیے him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:108:3',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'among',
          ur: 'among'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:108:4',
        arabic: 'ٱلْـَٔاخِرِينَ',
        transliteration: 'l-ākhirīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the later generations',
          ur: 'the later generations'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  109: {
    ayahNumber: 109,
    text: "سَلَـٰمٌ عَلَىٰٓ إِبْرَٰهِيمَ",
    words: [
      {
        id: '37:109:1',
        arabic: 'سَلَـٰمٌ',
        transliteration: 'salāmun',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ل م',
        meaning: {
          en: 'Peace be',
          ur: 'سلام be'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:109:2',
        arabic: 'عَلَىٰٓ',
        transliteration: 'ʿalā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'on',
          ur: 'on'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:109:3',
        arabic: 'إِبْرَٰهِيمَ',
        transliteration: 'ib\'rāhīma',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Ibrahim',
          ur: 'Ibrahim'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  110: {
    ayahNumber: 110,
    text: "كَذَٰلِكَ نَجْزِى ٱلْمُحْسِنِينَ",
    words: [
      {
        id: '37:110:1',
        arabic: 'كَذَٰلِكَ',
        transliteration: 'kadhālika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Thus',
          ur: 'Thus'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:110:2',
        arabic: 'نَجْزِى',
        transliteration: 'najzī',
        pos: ['V'],
        posLabel: 'V',
        root: 'ج ز ي',
        meaning: {
          en: 'We reward',
          ur: 'ہم اجر'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:110:3',
        arabic: 'ٱلْمُحْسِنِينَ',
        transliteration: 'l-muḥ\'sinīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the good-doers',
          ur: 'the good-doers'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  111: {
    ayahNumber: 111,
    text: "إِنَّهُۥ مِنْ عِبَادِنَا ٱلْمُؤْمِنِينَ",
    words: [
      {
        id: '37:111:1',
        arabic: 'إِنَّهُۥ',
        transliteration: 'innahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, he (was)',
          ur: 'Indeed, وہ (was)'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:111:2',
        arabic: 'مِنْ',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:111:3',
        arabic: 'عِبَادِنَا',
        transliteration: 'ʿibādinā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ب د',
        meaning: {
          en: 'Our slaves',
          ur: 'ہمارا slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:111:4',
        arabic: 'ٱلْمُؤْمِنِينَ',
        transliteration: 'l-mu\'minīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'believing',
          ur: 'believing'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  112: {
    ayahNumber: 112,
    text: "وَبَشَّرْنَـٰهُ بِإِسْحَـٰقَ نَبِيًّۭا مِّنَ ٱلصَّـٰلِحِينَ",
    words: [
      {
        id: '37:112:1',
        arabic: 'وَبَشَّرْنَـٰهُ',
        transliteration: 'wabasharnāhu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And We gave him glad tidings',
          ur: 'اور ہم gave him glad tidings'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:112:2',
        arabic: 'بِإِسْحَـٰقَ',
        transliteration: 'bi-is\'ḥāqa',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'of Isaac',
          ur: 'کا Isaac'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:112:3',
        arabic: 'نَبِيًّۭا',
        transliteration: 'nabiyyan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a Prophet',
          ur: 'a Prophet'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:112:4',
        arabic: 'مِّنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'among',
          ur: 'among'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:112:5',
        arabic: 'ٱلصَّـٰلِحِينَ',
        transliteration: 'l-ṣāliḥīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'the righteous',
          ur: 'the righteous'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  113: {
    ayahNumber: 113,
    text: "وَبَـٰرَكْنَا عَلَيْهِ وَعَلَىٰٓ إِسْحَـٰقَ ۚ وَمِن ذُرِّيَّتِهِمَا مُحْسِنٌۭ وَظَالِمٌۭ لِّنَفْسِهِۦ مُبِينٌۭ",
    words: [
      {
        id: '37:113:1',
        arabic: 'وَبَـٰرَكْنَا',
        transliteration: 'wabāraknā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And We blessed',
          ur: 'اور ہم blessed'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:113:2',
        arabic: 'عَلَيْهِ',
        transliteration: 'ʿalayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'him',
          ur: 'him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:113:3',
        arabic: 'وَعَلَىٰٓ',
        transliteration: 'waʿalā',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and [on]',
          ur: 'اور [on]'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:113:4',
        arabic: 'إِسْحَـٰقَ ۚ',
        transliteration: 'is\'ḥāqa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Isaac',
          ur: 'Isaac'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:113:5',
        arabic: 'وَمِن',
        transliteration: 'wamin',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And of',
          ur: 'اور کا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:113:6',
        arabic: 'ذُرِّيَّتِهِمَا',
        transliteration: 'dhurriyyatihimā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'their offspring',
          ur: 'ان کا offspring'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:113:7',
        arabic: 'مُحْسِنٌۭ',
        transliteration: 'muḥ\'sinun',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح س ن',
        meaning: {
          en: '(are) good-doers',
          ur: '(are) good-doers'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:113:8',
        arabic: 'وَظَالِمٌۭ',
        transliteration: 'waẓālimun',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ظ ل م',
        meaning: {
          en: 'and unjust',
          ur: 'اور unjust'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:113:9',
        arabic: 'لِّنَفْسِهِۦ',
        transliteration: 'linafsihi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'to himself',
          ur: 'to himself'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:113:10',
        arabic: 'مُبِينٌۭ',
        transliteration: 'mubīnun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'clear',
          ur: 'واضح'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 9, to: 10, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  114: {
    ayahNumber: 114,
    text: "وَلَقَدْ مَنَنَّا عَلَىٰ مُوسَىٰ وَهَـٰرُونَ",
    words: [
      {
        id: '37:114:1',
        arabic: 'وَلَقَدْ',
        transliteration: 'walaqad',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And verily',
          ur: 'اور verily'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:114:2',
        arabic: 'مَنَنَّا',
        transliteration: 'manannā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'We conferred Favor',
          ur: 'ہم conferred Favor'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:114:3',
        arabic: 'عَلَىٰ',
        transliteration: 'ʿalā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'upon',
          ur: 'پر'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:114:4',
        arabic: 'مُوسَىٰ',
        transliteration: 'mūsā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Musa',
          ur: 'Musa'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:114:5',
        arabic: 'وَهَـٰرُونَ',
        transliteration: 'wahārūna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and Harun',
          ur: 'اور Harun'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  115: {
    ayahNumber: 115,
    text: "وَنَجَّيْنَـٰهُمَا وَقَوْمَهُمَا مِنَ ٱلْكَرْبِ ٱلْعَظِيمِ",
    words: [
      {
        id: '37:115:1',
        arabic: 'وَنَجَّيْنَـٰهُمَا',
        transliteration: 'wanajjaynāhumā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And We saved both of them',
          ur: 'اور ہم saved both کا انہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:115:2',
        arabic: 'وَقَوْمَهُمَا',
        transliteration: 'waqawmahumā',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and their people',
          ur: 'اور ان کا لوگ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:115:3',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'from',
          ur: 'سے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:115:4',
        arabic: 'ٱلْكَرْبِ',
        transliteration: 'l-karbi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the distress',
          ur: 'the distress'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:115:5',
        arabic: 'ٱلْعَظِيمِ',
        transliteration: 'l-ʿaẓīmi',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'the great',
          ur: 'the بڑا'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  116: {
    ayahNumber: 116,
    text: "وَنَصَرْنَـٰهُمْ فَكَانُوا۟ هُمُ ٱلْغَـٰلِبِينَ",
    words: [
      {
        id: '37:116:1',
        arabic: 'وَنَصَرْنَـٰهُمْ',
        transliteration: 'wanaṣarnāhum',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ن ص ر',
        meaning: {
          en: 'And We helped them',
          ur: 'اور ہم helped انہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:116:2',
        arabic: 'فَكَانُوا۟',
        transliteration: 'fakānū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ك و ن',
        meaning: {
          en: 'so they became',
          ur: 'so وہ became'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:116:3',
        arabic: 'هُمُ',
        transliteration: 'humu',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'so they became',
          ur: 'so وہ became'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:116:4',
        arabic: 'ٱلْغَـٰلِبِينَ',
        transliteration: 'l-ghālibīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the victors',
          ur: 'the victors'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [
      { from: 1, to: 2, label: 'عطف' }
      ],
    },
  },

  117: {
    ayahNumber: 117,
    text: "وَءَاتَيْنَـٰهُمَا ٱلْكِتَـٰبَ ٱلْمُسْتَبِينَ",
    words: [
      {
        id: '37:117:1',
        arabic: 'وَءَاتَيْنَـٰهُمَا',
        transliteration: 'waātaynāhumā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And We gave both of them',
          ur: 'اور ہم gave both کا انہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:117:2',
        arabic: 'ٱلْكِتَـٰبَ',
        transliteration: 'l-kitāba',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Book',
          ur: 'the کتاب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:117:3',
        arabic: 'ٱلْمُسْتَبِينَ',
        transliteration: 'l-mus\'tabīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'the clear',
          ur: 'the واضح'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  118: {
    ayahNumber: 118,
    text: "وَهَدَيْنَـٰهُمَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
    words: [
      {
        id: '37:118:1',
        arabic: 'وَهَدَيْنَـٰهُمَا',
        transliteration: 'wahadaynāhumā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ه د ي',
        meaning: {
          en: 'And We guided both of them',
          ur: 'اور ہم guided both کا انہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:118:2',
        arabic: 'ٱلصِّرَٰطَ',
        transliteration: 'l-ṣirāṭa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(to) the Path',
          ur: '(to) the راستہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:118:3',
        arabic: 'ٱلْمُسْتَقِيمَ',
        transliteration: 'l-mus\'taqīma',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'the Straight',
          ur: 'the سیدھا'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 2, to: 3, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  119: {
    ayahNumber: 119,
    text: "وَتَرَكْنَا عَلَيْهِمَا فِى ٱلْـَٔاخِرِينَ",
    words: [
      {
        id: '37:119:1',
        arabic: 'وَتَرَكْنَا',
        transliteration: 'wataraknā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر أ ي',
        meaning: {
          en: 'And We left',
          ur: 'اور ہم left'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:119:2',
        arabic: 'عَلَيْهِمَا',
        transliteration: 'ʿalayhimā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'for both of them',
          ur: 'کے لیے both کا انہیں'
        },
        grammarRole: 'mudaf-ilayh',
      },
      {
        id: '37:119:3',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'among',
          ur: 'among'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:119:4',
        arabic: 'ٱلْـَٔاخِرِينَ',
        transliteration: 'l-ākhirīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the later generations',
          ur: 'the later generations'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  120: {
    ayahNumber: 120,
    text: "سَلَـٰمٌ عَلَىٰ مُوسَىٰ وَهَـٰرُونَ",
    words: [
      {
        id: '37:120:1',
        arabic: 'سَلَـٰمٌ',
        transliteration: 'salāmun',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ل م',
        meaning: {
          en: 'Peace be',
          ur: 'سلام be'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:120:2',
        arabic: 'عَلَىٰ',
        transliteration: 'ʿalā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'upon',
          ur: 'پر'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:120:3',
        arabic: 'مُوسَىٰ',
        transliteration: 'mūsā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Musa',
          ur: 'Musa'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:120:4',
        arabic: 'وَهَـٰرُونَ',
        transliteration: 'wahārūna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and Harun',
          ur: 'اور Harun'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  121: {
    ayahNumber: 121,
    text: "إِنَّا كَذَٰلِكَ نَجْزِى ٱلْمُحْسِنِينَ",
    words: [
      {
        id: '37:121:1',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, We',
          ur: 'Indeed, ہم'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:121:2',
        arabic: 'كَذَٰلِكَ',
        transliteration: 'kadhālika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'thus',
          ur: 'thus'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:121:3',
        arabic: 'نَجْزِى',
        transliteration: 'najzī',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ز ي',
        meaning: {
          en: 'reward',
          ur: 'اجر'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:121:4',
        arabic: 'ٱلْمُحْسِنِينَ',
        transliteration: 'l-muḥ\'sinīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the good-doers',
          ur: 'the good-doers'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  122: {
    ayahNumber: 122,
    text: "إِنَّهُمَا مِنْ عِبَادِنَا ٱلْمُؤْمِنِينَ",
    words: [
      {
        id: '37:122:1',
        arabic: 'إِنَّهُمَا',
        transliteration: 'innahumā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, both of them',
          ur: 'Indeed, both کا انہیں'
        },
        grammarRole: 'mudaf-ilayh',
      },
      {
        id: '37:122:2',
        arabic: 'مِنْ',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: '(were) of',
          ur: '(were) کا'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:122:3',
        arabic: 'عِبَادِنَا',
        transliteration: 'ʿibādinā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ب د',
        meaning: {
          en: 'Our slaves',
          ur: 'ہمارا slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:122:4',
        arabic: 'ٱلْمُؤْمِنِينَ',
        transliteration: 'l-mu\'minīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'believing',
          ur: 'believing'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  123: {
    ayahNumber: 123,
    text: "وَإِنَّ إِلْيَاسَ لَمِنَ ٱلْمُرْسَلِينَ",
    words: [
      {
        id: '37:123:1',
        arabic: 'وَإِنَّ',
        transliteration: 'wa-inna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed',
          ur: 'اور indeed'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:123:2',
        arabic: 'إِلْيَاسَ',
        transliteration: 'il\'yāsa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Elijah',
          ur: 'Elijah'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:123:3',
        arabic: 'لَمِنَ',
        transliteration: 'lamina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(was) surely of',
          ur: '(was) surely کا'
        },
        grammarRole: 'mudaf-ilayh',
      },
      {
        id: '37:123:4',
        arabic: 'ٱلْمُرْسَلِينَ',
        transliteration: 'l-mur\'salīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Messengers',
          ur: 'the رسول'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
      }
    ]
  },

  124: {
    ayahNumber: 124,
    text: "إِذْ قَالَ لِقَوْمِهِۦٓ أَلَا تَتَّقُونَ",
    words: [
      {
        id: '37:124:1',
        arabic: 'إِذْ',
        transliteration: 'idh',
        pos: ['T'],
        posLabel: 'T',
        root: null,
        meaning: {
          en: 'When',
          ur: 'جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:124:2',
        arabic: 'قَالَ',
        transliteration: 'qāla',
        pos: ['N'],
        posLabel: 'N',
        root: 'ق و ل',
        meaning: {
          en: 'he said',
          ur: 'وہ کہا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:124:3',
        arabic: 'لِقَوْمِهِۦٓ',
        transliteration: 'liqawmihi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'to his people',
          ur: 'to اس کا لوگ'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:124:4',
        arabic: 'أَلَا',
        transliteration: 'alā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Will not',
          ur: 'Will نہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:124:5',
        arabic: 'تَتَّقُونَ',
        transliteration: 'tattaqūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you fear',
          ur: 'تم fear'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  125: {
    ayahNumber: 125,
    text: "أَتَدْعُونَ بَعْلًۭا وَتَذَرُونَ أَحْسَنَ ٱلْخَـٰلِقِينَ",
    words: [
      {
        id: '37:125:1',
        arabic: 'أَتَدْعُونَ',
        transliteration: 'atadʿūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Do you call',
          ur: 'Do تم call'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:125:2',
        arabic: 'بَعْلًۭا',
        transliteration: 'baʿlan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Baal',
          ur: 'Baal'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:125:3',
        arabic: 'وَتَذَرُونَ',
        transliteration: 'watadharūna',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'and you forsake',
          ur: 'اور تم forsake'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:125:4',
        arabic: 'أَحْسَنَ',
        transliteration: 'aḥsana',
        pos: ['N'],
        posLabel: 'N',
        root: 'ح س ن',
        meaning: {
          en: '(the) Best',
          ur: '(the) Best'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:125:5',
        arabic: 'ٱلْخَـٰلِقِينَ',
        transliteration: 'l-khāliqīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Creators ',
          ur: '(of) Creators'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  126: {
    ayahNumber: 126,
    text: "ٱللَّهَ رَبَّكُمْ وَرَبَّ ءَابَآئِكُمُ ٱلْأَوَّلِينَ",
    words: [
      {
        id: '37:126:1',
        arabic: 'ٱللَّهَ',
        transliteration: 'al-laha',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Allah',
          ur: 'اللہ'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:126:2',
        arabic: 'رَبَّكُمْ',
        transliteration: 'rabbakum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: {
          en: 'your Lord',
          ur: 'تمہارا رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:126:3',
        arabic: 'وَرَبَّ',
        transliteration: 'warabba',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ر ب ب',
        meaning: {
          en: 'and (the) Lord',
          ur: 'اور (the) رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:126:4',
        arabic: 'ءَابَآئِكُمُ',
        transliteration: 'ābāikumu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) your forefathers',
          ur: '(of) تمہارا forefathers'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:126:5',
        arabic: 'ٱلْأَوَّلِينَ',
        transliteration: 'l-awalīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) your forefathers',
          ur: '(of) تمہارا forefathers'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  127: {
    ayahNumber: 127,
    text: "فَكَذَّبُوهُ فَإِنَّهُمْ لَمُحْضَرُونَ",
    words: [
      {
        id: '37:127:1',
        arabic: 'فَكَذَّبُوهُ',
        transliteration: 'fakadhabūhu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'But they denied him',
          ur: 'مگر وہ denied him'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:127:2',
        arabic: 'فَإِنَّهُمْ',
        transliteration: 'fa-innahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'so indeed, they',
          ur: 'so indeed, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:127:3',
        arabic: 'لَمُحْضَرُونَ',
        transliteration: 'lamuḥ\'ḍarūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will) surely be brought',
          ur: '(will) surely be brought'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  128: {
    ayahNumber: 128,
    text: "إِلَّا عِبَادَ ٱللَّهِ ٱلْمُخْلَصِينَ",
    words: [
      {
        id: '37:128:1',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:128:2',
        arabic: 'عِبَادَ',
        transliteration: 'ʿibāda',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ب د',
        meaning: {
          en: '(the) slaves',
          ur: '(the) slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:128:3',
        arabic: 'ٱللَّهِ',
        transliteration: 'l-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Allah',
          ur: '(of) اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:128:4',
        arabic: 'ٱلْمُخْلَصِينَ',
        transliteration: 'l-mukh\'laṣīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the chosen ones',
          ur: 'the chosen ones'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  129: {
    ayahNumber: 129,
    text: "وَتَرَكْنَا عَلَيْهِ فِى ٱلْـَٔاخِرِينَ",
    words: [
      {
        id: '37:129:1',
        arabic: 'وَتَرَكْنَا',
        transliteration: 'wataraknā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر أ ي',
        meaning: {
          en: 'And We left',
          ur: 'اور ہم left'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:129:2',
        arabic: 'عَلَيْهِ',
        transliteration: 'ʿalayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'for him',
          ur: 'کے لیے him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:129:3',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'among',
          ur: 'among'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:129:4',
        arabic: 'ٱلْـَٔاخِرِينَ',
        transliteration: 'l-ākhirīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the later generations',
          ur: 'the later generations'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  130: {
    ayahNumber: 130,
    text: "سَلَـٰمٌ عَلَىٰٓ إِلْ يَاسِينَ",
    words: [
      {
        id: '37:130:1',
        arabic: 'سَلَـٰمٌ',
        transliteration: 'salāmun',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ل م',
        meaning: {
          en: 'Peace be',
          ur: 'سلام be'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:130:2',
        arabic: 'عَلَىٰٓ',
        transliteration: 'ʿalā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'upon',
          ur: 'پر'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:130:3',
        arabic: 'إِلْ يَاسِينَ',
        transliteration: 'il yāsīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Elijah',
          ur: 'Elijah'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  131: {
    ayahNumber: 131,
    text: "إِنَّا كَذَٰلِكَ نَجْزِى ٱلْمُحْسِنِينَ",
    words: [
      {
        id: '37:131:1',
        arabic: 'إِنَّا',
        transliteration: 'innā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, We',
          ur: 'Indeed, ہم'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:131:2',
        arabic: 'كَذَٰلِكَ',
        transliteration: 'kadhālika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'thus',
          ur: 'thus'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:131:3',
        arabic: 'نَجْزِى',
        transliteration: 'najzī',
        pos: ['N'],
        posLabel: 'N',
        root: 'ج ز ي',
        meaning: {
          en: 'reward',
          ur: 'اجر'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:131:4',
        arabic: 'ٱلْمُحْسِنِينَ',
        transliteration: 'l-muḥ\'sinīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the good-doers',
          ur: 'the good-doers'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  132: {
    ayahNumber: 132,
    text: "إِنَّهُۥ مِنْ عِبَادِنَا ٱلْمُؤْمِنِينَ",
    words: [
      {
        id: '37:132:1',
        arabic: 'إِنَّهُۥ',
        transliteration: 'innahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Indeed, he (was)',
          ur: 'Indeed, وہ (was)'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:132:2',
        arabic: 'مِنْ',
        transliteration: 'min',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:132:3',
        arabic: 'عِبَادِنَا',
        transliteration: 'ʿibādinā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ع ب د',
        meaning: {
          en: 'Our slaves',
          ur: 'ہمارا slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:132:4',
        arabic: 'ٱلْمُؤْمِنِينَ',
        transliteration: 'l-mu\'minīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'believing',
          ur: 'believing'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  133: {
    ayahNumber: 133,
    text: "وَإِنَّ لُوطًۭا لَّمِنَ ٱلْمُرْسَلِينَ",
    words: [
      {
        id: '37:133:1',
        arabic: 'وَإِنَّ',
        transliteration: 'wa-inna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed',
          ur: 'اور indeed'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:133:2',
        arabic: 'لُوطًۭا',
        transliteration: 'lūṭan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Lut',
          ur: 'Lut'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:133:3',
        arabic: 'لَّمِنَ',
        transliteration: 'lamina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(was) of',
          ur: '(was) کا'
        },
        grammarRole: 'mudaf-ilayh',
      },
      {
        id: '37:133:4',
        arabic: 'ٱلْمُرْسَلِينَ',
        transliteration: 'l-mur\'salīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Messengers',
          ur: 'the رسول'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
      }
    ]
  },

  134: {
    ayahNumber: 134,
    text: "إِذْ نَجَّيْنَـٰهُ وَأَهْلَهُۥٓ أَجْمَعِينَ",
    words: [
      {
        id: '37:134:1',
        arabic: 'إِذْ',
        transliteration: 'idh',
        pos: ['T'],
        posLabel: 'T',
        root: null,
        meaning: {
          en: 'When',
          ur: 'جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:134:2',
        arabic: 'نَجَّيْنَـٰهُ',
        transliteration: 'najjaynāhu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: null,
        meaning: {
          en: 'We saved him',
          ur: 'ہم saved him'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:134:3',
        arabic: 'وَأَهْلَهُۥٓ',
        transliteration: 'wa-ahlahu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and his family',
          ur: 'اور اس کا family'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:134:4',
        arabic: 'أَجْمَعِينَ',
        transliteration: 'ajmaʿīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'all',
          ur: 'all'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  135: {
    ayahNumber: 135,
    text: "إِلَّا عَجُوزًۭا فِى ٱلْغَـٰبِرِينَ",
    words: [
      {
        id: '37:135:1',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:135:2',
        arabic: 'عَجُوزًۭا',
        transliteration: 'ʿajūzan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'an old woman',
          ur: 'an old woman'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:135:3',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: '(was) among',
          ur: '(was) among'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:135:4',
        arabic: 'ٱلْغَـٰبِرِينَ',
        transliteration: 'l-ghābirīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'those who remained behind',
          ur: 'those جو remained behind'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  136: {
    ayahNumber: 136,
    text: "ثُمَّ دَمَّرْنَا ٱلْـَٔاخَرِينَ",
    words: [
      {
        id: '37:136:1',
        arabic: 'ثُمَّ',
        transliteration: 'thumma',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Then',
          ur: 'پھر'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:136:2',
        arabic: 'دَمَّرْنَا',
        transliteration: 'dammarnā',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: null,
        meaning: {
          en: 'We destroyed',
          ur: 'ہم destroyed'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:136:3',
        arabic: 'ٱلْـَٔاخَرِينَ',
        transliteration: 'l-ākharīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the others',
          ur: 'the others'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  137: {
    ayahNumber: 137,
    text: "وَإِنَّكُمْ لَتَمُرُّونَ عَلَيْهِم مُّصْبِحِينَ",
    words: [
      {
        id: '37:137:1',
        arabic: 'وَإِنَّكُمْ',
        transliteration: 'wa-innakum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed, you',
          ur: 'اور indeed, تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:137:2',
        arabic: 'لَتَمُرُّونَ',
        transliteration: 'latamurrūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely pass',
          ur: 'surely pass'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:137:3',
        arabic: 'عَلَيْهِم',
        transliteration: 'ʿalayhim',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'by them',
          ur: 'by انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:137:4',
        arabic: 'مُّصْبِحِينَ',
        transliteration: 'muṣ\'biḥīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(in the) morning',
          ur: '(in the) morning'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  138: {
    ayahNumber: 138,
    text: "وَبِٱلَّيْلِ ۗ أَفَلَا تَعْقِلُونَ",
    words: [
      {
        id: '37:138:1',
        arabic: 'وَبِٱلَّيْلِ ۗ',
        transliteration: 'wabi-al-layli',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And at night',
          ur: 'اور at night'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:138:2',
        arabic: 'أَفَلَا',
        transliteration: 'afalā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Then will not',
          ur: 'پھر will نہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:138:3',
        arabic: 'تَعْقِلُونَ',
        transliteration: 'taʿqilūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you use reason',
          ur: 'تم use reason'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  139: {
    ayahNumber: 139,
    text: "وَإِنَّ يُونُسَ لَمِنَ ٱلْمُرْسَلِينَ",
    words: [
      {
        id: '37:139:1',
        arabic: 'وَإِنَّ',
        transliteration: 'wa-inna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed',
          ur: 'اور indeed'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:139:2',
        arabic: 'يُونُسَ',
        transliteration: 'yūnusa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Yunus',
          ur: 'Yunus'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:139:3',
        arabic: 'لَمِنَ',
        transliteration: 'lamina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(was) surely of',
          ur: '(was) surely کا'
        },
        grammarRole: 'mudaf-ilayh',
      },
      {
        id: '37:139:4',
        arabic: 'ٱلْمُرْسَلِينَ',
        transliteration: 'l-mur\'salīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Messengers',
          ur: 'the رسول'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'مضاف + مضاف إليه' }
      ],
    },
      }
    ]
  },

  140: {
    ayahNumber: 140,
    text: "إِذْ أَبَقَ إِلَى ٱلْفُلْكِ ٱلْمَشْحُونِ",
    words: [
      {
        id: '37:140:1',
        arabic: 'إِذْ',
        transliteration: 'idh',
        pos: ['T'],
        posLabel: 'T',
        root: null,
        meaning: {
          en: 'When',
          ur: 'جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:140:2',
        arabic: 'أَبَقَ',
        transliteration: 'abaqa',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'he ran away',
          ur: 'وہ ran away'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:140:3',
        arabic: 'إِلَى',
        transliteration: 'ilā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'to',
          ur: 'to'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:140:4',
        arabic: 'ٱلْفُلْكِ',
        transliteration: 'l-ful\'ki',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the ship',
          ur: 'the ship'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:140:5',
        arabic: 'ٱلْمَشْحُونِ',
        transliteration: 'l-mashḥūni',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'laden',
          ur: 'laden'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  141: {
    ayahNumber: 141,
    text: "فَسَاهَمَ فَكَانَ مِنَ ٱلْمُدْحَضِينَ",
    words: [
      {
        id: '37:141:1',
        arabic: 'فَسَاهَمَ',
        transliteration: 'fasāhama',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then he drew lots',
          ur: 'پھر وہ drew lots'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:141:2',
        arabic: 'فَكَانَ',
        transliteration: 'fakāna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'ك و ن',
        meaning: {
          en: 'and was',
          ur: 'اور تھا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:141:3',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:141:4',
        arabic: 'ٱلْمُدْحَضِينَ',
        transliteration: 'l-mud\'ḥaḍīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the losers',
          ur: 'the losers'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  142: {
    ayahNumber: 142,
    text: "فَٱلْتَقَمَهُ ٱلْحُوتُ وَهُوَ مُلِيمٌۭ",
    words: [
      {
        id: '37:142:1',
        arabic: 'فَٱلْتَقَمَهُ',
        transliteration: 'fal-taqamahu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then swallowed him',
          ur: 'پھر swallowed him'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:142:2',
        arabic: 'ٱلْحُوتُ',
        transliteration: 'l-ḥūtu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the fish',
          ur: 'the fish'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:142:3',
        arabic: 'وَهُوَ',
        transliteration: 'wahuwa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'while he',
          ur: 'while وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:142:4',
        arabic: 'مُلِيمٌۭ',
        transliteration: 'mulīmun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: '(was) blameworthy',
          ur: '(was) blameworthy'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  143: {
    ayahNumber: 143,
    text: "فَلَوْلَآ أَنَّهُۥ كَانَ مِنَ ٱلْمُسَبِّحِينَ",
    words: [
      {
        id: '37:143:1',
        arabic: 'فَلَوْلَآ',
        transliteration: 'falawlā',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And if not',
          ur: 'اور اگر نہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:143:2',
        arabic: 'أَنَّهُۥ',
        transliteration: 'annahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'that he',
          ur: 'وہ وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:143:3',
        arabic: 'كَانَ',
        transliteration: 'kāna',
        pos: ['N'],
        posLabel: 'N',
        root: 'ك و ن',
        meaning: {
          en: 'was',
          ur: 'تھا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:143:4',
        arabic: 'مِنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:143:5',
        arabic: 'ٱلْمُسَبِّحِينَ',
        transliteration: 'l-musabiḥīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'those who glorify',
          ur: 'those جو glorify'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  144: {
    ayahNumber: 144,
    text: "لَلَبِثَ فِى بَطْنِهِۦٓ إِلَىٰ يَوْمِ يُبْعَثُونَ",
    words: [
      {
        id: '37:144:1',
        arabic: 'لَلَبِثَ',
        transliteration: 'lalabitha',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Certainly, he (would have) remained',
          ur: 'Certainly, وہ (would have) remained'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:144:2',
        arabic: 'فِى',
        transliteration: 'fī',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'in',
          ur: 'میں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:144:3',
        arabic: 'بَطْنِهِۦٓ',
        transliteration: 'baṭnihi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'its belly',
          ur: 'its belly'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:144:4',
        arabic: 'إِلَىٰ',
        transliteration: 'ilā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'until',
          ur: 'until'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:144:5',
        arabic: 'يَوْمِ',
        transliteration: 'yawmi',
        pos: ['T'],
        posLabel: 'T',
        root: 'ي و م',
        meaning: {
          en: 'the Day',
          ur: 'the دن'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:144:6',
        arabic: 'يُبْعَثُونَ',
        transliteration: 'yub\'ʿathūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ب ع ث',
        meaning: {
          en: 'they are resurrected',
          ur: 'وہ ہیں resurrected'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  145: {
    ayahNumber: 145,
    text: "۞ فَنَبَذْنَـٰهُ بِٱلْعَرَآءِ وَهُوَ سَقِيمٌۭ",
    words: [
      {
        id: '37:145:1',
        arabic: '۞ فَنَبَذْنَـٰهُ',
        transliteration: 'fanabadhnāhu',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: null,
        meaning: {
          en: 'But We cast him',
          ur: 'مگر ہم cast him'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:145:2',
        arabic: 'بِٱلْعَرَآءِ',
        transliteration: 'bil-ʿarāi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'onto the open shore',
          ur: 'onto the open shore'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:145:3',
        arabic: 'وَهُوَ',
        transliteration: 'wahuwa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'while he',
          ur: 'while وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:145:4',
        arabic: 'سَقِيمٌۭ',
        transliteration: 'saqīmun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(was) ill',
          ur: '(was) ill'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  146: {
    ayahNumber: 146,
    text: "وَأَنۢبَتْنَا عَلَيْهِ شَجَرَةًۭ مِّن يَقْطِينٍۢ",
    words: [
      {
        id: '37:146:1',
        arabic: 'وَأَنۢبَتْنَا',
        transliteration: 'wa-anbatnā',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And We caused to grow',
          ur: 'اور ہم caused to grow'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:146:2',
        arabic: 'عَلَيْهِ',
        transliteration: 'ʿalayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'over him',
          ur: 'over him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:146:3',
        arabic: 'شَجَرَةًۭ',
        transliteration: 'shajaratan',
        pos: ['N'],
        posLabel: 'N',
        root: 'ش ج ر',
        meaning: {
          en: 'a plant',
          ur: 'a plant'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:146:4',
        arabic: 'مِّن',
        transliteration: 'min',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:146:5',
        arabic: 'يَقْطِينٍۢ',
        transliteration: 'yaqṭīnin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'gourd',
          ur: 'gourd'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  147: {
    ayahNumber: 147,
    text: "وَأَرْسَلْنَـٰهُ إِلَىٰ مِا۟ئَةِ أَلْفٍ أَوْ يَزِيدُونَ",
    words: [
      {
        id: '37:147:1',
        arabic: 'وَأَرْسَلْنَـٰهُ',
        transliteration: 'wa-arsalnāhu',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: 'ر س ل',
        meaning: {
          en: 'And We sent him',
          ur: 'اور ہم sent him'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:147:2',
        arabic: 'إِلَىٰ',
        transliteration: 'ilā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'to',
          ur: 'to'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:147:3',
        arabic: 'مِا۟ئَةِ',
        transliteration: 'mi-ati',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a hundred',
          ur: 'a hundred'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:147:4',
        arabic: 'أَلْفٍ',
        transliteration: 'alfin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'thousand',
          ur: 'thousand'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:147:5',
        arabic: 'أَوْ',
        transliteration: 'aw',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'or',
          ur: 'یا'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:147:6',
        arabic: 'يَزِيدُونَ',
        transliteration: 'yazīdūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'more',
          ur: 'more'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  148: {
    ayahNumber: 148,
    text: "فَـَٔامَنُوا۟ فَمَتَّعْنَـٰهُمْ إِلَىٰ حِينٍۢ",
    words: [
      {
        id: '37:148:1',
        arabic: 'فَـَٔامَنُوا۟',
        transliteration: 'faāmanū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And they believed',
          ur: 'اور وہ believed'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:148:2',
        arabic: 'فَمَتَّعْنَـٰهُمْ',
        transliteration: 'famattaʿnāhum',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'so We gave them enjoyment',
          ur: 'so ہم gave انہیں enjoyment'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:148:3',
        arabic: 'إِلَىٰ',
        transliteration: 'ilā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'for',
          ur: 'کے لیے'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:148:4',
        arabic: 'حِينٍۢ',
        transliteration: 'ḥīnin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a while',
          ur: 'a while'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  149: {
    ayahNumber: 149,
    text: "فَٱسْتَفْتِهِمْ أَلِرَبِّكَ ٱلْبَنَاتُ وَلَهُمُ ٱلْبَنُونَ",
    words: [
      {
        id: '37:149:1',
        arabic: 'فَٱسْتَفْتِهِمْ',
        transliteration: 'fa-is\'taftihim',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'Then ask them',
          ur: 'پھر ask انہیں'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:149:2',
        arabic: 'أَلِرَبِّكَ',
        transliteration: 'alirabbika',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: null,
        meaning: {
          en: 'Does your Lord',
          ur: 'Does تمہارا رب'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:149:3',
        arabic: 'ٱلْبَنَاتُ',
        transliteration: 'l-banātu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(have) daughters',
          ur: '(have) daughters'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:149:4',
        arabic: 'وَلَهُمُ',
        transliteration: 'walahumu',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'while for them',
          ur: 'while کے لیے انہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:149:5',
        arabic: 'ٱلْبَنُونَ',
        transliteration: 'l-banūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(are) sons',
          ur: '(are) sons'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  150: {
    ayahNumber: 150,
    text: "أَمْ خَلَقْنَا ٱلْمَلَـٰٓئِكَةَ إِنَـٰثًۭا وَهُمْ شَـٰهِدُونَ",
    words: [
      {
        id: '37:150:1',
        arabic: 'أَمْ',
        transliteration: 'am',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Or',
          ur: 'یا'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:150:2',
        arabic: 'خَلَقْنَا',
        transliteration: 'khalaqnā',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: 'خ ل ق',
        meaning: {
          en: 'did We create',
          ur: 'did ہم create'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:150:3',
        arabic: 'ٱلْمَلَـٰٓئِكَةَ',
        transliteration: 'l-malāikata',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Angels',
          ur: 'the Angels'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:150:4',
        arabic: 'إِنَـٰثًۭا',
        transliteration: 'ināthan',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'females',
          ur: 'females'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:150:5',
        arabic: 'وَهُمْ',
        transliteration: 'wahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'while they',
          ur: 'while وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:150:6',
        arabic: 'شَـٰهِدُونَ',
        transliteration: 'shāhidūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(were) witnesses',
          ur: '(were) witnesses'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  151: {
    ayahNumber: 151,
    text: "أَلَآ إِنَّهُم مِّنْ إِفْكِهِمْ لَيَقُولُونَ",
    words: [
      {
        id: '37:151:1',
        arabic: 'أَلَآ',
        transliteration: 'alā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'No doubt',
          ur: 'نہیں doubt'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:151:2',
        arabic: 'إِنَّهُم',
        transliteration: 'innahum',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'indeed, they',
          ur: 'indeed, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:151:3',
        arabic: 'مِّنْ',
        transliteration: 'min',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'of',
          ur: 'کا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:151:4',
        arabic: 'إِفْكِهِمْ',
        transliteration: 'if\'kihim',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'their falsehood',
          ur: 'ان کا falsehood'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:151:5',
        arabic: 'لَيَقُولُونَ',
        transliteration: 'layaqūlūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '[they] say',
          ur: '[they] کہو'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  152: {
    ayahNumber: 152,
    text: "وَلَدَ ٱللَّهُ وَإِنَّهُمْ لَكَـٰذِبُونَ",
    words: [
      {
        id: '37:152:1',
        arabic: 'وَلَدَ',
        transliteration: 'walada',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: 'و ل د',
        meaning: {
          en: 'Allah has begotten',
          ur: 'اللہ has begotten'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:152:2',
        arabic: 'ٱللَّهُ',
        transliteration: 'l-lahu',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Allah has begotten',
          ur: 'اللہ has begotten'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:152:3',
        arabic: 'وَإِنَّهُمْ',
        transliteration: 'wa-innahum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and indeed, they',
          ur: 'اور indeed, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:152:4',
        arabic: 'لَكَـٰذِبُونَ',
        transliteration: 'lakādhibūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely (are) liars',
          ur: 'surely (are) liars'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  153: {
    ayahNumber: 153,
    text: "أَصْطَفَى ٱلْبَنَاتِ عَلَى ٱلْبَنِينَ",
    words: [
      {
        id: '37:153:1',
        arabic: 'أَصْطَفَى',
        transliteration: 'aṣṭafā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Has He chosen',
          ur: 'Has وہ chosen'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:153:2',
        arabic: 'ٱلْبَنَاتِ',
        transliteration: 'l-banāti',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '[the] daughters',
          ur: '[the] daughters'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:153:3',
        arabic: 'عَلَى',
        transliteration: 'ʿalā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'over',
          ur: 'over'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:153:4',
        arabic: 'ٱلْبَنِينَ',
        transliteration: 'l-banīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'sons',
          ur: 'sons'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  154: {
    ayahNumber: 154,
    text: "مَا لَكُمْ كَيْفَ تَحْكُمُونَ",
    words: [
      {
        id: '37:154:1',
        arabic: 'مَا',
        transliteration: 'mā',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'What is with you',
          ur: 'کیا ہے ساتھ تم'
        },
        grammarRole: 'ism-mawsul',
      },
      {
        id: '37:154:2',
        arabic: 'لَكُمْ',
        transliteration: 'lakum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'What is with you',
          ur: 'کیا ہے ساتھ تم'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:154:3',
        arabic: 'كَيْفَ',
        transliteration: 'kayfa',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'How',
          ur: 'How'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:154:4',
        arabic: 'تَحْكُمُونَ',
        transliteration: 'taḥkumūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you judge',
          ur: 'تم judge'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  155: {
    ayahNumber: 155,
    text: "أَفَلَا تَذَكَّرُونَ",
    words: [
      {
        id: '37:155:1',
        arabic: 'أَفَلَا',
        transliteration: 'afalā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Then will not',
          ur: 'پھر will نہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:155:2',
        arabic: 'تَذَكَّرُونَ',
        transliteration: 'tadhakkarūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you pay heed',
          ur: 'تم pay heed'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  156: {
    ayahNumber: 156,
    text: "أَمْ لَكُمْ سُلْطَـٰنٌۭ مُّبِينٌۭ",
    words: [
      {
        id: '37:156:1',
        arabic: 'أَمْ',
        transliteration: 'am',
        pos: ['CONJ'],
        posLabel: 'CONJ',
        root: null,
        meaning: {
          en: 'Or',
          ur: 'یا'
        },
        grammarRole: 'harf-atf',
      },
      {
        id: '37:156:2',
        arabic: 'لَكُمْ',
        transliteration: 'lakum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: '(is) for you',
          ur: '(is) کے لیے تم'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:156:3',
        arabic: 'سُلْطَـٰنٌۭ',
        transliteration: 'sul\'ṭānun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'an authority',
          ur: 'an authority'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:156:4',
        arabic: 'مُّبِينٌۭ',
        transliteration: 'mubīnun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'clear',
          ur: 'واضح'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  157: {
    ayahNumber: 157,
    text: "فَأْتُوا۟ بِكِتَـٰبِكُمْ إِن كُنتُمْ صَـٰدِقِينَ",
    words: [
      {
        id: '37:157:1',
        arabic: 'فَأْتُوا۟',
        transliteration: 'fatū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'Then bring',
          ur: 'پھر bring'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:157:2',
        arabic: 'بِكِتَـٰبِكُمْ',
        transliteration: 'bikitābikum',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'your book',
          ur: 'تمہارا کتاب'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:157:3',
        arabic: 'إِن',
        transliteration: 'in',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'if',
          ur: 'اگر'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:157:4',
        arabic: 'كُنتُمْ',
        transliteration: 'kuntum',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'you are',
          ur: 'تم ہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:157:5',
        arabic: 'صَـٰدِقِينَ',
        transliteration: 'ṣādiqīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'truthful',
          ur: 'truthful'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  158: {
    ayahNumber: 158,
    text: "وَجَعَلُوا۟ بَيْنَهُۥ وَبَيْنَ ٱلْجِنَّةِ نَسَبًۭا ۚ وَلَقَدْ عَلِمَتِ ٱلْجِنَّةُ إِنَّهُمْ لَمُحْضَرُونَ",
    words: [
      {
        id: '37:158:1',
        arabic: 'وَجَعَلُوا۟',
        transliteration: 'wajaʿalū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And they have made',
          ur: 'اور وہ have made'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:158:2',
        arabic: 'بَيْنَهُۥ',
        transliteration: 'baynahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'between Him',
          ur: 'between Him'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:158:3',
        arabic: 'وَبَيْنَ',
        transliteration: 'wabayna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'and between',
          ur: 'اور between'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:158:4',
        arabic: 'ٱلْجِنَّةِ',
        transliteration: 'l-jinati',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the jinn',
          ur: 'the jinn'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:158:5',
        arabic: 'نَسَبًۭا ۚ',
        transliteration: 'nasaban',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a relationship',
          ur: 'a relationship'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:158:6',
        arabic: 'وَلَقَدْ',
        transliteration: 'walaqad',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'but certainly',
          ur: 'مگر certainly'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:158:7',
        arabic: 'عَلِمَتِ',
        transliteration: 'ʿalimati',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'know',
          ur: 'know'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:158:8',
        arabic: 'ٱلْجِنَّةُ',
        transliteration: 'l-jinatu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the jinn',
          ur: 'the jinn'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:158:9',
        arabic: 'إِنَّهُمْ',
        transliteration: 'innahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'that they',
          ur: 'وہ وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:158:10',
        arabic: 'لَمُحْضَرُونَ',
        transliteration: 'lamuḥ\'ḍarūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will) surely be brought',
          ur: '(will) surely be brought'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' },
        { from: 6, to: 7, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  159: {
    ayahNumber: 159,
    text: "سُبْحَـٰنَ ٱللَّهِ عَمَّا يَصِفُونَ",
    words: [
      {
        id: '37:159:1',
        arabic: 'سُبْحَـٰنَ',
        transliteration: 'sub\'ḥāna',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ب ح',
        meaning: {
          en: 'Glory be',
          ur: 'Glory be'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:159:2',
        arabic: 'ٱللَّهِ',
        transliteration: 'l-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(to) Allah',
          ur: '(to) اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:159:3',
        arabic: 'عَمَّا',
        transliteration: 'ʿammā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'above what',
          ur: 'above کیا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:159:4',
        arabic: 'يَصِفُونَ',
        transliteration: 'yaṣifūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'they attribute',
          ur: 'وہ attribute'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  160: {
    ayahNumber: 160,
    text: "إِلَّا عِبَادَ ٱللَّهِ ٱلْمُخْلَصِينَ",
    words: [
      {
        id: '37:160:1',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:160:2',
        arabic: 'عِبَادَ',
        transliteration: 'ʿibāda',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ب د',
        meaning: {
          en: '(the) slaves',
          ur: '(the) slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:160:3',
        arabic: 'ٱللَّهِ',
        transliteration: 'l-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Allah',
          ur: '(of) اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:160:4',
        arabic: 'ٱلْمُخْلَصِينَ',
        transliteration: 'l-mukh\'laṣīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the chosen',
          ur: 'the chosen'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  161: {
    ayahNumber: 161,
    text: "فَإِنَّكُمْ وَمَا تَعْبُدُونَ",
    words: [
      {
        id: '37:161:1',
        arabic: 'فَإِنَّكُمْ',
        transliteration: 'fa-innakum',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'So indeed, you',
          ur: 'So indeed, تم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:161:2',
        arabic: 'وَمَا',
        transliteration: 'wamā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'and what',
          ur: 'اور کیا'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:161:3',
        arabic: 'تَعْبُدُونَ',
        transliteration: 'taʿbudūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ب د',
        meaning: {
          en: 'you worship',
          ur: 'تم worship'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'نفی + فعل' }
      ],
    },
      }
    ]
  },

  162: {
    ayahNumber: 162,
    text: "مَآ أَنتُمْ عَلَيْهِ بِفَـٰتِنِينَ",
    words: [
      {
        id: '37:162:1',
        arabic: 'مَآ',
        transliteration: 'mā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Not',
          ur: 'نہیں'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:162:2',
        arabic: 'أَنتُمْ',
        transliteration: 'antum',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'you',
          ur: 'تم'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:162:3',
        arabic: 'عَلَيْهِ',
        transliteration: 'ʿalayhi',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'from Him',
          ur: 'سے Him'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:162:4',
        arabic: 'بِفَـٰتِنِينَ',
        transliteration: 'bifātinīna',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'can tempt away (anyone)',
          ur: 'can tempt away (anyone)'
        },
        grammarRole: 'jarr-majrur',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  163: {
    ayahNumber: 163,
    text: "إِلَّا مَنْ هُوَ صَالِ ٱلْجَحِيمِ",
    words: [
      {
        id: '37:163:1',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'Except',
          ur: 'سوائے'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:163:2',
        arabic: 'مَنْ',
        transliteration: 'man',
        pos: ['REL'],
        posLabel: 'REL',
        root: null,
        meaning: {
          en: 'who',
          ur: 'جو'
        },
        grammarRole: 'ism-mawsul',
      },
      {
        id: '37:163:3',
        arabic: 'هُوَ',
        transliteration: 'huwa',
        pos: ['PRON'],
        posLabel: 'PRON',
        root: null,
        meaning: {
          en: 'he',
          ur: 'وہ'
        },
        grammarRole: 'damir',
      },
      {
        id: '37:163:4',
        arabic: 'صَالِ',
        transliteration: 'ṣāli',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(is) to burn',
          ur: '(is) to burn'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:163:5',
        arabic: 'ٱلْجَحِيمِ',
        transliteration: 'l-jaḥīmi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(in) the Hellfire',
          ur: '(in) the Hellfire'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  164: {
    ayahNumber: 164,
    text: "وَمَا مِنَّآ إِلَّا لَهُۥ مَقَامٌۭ مَّعْلُومٌۭ",
    words: [
      {
        id: '37:164:1',
        arabic: 'وَمَا',
        transliteration: 'wamā',
        pos: ['CONJ', 'NEG'],
        posLabel: 'CONJ+NEG',
        root: null,
        meaning: {
          en: 'And not',
          ur: 'اور نہیں'
        },
        grammarRole: 'nafi',
      },
      {
        id: '37:164:2',
        arabic: 'مِنَّآ',
        transliteration: 'minnā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'among us',
          ur: 'among us'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:164:3',
        arabic: 'إِلَّا',
        transliteration: 'illā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'except',
          ur: 'سوائے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:164:4',
        arabic: 'لَهُۥ',
        transliteration: 'lahu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'for him',
          ur: 'کے لیے him'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:164:5',
        arabic: 'مَقَامٌۭ',
        transliteration: 'maqāmun',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(is) a position',
          ur: '(is) a position'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:164:6',
        arabic: 'مَّعْلُومٌۭ',
        transliteration: 'maʿlūmun',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'known',
          ur: 'known'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  165: {
    ayahNumber: 165,
    text: "وَإِنَّا لَنَحْنُ ٱلصَّآفُّونَ",
    words: [
      {
        id: '37:165:1',
        arabic: 'وَإِنَّا',
        transliteration: 'wa-innā',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed, we',
          ur: 'اور indeed, ہم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:165:2',
        arabic: 'لَنَحْنُ',
        transliteration: 'lanaḥnu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely, [we]',
          ur: 'surely, [we]'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:165:3',
        arabic: 'ٱلصَّآفُّونَ',
        transliteration: 'l-ṣāfūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'stand in rows',
          ur: 'stand میں rows'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  166: {
    ayahNumber: 166,
    text: "وَإِنَّا لَنَحْنُ ٱلْمُسَبِّحُونَ",
    words: [
      {
        id: '37:166:1',
        arabic: 'وَإِنَّا',
        transliteration: 'wa-innā',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed, we',
          ur: 'اور indeed, ہم'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:166:2',
        arabic: 'لَنَحْنُ',
        transliteration: 'lanaḥnu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely, [we]',
          ur: 'surely, [we]'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:166:3',
        arabic: 'ٱلْمُسَبِّحُونَ',
        transliteration: 'l-musabiḥūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'glorify (Allah)',
          ur: 'glorify (Allah)'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  167: {
    ayahNumber: 167,
    text: "وَإِن كَانُوا۟ لَيَقُولُونَ",
    words: [
      {
        id: '37:167:1',
        arabic: 'وَإِن',
        transliteration: 'wa-in',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed',
          ur: 'اور indeed'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:167:2',
        arabic: 'كَانُوا۟',
        transliteration: 'kānū',
        pos: ['V'],
        posLabel: 'V',
        root: 'ك و ن',
        meaning: {
          en: 'they used to',
          ur: 'وہ used to'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:167:3',
        arabic: 'لَيَقُولُونَ',
        transliteration: 'layaqūlūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'say',
          ur: 'کہو'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  168: {
    ayahNumber: 168,
    text: "لَوْ أَنَّ عِندَنَا ذِكْرًۭا مِّنَ ٱلْأَوَّلِينَ",
    words: [
      {
        id: '37:168:1',
        arabic: 'لَوْ',
        transliteration: 'law',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'If',
          ur: 'اگر'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:168:2',
        arabic: 'أَنَّ',
        transliteration: 'anna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'that',
          ur: 'وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:168:3',
        arabic: 'عِندَنَا',
        transliteration: 'ʿindanā',
        pos: ['V', 'PRON'],
        posLabel: 'V+PRON',
        root: null,
        meaning: {
          en: 'we had',
          ur: 'ہم had'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:168:4',
        arabic: 'ذِكْرًۭا',
        transliteration: 'dhik\'ran',
        pos: ['N'],
        posLabel: 'N',
        root: 'ذ ك ر',
        meaning: {
          en: 'a reminder',
          ur: 'a reminder'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:168:5',
        arabic: 'مِّنَ',
        transliteration: 'mina',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'from',
          ur: 'سے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:168:6',
        arabic: 'ٱلْأَوَّلِينَ',
        transliteration: 'l-awalīna',
        pos: ['ADJ'],
        posLabel: 'ADJ',
        root: null,
        meaning: {
          en: 'the former (people)',
          ur: 'the former (people)'
        },
        grammarRole: 'sifa',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'فعل + مفعول به' },
        { from: 5, to: 6, label: 'موصوف + صفت' }
      ],
    },
      }
    ]
  },

  169: {
    ayahNumber: 169,
    text: "لَكُنَّا عِبَادَ ٱللَّهِ ٱلْمُخْلَصِينَ",
    words: [
      {
        id: '37:169:1',
        arabic: 'لَكُنَّا',
        transliteration: 'lakunnā',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'Certainly, we (would) have been',
          ur: 'Certainly, ہم (would) have been'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:169:2',
        arabic: 'عِبَادَ',
        transliteration: 'ʿibāda',
        pos: ['N'],
        posLabel: 'N',
        root: 'ع ب د',
        meaning: {
          en: 'slaves',
          ur: 'slaves'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:169:3',
        arabic: 'ٱللَّهِ',
        transliteration: 'l-lahi',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Allah',
          ur: '(of) اللہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:169:4',
        arabic: 'ٱلْمُخْلَصِينَ',
        transliteration: 'l-mukh\'laṣīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the chosen',
          ur: 'the chosen'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  170: {
    ayahNumber: 170,
    text: "فَكَفَرُوا۟ بِهِۦ ۖ فَسَوْفَ يَعْلَمُونَ",
    words: [
      {
        id: '37:170:1',
        arabic: 'فَكَفَرُوا۟',
        transliteration: 'fakafarū',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'But they disbelieved',
          ur: 'مگر وہ disbelieved'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:170:2',
        arabic: 'بِهِۦ ۖ',
        transliteration: 'bihi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'in it',
          ur: 'میں it'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:170:3',
        arabic: 'فَسَوْفَ',
        transliteration: 'fasawfa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'so soon',
          ur: 'so soon'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:170:4',
        arabic: 'يَعْلَمُونَ',
        transliteration: 'yaʿlamūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ع ل م',
        meaning: {
          en: 'they will know',
          ur: 'وہ will know'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  171: {
    ayahNumber: 171,
    text: "وَلَقَدْ سَبَقَتْ كَلِمَتُنَا لِعِبَادِنَا ٱلْمُرْسَلِينَ",
    words: [
      {
        id: '37:171:1',
        arabic: 'وَلَقَدْ',
        transliteration: 'walaqad',
        pos: ['CONJ', 'P'],
        posLabel: 'CONJ+P',
        root: null,
        meaning: {
          en: 'And verily',
          ur: 'اور verily'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:171:2',
        arabic: 'سَبَقَتْ',
        transliteration: 'sabaqat',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'has preceded',
          ur: 'has preceded'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:171:3',
        arabic: 'كَلِمَتُنَا',
        transliteration: 'kalimatunā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Our Word',
          ur: 'ہمارا Word'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:171:4',
        arabic: 'لِعِبَادِنَا',
        transliteration: 'liʿibādinā',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'for Our slaves',
          ur: 'کے لیے ہمارا slaves'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:171:5',
        arabic: 'ٱلْمُرْسَلِينَ',
        transliteration: 'l-mur\'salīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Messengers',
          ur: 'the رسول'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'جار + مجرور' },
        { from: 4, to: 5, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  172: {
    ayahNumber: 172,
    text: "إِنَّهُمْ لَهُمُ ٱلْمَنصُورُونَ",
    words: [
      {
        id: '37:172:1',
        arabic: 'إِنَّهُمْ',
        transliteration: 'innahum',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Indeed they',
          ur: 'بیشک وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:172:2',
        arabic: 'لَهُمُ',
        transliteration: 'lahumu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely they',
          ur: 'surely وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:172:3',
        arabic: 'ٱلْمَنصُورُونَ',
        transliteration: 'l-manṣūrūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(would be) the victorious',
          ur: '(would be) the victorious'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  173: {
    ayahNumber: 173,
    text: "وَإِنَّ جُندَنَا لَهُمُ ٱلْغَـٰلِبُونَ",
    words: [
      {
        id: '37:173:1',
        arabic: 'وَإِنَّ',
        transliteration: 'wa-inna',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And indeed',
          ur: 'اور indeed'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:173:2',
        arabic: 'جُندَنَا',
        transliteration: 'jundanā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Our host',
          ur: 'ہمارا host'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:173:3',
        arabic: 'لَهُمُ',
        transliteration: 'lahumu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'surely, they',
          ur: 'surely, وہ'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:173:4',
        arabic: 'ٱلْغَـٰلِبُونَ',
        transliteration: 'l-ghālibūna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(will be) those who overcome',
          ur: '(will be) those جو overcome'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  174: {
    ayahNumber: 174,
    text: "فَتَوَلَّ عَنْهُمْ حَتَّىٰ حِينٍۢ",
    words: [
      {
        id: '37:174:1',
        arabic: 'فَتَوَلَّ',
        transliteration: 'fatawalla',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'So turn away',
          ur: 'So turn away'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:174:2',
        arabic: 'عَنْهُمْ',
        transliteration: 'ʿanhum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'from them',
          ur: 'سے انہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:174:3',
        arabic: 'حَتَّىٰ',
        transliteration: 'ḥattā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'until',
          ur: 'until'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:174:4',
        arabic: 'حِينٍۢ',
        transliteration: 'ḥīnin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a time',
          ur: 'a time'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  175: {
    ayahNumber: 175,
    text: "وَأَبْصِرْهُمْ فَسَوْفَ يُبْصِرُونَ",
    words: [
      {
        id: '37:175:1',
        arabic: 'وَأَبْصِرْهُمْ',
        transliteration: 'wa-abṣir\'hum',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And see them',
          ur: 'اور see انہیں'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:175:2',
        arabic: 'فَسَوْفَ',
        transliteration: 'fasawfa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'so soon',
          ur: 'so soon'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:175:3',
        arabic: 'يُبْصِرُونَ',
        transliteration: 'yub\'ṣirūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ب ص ر',
        meaning: {
          en: 'they will see',
          ur: 'وہ will see'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  176: {
    ayahNumber: 176,
    text: "أَفَبِعَذَابِنَا يَسْتَعْجِلُونَ",
    words: [
      {
        id: '37:176:1',
        arabic: 'أَفَبِعَذَابِنَا',
        transliteration: 'afabiʿadhābinā',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: null,
        meaning: {
          en: 'Then is (it) for Our punishment',
          ur: 'پھر ہے (it) کے لیے ہمارا عذاب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:176:2',
        arabic: 'يَسْتَعْجِلُونَ',
        transliteration: 'yastaʿjilūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'they hasten',
          ur: 'وہ hasten'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  177: {
    ayahNumber: 177,
    text: "فَإِذَا نَزَلَ بِسَاحَتِهِمْ فَسَآءَ صَبَاحُ ٱلْمُنذَرِينَ",
    words: [
      {
        id: '37:177:1',
        arabic: 'فَإِذَا',
        transliteration: 'fa-idhā',
        pos: ['CONJ', 'T'],
        posLabel: 'CONJ+T',
        root: null,
        meaning: {
          en: 'But when',
          ur: 'مگر جب'
        },
        grammarRole: 'zarf',
      },
      {
        id: '37:177:2',
        arabic: 'نَزَلَ',
        transliteration: 'nazala',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'it descends',
          ur: 'it descends'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:177:3',
        arabic: 'بِسَاحَتِهِمْ',
        transliteration: 'bisāḥatihim',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: 'in their territory',
          ur: 'میں ان کا territory'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:177:4',
        arabic: 'فَسَآءَ',
        transliteration: 'fasāa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'then evil (will be)',
          ur: 'پھر برا (will be)'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:177:5',
        arabic: 'صَبَاحُ',
        transliteration: 'ṣabāḥu',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(the) morning',
          ur: '(the) morning'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:177:6',
        arabic: 'ٱلْمُنذَرِينَ',
        transliteration: 'l-mundharīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(for) those who were warned',
          ur: '(for) those جو were warned'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 3, to: 4, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  178: {
    ayahNumber: 178,
    text: "وَتَوَلَّ عَنْهُمْ حَتَّىٰ حِينٍۢ",
    words: [
      {
        id: '37:178:1',
        arabic: 'وَتَوَلَّ',
        transliteration: 'watawalla',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'So turn away',
          ur: 'So turn away'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:178:2',
        arabic: 'عَنْهُمْ',
        transliteration: 'ʿanhum',
        pos: ['P', 'PRON'],
        posLabel: 'P+PRON',
        root: null,
        meaning: {
          en: 'from them',
          ur: 'سے انہیں'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:178:3',
        arabic: 'حَتَّىٰ',
        transliteration: 'ḥattā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'for',
          ur: 'کے لیے'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:178:4',
        arabic: 'حِينٍۢ',
        transliteration: 'ḥīnin',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'a time',
          ur: 'a time'
        },
        grammarRole: 'ism',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  179: {
    ayahNumber: 179,
    text: "وَأَبْصِرْ فَسَوْفَ يُبْصِرُونَ",
    words: [
      {
        id: '37:179:1',
        arabic: 'وَأَبْصِرْ',
        transliteration: 'wa-abṣir',
        pos: ['CONJ', 'V'],
        posLabel: 'CONJ+V',
        root: null,
        meaning: {
          en: 'And see',
          ur: 'اور see'
        },
        grammarRole: 'verb',
      },
      {
        id: '37:179:2',
        arabic: 'فَسَوْفَ',
        transliteration: 'fasawfa',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'so soon',
          ur: 'so soon'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:179:3',
        arabic: 'يُبْصِرُونَ',
        transliteration: 'yub\'ṣirūna',
        pos: ['V'],
        posLabel: 'V',
        root: 'ب ص ر',
        meaning: {
          en: 'they will see',
          ur: 'وہ will see'
        },
        grammarRole: 'verb',
    structure: {
      relationships: [
        { from: 1, to: 2, label: 'فعل + مفعول به' }
      ],
    },
      }
    ]
  },

  180: {
    ayahNumber: 180,
    text: "سُبْحَـٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ",
    words: [
      {
        id: '37:180:1',
        arabic: 'سُبْحَـٰنَ',
        transliteration: 'sub\'ḥāna',
        pos: ['N'],
        posLabel: 'N',
        root: 'س ب ح',
        meaning: {
          en: 'Glory',
          ur: 'Glory'
        },
        grammarRole: 'mubtada',
      },
      {
        id: '37:180:2',
        arabic: 'رَبِّكَ',
        transliteration: 'rabbika',
        pos: ['N', 'PRON'],
        posLabel: 'N+PRON',
        root: 'ر ب ب',
        meaning: {
          en: '(be to) your Lord',
          ur: '(be to) تمہارا رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:180:3',
        arabic: 'رَبِّ',
        transliteration: 'rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: '(the) Lord',
          ur: '(the) رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:180:4',
        arabic: 'ٱلْعِزَّةِ',
        transliteration: 'l-ʿizati',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) Honor',
          ur: '(of) Honor'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:180:5',
        arabic: 'عَمَّا',
        transliteration: 'ʿammā',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'above what',
          ur: 'above کیا'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:180:6',
        arabic: 'يَصِفُونَ',
        transliteration: 'yaṣifūna',
        pos: ['V'],
        posLabel: 'V',
        root: null,
        meaning: {
          en: 'they attribute',
          ur: 'وہ attribute'
        },
        grammarRole: 'verb',
      }
    ],
    structure: {
      relationships: [],
    },
  },

  181: {
    ayahNumber: 181,
    text: "وَسَلَـٰمٌ عَلَى ٱلْمُرْسَلِينَ",
    words: [
      {
        id: '37:181:1',
        arabic: 'وَسَلَـٰمٌ',
        transliteration: 'wasalāmun',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: 'س ل م',
        meaning: {
          en: 'And peace be',
          ur: 'اور سلام be'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:181:2',
        arabic: 'عَلَى',
        transliteration: 'ʿalā',
        pos: ['P'],
        posLabel: 'P',
        root: null,
        meaning: {
          en: 'upon',
          ur: 'پر'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:181:3',
        arabic: 'ٱلْمُرْسَلِينَ',
        transliteration: 'l-mur\'salīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: 'the Messengers',
          ur: 'the رسول'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  },

  182: {
    ayahNumber: 182,
    text: "وَٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    words: [
      {
        id: '37:182:1',
        arabic: 'وَٱلْحَمْدُ',
        transliteration: 'wal-ḥamdu',
        pos: ['CONJ', 'N'],
        posLabel: 'CONJ+N',
        root: null,
        meaning: {
          en: 'And all praise',
          ur: 'اور all praise'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:182:2',
        arabic: 'لِلَّهِ',
        transliteration: 'lillahi',
        pos: ['P', 'N'],
        posLabel: 'P+N',
        root: null,
        meaning: {
          en: '(be) to Allah',
          ur: '(be) to اللہ'
        },
        grammarRole: 'jarr-majrur',
      },
      {
        id: '37:182:3',
        arabic: 'رَبِّ',
        transliteration: 'rabbi',
        pos: ['N'],
        posLabel: 'N',
        root: 'ر ب ب',
        meaning: {
          en: '(the) Lord',
          ur: '(the) رب'
        },
        grammarRole: 'ism',
      },
      {
        id: '37:182:4',
        arabic: 'ٱلْعَـٰلَمِينَ',
        transliteration: 'l-ʿālamīna',
        pos: ['N'],
        posLabel: 'N',
        root: null,
        meaning: {
          en: '(of) the worlds',
          ur: '(of) the worlds'
        },
        grammarRole: 'ism',
    structure: {
      relationships: [
        { from: 2, to: 3, label: 'جار + مجرور' }
      ],
    },
      }
    ]
  }

};

export default TREEBANK_DATA;
