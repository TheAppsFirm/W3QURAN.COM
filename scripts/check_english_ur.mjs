import { readFileSync } from 'fs';

const file = process.argv[2] || './src/data/treebank/ontology/037.js';
const content = readFileSync(file, 'utf8');
const matches = content.match(/ur:\s*"[^"]+"/g) || [];
const arabicRange = /[\u0600-\u06FF]/;
const englishOnly = matches.filter(m => {
  const val = m.match(/ur:\s*"([^"]+)"/)?.[1] || '';
  return !arabicRange.test(val);
});
console.log('Total ur: fields:', matches.length);
console.log('English-only ur: fields:', englishOnly.length);
if (englishOnly.length > 0) {
  englishOnly.forEach(e => console.log('  ', e.substring(0, 100)));
}
