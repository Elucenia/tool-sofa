<!-- ELUCENIA technical documentation · sofa · es · no clinical/professional/rights approval -->

# Puntuación SOFA

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/sofa)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### PaO₂

`pao2`

mmHg · intervalo: 20–700

### FiO₂

`fio2`

% · intervalo: 21–100

### ¿Con ventilación mecánica o soporte ventilatorio?

`suporte`

- `0` — No
- `1` — Sí

### Plaquetas

`plaq`

×10³/µL · intervalo: 1–1500

### Bilirrubina total

`bili`

mg/dL · intervalo: 0,1–50

### Cardiovascular (dosis en mcg/kg/min durante ≥ 1 h)

`cv`

- `0` — PAM ≥ 70 mmHg, sin vasopresor
- `1` — Presión arterial media \< 70 mmHg
- `2` — Dopamina ≤ 5 o dobutamina (cualquier dosis)
- `3` — Dopamina \> 5, adrenalina ≤ 0,1 o noradrenalina ≤ 0,1
- `4` — Dopamina \> 15, adrenalina \> 0,1 o noradrenalina \> 0,1

### Escala de coma de Glasgow

`gcs`

intervalo: 3–15

### Creatinina

`cr`

mg/dL · intervalo: 0,1–20

### Diuresis en 24 h

`diurese`

mL/día · opcional · intervalo: 0–10000

## Edición del método

SOFA/Vincent 1996: 6 sistemas 0–4, total 0–24; umbrales clásicos; no SOFA 2

## Fórmula documentada

Cada sistema puntúa de 0 a 4; total de 0 a 24.

Respiratorio (PaO₂/FiO₂): ≥ 400 = 0; \< 400 = 1; \< 300 = 2; \< 200 con soporte ventilatorio = 3; \< 100 con soporte = 4.

Coagulación (plaquetas ×10³/µL): ≥ 150 = 0; \< 150 = 1; \< 100 = 2; \< 50 = 3; \< 20 = 4.

Hígado (bilirrubina, mg/dL): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–5,9 = 2; 6,0–11,9 = 3; ≥ 12 = 4.

Cardiovascular (dosis de vasoactivos en µg/kg/min, administradas durante al menos 1 hora): PAM ≥ 70 = 0; PAM \< 70 = 1; dopamina ≤ 5 o dobutamina = 2; dopamina \> 5, adrenalina o noradrenalina ≤ 0,1 = 3; dopamina \> 15, adrenalina o noradrenalina \> 0,1 = 4.

Neurológico (Glasgow): 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; \< 6 = 4.

Renal (creatinina, mg/dL, o diuresis): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–3,4 = 2; 3,5–4,9 o diuresis \< 500 mL/día = 3; ≥ 5,0 o diuresis \< 200 mL/día = 4.

## Límites y población

El SOFA clásico describe disfunción orgánica en adultos críticamente enfermos; registre el momento de evaluación y la función previa de los órganos. En la definición Sepsis-3 de 2016, el aumento agudo de al menos 2 puntos debe deberse a una infección; solo puede suponerse un valor basal de cero cuando no se conoce disfunción orgánica previa. El total aislado no diagnostica infección ni proporciona una probabilidad individual de muerte. No extrapole la clasificación clásica a niños. Las dosis vasoactivas se expresan en µg/kg/min y se administran durante al menos 1 hora; la diuresis corresponde a 24 horas. La Tabla 1 de Sepsis-3 (2016), adaptada de Vincent 1996, imprime bilirrubina \> 12,0 mg/dL, creatinina \> 5,0 mg/dL y dopamina \< 5 o 5,1–15 µg/kg/min. No se obtuvo la tabla completa de 1996 en esta revisión. Las diferencias y lagunas en estos límites no se adjudicaron; la comprobación numérica utilizó solo valores inequívocos y puntos cardiovasculares ya seleccionados.

## Referencias

- [Vincent JL et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure. Intensive Care Med, 1996.](https://doi.org/10.1007/BF01709751)

- [Ferreira FL et al. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA, 2001.](https://doi.org/10.1001/jama.286.14.1754)

- [Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016.](https://doi.org/10.1001/jama.2016.0287)

- [Sepsis-3,2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
