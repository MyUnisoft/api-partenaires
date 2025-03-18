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
    "idTypeVoie": "1",
    "lib": "Allée",
    "abvr": "ALL"
  },
  {
    "idTypeVoie": "2",
    "lib": "Avenue",
    "abvr": "AV"
  },
  {
    "idTypeVoie": "3",
    "lib": "Boulevard",
    "abvr": "BD"
  },
  {
    "idTypeVoie": "4",
    "lib": "Chemin",
    "abvr": "CHE"
  },
  {
    "idTypeVoie": "5",
    "lib": "Cours",
    "abvr": "CRS"
  },
  {
    "idTypeVoie": "6",
    "lib": "Faubourg",
    "abvr": "FG"
  },
  {
    "idTypeVoie": "7",
    "lib": "Impasse",
    "abvr": "IMP"
  },
  {
    "idTypeVoie": "8",
    "lib": "Lieu dit",
    "abvr": "LD"
  },
  {
    "idTypeVoie": "9",
    "lib": "Rue",
    "abvr": "RUE"
  }
  ,
  {
    "lib": "RES",
    "idTypeVoie": "10",
    "abvr": "Residence"
  },
  {
    "idTypeVoie": "11",
    "lib": "Place",
    "abvr": "PL"
  },
  {
    "idTypeVoie": "12",
    "lib": "Quai",
    "abvr": "QUAI"
  },
  {
    "idTypeVoie": "13",
    "lib": "Villa",
    "abvr": "VLA"
  },
  {
    "idTypeVoie": "14",
    "lib": "Route",
    "abvr": "RTE"
  },
  {
    "idTypeVoie": "15",
    "lib": "Square",
    "abvr": "SQ"
  },
  {
    "idTypeVoie": "16",
    "lib": "Domaine",
    "abvr": "DOM"
  },
  {
    "idTypeVoie": "17",
    "lib": "Voie"
  },
  {
    "idTypeVoie": "18",
    "lib": "Cité",
    "abvr": "CITE"
  },
  {
    "idTypeVoie": "19",
    "lib": ""
  },
  {
    // NOTE: jump from 19 to 21 is intended.
    "idTypeVoie": "21",
    "lib": "Corniche",
    "abvr": "COR"
  },
  {
    "idTypeVoie": "22",
    "lib": "Chaussée",
    "abvr": "CHS"
  },
  {
    "idTypeVoie": "23",
    "lib": "Carrefour",
    "abvr": "CAR"
  },
  {
    // NOTE: jump from 23 to 25 is intended.
    "idTypeVoie": "25",
    "lib": "Descente",
    "abvr": "DSC"
  },
  {
    "idTypeVoie": "26",
    "lib": "Ecart",
    "abvr": "ECA"
  },
  {
    "idTypeVoie": "27",
    "lib": "Esplanade",
    "abvr": "ESP"
  },
  {
    "idTypeVoie": "28",
    "lib": "Grande Rue",
    "abvr": "GR"
  },
  {
    "idTypeVoie": "29",
    "lib": "Hameau",
    "abvr": "HAM"
  },
  {
    "idTypeVoie": "30",
    "lib": "Halle",
    "abvr": "HLE"
  },
  {
    "idTypeVoie": "31",
    "lib": "Lotissement",
    "abvr": "LOT"
  },
  {
    "idTypeVoie": "32",
    "lib": "Marché",
    "abvr": "MAR"
  },
  {
    "idTypeVoie": "33",
    "lib": "Montée",
    "abvr": "MTE"
  },
  {
    "idTypeVoie": "34",
    "lib": "Passage",
    "abvr": "PAS"
  },
  {
    "idTypeVoie": "35",
    "lib": "Plaine",
    "abvr": "PLN"
  },
  {
    "idTypeVoie": "36",
    "lib": "Plateau",
    "abvr": "PLT"
  },
  {
    "idTypeVoie": "37",
    "lib": "Promenade",
    "abvr": "PRO"
  },
  {
    "idTypeVoie": "38",
    "lib": "Parvis",
    "abvr": "PRV"
  },
  {
    "idTypeVoie": "39",
    "lib": "Quartier",
    "abvr": "QUA"
  },
  {
    "idTypeVoie": "40",
    "lib": "Ruelle",
    "abvr": "RLE"
  },
  {
    "idTypeVoie": "41",
    "lib": "Rocade",
    "abvr": "ROC"
  },
  {
    "idTypeVoie": "42",
    "lib": "Rond Point",
    "abvr": "RPT"
  },
  {
    "idTypeVoie": "43",
    "lib": "Sente-Sentier",
    "abvr": "SEN"
  },
  {
    "idTypeVoie": "44",
    "lib": "Terre-plein",
    "abvr": "TPL"
  },
  {
    "idTypeVoie": "45",
    "lib": "Village",
    "abvr": "VLGE"
  },
  {
    "idTypeVoie": "46",
    "lib": "Mail"
  },
  {
    "idTypeVoie": "47",
    "lib": "Terasse",
    "abvr": "TER"
  }
]
```
