import { readFileSync } from 'fs';

const content = readFileSync('src/data/treebank/surahs/076.js', 'utf-8');

const ayahRegex = /(\d+):\s*\{[^}]*?(?:text|arabic):/g;
let match;
const ayahPositions = [];
while ((match = ayahRegex.exec(content)) !== null) {
  ayahPositions.push({ key: match[1], index: match.index });
}

console.log('Total ayahs found:', ayahPositions.length);

const ayahStart = ayahPositions[0].index;
const ayahEnd = ayahPositions[1].index;
const ayahContent = content.substring(ayahStart, ayahEnd);

console.log('Has structure:', ayahContent.includes('structure:'));
console.log('Has dependency:', ayahContent.includes('dependency:'));
console.log('Has relationships:', ayahContent.includes('relationships:'));

const wordsEnd = ayahContent.lastIndexOf('],');
console.log('Last ], at:', wordsEnd, 'of', ayahContent.length);

if (wordsEnd !== -1) {
  const afterWords = ayahContent.indexOf('\n', wordsEnd);
  console.log('Newline after ], at:', afterWords);
  console.log('Around ]:', JSON.stringify(ayahContent.substring(wordsEnd, Math.min(wordsEnd + 50, ayahContent.length))));
}

// Check the last ~100 chars of the ayah content
console.log('\nLast 100 chars:', JSON.stringify(ayahContent.substring(ayahContent.length - 100)));
