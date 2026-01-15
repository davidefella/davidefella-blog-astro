---
title: "Errori comuni che faccio ancora progettando con SQL"
description: "Anche dopo anni di esperienza, certi errori tornano. Una lista onesta dei miei sbagli più frequenti."
date: 2026-01-05
tags: ["sql", "database"]
---

Non sono un DBA. Sono uno sviluppatore che usa SQL quotidianamente da anni. E nonostante questo, continuo a fare errori. Ecco i più frequenti.

## Non pensare agli indici fin dall'inizio

"Tanto aggiungo gli indici dopo, quando serve."

Famoso ultimo pensiero prima di avere query che impiegano 30 secondi su tabelle con qualche milione di righe.

## Usare SELECT * in produzione

In sviluppo va bene. In produzione è pigrizia che costa performance.

```sql
-- No
SELECT * FROM users WHERE id = 1;

-- Sì
SELECT id, name, email FROM users WHERE id = 1;
```

## Dimenticare le transazioni

Operazioni che dovrebbero essere atomiche e non lo sono. Poi succede che qualcosa fallisce a metà e ti ritrovi con dati inconsistenti.

```sql
BEGIN TRANSACTION;
-- operazioni
COMMIT;
```

## Non validare i dati prima dell'inserimento

"Tanto il database ha i constraint."

Sì, ma quando il constraint fallisce, l'errore che ricevi è criptico. Meglio validare prima e dare messaggi utili.

---

La cosa bella degli errori è che prima o poi smetti di farli. O almeno, smetti di fare *quegli* errori e ne trovi di nuovi.
