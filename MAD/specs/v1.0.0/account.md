<span id="readme-top"></span>

# Compte

Dans MyUnisoft, le plan comptable peut être configuré à partir du menu: `Paramètres` > `Tenue` > `Plan comptable`.

![](../../../docs/images/plan_comptable.PNG)

## Exemple

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

## Interfaces

<details open>
<summary>TypeScript</summary>

```ts
export interface CompanyAccountContact {
  firstname: string | null;
  lastname: string | null;
  phoneNumber: string | null;
  role: string | null;
  email: string | null;
}

export interface CompanyAccount {
  name: string | null;
  SIREN: string | null;
  CEO: string | null;
  payment: {
    producerId: string | null;
    code: string | null;
  } | null;
  address: Address | null;
  ape: {
    producerId: string | null;
    code: string | null;
    name: string | null;
  } | null;
  contacts: CompanyAccountContact[];
}

// Account for account starting with 40 or 41
export type AccountTiers = SimplifiedAccount & { company: CompanyAccount };

export type Account =
  SimplifiedAccount & { correspondanceAccount: SimplifiedAccount | null } |
  AccountTiers;
```
</details>

<details>
<summary>JSON Schema</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "required": [],
  "oneOf": [
    {
      "properties": {
        "producerId": {
          "type": "string",
          "nullable": true
        },
        "number": {
          "type": "string",
          "nullable": true
        },
        "name": {
          "type": "string",
          "nullable": true
        },
        "correspondanceAccount": {
          "type": "object",
          "properties": {
            "producerId": {
              "type": "string",
              "nullable": true
            },
            "number": {
              "type": "string",
              "nullable": true
            },
            "name": {
              "type": "string",
              "nullable": true
            }
          },
          "additionalProperties": false,
          "nullable": true
        }
      },
      "additionalProperties": false
    },
    {
      "properties": {
        "producerId": {
          "type": "string",
          "nullable": true
        },
        "number": {
          "type": "string",
          "nullable": true
        },
        "name": {
          "type": "string",
          "nullable": true
        },
        "company": {
          "additionalProperties": false,
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "nullable": true
            },
            "SIREN": {
              "type": "string",
              "nullable": true
            },
            "CEO": {
              "type": "string",
              "nullable": true
            },
            "payment": {
              "type": "object",
              "properties": {
                "producerId": {
                  "type": "string",
                  "nullable": true
                },
                "code": {
                  "type": "string",
                  "nullable": true
                }
              },
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
              },
              "nullable": true
            },
            "ape": {
              "type": "object",
              "properties": {
                "producerId": {
                  "type": "string",
                  "nullable": true
                },
                "code": {
                  "type": "string",
                  "nullable": true
                },
                "name": {
                  "type": "string",
                  "nullable": true
                }
              }
            },
            "contacts": {
              "type": "array",
              "items": {
                "additionalProperties": false,
                "type": "object",
                "properties": {
                  "firstname": {
                    "type": "string",
                    "nullable": true
                  },
                  "lastname": {
                    "type": "string",
                    "nullable": true
                  },
                  "phoneNumber": {
                    "type": "string",
                    "nullable": true
                  },
                  "role": {
                    "type": "string",
                    "nullable": true
                  },
                  "email": {
                    "type": "string",
                    "nullable": true
                  }
                }
              }
            }
          },
          "required": [
            "ape",
            "contacts"
          ]
        }
      },
      "required": [
        "company"
      ],
      "additionalProperties": false
    }
  ]
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>

---

⬅️ [Introduction MAD](../../introduction.md)
