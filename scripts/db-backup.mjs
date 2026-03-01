#!/usr/bin/env node
/**
 * D1 Database Backup Script
 *
 * Usage:
 *   npm run db:backup              # Full backup (schema + data)
 *   npm run db:backup -- --tables  # Only critical tables (users, subscriptions, sessions)
 *   npm run db:backup -- --local   # Backup local dev DB instead of remote
 *
 * Backups are saved to ./backups/ with timestamps.
 * Run this BEFORE any migration or destructive operation.
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { resolve, join } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const BACKUPS_DIR = join(ROOT, 'backups');
const DB_NAME = 'w3quran-db';

const args = process.argv.slice(2);
const isLocal = args.includes('--local');
const tablesOnly = args.includes('--tables');
const target = isLocal ? '--local' : '--remote';
const label = isLocal ? 'local' : 'remote';

// Critical tables with user/payment data
const CRITICAL_TABLES = ['users', 'subscriptions', 'sessions', 'user_credits', 'credit_transactions'];

const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

// Ensure backups directory exists
if (!existsSync(BACKUPS_DIR)) {
  mkdirSync(BACKUPS_DIR, { recursive: true });
}

function run(cmd) {
  try {
    execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
    return true;
  } catch {
    return false;
  }
}

console.log(`\n💾 w3Quran D1 Backup (${label})\n`);

if (tablesOnly) {
  // Backup each critical table separately
  console.log('  Backing up critical tables...\n');
  let success = 0;
  for (const table of CRITICAL_TABLES) {
    const file = join(BACKUPS_DIR, `${timestamp}_${label}_${table}.sql`);
    console.log(`  📋 ${table} → ${file}`);
    if (run(`npx wrangler d1 export ${DB_NAME} ${target} --output="${file}" --table=${table}`)) {
      success++;
    } else {
      console.log(`  ⚠️  Table "${table}" may not exist, skipping`);
    }
  }
  console.log(`\n  ✅ ${success}/${CRITICAL_TABLES.length} tables backed up\n`);
} else {
  // Full backup
  const file = join(BACKUPS_DIR, `${timestamp}_${label}_full.sql`);
  console.log(`  📋 Full backup → ${file}\n`);
  if (run(`npx wrangler d1 export ${DB_NAME} ${target} --output="${file}"`)) {
    console.log(`\n  ✅ Full backup saved\n`);
  } else {
    console.error('\n  ❌ Backup failed\n');
    process.exit(1);
  }
}

console.log('  💡 To restore: npx wrangler d1 execute w3quran-db --remote --file=./backups/<file>.sql');
console.log('  💡 Or use Time Travel: npx wrangler d1 time-travel restore w3quran-db --timestamp="<ISO timestamp>"\n');
