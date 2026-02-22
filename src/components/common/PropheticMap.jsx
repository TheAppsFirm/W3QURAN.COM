/**
 * Prophetic Stories World Map - Enhanced Quranic Geography
 * Features: Animated journeys, Sacred mosques, Revelation sites, Qibla compass,
 * Prophet graves, Caves, Timeline with prophet details
 */

import { useState, useEffect, useRef, useCallback, memo, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, useMapEvents, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import {
  PROPHETIC_LOCATIONS,
  PROPHET_JOURNEYS,
  DESTROYED_NATIONS,
  MIRACLES_LOCATIONS,
  QURANIC_ANIMALS,
  TRADE_ROUTES,
  TIMELINE_EVENTS,
  SACRED_MOSQUES,
  REVELATION_LOCATIONS,
  SPECIAL_LOCATIONS,
  PROPHET_GRAVES,
  QURANIC_CAVES,
  getAllLocations,
  getAllJourneys,
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
} from '../../data/propheticLocations';

// Fix Leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Map tile providers
const MAP_STYLES = {
  dark: { name: 'Dark', url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' },
  satellite: { name: 'Satellite', url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' },
  terrain: { name: 'Terrain', url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png' },
  standard: { name: 'Standard', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' },
};

// Enhanced layer configurations
const LAYERS = {
  // Core layers
  locations: { id: 'locations', name: 'Sites', icon: 'MapPin', color: '#F59E0B' },
  mosques: { id: 'mosques', name: 'Mosques', icon: 'Star', color: '#10B981' },
  revelations: { id: 'revelations', name: 'Revelations', icon: 'BookOpen', color: '#8B5CF6' },
  destroyed: { id: 'destroyed', name: 'Destroyed', icon: 'AlertCircle', color: '#DC2626' },
  miracles: { id: 'miracles', name: 'Miracles', icon: 'Sparkles', color: '#EC4899' },
  graves: { id: 'graves', name: 'Prophets', icon: 'Heart', color: '#6B7280' },
  caves: { id: 'caves', name: 'Caves', icon: 'Mountain', color: '#06B6D4' },
  journeys: { id: 'journeys', name: 'Journeys', icon: 'Route', color: '#F472B6' },
  animals: { id: 'animals', name: 'Animals', icon: 'Heart', color: '#22C55E' },
  // Bani Israel & Islamic history
  baniIsrael: { id: 'baniIsrael', name: 'Bani Israel', icon: 'Users', color: '#3B82F6' },
  battles: { id: 'battles', name: 'Battles', icon: 'Swords', color: '#EF4444' },
  hijra: { id: 'hijra', name: 'Hijra', icon: 'Route', color: '#10B981' },
  sahaba: { id: 'sahaba', name: 'Sahaba', icon: 'Users', color: '#8B5CF6' },
  // Geographic features
  mountains: { id: 'mountains', name: 'Mountains', icon: 'Mountain', color: '#92400E' },
  waters: { id: 'waters', name: 'Waters', icon: 'Waves', color: '#0EA5E9' },
  // Scientific & Natural
  science: { id: 'science', name: 'Science', icon: 'Lightbulb', color: '#0EA5E9' },
  plants: { id: 'plants', name: 'Plants', icon: 'Leaf', color: '#84CC16' },
  weather: { id: 'weather', name: 'Weather', icon: 'Cloud', color: '#64748B' },
  // Spiritual
  angels: { id: 'angels', name: 'Angels', icon: 'Sparkles', color: '#FBBF24' },
  duas: { id: 'duas', name: 'Duas', icon: 'Heart', color: '#F472B6' },
  qibla: { id: 'qibla', name: 'Qibla', icon: 'Compass', color: '#F59E0B' },
  // Routes & History
  treaties: { id: 'treaties', name: 'Treaties', icon: 'FileText', color: '#A855F7' },
  israMiraj: { id: 'israMiraj', name: 'Isra Miraj', icon: 'Moon', color: '#FCD34D' },
  tradeRoutes: { id: 'tradeRoutes', name: 'Trade', icon: 'Route', color: '#F97316' },
  archaeology: { id: 'archaeology', name: 'Ruins', icon: 'Building', color: '#B45309' },
};

// Prophet Timeline Data with detailed information including family (Islamic sources)
const PROPHETS_TIMELINE = [
  {
    id: 'adam',
    name: 'Adam',
    nameAr: 'آدم',
    title: 'Abu al-Bashar (Father of Humanity)',
    periodStart: -4000,
    periodEnd: -3000,
    color: '#22C55E',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'First human and prophet, created by Allah from clay. Taught the names of all things. Built the first Kaaba with angels.',
    family: {
      wife: 'Hawwa (Eve) حواء - created from his rib',
      children: 'Had many children born in pairs (twins). Notable: Habil (Abel), Qabil (Cain), Shith (Seth)',
      descendants: 'All of humanity descends from him',
      note: 'Shith (Seth) continued the prophetic lineage to Nuh.'
    },
    age: 960,
    height: '60 cubits tall (approx. 90 feet / 27 meters)',
    createdOn: 'Friday - best day of the week',
    miracles: ['Taught names of all things by Allah', 'Angels prostrated to him by Allah\'s command', 'Created directly by Allah\'s hands from clay', 'Lived in Jannah before Earth'],
    scripture: 'Suhuf (Scrolls) - received revelation',
    burial: 'Mount Abu Qubays near Makkah (some say India where he descended)',
    uniqueFacts: [
      'First human ever created',
      'First prophet of Allah',
      'Spoke all languages',
      'Taught agriculture and civilization',
      'Repented and was forgiven - first to seek tawbah',
      'Created on Friday, entered Jannah on Friday, expelled on Friday'
    ],
    keyEvents: ['Creation from clay', 'Life in Jannah', 'Descended to Earth', 'Built the Kaaba', 'Taught his children'],
    verses: [
      { ref: '2:30', topic: 'Allah announces creation of Adam as Khalifa' },
      { ref: '2:31', topic: 'Adam taught names of all things' },
      { ref: '2:34', topic: 'Angels prostrate to Adam, Iblis refuses' },
      { ref: '2:35', topic: 'Adam & Hawwa in Jannah, forbidden tree' },
      { ref: '2:37', topic: 'Adam receives words of repentance' },
      { ref: '7:11', topic: 'Creation and command to prostrate' },
      { ref: '7:19', topic: 'Warning about the tree' },
      { ref: '7:23', topic: 'Adam\'s dua for forgiveness' },
      { ref: '20:115', topic: 'Adam forgot, had no firm resolve' },
      { ref: '20:121', topic: 'Ate from tree, became exposed' },
      { ref: '20:122', topic: 'Adam chosen and guided' },
    ],
    icon: '🌍'
  },
  {
    id: 'nuh',
    name: 'Nuh',
    nameAr: 'نوح',
    title: 'Shaykh al-Anbiya (Elder of Prophets)',
    periodStart: -3000,
    periodEnd: -2500,
    color: '#3B82F6',
    location: 'ark',
    coords: [39.4, 44.2],
    story: 'First Rasul (Messenger with Shariah). Preached for 950 years. Built the Ark by Allah\'s command to save believers from the great flood.',
    family: {
      wife: 'Waghila (also called Amzura) - she was a disbeliever and drowned',
      sons: [
        'Sam (Shem) - ancestor of Semitic peoples including Arabs',
        'Ham - ancestor of Africans',
        'Yafith (Japheth) - ancestor of Europeans and Turks',
        'Yam (Kan\'an) - disbelieved and drowned in flood'
      ],
      father: 'Lamak (Lamech) ibn Mattushalakh (Methuselah)',
      note: 'His wife was among the disbelievers (Quran 66:10). Only believing family members were saved.'
    },
    age: 950,
    ageNote: 'Preached for 950 years (Quran 29:14). Total lifespan was longer.',
    miracles: ['Built the Ark by divine guidance', 'The Great Flood covered entire earth', 'Ark safely landed on Mt. Judi', 'Pairs of all animals gathered miraculously'],
    scripture: 'Suhuf (Scrolls)',
    burial: 'Masjid al-Nabi Nuh in Karak, Jordan (or Najaf, Iraq, or Makkah)',
    uniqueFacts: [
      'First Rasul (Messenger with new law)',
      'Longest preaching mission in history - 950 years',
      'Only about 80 believers saved',
      'Called "Second father of humanity"',
      'One of the 5 Ulul Azm (Prophets of Strong Will)',
      'His son drowned despite being prophet\'s son'
    ],
    keyEvents: ['950 years of dawah', 'Building the Ark', 'The Great Flood', 'Ark landed on Mt. Judi'],
    verses: [
      { ref: '11:25', topic: 'Nuh sent as warner' },
      { ref: '11:36', topic: 'Revealed: none will believe except who already did' },
      { ref: '11:37', topic: 'Command to build the Ark' },
      { ref: '11:40', topic: 'Flood begins, pairs board the Ark' },
      { ref: '11:42', topic: 'Nuh calls his disbelieving son' },
      { ref: '11:43', topic: 'Son refuses, drowns' },
      { ref: '11:44', topic: 'Flood ends, Ark lands on Judi' },
      { ref: '71:1', topic: 'Nuh sent to warn his people' },
      { ref: '71:5', topic: 'He called them day and night' },
      { ref: '71:26', topic: 'His dua against disbelievers' },
      { ref: '29:14', topic: '950 years among his people' },
      { ref: '23:27', topic: 'Command to build Ark' },
    ],
    icon: '🚢'
  },
  {
    id: 'ibrahim',
    name: 'Ibrahim',
    nameAr: 'إبراهيم',
    title: 'Khalilullah (Friend of Allah)',
    periodStart: -2000,
    periodEnd: -1850,
    color: '#F59E0B',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Father of Prophets. Destroyed idols, survived fire. Rebuilt the Kaaba with Ismail. Tested with sacrifice of his son.',
    family: {
      wives: [
        'Sarah (سارة) - princess, mother of Ishaq, from Harran',
        'Hajar (هاجر / Hagar) - Egyptian, mother of Ismail, given by Egyptian king',
        'Qantura (قنطورا) - married after Sarah\'s death',
        'Hajun - married after Sarah\'s death'
      ],
      children: [
        'Ismail (from Hajar) - ancestor of Prophet Muhammad ﷺ',
        'Ishaq (from Sarah) - ancestor of Yaqub and Bani Israel prophets',
        'Madyan, Zimran, Yaqshan, Shuah, etc. (from later wives)'
      ],
      father: 'Azar (آزر) / Terah - was an idol maker',
      grandchildren: 'Yaqub (Jacob) and Esau from Ishaq',
      note: 'From Ismail: Arab prophets → Muhammad ﷺ. From Ishaq: Israelite prophets.'
    },
    age: 175,
    birthplace: 'Babylon (Ur), Iraq',
    miracles: [
      'Fire became cool and peaceful (Quran 21:69)',
      'Birds came back to life after being cut (Quran 2:260)',
      'Stars, moon, sun argument with his people',
      'Zamzam spring burst for his family',
      'Ram sent from heaven for sacrifice'
    ],
    scripture: 'Suhuf (Scrolls) - 10 scrolls revealed to him',
    burial: 'Cave of Machpelah, Hebron (Al-Khalil), Palestine - Masjid al-Ibrahimi',
    uniqueFacts: [
      'Called Khalilullah - only one with this title',
      'Father of all prophets after him',
      'Built/rebuilt the Kaaba with Ismail',
      'Originated Hajj rituals we follow today',
      'One of the 5 Ulul Azm prophets',
      'Mentioned 69 times in Quran - 2nd most',
      'First to be circumcised at age 80'
    ],
    keyEvents: ['Destroyed idols', 'Survived the fire', 'Rebuilt the Kaaba', 'Sacrifice of Ismail', 'Established Hajj'],
    verses: [
      { ref: '2:124', topic: 'Ibrahim made leader of mankind' },
      { ref: '2:125', topic: 'Kaaba made place of safety' },
      { ref: '2:127', topic: 'Ibrahim & Ismail raise foundations of Kaaba' },
      { ref: '2:260', topic: 'Birds brought back to life' },
      { ref: '6:76', topic: 'Stars, moon, sun - seeking Allah' },
      { ref: '14:37', topic: 'Dua for Makkah and descendants' },
      { ref: '21:51', topic: 'Given guidance from youth' },
      { ref: '21:58', topic: 'Smashed the idols' },
      { ref: '21:68', topic: 'Thrown into fire' },
      { ref: '21:69', topic: 'Fire became cool and safe' },
      { ref: '37:102', topic: 'Dream to sacrifice son' },
      { ref: '37:107', topic: 'Ram substituted for sacrifice' },
    ],
    icon: '🔥'
  },
  {
    id: 'ismail',
    name: 'Ismail',
    nameAr: 'إسماعيل',
    title: 'Dhabihullah (Sacrifice of Allah)',
    periodStart: -1900,
    periodEnd: -1800,
    color: '#EC4899',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Firstborn son of Ibrahim and Hajar. Left as infant in Makkah valley. Zamzam miracle. Built Kaaba with his father.',
    family: {
      father: 'Ibrahim (Khalilullah)',
      mother: 'Hajar (Hagar) - Egyptian princess',
      wives: [
        'Ra\'la bint Mudad - from Jurhum tribe (divorced on Ibrahim\'s advice)',
        'Sayyida bint Mudad - from Jurhum tribe (kept on Ibrahim\'s advice)'
      ],
      sons: '12 sons including Kedar (Qaydar), Nebaioth (Nabat), Adbeel, Mibsam, Mishma, Dumah, Massa, Hadar, Tema, Jetur, Naphish, Kedemah',
      halfBrother: 'Ishaq (Isaac)',
      note: 'Kedar (Qaydar) is the direct ancestor of Prophet Muhammad ﷺ.'
    },
    age: 137,
    miracles: ['Zamzam spring burst from under his feet as baby', 'Ram substituted for his sacrifice from heaven'],
    burial: 'Al-Hijr (Hateem) area inside Masjid al-Haram, Makkah - next to his mother Hajar',
    uniqueFacts: [
      'Direct ancestor of Prophet Muhammad ﷺ',
      'Learned pure Arabic from Jurhum tribe',
      'Called "Sadiq al-Wa\'d" - Truthful in Promise (Quran 19:54)',
      'First to ride horses according to hadith',
      'Helped build the Kaaba with his father',
      'Submitted willingly to be sacrificed'
    ],
    keyEvents: ['Left in Makkah valley', 'Zamzam miracle', 'Built Kaaba with Ibrahim', 'Sacrifice test', 'Ancestor of Muhammad ﷺ'],
    verses: [
      { ref: '2:125', topic: 'Maqam Ibrahim - his standing place' },
      { ref: '2:127', topic: 'Raised Kaaba foundations with Ibrahim' },
      { ref: '14:37', topic: 'Ibrahim\'s dua for barren valley' },
      { ref: '19:54', topic: 'True to his promise (Sadiq al-Wa\'d)' },
      { ref: '19:55', topic: 'Commanded family to pray and give zakat' },
      { ref: '37:102', topic: 'Submitted to be sacrificed' },
      { ref: '37:103', topic: 'Both submitted, laid on forehead' },
      { ref: '37:107', topic: 'Ransomed with great sacrifice (ram)' },
    ],
    icon: '💧'
  },
  {
    id: 'yaqub',
    name: 'Yaqub',
    nameAr: 'يعقوب',
    title: 'Israel (Chosen Servant of Allah)',
    periodStart: -1800,
    periodEnd: -1700,
    color: '#8B5CF6',
    location: 'canaan',
    coords: [31.5, 35.2],
    story: 'Son of Ishaq, grandson of Ibrahim. Father of 12 sons who became the 12 tribes of Bani Israel (Children of Israel).',
    family: {
      father: 'Ishaq (Isaac)',
      mother: 'Rifqah (Rebecca)',
      grandfather: 'Ibrahim (Khalilullah)',
      grandmother: 'Sarah',
      wives: [
        'Leah (Lia) - elder daughter of Laban, mother of 6 sons',
        'Rachel (Rahil) - younger daughter of Laban, mother of Yusuf & Binyamin',
        'Zilpah - Leah\'s maidservant',
        'Bilhah - Rachel\'s maidservant'
      ],
      sons: [
        'From Leah: Reuben, Simeon, Levi, Judah (Yahuda), Issachar, Zebulun',
        'From Rachel: Yusuf (Joseph), Binyamin (Benjamin)',
        'From Bilhah: Dan, Naphtali',
        'From Zilpah: Gad, Asher'
      ],
      daughter: 'Dinah',
      note: 'His 12 sons became the 12 tribes of Bani Israel.'
    },
    age: 147,
    miracles: ['Sight restored when Yusuf\'s shirt placed on his eyes (Quran 12:96)'],
    burial: 'Cave of Machpelah, Hebron (Al-Khalil), Palestine - with Ibrahim and Ishaq',
    uniqueFacts: [
      'Given title "Israel" (عبد الله - Servant of God)',
      'Became blind from crying for Yusuf for years',
      'All 12 sons became leaders of tribes',
      'Moved entire family (70 people) to Egypt',
      'Asked to be buried in Canaan, not Egypt'
    ],
    keyEvents: ['Father of 12 tribes', 'Grief for Yusuf', 'Reunion in Egypt', 'Named Israel'],
    verses: [
      { ref: '12:4', topic: 'Yusuf tells dream to Yaqub' },
      { ref: '12:5', topic: 'Yaqub warns about brothers\' jealousy' },
      { ref: '12:18', topic: 'Brothers bring false news' },
      { ref: '12:83', topic: 'Beautiful patience (Sabr Jameel)' },
      { ref: '12:84', topic: 'Eyes turned white from grief' },
      { ref: '12:86', topic: 'Complains only to Allah' },
      { ref: '12:93', topic: 'Shirt to restore his sight' },
      { ref: '12:96', topic: 'Sight restored when shirt placed' },
      { ref: '12:100', topic: 'Reunited with Yusuf in Egypt' },
      { ref: '19:49', topic: 'Blessed with Ishaq and Yaqub' },
      { ref: '2:132', topic: 'Advised sons before death' },
    ],
    icon: '👨‍👦‍👦'
  },
  {
    id: 'yusuf',
    name: 'Yusuf',
    nameAr: 'يوسف',
    title: 'As-Siddiq (The Truthful One)',
    periodStart: -1700,
    periodEnd: -1600,
    color: '#06B6D4',
    location: 'egypt',
    coords: [30.0444, 31.2357],
    story: 'Known for exceptional beauty and dream interpretation. Rose from slave and prisoner to Aziz (Minister) of Egypt.',
    family: {
      father: 'Yaqub (Jacob/Israel)',
      mother: 'Rahil (Rachel) - died giving birth to Binyamin',
      fullBrother: 'Binyamin (Benjamin) - only full brother, same mother',
      halfBrothers: '10 half-brothers from other mothers',
      wife: 'Asenath bint Potiphera (some say Zulaykha after she became Muslim)',
      sons: ['Ephraim (Afra\'im)', 'Manasseh (Manassa)'],
      note: 'His story is called "Ahsan al-Qasas" (Best of Stories) - Quran 12:3'
    },
    age: 110,
    miracles: ['True dream interpretation', 'Survived being thrown in well', 'Protected from Zulaykha\'s temptation', 'His shirt healed his father\'s blindness'],
    burial: 'Initially Egypt. Musa later took his remains to be buried in Hebron, Palestine',
    uniqueFacts: [
      'Given half of all human beauty',
      'Surah Yusuf is only surah telling complete story',
      'Became Aziz (Finance Minister) of Egypt',
      'Forgave brothers who tried to kill him',
      'Lived to see great-grandchildren',
      'His beauty caused women to cut their hands (12:31)'
    ],
    keyEvents: ['Thrown in well', 'Sold as slave', 'Zulaykha\'s test', 'Prison and dreams', 'Aziz of Egypt', 'Reunited with family'],
    verses: [
      { ref: '12:3', topic: 'Best of stories (Ahsan al-Qasas)' },
      { ref: '12:4', topic: 'Dream of 11 stars, sun, moon' },
      { ref: '12:15', topic: 'Thrown into well' },
      { ref: '12:20', topic: 'Sold for cheap price' },
      { ref: '12:23', topic: 'Woman tried to seduce him' },
      { ref: '12:24', topic: 'Saw proof of his Lord, protected' },
      { ref: '12:31', topic: 'Women cut hands seeing his beauty' },
      { ref: '12:33', topic: 'Chose prison over sin' },
      { ref: '12:37', topic: 'Interpreted dreams in prison' },
      { ref: '12:43', topic: 'King\'s dream interpretation' },
      { ref: '12:55', topic: 'Made in charge of storehouses' },
      { ref: '12:90', topic: 'Revealed identity to brothers' },
      { ref: '12:92', topic: 'Forgave his brothers' },
      { ref: '12:100', topic: 'Family prostrated, dream fulfilled' },
    ],
    icon: '⭐'
  },
  {
    id: 'musa',
    name: 'Musa',
    nameAr: 'موسى',
    title: 'Kalimullah (One who spoke to Allah)',
    periodStart: -1400,
    periodEnd: -1280,
    color: '#DC2626',
    location: 'sinai',
    coords: [28.5456, 33.9756],
    story: 'Spoke directly to Allah at Mount Sinai. Led Bani Israel out of Egypt. Received the Torah (Tawrat).',
    family: {
      father: 'Imran (Amram)',
      mother: 'Yukabid (Jochebed)',
      brother: 'Harun (Aaron) - also a prophet, 3 years older',
      sister: 'Maryam (Miriam) - saved him as baby',
      wife: 'Safura (Zipporah) - daughter of Prophet Shuayb',
      fosterMother: 'Asiya bint Muzahim - wife of Pharaoh, one of best women of paradise',
      sons: 'Gershom and Eliezer (from Safura)',
      note: 'Most mentioned prophet in the Quran (136 times by name).'
    },
    age: 120,
    miracles: [
      'Staff turned to giant serpent',
      'Hand glowed radiantly white',
      'Parted the Red Sea',
      '9 signs sent to Pharaoh',
      'Water gushed from rock (12 springs)',
      'Manna and Salwa (quails) from sky',
      'Mountain raised over Bani Israel'
    ],
    scripture: 'Torah (Tawrat) - received on Mt. Sinai',
    burial: 'Near Mt. Nebo, Jordan - exact location hidden by Allah, angels buried him',
    uniqueFacts: [
      'Spoke directly to Allah (Kalimullah)',
      'Most mentioned prophet - 136 times',
      'Led 600,000+ Israelites out of Egypt',
      'Met Prophet Muhammad ﷺ during Isra & Miraj',
      'Advised reducing prayers from 50 to 5',
      'One of the 5 Ulul Azm prophets',
      'Had speech impediment, asked Harun to help'
    ],
    keyEvents: ['Basket in Nile', 'Raised in Pharaoh\'s palace', 'Fled to Madyan', 'Burning bush', 'Confronted Pharaoh', 'Parted the sea', 'Torah at Sinai', '40 years in wilderness'],
    verses: [
      { ref: '20:9', topic: 'Story of Musa begins' },
      { ref: '20:12', topic: 'Sacred valley of Tuwa' },
      { ref: '20:17', topic: 'What is in your hand, Musa?' },
      { ref: '20:20', topic: 'Staff becomes serpent' },
      { ref: '20:22', topic: 'Hand glows white' },
      { ref: '28:7', topic: 'Mother inspired to put him in river' },
      { ref: '28:9', topic: 'Pharaoh\'s wife saves him' },
      { ref: '28:15', topic: 'Accidentally kills Egyptian' },
      { ref: '28:25', topic: 'Meets Shuayb\'s daughters' },
      { ref: '7:107', topic: 'Staff becomes serpent' },
      { ref: '7:117', topic: 'Defeats Pharaoh\'s magicians' },
      { ref: '7:133', topic: 'Nine signs sent to Pharaoh' },
      { ref: '26:63', topic: 'Strikes sea, it parts' },
      { ref: '7:142', topic: '40 nights on Mount Sinai' },
      { ref: '7:145', topic: 'Given tablets (Torah)' },
      { ref: '2:60', topic: '12 springs from rock' },
    ],
    icon: '📜'
  },
  {
    id: 'dawud',
    name: 'Dawud',
    nameAr: 'داود',
    title: 'Prophet-King of Israel',
    periodStart: -1040,
    periodEnd: -970,
    color: '#10B981',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'Prophet and king. Defeated Jalut (Goliath). Given the Zabur (Psalms). Mountains and birds glorified Allah with him.',
    family: {
      tribe: 'Tribe of Yahuda (Judah)',
      father: 'Yesse (Isa)',
      wives: 'Multiple wives (traditional sources mention several)',
      sons: ['Sulayman (Solomon) - prophet and successor', 'Absalom', 'Amnon', 'Adonijah', 'and others - 19 sons mentioned in sources'],
      daughters: 'Multiple daughters including Tamar',
      note: 'Sulayman inherited his kingdom and prophethood.'
    },
    age: 70,
    prophethood: '40 years as king of Israel',
    miracles: [
      'Iron made soft/moldable in his hands',
      'Mountains and birds did tasbeeh with him',
      'Voice so beautiful all creation listened',
      'Killed giant Goliath as young shepherd',
      'Given wisdom to judge'
    ],
    scripture: 'Zabur (Psalms) - 150 psalms of praise',
    burial: 'Mount Zion, Jerusalem',
    uniqueFacts: [
      'First prophet-king combining both roles',
      'Invented chain-mail armor',
      'Fasted every other day (best fasting)',
      'Prayed 1/3 of night (best prayer pattern)',
      'His worship pattern praised by Prophet ﷺ',
      'Ate only from his own hand\'s labor'
    ],
    keyEvents: ['Defeated Goliath', 'Became King of Israel', 'Given Zabur', 'Iron made soft', 'Established Jerusalem as capital'],
    verses: [
      { ref: '2:251', topic: 'Killed Goliath (Jalut)' },
      { ref: '21:78', topic: 'Judged case of sheep in field' },
      { ref: '21:79', topic: 'Mountains and birds glorified with him' },
      { ref: '21:80', topic: 'Taught to make armor' },
      { ref: '27:15', topic: 'Given knowledge with Sulayman' },
      { ref: '34:10', topic: 'Mountains echo with him' },
      { ref: '34:11', topic: 'Iron made soft, make armor' },
      { ref: '38:17', topic: 'Dawud was a man of strength' },
      { ref: '38:18', topic: 'Mountains glorified at evening and sunrise' },
      { ref: '38:20', topic: 'Strengthened his kingdom' },
      { ref: '38:26', topic: 'Made successor on earth' },
    ],
    icon: '🎵'
  },
  {
    id: 'sulayman',
    name: 'Sulayman',
    nameAr: 'سليمان',
    title: 'Prophet-King with Greatest Kingdom',
    periodStart: -970,
    periodEnd: -931,
    color: '#F472B6',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'Son of Dawud. Given kingdom over jinn, wind, animals, and birds. Understood language of all creatures.',
    family: {
      father: 'Dawud (David) - prophet and king',
      mother: 'Bath-sheba (Bathsheba)',
      wives: 'Had many wives including the Queen of Sheba (Bilqis) who accepted Islam',
      son: 'Rehoboam (Rahab\'am) - succeeded him but kingdom split',
      note: 'Asked Allah for kingdom that none after him would have (Quran 38:35).'
    },
    age: 52,
    prophethood: '40 years as king',
    miracles: [
      'Commanded jinn to work for him',
      'Wind traveled a month\'s journey in morning and evening',
      'Understood speech of all animals',
      'Ants, birds, jinn all served him',
      'Copper/brass flowed like water',
      'Throne of Bilqis transported instantly'
    ],
    burial: 'Jerusalem',
    uniqueFacts: [
      'Given greatest kingdom ever - none will match',
      'Jinn built palaces, statues, pools for him',
      'Queen of Sheba (Bilqis) accepted Islam',
      'Died leaning on his staff - jinn kept working',
      'His death revealed by worm eating staff',
      'Army included jinn, humans, and birds'
    ],
    keyEvents: ['Inherited kingdom from Dawud', 'Understood all creatures', 'Commanded jinn', 'Queen of Sheba visit', 'Built Al-Aqsa/Temple', 'Death while standing'],
    verses: [
      { ref: '27:16', topic: 'Inherited Dawud, taught bird speech' },
      { ref: '27:17', topic: 'Armies of jinn, men, birds' },
      { ref: '27:18', topic: 'Ant warns others of his army' },
      { ref: '27:20', topic: 'Inspects the birds, hoopoe missing' },
      { ref: '27:22', topic: 'Hoopoe brings news of Sheba' },
      { ref: '27:38', topic: 'Who will bring her throne?' },
      { ref: '27:40', topic: 'Throne brought in blink of eye' },
      { ref: '27:44', topic: 'Queen enters palace, accepts Islam' },
      { ref: '21:81', topic: 'Wind subjected to him' },
      { ref: '34:12', topic: 'Wind traveled month\'s journey' },
      { ref: '34:13', topic: 'Jinn made palaces, statues, pools' },
      { ref: '34:14', topic: 'Death while standing, worm revealed it' },
      { ref: '38:35', topic: 'Kingdom like none after him' },
    ],
    icon: '👑'
  },
  {
    id: 'isa',
    name: 'Isa',
    nameAr: 'عيسى',
    title: 'Ruhullah & Al-Masih (Spirit of Allah & The Messiah)',
    periodStart: 1,
    periodEnd: 33,
    color: '#A855F7',
    location: 'jerusalem',
    coords: [31.7683, 35.2137],
    story: 'Born miraculously to Maryam without father. Given the Injeel (Gospel). Performed many miracles. Raised alive to heaven.',
    family: {
      mother: 'Maryam bint Imran (Mary) - virgin, best woman of her time',
      maternalGrandfather: 'Imran',
      maternalGrandmother: 'Hannah',
      uncle: 'Zakariya - prophet who raised Maryam',
      cousin: 'Yahya (John the Baptist) - prophet, son of Zakariya',
      father: 'None - created by Allah\'s command "Kun" (Be)',
      wife: 'None - never married',
      children: 'None',
      note: 'Born without father. Like Adam who was created without parents. Will return before Day of Judgment.'
    },
    age: 33,
    ageNote: 'Raised to heaven at approximately 33 years. Will return and live, then die.',
    miracles: [
      'Born without father',
      'Spoke in cradle defending his mother',
      'Made birds from clay and gave them life',
      'Healed born-blind and lepers',
      'Raised the dead by Allah\'s permission',
      'Table of food descended from heaven (Ma\'idah)',
      'Knew what people ate and stored at home'
    ],
    scripture: 'Injeel (Gospel) - original scripture from Allah',
    burial: 'Not dead - raised alive to heaven. Will return, live, die, and be buried next to Prophet Muhammad ﷺ in Madinah.',
    uniqueFacts: [
      'Created without father (like Adam without parents)',
      'Called "Kalimatullah" - Word of Allah',
      'Called "Ruhullah" - Spirit from Allah',
      'Will return before Day of Judgment',
      'Will kill Dajjal (Anti-Christ)',
      'Will pray behind Imam Mahdi',
      'Only prophet raised alive to heaven',
      'Will live 40 years after returning'
    ],
    keyEvents: ['Miraculous birth', 'Spoke in cradle', 'Given Injeel', 'Performed miracles', 'Raised to heaven', 'Will return'],
    verses: [
      { ref: '3:45', topic: 'Glad tidings of Isa, the Messiah' },
      { ref: '3:46', topic: 'Will speak in cradle' },
      { ref: '3:47', topic: 'Created without father - "Be" and it is' },
      { ref: '3:49', topic: 'Birds from clay, heals blind/lepers' },
      { ref: '3:55', topic: 'Raised to Allah' },
      { ref: '5:110', topic: 'All miracles listed' },
      { ref: '5:112', topic: 'Disciples ask for table from heaven' },
      { ref: '5:116', topic: 'Did you tell people to worship you?' },
      { ref: '19:16', topic: 'Maryam withdraws to eastern place' },
      { ref: '19:19', topic: 'Angel announces pure boy' },
      { ref: '19:22', topic: 'Gives birth under palm tree' },
      { ref: '19:30', topic: 'Speaks in cradle: I am servant of Allah' },
      { ref: '4:157', topic: 'They did not kill him, nor crucify' },
      { ref: '4:158', topic: 'Allah raised him to Himself' },
      { ref: '43:61', topic: 'Sign of the Hour (return)' },
    ],
    icon: '✨'
  },
  {
    id: 'muhammad',
    name: 'Muhammad ﷺ',
    nameAr: 'محمد ﷺ',
    title: 'Khatam an-Nabiyyin (Seal of Prophets)',
    periodStart: 570,
    periodEnd: 632,
    color: '#10B981',
    location: 'makkah',
    coords: [21.4225, 39.8262],
    story: 'Final Prophet and Messenger to all mankind and jinn. Received the Quran over 23 years. Established Islam as complete way of life.',
    family: {
      father: 'Abdullah ibn Abd al-Muttalib (عبد الله) - died 6 months before his birth in Madinah, age 25',
      mother: 'Aminah bint Wahb (آمنة بنت وهب) - died when he was 6 at Abwa, returning from Madinah',
      grandfather: 'Abd al-Muttalib (عبد المطلب) - chief of Quraysh, raised him, died when he was 8',
      grandmother: 'Fatimah bint Amr (paternal), Barrah bint Abd al-Uzza (maternal)',
      uncles: [
        'Abu Talib - protected him for 40+ years until death',
        'Hamza (حمزة) - Lion of Allah, martyred at Uhud',
        'Abbas (العباس) - ancestor of Abbasid dynasty',
        'Abu Lahab - enemy, mentioned in Surah Masad'
      ],
      aunts: ['Safiyyah bint Abd al-Muttalib - mother of Zubayr ibn al-Awwam'],
      fosterMother: 'Halimah al-Sa\'diyah (حليمة السعدية) - nursed him in the desert',
      fosterSiblings: 'Abdullah, Anisa, Hudhafa (Shayma) - children of Halimah',
      wives: [
        { name: 'Khadijah bint Khuwaylid', nameAr: 'خديجة بنت خويلد', year: '595 CE', age: 40, note: 'First wife, 25 years together, mother of all children except Ibrahim. First to believe. Died 619 CE.' },
        { name: 'Sawda bint Zam\'a', nameAr: 'سودة بنت زمعة', year: '620 CE', note: 'Married after Khadijah\'s death. Cared for his household and children.' },
        { name: 'Aisha bint Abu Bakr', nameAr: 'عائشة بنت أبي بكر', year: '623 CE', note: 'Daughter of Abu Bakr. Greatest woman scholar. Narrated 2,210 hadiths.' },
        { name: 'Hafsa bint Umar', nameAr: 'حفصة بنت عمر', year: '625 CE', note: 'Daughter of Umar. Keeper of the original Quran manuscript.' },
        { name: 'Zaynab bint Khuzayma', nameAr: 'زينب بنت خزيمة', year: '625 CE', note: 'Called "Mother of the Poor" (Umm al-Masakin). Died 2-3 months after marriage.' },
        { name: 'Umm Salama (Hind)', nameAr: 'أم سلمة (هند)', year: '626 CE', note: 'Widow of Abu Salama. Known for wisdom. Last wife to die (680 CE).' },
        { name: 'Zaynab bint Jahsh', nameAr: 'زينب بنت جحش', year: '627 CE', note: 'His cousin. Marriage commanded by Allah (33:37). Known for charity.' },
        { name: 'Juwayriyya bint al-Harith', nameAr: 'جويرية بنت الحارث', year: '627 CE', note: 'Daughter of chief of Banu Mustaliq. Her marriage freed 100 families.' },
        { name: 'Safiyya bint Huyayy', nameAr: 'صفية بنت حيي', year: '628 CE', note: 'Daughter of Jewish chief. Descended from Prophet Harun.' },
        { name: 'Umm Habiba (Ramla)', nameAr: 'أم حبيبة (رملة)', year: '628 CE', note: 'Daughter of Abu Sufyan. Married in Abyssinia by proxy.' },
        { name: 'Maymuna bint al-Harith', nameAr: 'ميمونة بنت الحارث', year: '629 CE', note: 'Last wife. Aunt of Khalid ibn al-Walid and Ibn Abbas.' }
      ],
      children: [
        { name: 'Qasim', mother: 'Khadijah', note: 'First son, died in infancy. Prophet called "Abu Qasim"' },
        { name: 'Zainab', mother: 'Khadijah', note: 'Eldest daughter. Married Abu al-As. Died 629 CE.' },
        { name: 'Ruqayyah', mother: 'Khadijah', note: 'Married Uthman. Died during Badr. Called "Dhat al-Hijratayn"' },
        { name: 'Umm Kulthum', mother: 'Khadijah', note: 'Married Uthman after Ruqayyah. Died 630 CE.' },
        { name: 'Fatimah al-Zahra', mother: 'Khadijah', note: 'Leader of women of Paradise. Married Ali. Mother of Hasan & Husayn.' },
        { name: 'Abdullah (al-Tahir/al-Tayyib)', mother: 'Khadijah', note: 'Died in infancy' },
        { name: 'Ibrahim', mother: 'Maria al-Qibtiyya', note: 'Born 630 CE, died 632 CE at 18 months. Solar eclipse at his death.' }
      ],
      grandchildren: [
        'Hasan ibn Ali - "Leader of youth of Paradise"',
        'Husayn ibn Ali - "Leader of youth of Paradise", martyred at Karbala',
        'Zaynab bint Ali - heroine of Karbala',
        'Umm Kulthum bint Ali',
        'Umama bint Zainab - Prophet loved her dearly'
      ],
      note: 'All wives are "Mothers of Believers" (Ummahat al-Mu\'minin) - Muslims cannot marry them after him (33:53)'
    },
    age: 63,
    birthDate: '12 Rabi\' al-Awwal (April 22, 571 CE) - Year of the Elephant',
    deathDate: '12 Rabi\' al-Awwal 11 AH (June 8, 632 CE)',
    prophethood: '23 years (13 in Makkah, 10 in Madinah)',
    miracles: [
      'The Quran - greatest and lasting miracle',
      'Isra & Mi\'raj - night journey to Jerusalem and heavens',
      'Splitting of the moon',
      'Water flowing from between his fingers',
      'Food multiplication for armies',
      'Tree trunk crying when he left it',
      'Prophecies that came true',
      'Stones and trees greeting him'
    ],
    scripture: 'Quran - Final Testament, preserved letter-by-letter',
    burial: 'Masjid an-Nabawi, Madinah - in the room of Aisha (رضي الله عنها)',
    uniqueFacts: [
      'Final prophet for all mankind and jinn',
      'Quran preserved perfectly to this day',
      'Named in previous scriptures',
      'Mentioned by name 4 times in Quran (Muhammad & Ahmad)',
      'Called "Mercy to all worlds" (Rahmatan lil-\'Alamin) 21:107',
      'Leader of all prophets on Day of Judgment',
      'Will intercede for humanity',
      'One of the 5 Ulul Azm prophets',
      'Given Jawami\' al-Kalim - concise speech'
    ],
    companions: '100,000+ Sahaba (direct companions)',
    ummah: '2+ billion Muslims today (largest Ummah ever)',
    keyEvents: [
      'Birth - Year of Elephant (571 CE)',
      'First revelation in Cave Hira (610 CE)',
      'Isra & Mi\'raj (621 CE)',
      'Hijra to Madinah (622 CE)',
      'Battle of Badr (624 CE)',
      'Conquest of Makkah (630 CE)',
      'Farewell Pilgrimage (632 CE)',
      'Passed away (632 CE)'
    ],
    verses: [
      { ref: '33:40', topic: 'Seal of the Prophets' },
      { ref: '21:107', topic: 'Sent as mercy to all worlds' },
      { ref: '33:21', topic: 'Beautiful example in the Messenger' },
      { ref: '68:4', topic: 'On exalted character' },
      { ref: '3:144', topic: 'Muhammad is only a messenger' },
      { ref: '48:29', topic: 'Muhammad is Messenger of Allah' },
      { ref: '17:1', topic: 'Isra - night journey to Al-Aqsa' },
      { ref: '53:1', topic: 'By the star - Mi\'raj begins' },
      { ref: '53:9', topic: 'Two bow lengths or nearer (to Allah)' },
      { ref: '94:1', topic: 'Did We not expand your chest?' },
      { ref: '108:1', topic: 'Given Al-Kawthar (abundance)' },
      { ref: '9:128', topic: 'Messenger from among yourselves' },
      { ref: '47:2', topic: 'Revealed to Muhammad' },
    ],
    icon: '🌙'
  }
];

// Custom marker icons with labels
const createMarkerIcon = (color, size = 28, isSelected = false, iconType = 'default', label = '') => {
  const icons = {
    mosque: '🕌',
    grave: '⭐',
    cave: '🏔️',
    revelation: '📖',
    miracle: '✨',
    destroyed: '⚠️',
    animal: '🐪',
    default: '📍'
  };

  const icon = icons[iconType] || icons.default;
  const showLabel = isSelected && label;

  return L.divIcon({
    html: `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
        <div style="
          width: ${size}px; height: ${size}px;
          background: ${color}; border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4), 0 0 ${isSelected ? '25px' : '12px'} ${color}90;
          ${isSelected ? 'animation: markerPulse 1.5s infinite; transform: scale(1.2);' : ''}
          display: flex; align-items: center; justify-content: center;
          font-size: ${size * 0.5}px;
          transition: transform 0.2s ease;
        ">${icon}</div>
        ${showLabel ? `
          <div style="
            position: absolute;
            top: ${size + 4}px;
            background: rgba(0,0,0,0.85);
            color: white;
            padding: 4px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            border: 1px solid ${color}50;
          ">${label}</div>
        ` : ''}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [size, size + (showLabel ? 30 : 0)],
    iconAnchor: [size/2, size/2],
  });
};

// Animated Polyline Component - Uses requestAnimationFrame for smooth animation
const AnimatedPolyline = memo(({ positions, color, isActive, onClick, name }) => {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    if (!isActive) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    // Use requestAnimationFrame with throttling to 30fps (33ms) for better performance
    const animate = (timestamp) => {
      if (timestamp - lastTimeRef.current >= 33) { // ~30fps instead of 20fps at 50ms
        setOffset(prev => (prev + 2) % 100); // Move by 2 to compensate for slower rate
        lastTimeRef.current = timestamp;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isActive]);

  return (
    <>
      {/* Base path */}
      <Polyline
        positions={positions}
        pathOptions={{
          color: color,
          weight: isActive ? 5 : 3,
          opacity: isActive ? 0.9 : 0.4,
          dashArray: isActive ? '15, 10' : '8, 4',
          dashOffset: isActive ? -offset : 0,
        }}
        eventHandlers={{ click: onClick }}
      />
      {/* Animated glow effect when active */}
      {isActive && (
        <Polyline
          positions={positions}
          pathOptions={{
            color: color,
            weight: 8,
            opacity: 0.2,
            lineCap: 'round',
          }}
        />
      )}
    </>
  );
});

// Qibla Compass Overlay
const QiblaCompass = memo(({ userLocation, qiblaAngle, distance }) => {
  if (!userLocation) return null;

  return (
    <div className="absolute bottom-20 right-4 z-[1000]">
      <div className="bg-black/90 backdrop-blur-md rounded-2xl p-4 border border-amber-500/30 shadow-xl">
        <div className="text-center mb-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Qibla Direction</span>
        </div>

        {/* Compass Circle */}
        <div className="relative w-24 h-24 mx-auto">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-amber-500/50" />

          {/* Cardinal directions */}
          {['N', 'E', 'S', 'W'].map((dir, i) => (
            <div
              key={dir}
              className="absolute text-white/50 text-[10px] font-bold"
              style={{
                top: i === 0 ? '2px' : i === 2 ? 'auto' : '50%',
                bottom: i === 2 ? '2px' : 'auto',
                left: i === 3 ? '4px' : i === 1 ? 'auto' : '50%',
                right: i === 1 ? '4px' : 'auto',
                transform: (i === 0 || i === 2) ? 'translateX(-50%)' : 'translateY(-50%)',
              }}
            >
              {dir}
            </div>
          ))}

          {/* Kaaba icon at center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-amber-500 rounded-sm flex items-center justify-center text-black text-xs">
              🕋
            </div>
          </div>

          {/* Qibla arrow */}
          <div
            className="absolute inset-0"
            style={{ transform: `rotate(${qiblaAngle}deg)` }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderBottom: '16px solid #F59E0B',
              }}
            />
          </div>
        </div>

        {/* Distance info */}
        <div className="text-center mt-3">
          <div className="text-amber-400 text-lg font-bold">{Math.round(qiblaAngle)}°</div>
          <div className="text-white/60 text-xs">{distance.toLocaleString()} km to Kaaba</div>
        </div>
      </div>
    </div>
  );
});

// Map Controls
const MapControls = memo(({ onZoomIn, onZoomOut, onReset, onLocateUser, isLocating, coords }) => (
  <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
    <div className="bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
      <button onClick={onZoomIn} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20" title="Zoom In">
        <Icons.ZoomIn className="w-4 h-4" />
      </button>
      <div className="h-px bg-white/20" />
      <button onClick={onZoomOut} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20" title="Zoom Out">
        <Icons.ZoomOut className="w-4 h-4" />
      </button>
      <div className="h-px bg-white/20" />
      <button onClick={onReset} className="w-9 h-9 flex items-center justify-center text-white hover:bg-white/20" title="Reset View">
        <Icons.Refresh className="w-4 h-4" />
      </button>
      <div className="h-px bg-white/20" />
      <button
        onClick={onLocateUser}
        className={`w-9 h-9 flex items-center justify-center hover:bg-white/20 ${isLocating ? 'text-amber-400 animate-pulse' : 'text-white'}`}
        title="Find My Location & Qibla"
      >
        <Icons.Compass className="w-4 h-4" />
      </button>
    </div>
    {coords && (
      <div className="bg-black/80 backdrop-blur-sm rounded-xl p-2 border border-white/20 text-center">
        <div className="text-white/50 text-[9px] uppercase">Coords</div>
        <div className="text-white text-[10px] font-mono">{coords.lat.toFixed(3)}, {coords.lng.toFixed(3)}</div>
      </div>
    )}
  </div>
));

// Map Events Handler
const MapEventHandler = memo(({ onCoordsChange, onMapRef }) => {
  const map = useMap();
  useEffect(() => { onMapRef && onMapRef(map); }, [map, onMapRef]);
  useMapEvents({
    mousemove: (e) => onCoordsChange && onCoordsChange(e.latlng),
  });
  return null;
});

// Collapsible Layer Panel
const LayerPanel = memo(({ layers, activeLayers, toggleLayer, counts, isOpen, setIsOpen }) => {
  return (
    <div className="absolute top-4 left-4 z-[1000]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-black/90 backdrop-blur-md rounded-xl border border-white/20 text-white shadow-lg hover:bg-black/95 transition-all"
      >
        <Icons.Layers className="w-4 h-4 text-amber-400" />
        <span className="text-sm font-medium">Layers</span>
        <span className="text-xs bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded-full">
          {activeLayers.length}
        </span>
        <Icons.ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="mt-2 bg-black/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl overflow-hidden w-56">
          <div className="p-2 border-b border-white/10">
            <p className="text-white/50 text-xs uppercase tracking-wider">Toggle Layers</p>
          </div>
          <div className="p-2 space-y-1 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {Object.values(layers).map(layer => {
              const Icon = Icons[layer.icon] || Icons.MapPin;
              const isActive = activeLayers.includes(layer.id);
              const count = counts[layer.id] || 0;

              return (
                <button
                  key={layer.id}
                  onClick={() => toggleLayer(layer.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: isActive ? `${layer.color}30` : 'rgba(255,255,255,0.05)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: isActive ? layer.color : undefined }} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">{layer.name}</p>
                    <p className="text-[10px] text-white/40">{count} locations</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive ? 'border-amber-400 bg-amber-400' : 'border-white/30'
                    }`}
                  >
                    {isActive && <Icons.Check className="w-3 h-3 text-black" />}
                  </div>
                </button>
              );
            })}
          </div>
          {/* Quick actions */}
          <div className="p-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => Object.keys(layers).forEach(id => !activeLayers.includes(id) && toggleLayer(id))}
              className="flex-1 text-xs py-1.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/20"
            >
              Select All
            </button>
            <button
              onClick={() => activeLayers.forEach(id => toggleLayer(id))}
              className="flex-1 text-xs py-1.5 rounded-lg bg-white/10 text-white/70 hover:bg-white/20"
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

// Compact Timeline Slider with Prophet Details
const TimelineSlider = memo(({ value, onChange, events, prophets = [], onProphetClick, onFlyToLocation }) => {
  const minYear = -4000;
  const maxYear = 700;
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFamilyTree, setShowFamilyTree] = useState(false);

  // Find active prophet(s) for current year
  const activeProphets = (prophets || []).filter(p => value >= p.periodStart && value <= p.periodEnd);
  const mainProphet = activeProphets[activeProphets.length - 1];

  // Format year display
  const formatYear = (year) => year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`;

  return (
    <div className="absolute bottom-3 left-3 right-3 z-[1000] max-w-5xl mx-auto">
      <div className="bg-gray-950/95 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl overflow-hidden">

        {/* Compact Header with Prophet Selector */}
        <div className="p-3 bg-gray-900/80">
          {/* Prophet Row - Horizontal scroll on mobile, flex wrap on desktop */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {prophets.map(prophet => {
              const isActive = value >= prophet.periodStart && value <= prophet.periodEnd;
              return (
                <button
                  key={prophet.id}
                  onClick={() => {
                    onChange(prophet.periodStart + Math.floor((prophet.periodEnd - prophet.periodStart) / 2));
                    onFlyToLocation(prophet.coords);
                  }}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all flex-shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-black shadow-md'
                      : 'bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <span className="text-base">{prophet.icon}</span>
                  <span className={`text-xs font-semibold whitespace-nowrap ${isActive ? 'text-black' : ''}`}>
                    {prophet.name === 'Muhammad ﷺ' ? 'Muhammad ﷺ' : prophet.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline Bar */}
          <div className="relative h-8 mt-2">
            {/* Background track */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 bg-gray-800 rounded-full" />

            {/* Prophet period segments */}
            {prophets.map(prophet => {
              const startPercent = ((prophet.periodStart - minYear) / (maxYear - minYear)) * 100;
              const endPercent = ((prophet.periodEnd - minYear) / (maxYear - minYear)) * 100;
              const isActive = value >= prophet.periodStart && value <= prophet.periodEnd;

              return (
                <div
                  key={prophet.id}
                  className="absolute top-1/2 -translate-y-1/2 h-3 rounded-full cursor-pointer transition-all hover:h-4"
                  style={{
                    left: `${Math.max(0, startPercent)}%`,
                    width: `${Math.min(100 - startPercent, endPercent - startPercent)}%`,
                    backgroundColor: isActive ? prophet.color : `${prophet.color}50`,
                    boxShadow: isActive ? `0 0 8px ${prophet.color}` : 'none',
                  }}
                  title={prophet.name}
                  onClick={() => {
                    onChange(prophet.periodStart + Math.floor((prophet.periodEnd - prophet.periodStart) / 2));
                    onFlyToLocation(prophet.coords);
                  }}
                />
              );
            })}

            {/* Slider input */}
            <input
              type="range"
              min={minYear}
              max={maxYear}
              value={value}
              onChange={(e) => onChange(parseInt(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
            />

            {/* Custom thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ left: `calc(${((value - minYear) / (maxYear - minYear)) * 100}%)` }}
            >
              <div className="w-4 h-4 -ml-2 bg-white rounded-full shadow-lg border-2 border-amber-400" />
            </div>
          </div>

          {/* Year labels and expand button */}
          <div className="flex items-center justify-between mt-1">
            <span className="text-[10px] text-gray-500">4000 BCE</span>
            {mainProphet && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${
                  isExpanded
                    ? 'bg-amber-500/20 border border-amber-500/50'
                    : 'bg-gray-800 hover:bg-amber-500/20 border border-gray-700 hover:border-amber-500/50 animate-pulse'
                }`}
              >
                <span className="text-base">{mainProphet.icon}</span>
                <div className="text-left">
                  <span className="text-white font-medium block">{mainProphet.name}</span>
                  <span className="text-amber-400 text-[10px]">{isExpanded ? 'Click to collapse' : 'Tap for family & details ↓'}</span>
                </div>
                <Icons.ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
            <span className="text-[10px] text-gray-500">700 CE</span>
          </div>
        </div>

        {/* Expanded Content - Prophet Details */}
        {isExpanded && mainProphet && (
          <div className="p-3 bg-gray-900/90 border-t border-gray-700 max-h-[45vh] overflow-y-auto custom-scrollbar">
            {/* Header with Family Tree Button */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl cursor-pointer hover:scale-105 transition-transform shadow-lg"
                  style={{ backgroundColor: mainProphet.color }}
                  onClick={() => onFlyToLocation(mainProphet.coords)}
                >
                  {mainProphet.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-bold text-base">{mainProphet.name}</h3>
                    <span className="text-gray-400 text-sm" dir="rtl">{mainProphet.nameAr}</span>
                  </div>
                  <p className="text-amber-400 text-xs italic">"{mainProphet.title}"</p>
                </div>
              </div>
              <button
                onClick={() => setShowFamilyTree(!showFamilyTree)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs transition-all ${
                  showFamilyTree
                    ? 'bg-purple-500/30 border border-purple-400 text-purple-300'
                    : 'bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-400'
                }`}
              >
                <span>🌳</span>
                <span className="hidden sm:inline">{showFamilyTree ? 'Hide Tree' : 'Family Tree'}</span>
              </button>
            </div>

            {/* Family Tree Mind Map */}
            {showFamilyTree && (
              <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/30">
                <h4 className="text-purple-300 text-xs font-bold uppercase mb-3 flex items-center gap-2">
                  🌳 Prophetic Family Lineage
                </h4>
                <div className="relative">
                  {/* Main Lineage Tree */}
                  <div className="flex flex-col items-center">
                    {/* Adam - Root */}
                    <div className="flex flex-col items-center">
                      <div className="px-3 py-1.5 rounded-lg bg-green-500/30 border border-green-400 text-green-300 text-xs font-medium">
                        🌍 Adam
                      </div>
                      <div className="w-0.5 h-4 bg-gray-600"></div>
                      <div className="text-gray-500 text-[10px]">↓ many generations</div>
                      <div className="w-0.5 h-4 bg-gray-600"></div>
                    </div>

                    {/* Nuh */}
                    <div className="flex flex-col items-center">
                      <div className="px-3 py-1.5 rounded-lg bg-blue-500/30 border border-blue-400 text-blue-300 text-xs font-medium">
                        🚢 Nuh
                      </div>
                      <div className="w-0.5 h-4 bg-gray-600"></div>
                      <div className="text-gray-500 text-[10px]">↓ Sam (Shem)</div>
                      <div className="w-0.5 h-4 bg-gray-600"></div>
                    </div>

                    {/* Ibrahim */}
                    <div className="flex flex-col items-center">
                      <div className="px-3 py-1.5 rounded-lg bg-amber-500/30 border border-amber-400 text-amber-300 text-xs font-medium">
                        🔥 Ibrahim (Khalilullah)
                      </div>
                      <div className="w-0.5 h-3 bg-gray-600"></div>
                      {/* Split to Ismail and Ishaq */}
                      <div className="flex items-start gap-8">
                        {/* Ismail Branch */}
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-0.5 bg-gray-600 absolute" style={{marginLeft: '-4rem', marginTop: '-0.5rem'}}></div>
                          <div className="w-0.5 h-3 bg-gray-600"></div>
                          <div className="px-2.5 py-1 rounded-lg bg-pink-500/30 border border-pink-400 text-pink-300 text-[11px] font-medium">
                            💧 Ismail
                          </div>
                          <div className="w-0.5 h-2 bg-gray-600"></div>
                          <div className="text-gray-500 text-[9px]">↓ Kedar</div>
                          <div className="text-gray-500 text-[9px]">↓ generations</div>
                          <div className="w-0.5 h-2 bg-gray-600"></div>
                          <div className="px-2.5 py-1 rounded-lg bg-emerald-500/40 border-2 border-emerald-400 text-emerald-300 text-[11px] font-bold shadow-lg shadow-emerald-500/20">
                            🌙 Muhammad ﷺ
                          </div>
                        </div>

                        {/* Ishaq Branch */}
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-3 bg-gray-600"></div>
                          <div className="px-2.5 py-1 rounded-lg bg-purple-500/30 border border-purple-400 text-purple-300 text-[11px] font-medium">
                            Ishaq
                          </div>
                          <div className="w-0.5 h-2 bg-gray-600"></div>
                          <div className="px-2.5 py-1 rounded-lg bg-violet-500/30 border border-violet-400 text-violet-300 text-[11px] font-medium">
                            👨‍👦‍👦 Yaqub (Israel)
                          </div>
                          <div className="w-0.5 h-2 bg-gray-600"></div>
                          <div className="text-gray-500 text-[9px]">12 sons → 12 Tribes</div>
                          <div className="w-0.5 h-2 bg-gray-600"></div>
                          <div className="flex gap-3">
                            <div className="flex flex-col items-center">
                              <div className="px-2 py-0.5 rounded bg-cyan-500/30 border border-cyan-400 text-cyan-300 text-[10px]">
                                ⭐ Yusuf
                              </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="px-2 py-0.5 rounded bg-gray-600 text-gray-300 text-[10px]">
                                Lawi → Imran
                              </div>
                              <div className="w-0.5 h-2 bg-gray-600"></div>
                              <div className="flex gap-2">
                                <div className="px-2 py-0.5 rounded bg-red-500/30 border border-red-400 text-red-300 text-[10px]">
                                  📜 Musa
                                </div>
                                <div className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 text-[10px]">
                                  Harun
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-0.5 h-2 bg-gray-600 mt-2"></div>
                          <div className="flex gap-2">
                            <div className="px-2 py-0.5 rounded bg-green-500/30 border border-green-400 text-green-300 text-[10px]">
                              🎵 Dawud
                            </div>
                            <div className="text-gray-500">→</div>
                            <div className="px-2 py-0.5 rounded bg-pink-500/30 border border-pink-400 text-pink-300 text-[10px]">
                              👑 Sulayman
                            </div>
                          </div>
                          <div className="w-0.5 h-2 bg-gray-600 mt-2"></div>
                          <div className="flex gap-2 items-center">
                            <div className="px-2 py-0.5 rounded bg-gray-600 text-gray-300 text-[10px]">
                              Imran
                            </div>
                            <div className="text-gray-500">→</div>
                            <div className="px-2 py-0.5 rounded bg-purple-500/30 border border-purple-400 text-purple-300 text-[10px]">
                              ✨ Isa
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="mt-4 pt-3 border-t border-gray-700 flex flex-wrap gap-2 justify-center text-[9px] text-gray-500">
                    <span>🟢 Rasul (Messenger with Book)</span>
                    <span>•</span>
                    <span>Lines show direct lineage</span>
                    <span>•</span>
                    <span>Based on Quran & authentic sources</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Stats Row */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              {mainProphet.age && (
                <div className="text-center p-2 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="text-lg font-bold text-white">{mainProphet.age}</div>
                  <div className="text-[9px] text-gray-400 uppercase">Years Lived</div>
                </div>
              )}
              {mainProphet.prophethood && (
                <div className="text-center p-2 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="text-sm font-bold text-amber-400">{mainProphet.prophethood}</div>
                  <div className="text-[9px] text-gray-400 uppercase">Prophethood</div>
                </div>
              )}
              {mainProphet.scripture && (
                <div className="text-center p-2 rounded-lg bg-emerald-900/30 border border-emerald-700">
                  <div className="text-sm font-bold text-emerald-400">📖</div>
                  <div className="text-[9px] text-emerald-300">{mainProphet.scripture.split(' ')[0]}</div>
                </div>
              )}
              {mainProphet.companions && (
                <div className="text-center p-2 rounded-lg bg-blue-900/30 border border-blue-700">
                  <div className="text-sm font-bold text-blue-400">100K+</div>
                  <div className="text-[9px] text-blue-300">Sahaba</div>
                </div>
              )}
              {mainProphet.ummah && (
                <div className="text-center p-2 rounded-lg bg-green-900/30 border border-green-700">
                  <div className="text-sm font-bold text-green-400">2B+</div>
                  <div className="text-[9px] text-green-300">Ummah</div>
                </div>
              )}
            </div>

            {/* Story */}
            <p className="text-gray-300 text-xs mb-3 leading-relaxed">{mainProphet.story}</p>

            {/* Two Column Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              {/* Miracles - show ALL */}
              {mainProphet.miracles && (
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-700/50">
                  <p className="text-amber-400 text-[10px] font-bold uppercase mb-1.5">✨ Miracles ({mainProphet.miracles.length})</p>
                  <ul className="space-y-0.5 max-h-32 overflow-y-auto custom-scrollbar">
                    {mainProphet.miracles.map((m, i) => (
                      <li key={i} className="text-[11px] text-amber-200/80 flex items-start gap-1">
                        <span className="text-amber-500 mt-0.5">•</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Family */}
              {mainProphet.family && (
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border border-blue-700/50">
                  <p className="text-blue-400 text-[10px] font-bold uppercase mb-1.5">👨‍👩‍👧‍👦 Family</p>
                  <div className="space-y-1 text-[11px] max-h-60 overflow-y-auto custom-scrollbar">
                    {mainProphet.family.father && (
                      <div><span className="text-gray-500">Father:</span> <span className="text-blue-200">{mainProphet.family.father}</span></div>
                    )}
                    {mainProphet.family.mother && (
                      <div><span className="text-gray-500">Mother:</span> <span className="text-blue-200">{mainProphet.family.mother}</span></div>
                    )}
                    {mainProphet.family.wife && (
                      <div><span className="text-gray-500">Wife:</span> <span className="text-blue-200">{mainProphet.family.wife}</span></div>
                    )}
                    {/* Wives - handle string, string array, and object array */}
                    {mainProphet.family.wives && (
                      <div className="mt-1">
                        <span className="text-gray-500 block mb-1">Wives{Array.isArray(mainProphet.family.wives) ? ` (${mainProphet.family.wives.length})` : ''}:</span>
                        {typeof mainProphet.family.wives === 'string' ? (
                          <div className="text-[10px] text-blue-200">{mainProphet.family.wives}</div>
                        ) : Array.isArray(mainProphet.family.wives) ? (
                          <div className="grid gap-1">
                            {mainProphet.family.wives.map((wife, i) => (
                              <div key={i} className="text-[10px] bg-blue-900/30 rounded px-1.5 py-0.5">
                                {typeof wife === 'object' ? (
                                  <>
                                    <span className="text-blue-300 font-medium">{i + 1}. {wife.name}</span>
                                    {wife.nameAr && <span className="text-blue-400 mr-1" dir="rtl"> ({wife.nameAr})</span>}
                                    {wife.year && <span className="text-gray-500"> • {wife.year}</span>}
                                    {wife.note && <div className="text-gray-400 text-[9px] mt-0.5">{wife.note}</div>}
                                  </>
                                ) : (
                                  <span className="text-blue-200">{i + 1}. {wife}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )}
                    {/* Children - handle string, string array, and object array */}
                    {mainProphet.family.children && (
                      <div className="mt-1">
                        <span className="text-gray-500 block mb-1">Children{Array.isArray(mainProphet.family.children) ? ` (${mainProphet.family.children.length})` : ''}:</span>
                        {typeof mainProphet.family.children === 'string' ? (
                          <div className="text-[10px] text-green-200">{mainProphet.family.children}</div>
                        ) : Array.isArray(mainProphet.family.children) ? (
                          <div className="grid gap-0.5">
                            {mainProphet.family.children.map((child, i) => (
                              <div key={i} className="text-[10px] bg-green-900/20 rounded px-1.5 py-0.5">
                                {typeof child === 'object' ? (
                                  <>
                                    <span className="text-green-300 font-medium">{child.name}</span>
                                    {child.mother && <span className="text-gray-500"> (from {child.mother})</span>}
                                    {child.note && <div className="text-gray-400 text-[9px]">{child.note}</div>}
                                  </>
                                ) : (
                                  <span className="text-green-200">{child}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )}
                    {/* Sons - show if no children field, handle string and array */}
                    {mainProphet.family.sons && !mainProphet.family.children && (
                      <div className="mt-1">
                        <span className="text-gray-500 block mb-1">Sons:</span>
                        {typeof mainProphet.family.sons === 'string' ? (
                          <div className="text-[10px] text-blue-200">{mainProphet.family.sons}</div>
                        ) : Array.isArray(mainProphet.family.sons) ? (
                          <div className="grid gap-0.5">
                            {mainProphet.family.sons.map((son, i) => (
                              <div key={i} className="text-[10px] text-blue-200 bg-blue-900/20 rounded px-1.5 py-0.5">{son}</div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )}
                    {/* Grandchildren - handle string and array */}
                    {mainProphet.family.grandchildren && (
                      <div className="mt-1">
                        <span className="text-gray-500 block mb-1">Grandchildren:</span>
                        {typeof mainProphet.family.grandchildren === 'string' ? (
                          <div className="text-[10px] text-purple-200">{mainProphet.family.grandchildren}</div>
                        ) : Array.isArray(mainProphet.family.grandchildren) ? (
                          <div className="grid gap-0.5">
                            {mainProphet.family.grandchildren.map((gc, i) => (
                              <div key={i} className="text-[10px] text-purple-300 bg-purple-900/20 rounded px-1.5 py-0.5">
                                {typeof gc === 'object' ? gc.name : gc}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )}
                    {/* Uncles - handle string and array */}
                    {mainProphet.family.uncles && (
                      <div className="mt-1">
                        <span className="text-gray-500 block mb-1">Uncles:</span>
                        {typeof mainProphet.family.uncles === 'string' ? (
                          <div className="text-[10px] text-blue-200">{mainProphet.family.uncles}</div>
                        ) : Array.isArray(mainProphet.family.uncles) ? (
                          <div className="grid gap-0.5">
                            {mainProphet.family.uncles.map((uncle, i) => (
                              <div key={i} className="text-[10px] text-blue-200 bg-blue-900/20 rounded px-1.5 py-0.5">{uncle}</div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Unique Facts - show ALL */}
            {mainProphet.uniqueFacts && (
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-700/50 mb-3">
                <p className="text-purple-400 text-[10px] font-bold uppercase mb-1.5">💎 Unique Facts</p>
                <div className="flex flex-wrap gap-1.5">
                  {mainProphet.uniqueFacts.map((fact, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] border border-purple-500/30">
                      {fact}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Burial Location */}
            {mainProphet.burial && (
              <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/50 border border-gray-700 mb-3">
                <span className="text-gray-400">⚰️</span>
                <div className="text-[11px]">
                  <span className="text-gray-500">Burial: </span>
                  <span className="text-gray-300">{mainProphet.burial}</span>
                </div>
              </div>
            )}

            {/* Key Events */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {mainProphet.keyEvents.map((event, i) => (
                <span key={i} className="px-2 py-0.5 rounded text-[10px] text-white bg-gray-700">{event}</span>
              ))}
            </div>

            {/* Quranic Verses with Topics */}
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-700/50">
              <p className="text-emerald-400 text-[10px] font-bold uppercase mb-2">📖 Quranic Verses</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-32 overflow-y-auto custom-scrollbar">
                {mainProphet.verses.map((v, i) => {
                  const verseRef = typeof v === 'object' ? v.ref : v;
                  const topic = typeof v === 'object' ? v.topic : '';
                  return (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); onProphetClick(mainProphet, verseRef); }}
                      className="flex items-start gap-2 p-1.5 rounded-lg bg-emerald-800/30 hover:bg-emerald-700/40 border border-emerald-600/30 text-left transition-colors group"
                    >
                      <span className="text-emerald-400 font-bold text-[11px] flex-shrink-0 mt-0.5">{verseRef}</span>
                      {topic && (
                        <span className="text-emerald-200/80 text-[10px] leading-tight line-clamp-2">{topic}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

// Enhanced Detail Panel
const DetailPanel = memo(({ item, type, onClose, onNavigateToVerse }) => {
  if (!item) return null;

  const renderContent = () => {
    switch(type) {
      case 'mosque':
        return (
          <>
            {item.imageUrl && (
              <div className="mb-3 rounded-lg overflow-hidden h-32">
                <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
              </div>
            )}
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2 rounded-lg bg-white/5">
                <span className="text-white/40 text-[10px] uppercase">Capacity</span>
                <p className="text-white text-sm">{item.capacity}</p>
              </div>
              <div className="p-2 rounded-lg bg-white/5">
                <span className="text-white/40 text-[10px] uppercase">Built</span>
                <p className="text-white text-sm">{item.builtYear}</p>
              </div>
            </div>
            {item.facts && (
              <div className="space-y-1">
                {item.facts.slice(0, 3).map((fact, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/60">
                    <span className="text-emerald-400">•</span>
                    {fact}
                  </div>
                ))}
              </div>
            )}
          </>
        );
      case 'revelation':
        return (
          <>
            <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-purple-400 text-xs uppercase">Surah</span>
                  <p className="text-white font-bold">{item.surahName}</p>
                </div>
                <span className="px-2 py-1 rounded bg-purple-500/30 text-purple-300 text-xs">{item.verses}</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-2">{item.description}</p>
            <p className="text-white/50 text-xs italic">{item.context}</p>
          </>
        );
      case 'grave':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="p-2 rounded-lg bg-white/5 mb-2">
              <span className="text-white/40 text-[10px] uppercase">Location</span>
              <p className="text-white text-sm">{item.location}</p>
            </div>
            {item.companions?.length > 0 && (
              <div className="mb-2">
                <span className="text-white/40 text-[10px] uppercase">Also buried here:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.companions.map(c => (
                    <span key={c} className="px-2 py-0.5 rounded bg-white/10 text-white/70 text-xs">{c}</span>
                  ))}
                </div>
              </div>
            )}
            {item.note && (
              <p className="text-amber-400/80 text-xs italic">"{item.note}"</p>
            )}
          </>
        );
      case 'cave':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/25 mb-2">
              <span className="text-cyan-400 text-xs uppercase">Mountain</span>
              <p className="text-white">{item.mountain}</p>
            </div>
            {item.events?.length > 0 && (
              <div className="space-y-1 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Events:</span>
                {item.events.map((e, i) => (
                  <div key={i} className="text-white/70 text-xs flex items-center gap-2">
                    <span className="text-cyan-400">•</span> {e}
                  </div>
                ))}
              </div>
            )}
            {item.climbTime && (
              <p className="text-white/40 text-xs">Climb time: {item.climbTime}</p>
            )}
          </>
        );
      case 'location':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.prophets?.length > 0 && (
              <div className="mb-3">
                <span className="text-white/50 text-xs">Prophets:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.prophets.map(p => (
                    <span key={p} className="px-2 py-0.5 rounded bg-white/10 text-white text-xs">{p}</span>
                  ))}
                </div>
              </div>
            )}
            {item.events?.slice(0, 2).map((e, i) => (
              <div key={i} className="p-2 rounded-lg bg-white/5 mb-2">
                <div className="flex justify-between">
                  <span className="text-white text-xs font-medium">{e.name}</span>
                  {e.year && <span className="text-white/40 text-xs">{e.year}</span>}
                </div>
                {e.verses?.length > 0 && (
                  <div className="flex gap-1 mt-1">
                    {e.verses.slice(0, 2).map((v, j) => (
                      <button key={j} onClick={() => {
                        const [s, a] = v.split(':');
                        onNavigateToVerse(parseInt(s), parseInt(a?.split('-')[0] || 1));
                      }} className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 text-xs">
                        {v}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        );
      case 'destroyed':
        return (
          <>
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <span className="text-white/50 text-xs">Sin:</span>
                <p className="text-white/80 text-sm">{item.sin}</p>
              </div>
              <div className="flex-1">
                <span className="text-white/50 text-xs">Prophet:</span>
                <p className="text-white/80 text-sm">{item.prophet}</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 mb-3">
              <span className="text-red-400 text-xs uppercase">Punishment</span>
              <p className="text-white font-medium">{item.punishment}</p>
              <p className="text-amber-400 text-sm" dir="rtl">{item.punishmentAr}</p>
            </div>
            <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/25">
              <span className="text-amber-400 text-xs">Lesson:</span>
              <p className="text-white/90 text-sm">{item.lesson}</p>
            </div>
          </>
        );
      case 'miracle':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30 mb-3">
              <span className="text-purple-400 text-xs uppercase">Prophet</span>
              <p className="text-white font-medium">{item.prophet}</p>
            </div>
            {item.scientificNote && (
              <div className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/25">
                <span className="text-cyan-400 text-xs">Note:</span>
                <p className="text-white/90 text-sm">{item.scientificNote}</p>
              </div>
            )}
          </>
        );
      case 'mountain':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.elevation && (
              <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/25 mb-2">
                <span className="text-amber-400 text-xs uppercase">Elevation</span>
                <p className="text-white font-medium">{item.elevation}</p>
              </div>
            )}
            {item.significance && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Significance</span>
                <p className="text-white/80 text-sm">{item.significance}</p>
              </div>
            )}
            {item.prophets?.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {item.prophets.map(p => (
                  <span key={p} className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs">{p}</span>
                ))}
              </div>
            )}
          </>
        );
      case 'water':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.type && (
              <div className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/25 mb-2">
                <span className="text-cyan-400 text-xs uppercase">Type</span>
                <p className="text-white font-medium">{item.type}</p>
              </div>
            )}
            {item.significance && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Quranic Significance</span>
                <p className="text-white/80 text-sm">{item.significance}</p>
              </div>
            )}
            {item.miracles?.length > 0 && (
              <div className="space-y-1">
                <span className="text-cyan-400 text-xs uppercase">Miracles:</span>
                {item.miracles.map((m, i) => (
                  <div key={i} className="text-white/70 text-xs flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">•</span> {m}
                  </div>
                ))}
              </div>
            )}
          </>
        );
      case 'battle':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {item.year && (
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="text-white/40 text-[10px] uppercase">Year</span>
                  <p className="text-white text-sm">{item.year}</p>
                </div>
              )}
              {item.outcome && (
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="text-white/40 text-[10px] uppercase">Outcome</span>
                  <p className="text-white text-sm">{item.outcome}</p>
                </div>
              )}
            </div>
            {item.muslimArmy && (
              <div className="p-2 rounded-lg bg-green-500/15 border border-green-500/25 mb-2">
                <span className="text-green-400 text-xs uppercase">Muslim Forces</span>
                <p className="text-white">{item.muslimArmy}</p>
              </div>
            )}
            {item.enemyArmy && (
              <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/25 mb-2">
                <span className="text-red-400 text-xs uppercase">Enemy Forces</span>
                <p className="text-white">{item.enemyArmy}</p>
              </div>
            )}
            {item.significance && (
              <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/25">
                <span className="text-amber-400 text-xs uppercase">Significance</span>
                <p className="text-white/80 text-sm">{item.significance}</p>
              </div>
            )}
          </>
        );
      case 'hijra':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.daysSpent && (
              <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/25 mb-2">
                <span className="text-emerald-400 text-xs uppercase">Duration</span>
                <p className="text-white font-medium">{item.daysSpent}</p>
              </div>
            )}
            {item.event && (
              <div className="p-2 rounded-lg bg-white/5">
                <span className="text-white/40 text-[10px] uppercase">Event</span>
                <p className="text-white/80 text-sm">{item.event}</p>
              </div>
            )}
          </>
        );
      case 'sahabi':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.title && (
              <div className="p-2 rounded-lg bg-purple-500/15 border border-purple-500/25 mb-2">
                <span className="text-purple-400 text-xs uppercase">Title</span>
                <p className="text-white font-medium">{item.title}</p>
              </div>
            )}
            {item.relation && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Relation to Prophet ﷺ</span>
                <p className="text-white/80 text-sm">{item.relation}</p>
              </div>
            )}
            {item.death && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Passed Away</span>
                <p className="text-white text-sm">{item.death}</p>
              </div>
            )}
            {item.achievements?.length > 0 && (
              <div className="space-y-1 mt-2">
                <span className="text-purple-400 text-xs uppercase">Achievements:</span>
                {item.achievements.map((a, i) => (
                  <div key={i} className="text-white/70 text-xs flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span> {a}
                  </div>
                ))}
              </div>
            )}
          </>
        );
      case 'angel':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.angel && (
              <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/25 mb-2">
                <span className="text-amber-400 text-xs uppercase">Angel</span>
                <p className="text-white font-medium">{item.angel}</p>
              </div>
            )}
            {item.prophet && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Prophet</span>
                <p className="text-white/80 text-sm">{item.prophet}</p>
              </div>
            )}
            {item.purpose && (
              <div className="p-2 rounded-lg bg-white/5">
                <span className="text-white/40 text-[10px] uppercase">Purpose</span>
                <p className="text-white/80 text-sm">{item.purpose}</p>
              </div>
            )}
          </>
        );
      case 'dua':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.prophet && (
              <div className="p-2 rounded-lg bg-pink-500/15 border border-pink-500/25 mb-2">
                <span className="text-pink-400 text-xs uppercase">Made by</span>
                <p className="text-white font-medium">{item.prophet}</p>
              </div>
            )}
            {item.duaText && (
              <div className="p-3 rounded-lg bg-white/5 mb-2">
                <p className="text-amber-400 text-sm text-center" dir="rtl">{item.duaText}</p>
              </div>
            )}
            {item.context && (
              <div className="p-2 rounded-lg bg-white/5">
                <span className="text-white/40 text-[10px] uppercase">Context</span>
                <p className="text-white/80 text-sm">{item.context}</p>
              </div>
            )}
            {item.answered && (
              <div className="mt-2 p-2 rounded-lg bg-green-500/15 border border-green-500/25">
                <span className="text-green-400 text-xs uppercase">How it was answered</span>
                <p className="text-white/80 text-sm">{item.answered}</p>
              </div>
            )}
          </>
        );
      case 'qibla':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.period && (
              <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/25 mb-2">
                <span className="text-amber-400 text-xs uppercase">Period</span>
                <p className="text-white font-medium">{item.period}</p>
              </div>
            )}
            {item.year && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Year of Change</span>
                <p className="text-white text-sm">{item.year}</p>
              </div>
            )}
            {item.significance && (
              <div className="p-2 rounded-lg bg-white/5">
                <span className="text-white/40 text-[10px] uppercase">Significance</span>
                <p className="text-white/80 text-sm">{item.significance}</p>
              </div>
            )}
          </>
        );
      case 'weather':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.nation && (
              <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/25 mb-2">
                <span className="text-red-400 text-xs uppercase">Nation</span>
                <p className="text-white font-medium">{item.nation}</p>
              </div>
            )}
            {item.weatherType && (
              <div className="p-2 rounded-lg bg-gray-500/15 border border-gray-500/25 mb-2">
                <span className="text-gray-400 text-xs uppercase">Weather Type</span>
                <p className="text-white font-medium">{item.weatherType}</p>
              </div>
            )}
            {item.duration && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Duration</span>
                <p className="text-white text-sm">{item.duration}</p>
              </div>
            )}
            {item.lesson && (
              <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/25">
                <span className="text-amber-400 text-xs uppercase">Lesson</span>
                <p className="text-white/80 text-sm">{item.lesson}</p>
              </div>
            )}
          </>
        );
      case 'archaeology':
        return (
          <>
            <p className="text-white/70 text-sm mb-3">{item.description}</p>
            {item.nation && (
              <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/25 mb-2">
                <span className="text-amber-400 text-xs uppercase">Ancient Nation</span>
                <p className="text-white font-medium">{item.nation}</p>
              </div>
            )}
            {item.currentStatus && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Current Status</span>
                <p className="text-white/80 text-sm">{item.currentStatus}</p>
              </div>
            )}
            {item.discovered && (
              <div className="p-2 rounded-lg bg-white/5 mb-2">
                <span className="text-white/40 text-[10px] uppercase">Discovered</span>
                <p className="text-white text-sm">{item.discovered}</p>
              </div>
            )}
            {item.evidence?.length > 0 && (
              <div className="space-y-1 mt-2">
                <span className="text-amber-400 text-xs uppercase">Evidence:</span>
                {item.evidence.map((e, i) => (
                  <div key={i} className="text-white/70 text-xs flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">•</span> {e}
                  </div>
                ))}
              </div>
            )}
          </>
        );
      default:
        return <p className="text-white/70 text-sm">{item.description}</p>;
    }
  };

  return (
    <div className="absolute bottom-4 left-4 right-4 z-[1000] max-w-md mx-auto">
      <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color || '#F59E0B'}25` }}>
              {type === 'mosque' ? '🕌' : type === 'grave' || type === 'sahabi' ? '⭐' : type === 'cave' ? '🏔️' :
               type === 'revelation' ? '📖' : type === 'mountain' ? '⛰️' : type === 'water' ? '🌊' :
               type === 'battle' ? '⚔️' : type === 'hijra' ? '🛤️' : type === 'angel' ? '✨' :
               type === 'dua' ? '🤲' : type === 'qibla' ? '🧭' : type === 'weather' ? '🌪️' :
               type === 'archaeology' ? '🏛️' :
               <Icons.MapPin className="w-5 h-5" style={{ color: item.color || '#F59E0B' }} />}
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">{item.name}</h3>
              <p className="text-white/50 text-xs" dir="rtl">{item.nameAr}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10">
            <Icons.X className="w-4 h-4 text-white/50" />
          </button>
        </div>
        <div className="p-3 max-h-[250px] overflow-y-auto custom-scrollbar">
          {renderContent()}
          {item.verses && (
            <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-white/10">
              {(Array.isArray(item.verses) ? item.verses : [item.verses]).slice(0, 4).map((v, i) => (
                <button key={i} onClick={() => {
                  const ref = typeof v === 'string' ? v : `${v.surah}:${v.ayah}`;
                  const [s, a] = ref.split(':');
                  onNavigateToVerse(parseInt(s), parseInt(a?.split('-')[0] || 1));
                }} className="px-2 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 text-xs transition-colors">
                  📖 {typeof v === 'string' ? v : `${v.surah}:${v.ayah}`}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

// Journey Selection Panel
const JourneyPanel = memo(({ journeys, activeJourney, setActiveJourney }) => (
  <div className="absolute top-16 left-4 z-[1000] max-w-[180px]">
    <div className="bg-black/90 backdrop-blur-md rounded-xl p-2 border border-white/20">
      <div className="text-white/50 text-[10px] uppercase mb-2 px-1">Prophet Journeys</div>
      {journeys.map(journey => (
        <button
          key={journey.id}
          onClick={() => setActiveJourney(activeJourney === journey.id ? null : journey.id)}
          className={`w-full text-left px-2 py-1.5 rounded-lg text-xs flex items-center gap-2 transition-all ${
            activeJourney === journey.id ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'
          }`}
        >
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: journey.color }}
          />
          <span className="truncate">{journey.name}</span>
          {activeJourney === journey.id && (
            <Icons.Play className="w-3 h-3 ml-auto text-green-400" />
          )}
        </button>
      ))}
    </div>
  </div>
));

// Main Component
const PropheticMap = memo(function PropheticMap({ isVisible, onClose, onNavigateToVerse }) {
  const [activeLayers, setActiveLayers] = useState(['locations', 'mosques']);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [mapStyle, setMapStyle] = useState('dark');
  const [mouseCoords, setMouseCoords] = useState(null);
  const [showTimeline, setShowTimeline] = useState(false);
  const [timelineYear, setTimelineYear] = useState(632);
  const [activeJourney, setActiveJourney] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [isLocating, setIsLocating] = useState(false);
  const [showQibla, setShowQibla] = useState(false);
  const [layerPanelOpen, setLayerPanelOpen] = useState(false);
  const mapRef = useRef(null);

  // Get all data first
  const locations = useMemo(() => getAllLocations(), []);
  const destroyedNations = useMemo(() => getAllDestroyedNations(), []);
  const miracles = useMemo(() => getAllMiracles(), []);
  const animals = useMemo(() => getAllAnimals(), []);
  const journeys = useMemo(() => getAllJourneys(), []);
  const timelineEvents = useMemo(() => getTimelineEvents(), []);
  const sacredMosques = useMemo(() => getAllSacredMosques(), []);
  const revelations = useMemo(() => getAllRevelationLocations(), []);
  const graves = useMemo(() => getAllProphetGraves(), []);
  const caves = useMemo(() => getAllQuranicCaves(), []);
  const baniIsraelJourney = useMemo(() => getAllBaniIsraelJourney(), []);
  const scientificMiracles = useMemo(() => getAllScientificMiracles(), []);
  const treaties = useMemo(() => getAllTreatyLocations(), []);
  const plants = useMemo(() => getAllQuranicPlants(), []);
  const israMirajJourney = useMemo(() => getAllIsraMirajJourney(), []);

  // New geographic and historical layers
  const quranicMountains = useMemo(() => getAllQuranicMountains(), []);
  const quranicWaters = useMemo(() => getAllQuranicWaters(), []);
  const battleLocations = useMemo(() => getAllBattleLocations(), []);
  const hijraRoute = useMemo(() => getHijraRoute(), []);
  const qiblaHistory = useMemo(() => getQiblaHistory(), []);
  const qurayshRoutes = useMemo(() => getQurayshRoutes(), []);
  const angelAppearances = useMemo(() => getAllAngelAppearances(), []);
  const duaLocations = useMemo(() => getAllDuaLocations(), []);
  const sahabaGraves = useMemo(() => getAllSahabaGraves(), []);
  const weatherEvents = useMemo(() => getAllWeatherEvents(), []);
  const archaeologicalSites = useMemo(() => getAllArchaeologicalSites(), []);

  // Layer counts for panel (after data is defined)
  const layerCounts = useMemo(() => ({
    locations: locations.length,
    mosques: sacredMosques.length,
    revelations: revelations.length,
    destroyed: destroyedNations.length,
    miracles: miracles.length,
    graves: graves.length,
    caves: caves.length,
    journeys: journeys.length,
    animals: animals.length,
    baniIsrael: baniIsraelJourney.length,
    science: scientificMiracles.length,
    plants: plants.length,
    treaties: treaties.length,
    israMiraj: israMirajJourney.length,
    // New layer counts
    mountains: quranicMountains.length,
    waters: quranicWaters.length,
    battles: battleLocations.length,
    hijra: hijraRoute.waypoints?.length || 0,
    sahaba: sahabaGraves.length,
    angels: angelAppearances.length,
    duas: duaLocations.length,
    qibla: qiblaHistory ? 3 : 0, // First Qibla, Second Qibla, Change Location
    tradeRoutes: qurayshRoutes ? 2 : 0, // Winter and Summer routes
    weather: weatherEvents.length,
    archaeology: archaeologicalSites.length,
  }), [locations, sacredMosques, revelations, destroyedNations, miracles, graves, caves, journeys, animals, baniIsraelJourney, scientificMiracles, plants, treaties, israMirajJourney, quranicMountains, quranicWaters, battleLocations, hijraRoute, sahabaGraves, angelAppearances, duaLocations, qiblaHistory, qurayshRoutes, weatherEvents, archaeologicalSites]);

  // Get active prophet for current timeline year
  const activeProphet = useMemo(() => {
    return PROPHETS_TIMELINE.filter(p => timelineYear >= p.periodStart && timelineYear <= p.periodEnd).pop();
  }, [timelineYear]);

  const defaultCenter = [26, 42];
  const defaultZoom = 4;

  const toggleLayer = (layerId) => {
    setActiveLayers(prev =>
      prev.includes(layerId) ? prev.filter(l => l !== layerId) : [...prev, layerId]
    );
  };

  const handleMarkerClick = (item, type) => {
    setSelectedItem(item);
    setSelectedType(type);
    if (mapRef.current && item.coords) {
      mapRef.current.flyTo(item.coords, 8, { duration: 0.8 });
    }
  };

  const handleLocateUser = useCallback(() => {
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setShowQibla(true);
        setIsLocating(false);
        if (mapRef.current) {
          mapRef.current.flyTo([latitude, longitude], 6, { duration: 1 });
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        setIsLocating(false);
      }
    );
  }, []);

  const qiblaAngle = userLocation ? calculateQibla(userLocation.lat, userLocation.lng) : null;
  const distanceKm = userLocation ? distanceToMakkah(userLocation.lat, userLocation.lng) : null;

  // Handle prophet verse click from timeline
  const handleProphetVerseClick = useCallback((prophet, verseRef) => {
    const [surah, ayah] = verseRef.split(':');
    onNavigateToVerse(parseInt(surah), parseInt(ayah?.split('-')[0] || 1));
    onClose();
  }, [onNavigateToVerse, onClose]);

  // Fly to location from timeline
  const handleFlyToLocation = useCallback((coords) => {
    if (mapRef.current) {
      mapRef.current.flyTo(coords, 8, { duration: 1 });
    }
  }, []);


  // Get journey coordinates
  const getJourneyCoords = (journey) => {
    return journey.waypoints.map(wp => {
      if (wp.coords) return wp.coords;
      const loc = locations.find(l => l.id === wp.location);
      return loc ? loc.coords : null;
    }).filter(Boolean);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div
        className="relative bg-gray-900 rounded-2xl overflow-hidden w-full h-full md:w-[96%] md:h-[94%] md:max-w-7xl md:m-auto md:mt-[1.5%] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Simplified */}
        <div className="flex-shrink-0 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-black/60 to-black/40">
          <div className="flex items-center justify-between">
            {/* Left: Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg">
                <Icons.Globe3D className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Quranic World Map</h2>
                <p className="text-white/50 text-xs">
                  {activeLayers.length} layers • {Object.values(layerCounts).reduce((a, b) => a + b, 0)} locations
                </p>
              </div>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowTimeline(!showTimeline)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all ${
                  showTimeline
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'text-white/60 hover:text-white hover:bg-white/10 border border-transparent'
                }`}
              >
                <Icons.Clock className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">Timeline</span>
              </button>

              <select
                value={mapStyle}
                onChange={(e) => setMapStyle(e.target.value)}
                className="bg-white/10 text-white text-sm rounded-xl px-3 py-2 border border-white/20 cursor-pointer"
              >
                {Object.entries(MAP_STYLES).map(([key, style]) => (
                  <option key={key} value={key} className="bg-gray-900">{style.name}</option>
                ))}
              </select>

              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                <Icons.X className="w-5 h-5 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="flex-1 relative">
          <MapContainer
            center={defaultCenter}
            zoom={defaultZoom}
            className="w-full h-full"
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer url={MAP_STYLES[mapStyle].url} />
            <MapEventHandler onCoordsChange={setMouseCoords} onMapRef={(m) => mapRef.current = m} />

            {/* User Location Marker */}
            {userLocation && (
              <CircleMarker
                center={[userLocation.lat, userLocation.lng]}
                radius={8}
                pathOptions={{ color: '#3B82F6', fillColor: '#3B82F6', fillOpacity: 0.8 }}
              />
            )}

            {/* Active Prophet Location Pin (from Timeline) */}
            {showTimeline && activeProphet && (
              <Marker
                position={activeProphet.coords}
                icon={L.divIcon({
                  html: `
                    <div style="position: relative; display: flex; flex-direction: column; align-items: center;">
                      <div style="
                        width: 44px; height: 44px;
                        background: ${activeProphet.color};
                        border-radius: 50%;
                        border: 4px solid white;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.5), 0 0 30px ${activeProphet.color};
                        display: flex; align-items: center; justify-content: center;
                        font-size: 22px;
                        animation: markerPulse 1.5s infinite;
                      ">${activeProphet.icon}</div>
                      <div style="
                        position: absolute;
                        top: 50px;
                        background: ${activeProphet.color};
                        color: white;
                        padding: 6px 12px;
                        border-radius: 8px;
                        font-size: 12px;
                        font-weight: bold;
                        white-space: nowrap;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
                        text-align: center;
                      ">
                        <div>${activeProphet.name}</div>
                        <div style="font-size: 10px; opacity: 0.8;">${activeProphet.nameAr}</div>
                      </div>
                    </div>
                  `,
                  className: 'prophet-timeline-marker',
                  iconSize: [44, 90],
                  iconAnchor: [22, 22],
                })}
              />
            )}

            {/* Prophet Journeys with Animation */}
            {activeLayers.includes('journeys') && journeys.map(journey => {
              const coords = getJourneyCoords(journey);
              return (
                <AnimatedPolyline
                  key={journey.id}
                  positions={coords}
                  color={journey.color}
                  isActive={activeJourney === journey.id}
                  onClick={() => setActiveJourney(activeJourney === journey.id ? null : journey.id)}
                  name={journey.name}
                />
              );
            })}

            {/* Sacred Mosques */}
            {activeLayers.includes('mosques') && sacredMosques.map(mosque => (
              <Marker
                key={mosque.id}
                position={mosque.coords}
                icon={createMarkerIcon(mosque.color, 32, selectedItem?.id === mosque.id, 'mosque')}
                eventHandlers={{ click: () => handleMarkerClick(mosque, 'mosque') }}
              />
            ))}

            {/* Revelation Locations */}
            {activeLayers.includes('revelations') && revelations.map(rev => (
              <Marker
                key={rev.id}
                position={rev.coords}
                icon={createMarkerIcon(rev.color, 26, selectedItem?.id === rev.id, 'revelation')}
                eventHandlers={{ click: () => handleMarkerClick(rev, 'revelation') }}
              />
            ))}

            {/* Location Markers */}
            {activeLayers.includes('locations') && locations
              .filter(loc => !showTimeline || timelineEvents.some(e => e.location === loc.id && e.year <= timelineYear))
              .map(loc => (
                <Marker
                  key={loc.id}
                  position={loc.coords}
                  icon={createMarkerIcon(loc.color, 26, selectedItem?.id === loc.id)}
                  eventHandlers={{ click: () => handleMarkerClick(loc, 'location') }}
                />
              ))}

            {/* Destroyed Nations */}
            {activeLayers.includes('destroyed') && destroyedNations.map(nation => (
              <Marker
                key={nation.id}
                position={nation.coords}
                icon={createMarkerIcon(nation.color, 28, selectedItem?.id === nation.id)}
                eventHandlers={{ click: () => handleMarkerClick(nation, 'destroyed') }}
              />
            ))}

            {/* Miracles */}
            {activeLayers.includes('miracles') && miracles.map(miracle => (
              <Marker
                key={miracle.id}
                position={miracle.coords}
                icon={createMarkerIcon(miracle.color, 26, selectedItem?.id === miracle.id)}
                eventHandlers={{ click: () => handleMarkerClick(miracle, 'miracle') }}
              />
            ))}

            {/* Prophet Graves */}
            {activeLayers.includes('graves') && graves.map(grave => (
              <Marker
                key={grave.id}
                position={grave.coords}
                icon={createMarkerIcon(grave.color, 26, selectedItem?.id === grave.id, 'grave')}
                eventHandlers={{ click: () => handleMarkerClick(grave, 'grave') }}
              />
            ))}

            {/* Caves */}
            {activeLayers.includes('caves') && caves.map(cave => (
              <Marker
                key={cave.id}
                position={cave.coords}
                icon={createMarkerIcon(cave.color, 26, selectedItem?.id === cave.id, 'cave')}
                eventHandlers={{ click: () => handleMarkerClick(cave, 'cave') }}
              />
            ))}

            {/* Animals */}
            {activeLayers.includes('animals') && animals.map(animal => (
              <CircleMarker
                key={animal.id}
                center={animal.coords}
                radius={10}
                pathOptions={{ color: animal.color, fillColor: animal.color, fillOpacity: 0.6 }}
                eventHandlers={{ click: () => handleMarkerClick(animal, 'animal') }}
              />
            ))}

            {/* Bani Israel Journey */}
            {activeLayers.includes('baniIsrael') && baniIsraelJourney.map(loc => (
              <Marker
                key={loc.id}
                position={loc.coords}
                icon={createMarkerIcon(loc.color, 26, selectedItem?.id === loc.id)}
                eventHandlers={{ click: () => handleMarkerClick(loc, 'baniIsrael') }}
              />
            ))}

            {/* Scientific Miracles */}
            {activeLayers.includes('science') && scientificMiracles.map(loc => (
              <Marker
                key={loc.id}
                position={loc.coords}
                icon={createMarkerIcon(loc.color, 26, selectedItem?.id === loc.id)}
                eventHandlers={{ click: () => handleMarkerClick(loc, 'science') }}
              />
            ))}

            {/* Quranic Plants */}
            {activeLayers.includes('plants') && plants.map(plant => (
              <CircleMarker
                key={plant.id}
                center={plant.coords}
                radius={12}
                pathOptions={{ color: plant.color, fillColor: plant.color, fillOpacity: 0.7 }}
                eventHandlers={{ click: () => handleMarkerClick(plant, 'plant') }}
              />
            ))}

            {/* Treaty Locations */}
            {activeLayers.includes('treaties') && treaties.map(treaty => (
              <Marker
                key={treaty.id}
                position={treaty.coords}
                icon={createMarkerIcon(treaty.color, 26, selectedItem?.id === treaty.id)}
                eventHandlers={{ click: () => handleMarkerClick(treaty, 'treaty') }}
              />
            ))}

            {/* Isra & Mi'raj Journey */}
            {activeLayers.includes('israMiraj') && israMirajJourney.map(loc => (
              <Marker
                key={loc.id}
                position={loc.coords}
                icon={createMarkerIcon(loc.color, 28, selectedItem?.id === loc.id)}
                eventHandlers={{ click: () => handleMarkerClick(loc, 'israMiraj') }}
              />
            ))}

            {/* Quranic Mountains */}
            {activeLayers.includes('mountains') && quranicMountains.map(mountain => (
              <Marker
                key={mountain.id}
                position={mountain.coords}
                icon={createMarkerIcon(mountain.color || '#92400E', 28, selectedItem?.id === mountain.id, 'mountain')}
                eventHandlers={{ click: () => handleMarkerClick(mountain, 'mountain') }}
              />
            ))}

            {/* Quranic Waters (Rivers, Seas) */}
            {activeLayers.includes('waters') && quranicWaters.map(water => (
              <CircleMarker
                key={water.id}
                center={water.coords}
                radius={14}
                pathOptions={{
                  color: water.color || '#0EA5E9',
                  fillColor: water.color || '#0EA5E9',
                  fillOpacity: 0.5,
                  weight: 2,
                  dashArray: '4,4'
                }}
                eventHandlers={{ click: () => handleMarkerClick(water, 'water') }}
              />
            ))}

            {/* Battle Locations */}
            {activeLayers.includes('battles') && battleLocations.map(battle => (
              <Marker
                key={battle.id}
                position={battle.coords}
                icon={createMarkerIcon(battle.color || '#EF4444', 30, selectedItem?.id === battle.id, 'battle')}
                eventHandlers={{ click: () => handleMarkerClick(battle, 'battle') }}
              />
            ))}

            {/* Hijra Route Path */}
            {activeLayers.includes('hijra') && hijraRoute?.waypoints && (
              <>
                <Polyline
                  positions={hijraRoute.waypoints.map(wp => wp.coords)}
                  pathOptions={{
                    color: '#10B981',
                    weight: 4,
                    opacity: 0.8,
                    dashArray: '10,10'
                  }}
                />
                {hijraRoute.waypoints.map(waypoint => (
                  <Marker
                    key={waypoint.id}
                    position={waypoint.coords}
                    icon={createMarkerIcon('#10B981', 24, selectedItem?.id === waypoint.id)}
                    eventHandlers={{ click: () => handleMarkerClick(waypoint, 'hijra') }}
                  />
                ))}
              </>
            )}

            {/* Sahaba Graves */}
            {activeLayers.includes('sahaba') && sahabaGraves.map(sahabi => (
              <Marker
                key={sahabi.id}
                position={sahabi.coords}
                icon={createMarkerIcon(sahabi.color || '#8B5CF6', 26, selectedItem?.id === sahabi.id, 'grave')}
                eventHandlers={{ click: () => handleMarkerClick(sahabi, 'sahabi') }}
              />
            ))}

            {/* Angel Appearances */}
            {activeLayers.includes('angels') && angelAppearances.map(angel => (
              <Marker
                key={angel.id}
                position={angel.coords}
                icon={createMarkerIcon(angel.color || '#FBBF24', 26, selectedItem?.id === angel.id)}
                eventHandlers={{ click: () => handleMarkerClick(angel, 'angel') }}
              />
            ))}

            {/* Dua Locations */}
            {activeLayers.includes('duas') && duaLocations.map(dua => (
              <Marker
                key={dua.id}
                position={dua.coords}
                icon={createMarkerIcon(dua.color || '#F472B6', 26, selectedItem?.id === dua.id)}
                eventHandlers={{ click: () => handleMarkerClick(dua, 'dua') }}
              />
            ))}

            {/* Qibla History Locations */}
            {activeLayers.includes('qibla') && qiblaHistory && (
              <>
                {qiblaHistory.firstQibla && (
                  <Marker
                    key="first-qibla"
                    position={qiblaHistory.firstQibla.coords}
                    icon={createMarkerIcon('#F59E0B', 28, selectedItem?.id === 'first-qibla')}
                    eventHandlers={{ click: () => handleMarkerClick({ ...qiblaHistory.firstQibla, id: 'first-qibla' }, 'qibla') }}
                  />
                )}
                {qiblaHistory.secondQibla && (
                  <Marker
                    key="second-qibla"
                    position={qiblaHistory.secondQibla.coords}
                    icon={createMarkerIcon('#10B981', 28, selectedItem?.id === 'second-qibla')}
                    eventHandlers={{ click: () => handleMarkerClick({ ...qiblaHistory.secondQibla, id: 'second-qibla' }, 'qibla') }}
                  />
                )}
                {qiblaHistory.changeLocation && (
                  <Marker
                    key="qibla-change"
                    position={qiblaHistory.changeLocation.coords}
                    icon={createMarkerIcon('#8B5CF6', 24, selectedItem?.id === 'qibla-change')}
                    eventHandlers={{ click: () => handleMarkerClick({ ...qiblaHistory.changeLocation, id: 'qibla-change' }, 'qibla') }}
                  />
                )}
              </>
            )}

            {/* Quraysh Trade Routes */}
            {activeLayers.includes('tradeRoutes') && qurayshRoutes && (
              <>
                {qurayshRoutes.winterRoute?.waypoints && (
                  <>
                    <Polyline
                      positions={qurayshRoutes.winterRoute.waypoints.map(wp => wp.coords)}
                      pathOptions={{
                        color: '#F97316',
                        weight: 3,
                        opacity: 0.7,
                        dashArray: '5,10'
                      }}
                    />
                    {qurayshRoutes.winterRoute.waypoints.map((wp, i) => (
                      <CircleMarker
                        key={`winter-${i}`}
                        center={wp.coords}
                        radius={6}
                        pathOptions={{ color: '#F97316', fillColor: '#F97316', fillOpacity: 0.8 }}
                      >
                        <Popup>
                          <div className="text-xs font-medium">{wp.name}</div>
                          <div className="text-[10px] text-gray-600">Winter Route (Yemen)</div>
                        </Popup>
                      </CircleMarker>
                    ))}
                  </>
                )}
                {qurayshRoutes.summerRoute?.waypoints && (
                  <>
                    <Polyline
                      positions={qurayshRoutes.summerRoute.waypoints.map(wp => wp.coords)}
                      pathOptions={{
                        color: '#FBBF24',
                        weight: 3,
                        opacity: 0.7,
                        dashArray: '5,10'
                      }}
                    />
                    {qurayshRoutes.summerRoute.waypoints.map((wp, i) => (
                      <CircleMarker
                        key={`summer-${i}`}
                        center={wp.coords}
                        radius={6}
                        pathOptions={{ color: '#FBBF24', fillColor: '#FBBF24', fillOpacity: 0.8 }}
                      >
                        <Popup>
                          <div className="text-xs font-medium">{wp.name}</div>
                          <div className="text-[10px] text-gray-600">Summer Route (Syria)</div>
                        </Popup>
                      </CircleMarker>
                    ))}
                  </>
                )}
              </>
            )}

            {/* Weather Events */}
            {activeLayers.includes('weather') && weatherEvents.map(event => (
              <CircleMarker
                key={event.id}
                center={event.coords}
                radius={16}
                pathOptions={{
                  color: event.color || '#64748B',
                  fillColor: event.color || '#64748B',
                  fillOpacity: 0.4,
                  weight: 2
                }}
                eventHandlers={{ click: () => handleMarkerClick(event, 'weather') }}
              />
            ))}

            {/* Archaeological Sites */}
            {activeLayers.includes('archaeology') && archaeologicalSites.map(site => (
              <Marker
                key={site.id}
                position={site.coords}
                icon={createMarkerIcon(site.color || '#B45309', 26, selectedItem?.id === site.id)}
                eventHandlers={{ click: () => handleMarkerClick(site, 'archaeology') }}
              />
            ))}
          </MapContainer>

          {/* Layer Panel */}
          <LayerPanel
            layers={LAYERS}
            activeLayers={activeLayers}
            toggleLayer={toggleLayer}
            counts={layerCounts}
            isOpen={layerPanelOpen}
            setIsOpen={setLayerPanelOpen}
          />

          {/* Map Controls */}
          <MapControls
            onZoomIn={() => mapRef.current?.zoomIn()}
            onZoomOut={() => mapRef.current?.zoomOut()}
            onReset={() => mapRef.current?.setView(defaultCenter, defaultZoom)}
            onLocateUser={handleLocateUser}
            isLocating={isLocating}
            coords={mouseCoords}
          />

          {/* Journey Panel */}
          {activeLayers.includes('journeys') && (
            <JourneyPanel
              journeys={journeys}
              activeJourney={activeJourney}
              setActiveJourney={setActiveJourney}
            />
          )}

          {/* Qibla Compass */}
          {showQibla && userLocation && qiblaAngle !== null && (
            <QiblaCompass
              userLocation={userLocation}
              qiblaAngle={qiblaAngle}
              distance={distanceKm}
            />
          )}

          {/* Timeline Slider - Overlay on map */}
          {showTimeline && (
            <TimelineSlider
              value={timelineYear}
              onChange={setTimelineYear}
              events={timelineEvents}
              prophets={PROPHETS_TIMELINE}
              onProphetClick={handleProphetVerseClick}
              onFlyToLocation={handleFlyToLocation}
            />
          )}

          {/* Detail Panel */}
          {!showTimeline && selectedItem && (
            <DetailPanel
              item={selectedItem}
              type={selectedType}
              onClose={() => { setSelectedItem(null); setSelectedType(null); }}
              onNavigateToVerse={onNavigateToVerse}
            />
          )}
        </div>

        {/* Legend */}
        <div className="flex-shrink-0 px-3 py-1.5 border-t border-white/10 bg-black/40">
          <div className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
              {[
                { color: '#10B981', label: 'Mosques' },
                { color: '#8B5CF6', label: 'Revelations' },
                { color: '#F59E0B', label: 'Sites' },
                { color: '#DC2626', label: 'Destroyed' },
                { color: '#EC4899', label: 'Miracles' },
                { color: '#6B7280', label: 'Prophets' },
                { color: '#06B6D4', label: 'Caves' },
                { color: '#92400E', label: 'Mountains' },
                { color: '#0EA5E9', label: 'Waters' },
                { color: '#EF4444', label: 'Battles' },
                { color: '#8B5CF6', label: 'Sahaba' },
                { color: '#FBBF24', label: 'Angels' },
                { color: '#F472B6', label: 'Duas' },
                { color: '#B45309', label: 'Ruins' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-white/50">{item.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleLocateUser}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors ml-2"
            >
              <Icons.Compass className="w-3 h-3" />
              <span>Qibla</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes markerPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.2); } }
        .custom-marker { background: transparent !important; border: none !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 2px; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
});

export default PropheticMap;
