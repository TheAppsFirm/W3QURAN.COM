/**
 * Add relationships to treebank files using proper brace-counting approach.
 * This script reads each file, finds ayah boundaries and word arrays properly,
 * generates relationships from grammar data, and inserts them correctly.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const SURAHS_DIR = join(import.meta.dirname, '..', 'src', 'data', 'treebank', 'surahs');

// Process ALL 114 surahs - fill in any ayahs missing relationships
const FILES_TO_PROCESS = [];
for (let i = 1; i <= 114; i++) {
  FILES_TO_PROCESS.push(String(i).padStart(3, '0'));
}

// ---- Role Normalization ----
function normalizeRole(role) {
  const r = (role || '').toLowerCase().replace(/[\\']/g, '');
  return {
    isPreposition: r === 'preposition' || r === 'jarr' || r.includes('harf_jarr') || r.includes('harf-jarr') || r.includes('prepositional') || r.startsWith('jarr-majr') || r.startsWith('jarr_majr'),
    isSubject: r === 'subject' || r.includes('fail') || r.includes('naib-fail') || r.includes('naib_fail') || r.startsWith('subject'),
    isObject: r === 'object' || r === 'obj' || r.includes('mafool') || r.includes('mafol') || r.includes('direct object'),
    isPredicate: r === 'predicate' || r.includes('khabar') || r === 'pred' || r.startsWith('predicate'),
    isEmphasis: r === 'emphasis' || r.includes('tawkid') || r.includes('tawkeed') || r.includes('taukeed') || r.includes('emphatic'),
    isNegation: r === 'negation' || r.includes('nafi') || r.includes('nafy') || r.includes('nahi') || r.includes('nahy') || r.includes('negative') || r.includes('prohibition'),
    isGenitive: r === 'genitive' || r === 'majroor' || r === 'majrur' || r.includes('possessive') || r.includes('genitive'),
    isAttribute: r === 'attribute' || r.includes('sifah') || r.includes('sifa') || r === 'adjective' || r === 'sifat',
    isVerb: r === 'verb' || r.includes('verb') || r.startsWith('fil-') || r.startsWith('fil_') || r === 'fil' || r === 'imperative' || r === 'command' || r === 'amr',
    isRelative: r.includes('relative') || r.includes('sila') || r === 'rel' || r.includes('mawsul') || r.includes('mawsool'),
    isSubjectInna: r.includes('ism_inna') || r.includes('ism-inna') || r.includes('inna_ism') || r.includes('inna-ism') || r.includes('ism-anna') || r.includes('ism_anna') || r.includes('ism-la') || r.includes('ism-lakinna') || r.includes('ism_laysa') || r.includes('ism-laysa') || r.includes('ism_kana') || r.includes('ism-kana') || r.includes('ism-kaana') || r.includes('ism_layta'),
    isPredicateInna: r.includes('khabar_inna') || r.includes('khabar-inna') || r.includes('khabar-anna') || r.includes('khabar_anna') || r.includes('khabar-kana') || r.includes('khabar_kana') || r.includes('khabar-kaana') || r.includes('khabar-lakinna') || r.includes('khabar-laysa') || r.includes('khabar_laysa') || r.includes('predicate_laysa'),
    isMubtada: r.includes('mubtada') || r === 'subj',
    isBadal: r.includes('badal') || r === 'apposition',
    isConditional: r === 'conditional' || r === 'protasis' || r.includes('shart'),
    isVocative: r === 'vocative' || r.includes('nida') || r.includes('munada'),
    isMudaf: (r.includes('mudaf') && !r.includes('ilayh')) || (r.includes('mudhaf') && !r.includes('ilayh')) || r === 'construct',
    isMudafIlayh: (r.includes('mudaf') && r.includes('ilayh')) || (r.includes('mudhaf') && r.includes('ilayh')),
    isCircumstantial: r === 'circumstantial' || r.includes('haal') || r === 'hal' || r.includes('adverb of state') || r.includes('adverb of manner'),
    isOath: r === 'oath' || r.includes('qasam') || r.includes('oath'),
    isMafoolMutlaq: r.includes('mafool_mutlaq') || r.includes('mafool-mutlaq') || r.includes('cognate accusative'),
    isZarf: r === 'zarf' || r.startsWith('zarf') || r === 'temporal' || r === 'locative' || r.includes('dharf') || r === 'adverbial',
    isAtf: r === 'atf' || r === 'matoof' || r === 'matuf' || r.includes('harf-atf') || r.includes('harf_atf'),
    isTamyeez: r.includes('tamyeez') || r.includes('tamyiz') || r.includes('specification'),
    isJawab: r.includes('jawab') || r.includes('jawaab') || r === 'apodosis',
    isIsm: r === 'ism' || r === 'noun',
    raw: r,
  };
}

function hasPos(posStr, tag) {
  return posStr.split(/[\+,\s]+/).some(p => p === tag);
}
function isNoun(posStr) { return hasPos(posStr, 'N') || hasPos(posStr, 'PN'); }
function isVerb(posStr) { return hasPos(posStr, 'V'); }

// ---- Relationship Generation ----
function generateRelationships(words) {
  if (!words || words.length < 2) return [];
  const rels = [];
  const added = new Set();

  function addRel(from, to, label) {
    const key = `${from}:${to}:${label}`;
    if (!added.has(key)) { added.add(key); rels.push({ from, to, label }); }
  }

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const pos = (w.posTag || '').toUpperCase();
    const nr = normalizeRole(w.grammarRole);

    // Preposition + Next (POS-based)
    if ((pos === 'PREP' || pos === 'P' || nr.isPreposition) && !isNoun(pos) && i + 1 < words.length) {
      addRel(w.position, words[i + 1].position, 'جار + مجرور');
    }

    // Preposition role + genitive/object
    if (nr.isPreposition && i + 1 < words.length) {
      const nnr = normalizeRole(words[i + 1].grammarRole);
      if (nnr.isGenitive || nnr.isObject) {
        addRel(w.position, words[i + 1].position, 'جار + مجرور');
      }
    }

    // Verb + subject/object
    if ((isVerb(pos) || nr.isVerb) && !hasPos(pos, 'VOC') && !hasPos(pos, 'CONJ')) {
      for (let j = i + 1; j < Math.min(i + 4, words.length); j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isSubject && !nnr.isSubjectInna) addRel(w.position, words[j].position, 'فعل + فاعل');
        if (nnr.isObject) addRel(w.position, words[j].position, 'فعل + مفعول به');
      }
    }

    // CONJ+V → عطف to previous verb
    if (hasPos(pos, 'CONJ') && isVerb(pos)) {
      for (let j = i - 1; j >= 0; j--) {
        const pPos = (words[j].posTag || '').toUpperCase();
        if (isVerb(pPos)) { addRel(words[j].position, w.position, 'عطف'); break; }
      }
    }

    // Conjunction role
    if (nr.raw === 'conjunction' || nr.raw === 'matoof') {
      if (i + 1 < words.length) {
        for (let j = i - 1; j >= 0; j--) {
          const pRole = (words[j].grammarRole || '').toLowerCase();
          if (pRole !== 'conjunction' && pRole !== 'matoof') {
            addRel(words[j].position, words[i + 1].position, 'عطف');
            break;
          }
        }
      }
    }

    // Mubtada + Khabar / Subject + Predicate
    if (nr.isMubtada || (nr.isSubject && !nr.isSubjectInna)) {
      for (let j = i + 1; j < words.length; j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isPredicate || nnr.isPredicateInna) {
          addRel(w.position, words[j].position, 'مبتدأ + خبر');
          break;
        }
      }
    }

    // Emphasis/Inna + subject
    if (nr.isEmphasis || pos === 'ACC' || pos === 'EMPH' || pos.includes('EMPH')) {
      for (let j = i + 1; j < Math.min(i + 3, words.length); j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isSubjectInna || nnr.isSubject) {
          addRel(w.position, words[j].position, 'توکید');
          break;
        }
      }
    }

    // Ism Inna + Khabar Inna
    if (nr.isSubjectInna) {
      for (let j = i + 1; j < words.length; j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isPredicateInna || nnr.isPredicate) {
          addRel(w.position, words[j].position, 'مبتدأ + خبر');
          break;
        }
      }
    }

    // Negation + Verb
    if ((pos === 'NEG' || hasPos(pos, 'NEG') || nr.isNegation) && !isVerb(pos) && i + 1 < words.length) {
      const nPos = (words[i + 1].posTag || '').toUpperCase();
      const nnr = normalizeRole(words[i + 1].grammarRole);
      if (isVerb(nPos) || nnr.isVerb) addRel(w.position, words[i + 1].position, 'نفی + فعل');
    }

    // Relative + Verb
    if (pos === 'REL' || nr.isRelative) {
      if (i + 1 < words.length) {
        const nPos = (words[i + 1].posTag || '').toUpperCase();
        const nnr = normalizeRole(words[i + 1].grammarRole);
        if (isVerb(nPos) || nnr.isVerb) addRel(w.position, words[i + 1].position, 'موصول + صلة');
      }
    }

    // Noun + Attribute/Adjective
    if (isNoun(pos) && !hasPos(pos, 'PRON') && i + 1 < words.length) {
      const nPos = (words[i + 1].posTag || '').toUpperCase();
      const nnr = normalizeRole(words[i + 1].grammarRole);
      if (hasPos(nPos, 'ADJ') || nnr.isAttribute) addRel(w.position, words[i + 1].position, 'موصوف + صفت');
    }

    // Noun + genitive (mudaf + mudaf ilayh)
    if (isNoun(pos) && !hasPos(pos, 'PRON') && !nr.isPreposition && i + 1 < words.length) {
      const nnr = normalizeRole(words[i + 1].grammarRole);
      if (nnr.isGenitive && !nr.isGenitive) addRel(w.position, words[i + 1].position, 'مضاف + مضاف إليه');
    }

    // Mudaf + Mudaf Ilayh
    if (nr.isMudaf && i + 1 < words.length) {
      const nnr = normalizeRole(words[i + 1].grammarRole);
      if (nnr.isMudafIlayh || nnr.isGenitive || (words[i + 1].case || '').toLowerCase() === 'majroor') {
        addRel(w.position, words[i + 1].position, 'مضاف + مضاف إليه');
      }
    }

    // Mudaf Ilayh reverse check
    if (nr.isMudafIlayh && i > 0) {
      const pw = words[i - 1];
      const pPos = (pw.posTag || '').toUpperCase();
      const isStandalonePrep = (pPos === 'PREP' || pPos === 'P') && !isNoun(pPos);
      if (!isStandalonePrep) addRel(pw.position, w.position, 'مضاف + مضاف إليه');
    }

    // Majrur reverse check
    if ((nr.raw === 'majrur' || nr.raw === 'majroor') && i > 0) {
      const pPos = (words[i - 1].posTag || '').toUpperCase();
      if (hasPos(pPos, 'P') || hasPos(pPos, 'PREP')) addRel(words[i - 1].position, w.position, 'جار + مجرور');
    }

    // Badal/Apposition
    if (nr.isBadal && i > 0) addRel(words[i - 1].position, w.position, 'بدل');

    // Vocative
    if (pos === 'VOC' || nr.isVocative) {
      if (i + 1 < words.length) {
        const nPos = (words[i + 1].posTag || '').toUpperCase();
        const nnr = normalizeRole(words[i + 1].grammarRole);
        if (nnr.isVocative || isNoun(nPos) || nPos === 'VOC') addRel(w.position, words[i + 1].position, 'نداء');
      }
    }

    // Conditional + Verb
    if (pos === 'COND' || hasPos(pos, 'COND') || nr.isConditional) {
      if (i + 1 < words.length) {
        const nPos = (words[i + 1].posTag || '').toUpperCase();
        const nnr = normalizeRole(words[i + 1].grammarRole);
        if (isVerb(nPos) || nnr.isVerb) addRel(w.position, words[i + 1].position, 'شرط + فعل');
      }
    }

    // Circumstantial (حال)
    if (nr.isCircumstantial && i > 0) {
      for (let j = i - 1; j >= Math.max(0, i - 3); j--) {
        const pPos = (words[j].posTag || '').toUpperCase();
        const pnr = normalizeRole(words[j].grammarRole);
        if (isVerb(pPos) || pnr.isVerb) { addRel(words[j].position, w.position, 'حال'); break; }
      }
    }

    // Oath + next word
    if (nr.isOath && i + 1 < words.length) {
      addRel(w.position, words[i + 1].position, 'قسم');
    }

    // Mafool Mutlaq → nearest preceding verb
    if (nr.isMafoolMutlaq && i > 0) {
      for (let j = i - 1; j >= Math.max(0, i - 4); j--) {
        const pPos = (words[j].posTag || '').toUpperCase();
        const pnr = normalizeRole(words[j].grammarRole);
        if (isVerb(pPos) || pnr.isVerb) { addRel(words[j].position, w.position, 'مفعول مطلق'); break; }
      }
    }

    // Zarf → nearest verb (ظرف)
    if (nr.isZarf) {
      for (let j = i - 1; j >= Math.max(0, i - 4); j--) {
        const pPos = (words[j].posTag || '').toUpperCase();
        const pnr = normalizeRole(words[j].grammarRole);
        if (isVerb(pPos) || pnr.isVerb) { addRel(words[j].position, w.position, 'ظرف'); break; }
      }
      if (!rels.some(r => r.to === w.position)) {
        // Try forward
        for (let j = i + 1; j < Math.min(i + 3, words.length); j++) {
          const nPos = (words[j].posTag || '').toUpperCase();
          const nnr = normalizeRole(words[j].grammarRole);
          if (isVerb(nPos) || nnr.isVerb) { addRel(w.position, words[j].position, 'ظرف'); break; }
        }
      }
    }

    // Atf (عطف) - conjunction linking words
    if (nr.isAtf && i + 1 < words.length && i > 0) {
      for (let j = i - 1; j >= Math.max(0, i - 3); j--) {
        const pnr = normalizeRole(words[j].grammarRole);
        if (!pnr.isAtf) { addRel(words[j].position, words[i + 1].position, 'عطف'); break; }
      }
    }

    // Tamyeez (تمييز) → preceding word
    if (nr.isTamyeez && i > 0) {
      addRel(words[i - 1].position, w.position, 'تمييز');
    }

    // Jawab Shart → connect to conditional
    if (nr.isJawab && i > 0) {
      for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
        const pnr = normalizeRole(words[j].grammarRole);
        const pPos = (words[j].posTag || '').toUpperCase();
        if (pnr.isConditional || hasPos(pPos, 'COND')) { addRel(words[j].position, w.position, 'شرط + جواب'); break; }
      }
    }

    // Ism/Noun: if next is also ism/noun with genitive, treat as idafa
    if ((nr.isIsm || (isNoun(pos) && !hasPos(pos, 'PRON'))) && i + 1 < words.length) {
      const nnr = normalizeRole(words[i + 1].grammarRole);
      const nPos = (words[i + 1].posTag || '').toUpperCase();
      if (nnr.isGenitive || (words[i + 1].case || '').toLowerCase() === 'majroor') {
        addRel(w.position, words[i + 1].position, 'مضاف + مضاف إليه');
      } else if (nnr.isAttribute || hasPos(nPos, 'ADJ')) {
        addRel(w.position, words[i + 1].position, 'موصوف + صفت');
      }
    }
  }

  // Fallback: if no relationships generated for multi-word ayah, link sequential pairs
  if (rels.length === 0 && words.length >= 2) {
    for (let i = 0; i < words.length - 1; i++) {
      addRel(words[i].position, words[i + 1].position, 'تعلق');
    }
  }

  return rels;
}

// ---- Proper brace-counting to find structure boundaries ----

function findMatchingClose(str, openIdx, openChar = '{', closeChar = '}') {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === openChar) depth++;
    else if (str[i] === closeChar) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/**
 * Find the actual "words: [...]" array boundaries within an ayah block.
 * Uses proper bracket counting to find the matching ] for the words [ opener.
 */
function findWordsArrayBounds(ayahContent) {
  const wordsIdx = ayahContent.indexOf('words:');
  if (wordsIdx === -1) return null;

  // Find the opening [
  const openBracket = ayahContent.indexOf('[', wordsIdx);
  if (openBracket === -1) return null;

  // Find matching ]
  const closeBracket = findMatchingClose(ayahContent, openBracket, '[', ']');
  if (closeBracket === -1) return null;

  return { start: openBracket, end: closeBracket };
}

/**
 * Extract word data from the words array content.
 */
function extractWords(wordsContent) {
  const words = [];

  // Find each word object by looking for { ... } at the top level
  let depth = 0;
  let blockStart = -1;

  for (let i = 0; i < wordsContent.length; i++) {
    if (wordsContent[i] === '{') {
      if (depth === 0) blockStart = i;
      depth++;
    } else if (wordsContent[i] === '}') {
      depth--;
      if (depth === 0 && blockStart !== -1) {
        const block = wordsContent.substring(blockStart, i + 1);
        const word = parseWordBlock(block);
        if (word) words.push(word);
        blockStart = -1;
      }
    }
  }

  return words;
}

function parseWordBlock(block) {
  // Extract position
  let position = 0;
  const posMatch = block.match(/position:\s*(\d+)/);
  if (posMatch) {
    position = parseInt(posMatch[1]);
  } else {
    // Try id: 'surah:ayah:word'
    const idMatch = block.match(/id:\s*['"](\d+:\d+:(\d+))['"]/);
    if (idMatch) position = parseInt(idMatch[2]);
  }
  if (!position) return null;

  // Extract posLabel
  let posTag = '';
  const posLabelMatch = block.match(/posLabel:\s*['"]([^'"]+)['"]/);
  if (posLabelMatch) {
    posTag = posLabelMatch[1];
  } else {
    // Try pos array
    const posArrMatch = block.match(/pos:\s*\[([^\]]+)\]/);
    if (posArrMatch) {
      posTag = posArrMatch[1].replace(/['"]/g, '').trim();
    } else {
      // Try pos string
      const posStrMatch = block.match(/pos:\s*['"]([^'"]+)['"]/);
      if (posStrMatch) posTag = posStrMatch[1];
    }
  }

  // Extract grammarRole
  let grammarRole = '';
  const roleMatch = block.match(/grammarRole:\s*['"]([^'"]+)['"]/);
  if (roleMatch) grammarRole = roleMatch[1];

  // Extract case
  let caseVal = '';
  const caseMatch = block.match(/case:\s*['"]([^'"]+)['"]/);
  if (caseMatch) caseVal = caseMatch[1];

  return { position, posTag, grammarRole, case: caseVal };
}

/**
 * Process a single file by properly finding ayah boundaries and word arrays.
 */
function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');

  // Don't skip files that already have some relationships — we process per-ayah

  // Find all ayah number keys: digits followed by : {
  // We need to find each ayah object and its boundaries
  const ayahRegex = /(?:^|\n)\s*(\d+):\s*\{/g;
  let match;
  const ayahStarts = [];

  while ((match = ayahRegex.exec(content)) !== null) {
    const key = parseInt(match[1]);
    // Skip things like surahId: 76 — only match at the right indentation level
    const lineStart = content.lastIndexOf('\n', match.index) + 1;
    const indent = match.index - lineStart;
    // Ayah keys are typically at indent 2 (2 spaces)
    if (indent <= 4 && key >= 1 && key <= 300) {
      const braceIdx = content.indexOf('{', match.index + match[0].indexOf(':'));
      ayahStarts.push({ key, braceIdx });
    }
  }

  if (ayahStarts.length === 0) {
    console.log(`  ${filePath.split('/').pop()} - no ayahs found`);
    return;
  }

  // For each ayah, find its boundary (matching })
  const insertions = [];

  for (const ayah of ayahStarts) {
    const ayahClose = findMatchingClose(content, ayah.braceIdx);
    if (ayahClose === -1) continue;

    const ayahContent = content.substring(ayah.braceIdx, ayahClose + 1);

    // Skip if already has non-empty relationships
    if (ayahContent.includes('relationships:') && !ayahContent.match(/relationships:\s*\[\s*\]/)) continue;

    // Find words array
    const wordsBounds = findWordsArrayBounds(ayahContent);
    if (!wordsBounds) continue;

    const wordsContent = ayahContent.substring(wordsBounds.start + 1, wordsBounds.end);
    const words = extractWords(wordsContent);

    if (words.length < 2) continue;

    const relationships = generateRelationships(words);
    if (relationships.length === 0) continue;

    // Determine insertion point and format
    // Check if there's an empty relationships: [] to replace
    const emptyRelsMatch = ayahContent.match(/relationships:\s*\[\s*\]/);
    const structureIdx = ayahContent.indexOf('structure:');

    if (emptyRelsMatch) {
      // Replace empty relationships: [] with populated array
      const emptyStart = ayah.braceIdx + emptyRelsMatch.index;
      const emptyEnd = emptyStart + emptyRelsMatch[0].length;
      const indent = '        ';
      const relsStr = relationships.map(r =>
        `${indent}{ from: ${r.from}, to: ${r.to}, label: '${r.label}' }`
      ).join(',\n');
      const replacement = `relationships: [\n${relsStr}\n      ]`;
      insertions.push({
        pos: emptyStart,
        endPos: emptyEnd,
        text: replacement,
      });
    } else if (structureIdx !== -1 && structureIdx > wordsBounds.end) {
      // Has a structure: block after words - insert relationships inside it
      const structBraceIdx = ayahContent.indexOf('{', structureIdx);
      if (structBraceIdx !== -1) {
        const structClose = findMatchingClose(ayahContent, structBraceIdx);
        if (structClose !== -1) {
          // Insert before closing } of structure
          const insertPos = ayah.braceIdx + structClose;
          const indent = '      ';
          const relsStr = relationships.map(r =>
            `${indent}  { from: ${r.from}, to: ${r.to}, label: '${r.label}' }`
          ).join(',\n');
          const block = ` relationships: [\n${relsStr}\n${indent}],\n${indent.substring(2)}`;
          // Check if we need a comma before
          const beforeClose = ayahContent.substring(structBraceIdx + 1, structClose).trimEnd();
          const needsComma = beforeClose.length > 0 && !beforeClose.endsWith(',');
          insertions.push({
            pos: insertPos,
            text: (needsComma ? ',' : '') + '\n' + '      ' + block,
          });
        }
      }
    } else {
      // No structure block — insert one after the words array
      // Strategy: replace from ] to the newline with ],\n    structure: {...},
      const wordsEndInFile = ayah.braceIdx + wordsBounds.end;
      // The ] character is at wordsEndInFile

      // Find the next newline after ]
      let nextNewline = content.indexOf('\n', wordsEndInFile);
      if (nextNewline === -1) nextNewline = wordsEndInFile + 1;

      const indent = '      ';
      const relsStr = relationships.map(r =>
        `${indent}{ from: ${r.from}, to: ${r.to}, label: '${r.label}' }`
      ).join(',\n');

      // Replace everything from ] to the newline with ],\nstructure block
      const replacement = `],\n    structure: {\n      relationships: [\n${relsStr}\n      ],\n    },`;

      // We replace from the ] character to the newline
      insertions.push({
        pos: wordsEndInFile,
        endPos: nextNewline,
        text: replacement,
      });
    }
  }

  if (insertions.length === 0) {
    console.log(`  ${filePath.split('/').pop()} - 0 ayahs updated (no relationships generated)`);
    return;
  }

  // Apply insertions in reverse order (highest position first)
  insertions.sort((a, b) => b.pos - a.pos);
  for (const ins of insertions) {
    if (ins.endPos !== undefined) {
      // Replacement: replace from pos to endPos
      content = content.substring(0, ins.pos) + ins.text + content.substring(ins.endPos);
    } else {
      // Pure insertion
      content = content.substring(0, ins.pos) + ins.text + content.substring(ins.pos);
    }
  }

  const ayahCount = insertions.length;
  writeFileSync(filePath, content, 'utf-8');
  console.log(`  ${filePath.split('/').pop()} - ${ayahCount} ayahs updated`);
}

// ---- Main ----
console.log('Processing files...\n');

for (const num of FILES_TO_PROCESS) {
  const filePath = join(SURAHS_DIR, `${num}.js`);
  try {
    processFile(filePath);
  } catch (err) {
    console.error(`Error processing ${num}.js:`, err.message);
  }
}

console.log('\nVerifying syntax...');

import { execSync } from 'child_process';
let errors = 0;
for (const num of FILES_TO_PROCESS) {
  const filePath = join(SURAHS_DIR, `${num}.js`);
  try {
    execSync(`node --check "${filePath}"`, { stdio: 'pipe' });
  } catch (e) {
    console.error(`  SYNTAX ERROR in ${num}.js:`);
    console.error('  ' + e.stderr?.toString().split('\n').slice(0, 3).join('\n  '));
    errors++;
  }
}

if (errors === 0) {
  console.log('All files pass syntax check!');
} else {
  console.log(`\n${errors} files have syntax errors.`);
}
