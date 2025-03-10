---
prev:
  text: 🐤 Dossier fiscal
  link: accounting/firm/create_update_fiscal_file.md
next: false
---

<span id="readme-top"></span>

# Type de tenue comptable

## Introduction

Lors du paramétrage du dossier fiscal, il est nécessaire de préciser le type de tenue comptable suivant le régime d'imposition choisi.

Voici la liste des types de tenue comptable (`comptability_held`) :

```json
[
    {
        "id": 1,
        "label": "Hors taxe",
        "value": "Hors taxe"
    },
    {
        "id": 3,
        "label": "Non assujetti à la TVA",
        "value": "Non assujetti à la TVA"
    },
    {
        "id": 2,
        "label": "Taxe incluse",
        "value": "Taxe incluse"
    }
]
```
