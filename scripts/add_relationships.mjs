/**
 * Script to add relationships arrays to treebank surah files.
 * Uses ONLY existing grammar data (pos, grammar.role, grammar.case, grammarRole)
 * to derive authentic Arabic grammar relationships.
 *
 * V2: Improved detection - handles PREP/P, better idafa, consecutive adjectives, etc.
 */

import fs from 'fs';
import path from 'path';

const SURAHS_DIR = '/Users/zia/Desktop/Development/Quran/quran-personal/src/data/treebank/surahs';
const TARGET_FILES = [
  '058', '059', '060', '061', '062', '063', '064', '065',
  '066', '067', '068', '069', '070', '071', '072', '073', '074', '075'
];

/** Check if a POS tag represents a preposition */
function isPreposition(pos) {
  return pos === 'P' || pos === 'PREP' || pos === 'P+N' || pos === 'PREP+N';
}

/** Check if a POS tag represents a verb (standalone) */
function isVerb(pos) {
  return pos === 'V' || pos === 'INTERROG+V' || pos === 'INTG+V';
}

/** Check if a POS tag contains a verb component */
function hasVerbComponent(pos) {
  return pos === 'V' || pos.endsWith('+V') || pos === 'INTERROG+V' || pos === 'INTG+V';
}

/** Check if a POS tag represents a noun-like word */
function isNounLike(pos) {
  return pos === 'N' || pos === 'AP' || pos === 'N+PRON' || pos === 'NUM';
}

/** Check if a role is a preposition-related role */
function isPrepRole(role) {
  return role === 'preposition' || role === 'object_preposition' ||
         role === 'direction' || role === 'source' || role === 'temporal' ||
         role === 'partitive' || role === 'instrument' || role === 'beneficiary' ||
         role === 'comparison' || role === 'accompaniment' || role === 'causal';
}

/**
 * Analyze words array and generate relationships based on existing grammar data.
 * ONLY creates relationships supported by the annotations.
 */
function generateRelationships(words) {
  const relationships = [];
  const getPos = (w, idx) => w.position || (idx + 1);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const pos = word.pos || '';
    const grammar = word.grammar || {};
    const grammarRole = word.grammarRole || grammar.role || '';
    const gramCase = grammar.case || '';
    const wordPosition = getPos(word, i);

    // ===== FORWARD-LOOKING RULES (current word → next word) =====
    if (i + 1 < words.length) {
      const nextWord = words[i + 1];
      const nextPos = nextWord.pos || '';
      const nextGrammar = nextWord.grammar || {};
      const nextRole = nextWord.grammarRole || nextGrammar.role || '';
      const nextCase = nextGrammar.case || '';
      const nextPosition = getPos(nextWord, i + 1);

      // 1. فعل + فاعل (verb + subject)
      // Verb (not compound CONJ+V) followed by nominative noun or subject-role word
      if (isVerb(pos) &&
          (nextPos === 'N' || nextPos === 'AP' || nextPos === 'PRON') &&
          (nextCase === 'nominative' || nextRole === 'subject')) {
        relationships.push({ from: wordPosition, to: nextPosition, label: 'فعل + فاعل' });
      }
      // Also: CONJ+V compound (like وَخَسَفَ) + subject
      if (pos.endsWith('+V') && pos.startsWith('CONJ') &&
          (nextPos === 'N' || nextPos === 'AP') &&
          (nextCase === 'nominative' || nextRole === 'subject')) {
        relationships.push({ from: wordPosition, to: nextPosition, label: 'فعل + فاعل' });
      }

      // 2. مضاف + مضاف إليه (possessive/idafa)
      if (isNounLike(pos) &&
          (nextPos === 'N' || nextPos === 'AP' || nextPos === 'N+PRON') &&
          (nextRole === 'mudaf_ilayh' || nextRole === 'genitive' ||
           (nextCase === 'genitive' &&
            // The first word should not be a preposition object itself being followed by another gen
            grammarRole !== 'object_preposition' &&
            grammarRole !== 'preposition' &&
            // Only if the first word doesn't have genitive case from being a prep object
            // OR the first word explicitly has a non-prep role
            (gramCase !== 'genitive' || grammarRole === 'subject' || grammarRole === 'predicate' ||
             grammarRole === 'object' || grammarRole === '' || grammarRole === 'temporal')
           ))) {
        relationships.push({ from: wordPosition, to: nextPosition, label: 'مضاف + مضاف إليه' });
      }

      // 3. جار + مجرور (preposition + genitive/object)
      if ((pos === 'P' || pos === 'PREP') &&
          (nextPos === 'N' || nextPos === 'AP' || nextPos === 'N+PRON') &&
          (nextCase === 'genitive' || nextRole === 'object_preposition' ||
           // If preposition followed by any noun, it's typically jar+majroor
           (!nextCase && !nextRole))) {
        relationships.push({ from: wordPosition, to: nextPosition, label: 'جار + مجرور' });
      }

      // 4. موصوف + صفت (noun + adjective)
      if ((pos === 'N' || pos === 'AP') && nextPos === 'ADJ') {
        // Case agreement check
        if (!gramCase || !nextCase || gramCase === nextCase) {
          relationships.push({ from: wordPosition, to: nextPosition, label: 'موصوف + صفت' });
        }
      }
      // Also: ADJ followed by another ADJ on same noun (consecutive attributes)
      // e.g., سَمِيعٌ بَصِيرٌ - both describe the same noun
      if (pos === 'ADJ' && nextPos === 'ADJ' &&
          gramCase && nextCase && gramCase === nextCase) {
        // Find the noun they both describe (look back)
        for (let j = i - 1; j >= Math.max(0, i - 3); j--) {
          const nounWord = words[j];
          const nounPos = nounWord.pos || '';
          const nounGrammar = nounWord.grammar || {};
          const nounCase = nounGrammar.case || '';
          if (nounPos === 'N' || nounPos === 'AP') {
            // Only if case agrees between noun and adjective
            if (!nounCase || nounCase === nextCase) {
              const nounPosition = getPos(nounWord, j);
              const alreadyLinked = relationships.some(r =>
                r.from === nounPosition && r.to === nextPosition);
              if (!alreadyLinked) {
                relationships.push({ from: nounPosition, to: nextPosition, label: 'موصوف + صفت' });
              }
            }
            break;
          }
        }
      }

      // 5. نفی + فعل (negation + verb)
      if ((pos === 'NEG' || pos.includes('NEG')) &&
          (nextPos === 'V' || nextPos.endsWith('+V'))) {
        relationships.push({ from: wordPosition, to: nextPosition, label: 'نفی + فعل' });
      }

      // 6. موصول + صلة (relative pronoun + relative clause)
      if ((pos === 'REL' || (pos.includes('REL') && !pos.includes('CONJ'))) &&
          (nextPos === 'V' || nextPos.endsWith('+V'))) {
        relationships.push({ from: wordPosition, to: nextPosition, label: 'موصول + صلة' });
      }
    }

    // ===== VERB + OBJECT (may not be adjacent) =====
    if (isVerb(pos) || (pos.endsWith('+V') && pos.startsWith('CONJ'))) {
      for (let j = i + 1; j < Math.min(i + 5, words.length); j++) {
        const candidate = words[j];
        const candPos = candidate.pos || '';
        const candGrammar = candidate.grammar || {};
        const candRole = candidate.grammarRole || candGrammar.role || '';
        const candCase = candGrammar.case || '';
        const candPosition = getPos(candidate, j);

        // Stop if we hit another verb (that verb would claim its own objects)
        if (j > i + 1 && hasVerbComponent(candPos)) break;

        if ((candPos === 'N' || candPos === 'AP') &&
            (candRole === 'object' || candRole === 'obj' ||
             (candCase === 'accusative' &&
              candRole !== 'hal' && candRole !== 'haal' &&
              candRole !== 'tamyiz' && candRole !== 'adverbial' &&
              candRole !== 'adjective' && candRole !== 'attribute' &&
              candRole !== 'predicate' && candRole !== 'temporal'))) {
          const alreadyLinked = relationships.some(r =>
            r.from === wordPosition && r.to === candPosition);
          if (!alreadyLinked) {
            relationships.push({ from: wordPosition, to: candPosition, label: 'فعل + مفعول به' });
            break;
          }
        }
      }
    }

    // ===== BACKWARD-LOOKING RULES =====

    // حال (circumstantial accusative)
    if ((grammarRole === 'hal' || grammarRole === 'haal' || grammar.role === 'hal') &&
        (gramCase === 'accusative' || !gramCase)) {
      for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
        const prev = words[j];
        const prevPos = prev.pos || '';
        if (prevPos === 'V' || prevPos === 'N' || prevPos === 'AP' || prevPos.endsWith('+V')) {
          relationships.push({ from: getPos(prev, j), to: wordPosition, label: 'حال' });
          break;
        }
      }
    }

    // تمییز (specification)
    if ((grammarRole === 'tamyiz' || grammar.role === 'tamyiz') &&
        (gramCase === 'accusative' || !gramCase)) {
      if (i > 0) {
        const prev = words[i - 1];
        relationships.push({ from: getPos(prev, i - 1), to: wordPosition, label: 'تمییز' });
      }
    }

    // ===== CONJUNCTION RULES =====

    // عطف - explicit disjunctive conjunctions (أَوْ)
    if (pos === 'CONJ' && (grammar.type === 'disjunctive' || word.arabic === 'أَوْ')) {
      if (i + 1 < words.length) {
        const nextWord = words[i + 1];
        relationships.push({ from: wordPosition, to: getPos(nextWord, i + 1), label: 'عطف' });
      }
    }

    // عطف - Compound POS with CONJ prefix (CONJ+N, CONJ+V, etc.)
    if (pos.startsWith('CONJ+') && !pos.includes('NEG') && !pos.includes('COND') &&
        !pos.includes('REL') && !pos.includes('PART') && !pos.includes('DEM')) {
      const basePos = pos.replace('CONJ+', '');
      for (let j = i - 1; j >= Math.max(0, i - 6); j--) {
        const prev = words[j];
        const prevPos = prev.pos || '';
        if (prevPos === basePos || prevPos.endsWith('+' + basePos) ||
            (basePos === 'N' && (prevPos === 'N' || prevPos === 'AP')) ||
            (basePos === 'V' && (prevPos === 'V' || prevPos.endsWith('+V'))) ||
            (basePos === 'AP' && (prevPos === 'AP' || prevPos === 'N'))) {
          relationships.push({ from: getPos(prev, j), to: wordPosition, label: 'عطف' });
          break;
        }
      }
    }

    // ===== EMPHASIS RULES =====

    // توکید - إنّ + accusative noun
    if ((pos === 'PART' || pos === 'PART+PRON') &&
        (grammar.type === 'emphasis' || grammarRole === 'emphasis') &&
        (word.arabic?.includes('إِنَّ') || word.arabic === 'إِنَّ')) {
      if (i + 1 < words.length) {
        const nextWord = words[i + 1];
        const nextPos = nextWord.pos || '';
        const nextGrammar = nextWord.grammar || {};
        if ((nextPos === 'N' || nextPos === 'AP' || nextPos === 'REL') &&
            (nextGrammar.case === 'accusative' || nextPos === 'REL')) {
          relationships.push({ from: wordPosition, to: getPos(nextWord, i + 1), label: 'توکید' });
        }
      }
    }

    // ===== NOMINAL SENTENCE RULES =====

    // مبتدأ + خبر (subject + predicate)
    // Case 1: Explicitly marked subject + predicate
    if ((grammarRole === 'subject' || grammar.role === 'subject' || grammarRole === 'mubtada') &&
        (pos === 'N' || pos === 'AP' || pos === 'DEM' || pos === 'PRON') &&
        (gramCase === 'nominative' || !gramCase)) {
      for (let j = i + 1; j < Math.min(i + 6, words.length); j++) {
        const candidate = words[j];
        const candGrammar = candidate.grammar || {};
        const candRole = candidate.grammarRole || candGrammar.role || '';
        if (candRole === 'predicate' || candRole === 'khabar') {
          relationships.push({ from: wordPosition, to: getPos(candidate, j), label: 'مبتدأ + خبر' });
          break;
        }
      }
    }

    // Case 2: DEM/PRON followed by predicate-role word
    if ((pos === 'DEM' || (pos === 'PRON' && grammarRole !== 'object')) &&
        i + 1 < words.length) {
      for (let j = i + 1; j < Math.min(i + 4, words.length); j++) {
        const nextWord = words[j];
        const nextGrammar = nextWord.grammar || {};
        const nextRole = nextWord.grammarRole || nextGrammar.role || '';
        if (nextRole === 'predicate' || nextRole === 'khabar') {
          const alreadyLinked = relationships.some(r =>
            r.from === wordPosition && r.to === getPos(nextWord, j) && r.label === 'مبتدأ + خبر');
          if (!alreadyLinked) {
            relationships.push({ from: wordPosition, to: getPos(nextWord, j), label: 'مبتدأ + خبر' });
          }
          break;
        }
      }
    }

    // Case 3: Predicate looking backward for its subject
    if (grammarRole === 'predicate' || grammar.role === 'predicate') {
      // Check if already linked to a subject
      const alreadyHasSubject = relationships.some(r =>
        r.to === wordPosition && r.label === 'مبتدأ + خبر');
      if (!alreadyHasSubject) {
        for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
          const prev = words[j];
          const prevGrammar = prev.grammar || {};
          const prevRole = prev.grammarRole || prevGrammar.role || '';
          const prevPos = prev.pos || '';
          if (prevRole === 'subject' || prevRole === 'mubtada' ||
              ((prevPos === 'N' || prevPos === 'DEM' || prevPos === 'PRON') &&
               prevGrammar.case === 'nominative' && !prevRole.includes('object'))) {
            const alreadyLinked = relationships.some(r =>
              r.from === getPos(prev, j) && r.to === wordPosition && r.label === 'مبتدأ + خبر');
            if (!alreadyLinked) {
              relationships.push({ from: getPos(prev, j), to: wordPosition, label: 'مبتدأ + خبر' });
            }
            break;
          }
        }
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
 * Process a single file - removes any existing structure blocks we added, then re-adds
 */
function processFile(filename) {
  const filePath = path.join(SURAHS_DIR, `${filename}.js`);
  let content = fs.readFileSync(filePath, 'utf8');

  // First, remove any structure blocks we previously added (our format)
  // Our format: ",\n    structure: {\n      relationships: [\n...\n      ]\n    }"
  content = content.replace(/,\n\s{4}structure: \{\n\s{4}\s{2}relationships: \[\n(?:\s{4}\s{2}\{ from: \d+, to: \d+, label: '[^']+' \}(?:,\n)?)*\n\s{4}\s{2}\]\n\s{4}\}/g, '');

  // Find all ayah entries
  const ayahPattern = /^(\s+)(\d+):\s*\{/gm;
  let match;
  const ayahPositions = [];

  while ((match = ayahPattern.exec(content)) !== null) {
    const ayahNum = parseInt(match[2]);
    const startPos = match.index;
    ayahPositions.push({ ayahNum, startPos, indent: match[1] });
  }

  let modifications = [];

  for (let a = 0; a < ayahPositions.length; a++) {
    const ayah = ayahPositions[a];
    const nextStart = a + 1 < ayahPositions.length ? ayahPositions[a + 1].startPos : content.length;
    const ayahContent = content.substring(ayah.startPos, nextStart);

    // Skip if already has relationships (from a pre-existing source, not our script)
    if (ayahContent.includes('relationships:')) {
      continue;
    }

    // Extract words array content
    const wordsMatch = ayahContent.match(/words:\s*\[([\s\S]*?)\]\s*(?:,\s*structure|\s*\})/);
    if (!wordsMatch) continue;

    const wordsStr = wordsMatch[1];
    const wordObjects = [];
    const wordPattern = /\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
    let wordMatch;
    let wordIndex = 0;

    while ((wordMatch = wordPattern.exec(wordsStr)) !== null) {
      const wordStr = wordMatch[1];
      wordIndex++;

      const word = { position: wordIndex };

      const posMatch = wordStr.match(/\bpos:\s*"([^"]+)"/);
      if (posMatch) word.pos = posMatch[1];

      const grammarRoleMatch = wordStr.match(/grammarRole:\s*"([^"]+)"/);
      if (grammarRoleMatch) word.grammarRole = grammarRoleMatch[1];

      const arabicMatch = wordStr.match(/arabic:\s*"([^"]+)"/);
      if (arabicMatch) word.arabic = arabicMatch[1];

      const positionMatch = wordStr.match(/\bposition:\s*(\d+)/);
      if (positionMatch) word.position = parseInt(positionMatch[1]);

      const grammarMatch = wordStr.match(/grammar:\s*\{([^}]+)\}/);
      if (grammarMatch) {
        const gramStr = grammarMatch[1];
        word.grammar = {};

        const caseMatch = gramStr.match(/\bcase:\s*"([^"]+)"/);
        if (caseMatch) word.grammar.case = caseMatch[1];

        const roleMatch = gramStr.match(/\brole:\s*"([^"]+)"/);
        if (roleMatch) word.grammar.role = roleMatch[1];

        const typeMatch = gramStr.match(/\btype:\s*"([^"]+)"/);
        if (typeMatch) word.grammar.type = typeMatch[1];

        const voiceMatch = gramStr.match(/\bvoice:\s*"([^"]+)"/);
        if (voiceMatch) word.grammar.voice = voiceMatch[1];

        const degreeMatch = gramStr.match(/\bdegree:\s*"([^"]+)"/);
        if (degreeMatch) word.grammar.degree = degreeMatch[1];
      }

      wordObjects.push(word);
    }

    if (wordObjects.length < 2) continue;

    const rels = generateRelationships(wordObjects);
    if (rels.length === 0) continue;

    const indent = '    ';
    const relLines = rels.map(r =>
      `${indent}  { from: ${r.from}, to: ${r.to}, label: '${r.label}' }`
    ).join(',\n');

    const structureBlock = `,\n${indent}structure: {\n${indent}  relationships: [\n${relLines}\n${indent}  ]\n${indent}}`;

    const wordsEndInAyah = ayahContent.lastIndexOf(']');
    if (wordsEndInAyah === -1) continue;

    const structureIdx = ayahContent.indexOf('structure:', wordsEndInAyah);
    if (structureIdx !== -1) continue;

    const insertPos = ayah.startPos + wordsEndInAyah + 1;
    modifications.push({ position: insertPos, text: structureBlock });
  }

  modifications.sort((a, b) => b.position - a.position);
  for (const mod of modifications) {
    content = content.substring(0, mod.position) + mod.text + content.substring(mod.position);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Processed ${filename}.js - ${modifications.length} ayahs modified`);
}

for (const file of TARGET_FILES) {
  try {
    processFile(file);
  } catch (err) {
    console.error(`Error processing ${file}.js:`, err.message);
  }
}

console.log('Done!');
