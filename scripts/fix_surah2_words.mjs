/**
 * Fix Surah 2 (Al-Baqarah) - Populate empty words arrays for ayahs 101-286
 * Fetches word data from Quran.com API and replaces empty words: [] with real data
 */

import { readFileSync, writeFileSync } from 'fs';

const FILE_PATH = 'src/data/treebank/surahs/002.js';

// Root database for common words
const ROOT_DB = {
  'الله': 'أ ل ه', 'اللَّهِ': 'أ ل ه', 'اللَّهَ': 'أ ل ه', 'اللَّهُ': 'أ ل ه', 'بِاللَّهِ': 'أ ل ه', 'وَاللَّهُ': 'أ ل ه', 'لِلَّهِ': 'أ ل ه',
  'رَبِّ': 'ر ب ب', 'رَبُّ': 'ر ب ب', 'رَبَّ': 'ر ب ب', 'رَبِّكَ': 'ر ب ب', 'رَبِّكُمْ': 'ر ب ب', 'رَبِّي': 'ر ب ب', 'رَبَّنَا': 'ر ب ب', 'رَبِّهِمْ': 'ر ب ب',
  'كِتَابٌ': 'ك ت ب', 'كِتَابِ': 'ك ت ب', 'الْكِتَابَ': 'ك ت ب', 'الْكِتَابِ': 'ك ت ب',
  'قَالَ': 'ق و ل', 'قَالُوا': 'ق و ل', 'يَقُولُ': 'ق و ل', 'قُلْ': 'ق و ل', 'يَقُولُونَ': 'ق و ل', 'قَالَتْ': 'ق و ل',
  'عَلِمَ': 'ع ل م', 'يَعْلَمُ': 'ع ل م', 'تَعْلَمُونَ': 'ع ل م', 'يَعْلَمُونَ': 'ع ل م', 'أَعْلَمُ': 'ع ل م', 'عَلِيمٌ': 'ع ل م',
  'آمَنُوا': 'أ م ن', 'يُؤْمِنُونَ': 'أ م ن', 'آمَنَ': 'أ م ن', 'الْمُؤْمِنِينَ': 'أ م ن', 'إِيمَانًا': 'أ م ن',
  'الْأَرْضِ': 'أ ر ض', 'الْأَرْضَ': 'أ ر ض',
  'السَّمَاوَاتِ': 'س م و', 'السَّمَاءِ': 'س م و',
  'النَّاسِ': 'ن و س', 'النَّاسُ': 'ن و س', 'النَّاسَ': 'ن و س',
  'كَانَ': 'ك و ن', 'يَكُونُ': 'ك و ن', 'كَانُوا': 'ك و ن', 'كُنْتُمْ': 'ك و ن',
  'جَعَلَ': 'ج ع ل', 'جَعَلْنَا': 'ج ع ل',
  'عَمِلُوا': 'ع م ل', 'يَعْمَلُونَ': 'ع م ل',
  'خَلَقَ': 'خ ل ق', 'خَلَقْنَا': 'خ ل ق',
  'كَفَرُوا': 'ك ف ر', 'الْكَافِرِينَ': 'ك ف ر', 'يَكْفُرُونَ': 'ك ف ر',
  'هَدَىٰ': 'ه د ي', 'يَهْدِي': 'ه د ي', 'الْهُدَىٰ': 'ه د ي', 'هُدًى': 'ه د ي',
  'الصَّلَاةَ': 'ص ل و', 'صَلَاتِهِمْ': 'ص ل و',
  'عَذَابٌ': 'ع ذ ب', 'عَذَابًا': 'ع ذ ب', 'الْعَذَابَ': 'ع ذ ب', 'عَذَابِ': 'ع ذ ب',
  'يَوْمَ': 'ي و م', 'يَوْمِ': 'ي و م', 'الْيَوْمَ': 'ي و م',
  'أَنزَلَ': 'ن ز ل', 'أَنزَلْنَا': 'ن ز ل', 'نَزَّلَ': 'ن ز ل',
  'قَوْمِ': 'ق و م', 'قَوْمِهِ': 'ق و م', 'الْقَوْمَ': 'ق و م',
  'الْحَقِّ': 'ح ق ق', 'حَقًّا': 'ح ق ق', 'بِالْحَقِّ': 'ح ق ق',
  'رَسُولَ': 'ر س ل', 'الرَّسُولَ': 'ر س ل', 'رَسُولًا': 'ر س ل', 'رُسُلِنَا': 'ر س ل',
  'الْجَنَّةَ': 'ج ن ن', 'جَنَّاتٍ': 'ج ن ن',
  'الصِّرَاطَ': 'ص ر ط', 'صِرَاطَ': 'ص ر ط',
  'مُوسَىٰ': 'م و س',
  'إِبْرَاهِيمَ': 'ب ر ه م',
  'الرَّحْمَٰنِ': 'ر ح م', 'الرَّحِيمِ': 'ر ح م', 'رَحْمَةً': 'ر ح م',
  'بَعْضَ': 'ب ع ض', 'بَعْضُهُمْ': 'ب ع ض',
  'شَيْءٍ': 'ش ي أ', 'شَيْئًا': 'ش ي أ',
  'الزَّكَاةَ': 'ز ك و',
  'نَفْسٍ': 'ن ف س', 'أَنفُسَكُمْ': 'ن ف س', 'أَنفُسَهُمْ': 'ن ف س',
};

const URDU_COMMON = {
  'Allah': 'اللہ', 'God': 'اللہ', 'Lord': 'رب', 'said': 'کہا', 'say': 'کہو',
  'those who': 'جو لوگ', 'people': 'لوگ', 'believe': 'ایمان لانا', 'believed': 'ایمان لائے',
  'not': 'نہیں', 'and': 'اور', 'but': 'لیکن', 'or': 'یا', 'then': 'پھر',
  'from': 'سے', 'to': 'کو', 'in': 'میں', 'on': 'پر', 'with': 'ساتھ',
  'He': 'وہ', 'he': 'اس نے', 'they': 'وہ لوگ', 'you': 'تم', 'we': 'ہم',
  'Indeed': 'بیشک', 'surely': 'یقیناً',
  'earth': 'زمین', 'heavens': 'آسمان', 'heaven': 'آسمان',
  'day': 'دن', 'night': 'رات',
  'good': 'اچھا', 'evil': 'برا', 'truth': 'سچ',
  'forgiveness': 'مغفرت', 'mercy': 'رحمت', 'punishment': 'عذاب', 'reward': 'ثواب',
  'worship': 'عبادت', 'prayer': 'نماز',
  'book': 'کتاب', 'sign': 'نشانی', 'signs': 'نشانیاں',
  'messenger': 'رسول', 'prophet': 'نبی',
  'disbelievers': 'کافر', 'believers': 'مومنین',
  'All-Knowing': 'سب جاننے والا', 'All-Wise': 'حکمت والا',
  'gardens': 'باغات', 'paradise': 'جنت', 'hell': 'جہنم',
  'path': 'راستہ', 'way': 'راستہ', 'straight': 'سیدھا',
  'O': 'اے', 'who': 'جو', 'what': 'کیا', 'that': 'وہ',
  'except': 'سوائے', 'only': 'صرف', 'every': 'ہر', 'all': 'سب',
  'before': 'پہلے', 'after': 'بعد',
};

function guessUrdu(en) {
  if (!en) return '';
  let ur = en;
  for (const [e, u] of Object.entries(URDU_COMMON)) {
    ur = ur.replace(new RegExp(`\\b${e}\\b`, 'gi'), u);
  }
  return ur;
}

function guessPOS(arabic, en, tr) {
  en = (en || '').toLowerCase();
  tr = (tr || '').toLowerCase();
  if (['فِي', 'مِنْ', 'مِن', 'مِّنْ', 'إِلَىٰ', 'إِلَى', 'عَلَىٰ', 'عَلَى', 'عَنْ', 'عَن'].includes(arabic)) return 'PREP';
  if (['وَ', 'ثُمَّ', 'أَوْ', 'فَ', 'بَلْ'].includes(arabic)) return 'CONJ';
  if (['لَا', 'لَمْ', 'لَن', 'مَا'].includes(arabic) && (en.includes('not') || en.includes('no '))) return 'NEG';
  if (arabic === 'إِلَّا') return 'EXC';
  if (['إِنَّ', 'أَنَّ', 'إِنَّمَا'].includes(arabic)) return 'PART';
  if (['ذَٰلِكَ', 'هَٰذَا', 'هَٰذِهِ', 'تِلْكَ', 'أُولَٰئِكَ'].includes(arabic)) return 'DEM';
  if (['الَّذِي', 'الَّذِينَ', 'الَّتِي'].includes(arabic)) return 'REL';
  if (['هُوَ', 'هِيَ', 'هُمْ', 'أَنتَ', 'أَنتُمْ', 'أَنَا', 'نَحْنُ'].includes(arabic)) return 'PRON';
  if (arabic === 'يَا') return 'VOC';
  if (en.startsWith('he ') || en.startsWith('they ') || en.startsWith('we ') || en.startsWith('you ') || en.includes('will ') || en.endsWith('ed') || en.endsWith('ing') || tr.startsWith('ya') || tr.startsWith('ta') || tr.startsWith('yu') || tr.startsWith('na')) return 'V';
  if (en.includes('all-') || en.includes('most ') || en.endsWith('ful') || en.endsWith('ous') || en.endsWith('ive')) return 'ADJ';
  if (arabic.startsWith('وَ') && arabic.length > 3) return 'CONJ';
  return 'N';
}

function guessRoot(arabic) {
  for (const [key, root] of Object.entries(ROOT_DB)) {
    if (arabic === key) return root;
  }
  return null;
}

// Build relationships from word POS sequence
function buildRelationships(words) {
  const rels = [];
  for (let i = 0; i < words.length - 1; i++) {
    const curr = words[i], next = words[i + 1];
    if (curr.pos === 'V' && (next.pos === 'N' || next.pos === 'PN')) rels.push({ from: i+1, to: i+2, label: 'فعل + فاعل' });
    if (curr.pos === 'PREP' && next.pos === 'N') rels.push({ from: i+1, to: i+2, label: 'جار + مجرور' });
    if (curr.pos === 'N' && next.pos === 'N' && (next.en?.includes('of ') || next.en?.includes("'s"))) rels.push({ from: i+1, to: i+2, label: 'مضاف + مضاف إليه' });
    if (curr.pos === 'N' && next.pos === 'ADJ') rels.push({ from: i+1, to: i+2, label: 'موصوف + صفت' });
    if (curr.pos === 'REL' && next.pos === 'V') rels.push({ from: i+1, to: i+2, label: 'موصول + صلة' });
    if (curr.pos === 'NEG' && next.pos === 'V') rels.push({ from: i+1, to: i+2, label: 'نفی + فعل' });
  }
  return rels;
}

async function fetchSurahWords(surahId, totalAyahs) {
  const allVerses = {};
  const perPage = 50;
  for (let page = 1; page <= Math.ceil(totalAyahs / perPage); page++) {
    try {
      const url = `https://api.quran.com/api/v4/verses/by_chapter/${surahId}?language=en&words=true&translations=131,234&word_fields=text_uthmani,text_imlaei&page=${page}&per_page=${perPage}`;
      const resp = await fetch(url);
      const data = await resp.json();
      if (!data.verses) break;
      for (const verse of data.verses) {
        const ayahNum = verse.verse_number;
        const enTrans = verse.translations?.find(t => t.resource_id === 131);
        const urTrans = verse.translations?.find(t => t.resource_id === 234);
        allVerses[ayahNum] = {
          enTranslation: enTrans ? enTrans.text.replace(/<[^>]+>/g, '') : '',
          urTranslation: urTrans ? urTrans.text.replace(/<[^>]+>/g, '') : '',
          words: verse.words.filter(w => w.char_type_name !== 'end').map((w, idx) => ({
            arabic: w.text_uthmani,
            transliteration: w.transliteration?.text || '',
            en: w.translation?.text || '',
          })),
        };
      }
      if (data.pagination && page >= data.pagination.total_pages) break;
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.error(`Error page ${page}:`, e.message);
    }
  }
  return allVerses;
}

async function main() {
  console.log('Fetching Surah 2 word data from API...');
  const apiData = await fetchSurahWords(2, 286);
  console.log(`Got ${Object.keys(apiData).length} ayahs from API`);

  let content = readFileSync(FILE_PATH, 'utf-8');
  let replacements = 0;

  for (let ayah = 101; ayah <= 286; ayah++) {
    const data = apiData[ayah];
    if (!data || !data.words.length) {
      console.log(`  WARNING: No API data for ayah ${ayah}`);
      continue;
    }

    // Build word entries matching surah 2 format
    const wordEntries = data.words.map((w, idx) => {
      const pos = guessPOS(w.arabic, w.en, w.transliteration);
      const root = guessRoot(w.arabic);
      w.pos = pos; w.en_orig = w.en;
      return `{ id: '2:${ayah}:${idx+1}', position: ${idx+1}, arabic: ${JSON.stringify(w.arabic)}, transliteration: ${JSON.stringify(w.transliteration)}, pos: ['${pos}'], posLabel: '${pos}', root: ${root ? JSON.stringify(root) : 'null'}, meaning: { en: ${JSON.stringify(w.en)}, ur: ${JSON.stringify(guessUrdu(w.en))} } }`;
    });

    const rels = buildRelationships(data.words);
    const relsStr = rels.map(r => `{ from: ${r.from}, to: ${r.to}, label: '${r.label}' }`).join(', ');

    // Build the replacement for words: []
    const wordsContent = `[${wordEntries.join(', ')}]`;

    // Find the exact "101: { text: '...', words: [] }" pattern and replace words: []
    // Pattern: ayahNum: { text: '...', words: [] }
    const emptyPattern = new RegExp(
      `(${ayah}:\\s*\\{[^}]*?)words:\\s*\\[\\s*\\]\\s*\\}`,
      's'
    );

    const match = content.match(emptyPattern);
    if (match) {
      const replacement = `${match[1]}words: ${wordsContent}, structure: { relationships: [${relsStr}] } }`;
      content = content.replace(emptyPattern, replacement);
      replacements++;
    } else {
      console.log(`  Could not find empty pattern for ayah ${ayah}`);
    }
  }

  writeFileSync(FILE_PATH, content);
  console.log(`Replaced ${replacements} empty word arrays`);

  // Verify syntax
  const { execSync } = await import('child_process');
  try {
    execSync(`node --check "${FILE_PATH}"`, { timeout: 10000 });
    console.log('Syntax check: PASSED');
  } catch (e) {
    console.error('Syntax check: FAILED');
    console.error(e.stderr?.toString());
  }
}

main().catch(console.error);
