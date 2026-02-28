/**
 * Fix syntax errors in treebank files caused by relationship insertion.
 * Two patterns to fix:
 * 1. Missing comma before 'relationships:' inside existing structure objects
 * 2. Missing comma before 'structure: {' when inserted after ']'
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const SURAHS_DIR = join(import.meta.dirname, '..', 'src', 'data', 'treebank', 'surahs');

const FILES_TO_FIX = [
  '033', '034', '035', '036',
  '076', '077', '078', '079', '080', '081',
  '082', '083', '084', '085', '086', '087'
];

for (const num of FILES_TO_FIX) {
  const filePath = join(SURAHS_DIR, `${num}.js`);
  let content = readFileSync(filePath, 'utf-8');
  let fixes = 0;

  // Pattern 1: explanation: "..."       relationships: [
  // Need comma after the closing quote before relationships
  // Match: any property value ending with " followed by whitespace then 'relationships:'
  content = content.replace(
    /(")\s+(relationships:\s*\[)/g,
    (match, quote, rels) => {
      fixes++;
      return `${quote},\n      ${rels}`;
    }
  );

  // Pattern 2: ]  (end of words array) followed by newline, then 'structure: {' without comma
  // The ] at end of words array needs a comma
  content = content.replace(
    /(\])\n(\s*structure:\s*\{)/g,
    (match, bracket, struct) => {
      fixes++;
      return `${bracket},\n${struct}`;
    }
  );

  // Pattern 3: structure object with relationships but missing closing brace properly
  // Fix: structure: { relationships: [...], } should become structure: { relationships: [...] },
  // Actually check if structure objects are properly closed

  // Pattern 4: } after relationships ] is on wrong line
  // Check for: ],\n}\n  },  (extra })
  content = content.replace(
    /(\s*\],\n)(\s*}\n)(\s*},)/g,
    (match, relsClose, extraBrace, ayahClose) => {
      fixes++;
      return `${relsClose}${extraBrace.replace('}', '    },')}`;
    }
  );

  writeFileSync(filePath, content, 'utf-8');
  console.log(`Fixed ${num}.js - ${fixes} fixes applied`);
}

console.log('\nDone! Verifying...');

// Verify
import { execSync } from 'child_process';
let errors = 0;
for (const num of FILES_TO_FIX) {
  const filePath = join(SURAHS_DIR, `${num}.js`);
  try {
    execSync(`node --check "${filePath}"`, { stdio: 'pipe' });
  } catch (e) {
    console.error(`Still has error: ${num}.js`);
    console.error(e.stderr?.toString().split('\n').slice(0, 3).join('\n'));
    errors++;
  }
}
console.log(`\nVerification: ${errors} files still have errors`);
