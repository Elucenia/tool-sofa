<!-- ELUCENIA technical documentation · sofa · pt-BR · no clinical/professional/rights approval -->

# Escore SOFA

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/sofa)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### PaO₂

`pao2`

mmHg · intervalo: 20–700

### FiO₂

`fio2`

% · intervalo: 21–100

### Em ventilação mecânica ou suporte ventilatório?

`suporte`

- `0` — Não
- `1` — Sim

### Plaquetas

`plaq`

×10³/µL · intervalo: 1–1500

### Bilirrubina total

`bili`

mg/dL · intervalo: 0,1–50

### Cardiovascular (doses em mcg/kg/min por ≥ 1 h)

`cv`

- `0` — PAM ≥ 70 mmHg, sem vasopressor
- `1` — PAM \< 70 mmHg
- `2` — Dopamina ≤ 5 ou dobutamina (qualquer dose)
- `3` — Dopamina \> 5, adrenalina ≤ 0,1 ou noradrenalina ≤ 0,1
- `4` — Dopamina \> 15, adrenalina \> 0,1 ou noradrenalina \> 0,1

### Escala de Coma de Glasgow

`gcs`

intervalo: 3–15

### Creatinina

`cr`

mg/dL · intervalo: 0,1–20

### Diurese em 24 h

`diurese`

mL/dia · opcional · intervalo: 0–10000

## Edição do método

SOFA/Vincent 1996:6 sistemas 0–4, total 0–24; limiares clássicos; sem SOFA 2

## Fórmula documentada

Cada sistema pontua de 0 a 4; o total vai de 0 a 24.

Respiratório (PaO₂/FiO₂): ≥ 400 = 0; \< 400 = 1; \< 300 = 2; \< 200 com suporte ventilatório = 3; \< 100 com suporte = 4.

Coagulação (plaquetas ×10³/µL): ≥ 150 = 0; \< 150 = 1; \< 100 = 2; \< 50 = 3; \< 20 = 4.

Fígado (bilirrubina, mg/dL): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–5,9 = 2; 6,0–11,9 = 3; ≥ 12 = 4.

Cardiovascular (doses de vasoativos em µg/kg/min, administradas por pelo menos 1 hora): PAM ≥ 70 = 0; PAM \< 70 = 1; dopamina ≤ 5 ou dobutamina = 2; dopamina \> 5, adrenalina ou noradrenalina ≤ 0,1 = 3; dopamina \> 15, adrenalina ou noradrenalina \> 0,1 = 4.

Neurológico (Glasgow): 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; \< 6 = 4.

Renal (creatinina, mg/dL, ou diurese): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–3,4 = 2; 3,5–4,9 ou diurese \< 500 mL/dia = 3; ≥ 5,0 ou diurese \< 200 mL/dia = 4.

## Limites e população

SOFA clássico: descreve disfunção orgânica em adultos criticamente enfermos; registre o momento da avaliação e a função prévia dos órgãos. Na definição Sepsis-3 de 2016, a variação aguda de pelo menos 2 pontos deve decorrer de infecção; o basal só pode ser presumido zero quando não há disfunção orgânica prévia conhecida. O total isolado não diagnostica infecção nem fornece uma probabilidade individual de morte. Não extrapole a classificação clássica para crianças. As doses vasoativas são em µg/kg/min, administradas por pelo menos 1 hora; a diurese se refere a 24 horas. A Tabela 1 de Sepsis-3 (2016), adaptada de Vincent 1996, imprime bilirrubina \> 12,0 mg/dL, creatinina \> 5,0 mg/dL e dopamina \< 5 ou 5,1–15 µg/kg/min. A tabela integral de 1996 não foi obtida nesta revisão. As diferenças e lacunas nesses limites não foram adjudicadas; a conferência numérica usou apenas valores inequívocos e pontos cardiovasculares já selecionados.

## Referências

- [Vincent JL et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure. Intensive Care Med, 1996.](https://doi.org/10.1007/BF01709751)

- [Ferreira FL et al. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA, 2001.](https://doi.org/10.1001/jama.286.14.1754)

- [Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016.](https://doi.org/10.1001/jama.2016.0287)

- [Sepsis-3,2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Sem disfunção orgânica relevante pelo SOFA

| Detalhes do resultado | |
| --- | --- |
| Respiratório (PaO₂/FiO₂ 452) | 0 |
| Coagulação | 0 |
| Fígado | 0 |
| Cardiovascular | 0 |
| Sistema nervoso central | 0 |
| Renal | 0 |

Na Sepsis-3, sepse = infecção com aumento agudo de ≥ 2 pontos em relação ao SOFA basal (considerado 0 se não houver disfunção prévia conhecida).


### 2

Disfunção orgânica (SOFA ≥ 2)

| Detalhes do resultado | |
| --- | --- |
| Respiratório (PaO₂/FiO₂ 140) | 2 |
| Coagulação | 0 |
| Fígado | 0 |
| Cardiovascular | 0 |
| Sistema nervoso central | 0 |
| Renal | 0 |

Na Sepsis-3, sepse = infecção com aumento agudo de ≥ 2 pontos em relação ao SOFA basal (considerado 0 se não houver disfunção prévia conhecida).


### 3

Disfunção orgânica (SOFA ≥ 2)

| Detalhes do resultado | |
| --- | --- |
| Respiratório (PaO₂/FiO₂ 100) | 3 |
| Coagulação | 0 |
| Fígado | 0 |
| Cardiovascular | 1 |
| Sistema nervoso central | 0 |
| Renal | 3 |

Na Sepsis-3, sepse = infecção com aumento agudo de ≥ 2 pontos em relação ao SOFA basal (considerado 0 se não houver disfunção prévia conhecida).


### 4

Disfunção orgânica grave (SOFA ≥ 10)

| Detalhes do resultado | |
| --- | --- |
| Respiratório (PaO₂/FiO₂ 200) | 2 |
| Coagulação | 2 |
| Fígado | 2 |
| Cardiovascular | 3 |
| Sistema nervoso central | 1 |
| Renal | 2 |

Na Sepsis-3, sepse = infecção com aumento agudo de ≥ 2 pontos em relação ao SOFA basal (considerado 0 se não houver disfunção prévia conhecida).

