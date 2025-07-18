---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Importer des immobilisations avec un fichier .imi/.imc

Ce guide va vous accompagner pour vous permettre d'importer des immobilisations.

## API

```bash
curl --location --request POST 'https://api.myunisoft.fr/api/v1/accounting/import/fixed-assets' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Society-id: 1' \
--header 'Content-Type: application/octet-stream' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--data-binary '@/C:/Immo_2023.imi'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

Les formats acceptés sont `.imi` et `.imc`

<details class="details custom-block"><summary>Retour JSON de l'API</summary>

```json
[
    {
        "error": 0,
        "messages": {
            "path": "",
            "message": "success",
            "id": 135734
        }
    },
    {
        "error": 1,
        "messages": {
            "path": "",
            "message": "There is an error",
            "id": 0
        }
    },
]
```

</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
