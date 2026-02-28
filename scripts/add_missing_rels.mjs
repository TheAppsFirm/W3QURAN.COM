/**
 * Add missing structure.relationships to ayahs that don't have them.
 * Also tries to generate relationships from word POS data.
 *
 * Handles two cases:
 * 1. Ayahs with no `structure:` block at all -> adds one
 * 2. Ayahs with empty `relationships: []` -> tries to populate
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const SURAHS_DIR = 'src/data/treebank/surahs';

function guessPOS(arabic, en) {
  en = (en || '').toLowerCase();
  if (['فِي', 'مِنْ', 'مِن', 'مِّنْ', 'إِلَىٰ', 'إِلَى', 'عَلَىٰ', 'عَلَى', 'عَنْ'].includes(arabic)) return 'PREP';
  if (['وَ', 'ثُمَّ', 'أَوْ', 'فَ', 'بَلْ'].includes(arabic)) return 'CONJ';
  if (['لَا', 'لَمْ', 'لَن', 'مَا'].includes(arabic) && (en.includes('not') || en.includes('no '))) return 'NEG';
  if (['إِنَّ', 'أَنَّ', 'إِنَّمَا'].includes(arabic)) return 'PART';
  if (['الَّذِي', 'الَّذِينَ', 'الَّتِي'].includes(arabic)) return 'REL';
  if (['هُوَ', 'هِيَ', 'هُمْ', 'أَنتَ', 'أَنتُمْ', 'أَنَا', 'نَحْنُ'].includes(arabic)) return 'PRON';
  if (arabic === 'يَا') return 'VOC';
  if (en.startsWith('he ') || en.startsWith('they ') || en.endsWith('ed') || en.endsWith('ing')) return 'V';
  if (en.includes('all-') || en.includes('most ') || en.endsWith('ful') || en.endsWith('ous')) return 'ADJ';
  return 'N';
}

function buildRelationships(posTags) {
  const rels = [];
  for (let i = 0; i < posTags.length - 1; i++) {
    const curr = posTags[i], next = posTags[i + 1];
    if (curr === 'V' && next === 'N') rels.push({ from: i+1, to: i+2, label: 'فعل + فاعل' });
    if (curr === 'PREP' && next === 'N') rels.push({ from: i+1, to: i+2, label: 'جار + مجرور' });
    if (curr === 'N' && next === 'ADJ') rels.push({ from: i+1, to: i+2, label: 'موصوف + صفت' });
    if (curr === 'REL' && next === 'V') rels.push({ from: i+1, to: i+2, label: 'موصول + صلة' });
    if (curr === 'NEG' && next === 'V') rels.push({ from: i+1, to: i+2, label: 'نفی + فعل' });
  }
  return rels;
}

// Extract POS from word objects in the file
function extractWordPOS(ayahBlock) {
  const posTags = [];
  // Match pos: ['N'] or pos: "N" or pos: ['V', 'N']
  const posArrayMatch = ayahBlock.matchAll(/pos:\s*\[['"](\w+)['"]/g);
  for (const m of posArrayMatch) posTags.push(m[1]);
  if (posTags.length > 0) return posTags;

  // Try pos: "N" format
  const posStringMatch = ayahBlock.matchAll(/pos:\s*"(\w+)"/g);
  for (const m of posStringMatch) posTags.push(m[1]);
  if (posTags.length > 0) return posTags;

  // Try to guess from arabic + meaning
  const arabicWords = [...ayahBlock.matchAll(/arabic:\s*["']([^"']+)["']/g)];
  const enMeanings = [...ayahBlock.matchAll(/(?:meaning:\s*\{[^}]*en:\s*["']([^"']+)["']|meaning:\s*["']([^"']+)["'])/g)];

  for (let i = 0; i < arabicWords.length; i++) {
    const ar = arabicWords[i][1];
    const en = enMeanings[i] ? (enMeanings[i][1] || enMeanings[i][2]) : '';
    posTags.push(guessPOS(ar, en));
  }

  return posTags;
}

function processFile(surahNum) {
  const padded = String(surahNum).padStart(3, '0');
  const filePath = `${SURAHS_DIR}/${padded}.js`;
  let content = readFileSync(filePath, 'utf-8');
  let changes = 0;

  // Find ayahs that have words but no relationships
  const ayahRegex = /^\s{2,4}(\d+):\s*\{/gm;
  let match;
  const ayahPositions = [];

  while ((match = ayahRegex.exec(content)) !== null) {
    ayahPositions.push({ num: parseInt(match[1]), pos: match.index });
  }

  // Process in reverse order so positions stay valid
  for (let i = ayahPositions.length - 1; i >= 0; i--) {
    const ayah = ayahPositions[i];
    const start = ayah.pos;
    const end = i < ayahPositions.length - 1 ? ayahPositions[i + 1].pos : content.indexOf('};', start);
    const block = content.substring(start, end);

    // Skip if already has relationships
    if (block.includes('relationships:')) continue;

    // Skip if no words array
    if (!block.includes('words:')) continue;

    // Extract POS tags from the words
    const posTags = extractWordPOS(block);
    if (posTags.length === 0) continue;

    // Generate relationships
    const rels = buildRelationships(posTags);
    const relsStr = rels.map(r => `{ from: ${r.from}, to: ${r.to}, label: '${r.label}' }`).join(', ');

    // Find the closing of words array "]" and add structure after it
    // Look for the pattern: words: [...]\n  }  or  words: [...]  }
    // We need to add structure: { relationships: [...] } before the closing }

    // Find the last ] in the block (closing words array)
    const wordsStart = block.indexOf('words:');
    if (wordsStart < 0) continue;

    // Find the closing of the ayah entry
    // The ayah closes with }, or } at the same indent level
    const closingMatch = block.match(/\n\s{2,4}\}/);
    if (!closingMatch) {
      // Try inline format: ..., words: [...] }
      const inlineClose = block.lastIndexOf('}');
      if (inlineClose > wordsStart) {
        const structStr = `, structure: { relationships: [${relsStr}] }`;
        const insertPos = start + inlineClose;
        content = content.substring(0, insertPos) + structStr + content.substring(insertPos);
        changes++;
      }
      continue;
    }

    // Multi-line format - insert before the closing }
    const closingPos = start + closingMatch.index;
    const indent = '    ';
    const structStr = `\n${indent}structure: {\n${indent}  relationships: [${relsStr}],\n${indent}},`;

    // Check if we need a comma after the preceding line
    const lineBeforeClose = content.substring(content.lastIndexOf('\n', closingPos - 1) + 1, closingPos).trim();
    const needsComma = lineBeforeClose && !lineBeforeClose.endsWith(',') && !lineBeforeClose.endsWith('{');

    const insertion = (needsComma ? ',' : '') + structStr;
    content = content.substring(0, closingPos) + insertion + content.substring(closingPos);
    changes++;
  }

  if (changes > 0) {
    writeFileSync(filePath, content);
    try {
      execSync(`node --check "${filePath}"`, { timeout: 5000 });
      console.log(`  [${padded}] Added ${changes} relationship blocks ✓`);
      return changes;
    } catch (e) {
      // Revert on syntax error
      console.error(`  [${padded}] Syntax error! Reverting...`);
      // Read original
      try {
        execSync(`git checkout HEAD -- "${filePath}"`, { timeout: 5000 });
      } catch (e2) {
        console.error(`  [${padded}] Could not revert!`);
      }
      return 0;
    }
  }

  return 0;
}

async function main() {
  console.log('Adding missing relationship blocks to all surahs...\n');
  let totalAdded = 0;

  for (let s = 1; s <= 114; s++) {
    totalAdded += processFile(s);
  }

  console.log(`\nTotal relationship blocks added: ${totalAdded}`);
}

main().catch(console.error);
