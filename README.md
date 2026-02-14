# Translay Website

Translay 宣传官网 — App Store Connect 的 Marketing URL 和 Support URL。

## Tech Stack

- **Astro 5** — 静态站点生成
- **Tailwind CSS 4** — 原子化样式
- **Cloudflare Pages** — 部署

## Languages

- 中文 (默认)
- English
- 日本語
- 한국어

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

推送到 GitHub 后连接 Cloudflare Pages，自动部署。

Build command: `npm run build`
Output directory: `dist`
Node version: 20

## Structure

```
src/
├── components/     # 可复用组件
├── i18n/           # 多语言 JSON
├── layouts/        # 基础布局
├── pages/          # 页面路由
│   ├── zh/         # 中文页面
│   ├── en/         # English
│   ├── ja/         # 日本語
│   └── ko/         # 한국어
└── styles/         # 全局样式
```
