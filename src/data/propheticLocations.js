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
  calculateQibla,
  distanceToMakkah,
};
