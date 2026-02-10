/**
 * Prophetic Locations Data - Comprehensive Quranic Geography
 * Includes: Sacred sites, Destroyed nations, Battles, Miracles, Trade routes, Animals
 */

// ============================================================================
// SACRED MOSQUES - The Three Holy Mosques
// ============================================================================

export const SACRED_MOSQUES = {
  masjidHaram: {
    id: 'masjidHaram',
    name: 'Masjid al-Haram',
    nameAr: 'المسجد الحرام',
    coords: [21.4225, 39.8262],
    color: '#F59E0B',
    icon: 'Mosque',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kaaba_at_night.jpg/1280px-Kaaba_at_night.jpg',
    capacity: '4,000,000+',
    builtYear: 'Ancient (Rebuilt multiple times)',
    description: 'The holiest mosque in Islam, home to the Kaaba. All Muslims face this direction in prayer.',
    facts: [
      'Contains the Kaaba, built by Ibrahim and Ismail',
      'Hajj pilgrimage destination for millions',
      'Black Stone (Hajar al-Aswad) set in corner',
      'Maqam Ibrahim marks where Ibrahim stood',
      'Well of Zamzam located within the complex',
    ],
    verses: ['2:127', '3:96-97', '22:26'],
    virtualTourUrl: 'https://www.youtube.com/watch?v=Kaaba_Tour',
  },
  masjidNabawi: {
    id: 'masjidNabawi',
    name: 'Masjid al-Nabawi',
    nameAr: 'المسجد النبوي',
    coords: [24.4672, 39.6111],
    color: '#10B981',
    icon: 'Mosque',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Al-Masjid_AL-Nabawi_in_Madinah.jpg/1280px-Al-Masjid_AL-Nabawi_in_Madinah.jpg',
    capacity: '1,000,000+',
    builtYear: '622 CE',
    description: 'The Prophet\'s Mosque in Madinah, second holiest site in Islam. Built by Prophet Muhammad ﷺ.',
    facts: [
      'Original mosque built by the Prophet himself',
      'Contains the Rawdah (Garden of Paradise)',
      'Prophet\'s tomb behind green dome',
      'Abu Bakr and Umar buried alongside',
      'Distinctive green dome added in 1837',
    ],
    verses: ['9:108', '62:9'],
    virtualTourUrl: 'https://www.youtube.com/watch?v=Madinah_Tour',
  },
  masjidAqsa: {
    id: 'masjidAqsa',
    name: 'Masjid al-Aqsa',
    nameAr: 'المسجد الأقصى',
    coords: [31.7761, 35.2358],
    color: '#3B82F6',
    icon: 'Mosque',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Jerusalem_Al-Aqsa_Mosque_BW_2010-09-21_06-38-12.JPG/1280px-Jerusalem_Al-Aqsa_Mosque_BW_2010-09-21_06-38-12.JPG',
    capacity: '500,000+',
    builtYear: 'Ancient (multiple reconstructions)',
    description: 'The third holiest mosque in Islam, first Qibla, destination of Isra journey.',
    facts: [
      'Destination of the Night Journey (Isra)',
      'First Qibla before Kaaba',
      'Dome of the Rock nearby (not the mosque itself)',
      'Built on Temple Mount / Haram al-Sharif',
      'Prophet led all prophets in prayer here',
    ],
    verses: ['17:1', '2:142-145'],
    virtualTourUrl: 'https://www.youtube.com/watch?v=AlAqsa_Tour',
  },
};

// ============================================================================
// REVELATION LOCATIONS - Where Surahs/Verses Were Revealed
// ============================================================================

export const REVELATION_LOCATIONS = {
  caveHiraFirst: {
    id: 'caveHiraFirst',
    name: 'First Revelation - Cave Hira',
    nameAr: 'أول وحي - غار حراء',
    coords: [21.4575, 39.8583],
    color: '#8B5CF6',
    surah: 96,
    surahName: 'Al-Alaq',
    verses: '96:1-5',
    year: '610 CE',
    description: 'The first five verses of Surah Al-Alaq were the first revelation. Angel Jibreel commanded "Iqra" (Read).',
    context: 'Prophet Muhammad ﷺ was meditating in the cave when Jibreel embraced him three times.',
  },
  musaFire: {
    id: 'musaFire',
    name: 'Burning Bush - Mount Sinai',
    nameAr: 'النار - جبل الطور',
    coords: [28.5392, 33.9750],
    color: '#F59E0B',
    surah: 20,
    surahName: 'Ta-Ha',
    verses: '20:9-14',
    year: 'Ancient',
    description: 'Musa saw a fire on the mountain and was called by Allah. He received his mission to confront Pharaoh.',
    context: 'The Torah was also revealed here during 40 nights.',
  },
  madinaSurahs: {
    id: 'madinaSurahs',
    name: 'Madani Revelations',
    nameAr: 'السور المدنية',
    coords: [24.4672, 39.6111],
    color: '#10B981',
    surah: 2,
    surahName: 'Al-Baqarah (and 27 other surahs)',
    verses: 'Multiple',
    year: '622-632 CE',
    description: '28 surahs were revealed in Madinah, mostly dealing with law, society, and the Muslim community.',
    context: 'Madani surahs are generally longer and address communal matters, inheritance, warfare, and treaties.',
  },
  badrRevelation: {
    id: 'badrRevelation',
    name: 'Surah Al-Anfal Revelation',
    nameAr: 'نزول سورة الأنفال',
    coords: [23.7833, 38.7833],
    color: '#EF4444',
    surah: 8,
    surahName: 'Al-Anfal',
    verses: '8:1-75',
    year: '624 CE',
    description: 'Revealed after the Battle of Badr, addressing war spoils and the miraculous victory.',
    context: 'Also mentions the angels sent to help the Muslims.',
  },
  hudaybiyah: {
    id: 'hudaybiyah',
    name: 'Surah Al-Fath - Hudaybiyah',
    nameAr: 'سورة الفتح - الحديبية',
    coords: [21.4500, 39.6000],
    color: '#06B6D4',
    surah: 48,
    surahName: 'Al-Fath',
    verses: '48:1-29',
    year: '628 CE',
    description: 'Revealed on the return from Treaty of Hudaybiyah, calling it a "manifest victory".',
    context: 'What seemed like a setback was declared a victory by Allah.',
  },
  arafat: {
    id: 'arafat',
    name: 'Completion of Islam - Arafat',
    nameAr: 'إكمال الدين - عرفات',
    coords: [21.3549, 39.9841],
    color: '#EC4899',
    surah: 5,
    surahName: 'Al-Ma\'idah',
    verses: '5:3',
    year: '632 CE (Farewell Hajj)',
    description: '"Today I have perfected your religion for you..." - revealed during the Farewell Pilgrimage.',
    context: 'This verse made Umar cry, realizing the Prophet\'s mission was complete.',
  },
};

// ============================================================================
// WELL OF ZAMZAM & SPECIAL LOCATIONS
// ============================================================================

export const SPECIAL_LOCATIONS = {
  zamzam: {
    id: 'zamzam',
    name: 'Well of Zamzam',
    nameAr: 'بئر زمزم',
    coords: [21.4225, 39.8264],
    color: '#06B6D4',
    icon: 'Droplet',
    description: 'Miraculous well that gushed for Hajar and baby Ismail. Has never dried in 4000+ years.',
    story: 'When Ibrahim left Hajar and Ismail in the barren valley, they ran out of water. Hajar ran between Safa and Marwa seven times searching. Angel Jibreel struck the ground and Zamzam gushed forth.',
    facts: [
      'Has been flowing for over 4000 years',
      'Never been treated or chlorinated',
      'Scientifically unique mineral composition',
      'Fulfills thirst and provides nourishment',
      'Running between Safa and Marwa commemorates Hajar',
    ],
    verses: ['14:37', '2:158'],
    prophet: 'Ismail',
  },
  safaMarwa: {
    id: 'safaMarwa',
    name: 'Safa and Marwa',
    nameAr: 'الصفا والمروة',
    coords: [21.4235, 39.8270],
    color: '#F59E0B',
    icon: 'Mountain',
    description: 'Two hills between which Hajar ran searching for water. Now part of Sa\'i ritual in Hajj/Umrah.',
    story: 'Hajar climbed each hill to look for travelers or water sources, running back and forth seven times until Zamzam appeared.',
    verses: ['2:158'],
    prophet: 'Ismail',
  },
  mina: {
    id: 'mina',
    name: 'Mina - Place of Stoning',
    nameAr: 'منى',
    coords: [21.4133, 39.8933],
    color: '#EF4444',
    icon: 'Target',
    description: 'Where pilgrims throw pebbles at the Jamarat, commemorating Ibrahim\'s rejection of Shaytan.',
    story: 'Shaytan appeared to Ibrahim three times trying to dissuade him from sacrificing Ismail. Ibrahim threw stones at him each time.',
    verses: ['37:102-107'],
    prophet: 'Ibrahim',
  },
  muzdalifah: {
    id: 'muzdalifah',
    name: 'Muzdalifah',
    nameAr: 'المزدلفة',
    coords: [21.3833, 39.9167],
    color: '#10B981',
    icon: 'Moon',
    description: 'Open area where pilgrims spend the night of Hajj after leaving Arafat.',
    story: 'Pilgrims gather pebbles here and spend the night under the stars in remembrance.',
    verses: ['2:198'],
    prophet: 'Muhammad',
  },
};

// ============================================================================
// PROPHET GRAVES & TOMBS
// ============================================================================

export const PROPHET_GRAVES = {
  muhammad: {
    id: 'muhammad',
    name: 'Prophet Muhammad ﷺ',
    nameAr: 'قبر النبي محمد ﷺ',
    coords: [24.4672, 39.6111],
    color: '#10B981',
    location: 'Masjid al-Nabawi, Madinah',
    description: 'Buried in the room of Aisha (RA), now enclosed within the Prophet\'s Mosque under the Green Dome.',
    companions: ['Abu Bakr as-Siddiq', 'Umar ibn al-Khattab'],
    note: 'Visiting his grave and sending salutations is highly recommended.',
  },
  ibrahim: {
    id: 'ibrahim',
    name: 'Prophet Ibrahim (Abraham)',
    nameAr: 'قبر إبراهيم عليه السلام',
    coords: [31.5242, 35.1108],
    color: '#F59E0B',
    location: 'Cave of Machpelah, Hebron (Al-Khalil)',
    description: 'Believed to be buried in Hebron along with Sarah, Ishaq, and Yaqub.',
    companions: ['Sarah', 'Ishaq', 'Yaqub', 'Rifqa', 'Leah'],
    note: 'Known as the "Friend of Allah" (Khalilullah).',
  },
  yusuf: {
    id: 'yusuf',
    name: 'Prophet Yusuf (Joseph)',
    nameAr: 'قبر يوسف عليه السلام',
    coords: [32.2136, 35.2847],
    color: '#8B5CF6',
    location: 'Nablus, Palestine (traditional site)',
    description: 'According to tradition, Yusuf was buried in Egypt and later reburied in Palestine.',
    companions: [],
    note: 'Given half of all beauty.',
  },
  musa: {
    id: 'musa',
    name: 'Prophet Musa (Moses)',
    nameAr: 'قبر موسى عليه السلام',
    coords: [31.7625, 35.7311],
    color: '#3B82F6',
    location: 'Near Mount Nebo, Jordan (approximate)',
    description: 'Exact location unknown. Tradition says he passed away near the Holy Land he longed to enter.',
    companions: [],
    note: 'Allah spoke to him directly (Kalimullah).',
  },
  hud: {
    id: 'hud',
    name: 'Prophet Hud',
    nameAr: 'قبر هود عليه السلام',
    coords: [15.9500, 48.8000],
    color: '#DC2626',
    location: 'Hadramaut, Yemen (traditional site)',
    description: 'Believed to be in a valley in Hadramaut. A pilgrimage site visited by locals.',
    companions: [],
    note: 'Sent to the mighty people of \'Ad.',
  },
  salih: {
    id: 'salih',
    name: 'Prophet Salih',
    nameAr: 'قبر صالح عليه السلام',
    coords: [26.7867, 37.9533],
    color: '#F97316',
    location: 'Near Mada\'in Salih, Saudi Arabia',
    description: 'Traditional site near the ruins of Thamud. Exact location uncertain.',
    companions: [],
    note: 'Sent to Thamud with the miraculous she-camel.',
  },
  adam: {
    id: 'adam',
    name: 'Prophet Adam',
    nameAr: 'قبر آدم عليه السلام',
    coords: [7.9519, 80.7514],
    color: '#6B7280',
    location: 'Adam\'s Peak, Sri Lanka (one tradition) or Makkah',
    description: 'Multiple traditions exist. Some say Makkah, others say Sri Lanka where there\'s a footprint.',
    companions: ['Hawwa (Eve)'],
    note: 'The first human and first prophet.',
  },
};

// ============================================================================
// CAVES OF THE QURAN
// ============================================================================

export const QURANIC_CAVES = {
  hira: {
    id: 'hira',
    name: 'Cave of Hira (Ghar Hira)',
    nameAr: 'غار حراء',
    coords: [21.4575, 39.8583],
    color: '#8B5CF6',
    mountain: 'Jabal al-Nour (Mountain of Light)',
    description: 'Where Prophet Muhammad ﷺ received the first revelation. He would spend nights in contemplation.',
    events: ['First Revelation', 'Angel Jibreel\'s first appearance', 'Beginning of Prophethood'],
    verses: ['96:1-5'],
    climbTime: '1-2 hours',
  },
  thawr: {
    id: 'thawr',
    name: 'Cave of Thawr (Ghar Thawr)',
    nameAr: 'غار ثور',
    coords: [21.3761, 39.8486],
    color: '#06B6D4',
    mountain: 'Jabal Thawr',
    description: 'Where Prophet Muhammad ﷺ and Abu Bakr hid for three nights during the Hijra. A spider web and dove protected them.',
    events: ['Hijra hiding', 'Spider web miracle', 'Dove nesting'],
    verses: ['9:40'],
    climbTime: '1.5-2 hours',
  },
  kahf: {
    id: 'kahf',
    name: 'Cave of the Sleepers (Ashab al-Kahf)',
    nameAr: 'كهف أصحاب الكهف',
    coords: [30.8000, 35.5000],
    color: '#10B981',
    mountain: 'Various traditions (Jordan, Turkey, others)',
    description: 'Where the young believers fled persecution and slept for 309 years. Their dog guarded the entrance.',
    events: ['Youth fled to cave', 'Slept for 309 years', 'Woke in different era'],
    verses: ['18:9-26'],
    note: 'Multiple sites claim to be the cave. Story more important than location.',
  },
};

// ============================================================================
// SACRED LOCATIONS
// ============================================================================

export const PROPHETIC_LOCATIONS = {
  // Holy Cities
  makkah: {
    id: 'makkah',
    name: 'Makkah',
    nameAr: 'مكة المكرمة',
    coords: [21.4225, 39.8262],
    color: '#F59E0B',
    category: 'holy',
    description: 'The holiest city in Islam, birthplace of Prophet Muhammad (PBUH) and home to the Kaaba.',
    prophets: ['Muhammad', 'Ibrahim', 'Ismail'],
    events: [
      { name: 'Birth of Prophet Muhammad', year: '570 CE', verses: [] },
      { name: 'First Revelation', year: '610 CE', verses: ['96:1-5'], description: 'The first verses of the Quran were revealed in Cave Hira.' },
      { name: 'Construction of Kaaba', year: 'Ancient', verses: ['2:127'], description: 'Ibrahim and Ismail raised the foundations of the Kaaba.' },
      { name: 'Conquest of Makkah', year: '630 CE', verses: ['110:1-3'], description: 'The peaceful conquest and purification of the Kaaba.' },
    ],
    significance: 'Qibla direction for all Muslims and destination of Hajj pilgrimage.',
  },

  madinah: {
    id: 'madinah',
    name: 'Madinah',
    nameAr: 'المدينة المنورة',
    coords: [24.4672, 39.6111],
    color: '#10B981',
    category: 'holy',
    description: 'The city that welcomed the Prophet (PBUH) and became the center of the first Islamic state.',
    prophets: ['Muhammad'],
    events: [
      { name: 'Hijra (Migration)', year: '622 CE', verses: ['9:40'], description: 'The Prophet\'s migration from Makkah to Madinah.' },
      { name: 'Building of Masjid al-Nabawi', year: '622 CE', verses: [], description: 'The Prophet\'s Mosque was established.' },
      { name: 'Battle of Badr', year: '624 CE', verses: ['3:123', '8:9'], description: 'First major battle of Islam.' },
      { name: 'Passing of the Prophet', year: '632 CE', verses: [], description: 'The Prophet (PBUH) returned to his Lord.' },
    ],
    significance: 'Second holiest city in Islam, home to Masjid al-Nabawi and the Prophet\'s tomb.',
  },

  jerusalem: {
    id: 'jerusalem',
    name: 'Jerusalem (Al-Quds)',
    nameAr: 'القدس',
    coords: [31.7683, 35.2137],
    color: '#3B82F6',
    category: 'holy',
    description: 'The third holiest city in Islam, destination of Isra and location of Al-Aqsa Mosque.',
    prophets: ['Muhammad', 'Isa', 'Sulaiman', 'Dawud', 'Zakariya', 'Yahya'],
    events: [
      { name: 'Isra and Mi\'raj', year: '621 CE', verses: ['17:1'], description: 'The Night Journey from Makkah to Jerusalem and ascension to heavens.' },
      { name: 'Temple of Sulaiman', year: 'Ancient', verses: ['34:12-14'], description: 'Prophet Sulaiman built the temple with help from jinn.' },
      { name: 'First Qibla', year: 'Early Islam', verses: ['2:142-145'], description: 'Muslims initially prayed facing Jerusalem.' },
    ],
    significance: 'Site of Al-Aqsa Mosque, Dome of the Rock, and first Qibla of Muslims.',
  },

  // Caves
  caveHira: {
    id: 'caveHira',
    name: 'Cave of Hira',
    nameAr: 'غار حراء',
    coords: [21.4575, 39.8583],
    color: '#8B5CF6',
    category: 'sacred',
    description: 'The cave on Jabal al-Nour where Prophet Muhammad received the first revelation.',
    prophets: ['Muhammad'],
    events: [
      { name: 'First Revelation', year: '610 CE', verses: ['96:1-5'], description: 'Angel Jibreel appeared and revealed "Iqra" (Read).' },
    ],
    significance: 'Birthplace of Quranic revelation, where the Prophet would meditate.',
  },

  caveThawr: {
    id: 'caveThawr',
    name: 'Cave of Thawr',
    nameAr: 'غار ثور',
    coords: [21.3761, 39.8486],
    color: '#8B5CF6',
    category: 'sacred',
    description: 'The cave where Prophet Muhammad and Abu Bakr hid during Hijra.',
    prophets: ['Muhammad'],
    events: [
      { name: 'Hijra Hiding', year: '622 CE', verses: ['9:40'], description: 'The Prophet and Abu Bakr hid here for three nights while Quraysh searched for them.' },
    ],
    significance: '"Do not grieve, indeed Allah is with us" - Allah protected them with a spider web and dove.',
  },

  // Mountains
  sinai: {
    id: 'sinai',
    name: 'Mount Sinai (Tur)',
    nameAr: 'جبل الطور',
    coords: [28.5392, 33.9750],
    color: '#8B5CF6',
    category: 'sacred',
    description: 'The mountain where Musa (AS) spoke with Allah and received the Torah.',
    prophets: ['Musa'],
    events: [
      { name: 'Conversation with Allah', year: 'Ancient', verses: ['20:9-14', '28:29-30'], description: 'Musa saw the burning bush and was called by Allah.' },
      { name: 'Receiving the Torah', year: 'Ancient', verses: ['7:142-145'], description: 'Musa spent 40 nights on the mountain receiving revelation.' },
      { name: 'Request to see Allah', year: 'Ancient', verses: ['7:143'], description: 'The mountain crumbled when Allah revealed His light.' },
    ],
    significance: 'Sacred mountain mentioned multiple times in the Quran.',
  },

  uhud: {
    id: 'uhud',
    name: 'Mount Uhud',
    nameAr: 'جبل أحد',
    coords: [24.5008, 39.6142],
    color: '#EF4444',
    category: 'battle',
    description: 'Mountain near Madinah, site of the Battle of Uhud.',
    prophets: ['Muhammad'],
    events: [
      { name: 'Battle of Uhud', year: '625 CE', verses: ['3:121-128', '3:152-155'], description: 'Second major battle, where Muslims learned the importance of obedience.' },
      { name: 'Martyrdom of Hamza', year: '625 CE', verses: [], description: 'The Prophet\'s uncle Hamza was martyred here.' },
    ],
    significance: '"Uhud is a mountain that loves us and we love it" - Prophet Muhammad ﷺ',
  },

  judi: {
    id: 'judi',
    name: 'Mount Judi',
    nameAr: 'جبل الجودي',
    coords: [37.3833, 42.4500],
    color: '#06B6D4',
    category: 'sacred',
    description: 'The mountain where Nuh\'s Ark came to rest after the flood.',
    prophets: ['Nuh'],
    events: [
      { name: 'Ark Resting', year: 'Ancient', verses: ['11:44'], description: 'After the flood, the Ark settled on Mount Judi.' },
    ],
    significance: 'Symbol of Allah\'s mercy and salvation for the believers.',
  },

  // Countries/Regions
  egypt: {
    id: 'egypt',
    name: 'Egypt (Misr)',
    nameAr: 'مصر',
    coords: [26.8206, 30.8025],
    color: '#EF4444',
    category: 'historical',
    description: 'Land of the Pharaohs, where the story of Musa and Yusuf unfolded.',
    prophets: ['Musa', 'Harun', 'Yusuf'],
    events: [
      { name: 'Yusuf\'s Journey', year: 'Ancient', verses: ['12:21'], description: 'Yusuf was sold into slavery and rose to become minister.' },
      { name: 'Confrontation with Pharaoh', year: 'Ancient', verses: ['7:103-137'], description: 'Musa challenged Pharaoh with signs from Allah.' },
      { name: 'Exodus', year: 'Ancient', verses: ['26:52-68'], description: 'Bani Israel left Egypt, and the sea was parted.' },
    ],
    significance: 'Mentioned more than any other place name in the Quran.',
  },

  babylon: {
    id: 'babylon',
    name: 'Babylon (Babel)',
    nameAr: 'بابل',
    coords: [32.5421, 44.4221],
    color: '#EC4899',
    category: 'historical',
    description: 'Ancient city in Iraq, associated with Prophet Ibrahim\'s early life.',
    prophets: ['Ibrahim'],
    events: [
      { name: 'Ibrahim Breaks Idols', year: 'Ancient', verses: ['21:51-70'], description: 'Ibrahim destroyed the idols and was saved from the fire.' },
      { name: 'Harut and Marut', year: 'Ancient', verses: ['2:102'], description: 'Angels sent as a test for the people of Babylon.' },
    ],
    significance: 'Origin place of Prophet Ibrahim before his migration.',
  },

  palestine: {
    id: 'palestine',
    name: 'Palestine (Canaan)',
    nameAr: 'فلسطين',
    coords: [31.9522, 35.2332],
    color: '#22C55E',
    category: 'holy',
    description: 'The blessed land, home to many prophets.',
    prophets: ['Ibrahim', 'Ishaq', 'Yaqub', 'Yusuf', 'Lut', 'Dawud', 'Sulaiman'],
    events: [
      { name: 'Ibrahim\'s Settlement', year: 'Ancient', verses: ['21:71'], description: 'Ibrahim settled in the blessed land after leaving Babylon.' },
      { name: 'Dawud and Jalut', year: 'Ancient', verses: ['2:251'], description: 'Dawud defeated Goliath.' },
      { name: 'Kingdom of Sulaiman', year: 'Ancient', verses: ['27:15-44'], description: 'Sulaiman\'s magnificent kingdom.' },
    ],
    significance: 'Called the "blessed land" in the Quran.',
  },

  yemen: {
    id: 'yemen',
    name: 'Yemen (Saba)',
    nameAr: 'اليمن',
    coords: [15.5527, 48.5164],
    color: '#6366F1',
    category: 'historical',
    description: 'Land of the Queen of Sheba and the people of the dam.',
    prophets: ['Hud'],
    events: [
      { name: 'Queen of Sheba', year: 'Ancient', verses: ['27:22-44'], description: 'The hoopoe brought news of the Queen and her throne.' },
      { name: 'Dam of Ma\'rib', year: 'Ancient', verses: ['34:15-17'], description: 'The people of Saba were blessed then tested.' },
      { name: 'People of \'Ad', year: 'Ancient', verses: ['46:21-26'], description: 'Hud was sent to the people of \'Ad near Yemen.' },
    ],
    significance: 'Home to ancient civilizations mentioned in the Quran.',
  },

  madyan: {
    id: 'madyan',
    name: 'Madyan',
    nameAr: 'مدين',
    coords: [28.5000, 35.0000],
    color: '#F97316',
    category: 'historical',
    description: 'Where Musa lived for years and where Shuayb was sent.',
    prophets: ['Musa', 'Shuayb'],
    events: [
      { name: 'Musa\'s Exile', year: 'Ancient', verses: ['28:22-28'], description: 'Musa fled Egypt and married the daughter of Shuayb.' },
      { name: 'Message of Shuayb', year: 'Ancient', verses: ['7:85-93'], description: 'Shuayb called his people to honest trade.' },
    ],
    significance: 'Located in northwestern Arabia near modern-day Tabuk.',
  },

  ninawa: {
    id: 'ninawa',
    name: 'Nineveh (Ninawa)',
    nameAr: 'نينوى',
    coords: [36.3489, 43.1384],
    color: '#0EA5E9',
    category: 'historical',
    description: 'City where Prophet Yunus was sent.',
    prophets: ['Yunus'],
    events: [
      { name: 'Yunus and the Whale', year: 'Ancient', verses: ['37:139-148'], description: 'Yunus was swallowed by the whale after leaving his people.' },
      { name: 'Repentance of the People', year: 'Ancient', verses: ['10:98'], description: 'The only nation that repented collectively and was saved.' },
    ],
    significance: 'The people of Yunus are praised for their repentance.',
  },

  // Destroyed Nations Sites
  alHijr: {
    id: 'alHijr',
    name: 'Al-Hijr (Mada\'in Salih)',
    nameAr: 'الحجر / مدائن صالح',
    coords: [26.7867, 37.9533],
    color: '#DC2626',
    category: 'destroyed',
    description: 'The carved rock dwellings of Thamud, people of Prophet Salih.',
    prophets: ['Salih'],
    events: [
      { name: 'She-Camel Miracle', year: 'Ancient', verses: ['7:73-79'], description: 'Allah sent a miraculous she-camel as a sign.' },
      { name: 'Destruction of Thamud', year: 'Ancient', verses: ['15:80-84', '91:11-15'], description: 'They hamstrung the camel and were destroyed by earthquake.' },
    ],
    significance: 'UNESCO World Heritage Site - a warning for those who reject messengers.',
  },

  iram: {
    id: 'iram',
    name: 'Iram of the Pillars',
    nameAr: 'إرم ذات العماد',
    coords: [18.2500, 54.0000],
    color: '#DC2626',
    category: 'destroyed',
    description: 'The legendary city of \'Ad with lofty pillars, unmatched in the land.',
    prophets: ['Hud'],
    events: [
      { name: 'City Built', year: 'Ancient', verses: ['89:7-8'], description: 'A city the likes of which had never been created.' },
      { name: 'Destruction of \'Ad', year: 'Ancient', verses: ['69:6-8', '54:19'], description: 'Destroyed by a furious wind for seven nights and eight days.' },
    ],
    significance: 'Lost city mentioned in Quran - a reminder of worldly impermanence.',
  },

  deadSea: {
    id: 'deadSea',
    name: 'Dead Sea (Cities of Lut)',
    nameAr: 'البحر الميت / قوم لوط',
    coords: [31.5000, 35.5000],
    color: '#DC2626',
    category: 'destroyed',
    description: 'Region of Sodom and Gomorrah, cities of Prophet Lut\'s people.',
    prophets: ['Lut'],
    events: [
      { name: 'Warning Ignored', year: 'Ancient', verses: ['7:80-84'], description: 'Lut warned his people about their sins.' },
      { name: 'Cities Overturned', year: 'Ancient', verses: ['11:82-83', '15:74'], description: 'Allah rained stones and turned the cities upside down.' },
    ],
    significance: 'The lowest point on Earth - a permanent reminder of divine punishment.',
  },

  redSea: {
    id: 'redSea',
    name: 'Red Sea Crossing',
    nameAr: 'عبور البحر الأحمر',
    coords: [28.9500, 33.5000],
    color: '#06B6D4',
    category: 'miracle',
    description: 'Where Allah parted the sea for Musa and drowned Pharaoh\'s army.',
    prophets: ['Musa'],
    events: [
      { name: 'Sea Parting', year: 'Ancient', verses: ['26:63-66', '20:77-78'], description: 'Musa struck the sea with his staff and it split.' },
      { name: 'Pharaoh Drowned', year: 'Ancient', verses: ['10:90-92', '44:24'], description: 'Pharaoh\'s body was preserved as a sign.' },
    ],
    significance: 'One of the greatest miracles - "Strike the sea with your staff".',
  },

  // Battle Sites
  badr: {
    id: 'badr',
    name: 'Badr',
    nameAr: 'بدر',
    coords: [23.7833, 38.7833],
    color: '#EF4444',
    category: 'battle',
    description: 'Site of the first major battle between Muslims and Quraysh.',
    prophets: ['Muhammad'],
    events: [
      { name: 'Battle of Badr', year: '624 CE', verses: ['3:123-125', '8:9-12', '8:42-44'], description: '313 Muslims defeated 1000 Quraysh with angelic support.' },
    ],
    significance: '"Yawm al-Furqan" - Day of Criterion between truth and falsehood.',
  },

  khandaq: {
    id: 'khandaq',
    name: 'Khandaq (Trench)',
    nameAr: 'الخندق',
    coords: [24.4800, 39.5900],
    color: '#EF4444',
    category: 'battle',
    description: 'Site of the Battle of the Trench/Confederates.',
    prophets: ['Muhammad'],
    events: [
      { name: 'Battle of Ahzab', year: '627 CE', verses: ['33:9-27'], description: 'A trench strategy suggested by Salman al-Farisi protected Madinah.' },
    ],
    significance: 'When all tribes united against Islam but Allah sent wind and unseen forces.',
  },

  hunayn: {
    id: 'hunayn',
    name: 'Hunayn',
    nameAr: 'حنين',
    coords: [21.5000, 40.2500],
    color: '#EF4444',
    category: 'battle',
    description: 'Battle after the conquest of Makkah.',
    prophets: ['Muhammad'],
    events: [
      { name: 'Battle of Hunayn', year: '630 CE', verses: ['9:25-26'], description: 'Muslims initially overconfident in numbers, then Allah sent tranquility.' },
    ],
    significance: '"Your great numbers pleased you but availed you nothing" - lesson in humility.',
  },

  tabuk: {
    id: 'tabuk',
    name: 'Tabuk',
    nameAr: 'تبوك',
    coords: [28.3838, 36.5550],
    color: '#EF4444',
    category: 'battle',
    description: 'Site of the last expedition led by Prophet Muhammad.',
    prophets: ['Muhammad'],
    events: [
      { name: 'Expedition of Tabuk', year: '630 CE', verses: ['9:38-42', '9:117-118'], description: 'Test of faith during extreme heat and hardship.' },
    ],
    significance: 'The expedition that tested true believers - "Army of Hardship".',
  },
};

// ============================================================================
// DESTROYED NATIONS
// ============================================================================

export const DESTROYED_NATIONS = {
  nuh: {
    id: 'nuh',
    name: 'People of Nuh',
    nameAr: 'قوم نوح',
    coords: [37.0000, 42.0000],
    color: '#3B82F6',
    prophet: 'Nuh',
    sin: 'Idol worship, disbelief for 950 years',
    punishment: 'The Great Flood',
    punishmentAr: 'الطوفان العظيم',
    verses: ['11:25-48', '71:1-28', '23:23-30'],
    description: 'Nuh preached for 950 years. Only a few believed. Allah sent the flood that covered the earth.',
    lesson: 'Persistence in dawah and patience in the face of rejection.',
  },
  aad: {
    id: 'aad',
    name: 'People of \'Ad',
    nameAr: 'قوم عاد',
    coords: [18.5000, 54.0000],
    color: '#F59E0B',
    prophet: 'Hud',
    sin: 'Arrogance, building monuments, oppression',
    punishment: 'Furious wind for 7 nights and 8 days',
    punishmentAr: 'ريح صرصر عاتية',
    verses: ['69:6-8', '46:21-26', '41:15-16'],
    description: 'They said "Who is mightier than us?" Allah sent a wind that left them like hollow palm trunks.',
    lesson: 'Material power means nothing before Allah\'s might.',
  },
  thamud: {
    id: 'thamud',
    name: 'People of Thamud',
    nameAr: 'قوم ثمود',
    coords: [26.7867, 37.9533],
    color: '#EF4444',
    prophet: 'Salih',
    sin: 'Killing the she-camel, demanding miracles then rejecting',
    punishment: 'Devastating earthquake/blast',
    punishmentAr: 'الصيحة / الرجفة',
    verses: ['7:73-79', '91:11-15', '54:23-31'],
    description: 'They carved homes in mountains but hamstrung Allah\'s she-camel. Destroyed in one blast.',
    lesson: 'Signs and miracles don\'t guarantee belief - the heart must be open.',
  },
  lut: {
    id: 'lut',
    name: 'People of Lut',
    nameAr: 'قوم لوط',
    coords: [31.5000, 35.5000],
    color: '#DC2626',
    prophet: 'Lut',
    sin: 'Fahishah (immorality), highway robbery',
    punishment: 'Cities overturned, rained with stones',
    punishmentAr: 'جعلنا عاليها سافلها',
    verses: ['7:80-84', '11:82-83', '15:74', '29:28-35'],
    description: 'Their cities were lifted and flipped, then rained with marked stones of baked clay.',
    lesson: 'Moral corruption destroys societies from within.',
  },
  madyan: {
    id: 'madyanNation',
    name: 'People of Madyan',
    nameAr: 'قوم مدين',
    coords: [28.5000, 35.0000],
    color: '#F97316',
    prophet: 'Shuayb',
    sin: 'Cheating in weights and measures, corruption in trade',
    punishment: 'Earthquake and scorching blast',
    punishmentAr: 'الرجفة / يوم الظلة',
    verses: ['7:85-93', '11:84-95', '29:36-37'],
    description: 'They cheated in business. Destroyed by earthquake and a day of shadow (volcanic?).',
    lesson: 'Economic justice is a religious obligation.',
  },
  pharaoh: {
    id: 'pharaoh',
    name: 'Pharaoh & His Army',
    nameAr: 'فرعون وجنوده',
    coords: [29.0000, 33.0000],
    color: '#7C3AED',
    prophet: 'Musa',
    sin: 'Claiming divinity, enslaving Bani Israel, killing children',
    punishment: 'Drowned in the sea',
    punishmentAr: 'أغرقناهم في اليم',
    verses: ['10:90-92', '28:40', '43:55-56', '44:24'],
    description: 'Pharaoh said "I am your lord most high." He was drowned and his body preserved as a sign.',
    lesson: 'No tyranny lasts forever - Allah\'s justice is certain.',
  },
  ashab_rass: {
    id: 'ashab_rass',
    name: 'People of the Rass',
    nameAr: 'أصحاب الرس',
    coords: [25.0000, 50.0000],
    color: '#6366F1',
    prophet: 'Unknown',
    sin: 'Unknown - possibly killing their prophet',
    punishment: 'Destroyed',
    punishmentAr: 'أهلكناهم',
    verses: ['25:38', '50:12'],
    description: 'Mentioned alongside \'Ad and Thamud. Their exact story is not detailed in Quran.',
    lesson: 'Many nations were destroyed - only some stories are told as reminders.',
  },
  ashab_ayka: {
    id: 'ashab_ayka',
    name: 'People of the Thicket',
    nameAr: 'أصحاب الأيكة',
    coords: [28.3000, 35.5000],
    color: '#EC4899',
    prophet: 'Shuayb',
    sin: 'Same as Madyan - fraud in trade',
    punishment: 'Day of Shadow (yawm al-zullah)',
    punishmentAr: 'عذاب يوم الظلة',
    verses: ['26:176-191', '15:78-79'],
    description: 'A cloud covered them giving shade, then rained fire upon them.',
    lesson: 'Related to or same as people of Madyan.',
  },
};

// ============================================================================
// MIRACLES MAP
// ============================================================================

export const MIRACLES_LOCATIONS = {
  seaSplit: {
    id: 'seaSplit',
    name: 'Parting of the Sea',
    nameAr: 'انفلاق البحر',
    coords: [28.9500, 33.5000],
    color: '#06B6D4',
    icon: 'Waves',
    prophet: 'Musa',
    verses: ['26:63-66', '20:77'],
    description: 'Musa struck the sea with his staff, and it parted into two walls of water.',
    scientificNote: 'Some researchers suggest wind setdown or tsunami effects, but believers know it was divine.',
  },
  fireNotBurn: {
    id: 'fireNotBurn',
    name: 'Fire That Did Not Burn',
    nameAr: 'النار التي لم تحرق',
    coords: [32.5421, 44.4221],
    color: '#F59E0B',
    icon: 'Fire',
    prophet: 'Ibrahim',
    verses: ['21:68-69', '37:97'],
    description: 'Ibrahim was thrown into a massive fire, but Allah commanded: "O fire, be cool and safe."',
    scientificNote: 'Laws of physics suspended by the One who created them.',
  },
  mountainCrumble: {
    id: 'mountainCrumble',
    name: 'Mountain Crumbled',
    nameAr: 'تجلي الجبل',
    coords: [28.5392, 33.9750],
    color: '#8B5CF6',
    icon: 'Mountain',
    prophet: 'Musa',
    verses: ['7:143'],
    description: 'When Musa asked to see Allah, Allah revealed to the mountain which crumbled to dust.',
    scientificNote: 'The mountain could not bear what Musa asked to see.',
  },
  whaleYunus: {
    id: 'whaleYunus',
    name: 'Yunus in the Whale',
    nameAr: 'يونس في بطن الحوت',
    coords: [36.8000, 35.5000],
    color: '#0EA5E9',
    icon: 'Fish',
    prophet: 'Yunus',
    verses: ['37:139-148', '21:87-88'],
    description: 'Yunus was swallowed by a whale and survived in its belly, glorifying Allah.',
    scientificNote: 'Survival inside a whale is impossible naturally - a miraculous preservation.',
  },
  moonSplit: {
    id: 'moonSplit',
    name: 'Splitting of the Moon',
    nameAr: 'انشقاق القمر',
    coords: [21.4225, 39.8262],
    color: '#F472B6',
    icon: 'Moon',
    prophet: 'Muhammad',
    verses: ['54:1-2'],
    description: 'The moon was split into two parts as a sign, witnessed by the Quraysh.',
    scientificNote: 'NASA has identified a linear rille (crack) on the moon surface.',
  },
  elephantArmy: {
    id: 'elephantArmy',
    name: 'Destruction of Elephant Army',
    nameAr: 'أصحاب الفيل',
    coords: [21.4225, 39.8262],
    color: '#10B981',
    icon: 'Bird',
    prophet: 'Pre-Muhammad',
    verses: ['105:1-5'],
    description: 'Birds (Ababil) threw stones at Abraha\'s army that came to destroy the Kaaba.',
    scientificNote: 'Some suggest smallpox, but the Quran describes birds with stones of baked clay.',
  },
  staffSerpent: {
    id: 'staffSerpent',
    name: 'Staff Becomes Serpent',
    nameAr: 'العصا تتحول ثعبانًا',
    coords: [26.8206, 30.8025],
    color: '#22C55E',
    icon: 'Zap',
    prophet: 'Musa',
    verses: ['7:107', '20:20', '26:32'],
    description: 'Musa\'s staff transformed into a massive serpent that swallowed the magicians\' tricks.',
    scientificNote: 'The magicians immediately recognized this was not magic but divine.',
  },
  deadRevived: {
    id: 'deadRevived',
    name: 'Dead Brought to Life',
    nameAr: 'إحياء الموتى',
    coords: [31.7683, 35.2137],
    color: '#EC4899',
    icon: 'Heart',
    prophet: 'Isa',
    verses: ['3:49', '5:110'],
    description: 'Isa raised the dead by Allah\'s permission, healed blind and lepers.',
    scientificNote: 'Given to Isa as clear signs, yet many still disbelieved.',
  },
  birdsClay: {
    id: 'birdsClay',
    name: 'Birds from Clay',
    nameAr: 'الطير من الطين',
    coords: [31.7683, 35.2137],
    color: '#3B82F6',
    icon: 'Bird',
    prophet: 'Isa',
    verses: ['3:49', '5:110'],
    description: 'Isa made bird-shaped figures from clay and breathed life into them by Allah\'s permission.',
    scientificNote: 'Creation of life - a power belonging only to Allah, demonstrated through His messenger.',
  },
};

// ============================================================================
// ANIMALS IN QURAN
// ============================================================================

export const QURANIC_ANIMALS = {
  sheCamel: {
    id: 'sheCamel',
    name: 'She-Camel of Salih',
    nameAr: 'ناقة صالح',
    coords: [26.7867, 37.9533],
    color: '#F59E0B',
    icon: 'Camel',
    animal: 'Camel',
    verses: ['7:73', '91:13'],
    description: 'A miraculous she-camel emerged from a rock as a sign. It had water rights on alternate days.',
    event: 'Thamud hamstrung her and were destroyed.',
  },
  hoopoe: {
    id: 'hoopoe',
    name: 'Hoopoe Bird (Hudhud)',
    nameAr: 'الهدهد',
    coords: [15.5527, 48.5164],
    color: '#8B5CF6',
    icon: 'Bird',
    animal: 'Hoopoe',
    verses: ['27:20-28'],
    description: 'The intelligent bird that brought Sulaiman news of the Queen of Sheba and her sun-worship.',
    event: 'Led to the Queen\'s conversion to Islam.',
  },
  ant: {
    id: 'ant',
    name: 'Ant of Sulaiman',
    nameAr: 'نملة سليمان',
    coords: [31.9522, 35.2332],
    color: '#10B981',
    icon: 'Bug',
    animal: 'Ant',
    verses: ['27:18-19'],
    description: 'An ant warned its colony to enter their homes lest Sulaiman\'s army crush them unknowingly.',
    event: 'Sulaiman smiled and thanked Allah for the blessing of understanding.',
  },
  whale: {
    id: 'whale',
    name: 'Whale of Yunus',
    nameAr: 'حوت يونس',
    coords: [36.8000, 35.5000],
    color: '#0EA5E9',
    icon: 'Fish',
    animal: 'Whale/Large Fish',
    verses: ['37:142', '68:48'],
    description: 'Swallowed Yunus when he left his people. Yunus glorified Allah in its dark belly.',
    event: 'The whale cast him out on a shore, and Allah grew a gourd plant for him.',
  },
  crow: {
    id: 'crow',
    name: 'Crow (Qabil & Habil)',
    nameAr: 'الغراب',
    coords: [33.5000, 36.3000],
    color: '#374151',
    icon: 'Bird',
    animal: 'Crow',
    verses: ['5:31'],
    description: 'Allah sent a crow to show Qabil how to bury his brother Habil - the first murder.',
    event: 'Qabil said "Woe to me! Have I failed to be like this crow?"',
  },
  elephant: {
    id: 'elephant',
    name: 'Elephant of Abraha',
    nameAr: 'فيل أبرهة',
    coords: [21.4225, 39.8262],
    color: '#6B7280',
    icon: 'Elephant',
    animal: 'Elephant',
    verses: ['105:1'],
    description: 'Abraha brought elephants to destroy the Kaaba in the Year of the Elephant (570 CE).',
    event: 'The lead elephant refused to advance toward Makkah.',
  },
  dog: {
    id: 'dog',
    name: 'Dog of the Cave',
    nameAr: 'كلب أهل الكهف',
    coords: [30.8000, 35.5000],
    color: '#A78BFA',
    icon: 'Dog',
    animal: 'Dog',
    verses: ['18:18', '18:22'],
    description: 'The loyal dog that accompanied the Sleepers of the Cave for 309 years.',
    event: 'Stretched at the cave entrance, it seemed awake though they all slept.',
  },
  wolf: {
    id: 'wolf',
    name: 'Wolf (Yusuf\'s Story)',
    nameAr: 'الذئب',
    coords: [31.9522, 35.2332],
    color: '#64748B',
    icon: 'Wolf',
    animal: 'Wolf',
    verses: ['12:13-14', '12:17'],
    description: 'Yusuf\'s brothers claimed a wolf ate him, but Yaqub knew they were lying.',
    event: 'The brothers brought a shirt with false blood.',
  },
  spider: {
    id: 'spider',
    name: 'Spider of Cave Thawr',
    nameAr: 'العنكبوت',
    coords: [21.3761, 39.8486],
    color: '#78716C',
    icon: 'Bug',
    animal: 'Spider',
    verses: ['29:41'],
    description: 'A spider spun a web over the cave entrance, making it look undisturbed.',
    event: 'Protected the Prophet during Hijra - the weakest house is a mighty shield when Allah wills.',
  },
  bee: {
    id: 'bee',
    name: 'Bee (An-Nahl)',
    nameAr: 'النحل',
    coords: [31.0000, 35.0000],
    color: '#EAB308',
    icon: 'Bug',
    animal: 'Bee',
    verses: ['16:68-69'],
    description: 'Allah inspired the bee to build hives and produce honey - a healing for mankind.',
    event: 'Surah An-Nahl (The Bee) named after this blessed creature.',
  },
  birds: {
    id: 'birds',
    name: 'Birds of Ababil',
    nameAr: 'طير أبابيل',
    coords: [21.4225, 39.8262],
    color: '#EF4444',
    icon: 'Bird',
    animal: 'Birds (Ababil)',
    verses: ['105:3-4'],
    description: 'Flocks of birds carrying stones of baked clay destroyed Abraha\'s elephant army.',
    event: 'Made them like eaten straw - divine protection of the Kaaba.',
  },
};

// ============================================================================
// BANI ISRAEL JOURNEY - Exodus Locations
// ============================================================================

export const BANI_ISRAEL_JOURNEY = {
  twelveSpnings: {
    id: 'twelveSpnings',
    name: '12 Springs of Musa',
    nameAr: 'اثنتا عشرة عينا',
    coords: [28.8000, 34.5000],
    color: '#06B6D4',
    description: 'Where Musa struck the rock and 12 springs gushed forth, one for each tribe.',
    verses: ['2:60', '7:160'],
    prophet: 'Musa',
    event: 'Each tribe knew their drinking place.',
  },
  mountainRaised: {
    id: 'mountainRaised',
    name: 'Mountain Raised Over Them',
    nameAr: 'رفع الجبل فوقهم',
    coords: [28.5500, 33.9500],
    color: '#8B5CF6',
    description: 'Allah raised Mount Tur over Bani Israel as they hesitated to accept the covenant.',
    verses: ['2:63', '2:93', '4:154', '7:171'],
    prophet: 'Musa',
    event: 'They thought it would fall on them - a warning to hold firmly to the Torah.',
  },
  goldenCalf: {
    id: 'goldenCalf',
    name: 'Golden Calf Worship',
    nameAr: 'عبادة العجل',
    coords: [28.6000, 34.0000],
    color: '#F59E0B',
    description: 'Where Bani Israel worshipped the golden calf while Musa was on the mountain.',
    verses: ['2:51-54', '7:148-153', '20:83-98'],
    prophet: 'Musa',
    event: 'Samiri made the calf from their jewelry. Musa burned it and scattered it in the sea.',
  },
  fortyYears: {
    id: 'fortyYears',
    name: '40 Years Wandering',
    nameAr: 'التيه أربعين سنة',
    coords: [29.5000, 34.5000],
    color: '#EF4444',
    description: 'The wilderness where Bani Israel wandered for 40 years as punishment for refusing to enter the Holy Land.',
    verses: ['5:26'],
    prophet: 'Musa',
    event: 'They said "Go you and your Lord and fight" - so Allah forbade them the land for 40 years.',
  },
  mannaSalwa: {
    id: 'mannaSalwa',
    name: 'Manna and Quail Descended',
    nameAr: 'نزول المن والسلوى',
    coords: [29.0000, 34.2000],
    color: '#10B981',
    description: 'Where Allah sent down Manna (sweet substance) and Salwa (quail) as food.',
    verses: ['2:57', '7:160', '20:80'],
    prophet: 'Musa',
    event: 'Heavenly provision in the desert - but they complained wanting variety.',
  },
};

// ============================================================================
// SCIENTIFIC MIRACLES - Quran & Science Locations
// ============================================================================

export const SCIENTIFIC_MIRACLES = {
  twoSeasBarrier: {
    id: 'twoSeasBarrier',
    name: 'Barrier Between Two Seas',
    nameAr: 'البرزخ بين البحرين',
    coords: [35.9000, -5.5000],
    color: '#0EA5E9',
    description: 'The meeting point of Mediterranean and Atlantic where waters don\'t mix - a barrier (barzakh).',
    verses: ['55:19-20', '25:53', '27:61'],
    scientificNote: 'Modern oceanography confirms different densities and salinities prevent mixing.',
    fact: 'This was unknown until 20th century oceanographic studies.',
  },
  lowestPoint: {
    id: 'lowestPoint',
    name: 'Lowest Point on Earth',
    nameAr: 'أدنى الأرض',
    coords: [31.5000, 35.5000],
    color: '#DC2626',
    description: 'The Dead Sea area - lowest land point on Earth, where the Romans defeated the Persians.',
    verses: ['30:2-4'],
    scientificNote: 'At 430m below sea level, this is Earth\'s lowest elevation on land.',
    fact: 'The Quran predicted the Roman victory "in the lowest land" - both meanings true.',
  },
  mountainsPegs: {
    id: 'mountainsPegs',
    name: 'Mountains as Pegs',
    nameAr: 'الجبال أوتادا',
    coords: [27.9881, 86.9250],
    color: '#6B7280',
    description: 'Mountains have deep roots like pegs/stakes that stabilize the Earth\'s crust.',
    verses: ['78:7', '21:31', '16:15', '31:10'],
    scientificNote: 'Isostasy - mountains have roots extending deep into the mantle.',
    fact: 'The Himalayas have roots 3x deeper than their height.',
  },
  ironSentDown: {
    id: 'ironSentDown',
    name: 'Iron Sent Down',
    nameAr: 'أنزلنا الحديد',
    coords: [19.4326, -99.1332],
    color: '#374151',
    description: 'Iron was "sent down" - it came from supernovae explosions in space.',
    verses: ['57:25'],
    scientificNote: 'Iron cannot form in our sun. It requires supernovae to create.',
    fact: 'Meteor Crater, Arizona and all iron on Earth came from space.',
  },
  expandingUniverse: {
    id: 'expandingUniverse',
    name: 'Expanding Universe',
    nameAr: 'توسع الكون',
    coords: [0, 0],
    color: '#8B5CF6',
    description: 'The universe is continuously expanding - "And the heaven We constructed with strength, and indeed, We are [its] expander."',
    verses: ['51:47'],
    scientificNote: 'Hubble discovered this in 1929. The Quran mentioned it 1400 years ago.',
    fact: 'The universe expands at about 73 km/s per megaparsec.',
  },
  embryology: {
    id: 'embryology',
    name: 'Stages of Embryo',
    nameAr: 'مراحل الجنين',
    coords: [21.4225, 39.8262],
    color: '#EC4899',
    description: 'The Quran describes embryonic development stages with remarkable accuracy.',
    verses: ['23:12-14', '22:5', '39:6'],
    scientificNote: 'Nutfah (drop), Alaqah (clinging clot), Mudghah (chewed lump) - accurate descriptions.',
    fact: 'These stages were unknown until microscopes in the 20th century.',
  },
  frontalLobe: {
    id: 'frontalLobe',
    name: 'Frontal Lobe - Lying & Sin',
    nameAr: 'الناصية الكاذبة',
    coords: [21.4225, 39.8262],
    color: '#F97316',
    description: '"A lying, sinful forelock (nasiyah)" - the prefrontal cortex controls decision-making.',
    verses: ['96:15-16'],
    scientificNote: 'The prefrontal cortex is responsible for lying, planning, and motivation.',
    fact: 'Neuroscience discovered this function in the 20th century.',
  },
  waterCycle: {
    id: 'waterCycle',
    name: 'Water Cycle',
    nameAr: 'دورة المياه',
    coords: [25.0000, 45.0000],
    color: '#06B6D4',
    description: 'The Quran describes evaporation, cloud formation, and rain returning to earth.',
    verses: ['39:21', '30:48', '23:18', '15:22'],
    scientificNote: 'The complete hydrological cycle described accurately.',
    fact: 'Bernard Palissy only described this in 1580 CE.',
  },
};

// ============================================================================
// HISTORICAL TREATIES & COVENANTS
// ============================================================================

export const TREATY_LOCATIONS = {
  hudaybiyahTreaty: {
    id: 'hudaybiyahTreaty',
    name: 'Treaty of Hudaybiyah',
    nameAr: 'صلح الحديبية',
    coords: [21.4500, 39.6000],
    color: '#10B981',
    year: '628 CE',
    description: 'A 10-year peace treaty that seemed unfavorable but Allah called it a "manifest victory".',
    verses: ['48:1-29'],
    significance: 'Allowed peaceful spread of Islam and led to Conquest of Makkah 2 years later.',
  },
  aqabaFirst: {
    id: 'aqabaFirst',
    name: 'First Pledge of Aqaba',
    nameAr: 'بيعة العقبة الأولى',
    coords: [21.4300, 39.8200],
    color: '#8B5CF6',
    year: '621 CE',
    description: '12 men from Yathrib (Madinah) pledged allegiance to the Prophet.',
    verses: [],
    significance: 'First acceptance of Islam by Madinans, paving way for Hijra.',
  },
  aqabaSecond: {
    id: 'aqabaSecond',
    name: 'Second Pledge of Aqaba',
    nameAr: 'بيعة العقبة الثانية',
    coords: [21.4300, 39.8200],
    color: '#A855F7',
    year: '622 CE',
    description: '73 men and 2 women pledged to protect the Prophet as they protect their families.',
    verses: [],
    significance: 'Invitation for Prophet to migrate to Madinah - Hijra began.',
  },
  ghadirKhumm: {
    id: 'ghadirKhumm',
    name: 'Ghadir Khumm',
    nameAr: 'غدير خم',
    coords: [22.8000, 39.2000],
    color: '#F59E0B',
    year: '632 CE',
    description: 'Location where Prophet gave his last major sermon on return from Farewell Hajj.',
    verses: ['5:67'],
    significance: 'Important sermon about following Quran and Ahlul Bayt.',
  },
  madinahConstitution: {
    id: 'madinahConstitution',
    name: 'Constitution of Madinah',
    nameAr: 'صحيفة المدينة',
    coords: [24.4672, 39.6111],
    color: '#3B82F6',
    year: '622 CE',
    description: 'First written constitution establishing rights of Muslims, Jews, and others in Madinah.',
    verses: [],
    significance: 'Revolutionary document of religious tolerance and civic rights.',
  },
};

// ============================================================================
// QURANIC PLANTS & NATURE
// ============================================================================

export const QURANIC_PLANTS = {
  olive: {
    id: 'olive',
    name: 'Olive Tree (Zaytun)',
    nameAr: 'شجرة الزيتون',
    coords: [31.9000, 35.2000],
    color: '#84CC16',
    description: 'Blessed tree mentioned with figs. Olive oil is light upon light.',
    verses: ['95:1', '24:35', '6:99', '6:141'],
    benefit: 'Neither of the East nor West - its oil lights without fire touching it.',
  },
  fig: {
    id: 'fig',
    name: 'Fig Tree (Teen)',
    nameAr: 'شجرة التين',
    coords: [32.0000, 35.0000],
    color: '#65A30D',
    description: 'Allah swears by the fig in Surah At-Teen.',
    verses: ['95:1'],
    benefit: 'Paired with olive and Mount Sinai as sacred symbols.',
  },
  datePalm: {
    id: 'datePalm',
    name: 'Date Palm (Nakhlah)',
    nameAr: 'شجرة النخل',
    coords: [24.4672, 39.6111],
    color: '#A16207',
    description: 'Maryam shook the palm for fresh dates. The Prophet loved dates.',
    verses: ['19:25', '6:99', '55:68', '36:34'],
    benefit: 'Break fast with dates - the Sunnah way.',
  },
  pomegranate: {
    id: 'pomegranate',
    name: 'Pomegranate (Rumman)',
    nameAr: 'الرمان',
    coords: [36.0000, 37.0000],
    color: '#DC2626',
    description: 'Fruit of Paradise, mentioned among Allah\'s signs.',
    verses: ['6:99', '6:141', '55:68'],
    benefit: 'One of the fruits of Jannah.',
  },
  grape: {
    id: 'grape',
    name: 'Grapes (Inab)',
    nameAr: 'العنب',
    coords: [33.0000, 36.0000],
    color: '#7C3AED',
    description: 'Among the fruits Allah provides, mentioned multiple times.',
    verses: ['6:99', '16:67', '17:91', '23:19'],
    benefit: 'Used for both eating and drink (non-alcoholic in Paradise).',
  },
  loteTree: {
    id: 'loteTree',
    name: 'Lote Tree (Sidra)',
    nameAr: 'سدرة المنتهى',
    coords: [21.4225, 39.8262],
    color: '#059669',
    description: 'Sidrat al-Muntaha - the Lote Tree at the boundary, where Jibreel stopped.',
    verses: ['53:14-16'],
    benefit: 'The farthest point reached during Mi\'raj, near Jannah.',
  },
  garlic: {
    id: 'garlic',
    name: 'Garlic, Onions, Lentils',
    nameAr: 'الثوم والبصل والعدس',
    coords: [26.8206, 30.8025],
    color: '#78716C',
    description: 'Foods Bani Israel complained about wanting instead of Manna.',
    verses: ['2:61'],
    benefit: 'They preferred earthly food over heavenly provision.',
  },
};

// ============================================================================
// ISRA & MI\'RAJ JOURNEY POINTS
// ============================================================================

export const ISRA_MIRAJ_JOURNEY = {
  masjidHaram: {
    id: 'israStart',
    name: 'Start - Masjid al-Haram',
    nameAr: 'البداية - المسجد الحرام',
    coords: [21.4225, 39.8262],
    color: '#F59E0B',
    description: 'The Night Journey began here. Jibreel came with Buraq.',
    verses: ['17:1'],
    sequence: 1,
  },
  buraqWall: {
    id: 'buraqWall',
    name: 'Buraq Wall - Jerusalem',
    nameAr: 'حائط البراق',
    coords: [31.7767, 35.2345],
    color: '#3B82F6',
    description: 'Where Buraq was tied. The Prophet led all prophets in prayer.',
    verses: ['17:1'],
    sequence: 2,
  },
  firstHeaven: {
    id: 'firstHeaven',
    name: 'First Heaven - Adam',
    nameAr: 'السماء الأولى - آدم',
    coords: [31.7800, 35.2400],
    color: '#22C55E',
    description: 'Met Prophet Adam who greeted him as son and prophet.',
    verses: [],
    sequence: 3,
  },
  secondHeaven: {
    id: 'secondHeaven',
    name: 'Second Heaven - Isa & Yahya',
    nameAr: 'السماء الثانية',
    coords: [31.7820, 35.2420],
    color: '#06B6D4',
    description: 'Met Prophets Isa (Jesus) and Yahya (John) - cousins.',
    verses: [],
    sequence: 4,
  },
  thirdHeaven: {
    id: 'thirdHeaven',
    name: 'Third Heaven - Yusuf',
    nameAr: 'السماء الثالثة - يوسف',
    coords: [31.7840, 35.2440],
    color: '#8B5CF6',
    description: 'Met Prophet Yusuf, given half of all beauty.',
    verses: [],
    sequence: 5,
  },
  fourthHeaven: {
    id: 'fourthHeaven',
    name: 'Fourth Heaven - Idris',
    nameAr: 'السماء الرابعة - إدريس',
    coords: [31.7860, 35.2460],
    color: '#EC4899',
    description: 'Met Prophet Idris, raised to a high station.',
    verses: ['19:56-57'],
    sequence: 6,
  },
  fifthHeaven: {
    id: 'fifthHeaven',
    name: 'Fifth Heaven - Harun',
    nameAr: 'السماء الخامسة - هارون',
    coords: [31.7880, 35.2480],
    color: '#F97316',
    description: 'Met Prophet Harun (Aaron), brother of Musa.',
    verses: [],
    sequence: 7,
  },
  sixthHeaven: {
    id: 'sixthHeaven',
    name: 'Sixth Heaven - Musa',
    nameAr: 'السماء السادسة - موسى',
    coords: [31.7900, 35.2500],
    color: '#EF4444',
    description: 'Met Prophet Musa who wept that more of Muhammad\'s ummah would enter Paradise than his.',
    verses: [],
    sequence: 8,
  },
  seventhHeaven: {
    id: 'seventhHeaven',
    name: 'Seventh Heaven - Ibrahim',
    nameAr: 'السماء السابعة - إبراهيم',
    coords: [31.7920, 35.2520],
    color: '#F59E0B',
    description: 'Met Prophet Ibrahim, leaning against Bayt al-Ma\'mur (Heavenly Kaaba).',
    verses: [],
    sequence: 9,
  },
  sidratulMuntaha: {
    id: 'sidratulMuntaha',
    name: 'Sidrat al-Muntaha',
    nameAr: 'سدرة المنتهى',
    coords: [31.7950, 35.2550],
    color: '#10B981',
    description: 'The Lote Tree at the boundary - Jibreel could go no further.',
    verses: ['53:14-16'],
    sequence: 10,
  },
  divinePresence: {
    id: 'divinePresence',
    name: 'Divine Audience',
    nameAr: 'المناجاة',
    coords: [31.8000, 35.2600],
    color: '#FFFFFF',
    description: 'Muhammad ﷺ received command of 5 daily prayers (originally 50, reduced by Musa\'s advice).',
    verses: ['53:8-18'],
    sequence: 11,
  },
};

// ============================================================================
// TRADE ROUTES
// ============================================================================

export const TRADE_ROUTES = {
  winterRoute: {
    id: 'winterRoute',
    name: 'Winter Journey (Yemen)',
    nameAr: 'رحلة الشتاء',
    color: '#3B82F6',
    verses: ['106:1-2'],
    description: 'The Quraysh winter trade caravan to Yemen for spices and goods.',
    waypoints: [
      { coords: [21.4225, 39.8262], name: 'Makkah' },
      { coords: [17.0000, 42.5000], name: 'Najran' },
      { coords: [15.3694, 44.1910], name: 'Sana\'a (Yemen)' },
    ],
  },
  summerRoute: {
    id: 'summerRoute',
    name: 'Summer Journey (Syria)',
    nameAr: 'رحلة الصيف',
    color: '#F59E0B',
    verses: ['106:2'],
    description: 'The Quraysh summer trade caravan to Syria (Sham).',
    waypoints: [
      { coords: [21.4225, 39.8262], name: 'Makkah' },
      { coords: [24.4672, 39.6111], name: 'Madinah' },
      { coords: [29.5000, 35.0000], name: 'Petra' },
      { coords: [33.5138, 36.2765], name: 'Damascus' },
    ],
  },
  hajjRoute: {
    id: 'hajjRoute',
    name: 'Traditional Hajj Route',
    nameAr: 'طريق الحج',
    color: '#10B981',
    verses: ['22:27'],
    description: 'Ancient routes pilgrims took to perform Hajj.',
    waypoints: [
      { coords: [33.5138, 36.2765], name: 'Damascus' },
      { coords: [29.5000, 35.0000], name: 'Petra' },
      { coords: [28.5000, 35.5000], name: 'Tabuk' },
      { coords: [24.4672, 39.6111], name: 'Madinah' },
      { coords: [21.4225, 39.8262], name: 'Makkah' },
    ],
  },
  hijraRoute: {
    id: 'hijraRoute',
    name: 'Hijra Route',
    nameAr: 'طريق الهجرة',
    color: '#EC4899',
    verses: ['9:40'],
    description: 'The route taken by Prophet Muhammad and Abu Bakr during the migration to Madinah.',
    waypoints: [
      { coords: [21.4225, 39.8262], name: 'Makkah' },
      { coords: [21.3761, 39.8486], name: 'Cave Thawr' },
      { coords: [22.0000, 39.0000], name: 'Coastal Route' },
      { coords: [23.0000, 39.2000], name: 'Quba' },
      { coords: [24.4672, 39.6111], name: 'Madinah' },
    ],
  },
};

// ============================================================================
// PROPHET JOURNEYS
// ============================================================================

export const PROPHET_JOURNEYS = {
  ibrahim: {
    id: 'ibrahim',
    name: 'Journey of Ibrahim',
    nameAr: 'رحلة إبراهيم',
    color: '#F59E0B',
    prophet: 'Ibrahim',
    description: 'From Ur to Canaan to Makkah',
    waypoints: [
      { location: 'babylon', name: 'Babylon (Ur)', description: 'Birthplace, confronted idol worship' },
      { location: 'palestine', name: 'Canaan', description: 'Settled in the blessed land' },
      { location: 'egypt', name: 'Egypt', description: 'Brief stay' },
      { location: 'makkah', name: 'Makkah', description: 'Built the Kaaba with Ismail' },
    ],
    verses: ['21:71', '2:127'],
  },
  musa: {
    id: 'musa',
    name: 'Journey of Musa',
    nameAr: 'رحلة موسى',
    color: '#3B82F6',
    prophet: 'Musa',
    description: 'From Egypt through Sinai to freedom',
    waypoints: [
      { location: 'egypt', name: 'Egypt', description: 'Birth and confrontation with Pharaoh' },
      { location: 'madyan', name: 'Madyan', description: 'Exile and marriage' },
      { location: 'sinai', name: 'Mount Sinai', description: 'Received the Torah' },
      { location: 'palestine', name: 'Holy Land', description: 'Led Bani Israel towards Canaan' },
    ],
    verses: ['20:9-98', '28:3-43'],
  },
  hijra: {
    id: 'hijra',
    name: 'The Hijra',
    nameAr: 'الهجرة النبوية',
    color: '#10B981',
    prophet: 'Muhammad',
    description: 'Migration from Makkah to Madinah',
    waypoints: [
      { location: 'makkah', name: 'Makkah', description: 'Departure under cover of night' },
      { location: 'caveThawr', name: 'Cave Thawr', description: 'Hiding for 3 nights' },
      { location: 'madinah', name: 'Madinah', description: 'Warm welcome and new beginning' },
    ],
    verses: ['9:40'],
  },
  isra: {
    id: 'isra',
    name: 'Isra and Mi\'raj',
    nameAr: 'الإسراء والمعراج',
    color: '#8B5CF6',
    prophet: 'Muhammad',
    description: 'The Night Journey and Ascension',
    waypoints: [
      { location: 'makkah', name: 'Masjid al-Haram', description: 'Beginning of the Night Journey' },
      { location: 'jerusalem', name: 'Al-Aqsa', description: 'Led prayers with all prophets' },
    ],
    verses: ['17:1'],
  },
  yusuf: {
    id: 'yusuf',
    name: 'Journey of Yusuf',
    nameAr: 'رحلة يوسف',
    color: '#06B6D4',
    prophet: 'Yusuf',
    description: 'From Canaan to Egypt - slavery to sovereignty',
    waypoints: [
      { location: 'palestine', name: 'Canaan', description: 'Thrown in the well by brothers' },
      { location: 'egypt', name: 'Egypt', description: 'Sold as slave, rose to become minister' },
    ],
    verses: ['12:1-111'],
  },
};

// ============================================================================
// TIMELINE DATA
// ============================================================================

export const TIMELINE_EVENTS = [
  { year: -4000, label: 'Adam', location: 'Unknown', type: 'prophet' },
  { year: -3000, label: 'Nuh & The Flood', location: 'judi', type: 'event' },
  { year: -2000, label: 'Ibrahim Born', location: 'babylon', type: 'prophet' },
  { year: -1900, label: 'Lut\'s People Destroyed', location: 'deadSea', type: 'destruction' },
  { year: -1800, label: 'Ismail & Kaaba', location: 'makkah', type: 'event' },
  { year: -1700, label: 'Yusuf in Egypt', location: 'egypt', type: 'prophet' },
  { year: -1400, label: 'Musa & Exodus', location: 'egypt', type: 'prophet' },
  { year: -1350, label: 'Torah Revealed', location: 'sinai', type: 'revelation' },
  { year: -1200, label: 'Thamud Destroyed', location: 'alHijr', type: 'destruction' },
  { year: -1000, label: 'Dawud & Sulaiman', location: 'jerusalem', type: 'prophet' },
  { year: -800, label: 'Yunus & Nineveh', location: 'ninawa', type: 'prophet' },
  { year: 0, label: 'Isa Born', location: 'palestine', type: 'prophet' },
  { year: 570, label: 'Year of Elephant', location: 'makkah', type: 'event' },
  { year: 570, label: 'Muhammad ﷺ Born', location: 'makkah', type: 'prophet' },
  { year: 610, label: 'First Revelation', location: 'caveHira', type: 'revelation' },
  { year: 621, label: 'Isra & Mi\'raj', location: 'jerusalem', type: 'miracle' },
  { year: 622, label: 'Hijra', location: 'madinah', type: 'event' },
  { year: 624, label: 'Battle of Badr', location: 'badr', type: 'battle' },
  { year: 625, label: 'Battle of Uhud', location: 'uhud', type: 'battle' },
  { year: 627, label: 'Battle of Khandaq', location: 'khandaq', type: 'battle' },
  { year: 630, label: 'Conquest of Makkah', location: 'makkah', type: 'event' },
  { year: 632, label: 'Prophet ﷺ Passed', location: 'madinah', type: 'event' },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getAllLocations = () => Object.values(PROPHETIC_LOCATIONS);
export const getLocation = (id) => PROPHETIC_LOCATIONS[id] || null;
export const getLocationsByCategory = (category) =>
  Object.values(PROPHETIC_LOCATIONS).filter(loc => loc.category === category);
export const getLocationsByProphet = (prophetName) =>
  Object.values(PROPHETIC_LOCATIONS).filter(loc => loc.prophets?.includes(prophetName));

export const getAllJourneys = () => Object.values(PROPHET_JOURNEYS);
export const getJourney = (id) => PROPHET_JOURNEYS[id] || null;

export const getAllDestroyedNations = () => Object.values(DESTROYED_NATIONS);
export const getAllMiracles = () => Object.values(MIRACLES_LOCATIONS);
export const getAllAnimals = () => Object.values(QURANIC_ANIMALS);
export const getAllTradeRoutes = () => Object.values(TRADE_ROUTES);
export const getTimelineEvents = () => TIMELINE_EVENTS;

// New helper functions
export const getAllSacredMosques = () => Object.values(SACRED_MOSQUES);
export const getAllRevelationLocations = () => Object.values(REVELATION_LOCATIONS);
export const getAllSpecialLocations = () => Object.values(SPECIAL_LOCATIONS);
export const getAllProphetGraves = () => Object.values(PROPHET_GRAVES);
export const getAllQuranicCaves = () => Object.values(QURANIC_CAVES);

// New data exports
export const getAllBaniIsraelJourney = () => Object.values(BANI_ISRAEL_JOURNEY);
export const getAllScientificMiracles = () => Object.values(SCIENTIFIC_MIRACLES);
export const getAllTreatyLocations = () => Object.values(TREATY_LOCATIONS);
export const getAllQuranicPlants = () => Object.values(QURANIC_PLANTS);
export const getAllIsraMirajJourney = () => Object.values(ISRA_MIRAJ_JOURNEY);

// Qibla calculation from any point
export const calculateQibla = (lat, lng) => {
  const kaabaLat = 21.4225 * (Math.PI / 180);
  const kaabaLng = 39.8262 * (Math.PI / 180);
  const userLat = lat * (Math.PI / 180);
  const userLng = lng * (Math.PI / 180);

  const y = Math.sin(kaabaLng - userLng);
  const x = Math.cos(userLat) * Math.tan(kaabaLat) - Math.sin(userLat) * Math.cos(kaabaLng - userLng);

  let qibla = Math.atan2(y, x) * (180 / Math.PI);
  qibla = (qibla + 360) % 360;

  return qibla;
};

// ============================================================================
// QURANIC MOUNTAINS - Mountains mentioned in Quran
// ============================================================================

export const QURANIC_MOUNTAINS = {
  sinai: {
    id: 'sinai',
    name: 'Mount Sinai (Tur)',
    nameAr: 'جبل الطور',
    coords: [28.5456, 33.9756],
    color: '#8B4513',
    icon: 'Mountain',
    description: 'Where Allah spoke directly to Musa and gave him the Torah. Called "Tur" in Quran.',
    significance: 'Most sacred mountain - Allah spoke to Musa here',
    verses: [
      { ref: '2:63', topic: 'Mountain raised over Bani Israel' },
      { ref: '19:52', topic: 'Called Musa from right side of mountain' },
      { ref: '28:29', topic: 'Musa saw fire at the mountain' },
      { ref: '7:143', topic: 'Mountain crumbled when Allah manifested' },
      { ref: '95:2', topic: 'Allah swears by Mount Sinai' },
    ],
    facts: ['Called "Tur Sina" in Quran', 'Location of burning bush', 'Tablets given here', 'Mountain crumbled from Allah\'s light'],
  },
  judi: {
    id: 'judi',
    name: 'Mount Judi',
    nameAr: 'جبل الجودي',
    coords: [37.3, 42.4],
    color: '#6B8E23',
    icon: 'Mountain',
    description: 'Where Nuh\'s Ark came to rest after the great flood.',
    significance: 'Landing place of the Ark',
    verses: [
      { ref: '11:44', topic: 'Ark rested on Mount Judi' },
    ],
    facts: ['Located in southeastern Turkey', 'Ark landed here after flood receded', 'Different from Mount Ararat in Bible'],
  },
  safaMarwa: {
    id: 'safaMarwa',
    name: 'Safa and Marwa',
    nameAr: 'الصفا والمروة',
    coords: [21.4225, 39.8262],
    color: '#DAA520',
    icon: 'Mountain',
    description: 'Two hills between which Hajar ran searching for water for baby Ismail.',
    significance: 'Sa\'i (walking between them) is pillar of Hajj/Umrah',
    verses: [
      { ref: '2:158', topic: 'Safa and Marwa are among symbols of Allah' },
    ],
    facts: ['Now enclosed within Masjid al-Haram', 'Hajar ran 7 times between them', 'Zamzam burst forth nearby', 'Sa\'i commemorates her search'],
  },
  arafat: {
    id: 'arafat',
    name: 'Mount Arafat',
    nameAr: 'جبل عرفات',
    coords: [21.3549, 39.9841],
    color: '#CD853F',
    icon: 'Mountain',
    description: 'Where pilgrims stand on 9th Dhul Hijjah. Site of Prophet\'s Farewell Sermon.',
    significance: 'Standing here is the pillar of Hajj - "Hajj is Arafat"',
    verses: [
      { ref: '2:198', topic: 'Remember Allah at al-Mash\'ar al-Haram' },
    ],
    facts: ['Farewell Sermon delivered here', 'Hajj invalid without standing here', 'Called "Day of Arafah"', 'Adam and Hawwa reunited here'],
  },
  uhud: {
    id: 'uhud',
    name: 'Mount Uhud',
    nameAr: 'جبل أحد',
    coords: [24.5021, 39.6171],
    color: '#A0522D',
    icon: 'Mountain',
    description: 'Site of Battle of Uhud. Prophet ﷺ said: "Uhud is a mountain that loves us and we love it."',
    significance: 'Battle site, martyrs buried here including Hamza',
    verses: [
      { ref: '3:121', topic: 'Prophet positioned believers for battle' },
      { ref: '3:152', topic: 'Archers left their positions' },
    ],
    facts: ['70 companions martyred here', 'Hamza buried at its foot', 'Archers\' Hill nearby', 'Prophet injured in this battle'],
  },
  hira: {
    id: 'hira',
    name: 'Jabal al-Noor (Cave Hira)',
    nameAr: 'جبل النور',
    coords: [21.4575, 39.8583],
    color: '#B8860B',
    icon: 'Mountain',
    description: 'Mountain containing Cave Hira where first revelation came to Prophet ﷺ.',
    significance: 'First Quranic revelation (Surah Alaq) came here',
    verses: [
      { ref: '96:1', topic: 'Read! First word revealed here' },
    ],
    facts: ['Prophet used to meditate here', 'Jibreel appeared here first time', '620 steps to reach cave', 'Cave fits 4-5 people'],
  },
  thawr: {
    id: 'thawr',
    name: 'Jabal Thawr',
    nameAr: 'جبل ثور',
    coords: [21.3767, 39.8486],
    color: '#8B7355',
    icon: 'Mountain',
    description: 'Mountain with cave where Prophet ﷺ and Abu Bakr hid during Hijra.',
    significance: 'Refuge during migration to Madinah',
    verses: [
      { ref: '9:40', topic: 'Two in the cave - Allah is with us' },
    ],
    facts: ['Hid here for 3 days', 'Spider web and dove nest protected them', 'South of Makkah', 'Quraysh searched but didn\'t find them'],
  },
};

// ============================================================================
// QURANIC WATERS - Rivers, Seas mentioned in Quran
// ============================================================================

export const QURANIC_WATERS = {
  nile: {
    id: 'nile',
    name: 'River Nile',
    nameAr: 'نهر النيل',
    coords: [30.0444, 31.2357],
    color: '#1E90FF',
    icon: 'Waves',
    type: 'river',
    description: 'The river where baby Musa was placed in a basket and found by Pharaoh\'s family.',
    verses: [
      { ref: '20:39', topic: 'Put him in the chest and into the river' },
      { ref: '28:7', topic: 'Cast him into the river' },
    ],
    facts: ['Musa placed in basket here', 'Pharaoh\'s wife found him', 'Longest river in Africa', 'Sustained ancient Egypt'],
  },
  redSea: {
    id: 'redSea',
    name: 'Red Sea (Parting)',
    nameAr: 'البحر الأحمر',
    coords: [28.2, 33.5],
    color: '#DC143C',
    icon: 'Waves',
    type: 'sea',
    description: 'Sea that Allah parted for Musa and Bani Israel, then drowned Pharaoh.',
    verses: [
      { ref: '26:63', topic: 'Strike the sea - it parted' },
      { ref: '2:50', topic: 'Parted the sea, saved you, drowned Pharaoh' },
      { ref: '10:90', topic: 'Pharaoh followed until drowned' },
    ],
    facts: ['Parted into 12 paths for 12 tribes', 'Pharaoh and army drowned', 'Pharaoh\'s body preserved as sign', 'Crossing point debated'],
  },
  twoSeas: {
    id: 'twoSeas',
    name: 'Meeting of Two Seas',
    nameAr: 'مجمع البحرين',
    coords: [26.0667, 50.5577],
    color: '#00CED1',
    icon: 'Waves',
    type: 'sea',
    description: 'Where Musa met Khidr. Two seas that meet but don\'t mix - mentioned as sign of Allah.',
    verses: [
      { ref: '18:60', topic: 'Musa: I will not stop until I reach junction of two seas' },
      { ref: '55:19-20', topic: 'Two seas meeting, barrier between them' },
      { ref: '25:53', topic: 'Two seas - fresh and salty - barrier between' },
    ],
    facts: ['Scientific miracle - different density waters', 'Musa met Khidr here', 'Possibly Strait of Hormuz', 'Fresh and salt water don\'t mix'],
  },
  zamzam: {
    id: 'zamzam',
    name: 'Well of Zamzam',
    nameAr: 'بئر زمزم',
    coords: [21.4225, 39.8265],
    color: '#4169E1',
    icon: 'Waves',
    type: 'well',
    description: 'Miraculous well that sprang for baby Ismail when Hajar searched for water.',
    verses: [
      { ref: '14:37', topic: 'Ibrahim left family in barren valley' },
    ],
    facts: ['Flowing for 4000+ years', 'Never dried up', 'Healing properties', 'Ismail kicked and water appeared', 'Most consumed water in world during Hajj'],
  },
  euphrates: {
    id: 'euphrates',
    name: 'Euphrates River',
    nameAr: 'نهر الفرات',
    coords: [31.0, 47.5],
    color: '#4682B4',
    icon: 'Waves',
    type: 'river',
    description: 'One of rivers of Paradise according to hadith. Flows through Iraq.',
    facts: ['River of Paradise (hadith)', 'Will reveal mountain of gold (end times)', 'Cradle of civilization', 'Ibrahim\'s homeland nearby'],
  },
};

// ============================================================================
// BATTLE LOCATIONS - Battles mentioned in Quran
// ============================================================================

export const BATTLE_LOCATIONS = {
  badr: {
    id: 'badr',
    name: 'Battle of Badr',
    nameAr: 'غزوة بدر',
    coords: [23.7833, 38.7833],
    color: '#DC2626',
    icon: 'Swords',
    date: '17 Ramadan 2 AH (624 CE)',
    description: 'First major battle of Islam. 313 Muslims defeated 1000 Quraysh. Called "Yawm al-Furqan" (Day of Criterion).',
    muslims: 313,
    enemies: 1000,
    outcome: 'Decisive Muslim victory',
    verses: [
      { ref: '3:123', topic: 'Allah helped you at Badr when you were weak' },
      { ref: '8:5-19', topic: 'Detailed account of battle' },
      { ref: '8:9', topic: '1000 angels sent to help' },
      { ref: '8:17', topic: 'You did not throw when you threw, but Allah threw' },
      { ref: '8:42', topic: 'Day the two armies met' },
    ],
    facts: ['70 enemies killed, 70 captured', 'Abu Jahl killed', 'Angels fought alongside Muslims', 'Called Day of Criterion (Furqan)'],
  },
  uhud: {
    id: 'uhud',
    name: 'Battle of Uhud',
    nameAr: 'غزوة أحد',
    coords: [24.5021, 39.6171],
    color: '#F97316',
    icon: 'Swords',
    date: '7 Shawwal 3 AH (625 CE)',
    description: 'Second major battle. Muslims initially winning but archers left posts. 70 martyrs including Hamza.',
    muslims: 700,
    enemies: 3000,
    outcome: 'Tactical defeat, strategic draw',
    verses: [
      { ref: '3:121-128', topic: 'Prophet positioning troops' },
      { ref: '3:140', topic: 'Days of varying fortune' },
      { ref: '3:152', topic: 'You lost courage and disobeyed' },
      { ref: '3:165', topic: 'When disaster struck - from yourselves' },
    ],
    facts: ['Hamza martyred', 'Prophet injured', '70 companions martyred', 'Lesson about obedience'],
  },
  khandaq: {
    id: 'khandaq',
    name: 'Battle of the Trench',
    nameAr: 'غزوة الخندق',
    coords: [24.4750, 39.6100],
    color: '#7C3AED',
    icon: 'Swords',
    date: '5 AH (627 CE)',
    description: 'Confederates of 10,000 besieged Madinah. Salman suggested digging trench. Won without major fighting.',
    muslims: 3000,
    enemies: 10000,
    outcome: 'Muslim victory, siege broken',
    verses: [
      { ref: '33:9-27', topic: 'Detailed account of siege' },
      { ref: '33:10', topic: 'Eyes rolled, hearts reached throats' },
      { ref: '33:25', topic: 'Allah repelled disbelievers with no gain' },
      { ref: '33:26', topic: 'Banu Qurayza brought down from fortresses' },
    ],
    facts: ['Trench idea from Salman al-Farsi', 'Lasted about a month', 'Wind and cold helped Muslims', 'Nu\'aym ibn Mas\'ud caused confusion'],
  },
  hunayn: {
    id: 'hunayn',
    name: 'Battle of Hunayn',
    nameAr: 'غزوة حنين',
    coords: [21.4833, 40.1833],
    color: '#059669',
    icon: 'Swords',
    date: '8 AH (630 CE)',
    description: 'After conquest of Makkah. Initially Muslims fled due to ambush but regrouped and won.',
    muslims: 12000,
    enemies: 20000,
    outcome: 'Muslim victory',
    verses: [
      { ref: '9:25', topic: 'Allah helped you at Hunayn' },
      { ref: '9:26', topic: 'Numbers didn\'t help, then Allah sent tranquility' },
    ],
    facts: ['Large number didn\'t guarantee victory', 'Hawazin and Thaqif tribes', 'Abundant war spoils', 'Lesson about reliance on Allah not numbers'],
  },
  tabuk: {
    id: 'tabuk',
    name: 'Expedition of Tabuk',
    nameAr: 'غزوة تبوك',
    coords: [28.3838, 36.5550],
    color: '#0891B2',
    icon: 'Swords',
    date: '9 AH (630 CE)',
    description: 'Last expedition of Prophet ﷺ. March to Roman frontier. No battle occurred.',
    muslims: 30000,
    outcome: 'No battle - show of strength',
    verses: [
      { ref: '9:38-42', topic: 'Rebuke of those who stayed behind' },
      { ref: '9:81-82', topic: 'Hypocrites rejoiced at staying behind' },
      { ref: '9:117-118', topic: 'Three who were left behind, then forgiven' },
    ],
    facts: ['Longest expedition - 700km', 'Called "Army of Hardship"', 'Tested faith during harvest', 'Three companions boycotted then forgiven'],
  },
};

// ============================================================================
// HIJRA ROUTE - Prophet's Migration Path
// ============================================================================

export const HIJRA_ROUTE = {
  id: 'hijra',
  name: 'The Hijra (Migration)',
  nameAr: 'الهجرة النبوية',
  color: '#10B981',
  date: '622 CE (1 AH)',
  description: 'The migration of Prophet ﷺ from Makkah to Madinah, marking the start of Islamic calendar.',
  waypoints: [
    { id: 'start', name: 'House of Prophet ﷺ', coords: [21.4225, 39.8262], description: 'Left at night while Quraysh planned to kill him', day: 'Night 1' },
    { id: 'abuBakr', name: 'Abu Bakr\'s House', coords: [21.4230, 39.8260], description: 'Met Abu Bakr, left through back window', day: 'Night 1' },
    { id: 'thawr', name: 'Cave Thawr', coords: [21.3767, 39.8486], description: 'Hid for 3 days. Spider web and dove protected them', day: 'Days 1-3', verse: '9:40' },
    { id: 'coastal', name: 'Coastal Route', coords: [22.5, 39.2], description: 'Took unusual coastal route to avoid Quraysh', day: 'Days 4-8' },
    { id: 'quba', name: 'Quba', coords: [24.4392, 39.6172], description: 'First mosque built here. Stayed 14 days', day: 'Day 9+', verse: '9:108' },
    { id: 'madinah', name: 'Madinah', coords: [24.4672, 39.6111], description: 'Arrived to great welcome. Camel chose mosque site', day: 'Final' },
  ],
  totalDistance: '450 km',
  duration: '~2 weeks',
  verses: [
    { ref: '9:40', topic: 'Second of two, in the cave' },
    { ref: '8:30', topic: 'Plot to kill him' },
    { ref: '9:108', topic: 'Mosque founded on piety (Quba)' },
  ],
  facts: [
    'Ali slept in Prophet\'s bed as decoy',
    'Quraysh offered 100 camels reward',
    'Suraqa ibn Malik nearly caught them',
    'Abdullah ibn Ariqat (non-Muslim) was guide',
    'Islamic calendar starts from Hijra',
  ],
};

// ============================================================================
// QIBLA HISTORY - Change of prayer direction
// ============================================================================

export const QIBLA_HISTORY = {
  firstQibla: {
    id: 'firstQibla',
    name: 'First Qibla - Jerusalem',
    nameAr: 'القبلة الأولى',
    coords: [31.7683, 35.2137],
    color: '#8B5CF6',
    icon: 'Compass',
    period: 'Before 2 AH',
    duration: '16-17 months in Madinah',
    description: 'Muslims prayed toward Masjid al-Aqsa in Jerusalem initially.',
    verses: [
      { ref: '2:142', topic: 'Foolish will ask why changed Qibla' },
      { ref: '2:143', topic: 'Made you middle nation, test of who follows Messenger' },
    ],
  },
  secondQibla: {
    id: 'secondQibla',
    name: 'Final Qibla - Kaaba',
    nameAr: 'القبلة - الكعبة',
    coords: [21.4225, 39.8262],
    color: '#F59E0B',
    icon: 'Compass',
    period: 'From 2 AH onwards',
    description: 'Qibla changed to Kaaba in Makkah while Prophet was praying in Masjid al-Qiblatayn.',
    verses: [
      { ref: '2:144', topic: 'Turn your face toward al-Masjid al-Haram' },
      { ref: '2:149', topic: 'Wherever you are, turn faces toward it' },
      { ref: '2:150', topic: 'Turn your face toward al-Masjid al-Haram' },
    ],
  },
  changeLocation: {
    id: 'qiblatayn',
    name: 'Masjid al-Qiblatayn',
    nameAr: 'مسجد القبلتين',
    coords: [24.4806, 39.5750],
    color: '#EC4899',
    icon: 'Mosque',
    description: 'Mosque where Qibla changed during prayer. Prayed part toward Jerusalem, part toward Makkah.',
    facts: ['Only mosque where Prophet prayed both Qiblas', 'Named "Mosque of Two Qiblas"', 'Changed in Rajab 2 AH', 'Companions turned mid-prayer'],
  },
};

// ============================================================================
// QURAYSH TRADE ROUTES - Surah Quraysh
// ============================================================================

export const QURAYSH_ROUTES = {
  winterRoute: {
    id: 'winterRoute',
    name: 'Winter Journey to Yemen',
    nameAr: 'رحلة الشتاء',
    color: '#F97316',
    icon: 'Route',
    destination: 'Yemen',
    description: 'Annual winter trade journey to Yemen for spices, leather, and other goods.',
    waypoints: [
      { name: 'Makkah', coords: [21.4225, 39.8262] },
      { name: 'Taif', coords: [21.2703, 40.4159] },
      { name: 'Najran', coords: [17.5167, 44.2167] },
      { name: 'Sana\'a (Yemen)', coords: [15.3694, 44.1910] },
    ],
    verses: [
      { ref: '106:1-2', topic: 'For the accustomed security of Quraysh - their journeys of winter and summer' },
    ],
    goods: ['Spices', 'Leather', 'Incense', 'Textiles from India'],
  },
  summerRoute: {
    id: 'summerRoute',
    name: 'Summer Journey to Syria',
    nameAr: 'رحلة الصيف',
    color: '#3B82F6',
    icon: 'Route',
    destination: 'Syria (Sham)',
    description: 'Annual summer trade journey to Syria for various goods and trade with Romans.',
    waypoints: [
      { name: 'Makkah', coords: [21.4225, 39.8262] },
      { name: 'Madinah', coords: [24.4672, 39.6111] },
      { name: 'Tabuk', coords: [28.3838, 36.5550] },
      { name: 'Petra', coords: [30.3285, 35.4444] },
      { name: 'Bosra (Syria)', coords: [32.5167, 36.4833] },
      { name: 'Damascus', coords: [33.5138, 36.2765] },
    ],
    verses: [
      { ref: '106:2', topic: 'Journeys of winter and summer' },
      { ref: '106:3-4', topic: 'So worship Lord of this House who fed them and made them safe' },
    ],
    goods: ['Olive oil', 'Dried fruits', 'Weapons', 'Byzantine goods'],
    facts: ['Prophet ﷺ traveled with Abu Talib as youth', 'Met monk Bahira at Bosra', 'Khadijah\'s caravan to Syria'],
  },
};

// ============================================================================
// ANGEL APPEARANCES - Where angels appeared
// ============================================================================

export const ANGEL_APPEARANCES = {
  hiiraRevelation: {
    id: 'hiraRevelation',
    name: 'Jibreel in Cave Hira',
    nameAr: 'جبريل في غار حراء',
    coords: [21.4575, 39.8583],
    color: '#FBBF24',
    icon: 'Sparkles',
    angel: 'Jibreel (Gabriel)',
    description: 'First appearance of Jibreel to Prophet ﷺ with first revelation.',
    event: 'First Quranic revelation',
    verses: [
      { ref: '96:1-5', topic: 'Read! First words revealed' },
      { ref: '53:4-10', topic: 'Taught by one intense in strength' },
    ],
    facts: ['Prophet was 40 years old', 'Jibreel squeezed him three times', 'Khadijah comforted him', 'Waraqah confirmed prophethood'],
  },
  maryamAnnunciation: {
    id: 'maryamAnnunciation',
    name: 'Jibreel to Maryam',
    nameAr: 'جبريل إلى مريم',
    coords: [32.7022, 35.2978],
    color: '#A855F7',
    icon: 'Sparkles',
    angel: 'Jibreel (Gabriel)',
    description: 'Jibreel appeared to Maryam to announce birth of Isa.',
    event: 'Annunciation of Isa\'s birth',
    verses: [
      { ref: '19:17', topic: 'We sent Our Spirit, appeared as perfect man' },
      { ref: '19:19', topic: 'I am messenger to give you pure boy' },
      { ref: '3:45', topic: 'Angels said: Allah gives glad tidings of a Word' },
    ],
    location: 'Eastern place (possibly Nazareth)',
  },
  ibrahimGuests: {
    id: 'ibrahimGuests',
    name: 'Angels Visit Ibrahim',
    nameAr: 'الملائكة عند إبراهيم',
    coords: [31.5247, 35.0954],
    color: '#10B981',
    icon: 'Sparkles',
    angel: 'Multiple angels',
    description: 'Angels in human form visited Ibrahim, gave news of Ishaq, then went to destroy people of Lut.',
    event: 'Good news and warning',
    verses: [
      { ref: '11:69-76', topic: 'Guests of Ibrahim, news of son, going to Lut\'s people' },
      { ref: '15:51-60', topic: 'Honored guests, don\'t be afraid' },
      { ref: '51:24-34', topic: 'Story of Ibrahim\'s honored guests' },
    ],
    facts: ['Brought news of Ishaq', 'Sarah laughed at news', 'Heading to destroy Lut\'s people', 'Ibrahim tried to defend them'],
  },
  badrAngels: {
    id: 'badrAngels',
    name: 'Angels at Badr',
    nameAr: 'الملائكة في بدر',
    coords: [23.7833, 38.7833],
    color: '#DC2626',
    icon: 'Sparkles',
    angel: '1000-5000 angels',
    description: '1000 (then 3000, then 5000) angels sent to help Muslims at Battle of Badr.',
    event: 'Battle of Badr',
    verses: [
      { ref: '8:9', topic: 'I will reinforce you with 1000 angels' },
      { ref: '3:123-125', topic: '3000 angels, if you are patient 5000' },
      { ref: '8:12', topic: 'Strike above necks, strike fingertips' },
    ],
    facts: ['Angels wore white turbans', 'Jibreel led them', 'Enemies saw extra fighters', 'Companions witnessed angel marks on enemies'],
  },
};

// ============================================================================
// FAMOUS DUA LOCATIONS - Where prophets made significant duas
// ============================================================================

export const DUA_LOCATIONS = {
  ibrahimKaaba: {
    id: 'ibrahimKaaba',
    name: 'Ibrahim\'s Duas at Kaaba',
    nameAr: 'دعاء إبراهيم عند الكعبة',
    coords: [21.4225, 39.8262],
    color: '#F59E0B',
    icon: 'Heart',
    prophet: 'Ibrahim',
    description: 'Ibrahim made beautiful duas while building the Kaaba - for Makkah, descendants, and the Ummah.',
    duas: [
      { ref: '2:126', dua: 'Make this city secure, provide fruits to its people' },
      { ref: '2:127', dua: 'Our Lord, accept from us. You are Hearing, Knowing' },
      { ref: '2:128', dua: 'Make us Muslims, and from our descendants a Muslim nation' },
      { ref: '2:129', dua: 'Send among them a Messenger from themselves' },
      { ref: '14:35', dua: 'Make this city secure and keep me and my sons from idols' },
      { ref: '14:37', dua: 'Make hearts incline toward them, provide them fruits' },
      { ref: '14:40', dua: 'Make me establisher of prayer, and my descendants' },
    ],
  },
  yunusWhale: {
    id: 'yunusWhale',
    name: 'Yunus in the Whale',
    nameAr: 'دعاء يونس',
    coords: [36.8, 42.5],
    color: '#0EA5E9',
    icon: 'Heart',
    prophet: 'Yunus',
    description: 'Yunus\'s dua from inside the whale - the most powerful dua for distress.',
    location: 'Inside the whale (sea location approximate)',
    duas: [
      { ref: '21:87', dua: 'La ilaha illa anta, subhanaka, inni kuntu min al-zalimin (No deity except You; glorified are You. Indeed, I was of the wrongdoers)' },
    ],
    facts: ['Called "Dua of Distress"', 'Darkness upon darkness', 'Fish glorified Allah with him', 'Answered by Allah'],
  },
  zakariyaMihrab: {
    id: 'zakariyaMihrab',
    name: 'Zakariya\'s Dua in Mihrab',
    nameAr: 'دعاء زكريا',
    coords: [31.7683, 35.2137],
    color: '#8B5CF6',
    icon: 'Heart',
    prophet: 'Zakariya',
    description: 'Zakariya prayed for a son in his old age, was granted Yahya.',
    location: 'Mihrab (prayer chamber) in Jerusalem',
    duas: [
      { ref: '19:4-6', dua: 'My Lord, my bones have weakened... give me an heir' },
      { ref: '3:38', dua: 'My Lord, grant me righteous offspring' },
      { ref: '21:89', dua: 'My Lord, do not leave me alone [with no heir]' },
    ],
    facts: ['Was over 90 years old', 'Wife was barren', 'Granted Yahya', 'Given sign of not speaking 3 days'],
  },
  musaFear: {
    id: 'musaFear',
    name: 'Musa\'s Dua When Afraid',
    nameAr: 'دعاء موسى',
    coords: [31.5, 34.5],
    color: '#DC2626',
    icon: 'Heart',
    prophet: 'Musa',
    description: 'When Musa fled Egypt fearing Pharaoh, he made this dua.',
    location: 'Fleeing toward Madyan',
    duas: [
      { ref: '28:21', dua: 'Rabbi najjini min al-qawm al-zalimin (My Lord, save me from the wrongdoing people)' },
      { ref: '28:24', dua: 'Rabbi inni lima anzalta ilayya min khayrin faqir (My Lord, I am in need of whatever good You send down to me)' },
      { ref: '20:25-28', dua: 'My Lord, expand my chest, ease my task, untie knot from tongue' },
    ],
    facts: ['Made after accidentally killing Egyptian', 'Helped Shuayb\'s daughters after this dua', 'Married Shuayb\'s daughter'],
  },
  adamRepentance: {
    id: 'adamRepentance',
    name: 'Adam\'s Repentance',
    nameAr: 'توبة آدم',
    coords: [21.4225, 39.8262],
    color: '#22C55E',
    icon: 'Heart',
    prophet: 'Adam',
    description: 'The dua Adam and Hawwa made seeking forgiveness after eating from the tree.',
    duas: [
      { ref: '7:23', dua: 'Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna min al-khasirin (Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy, we will be among the losers)' },
    ],
    facts: ['First dua of repentance', 'Words taught by Allah', 'Forgiveness granted', 'Descended to earth after'],
  },
};

// ============================================================================
// SAHABA GRAVES - Companions' burial locations
// ============================================================================

export const SAHABA_GRAVES = {
  khadijah: {
    id: 'khadijah',
    name: 'Khadijah bint Khuwaylid',
    nameAr: 'خديجة بنت خويلد',
    coords: [21.4273, 39.8261],
    color: '#EC4899',
    icon: 'Heart',
    title: 'Mother of Believers',
    relation: 'First wife of Prophet ﷺ',
    death: '619 CE (before Hijra)',
    location: 'Jannat al-Mualla, Makkah',
    description: 'First believer, first wife, supported Prophet ﷺ with wealth and comfort.',
    facts: ['First to believe', 'Supported Islam with her wealth', 'Mother of Fatimah', 'Prophet never forgot her', 'Year of her death called "Year of Sorrow"'],
  },
  hamza: {
    id: 'hamza',
    name: 'Hamza ibn Abdul-Muttalib',
    nameAr: 'حمزة بن عبد المطلب',
    coords: [24.5021, 39.6200],
    color: '#DC2626',
    icon: 'Swords',
    title: 'Lion of Allah, Master of Martyrs',
    relation: 'Uncle of Prophet ﷺ',
    death: '625 CE (Battle of Uhud)',
    location: 'Foot of Mount Uhud, Madinah',
    description: 'Strongest warrior of early Islam, martyred at Uhud.',
    facts: ['Called "Lion of Allah"', 'Killed by Wahshi', 'Body mutilated by Hind', 'Prophet wept over him', '70 martyrs buried with him'],
  },
  abuBakr: {
    id: 'abuBakr',
    name: 'Abu Bakr as-Siddiq',
    nameAr: 'أبو بكر الصديق',
    coords: [24.4673, 39.6112],
    color: '#10B981',
    icon: 'Star',
    title: 'As-Siddiq (The Truthful), First Caliph',
    relation: 'Best friend, father-in-law',
    death: '634 CE',
    location: 'Next to Prophet ﷺ in Masjid an-Nabawi',
    description: 'First adult male to accept Islam, first Caliph, companion in Hijra.',
    facts: ['Buried next to Prophet ﷺ', 'Companion in cave during Hijra', 'Father of Aisha', 'Compiled the Quran', 'Caliph for 2 years'],
  },
  umar: {
    id: 'umar',
    name: 'Umar ibn al-Khattab',
    nameAr: 'عمر بن الخطاب',
    coords: [24.4673, 39.6113],
    color: '#F59E0B',
    icon: 'Star',
    title: 'Al-Farooq (The Distinguisher), Second Caliph',
    relation: 'Father-in-law of Prophet ﷺ',
    death: '644 CE',
    location: 'Next to Prophet ﷺ and Abu Bakr',
    description: 'Second Caliph, expanded Islamic empire, known for justice.',
    facts: ['Buried next to Prophet ﷺ and Abu Bakr', 'Islam strengthened by his conversion', 'Conquered Jerusalem', 'Father of Hafsa', 'Martyred by Abu Lulu'],
  },
  uthman: {
    id: 'uthman',
    name: 'Uthman ibn Affan',
    nameAr: 'عثمان بن عفان',
    coords: [24.4678, 39.6150],
    color: '#8B5CF6',
    icon: 'Star',
    title: 'Dhun-Nurayn (Possessor of Two Lights), Third Caliph',
    relation: 'Son-in-law (married 2 daughters of Prophet ﷺ)',
    death: '656 CE',
    location: 'Jannat al-Baqi, Madinah',
    description: 'Third Caliph, compiled standard Quran, married two daughters of Prophet ﷺ.',
    facts: ['Married Ruqayyah then Umm Kulthum', 'Standardized the Quran', 'Known for modesty', 'Very wealthy, gave for Islam', 'Martyred while reading Quran'],
  },
  ali: {
    id: 'ali',
    name: 'Ali ibn Abi Talib',
    nameAr: 'علي بن أبي طالب',
    coords: [32.0, 44.3667],
    color: '#22C55E',
    icon: 'Star',
    title: 'Asadullah (Lion of Allah), Fourth Caliph',
    relation: 'Cousin and son-in-law',
    death: '661 CE',
    location: 'Najaf, Iraq',
    description: 'Fourth Caliph, first child to accept Islam, married to Fatimah.',
    facts: ['First child to believe', 'Slept in Prophet\'s bed during Hijra', 'Father of Hasan and Husayn', 'Gate of knowledge (hadith)', 'Martyred by Ibn Muljam'],
  },
  fatimah: {
    id: 'fatimah',
    name: 'Fatimah al-Zahra',
    nameAr: 'فاطمة الزهراء',
    coords: [24.4673, 39.6111],
    color: '#EC4899',
    icon: 'Heart',
    title: 'Leader of Women of Paradise',
    relation: 'Daughter of Prophet ﷺ',
    death: '632 CE (6 months after Prophet ﷺ)',
    location: 'Madinah (exact location debated - Baqi or in home)',
    description: 'Youngest daughter, mother of Hasan and Husayn, most beloved to Prophet ﷺ.',
    facts: ['Called "part of me" by Prophet ﷺ', 'Mother of Hasan and Husayn', 'Resembled Prophet most', 'Leader of women of Paradise', 'Prophet\'s lineage through her'],
  },
  bilal: {
    id: 'bilal',
    name: 'Bilal ibn Rabah',
    nameAr: 'بلال بن رباح',
    coords: [33.5138, 36.2765],
    color: '#6366F1',
    icon: 'Music',
    title: 'First Muazzin',
    relation: 'Companion, freed slave',
    death: '640 CE',
    location: 'Damascus, Syria (Bab al-Saghir cemetery)',
    description: 'First person to call Adhan, former slave who was tortured for Islam.',
    facts: ['Tortured by Umayyah - said "Ahad, Ahad"', 'Freed by Abu Bakr', 'First muazzin ever', 'Couldn\'t give adhan after Prophet died', 'Died in Damascus'],
  },
};

// ============================================================================
// WEATHER EVENTS - Divine weather/natural events in Quran
// ============================================================================

export const WEATHER_EVENTS = {
  adStorm: {
    id: 'adStorm',
    name: 'Storm of \'Ad',
    nameAr: 'ريح عاد',
    coords: [17.0, 53.0],
    color: '#6B7280',
    icon: 'Wind',
    type: 'wind',
    description: 'Violent wind that destroyed the people of \'Ad for 7 nights and 8 days.',
    verses: [
      { ref: '69:6-7', topic: 'Destroyed by screaming violent wind, 7 nights 8 days' },
      { ref: '41:16', topic: 'Sent against them screaming wind' },
      { ref: '54:19', topic: 'Sent against them wind on day of ill omen' },
      { ref: '46:24-25', topic: 'Cloud advancing, wind with painful punishment' },
    ],
    facts: ['Lasted 7 nights and 8 days', 'Only Hud and believers survived', 'Bodies thrown like hollow palm trunks', 'Thought it was rain cloud'],
  },
  thamudQuake: {
    id: 'thamudQuake',
    name: 'Blast of Thamud',
    nameAr: 'صيحة ثمود',
    coords: [26.7833, 37.9333],
    color: '#EF4444',
    icon: 'AlertTriangle',
    type: 'earthquake/blast',
    description: 'Mighty blast/earthquake that destroyed Thamud after they killed the she-camel.',
    verses: [
      { ref: '7:78', topic: 'Earthquake seized them, fell in their homes' },
      { ref: '11:67', topic: 'Blast seized wrongdoers, fell in homes' },
      { ref: '54:31', topic: 'Single blast, became like dry fence builder' },
      { ref: '41:17', topic: 'Thunderbolt of humiliation seized them' },
    ],
    facts: ['Struck on day 4 as warned', 'She-camel killed on day 1', 'Only Salih and believers survived', 'Madain Saleh ruins remain'],
  },
  lutRain: {
    id: 'lutRain',
    name: 'Rain of Stones on Lut\'s People',
    nameAr: 'حجارة قوم لوط',
    coords: [31.1, 35.5],
    color: '#78350F',
    icon: 'Cloud',
    type: 'stones',
    description: 'City overturned and rained upon with marked stones of baked clay.',
    verses: [
      { ref: '11:82', topic: 'Turned upside down, rained marked stones' },
      { ref: '15:74', topic: 'Made highest lowest, rained stones of baked clay' },
      { ref: '54:34', topic: 'Sent storm of stones, except Lut\'s family' },
    ],
    facts: ['Cities turned upside down', 'Stones marked for each person', 'Dead Sea region today', 'Lut\'s wife looked back and perished'],
  },
  floodOfIram: {
    id: 'floodOfIram',
    name: 'Flood of Iram',
    nameAr: 'سيل العرم',
    coords: [15.4, 45.0],
    color: '#0369A1',
    icon: 'Waves',
    type: 'flood',
    description: 'Great flood that destroyed the dam of Ma\'rib and the civilization of Saba (Sheba).',
    verses: [
      { ref: '34:16', topic: 'Sent flood of dam, replaced gardens with bitter fruit' },
    ],
    facts: ['Ma\'rib Dam collapse', 'Ended Sabaean civilization', 'Gardens replaced with thorns', 'Caused mass migration'],
  },
  khandaqWind: {
    id: 'khandaqWind',
    name: 'Wind at Khandaq',
    nameAr: 'ريح الخندق',
    coords: [24.4750, 39.6100],
    color: '#0891B2',
    icon: 'Wind',
    type: 'wind',
    description: 'Allah sent wind and unseen forces against confederates besieging Madinah.',
    verses: [
      { ref: '33:9', topic: 'Sent wind and forces you did not see' },
    ],
    facts: ['Confederate siege broken', 'Tents blown away', 'Fires extinguished', 'Army of 10,000 retreated'],
  },
};

// ============================================================================
// ARCHAEOLOGICAL SITES - Where Quranic history can be seen today
// ============================================================================

export const ARCHAEOLOGICAL_SITES = {
  madainSaleh: {
    id: 'madainSaleh',
    name: 'Madain Saleh (Al-Hijr)',
    nameAr: 'مدائن صالح',
    coords: [26.7833, 37.9333],
    color: '#B45309',
    icon: 'Building',
    nation: 'Thamud',
    description: 'Rock-carved dwellings of Thamud. UNESCO World Heritage Site. Prophet ﷺ passed quickly and forbade drinking its water.',
    verses: [
      { ref: '15:80-84', topic: 'People of Al-Hijr denied messengers, carved houses in mountains' },
      { ref: '89:9', topic: 'Thamud who carved rocks in the valley' },
    ],
    facts: ['Well-preserved tombs', 'Prophet forbade camping here', 'Second largest Nabataean site', 'Carved from sandstone mountains'],
    status: 'UNESCO World Heritage Site',
  },
  deadSea: {
    id: 'deadSea',
    name: 'Dead Sea Region',
    nameAr: 'البحر الميت',
    coords: [31.5, 35.5],
    color: '#1E3A5F',
    icon: 'Waves',
    nation: 'People of Lut',
    description: 'Lowest point on Earth. Believed to be where cities of Lut\'s people were destroyed.',
    verses: [
      { ref: '37:137', topic: 'You pass by them morning and evening' },
    ],
    facts: ['Lowest point on Earth (-430m)', 'High salt content', 'Sodom and Gomorrah region', 'Archaeological sites nearby', 'Nothing lives in it - sign of destruction'],
  },
  pyramids: {
    id: 'pyramids',
    name: 'Pyramids of Egypt',
    nameAr: 'أهرامات مصر',
    coords: [29.9792, 31.1342],
    color: '#D97706',
    icon: 'Building',
    nation: 'Pharaohs',
    description: 'Ancient structures from time of Pharaohs. Quran mentions Pharaoh\'s construction projects.',
    verses: [
      { ref: '28:38', topic: 'Pharaoh said: Build me a tower' },
      { ref: '40:36', topic: 'Haman, build me a tower to reach the ways' },
    ],
    facts: ['Built by ancient Egyptians', 'Pharaoh\'s era', 'Mentioned in context of Firaun', 'Signs of ancient power'],
  },
  petra: {
    id: 'petra',
    name: 'Petra (Possibly Thamud)',
    nameAr: 'البتراء',
    coords: [30.3285, 35.4444],
    color: '#DC2626',
    icon: 'Building',
    nation: 'Possibly related to Thamud/Nabataeans',
    description: 'Ancient rock-carved city. Some scholars link to Thamud, though primarily Nabataean.',
    verses: [
      { ref: '89:9', topic: 'Who carved out rocks in the valley' },
    ],
    facts: ['UNESCO World Heritage Site', 'Rock-carved facades', 'Trade route city', 'Similar construction to Madain Saleh'],
    status: 'UNESCO World Heritage Site',
  },
  babylonRuins: {
    id: 'babylonRuins',
    name: 'Babylon Ruins',
    nameAr: 'آثار بابل',
    coords: [32.5425, 44.4239],
    color: '#7C3AED',
    icon: 'Building',
    nation: 'Babylon - Nimrod\'s kingdom',
    description: 'Ancient city where Ibrahim was thrown into fire. Center of ancient civilization.',
    verses: [
      { ref: '21:68-69', topic: 'Burn him! Fire became cool and safe' },
    ],
    facts: ['Ibrahim\'s birthplace', 'Thrown into fire here', 'Nimrod\'s kingdom', 'Ancient Mesopotamia'],
  },
};

// ============================================================================
// HELPER FUNCTIONS FOR NEW DATA
// ============================================================================

export const getAllQuranicMountains = () => Object.values(QURANIC_MOUNTAINS);
export const getAllQuranicWaters = () => Object.values(QURANIC_WATERS);
export const getAllBattleLocations = () => Object.values(BATTLE_LOCATIONS);
export const getHijraRoute = () => HIJRA_ROUTE;
export const getQiblaHistory = () => QIBLA_HISTORY; // Return object for property access
export const getQurayshRoutes = () => QURAYSH_ROUTES; // Return object for property access
export const getAllAngelAppearances = () => Object.values(ANGEL_APPEARANCES);
export const getAllDuaLocations = () => Object.values(DUA_LOCATIONS);
export const getAllSahabaGraves = () => Object.values(SAHABA_GRAVES);
export const getAllWeatherEvents = () => Object.values(WEATHER_EVENTS);
export const getAllArchaeologicalSites = () => Object.values(ARCHAEOLOGICAL_SITES);

// Distance to Makkah
export const distanceToMakkah = (lat, lng) => {
  const R = 6371; // Earth's radius in km
  const kaabaLat = 21.4225;
  const kaabaLng = 39.8262;

  const dLat = (kaabaLat - lat) * (Math.PI / 180);
  const dLng = (kaabaLng - lng) * (Math.PI / 180);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat * (Math.PI/180)) * Math.cos(kaabaLat * (Math.PI/180)) *
            Math.sin(dLng/2) * Math.sin(dLng/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c);
};

export default {
  PROPHETIC_LOCATIONS,
  DESTROYED_NATIONS,
  MIRACLES_LOCATIONS,
  QURANIC_ANIMALS,
  TRADE_ROUTES,
  PROPHET_JOURNEYS,
  TIMELINE_EVENTS,
  SACRED_MOSQUES,
  REVELATION_LOCATIONS,
  SPECIAL_LOCATIONS,
  PROPHET_GRAVES,
  QURANIC_CAVES,
  BANI_ISRAEL_JOURNEY,
  SCIENTIFIC_MIRACLES,
  TREATY_LOCATIONS,
  QURANIC_PLANTS,
  ISRA_MIRAJ_JOURNEY,
  QURANIC_MOUNTAINS,
  QURANIC_WATERS,
  BATTLE_LOCATIONS,
  HIJRA_ROUTE,
  QIBLA_HISTORY,
  QURAYSH_ROUTES,
  ANGEL_APPEARANCES,
  DUA_LOCATIONS,
  SAHABA_GRAVES,
  WEATHER_EVENTS,
  ARCHAEOLOGICAL_SITES,
  getAllLocations,
  getLocation,
  getLocationsByCategory,
  getLocationsByProphet,
  getAllJourneys,
  getJourney,
  getAllDestroyedNations,
  getAllMiracles,
  getAllAnimals,
  getAllTradeRoutes,
  getTimelineEvents,
  getAllSacredMosques,
  getAllRevelationLocations,
  getAllSpecialLocations,
  getAllProphetGraves,
  getAllQuranicCaves,
  getAllBaniIsraelJourney,
  getAllScientificMiracles,
  getAllTreatyLocations,
  getAllQuranicPlants,
  getAllIsraMirajJourney,
  getAllQuranicMountains,
  getAllQuranicWaters,
  getAllBattleLocations,
  getHijraRoute,
  getQiblaHistory,
  getQurayshRoutes,
  getAllAngelAppearances,
  getAllDuaLocations,
  getAllSahabaGraves,
  getAllWeatherEvents,
  getAllArchaeologicalSites,
  calculateQibla,
  distanceToMakkah,
};
