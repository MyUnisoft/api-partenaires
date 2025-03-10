---
prev:
  text: 🐤 Dossier fiscal
  link: accounting/firm/create_update_fiscal_file.md
next: false
---

<span id="readme-top"></span>

# Adresse - Type de voie

## Introduction

Pour chaque adresse, il est nécessaire de renseigner l'id de son type de voie dans l'API partenaire.

Voici la liste des types de voie utilisables :

```json
[
    {
        "id": 1,
        "name": "Allée",
        "code": "ALL"
    },
    {
        "id": 2,
        "name": "Avenue",
        "code": "AV"
    },
    {
        "id": 3,
        "name": "Boulevard",
        "code": "BD"
    },
    {
        "id": 4,
        "name": "Chemin",
        "code": "CHE"
    },
    {
        "id": 5,
        "name": "Cours",
        "code": "CRS"
    },
    {
        "id": 6,
        "name": "Faubourg",
        "code": "FG"
    },
    {
        "id": 7,
        "name": "Impasse",
        "code": "IMP"
    },
    {
        "id": 8,
        "name": "Lieu dit",
        "code": "LD"
    },
    {
        "id": 9,
        "name": "Rue",
        "code": "RUE"
    },
    {
        "id": 10,
        "name": "Residence",
        "code": "RES"
    },
    {
        "id": 11,
        "name": "Place",
        "code": "PL"
    },
    {
        "id": 12,
        "name": "Quai",
        "code": "QUAI"
    },
    {
        "id": 13,
        "name": "Villa",
        "code": "VLA"
    },
    {
        "id": 14,
        "name": "Route",
        "code": "RTE"
    },
    {
        "id": 15,
        "name": "Square",
        "code": "SQ"
    },
    {
        "id": 16,
        "name": "Domaine",
        "code": "DOM"
    },
    {
        "id": 17,
        "name": "Voie",
        "code": ""
    },
    {
        "id": 18,
        "name": "Cité",
        "code": "CITE"
    },
    {
        "id": 22,
        "name": "Carrefour",
        "code": "CAR"
    },
    {
        "id": 23,
        "name": "Chaussée",
        "code": "CHS"
    },
    {
        "id": 24,
        "name": "Corniche",
        "code": "COR"
    },
    {
        "id": 26,
        "name": "Descente",
        "code": "DSC"
    },
    {
        "id": 27,
        "name": "Ecart",
        "code": "ECA"
    },
    {
        "id": 28,
        "name": "Esplanade",
        "code": "ESP"
    },
    {
        "id": 29,
        "name": "Grande Rue",
        "code": "GR"
    },
    {
        "id": 30,
        "name": "Hameau",
        "code": "HAM"
    },
    {
        "id": 31,
        "name": "Halle",
        "code": "HLE"
    },
    {
        "id": 32,
        "name": "Lotissement",
        "code": "LOT"
    },
    {
        "id": 33,
        "name": "Marché",
        "code": "MAR"
    },
    {
        "id": 34,
        "name": "Montée",
        "code": "MTE"
    },
    {
        "id": 35,
        "name": "Passage",
        "code": "PAS"
    },
    {
        "id": 36,
        "name": "Plaine",
        "code": "PLN"
    },
    {
        "id": 37,
        "name": "Plateau",
        "code": "PLT"
    },
    {
        "id": 38,
        "name": "Promenade",
        "code": "PRO"
    },
    {
        "id": 39,
        "name": "Parvis",
        "code": "PRV"
    },
    {
        "id": 40,
        "name": "Quartier",
        "code": "QUA"
    },
    {
        "id": 41,
        "name": "Ruelle",
        "code": "RLE"
    },
    {
        "id": 42,
        "name": "Rocade",
        "code": "ROC"
    },
    {
        "id": 43,
        "name": "Rond Point",
        "code": "RPT"
    },
    {
        "id": 44,
        "name": "Sente-Sentier",
        "code": "SEN"
    },
    {
        "id": 45,
        "name": "Terre-plein",
        "code": "TPL"
    },
    {
        "id": 47,
        "name": "Village",
        "code": "VLGE"
    },
    {
        "id": 48,
        "name": "Terrasse",
        "code": "TER"
    }
]
```
