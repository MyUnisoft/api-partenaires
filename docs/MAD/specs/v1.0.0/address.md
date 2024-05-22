---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Adresse

## Introduction

```json
{
  "address": {
    "country": "FRANCE",
    "city": "Lille",
    "fullName": "32 Rue Chemin Challet",
    "addressNumber": "32",
    "addressComplement": null,
    "locatingIndex": null,
    "postalCode": "59000",
    "streetName": "Chemin Challet",
    "streetType": "Rue"
  }
}
```

La propriété `fullName` est construite comme ceci

```
$addressNumber $locatingIndex $streetType $streetName
```

`locatingIndex` est ignoré si elle n'est pas complétée (néanmoins si un autre champ est manquant la valeur de fullName sera **null**).

## Type de voie

- Allée
- Avenue
- Boulevard
- Carrefour
- Chaussée
- Chemin
- Cité
- Corniche
- Cours
- Descente
- Domaine
- Ecart
- Esplanade
- Faubourg
- Grande Rue
- Halle
- Hameau
- Impasse
- Lieu dit
- Lotissement
- Mail
- Marché
- Montée
- Parvis
- Passage
- Place
- Plaine
- Plateau
- Promenade
- Quai
- Quartier
- Residence
- Rocade
- Rond Point
- Route
- Rue
- Ruelle
- Sente-Sentier
- Square
- Terrasse
- Terre-plein
- Villa
- Village
- Voie

## Interfaces
Ci-dessous les définitions avec TypeScript et JSON Schema.

<details class="details custom-block" open>
<summary>TypeScript</summary>


```ts
type LocatingIndex = "BIS" | "TER" | "QUATER" | "QUINQUIES" | null;

interface Address {
  addressNumber: string | null;
  addressComplement: string | null;
  postalCode: string | null;
  streetName: string | null;
  streetType?: string | null;
  locatingIndex: LocatingIndex;
  fullName?: string | null;
  city?: string | null;
  country?: string | null;
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
}
```
</details>
