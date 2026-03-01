# Apple 审核反馈 — 待办与说明

基于 2026-02-18 的 App Store 审核回复整理。Submission ID: `e8110a8b-40c5-4d60-b545-6df3533f55c2`。

---

## 一、Guidelines 5.1.1(i) / 5.1.2(i) — 隐私与第三方 AI 数据

### 审核要求摘要
- **披露**：说清楚会发送哪些数据、发送给谁。
- **同意**：在将个人数据分享给第三方 AI 服务**之前**获得用户同意。
- **隐私政策**：写清收集哪些数据、如何收集、所有用途，以及确认第三方提供同等保护。

### 网站端（已完成）
- [x] 在 **en/zh/ja/ko** 四语隐私政策中：
  - 新增「我们收集的信息及使用方式」总览。
  - 新增「第三方 AI 服务 — 发送的数据与接收方」专节，明确：
    - **发送什么**：追问文本 + 翻译上下文（不含图片/截图）。
    - **发给谁**：第三方 AI 服务提供方（名称在 app 内启用功能、同意前展示）。
    - **何时发送**：仅在用户被告知并同意后发送。
  - 在「第三方服务」中单独列出 AI 提供方，并说明要求其提供同等保护、不用于训练模型。
  - 在「AI 追问 / AI Follow-Up」细则中写明：会先说明数据与接收方并征得同意，再发送。

### App 端（需你完成）
- [ ] **首次使用 AI 功能前**弹出明确说明与同意：
  - 说明会发送哪些数据（追问文本 + 翻译上下文）。
  - 标明第三方 AI 提供方名称（如 OpenAI / Anthropic 等）。
  - 只有用户点击「同意」后才向 AI 服务发送数据。
- [ ] 若实际使用的 AI 提供方有正式名称，建议在隐私政策里直接写上该名称（当前已写明：**翻译为 DeepL，AI 追问为 DeepSeek**）。

---

## 二、Guideline 2.1 — App 完整性（内容无法加载）

### 审核描述
- 应用内容未加载，活动指示器一直转圈。
- 设备：iPad Air 11-inch (M3)，iPadOS 26.2.1。

### 建议排查（App / 后端）
- [ ] 在相同或相近环境（iPad + iPadOS）上复现：全新安装后是否仍无法加载。
- [ ] 若 app 内嵌网页或依赖网络：
  - 检查审核时使用的 URL 是否可被苹果网络访问（无地域/防火墙限制）。
  - 检查 CORS、证书、以及是否需要登录才能看到内容。
- [ ] 若首屏依赖 API：确认 API 在审核时段可用、无 IP/地区限制、超时设置合理。
- [ ] 查看 Networking Overview 等文档，排除网络层问题。

### 网站端（若 app 加载的是本站）
- 确保线上环境在无登录状态下可访问、无仅限本地/开发环境的配置。
- 若有 WebView：避免依赖仅限某些 User-Agent 或地域的逻辑导致空白。

---

## 三、Guideline 2.3.2 — 推广图与内购展示

### 审核描述
- 用于 App Store 的推广图与 app 图标相同，不能充分代表所推广的内购/赢回优惠。

### 操作（仅在 App Store Connect）
- [ ] **方案 A**：为该内购/赢回优惠重新制作**不同的**推广图，能准确代表该内购或优惠。
- [ ] **方案 B**：若近期不打算推广该内购，在 App Store Connect 中**删除**该推广图。

无需改网站或 app 二进制，仅改 Connect 中的素材。

---

## 四、回复审核时的可选话术（英文示例）

- **隐私与 AI**：  
  "We have updated our in-app flow to clearly disclose what data is sent (follow-up question text and translation context), identify the third-party AI provider by name (DeepSeek for AI follow-up; DeepL for translation), and ask for the user’s permission before sending any data to DeepSeek. Our privacy policy at [URL] has been updated to describe this in full and to state that DeepSeek is required to provide the same or equal protection."

- **加载问题**：  
  "We have reproduced and fixed the loading issue on iPad (e.g. [brief cause]). We have tested on iPad Air 11-inch with iPadOS 26.x and the app now loads correctly."

- **推广图**：  
  "We have removed the promotional image for this in-app purchase" 或 "We have uploaded a new promotional image that specifically represents the promoted offer."

---

## 五、相关资源

- [App Review 与审核体验](https://developer.apple.com/app-store/review/)
- [5.1.1(i) 隐私政策要求](https://developer.apple.com/app-store/review/guidelines/#privacy)
- [5.1.2(i) 数据使用与共享](https://developer.apple.com/app-store/review/guidelines/#data-use)
- [Testing a Release Build](https://developer.apple.com/documentation/xcode/testing-a-release-build)
- [Networking Overview](https://developer.apple.com/documentation/foundation/url_loading_system)
