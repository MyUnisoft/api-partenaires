---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Compte

## Introduction

```json
{
  "producerId": "1482937",
  "number": "6010000000",
  "name": "ACHATS MATIERES PREM",
  "correspondanceAccount": {
    "name": "Corresp 602",
    "number": "6020000000"
  }
}
```

Les comptes fournisseurs et clients (racine 40 et 41) ont une propriété `company` supplémentaire;

```json
{
  "producerId": "990",
  "number": "4041700000",
  "name": "MYUNISOFT",
  "company": {
    "name": "MYUNISOFT",
    "SIREN": "840143275",
    "CEO": "Régis SAMUEL",
    "payment": {
      "producerId": "13",
      "code": "CB"
    },
    "address": {
      "city": "SAINTE GENEVIEVE DES BOIS",
      "fullName": "3 Rue GAI SEJOUR",
      "addressNumber": "3",
      "addressComplement": null,
      "locatingIndex": null,
      "postalCode": "91700",
      "streetName": "GAI SEJOUR",
      "streetType": "Rue",
      "country": "FRANCE"
    },
    "contacts": [
      {
        "firstname": "Thomas",
        "lastname": "GENTILHOMME",
        "phoneNumber": "+33600000000",
        "role": "Développeur API",
        "email": "t.gentilhomme@myunisoft.fr"
      }
    ],
    "ape": {
      "producerId": "534",
      "code": "5829C",
      "name": "Édition de logiciels applicatifs"
    }
  }
}
```

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

## Classification des comptes

Sur MyUnisoft les comptes sont classés de `1` à `9` (Exactement comme le [plan comptable général](https://www.comptabilisation.fr/pcg-plan-comptable-general.php)).

## Auxiliarisation (compte tiers)

Les comptes ayant les racines `401` (Fournisseurs), `411` (Clients) et `421` (Personnel) seront divisés en deux parties:

![](../../images/auxiliaire.png)

1. La racine du compte, qui est toujours de **trois caractères**.
2. L'auxiliaire.

Pour identifier les comptes auxiliaires, il vous faudra donc filtrer par les racines des comptes tiers.

## Interfaces

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
type MiscellaneousAccountLanguage = "Français" | "Anglais" | "Allemand" | "Espagnol" | "Autres" | null;

interface MiscellaneousAccount {
  referent: string | null;
  language: MiscellaneousAccountLanguage;
  group: string | null;
  archived: boolean | null;
}

interface CompanyAccountContact {
  firstname: string | null;
  lastname: string | null;
  phoneNumber: string | null;
  role: string | null;
  email: string | null;
}

interface CompanyAccount {
  name: string | null;
  SIREN: string | null;
  CEO: string | null;
  payment: {
    producerId: string;
    code: string;
  } | null;
  address: Address | null;
  ape: {
    producerId: string;
    code: string;
    name: string;
  } | null;
  vat: {
    producerId: string;
    customerReferenceCode: string;
    rate: number;
  } | null;
  IBANs: string[];
  contacts: CompanyAccountContact[];
  miscellaneous: MiscellaneousAccount | null;
}

interface EmployeeAccount {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  phoneNumberBis: string | null;
  NIR: string | null;
  profession: string | null;
  payment: {
    producerId: string;
    code: string;
  } | null;
  address: Address | null;
  IBANs: string[];
  contacts: CompanyAccountContact[];
  miscellaneous: (MiscellaneousAccount & {
    doubtfulAccount: {
      producerId: string;
      name: string;
      number: string;
    } | null;
  }) | null;
}

// Account for account starting with 401, 411, 421
type Account = SimplifiedAccount & {
  closed: boolean;
  comments?: SimplifiedComment[];
} & (
  {
    counterpartAccount: SimplifiedAccount | null;
    correspondanceAccount: SimplifiedAccount | null;
  } |
  {
    counterpartAccount: SimplifiedAccount | null;
    company: CompanyAccount;
  } |
  { employee: EmployeeAccount; }
);
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

## Compatibilité TRA

Les comptes sont segmentés en plusieurs **sections distinctes** au sein du fichier TRA:

- Comptes de correspondance (**CRR**). Page 31.
- Compte général (**CGN**). Page 34.
- Compte de tiers (**CAE**). Page 36.

### Comptes de correspondance

| nom de la colonne | position | chemin de la propriété MyUnisoft |
| --- | --- | --- | 
| FIXE | 1 | N/A |
| IDENTIFIANT | 4 | `CRR` |
| CODE | 7 | correspondanceAccount.number |
| LIBELLE | 24 | correspondanceAccount.name |
| TYPE | 59 | ??? |

### Compte de tiers

Ce sont les comptes commençant avec la racine 401, 411 ou 421.

| nom de la colonne | position | chemin de la propriété MyUnisoft |
| --- | --- | --- | 
| FIXE | 1 | N/A |
| IDENTIFIANT | 4 | `CAE` |
| CODE | 7 | number |
| LIBELLE | 24 | name |
| ADRESSE1 | 267 | company.address.streetName |
| ADRESSE2 | 302 | company.address.addressComplement |
| CODEPOSTAL | 372 | company.address.postalCode |
| VILLE | 381 | company.address.city |
| TELEPHONE | 490 | company.contacts[0].phoneNumber |
| MODEREGLEMENT | 543 | company.payment.code |
| APE | 615 | company.ape.code |
| PRENOM | 620 | company.contacts[0].firstname |

### Compte général
+
Ce sont tous les autres comptes ne correspondant pas aux racines des tiers.

| nom de la colonne | position | chemin de la propriété MyUnisoft |
| --- | --- | --- | 
| FIXE | 1 | N/A |
| IDENTIFIANT | 4 | `CGN` |
| CODE | 7 | number |
| LIBELLE | 24 | name |
| CORRESP1 | 259 | correspondanceAccount.number |

