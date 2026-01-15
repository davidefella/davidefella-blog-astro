---
title: "Cose che confondono sempre gli studenti sui database"
description: "Dopo due anni di insegnamento, ho notato pattern ricorrenti. Ecco i concetti che creano più confusione."
date: 2026-01-10
tags: ["database", "didattica"]
---

Dopo due anni passati a insegnare database, ho iniziato a notare degli schemi. Ci sono concetti che sembrano semplici sulla carta ma che creano confusione sistematicamente.

## La differenza tra NULL e stringa vuota

Questo è il classico. Per chi inizia, `NULL` e `''` sembrano la stessa cosa: "non c'è niente". Ma non lo sono.

- `NULL` significa "non sappiamo il valore"
- `''` significa "il valore è una stringa vuota"

La differenza è sottile ma importante. Se un utente non ha inserito il numero di telefono, quello è `NULL`. Se ha inserito il campo ma l'ha lasciato vuoto, quello è `''`.

## JOIN: il terrore di ogni studente

I JOIN sono il punto dove perdo sempre qualcuno. Il problema non è la sintassi, è il modello mentale.

```sql
SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id
```

Quello che funziona è disegnare le tabelle. Letteralmente, carta e penna. Quando vedono le righe che si "collegano", il click arriva.

## Primary Key vs Foreign Key

"Ma quindi la foreign key è una copia della primary key?"

Sì e no. È un riferimento. Punta a una primary key di un'altra tabella. Non è una copia, è un collegamento.

---

Questi sono solo alcuni esempi. La cosa che ho imparato è che la confusione non è mai stupida - di solito indica che il concetto è stato spiegato male o troppo in fretta.
