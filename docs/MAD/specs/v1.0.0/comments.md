---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Commentaire

## Introduction

Les commentaires permettent de laisser des informations sur les [Comptes](./account.md) ou [Ecritures](./entries.md) temporarires ou non.

```json
[
  {
    "date": "31-12-2024",
    "comment": "votre commentaires ...",
    "user": {
      "producerId": "1",
      "firstName": "Didier",
      "lastName": "Lemarchand"
    }
  }
]
```

## Interfaces

Ci-dessous la définition avec TypeScript et JSON Schema.

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
export interface SimplifiedComment {
  date: string;
  comment: string;
  user: {
    producerId: string;
    firstName: string;
    lastName: string;
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
    "date": {
      "type": "string"
    },
    "comment": {
      "type": "string"
    },
    "user": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "producerId": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "required": [
        "producerId",
        "firstName",
        "lastName"
      ]
    },
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
