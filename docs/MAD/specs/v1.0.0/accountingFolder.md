---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Dossier de production

## Introduction

Dossier de production (qui peut être aussi considéré comme une entreprise / un établissement).

```json
{
  "name": "MyUnisoft",
  "reference": "MYUN",
  "address": {
    "country": "FRANCE",
    "city": "MASSY",
    "fullName": "4 B Rue GALVANI",
    "addressNumber": "4",
    "locatingIndex": "B",
    "addressComplement": null,
    "postalCode": "91300",
    "streetName": "GALVANI",
    "streetType": "Rue"
  },
  "contact": {
    "firstName": "Régis",
    "lastName": "SAMUEL",
    "phoneNumber": "00 00 00 00 00",
    "mobilePhoneNumber": "00 00 00 00 00",
    "mail": null
  },
  "RCS": {
    "producerId": "99",
    "name": "PARIS"
  },
  "SIRET": "84014327500039",
  "capital": 10000
}
```

## Interfaces

Liste des interfaces communes:
- [Address](./address.md)

---

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
interface AccountingFolder {
  name: string;
  reference: string | null;
  address: Address;
  contact: {
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    mobilePhoneNumber: string | null;
    mail: string | null;
  }
  RCS: {
    producerId: string;
    name: string;
  }
  SIRET: string | null;
  capital: number;
}
```
</details>

<details class="details custom-block">
<summary>JSON Schema</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "reference": {
      "type": "string",
      "nullable": true
    },
    "address": {
      "additionalProperties": false,
      "type": "object",
      "properties": {
        "addressNumber": {
          "type": "string",
          "nullable": true
        },
        "addressComplement": {
          "type": "string",
          "nullable": true
        },
        "postalCode": {
          "type": "string",
          "nullable": true
        },
        "streetName": {
          "type": "string",
          "nullable": true
        },
        "locatingIndex": {
          "type": "string",
          "nullable": true
        },
        "fullname": {
          "type": "string",
          "nullable": true
        },
        "city": {
          "type": "string",
          "nullable": true
        },
        "country": {
          "type": "string",
          "nullable": true
        }
      }
    },
    "contact": {
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string",
          "nullable": true
        },
        "lastName": {
          "type": "string",
          "nullable": true
        },
        "phoneNumber": {
          "type": "string",
          "nullable": true
        },
        "mobilePhoneNumber": {
          "type": "string",
          "nullable": true
        },
        "mail": {
          "type": "string",
          "nullable": true
        }
      }
    },
    "RCS": {
      "additionalProperties": false,
      "description": "Registre du Commerce",
      "type": "object",
      "properties": {
        "producerId": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      },
      "required": [
        "producerId",
        "name"
      ]
    },
    "SIRET": {
      "type": "string",
      "nullable": true
    },
    "capital": {
      "type": "number"
    }
  },
  "required": [
    "name",
    "address",
    "contact",
    "RCS",
    "capital"
  ]
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
