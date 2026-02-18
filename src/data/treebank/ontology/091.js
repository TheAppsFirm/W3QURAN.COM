/**
 * Surah Ash-Shams (91) - Ontology of Quranic Concepts
 * The Sun
 * Theme: Seven cosmic oaths leading to the truth about soul purification vs corruption
 */

export const ONTOLOGY = {
  surahId: 91,
  surahName: "Ash-Shams",
  surahNameArabic: "الشمس",
  revelationType: "Makki",
  totalAyahs: 15,

  categories: {
    cosmicOaths: {
      name: "The Seven Cosmic Oaths",
      nameArabic: "القسم الكوني السباعي",
      color: '#F59E0B',
      icon: 'Sun',
      description: "Seven consecutive oaths by celestial and earthly phenomena, all pointing to the central truth about the human soul",
      concepts: [
        {
          term: "الشَّمْسِ وَضُحَاهَا",
          transliteration: "Ash-Shamsi wa Duhaahaa",
          meaning: "The sun and its brightness",
          explanation: "First oath: The sun at its full glory (duhaa = mid-morning light). Represents clarity, guidance, and the source of all earthly light. Symbol of truth unveiled.",
          verseRef: "91:1"
        },
        {
          term: "القَمَرِ إِذَا تَلَاهَا",
          transliteration: "Al-Qamari idhaa Talaahaa",
          meaning: "The moon when it follows it",
          explanation: "Second oath: The moon follows the sun, reflecting its light. Represents those who follow guidance, receiving and transmitting divine light.",
          verseRef: "91:2"
        },
        {
          term: "النَّهَارِ إِذَا جَلَّاهَا",
          transliteration: "An-Nahaari idhaa Jallaahaa",
          meaning: "The day when it reveals it",
          explanation: "Third oath: Day manifests the sun's splendor (jalaa = to reveal/polish). Represents the time of action, clarity, and truth becoming evident.",
          verseRef: "91:3"
        },
        {
          term: "اللَّيْلِ إِذَا يَغْشَاهَا",
          transliteration: "Al-Layli idhaa Yaghshaahaa",
          meaning: "The night when it covers it",
          explanation: "Fourth oath: Night covers the sun (yaghshaa = to cover). Represents concealment, rest, and also the covering of truth by those who reject it.",
          verseRef: "91:4"
        },
        {
          term: "السَّمَاءِ وَمَا بَنَاهَا",
          transliteration: "As-Samaa'i wa maa Banaahaa",
          meaning: "The sky and He who built it",
          explanation: "Fifth oath: The sky's construction by Allah. 'Banaa' (built) implies intelligent design, structure, and purposeful engineering.",
          verseRef: "91:5"
        },
        {
          term: "الْأَرْضِ وَمَا طَحَاهَا",
          transliteration: "Al-Ardi wa maa Tahaahaa",
          meaning: "The earth and He who spread it",
          explanation: "Sixth oath: The earth spread out for habitation. Unique verb 'tahaa' emphasizes the special preparation of earth for human life.",
          verseRef: "91:6"
        },
        {
          term: "نَفْسٍ وَمَا سَوَّاهَا",
          transliteration: "Nafsin wa maa Sawwaahaa",
          meaning: "The soul and He who proportioned it",
          explanation: "Seventh and climactic oath: The human soul perfected by Allah. Indefinite 'nafsin' = any soul, universal truth. Sawwaa = perfected, balanced, proportioned.",
          verseRef: "91:7"
        }
      ]
    },

    soulAndItsNature: {
      name: "The Nature of the Soul",
      nameArabic: "طبيعة النفس",
      color: '#8B5CF6',
      icon: 'Heart',
      description: "The soul's inherent design with both potential for good and evil",
      concepts: [
        {
          term: "سَوَّاهَا",
          transliteration: "Sawwaahaa",
          meaning: "He proportioned/perfected it",
          explanation: "Allah designed the soul with inherent balance. The soul is not inherently corrupt but divinely engineered with the capacity for both good and evil.",
          verseRef: "91:7"
        },
        {
          term: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
          transliteration: "Fa-alhamahaa Fujoorahaa wa Taqwaahaa",
          meaning: "Then inspired it with its wickedness and righteousness",
          explanation: "Ilham = divine inspiration without teaching. Both fujoor (wickedness) and taqwa (righteousness) are INNATE - we instinctively know right from wrong. This is the fitrah.",
          verseRef: "91:8"
        },
        {
          term: "فُجُور",
          transliteration: "Fujoor",
          meaning: "Wickedness/sinfulness",
          explanation: "From 'fajara' (to break forth like a spring). Sin is breaking divine boundaries. Listed first not because dominant, but to show what must be overcome.",
          verseRef: "91:8"
        },
        {
          term: "تَقْوَى",
          transliteration: "Taqwaa",
          meaning: "God-consciousness/righteousness",
          explanation: "From 'waqaa' (to protect). Taqwa is protecting oneself through consciousness of Allah. The soul naturally knows this path.",
          verseRef: "91:8"
        }
      ]
    },

    successAndFailure: {
      name: "Success and Failure of the Soul",
      nameArabic: "فلاح النفس وخسرانها",
      color: '#10B981',
      icon: 'Scale',
      description: "The two possible outcomes for the human soul",
      concepts: [
        {
          term: "قَدْ أَفْلَحَ مَن زَكَّاهَا",
          transliteration: "Qad Aflaha man Zakkaahaa",
          meaning: "He has succeeded who purifies it",
          explanation: "THE ANSWER to all seven oaths. Aflaha = succeeded like a farmer (fallah) who cultivates land. Zakkaa = to purify AND grow. Tazkiyah makes the soul both pure and greater.",
          verseRef: "91:9"
        },
        {
          term: "وَقَدْ خَابَ مَن دَسَّاهَا",
          transliteration: "Wa qad Khaaba man Dassaahaa",
          meaning: "And he has failed who corrupts it",
          explanation: "Khaaba = to fail, be disappointed. Dassaa = to hide, bury, conceal. Corruption is HIDING the soul's innate goodness, burying the fitrah under sin.",
          verseRef: "91:10"
        },
        {
          term: "زَكَّى",
          transliteration: "Zakkaa",
          meaning: "To purify and grow",
          explanation: "Same root as zakah. Purification leads to growth. The soul that is cleansed doesn't become less - it becomes MORE.",
          verseRef: "91:9"
        },
        {
          term: "دَسَّى",
          transliteration: "Dassaa",
          meaning: "To corrupt by burying",
          explanation: "Opposite of zakkaa. Instead of growing the soul, dassaa buries it. The fitrah is covered, hidden, suffocated by sins.",
          verseRef: "91:10"
        }
      ]
    },

    storyOfThamud: {
      name: "The Story of Thamud",
      nameArabic: "قصة ثمود",
      color: '#EF4444',
      icon: 'AlertTriangle',
      description: "Historical example of souls that were corrupted, illustrating the consequence of dassaa",
      concepts: [
        {
          term: "ثَمُود",
          transliteration: "Thamood",
          meaning: "The people of Thamud",
          explanation: "Ancient Arabian tribe who dwelt in rock-carved homes in Al-Hijr. Prophet Salih was sent to them with the miraculous she-camel as a sign.",
          verseRef: "91:11"
        },
        {
          term: "كَذَّبَتْ... بِطَغْوَاهَا",
          transliteration: "Kadhdhabat... bi-Taghwaahaa",
          meaning: "They denied in their transgression",
          explanation: "Their taghwa (transgression) CAUSED their takdhib (denial). Transgression leads to denial - sin clouds the heart's ability to recognize truth.",
          verseRef: "91:11"
        },
        {
          term: "انبَعَثَ أَشْقَاهَا",
          transliteration: "Inba'atha Ashqaahaa",
          meaning: "The most wretched of them rose up",
          explanation: "Among sinners, there are degrees. The ashqaa (most wretched) led the crime. His name was Qidar bin Salif. Leadership in evil has consequences.",
          verseRef: "91:12"
        },
        {
          term: "نَاقَةَ اللَّهِ",
          transliteration: "Naaqat-Allah",
          meaning: "The she-camel of Allah",
          explanation: "A miraculous sign - the she-camel emerged from a rock. It had designated drinking days. Harming it meant rejecting Allah's sign directly.",
          verseRef: "91:13"
        },
        {
          term: "عَقَرُوهَا",
          transliteration: "'Aqaroohaa",
          meaning: "They hamstrung her",
          explanation: "'Aqara = to cut the legs, a cruel method of killing. They not only rejected the sign but brutally destroyed it - adding cruelty to disbelief.",
          verseRef: "91:14"
        },
        {
          term: "دَمْدَمَ",
          transliteration: "Damdama",
          meaning: "He destroyed completely",
          explanation: "Unique quadriliteral verb used only here. The repeated syllables (dam-dam) suggest complete, crushing destruction. Onomatopoeia for utter annihilation.",
          verseRef: "91:14"
        },
        {
          term: "فَسَوَّاهَا",
          transliteration: "Fa-sawwaahaa",
          meaning: "And leveled it",
          explanation: "Same verb as verse 7 (sawwaa). Allah sawwaa (perfected) the nafs, but when Thamud dassaa (buried) it, Allah sawwaa (leveled) them. The verb can create or destroy.",
          verseRef: "91:14"
        }
      ]
    },

    divineAuthority: {
      name: "Divine Authority",
      nameArabic: "السلطة الإلهية",
      color: '#F59E0B',
      icon: 'Crown',
      description: "Allah's absolute power and fearlessness in executing justice",
      concepts: [
        {
          term: "وَلَا يَخَافُ عُقْبَاهَا",
          transliteration: "Wa laa Yakhafu 'Uqbaahaa",
          meaning: "And He does not fear its consequence",
          explanation: "Unlike human rulers who fear retaliation, Allah's justice is absolute. No one can question or avenge. His destruction of Thamud was final and unchallengeable.",
          verseRef: "91:15"
        },
        {
          term: "رَبُّهُم",
          transliteration: "Rabbuhum",
          meaning: "Their Lord",
          explanation: "Even while destroying them, they remain His creation. Rabb implies lordship, ownership, and authority. The punishment came from the One who created them.",
          verseRef: "91:14"
        },
        {
          term: "بِذَنبِهِمْ",
          transliteration: "Bi-dhanbihim",
          meaning: "Because of their sin",
          explanation: "The destruction was not arbitrary but caused by their sin. Justice: the punishment matched the crime. They dassaa their souls, so they were sawwaa'd (leveled).",
          verseRef: "91:14"
        }
      ]
    }
  },

  relationships: [
    {
      from: "الشمس",
      to: "القمر",
      type: "sequence",
      description: "Sun followed by moon",
      explanation: "The moon follows (talaahaa) the sun - reflecting its light, representing followers of guidance"
    },
    {
      from: "النهار",
      to: "الليل",
      type: "contrast",
      description: "Day revealing vs Night covering",
      explanation: "Day reveals (jallaa) what night covers (yaghshaa) - truth vs concealment"
    },
    {
      from: "السماء",
      to: "الأرض",
      type: "pair",
      description: "Heaven and earth",
      explanation: "Both built/spread by Allah - complete cosmic framework"
    },
    {
      from: "فجور",
      to: "تقوى",
      type: "antithesis",
      description: "Wickedness vs Righteousness",
      explanation: "Both innately known (ilham) - the soul's dual potential"
    },
    {
      from: "زكاها",
      to: "دساها",
      type: "antithesis",
      description: "Purification vs Corruption",
      explanation: "Growing the soul vs burying it - the central choice"
    },
    {
      from: "أفلح",
      to: "خاب",
      type: "antithesis",
      description: "Success vs Failure",
      explanation: "Ultimate outcomes of the two paths"
    },
    {
      from: "سواها (v.7)",
      to: "سواها (v.14)",
      type: "wordplay",
      description: "Perfected vs Leveled",
      explanation: "Same verb for creating souls and destroying Thamud - sawwaa can build or demolish"
    },
    {
      from: "دساها",
      to: "ثمود",
      type: "exemplification",
      description: "Thamud exemplifies dassaa",
      explanation: "The story of Thamud illustrates what happens when souls are corrupted"
    }
  ],

  thematicFlow: {
    title: "From Cosmos to Consequence",
    titleArabic: "من الكون إلى العاقبة",
    stages: [
      {
        stage: 1,
        theme: "Celestial Oaths",
        verses: "91:1-4",
        description: "Sun, moon, day, night - cosmic alternation of light and darkness"
      },
      {
        stage: 2,
        theme: "Divine Creation",
        verses: "91:5-6",
        description: "Heaven built, earth spread - the cosmic framework"
      },
      {
        stage: 3,
        theme: "The Human Soul",
        verses: "91:7-8",
        description: "Soul proportioned, inspired with both wickedness and righteousness"
      },
      {
        stage: 4,
        theme: "The Central Truth",
        verses: "91:9-10",
        description: "THE ANSWER: Success for purifiers, failure for corruptors"
      },
      {
        stage: 5,
        theme: "Historical Example",
        verses: "91:11-14",
        description: "Thamud's transgression, crime, and destruction"
      },
      {
        stage: 6,
        theme: "Divine Sovereignty",
        verses: "91:15",
        description: "Allah fears no consequence - absolute authority"
      }
    ]
  },

  crossReferences: {
    relatedSurahs: [
      {
        surah: 92,
        name: "Al-Layl",
        relation: "Thematic twin",
        sharedTheme: "Two paths: generosity/taqwa vs miserliness/denial"
      },
      {
        surah: 7,
        name: "Al-A'raf",
        verses: "73-79",
        relation: "Detailed Thamud story",
        sharedTheme: "Salih and the she-camel"
      },
      {
        surah: 26,
        name: "Ash-Shu'ara",
        verses: "141-159",
        relation: "Thamud narrative",
        sharedTheme: "Their rejection and punishment"
      },
      {
        surah: 54,
        name: "Al-Qamar",
        verses: "23-31",
        relation: "Thamud condensed",
        sharedTheme: "Their rejection of the she-camel"
      },
      {
        surah: 89,
        name: "Al-Fajr",
        verses: "9-13",
        relation: "Thamud among destroyed nations",
        sharedTheme: "Those who carved rocks"
      }
    ]
  },

  hadith: [
    {
      arabic: "إِنَّ اللَّهَ لا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
      english: "Allah does not look at your forms or wealth, but He looks at your hearts and deeds",
      source: "Muslim",
      relevance: "The nafs (heart/soul) is what matters - its purification or corruption"
    },
    {
      arabic: "أَلا وَإِنَّ فِي الجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الجَسَدُ كُلُّهُ",
      english: "Indeed in the body there is a piece of flesh; if it is sound, the whole body is sound",
      source: "Bukhari & Muslim",
      relevance: "Tazkiyah of the heart/nafs affects everything"
    },
    {
      arabic: "قَدْ أَفْلَحَ مَنْ أَسْلَمَ وَرُزِقَ كَفَافًا وَقَنَّعَهُ اللَّهُ بِمَا آتَاهُ",
      english: "He has succeeded who submits, is given sufficient provision, and is content with what Allah has given",
      source: "Muslim",
      relevance: "Aflaha (success) defined - submission and contentment"
    }
  ],

  practicalApplication: {
    title: "Living by Ash-Shams",
    applications: [
      {
        principle: "The soul needs cultivation",
        how: "Like a farmer (fallah → falah), regularly tend your soul: remove weeds (sins), water it (worship), expose it to light (knowledge)",
        verse: "91:9"
      },
      {
        principle: "You already know right from wrong",
        how: "Allah has placed the compass within you (ilham). When unsure, pause and listen to your fitrah - it knows",
        verse: "91:8"
      },
      {
        principle: "Don't bury your conscience",
        how: "Dassaa is covering the soul's light. Each ignored sin buries the fitrah deeper. Keep your conscience alive and responsive",
        verse: "91:10"
      },
      {
        principle: "Tazkiyah is growth, not deprivation",
        how: "Zakkaa means both purification AND growth. Purifying doesn't make you less - it makes you MORE",
        verse: "91:9"
      },
      {
        principle: "History teaches",
        how: "Learn from Thamud: transgression leads to denial leads to destruction. Break the cycle early",
        verse: "91:11-14"
      },
      {
        principle: "Divine justice is certain",
        how: "Allah fears no consequence. Justice will be served. This should comfort the oppressed and warn the oppressor",
        verse: "91:15"
      }
    ]
  },

  uniqueInsight: {
    title: "The Internal Cosmos",
    insight: "This surah's structure is profound: seven cosmic oaths (sun, moon, day, night, sky, earth, soul) all lead to ONE truth - the soul's purification or corruption. The message: the internal cosmos (nafs) is as significant as the external cosmos. The same Allah who banaa (built) the sky and tahaa (spread) the earth also sawwaa (proportioned) your soul. The verb sawwaa appears twice: for creating the soul (v.7) and for destroying Thamud (v.14). This wordplay is devastating - the same creative power can become destructive. But notice: Allah perfected the soul BEFORE inspiring it with fujoor and taqwa. The soul's default state is balanced, not corrupt. Corruption (dassaa) is covering this balance, while purification (zakkaa) is uncovering and growing it. The farmer metaphor (aflaha from fallah) is perfect: success requires cultivation, not just avoiding harm. You must actively grow your soul, not just keep it from rotting.",
    modernRelevance: "In an age of external achievement, this surah redirects focus inward. Your most important project is your nafs. All the cosmic grandeur exists partly to teach this lesson about the inner world. The seven oaths build anticipation: what truth is so important it requires all this? Answer: your soul's fate. Therapy, self-improvement, and spiritual practice all connect to this Quranic principle of tazkiyah."
  },

  linguisticFeatures: {
    title: "Linguistic Gems",
    features: [
      {
        feature: "Seven Consecutive Oaths",
        significance: "Most consecutive oaths in any surah",
        effect: "Builds suspense for the main message - maximum emphasis"
      },
      {
        feature: "Paired Oaths",
        examples: "Sun/Moon, Day/Night, Sky/Earth",
        effect: "Shows Allah's control over complementary opposites"
      },
      {
        feature: "Indefinite Nafs",
        example: "وَنَفْسٍ (not الْنَفْس)",
        effect: "Universal truth: applies to ANY soul, not a specific one"
      },
      {
        feature: "Sawwaa Wordplay",
        example: "سَوَّاهَا (v.7) vs فَسَوَّاهَا (v.14)",
        effect: "Same verb for creation and destruction - devastating irony"
      },
      {
        feature: "Quadriliteral Damdama",
        example: "دَمْدَمَ (dam-dam)",
        effect: "Onomatopoeia for crushing destruction - sounds like rumbling annihilation"
      },
      {
        feature: "Causative Chain",
        example: "طَغْوَى → كَذَّبَ → عَقَرُوا → دَمْدَمَ",
        effect: "Transgression leads to denial leads to crime leads to destruction"
      }
    ]
  },

  comparisonTable: {
    title: "The Two Outcomes",
    headers: ["Aspect", "Purification (Zakkaa)", "Corruption (Dassaa)"],
    rows: [
      {
        aspect: "Action",
        purification: "زَكَّاهَا (purifies/grows it)",
        corruption: "دَسَّاهَا (buries/hides it)"
      },
      {
        aspect: "Result",
        purification: "أَفْلَحَ (succeeds)",
        corruption: "خَابَ (fails)"
      },
      {
        aspect: "Meaning",
        purification: "Growing the soul like a farmer",
        corruption: "Burying the fitrah under sins"
      },
      {
        aspect: "Direction",
        purification: "Upward (growth)",
        corruption: "Downward (burial)"
      },
      {
        aspect: "Example",
        purification: "The righteous throughout history",
        corruption: "Thamud - transgression led to destruction"
      },
      {
        aspect: "Ultimate Fate",
        purification: "Eternal success (فَلَاح)",
        corruption: "Complete loss (خَيْبَة)"
      }
    ]
  },

  sevenOathsTable: {
    title: "The Seven Cosmic Oaths",
    oaths: [
      {
        number: 1,
        object: "الشَّمْس",
        meaning: "The Sun",
        symbolism: "Primary source of light - guidance, truth"
      },
      {
        number: 2,
        object: "القَمَر",
        meaning: "The Moon",
        symbolism: "Reflected light - followers of guidance"
      },
      {
        number: 3,
        object: "النَّهَار",
        meaning: "The Day",
        symbolism: "Revelation, clarity, action"
      },
      {
        number: 4,
        object: "اللَّيْل",
        meaning: "The Night",
        symbolism: "Concealment, rest, covering"
      },
      {
        number: 5,
        object: "السَّمَاء",
        meaning: "The Sky",
        symbolism: "Divine construction - intelligent design"
      },
      {
        number: 6,
        object: "الأَرْض",
        meaning: "The Earth",
        symbolism: "Preparation for life - divine hospitality"
      },
      {
        number: 7,
        object: "نَفْس",
        meaning: "The Soul",
        symbolism: "The internal cosmos - climactic focus"
      }
    ],
    conclusion: "All seven oaths culminate in the truth about the soul: purify it to succeed, corrupt it to fail"
  },

  thamudTimeline: {
    title: "The Fall of Thamud",
    stages: [
      {
        stage: 1,
        event: "طَغْوَى (Transgression)",
        description: "Their souls became corrupted through rebellion"
      },
      {
        stage: 2,
        event: "كَذَّبَتْ (Denial)",
        description: "Transgression led them to deny truth and their prophet"
      },
      {
        stage: 3,
        event: "انبَعَثَ أَشْقَاهَا (Most wretched rose)",
        description: "The worst among them took leadership in evil"
      },
      {
        stage: 4,
        event: "عَقَرُوهَا (Hamstrung the camel)",
        description: "They cruelly killed Allah's miraculous sign"
      },
      {
        stage: 5,
        event: "دَمْدَمَ... فَسَوَّاهَا (Complete destruction)",
        description: "Allah leveled them completely - utter annihilation"
      }
    ]
  }
};

export default ONTOLOGY;
