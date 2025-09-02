---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Récupérer les comptes d'envoi EDI d'un dossier

Ce guide va vous accompagner dans la récupération de la liste des comptes EDI d'un dossier.

Celle-ci est notamment utile lors du paramétrage du dossier fiscal d'une société.

## API

La route <https://api.myunisoft.fr/api/v1/society/compte_edi> permet de récupérer la liste de ces comptes EDI ("account_edi" dans le dossier fiscal).

> [!IMPORTANT]
> 🔹 Accès cabinet : L'accès cabinet nécessitera la présence de l'en-tête HTTP `society-id` avec l'id du dossier de production.

```bash
curl --location 'https://api.myunisoft.fr/api/v1/society/compte_edi' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

<details class="details custom-block"><summary>Retour JSON de l'API</summary>

```json
[
  {
    "mail": "envoi_edi_1@jedeclare.com",
    "libelle": "Envoi EDI 1",
    "id_compte_edi": 1
  },
  {
    "mail": "envoi_edi_2@jedeclare.com",
    "libelle": "Envoi EDI 2",
    "id_compte_edi": 2
  }
]
```

</details>

<details class="details custom-block"><summary>Définition TypeScript d'un compte EDI</summary>

```ts
interface CompteEDI {
  id_compte_edi: number
  mail: string,
  libelle: string,
}
```

</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
