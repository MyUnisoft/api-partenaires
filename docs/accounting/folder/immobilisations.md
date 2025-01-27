---
prev:
  text: 🐤 Introduction
  link: documentation.md
next: false
---

<span id="readme-top"></span>

# Récupérer la liste des immobilisations d'une société (dossier)

Ce guide a pour objectif de vous accompagner dans l'opération de récupération de la liste des immobilisations d'une société (dossier).

Dans MyUnisoft les immobilisations sont gérées depuis : `Révision` > `Feuilles de travail` > `Immobilisations`.

![](../../images/revision_feuille_de_travail_immobilisations_menu.png)

Vous obtenez la liste des comptes d'immobilisations et le détails de chacun.

![](../../images/immobilisations.png)

## API

La route https://api.myunisoft.fr/api/v1/immo permet de récupérer la même liste mais par le biais de l'API partenaires.

```bash
curl --location 'https://app.myunisoft.fr/api/v1/immo?dossier_revision_id=12345' \
--header 'X-Third-Party-Secret: nompartenaire-L8vlKfjJ5y7zwFj2J49xo53V' \
--header 'society-id: 1' \
--header 'Authorization: Bearer {{API_TOKEN}}'
```

> [!IMPORTANT]
> Penser à préciser l'en-tête **society-id** si vous utilisez un 🔹 Accès cabinet.

L'endpoint attend un paramètre de requête (QuerryParams) `dossier_revision_id` pour pouvoir être exécuté.

| paramètre | decription |
| --- | --- |
| dossier_revision_id | L'id dossier de révision de l'exercice pour lequel vous souhaitez récupérer le tableau des immibilisations |

Pour obtenir la liste des dossiers de révision d'une société et récupérer leur id, vous pouvez consulter la page [](./dossiers_de_révision.md).

L'exécution accomplie, vous recevrez une réponse avec un `status code 200` un JSON avec **une structure similaire à l'exemple ci-dessous**

<details class="details custom-block"><summary>Retour JSON de l'API</summary>

```json
[
    {
        "id_compte": 18719458,
        "id_societe": 30210,
        "noCompte": "203000",
        "label": "FRAIS RECHERCHE & DEV",
        "comm": 0,
        "isPopulate": false,
        "arrayImmo": [],
        "value": 0,
        "previousDotation": 0,
        "currentAnnualDotation": 0,
        "EndingAnnualDotation": 0,
        "FiscalpreviousDotation": 0,
        "FiscalcurrentAnnualDotation": 0,
        "FiscalEndingAnnualDotation": 0,
        "netBookValue": 0,
        "mismatch": false,
        "m_achat_compta": 0,
        "m_amort_ant_compta": 0,
        "m_dotation_periode_compta": 0,
        "m_amortissement_fin_periode_compta": 0
    },
    {
        "id_compte": 18719459,
        "id_societe": 30210,
        "noCompte": "206000",
        "label": "DROIT AU BAIL",
        "comm": 0,
        "isPopulate": false,
        "arrayImmo": [],
        "value": 0,
        "previousDotation": 0,
        "currentAnnualDotation": 0,
        "EndingAnnualDotation": 0,
        "FiscalpreviousDotation": 0,
        "FiscalcurrentAnnualDotation": 0,
        "FiscalEndingAnnualDotation": 0,
        "netBookValue": 0,
        "mismatch": false,
        "m_achat_compta": 0,
        "m_amort_ant_compta": 0,
        "m_dotation_periode_compta": 0,
        "m_amortissement_fin_periode_compta": 0
    },
    // ...
]
```

</details>

## Définition TypeScript

Le endpoint **/immo** retourne un tableau de structure Immobilisation.

<details class="details custom-block"><summary>Détails de l'interface Immobilisation</summary>

```ts
export interface Immobilisation {
  id_compte: number,
  id_societe: number,
  noCompte: string,
  label: string,
  comm: number,
  isPopulate: boolean,
  arrayImmo: [],
  value: number,
  previousDotation: number,
  currentAnnualDotation: number,
  EndingAnnualDotation: number,
  FiscalpreviousDotation: number,
  FiscalcurrentAnnualDotation: number,
  FiscalEndingAnnualDotation: number,
  netBookValue: number,
  mismatch: boolean,
  m_achat_compta: number,
  m_amort_ant_compta: number,
  m_dotation_periode_compta: number,
  m_amortissement_fin_periode_compta: number
}
```

</details>

<p align="right">(<a href="#readme-top">retour en haut de page</a>)</p>
