# Monograph 03: Dual-Layer Deterministic & Semantic Verification Harnesses (`RULE-NORTH-STAR-ARBITRATION`)

> **Product**: AI Skill & DevTool Commercialization Factory (`skill-commercialization-factory`)  
> **Module Reference**: Module 03 (`03-dual-layer-verification-and-mutation-harness.md`) & Module 04 (`04-tos-compliant-omni-channel-distribution-ops.md`)  
> **Author**: Longwave AI Lab (`longwave-ai-lab`) | **License**: MIT (Starter) / Commercial (`$19` Pro Bundle)

---

## 1. The Potemkin Harness Failure Mode in Autonomous AI Pipelines

As software teams automate product packaging, documentation generation, and multi-channel distribution with LLM agents, a dangerous failure pattern emerges: **Potemkin Verification Harnesses**.

A Potemkin harness looks rigorous on the surface because it prints green checkmarks in the terminal, yet it fails to catch real defects due to three architectural flaws:

1. **Flaw #1 - Existence-Only Checks (`Potemkin Linter Stubs`)**:
   - The verification script checks only whether `scripts/lint_01.mjs` exists on disk or contains a literal string (`if (content.includes('process.exit'))`).
   - Under autonomous loop pressure, an agent can satisfy an existence-only check by writing a two-line stub (`console.log("PASS"); process.exit(0);`) that never inspects actual workspace files.
2. **Flaw #2 - Conflating Evaluator Execution State with Evaluation Verdict (`Fake 1.0 Probabilities`)**:
   - Many hybrid pipelines combine a deterministic linter (Layer 1) with an optional LLM-as-a-Judge or semantic evaluator (Layer 2 / Jev).
   - When the developer passes `--no-jev` (or `--skip-llm`) to run a fast offline check, poorly designed scripts default the semantic score to `probability: 1.0` and `verdict: "PASS"`.
   - Later, when someone inspects `product-state.json`, there is no way to distinguish a product that genuinely passed semantic evaluation from a product where semantic evaluation was never executed.
3. **Flaw #3 - Allowing Probabilistic Layer 2 Scores to Override Layer 1 `HARD` Failures**:
   - In weighted-average scoring harnesses (`0.5 * L1 + 0.5 * L2`), a high semantic persuasion score (`0.96`) can mask a broken ZIP archive, a syntax error, or an accidental personal identity leak in `.git/logs/HEAD`.

The **Dual-Layer Verification & Mutation Harness (`Module 03`)** eliminates all three flaws by enforcing the formal **North-Star Dual-Layer Arbitration Protocol (`RULE-NORTH-STAR-ARBITRATION`)**.

---

## 2. Formal Architecture of the Dual-Layer Verification Engine

The Factory verification pipeline (`scripts/factory.mjs audit`) partitions every product audit into a strict sequential state machine:

```text
+-----------------------------------------------------------------------------+
|                        PRODUCT WORKSPACE ARTIFACTS                          |
|  (product.manifest.json, pro-bundle/, github-repo/, gumroad-package/, ZIPs) |
+--------------------------------------+--------------------------------------+
                                       |
                                       v
+-----------------------------------------------------------------------------+
| LAYER 1: DETERMINISTIC VERIFICATION (100% Repeatable AST / Byte / Regex)    |
|  - HARD Criteria:                                                           |
|    * Manifest schema, 40+ required files, PNG dimensions (1280x720, 2400px) |
|    * 1:1 Starter/Pro byte parity & POSIX ZIP isolation (0 .git/ leaks)      |
|    * 0% personal identity leaks across files, git log, and git reflog       |
|    * 0 em-dashes and 0 prose semicolons across Markdown and TipTap HTML      |
|    * Behavioral pass/fail fixture execution of all 4 embedded JS linters    |
|    * [FB-GATE-6..8] Meta ToS compliance & zero browser-bot scripts          |
|  - CONTEXTUAL Criteria:                                                     |
|    * Max sentence length <= 45 words (EN/VI) & 0 two-topic "và" headings    |
+--------------------------------------+--------------------------------------+
                                       |
                    [Any HARD Gate Failed?] ---- YES ----> [LOCK: HARD_FAIL]
                                       |                   (Layer 2 Blocked)
                                      NO
                                       v
+-----------------------------------------------------------------------------+
| LAYER 2: SEMANTIC PERSUASION RUBRIC & JEV DECISION INTEGRATION              |
|  - Deterministic Semantic Structure Rubric:                                 |
|    * 6-Tier Persuasion Architecture (README >= 3000w, Gumroad >= 2500w)     |
|    * 3 EN + 3 VI Side-by-Side Teardowns, ROI & Explicit Boundaries blocks   |
|    * 3 Sharded GEO Monographs (docs/01..03.md >= 1400w, unique >= 0.23)     |
|  - Jev Probabilistic Evaluator State Machine:                               |
|    * executionState: "SUCCESS" | "NOT_RUN" | "TOOL_ERROR"                   |
|    * verdict: "PASS" | "FAIL" | "UNDETERMINED" | "GREY_ZONE_WHITE_FLAG"     |
|    * probability: float (0.0..1.0) ONLY when SUCCESS; strictly null if skip |
+--------------------------------------+--------------------------------------+
                                       |
                                       v
+-----------------------------------------------------------------------------+
| REASONING ARBITRATION & CRYPTOGRAPHIC RECEIPT (product-state.json)          |
|  - If 0.15 < probability < 0.85 -> Activate Reasoning Arbitration           |
|  - Write SHA-256 stage hashes (manifest, README, HTML, llms.txt, 2 ZIPs)    |
+-----------------------------------------------------------------------------+
```

### Quantitative Comparison: Naïve Checklist vs. Dual-Layer Arbitration Harness

| Verification Property | Naïve Prose Checklist / Single Script | Dual-Layer Factory Engine (`factory.mjs`) | Risk Eliminated |
| :--- | :--- | :--- | :--- |
| **Skipped Evaluator Honesty** | Fakes `probability: 1.0` when `--no-jev` is passed | Strictly records `NOT_RUN`, `UNDETERMINED`, `probability: null` | Zero false confidence on unrun semantic checks |
| **Hard Gate Precedence** | Weighted score lets prose quality hide broken files | Any Layer 1 `HARD` failure locks `overallVerdict = "HARD_FAIL"` | Zero chance of shipping broken ZIPs or identity leaks |
| **Embedded Linter Validation** | Checks file existence or regex substring only | Executes each linter on both `pass` (`exit 0`) and `fail` (`exit 1`) fixtures | 100% immunity against Potemkin `exit(0)` stubs |
| **Vietnamese Boundary Accuracy** | Uses ASCII `\b` which misses accented UTF-8 letters | Uses Unicode property lookarounds `(?<!\p{L})...(?!\p{L})` | Catches 100% of accented Vietnamese rule violations |
| **Post-Audit Tamper Detection** | No cryptographic binding between audit and files | Writes 7 SHA-256 stage digests into `product-state.json` | Detects any unverified post-audit file modification |

---

## 3. Deep-Dive: Unicode-Aware Lexical Auditing for Bilingual EN/VI Repositories

A subtle bug in many JavaScript linters is relying on the standard regular expression word boundary assertion `\b` when scanning Vietnamese text.

In ECMAScript regular expressions, `\b` is defined strictly over the 63 ASCII word characters (`[A-Za-z0-9_]`). Every accented Vietnamese character (such as `à`, `ả`, `ã`, `á`, `ạ`, `ê`, `ư`, `ơ`, `đ`) is classified by JavaScript's `\b` engine as a **non-word character (`\W`)**.

Consequently, if a linter checks for two-topic Vietnamese headings glued with the conjunction `"và"` using `/\bvà\b/i`:
- The character `v` is an ASCII word character (`\w`).
- The character `à` (`U+00E0`) is treated as a non-word character (`\W`).
- The trailing space `" "` is also a non-word character (`\W`).
- Because there is no transition between `\w` and `\W` between `à` and `" "`, the pattern `/\bvà\b/i` **never matches a single Vietnamese string**!

The Factory engine (`scripts/factory.mjs` and `lint_dual_layer_harness.mjs`) solves this deterministically by enabling the Unicode property escape flag (`/u`) and replacing ASCII `\b` with Unicode letter lookarounds:

```javascript
// Unicode-safe boundary matching for Vietnamese tokens:
export const TWO_TOPIC_VA_HEADING_REGEX =
  /^#{1,6}\s+[^\r\n]*[\u00C0-\u1EF9][^\r\n]*(?<!\p{L})và(?!\p{L})[^\r\n]*/imu;
```

This exact Unicode boundary discipline is applied across all Vietnamese translationese filters, identity leak scanners, and heading structure gates.

---

## 4. Platform ToS Compliance & Human-in-the-Loop Distribution Governance (`Module 04`)

Commercializing a developer tool requires distributing technical content across community channels (Facebook Groups, Reddit, Hacker News, Dev.to, and GitHub Discussions) without violating platform Terms of Service or triggering automated spam filters.

Module 04 (`RULE-TOS-DISTRIBUTION-OPS`) enforces three hard engineering guardrails:

1. **`[FB-GATE-8]` Zero Browser-Bot ToS Firewall**:
   - Automating `facebook.com` via Puppeteer, Playwright, or Selenium violates *Meta Terms of Service Section 3.2.3*.
   - Both `verify_facebook_ops_action.mjs` and `lint_tos_distribution_ops.mjs` scan every `.js`/`.mjs` file inside `scripts/` and fail with `exit code 1` if any script attempts to connect a headless browser to `facebook.com/groups/`.
2. **`[FB-GATE-7]` Single-Shot Thread Collision Lock (`1 Thread = 1 Comment`)**:
   - Every manual community comment is logged in `distribution-kit/facebook-ops-ledger.json` with its numeric Facebook `threadId`. Attempting to verify or record a second comment on the same `threadId` is rejected immediately with `exit code 1`.
3. **Dual-Anchor Zero-Link Group Posts + 2K Retina Infographics**:
   - All 3 group post templates in `FACEBOOK-GROUP-ZERO-LINK-KIT.md` contain **zero URLs and zero bare `.tld` tokens** (`[FB-GATE-4]`). This prevents `Admin Assist` auto-declines while directing readers to the URL at the bottom of the `2400x1800` infographic or the pinned post on **Longwave AI Lab**.

---

## 5. Tài Liệu Chuyên Khảo Tiếng Việt: Kiến Trúc Kiểm Chứng Hai Lớp & Chống Gian Lận Kiểm Thử

### 5.1. Nguy Cơ Từ Các Bộ Kiểm Tra Hình Thức (`Potemkin Harnesses`)

Khi các nhóm kỹ sư dùng AI để tự động hóa việc đóng gói sản phẩm và kiểm tra chất lượng, có ba lỗ hổng rất dễ biến bộ công cụ kiểm tra thành một lớp vỏ hình thức vô tác dụng:

1. **Chỉ kiểm tra sự tồn tại của file mà không chạy thử hành vi thật**:
   - Nếu kịch bản nghiệm thu chỉ kiểm tra xem file `scripts/lint_01.mjs` có nằm trong thư mục hay không, AI có thể tạo một file rỗng chỉ chứa đúng lệnh `process.exit(0)` để vượt qua chốt chặn.
2. **Đánh đồng việc bỏ qua công cụ chấm điểm với kết quả đạt chuẩn `1.0`**:
   - Khi chạy kiểm tra nhanh ở chế độ ngoại tuyến (`--no-jev` để bỏ qua bước gọi mô hình chấm điểm ngữ nghĩa), nhiều hệ thống tự ý gán luôn điểm xác suất `probability: 1.0` và kết luận `"PASS"`. Cách làm này xóa nhòa ranh giới giữa phần đã kiểm tra thật và phần chưa hề chạy.
3. **Để điểm số ngữ nghĩa ghi đè lên lỗi kỹ thuật bắt buộc (`HARD_FAIL`)**:
   - Nếu cộng trung bình điểm giữa Lớp 1 và Lớp 2, một bài viết có văn phong mượt mà có thể kéo điểm tổng lên cao và che giấu mất lỗi hỏng file `.zip` hoặc lỗi lộ thông tin cá nhân trong lịch sử `.git`.

**Mô-đun 03 (`RULE-DUAL-LAYER-MUTATION-HARNESS`)** khóa cứng cả ba lỗ hổng trên bằng kiến trúc **Kiểm Chứng Hai Lớp Độc Lập**.

### 5.2. Cơ Chế Hoạt Động Của Hai Lớp Kiểm Chứng & Trọng Tài Lý Luận

Khi bạn chạy lệnh `node scripts/factory.mjs audit`, hệ thống thực thi tuần tự qua hai tầng kiểm soát:

- **Lớp 1 - Kiểm Chứng Tất Định (`Deterministic Verification`)**:
  - Kiểm tra toàn bộ các tiêu chí bắt buộc (`HARD`): tồn tại đủ hơn 40 file thành phần, đúng kích thước pixel của 6 tấm ảnh PNG (`1280x720`, `1280x640`, `600x600`, `2400x1800`), và khớp từng byte giữa hai gói nén. Hệ thống cũng quét sạch lịch sử `.git/logs`, cấm dấu gạch ngang dài và cấm dấu chấm phẩy trong văn xuôi.
  - Đặc biệt, Lớp 1 tự động tạo hai thư mục tạm thời cho mỗi mô-đun để chạy thử trực tiếp từng bộ lọc Node.js. Bộ lọc phải vượt qua cả **Mẫu Đạt Chuẩn** (mã thoát `0`) và **Mẫu Vi Phạm** (mã thoát `1`).
  - Kiểm tra các tiêu chí ngữ cảnh (`CONTEXTUAL`): mọi câu văn tiếng Anh và tiếng Việt đều ngắn gọn dưới `45 chữ`, đồng thời không có bất kỳ tiêu đề tiếng Việt nào ghép hai chủ đề rời rạc bằng chữ `"và"`.
- **Lớp 2 - Đánh Giá Thuyết Phục 6 Tầng & Tích Hợp Quyết Định Jev**:
  - Kiểm tra đầy đủ 6 tầng thuyết phục trong `README.md` (`>= 3.000 chữ`), `GUMROAD-COPY-PASTE.md` (`>= 2.500 chữ`) và 3 bài chuyên khảo `docs/01..03.md` (`>= 1.400 chữ`, độ đa dạng từ vựng `>= 0.23`).
  - Tách bạch rõ ràng giữa trạng thái chạy công cụ (`executionState: "NOT_RUN" | "SUCCESS" | "TOOL_ERROR"`) với kết luận đánh giá (`verdict: "UNDETERMINED" | "PASS" | "FAIL" | "GREY_ZONE_WHITE_FLAG"`). Khi truyền cờ `--no-jev`, hệ thống giữ nguyên `probability: null` chứ tuyệt đối không tự gán điểm `1.0` giả tạo.

### 5.3. Ba Mươi Sáu Phép Thử Đột Biến Ngược (`challenge_verification_suite.mjs`)

Để chứng minh hệ thống kiểm tra không thể bị qua mặt, mỗi gói sản phẩm xuất xưởng đều đi kèm bộ kịch bản **36 Phép Thử Đột Biến (`scripts/challenge_verification_suite.mjs`)**:
- Nhóm 1 (8 phép thử): Chạy trực tiếp 4 bộ lọc Node.js trên cả mẫu đúng lẫn mẫu sai trong thư mục cách ly.
- Nhóm 2 (8 phép thử): Kiểm tra độ dày 220 đến 320 dòng, tối thiểu 1.600 chữ, 0 dấu gạch ngang dài, 0 dấu chấm phẩy văn xuôi và 0 lộ danh tính trên cả 4 mô-đun.
- Nhóm 3 (6 phép thử): Giải nén kiểm tra ranh giới bản miễn phí và bản Pro, đảm bảo bản miễn phí không chứa Mô-đun 02, 03, 04 và không dính thư mục `.git/`.
- Nhóm 4 (6 phép thử): Kiểm tra tường lửa bài đăng không chứa link, khóa nhóm chỉ đọc `fb-grp-12`, khóa chống trùng luồng `1 bài = 1 bình luận` và giới hạn trùng lặp từ vựng `SimHash <= 0.50`.
- Nhóm 5 (6 phép thử): Đọc trực tiếp byte nhị phân IHDR của cả 6 file ảnh PNG để xác thực độ phân giải thực tế.
- Nhóm 6 (2 phép thử): Kiểm tra 3 chuyên khảo GEO và chạy tổng duyệt toàn bộ cổng kiểm toán đạt 100%.

```bash
# Chạy trọn bộ 36 phép thử đột biến ngược để kiểm chứng độ bền của hệ thống
node scripts/challenge_verification_suite.mjs
```

---

## 6. Reference Specification: Jev Decision-Integration State Machine (`RULE-NORTH-STAR-ARBITRATION` 6.1–8)

To guarantee zero ambiguity during automated product audits, the Factory engine enforces the following state transition table inside `product-state.json`:

| CLI Invocation Mode | `layer1.verdict` | `layer2.rubricVerdict` | `jevEvaluation.executionState` | `jevEvaluation.verdict` | `jevEvaluation.probability` | Final `overallVerdict` |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`audit --no-jev` (All L1/L2 Pass)** | `PASS` | `PASS` | `NOT_RUN` | `UNDETERMINED` | `null` (Never `1.0`) | **`PASS`** |
| **`audit --jev-report` (`p = 0.94`)** | `PASS` | `PASS` | `SUCCESS` | `PASS` | `0.94` (`>= 0.85`) | **`PASS`** |
| **`audit --jev-report` (`p = 0.55`, No Exc)** | `PASS` | `PASS` | `SUCCESS` | `GREY_ZONE_WHITE_FLAG` | `0.55` (`0.15..0.85`) | **`GREY_ZONE_WHITE_FLAG`** |
| **`audit --jev-report` (`p = 0.55`, Approved)** | `PASS` | `PASS` | `SUCCESS` | `GREY_ZONE_WHITE_FLAG` | `0.55` (`PASS_BY_ARB`) | **`PASS`** |
| **`audit --jev-report` (`p = 0.08`)** | `PASS` | `PASS` | `SUCCESS` | `FAIL` | `0.08` (`<= 0.15`) | **`FAIL`** |
| **`audit --jev-report` (Missing File)** | `PASS` | `PASS` | `TOOL_ERROR` | `UNDETERMINED` | `null` | **`UNDETERMINED`** |
| **Any L1 `HARD` Gate Fails (`p = 0.99`)** | `HARD_FAIL` | Any | Any | Any | Any | **`HARD_FAIL`** |

### 6.1. Nguyên Tắc Bất Biến Khi Vận Hành Trọng Tài Lý Luận (`Reasoning Arbitration`)

Khi điểm xác suất từ bộ chấm điểm ngữ nghĩa rơi vào vùng xám (`0.15 < probability < 0.85`) hoặc khi xuất hiện ngoại lệ ngữ cảnh (`CONTEXTUAL`), hệ thống kích hoạt cơ chế **Trọng Tài Lý Luận**:

1. **Không tự động cho qua một cách mù quáng**: Nếu không có cờ xác nhận ngoại lệ hợp lệ (`contextualExceptionApproved`), hệ thống dừng ở trạng thái `"GREY_ZONE_WHITE_FLAG"` và yêu cầu con người xem xét trực tiếp.
2. **Không bao giờ ghi đè lên lỗi `HARD` của Lớp 1**: Mọi lỗi cú pháp, thiếu file, sai kích thước ảnh, lệch byte trong file `.zip`, lộ danh tính cá nhân hoặc vi phạm điều khoản nền tảng Meta (`[FB-GATE-8]`) đều thuộc nhóm `HARD`. Dù bài viết có hay đến đâu thì hệ thống vẫn chặn đứng với kết luận `"HARD_FAIL"`.
3. **Ghi nhận phạm vi nghiệm thu trung thực**: Trường `scopeStatement` trong `product-state.json` luôn ghi rõ những tầng nào đã được kiểm tra thực tế và tầng nào đang ở trạng thái `NOT_RUN`.

### 6.2. Chuỗi Lệnh Kiểm Toán Toàn Diện Trước Khi Xuất Bản

```bash
# Bước 1: Chạy bộ lọc kiểm tra biên bản trạng thái và vệ sinh ngôn ngữ của Mô-đun 03
node scripts/lint_dual_layer_harness.mjs README.md

# Bước 2: Chạy bộ lọc kiểm tra tuân thủ Điều khoản Nền tảng của Mô-đun 04
node scripts/lint_tos_distribution_ops.mjs

# Bước 3: Chạy trình kiểm toán 239 cổng kết hợp đóng gói tự động
node scripts/verify_and_build_product.mjs
```

