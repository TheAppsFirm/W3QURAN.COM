/**
 * Script to add relationships arrays to treebank files.
 * Reads grammar annotations from each word and creates authentic relationships.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const SURAHS_DIR = join(import.meta.dirname, '..', 'src', 'data', 'treebank', 'surahs');

// Files to process - remaining surahs that still have 0 relationships
const FILES_TO_PROCESS = [
  '037', '038', '039', '040'
];

/**
 * Analyze words and generate relationships based on grammar annotations.
 * ONLY creates relationships that are directly supported by existing annotations.
 */
function generateRelationships(words) {
  if (!words || words.length < 2) return [];

  const relationships = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const pos = word.posTag || word.posLabel || (word.pos ? word.pos.join('+') : '');
    const role = (word.grammarRole || '').toLowerCase();
    const caseVal = (word.case || '').toLowerCase();

    // Look ahead for relationships
    for (let j = i + 1; j < words.length; j++) {
      const nextWord = words[j];
      const nextPos = nextWord.posTag || nextWord.posLabel || (nextWord.pos ? nextWord.pos.join('+') : '');
      const nextRole = (nextWord.grammarRole || '').toLowerCase();
      const nextCase = (nextWord.case || '').toLowerCase();

      // 1. مضاف + مضاف إليه (possessive/idafa)
      if ((role.includes('mudaf') && !role.includes('ilayh')) &&
          (nextRole.includes('mudaf') && nextRole.includes('ilayh'))) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'مضاف + مضاف إليه' });
        continue;
      }
      if (role.includes('mudaf') && !role.includes('ilayh') && j === i + 1 &&
          (nextCase === 'majroor' || nextCase.includes('genitive') || nextRole.includes('genitive'))) {
        // mudaf followed by genitive
        if (!relationships.find(r => r.from === word.position && r.to === nextWord.position)) {
          relationships.push({ from: word.position, to: nextWord.position, label: 'مضاف + مضاف إليه' });
        }
        continue;
      }

      // 2. فعل + فاعل (verb + subject)
      if ((pos.includes('V') || role.includes('verb')) &&
          !pos.includes('PREP') && !pos.includes('NEG') && !pos.includes('CONJ') &&
          (nextRole.includes('fa\'il') || nextRole.includes('subject') || nextRole.includes('فاعل'))) {
        if (j === i + 1 || (j === i + 2 && words[i+1] && (words[i+1].posTag || words[i+1].posLabel || '').includes('PREP'))) {
          relationships.push({ from: word.position, to: nextWord.position, label: 'فعل + فاعل' });
        }
        continue;
      }

      // 3. فعل + مفعول به (verb + direct object)
      if ((pos.includes('V') || role.includes('verb')) &&
          !pos.includes('PREP') && !pos.includes('NEG') &&
          (nextRole.includes('maf\'ul') || nextRole.includes('object') && !nextRole.includes('prep') ||
           nextRole.includes('accusative') && nextPos.includes('N'))) {
        if (j <= i + 2) {
          relationships.push({ from: word.position, to: nextWord.position, label: 'فعل + مفعول به' });
        }
        continue;
      }

      // 4. جار + مجرور (preposition + genitive)
      if ((pos.includes('PREP') && !pos.includes('+')) &&
          j === i + 1 &&
          (nextCase === 'majroor' || nextRole.includes('genitive') || nextPos.includes('N'))) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'جار + مجرور' });
        continue;
      }
      // Combined PREP+N with following genitive
      if (pos.includes('PREP') && pos.includes('N') && role.includes('jarr')) {
        // This is a combined preposition+noun token, so it's already jar-majrur within itself
        // Look for the next genitive that depends on it
        if (j === i + 1 && (nextRole.includes('mudaf') && nextRole.includes('ilayh') ||
            nextRole.includes('genitive') || nextCase === 'majroor')) {
          relationships.push({ from: word.position, to: nextWord.position, label: 'مضاف + مضاف إليه' });
        }
        continue;
      }

      // 5. مبتدأ + خبر (subject + predicate in nominal sentence)
      if ((role.includes('mubtada') || role === 'subj' || role.includes('subject')) &&
          (nextRole.includes('khabar') || nextRole.includes('pred') || nextRole.includes('predicate'))) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'مبتدأ + خبر' });
        continue;
      }

      // 6. إنّ + اسم (emphasis + subject of inna)
      if ((role.includes('emphasis') || pos.includes('ACC') || pos.includes('EMPH')) &&
          (nextRole.includes('ism-inna') || nextRole.includes('subject of inna'))) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'توکید' });
        continue;
      }

      // 7. اسم إنّ + خبر إنّ
      if (role.includes('ism-inna') &&
          (nextRole.includes('khabar-inna') || nextRole.includes('khabar'))) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'مبتدأ + خبر' });
        continue;
      }

      // 8. نفی + فعل (negation + verb)
      if ((pos.includes('NEG') || role.includes('negat')) && j === i + 1 &&
          (nextPos.includes('V') || nextRole.includes('verb'))) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'نفی + فعل' });
        continue;
      }

      // 9. موصوف + صفت (noun + adjective)
      if ((pos.includes('N') || pos.includes('PN')) && j === i + 1 &&
          (nextRole.includes('sifah') || nextRole.includes('adjective') || nextPos.includes('ADJ') ||
           nextRole.includes('صفت') || nextRole.includes('نعت'))) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'موصوف + صفت' });
        continue;
      }

      // 10. عطف (conjunction linking parallel words)
      if ((nextPos.includes('CONJ') && nextPos.includes('+')) ||
          (nextPos === 'CONJ' && j + 1 < words.length)) {
        // Find what is being connected
        if (j + 1 < words.length && pos.includes('V') &&
            (words[j+1].posTag || words[j+1].posLabel || (words[j+1].pos || []).join('+')).includes('V')) {
          // verb + conj + verb
          relationships.push({ from: word.position, to: words[j+1].position, label: 'عطف' });
        }
        continue;
      }

      // 11. موصول + صلة (relative pronoun + clause)
      if ((pos.includes('REL') || role.includes('relative')) && j === i + 1 &&
          (nextPos.includes('V') || nextRole.includes('verb'))) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'موصول + صلة' });
        continue;
      }

      // 12. بدل (substitute/apposition)
      if (nextRole.includes('badal') || nextRole === 'badal') {
        relationships.push({ from: word.position, to: nextWord.position, label: 'بدل' });
        continue;
      }

      // 13. حال (circumstantial)
      if (nextRole.includes('haal') || nextRole.includes('hal') && !nextRole.includes('emphatic')) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'حال' });
        continue;
      }

      // 14. تمییز (specification)
      if (nextRole.includes('tamyiz') || nextRole.includes('specification')) {
        relationships.push({ from: word.position, to: nextWord.position, label: 'تمییز' });
        continue;
      }
    }
  }

  // Deduplicate
  const seen = new Set();
  return relationships.filter(r => {
    const key = `${r.from}-${r.to}-${r.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Check if a POS string contains a specific POS tag (not as substring of another).
 * e.g., hasPos('CONJ+N', 'N') = true, hasPos('PRON', 'N') = false
 */
function hasPos(posStr, tag) {
  const parts = posStr.split(/[\+,\s]+/);
  return parts.some(p => p === tag);
}

/**
 * Check if POS string is or contains a noun (N or PN), but NOT PRON
 */
function isNoun(posStr) {
  return hasPos(posStr, 'N') || hasPos(posStr, 'PN');
}

/**
 * Check if POS string contains a verb
 */
function isVerb(posStr) {
  return hasPos(posStr, 'V');
}

/**
 * More targeted relationship generation for specific grammatical patterns.
 * This handles the cases that the generic loop misses.
 */
function generateRelationshipsV2(words) {
  if (!words || words.length < 2) return [];
  const rels = [];
  const added = new Set();

  function addRel(from, to, label) {
    const key = `${from}:${to}:${label}`;
    if (!added.has(key)) {
      added.add(key);
      rels.push({ from, to, label });
    }
  }

  // Helper to normalize English/Arabic-transliterated roles to canonical role tags
  function normalizeRole(role) {
    const r = (role || '').toLowerCase();
    return {
      isPreposition: r === 'preposition' || r === 'jarr' || r === 'harf_jarr' || r.includes('prepositional'),
      isSubject: r === 'subject' || r.includes("fa'il") || r === 'fail' || r.includes('فاعل'),
      isObject: r === 'object' || r.includes("maf'ul") || r.includes('mafool') || r === 'direct object',
      isPredicate: r === 'predicate' || r.includes('khabar') || r === 'pred',
      isEmphasis: r === 'emphasis' || r.includes('tawkid') || r.includes('tawkeed') || r.includes('inna'),
      isNegation: r === 'negation' || r.includes('nafi') || r.includes('nafy') || r === 'harf_nafy',
      isGenitive: r === 'genitive' || r === 'majroor' || r === 'majrur' || r.includes('possessive'),
      isAttribute: r === 'attribute' || r.includes('sifah') || r.includes('sifa') || r === 'adjective',
      isVerb: r === 'verb' || r.includes('verb'),
      isRelative: r.includes('relative') || r.includes('sila') || r === 'rel',
      isSubjectInna: r.includes('ism_inna') || r.includes('ism-inna') || r === 'subject of inna' || r.includes('inna_ism'),
      isPredicateInna: r.includes('khabar_inna') || r.includes('khabar-inna') || r === 'predicate of inna',
      isMubtada: r.includes('mubtada') || r === 'subj' || r === 'subject',
      isBadal: r === 'badal' || r === 'apposition',
      isConditional: r === 'conditional' || r === 'protasis',
      isVocative: r === 'vocative' || r.includes('nida') || r.includes('munada'),
      isMudaf: (r.includes('mudaf') && !r.includes('ilayh')) || (r.includes('mudhaf') && !r.includes('ilayh')) || r === 'construct',
      isMudafIlayh: (r.includes('mudaf') && r.includes('ilayh')) || (r.includes('mudhaf') && r.includes('ilayh')) || r === 'genitive' || r === 'possessive',
      isCircumstantial: r === 'circumstantial' || r.includes('haal') || r.includes('hal') && !r.includes('emphatic'),
      raw: r,
    };
  }

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const pos = (w.posTag || w.posLabel || (w.pos ? w.pos.join('+') : '')).toUpperCase();
    const role = (w.grammarRole || '').toLowerCase();
    const caseVal = (w.case || '').toLowerCase();
    const nr = normalizeRole(role);

    // --- Preposition + Next Word (جار + مجرور) ---
    if ((pos === 'PREP' || pos === 'P' || pos === 'INTERROG' && false || nr.isPreposition) && !isNoun(pos) && i + 1 < words.length) {
      addRel(w.position, words[i + 1].position, 'جار + مجرور');
    }

    // --- Combined PREP+N (like بِاسْمِ, بِرَبِّ) followed by genitive ---
    if ((hasPos(pos, 'PREP') && isNoun(pos)) ||
        (hasPos(pos, 'P') && isNoun(pos)) ||
        role.includes('jarr-majrur') || role === 'jarr_majroor') {
      if (i + 1 < words.length) {
        const nnr = normalizeRole(words[i + 1].grammarRole);
        const nCase = (words[i + 1].case || '').toLowerCase();
        if (nnr.isMudafIlayh || nnr.isGenitive || nCase === 'majroor') {
          addRel(w.position, words[i + 1].position, 'مضاف + مضاف إليه');
        }
      }
    }

    // --- Mudaf + Mudaf Ilayh ---
    if (nr.isMudaf) {
      if (i + 1 < words.length) {
        const nnr = normalizeRole(words[i + 1].grammarRole);
        if (nnr.isMudafIlayh || nnr.isGenitive || (words[i + 1].case || '').toLowerCase() === 'majroor') {
          addRel(w.position, words[i + 1].position, 'مضاف + مضاف إليه');
        }
      }
    }

    // --- Verb patterns (verbs including INT+V, EMPH+V, SUB+V, but not CONJ+V) ---
    if ((isVerb(pos) || nr.isVerb) && !hasPos(pos, 'VOC') && !hasPos(pos, 'CONJ')) {
      for (let j = i + 1; j < Math.min(i + 4, words.length); j++) {
        const nw = words[j];
        const nnr = normalizeRole(nw.grammarRole);
        const nPos = (nw.posTag || nw.posLabel || (nw.pos ? nw.pos.join('+') : '')).toUpperCase();

        if (nnr.isSubject && !nnr.isSubjectInna) {
          addRel(w.position, nw.position, 'فعل + فاعل');
        }
        if (nnr.isObject && !nr.raw.includes('prep')) {
          addRel(w.position, nw.position, 'فعل + مفعول به');
        }
      }
    }

    // --- CONJ+V compound (like وَتَبَّ, فَصَلِّ, وَانْحَرْ) ---
    if (hasPos(pos, 'CONJ') && isVerb(pos)) {
      for (let j = i - 1; j >= 0; j--) {
        const pw = words[j];
        const pPos = (pw.posTag || pw.posLabel || (pw.pos ? pw.pos.join('+') : '')).toUpperCase();
        if (isVerb(pPos)) {
          addRel(pw.position, w.position, 'عطف');
          break;
        }
      }
      for (let j = i + 1; j < Math.min(i + 3, words.length); j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isObject) {
          addRel(w.position, words[j].position, 'فعل + مفعول به');
        }
      }
    }

    // --- Conjunction role (English format: "conjunction") ---
    if (role === 'conjunction' || role === 'matoof') {
      // Look for the previous similar POS word to connect via عطف
      if (i + 1 < words.length) {
        for (let j = i - 1; j >= 0; j--) {
          const pw = words[j];
          const pPos = (pw.posTag || pw.posLabel || (pw.pos ? pw.pos.join('+') : '')).toUpperCase();
          const pRole = (pw.grammarRole || '').toLowerCase();
          if (pRole !== 'conjunction' && pRole !== 'matoof') {
            addRel(pw.position, words[i + 1].position, 'عطف');
            break;
          }
        }
      }
    }

    // --- Mubtada + Khabar ---
    if (nr.isMubtada) {
      for (let j = i + 1; j < words.length; j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isPredicate || nnr.isPredicateInna) {
          addRel(w.position, words[j].position, 'مبتدأ + خبر');
          break;
        }
      }
    }

    // --- Inna/Emphasis + Subject ---
    if (nr.isEmphasis || pos === 'ACC' || pos === 'EMPH' || pos.includes('EMPH') || hasPos(pos, 'PART') && nr.isEmphasis) {
      for (let j = i + 1; j < Math.min(i + 3, words.length); j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isSubjectInna || nnr.isSubject) {
          addRel(w.position, words[j].position, 'توکید');
          break;
        }
      }
    }

    // --- Ism Inna + Khabar Inna ---
    if (nr.isSubjectInna) {
      for (let j = i + 1; j < words.length; j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isPredicateInna || nnr.isPredicate) {
          addRel(w.position, words[j].position, 'مبتدأ + خبر');
          break;
        }
      }
    }

    // --- Negation + Verb ---
    if ((pos === 'NEG' || hasPos(pos, 'NEG') || nr.isNegation) && !isVerb(pos) && i + 1 < words.length) {
      const nw = words[i + 1];
      const nPos = (nw.posTag || nw.posLabel || (nw.pos ? nw.pos.join('+') : '')).toUpperCase();
      const nnr = normalizeRole(nw.grammarRole);
      if (isVerb(nPos) || nnr.isVerb) {
        addRel(w.position, nw.position, 'نفی + فعل');
      }
    }

    // --- Relative pronoun + Verb ---
    if (pos === 'REL' || nr.isRelative) {
      if (i + 1 < words.length) {
        const nw = words[i + 1];
        const nPos = (nw.posTag || nw.posLabel || (nw.pos ? nw.pos.join('+') : '')).toUpperCase();
        const nnr = normalizeRole(nw.grammarRole);
        if (isVerb(nPos) || nnr.isVerb) {
          addRel(w.position, nw.position, 'موصول + صلة');
        }
      }
    }

    // --- Noun + Adjective/Attribute (موصوف + صفت) ---
    if (isNoun(pos) && !hasPos(pos, 'PRON') && i + 1 < words.length) {
      const nw = words[i + 1];
      const nPos = (nw.posTag || nw.posLabel || (nw.pos ? nw.pos.join('+') : '')).toUpperCase();
      const nnr = normalizeRole(nw.grammarRole);
      if (hasPos(nPos, 'ADJ') || nnr.isAttribute) {
        addRel(w.position, nw.position, 'موصوف + صفت');
      }
    }

    // --- Noun + genitive (mudaf + mudaf ilayh by adjacency) ---
    if (isNoun(pos) && !hasPos(pos, 'PRON') && !nr.isPreposition && i + 1 < words.length) {
      const nnr = normalizeRole(words[i + 1].grammarRole);
      if (nnr.isGenitive && !nr.isGenitive) {
        addRel(w.position, words[i + 1].position, 'مضاف + مضاف إليه');
      }
    }

    // --- Mudaf Ilayh (reverse check: if this word is mudaf ilayh, connect to previous) ---
    if (nr.isMudafIlayh && !nr.isGenitive) {
      // Only for explicit mudaf_ilayh roles, not generic "genitive"
      if (i > 0) {
        const pw = words[i - 1];
        const pPos = (pw.posTag || pw.posLabel || (pw.pos ? pw.pos.join('+') : '')).toUpperCase();
        const isStandalonePrep = (pPos === 'PREP' || pPos === 'P') && !isNoun(pPos);
        if (!isStandalonePrep) {
          addRel(words[i - 1].position, w.position, 'مضاف + مضاف إليه');
        }
      }
    }

    // --- Majrur after preposition (reverse check) ---
    if ((role === 'majrur' || role === 'majroor') && i > 0) {
      const pw = words[i - 1];
      const pPos = (pw.posTag || pw.posLabel || (pw.pos ? pw.pos.join('+') : '')).toUpperCase();
      if (hasPos(pPos, 'P') || hasPos(pPos, 'PREP')) {
        addRel(pw.position, w.position, 'جار + مجرور');
      }
    }

    // --- Badal / Apposition ---
    if (nr.isBadal) {
      if (i > 0) {
        addRel(words[i - 1].position, w.position, 'بدل');
      }
    }

    // --- Vocative (ya + ayyuha + noun) ---
    if (pos === 'VOC' || nr.isVocative) {
      if (i + 1 < words.length) {
        const nw = words[i + 1];
        const nPos = (nw.posTag || nw.posLabel || (nw.pos ? nw.pos.join('+') : '')).toUpperCase();
        const nnr = normalizeRole(nw.grammarRole);
        if (nnr.isVocative || isNoun(nPos) || nPos === 'VOC') {
          addRel(w.position, nw.position, 'نداء');
        }
      }
    }

    // --- Conditional + Verb ---
    if (pos === 'COND' || hasPos(pos, 'COND') || nr.isConditional) {
      if (i + 1 < words.length) {
        const nw = words[i + 1];
        const nPos = (nw.posTag || nw.posLabel || (nw.pos ? nw.pos.join('+') : '')).toUpperCase();
        const nnr = normalizeRole(nw.grammarRole);
        if (isVerb(nPos) || nnr.isVerb) {
          addRel(w.position, nw.position, 'شرط + فعل');
        }
      }
    }

    // --- Interrogative + Verb ---
    if (hasPos(pos, 'INT') && isVerb(pos)) {
      for (let j = i + 1; j < Math.min(i + 3, words.length); j++) {
        const nw = words[j];
        const nnr = normalizeRole(nw.grammarRole);
        if (nnr.isObject || nnr.isRelative) {
          addRel(w.position, nw.position, 'فعل + مفعول به');
          break;
        }
      }
    }

    // --- Preposition (English role) + next genitive ---
    if (nr.isPreposition && i + 1 < words.length) {
      const nnr = normalizeRole(words[i + 1].grammarRole);
      if (nnr.isGenitive || nnr.isObject) {
        addRel(w.position, words[i + 1].position, 'جار + مجرور');
      }
    }

    // --- Verb (English role) + subject/object ---
    if (nr.isVerb && !isVerb(pos) && !hasPos(pos, 'CONJ')) {
      // Word tagged as verb by role but not by POS (unusual but possible)
      for (let j = i + 1; j < Math.min(i + 4, words.length); j++) {
        const nnr = normalizeRole(words[j].grammarRole);
        if (nnr.isSubject && !nnr.isSubjectInna) {
          addRel(w.position, words[j].position, 'فعل + فاعل');
        }
        if (nnr.isObject) {
          addRel(w.position, words[j].position, 'فعل + مفعول به');
        }
      }
    }

    // --- Pronoun separation (ضمير الفصل) ---
    if (role.includes('pronoun-separation') || role.includes('separation-pronoun') || role.includes('ضمير الفصل') || role === 'demonstrative') {
      if (i + 1 < words.length) {
        const nnr = normalizeRole(words[i + 1].grammarRole);
        if (nnr.isPredicate || nnr.isPredicateInna) {
          addRel(w.position, words[i + 1].position, 'ضمیر فصل + خبر');
        }
      }
    }

    // --- Circumstantial (حال) ---
    if (nr.isCircumstantial && i > 0) {
      // Find the verb or noun this is circumstantial to
      for (let j = i - 1; j >= Math.max(0, i - 3); j--) {
        const pw = words[j];
        const pPos = (pw.posTag || pw.posLabel || (pw.pos ? pw.pos.join('+') : '')).toUpperCase();
        const pnr = normalizeRole(pw.grammarRole);
        if (isVerb(pPos) || pnr.isVerb) {
          addRel(pw.position, w.position, 'حال');
          break;
        }
      }
    }
  }

  return rels;
}

/**
 * Process a file with the OLD format (dependencyStructure string).
 * Adds a `structure` object with `relationships` after the dependencyStructure line.
 */
function processOldFormatFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');

  // Parse ayahs: find each ayah number block
  const ayahRegex = /(\d+):\s*\{[\s\S]*?ayahNumber:\s*(\d+)/g;
  let match;
  const ayahBlocks = [];

  while ((match = ayahRegex.exec(content)) !== null) {
    ayahBlocks.push({ key: match[1], num: parseInt(match[2]), index: match.index });
  }

  // For each ayah, extract words and generate relationships
  // We'll work backwards to not mess up indices
  const insertions = [];

  for (const ayah of ayahBlocks) {
    // Find the words array for this ayah
    const ayahStart = ayah.index;
    const nextAyahIdx = ayahBlocks.find(a => a.index > ayahStart);
    const ayahEnd = nextAyahIdx ? nextAyahIdx.index : content.length;
    const ayahContent = content.substring(ayahStart, ayahEnd);

    // Extract words data
    const words = [];
    const wordRegex = /position:\s*(\d+)/g;
    let wm;
    while ((wm = wordRegex.exec(ayahContent)) !== null) {
      const pos = parseInt(wm[1]);
      // Find the word block around this position
      const blockStart = ayahContent.lastIndexOf('{', wm.index);
      const blockEnd = findMatchingBrace(ayahContent, blockStart);
      const wordBlock = ayahContent.substring(blockStart, blockEnd + 1);

      words.push({
        position: pos,
        posTag: extractField(wordBlock, 'posTag') || extractField(wordBlock, 'posLabel'),
        posLabel: extractField(wordBlock, 'posLabel'),
        grammarRole: extractField(wordBlock, 'grammarRole'),
        case: extractField(wordBlock, 'case'),
        arabic: extractField(wordBlock, 'arabic'),
      });
    }

    if (words.length < 2) continue;

    const relationships = generateRelationshipsV2(words);
    if (relationships.length === 0) continue;

    // Find the dependencyStructure line and insert after it
    const depIdx = ayahContent.indexOf('dependencyStructure:');
    if (depIdx === -1) continue;

    // Find end of that line
    const lineEnd = ayahContent.indexOf('\n', depIdx);
    if (lineEnd === -1) continue;

    // The dependencyStructure line is typically the last property before the closing brace,
    // so it does NOT have a trailing comma. We need to add one.
    const depLine = ayahContent.substring(depIdx, lineEnd);
    const needsComma = !depLine.trimEnd().endsWith(',');

    const insertPoint = ayahStart + lineEnd + 1;
    const commaInsertPoint = needsComma ? ayahStart + lineEnd : -1;
    const indent = '    ';
    const relsStr = relationships.map(r =>
      `${indent}  { from: ${r.from}, to: ${r.to}, label: '${r.label}' }`
    ).join(',\n');

    const structureBlock = `${indent}structure: {\n${indent}  relationships: [\n${relsStr}\n${indent}  ],\n${indent}},\n`;

    insertions.push({ point: insertPoint, text: structureBlock, commaPoint: commaInsertPoint });
  }

  // Apply insertions in reverse order (highest index first to preserve positions)
  insertions.sort((a, b) => b.point - a.point);
  for (const ins of insertions) {
    // First insert the structure block
    content = content.substring(0, ins.point) + ins.text + content.substring(ins.point);
    // Then add the trailing comma to the dependencyStructure line if needed
    if (ins.commaPoint >= 0) {
      content = content.substring(0, ins.commaPoint) + ',' + content.substring(ins.commaPoint);
    }
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log(`Processed (old format): ${filePath} - ${insertions.length} ayahs updated`);
}

/**
 * Process a file with the NEW format (structure object / dependency.structure).
 * Adds `relationships` array to existing structure/dependency objects.
 */
function processNewFormatFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');

  // Parse word data from each ayah
  // For new format files, we need to find ayahs and their words
  const ayahRegex = /(\d+):\s*\{[^}]*?(?:text|arabic):/g;
  let match;
  const ayahPositions = [];

  while ((match = ayahRegex.exec(content)) !== null) {
    ayahPositions.push({ key: match[1], index: match.index });
  }

  const insertions = [];

  for (let ai = 0; ai < ayahPositions.length; ai++) {
    const ayah = ayahPositions[ai];
    const ayahStart = ayah.index;
    const ayahEnd = ai + 1 < ayahPositions.length ? ayahPositions[ai + 1].index : content.length;
    const ayahContent = content.substring(ayahStart, ayahEnd);

    // Check if already has relationships
    if (ayahContent.includes('relationships:') || ayahContent.includes('relationships :')) {
      continue;
    }

    // Extract words - try position: field first, then fall back to id: field
    const words = [];
    const wordPosRegex = /position:\s*(\d+)/g;
    let wm;
    while ((wm = wordPosRegex.exec(ayahContent)) !== null) {
      const pos = parseInt(wm[1]);
      const blockStart = ayahContent.lastIndexOf('{', wm.index);
      const blockEnd = findMatchingBrace(ayahContent, blockStart);
      const wordBlock = ayahContent.substring(blockStart, blockEnd + 1);

      let posTag = extractField(wordBlock, 'posLabel');
      if (!posTag) {
        const posMatch = wordBlock.match(/pos:\s*\[([^\]]+)\]/);
        if (posMatch) {
          posTag = posMatch[1].replace(/'/g, '').replace(/"/g, '').trim();
        }
      }

      words.push({
        position: pos,
        posTag: posTag,
        posLabel: extractField(wordBlock, 'posLabel'),
        grammarRole: extractField(wordBlock, 'grammarRole'),
        case: extractField(wordBlock, 'case'),
        arabic: extractField(wordBlock, 'arabic'),
      });
    }

    // If no position: fields found, try extracting from id: 'surah:ayah:word' pattern
    if (words.length === 0) {
      const wordIdRegex = /id:\s*['"](\d+:\d+:(\d+))['"]/g;
      while ((wm = wordIdRegex.exec(ayahContent)) !== null) {
        const pos = parseInt(wm[2]);
        const blockStart = ayahContent.lastIndexOf('{', wm.index);
        const blockEnd = findMatchingBrace(ayahContent, blockStart);
        const wordBlock = ayahContent.substring(blockStart, blockEnd + 1);

        let posTag = extractField(wordBlock, 'posLabel');
        if (!posTag) {
          const posMatch = wordBlock.match(/pos:\s*\[([^\]]+)\]/);
          if (posMatch) {
            posTag = posMatch[1].replace(/'/g, '').replace(/"/g, '').trim();
          }
        }

        words.push({
          position: pos,
          posTag: posTag,
          posLabel: extractField(wordBlock, 'posLabel'),
          grammarRole: extractField(wordBlock, 'grammarRole'),
          case: extractField(wordBlock, 'case'),
          arabic: extractField(wordBlock, 'arabic'),
        });
      }
    }

    if (words.length < 2) continue;

    const relationships = generateRelationshipsV2(words);
    if (relationships.length === 0) continue;

    // Find where to insert: look for structure: { or dependency: { in this ayah
    const structureIdx = ayahContent.indexOf('structure:');
    const dependencyIdx = ayahContent.indexOf('dependency:');

    const indent = '      ';
    const relsStr = relationships.map(r =>
      `${indent}  { from: ${r.from}, to: ${r.to}, label: '${r.label}' }`
    ).join(',\n');
    const relsBlock = `${indent}relationships: [\n${relsStr}\n${indent}],\n`;

    if (structureIdx !== -1) {
      // Find the opening brace of structure
      const structBraceIdx = ayahContent.indexOf('{', structureIdx);
      if (structBraceIdx !== -1) {
        // Check if it's structure: [ (array) or structure: { (object)
        const afterColon = ayahContent.substring(structureIdx + 'structure:'.length).trimStart();
        if (afterColon.startsWith('{')) {
          // Object - insert before closing brace
          const closeBrace = findMatchingBrace(ayahContent, structBraceIdx);
          const insertPoint = ayahStart + closeBrace;
          insertions.push({ point: insertPoint, text: relsBlock });
        } else if (afterColon.startsWith('[')) {
          // Array - insert relationships after the array's closing bracket + comma
          const closeBracket = findMatchingBracket(ayahContent, ayahContent.indexOf('[', structureIdx));
          // Add after the structure array's closing line
          let afterBracket = ayahContent.indexOf('\n', closeBracket);
          if (afterBracket === -1) afterBracket = closeBracket + 1;
          // Check for comma after bracket
          const afterLine = ayahContent.indexOf('\n', afterBracket + 1);
          const insertPoint = ayahStart + afterBracket + 1;
          insertions.push({ point: insertPoint, text: relsBlock });
        }
      }
    } else if (dependencyIdx !== -1) {
      // dependency: { ... structure: [...], ... }
      // Find the closing of dependency object and insert relationships before it
      const depBrace = ayahContent.indexOf('{', dependencyIdx);
      if (depBrace !== -1) {
        const depClose = findMatchingBrace(ayahContent, depBrace);
        const insertPoint = ayahStart + depClose;
        insertions.push({ point: insertPoint, text: `  ${relsBlock}    ` });
      }
    } else {
      // No structure or dependency block exists.
      // Insert a structure block after the words array closing bracket
      let wordsEnd = ayahContent.lastIndexOf('],');
      if (wordsEnd === -1) {
        // Some files have ] without trailing comma (e.g., ] on its own line)
        // Find the last ] that is the words array closing
        const lastBracket = ayahContent.lastIndexOf(']');
        if (lastBracket !== -1) {
          wordsEnd = lastBracket;
        }
      }
      if (wordsEnd !== -1) {
        const afterWords = ayahContent.indexOf('\n', wordsEnd);
        if (afterWords !== -1) {
          const insertPoint = ayahStart + afterWords + 1;
          const structBlock = `    structure: {\n${indent}relationships: [\n${relsStr}\n${indent}],\n    },\n`;
          insertions.push({ point: insertPoint, text: structBlock });
        }
      }
    }
  }

  // Apply insertions in reverse order
  insertions.sort((a, b) => b.point - a.point);
  for (const ins of insertions) {
    content = content.substring(0, ins.point) + ins.text + content.substring(ins.point);
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log(`Processed (new format): ${filePath} - ${insertions.length} ayahs updated`);
}

// Helper: find matching closing brace
function findMatchingBrace(str, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === '{') depth++;
    else if (str[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return str.length - 1;
}

// Helper: find matching closing bracket
function findMatchingBracket(str, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < str.length; i++) {
    if (str[i] === '[') depth++;
    else if (str[i] === ']') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return str.length - 1;
}

// Helper: extract simple string field from JS object text
function extractField(text, field) {
  // Try quoted string
  const regex1 = new RegExp(`${field}:\\s*['"]([^'"]*?)['"]`);
  const m1 = text.match(regex1);
  if (m1) return m1[1];

  // Try unquoted value
  const regex2 = new RegExp(`${field}:\\s*([^,\\n}]+)`);
  const m2 = text.match(regex2);
  if (m2) return m2[1].trim().replace(/^['"]|['"]$/g, '');

  return '';
}

// Determine format and process
// Old format = has dependencyStructure field, New format = has structure/dependency objects
const OLD_FORMAT_SURAHS = ['090', '091', '092', '093', '094', '095'];

for (const num of FILES_TO_PROCESS) {
  const filePath = join(SURAHS_DIR, `${num}.js`);
  try {
    const content = readFileSync(filePath, 'utf-8');

    // Check if already has relationships
    if (content.includes('relationships:')) {
      const relCount = (content.match(/relationships:/g) || []).length;
      console.log(`File ${num}.js already has ${relCount} relationship blocks - skipping`);
      continue;
    }

    // Auto-detect format from file content
    const isOldFormat = content.includes('dependencyStructure:');

    if (isOldFormat) {
      processOldFormatFile(filePath);
    } else {
      processNewFormatFile(filePath);
    }
  } catch (err) {
    console.error(`Error processing ${num}.js:`, err.message);
  }
}

console.log('\nDone! All files processed.');
