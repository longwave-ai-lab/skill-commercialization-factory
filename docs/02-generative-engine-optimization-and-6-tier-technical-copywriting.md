# Monograph 02: Generative Engine Optimization (GEO) & 6-Tier Technical Storefront Engineering

> **Product**: AI Skill & DevTool Commercialization Factory (`skill-commercialization-factory`)  
> **Module Reference**: Module 02 (`02-geo-monograph-and-storefront-engine.md` / `RULE-GEO-STOREFRONT-ENGINE`)  
> **Author**: Longwave AI Lab (`longwave-ai-lab`) | **License**: MIT (Starter) / Commercial (`$19` Pro Bundle)

---

## 1. Why Developer Tools Fail to Convert: The Brochure Trap & RAG Embedding Dilution

Independent developers and AI tooling studios routinely make two opposite mistakes when launching a new skill, CLI harness, or rule system:

1. **Mistake #1 - The 200-Word Marketing Brochure Trap**:
   - The author writes a brief `README.md` or Gumroad product description consisting of five generic bullet points (*"Boost productivity 10x! Clean code! Works with Cursor and Claude!"*) without showing a single line of executable code, before-and-after diff, or mechanistic explanation.
   - Senior engineers evaluate tools with deep skepticism. When a product page hides its implementation mechanics behind marketing adjectives, experienced buyers assume the package is thin prompt-slop and close the tab immediately.
   - Furthermore, generative search engines (**Perplexity**, **ChatGPT Search**, **Google AI Overviews**) rank technical repositories based on **citation density, quantitative statistics, and structured schema blocks** (*Aggarwal et al., ACM SIGKDD 2024*). A shallow 200-word brochure contains zero extractable entities and remains invisible to AI search.
2. **Mistake #2 - The 20,000-Word Unsharded Monolith Trap (`RAG Embedding Dilution`)**:
   - Attempting to fix thin copy by dumping 20,000 words of unrelated documentation into a single `README.md` file triggers a second failure mode: **vector embedding dilution**.
   - Retrieval-Augmented Generation (`RAG`) pipelines split documents into `256 to 512 token` chunks and compute dense vector embeddings for each chunk. When one giant file mixes installation guides, pricing tables, compiler internals, and social distribution rules without clean modular boundaries, semantic similarity scores drop across specific technical queries.

The **GEO Monograph & TipTap Storefront Engine (`Module 02`)** resolves both failure modes by pairing a **6-Tier Flagship `README.md` (`3,000 to 3,800 words`)** with **3 Sharded Technical Monographs (`docs/01..03.md`, `1,500 to 2,200 words` each)** and a **Semantic TipTap HTML Compiler** for Gumroad.

---

## 2. The 6-Tier Technical Persuasion Architecture

Every flagship `README.md` and `GUMROAD-COPY-PASTE.md` compiled by the Factory must satisfy six deterministic persuasion layers:

| Persuasion Tier | Target Engineering Buyer Question | Mandatory Structural Elements | Empirical / Research Grounding |
| :--- | :--- | :--- | :--- |
| **Tier 1: Acid Test & GEO YAML** | *"Can I verify this works in 30 seconds, and can AI search parse its specs?"* | Copy-paste bait prompt (`The 30-Second Acid Test`), `$0+` vs `$19` matrix, and YAML GEO schema inside `<details>`. | **ACM SIGKDD 2024 (GEO)**: Structured statistics and schema blocks boost AI citation visibility by up to `40%`. |
| **Tier 2: 4 Mechanistic Root Causes** | *"Does the author understand the actual systems engineering root cause?"* | 4 numbered root-cause diagnoses linking failure symptoms to compiler, context, or platform mechanics. | **Stanford TACL 2023 (*Lost in the Middle*)**: Explains why monolithic unsharded prompts decay in recall. |
| **Tier 3: 3 Before vs. After Teardowns** | *"What does the exact input and output diff look like on a real codebase?"* | `### Teardown 1..3` (English) and `#### Tình Huống 1..3` (Vietnamese) with side-by-side code and terminal tables. | Concrete code diffs eliminate buyer uncertainty and prove executable utility prior to checkout. |
| **Tier 4: ASCII Flow, ROI & Boundaries** | *"Is `$19` worth the time saved, and when should I NOT buy this?"* | ASCII pipeline diagram + collapsible `<details>` blocks for `Token & Time Economics` and `Explicit Boundaries`. | Explicit non-goals (`When NOT to Use`) act as a high-trust signal for senior software engineers. |
| **Tier 5: Peer-Reviewed Citations** | *"Are the numeric thresholds arbitrary or backed by primary literature?"* | Markdown table mapping every enforced threshold (`<= 200 lines`, `exit code 1`, `<= 45w`) to peer-reviewed citations. | **SWE-agent (NeurIPS 2024, arXiv:2405.15793)**: Proves deterministic ACI linters outperform prose reminders. |
| **Tier 6: 1:1 Native Vietnamese Edition** | *"Can Vietnamese engineering teams read the full spec without translationese?"* | Complete 1:1 Vietnamese technical specification written in direct Topic-Comment syntax (`<= 45 words/sentence`). | **GS. Cao Xuân Hạo (1991)**: Topic-Comment clauses reduce cognitive load and BPE token inflation. |

---

## 3. Sharded GEO Monograph Architecture (`docs/01..03.md`)

Instead of bloating `README.md` past 10,000 words, Module 02 enforces a **Hub-and-Spoke GEO Topology**:

```text
+-------------------------------------------------------------------------+
|                    HUB: github-repo/README.md (3,000+ words)            |
|  - YAML GEO Citation Schema + 30-Second Acid Test                       |
|  - 4 Mechanistic Root Causes + 3 EN / 3 VI Before vs. After Teardowns   |
|  - Peer-Reviewed Citations Table + Direct Links to Monographs 01..03    |
+-------------------+-----------------+-----------------+-----------------+
                    |                 |                 |
      +-------------+                 |                 +-------------+
      |                               |                               |
      v                               v                               v
+---------------------------+ +---------------------------+ +---------------------------+
| SPOKE 01: docs/01-*.md    | | SPOKE 02: docs/02-*.md    | | SPOKE 03: docs/03-*.md    |
| Single-Source Compilation | | GEO & TipTap Storefront   | | Dual-Layer & Jev Harness  |
| - >= 1,400 words (EN+VI)  | | - >= 1,400 words (EN+VI)  | | - >= 1,400 words (EN+VI)  |
| - Unique ratio >= 0.23    | | - Unique ratio >= 0.23    | | - Unique ratio >= 0.23    |
| - High-density RAG chunks | | - High-density RAG chunks | | - High-density RAG chunks |
+---------------------------+ +---------------------------+ +---------------------------+
```

Why this topology maximizes generative search retrieval:
1. **High Cosine Similarity per Retrieval Chunk**: Each file in `docs/01..03.md` focuses 100% of its vocabulary on a single high-intent engineering cluster (for example, *multi-agent `.mdc`/`SKILL.md` compilation*, *GEO technical copywriting & TipTap DOM serialization*, or *Dual-Layer deterministic/Jev verification*).
2. **Lexical Entropy Floor (`>= 0.23`)**: `factory.mjs audit` computes the ratio of unique normalized words to total words across each monograph (`computeUniqueRatio(text) >= 0.23`) to prevent repetitive keyword stuffing.
3. **Bi-Directional Anchor Integrity**: `README.md` links directly to all three monographs in both its badge header and its citations table, ensuring web crawlers index the entire spoke graph in a single hop.

---

## 4. Gumroad TipTap DOM Compilation & PowerShell Dollar-Token Protection

Publishing long-form technical documentation to **Gumroad (`longwave04.gumroad.com`)** exposes two notorious platform traps that silently ruin live product pages:

### Trap A: ProseMirror / TipTap Plain-Text Injection (`insertText` Collapse)
Gumroad's product description editor runs on **TipTap (ProseMirror)**. If an automation script or operator pastes raw text via browser `insertText` events, TipTap strips semantic block nodes (`<h3>`, `<h4>`, `<ul>`, `<ol>`, `<li>`, `<pre><code>`, `<hr>`) and flattens the entire 2,500-word specification into unformatted `<p>` tags.
- **Factory Solution**: `factory.mjs compile` parses `GUMROAD-COPY-PASTE.md` and compiles a dedicated semantic HTML payload at `gumroad-package/GUMROAD-TIPTAP-PAYLOAD.html`.
- **Deterministic DOM Audit (`[GEO-004]`)**: Before any storefront update is marked healthy, `lint_geo_storefront_engine.mjs` verifies the compiled HTML payload. It requires at least **4 `<p>` tags, 5 `<ul>` lists, and 20 `<li>` list items**, with zero em-dashes and zero prose semicolons.

### Trap B: PowerShell `$0` / `$19` Variable Expansion & UTF-8 Mojibake
When operators run inline PowerShell commands containing double-quoted strings like `"Tier 1 ($0+) vs Pro Pack ($19)"`, PowerShell evaluates `$0` and `$19` as undefined shell variables and replaces them with empty strings (`"Tier 1 (+) vs Pro Pack ()"`). Similarly, piping unescaped Vietnamese text through Windows console codepages replaces accented characters with literal ASCII `?` marks (`"Ph?n m?m"`).
- **Factory Solution**: All storefront and GraphQL payloads are written directly to disk as UTF-8 files by Node.js, and `[GEO-004]` scans for stripped dollar patterns (`/Free\s*\+|Pro\s+Pack\s*\(\s*\)/`) and ASCII `?` mojibake (`/[a-zA-Z\u00C0-\u1EF9]\?[a-zA-Z\u00C0-\u1EF9]/`).

---

## 5. Tài Liệu Chuyên Khảo Tiếng Việt: Tối Ưu Hóa Công Cụ Tìm Kiếm AI (GEO) & Kỹ Thuật Mặt Tiền 6 Tầng

### 5.1. Hai Cái Bẫy Khiến Sản Phẩm Kỹ Thuật Không Bán Được Hàng

Khi đưa một bộ quy tắc AI hoặc công cụ lập trình lên GitHub và Gumroad, phần lớn tác giả thường rơi vào một trong hai thái cực sai lầm:

1. **Bẫy Tờ Rơi Quảng Cáo Ngắn Ngủi (`Brochure Trap`)**:
   - Tác giả chỉ viết vài trăm chữ quảng cáo chung chung kiểu *"Tăng tốc độ code gấp 10 lần! Hỗ trợ Cursor và Claude!"* mà không trưng ra nổi một bảng đối chiếu mã nguồn Trước và Sau hay cơ chế hoạt động cụ thể.
   - Lập trình viên có kinh nghiệm rất dị ứng với lời quảng cáo sáo rỗng. Khi không thấy bằng chứng kỹ thuật thực chất, họ lập tức đóng trang vì nghĩ đây lại là một gói văn mẫu sơ sài.
   - Hơn nữa, các công cụ tìm kiếm AI hiện đại (**Perplexity**, **ChatGPT Search**, **Google AI Overviews**) ưu tiên trích dẫn những tài liệu có **bảng số liệu định lượng và trích dẫn nghiên cứu gốc** (*ACM SIGKDD 2024*). Một trang giới thiệu ngắn ngủn kiểu tờ rơi sẽ hoàn toàn vô hình trước các bộ máy tìm kiếm này.
2. **Bẫy Nhồi Nhét Một File Khổng Lồ Làm Loãng Vector Tìm Kiếm (`Embedding Dilution`)**:
   - Ngược lại, nếu bạn nhồi 20.000 chữ đủ mọi chủ đề vào một file `README.md` duy nhất, hệ thống tìm kiếm RAG sẽ bị nhiễu ngữ nghĩa. Điều này làm giảm điểm tương đồng khi người dùng hỏi các câu hỏi chuyên sâu.

**Mô-đun 02 (`RULE-GEO-STOREFRONT-ENGINE`)** giải quyết tận gốc cả hai lỗi trên bằng **Mặt tiền `README.md` 6 Tầng (`>= 3.000 chữ`)** và **Bài giới thiệu `GUMROAD-COPY-PASTE.md` (`>= 2.500 chữ`)**. Hệ thống kết hợp thêm **3 Chuyên khảo độc lập `docs/01..03.md`** cùng **Trình biên dịch HTML cho Gumroad**.

### 5.2. Giải Phẫu Kiến Trúc Thuyết Phục 6 Tầng Chuẩn Quốc Tế

Mọi trang sản phẩm xuất xưởng từ nhà máy đều phải đi qua đủ 6 tầng lập luận chặt chẽ:
1. **Tầng 1 - Khối Dữ Liệu GEO YAML & Bài Thử Quỳ Tím 30 Giây**: Đặt câu lệnh thử lửa (`The 30-Second Acid Test`) ngay đầu trang để người đọc kiểm nghiệm trong 30 giây. Đi kèm là khối YAML khai báo thông số cho công cụ tìm kiếm AI.
2. **Tầng 2 - Giải Phẫu 4 Nguyên Nhân Gốc Rễ**: Chỉ rõ vì sao cách làm thủ công mặc định luôn dẫn đến lỗi lệch phiên bản, mất định dạng trên cửa hàng hoặc sót bước kiểm tra.
3. **Tầng 3 - Ba Ca Phẫu Thuật Trước & Sau Có Thật**: Đặt 3 bảng đối sánh bằng tiếng Anh (`### Teardown 1..3`) và 3 bảng bằng tiếng Việt (`#### Tình Huống 1..3`). Mỗi bảng trưng bày rõ cấu hình lỗi trước khi dùng và kết quả sạch sau khi áp dụng.
4. **Tầng 4 - Kinh Tế Học Token & Ranh Giới Không Sử Dụng**: Tính toán cụ thể số giờ làm việc tiết kiệm được so với mức giá `$19`. Đồng thời, tài liệu thẳng thắn khuyên người đọc **khi nào KHÔNG nên mua** để xây dựng niềm tin.
5. **Tầng 5 - Bảng Thông Số Định Lượng & Trích Dẫn Nghiên Cứu Gốc**: Liên kết từng con số kỹ thuật với các công trình khoa học uy tín (`Stanford TACL 2023`, `arXiv:2405.15793`, `ACM SIGKDD 2024`, `GS. Cao Xuân Hạo`).
6. **Tầng 6 - Bản Tiếng Việt Tự Nhiên Ngang Hàng 1:1**: Toàn bộ phần tiếng Việt được viết bằng cấu trúc câu Đề - Thuyết tự nhiên, tối đa `45 chữ mỗi câu`, hoàn toàn không dùng dấu gạch ngang dài hay dấu chấm phẩy trong văn xuôi.

### 5.3. Bảo Vệ Cấu Trúc HTML Trên Gumroad & Chặn Lỗi Mất Ký Hiệu Giá Tiền `$19`

Khi cập nhật nội dung lên cửa hàng Gumroad, trình biên dịch của nhà máy tự động chuyển đổi file `GUMROAD-COPY-PASTE.md` thành file `gumroad-package/GUMROAD-TIPTAP-PAYLOAD.html` chứa đầy đủ các thẻ `<h3>`, `<h4>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<code>` và `<hr>`.

Bộ lọc `scripts/lint_geo_storefront_engine.mjs` sẽ tự động kiểm tra:
- Đảm bảo file HTML có tối thiểu `4 thẻ <p>`, `5 thẻ <ul>` và `20 thẻ <li>` để giao diện hiển thị thoáng đãng, sắc nét.
- Chặn đứng lỗi biến mất ký hiệu `$0+` hoặc `$19` do truyền chuỗi sai cách qua PowerShell, đồng thời chặn mọi lỗi biến dấu tiếng Việt thành dấu chấm hỏi `?`.

```bash
# Chạy bộ lọc kiểm tra kiến trúc mặt tiền 6 tầng và file HTML TipTap
node scripts/lint_geo_storefront_engine.mjs
```

---

## 6. Reference Specification: Markdown-to-TipTap Semantic Node Mapping

When `factory.mjs compile` transforms `GUMROAD-COPY-PASTE.md` into `gumroad-package/GUMROAD-TIPTAP-PAYLOAD.html`, it applies a strict deterministic mapping so Gumroad's ProseMirror schema preserves 100% of visual hierarchy:

| Source Markdown Construct | Compiled TipTap HTML Tag | Enforced Structural Invariant |
| :--- | :--- | :--- |
| **`# Title` / `## Section`** | `<h3>Section Heading</h3>` | Top-level storefront section divider with clean vertical rhythm. |
| **`### Sub` / `#### Case`** | `<h4>Subsection Heading</h4>` | Used for `Teardown 1..3` and `Tình Huống 1..3` sub-headers. |
| **Standard Prose Paragraph** | `<p>Paragraph text...</p>` | Minimum `4` `<p>` blocks required (`[GEO-004]`), `0` em-dashes, `0` prose semicolons. |
| **Unordered Bullet List (`-`)** | `<ul><li>...</li></ul>` | Minimum `5` `<ul>` blocks and `20` `<li>` items required (`[GEO-004]`). |
| **Numbered Ordered List (`1.`)** | `<ol><li>...</li></ol>` | Preserves step-by-step installation and root-cause numbering. |
| **Markdown Comparison Table** | `<ul><li>Col A : Col B</li></ul>` | Converts table rows into clean TipTap list items since Gumroad TipTap lacks native `<table>` nodes. |
| **Fenced Code Block** | `<pre><code>...</code></pre>` | HTML-escapes `<`, `>`, `&`, and `"` while preserving exact indentation. |
| **Inline Code & Bold** | `<code>...</code>` / `<strong>...</strong>` | Highlights CLI commands, filenames, and `$0+` / `$19` price tokens. |
| **Horizontal Divider (`---`)** | `<hr>` | Separates the 6 persuasion tiers cleanly on mobile and desktop viewports. |

### 6.1. Checklist Kiểm Toán Mặt Tiền 10 Điểm Trước Khi Lên Sóng

Trước khi đẩy mã nguồn lên GitHub hoặc cập nhật mô tả trên Gumroad, người vận hành có thể đối chiếu nhanh 10 tiêu chí bắt buộc dưới đây:

1. **Khối dữ liệu GEO YAML**: Đã khai báo đủ `mechanistic_root_causes_solved`, `quantitative_engineering_thresholds` và `architecture_modules`.
2. **Câu lệnh thử lửa 30 giây (`The 30-Second Acid Test`)**: Có sẵn cả bản tiếng Anh lẫn bản tiếng Việt ngay đầu bài để người đọc thử nghiệm trực tiếp.
3. **Bảng so sánh hai gói `$0+` và `$19`**: Ghi rõ phạm vi Mô-đun 01 miễn phí chuẩn MIT và trọn bộ 4 Mô-đun trong gói Pro.
4. **Bốn nguyên nhân gốc rễ**: Giải thích bằng cơ chế kỹ thuật máy tính thay vì dùng tính từ quảng cáo chung chung.
5. **Ba ca phẫu thuật Trước & Sau tiếng Anh (`### Teardown 1..3`)**: Có bảng đối sánh trực diện cấu hình lỗi và cấu hình chuẩn.
6. **Ba tình huống thực chiến tiếng Việt (`#### Tình Huống 1..3`)**: Viết bằng tiếng Việt tự nhiên, không dịch máy ngô nghê.
7. **Hộp đóng mở Kinh tế học Token & Thời gian (`Token & Time Economics`)**: Chứng minh rõ giá trị tiết kiệm hàng chục giờ làm việc so với mức phí `$19`.
8. **Hộp đóng mở Ranh giới Không sử dụng (`Explicit Boundaries`)**: Nói rõ khi nào người đọc không cần mua bộ công cụ này.
9. **Bảng trích dẫn học thuật chuẩn GEO**: Có mặt đầy đủ `Stanford TACL 2023`, `arXiv:2405.15793`, `ACM SIGKDD 2024` và `GS. Cao Xuân Hạo`.
10. **File HTML TipTap (`GUMROAD-TIPTAP-PAYLOAD.html`)**: Đạt tối thiểu `4 thẻ <p>`, `5 thẻ <ul>`, `20 thẻ <li>`, giữ nguyên ký hiệu `$0+`, `$19` và không dính bất kỳ dấu gạch ngang dài nào.

### 6.2. Lệnh Kiểm Tra Toàn Diện Từ Trình Biên Dịch Nhà Máy

```bash
# Bước 1: Biên dịch lại file HTML TipTap từ GUMROAD-COPY-PASTE.md
node "C:/Users/admin/.gemini/config/skills/ai-product-funnel-ops/scripts/factory.mjs" compile .

# Bước 2: Chạy bộ lọc kiểm tra chuyên sâu cho Mô-đun 02
node scripts/lint_geo_storefront_engine.mjs

# Bước 3: Kiểm tra toàn bộ liên kết nội bộ và độ đa dạng từ vựng của 3 bài chuyên khảo
node scripts/verify_and_build_product.mjs
```

### 6.3. Bảng Tra Cứu Nhanh Các Mã Lỗi Của Bộ Lọc Mặt Tiền (`[GEO-001..005]`)

Khi chạy lệnh `node scripts/lint_geo_storefront_engine.mjs`, nếu bất kỳ tiêu chí nào bị vi phạm, bộ lọc sẽ dừng lại với `exit code 1` và in ra mã lỗi cụ thể theo bảng dưới đây:

| Mã lỗi (`Error Code`) | Nguyên nhân kích hoạt lỗi | Hướng xử lý nhanh |
| :--- | :--- | :--- |
| **`[GEO-001]`** | Đường dẫn thư mục truyền vào không tồn tại trên ổ cứng. | Truyền đúng đường dẫn thư mục gốc của sản phẩm hoặc dấu chấm `.`. |
| **`[GEO-002]`** | File `README.md` bị thiếu hoặc sót một trong các phần bắt buộc của 6 tầng thuyết phục. | Kiểm tra lại khối GEO YAML, `The 30-Second Acid Test`, `Teardown 1..3`, `Tình Huống 1..3` và bảng trích dẫn. |
| **`[GEO-003]`** | File `GUMROAD-COPY-PASTE.md` thiếu thông tin giá `$0+` / `$19` hoặc dính dấu gạch ngang dài. | Thay thế toàn bộ dấu gạch ngang dài bằng dấu hai chấm hoặc tách thành hai câu đơn ngắn gọn. |
| **`[GEO-004]`** | File `GUMROAD-TIPTAP-PAYLOAD.html` chưa được biên dịch hoặc thiếu số lượng thẻ `<p>`, `<ul>`, `<li>`. | Chạy lại lệnh `factory.mjs compile .` và đảm bảo file nguồn có đủ tối thiểu 5 danh sách gạch đầu dòng. |
| **`[GEO-005]`** | Chưa đủ 3 bài chuyên khảo trong `docs/` hoặc độ đa dạng từ vựng tụt xuống dưới ngưỡng `0.23`. | Viết bổ sung các ví dụ thực tế đa dạng, tránh sao chép lặp đi lặp lại cùng một đoạn văn mẫu. |

### 6.4. Nguyên Tắc Duy Trì Giọng Văn Tự Nhiên Song Ngữ Anh - Việt

Để bài giới thiệu sản phẩm vừa thuyết phục được kỹ sư quốc tế vừa tạo thiện cảm tự nhiên với người đọc Việt Nam, người viết cần tuân thủ nghiêm ngặt bốn nguyên tắc biên tập sau đây:

1. **Không trộn lẫn hai ngôn ngữ trong cùng một câu văn**: Phần tiếng Anh viết chuẩn văn phong kỹ thuật quốc tế, phần tiếng Việt trình bày thành đoạn riêng với nhãn `**Tiếng Việt**:` rõ ràng.
2. **Giữ nguyên tên gọi các công cụ quen thuộc**: Những từ phổ biến như `GitHub`, `Cursor`, `Claude Code`, `JSON`, `HTML`, `CLI`, `file`, `link`, `token` được giữ nguyên tự nhiên, không dịch gượng ép sang những cụm từ lạ lẫm.
3. **Kiểm soát chặt độ dài từng câu**: Mỗi câu văn chỉ truyền tải trọn vẹn một ý chính và không vượt quá `45 chữ` để người đọc lướt nhanh trên màn hình điện thoại vẫn nắm bắt được ngay lập tức.
4. **Tuyệt đối không dùng dấu gạch ngang dài và dấu chấm phẩy ngoài khối lệnh**: Việc loại bỏ hai dấu câu này giúp văn bản sạch sẽ, mạch lạc và vượt qua 100% các bài kiểm tra tự động của nhà máy.

### 6.5. Quy Trình Dán Mã HTML Vào Trình Soạn Thảo TipTap Của Gumroad

Để nội dung hiển thị trên trang bán hàng Gumroad có đầy đủ tiêu đề lớn nhỏ, chữ in đậm, danh sách gạch đầu dòng và khung mã lệnh rõ ràng mà không bị dính vào nhau thành một khối chữ thô:

1. Chạy lệnh `factory.mjs compile .` để hệ thống sinh tự động file `gumroad-package/GUMROAD-TIPTAP-PAYLOAD.html`.
2. Mở file `gumroad-package/GUMROAD-TIPTAP-PAYLOAD.html` trên trình duyệt web bất kỳ (Chrome, Edge hoặc Firefox).
3. Nhấn tổ hợp phím `Ctrl + A` rồi `Ctrl + C` ngay trên cửa sổ trình duyệt để sao chép toàn bộ định dạng Rich Text (`text/html` clipboard payload).
4. Mở trang quản trị sản phẩm trên Gumroad, xóa sạch ô mô tả cũ và nhấn `Ctrl + V` để trình soạn thảo TipTap nhận diện chính xác từng thẻ `<h3>`, `<h4>`, `<p>`, `<ul>`, `<li>` và `<pre><code>`.
5. Nhấn nút `Save changes` trên Gumroad và kiểm tra lại giao diện thực tế trên cả màn hình máy tính lẫn điện thoại.



