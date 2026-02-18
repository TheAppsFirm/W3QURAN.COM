/**
 * Surah Al-Hijr (15) - Ontology of Quranic Concepts
 * The Rocky Tract - 99 Ayahs, Makki
 *
 * Theme: Divine preservation of the Quran, creation narratives, Iblis's arrogance,
 *        and the fate of destroyed nations who rejected their messengers.
 *
 * Named after: Al-Hijr, the rocky tract where the people of Thamud lived
 */

export const ONTOLOGY = {
  surahId: 15,
  surahName: "Al-Hijr",
  surahNameArabic: "الحجر",
  revelationType: "Makki",
  totalAyahs: 99,

  categories: {
    quranPreservation: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Quran's Divine Preservation",
      nameArabic: "حفظ القرآن الإلهي",
      description: "Allah's guarantee to protect the Quran from corruption",
      concepts: [
        {
          term: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ",
          transliteration: "Inna Nahnu Nazzalna adh-Dhikr",
          meaning: "Indeed, it is We who sent down the Reminder",
          explanation: "Triple emphasis (inna + nahnu + nazzalna) establishes Allah as the sole author. The Quran is called 'Dhikr' (Reminder/Remembrance) - it reminds humans of their purpose and covenant.",
          verseRef: "15:9"
        },
        {
          term: "وَإِنَّا لَهُ لَحَافِظُونَ",
          transliteration: "Wa inna lahu la-Haafizoon",
          meaning: "And indeed, We will be its Guardian",
          explanation: "Absolute divine guarantee of preservation. Unlike previous scriptures that were entrusted to humans, Allah Himself guards the Quran. 1400+ years later, not a letter has changed - this is the living miracle.",
          verseRef: "15:9"
        },
        {
          term: "الكِتَاب المُبِين",
          transliteration: "Al-Kitab al-Mubeen",
          meaning: "The Clear Book",
          explanation: "The Quran is described as 'mubeen' - clear, evident, making things manifest. It clarifies truth from falsehood.",
          verseRef: "15:1"
        }
      ]
    },

    creationOfMan: {
      color: '#10B981',
      icon: 'Book',
      name: "Creation of Humanity",
      nameArabic: "خلق الإنسان",
      description: "The miraculous creation of Adam from clay",
      concepts: [
        {
          term: "صَلْصَال مِنْ حَمَإٍ مَسْنُون",
          transliteration: "Salsal min Hama'in Masnoon",
          meaning: "Dried clay from altered black mud",
          explanation: "Salsal = dried clay that makes sound when struck. Hama' = black mud. Masnoon = aged, shaped, formed. The stages of Adam's creation: earth → mud → shaped mud → dried clay. Shows meticulous divine crafting.",
          verseRef: "15:26, 15:28, 15:33"
        },
        {
          term: "نَفَخْتُ فِيهِ مِن رُّوحِي",
          transliteration: "Nafakhtu feehi min Roohi",
          meaning: "I breathed into him of My Spirit",
          explanation: "The divine breath (ruh) transforms clay into a living, honored being. 'Min Roohi' doesn't mean part of Allah, but a spirit that belongs to and is honored by Allah. This makes humans unique in creation.",
          verseRef: "15:29"
        },
        {
          term: "فَقَعُوا لَهُ سَاجِدِينَ",
          transliteration: "Faqa'oo lahu Saajideen",
          meaning: "Fall down in prostration to him",
          explanation: "Command to angels to prostrate to Adam - not worship, but acknowledgment of Adam's honored status. This prostration was a test that exposed Iblis's arrogance.",
          verseRef: "15:29"
        }
      ]
    },

    iblisArrogance: {
      color: '#EC4899',
      icon: 'Globe',
      name: "Iblis's Arrogance and Promise",
      nameArabic: "كبر إبليس ووعده",
      description: "The devil's refusal, reasoning, and vow to mislead humanity",
      concepts: [
        {
          term: "لَمْ يَكُن مِّنَ السَّاجِدِينَ",
          transliteration: "Lam yakun minas-Saajideen",
          meaning: "He was not among those who prostrated",
          explanation: "Iblis alone refused the divine command. His absence from the prostrators exposed his hidden arrogance that had been concealed among the angels.",
          verseRef: "15:31"
        },
        {
          term: "خَلَقْتَنِي مِن نَّارٍ وَخَلَقْتَهُ مِن طِينٍ",
          transliteration: "Khalaqtani min Naar wa khalaqtahu min Teen",
          meaning: "You created me from fire and created him from clay",
          explanation: "Iblis's flawed reasoning - he considered fire superior to clay. He used his own logic against Allah's command. This is the origin of racism and arrogance - judging worth by origin rather than by obedience.",
          verseRef: "15:33"
        },
        {
          term: "لَأُغْوِيَنَّهُمْ أَجْمَعِينَ",
          transliteration: "La-ughwiyannahum ajma'een",
          meaning: "I will surely mislead them all",
          explanation: "Iblis's vengeful promise to mislead ALL humans. The emphatic 'la' + nun of emphasis shows his determination. Yet Allah allows this as a test for humanity.",
          verseRef: "15:39"
        },
        {
          term: "إِلَّا عِبَادَكَ مِنْهُمُ الْمُخْلَصِينَ",
          transliteration: "Illa 'ibaadaka minhumul-Mukhlaseen",
          meaning: "Except Your sincere servants among them",
          explanation: "Even Iblis admits his powerlessness over sincere believers. Ikhlas (sincerity) is the shield against shaytan. He can only mislead those who willingly follow.",
          verseRef: "15:40"
        },
        {
          term: "لَأُزَيِّنَنَّ لَهُمْ فِي الأَرْضِ",
          transliteration: "La-uzayyinanna lahum fil-Ard",
          meaning: "I will surely make attractive to them on earth",
          explanation: "Shaytan's method: beautification of sin. He doesn't force, he decorates evil until it appears desirable. The world (dunya) becomes his tool of deception.",
          verseRef: "15:39"
        }
      ]
    },

    destroyedNations: {
      color: '#8B5CF6',
      icon: 'Heart',
      name: "Destroyed Nations",
      nameArabic: "الأمم المهلكة",
      description: "Stories of nations who rejected their messengers and were destroyed",
      concepts: [
        {
          term: "أَصْحَاب الحِجْر",
          transliteration: "Ashaab al-Hijr",
          meaning: "The People of the Rocky Tract (Thamud)",
          explanation: "Thamud carved homes in mountains, thinking they were secure. They rejected Salih and killed the she-camel. Allah destroyed them with a single blast (sayhah). Their impressive architecture couldn't save them.",
          verseRef: "15:80-84"
        },
        {
          term: "قَوْم لُوط",
          transliteration: "Qawm Lut",
          meaning: "The People of Lot",
          explanation: "Guilty of unprecedented fahishah (homosexuality). Despite angels visiting as guests, the townspeople attempted assault. Cities were overturned and rained with marked stones. Lot's wife was among the destroyed.",
          verseRef: "15:58-77"
        },
        {
          term: "أَصْحَاب الأَيْكَة",
          transliteration: "Ashaab al-Aykah",
          meaning: "The Companions of the Thicket (Shu'ayb's people)",
          explanation: "Dwellers in dense forest, they cheated in measures and weights. They were destroyed for commercial corruption - a warning that economic injustice invites divine punishment.",
          verseRef: "15:78-79"
        },
        {
          term: "المُجْرِمِينَ",
          transliteration: "Al-Mujrimeen",
          meaning: "The Criminals",
          explanation: "Generic term for all who persist in rejecting truth. Their crime (jurm) is choosing disbelief despite clear signs.",
          verseRef: "15:12"
        }
      ]
    },

    angelicRevelation: {
      color: '#14B8A6',
      icon: 'Crown',
      name: "Angels and Revelation",
      nameArabic: "الملائكة والوحي",
      description: "The role of angels in delivering divine messages",
      concepts: [
        {
          term: "مَا نُنَزِّلُ الْمَلَائِكَةَ إِلَّا بِالْحَقِّ",
          transliteration: "Maa nunazzilul-Malaa'ikata illa bil-Haqq",
          meaning: "We do not send down the angels except with truth",
          explanation: "Angels descend only for serious divine purposes - revelation, punishment, or death. The disbelievers mockingly asked for angels; they don't realize that seeing angels usually means destruction.",
          verseRef: "15:8"
        },
        {
          term: "ضَيْف إِبْرَاهِيمَ",
          transliteration: "Dayf Ibrahim",
          meaning: "The Guests of Ibrahim",
          explanation: "Angels in human form visited Ibrahim with good news (Ishaq) and then proceeded to destroy Lot's people. Shows angels' dual role: mercy and punishment.",
          verseRef: "15:51-56"
        },
        {
          term: "لَا تَوْجَل",
          transliteration: "La Tawjal",
          meaning: "Do not fear",
          explanation: "The angels' reassurance to Ibrahim when he was alarmed by their refusal to eat. Their mission was one of mercy to him, destruction to others.",
          verseRef: "15:53"
        }
      ]
    },

    prophetConsolation: {
      color: '#EF4444',
      icon: 'Users',
      name: "Consolation for the Prophet",
      nameArabic: "تسلية النبي",
      description: "Divine comfort to Prophet Muhammad facing rejection",
      concepts: [
        {
          term: "وَلَقَدْ نَعْلَمُ أَنَّكَ يَضِيقُ صَدْرُكَ",
          transliteration: "Wa laqad na'lamu annaka yadeequ sadruk",
          meaning: "And We know that your breast is constrained",
          explanation: "Allah acknowledges the Prophet's emotional pain from rejection. 'Yadeequ sadruk' = chest tightens with grief. Divine empathy before divine prescription.",
          verseRef: "15:97"
        },
        {
          term: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَكُن مِّنَ السَّاجِدِينَ",
          transliteration: "Fa-sabbih bi-hamdi Rabbika wa kun minas-Saajideen",
          meaning: "So glorify with praise of your Lord and be among those who prostrate",
          explanation: "The prescription for grief: tasbeeh (glorification) and sujood (prostration). Dhikr and salah are the antidotes to emotional distress.",
          verseRef: "15:98"
        },
        {
          term: "وَاعْبُدْ رَبَّكَ حَتَّى يَأْتِيَكَ الْيَقِينُ",
          transliteration: "Wa'bud Rabbaka hatta ya'tiyakal-Yaqeen",
          meaning: "And worship your Lord until certainty comes to you",
          explanation: "Yaqeen here means death - the absolute certainty. The command: worship continuously until death. No retirement from 'ibadah. Some scholars say yaqeen also means witnessing truth's victory.",
          verseRef: "15:99"
        },
        {
          term: "فَاصْفَحِ الصَّفْحَ الجَمِيل",
          transliteration: "Fasfah as-Safhal-Jameel",
          meaning: "So turn away with gracious forgiveness",
          explanation: "Safh jameel = beautiful/gracious turning away. Not angry ignoring, but dignified overlooking of insults. The highest form of patience.",
          verseRef: "15:85"
        }
      ]
    },

    divineCreativity: {
      color: '#F59E0B',
      icon: 'Star',
      name: "Divine Creative Power",
      nameArabic: "القدرة الخالقة",
      description: "Signs of Allah's creative power in the universe",
      concepts: [
        {
          term: "بُرُوج السَّمَاء",
          transliteration: "Burooj as-Samaa",
          meaning: "Constellations of the sky",
          explanation: "The zodiacal constellations - massive celestial structures that display divine design. 'Burooj' also means mansions/stations, referring to the moon's path.",
          verseRef: "15:16"
        },
        {
          term: "رَوَاسِيَ",
          transliteration: "Rawaasiy",
          meaning: "Firm mountains",
          explanation: "Mountains as pegs/anchors stabilizing the earth. Modern geology confirms mountains' role in tectonic stability. Another Quranic scientific indication.",
          verseRef: "15:19"
        },
        {
          term: "خَزَائِنُ كُلِّ شَيْءٍ",
          transliteration: "Khazaa'inu kulli shay'",
          meaning: "Treasuries of all things",
          explanation: "Everything has a 'treasury' with Allah - unlimited supply. He sends down in measured amounts according to wisdom. Nothing runs out; scarcity is divine wisdom, not divine limitation.",
          verseRef: "15:21"
        },
        {
          term: "الرِّيَاح لَوَاقِحَ",
          transliteration: "Ar-Riyah Lawaaqih",
          meaning: "Winds as fertilizers",
          explanation: "Winds that 'fertilize' - carry pollen, bring rain clouds. The Quran mentions wind's role in plant reproduction and water cycle 1400 years before modern botany.",
          verseRef: "15:22"
        }
      ]
    },

    jinnCreation: {
      color: '#06B6D4',
      icon: 'Compass',
      name: "Creation of Jinn",
      nameArabic: "خلق الجن",
      description: "The creation of jinn from fire before humans",
      concepts: [
        {
          term: "الجَآنَّ مِن نَّارِ السَّمُومِ",
          transliteration: "Al-Jaanna min Naaris-Samoom",
          meaning: "The jinn from scorching fire",
          explanation: "Jinn were created from 'samoom' - intensely hot, penetrating fire. Created before humans ('min qabl'). They are a parallel creation with free will, unseen to us but real.",
          verseRef: "15:27"
        }
      ]
    }
  },

  relationships: [
    {
      from: "Quran Preservation",
      to: "Destroyed Nations",
      type: "contrast",
      description: "Preserved message vs. destroyed deniers",
      explanation: "The Quran is preserved; those who reject it face the fate of previous nations"
    },
    {
      from: "Creation of Man (clay)",
      to: "Creation of Jinn (fire)",
      type: "parallel",
      description: "Two creations with free will",
      explanation: "Both created for worship, both tested, different origins"
    },
    {
      from: "Iblis's refusal",
      to: "Adam's honor",
      type: "causation",
      description: "Honor provokes jealousy",
      explanation: "Iblis's arrogance was exposed by Adam's elevation"
    },
    {
      from: "Iblis's promise to mislead",
      to: "Sincere servants excepted",
      type: "limitation",
      description: "Shaytan's power is limited",
      explanation: "Sincerity (ikhlas) is protection from shaytan"
    },
    {
      from: "Prophet's grief",
      to: "Worship prescription",
      type: "solution",
      description: "Ibadah heals emotional pain",
      explanation: "Tasbeeh, sujood, and continuous worship until death"
    },
    {
      from: "Ibrahim's guests",
      to: "Lot's people destroyed",
      type: "sequence",
      description: "Same angels, different missions",
      explanation: "Mercy to believers, destruction to transgressors"
    }
  ],

  thematicFlow: {
    title: "From Preservation to Protection",
    titleArabic: "من الحفظ إلى الحماية",
    description: "The surah moves from Quran's preservation to humanity's protection through faith",
    stages: [
      {
        stage: 1,
        theme: "Quran's Nature",
        verses: "15:1-15",
        description: "Clear book, preserved reminder, disbelievers' mockery"
      },
      {
        stage: 2,
        theme: "Cosmic Signs",
        verses: "15:16-25",
        description: "Constellations, mountains, winds, provisions - signs of Creator"
      },
      {
        stage: 3,
        theme: "Creation Narrative",
        verses: "15:26-44",
        description: "Man from clay, jinn from fire, Iblis's refusal and promise"
      },
      {
        stage: 4,
        theme: "Paradise and Believers",
        verses: "15:45-50",
        description: "Reward for the righteous - gardens, peace, immortality"
      },
      {
        stage: 5,
        theme: "Ibrahim's Guests",
        verses: "15:51-60",
        description: "Angels bring good news to Ibrahim, proceed to destroy"
      },
      {
        stage: 6,
        theme: "Lot's People",
        verses: "15:61-77",
        description: "Angels arrive, people attempt evil, cities overturned"
      },
      {
        stage: 7,
        theme: "Other Destroyed Nations",
        verses: "15:78-84",
        description: "Aykah and Hijr - patterns of destruction"
      },
      {
        stage: 8,
        theme: "Consolation and Command",
        verses: "15:85-99",
        description: "Comfort for Prophet, prescription of worship until death"
      }
    ]
  },

  backgroundContext: {
    title: "Revelation Context",
    description: "Understanding when and why this surah was revealed",
    events: [
      {
        event: "Makkan Period",
        detail: "Revealed when persecution was intense and converts were few"
      },
      {
        event: "Mockery of the Quran",
        detail: "Quraysh mocked the Quran as poetry, magic, or madness"
      },
      {
        event: "Demand for Miracles",
        detail: "Disbelievers demanded angels or spectacular miracles"
      },
      {
        event: "Prophet's Grief",
        detail: "The Prophet felt deep sorrow at his people's rejection"
      }
    ],
    wisdom: "The surah addresses mockery with the promise of Quran's preservation, and consoles the Prophet with stories of previous prophets who faced similar rejection"
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 26,
        name: "Ash-Shu'ara",
        relation: "Expanded narratives of destroyed nations",
        sharedTheme: "Messenger rejection patterns"
      },
      {
        surah: 7,
        name: "Al-A'raf",
        verses: "7:11-18",
        relation: "Parallel account of Iblis's refusal",
        sharedTheme: "Adam's creation and Iblis's fall"
      },
      {
        surah: 38,
        name: "Sad",
        verses: "38:71-85",
        relation: "Another detailed Iblis narrative",
        sharedTheme: "Iblis's arrogance and promise"
      },
      {
        surah: 11,
        name: "Hud",
        relation: "Stories of Thamud, Lot, Shu'ayb",
        sharedTheme: "Destroyed nations"
      },
      {
        surah: 51,
        name: "Adh-Dhariyat",
        verses: "51:24-37",
        relation: "Ibrahim's guests and Lot's destruction",
        sharedTheme: "Angel visitation narratives"
      }
    ]
  },

  hadith: [
    {
      arabic: "من قرأ سورة الحجر كان له من الأجر عشر حسنات بعدد المهاجرين والأنصار",
      english: "Whoever recites Surah Al-Hijr will have reward of ten good deeds for each Muhajir and Ansar",
      source: "Attributed, needs verification",
      relevance: "Virtue of reciting this surah"
    },
    {
      arabic: "لا تزال طائفة من أمتي ظاهرين على الحق",
      english: "A group from my ummah will always remain upon truth",
      source: "Sahih Muslim",
      relevance: "Related to verse 15:9 - preservation of Quran through righteous community"
    }
  ],

  practicalApplication: {
    title: "Living by Al-Hijr",
    applications: [
      {
        principle: "Trust the Quran's authenticity",
        how: "The divine promise of preservation means you hold an unchanged message",
        verse: "15:9"
      },
      {
        principle: "Recognize shaytan's methods",
        how: "He beautifies sin - be wary when haram looks attractive",
        verse: "15:39"
      },
      {
        principle: "Cultivate sincerity (ikhlas)",
        how: "Ikhlas is the shield against shaytan's influence",
        verse: "15:40"
      },
      {
        principle: "Learn from history",
        how: "The ruins of destroyed nations are warnings, not tourist attractions",
        verse: "15:80-84"
      },
      {
        principle: "Worship through grief",
        how: "When emotionally distressed, increase in tasbeeh and sujood",
        verse: "15:97-98"
      },
      {
        principle: "Worship until death",
        how: "No retirement from 'ibadah - continue until yaqeen (death) arrives",
        verse: "15:99"
      },
      {
        principle: "Practice gracious forgiveness",
        how: "When wronged, turn away beautifully (safh jameel)",
        verse: "15:85"
      }
    ]
  },

  uniqueInsight: {
    title: "The Architecture of Divine Protection",
    insight: "This surah presents a layered system of protection: (1) The QURAN is protected by Allah - 'We will guard it' (15:9). (2) The BELIEVERS are protected from shaytan through sincerity - 'except Your sincere servants' (15:40). (3) The PROPHET is protected through worship - 'glorify and prostrate until certainty' (15:98-99). Notice the beautiful inversion: shaytan's promise to mislead (15:39) is countered by Allah's promise to protect (15:9). Iblis admits his impotence against the sincere, which tells believers exactly how to be safe. The destroyed nations (Hijr, Lot, Aykah) serve as physical proof that rejection has consequences - their ruins still exist as reminders. Most striking is the final prescription: when the Prophet's chest tightens with grief, the solution is not venting or complaint, but tasbeeh, sujood, and 'ibadah until death. This transforms pain into worship and grief into connection.",
    modernRelevance: "In an age of doubt about religious texts, 15:9 stands as a 1400-year-old promise fulfilled - the Quran remains unchanged. The shaytan's method of 'beautifying' sin (15:39) perfectly describes modern marketing of harmful lifestyles. And the prescription of worship for emotional distress (15:97-98) offers an alternative to the modern epidemic of anxiety."
  },

  linguisticFeatures: {
    title: "Linguistic Beauty",
    features: [
      {
        feature: "Emphatic preservation promise",
        example: "إِنَّا نَحْنُ نَزَّلْنَا... وَإِنَّا لَهُ لَحَافِظُونَ",
        effect: "Five emphatic devices in one verse (inna, nahnu, nazzalna, inna, la) - maximum certainty"
      },
      {
        feature: "Iblis's dialogue",
        example: "Direct speech reveals character",
        effect: "Readers hear shaytan's arrogant reasoning in his own words"
      },
      {
        feature: "Creation stages",
        example: "صَلْصَال مِنْ حَمَإٍ مَسْنُونٍ",
        effect: "Rare vocabulary paints vivid picture of clay transformation"
      },
      {
        feature: "Safh Jameel",
        example: "فَاصْفَحِ الصَّفْحَ الْجَمِيلَ",
        effect: "Cognate accusative (maf'ul mutlaq) intensifies the beauty of forgiveness"
      }
    ]
  },

  comparisonTable: {
    title: "Iblis's Reasoning vs. Divine Reality",
    headers: ["Iblis's Claim", "Reality", "Lesson"],
    rows: [
      {
        claim: "Fire > Clay (I'm superior)",
        reality: "Honor is by obedience, not origin",
        lesson: "Never judge worth by background"
      },
      {
        claim: "I will mislead all",
        reality: "Sincere servants are protected",
        lesson: "Ikhlas is the ultimate shield"
      },
      {
        claim: "I'll beautify sin for them",
        reality: "Allah guides whom He wills",
        lesson: "Stay close to revelation"
      }
    ]
  },

  destroyedNationsComparison: {
    title: "Patterns of Destruction",
    headers: ["Nation", "Prophet", "Sin", "Punishment", "Verse"],
    rows: [
      {
        nation: "Thamud (Hijr)",
        prophet: "Salih",
        sin: "Killed the she-camel, rejected signs",
        punishment: "Single mighty blast (sayhah)",
        verse: "15:80-84"
      },
      {
        nation: "People of Lot",
        prophet: "Lot",
        sin: "Homosexuality, attempted assault on angels",
        punishment: "Cities overturned, rained with stones",
        verse: "15:58-77"
      },
      {
        nation: "Aykah (Madyan)",
        prophet: "Shu'ayb",
        sin: "Cheating in weights and measures",
        punishment: "Punishment of the Day of Shadow",
        verse: "15:78-79"
      }
    ]
  },

  memorization: {
    title: "Memorization Structure",
    outline: [
      "Verses 1-15: Quran's nature and disbelievers' mockery",
      "Verses 16-25: Cosmic signs (sky, earth, provisions)",
      "Verses 26-44: Adam's creation, Iblis's refusal and promise",
      "Verses 45-50: Paradise description",
      "Verses 51-60: Ibrahim and the angel guests",
      "Verses 61-77: Lot's people and their destruction",
      "Verses 78-84: Aykah and Hijr (Thamud)",
      "Verses 85-99: Consolation, forgiveness, worship until death"
    ],
    mnemonic: "Quran preserved - Signs shown - Creation told - Paradise promised - Ibrahim visited - Lot destroyed - Nations ruined - Prophet consoled"
  },

  spiritualPrescription: {
    title: "When to Recite Al-Hijr",
    occasions: [
      "When doubting the Quran's authenticity (15:9 reassures)",
      "When tempted by beautified sin (15:39 warns)",
      "When struggling with sincerity (15:40 motivates)",
      "When grieving rejection or failure (15:97-99 prescribes)",
      "When needing to forgive graciously (15:85 models)",
      "When wanting to understand shaytan's methods (15:39-42 exposes)"
    ],
    effect: "This surah builds trust in scripture, awareness of shaytan, and resilience through worship"
  },

  theVerseOfPreservation: {
    title: "The Most Important Verse: 15:9",
    arabic: "إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ",
    transliteration: "Inna nahnu nazzalna adh-dhikra wa inna lahu la-haafizoon",
    translation: "Indeed, it is We who sent down the Reminder (Quran), and indeed, We will be its Guardian",
    significance: [
      "Divine promise of Quran's preservation - unique among scriptures",
      "Unlike Torah and Gospel entrusted to humans, Allah guards the Quran directly",
      "1400 years of fulfilled prophecy - not a letter changed",
      "Basis for Muslim confidence in Quran's textual integrity",
      "Answers the challenge: 'Prove your book isn't corrupted'"
    ]
  }
};

export default ONTOLOGY;
