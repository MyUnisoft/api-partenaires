---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Devise

## Introduction

Objet représentant une devise. Les codes suivent la norme [ISO 4217](https://fr.wikipedia.org/wiki/ISO_4217)

> [!IMPORTANT] 
> Pour la conversion d'un montant, MyUnisoft supporte une liste réduite de devises consultable par le biais de l'API <kbd>GET /api/v1/currencie</kbd>

```json
{
  "currency": {
    "code": "EUR"
  }
}
```

## Interfaces
Ci-dessous les définitions avec TypeScript et JSON Schema.

<details class="details custom-block" open>
<summary>TypeScript</summary>

La propriété **rate** ci-dessous correspond au taux de conversion vers la devise cible liée à l'écriture (et à ses mouvements).
```ts
interface Currency {
  code: string;
  rate?: number;
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
    "code": {
      "type": "string"
    },
    "rate": {
      "type": "number",
      "nullable": true
    }
  },
  "required": [
    "code"
  ]
}
```
</details>
