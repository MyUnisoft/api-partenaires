---
prev:
  text: 💃 Introduction
  link: MAD/introduction.md
next: false
---

<span id="readme-top"></span>

# Pièce/documents joints à une écriture et/ou mouvements

## Introduction

Les écritures et mouvements peuvent avoir plusieurs types de pièce jointe;
- <kbd>URL</kbd> - Lien vers le fichier
- <kbd>File</kbd> - Chemin relatif vers un fichier (uniquement pour les archives en .zip)
- <kbd>Base64</kbd> - Fichier au format base64 (uniquement pour l'import)

> [!NOTE]
> En export le type `URL` est privilégié

```json
{
  "attachments": {
    "document.pdf": {
      "type": "URL",
      "value": "https://app.prodcomptable.myunisoft.fr/api/ged/ged/document/1-gTt2QkfLPABeb6Z/download"
    }
  }
}
```

### Téléchargement de la pièce sur la GED MyUnisoft

Le endpoint GED `/document/:id/download` permet de télécharger un document. Plusieurs en-têtes HTTP seront retournés :

- <kbd>Content-Length</kbd> : La taille du fichier en octets.
- <kbd>Content-Type</kbd> : Le type MIME du fichier.
- <kbd>[Content-Disposition](https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Content-Disposition)</kbd> : Le nom du fichier au format `attachment; filename=$filename`.

## Interfaces

<details class="details custom-block" open>
<summary>TypeScript</summary>

```ts
type Attachment = {
  type: "URL";
  value: string;
} | {
  type: "File";
  value: string;
} | {
  type: "Base64";
  value: string;
};
```
</details>

<details class="details custom-block">
<summary>JSON Schema</summary>

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "additionalProperties": false,
  "type": "object",
  "required": [],
  "oneOf": [
    {
      "type": "object",
      "properties": {
        "type": {
          "const": "URL"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "value"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "type": {
          "const": "File"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "value"
      ],
      "additionalProperties": false
    },
    {
      "type": "object",
      "properties": {
        "type": {
          "const": "Base64"
        },
        "value": {
          "type": "string"
        }
      },
      "required": [
        "type",
        "value"
      ],
      "additionalProperties": false
    }
  ]
}
```
</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
