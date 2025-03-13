---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Information Associés

## Introduction

Les personnes physique seront représentées dans la réponse API en tant que `naturalPersons` et les personnes morales en tant que `legalEntity`

```json
{
  "capitalDateChange": "2020-01-01",
  "capital": 1000,
  "shareNumber": 15,
  "naturalPersons": [
    {
      "producerId": "1583",
      "accountNumber": null,
      "firstName": "Benoit",
      "lastName": "GARIAZZO",
      "effectiveDate": "2020-01-01",
      "startDate": "2020-01-01",
      "endDate": null,
      "account": null,
      "function": {
        "producerId": "5",
        "name": "Associé"
      },
      "signatoryFunction": null,
      "shares": {
        "ownership": 10,
        "usufruct": 0,
        "bareOwnership": 0
      }
    }
  ],
  "legalEntities": [
    {
      "producerId": "1501",
      "accountNumber": null,
      "effectiveDate": "2020-02-01",
      "startDate": "2020-02-01",
      "endDate": null,
      "parentAccountingFolder": {
        "producerId": "14291",
        "name": "TEST BEN 2",
        "SIRET": null
      },
      "subsidiaryAccountingFolder": {
        "producerId": "22384",
        "name": "TEST BEN 3",
        "SIRET": null
      },
      "account": null,
      "signatoryFunction": {
        "producerId": "3",
        "name": "Chef d'entreprise"
      },
      "shares": {
        "ownership": 5,
        "usufruct": 0,
        "bareOwnership": 0
      },
      "holdingPercentage": null,
      "vat": null,
      "additionnalProducerProperties": {
        "revenuPro": false,
        "taxScope": false,
        "assujettiUnique": false
      }
    }
  ]
}
```

## Interfaces

Ci-dessous la définition avec TypeScript.

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
interface Associate {
  producerId: string;

  accountNumber: string | null;
  account: SimplifiedAccount | null;

  effectiveDate: string;
  startDate: string;
  endDate: string | null;

  signatoryFunction: {
    producerId: string;
    name: string;
  } | null;
  shares: {
    ownership?: number;
    usufruct?: number;
    bareOwnership?: number;
  };
}

interface AssociatePersPhysique extends Associate {
  firstName: string;
  lastName: string;

  function: {
    producerId: string;
    name: string;
  } | null;
}

interface AssociatePersMoral extends Associate {
  parentAccountingFolder: {
    producerId: string;
    name: string;
    SIRET: string;
  };
  subsidiaryAccountingFolder: {
    producerId: string;
    name: string;
    SIRET: string;
  };
  holdingPercentage: {
    direct: number | null;
    indirect: number | null;
  } | null;
  vat: {
    startDate: string | null;
    endDate: string | null;
  } | null;
  additionnalProducerProperties: {
    revenuPro: boolean;
    taxScope: boolean;
    assujettiUnique: boolean;
  };
}

interface Associates {
  capitalDateChange: string | null;
  capital: number | null;
  shareNumber: number | null;
  naturalPersons: AssociatePersPhysique[];
  legalEntities: AssociatePersMoral[];
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
