<!-- ELUCENIA technical documentation · sofa · fr · no clinical/professional/rights approval -->

# Score SOFA

[conditions, sources et autorisations](https://elucenia.org/fr/outils/sofa)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### PaO₂

`pao2`

mmHg · intervalle: 20–700

### FiO₂

`fio2`

% · intervalle: 21–100

### Sous ventilation mécanique ou assistance ventilatoire ?

`suporte`

- `0` — Non
- `1` — Oui

### Plaquettes

`plaq`

×10³/µL · intervalle: 1–1500

### Bilirubine totale

`bili`

mg/dL · intervalle: 0,1–50

### Cardiovasculaire (doses en mcg/kg/min pendant ≥ 1 h)

`cv`

- `0` — PAM ≥ 70 mmHg, sans vasopresseur
- `1` — Pression artérielle moyenne \< 70 mmHg
- `2` — Dopamine ≤ 5 ou dobutamine (toute dose)
- `3` — Dopamine \> 5, adrénaline ≤ 0,1 ou noradrénaline ≤ 0,1
- `4` — Dopamine \> 15, adrénaline \> 0,1 ou noradrénaline \> 0,1

### Échelle de coma de Glasgow

`gcs`

intervalle: 3–15

### Créatinine

`cr`

mg/dL · intervalle: 0,1–20

### Diurèse sur 24 h

`diurese`

mL/jour · facultatif · intervalle: 0–10000

## Édition de la méthode

SOFA/Vincent 1996 : 6 systèmes 0–4, total 0–24 ; seuils classiques ; sans SOFA 2

## Formule documentée

Chaque système vaut 0 à 4 ; total de 0 à 24.

Respiratoire (PaO₂/FiO₂): ≥ 400 = 0; \< 400 = 1; \< 300 = 2; \< 200 avec assistance ventilatoire = 3; \< 100 avec assistance = 4.

Coagulation (plaquettes ×10³/µL): ≥ 150 = 0; \< 150 = 1; \< 100 = 2; \< 50 = 3; \< 20 = 4.

Foie (bilirubine, mg/dL): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–5,9 = 2; 6,0–11,9 = 3; ≥ 12 = 4.

Cardiovasculaire (doses de médicaments vasoactifs en µg/kg/min, administrées pendant au moins 1 heure): PAM ≥ 70 = 0; PAM \< 70 = 1; dopamine ≤ 5 ou dobutamine = 2; dopamine \> 5, adrénaline ou noradrénaline ≤ 0,1 = 3; dopamine \> 15, adrénaline ou noradrénaline \> 0,1 = 4.

Neurologique (Glasgow): 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; \< 6 = 4.

Rénal (créatinine, mg/dL, ou diurèse): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–3,4 = 2; 3,5–4,9 ou diurèse \< 500 mL/jour = 3; ≥ 5,0 ou diurèse \< 200 mL/jour = 4.

## Limites et population

Le SOFA classique décrit la dysfonction d’organes chez les adultes en état critique ; consignez le moment de l’évaluation et la fonction antérieure des organes. Dans la définition Sepsis-3 de 2016, une augmentation aiguë d’au moins 2 points doit être liée à une infection ; la valeur initiale ne peut être supposée nulle qu’en l’absence de dysfonction d’organe antérieure connue. Le total seul ne diagnostique pas une infection et ne fournit pas une probabilité individuelle de décès. N’extrapolez pas la classification classique aux enfants. Les doses vasoactives sont exprimées en µg/kg/min, administrées pendant au moins 1 heure ; la diurèse correspond à 24 heures. Le Tableau 1 de Sepsis-3 (2016), adapté de Vincent 1996, indique bilirubine \> 12,0 mg/dL, créatinine \> 5,0 mg/dL et dopamine \< 5 ou 5,1–15 µg/kg/min. Le tableau intégral de 1996 n’a pas été obtenu lors de cette revue. Les différences et lacunes à ces limites n’ont pas été tranchées ; la vérification numérique a utilisé uniquement des valeurs non ambiguës et des points cardiovasculaires déjà sélectionnés.

## Références

- [Vincent JL et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure. Intensive Care Med, 1996.](https://doi.org/10.1007/BF01709751)

- [Ferreira FL et al. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA, 2001.](https://doi.org/10.1001/jama.286.14.1754)

- [Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016.](https://doi.org/10.1001/jama.2016.0287)

- [Sepsis-3,2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Pas de dysfonction organique pertinente selon le SOFA

| Détails du résultat | |
| --- | --- |
| Respiratoire (PaO₂/FiO₂ 452) | 0 |
| Coagulation | 0 |
| Foie | 0 |
| Cardiovasculaire | 0 |
| Système nerveux central | 0 |
| Rénal | 0 |

Dans Sepsis-3, sepsis = infection avec augmentation aiguë de ≥ 2 points par rapport au SOFA de base (considéré comme 0 en l'absence de dysfonction préalable connue).


### 2

Dysfonction organique (SOFA ≥ 2)

| Détails du résultat | |
| --- | --- |
| Respiratoire (PaO₂/FiO₂ 140) | 2 |
| Coagulation | 0 |
| Foie | 0 |
| Cardiovasculaire | 0 |
| Système nerveux central | 0 |
| Rénal | 0 |

Dans Sepsis-3, sepsis = infection avec augmentation aiguë de ≥ 2 points par rapport au SOFA de base (considéré comme 0 en l'absence de dysfonction préalable connue).


### 3

Dysfonction organique (SOFA ≥ 2)

| Détails du résultat | |
| --- | --- |
| Respiratoire (PaO₂/FiO₂ 100) | 3 |
| Coagulation | 0 |
| Foie | 0 |
| Cardiovasculaire | 1 |
| Système nerveux central | 0 |
| Rénal | 3 |

Dans Sepsis-3, sepsis = infection avec augmentation aiguë de ≥ 2 points par rapport au SOFA de base (considéré comme 0 en l'absence de dysfonction préalable connue).


### 4

Dysfonction organique sévère (SOFA ≥ 10)

| Détails du résultat | |
| --- | --- |
| Respiratoire (PaO₂/FiO₂ 200) | 2 |
| Coagulation | 2 |
| Foie | 2 |
| Cardiovasculaire | 3 |
| Système nerveux central | 1 |
| Rénal | 2 |

Dans Sepsis-3, sepsis = infection avec augmentation aiguë de ≥ 2 points par rapport au SOFA de base (considéré comme 0 en l'absence de dysfonction préalable connue).

