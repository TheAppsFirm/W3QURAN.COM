#!/usr/bin/env node
/**
 * Local D1 Database Setup Script
 *
 * Resets corrupted local D1 state and applies schema + all migrations.
 * Run: npm run db:setup
 *
 * Flags:
 *   --reset   Force delete existing D1 state before setup
 *   --check   Only check if DB is healthy, don't modify
 */

import { execSync } from 'child_process';
import { existsSync, readdirSync, rmSync } from 'fs';
import { resolve, join } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const D1_STATE = join(ROOT, '.wrangler/state/v3/d1/miniflare-D1DatabaseObject');
const SCHEMA = join(ROOT, 'schema.sql');
const MIGRATIONS_DIR = join(ROOT, 'migrations');
const DB_NAME = 'w3quran-db';

const args = process.argv.slice(2);
const forceReset = args.includes('--reset');
const checkOnly = args.includes('--check');

function run(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, stdio: 'pipe' }).toString();
  } catch (e) {
    return null;
  }
}

function log(msg) { console.log(`  ${msg}`); }

// Check DB health
function isDBHealthy() {
  const result = run(
    `npx wrangler d1 execute ${DB_NAME} --local --command "SELECT name FROM sqlite_master WHERE type='table' AND name='users'" 2>/dev/null`
  );
  return result && result.includes('users');
}

console.log('\n🗄️  w3Quran Local D1 Setup\n');

// Step 1: Check if reset needed
if (checkOnly) {
  if (isDBHealthy()) {
    log('✅ Database is healthy');
    process.exit(0);
  } else {
    log('❌ Database is missing or corrupted');
    process.exit(1);
  }
}

if (forceReset || !isDBHealthy()) {
  if (existsSync(D1_STATE)) {
    const fileCount = readdirSync(D1_STATE).length;
    log(`🧹 Clearing corrupted D1 state (${fileCount} files)...`);
    rmSync(D1_STATE, { recursive: true, force: true });
  } else {
    log('📁 No existing D1 state found, starting fresh');
  }

  // Step 2: Apply schema
  log('📋 Applying schema.sql...');
  const schemaResult = run(`npx wrangler d1 execute ${DB_NAME} --local --file="${SCHEMA}" 2>&1`);
  if (!schemaResult || schemaResult.includes('ERROR')) {
    console.error('❌ Schema failed:', schemaResult);
    process.exit(1);
  }
  log('✅ Schema applied');

  // Step 3: Apply migrations in order
  if (existsSync(MIGRATIONS_DIR)) {
    const migrations = readdirSync(MIGRATIONS_DIR)
      .filter(f => f.endsWith('.sql'))
      .sort();

    for (const migration of migrations) {
      log(`📋 Applying ${migration}...`);
      const migResult = run(`npx wrangler d1 execute ${DB_NAME} --local --file="${join(MIGRATIONS_DIR, migration)}" 2>&1`);
      if (!migResult || migResult.includes('ERROR')) {
        console.error(`❌ Migration ${migration} failed:`, migResult);
        process.exit(1);
      }
    }
    log(`✅ ${migrations.length} migrations applied`);
  }

  // Verify
  if (isDBHealthy()) {
    log('✅ Database is ready!\n');
  } else {
    console.error('❌ Setup completed but verification failed\n');
    process.exit(1);
  }
} else {
  log('✅ Database already healthy, no setup needed');
  log('   Use --reset to force recreate\n');
}
