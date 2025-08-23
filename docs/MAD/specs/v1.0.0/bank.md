---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Banque

## Introduction

Les banques permettent de lier des informations bancaires (IBAN, BIC) avec un [compte](./account.md) et un [journal](./journal.md).

```json
{
  "producerId": "1993",
  "RIB": "30007321451234567890043",
  "IBAN": "AL35202111090000000001234567",
  "BIC": "SGSBALTX",
  "account": {
    "producerId": "2567424",
    "number": "5120900000",
    "name": "CIC Lyonnaise de banque"
  },
  "journal": {
    "producerId": "36502",
    "name": "BANQUE CIC",
    "type": "BANQUE",
    "customerReferenceCode": "CIC"
  },
  "additionalProducerProperties": {
    "isDefault": true
  }
}
```

> [!NOTE]
> La propriété additionnelle `isDefault` permet d'identifier la banque utilisée par défaut par le dossier comptable (utile par exemple dans le cadre des paiements de la TVA).

## Interfaces

Liste des interfaces communes:
- [SimplifiedAccount](./simplifiedAccount.md)

---

Ci-dessous les définitions avec TypeScript et JSON Schema.

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
interface Bank {
  producerId: string;
  RIB: string | null;
  IBAN: string;
  BIC: string;
  account: SimplifiedAccount | null;
  journal: {
    producerId: string;
    name: string;
    type: "BANQUE";
    customerReferenceCode: string;
  };
  additionalProducerProperties: {
    isDefault: boolean;
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
      "type": "string"
    },
    "IBAN": {
      "type": "string",
      "maxLength": 200,
      "pattern": "^[a-zA-Z]{2}[0-9]{2}s?[a-zA-Z0-9]{4}s?[0-9]{4}s?[0-9]{3}([a-zA-Z0-9]s?[a-zA-Z0-9]{0,4}s?[a-zA-Z0-9]{0,4}s?[a-zA-Z0-9]{0,4}s?[a-zA-Z0-9]{0,3})$",
      "description": "International Bank Account Number"
    },
    "BIC": {
      "type": "string",
      "pattern": "^[a-z]{6}[2-9a-z][0-9a-np-z]([a-z0-9]{3}|x{3})?$",
      "description": "Bank Identifer Code (or also SWIFT code)"
    },
    "account": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "producerId": {
          "type": "string",
          "nullable": true
        },
        "number": {
          "type": "string",
          "pattern": "^[a-zA-Z0-9]+$",
          "minLength": 6,
          "maxLength": 20,
          "description": "Bank account number (example 5120000)",
          "nullable": true
        },
        "name": {
          "type": "string",
          "description": "Name of the bank",
          "nullable": true
        }
      },
      "nullable": true
    },
    "journal": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "producerId": {
          "type": "string",
          "nullable": true
        },
        "name": {
          "type": "string"
        },
        "customerReferenceCode": {
          "type": "string",
          "minLength": 2,
          "maxLength": 4,
          "pattern": "^[a-zA-Z0-9]+$",
          "description": "A code reference (unique for the accounting folder)"
        },
        "type": {
          "const": "BANQUE",
          "type": "string",
          "description": "Always a bank journal"
        }
      },
      "required": [
        "name",
        "type",
        "customerReferenceCode"
      ]
    },
    "additionalProducerProperties": {
      "type": "object",
      "properties": {
        "isDefault": {
          "type": "boolean",
          "description": "default RIB that could be automatically used internally for many operations (like TVA payments)"
        },
        "bankingIntegration": {
          "type": "boolean",
          "description": "Specifies whether bank recovery is enabled."
        }
      },
      "required": [
        "isDefault"
      ],
      "nullable": true
    }
  },
  "required": [
    "producerId",
    "IBAN",
    "BIC",
    "journal"
  ]
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

## Compatibilité TRA

RIB. Page 51 de la spécification.

| nom de la colonne | position | chemin de la propriété MyUnisoft |
| --- | --- | --- | 
| FIXE | 1 | N/A |
| IDENTIFIANT | 4 | `RIB` |
| AXULIAIRE | 7 | account.name |
| NUMERORIB | 24 | RIB |
| PRINCIPAL | 30 | additionalProducerProperties.isDefault |
| ETATBBQ | 31 | RIB |
| GUICHET | 36 | RIB |
| NUMEROCOMPTE | account.number |
| CLERIB | 52 | RIB |
| CODEBIC | 119 | BIC |
| CODEIBAN | 160 | IBAN |

> [!WARNING]
> Attention à ne pas confondre avec la section `BQC` (Compléments sur Banque) ou `BQE` (Banques)
