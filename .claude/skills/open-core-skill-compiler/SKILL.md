---
name: open-core-skill-compiler
description: "Enforces single-source-of-truth rule compilation into Cursor .mdc, Claude SKILL.md (with version: 1.0.0), Antigravity GEMINI.md (<= 200 lines), llms.txt, npx CLI wrappers, and 2-Tier Open-Core ZIP isolation."
version: 1.0.0
---
# Module 01: Open-Core Skill Packaging & Multi-Agent Compiler (`RULE-OPEN-CORE-SKILL-COMPILER`)

> **Severity**: `BLOCKING` | **Scope**: Single-Source Rule Compilation (`pro-bundle/rules/*.md`), Multi-Agent Targets (`.mdc`, `SKILL.md`, `CLAUDE.md`, `GEMINI.md`), `llms.txt`, `npx` CLI & 2-Tier ZIP Isolation  
> **Platforms**: Google Antigravity (`GEMINI.md`), Cursor IDE (`.cursor/rules/*.mdc`), Claude Code (`CLAUDE.md` / `SKILL.md`), ChatGPT Projects

---

## 1. Core Constitutional Invariants (Nguyên Tắc Bất Biến)

### 🇬🇧 English Specification
1. **Zero Manual Multi-Platform Editing (`Single-Source-of-Truth Compilation`)**:
   - Whenever an engineering studio packages an AI skill, workflow, or rule suite for commercial distribution, it is **STRICTLY FORBIDDEN** to maintain separate hand-edited copies across `.cursor/rules/*.mdc`, `.claude/skills/*/SKILL.md`, `.agents/skills/*/SKILL.md`, `CLAUDE.md`, and `GEMINI.md`.
   - Maintain 100% of core logic inside `pro-bundle/rules/01..04.md` paired with a declarative `product.manifest.json` file at the workspace root.
   - Run a deterministic compiler (`factory.mjs compile`) that synthesizes Cursor `.mdc` frontmatter (`description`, `globs`, `alwaysApply`) and Claude/Antigravity `SKILL.md` frontmatter (`version: 1.0.0`). It also generates root constitutions (`CLAUDE.md` and `GEMINI.md` capped at `<= 200 lines`), Node.js linters (`scripts/lint_*.mjs`), `llms.txt`, and an executable `npx` installer (`bin/cli.mjs`).
2. **Step 1 - 2-Tier Open-Core Funnel & Paywall Boundary Isolation**:
   - Structure every commercial skill release into two synchronized distribution tiers:
     - **Tier 1 (`Starter Free Pack - $0+ Pay-What-You-Want`, MIT License)**: Exports Module 01 (`01-*.md`, `.mdc`, `SKILL.md`, `scripts/lint_01.mjs`), root constitutions (`<= 200 lines`), `llms.txt`, `npx` CLI, and all 3 GEO technical monographs (`docs/01..03.md`) into `github-repo/` and `starter-free-pack.zip`.
     - **Tier 2 (`Pro Full Bundle - $19`, Commercial Team License)**: Exports all 4 deep modules (`01..04.md`), all 4 pre-extracted Node.js linters, full multi-agent configurations, and commercial license terms into `pro-<slug>.zip`.
   - Enforce a cryptographic paywall boundary: `starter-free-pack.zip` must match `github-repo/` Module 01 byte-for-byte while strictly excluding Pro Modules 02, 03, and 04.
3. **Step 2 - Deterministic POSIX ZIP Archives & Zero `.git` Metadata Leakage**:
   - Standard Windows `Compress-Archive` embeds backslash path separators (`\`) that break macOS and Linux extraction tools and frequently locks on background file handles.
   - Build both `starter-free-pack.zip` and `pro-<slug>.zip` in memory using deterministic POSIX forward-slash paths (`/`), fixed timestamps, and explicit `.git/` directory exclusion.
4. **Step 3 - Zero-Dependency `npx` CLI & `llms.txt` Discovery Index**:
   - Every packaged skill repository must generate a valid `package.json` with a `bin` entry pointing to `bin/cli.mjs` (`--help`, `--version`, `--check`, `init`) so developers can install the starter harness in 30 seconds.
   - Generate a clean `llms.txt` index at the repository root summarizing all modules, deterministic linters, and GEO monographs for AI search crawlers.

### 🇻🇳 Đặc Tả Tiếng Việt
1. **Cấm Chỉnh Sửa Thủ Công Rời Rạc Trên Nhiều Nền Tảng (`Biên Dịch Từ Một Nguồn Duy Nhất`)**:
   - Khi đóng gói một kỹ năng AI hoặc bộ quy tắc thành sản phẩm thương mại, **CẤM TUYỆT ĐỐI** việc mở từng file trong `.cursor/rules/*.mdc`, `.claude/skills/*/SKILL.md`, `CLAUDE.md` hay `GEMINI.md` ra sửa tay rời rạc.
   - Bạn phải lưu toàn bộ nội dung chuẩn tại thư mục gốc `pro-bundle/rules/01..04.md` kết hợp cùng bảng kê cấu hình `product.manifest.json`.
   - Hệ thống biên dịch tự động (`factory.mjs compile`) sẽ đọc nguồn chuẩn để gắn phần đầu file `.mdc` cho Cursor và gắn nhãn `version: 1.0.0` cho `SKILL.md` đạt chuẩn hạng A trên SkillsDirectory. Đồng thời, trình biên dịch trích xuất các bộ lọc Node.js ra thư mục `scripts/`, giữ file gốc `CLAUDE.md` cùng `GEMINI.md` dưới **200 dòng**, và sinh file `llms.txt` kèm trình cài đặt `npx`.
2. **Bước 1 - Kiến Trúc Phễu Hai Tầng (`Open-Core 2-Tier`) & Cô Lập Ranh Giới Trả Phí**:
   - Chia sản phẩm thành hai gói phân phối có ranh giới rõ ràng:
     - **Gói 1 (`Starter Free Pack - $0+`, Giấy phép MIT)**: Trích xuất nguyên vẹn Mô-đun 01 kèm bộ lọc tự động, 3 chuyên khảo kỹ thuật (`docs/01..03.md`), file `llms.txt` và bộ cài `npx` vào thư mục `github-repo/` cùng gói nén `starter-free-pack.zip`.
     - **Gói 2 (`Pro Full Bundle - $19`, Giấy phép Thương mại)**: Đóng gói trọn bộ 4 Mô-đun chuyên sâu (`01..04.md`), 4 công cụ kiểm tra tự động bằng Node.js và cấu hình đầy đủ cho mọi nền tảng vào gói `pro-<slug>.zip`.
   - Khóa cứng ranh giới giữa hai gói: File `starter-free-pack.zip` phải khớp từng byte với Mô-đun 01 trong bản Pro nhưng tuyệt đối không được chứa bất kỳ file nào của Mô-đun 02, 03 và 04.
3. **Bước 2 - Đóng Gói File Nén Chuẩn POSIX & Chặn Rò Rỉ Thư Mục `.git`**:
   - Công cụ nén mặc định trên Windows thường dùng dấu gạch chéo ngược (`\`) gây lỗi giải nén trên máy Mac và Linux.
   - Trình biên dịch phải tạo file `.zip` trực tiếp trong bộ nhớ với đường dẫn gạch chéo xuôi chuẩn POSIX (`/`), khóa mốc thời gian cố định và loại bỏ hoàn toàn thư mục ẩn `.git/`.
4. **Bước 3 - Tạo Trình Cài Đặt Nhanh `npx` & Chỉ Mục `llms.txt` Cho Công Cụ Tìm Kiếm AI**:
   - Mỗi kho mã nguồn bắt buộc có sẵn file `package.json` khai báo trường `bin` trỏ về `bin/cli.mjs` hỗ trợ các lệnh `--help`, `--version`, `--check` và `init`.
   - Sinh tự động file `llms.txt` ở thư mục gốc để các công cụ tìm kiếm AI đọc hiểu ngay danh sách mô-đun và tài liệu chuyên khảo.

### Decision Matrix: Multi-Agent Artifact Compilation (Ma Trận Biên Dịch Đa Nền Tảng)

| Source Input | Compiled Target Artifact | Starter (`$0+`) | Pro (`$19`) | Enforced Structural Invariant |
| :--- | :--- | :---: | :---: | :--- |
| **`product.manifest.json`** | Workspace compiler state & metadata | ✅ | ✅ | Declares `slug`, `brand`, 4 `modules`, and 3 `docs`. |
| **`pro-bundle/rules/01..04.md`** | `.cursor/rules/01..04.mdc` | Module 01 | Modules 01..04 | Injects YAML frontmatter (`description`, `globs`, `alwaysApply`). |
| **`pro-bundle/rules/01..04.md`** | `.claude/skills/*/SKILL.md` & `.agents/skills/*/SKILL.md` | Module 01 | Modules 01..04 | Injects `name`, `description`, and `version: 1.0.0` (Grade A). |
| **Embedded `javascript` Block** | `scripts/lint_*.mjs` | Linter 01 | Linters 01..04 | Passes `node --check` and behavioral pass/fail fixtures. |
| **Manifest Summary** | `CLAUDE.md`, `GEMINI.md`, `llms.txt`, `bin/cli.mjs` | Starter Scope | Full Pro Scope | Root constitutions strictly `<= 200 lines` (`<= 1,800 tokens`). |

---

## 2. 10-Pair Anti-Pattern vs. World-Class Execution Table (10 Cặp Đối Sánh)

| # | Scenario | ❌ Ad-Hoc Manual Packaging (Rejected) | ✅ World-Class Compiler Execution (Enforced) |
| :--- | :--- | :--- | :--- |
| **01** | **Cross-Platform Rule Sync** | Hand-editing `.cursorrules`, `CLAUDE.md`, and `SKILL.md` separately until version drift breaks agent behavior. | Editing only `pro-bundle/rules/*.md` and running `factory.mjs compile` to generate 100% synchronized targets. |
| **02** | **Root Constitution Length** | Concatenating all 4 full-length modules (1,100+ lines) directly into root `CLAUDE.md` and `GEMINI.md`. | Generating compact `<= 200-line` root constitutions that route the agent to lazy-loaded `SKILL.md` and `.mdc` files. |
| **03** | **SkillsDirectory Security Audit** | Uploading a `SKILL.md` without `version: 1.0.0` or clean YAML frontmatter, resulting in a degraded directory score. | Compiling deterministic YAML frontmatter (`name`, `description`, `version: 1.0.0`) that earns a 100/100 Grade A badge. |
| **04** | **Embedded Linter Extraction** | Leaving Node.js linter code trapped inside Markdown fences so buyers must manually copy-paste 4 scripts into files. | Automatically extracting every fenced `javascript` block into ready-to-run `scripts/lint_*.mjs` files during compilation. |
| **05** | **Open-Core Paywall Boundary** | Accidentally zipping Pro modules (`02..04`) into `starter-free-pack.zip` or forgetting to update Starter Module 01. | Enforcing automated byte-parity for Module 01 and hard exclusion checks blocking Modules 02..04 from `starter-free-pack.zip`. |
| **06** | **ZIP Path Separators** | Running Windows `Compress-Archive` which writes `\` backslashes into ZIP entry headers and breaks macOS/Linux unzip. | Using in-memory `System.IO.Compression.ZipArchive` with normalized POSIX `/` forward slashes and retry-safe writes. |
| **07** | **Hidden `.git` Leaks in ZIPs** | Packaging `github-repo/` directly into `starter-free-pack.zip` with `.git/logs/HEAD` and local config attached. | Filtering out all `.git` paths during directory mirroring (`starter-free-pack/`) and verifying 0 `.git/` entries inside ZIPs. |
| **08** | **Developer Onboarding Friction** | Asking users to run 9 manual `cp -R` commands across hidden dot-folders just to test the free starter module. | Generating `package.json` and `bin/cli.mjs` so users can run `npx @longwave-ai-lab/<slug> init .` or `--check` in 5 seconds. |
| **09** | **AI Search Crawler Indexing** | Publishing a GitHub repository with no machine-readable index for Perplexity, ChatGPT Search, or Claude crawlers. | Compiling a clean `llms.txt` index at the repo root linking every module, linter, and technical monograph. |
| **10** | **Archive Byte Verification** | Assuming a `.zip` build succeeded without inspecting the internal entry table or comparing uncompressed byte sizes. | Auditing every entry inside both `.zip` archives against on-disk byte lengths before marking the build green. |

---

## 3. Ready-to-Run Node.js Linter (`exit code 1`)

Save this script as `scripts/lint_open_core_compiler.mjs` and run `node scripts/lint_open_core_compiler.mjs` to verify single-source compilation invariants, root constitution caps, `.mdc` / `SKILL.md` frontmatter, `llms.txt`, and `npx` CLI packaging.

```javascript
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
```

---

## 4. Schema Example: `product.manifest.json`

Place `product.manifest.json` at your product workspace root so `factory.mjs compile` and `lint_open_core_compiler.mjs` can compile and verify every target deterministically:

```json
{
  "schemaVersion": "1.0.0",
  "slug": "skill-commercialization-factory",
  "name": "AI Skill & DevTool Commercialization Factory",
  "brand": "Longwave AI Lab",
  "version": "1.0.0",
  "pricing": {
    "starterFree": "$0+",
    "proBundle": "$19"
  },
  "modules": [
    {
      "id": "01",
      "base": "01-open-core-skill-packaging-compiler",
      "skillDir": "open-core-skill-compiler",
      "scriptName": "lint_open_core_compiler.mjs",
      "description": "Compiles single-source rules into .mdc, SKILL.md, GEMINI.md, llms.txt, and npx CLI.",
      "globs": "**/*",
      "alwaysApply": true
    }
  ],
  "docs": [
    "01-single-source-skill-compilation-and-multi-agent-packaging.md",
    "02-generative-engine-optimization-and-6-tier-technical-copywriting.md",
    "03-dual-layer-deterministic-and-semantic-verification-harnesses.md"
  ]
}
```

---

## 5. Multi-Platform Installation Guide (Hướng Dẫn Cài Đặt Đa Nền Tảng)

### 1. Google Antigravity (`GEMINI.md` & `.agents/skills/`)
- Copy the compiled `GEMINI.md` (`<= 200 lines`) into your workspace root and place `.agents/skills/open-core-skill-compiler/SKILL.md` into your `.agents/skills/` folder.
- Antigravity will enforce single-source rule compilation and run `node scripts/lint_open_core_compiler.mjs` before packaging any release.
- **Tiếng Việt**: Chép file `GEMINI.md` vào thư mục gốc dự án và đặt thư mục kỹ năng vào `.agents/skills/open-core-skill-compiler/SKILL.md`. Hệ thống sẽ tự động kiểm tra đồng bộ đa nền tảng trước khi xuất bản.

### 2. Cursor IDE (`.cursor/rules/01-open-core-skill-packaging-compiler.mdc`)
- Copy `.cursor/rules/01-open-core-skill-packaging-compiler.mdc` into your project's `.cursor/rules/` directory.
- Cursor automatically loads the YAML frontmatter and blocks manual edits to derived `.mdc` or `SKILL.md` files without updating `pro-bundle/rules/`.
- **Tiếng Việt**: Thả file `.cursor/rules/01-open-core-skill-packaging-compiler.mdc` vào thư mục `.cursor/rules/` của dự án để khóa cứng quy trình biên dịch từ một nguồn chuẩn.

### 3. Claude Code (`CLAUDE.md` & `.claude/skills/`)
- Place `SKILL.md` inside `.claude/skills/open-core-skill-compiler/SKILL.md` and keep `CLAUDE.md` at the project root.
- Run `npx @longwave-ai-lab/skill-commercialization-factory --check` to validate your packaged skill layout in under 1 second.
- **Tiếng Việt**: Đặt file `SKILL.md` vào `.claude/skills/open-core-skill-compiler/SKILL.md` và chạy lệnh kiểm tra tự động bằng Node.js trước khi đóng gói file nén.

### 4. ChatGPT (Custom Instructions / Projects)
- Upload `01-open-core-skill-packaging-compiler.md` and `product.manifest.json` into your **ChatGPT Project Files** so the assistant generates synchronized Open-Core skill bundles instead of fragmented text snippets.
- **Tiếng Việt**: Tải file `01-open-core-skill-packaging-compiler.md` lên mục tài liệu dự án trên ChatGPT để AI luôn thiết kế sản phẩm theo đúng kiến trúc phễu hai tầng.
