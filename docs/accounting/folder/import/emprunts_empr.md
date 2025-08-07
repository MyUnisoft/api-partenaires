---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Importer des emprunts avec un fichier .empr

Ce guide va vous accompagner pour vous permettre d'importer des emprunts.

## API

```bash
curl --location --request POST 'https://api.myunisoft.fr/api/v1/accounting/import/loans' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'Society-id: 1' \
--header 'Content-Type: application/octet-stream' \
--header 'Authorization: Bearer {{API_TOKEN}}' \
--data-binary '@/C:/Emprunt_2023.empr'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

> [!NOTE]
> Le payload de la réponse est vide. En cas d'erreur le statut du code HTTP sera 400.

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
