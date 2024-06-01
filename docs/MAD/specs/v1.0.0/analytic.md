---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Analytique

## Introduction

```json
{
  "producerId": "1385",
  "code": "IMM",
  "name": "Immeubles",
  "sections": [
    {
      "producerId": "8157",
      "code": "001",
      "name": "IMMEUBLE 1",
      "account": null,
      "additionalProducerProperties": {
        "closed": false
      }
    },
    {
      "producerId": "8164",
      "code": "002",
      "name": "IMMEUBLE 2",
      "account": null,
      "additionalProducerProperties": {
        "closed": false
      }
    },
    {
      "producerId": "8158",
      "code": "003",
      "name": "IMMEUBLE 3",
      "account": null,
      "additionalProducerProperties": {
        "closed": false
      }
    },
    {
      "producerId": "8165",
      "code": "004",
      "name": "IMMEUBLE 4",
      "account": null,
      "additionalProducerProperties": {
        "closed": false
      }
    },
    {
      "producerId": "8156",
      "code": "ATTENTE",
      "name": "Section d'attente",
      "account": null,
      "additionalProducerProperties": {
        "closed": false
      }
    }
  ],
  "additionalProducerProperties": {
    "defaultSectionId": "8156"
  }
}
```

La propriété `account` contient une ou plusieurs racines de comptes permettant d'affecter automatiquement le mouvement à 100% sur cette section. Exemple;

```
622;623;624
```

## Interfaces

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
interface AnalyticalSection {
  producerId: string;
  code: string;
  name: string;
  account: string | null;
  additionalProducerProperties: {
    closed: boolean;
  };
}

interface AnalyticalAxe {
  producerId: string;
  code: string;
  name: string;
  sections: AnalyticalSection[];
  additionalProducerProperties: {
    defaultSectionId: string;
  };
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
      "type": "string",
      "nullable": true
    },
    "code": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "sections": {
      "type": "array",
      "items": {
        "additionalProperties": false,
        "type": "object",
        "properties": {
          "producerId": {
            "type": "string"
          },
          "code": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "account": {
            "type": "string",
            "nullable": true
          },
          "additionalProducerProperties": {
            "type": "object",
            "properties": {
              "closed": {
                "type": "boolean"
              }
            },
            "required": [
              "closed"
            ]
          }
        },
        "required": [
          "producerId",
          "code",
          "name",
          "additionalProducerProperties"
        ]
      }
    },
    "additionalProducerProperties": {
      "type": "object",
      "properties": {
        "defaultSectionId": {
          "type": "string",
          "description": "Default section to use for the Axe"
        }
      },
      "nullable": true,
      "required": [
        "defaultSectionId"
      ]
    }
  },
  "required": [
    "code",
    "name",
    "sections"
  ]
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

## Compatibilité TRA

Sections analytiques (**SAT**). Page 26 de la spécification.

| nom de la colonne | position | chemin de la propriété MyUnisoft |
| --- | --- | --- | 
| FIXE | 1 | N/A |
| IDENTIFIANT | 4 | `SAT` |
| CODE | 7 | section.code |
| LIBELLE | 24 | section.name |
| AXE | 59 | axe.code |

Les sections d'attentes sont gérés par le biais des Paramètres généraux (2) (**PS2**). Page 12 de la spécification.

- SECT1ATTEND (position 113)
- SECT2ATTEND (position 130)
- SECT3ATTEND (position 147)
- SECT4ATTEND (position 164)
- SECT5ATTEND (position 181)
