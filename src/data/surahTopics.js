/**
 * Surah Topics, Key Verses, and Tags Data
 * Contains thematic information for each surah to enable topic-based navigation
 */

export const SURAH_TOPICS = {
  1: {
    name: 'Al-Fatiha',
    themes: ['Prayer', 'Praise', 'Guidance'],
    keyVerses: [
      { ayah: 5, label: 'You alone we worship' },
      { ayah: 6, label: 'Guide us to the straight path' },
    ],
    tags: ['dua', 'worship', 'guidance', 'salah'],
  },
  2: {
    name: 'Al-Baqarah',
    themes: ['Faith', 'Law', 'Stories', 'Guidance'],
    keyVerses: [
      { ayah: 255, label: 'Ayatul Kursi (Throne Verse)' },
      { ayah: 256, label: 'No compulsion in religion' },
      { ayah: 285, label: 'The Messenger believes' },
      { ayah: 286, label: 'Allah does not burden a soul' },
      { ayah: 152, label: 'Remember Me, I will remember you' },
      { ayah: 186, label: 'I am near, I respond' },
    ],
    tags: ['ayatul-kursi', 'fasting', 'hajj', 'charity', 'adam', 'musa', 'ibrahim'],
  },
  3: {
    name: 'Aal-E-Imran',
    themes: ['Faith', 'Unity', 'Battle of Uhud'],
    keyVerses: [
      { ayah: 26, label: 'Owner of sovereignty' },
      { ayah: 103, label: 'Hold firmly to the rope of Allah' },
      { ayah: 159, label: 'Consult them in affairs' },
      { ayah: 185, label: 'Every soul will taste death' },
    ],
    tags: ['unity', 'isa', 'maryam', 'uhud', 'sabr'],
  },
  4: {
    name: 'An-Nisa',
    themes: ['Women Rights', 'Family', 'Justice', 'Inheritance'],
    keyVerses: [
      { ayah: 1, label: 'Created from single soul' },
      { ayah: 36, label: 'Worship Allah, be good to parents' },
      { ayah: 135, label: 'Stand firm in justice' },
    ],
    tags: ['women', 'marriage', 'inheritance', 'justice', 'orphans'],
  },
  5: {
    name: 'Al-Maidah',
    themes: ['Contracts', 'Food Laws', 'Justice'],
    keyVerses: [
      { ayah: 3, label: 'Today I perfected your religion' },
      { ayah: 32, label: 'Saving one life is like saving all' },
      { ayah: 90, label: 'Avoid intoxicants and gambling' },
    ],
    tags: ['halal', 'haram', 'contracts', 'isa', 'musa'],
  },
  6: {
    name: 'Al-Anam',
    themes: ['Tawheed', 'Prophethood', 'Creation'],
    keyVerses: [
      { ayah: 59, label: 'Keys of the unseen' },
      { ayah: 162, label: 'My prayer and sacrifice for Allah' },
    ],
    tags: ['tawheed', 'prophets', 'creation', 'ibrahim'],
  },
  7: {
    name: 'Al-Araf',
    themes: ['Prophets Stories', 'Paradise & Hell', 'Adam'],
    keyVerses: [
      { ayah: 23, label: "Adam's repentance" },
      { ayah: 156, label: 'My mercy encompasses all' },
      { ayah: 180, label: 'Beautiful names of Allah' },
    ],
    tags: ['adam', 'iblis', 'musa', 'pharaoh', 'prophets'],
  },
  8: {
    name: 'Al-Anfal',
    themes: ['Battle of Badr', 'Spoils of War', 'Trust in Allah'],
    keyVerses: [
      { ayah: 2, label: 'True believers hearts tremble' },
      { ayah: 46, label: 'Obey Allah and His Messenger' },
    ],
    tags: ['badr', 'jihad', 'victory', 'tawakkul'],
  },
  9: {
    name: 'At-Tawbah',
    themes: ['Repentance', 'Hypocrites', 'Jihad'],
    keyVerses: [
      { ayah: 40, label: 'Allah is with us (in cave)' },
      { ayah: 128, label: 'Messenger concerned for you' },
      { ayah: 129, label: 'Allah is sufficient for me' },
    ],
    tags: ['tawbah', 'hypocrites', 'tabuk', 'charity'],
  },
  10: {
    name: 'Yunus',
    themes: ['Revelation', 'Prophets', 'Divine Wisdom'],
    keyVerses: [
      { ayah: 57, label: 'Healing for what is in breasts' },
      { ayah: 62, label: 'Friends of Allah have no fear' },
    ],
    tags: ['yunus', 'prophets', 'revelation', 'quran'],
  },
  11: {
    name: 'Hud',
    themes: ['Prophets Stories', 'Warning', 'Patience'],
    keyVerses: [
      { ayah: 6, label: 'No creature but Allah provides' },
      { ayah: 114, label: 'Good deeds remove bad deeds' },
    ],
    tags: ['hud', 'nuh', 'salih', 'lut', 'shuayb'],
  },
  12: {
    name: 'Yusuf',
    themes: ['Patience', 'Trust', 'Forgiveness', 'Dreams'],
    keyVerses: [
      { ayah: 4, label: "Yusuf's dream" },
      { ayah: 86, label: 'I only complain to Allah' },
      { ayah: 87, label: "Don't despair of Allah's mercy" },
      { ayah: 92, label: 'No blame on you today' },
    ],
    tags: ['yusuf', 'dreams', 'patience', 'forgiveness', 'family'],
  },
  13: {
    name: 'Ar-Rad',
    themes: ['Signs of Allah', 'Truth', 'Divine Power'],
    keyVerses: [
      { ayah: 11, label: 'Allah does not change until people change' },
      { ayah: 28, label: 'Hearts find rest in remembrance of Allah' },
    ],
    tags: ['signs', 'thunder', 'remembrance', 'dhikr'],
  },
  14: {
    name: 'Ibrahim',
    themes: ['Gratitude', 'Prophets', 'Dua'],
    keyVerses: [
      { ayah: 7, label: 'If grateful, I will increase you' },
      { ayah: 40, label: "Ibrahim's prayer for salah" },
    ],
    tags: ['ibrahim', 'gratitude', 'dua', 'makkah'],
  },
  15: {
    name: 'Al-Hijr',
    themes: ['Quran Protection', 'Prophets', 'Iblis'],
    keyVerses: [
      { ayah: 9, label: 'We will guard the Quran' },
      { ayah: 87, label: 'Seven oft-repeated verses' },
    ],
    tags: ['quran', 'protection', 'lut', 'iblis'],
  },
  16: {
    name: 'An-Nahl',
    themes: ['Blessings', 'Nature', 'Gratitude'],
    keyVerses: [
      { ayah: 90, label: 'Justice, kindness, and giving' },
      { ayah: 125, label: 'Invite with wisdom and good preaching' },
    ],
    tags: ['blessings', 'bees', 'nature', 'dawah'],
  },
  17: {
    name: 'Al-Isra',
    themes: ['Night Journey', 'Morals', 'Quran'],
    keyVerses: [
      { ayah: 1, label: 'Night journey to Al-Aqsa' },
      { ayah: 23, label: 'Be good to parents' },
      { ayah: 82, label: 'Quran is healing' },
    ],
    tags: ['isra', 'miraj', 'parents', 'quran', 'bani-israel'],
  },
  18: {
    name: 'Al-Kahf',
    themes: ['Faith Trials', 'Stories', 'Protection from Dajjal'],
    keyVerses: [
      { ayah: 10, label: 'Companions of the cave' },
      { ayah: 28, label: 'Patience with those who call upon Allah' },
      { ayah: 46, label: 'Wealth and children are adornment' },
      { ayah: 109, label: 'Words of Allah never end' },
      { ayah: 110, label: 'Whoever hopes to meet Allah' },
    ],
    tags: ['kahf', 'cave', 'friday', 'khidr', 'dhul-qarnayn', 'dajjal'],
  },
  19: {
    name: 'Maryam',
    themes: ['Maryam', 'Prophets', 'Mercy'],
    keyVerses: [
      { ayah: 30, label: 'Isa speaks in cradle' },
      { ayah: 96, label: 'Allah will grant love to believers' },
    ],
    tags: ['maryam', 'isa', 'yahya', 'zakariya', 'ibrahim'],
  },
  20: {
    name: 'Ta-Ha',
    themes: ['Musa', 'Quran', 'Guidance'],
    keyVerses: [
      { ayah: 14, label: 'Worship Me and establish prayer' },
      { ayah: 25, label: "Musa's dua - expand my chest" },
      { ayah: 114, label: 'My Lord, increase me in knowledge' },
    ],
    tags: ['musa', 'pharaoh', 'harun', 'dua'],
  },
  21: {
    name: 'Al-Anbiya',
    themes: ['Prophets', 'Tawheed', 'Resurrection'],
    keyVerses: [
      { ayah: 87, label: 'Yunus - no deity except You' },
      { ayah: 107, label: 'Sent as mercy to the worlds' },
    ],
    tags: ['prophets', 'ibrahim', 'musa', 'dawood', 'sulaiman'],
  },
  22: {
    name: 'Al-Hajj',
    themes: ['Hajj', 'Sacrifice', 'Resurrection'],
    keyVerses: [
      { ayah: 27, label: 'Proclaim the Hajj' },
      { ayah: 37, label: 'Taqwa reaches Allah, not meat' },
      { ayah: 78, label: 'Strive for Allah' },
    ],
    tags: ['hajj', 'sacrifice', 'kabah', 'resurrection'],
  },
  23: {
    name: 'Al-Muminun',
    themes: ['Believers Qualities', 'Success', 'Prophets'],
    keyVerses: [
      { ayah: 1, label: 'Successful are the believers' },
      { ayah: 115, label: 'Did you think We created you in vain?' },
    ],
    tags: ['believers', 'success', 'salah', 'prophets'],
  },
  24: {
    name: 'An-Nur',
    themes: ['Light', 'Modesty', 'Social Ethics'],
    keyVerses: [
      { ayah: 35, label: 'Allah is the Light (Ayat-un-Nur)' },
      { ayah: 30, label: 'Lower your gaze' },
      { ayah: 31, label: 'Hijab and modesty' },
    ],
    tags: ['light', 'modesty', 'hijab', 'slander', 'marriage'],
  },
  25: {
    name: 'Al-Furqan',
    themes: ['Criterion', 'Quran', 'Servants of Rahman'],
    keyVerses: [
      { ayah: 63, label: 'Servants of Rahman walk humbly' },
      { ayah: 74, label: 'Our Lord, grant us pious spouses' },
    ],
    tags: ['furqan', 'quran', 'ibaad-ur-rahman'],
  },
  26: {
    name: 'Ash-Shuara',
    themes: ['Poets', 'Prophets Stories', 'Revelation'],
    keyVerses: [
      { ayah: 80, label: 'When I am ill, He cures me' },
      { ayah: 89, label: 'Sound heart on Day of Judgment' },
    ],
    tags: ['prophets', 'musa', 'ibrahim', 'poets'],
  },
  27: {
    name: 'An-Naml',
    themes: ['Sulaiman', 'Knowledge', 'Signs'],
    keyVerses: [
      { ayah: 19, label: 'Sulaiman smiles at the ant' },
      { ayah: 62, label: 'Who responds to the distressed' },
    ],
    tags: ['sulaiman', 'ant', 'sheba', 'knowledge'],
  },
  28: {
    name: 'Al-Qasas',
    themes: ['Musa Story', 'Justice', 'Divine Plan'],
    keyVerses: [
      { ayah: 24, label: "Musa's dua - I am in need" },
      { ayah: 77, label: 'Seek the Hereafter, do good' },
      { ayah: 88, label: 'Everything will perish except His Face' },
    ],
    tags: ['musa', 'pharaoh', 'qarun', 'dua'],
  },
  29: {
    name: 'Al-Ankabut',
    themes: ['Trials', 'Spider', 'Faith'],
    keyVerses: [
      { ayah: 2, label: 'People will be tested' },
      { ayah: 45, label: 'Prayer prevents evil deeds' },
      { ayah: 69, label: 'Strive and Allah will guide' },
    ],
    tags: ['trials', 'spider', 'salah', 'striving'],
  },
  30: {
    name: 'Ar-Rum',
    themes: ['Rome', 'Signs', 'Creation'],
    keyVerses: [
      { ayah: 21, label: 'Created spouses for tranquility' },
      { ayah: 30, label: 'Natural disposition (fitrah)' },
    ],
    tags: ['rome', 'prophecy', 'creation', 'marriage'],
  },
  31: {
    name: 'Luqman',
    themes: ['Wisdom', 'Parenting', 'Gratitude'],
    keyVerses: [
      { ayah: 13, label: 'Do not associate with Allah' },
      { ayah: 14, label: 'Be grateful to parents' },
      { ayah: 17, label: 'Establish prayer, enjoin good' },
      { ayah: 18, label: 'Do not walk arrogantly' },
    ],
    tags: ['luqman', 'wisdom', 'parents', 'advice'],
  },
  32: {
    name: 'As-Sajdah',
    themes: ['Prostration', 'Creation', 'Resurrection'],
    keyVerses: [
      { ayah: 15, label: 'Those who prostrate when reminded' },
      { ayah: 16, label: 'Forsake beds to invoke Lord' },
    ],
    tags: ['sajdah', 'creation', 'tahajjud', 'resurrection'],
  },
  33: {
    name: 'Al-Ahzab',
    themes: ['Confederates', 'Prophet Family', 'Hijab'],
    keyVerses: [
      { ayah: 21, label: 'Prophet is best example' },
      { ayah: 35, label: 'Muslim men and women qualities' },
      { ayah: 56, label: 'Send blessings on Prophet' },
    ],
    tags: ['ahzab', 'prophet', 'hijab', 'wives'],
  },
  34: {
    name: 'Saba',
    themes: ['Sheba', 'Gratitude', 'Prophets'],
    keyVerses: [
      { ayah: 13, label: 'Work gratefully, O family of Dawood' },
      { ayah: 28, label: 'Sent to all mankind' },
    ],
    tags: ['saba', 'sheba', 'dawood', 'sulaiman'],
  },
  35: {
    name: 'Fatir',
    themes: ['Creator', 'Angels', 'Truth'],
    keyVerses: [
      { ayah: 1, label: 'Creator of heavens and earth' },
      { ayah: 28, label: 'Scholars fear Allah most' },
    ],
    tags: ['creation', 'angels', 'scholars', 'knowledge'],
  },
  36: {
    name: 'Ya-Sin',
    themes: ['Resurrection', 'Heart of Quran', 'Prophets'],
    keyVerses: [
      { ayah: 58, label: 'Peace - a word from Merciful Lord' },
      { ayah: 82, label: 'Be, and it is (kun fayakun)' },
    ],
    tags: ['yasin', 'heart', 'resurrection', 'creation'],
  },
  37: {
    name: 'As-Saffat',
    themes: ['Angels', 'Prophets', 'Day of Judgment'],
    keyVerses: [
      { ayah: 102, label: "Ibrahim's sacrifice of son" },
      { ayah: 143, label: 'Yunus in whale' },
    ],
    tags: ['angels', 'ibrahim', 'ismail', 'yunus'],
  },
  38: {
    name: 'Sad',
    themes: ['Prophets', 'Dawood', 'Iblis'],
    keyVerses: [
      { ayah: 24, label: "Dawood's repentance" },
      { ayah: 82, label: 'Iblis will mislead' },
    ],
    tags: ['dawood', 'sulaiman', 'ayyub', 'iblis'],
  },
  39: {
    name: 'Az-Zumar',
    themes: ['Groups', 'Sincerity', 'Forgiveness'],
    keyVerses: [
      { ayah: 9, label: 'Are those who know equal?' },
      { ayah: 53, label: 'Do not despair of Allah mercy' },
    ],
    tags: ['zumar', 'sincerity', 'forgiveness', 'knowledge'],
  },
  40: {
    name: 'Ghafir',
    themes: ['Forgiver', 'Musa', 'Prayer'],
    keyVerses: [
      { ayah: 60, label: 'Call upon Me, I will respond' },
    ],
    tags: ['forgiveness', 'dua', 'musa', 'pharaoh'],
  },
  41: {
    name: 'Fussilat',
    themes: ['Explained', 'Quran', 'Patience'],
    keyVerses: [
      { ayah: 34, label: 'Repel evil with good' },
      { ayah: 44, label: 'Quran is guidance and healing' },
    ],
    tags: ['quran', 'patience', 'dawah', 'healing'],
  },
  42: {
    name: 'Ash-Shura',
    themes: ['Consultation', 'Revelation', 'Unity'],
    keyVerses: [
      { ayah: 11, label: 'Nothing like unto Him' },
      { ayah: 38, label: 'Consult among yourselves' },
    ],
    tags: ['shura', 'consultation', 'unity', 'revelation'],
  },
  43: {
    name: 'Az-Zukhruf',
    themes: ['Ornaments', 'Truth', 'Prophets'],
    keyVerses: [
      { ayah: 32, label: 'We distribute their livelihood' },
      { ayah: 67, label: 'Friends will be enemies except righteous' },
    ],
    tags: ['gold', 'ornaments', 'isa', 'musa'],
  },
  44: {
    name: 'Ad-Dukhan',
    themes: ['Smoke', 'Warning', 'Quran'],
    keyVerses: [
      { ayah: 3, label: 'Sent down on blessed night' },
      { ayah: 51, label: 'Righteous in secure place' },
    ],
    tags: ['smoke', 'warning', 'laylatul-qadr'],
  },
  45: {
    name: 'Al-Jathiyah',
    themes: ['Kneeling', 'Signs', 'Judgment'],
    keyVerses: [
      { ayah: 13, label: 'Subjected all in heavens and earth' },
      { ayah: 23, label: 'Desire as god' },
    ],
    tags: ['judgment', 'signs', 'creation', 'desires'],
  },
  46: {
    name: 'Al-Ahqaf',
    themes: ['Sand Dunes', 'Parents', 'Jinn'],
    keyVerses: [
      { ayah: 15, label: 'Be good to parents' },
      { ayah: 29, label: 'Jinn listened to Quran' },
    ],
    tags: ['ahqaf', 'parents', 'jinn', 'hud'],
  },
  47: {
    name: 'Muhammad',
    themes: ['Fighting', 'Faith', 'Paradise'],
    keyVerses: [
      { ayah: 7, label: 'If you help Allah, He helps you' },
      { ayah: 19, label: 'Know there is no god but Allah' },
    ],
    tags: ['muhammad', 'jihad', 'faith', 'victory'],
  },
  48: {
    name: 'Al-Fath',
    themes: ['Victory', 'Hudaybiyyah', 'Peace'],
    keyVerses: [
      { ayah: 1, label: 'Clear victory granted' },
      { ayah: 29, label: 'Muhammad is Messenger of Allah' },
    ],
    tags: ['fath', 'victory', 'hudaybiyyah', 'peace'],
  },
  49: {
    name: 'Al-Hujurat',
    themes: ['Manners', 'Brotherhood', 'Verification'],
    keyVerses: [
      { ayah: 6, label: 'Verify news from wrongdoer' },
      { ayah: 10, label: 'Believers are brothers' },
      { ayah: 12, label: 'Avoid suspicion and spying' },
      { ayah: 13, label: 'Created nations to know each other' },
    ],
    tags: ['manners', 'brotherhood', 'verification', 'equality'],
  },
  50: {
    name: 'Qaf',
    themes: ['Resurrection', 'Death', 'Angels'],
    keyVerses: [
      { ayah: 16, label: 'Closer than jugular vein' },
      { ayah: 37, label: 'Sound heart' },
    ],
    tags: ['qaf', 'death', 'resurrection', 'angels'],
  },
  51: {
    name: 'Adh-Dhariyat',
    themes: ['Winds', 'Purpose', 'Ibrahim'],
    keyVerses: [
      { ayah: 56, label: 'Created jinn and humans to worship' },
    ],
    tags: ['winds', 'worship', 'purpose', 'ibrahim'],
  },
  52: {
    name: 'At-Tur',
    themes: ['Mount', 'Paradise', 'Judgment'],
    keyVerses: [
      { ayah: 21, label: 'Joined with their offspring' },
      { ayah: 48, label: 'Be patient for judgment' },
    ],
    tags: ['tur', 'mount', 'paradise', 'patience'],
  },
  53: {
    name: 'An-Najm',
    themes: ['Star', 'Revelation', 'Miraj'],
    keyVerses: [
      { ayah: 39, label: 'Man gets only what he strives for' },
      { ayah: 62, label: 'Prostrate and worship Allah' },
    ],
    tags: ['star', 'revelation', 'miraj', 'striving'],
  },
  54: {
    name: 'Al-Qamar',
    themes: ['Moon', 'Quran Easy', 'Warning'],
    keyVerses: [
      { ayah: 17, label: 'Made Quran easy to remember' },
      { ayah: 49, label: 'Created everything in measure' },
    ],
    tags: ['moon', 'quran', 'easy', 'warning'],
  },
  55: {
    name: 'Ar-Rahman',
    themes: ['Mercy', 'Blessings', 'Paradise & Hell'],
    keyVerses: [
      { ayah: 13, label: 'Which favors will you deny?' },
      { ayah: 60, label: 'Reward for good is good' },
    ],
    tags: ['rahman', 'mercy', 'blessings', 'beauty'],
  },
  56: {
    name: 'Al-Waqiah',
    themes: ['Event', 'Resurrection', 'Three Groups'],
    keyVerses: [
      { ayah: 10, label: 'Foremost are the foremost' },
      { ayah: 77, label: 'Honorable Quran' },
    ],
    tags: ['waqiah', 'resurrection', 'groups', 'quran'],
  },
  57: {
    name: 'Al-Hadid',
    themes: ['Iron', 'Faith', 'Worldly Life'],
    keyVerses: [
      { ayah: 3, label: 'He is First and Last' },
      { ayah: 4, label: 'He is with you wherever you are' },
      { ayah: 20, label: 'Know worldly life is play' },
    ],
    tags: ['iron', 'faith', 'charity', 'worldly-life'],
  },
  58: {
    name: 'Al-Mujadila',
    themes: ['Pleading Woman', 'Secret Counsel', 'Allah Hears'],
    keyVerses: [
      { ayah: 1, label: 'Allah heard the one who argued' },
      { ayah: 11, label: 'Allah raises those with knowledge' },
    ],
    tags: ['mujadila', 'women', 'knowledge', 'gatherings'],
  },
  59: {
    name: 'Al-Hashr',
    themes: ['Gathering', 'Banu Nadir', 'Names of Allah'],
    keyVerses: [
      { ayah: 18, label: 'Fear Allah, see what you send forth' },
      { ayah: 22, label: 'Allah - no god except Him' },
      { ayah: 24, label: 'Beautiful names of Allah' },
    ],
    tags: ['hashr', 'exile', 'names-of-allah', 'taqwa'],
  },
  60: {
    name: 'Al-Mumtahanah',
    themes: ['Examined Woman', 'Allegiance', 'Relations'],
    keyVerses: [
      { ayah: 4, label: 'Ibrahim example' },
      { ayah: 8, label: 'Allah does not forbid kindness to non-fighters' },
    ],
    tags: ['allegiance', 'women', 'kindness', 'ibrahim'],
  },
  61: {
    name: 'As-Saff',
    themes: ['Ranks', 'Unity', 'Striving'],
    keyVerses: [
      { ayah: 2, label: 'Why say what you do not do?' },
      { ayah: 4, label: 'Allah loves those who fight in ranks' },
    ],
    tags: ['ranks', 'unity', 'jihad', 'isa'],
  },
  62: {
    name: 'Al-Jumuah',
    themes: ['Friday Prayer', 'Messenger', 'Trade'],
    keyVerses: [
      { ayah: 9, label: 'Hasten to Friday prayer' },
      { ayah: 10, label: 'Disperse and seek bounty' },
    ],
    tags: ['friday', 'jumuah', 'prayer', 'trade'],
  },
  63: {
    name: 'Al-Munafiqun',
    themes: ['Hypocrites', 'Wealth', 'Charity'],
    keyVerses: [
      { ayah: 9, label: 'Wealth and children should not distract' },
      { ayah: 10, label: 'Spend before death comes' },
    ],
    tags: ['hypocrites', 'charity', 'wealth', 'death'],
  },
  64: {
    name: 'At-Taghabun',
    themes: ['Loss & Gain', 'Trials', 'Forgiveness'],
    keyVerses: [
      { ayah: 11, label: 'No calamity except by Allah permission' },
      { ayah: 16, label: 'Fear Allah as much as you can' },
    ],
    tags: ['taghabun', 'trials', 'taqwa', 'family'],
  },
  65: {
    name: 'At-Talaq',
    themes: ['Divorce', 'Waiting Period', 'Trust'],
    keyVerses: [
      { ayah: 2, label: 'Allah makes a way out' },
      { ayah: 3, label: 'Provides from unexpected sources' },
    ],
    tags: ['divorce', 'talaq', 'tawakkul', 'women'],
  },
  66: {
    name: 'At-Tahrim',
    themes: ['Prohibition', 'Prophet Family', 'Repentance'],
    keyVerses: [
      { ayah: 6, label: 'Protect yourselves and families from Fire' },
      { ayah: 8, label: 'Sincere repentance' },
    ],
    tags: ['tahrim', 'family', 'repentance', 'prophet-wives'],
  },
  67: {
    name: 'Al-Mulk',
    themes: ['Sovereignty', 'Death & Life', 'Protection'],
    keyVerses: [
      { ayah: 1, label: 'Blessed is He in whose hand is dominion' },
      { ayah: 2, label: 'Created death and life to test' },
    ],
    tags: ['mulk', 'sovereignty', 'protection', 'death'],
  },
  68: {
    name: 'Al-Qalam',
    themes: ['Pen', 'Character', 'Yunus'],
    keyVerses: [
      { ayah: 4, label: 'You are of great moral character' },
      { ayah: 51, label: 'Evil eye - they would strike with their eyes' },
    ],
    tags: ['pen', 'character', 'prophet', 'yunus'],
  },
  69: {
    name: 'Al-Haqqah',
    themes: ['Reality', 'Judgment', 'Past Nations'],
    keyVerses: [
      { ayah: 19, label: 'Given book in right hand' },
      { ayah: 51, label: 'Quran is truth of certainty' },
    ],
    tags: ['haqqah', 'reality', 'judgment', 'nations'],
  },
  70: {
    name: 'Al-Maarij',
    themes: ['Ascent', 'Patience', 'Prayer'],
    keyVerses: [
      { ayah: 19, label: 'Man was created anxious' },
      { ayah: 22, label: 'Except those who pray' },
    ],
    tags: ['ascent', 'patience', 'prayer', 'character'],
  },
  71: {
    name: 'Nuh',
    themes: ['Nuh', 'Dawah', 'Patience'],
    keyVerses: [
      { ayah: 10, label: 'Ask forgiveness, He will send rain' },
      { ayah: 28, label: "Nuh's dua" },
    ],
    tags: ['nuh', 'noah', 'dawah', 'patience', 'flood'],
  },
  72: {
    name: 'Al-Jinn',
    themes: ['Jinn', 'Quran', 'Worship'],
    keyVerses: [
      { ayah: 1, label: 'Jinn listened to Quran' },
      { ayah: 18, label: 'Mosques are for Allah' },
    ],
    tags: ['jinn', 'quran', 'worship', 'masjid'],
  },
  73: {
    name: 'Al-Muzzammil',
    themes: ['Wrapped One', 'Night Prayer', 'Quran'],
    keyVerses: [
      { ayah: 4, label: 'Recite Quran in measured recitation' },
      { ayah: 20, label: 'Recite what is easy of Quran' },
    ],
    tags: ['muzzammil', 'tahajjud', 'quran', 'prophet'],
  },
  74: {
    name: 'Al-Muddaththir',
    themes: ['Cloaked One', 'Warning', 'Hell'],
    keyVerses: [
      { ayah: 1, label: 'Arise and warn' },
      { ayah: 38, label: 'Every soul is hostage to its deeds' },
    ],
    tags: ['muddaththir', 'warning', 'dawah', 'deeds'],
  },
  75: {
    name: 'Al-Qiyamah',
    themes: ['Resurrection', 'Soul', 'Judgment'],
    keyVerses: [
      { ayah: 14, label: 'Man will witness against himself' },
      { ayah: 22, label: 'Radiant faces looking at Lord' },
    ],
    tags: ['qiyamah', 'resurrection', 'soul', 'judgment'],
  },
  76: {
    name: 'Al-Insan',
    themes: ['Human', 'Paradise', 'Gratitude'],
    keyVerses: [
      { ayah: 3, label: 'We showed him the way' },
      { ayah: 9, label: 'We feed you for Allah face only' },
    ],
    tags: ['insan', 'human', 'paradise', 'gratitude'],
  },
  77: {
    name: 'Al-Mursalat',
    themes: ['Sent Forth', 'Judgment', 'Warning'],
    keyVerses: [
      { ayah: 15, label: 'Woe that Day to the deniers' },
    ],
    tags: ['mursalat', 'winds', 'judgment', 'warning'],
  },
  78: {
    name: 'An-Naba',
    themes: ['News', 'Resurrection', 'Creation'],
    keyVerses: [
      { ayah: 1, label: 'About what are they asking?' },
      { ayah: 38, label: 'Day Spirit and angels stand in rows' },
    ],
    tags: ['naba', 'news', 'resurrection', 'creation'],
  },
  79: {
    name: 'An-Naziat',
    themes: ['Extractors', 'Resurrection', 'Musa'],
    keyVerses: [
      { ayah: 40, label: 'Forbade soul from desire - Paradise' },
    ],
    tags: ['naziat', 'angels', 'resurrection', 'musa'],
  },
  80: {
    name: 'Abasa',
    themes: ['He Frowned', 'Blind Man', 'Equality'],
    keyVerses: [
      { ayah: 1, label: 'He frowned and turned away' },
      { ayah: 34, label: 'Day man flees from brother' },
    ],
    tags: ['abasa', 'blind', 'equality', 'judgment'],
  },
  81: {
    name: 'At-Takwir',
    themes: ['Wrapping Up', 'Day of Judgment', 'Soul'],
    keyVerses: [
      { ayah: 8, label: 'Girl buried alive asked for what sin' },
      { ayah: 29, label: 'You cannot will except as Allah wills' },
    ],
    tags: ['takwir', 'judgment', 'soul', 'universe'],
  },
  82: {
    name: 'Al-Infitar',
    themes: ['Cleaving', 'Recording Angels', 'Judgment'],
    keyVerses: [
      { ayah: 6, label: 'What deceived you about your Lord?' },
      { ayah: 10, label: 'Noble recording angels' },
    ],
    tags: ['infitar', 'angels', 'judgment', 'deception'],
  },
  83: {
    name: 'Al-Mutaffifin',
    themes: ['Defrauders', 'Records', 'Paradise & Hell'],
    keyVerses: [
      { ayah: 14, label: 'Their deeds covered their hearts' },
      { ayah: 26, label: 'Let the competitors compete' },
    ],
    tags: ['defrauders', 'cheating', 'records', 'heart'],
  },
  84: {
    name: 'Al-Inshiqaq',
    themes: ['Splitting', 'Records', 'Toil'],
    keyVerses: [
      { ayah: 6, label: 'You are laboring toward your Lord' },
    ],
    tags: ['inshiqaq', 'splitting', 'records', 'toil'],
  },
  85: {
    name: 'Al-Buruj',
    themes: ['Constellations', 'Martyrs', 'Faith'],
    keyVerses: [
      { ayah: 3, label: 'By the witness and what is witnessed' },
      { ayah: 21, label: 'Quran is glorious' },
    ],
    tags: ['buruj', 'stars', 'martyrs', 'faith'],
  },
  86: {
    name: 'At-Tariq',
    themes: ['Night Star', 'Creation', 'Quran'],
    keyVerses: [
      { ayah: 4, label: 'Every soul has a protector' },
      { ayah: 13, label: 'Quran is decisive word' },
    ],
    tags: ['tariq', 'star', 'creation', 'quran'],
  },
  87: {
    name: 'Al-Ala',
    themes: ['Most High', 'Purification', 'Success'],
    keyVerses: [
      { ayah: 1, label: 'Exalt the name of your Lord' },
      { ayah: 14, label: 'Successful is one who purifies' },
    ],
    tags: ['ala', 'purification', 'success', 'tasbih'],
  },
  88: {
    name: 'Al-Ghashiyah',
    themes: ['Overwhelming', 'Judgment', 'Faces'],
    keyVerses: [
      { ayah: 2, label: 'Faces that Day humbled' },
      { ayah: 8, label: 'Faces that Day pleased' },
    ],
    tags: ['ghashiyah', 'judgment', 'faces', 'reminder'],
  },
  89: {
    name: 'Al-Fajr',
    themes: ['Dawn', 'Past Nations', 'Soul'],
    keyVerses: [
      { ayah: 27, label: 'O tranquil soul' },
      { ayah: 28, label: 'Return to your Lord pleased' },
    ],
    tags: ['fajr', 'dawn', 'soul', 'nations'],
  },
  90: {
    name: 'Al-Balad',
    themes: ['City', 'Struggle', 'Good Deeds'],
    keyVerses: [
      { ayah: 4, label: 'Created man in struggle' },
      { ayah: 11, label: 'Not attempted steep path' },
    ],
    tags: ['balad', 'makkah', 'struggle', 'charity'],
  },
  91: {
    name: 'Ash-Shams',
    themes: ['Sun', 'Soul', 'Purification'],
    keyVerses: [
      { ayah: 9, label: 'Successful is who purifies soul' },
      { ayah: 10, label: 'Failed is who corrupts soul' },
    ],
    tags: ['shams', 'sun', 'soul', 'purification'],
  },
  92: {
    name: 'Al-Layl',
    themes: ['Night', 'Giving', 'Paths'],
    keyVerses: [
      { ayah: 5, label: 'Who gives and fears' },
      { ayah: 17, label: 'Most righteous will avoid Fire' },
    ],
    tags: ['layl', 'night', 'charity', 'taqwa'],
  },
  93: {
    name: 'Ad-Duha',
    themes: ['Morning', 'Comfort', 'Blessings'],
    keyVerses: [
      { ayah: 3, label: 'Your Lord has not forsaken you' },
      { ayah: 11, label: 'Proclaim the blessing of your Lord' },
    ],
    tags: ['duha', 'morning', 'comfort', 'blessings'],
  },
  94: {
    name: 'Ash-Sharh',
    themes: ['Relief', 'Ease', 'Gratitude'],
    keyVerses: [
      { ayah: 5, label: 'With hardship is ease' },
      { ayah: 6, label: 'With hardship is ease' },
    ],
    tags: ['sharh', 'relief', 'ease', 'hardship'],
  },
  95: {
    name: 'At-Tin',
    themes: ['Fig', 'Creation', 'Faith'],
    keyVerses: [
      { ayah: 4, label: 'Created man in best form' },
      { ayah: 6, label: 'Except those who believe' },
    ],
    tags: ['tin', 'fig', 'creation', 'faith'],
  },
  96: {
    name: 'Al-Alaq',
    themes: ['Clot', 'First Revelation', 'Reading'],
    keyVerses: [
      { ayah: 1, label: 'Read in name of your Lord' },
      { ayah: 19, label: 'Prostrate and draw near' },
    ],
    tags: ['alaq', 'iqra', 'first-revelation', 'knowledge'],
  },
  97: {
    name: 'Al-Qadr',
    themes: ['Power', 'Laylatul Qadr', 'Angels'],
    keyVerses: [
      { ayah: 1, label: 'Sent down on Night of Power' },
      { ayah: 3, label: 'Better than thousand months' },
    ],
    tags: ['qadr', 'laylatul-qadr', 'ramadan', 'angels'],
  },
  98: {
    name: 'Al-Bayyinah',
    themes: ['Clear Evidence', 'Religion', 'Best of Creation'],
    keyVerses: [
      { ayah: 5, label: 'Worship Allah sincerely' },
      { ayah: 7, label: 'Best of creation' },
    ],
    tags: ['bayyinah', 'evidence', 'sincerity', 'creation'],
  },
  99: {
    name: 'Az-Zalzalah',
    themes: ['Earthquake', 'Judgment', 'Deeds'],
    keyVerses: [
      { ayah: 7, label: "Atom's weight of good will see it" },
      { ayah: 8, label: "Atom's weight of evil will see it" },
    ],
    tags: ['zalzalah', 'earthquake', 'judgment', 'deeds'],
  },
  100: {
    name: 'Al-Adiyat',
    themes: ['Chargers', 'Ingratitude', 'Judgment'],
    keyVerses: [
      { ayah: 6, label: 'Man is ungrateful to Lord' },
      { ayah: 9, label: 'When graves are scattered' },
    ],
    tags: ['adiyat', 'horses', 'ingratitude', 'judgment'],
  },
  101: {
    name: 'Al-Qariah',
    themes: ['Calamity', 'Scales', 'Judgment'],
    keyVerses: [
      { ayah: 6, label: 'Heavy scales - pleasant life' },
      { ayah: 8, label: 'Light scales - abyss' },
    ],
    tags: ['qariah', 'calamity', 'scales', 'judgment'],
  },
  102: {
    name: 'At-Takathur',
    themes: ['Competition', 'Graves', 'Blessings'],
    keyVerses: [
      { ayah: 1, label: 'Competition diverts you' },
      { ayah: 8, label: 'Asked about blessings' },
    ],
    tags: ['takathur', 'competition', 'wealth', 'graves'],
  },
  103: {
    name: 'Al-Asr',
    themes: ['Time', 'Loss', 'Faith & Patience'],
    keyVerses: [
      { ayah: 1, label: 'By time' },
      { ayah: 2, label: 'Man is in loss' },
      { ayah: 3, label: 'Except believers with patience' },
    ],
    tags: ['asr', 'time', 'loss', 'patience', 'truth'],
  },
  104: {
    name: 'Al-Humazah',
    themes: ['Slanderer', 'Wealth', 'Hell'],
    keyVerses: [
      { ayah: 1, label: 'Woe to every slanderer' },
      { ayah: 6, label: 'Fire that reaches hearts' },
    ],
    tags: ['humazah', 'slander', 'backbiting', 'wealth'],
  },
  105: {
    name: 'Al-Fil',
    themes: ['Elephant', 'Abraha', 'Protection'],
    keyVerses: [
      { ayah: 1, label: 'What Lord did to elephant people' },
      { ayah: 3, label: 'Birds with stones' },
    ],
    tags: ['fil', 'elephant', 'abraha', 'kabah'],
  },
  106: {
    name: 'Quraysh',
    themes: ['Quraysh', 'Security', 'Worship'],
    keyVerses: [
      { ayah: 3, label: 'Worship Lord of this House' },
      { ayah: 4, label: 'Fed from hunger, secured from fear' },
    ],
    tags: ['quraysh', 'makkah', 'trade', 'security'],
  },
  107: {
    name: 'Al-Maun',
    themes: ['Small Kindness', 'Prayer', 'Charity'],
    keyVerses: [
      { ayah: 4, label: 'Woe to those heedless of prayer' },
      { ayah: 7, label: 'Deny small kindnesses' },
    ],
    tags: ['maun', 'kindness', 'prayer', 'hypocrisy'],
  },
  108: {
    name: 'Al-Kawthar',
    themes: ['Abundance', 'Prayer', 'Sacrifice'],
    keyVerses: [
      { ayah: 1, label: 'We have given you abundance' },
      { ayah: 2, label: 'Pray and sacrifice' },
    ],
    tags: ['kawthar', 'abundance', 'prayer', 'sacrifice'],
  },
  109: {
    name: 'Al-Kafirun',
    themes: ['Disbelievers', 'Tolerance', 'Distinction'],
    keyVerses: [
      { ayah: 6, label: 'For you your religion, for me mine' },
    ],
    tags: ['kafirun', 'tolerance', 'religion', 'distinction'],
  },
  110: {
    name: 'An-Nasr',
    themes: ['Victory', 'Conquest', 'Praise'],
    keyVerses: [
      { ayah: 1, label: 'When victory of Allah comes' },
      { ayah: 3, label: 'Exalt and seek forgiveness' },
    ],
    tags: ['nasr', 'victory', 'makkah', 'conquest'],
  },
  111: {
    name: 'Al-Masad',
    themes: ['Palm Fiber', 'Abu Lahab', 'Warning'],
    keyVerses: [
      { ayah: 1, label: 'Perished are hands of Abu Lahab' },
    ],
    tags: ['masad', 'abu-lahab', 'warning', 'punishment'],
  },
  112: {
    name: 'Al-Ikhlas',
    themes: ['Sincerity', 'Tawheed', 'Oneness'],
    keyVerses: [
      { ayah: 1, label: 'Say: He is Allah, One' },
      { ayah: 2, label: 'Allah, the Eternal' },
    ],
    tags: ['ikhlas', 'tawheed', 'oneness', 'sincerity'],
  },
  113: {
    name: 'Al-Falaq',
    themes: ['Daybreak', 'Protection', 'Evil'],
    keyVerses: [
      { ayah: 1, label: 'Seek refuge in Lord of daybreak' },
    ],
    tags: ['falaq', 'protection', 'evil', 'refuge'],
  },
  114: {
    name: 'An-Nas',
    themes: ['Mankind', 'Protection', 'Whispers'],
    keyVerses: [
      { ayah: 1, label: 'Seek refuge in Lord of mankind' },
      { ayah: 4, label: 'From the retreating whisperer' },
    ],
    tags: ['nas', 'mankind', 'protection', 'shaytan'],
  },
};

// Get all unique tags across all surahs
export const getAllTags = () => {
  const tagSet = new Set();
  Object.values(SURAH_TOPICS).forEach(surah => {
    surah.tags?.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

// Search surahs by tag
export const getSurahsByTag = (tag) => {
  return Object.entries(SURAH_TOPICS)
    .filter(([_, data]) => data.tags?.includes(tag))
    .map(([id, data]) => ({ id: parseInt(id), ...data }));
};

// Get key verse for a specific surah and ayah
export const getKeyVerseLabel = (surahId, ayahNumber) => {
  const surah = SURAH_TOPICS[surahId];
  if (!surah) return null;
  const keyVerse = surah.keyVerses?.find(kv => kv.ayah === ayahNumber);
  return keyVerse?.label || null;
};

export default SURAH_TOPICS;
