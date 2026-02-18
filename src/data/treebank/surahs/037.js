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
    ]
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
    ]
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
    ]
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
  }
};

export default TREEBANK_DATA;
