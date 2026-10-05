<!-- ELUCENIA technical documentation · sofa · en · no clinical/professional/rights approval -->

# SOFA score

[conditions, sources and permissions](https://elucenia.org/en/tools/sofa)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### PaO₂

`pao2`

mmHg · range: 20–700

### FiO₂

`fio2`

% · range: 21–100

### On mechanical ventilation or ventilatory support?

`suporte`

- `0` — No
- `1` — Yes

### Platelets

`plaq`

×10³/µL · range: 1–1500

### Total bilirubin

`bili`

mg/dL · range: 0.1–50

### Cardiovascular (doses in mcg/kg/min for ≥ 1 h)

`cv`

- `0` — MAP ≥ 70 mmHg, no vasopressor
- `1` — Mean arterial pressure \< 70 mmHg
- `2` — Dopamine ≤ 5 or dobutamine (any dose)
- `3` — Dopamine \> 5, epinephrine ≤ 0.1 or norepinephrine ≤ 0.1
- `4` — Dopamine \> 15, epinephrine \> 0.1 or norepinephrine \> 0.1

### Glasgow Coma Scale

`gcs`

range: 3–15

### Creatinine

`cr`

mg/dL · range: 0.1–20

### Urine output over 24 h

`diurese`

mL/day · optional · range: 0–10000

## Method edition

SOFA/Vincent 1996: 6 systems 0–4, total 0–24; classic thresholds; excludes SOFA 2

## Documented formula

Each system scores 0 to 4; total ranges from 0 to 24.

Respiratory (PaO₂/FiO₂): ≥ 400 = 0; \< 400 = 1; \< 300 = 2; \< 200 with ventilatory support = 3; \< 100 with support = 4.

Coagulation (platelets ×10³/µL): ≥ 150 = 0; \< 150 = 1; \< 100 = 2; \< 50 = 3; \< 20 = 4.

Liver (bilirubin, mg/dL): \< 1.2 = 0; 1.2–1.9 = 1; 2.0–5.9 = 2; 6.0–11.9 = 3; ≥ 12 = 4.

Cardiovascular (vasoactive doses in µg/kg/min, administered for at least 1 hour): MAP ≥ 70 = 0; MAP \< 70 = 1; dopamine ≤ 5 or dobutamine = 2; dopamine \> 5, epinephrine or norepinephrine ≤ 0.1 = 3; dopamine \> 15, epinephrine or norepinephrine \> 0.1 = 4.

Neurological (Glasgow): 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; \< 6 = 4.

Renal (creatinine, mg/dL, or urine output): \< 1.2 = 0; 1.2–1.9 = 1; 2.0–3.4 = 2; 3.5–4.9 or urine output \< 500 mL/day = 3; ≥ 5.0 or urine output \< 200 mL/day = 4.

## Limits and population

Classic SOFA describes organ dysfunction in critically ill adults; record the assessment time and prior organ function. In the 2016 Sepsis-3 definition, an acute increase of at least 2 points must result from infection; baseline can be assumed to be zero only when no pre-existing organ dysfunction is known. The total alone does not diagnose infection or provide an individual probability of death. Do not extrapolate the classic classification to children. Vasoactive doses are in µg/kg/min, administered for at least 1 hour; urine output refers to 24 hours. Sepsis-3 (2016) Table 1, adapted from Vincent 1996, prints bilirubin \> 12.0 mg/dL, creatinine \> 5.0 mg/dL and dopamine \< 5 or 5.1–15 µg/kg/min. The full 1996 table was not obtained in this review. Differences and gaps at these boundaries were not adjudicated; the numeric check used only unambiguous values and already-selected cardiovascular points.

## References

- [Vincent JL et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure. Intensive Care Med, 1996.](https://doi.org/10.1007/BF01709751)

- [Ferreira FL et al. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA, 2001.](https://doi.org/10.1001/jama.286.14.1754)

- [Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016.](https://doi.org/10.1001/jama.2016.0287)

- [Sepsis-3,2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
