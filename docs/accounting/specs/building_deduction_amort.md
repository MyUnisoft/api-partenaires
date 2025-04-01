---
prev:
  text: 🐤 Dossier fiscal
  link: accounting/firm/manage_buildings.md
next: false
---

<span id="readme-top"></span>

# Liste des déductions au titre de l'amortissement d'immeubles en cas de dispositifs spéciaux d'acquisition

## Introduction

Lors du paramétrage d'un immeuble, vous pourriez avoir à préciser le type de déduction au titre de l'amortissement si l'acquisition fait appel à un dispositif spécial.

Voici la liste des types des déduction au titre de l'amortissement (`deduct_amort`) :

```json
[
  {
    "id": 1,
    "label": "Dispositif \"Perissol\"",
    "code": "1"
  },
  {
    "id": 2,
    "label": "Dispositif \"Robien classique\"",
    "code": "2"
  },
  {
    "id": 3,
    "label": "Dispositif \"Robien classique en zone de revitalisation rurale\"",
    "code": "3"
  },
  {
    "id": 4,
    "label": "Dispositif \"Robien recentré\"",
    "code": "4"
  },
  {
    "id": 5,
    "label": "Dispositif \"Robien recentré en zone de revitalisation rurale\"",
    "code": "5"
  },
  {
    "id": 6,
    "label": "Dispositif \"Borloo neuf\"",
    "code": "6"
  },
  {
    "id": 7,
    "label": "Dispositif \"Besson neuf\"",
    "code": "7"
  },
  {
    "id": 8,
    "label": "Aucune Déduction",
    "code": null
  }
]
```
