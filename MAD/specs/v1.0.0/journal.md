<span id="readme-top"></span>

# Journal

## Introduction

Les journaux du type <kbd>Banque</kbd> et <kbd>Caisse</kbd> possèdent un compte de contrepartie (pour les autres, la propriété `counterpartAccount` sera égale à **null**).

```json
{
  "producerId": "35902",
  "name": "JOURNAL BANQUE",
  "customerReferenceCode": "15",
  "type": "Banque",
  "counterpartAccount": {
    "producerId": "1482928",
    "number": "5120000000",
    "name": "BANQUES"
  },
  "additionalProducerProperties": {
    "type": "BQ",
    "locked": false
  }
}
```

La propriété <kbd>customerReferenceCode</kbd> permet au gestionnaire du dossier de définir un code personnalisé de trois caractères. Les journaux MyUnisoft sont numérotés `01`, `02`, `03` etc..

```json
{
  "producerId": "36504",
  "name": "ECRITURES D'INVENTAIRE",
  "customerReferenceCode": "ECI",
  "type": "OD Extracomptable",
  "counterpartAccount": null,
  "additionalProducerProperties": {
    "type": "OD_EXC",
    "locked": false
  }
}
```

### Type de journaux

| Nom / Type | Code MyUnisoft | Description | Compte de contrepartie |
| --- | --- | --- | --- |
| Achat | ACH | Comptes 41 non autorisés sur les écritures liées | ❌ |
| Vente | VTE | Comptes 40 non autorisés sur les écritures liées | ❌ |
| Banque | BQ | Les écritures liées doivent contenir un compte 51 | ✔️ |
| Caisse | CAISSE | Les écritures liées doivent contenir un compte 53 | ✔️ |
| À extourner | A_EXT | Permet de générer l'écriture inverse dans le journal Extourne | ❌ |
| Extourne | EXT | Génère l'écriture inverse saisie dans les journaux A extourner | ❌ |
| À Nouveaux | AN | Journal utilisé uniquement pour les à-nouveaux donc toujours au premier jour de l'exercice | ❌ |
| Note de Frais | NFD | - | ❌ |
| Reprise Balance | RBAL | Journal pour les dossiers en révision, permet de gérer les rapprochements avec la comptabilité dans les feuilles de travail | ❌ |
| OD | OD | - | ❌ |
| OD Audit | OD_AUDIT | - | ❌ |
| OD Paie | OD_PAIE | - | ❌ |
| OD Lettrage | OD_LET | - | ❌ |
| OD TVA | OD_DECL_FISCALE | Journal pour les OD de TVA afin d'alimenter la liasse correctement | ❌ |
| OD Extracomptable | OD_EXC | Journal pour les écritures de situation | ❌ |


## Interfaces

Liste des interfaces communes:
- [SimplifiedAccount](./simplifiedAccount.md)

---

<details open>
<summary>TypeScript</summary>

```ts
type TypeJournal = "Achat" | "Vente" | "Banque" | "Caisse" |
  "OD" | "OD Audit" | "À extourner" | "Extourne" |
  "À Nouveaux" | "OD Paie" | "OD Lettrage" | "Note de Frais" | "OD TVA" |
  "OD Extracomptable" | "Reprise Balance";

type TypeJournalInternal = "ACH" | "VTE" | "BQ" | "CAISSE" |
  "OD" | "OD_AUDIT" | "A_EXT" | "EXT" |
  "AN" | "OD_PAIE" | "OD_LET" | "NFD" | "OD_DECL_FISCALE" |
  "OD_EXC" | "RBAL";

interface Journal {
  producerId: string;
  name: string;
  customerReferenceCode: string;
  type: TypeJournal;
  counterpartAccount: SimplifiedAccount | null;
  additionalProducerProperties: {
    type: TypeJournalInternal;
    locked: boolean;
  };
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
    "name": {
      "type": "string"
    },
    "customerReferenceCode": {
      "type": "string",
      "minLength": 2,
      "maxLength": 4,
      "pattern": "^[a-zA-Z0-9]+$",
      "description": "A unique code reference (editable by the customer upon creation)"
    },
    "type": {
      "type": "string",
      "enum": [
        "Achat",
        "Vente",
        "Banque",
        "Caisse",
        "OD",
        "OD Audit",
        "OD Simulation",
        "A Extourner",
        "Extourne",
        "A Nouveaux",
        "OD Paie",
        "OD Lettrage",
        "Note de Frais",
        "OD TVA",
        "OD Extracomptable",
        "Reprise Balance"
      ]
    },
    "counterpartAccount": {
      "additionalProperties": false,
      "type": "object",
      "description": "Financial account (PCG class account starting with 5)",
      "properties": {
        "producerId": {
          "type": "string",
          "nullable": true
        },
        "name": {
          "type": "string",
          "description": "Name of bank or cash register",
          "nullable": true
        },
        "number": {
          "type": "string",
          "pattern": "^[a-zA-Z0-9]+$",
          "minLength": 6,
          "maxLength": 20,
          "examples": [
            51220000,
            53110000
          ],
          "nullable": true
        }
      },
      "nullable": true
    },
    "additionalProducerProperties": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string",
          "description": "Internal MyUnisoft journal type code",
          "enum": [
            "ACH",
            "VTE",
            "BQ",
            "CAISSE",
            "OD",
            "OD_AUDIT",
            "A_EXT",
            "EXT",
            "AN",
            "OD_PAIE",
            "OD_LET",
            "NFD",
            "OD_DECL_FISCALE",
            "OD_EXC",
            "RBAL"
          ]
        },
        "locked": {
          "type": "boolean",
          "description": "Cannot edit or add new movements on a locked journal"
        }
      },
      "nullable": true,
      "required": [
        "type",
        "locked"
      ]
    }
  },
  "required": [
    "customerReferenceCode",
    "type",
    "name",
    "producerId"
  ]
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

## Compatibilité TRA

Journaux (**JAL**). Page 38 de la spécification.

| nom de la colonne | position | chemin de la propriété MyUnisoft |
| --- | --- | --- | 
| FIXE | 1 | N/A |
| IDENTIFIANT | 4 | `JAL` |
| CODE | 7 | customerReferenceCode |
| LIBELLE | 10 | name |
| NATURE | 45 | additionalProducerProperties.type |
| COMPTE | 54 | counterpartAccount.number |

---

⬅️ [Introduction MAD](../../introduction.md)
