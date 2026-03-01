# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn start    # Dev server with hot reload
yarn build    # Production build
```

Both commands include `NODE_OPTIONS=--openssl-legacy-provider` to work around an OpenSSL 3 incompatibility in webpack 4 (used by VuePress v1) on Node.js 17+.

No test suite is configured.

## Architecture

This is a [VuePress v1](https://v1.vuepress.vuejs.org/) static site — the landing page for **massivenerds.com**, promoting the RetroMatic app.

**Key files:**

- `README.md` — The sole page. Uses VuePress frontmatter (`home: true`) to render the homepage layout with hero image, features, and CTA button.
- `.vuepress/config.js` — Site metadata, plugins (Google Analytics, SEO), and theme config (navbar disabled).
- `.vuepress/styles/palette.styl` — Accent color override (`#16D3C9`).
- `.vuepress/styles/index.styl` — Hides VuePress's default external link icons on the homepage (scoped to `.index-page` class set in frontmatter).
- `.vuepress/public/` — Static assets: favicon, hero logo image, and icon.

**Content changes** are made in `README.md` frontmatter (hero text, features list, CTA link) or by replacing assets in `.vuepress/public/`.

**Style changes** use Stylus (`.styl`) — VuePress v1's default styling preprocessor.
