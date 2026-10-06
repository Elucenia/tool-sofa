<!-- ELUCENIA technical documentation · sofa · de · no clinical/professional/rights approval -->

# SOFA-Score

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/sofa)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### PaO₂

`pao2`

mmHg · Bereich: 20–700

### FiO₂

`fio2`

% · Bereich: 21–100

### Unter mechanischer Beatmung oder Atemunterstützung?

`suporte`

- `0` — Nein
- `1` — Ja

### Thrombozyten

`plaq`

×10³/µL · Bereich: 1–1500

### Gesamtbilirubin

`bili`

mg/dL · Bereich: 0,1–50

### Kardiovaskulär (Dosen in mcg/kg/min für ≥ 1 h)

`cv`

- `0` — Mittlerer arterieller Druck ≥ 70 mmHg, ohne Vasopressor
- `1` — Mittlerer arterieller Druck \< 70 mmHg
- `2` — Dopamin ≤ 5 oder Dobutamin (beliebige Dosis)
- `3` — Dopamin \> 5, Adrenalin ≤ 0,1 oder Noradrenalin ≤ 0,1
- `4` — Dopamin \> 15, Adrenalin \> 0,1 oder Noradrenalin \> 0,1

### Glasgow Coma Scale

`gcs`

Bereich: 3–15

### Kreatinin

`cr`

mg/dL · Bereich: 0,1–20

### Urinausscheidung in 24 h

`diurese`

mL/Tag · optional · Bereich: 0–10000

## Fassung der Methode

SOFA/Vincent 1996: 6 Systeme 0–4, Gesamt 0–24; klassische Grenzwerte; ohne SOFA 2

## Dokumentierte Formel

Jedes System erhält 0 bis 4 Punkte; Gesamtwert 0 bis 24.

Atmung (PaO₂/FiO₂): ≥ 400 = 0; \< 400 = 1; \< 300 = 2; \< 200 mit Beatmungsunterstützung = 3; \< 100 mit Unterstützung = 4.

Gerinnung (Thrombozyten ×10³/µL): ≥ 150 = 0; \< 150 = 1; \< 100 = 2; \< 50 = 3; \< 20 = 4.

Leber (Bilirubin, mg/dL): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–5,9 = 2; 6,0–11,9 = 3; ≥ 12 = 4.

Herz-Kreislauf (Dosen vasoaktiver Medikamente in µg/kg/min, über mindestens 1 Stunde verabreicht): MAP ≥ 70 = 0; MAP \< 70 = 1; Dopamin ≤ 5 oder Dobutamin = 2; Dopamin \> 5, Adrenalin oder Noradrenalin ≤ 0,1 = 3; Dopamin \> 15, Adrenalin oder Noradrenalin \> 0,1 = 4.

Neurologie (Glasgow): 15 = 0; 13–14 = 1; 10–12 = 2; 6–9 = 3; \< 6 = 4.

Niere (Kreatinin, mg/dL, oder Urinausscheidung): \< 1,2 = 0; 1,2–1,9 = 1; 2,0–3,4 = 2; 3,5–4,9 oder Urinausscheidung \< 500 mL/Tag = 3; ≥ 5,0 oder Urinausscheidung \< 200 mL/Tag = 4.

## Grenzen und Population

Der klassische SOFA beschreibt Organfunktionsstörungen bei kritisch kranken Erwachsenen; dokumentieren Sie den Bewertungszeitpunkt und die vorherige Organfunktion. Nach der Sepsis-3-Definition von 2016 muss ein akuter Anstieg um mindestens 2 Punkte auf eine Infektion zurückzuführen sein; ein Ausgangswert von null darf nur angenommen werden, wenn keine vorbestehende Organfunktionsstörung bekannt ist. Die Gesamtsumme allein diagnostiziert keine Infektion und liefert keine individuelle Sterbewahrscheinlichkeit. Übertragen Sie die klassische Einstufung nicht auf Kinder. Vasoaktive Dosierungen werden in µg/kg/min angegeben und mindestens 1 Stunde verabreicht; die Urinausscheidung bezieht sich auf 24 Stunden. Tabelle 1 von Sepsis-3 (2016), angepasst nach Vincent 1996, enthält Bilirubin \> 12,0 mg/dL, Kreatinin \> 5,0 mg/dL und Dopamin \< 5 oder 5,1–15 µg/kg/min. Die vollständige Tabelle von 1996 wurde in dieser Prüfung nicht beschafft. Unterschiede und Lücken an diesen Grenzen wurden nicht entschieden; die numerische Prüfung verwendete nur eindeutige Werte und bereits ausgewählte kardiovaskuläre Punkte.

## Referenzen

- [Vincent JL et al. The SOFA (Sepsis-related Organ Failure Assessment) score to describe organ dysfunction/failure. Intensive Care Med, 1996.](https://doi.org/10.1007/BF01709751)

- [Ferreira FL et al. Serial evaluation of the SOFA score to predict outcome in critically ill patients. JAMA, 2001.](https://doi.org/10.1001/jama.286.14.1754)

- [Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016.](https://doi.org/10.1001/jama.2016.0287)

- [Sepsis-3,2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4968574/)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Keine relevante Organdysfunktion nach SOFA

| Ergebnisdetails | |
| --- | --- |
| Respiratorisch (PaO₂/FiO₂ 452) | 0 |
| Gerinnung | 0 |
| Leber | 0 |
| Kardiovaskulär | 0 |
| Zentrales Nervensystem | 0 |
| Renal | 0 |

In Sepsis-3 ist Sepsis = Infektion mit einem akuten Anstieg von ≥ 2 Punkten gegenüber dem Basis-SOFA (als 0 angesehen, wenn keine bekannte vorbestehende Dysfunktion vorliegt).


### 2

Organdysfunktion (SOFA ≥ 2)

| Ergebnisdetails | |
| --- | --- |
| Respiratorisch (PaO₂/FiO₂ 140) | 2 |
| Gerinnung | 0 |
| Leber | 0 |
| Kardiovaskulär | 0 |
| Zentrales Nervensystem | 0 |
| Renal | 0 |

In Sepsis-3 ist Sepsis = Infektion mit einem akuten Anstieg von ≥ 2 Punkten gegenüber dem Basis-SOFA (als 0 angesehen, wenn keine bekannte vorbestehende Dysfunktion vorliegt).


### 3

Organdysfunktion (SOFA ≥ 2)

| Ergebnisdetails | |
| --- | --- |
| Respiratorisch (PaO₂/FiO₂ 100) | 3 |
| Gerinnung | 0 |
| Leber | 0 |
| Kardiovaskulär | 1 |
| Zentrales Nervensystem | 0 |
| Renal | 3 |

In Sepsis-3 ist Sepsis = Infektion mit einem akuten Anstieg von ≥ 2 Punkten gegenüber dem Basis-SOFA (als 0 angesehen, wenn keine bekannte vorbestehende Dysfunktion vorliegt).


### 4

Schwere Organdysfunktion (SOFA ≥ 10)

| Ergebnisdetails | |
| --- | --- |
| Respiratorisch (PaO₂/FiO₂ 200) | 2 |
| Gerinnung | 2 |
| Leber | 2 |
| Kardiovaskulär | 3 |
| Zentrales Nervensystem | 1 |
| Renal | 2 |

In Sepsis-3 ist Sepsis = Infektion mit einem akuten Anstieg von ≥ 2 Punkten gegenüber dem Basis-SOFA (als 0 angesehen, wenn keine bekannte vorbestehende Dysfunktion vorliegt).

