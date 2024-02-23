<span id="readme-top"></span>

# Analytique

## Exemple

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

<details open>
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

<details>
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

---

⬅️ [Introduction MAD](../../introduction.md)
