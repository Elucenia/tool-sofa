# Escore SOFA

Identificador: `sofa`. Pacote independente da plataforma Elucenia, para navegador e Node.js.

## Situação

- Revisão: **needs-review**. O SOFA clássico do ZIP soma seis sistemas e descreve sepse por aumento ≥2 do basal. Não há entrada do SOFA basal. Separar pontuação absoluta de mudança aguda e interpretação clínica; não concluir sepse ou ausência de disfunção a partir do total isolado.
- Execução: **disponível para reprodução técnica da fórmula**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- 4 casos de referência em `examples.json`, conferidos por `test.cjs`. Verificação aritmética independente da fórmula (reimplementação a partir da literatura, entradas aleatórias): **realizada em 2026-09-25**, 320 comparações conformes.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Cada sistema pontua de 0 a 4; o total vai de 0 a 24.Respiratório (PaO₂/FiO₂): ≥ 400 = 0; < 400 = 1; < 300 = 2; < 200 com suporte ventilatório = 3; < 100 com suporte = 4.Coagulação (plaquetas ×10³/µL): ≥ 150 = 0; < 150 = 1; < 100 = 2; < 50 = 3; < 20 = 4.Fígado (bilirrubina, mg/dL): < 1,2 = 0; 1,2–1,9 = 1; 2,0–5,9 = 2; 6,0–11,9 = 3; ≥ 12 = 4.Cardiovascular: PAM ≥ 70 = 0; PAM < 70 = 1; dopamina ≤ 5 ou dobutamina = 2; dopamina > 5, adrenalina ou noradrenalina ≤ 0,1 = 3; dopamina > 15, adrenalina ou noradrenalina > 0,1 = 4.Neurológico (Glasgow): 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; < 6 = 4.Renal (creatinina, mg/dL, ou diurese): < 1,2 = 0; 1,2–1,9 = 1; 2,0–3,4 = 2; 3,5–4,9 ou diurese < 500 mL/dia = 3; ≥ 5,0 ou diurese < 200 mL/dia = 4.

A transcrição acima documenta o acervo de origem e pode requerer atualização. Revisão documental: https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026

## Condições e limites

Quantifica a disfunção de seis sistemas orgânicos (respiratório, coagulação, fígado, cardiovascular, neurológico e renal). É a base da definição de sepse (Sepsis-3) e acompanha a evolução do paciente crítico.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Vincent JL et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure. Intensive Care Med, 1996.](https://doi.org/10.1007/BF01709751)
- [Ferreira FL et al. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA, 2001.](https://doi.org/10.1001/jama.286.14.1754)
- [Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016.](https://doi.org/10.1001/jama.2016.0287)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## O que esta ferramenta não faz

- Não diagnostica, não prescreve e não substitui a avaliação de um médico. O resultado é a reprodução técnica de uma fórmula ou escore publicado.
- Não envia dados a lugar nenhum: roda no navegador ou no Node.js, sem rede, sem telemetria, sem armazenamento.
- Não guarda nem identifica pacientes. Não use com dados identificáveis fora de um ambiente que você controla.
- Não tem validação clínica independente nem aprovação regulatória (ver "Situação").

## Autoria e licença

Criado e mantido por **Felipe Guedes** (Engenheiro de Software e Arquiteto de Sistemas, Toledo, Paraná, Brasil) para a **Elucenia**, uma cadeia médica e científica global para acelerar a descoberta. Criado em 2026-09-25 na organização [github.com/Elucenia](https://github.com/Elucenia).

Licença **Apache-2.0** (arquivo `LICENSE`): você pode usar, copiar, modificar e embutir este código no seu site ou sistema, inclusive comercial, desde que mantenha o arquivo `NOTICE` e o aviso de copyright e declare as modificações. A licença cobre o código deste pacote; instrumentos, questionários, tabelas, traduções e marcas citados nas fontes mantêm os direitos dos seus titulares (ver `NOTICE`). Detalhes em `AUTHORSHIP.md`, `CITATION.cff`, `SECURITY.md` e `CONTRIBUTING.md`. Contato: contato@elucenia.org.
