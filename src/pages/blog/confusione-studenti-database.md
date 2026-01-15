---
layout: ../../layouts/BlogPost.astro
title: "Cose che confondono sempre gli studenti sui database"
date: "2026-01-10"
description: "Dopo due anni di insegnamento, ho notato pattern ricorrenti. Ecco i concetti che creano più confusione."
tags: ["Database", "Teaching"]
---

Insegno database da un paio d'anni ormai, e ho notato che certi concetti creano confusione quasi sempre. Non perché siano difficili, ma perché vengono spesso spiegati male — o dati per scontati.

Ecco i più comuni.

## La differenza tra chiave primaria e chiave esterna

Sembra banale, ma la confusione qui è reale. Il problema è che molti studenti pensano che una chiave esterna "punti" a qualcosa, come un puntatore in programmazione.

In realtà è più semplice: una chiave esterna è solo un vincolo che dice "questo valore deve esistere in un'altra tabella". Non è magia, è solo una regola.

```sql
-- La chiave esterna non "punta" a niente
-- Dice solo: questo valore deve esistere in users.id
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT REFERENCES users(id)
);
```

## NULL non è zero, non è stringa vuota, non è false

Questo è un classico. `NULL` in SQL significa "non so", "non applicabile", o "mancante". Non è un valore, è l'assenza di un valore.

Ecco perché `NULL = NULL` restituisce `NULL` (cioè "non so"), non `true`. Se non sai una cosa e non sai un'altra cosa, non puoi dire che sono uguali.

```sql
-- Questo NON funziona come ci si aspetta
SELECT * FROM users WHERE middle_name = NULL;  -- Mai risultati!

-- Questo sì
SELECT * FROM users WHERE middle_name IS NULL;
```

## JOIN non è così complicato

I JOIN spaventano sempre all'inizio. Ma il concetto è semplice: stai combinando righe di due tabelle basandoti su una condizione.

Il trucco che uso sempre: pensa al JOIN come a due cicli for annidati. Per ogni riga della prima tabella, scorri tutte le righe della seconda e tieni solo quelle che matchano.

```sql
-- Questo JOIN...
SELECT * FROM orders
JOIN users ON orders.user_id = users.id;

-- ...è concettualmente questo:
for order in orders:
    for user in users:
        if order.user_id == user.id:
            risultato.append(order + user)
```

Ovviamente il database è molto più furbo di così, ma mentalmente funziona.

## Normalizzazione vs praticità

Molti studenti imparano le forme normali e poi vogliono applicarle ovunque. Il problema è che la normalizzazione perfetta non è sempre l'obiettivo.

A volte un po' di denormalizzazione rende le query più semplici e veloci. Il trucco è capire *perché* esistono le regole, così sai quando romperle.

---

La cosa che dico sempre: i database non sono difficili, sono solo diversi. Ragionare in set invece che in loop richiede pratica, ma una volta che "clicca" diventa naturale.

Se sei uno studente e qualcosa non ti è chiaro, probabilmente non è colpa tua. Probabilmente è stato spiegato assumendo conoscenze che non hai ancora.
