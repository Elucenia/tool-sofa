<!-- ELUCENIA technical documentation · sofa · it · no clinical/professional/rights approval -->

# Punteggio SOFA

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/sofa)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### PaO₂

`pao2`

mmHg · intervallo: 20–700

### FiO₂

`fio2`

% · intervallo: 21–100

### In ventilazione meccanica o con supporto ventilatorio?

`suporte`

- `0` — No
- `1` — Sì

### Piastrine

`plaq`

×10³/µL · intervallo: 1–1500

### Bilirubina totale

`bili`

mg/dL · intervallo: 0,1–50

### Cardiovascolare (dosi in mcg/kg/min per ≥ 1 h)

`cv`

- `0` — PAM ≥ 70 mmHg, senza vasopressore
- `1` — Pressione arteriosa media \< 70 mmHg
- `2` — Dopamina ≤ 5 o dobutamina (qualsiasi dose)
- `3` — Dopamina \> 5, adrenalina ≤ 0,1 o noradrenalina ≤ 0,1
- `4` — Dopamina \> 15, adrenalina \> 0,1 o noradrenalina \> 0,1

### Scala del coma di Glasgow

`gcs`

intervallo: 3–15

### Creatinina

`cr`

mg/dL · intervallo: 0,1–20

### Diuresi nelle 24 h

`diurese`

mL/giorno · facoltativo · intervallo: 0–10000

## Edizione del metodo

SOFA/Vincent 1996: 6 sistemi 0–4, totale 0–24; soglie classiche; senza SOFA 2

## Formula documentata

Ogni sistema ha 0–4 punti; totale da 0 a 24.

Respiratorio (PaO₂/FiO₂): ≥ 400 = 0; \< 400 = 1; \< 300 = 2; \< 200 con supporto ventilatorio = 3; \< 100 con supporto = 4.

Coagulazione (piastrine ×10³/µL): ≥ 150 = 0; \< 150 = 1; \< 100 = 2; \< 50 = 3; \< 20 = 4.

Fegato (bilirubina, mg/dL): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–5,9 = 2; 6,0–11,9 = 3; ≥ 12 = 4.

Cardiovascolare (dosi di vasoattivi in µg/kg/min, somministrate per almeno 1 ora): PAM ≥ 70 = 0; PAM \< 70 = 1; dopamina ≤ 5 o dobutamina = 2; dopamina \> 5, adrenalina o noradrenalina ≤ 0,1 = 3; dopamina \> 15, adrenalina o noradrenalina \> 0,1 = 4.

Neurologico (Glasgow): 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; \< 6 = 4.

Renale (creatinina, mg/dL, o diuresi): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–3,4 = 2; 3,5–4,9 o diuresi \< 500 mL/giorno = 3; ≥ 5,0 o diuresi \< 200 mL/giorno = 4.

## Limiti e popolazione

Il SOFA classico descrive la disfunzione d’organo negli adulti in condizioni critiche; registra il momento della valutazione e la funzione precedente degli organi. Nella definizione Sepsis-3 del 2016, un aumento acuto di almeno 2 punti deve essere dovuto a un’infezione; il valore basale può essere considerato zero soltanto in assenza di disfunzione d’organo preesistente nota. Il totale da solo non diagnostica un’infezione né fornisce una probabilità individuale di morte. Non estendere la classificazione classica ai bambini. Le dosi vasoattive sono in µg/kg/min, somministrate per almeno 1 ora; la diuresi si riferisce a 24 ore. La Tabella 1 di Sepsis-3 (2016), adattata da Vincent 1996, riporta bilirubina \> 12,0 mg/dL, creatinina \> 5,0 mg/dL e dopamina \< 5 oppure 5,1–15 µg/kg/min. La tabella completa del 1996 non è stata ottenuta in questa revisione. Le differenze e le lacune in questi limiti non sono state risolte; la verifica numerica ha usato solo valori inequivocabili e punti cardiovascolari già selezionati.

## Riferimenti

- [Vincent JL et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure. Intensive Care Med, 1996.](https://doi.org/10.1007/BF01709751)

- [Ferreira FL et al. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA, 2001.](https://doi.org/10.1001/jama.286.14.1754)

- [Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016.](https://doi.org/10.1001/jama.2016.0287)

- [Sepsis-3,2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Nessuna disfunzione d'organo rilevante secondo SOFA

| Dettagli del risultato | |
| --- | --- |
| Respiratorio (PaO₂/FiO₂ 452) | 0 |
| Coagulazione | 0 |
| Fegato | 0 |
| Cardiovascolare | 0 |
| Sistema nervoso centrale | 0 |
| Renale | 0 |

Nel Sepsis-3, sepsi = infezione con aumento acuto di ≥ 2 punti rispetto al SOFA basale (considerato 0 se non vi è disfunzione preesistente nota).


### 2

Disfunzione d'organo (SOFA ≥ 2)

| Dettagli del risultato | |
| --- | --- |
| Respiratorio (PaO₂/FiO₂ 140) | 2 |
| Coagulazione | 0 |
| Fegato | 0 |
| Cardiovascolare | 0 |
| Sistema nervoso centrale | 0 |
| Renale | 0 |

Nel Sepsis-3, sepsi = infezione con aumento acuto di ≥ 2 punti rispetto al SOFA basale (considerato 0 se non vi è disfunzione preesistente nota).


### 3

Disfunzione d'organo (SOFA ≥ 2)

| Dettagli del risultato | |
| --- | --- |
| Respiratorio (PaO₂/FiO₂ 100) | 3 |
| Coagulazione | 0 |
| Fegato | 0 |
| Cardiovascolare | 1 |
| Sistema nervoso centrale | 0 |
| Renale | 3 |

Nel Sepsis-3, sepsi = infezione con aumento acuto di ≥ 2 punti rispetto al SOFA basale (considerato 0 se non vi è disfunzione preesistente nota).


### 4

Disfunzione d'organo grave (SOFA ≥ 10)

| Dettagli del risultato | |
| --- | --- |
| Respiratorio (PaO₂/FiO₂ 200) | 2 |
| Coagulazione | 2 |
| Fegato | 2 |
| Cardiovascolare | 3 |
| Sistema nervoso centrale | 1 |
| Renale | 2 |

Nel Sepsis-3, sepsi = infezione con aumento acuto di ≥ 2 punti rispetto al SOFA basale (considerato 0 se non vi è disfunzione preesistente nota).

