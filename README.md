# davidefella.dev

Blog personale e portfolio di Davide Fella, costruito con [Astro](https://astro.build).

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📁 Struttura

```
src/
├── components/      # Componenti riutilizzabili
├── layouts/         # Layout base e per i post
├── pages/           # Pagine e post del blog
│   └── blog/        # Articoli in Markdown
└── styles/          # CSS globale
```

## 📝 Nuovo post

Crea un file `.md` in `src/pages/blog/`:

```markdown
---
layout: ../../layouts/BlogPost.astro
title: "Titolo"
date: "2026-01-15"
description: "Descrizione breve"
tags: ["Tag1", "Tag2"]
---

Contenuto...
```

## 🎨 Colori

```css
--gold: #E7AF2A;
--blue: #3C80C2;
--bg-primary: #0f1419;
```

## 🚀 Deploy

Vercel (consigliato):
1. Collega repo GitHub
2. Framework: Astro
3. Deploy automatico

## 📧 Newsletter

Il form in `/newsletter` è un placeholder. Integra con Buttondown, ConvertKit, o simili.
