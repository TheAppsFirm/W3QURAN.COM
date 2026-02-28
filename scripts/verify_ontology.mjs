#!/usr/bin/env node

/**
 * Ontology Verification Script
 *
 * Checks all 114 ontology files in src/data/treebank/ontology/ for:
 * 1. Structure check: meaning/explanation fields are {en, ur} objects
 * 2. Verse reference check: verseRef values are valid surah:ayah
 * 3. Urdu presence check: ur fields contain actual Urdu script
 * 4. Arabic term check: term fields contain Arabic characters
 * 5. Cross-reference with Quran.com API: random sample of 10 verses
 * 6. Duplicate check: no duplicate term + verseRef in same file
 */

import { readdir } from 'fs/promises';
import { pathToFileURL } from 'url';
import path from 'path';

// ── Ayah counts for all 114 surahs ──
const SURAH_AYAH_COUNTS = {
  1:7, 2:286, 3:200, 4:176, 5:120, 6:165, 7:206, 8:75, 9:129, 10:109,
  11:123, 12:111, 13:43, 14:52, 15:99, 16:128, 17:111, 18:110, 19:98, 20:135,
  21:112, 22:78, 23:118, 24:64, 25:77, 26:227, 27:93, 28:88, 29:69, 30:60,
  31:34, 32:30, 33:73, 34:54, 35:45, 36:83, 37:182, 38:88, 39:75, 40:85,
  41:54, 42:53, 43:89, 44:59, 45:37, 46:35, 47:38, 48:29, 49:18, 50:45,
  51:60, 52:49, 53:62, 54:55, 55:78, 56:96, 57:29, 58:22, 59:24, 60:13,
  61:14, 62:11, 63:11, 64:18, 65:12, 66:12, 67:30, 68:52, 69:52, 70:44,
  71:28, 72:28, 73:20, 74:56, 75:40, 76:31, 77:50, 78:40, 79:46, 80:42,
  81:29, 82:19, 83:36, 84:25, 85:22, 86:17, 87:19, 88:26, 89:30, 90:20,
  91:15, 92:21, 93:11, 94:8, 95:8, 96:19, 97:5, 98:8, 99:8, 100:11,
  101:11, 102:8, 103:3, 104:9, 105:5, 106:4, 107:7, 108:3, 109:6, 110:3,
  111:5, 112:4, 113:5, 114:6
};

// ── Arabic/Urdu Unicode ranges ──
const ARABIC_RE = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
const URDU_SCRIPT_RE = /[\u0600-\u06FF]/;

// ── Results accumulators ──
const results = {
  totalFiles: 0,
  filesChecked: 0,
  filesMissing: [],
  filesWithLoadErrors: [],
  totalConcepts: 0,

  // 1. Structure issues
  structuralIssues: [],    // { file, category, conceptIdx, field, issue }

  // 2. Verse reference issues
  invalidVerseRefs: [],    // { file, category, conceptIdx, term, verseRef, reason }

  // 3. Urdu issues
  urduIssues: [],          // { file, category, conceptIdx, term, field, issue, value }

  // 4. Arabic term issues
  arabicTermIssues: [],    // { file, category, conceptIdx, term, issue }

  // 5. API cross-reference
  apiResults: [],          // { surah, ayah, term, matched, detail }

  // 6. Duplicate issues
  duplicates: [],          // { file, category, term, verseRef }
};

// ── Helper: extract all concepts from a file's categories ──
function extractConcepts(ontology, fileNum) {
  const concepts = [];
  const categories = ontology.categories;
  if (!categories || typeof categories !== 'object') return concepts;

  for (const [catKey, cat] of Object.entries(categories)) {
    const conceptsArr = cat.concepts;
    if (!Array.isArray(conceptsArr)) continue;

    for (let i = 0; i < conceptsArr.length; i++) {
      const c = conceptsArr[i];
      concepts.push({
        catKey,
        catName: cat.name || cat.label?.en || catKey,
        idx: i,
        concept: c,
        fileNum,
      });
    }
  }
  return concepts;
}

// ── Helper: resolve a verse reference from different formats ──
function resolveVerseRefs(concept, surahId) {
  const refs = [];

  // Format A: verseRef like "40:3"
  if (concept.verseRef) {
    refs.push(concept.verseRef);
  }

  // Format B: ayahs array like [1, 3]
  if (Array.isArray(concept.ayahs)) {
    for (const a of concept.ayahs) {
      refs.push(`${surahId}:${a}`);
    }
  }

  // Format C: ayah single number like 1
  if (typeof concept.ayah === 'number') {
    refs.push(`${surahId}:${concept.ayah}`);
  }

  return refs;
}

// ── Helper: get the term text from a concept ──
function getTermText(concept) {
  if (typeof concept.term === 'string') return concept.term;
  if (typeof concept.arabic === 'string') return concept.arabic;
  if (concept.term?.ar) return concept.term.ar;
  return null;
}

// ── Helper: check if a field is a proper {en, ur} object ──
function isEnUrObject(val) {
  return val && typeof val === 'object' && !Array.isArray(val) && 'en' in val && 'ur' in val;
}

// ── Check 1: Structure check ──
function checkStructure(entry) {
  const { concept, catKey, idx, fileNum } = entry;
  const file = `${String(fileNum).padStart(3, '0')}.js`;

  // Check meaning field
  const meaning = concept.meaning;
  if (meaning !== undefined) {
    if (typeof meaning === 'string') {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'meaning',
        issue: `Plain string instead of {en, ur} object: "${meaning.substring(0, 60)}..."`,
      });
    } else if (typeof meaning === 'object' && !meaning.en) {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'meaning',
        issue: 'Object missing "en" key',
      });
    } else if (typeof meaning === 'object' && !meaning.ur) {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'meaning',
        issue: 'Object missing "ur" key',
      });
    }
  }

  // Check explanation field
  const explanation = concept.explanation;
  if (explanation !== undefined) {
    if (typeof explanation === 'string') {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'explanation',
        issue: `Plain string instead of {en, ur} object: "${explanation.substring(0, 60)}..."`,
      });
    } else if (typeof explanation === 'object' && !explanation.en) {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'explanation',
        issue: 'Object missing "en" key',
      });
    } else if (typeof explanation === 'object' && !explanation.ur) {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'explanation',
        issue: 'Object missing "ur" key',
      });
    }
  }

  // Check details field (used by some files like 114)
  const details = concept.details;
  if (details !== undefined) {
    if (typeof details === 'string') {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'details',
        issue: `Plain string instead of {en, ur} object: "${details.substring(0, 60)}..."`,
      });
    } else if (typeof details === 'object' && !details.en) {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'details',
        issue: 'Object missing "en" key',
      });
    } else if (typeof details === 'object' && !details.ur) {
      results.structuralIssues.push({
        file, category: catKey, conceptIdx: idx,
        field: 'details',
        issue: 'Object missing "ur" key',
      });
    }
  }
}

// ── Check 2: Verse reference check ──
function checkVerseRef(entry) {
  const { concept, catKey, idx, fileNum } = entry;
  const file = `${String(fileNum).padStart(3, '0')}.js`;
  const surahId = fileNum;
  const refs = resolveVerseRefs(concept, surahId);
  const termText = getTermText(concept) || '(no term)';

  for (const ref of refs) {
    const match = ref.match(/^(\d+):(\d+)$/);
    if (!match) {
      results.invalidVerseRefs.push({
        file, category: catKey, conceptIdx: idx,
        term: termText, verseRef: ref,
        reason: 'Malformed verse reference (expected "surah:ayah")',
      });
      continue;
    }

    const surah = parseInt(match[1], 10);
    const ayah = parseInt(match[2], 10);

    if (surah < 1 || surah > 114) {
      results.invalidVerseRefs.push({
        file, category: catKey, conceptIdx: idx,
        term: termText, verseRef: ref,
        reason: `Invalid surah number: ${surah}`,
      });
      continue;
    }

    const maxAyah = SURAH_AYAH_COUNTS[surah];
    if (ayah < 1 || ayah > maxAyah) {
      results.invalidVerseRefs.push({
        file, category: catKey, conceptIdx: idx,
        term: termText, verseRef: ref,
        reason: `Ayah ${ayah} out of range for surah ${surah} (max: ${maxAyah})`,
      });
    }
  }

  // No verse reference at all
  if (refs.length === 0) {
    // Some concepts like general/derived ones may not have refs; just note it
    // Not an error, but worth noting
  }
}

// ── Check 3: Urdu presence check ──
function checkUrdu(entry) {
  const { concept, catKey, idx, fileNum } = entry;
  const file = `${String(fileNum).padStart(3, '0')}.js`;
  const termText = getTermText(concept) || '(no term)';

  // Fields to check for Urdu
  const fieldsToCheck = [
    { name: 'meaning', val: concept.meaning },
    { name: 'explanation', val: concept.explanation },
    { name: 'details', val: concept.details },
  ];

  for (const { name, val } of fieldsToCheck) {
    if (!val || typeof val !== 'object') continue;
    const ur = val.ur;
    const en = val.en;

    if (ur === undefined || ur === null) {
      // Already caught in structure check
      continue;
    }

    if (typeof ur === 'string') {
      // Empty check
      if (ur.trim() === '') {
        results.urduIssues.push({
          file, category: catKey, conceptIdx: idx,
          term: termText, field: name,
          issue: 'Urdu field is empty',
          value: '',
        });
        continue;
      }

      // Same as English check
      if (ur.trim() === (en || '').trim()) {
        results.urduIssues.push({
          file, category: catKey, conceptIdx: idx,
          term: termText, field: name,
          issue: 'Urdu field is identical to English (not translated)',
          value: ur.substring(0, 80),
        });
        continue;
      }

      // Contains Urdu script check
      if (!URDU_SCRIPT_RE.test(ur)) {
        results.urduIssues.push({
          file, category: catKey, conceptIdx: idx,
          term: termText, field: name,
          issue: 'Urdu field contains no Urdu/Arabic script characters',
          value: ur.substring(0, 80),
        });
      }
    }
  }
}

// ── Check 4: Arabic term check ──
// Some files use `term` as transliteration + `arabic` as actual Arabic text.
// Others use `term` as the Arabic text directly.
// We check that at least ONE of `term` or `arabic` contains Arabic characters.
function checkArabicTerm(entry) {
  const { concept, catKey, idx, fileNum } = entry;
  const file = `${String(fileNum).padStart(3, '0')}.js`;

  const termField = typeof concept.term === 'string' ? concept.term : '';
  const arabicField = typeof concept.arabic === 'string' ? concept.arabic : '';

  const hasArabicInTerm = ARABIC_RE.test(termField);
  const hasArabicInArabicField = ARABIC_RE.test(arabicField);

  if (!termField && !arabicField) {
    results.arabicTermIssues.push({
      file, category: catKey, conceptIdx: idx,
      term: '(missing)',
      issue: 'No term or arabic field found on concept',
    });
    return;
  }

  if (!hasArabicInTerm && !hasArabicInArabicField) {
    results.arabicTermIssues.push({
      file, category: catKey, conceptIdx: idx,
      term: termField || arabicField,
      issue: 'Neither term nor arabic field contains Arabic characters',
    });
  }
}

// ── Check 5: API cross-reference (random sample) ──
async function checkAPICrossReference(allEntries) {
  // Collect entries that have a verseRef we can check
  const verifiable = [];
  for (const entry of allEntries) {
    const termText = getTermText(entry.concept);
    if (!termText || !ARABIC_RE.test(termText)) continue;

    const refs = resolveVerseRefs(entry.concept, entry.fileNum);
    for (const ref of refs) {
      const match = ref.match(/^(\d+):(\d+)$/);
      if (!match) continue;
      const surah = parseInt(match[1], 10);
      const ayah = parseInt(match[2], 10);
      if (surah < 1 || surah > 114) continue;
      if (ayah < 1 || ayah > (SURAH_AYAH_COUNTS[surah] || 0)) continue;
      verifiable.push({ surah, ayah, term: termText, file: entry.fileNum });
    }
  }

  if (verifiable.length === 0) {
    console.log('  No verifiable entries found for API check.');
    return;
  }

  // Pick 10 random entries from different surahs
  const surahGroups = {};
  for (const v of verifiable) {
    if (!surahGroups[v.surah]) surahGroups[v.surah] = [];
    surahGroups[v.surah].push(v);
  }

  const surahKeys = Object.keys(surahGroups);
  const selected = [];
  const usedSurahs = new Set();

  // Shuffle surahs
  const shuffled = surahKeys.sort(() => Math.random() - 0.5);

  for (const sk of shuffled) {
    if (selected.length >= 10) break;
    const group = surahGroups[sk];
    const pick = group[Math.floor(Math.random() * group.length)];
    selected.push(pick);
    usedSurahs.add(sk);
  }

  // If we haven't reached 10, fill from remaining
  if (selected.length < 10) {
    const remaining = verifiable.filter(v => !usedSurahs.has(String(v.surah)));
    const shuffledRemaining = remaining.sort(() => Math.random() - 0.5);
    for (const r of shuffledRemaining) {
      if (selected.length >= 10) break;
      selected.push(r);
    }
  }

  console.log(`  Checking ${selected.length} verse(s) against Quran.com API...\n`);

  // Normalize Arabic text for comparison: strip diacritics, normalize alef variants, etc.
  const normalizeArabic = (s) => s
    .normalize('NFKD')
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0610-\u061A\u08D3-\u08E1\u08E3-\u08FF]/g, '')  // diacritics
    .replace(/[\u200B-\u200F\u202A-\u202E\u2060-\u2069\uFEFF]/g, '')  // zero-width/directional
    .replace(/\u0671/g, '\u0627')  // alef wasla -> alef
    .replace(/[\u0622\u0623\u0625]/g, '\u0627')  // normalize alef variants
    .replace(/\u0649/g, '\u064A')  // alef maksura -> ya
    .replace(/\u0629/g, '\u0647')  // ta marbuta -> ha
    .replace(/\u0640/g, '')  // tatweel/kashida
    .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\s]/g, '')  // keep only Arabic + spaces
    .replace(/\s+/g, ' ')
    .trim();

  for (const { surah, ayah, term, file } of selected) {
    const verseKey = `${surah}:${ayah}`;
    // Use the uthmani endpoint which returns proper standard Arabic Unicode
    const url = `https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=${verseKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        results.apiResults.push({
          surah, ayah, term,
          matched: false,
          detail: `API returned HTTP ${response.status}`,
        });
        continue;
      }

      const data = await response.json();
      const verses = data.verses;
      if (!verses || verses.length === 0) {
        results.apiResults.push({
          surah, ayah, term,
          matched: false,
          detail: 'No verses data in API response',
        });
        continue;
      }

      const verseText = verses[0].text_uthmani || '';

      const termNorm = normalizeArabic(term);
      const verseNorm = normalizeArabic(verseText);

      // Check if any word from the term appears in the verse text
      const termWords = termNorm.split(/\s+/).filter(w => w.length > 0);

      let matchCount = 0;
      for (const tw of termWords) {
        if (verseNorm.includes(tw)) {
          matchCount++;
        }
      }

      // Consider matched if at least 50% of term words appear in the verse
      const matched = termWords.length > 0 && matchCount >= Math.ceil(termWords.length * 0.5);

      results.apiResults.push({
        surah, ayah, term,
        matched,
        detail: matched
          ? `Matched ${matchCount}/${termWords.length} Arabic words in verse text`
          : `Only ${matchCount}/${termWords.length} Arabic words found. Term(norm): "${termNorm.substring(0, 50)}" | Verse(norm): "${verseNorm.substring(0, 80)}..."`,
      });

      // Rate limiting: small delay between API calls
      await new Promise(r => setTimeout(r, 300));
    } catch (err) {
      results.apiResults.push({
        surah, ayah, term,
        matched: false,
        detail: `Fetch error: ${err.message}`,
      });
    }
  }
}

// ── Check 6: Duplicate check ──
function checkDuplicates(entries) {
  // Group by file
  const byFile = {};
  for (const entry of entries) {
    const file = `${String(entry.fileNum).padStart(3, '0')}.js`;
    if (!byFile[file]) byFile[file] = [];
    byFile[file].push(entry);
  }

  for (const [file, fileEntries] of Object.entries(byFile)) {
    const seen = new Map();
    for (const entry of fileEntries) {
      const termText = getTermText(entry.concept) || '';
      const refs = resolveVerseRefs(entry.concept, entry.fileNum);
      const refStr = refs.length > 0 ? refs.sort().join(',') : '(none)';
      const key = `${termText}|${refStr}`;

      if (seen.has(key)) {
        results.duplicates.push({
          file,
          category: entry.catKey,
          term: termText,
          verseRef: refStr,
        });
      } else {
        seen.set(key, true);
      }
    }
  }
}

// ── Main ──
async function main() {
  const ontologyDir = path.resolve('src/data/treebank/ontology');
  console.log('=========================================================');
  console.log('  ONTOLOGY VERIFICATION REPORT');
  console.log('=========================================================');
  console.log(`  Directory: ${ontologyDir}`);
  console.log(`  Date: ${new Date().toISOString()}\n`);

  // Read all .js files
  let files;
  try {
    files = await readdir(ontologyDir);
  } catch (err) {
    console.error(`ERROR: Cannot read directory: ${err.message}`);
    process.exit(1);
  }

  const jsFiles = files.filter(f => f.endsWith('.js')).sort();
  results.totalFiles = 114;
  console.log(`  Found ${jsFiles.length} ontology files (expected 114)\n`);

  // Check which files are missing
  for (let i = 1; i <= 114; i++) {
    const fname = `${String(i).padStart(3, '0')}.js`;
    if (!jsFiles.includes(fname)) {
      results.filesMissing.push(fname);
    }
  }

  if (results.filesMissing.length > 0) {
    console.log(`  MISSING FILES (${results.filesMissing.length}):`);
    for (const f of results.filesMissing) {
      console.log(`    - ${f}`);
    }
    console.log();
  }

  // Load and process each file
  const allEntries = [];

  for (const fname of jsFiles) {
    const num = parseInt(fname.replace('.js', ''), 10);
    if (isNaN(num) || num < 1 || num > 114) continue;

    const filePath = path.join(ontologyDir, fname);
    const fileUrl = pathToFileURL(filePath).href;

    try {
      const mod = await import(fileUrl);
      const ontology = mod.default || mod.ONTOLOGY;

      if (!ontology) {
        results.filesWithLoadErrors.push({ file: fname, error: 'No default or ONTOLOGY export found' });
        continue;
      }

      const concepts = extractConcepts(ontology, num);
      results.totalConcepts += concepts.length;
      results.filesChecked++;

      for (const entry of concepts) {
        allEntries.push(entry);
      }
    } catch (err) {
      results.filesWithLoadErrors.push({ file: fname, error: err.message });
    }
  }

  console.log(`  Files loaded: ${results.filesChecked}`);
  console.log(`  Files with load errors: ${results.filesWithLoadErrors.length}`);
  console.log(`  Total concepts extracted: ${results.totalConcepts}\n`);

  if (results.filesWithLoadErrors.length > 0) {
    console.log('  FILES WITH LOAD ERRORS:');
    for (const { file, error } of results.filesWithLoadErrors) {
      console.log(`    - ${file}: ${error.substring(0, 100)}`);
    }
    console.log();
  }

  // Run checks
  console.log('---------------------------------------------------------');
  console.log('  Running checks...');
  console.log('---------------------------------------------------------\n');

  console.log('  [1/6] Structure check (meaning/explanation as {en, ur} objects)...');
  for (const entry of allEntries) checkStructure(entry);

  console.log('  [2/6] Verse reference check...');
  for (const entry of allEntries) checkVerseRef(entry);

  console.log('  [3/6] Urdu presence check...');
  for (const entry of allEntries) checkUrdu(entry);

  console.log('  [4/6] Arabic term check...');
  for (const entry of allEntries) checkArabicTerm(entry);

  console.log('  [5/6] API cross-reference (random sample of 10)...');
  await checkAPICrossReference(allEntries);

  console.log('  [6/6] Duplicate check...');
  checkDuplicates(allEntries);

  // ── Print Report ──
  console.log('\n=========================================================');
  console.log('  SUMMARY REPORT');
  console.log('=========================================================\n');

  console.log(`  Total files expected:    114`);
  console.log(`  Total files found:       ${jsFiles.length}`);
  console.log(`  Files missing:           ${results.filesMissing.length}`);
  console.log(`  Files loaded OK:         ${results.filesChecked}`);
  console.log(`  Files with load errors:  ${results.filesWithLoadErrors.length}`);
  console.log(`  Total concepts checked:  ${results.totalConcepts}`);
  console.log();

  // 1. Structure issues
  console.log('---------------------------------------------------------');
  console.log(`  1. STRUCTURAL ISSUES: ${results.structuralIssues.length}`);
  console.log('---------------------------------------------------------');
  if (results.structuralIssues.length === 0) {
    console.log('  None found.\n');
  } else {
    // Group by file
    const byFile = {};
    for (const issue of results.structuralIssues) {
      if (!byFile[issue.file]) byFile[issue.file] = [];
      byFile[issue.file].push(issue);
    }
    const affectedFiles = Object.keys(byFile).sort();
    console.log(`  Affected files: ${affectedFiles.length}\n`);
    for (const file of affectedFiles) {
      const issues = byFile[file];
      console.log(`  ${file} (${issues.length} issues):`);
      for (const iss of issues.slice(0, 5)) {
        console.log(`    - [${iss.category}][${iss.conceptIdx}] ${iss.field}: ${iss.issue}`);
      }
      if (issues.length > 5) {
        console.log(`    ... and ${issues.length - 5} more`);
      }
    }
    console.log();
  }

  // 2. Verse reference issues
  console.log('---------------------------------------------------------');
  console.log(`  2. INVALID VERSE REFERENCES: ${results.invalidVerseRefs.length}`);
  console.log('---------------------------------------------------------');
  if (results.invalidVerseRefs.length === 0) {
    console.log('  None found.\n');
  } else {
    for (const iss of results.invalidVerseRefs.slice(0, 20)) {
      console.log(`  ${iss.file} | ${iss.term.substring(0, 30)} | ref: ${iss.verseRef} | ${iss.reason}`);
    }
    if (results.invalidVerseRefs.length > 20) {
      console.log(`  ... and ${results.invalidVerseRefs.length - 20} more`);
    }
    console.log();
  }

  // 3. Urdu issues
  console.log('---------------------------------------------------------');
  console.log(`  3. URDU FIELD ISSUES: ${results.urduIssues.length}`);
  console.log('---------------------------------------------------------');
  if (results.urduIssues.length === 0) {
    console.log('  None found.\n');
  } else {
    // Group by issue type
    const byIssue = {};
    for (const iss of results.urduIssues) {
      if (!byIssue[iss.issue]) byIssue[iss.issue] = [];
      byIssue[iss.issue].push(iss);
    }
    for (const [issueType, issues] of Object.entries(byIssue)) {
      console.log(`\n  "${issueType}" (${issues.length} occurrences):`);
      // Group by file
      const byFile = {};
      for (const iss of issues) {
        if (!byFile[iss.file]) byFile[iss.file] = [];
        byFile[iss.file].push(iss);
      }
      const affectedFiles = Object.keys(byFile).sort();
      for (const file of affectedFiles.slice(0, 10)) {
        const fileIssues = byFile[file];
        console.log(`    ${file}: ${fileIssues.length} concept(s)`);
        for (const iss of fileIssues.slice(0, 3)) {
          console.log(`      - [${iss.field}] ${iss.term.substring(0, 40)} => "${iss.value.substring(0, 60)}"`);
        }
        if (fileIssues.length > 3) {
          console.log(`      ... and ${fileIssues.length - 3} more in this file`);
        }
      }
      if (affectedFiles.length > 10) {
        console.log(`    ... and ${affectedFiles.length - 10} more files`);
      }
    }
    console.log();
  }

  // 4. Arabic term issues
  console.log('---------------------------------------------------------');
  console.log(`  4. ARABIC TERM ISSUES: ${results.arabicTermIssues.length}`);
  console.log('---------------------------------------------------------');
  if (results.arabicTermIssues.length === 0) {
    console.log('  None found.\n');
  } else {
    for (const iss of results.arabicTermIssues.slice(0, 20)) {
      console.log(`  ${iss.file} | [${iss.category}][${iss.conceptIdx}] "${iss.term}" | ${iss.issue}`);
    }
    if (results.arabicTermIssues.length > 20) {
      console.log(`  ... and ${results.arabicTermIssues.length - 20} more`);
    }
    console.log();
  }

  // 5. API cross-reference
  console.log('---------------------------------------------------------');
  console.log(`  5. API CROSS-REFERENCE RESULTS: ${results.apiResults.length} checked`);
  console.log('---------------------------------------------------------');
  if (results.apiResults.length === 0) {
    console.log('  No results (API may be unreachable).\n');
  } else {
    const matched = results.apiResults.filter(r => r.matched);
    const mismatched = results.apiResults.filter(r => !r.matched);
    console.log(`  Matched:    ${matched.length}/${results.apiResults.length}`);
    console.log(`  Mismatched: ${mismatched.length}/${results.apiResults.length}\n`);
    for (const r of results.apiResults) {
      const icon = r.matched ? 'PASS' : 'FAIL';
      console.log(`  [${icon}] ${r.surah}:${r.ayah} | "${r.term.substring(0, 40)}" | ${r.detail}`);
    }
    console.log();
  }

  // 6. Duplicate check
  console.log('---------------------------------------------------------');
  console.log(`  6. DUPLICATES: ${results.duplicates.length}`);
  console.log('---------------------------------------------------------');
  if (results.duplicates.length === 0) {
    console.log('  None found.\n');
  } else {
    for (const dup of results.duplicates.slice(0, 20)) {
      console.log(`  ${dup.file} | [${dup.category}] "${dup.term.substring(0, 40)}" @ ${dup.verseRef}`);
    }
    if (results.duplicates.length > 20) {
      console.log(`  ... and ${results.duplicates.length - 20} more`);
    }
    console.log();
  }

  // ── Final Score ──
  const totalIssues =
    results.filesMissing.length +
    results.filesWithLoadErrors.length +
    results.structuralIssues.length +
    results.invalidVerseRefs.length +
    results.urduIssues.length +
    results.arabicTermIssues.length +
    results.duplicates.length;

  const apiFailures = results.apiResults.filter(r => !r.matched).length;

  console.log('=========================================================');
  console.log('  FINAL SCORE');
  console.log('=========================================================');
  console.log(`  Total issues found:      ${totalIssues}`);
  console.log(`  API mismatches:          ${apiFailures}`);
  console.log(`  Overall health:          ${totalIssues === 0 && apiFailures === 0 ? 'PERFECT' : totalIssues < 10 ? 'GOOD' : totalIssues < 50 ? 'NEEDS WORK' : 'CRITICAL'}`);
  console.log('=========================================================\n');

  // Exit with error code if issues found
  if (totalIssues > 0) {
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(2);
});
