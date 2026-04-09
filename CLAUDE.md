# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for LABHDUFBA (Laboratório de Humanidades Digitais da UFBA), built with Hugo + Tailwind CSS using the `hugoplate` theme. It is a bilingual site (English/Portuguese) deployed to GitHub Pages.

## Commands

```bash
# Local development server
npm run dev          # hugo server

# Production build
npm run build        # hugo --gc --minify ...

# Preview production build locally
npm run preview

# Format code (Prettier with Go template + Tailwind plugins)
npm run format
```

Hugo version used in CI: **0.148.1** (extended). Make sure local Hugo version matches or is compatible.

## Architecture

### Bilingual Content Structure

Content is split by language directory:
- `content/english/` → served at `/` (default language)
- `content/portuguese/` → served at `/pt/`

Both directories mirror the same structure. When adding or editing content, changes must be made in **both** language directories to keep the site consistent.

### Content Types

- `blog/` — Blog posts (Markdown)
- `authors/` — Lab member profiles (front matter: `title`, `weight`, `email`, `image`, `description`, `social[]`)
- `pages/` — Static pages (elements, publications, reports, research, tools, youtube, inthenews)
- `sections/` — Homepage partial sections (rendered via `build: render: "never"`, not standalone pages)
- `publications.md`, `research.md`, `reports.md`, etc. — List pages at top level of each language dir

### Theme & Styling

- Theme: `themes/hugoplate/` (do not modify directly)
- Styling: Tailwind CSS v3, configured in `tailwind.config.js` and `postcss.config.js`
- Hugo processes CSS through PostCSS/Tailwind at build time

### Configuration

- `hugo.toml` — Main Hugo config (base URL, theme, plugins list, imaging, build settings)
- `config/_default/languages.toml` — Language definitions (en/pt)
- `config/_default/params.toml` — Site parameters (logo, search, social links, contact form)
- `config/_default/menus.en.toml` / `menus.pt.toml` — Navigation menus per language
- `i18n/en.yaml` / `i18n/pt.yaml` — UI string translations
- `data/social.json`, `data/theme.json` — Structured data consumed by templates

### Deployment

- **GitHub Pages**: CI in `.github/workflows/hugo.yaml` builds and deploys on push to `main`
- **Netlify/Vercel**: Config files present (`netlify.toml`, `vercel.json`, `vercel-build.sh`) but GitHub Pages is the primary deployment target
