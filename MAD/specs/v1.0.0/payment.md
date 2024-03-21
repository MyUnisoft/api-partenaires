<span id="readme-top"></span>

# Paiement

## Introduction

```json
[
  {
    "producerId": "1",
    "code": "CB",
    "name": "Carte bleue"
  },
  {
    "producerId": "2",
    "code": "VIRT",
    "name": "Virement"
  },
  {
    "producerId": "3",
    "code": "ESP",
    "name": "Espèce"
  },
  {
    "producerId": "4",
    "code": "CHQ",
    "name": "Chèque"
  },
  {
    "producerId": "5",
    "code": "PRLV",
    "name": "Prélèvement"
  },
  {
    "producerId": "6",
    "code": "LCR",
    "name": "Lettre de change"
  }
]
```

## Interfaces

<details open>
<summary>TypeScript</summary>

```ts
interface Payment {
  producerId: string;
  name: "Carte Bleue" | "Virement" | "Espèce" | "Chèque" | "Prélèvement" | "Lettre de change";
  code: "CB" | "VIRT" | "ESP" | "CHQ" | "PRLV" | "LCR";
}
```
</details>

<details>
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

---

⬅️ [Introduction MAD](../../introduction.md)
