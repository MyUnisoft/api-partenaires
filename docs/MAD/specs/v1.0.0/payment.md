---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Paiement

## Introduction

```json
[
  {
    "producerId": "1",
    "code": "CB",
    "name": "Carte bleue",
    "additionalProducerProperties": {
      "code": "CB"
    }
  },
  {
    "producerId": "2",
    "code": "VIR",
    "name": "Virement",
    "additionalProducerProperties": {
      "code": "VIRT"
    }
  },
  {
    "producerId": "3",
    "code": "ESP",
    "name": "Espèce",
    "additionalProducerProperties": {
      "code": "ESP"
    }
  },
  {
    "producerId": "4",
    "code": "CHQ",
    "name": "Chèque",
    "additionalProducerProperties": {
      "code": "CHQ"
    }
  },
  {
    "producerId": "5",
    "code": "PRE",
    "name": "Prélèvement",
    "additionalProducerProperties": {
      "code": "PRLV"
    }
  },
  {
    "producerId": "6",
    "code": "LCR",
    "name": "Lettre de change",
    "additionalProducerProperties": {
      "code": "LCR"
    }
  }
]
```

Par défaut, la propriété du code est transformée pour être compatible avec le format TRA. La transformation suit un modèle spécifique de correspondance:

```js
match(abbreviation)
  .with("CB", () => "CB")
  .with("CHQ", () => "CHQ")
  .with("ESP", () => "ESP")
  .with("LCR", () => "LCR")
  .with("PRLV", () => "PRE")
  .with("VIRT", () => "VIR")
  .otherwise(() => "CHQ");
```

## Interfaces

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
interface Payment {
  producerId: string;
  name: "Carte Bleue" |
        "Virement" |
        "Espèce" |
        "Chèque" |
        "Prélèvement" |
        "Lettre de change";
  code: "CB" | "CHQ" | "ESP" | "LCR" | "PRE" | "VIR";
  additionalProducerProperties: {
    code: "CB" | "VIRT" | "ESP" | "CHQ" | "PRLV" | "LCR";
  }
}
```
</details>

<details class="details custom-block">
<summary>JSON Schema</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "producerId": {
      "type": "string"
    },
    "code": {
      "type": "string",
      "nullable": true,
      "description": "Short and unique code identifier",
      "enum": [
        "CB",
        "VIRT",
        "ESP",
        "CHQ",
        "PRLV",
        "LCR",
        null
      ]
    },
    "name": {
      "type": "string",
      "nullable": true,
      "description": "Complete name (or description)",
      "enum": [
        "Carte Bleue",
        "Virement",
        "Espèce",
        "Chèque",
        "Prélèvement",
        "Lettre de change",
        null
      ]
    }
  },
  "nullable": true,
  "required": [
    "producerId"
  ]
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

## Compatibilité TRA

Mode de paiement (**MDP**). Page 21 de la spécification.

| nom de la colonne | position | chemin de la propriété MyUnisoft |
| --- | --- | --- | 
| FIXE | 1 | N/A |
| IDENTIFIANT | 4 | `MDP` |
| CODE | 7 | code |
| LIBELLE | 10 | name |
