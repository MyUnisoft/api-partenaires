<span id="readme-top"></span>

# Adresse

## Exemple
Ci-dessous un exemple d'adresse

```json
{
  "address": {
    "country": "FRANCE",
    "city": "Lille",
    "addressNumber": "32",
    "addressComplement": null,
    "locatingIndex": null,
    "postalCode": "59000",
    "streetName": "Chemin Challet",
    "streetType": "Rue"
  }
}
```

## Interfaces
Ci-dessous les définitions avec TypeScript et JSON Schema.

<details open>
<summary>TypeScript</summary>


```ts
interface Address {
  addressNumber: string | null;
  addressComplement: string | null;
  postalCode: string | null;
  streetName: string | null;
  streetType?: string | null;
  locatingIndex?: "B" | "T" | "Q" | "C" | null;
  fullname?: string | null;
  city?: string | null;
  country?: string | null;
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

---

⬅️ [Introduction MAD](../../introduction.md)
