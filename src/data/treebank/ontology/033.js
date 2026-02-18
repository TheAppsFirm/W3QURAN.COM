/**
 * Surah Al-Ahzab (33) - Ontology of Quranic Concepts
 * The Confederates / The Combined Forces - 73 Ayahs, Medinan
 *
 * Theme: Battle of the Trench (Khandaq), Prophet's household, hijab laws, adoption reforms
 * Revelation: Medinan (5 AH - Year of the Trench)
 *
 * Major Themes:
 * 1. Battle of the Confederates (Al-Ahzab) - Quraysh + Ghatafan + Jewish tribes alliance
 * 2. Abolition of adoption as lineage (Zayd ibn Haritha case)
 * 3. Wives of the Prophet - their status and responsibilities
 * 4. Hijab verses - modesty laws for believing women
 * 5. Prophet's unique status and responsibilities
 *
 * Historical Context:
 * - Battle of Khandaq (Trench): Shawwal 5 AH
 * - 10,000 confederate army vs 3,000 Muslims
 * - Trench strategy suggested by Salman al-Farisi
 * - Banu Qurayza's betrayal during siege
 * - Divine intervention: fierce wind and angels
 */

export const ONTOLOGY = {
  surahId: 33,
  surahName: "Al-Ahzab",
  surahNameArabic: "الأحزاب",
  meaning: "The Confederates / The Combined Forces",
  revelationType: "Madani",
  totalAyahs: 73,

  categories: {
    // 1. OPENING: GUIDANCE FOR THE PROPHET
    propheticGuidance: {
      name: "Guidance for the Prophet",
      nameArabic: "توجيهات للنبي",
      color: "#3B82F6",
      icon: "Compass",
      description: "Opening instructions to the Prophet about trusting Allah and ignoring disbelievers",
      verses: "33:1-3",
      concepts: [
        {
          term: "يَا أَيُّهَا النَّبِيُّ اتَّقِ اللَّهَ",
          meaning: "O Prophet, fear Allah",
          explanation: "Direct address establishing the surah's personal nature - guidance for the Prophet himself",
          verseRef: "33:1"
        },
        {
          term: "وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ",
          meaning: "And do not obey disbelievers and hypocrites",
          explanation: "Warning against succumbing to pressure from external and internal enemies",
          verseRef: "33:1"
        },
        {
          term: "إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا",
          meaning: "Indeed Allah is All-Knowing, All-Wise",
          explanation: "Allah's knowledge surpasses human scheming",
          verseRef: "33:1"
        },
        {
          term: "وَاتَّبِعْ مَا يُوحَىٰ إِلَيْكَ مِن رَّبِّكَ",
          meaning: "And follow what is revealed to you from your Lord",
          explanation: "Revelation as the only guide, not human opinions",
          verseRef: "33:2"
        },
        {
          term: "وَتَوَكَّلْ عَلَى اللَّهِ",
          meaning: "And put your trust in Allah",
          explanation: "Tawakkul - reliance on Allah amidst overwhelming odds",
          verseRef: "33:3"
        },
        {
          term: "وَكَفَىٰ بِاللَّهِ وَكِيلًا",
          meaning: "And sufficient is Allah as Disposer of affairs",
          explanation: "Allah alone is enough - preparation for battle narrative",
          verseRef: "33:3"
        }
      ]
    },

    // 2. ABOLITION OF ADOPTION AS LINEAGE
    adoptionReform: {
      name: "Reform of Adoption Laws",
      nameArabic: "إصلاح قوانين التبني",
      color: "#10B981",
      icon: "Scale",
      description: "Abolishing the pre-Islamic practice of calling adopted sons by father's name",
      verses: "33:4-6",
      concepts: [
        {
          term: "مَّا جَعَلَ اللَّهُ لِرَجُلٍ مِّن قَلْبَيْنِ فِي جَوْفِهِ",
          meaning: "Allah has not made for a man two hearts in his body",
          explanation: "Metaphor: just as one cannot have two hearts, one cannot have two fathers",
          verseRef: "33:4"
        },
        {
          term: "وَمَا جَعَلَ أَدْعِيَاءَكُمْ أَبْنَاءَكُمْ",
          meaning: "Nor has He made your adopted sons your [real] sons",
          explanation: "Legal ruling: adopted children retain their biological lineage",
          verseRef: "33:4"
        },
        {
          term: "ذَٰلِكُمْ قَوْلُكُم بِأَفْوَاهِكُمْ",
          meaning: "That is your saying by your mouths",
          explanation: "Calling someone 'son' doesn't change biological reality",
          verseRef: "33:4"
        },
        {
          term: "ادْعُوهُمْ لِآبَائِهِمْ",
          meaning: "Call them by [the names of] their fathers",
          explanation: "Legal requirement: use biological father's name (Zayd ibn Haritha, not Zayd ibn Muhammad)",
          verseRef: "33:5"
        },
        {
          term: "هُوَ أَقْسَطُ عِندَ اللَّهِ",
          meaning: "That is more just in the sight of Allah",
          explanation: "Preserving lineage is justice - inheritance and mahram laws depend on it",
          verseRef: "33:5"
        },
        {
          term: "فَإِن لَّمْ تَعْلَمُوا آبَاءَهُمْ فَإِخْوَانُكُمْ فِي الدِّينِ",
          meaning: "If you do not know their fathers - then they are your brothers in religion",
          explanation: "Unknown parentage: call them 'brother' - Islamic brotherhood",
          verseRef: "33:5"
        },
        {
          term: "وَمَوَالِيكُمْ",
          meaning: "And your freed slaves",
          explanation: "Alternative designation for those of unknown lineage",
          verseRef: "33:5"
        },
        {
          term: "النَّبِيُّ أَوْلَىٰ بِالْمُؤْمِنِينَ مِنْ أَنفُسِهِمْ",
          meaning: "The Prophet is closer to the believers than their own selves",
          explanation: "Prophet's authority exceeds even self-interest",
          verseRef: "33:6"
        },
        {
          term: "وَأَزْوَاجُهُ أُمَّهَاتُهُمْ",
          meaning: "And his wives are their mothers",
          explanation: "Mothers of the Believers - cannot marry them after Prophet",
          verseRef: "33:6"
        },
        {
          term: "وَأُولُو الْأَرْحَامِ بَعْضُهُمْ أَوْلَىٰ بِبَعْضٍ",
          meaning: "Blood relatives are closer to one another",
          explanation: "Biological kinship takes precedence in inheritance",
          verseRef: "33:6"
        }
      ]
    },

    // 3. COVENANT OF THE PROPHETS
    propheticCovenant: {
      color: "#F59E0B",
      icon: "Star",
      name: "Covenant with the Prophets",
      nameArabic: "ميثاق النبيين",
      concepts: [
        {
          term: "وَإِذْ أَخَذْنَا مِنَ النَّبِيِّينَ مِيثَاقَهُمْ",
          meaning: "When We took from the prophets their covenant",
          explanation: "Divine covenant with all prophets to convey the message",
          verseRef: "33:7"
        },
        {
          term: "وَمِنكَ وَمِن نُّوحٍ وَإِبْرَاهِيمَ وَمُوسَىٰ وَعِيسَى",
          meaning: "And from you, Noah, Abraham, Moses, and Jesus",
          explanation: "Five greatest prophets (Ulul-Azm) - special mention",
          verseRef: "33:7"
        },
        {
          term: "وَأَخَذْنَا مِنْهُم مِّيثَاقًا غَلِيظًا",
          meaning: "And We took from them a solemn covenant",
          explanation: "Heavy covenant - greater responsibility, greater accountability",
          verseRef: "33:7"
        },
        {
          term: "لِّيَسْأَلَ الصَّادِقِينَ عَن صِدْقِهِمْ",
          meaning: "That He may ask the truthful about their truthfulness",
          explanation: "Even prophets will be questioned - accountability for message delivery",
          verseRef: "33:8"
        }
      ]
    },

    // 4. BATTLE OF THE TRENCH (KHANDAQ)
    battleOfTrench: {
      name: "Battle of the Trench",
      nameArabic: "غزوة الخندق",
      color: "#EF4444",
      icon: "Shield",
      description: "The siege of Medina by 10,000 confederates - divine intervention",
      verses: "33:9-27",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ",
          meaning: "O believers, remember Allah's favor upon you",
          explanation: "Gratitude for divine deliverance from confederate armies",
          verseRef: "33:9"
        },
        {
          term: "إِذْ جَاءَتْكُمْ جُنُودٌ",
          meaning: "When armies came against you",
          explanation: "10,000 warriors: Quraysh, Ghatafan, Banu Asad, Banu Sulaym, Jewish tribes",
          verseRef: "33:9"
        },
        {
          term: "فَأَرْسَلْنَا عَلَيْهِمْ رِيحًا",
          meaning: "And We sent against them a wind",
          explanation: "Fierce east wind for days - overturned tents, extinguished fires",
          verseRef: "33:9"
        },
        {
          term: "وَجُنُودًا لَّمْ تَرَوْهَا",
          meaning: "And armies you did not see",
          explanation: "Angels sent to strike terror into enemy hearts",
          verseRef: "33:9"
        },
        {
          term: "إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ",
          meaning: "When they came from above you and below you",
          explanation: "Surrounded: Quraysh from south, Ghatafan from east, Banu Qurayza from within",
          verseRef: "33:10"
        },
        {
          term: "وَإِذْ زَاغَتِ الْأَبْصَارُ",
          meaning: "And when eyes shifted [in fear]",
          explanation: "Terror of being surrounded - eyes darting in panic",
          verseRef: "33:10"
        },
        {
          term: "وَبَلَغَتِ الْقُلُوبُ الْحَنَاجِرَ",
          meaning: "And hearts reached the throats",
          explanation: "Arabic idiom for extreme fear - hearts seemed to jump to throats",
          verseRef: "33:10"
        },
        {
          term: "وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا",
          meaning: "And you assumed about Allah [various] assumptions",
          explanation: "Some doubted Allah's promise - crisis of faith for weak believers",
          verseRef: "33:10"
        },
        {
          term: "هُنَالِكَ ابْتُلِيَ الْمُؤْمِنُونَ",
          meaning: "There the believers were tested",
          explanation: "Ultimate test of faith - distinguishing true from false",
          verseRef: "33:11"
        },
        {
          term: "وَزُلْزِلُوا زِلْزَالًا شَدِيدًا",
          meaning: "And shaken with a severe shaking",
          explanation: "Earthquake of the soul - foundations of faith tested",
          verseRef: "33:11"
        }
      ]
    },

    // 5. HYPOCRITES DURING THE SIEGE
    hypocritesExposed: {
      name: "Hypocrites Exposed",
      nameArabic: "انكشاف المنافقين",
      color: "#EF4444",
      icon: "Eye",
      description: "How the siege revealed the hypocrites' true nature",
      verses: "33:12-20",
      concepts: [
        {
          term: "وَإِذْ يَقُولُ الْمُنَافِقُونَ وَالَّذِينَ فِي قُلُوبِهِم مَّرَضٌ",
          meaning: "And when the hypocrites and those with disease in hearts said",
          explanation: "Crisis reveals character - hypocrites speak their truth",
          verseRef: "33:12"
        },
        {
          term: "مَّا وَعَدَنَا اللَّهُ وَرَسُولُهُ إِلَّا غُرُورًا",
          meaning: "Allah and His Messenger promised us nothing but delusion",
          explanation: "Accusing Allah and Prophet of false promises",
          verseRef: "33:12"
        },
        {
          term: "يَا أَهْلَ يَثْرِبَ لَا مُقَامَ لَكُمْ فَارْجِعُوا",
          meaning: "O people of Yathrib, there is no staying for you, so return",
          explanation: "Calling for desertion - using old name 'Yathrib' not 'Madinah'",
          verseRef: "33:13"
        },
        {
          term: "وَيَسْتَأْذِنُ فَرِيقٌ مِّنْهُمُ النَّبِيَّ يَقُولُونَ إِنَّ بُيُوتَنَا عَوْرَةٌ",
          meaning: "A group asked Prophet's permission saying 'Our homes are exposed'",
          explanation: "Excuse-making: 'Our houses are unprotected' - seeking to flee",
          verseRef: "33:13"
        },
        {
          term: "وَمَا هِيَ بِعَوْرَةٍ ۖ إِن يُرِيدُونَ إِلَّا فِرَارًا",
          meaning: "They were not exposed - they only wanted to flee",
          explanation: "Allah exposes the lie - they simply wanted to escape",
          verseRef: "33:13"
        },
        {
          term: "وَلَوْ دُخِلَتْ عَلَيْهِم مِّنْ أَقْطَارِهَا",
          meaning: "If [the enemy] had entered upon them from all sides",
          explanation: "Hypothetical test: would they fight or betray?",
          verseRef: "33:14"
        },
        {
          term: "ثُمَّ سُئِلُوا الْفِتْنَةَ لَآتَوْهَا",
          meaning: "Then asked for fitnah, they would have done it",
          explanation: "If asked to betray Islam, they would comply readily",
          verseRef: "33:14"
        },
        {
          term: "قُل لَّن يَنفَعَكُمُ الْفِرَارُ إِن فَرَرْتُم مِّنَ الْمَوْتِ",
          meaning: "Say: Fleeing will not benefit you if you flee from death",
          explanation: "Death is appointed - running won't change it",
          verseRef: "33:16"
        },
        {
          term: "يَحْسَبُونَ الْأَحْزَابَ لَمْ يَذْهَبُوا",
          meaning: "They think the confederates have not departed",
          explanation: "Even after victory, hypocrites lived in fear",
          verseRef: "33:20"
        },
        {
          term: "وَإِن يَأْتِ الْأَحْزَابُ يَوَدُّوا لَوْ أَنَّهُم بَادُونَ فِي الْأَعْرَابِ",
          meaning: "If confederates return, they wish they were in the desert",
          explanation: "Cowardice: preferring to be far away with Bedouins",
          verseRef: "33:20"
        },
        {
          term: "أَشِحَّةً عَلَيْكُمْ",
          meaning: "Grudging toward you",
          explanation: "Stingy with help, present only for appearance",
          verseRef: "33:19"
        }
      ]
    },

    // 6. BELIEVERS' STEADFASTNESS
    believersSteadfast: {
      name: "Believers' Steadfastness",
      nameArabic: "ثبات المؤمنين",
      color: "#10B981",
      icon: "Shield",
      description: "True believers' response to the crisis",
      verses: "33:21-24",
      concepts: [
        {
          term: "لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ",
          meaning: "There has certainly been for you in the Messenger of Allah an excellent example",
          explanation: "Prophet as role model (Uswatun Hasana) - central concept",
          verseRef: "33:21"
        },
        {
          term: "لِّمَن كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ",
          meaning: "For whoever hopes in Allah and the Last Day",
          explanation: "Condition: must believe in Allah and Hereafter to follow",
          verseRef: "33:21"
        },
        {
          term: "وَذَكَرَ اللَّهَ كَثِيرًا",
          meaning: "And remembers Allah often",
          explanation: "Dhikr-abundant life - characteristic of true followers",
          verseRef: "33:21"
        },
        {
          term: "وَلَمَّا رَأَى الْمُؤْمِنُونَ الْأَحْزَابَ",
          meaning: "When the believers saw the confederates",
          explanation: "True believers' response to overwhelming odds",
          verseRef: "33:22"
        },
        {
          term: "قَالُوا هَٰذَا مَا وَعَدَنَا اللَّهُ وَرَسُولُهُ",
          meaning: "They said: This is what Allah and His Messenger promised us",
          explanation: "Contrast to hypocrites: believers saw confirmation of prophecy",
          verseRef: "33:22"
        },
        {
          term: "وَصَدَقَ اللَّهُ وَرَسُولُهُ",
          meaning: "And Allah and His Messenger spoke the truth",
          explanation: "Affirmation of divine promise amidst difficulty",
          verseRef: "33:22"
        },
        {
          term: "وَمَا زَادَهُمْ إِلَّا إِيمَانًا وَتَسْلِيمًا",
          meaning: "And it increased them only in faith and submission",
          explanation: "Trial strengthened them - opposite of hypocrites",
          verseRef: "33:22"
        },
        {
          term: "رِجَالٌ صَدَقُوا مَا عَاهَدُوا اللَّهَ عَلَيْهِ",
          meaning: "Men who were true to what they pledged to Allah",
          explanation: "Fulfilling the covenant - like Anas ibn Nadr",
          verseRef: "33:23"
        },
        {
          term: "فَمِنْهُم مَّن قَضَىٰ نَحْبَهُ",
          meaning: "Among them those who fulfilled their vow [by dying]",
          explanation: "Martyrs who completed their promise",
          verseRef: "33:23"
        },
        {
          term: "وَمِنْهُم مَّن يَنتَظِرُ",
          meaning: "And among them those who await",
          explanation: "Still living, awaiting opportunity for martyrdom",
          verseRef: "33:23"
        },
        {
          term: "وَمَا بَدَّلُوا تَبْدِيلًا",
          meaning: "And they did not alter [their commitment]",
          explanation: "Consistency - no change despite pressure",
          verseRef: "33:23"
        }
      ]
    },

    // 7. DEFEAT OF THE CONFEDERATES
    confederatesDefeat: {
      name: "Defeat of the Confederates",
      nameArabic: "هزيمة الأحزاب",
      color: "#F59E0B",
      icon: "Star",
      description: "Divine intervention and defeat of enemy alliance",
      verses: "33:25-27",
      concepts: [
        {
          term: "وَرَدَّ اللَّهُ الَّذِينَ كَفَرُوا بِغَيْظِهِمْ",
          meaning: "And Allah repelled the disbelievers in their rage",
          explanation: "Sent back empty-handed despite massive army",
          verseRef: "33:25"
        },
        {
          term: "لَمْ يَنَالُوا خَيْرًا",
          meaning: "Having not obtained any good",
          explanation: "Complete failure - no victory, no plunder",
          verseRef: "33:25"
        },
        {
          term: "وَكَفَى اللَّهُ الْمُؤْمِنِينَ الْقِتَالَ",
          meaning: "And Allah was sufficient for the believers in battle",
          explanation: "No major fighting needed - Allah handled it",
          verseRef: "33:25"
        },
        {
          term: "وَكَانَ اللَّهُ قَوِيًّا عَزِيزًا",
          meaning: "And Allah is ever Strong, Mighty",
          explanation: "Divine power exceeds any human army",
          verseRef: "33:25"
        },
        {
          term: "وَأَنزَلَ الَّذِينَ ظَاهَرُوهُم مِّنْ أَهْلِ الْكِتَابِ مِن صَيَاصِيهِمْ",
          meaning: "And He brought down from their fortresses those of People of Book who supported them",
          explanation: "Banu Qurayza: Jews who betrayed the treaty during siege",
          verseRef: "33:26"
        },
        {
          term: "وَقَذَفَ فِي قُلُوبِهِمُ الرُّعْبَ",
          meaning: "And cast terror into their hearts",
          explanation: "Divine psychological warfare - hearts filled with dread",
          verseRef: "33:26"
        },
        {
          term: "فَرِيقًا تَقْتُلُونَ وَتَأْسِرُونَ فَرِيقًا",
          meaning: "A party you killed and a party you took captive",
          explanation: "Judgment on Banu Qurayza for treachery during siege",
          verseRef: "33:26"
        },
        {
          term: "وَأَوْرَثَكُمْ أَرْضَهُمْ وَدِيَارَهُمْ وَأَمْوَالَهُمْ",
          meaning: "And He made you inherit their land, homes, and wealth",
          explanation: "Transfer of Banu Qurayza's property to Muslims",
          verseRef: "33:27"
        },
        {
          term: "وَأَرْضًا لَّمْ تَطَئُوهَا",
          meaning: "And land you have not yet trodden",
          explanation: "Promise of future conquests - Khaybar and beyond",
          verseRef: "33:27"
        }
      ]
    },

    // 8. WIVES OF THE PROPHET - CHOICE
    wivesChoice: {
      name: "The Wives' Choice",
      nameArabic: "تخيير أزواج النبي",
      color: "#8B5CF6",
      icon: "Scale",
      description: "Prophet's wives given choice between worldly life and Allah's path",
      verses: "33:28-34",
      concepts: [
        {
          term: "يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ",
          meaning: "O Prophet, say to your wives",
          explanation: "Addressing Prophet's domestic life - unique guidance",
          verseRef: "33:28"
        },
        {
          term: "إِن كُنتُنَّ تُرِدْنَ الْحَيَاةَ الدُّنْيَا وَزِينَتَهَا",
          meaning: "If you desire the worldly life and its adornment",
          explanation: "First option: choose material comfort",
          verseRef: "33:28"
        },
        {
          term: "فَتَعَالَيْنَ أُمَتِّعْكُنَّ وَأُسَرِّحْكُنَّ سَرَاحًا جَمِيلًا",
          meaning: "Then come, I will provide for you and release you graciously",
          explanation: "Honorable divorce with provision if they choose dunya",
          verseRef: "33:28"
        },
        {
          term: "وَإِن كُنتُنَّ تُرِدْنَ اللَّهَ وَرَسُولَهُ وَالدَّارَ الْآخِرَةَ",
          meaning: "But if you desire Allah, His Messenger, and the Hereafter",
          explanation: "Second option: choose eternal reward",
          verseRef: "33:29"
        },
        {
          term: "فَإِنَّ اللَّهَ أَعَدَّ لِلْمُحْسِنَاتِ مِنكُنَّ أَجْرًا عَظِيمًا",
          meaning: "Then Allah has prepared for the doers of good among you great reward",
          explanation: "Promise of immense reward for choosing akhirah",
          verseRef: "33:29"
        },
        {
          term: "يَا نِسَاءَ النَّبِيِّ مَن يَأْتِ مِنكُنَّ بِفَاحِشَةٍ مُّبَيِّنَةٍ",
          meaning: "O wives of the Prophet, whoever commits clear immorality",
          explanation: "Higher standard: double punishment for wrongdoing",
          verseRef: "33:30"
        },
        {
          term: "يُضَاعَفْ لَهَا الْعَذَابُ ضِعْفَيْنِ",
          meaning: "Will have the punishment doubled for her",
          explanation: "Greater privilege = greater responsibility",
          verseRef: "33:30"
        },
        {
          term: "وَمَن يَقْنُتْ مِنكُنَّ لِلَّهِ وَرَسُولِهِ",
          meaning: "And whoever is devoutly obedient to Allah and His Messenger",
          explanation: "Obedience rewarded double - balance of accountability",
          verseRef: "33:31"
        },
        {
          term: "نُّؤْتِهَا أَجْرَهَا مَرَّتَيْنِ",
          meaning: "We will give her reward twice",
          explanation: "Double reward for righteousness",
          verseRef: "33:31"
        },
        {
          term: "وَأَعْتَدْنَا لَهَا رِزْقًا كَرِيمًا",
          meaning: "And We have prepared for her noble provision",
          explanation: "Special provision in Paradise",
          verseRef: "33:31"
        }
      ]
    },

    // 9. CONDUCT OF PROPHET'S WIVES
    wivesConduct: {
      name: "Conduct of Prophet's Wives",
      nameArabic: "آداب نساء النبي",
      color: "#EC4899",
      icon: "Heart",
      description: "Special behavioral guidelines for Prophet's household",
      verses: "33:32-34",
      concepts: [
        {
          term: "يَا نِسَاءَ النَّبِيِّ لَسْتُنَّ كَأَحَدٍ مِّنَ النِّسَاءِ",
          meaning: "O wives of the Prophet, you are not like other women",
          explanation: "Unique status = unique responsibilities",
          verseRef: "33:32"
        },
        {
          term: "إِنِ اتَّقَيْتُنَّ",
          meaning: "If you fear Allah",
          explanation: "Condition: taqwa unlocks special status",
          verseRef: "33:32"
        },
        {
          term: "فَلَا تَخْضَعْنَ بِالْقَوْلِ",
          meaning: "Then do not be soft in speech",
          explanation: "Voice modulation: avoid alluring tone",
          verseRef: "33:32"
        },
        {
          term: "فَيَطْمَعَ الَّذِي فِي قَلْبِهِ مَرَضٌ",
          meaning: "Lest he in whose heart is disease should covet",
          explanation: "Protection from those with impure intentions",
          verseRef: "33:32"
        },
        {
          term: "وَقُلْنَ قَوْلًا مَّعْرُوفًا",
          meaning: "And speak with appropriate speech",
          explanation: "Proper, dignified speech - not harsh, not soft",
          verseRef: "33:32"
        },
        {
          term: "وَقَرْنَ فِي بُيُوتِكُنَّ",
          meaning: "And remain in your homes",
          explanation: "Staying home as primary base - not absolute seclusion",
          verseRef: "33:33"
        },
        {
          term: "وَلَا تَبَرَّجْنَ تَبَرُّجَ الْجَاهِلِيَّةِ الْأُولَىٰ",
          meaning: "And do not display yourselves as in the former days of ignorance",
          explanation: "Rejecting pre-Islamic immodest display",
          verseRef: "33:33"
        },
        {
          term: "وَأَقِمْنَ الصَّلَاةَ وَآتِينَ الزَّكَاةَ",
          meaning: "And establish prayer and give zakah",
          explanation: "Fundamental worship obligations",
          verseRef: "33:33"
        },
        {
          term: "وَأَطِعْنَ اللَّهَ وَرَسُولَهُ",
          meaning: "And obey Allah and His Messenger",
          explanation: "Dual obedience - divine and prophetic",
          verseRef: "33:33"
        },
        {
          term: "إِنَّمَا يُرِيدُ اللَّهُ لِيُذْهِبَ عَنكُمُ الرِّجْسَ أَهْلَ الْبَيْتِ",
          meaning: "Allah only intends to remove impurity from you, O People of the House",
          explanation: "Ahl al-Bayt - Prophet's household purified",
          verseRef: "33:33"
        },
        {
          term: "وَيُطَهِّرَكُمْ تَطْهِيرًا",
          meaning: "And purify you completely",
          explanation: "Divine purification - spiritual cleansing",
          verseRef: "33:33"
        },
        {
          term: "وَاذْكُرْنَ مَا يُتْلَىٰ فِي بُيُوتِكُنَّ مِنْ آيَاتِ اللَّهِ وَالْحِكْمَةِ",
          meaning: "And remember what is recited in your homes of Allah's verses and wisdom",
          explanation: "Preserve and transmit Quran and Sunnah - teaching role",
          verseRef: "33:34"
        }
      ]
    },

    // 10. QUALITIES OF MUSLIM MEN AND WOMEN
    muslimQualities: {
      name: "Ten Qualities of Muslim Men and Women",
      nameArabic: "عشر صفات للمسلمين والمسلمات",
      color: "#10B981",
      icon: "Users",
      description: "Comprehensive list of qualities for both genders",
      verses: "33:35",
      concepts: [
        {
          term: "إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ",
          meaning: "Indeed, the Muslim men and Muslim women",
          explanation: "Gender equality in spiritual qualities begins",
          verseRef: "33:35"
        },
        {
          term: "وَالْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
          meaning: "The believing men and believing women",
          explanation: "Iman - inner conviction beyond outward submission",
          verseRef: "33:35"
        },
        {
          term: "وَالْقَانِتِينَ وَالْقَانِتَاتِ",
          meaning: "The devoutly obedient men and women",
          explanation: "Qunut - devoted obedience and humility",
          verseRef: "33:35"
        },
        {
          term: "وَالصَّادِقِينَ وَالصَّادِقَاتِ",
          meaning: "The truthful men and women",
          explanation: "Sidq - honesty in word and deed",
          verseRef: "33:35"
        },
        {
          term: "وَالصَّابِرِينَ وَالصَّابِرَاتِ",
          meaning: "The patient men and women",
          explanation: "Sabr - endurance in difficulty",
          verseRef: "33:35"
        },
        {
          term: "وَالْخَاشِعِينَ وَالْخَاشِعَاتِ",
          meaning: "The humble men and women",
          explanation: "Khushu - reverence and humility before Allah",
          verseRef: "33:35"
        },
        {
          term: "وَالْمُتَصَدِّقِينَ وَالْمُتَصَدِّقَاتِ",
          meaning: "The charitable men and women",
          explanation: "Sadaqah - giving in Allah's cause",
          verseRef: "33:35"
        },
        {
          term: "وَالصَّائِمِينَ وَالصَّائِمَاتِ",
          meaning: "The fasting men and women",
          explanation: "Siyam - self-discipline through fasting",
          verseRef: "33:35"
        },
        {
          term: "وَالْحَافِظِينَ فُرُوجَهُمْ وَالْحَافِظَاتِ",
          meaning: "The men and women who guard their chastity",
          explanation: "Hifz al-furuj - protecting private parts, chastity",
          verseRef: "33:35"
        },
        {
          term: "وَالذَّاكِرِينَ اللَّهَ كَثِيرًا وَالذَّاكِرَاتِ",
          meaning: "The men and women who remember Allah often",
          explanation: "Dhikr kathir - abundant remembrance of Allah",
          verseRef: "33:35"
        },
        {
          term: "أَعَدَّ اللَّهُ لَهُم مَّغْفِرَةً وَأَجْرًا عَظِيمًا",
          meaning: "Allah has prepared for them forgiveness and great reward",
          explanation: "Promise for all who embody these qualities",
          verseRef: "33:35"
        }
      ]
    },

    // 11. ZAYD AND ZAYNAB - ADOPTION RULING APPLIED
    zaydZaynab: {
      name: "Zayd and Zaynab - Applying the Adoption Ruling",
      nameArabic: "زيد وزينب - تطبيق حكم التبني",
      color: "#3B82F6",
      icon: "Scale",
      description: "The marriage of Prophet to Zaynab bint Jahsh after her divorce from Zayd",
      verses: "33:36-40",
      concepts: [
        {
          term: "وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا",
          meaning: "It is not for a believer, man or woman, when Allah and His Messenger decide a matter",
          explanation: "No choice when divine command is clear",
          verseRef: "33:36"
        },
        {
          term: "أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ",
          meaning: "To have any choice in their matter",
          explanation: "Submission to divine decree",
          verseRef: "33:36"
        },
        {
          term: "وَإِذْ تَقُولُ لِلَّذِي أَنْعَمَ اللَّهُ عَلَيْهِ وَأَنْعَمْتَ عَلَيْهِ",
          meaning: "And when you said to the one Allah blessed and you blessed",
          explanation: "Zayd - blessed by Allah (Islam) and Prophet (adoption, freedom)",
          verseRef: "33:37"
        },
        {
          term: "أَمْسِكْ عَلَيْكَ زَوْجَكَ وَاتَّقِ اللَّهَ",
          meaning: "Keep your wife and fear Allah",
          explanation: "Prophet advised Zayd to remain married to Zaynab",
          verseRef: "33:37"
        },
        {
          term: "وَتُخْفِي فِي نَفْسِكَ مَا اللَّهُ مُبْدِيهِ",
          meaning: "And you concealed in yourself what Allah would reveal",
          explanation: "Prophet knew Allah would command him to marry Zaynab but hesitated",
          verseRef: "33:37"
        },
        {
          term: "وَتَخْشَى النَّاسَ وَاللَّهُ أَحَقُّ أَن تَخْشَاهُ",
          meaning: "And you feared people while Allah has more right to be feared",
          explanation: "Gentle rebuke: fear of social reaction vs. fear of Allah",
          verseRef: "33:37"
        },
        {
          term: "فَلَمَّا قَضَىٰ زَيْدٌ مِّنْهَا وَطَرًا زَوَّجْنَاكَهَا",
          meaning: "When Zayd ended his relationship with her, We married her to you",
          explanation: "Divine command: Prophet married Zaynab by Allah's decree",
          verseRef: "33:37"
        },
        {
          term: "لِكَيْ لَا يَكُونَ عَلَى الْمُؤْمِنِينَ حَرَجٌ فِي أَزْوَاجِ أَدْعِيَائِهِمْ",
          meaning: "So there would be no discomfort for believers regarding wives of their adopted sons",
          explanation: "Wisdom: abolishing taboo of marrying ex-wives of adopted sons",
          verseRef: "33:37"
        },
        {
          term: "إِذَا قَضَوْا مِنْهُنَّ وَطَرًا",
          meaning: "When they have ended their relationship with them",
          explanation: "After divorce is finalized",
          verseRef: "33:37"
        },
        {
          term: "وَكَانَ أَمْرُ اللَّهِ مَفْعُولًا",
          meaning: "And Allah's command is ever fulfilled",
          explanation: "Divine decree cannot be avoided",
          verseRef: "33:37"
        },
        {
          term: "مَّا كَانَ عَلَى النَّبِيِّ مِنْ حَرَجٍ فِيمَا فَرَضَ اللَّهُ لَهُ",
          meaning: "There is no blame upon the Prophet in what Allah has imposed on him",
          explanation: "Prophet is blameless - he followed Allah's command",
          verseRef: "33:38"
        },
        {
          term: "سُنَّةَ اللَّهِ فِي الَّذِينَ خَلَوْا مِن قَبْلُ",
          meaning: "This is Allah's way with those who passed before",
          explanation: "Previous prophets also married multiple wives",
          verseRef: "33:38"
        },
        {
          term: "الَّذِينَ يُبَلِّغُونَ رِسَالَاتِ اللَّهِ وَيَخْشَوْنَهُ",
          meaning: "Those who convey Allah's messages and fear Him",
          explanation: "Prophets' mission: deliver message, fear only Allah",
          verseRef: "33:39"
        },
        {
          term: "مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ",
          meaning: "Muhammad is not the father of any of your men",
          explanation: "Clarification: Zayd is not his biological son",
          verseRef: "33:40"
        },
        {
          term: "وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ",
          meaning: "But he is the Messenger of Allah and Seal of the Prophets",
          explanation: "Khatam an-Nabiyyin - final prophet, no prophet after him",
          verseRef: "33:40"
        }
      ]
    },

    // 12. REMEMBRANCE OF ALLAH
    dhikrAllah: {
      name: "Remembrance of Allah",
      nameArabic: "ذكر الله",
      color: "#F59E0B",
      icon: "Heart",
      description: "Commands regarding abundant remembrance and glorification",
      verses: "33:41-44",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا",
          meaning: "O believers, remember Allah with much remembrance",
          explanation: "Command for abundant dhikr - not occasional",
          verseRef: "33:41"
        },
        {
          term: "وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا",
          meaning: "And glorify Him morning and evening",
          explanation: "Tasbih at dawn and dusk - bookending the day",
          verseRef: "33:42"
        },
        {
          term: "هُوَ الَّذِي يُصَلِّي عَلَيْكُمْ وَمَلَائِكَتُهُ",
          meaning: "He is the One who sends blessings upon you, and His angels",
          explanation: "Allah and angels bless believers - reciprocal blessing",
          verseRef: "33:43"
        },
        {
          term: "لِيُخْرِجَكُم مِّنَ الظُّلُمَاتِ إِلَى النُّورِ",
          meaning: "To bring you from darkness into light",
          explanation: "Purpose: guidance from ignorance to knowledge",
          verseRef: "33:43"
        },
        {
          term: "وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا",
          meaning: "And He is ever Merciful to the believers",
          explanation: "Divine mercy specifically for believers",
          verseRef: "33:43"
        },
        {
          term: "تَحِيَّتُهُمْ يَوْمَ يَلْقَوْنَهُ سَلَامٌ",
          meaning: "Their greeting the Day they meet Him will be 'Peace'",
          explanation: "Salam - greeting in Paradise from Allah",
          verseRef: "33:44"
        },
        {
          term: "وَأَعَدَّ لَهُمْ أَجْرًا كَرِيمًا",
          meaning: "And He has prepared for them noble reward",
          explanation: "Generous reward awaiting believers",
          verseRef: "33:44"
        }
      ]
    },

    // 13. PROPHET'S ROLES
    prophetRoles: {
      name: "Roles of the Prophet",
      nameArabic: "أدوار النبي",
      color: "#F59E0B",
      icon: "Star",
      description: "Multiple roles of Prophet Muhammad",
      verses: "33:45-48",
      concepts: [
        {
          term: "يَا أَيُّهَا النَّبِيُّ إِنَّا أَرْسَلْنَاكَ شَاهِدًا",
          meaning: "O Prophet, We have sent you as a witness",
          explanation: "Shahid - witness over his ummah",
          verseRef: "33:45"
        },
        {
          term: "وَمُبَشِّرًا",
          meaning: "And a bringer of good tidings",
          explanation: "Mubashshir - announcing glad news of Paradise",
          verseRef: "33:45"
        },
        {
          term: "وَنَذِيرًا",
          meaning: "And a warner",
          explanation: "Nadhir - warning against Hell",
          verseRef: "33:45"
        },
        {
          term: "وَدَاعِيًا إِلَى اللَّهِ بِإِذْنِهِ",
          meaning: "And one who invites to Allah by His permission",
          explanation: "Dai - caller to Allah's path",
          verseRef: "33:46"
        },
        {
          term: "وَسِرَاجًا مُّنِيرًا",
          meaning: "And an illuminating lamp",
          explanation: "Siraj Munir - light guiding humanity",
          verseRef: "33:46"
        },
        {
          term: "وَبَشِّرِ الْمُؤْمِنِينَ بِأَنَّ لَهُم مِّنَ اللَّهِ فَضْلًا كَبِيرًا",
          meaning: "And give good tidings to believers that they have great bounty from Allah",
          explanation: "Glad tidings of immense divine favor",
          verseRef: "33:47"
        },
        {
          term: "وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ",
          meaning: "And do not obey disbelievers and hypocrites",
          explanation: "Repeated warning from verse 1 - emphasis",
          verseRef: "33:48"
        },
        {
          term: "وَدَعْ أَذَاهُمْ",
          meaning: "And disregard their annoyance",
          explanation: "Ignore their harm - focus on mission",
          verseRef: "33:48"
        },
        {
          term: "وَتَوَكَّلْ عَلَى اللَّهِ",
          meaning: "And rely upon Allah",
          explanation: "Tawakkul - core response to opposition",
          verseRef: "33:48"
        }
      ]
    },

    // 14. MARRIAGE REGULATIONS FOR PROPHET
    prophetMarriages: {
      name: "Marriage Regulations for the Prophet",
      nameArabic: "أحكام زواج النبي",
      color: "#8B5CF6",
      icon: "Book",
      description: "Special marriage rules applicable only to Prophet Muhammad",
      verses: "33:49-52",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نَكَحْتُمُ الْمُؤْمِنَاتِ ثُمَّ طَلَّقْتُمُوهُنَّ",
          meaning: "O believers, when you marry believing women then divorce them",
          explanation: "General rule: no iddah before consummation",
          verseRef: "33:49"
        },
        {
          term: "مِن قَبْلِ أَن تَمَسُّوهُنَّ فَمَا لَكُمْ عَلَيْهِنَّ مِنْ عِدَّةٍ",
          meaning: "Before touching them, then there is no waiting period",
          explanation: "No iddah if marriage not consummated",
          verseRef: "33:49"
        },
        {
          term: "فَمَتِّعُوهُنَّ وَسَرِّحُوهُنَّ سَرَاحًا جَمِيلًا",
          meaning: "So provide for them and release them graciously",
          explanation: "Mut'ah (compensation) and beautiful release",
          verseRef: "33:49"
        },
        {
          term: "يَا أَيُّهَا النَّبِيُّ إِنَّا أَحْلَلْنَا لَكَ أَزْوَاجَكَ",
          meaning: "O Prophet, We have made lawful to you your wives",
          explanation: "Categories of women lawful for Prophet",
          verseRef: "33:50"
        },
        {
          term: "اللَّاتِي آتَيْتَ أُجُورَهُنَّ",
          meaning: "To whom you have given their mahr",
          explanation: "Current wives with mahr paid",
          verseRef: "33:50"
        },
        {
          term: "وَمَا مَلَكَتْ يَمِينُكَ مِمَّا أَفَاءَ اللَّهُ عَلَيْكَ",
          meaning: "And those your right hand possesses from what Allah returned to you",
          explanation: "Captives from battles",
          verseRef: "33:50"
        },
        {
          term: "وَبَنَاتِ عَمِّكَ وَبَنَاتِ عَمَّاتِكَ وَبَنَاتِ خَالِكَ وَبَنَاتِ خَالَاتِكَ",
          meaning: "And daughters of your paternal uncles/aunts and maternal uncles/aunts",
          explanation: "Relatives who emigrated with him",
          verseRef: "33:50"
        },
        {
          term: "وَامْرَأَةً مُّؤْمِنَةً إِن وَهَبَتْ نَفْسَهَا لِلنَّبِيِّ",
          meaning: "And a believing woman who offers herself to the Prophet",
          explanation: "Unique: women could offer themselves without mahr",
          verseRef: "33:50"
        },
        {
          term: "خَالِصَةً لَّكَ مِن دُونِ الْمُؤْمِنِينَ",
          meaning: "Exclusively for you, not for the believers",
          explanation: "This ruling was specific to Prophet only",
          verseRef: "33:50"
        },
        {
          term: "قَدْ عَلِمْنَا مَا فَرَضْنَا عَلَيْهِمْ فِي أَزْوَاجِهِمْ",
          meaning: "We know what We have imposed on them regarding their wives",
          explanation: "Regular believers have different rules (max 4 wives)",
          verseRef: "33:50"
        },
        {
          term: "لِكَيْلَا يَكُونَ عَلَيْكَ حَرَجٌ",
          meaning: "So that there will be no discomfort for you",
          explanation: "Ease for Prophet in his unique situation",
          verseRef: "33:50"
        },
        {
          term: "تُرْجِي مَن تَشَاءُ مِنْهُنَّ وَتُؤْوِي إِلَيْكَ مَن تَشَاءُ",
          meaning: "You may postpone whom you will and receive whom you will",
          explanation: "Flexibility in rotating among wives",
          verseRef: "33:51"
        },
        {
          term: "وَمَنِ ابْتَغَيْتَ مِمَّنْ عَزَلْتَ فَلَا جُنَاحَ عَلَيْكَ",
          meaning: "And whom you desire of those you set aside - no blame",
          explanation: "No strict rotation requirement",
          verseRef: "33:51"
        },
        {
          term: "ذَٰلِكَ أَدْنَىٰ أَن تَقَرَّ أَعْيُنُهُنَّ",
          meaning: "That is more likely they will be content",
          explanation: "Wisdom: flexibility brings satisfaction",
          verseRef: "33:51"
        },
        {
          term: "لَّا يَحِلُّ لَكَ النِّسَاءُ مِن بَعْدُ",
          meaning: "Not lawful for you are women after this",
          explanation: "No additional wives beyond current ones",
          verseRef: "33:52"
        },
        {
          term: "وَلَا أَن تَبَدَّلَ بِهِنَّ مِنْ أَزْوَاجٍ",
          meaning: "Nor to exchange them for other wives",
          explanation: "Cannot divorce to marry others",
          verseRef: "33:52"
        },
        {
          term: "وَلَوْ أَعْجَبَكَ حُسْنُهُنَّ",
          meaning: "Even if their beauty pleases you",
          explanation: "Restriction regardless of attraction",
          verseRef: "33:52"
        }
      ]
    },

    // 15. ETIQUETTE IN PROPHET'S HOUSE
    householdEtiquette: {
      name: "Etiquette in Prophet's Household",
      nameArabic: "آداب بيت النبي",
      color: "#10B981",
      icon: "Users",
      description: "Rules for visiting Prophet's home",
      verses: "33:53",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَدْخُلُوا بُيُوتَ النَّبِيِّ",
          meaning: "O believers, do not enter the houses of the Prophet",
          explanation: "Restrictions on entering Prophet's home",
          verseRef: "33:53"
        },
        {
          term: "إِلَّا أَن يُؤْذَنَ لَكُمْ إِلَىٰ طَعَامٍ",
          meaning: "Unless permitted for a meal",
          explanation: "Only enter when invited for food",
          verseRef: "33:53"
        },
        {
          term: "غَيْرَ نَاظِرِينَ إِنَاهُ",
          meaning: "Without waiting for its preparation",
          explanation: "Don't arrive early and wait around",
          verseRef: "33:53"
        },
        {
          term: "وَلَٰكِنْ إِذَا دُعِيتُمْ فَادْخُلُوا",
          meaning: "But when invited, then enter",
          explanation: "Enter only after invitation",
          verseRef: "33:53"
        },
        {
          term: "فَإِذَا طَعِمْتُمْ فَانتَشِرُوا",
          meaning: "When you have eaten, then disperse",
          explanation: "Don't linger after eating",
          verseRef: "33:53"
        },
        {
          term: "وَلَا مُسْتَأْنِسِينَ لِحَدِيثٍ",
          meaning: "Without seeking to remain for conversation",
          explanation: "Don't stay to chat - respect Prophet's time",
          verseRef: "33:53"
        },
        {
          term: "إِنَّ ذَٰلِكُمْ كَانَ يُؤْذِي النَّبِيَّ فَيَسْتَحْيِي مِنكُمْ",
          meaning: "Indeed, that was troubling the Prophet, and he is shy of you",
          explanation: "Prophet too polite to ask guests to leave",
          verseRef: "33:53"
        },
        {
          term: "وَاللَّهُ لَا يَسْتَحْيِي مِنَ الْحَقِّ",
          meaning: "But Allah is not shy of the truth",
          explanation: "Allah states what Prophet's modesty prevents",
          verseRef: "33:53"
        },
        {
          term: "وَإِذَا سَأَلْتُمُوهُنَّ مَتَاعًا فَاسْأَلُوهُنَّ مِن وَرَاءِ حِجَابٍ",
          meaning: "And when you ask his wives for something, ask from behind a barrier",
          explanation: "Hijab verse - physical barrier with Prophet's wives",
          verseRef: "33:53"
        },
        {
          term: "ذَٰلِكُمْ أَطْهَرُ لِقُلُوبِكُمْ وَقُلُوبِهِنَّ",
          meaning: "That is purer for your hearts and their hearts",
          explanation: "Purpose: spiritual purity for both parties",
          verseRef: "33:53"
        },
        {
          term: "وَمَا كَانَ لَكُمْ أَن تُؤْذُوا رَسُولَ اللَّهِ",
          meaning: "And it is not for you to harm the Messenger of Allah",
          explanation: "Prohibition of causing any distress to Prophet",
          verseRef: "33:53"
        },
        {
          term: "وَلَا أَن تَنكِحُوا أَزْوَاجَهُ مِن بَعْدِهِ أَبَدًا",
          meaning: "Nor to marry his wives after him ever",
          explanation: "Eternal prohibition - they are mothers of believers",
          verseRef: "33:53"
        },
        {
          term: "إِنَّ ذَٰلِكُمْ كَانَ عِندَ اللَّهِ عَظِيمًا",
          meaning: "Indeed, that would be a grave offense with Allah",
          explanation: "Marrying Prophet's widow = enormous sin",
          verseRef: "33:53"
        }
      ]
    },

    // 16. DIVINE KNOWLEDGE
    divineKnowledge: {
      name: "Divine Knowledge",
      nameArabic: "علم الله",
      color: "#F59E0B",
      icon: "Eye",
      concepts: [
        {
          term: "إِن تُبْدُوا شَيْئًا أَوْ تُخْفُوهُ",
          meaning: "Whether you reveal something or conceal it",
          explanation: "Open or hidden - Allah knows all",
          verseRef: "33:54"
        },
        {
          term: "فَإِنَّ اللَّهَ كَانَ بِكُلِّ شَيْءٍ عَلِيمًا",
          meaning: "Indeed Allah is ever Knowing of all things",
          explanation: "Complete divine knowledge",
          verseRef: "33:54"
        }
      ]
    },

    // 17. MAHRAM RELATIVES
    mahramRelatives: {
      name: "Mahram Relatives for Prophet's Wives",
      nameArabic: "محارم أزواج النبي",
      color: "#8B5CF6",
      icon: "Users",
      verses: "33:55",
      concepts: [
        {
          term: "لَّا جُنَاحَ عَلَيْهِنَّ فِي آبَائِهِنَّ",
          meaning: "No blame on them regarding their fathers",
          explanation: "Fathers can see them without hijab",
          verseRef: "33:55"
        },
        {
          term: "وَلَا أَبْنَائِهِنَّ وَلَا إِخْوَانِهِنَّ",
          meaning: "Nor their sons nor their brothers",
          explanation: "Sons and brothers are mahram",
          verseRef: "33:55"
        },
        {
          term: "وَلَا أَبْنَاءِ إِخْوَانِهِنَّ وَلَا أَبْنَاءِ أَخَوَاتِهِنَّ",
          meaning: "Nor their brothers' sons nor sisters' sons",
          explanation: "Nephews are mahram",
          verseRef: "33:55"
        },
        {
          term: "وَلَا نِسَائِهِنَّ وَلَا مَا مَلَكَتْ أَيْمَانُهُنَّ",
          meaning: "Nor their women nor what their right hands possess",
          explanation: "Muslim women and servants",
          verseRef: "33:55"
        },
        {
          term: "وَاتَّقِينَ اللَّهَ",
          meaning: "And fear Allah",
          explanation: "Command to maintain taqwa",
          verseRef: "33:55"
        },
        {
          term: "إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ شَهِيدًا",
          meaning: "Indeed Allah is witness over all things",
          explanation: "Divine observation of all actions",
          verseRef: "33:55"
        }
      ]
    },

    // 18. SALAWAT - BLESSINGS ON THE PROPHET
    salawat: {
      name: "Blessings Upon the Prophet (Salawat)",
      nameArabic: "الصلاة على النبي",
      color: "#F59E0B",
      icon: "Sparkles",
      description: "Command for Allah, angels, and believers to send blessings",
      verses: "33:56",
      concepts: [
        {
          term: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ",
          meaning: "Indeed Allah and His angels send blessings on the Prophet",
          explanation: "Divine and angelic salawat - continuous blessing",
          verseRef: "33:56"
        },
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ",
          meaning: "O believers, send blessings upon him",
          explanation: "Command to believers - join Allah and angels",
          verseRef: "33:56"
        },
        {
          term: "وَسَلِّمُوا تَسْلِيمًا",
          meaning: "And greet him with peace",
          explanation: "Full formula: Allahumma salli wa sallim",
          verseRef: "33:56"
        }
      ]
    },

    // 19. HARMING ALLAH AND HIS MESSENGER
    harmingProphet: {
      name: "Those Who Harm Allah and His Messenger",
      nameArabic: "إيذاء الله ورسوله",
      color: "#EF4444",
      icon: "AlertTriangle",
      verses: "33:57-58",
      concepts: [
        {
          term: "إِنَّ الَّذِينَ يُؤْذُونَ اللَّهَ وَرَسُولَهُ",
          meaning: "Indeed, those who abuse Allah and His Messenger",
          explanation: "Abuse through disbelief, mockery, slander",
          verseRef: "33:57"
        },
        {
          term: "لَعَنَهُمُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ",
          meaning: "Allah has cursed them in this world and the Hereafter",
          explanation: "Double curse - expelled from mercy",
          verseRef: "33:57"
        },
        {
          term: "وَأَعَدَّ لَهُمْ عَذَابًا مُّهِينًا",
          meaning: "And prepared for them humiliating punishment",
          explanation: "Punishment befitting their arrogance",
          verseRef: "33:57"
        },
        {
          term: "وَالَّذِينَ يُؤْذُونَ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ بِغَيْرِ مَا اكْتَسَبُوا",
          meaning: "Those who harm believing men and women for what they have not earned",
          explanation: "Wrongfully accusing innocent believers",
          verseRef: "33:58"
        },
        {
          term: "فَقَدِ احْتَمَلُوا بُهْتَانًا وَإِثْمًا مُّبِينًا",
          meaning: "Have taken upon themselves slander and clear sin",
          explanation: "Burden of false accusation",
          verseRef: "33:58"
        }
      ]
    },

    // 20. HIJAB VERSE - JILBAB
    hijabJilbab: {
      name: "The Jilbab Verse",
      nameArabic: "آية الجلباب",
      color: "#EC4899",
      icon: "Shield",
      description: "Command for believing women to wear outer garments",
      verses: "33:59",
      concepts: [
        {
          term: "يَا أَيُّهَا النَّبِيُّ قُل لِّأَزْوَاجِكَ وَبَنَاتِكَ وَنِسَاءِ الْمُؤْمِنِينَ",
          meaning: "O Prophet, tell your wives, daughters, and believing women",
          explanation: "Universal address: all Muslim women",
          verseRef: "33:59"
        },
        {
          term: "يُدْنِينَ عَلَيْهِنَّ مِن جَلَابِيبِهِنَّ",
          meaning: "To draw over themselves their outer garments",
          explanation: "Jilbab - loose outer cloak covering body",
          verseRef: "33:59"
        },
        {
          term: "ذَٰلِكَ أَدْنَىٰ أَن يُعْرَفْنَ",
          meaning: "That is more suitable that they will be recognized",
          explanation: "Identified as free Muslim women",
          verseRef: "33:59"
        },
        {
          term: "فَلَا يُؤْذَيْنَ",
          meaning: "And not be abused",
          explanation: "Protection from harassment",
          verseRef: "33:59"
        },
        {
          term: "وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
          meaning: "And Allah is ever Forgiving, Merciful",
          explanation: "Forgiveness for past and gradual implementation",
          verseRef: "33:59"
        }
      ]
    },

    // 21. WARNING TO HYPOCRITES
    warningHypocrites: {
      name: "Warning to Hypocrites and Rumormongers",
      nameArabic: "تهديد المنافقين والمرجفين",
      color: "#EF4444",
      icon: "AlertTriangle",
      verses: "33:60-62",
      concepts: [
        {
          term: "لَّئِن لَّمْ يَنتَهِ الْمُنَافِقُونَ",
          meaning: "If the hypocrites do not cease",
          explanation: "Final warning to hypocrites",
          verseRef: "33:60"
        },
        {
          term: "وَالَّذِينَ فِي قُلُوبِهِم مَّرَضٌ",
          meaning: "And those in whose hearts is disease",
          explanation: "Those with spiritual sickness",
          verseRef: "33:60"
        },
        {
          term: "وَالْمُرْجِفُونَ فِي الْمَدِينَةِ",
          meaning: "And those who spread rumors in Madinah",
          explanation: "Murjifun - those spreading false news, creating panic",
          verseRef: "33:60"
        },
        {
          term: "لَنُغْرِيَنَّكَ بِهِمْ",
          meaning: "We will surely incite you against them",
          explanation: "Prophet will be commanded to act against them",
          verseRef: "33:60"
        },
        {
          term: "ثُمَّ لَا يُجَاوِرُونَكَ فِيهَا إِلَّا قَلِيلًا",
          meaning: "Then they will not remain your neighbors except briefly",
          explanation: "Expulsion from Madinah",
          verseRef: "33:60"
        },
        {
          term: "مَّلْعُونِينَ ۖ أَيْنَمَا ثُقِفُوا أُخِذُوا وَقُتِّلُوا تَقْتِيلًا",
          meaning: "Accursed wherever found, seized and killed thoroughly",
          explanation: "Severe punishment for those who persist",
          verseRef: "33:61"
        },
        {
          term: "سُنَّةَ اللَّهِ فِي الَّذِينَ خَلَوْا مِن قَبْلُ",
          meaning: "That was Allah's way with those who passed before",
          explanation: "Historical pattern - hypocrites always dealt with",
          verseRef: "33:62"
        },
        {
          term: "وَلَن تَجِدَ لِسُنَّةِ اللَّهِ تَبْدِيلًا",
          meaning: "And you will not find any change in Allah's way",
          explanation: "Divine pattern is constant",
          verseRef: "33:62"
        }
      ]
    },

    // 22. THE HOUR
    theHour: {
      name: "Knowledge of the Hour",
      nameArabic: "علم الساعة",
      color: "#F59E0B",
      icon: "Eye",
      verses: "33:63",
      concepts: [
        {
          term: "يَسْأَلُكَ النَّاسُ عَنِ السَّاعَةِ",
          meaning: "People ask you about the Hour",
          explanation: "Common question about Day of Judgment timing",
          verseRef: "33:63"
        },
        {
          term: "قُلْ إِنَّمَا عِلْمُهَا عِندَ اللَّهِ",
          meaning: "Say: Its knowledge is only with Allah",
          explanation: "Only Allah knows when",
          verseRef: "33:63"
        },
        {
          term: "وَمَا يُدْرِيكَ لَعَلَّ السَّاعَةَ تَكُونُ قَرِيبًا",
          meaning: "And what will make you know - perhaps the Hour is near",
          explanation: "It could come at any moment",
          verseRef: "33:63"
        }
      ]
    },

    // 23. FATE OF DISBELIEVERS
    disbelieversFate: {
      name: "Fate of Disbelievers",
      nameArabic: "مصير الكافرين",
      color: "#EF4444",
      icon: "AlertTriangle",
      verses: "33:64-68",
      concepts: [
        {
          term: "إِنَّ اللَّهَ لَعَنَ الْكَافِرِينَ وَأَعَدَّ لَهُمْ سَعِيرًا",
          meaning: "Indeed Allah has cursed the disbelievers and prepared for them a Blaze",
          explanation: "Curse and Hellfire for persistent disbelievers",
          verseRef: "33:64"
        },
        {
          term: "خَالِدِينَ فِيهَا أَبَدًا",
          meaning: "Abiding therein forever",
          explanation: "Eternal punishment",
          verseRef: "33:65"
        },
        {
          term: "لَّا يَجِدُونَ وَلِيًّا وَلَا نَصِيرًا",
          meaning: "They will not find a protector or helper",
          explanation: "Abandoned - no intercessor",
          verseRef: "33:65"
        },
        {
          term: "يَوْمَ تُقَلَّبُ وُجُوهُهُمْ فِي النَّارِ",
          meaning: "The Day their faces are turned about in the Fire",
          explanation: "Physical torment - faces in flames",
          verseRef: "33:66"
        },
        {
          term: "يَقُولُونَ يَا لَيْتَنَا أَطَعْنَا اللَّهَ وَأَطَعْنَا الرَّسُولَا",
          meaning: "They will say: Oh, if only we had obeyed Allah and the Messenger",
          explanation: "Regret - too late for obedience",
          verseRef: "33:66"
        },
        {
          term: "رَبَّنَا إِنَّا أَطَعْنَا سَادَتَنَا وَكُبَرَاءَنَا",
          meaning: "Our Lord, we obeyed our leaders and elders",
          explanation: "Blaming those who misled them",
          verseRef: "33:67"
        },
        {
          term: "فَأَضَلُّونَا السَّبِيلَا",
          meaning: "And they led us astray from the path",
          explanation: "Following wrong leaders",
          verseRef: "33:67"
        },
        {
          term: "رَبَّنَا آتِهِمْ ضِعْفَيْنِ مِنَ الْعَذَابِ",
          meaning: "Our Lord, give them double punishment",
          explanation: "Calling for double punishment on misleaders",
          verseRef: "33:68"
        },
        {
          term: "وَالْعَنْهُمْ لَعْنًا كَبِيرًا",
          meaning: "And curse them with a great curse",
          explanation: "Asking for maximum curse",
          verseRef: "33:68"
        }
      ]
    },

    // 24. DO NOT BE LIKE THOSE WHO HARMED MUSA
    musaExample: {
      name: "Example of Those Who Harmed Musa",
      nameArabic: "مثل الذين آذوا موسى",
      color: "#3B82F6",
      icon: "Book",
      verses: "33:69",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تَكُونُوا كَالَّذِينَ آذَوْا مُوسَىٰ",
          meaning: "O believers, do not be like those who harmed Musa",
          explanation: "Warning: don't repeat Israelites' mistakes",
          verseRef: "33:69"
        },
        {
          term: "فَبَرَّأَهُ اللَّهُ مِمَّا قَالُوا",
          meaning: "But Allah cleared him of what they said",
          explanation: "Divine vindication - accusations refuted",
          verseRef: "33:69"
        },
        {
          term: "وَكَانَ عِندَ اللَّهِ وَجِيهًا",
          meaning: "And he was distinguished in the sight of Allah",
          explanation: "Wajih - honored, having high status",
          verseRef: "33:69"
        }
      ]
    },

    // 25. SPEAKING TRUTH
    speakingTruth: {
      name: "Speaking Righteous Words",
      nameArabic: "قول السديد",
      color: "#10B981",
      icon: "MessageCircle",
      verses: "33:70-71",
      concepts: [
        {
          term: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ",
          meaning: "O believers, fear Allah",
          explanation: "Foundation: taqwa leads to right speech",
          verseRef: "33:70"
        },
        {
          term: "وَقُولُوا قَوْلًا سَدِيدًا",
          meaning: "And speak words of appropriate justice",
          explanation: "Qawl sadid - straight, truthful, appropriate speech",
          verseRef: "33:70"
        },
        {
          term: "يُصْلِحْ لَكُمْ أَعْمَالَكُمْ",
          meaning: "He will amend for you your deeds",
          explanation: "Reward 1: Allah will rectify your actions",
          verseRef: "33:71"
        },
        {
          term: "وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ",
          meaning: "And forgive you your sins",
          explanation: "Reward 2: Divine forgiveness",
          verseRef: "33:71"
        },
        {
          term: "وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا",
          meaning: "And whoever obeys Allah and His Messenger has won a great victory",
          explanation: "Ultimate success through obedience",
          verseRef: "33:71"
        }
      ]
    },

    // 26. THE TRUST (AL-AMANAH)
    theTrust: {
      name: "The Trust (Al-Amanah)",
      nameArabic: "الأمانة",
      color: "#F59E0B",
      icon: "Crown",
      description: "The trust offered to creation - accepted by humans",
      verses: "33:72-73",
      concepts: [
        {
          term: "إِنَّا عَرَضْنَا الْأَمَانَةَ عَلَى السَّمَاوَاتِ وَالْأَرْضِ وَالْجِبَالِ",
          meaning: "We offered the Trust to the heavens, earth, and mountains",
          explanation: "Cosmic offer - trust presented to all creation",
          verseRef: "33:72"
        },
        {
          term: "فَأَبَيْنَ أَن يَحْمِلْنَهَا وَأَشْفَقْنَ مِنْهَا",
          meaning: "But they refused to bear it and feared it",
          explanation: "Creation declined - recognized its weight",
          verseRef: "33:72"
        },
        {
          term: "وَحَمَلَهَا الْإِنسَانُ",
          meaning: "But mankind bore it",
          explanation: "Humans accepted the trust",
          verseRef: "33:72"
        },
        {
          term: "إِنَّهُ كَانَ ظَلُومًا جَهُولًا",
          meaning: "Indeed, he was unjust and ignorant",
          explanation: "Human nature: often fails the trust through injustice and ignorance",
          verseRef: "33:72"
        },
        {
          term: "لِّيُعَذِّبَ اللَّهُ الْمُنَافِقِينَ وَالْمُنَافِقَاتِ",
          meaning: "So Allah will punish the hypocrite men and women",
          explanation: "Those who betrayed the trust",
          verseRef: "33:73"
        },
        {
          term: "وَالْمُشْرِكِينَ وَالْمُشْرِكَاتِ",
          meaning: "And the polytheist men and women",
          explanation: "Those who associated partners with Allah",
          verseRef: "33:73"
        },
        {
          term: "وَيَتُوبَ اللَّهُ عَلَى الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",
          meaning: "And Allah will accept repentance of believing men and women",
          explanation: "Those who honor the trust receive forgiveness",
          verseRef: "33:73"
        },
        {
          term: "وَكَانَ اللَّهُ غَفُورًا رَّحِيمًا",
          meaning: "And Allah is ever Forgiving, Merciful",
          explanation: "Surah ends with divine mercy - hope for all",
          verseRef: "33:73"
        }
      ]
    }
  },

  relationships: [
    { from: "adoption reform", to: "Zayd-Zaynab marriage", type: "application", description: "Reform abolished, then practically demonstrated" },
    { from: "hypocrites exposed", to: "believers steadfast", type: "contrast", description: "Crisis revealed true from false believers" },
    { from: "Battle of Trench", to: "Banu Qurayza", type: "sequence", description: "Siege led to judgment on traitors" },
    { from: "divine wind", to: "confederates defeat", type: "cause", description: "Allah's wind dispersed enemy armies" },
    { from: "wives' choice", to: "wives' conduct", type: "sequence", description: "Chose akhirah, then given behavioral guidelines" },
    { from: "Ahl al-Bayt purification", to: "salawat command", type: "elevation", description: "Purified household deserves blessings" },
    { from: "hijab barrier", to: "jilbab command", type: "progression", description: "From Prophet's wives to all believing women" },
    { from: "fear of people", to: "fear of Allah", type: "correction", description: "Allah corrected Prophet's human hesitation" },
    { from: "speaking truth", to: "the trust", type: "fulfillment", description: "Truthful speech honors the human trust" }
  ],

  thematicFlow: {
    stages: [
      { stage: 1, theme: "Divine Guidance", verses: "33:1-8", description: "Fear Allah, follow revelation, adoption reform, prophetic covenant" },
      { stage: 2, theme: "Battle of the Trench", verses: "33:9-27", description: "Siege narrative, hypocrites exposed, believers steadfast, divine victory" },
      { stage: 3, theme: "Prophet's Household", verses: "33:28-34", description: "Wives' choice, conduct guidelines, Ahl al-Bayt purification" },
      { stage: 4, theme: "Ten Qualities", verses: "33:35", description: "Comprehensive list for Muslim men and women" },
      { stage: 5, theme: "Zayd and Zaynab", verses: "33:36-40", description: "Application of adoption reform, Seal of Prophets" },
      { stage: 6, theme: "Remembrance and Roles", verses: "33:41-48", description: "Dhikr, Prophet's multiple roles, blessings for believers" },
      { stage: 7, theme: "Marriage Regulations", verses: "33:49-52", description: "Special rules for Prophet's marriages" },
      { stage: 8, theme: "Household Etiquette", verses: "33:53-55", description: "Rules for visiting, hijab barrier, mahram relatives" },
      { stage: 9, theme: "Salawat and Protection", verses: "33:56-62", description: "Blessings on Prophet, punishment for harmers, warning to hypocrites" },
      { stage: 10, theme: "The Hour and Fate", verses: "33:63-68", description: "Knowledge of Hour, disbelievers' punishment and regret" },
      { stage: 11, theme: "Truth and Trust", verses: "33:69-73", description: "Musa's example, righteous speech, the cosmic trust" }
    ]
  },

  practicalApplication: {
    applications: [
      { principle: "Trust in Allah's plan", how: "When overwhelmed by challenges, remember the Trench - Allah is sufficient", verse: "33:3" },
      { principle: "Preserve lineage", how: "Call adopted children by biological father's name - maintain clarity", verse: "33:5" },
      { principle: "Follow the Prophet's example", how: "Uswatun Hasana - study Seerah and implement his character", verse: "33:21" },
      { principle: "Fulfill your promises", how: "Be among those who are true to their covenant with Allah", verse: "33:23" },
      { principle: "Choose akhirah over dunya", how: "When faced with choice, prioritize eternal reward", verse: "33:29" },
      { principle: "Embody ten qualities", how: "Work on submission, faith, obedience, truth, patience, humility, charity, fasting, chastity, dhikr", verse: "33:35" },
      { principle: "Fear Allah, not people", how: "Don't let social pressure prevent obedience to Allah", verse: "33:37" },
      { principle: "Remember Allah abundantly", how: "Make dhikr a constant practice, morning and evening", verse: "33:41-42" },
      { principle: "Send salawat on Prophet", how: "Regularly recite Allahumma salli wa sallim", verse: "33:56" },
      { principle: "Observe hijab", how: "Muslim women should wear modest outer garments", verse: "33:59" },
      { principle: "Speak truth", how: "Qawl sadid - appropriate, straight, honest speech", verse: "33:70" },
      { principle: "Honor the trust", how: "Fulfill responsibilities Allah placed on humans", verse: "33:72" }
    ]
  },

  uniqueInsight: {
    title: "The Year of Crisis and Clarity",
    insight: "Surah Al-Ahzab was revealed during one of Islam's most critical moments - the Battle of the Trench (5 AH). With 10,000 enemy soldiers surrounding Madinah and internal betrayal by Banu Qurayza, the Muslim community faced potential annihilation. This surah captures both the terror ('hearts reached throats') and the triumph (divine wind scattered enemies). But remarkably, Allah uses this crisis to legislate domestic and social matters: adoption laws, hijab, Prophet's marriages, and household etiquette. Why? Because the same crisis that tests faith also purifies society. The verse 'لَّقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ' (33:21) - declaring the Prophet as the perfect example - comes right after describing the siege. In difficulty, we learn to follow. The surah ends with 'Al-Amanah' (The Trust) - humanity's unique burden of moral responsibility. Mountains refused it; humans accepted it. The Trench tested whether Muslims would honor that trust. They did. And Allah rewarded them with victory, clarity, and legislation that would guide generations."
  },

  linguisticFeatures: {
    features: [
      { feature: "الأحزاب", example: "The Confederates", effect: "Plural of حزب - allied factions united against Islam" },
      { feature: "أُسْوَةٌ حَسَنَةٌ", example: "Excellent example", effect: "Technical term for Prophetic model to follow" },
      { feature: "خَاتَمَ النَّبِيِّينَ", example: "Seal of the Prophets", effect: "Finality of prophethood - no prophet after Muhammad" },
      { feature: "أَهْلَ الْبَيْتِ", example: "People of the House", effect: "Special designation for Prophet's household" },
      { feature: "الْأَمَانَةَ", example: "The Trust", effect: "Cosmic responsibility accepted by humans" },
      { feature: "قَوْلًا سَدِيدًا", example: "Appropriate speech", effect: "From س-د-د (to be straight) - honest, fitting words" },
      { feature: "يُدْنِينَ", example: "Draw close/over", effect: "From د-ن-و - bringing garment close to body" },
      { feature: "الْمُرْجِفُونَ", example: "Rumormongers", effect: "From ر-ج-ف (to shake) - those who spread shaking news" }
    ]
  },

  historicalContext: {
    revelationPeriod: "5 AH - Year of the Trench (Khandaq)",
    occasionOfRevelation: {
      battle: "Quraysh, Ghatafan, and Jewish tribes formed alliance of 10,000 against 3,000 Muslims",
      trench: "Salman al-Farisi suggested Persian trench strategy - unprecedented in Arabia",
      betrayal: "Banu Qurayza violated treaty during siege, threatening Muslims from within",
      resolution: "Divine wind (saba) for days scattered enemy, angels struck terror, siege lifted without battle"
    },
    adoptionCase: {
      context: "Zayd ibn Haritha was called 'Zayd ibn Muhammad' before these verses",
      reform: "Allah commanded calling him by biological father's name: Zayd ibn Haritha",
      demonstration: "Prophet married Zaynab after her divorce from Zayd to prove adopted sons' ex-wives are not forbidden"
    },
    hijabRevelation: {
      barrier: "Verse 33:53 - screen between companions and Prophet's wives",
      jilbab: "Verse 33:59 - extended to all believing women for protection and identification"
    }
  },

  scientificReferences: {
    notes: [
      { verse: "33:4", topic: "Two hearts metaphor", note: "Anatomical reality - one heart per person, used as basis for singular lineage" },
      { verse: "33:9", topic: "Wind as weapon", note: "Strong easterly wind (saba) can indeed collapse tents and extinguish fires - historical meteorology confirms harsh conditions" },
      { verse: "33:10", topic: "Hearts reaching throats", note: "Describes physiological fear response - elevated heart rate, sensation of constriction" }
    ]
  },

  namesOfSurah: {
    names: [
      { name: "Al-Ahzab", meaning: "The Confederates", reason: "Named after the allied enemy forces in Battle of Trench" },
      { name: "Surah Al-Hijab", meaning: "Chapter of the Veil", reason: "Contains major hijab legislation (33:53, 33:59)" }
    ]
  },

  keyPersons: {
    mentioned: [
      { name: "Prophet Muhammad", role: "Central figure - guidance for his household, battles, marriages" },
      { name: "Zayd ibn Haritha", role: "Former adopted son, his divorce from Zaynab led to adoption reform" },
      { name: "Zaynab bint Jahsh", role: "Prophet's cousin who married Zayd then Prophet after divorce" },
      { name: "Mothers of Believers", role: "Prophet's wives - given special status and responsibilities" },
      { name: "Nuh, Ibrahim, Musa, Isa", role: "Prophets mentioned in covenant context (33:7)" }
    ]
  },

  battleDetails: {
    name: "Ghazwat al-Khandaq (Battle of the Trench)",
    alternateNames: ["Ghazwat al-Ahzab (Battle of Confederates)"],
    date: "Shawwal 5 AH (627 CE)",
    location: "Northern approaches to Madinah",
    muslimForce: "~3,000",
    enemyForce: "~10,000 (Quraysh: 4,000, Ghatafan: 6,000 + other tribes)",
    strategy: "Trench (Khandaq) dug on exposed northern side - suggested by Salman al-Farisi",
    duration: "~27 days siege",
    outcome: "Strategic Muslim victory - siege lifted without major battle",
    divineIntervention: [
      "Fierce wind (saba) for days - scattered enemy camps",
      "Unseen armies (angels) - struck terror into enemy hearts",
      "Nu'aym ibn Mas'ud's conversion - sowed distrust between confederates"
    ]
  }
};

export default ONTOLOGY;
