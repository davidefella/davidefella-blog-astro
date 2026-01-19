---
title: "Git: controllo di versione distribuito"
description: "Cos'è Git e perché ogni sviluppatore dovrebbe conoscerlo"
date: 2026-01-03
tags: ["git", "strumenti"]
---

Git è un sistema di controllo versione distribuito che traccia le modifiche in qualsiasi insieme di file, originariamente progettato per coordinare il lavoro tra programmatori che sviluppano codice sorgente durante lo sviluppo software.

## Come funziona

Git tiene traccia delle modifiche ai file creando degli "snapshot" (istantanee) del progetto in momenti specifici. Ogni snapshot è chiamato **commit**.

A differenza dei sistemi centralizzati, Git è distribuito: ogni sviluppatore ha una copia completa della cronologia del progetto sul proprio computer.

## I comandi essenziali

```bash
git init        # inizializza un repository
git add .       # aggiunge file allo staging
git commit -m   # crea un commit
git push        # invia al remote
git pull        # scarica dal remote
```

## Chi ha creato Git

Git è stato creato da Linus Torvalds nel 2005 per lo sviluppo del kernel Linux. Il nome "git" è slang britannico per una persona sgradevole — Torvalds ha detto "Sono un egoista bastardo, e chiamo tutti i miei progetti con il mio nome".

*Contenuto adattato da Wikipedia - placeholder per test*
