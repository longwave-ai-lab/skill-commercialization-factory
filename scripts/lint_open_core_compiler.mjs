#!/usr/bin/env node
/**
 * MODULE 01 LINTER: Open-Core Skill Packaging & Multi-Agent Compiler Auditor (RULE-OPEN-CORE-SKILL-COMPILER)
 * Enforces product.manifest.json completeness, <= 200 line root constitutions, .mdc/SKILL.md frontmatter,
 * llms.txt presence, and executable npx package.json bin configuration.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TARGET_ROOT = fs.existsSync(path.join(ROOT, 'CLAUDE.md'))
  ? ROOT
  : fs.existsSync(path.join(ROOT, 'github-repo', 'CLAUDE.md'))
  ? path.join(ROOT, 'github-repo')
  : ROOT;
const MANIFEST_PATH = path.join(ROOT, 'product.manifest.json');
const MAX_ROOT_LINES = 200;

let violations = [];

// Gate 1: Verify product.manifest.json exists and declares valid schema
if (!fs.existsSync(MANIFEST_PATH)) {
  violations.push(
    '[COMPILER-001] Missing product.manifest.json in workspace root. Run factory.mjs init to scaffold manifest.'
  );
} else {
  try {
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    if (!manifest.slug || manifest.brand !== 'Longwave AI Lab' || !Array.isArray(manifest.modules) || manifest.modules.length === 0) {
      violations.push(
        '[COMPILER-001] product.manifest.json must declare slug, brand="Longwave AI Lab", and non-empty modules[].'
      );
    }
  } catch (err) {
    violations.push(`[COMPILER-001] Invalid JSON in product.manifest.json: ${err.message}`);
  }
}

// Gate 2: Verify root constitutions (CLAUDE.md, GEMINI.md) do not exceed 200 lines
for (const rootFile of ['CLAUDE.md', 'GEMINI.md']) {
  const p = path.join(TARGET_ROOT, rootFile);
  if (!fs.existsSync(p)) {
    violations.push(`[COMPILER-002] Missing root constitution file: ${rootFile}.`);
  } else {
    const lineCount = fs.readFileSync(p, 'utf8').split(/\r?\n/).length;
    if (lineCount > MAX_ROOT_LINES) {
      violations.push(
        `[COMPILER-002] Root constitution ${rootFile} has ${lineCount} lines (exceeds hard ceiling of ${MAX_ROOT_LINES} lines).`
      );
    }
  }
}

// Gate 3: Verify .cursor/rules/*.mdc files contain valid YAML frontmatter
const cursorRulesDir = path.join(TARGET_ROOT, '.cursor', 'rules');
if (!fs.existsSync(cursorRulesDir)) {
  violations.push('[COMPILER-003] Missing .cursor/rules directory.');
} else {
  const mdcFiles = fs.readdirSync(cursorRulesDir).filter((f) => f.endsWith('.mdc'));
  if (mdcFiles.length === 0) {
    violations.push('[COMPILER-003] No compiled .mdc files found inside .cursor/rules/.');
  }
  for (const f of mdcFiles) {
    const txt = fs.readFileSync(path.join(cursorRulesDir, f), 'utf8');
    if (!txt.startsWith('---\n') && !txt.startsWith('---\r\n')) {
      violations.push(`[COMPILER-003] .cursor/rules/${f} is missing YAML frontmatter.`);
    } else if (!txt.includes('description:') || !txt.includes('globs:') || !txt.includes('alwaysApply:')) {
      violations.push(`[COMPILER-003] .cursor/rules/${f} frontmatter must include description, globs, and alwaysApply.`);
    }
  }
}

// Gate 4: Verify .claude/skills/*/SKILL.md includes version: 1.0.0 for SkillsDirectory Grade A
const claudeSkillsDir = path.join(TARGET_ROOT, '.claude', 'skills');
if (!fs.existsSync(claudeSkillsDir)) {
  violations.push('[COMPILER-004] Missing .claude/skills directory.');
} else {
  const skillDirs = fs.readdirSync(claudeSkillsDir, { withFileTypes: true }).filter((d) => d.isDirectory());
  if (skillDirs.length === 0) {
    violations.push('[COMPILER-004] No compiled skill directories found inside .claude/skills/.');
  }
  for (const d of skillDirs) {
    const skillPath = path.join(claudeSkillsDir, d.name, 'SKILL.md');
    if (!fs.existsSync(skillPath)) {
      violations.push(`[COMPILER-004] Missing SKILL.md inside .claude/skills/${d.name}/.`);
    } else {
      const sTxt = fs.readFileSync(skillPath, 'utf8');
      if (!sTxt.includes(`name: ${d.name}`) || !sTxt.includes('version: 1.0.0')) {
        violations.push(`[COMPILER-004] .claude/skills/${d.name}/SKILL.md must include name: ${d.name} and version: 1.0.0.`);
      }
    }
  }
}

// Gate 5: Verify llms.txt and npx package.json bin configuration exist
if (!fs.existsSync(path.join(TARGET_ROOT, 'llms.txt'))) {
  violations.push('[COMPILER-005] Missing llms.txt AI discovery index in root.');
}
const pkgPath = path.join(TARGET_ROOT, 'package.json');
if (!fs.existsSync(pkgPath)) {
  violations.push('[COMPILER-005] Missing package.json for npx CLI execution.');
} else {
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    if (!pkg.bin || Object.keys(pkg.bin).length === 0) {
      violations.push('[COMPILER-005] package.json is missing a valid "bin" executable mapping.');
    }
  } catch (err) {
    violations.push(`[COMPILER-005] Invalid JSON in package.json: ${err.message}`);
  }
}

if (violations.length > 0) {
  console.error('❌ [RULE-OPEN-CORE-SKILL-COMPILER FAILED] Packaging & compilation violations detected:');
  for (const v of violations) console.error(`  - ${v}`);
  process.exit(1);
}

console.log('✅ [RULE-OPEN-CORE-SKILL-COMPILER PASSED] All multi-agent targets, llms.txt, and npx CLI verified.');
process.exit(0);
