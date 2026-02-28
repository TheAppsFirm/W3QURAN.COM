/**
 * Universal Treebank Completion Script
 * Fetches word-by-word data from Quran.com API v4 and
 * fills ALL missing ayahs across ALL 114 surah files.
 *
 * Usage: node scripts/complete_treebank.mjs [surahStart] [surahEnd]
 * Example: node scripts/complete_treebank.mjs 3 56
 * Default: processes all 114 surahs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const SURAHS_DIR = resolve('src/data/treebank/surahs');

// Expected ayah counts per surah (1-indexed)
const EXPECTED_AYAHS = [
  0, 7, 286, 200, 176, 120, 165, 206, 75, 129, 109,
  123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60,
  34, 30, 73, 54, 45, 83, 182, 88, 75, 85,
  54, 53, 89, 59, 37, 35, 38, 29, 18, 45,
  60, 49, 62, 55, 78, 96, 29, 22, 24, 13,
  14, 11, 11, 18, 12, 12, 30, 52, 52, 44,
  28, 28, 20, 56, 40, 31, 50, 40, 46, 42,
  29, 19, 36, 25, 22, 17, 19, 26, 30, 20,
  15, 21, 11, 8, 8, 19, 5, 8, 8, 11,
  11, 8, 3, 9, 5, 4, 7, 3, 6, 3,
  5, 4, 5, 6,
];

// POS guessing from Arabic word patterns and English meanings
const POS_MAP = {
  'NOUN': 'N', 'V': 'V', 'VERB': 'V', 'PRON': 'PRON', 'DET': 'DET',
  'PREP': 'PREP', 'P': 'PREP', 'CONJ': 'CONJ', 'ADJ': 'ADJ', 'ADV': 'ADV',
  'REL': 'REL', 'PART': 'PART', 'NEG': 'NEG', 'EMPH': 'EMPH', 'VOC': 'VOC',
  'DEM': 'DEM', 'COND': 'COND', 'INTG': 'INTG', 'EXC': 'EXC', 'LOC': 'LOC',
  'T': 'N', 'ACC': 'N', 'INL': 'N',
};

// Root database for common Quranic words
const ROOT_DB = {
  'الله': 'أ ل ه', 'الٰلَّهِ': 'أ ل ه', 'اللَّهِ': 'أ ل ه', 'اللَّهَ': 'أ ل ه', 'اللَّهُ': 'أ ل ه', 'بِاللَّهِ': 'أ ل ه', 'وَاللَّهُ': 'أ ل ه', 'لِلَّهِ': 'أ ل ه', 'وَاللَّهِ': 'أ ل ه',
  'رَبِّ': 'ر ب ب', 'رَبُّ': 'ر ب ب', 'رَبَّ': 'ر ب ب', 'رَبِّكَ': 'ر ب ب', 'رَبِّكُمْ': 'ر ب ب', 'رَبِّي': 'ر ب ب', 'رَبَّكَ': 'ر ب ب', 'رَبُّكَ': 'ر ب ب', 'رَبَّنَا': 'ر ب ب', 'رَبِّهِ': 'ر ب ب', 'رَبِّهِمْ': 'ر ب ب',
  'كِتَابٌ': 'ك ت ب', 'كِتَابِ': 'ك ت ب', 'الْكِتَابَ': 'ك ت ب', 'الْكِتَابِ': 'ك ت ب', 'كِتَابًا': 'ك ت ب', 'كُتِبَ': 'ك ت ب', 'يَكْتُبُونَ': 'ك ت ب',
  'قَالَ': 'ق و ل', 'قَالُوا': 'ق و ل', 'يَقُولُ': 'ق و ل', 'قُلْ': 'ق و ل', 'قِيلَ': 'ق و ل', 'قَوْلًا': 'ق و ل', 'يَقُولُونَ': 'ق و ل', 'قَالَتْ': 'ق و ل', 'قَوْلِ': 'ق و ل',
  'عَلِمَ': 'ع ل م', 'يَعْلَمُ': 'ع ل م', 'عِلْمٍ': 'ع ل م', 'تَعْلَمُونَ': 'ع ل م', 'يَعْلَمُونَ': 'ع ل م', 'أَعْلَمُ': 'ع ل م', 'عَلِيمٌ': 'ع ل م', 'الْعَلِيمُ': 'ع ل م', 'عِلْمًا': 'ع ل م',
  'آمَنُوا': 'أ م ن', 'يُؤْمِنُونَ': 'أ م ن', 'آمَنَ': 'أ م ن', 'الْمُؤْمِنِينَ': 'أ م ن', 'مُؤْمِنًا': 'أ م ن', 'إِيمَانًا': 'أ م ن', 'الْمُؤْمِنُونَ': 'أ م ن', 'تُؤْمِنُوا': 'أ م ن',
  'الْأَرْضِ': 'أ ر ض', 'أَرْضِ': 'أ ر ض', 'الْأَرْضَ': 'أ ر ض',
  'السَّمَاوَاتِ': 'س م و', 'سَمَاءِ': 'س م و', 'السَّمَاءِ': 'س م و', 'السَّمَاوَاتُ': 'س م و',
  'النَّاسِ': 'ن و س', 'النَّاسُ': 'ن و س', 'النَّاسَ': 'ن و س', 'نَاسٍ': 'ن و س',
  'كَانَ': 'ك و ن', 'يَكُونُ': 'ك و ن', 'كَانُوا': 'ك و ن', 'تَكُونُوا': 'ك و ن', 'كُنْتُمْ': 'ك و ن', 'يَكُنْ': 'ك و ن',
  'جَعَلَ': 'ج ع ل', 'يَجْعَلَ': 'ج ع ل', 'جَعَلْنَا': 'ج ع ل',
  'عَمِلُوا': 'ع م ل', 'يَعْمَلُونَ': 'ع م ل', 'عَمَلًا': 'ع م ل', 'أَعْمَالُهُمْ': 'ع م ل',
  'خَلَقَ': 'خ ل ق', 'خَلَقْنَا': 'خ ل ق', 'يَخْلُقُ': 'خ ل ق', 'خَلْقِ': 'خ ل ق',
  'ظَلَمُوا': 'ظ ل م', 'الظَّالِمِينَ': 'ظ ل م', 'يَظْلِمُونَ': 'ظ ل م', 'ظُلْمًا': 'ظ ل م',
  'كَفَرُوا': 'ك ف ر', 'الْكَافِرِينَ': 'ك ف ر', 'يَكْفُرُونَ': 'ك ف ر', 'الْكَافِرُونَ': 'ك ف ر', 'كَافِرًا': 'ك ف ر',
  'هَدَىٰ': 'ه د ي', 'يَهْدِي': 'ه د ي', 'الْهُدَىٰ': 'ه د ي', 'هُدًى': 'ه د ي', 'اهْدِنَا': 'ه د ي',
  'الصَّلَاةَ': 'ص ل و', 'صَلَاتِهِمْ': 'ص ل و', 'يُصَلُّونَ': 'ص ل و',
  'الْحَمْدُ': 'ح م د', 'حَمْدِ': 'ح م د', 'يَحْمَدُونَ': 'ح م د',
  'عَذَابٌ': 'ع ذ ب', 'عَذَابًا': 'ع ذ ب', 'الْعَذَابَ': 'ع ذ ب', 'عَذَابِ': 'ع ذ ب', 'يُعَذِّبُ': 'ع ذ ب',
  'دُونِ': 'د و ن', 'دُونِهِ': 'د و ن',
  'يَوْمَ': 'ي و م', 'يَوْمِ': 'ي و م', 'الْيَوْمَ': 'ي و م', 'الْيَوْمِ': 'ي و م',
  'نَفْسٍ': 'ن ف س', 'أَنفُسَكُمْ': 'ن ف س', 'أَنفُسِهِمْ': 'ن ف س', 'أَنفُسَهُمْ': 'ن ف س',
  'الْحَقِّ': 'ح ق ق', 'حَقًّا': 'ح ق ق', 'بِالْحَقِّ': 'ح ق ق',
  'أَرْسَلْنَا': 'ر س ل', 'رُسُلًا': 'ر س ل', 'رَسُولَ': 'ر س ل', 'الرَّسُولَ': 'ر س ل', 'رَسُولُ': 'ر س ل', 'رُسُلُنَا': 'ر س ل',
  'مَاءٍ': 'م و ه', 'الْمَاءَ': 'م و ه', 'مَاءً': 'م و ه',
  'النَّارِ': 'ن و ر', 'نَارًا': 'ن و ر',
  'الْجَنَّةَ': 'ج ن ن', 'جَنَّاتٍ': 'ج ن ن', 'جَنَّةٌ': 'ج ن ن',
  'الصِّرَاطَ': 'ص ر ط', 'صِرَاطَ': 'ص ر ط', 'صِرَاطٍ': 'ص ر ط',
  'أَنزَلَ': 'ن ز ل', 'أَنزَلْنَا': 'ن ز ل', 'نَزَّلَ': 'ن ز ل', 'نُزِّلَ': 'ن ز ل', 'يُنَزِّلُ': 'ن ز ل',
  'بَعْضَ': 'ب ع ض', 'بَعْضُهُمْ': 'ب ع ض', 'بَعْضٍ': 'ب ع ض',
  'شَيْءٍ': 'ش ي أ', 'شَيْئًا': 'ش ي أ',
  'قَبْلِ': 'ق ب ل', 'قَبْلِكَ': 'ق ب ل', 'قَبْلِهِمْ': 'ق ب ل',
  'بَعْدِ': 'ب ع د', 'بَعْدَ': 'ب ع د',
  'أَهْلَ': 'أ ه ل', 'أَهْلِ': 'أ ه ل',
  'قَوْمِ': 'ق و م', 'قَوْمَ': 'ق و م', 'قَوْمُهُ': 'ق و م', 'قَوْمِهِ': 'ق و م', 'قَوْمًا': 'ق و م', 'الْقَوْمَ': 'ق و م', 'الْقَوْمِ': 'ق و م',
  'مُوسَىٰ': 'م و س', 'مُوسَى': 'م و س',
  'إِبْرَاهِيمَ': 'ب ر ه م',
  'عِيسَى': 'ع ي س',
  'مَرْيَمَ': 'م ر ي م',
  'مُحَمَّدٌ': 'ح م د',
  'الرَّحْمَٰنِ': 'ر ح م', 'الرَّحِيمِ': 'ر ح م', 'رَحْمَةً': 'ر ح م', 'رَحْمَتِ': 'ر ح م', 'بِسْمِ': 'س م و',
};

// Urdu translations for common English words
const URDU_COMMON = {
  'Allah': 'اللہ', 'God': 'اللہ', 'Lord': 'رب', 'said': 'کہا', 'say': 'کہو', 'says': 'کہتا ہے',
  'those who': 'جو لوگ', 'people': 'لوگ', 'believe': 'ایمان لانا', 'believed': 'ایمان لائے',
  'not': 'نہیں', 'and': 'اور', 'but': 'لیکن', 'or': 'یا', 'then': 'پھر',
  'from': 'سے', 'to': 'کو', 'in': 'میں', 'on': 'پر', 'with': 'ساتھ',
  'He': 'وہ', 'he': 'اس نے', 'they': 'وہ لوگ', 'you': 'تم', 'we': 'ہم', 'I': 'میں',
  'Indeed': 'بیشک', 'surely': 'یقیناً', 'verily': 'بیشک',
  'the earth': 'زمین', 'earth': 'زمین', 'heavens': 'آسمان', 'heaven': 'آسمان',
  'day': 'دن', 'night': 'رات', 'time': 'وقت',
  'heart': 'دل', 'soul': 'روح', 'water': 'پانی', 'fire': 'آگ',
  'know': 'جاننا', 'see': 'دیکھنا', 'hear': 'سننا', 'fear': 'ڈرنا',
  'good': 'اچھا', 'evil': 'برا', 'truth': 'سچ', 'false': 'جھوٹ',
  'forgiveness': 'مغفرت', 'mercy': 'رحمت', 'punishment': 'عذاب', 'reward': 'ثواب',
  'worship': 'عبادت', 'pray': 'دعا', 'prayer': 'نماز',
  'book': 'کتاب', 'sign': 'نشانی', 'verse': 'آیت', 'signs': 'نشانیاں',
  'messenger': 'رسول', 'prophet': 'نبی', 'Messenger': 'رسول', 'Prophet': 'نبی',
  'disbelievers': 'کافر', 'believers': 'مومنین', 'righteous': 'نیک',
  'All-Knowing': 'سب جاننے والا', 'All-Wise': 'حکمت والا', 'All-Hearing': 'سب سننے والا',
  'All-Seeing': 'سب دیکھنے والا', 'Most Merciful': 'بہت مہربان', 'Most Gracious': 'بڑا مہربان',
  'gardens': 'باغات', 'paradise': 'جنت', 'hellfire': 'جہنم', 'hell': 'جہنم',
  'children': 'اولاد', 'son': 'بیٹا', 'father': 'باپ', 'mother': 'ماں',
  'path': 'راستہ', 'way': 'راستہ', 'straight': 'سیدھا',
  'created': 'پیدا کیا', 'creation': 'تخلیق', 'create': 'پیدا کرنا',
  'worship': 'عبادت', 'servant': 'بندہ', 'servants': 'بندے',
  'world': 'دنیا', 'hereafter': 'آخرت', 'life': 'زندگی', 'death': 'موت',
  'O': 'اے', 'who': 'جو', 'which': 'جو', 'what': 'کیا', 'that': 'وہ',
  'no': 'نہیں', 'do not': 'مت', 'will not': 'نہیں',
  'except': 'سوائے', 'only': 'صرف', 'each': 'ہر', 'every': 'ہر', 'all': 'سب',
  'before': 'پہلے', 'after': 'بعد', 'between': 'درمیان',
  'therein': 'اس میں', 'thereof': 'اس کا', 'thereof': 'اس سے',
  'over': 'اوپر', 'under': 'نیچے', 'upon': 'پر',
};

function guessUrdu(enMeaning) {
  if (!enMeaning) return '';
  let ur = enMeaning;
  for (const [en, urd] of Object.entries(URDU_COMMON)) {
    ur = ur.replace(new RegExp(`\\b${en}\\b`, 'gi'), urd);
  }
  return ur;
}

function guessPOS(arabic, enMeaning, transliteration) {
  const ar = arabic;
  const en = (enMeaning || '').toLowerCase();
  const tr = (transliteration || '').toLowerCase();

  // Particles and prepositions
  if (['فِي', 'فِى', 'مِنْ', 'مِن', 'مِّنْ', 'مِّن', 'إِلَىٰ', 'إِلَى', 'عَلَىٰ', 'عَلَى', 'عَنْ', 'عَن', 'عَنِ', 'بِ', 'لِ', 'كَ'].includes(ar)) return { pos: 'PREP', role: 'preposition' };
  if (ar.startsWith('بِ') && ar.length > 2) return { pos: 'P+N', role: 'preposition+noun' };
  if (ar.startsWith('لِ') && ar.length > 2 && !ar.startsWith('لَ')) return { pos: 'P+N', role: 'preposition+noun' };

  // Conjunctions
  if (['وَ', 'ثُمَّ', 'أَوْ', 'فَ', 'بَلْ', 'أَمْ'].includes(ar)) return { pos: 'CONJ', role: 'conjunction' };

  // Negation
  if (['لَا', 'لَمْ', 'لَن', 'مَا'].includes(ar) && (en.includes('not') || en.includes('no '))) return { pos: 'NEG', role: 'negation' };

  // Exception
  if (ar === 'إِلَّا') return { pos: 'EXC', role: 'exception' };

  // Emphatic
  if (['إِنَّ', 'إِنَّهُ', 'إِنِّي', 'إِنَّنِي', 'إِنَّا', 'أَنَّ', 'أَنَّهُ', 'إِنَّمَا'].includes(ar)) return { pos: 'PART', role: 'emphatic' };

  // Demonstratives
  if (['ذَٰلِكَ', 'ذَلِكَ', 'هَٰذَا', 'هَذَا', 'هَٰذِهِ', 'تِلْكَ', 'هَٰؤُلَاءِ', 'أُولَٰئِكَ'].includes(ar)) return { pos: 'DEM', role: 'demonstrative' };

  // Relative pronouns
  if (['الَّذِي', 'الَّذِينَ', 'الَّتِي', 'اللَّذَانِ', 'اللَّتَانِ', 'اللَّاتِي', 'اللَّائِي'].includes(ar)) return { pos: 'REL', role: 'relative' };
  if (['مَن', 'مَا'].includes(ar) && (en.includes('who') || en.includes('what') || en.includes('which') || en.includes('that'))) return { pos: 'REL', role: 'relative' };

  // Pronouns
  if (['هُوَ', 'هِيَ', 'هُمْ', 'هُنَّ', 'أَنتَ', 'أَنتُمْ', 'أَنَا', 'نَحْنُ', 'أَنتِ', 'أَنتُنَّ', 'هُمَا'].includes(ar)) return { pos: 'PRON', role: 'subject' };

  // Vocative
  if (ar === 'يَا' || ar === 'يَٰ') return { pos: 'VOC', role: 'vocative' };

  // Interrogative
  if (['أَ', 'هَلْ', 'كَيْفَ', 'أَيْنَ', 'مَتَىٰ', 'لِمَ', 'لِمَاذَا', 'مَاذَا'].includes(ar)) return { pos: 'INTG', role: 'interrogative' };

  // Muqattaat (disconnected letters)
  if (['الم', 'الر', 'المص', 'كهيعص', 'طه', 'طسم', 'طس', 'يس', 'ص', 'حم', 'عسق', 'ق', 'ن'].includes(ar)) return { pos: 'INIT', role: 'muqattaat' };

  // Compound with وَ (conjunction + something)
  if (ar.startsWith('وَ') && ar.length > 3) return { pos: 'CONJ+N', role: 'conjunction+noun' };
  if (ar.startsWith('فَ') && ar.length > 3) return { pos: 'CONJ+V', role: 'conjunction+verb' };

  // Verbs (pattern-based)
  if (en.startsWith('he ') || en.startsWith('they ') || en.startsWith('we ') || en.startsWith('you ')
    || en.includes('will ') || en.includes('would ')
    || en.endsWith('ed') || en.endsWith('ing')
    || en.startsWith('do ') || en.startsWith('did ')
    || en.startsWith('is ') || en.startsWith('are ') || en.startsWith('was ')
    || tr.startsWith('ya') || tr.startsWith('ta') || tr.startsWith('yu') || tr.startsWith('tu')
    || tr.startsWith('na') || tr.startsWith('nu')
  ) {
    return { pos: 'V', role: 'verb' };
  }

  // Adjectives
  if (en.includes('wise') || en.includes('great') || en.includes('clear') || en.includes('mighty')
    || en.includes('all-') || en.includes('most ')
    || en.endsWith('ful') || en.endsWith('ous') || en.endsWith('ive')
    || en.endsWith('ing') || en.endsWith('able')
  ) {
    return { pos: 'ADJ', role: 'adjective' };
  }

  // Default to noun
  return { pos: 'N', role: 'noun' };
}

function guessRoot(arabic) {
  for (const [key, root] of Object.entries(ROOT_DB)) {
    if (arabic === key || arabic.includes(key)) return root;
  }
  return null;
}

// Build grammar relationships from POS sequence
function buildRelationships(words) {
  const rels = [];
  for (let i = 0; i < words.length - 1; i++) {
    const curr = words[i];
    const next = words[i + 1];

    if (curr.posTag === 'V' && (next.posTag === 'N' || next.posTag === 'PN')) {
      rels.push({ from: i + 1, to: i + 2, label: 'فعل + فاعل' });
    }
    if ((curr.posTag === 'PREP' || curr.posTag === 'P+N') && next.posTag === 'N') {
      rels.push({ from: i + 1, to: i + 2, label: 'جار + مجرور' });
    }
    if (curr.posTag === 'N' && next.posTag === 'N'
      && (next.enMeaning?.includes('of ') || next.enMeaning?.includes("'s") || next.enMeaning?.includes('the '))) {
      rels.push({ from: i + 1, to: i + 2, label: 'مضاف + مضاف إليه' });
    }
    if (curr.posTag === 'N' && next.posTag === 'ADJ') {
      rels.push({ from: i + 1, to: i + 2, label: 'موصوف + صفت' });
    }
    if (curr.posTag === 'REL' && next.posTag === 'V') {
      rels.push({ from: i + 1, to: i + 2, label: 'موصول + صلة' });
    }
    if (curr.posTag === 'NEG' && next.posTag === 'V') {
      rels.push({ from: i + 1, to: i + 2, label: 'نفی + فعل' });
    }
    if (curr.posTag === 'PART' && next.posTag === 'N') {
      rels.push({ from: i + 1, to: i + 2, label: 'إنَّ + اسمها' });
    }
  }
  return rels;
}

// ==================== API Fetching ====================

async function fetchSurahWords(surahId, totalAyahs) {
  const allVerses = {};
  const perPage = 50;

  for (let page = 1; page <= Math.ceil(totalAyahs / perPage); page++) {
    try {
      const url = `https://api.quran.com/api/v4/verses/by_chapter/${surahId}?language=en&words=true&translations=131,234&word_fields=text_uthmani,text_imlaei&page=${page}&per_page=${perPage}`;
      const resp = await fetch(url);
      if (!resp.ok) {
        console.error(`  API error for surah ${surahId} page ${page}: ${resp.status}`);
        continue;
      }
      const data = await resp.json();

      if (!data.verses) break;

      for (const verse of data.verses) {
        const ayahNum = verse.verse_number;
        const enTrans = verse.translations?.find(t => t.resource_id === 131);
        const urTrans = verse.translations?.find(t => t.resource_id === 234);

        allVerses[ayahNum] = {
          text: verse.words
            .filter(w => w.char_type_name !== 'end')
            .map(w => w.text_uthmani)
            .join(' '),
          translation: {
            en: enTrans ? enTrans.text.replace(/<[^>]+>/g, '') : '',
            ur: urTrans ? urTrans.text.replace(/<[^>]+>/g, '') : '',
          },
          words: verse.words
            .filter(w => w.char_type_name !== 'end')
            .map((w, idx) => ({
              position: idx + 1,
              arabic: w.text_uthmani,
              transliteration: w.transliteration?.text || '',
              translation_en: w.translation?.text || '',
            })),
        };
      }

      if (data.pagination && page >= data.pagination.total_pages) break;
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.error(`  Error fetching surah ${surahId} page ${page}:`, e.message);
    }
  }

  return allVerses;
}

// ==================== File Analysis ====================

function detectFormat(content) {
  // Format A: const SURAH_X_TREEBANK = { ... }
  if (content.includes('const SURAH_')) return 'A';
  // Format B: export const TREEBANK_DATA = { surahId: ... }
  if (content.includes('export const TREEBANK_DATA')) return 'B';
  return 'A'; // default
}

function findExistingAyahs(content) {
  const existing = new Set();
  // Match patterns like "  1: {" or "  12: {"
  const regex = /^\s{2,4}(\d+):\s*\{/gm;
  let match;
  while ((match = regex.exec(content)) !== null) {
    existing.add(parseInt(match[1]));
  }
  return existing;
}

function findInsertionPoint(content) {
  // Find the last closing `};` which ends the main object
  // We want to insert before the closing `};` of the main data object
  const lines = content.split('\n');
  let lastClosingLine = -1;

  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '};') {
      lastClosingLine = i;
      break;
    }
  }

  if (lastClosingLine === -1) return -1;

  // Walk backwards from `};` to find the right spot after the last ayah entry
  // We need to find the last ayah's closing `},`
  for (let i = lastClosingLine - 1; i >= 0; i--) {
    const trimmed = lines[i].trim();
    if (trimmed === '' || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) continue;
    // Found something — this is where we insert after
    return lines.slice(0, i + 1).join('\n').length + 1;
  }

  return -1;
}

// ==================== Serialization ====================

function serializeAyahFormatA(surahId, ayahNum, data, words) {
  const wordEntries = words.map((w, idx) => {
    const { pos, role } = guessPOS(w.arabic, w.translation_en, w.transliteration);
    const root = guessRoot(w.arabic);
    w.posTag = pos;
    w.enMeaning = w.translation_en;

    const parts = [];
    parts.push(`id: '${surahId}:${ayahNum}:${idx + 1}'`);
    parts.push(`arabic: ${JSON.stringify(w.arabic)}`);
    parts.push(`transliteration: ${JSON.stringify(w.transliteration)}`);
    parts.push(`pos: ['${pos}']`);
    parts.push(`posLabel: '${pos}'`);
    parts.push(`root: ${root ? JSON.stringify(root) : 'null'}`);
    parts.push(`meaning: { en: ${JSON.stringify(w.translation_en)}, ur: ${JSON.stringify(guessUrdu(w.translation_en))} }`);
    return `      { ${parts.join(', ')} }`;
  });

  const rels = buildRelationships(words);
  const relsStr = rels.map(r => `        { from: ${r.from}, to: ${r.to}, label: '${r.label}' }`).join(',\n');

  return `
  ${ayahNum}: {
    text: ${JSON.stringify(data.text)},
    translation: {
      en: ${JSON.stringify(data.translation.en)},
      ur: ${JSON.stringify(data.translation.ur)},
    },
    words: [
${wordEntries.join(',\n')}
    ],
    structure: {
      relationships: [
${relsStr}
      ],
    },
  },`;
}

function serializeAyahFormatB(surahId, ayahNum, data, words) {
  const wordEntries = words.map((w, idx) => {
    const { pos, role } = guessPOS(w.arabic, w.translation_en, w.transliteration);
    const root = guessRoot(w.arabic);
    w.posTag = pos;
    w.enMeaning = w.translation_en;

    const parts = [];
    parts.push(`arabic: ${JSON.stringify(w.arabic)}`);
    parts.push(`transliteration: ${JSON.stringify(w.transliteration)}`);
    parts.push(`meaning: { en: ${JSON.stringify(w.translation_en)}, ur: ${JSON.stringify(guessUrdu(w.translation_en))} }`);
    parts.push(`pos: "${pos}"`);
    parts.push(`posLabel: "${pos}"`);
    parts.push(`grammar: { role: "${role}" }`);
    return `      { ${parts.join(', ')} }`;
  });

  const rels = buildRelationships(words);
  const relsStr = rels.map(r => `        { from: ${r.from}, to: ${r.to}, label: '${r.label}' }`).join(',\n');

  return `
  ${ayahNum}: {
    ayahNumber: ${ayahNum},
    text: ${JSON.stringify(data.text)},
    words: [
${wordEntries.join(',\n')}
    ],
    structure: {
      relationships: [
${relsStr}
      ],
    },
  },`;
}

// ==================== Main ====================

async function main() {
  const args = process.argv.slice(2);
  const surahStart = args[0] ? parseInt(args[0]) : 1;
  const surahEnd = args[1] ? parseInt(args[1]) : 114;

  console.log(`\n=== Universal Treebank Completion ===`);
  console.log(`Processing surahs ${surahStart}-${surahEnd}\n`);

  let totalAdded = 0;
  let totalSurahsModified = 0;
  const errors = [];

  for (let surahId = surahStart; surahId <= surahEnd; surahId++) {
    const padded = String(surahId).padStart(3, '0');
    const filePath = `${SURAHS_DIR}/${padded}.js`;
    const expectedTotal = EXPECTED_AYAHS[surahId];

    if (!expectedTotal) continue;

    let content;
    try {
      content = readFileSync(filePath, 'utf-8');
    } catch (e) {
      console.log(`  [${padded}] File not found, skipping`);
      continue;
    }

    const existingAyahs = findExistingAyahs(content);
    const missingAyahs = [];
    for (let a = 1; a <= expectedTotal; a++) {
      if (!existingAyahs.has(a)) missingAyahs.push(a);
    }

    if (missingAyahs.length === 0) {
      console.log(`  [${padded}] Complete (${existingAyahs.size}/${expectedTotal})`);
      continue;
    }

    console.log(`  [${padded}] Missing ${missingAyahs.length}/${expectedTotal} ayahs. Fetching from API...`);

    const format = detectFormat(content);
    let apiData;

    try {
      apiData = await fetchSurahWords(surahId, expectedTotal);
    } catch (e) {
      console.error(`  [${padded}] API fetch failed:`, e.message);
      errors.push({ surah: surahId, error: e.message });
      continue;
    }

    if (!apiData || Object.keys(apiData).length === 0) {
      console.error(`  [${padded}] No data from API`);
      errors.push({ surah: surahId, error: 'No API data' });
      continue;
    }

    // Generate new entries
    let newEntries = '';
    let addedCount = 0;

    for (const ayahNum of missingAyahs) {
      const data = apiData[ayahNum];
      if (!data) {
        console.log(`    WARNING: No API data for ayah ${ayahNum}`);
        continue;
      }

      const serialized = format === 'B'
        ? serializeAyahFormatB(surahId, ayahNum, data, data.words)
        : serializeAyahFormatA(surahId, ayahNum, data, data.words);

      newEntries += serialized;
      addedCount++;
    }

    if (addedCount === 0) {
      console.log(`  [${padded}] No entries generated`);
      continue;
    }

    // Insert into file - find the last `};` which closes the main object
    const lines = content.split('\n');
    let insertLine = -1;

    // Find the main closing `};`
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim() === '};') {
        insertLine = i;
        break;
      }
    }

    if (insertLine === -1) {
      console.error(`  [${padded}] Could not find insertion point`);
      errors.push({ surah: surahId, error: 'No insertion point' });
      continue;
    }

    // Ensure the line before insertion ends with a comma (last ayah may not have one)
    for (let i = insertLine - 1; i >= 0; i--) {
      const trimmed = lines[i].trim();
      if (trimmed === '' || trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) continue;
      // Found the last non-empty line before };
      if (trimmed === '}' && !lines[i].includes('};')) {
        // Last ayah entry ends with } but no comma - add comma
        lines[i] = lines[i].replace(/\}\s*$/, '},');
      }
      break;
    }

    // Insert new entries before the `};`
    lines.splice(insertLine, 0, newEntries);
    const newContent = lines.join('\n');

    // Verify syntax
    try {
      writeFileSync(filePath, newContent);
      // Quick syntax check
      const { execSync } = await import('child_process');
      execSync(`node --check "${filePath}"`, { timeout: 5000 });
      console.log(`  [${padded}] Added ${addedCount} ayahs (now ${existingAyahs.size + addedCount}/${expectedTotal}) ✓`);
      totalAdded += addedCount;
      totalSurahsModified++;
    } catch (e) {
      console.error(`  [${padded}] Syntax error after insertion! Reverting...`);
      writeFileSync(filePath, content);
      errors.push({ surah: surahId, error: 'Syntax error after insertion' });
    }

    // Rate limit
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n=== Summary ===`);
  console.log(`Surahs modified: ${totalSurahsModified}`);
  console.log(`Total ayahs added: ${totalAdded}`);
  if (errors.length > 0) {
    console.log(`Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  Surah ${e.surah}: ${e.error}`));
  }
}

main().catch(console.error);
