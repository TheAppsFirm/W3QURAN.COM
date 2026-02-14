/**
 * Kanz ul Iman Translation Audio Data
 *
 * Source: Internet Archive - kanzuliman_201907
 * Narrator: Maulana Hamza Ali Qadri (translation voice)
 * URL: https://archive.org/details/kanzuliman_201907
 *
 * This file contains:
 * 1. Audio file mappings for each surah
 * 2. Verse timestamps for timestamp-based playback
 */

// Base URL for audio files
export const KANZUL_IMAN_BASE_URL = 'https://archive.org/download/kanzuliman_201907';

// Audio file mappings - some surahs are split into multiple parts
export const KANZUL_IMAN_FILES = {
  1: ['001. AL-FATIHA.mp3'],
  2: ['002. AL-BAQRA_1.mp3', '002. AL-BAQRA_2.mp3', '002. AL-BAQRA_3.mp3'],
  3: ['003. AL-IMRAN_1.mp3', '003. AL-IMRAN_2.mp3', '003. AL-IMRAN_3.mp3'],
  4: ['004. AN-NISA_1.mp3', '004. AN-NISA_2.mp3'],
  5: ['005. AL-MAAIDA_1.mp3', '005. AL-MAAIDA_2.mp3', '005. AL-MAAIDA_3.mp3'],
  6: ['006. Al-INAAM_1.mp3', '006. Al-INAAM_2.mp3'],
  7: ['007. AL-ERAAF_1.mp3', '007. AL-ERAAF_2.mp3'],
  8: ['008. AL-INFAAL_1.mp3', '008. AL-INFAAL_2.mp3'],
  9: ['009. AT-TAUBA_1.mp3', '009. AT-TAUBA_2.mp3'],
  10: ['010. YUNUS_1.mp3', '010. YUNUS_2.mp3'],
  11: ['011. HOOD_1.mp3', '011. HOOD_2.mp3'],
  12: ['012. YUSUF.mp3'],
  13: ['013. AR-RAAD_1.mp3', '013. AR-RAAD_2.mp3'],
  14: ['014. IBRAHIM.mp3'],
  15: ['015. AL-HIJR.mp3'],
  16: ['016. AN-NAHAL_1.mp3', '016. AN-NAHAL_2.mp3'],
  17: ['017. AL-ISRAA_1.mp3', '017. AL-ISRAA_2.mp3'],
  18: ['018. AL-KAHAF_1.mp3', '018. AL-KAHAF_2.mp3'],
  19: ['019. MARYAM.mp3'],
  20: ['020. TA-HAA.mp3'],
  21: ['021. AL-ANBIYA_1.mp3', '021. AL-ANBIYA_2.mp3'],
  22: ['022. AL-HAJJ_1.mp3', '022. AL-HAJJ_2.mp3'],
  23: ['023. AL-MU,MINOON.mp3'],
  24: ['024. AN-NOOR_1.mp3', '024. AN-NOOR_2.mp3'],
  25: ['025. AL-FURQAAN.mp3'],
  26: ['026. ASH-SHARAA_1.mp3', '026. ASH-SHARAA_2.mp3'],
  27: ['027. AN-NAMAL.mp3'],
  28: ['028. AL-QASAS_1.mp3', '028. AL-QASAS_2.mp3'],
  29: ['029. AL-ANKABUT.mp3'],
  30: ['030. AR-ROOM.mp3'],
  31: ['031. LUQMAN.mp3'],
  32: ['032. AS-SAJDAH.mp3'],
  33: ['033. AL-EHZAAB.mp3'],
  34: ['034. SABA_1.mp3', '034. SABA_2.mp3'],
  35: ['035. FAATIR.mp3'],
  36: ['036. YASIN.mp3'],
  37: ['037. AS-SAFFAT.mp3'],
  38: ['038. SWAAD.mp3'],
  39: ['039. AZ-ZUMAR.mp3'],
  40: ['040. AL-MOMIN.mp3'],
  41: ['041. FUSSILAT.mp3'],
  42: ['042. ASH-SHURA.mp3'],
  43: ['043. AZ-ZUKHRUF.mp3'],
  44: ['044. AD-DUKHAAN.mp3'],
  45: ['045. AL-JAASIYA.mp3'],
  46: ['046. AL-AHQAAF.mp3'],
  47: ['047. MUHAMMAD.mp3'],
  48: ['048. AL-FATAH.mp3'],
  49: ['049. AL-HUJRAAT.mp3'],
  50: ['050. QAAF.mp3'],
  51: ['051. AZ-ZAARIYAT.mp3'],
  52: ['052. AT-TOOR.mp3'],
  53: ['053. AN-NAJAM.mp3'],
  54: ['054. AL-QAMAR.mp3'],
  55: ['055. AR-RAHMAAN.mp3'],
  56: ['056. AL-WAAQIA.mp3'],
  57: ['057. AL-HADEED.mp3'],
  58: ['058. AL-MUJAADILA.mp3'],
  59: ['059. AL-HASHR.mp3'],
  60: ['060. AL-MUMTAHINA.mp3'],
  61: ['061. AS-SAFF.mp3'],
  62: ['062. AL-JUMUA.mp3'],
  63: ['063. AL-MUNAAFIQOON.mp3'],
  64: ['064. AT-TAGHAABUN.mp3'],
  65: ['065. AT-TALAAQ.mp3'],
  66: ['066. AT-TAHREEM.mp3'],
  67: ['067. AL-MULK.mp3'],
  68: ['068. AL-QALAM.mp3'],
  69: ['069. AL-HAAQQA.mp3'],
  70: ['070. AL-MAAARIJ.mp3'],
  71: ['071. NOOH.mp3'],
  72: ['072. AL-JINN.mp3'],
  73: ['073. AL-MUZZAMMIL.mp3'],
  74: ['074. AL-MUDDASSIR.mp3'],
  75: ['075. AL-QIYAAMA.mp3'],
  76: ['076. AD-DAHR.mp3'],
  77: ['077. AL-MURSALAAT.mp3'],
  78: ['078. AN-NABA.mp3'],
  79: ['079. AN-NAAZI,AAT.mp3'],
  80: ['080. ABASA.mp3'],
  81: ['081. AT-TAKWEER.mp3'],
  82: ['082. AL-INFITAAR.mp3'],
  83: ['083. AL-MUTAFFIFEEN.mp3'],
  84: ['084. AL-INSHIQAAQ.mp3'],
  85: ['085. AL-BUROOJ.mp3'],
  86: ['086. AT-TAARIQ.mp3'],
  87: ['087. AL-AALAA.mp3'],
  88: ['088. AL-GHAASHIYA.mp3'],
  89: ['089. AL-FAJR.mp3'],
  90: ['090. AL-BALAD.mp3'],
  91: ['091. ASH-SHAMS.mp3'],
  92: ['092. AL-LAIL.mp3'],
  93: ['093. AD-DUHAA.mp3'],
  94: ['094. AL-INSHIRAAH.mp3'],
  95: ['095. AT-TEEN.mp3'],
  96: ['096. AL-ALAQ.mp3'],
  97: ['097. AL-QADR.mp3'],
  98: ['098. AL-BAYYINA.mp3'],
  99: ['099. AZ-ZALZALA.mp3'],
  100: ['100. AL-AADIYAAT.mp3'],
  101: ['101. AL-QAARIA.mp3'],
  102: ['102. AT-TAKAASUR.mp3'],
  103: ['103. AL-ASR.mp3'],
  104: ['104. AL-HUMAZA.mp3'],
  105: ['105. AL-FEEL.mp3'],
  106: ['106. QURAISH.mp3'],
  107: ['107. AL-MAAOON.mp3'],
  108: ['108. AL-KAUSAR.mp3'],
  109: ['109. AL-KAAFIROON.mp3'],
  110: ['110. AN-NASR.mp3'],
  111: ['111. AL-LAHAB.mp3'],
  112: ['112. AL-IKHLAAS.mp3'],
  113: ['113. AL-FALAQ.mp3'],
  114: ['114. AN-NAAS.mp3'],
};

/**
 * Verse timestamps for each surah
 * Format: { surahId: { verseNum: { file: fileIndex, start: seconds, end: seconds } } }
 *
 * fileIndex: Which file part (0-indexed) for surahs split into multiple files
 * start: Start time in seconds
 * end: End time in seconds
 *
 * NOTE: Timestamps need to be manually created by listening to the audio.
 * Below are timestamps for Surah Al-Fatiha as a working example.
 * Other surahs have placeholder data that needs to be filled in.
 */
export const KANZUL_IMAN_TIMESTAMPS = {
  // Timestamps need to be manually created by listening to the audio.
  // Format: { verseNum: { file: fileIndex, start: seconds, end: seconds } }
  //
  // For surahs without timestamps, the system plays full surah audio (verse 1)
  // or falls back to TTS (verse > 1).
  //
  // To add timestamps for a surah:
  // 1. Listen to the audio file and note start/end times for each verse
  // 2. Add entry like: surahId: { 1: { file: 0, start: 0, end: 10 }, 2: { ... } }
};

/**
 * Get the audio URL for a specific surah file
 */
export function getKanzulImanAudioUrl(surahId, fileIndex = 0) {
  const files = KANZUL_IMAN_FILES[surahId];
  if (!files || !files[fileIndex]) return null;

  // URL encode the filename (handles spaces and special characters)
  const encodedFilename = encodeURIComponent(files[fileIndex]);
  return `${KANZUL_IMAN_BASE_URL}/${encodedFilename}`;
}

/**
 * Get timestamp data for a specific verse
 */
export function getVerseTimestamp(surahId, verseNum) {
  const surahTimestamps = KANZUL_IMAN_TIMESTAMPS[surahId];
  if (!surahTimestamps) return null;
  return surahTimestamps[verseNum] || null;
}

/**
 * Check if a surah has complete timestamps
 */
export function hasCompleteTimestamps(surahId) {
  return !!KANZUL_IMAN_TIMESTAMPS[surahId];
}

/**
 * Get all surahs that have timestamps available
 */
export function getSurahsWithTimestamps() {
  return Object.keys(KANZUL_IMAN_TIMESTAMPS).map(Number);
}

/**
 * Kanz ul Iman reciter info
 */
export const KANZUL_IMAN_RECITER = {
  id: 'ur.kanzuliman',
  name: 'Maulana Hamza Ali Qadri',
  nameNative: 'مولانا حمزہ علی قادری',
  language: 'Urdu',
  languageNative: 'اردو',
  translation: 'Kanz ul Iman',
  translationNative: 'کنز الایمان',
  translationShort: 'کنزالایمان',
  translationAuthor: 'Imam Ahmad Raza Khan',
  country: 'Pakistan',
  style: 'sentence',
  styleLabel: 'جملہ',
  source: 'archive.org',
  matchesTranslations: ['ur.kanzuliman'],
};
