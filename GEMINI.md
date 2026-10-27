# AI Skill & DevTool Commercialization Factory (Starter Edition)

> **Brand**: Longwave AI Lab | **Version**: 1.0.0 | **Root Cap**: `<= 200 lines`

## 1. Core Execution Invariants

- Keep this root constitution file strictly at or below `200 lines` (`<= 1,800 tokens`) so primary attention heads remain sharp on every turn.
- Never rely on prose warnings alone. Every architectural invariant below is backed by an executable zero-dependency Node.js linter in `scripts/` returning `exit code 1` on any violation.
- Maintain 0% personal identity leakage, 0 em-dashes in prose, 0 semicolons in prose, and a strict 45-word maximum sentence ceiling in both English and Vietnamese.

## 2. Active Constitutional Modules & Deterministic Linters

### Module 01: `01-open-core-skill-packaging-compiler`
- **Rule Specification**: `rules/01-open-core-skill-packaging-compiler.md`
- **Cursor Scoped Rule**: `.cursor/rules/01-open-core-skill-packaging-compiler.mdc`
- **On-Demand Skill**: `.claude/skills/open-core-skill-compiler/SKILL.md` & `.agents/skills/open-core-skill-compiler/SKILL.md`
- **Deterministic Linter**: `node scripts/lint_open_core_compiler.mjs` (`exit code 1`)
- **Scope**: Enforces single-source-of-truth rule compilation into Cursor .mdc, Claude SKILL.md (with version: 1.0.0), Antigravity GEMINI.md (<= 200 lines), llms.txt, npx CLI wrappers, and 2-Tier Open-Core ZIP isolation.

## 3. Verification Commands

```bash
node scripts/lint_open_core_compiler.mjs
```
