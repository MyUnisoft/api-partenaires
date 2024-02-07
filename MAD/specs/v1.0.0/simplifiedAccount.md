<span id="readme-top"></span>

# Compte Simplifié

## Exemple

```json
{
  "account": {
    "producerId": "158",
    "number": "6111000000",
    "name": "S/T SECURITAS"
  }
}
```

## Interfaces
Ci-dessous les définitions avec TypeScript et JSON Schema.

<details open>
<summary>TypeScript</summary>

```ts
interface SimplifiedAccount {
  producerId: string;
  number: string | null;
  name: string | null;
}
```
</details>

<details>
<summary>JSON Schema</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
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
  "nullable": true
}
```
</details>

---

⬅️ [Introduction MAD](../../introduction.md)
