#!/usr/bin/env node
/**
 * @longwave-ai-lab/skill-commercialization-factory CLI Wrapper
 * Zero-dependency 30-second installer and deterministic linter runner.
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PKG_ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const cmd = args[0] || '--help';

if (cmd === '--version' || cmd === '-v') {
  console.log('1.0.0');
  process.exit(0);
}

if (cmd === '--help' || cmd === '-h') {
  console.log('====================================================================');
  console.log(' AI Skill & DevTool Commercialization Factory (skill-commercialization-factory v1.0.0)');
  console.log(' Built by Longwave AI Lab');
  console.log('====================================================================');
  console.log('Usage:');
  console.log('  npx @longwave-ai-lab/skill-commercialization-factory init [target-dir]   Copy rules, skills, and linters into project');
  console.log('  npx @longwave-ai-lab/skill-commercialization-factory --check             Verify packaged rules and linter syntax');
  console.log('  npx @longwave-ai-lab/skill-commercialization-factory --version           Print package version');
  process.exit(0);
}

if (cmd === '--check' || cmd === 'check') {
  const linterPath = path.join(PKG_ROOT, 'scripts', 'lint_open_core_compiler.mjs');
  if (!fs.existsSync(linterPath)) {
    console.error('[CLI-ERROR] Missing primary linter script:', linterPath);
    process.exit(1);
  }
  const chk = spawnSync(process.execPath, ['--check', linterPath], { encoding: 'utf8' });
  if (chk.status !== 0) {
    console.error('[CLI-ERROR] Syntax check failed:', chk.stderr);
    process.exit(1);
  }
  console.log('[CLI-OK] skill-commercialization-factory package and linter AST verified.');
  process.exit(0);
}

if (cmd === 'init') {
  const targetDir = path.resolve(args[1] || process.cwd());
  fs.mkdirSync(targetDir, { recursive: true });
  for (const folder of ['.cursor', '.claude', '.agents', 'rules', 'scripts', 'bin']) {
    const src = path.join(PKG_ROOT, folder);
    if (fs.existsSync(src)) {
      fs.cpSync(src, path.join(targetDir, folder), { recursive: true });
    }
  }
  for (const rootDoc of ['product.manifest.json', 'CLAUDE.md', 'GEMINI.md', 'QUICKSTART-30S.md', 'llms.txt', 'package.json']) {
    const srcDoc = path.join(PKG_ROOT, rootDoc);
    const destDoc = path.join(targetDir, rootDoc);
    if (fs.existsSync(srcDoc) && !fs.existsSync(destDoc)) {
      fs.copyFileSync(srcDoc, destDoc);
    }
  }
  console.log('[CLI-INIT] Installed skill-commercialization-factory into ' + targetDir);
  process.exit(0);
}

console.error('Unknown command: ' + cmd + '. Run with --help for usage.');
process.exit(1);
