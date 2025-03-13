---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Information Cabinet

## Introduction

```json
{
  "producerId": "371",
  "name": "Cabinet Gary",
  "siret": "55217863800132",
  "webSite": "https://bobleponge.fr",
  "logo": null,
  "address": {
    "country": null,
    "city": "EVRY",
    "addressNumber": "676",
    "locatingIndex": "QUATER",
    "addressComplement": "8ème étage",
    "postalCode": "91000",
    "streetName": "Du seigneur",
    "streetType": "Parvis",
    "fullName": "676 quater Parvis Du seigneur"
  },
  "contact": {
    "mail": "contact@gary.com",
    "tel": "0908240605",
    "fax": null
  }
}
```

## Interfaces

Ci-dessous la définition avec TypeScript et JSON Schema.

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
interface AccountingFirm {
  producerId: string;
  name: string;
  siret: string;
  webSite: string | null;
  logo: string | null;
  address: Address;
  contact: {
    mail: string | null;
    tel: string | null;
    fax: string | null;
  };
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
