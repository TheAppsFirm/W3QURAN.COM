/**
 * Script to add posLabel field to all words in treebank files
 * Run with: node src/data/treebank/add-pos-labels.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const surahsDir = path.join(__dirname, 'surahs');

// Get all .js files in the surahs directory
const files = fs.readdirSync(surahsDir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(surahsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let matchCount = 0;

  // Pattern 1: Multi-line format - pos: ['...'], followed by newline and whitespace, then root: or meaning:
  const multiLineRegex = /pos: \[([^\]]+)\],\n(\s+)(?!posLabel:)(root:|meaning:)/g;
  content = content.replace(multiLineRegex, (match, posContent, whitespace, nextProp) => {
    matchCount++;
    const posValues = posContent.match(/'([^']+)'/g);
    if (!posValues) return match;
    const posLabel = posValues.map(v => v.replace(/'/g, '')).join('+');
    return `pos: [${posContent}],\n${whitespace}posLabel: '${posLabel}',\n${whitespace}${nextProp}`;
  });

  // Pattern 2: Single-line compact format - pos: ['...'], root: or pos: ['...'], meaning:
  // But NOT if posLabel: already follows
  const singleLineRegex = /pos: \[([^\]]+)\], (?!posLabel:)(root:|meaning:)/g;
  content = content.replace(singleLineRegex, (match, posContent, nextProp) => {
    matchCount++;
    const posValues = posContent.match(/'([^']+)'/g);
    if (!posValues) return match;
    const posLabel = posValues.map(v => v.replace(/'/g, '')).join('+');
    return `pos: [${posContent}], posLabel: '${posLabel}', ${nextProp}`;
  });

  if (matchCount > 0) {
    fs.writeFileSync(filePath, content);
    console.log(`${file}: Added ${matchCount} posLabel fields`);
  } else {
    console.log(`${file}: No changes needed (posLabels already present)`);
  }
});

console.log('\nDone! All files processed.');
